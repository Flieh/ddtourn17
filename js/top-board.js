$(document).ready(function () {
  $.getJSON('../json/test.json', function (data) {
    let sorted = _.orderBy(data, ['topBoard', 'topBoardCountry'], ['asc', 'asc'])
    let context = {test: sorted}
    $.get('../hbs/top-board.hbs', function (template) {
      var compiledTemplate = Handlebars.compile(template)
      $('#display').html(compiledTemplate(context))
    }, 'html')
  })
})

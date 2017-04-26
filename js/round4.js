$(document).ready(function () {
  $.getJSON('../json/test.json', function (data) {
    let sorted = _.orderBy(data, ['round4Board', 'round4Country'], ['asc', 'asc'])
    let context = {test: sorted}
    $.get('../hbs/round4.hbs', function (template) {
      var compiledTemplate = Handlebars.compile(template)
      $('#display').html(compiledTemplate(context))
    }, 'html')
  })
})

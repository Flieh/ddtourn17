$(document).ready(function () {
  $.getJSON('../json/test.json', function (data) {
    let sorted = _.orderBy(data, ['round1Board', 'round1Country'], ['asc', 'asc'])
    let context = {test: sorted}
    $.get('../hbs/round1.hbs', function (template) {
      var compiledTemplate = Handlebars.compile(template)
      $('#display').html(compiledTemplate(context))
    }, 'html')
  })
})

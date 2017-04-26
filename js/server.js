$(document).ready(function () {
  $.getJSON('../json/test.json', function (data) {
    let context = {test : data}
    $.get('../hbs/results.hbs', function (template) {
      var compiledTemplate = Handlebars.compile(template)
      $('#display').html(compiledTemplate(context))
    }, 'html')
  })
})

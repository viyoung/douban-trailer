module.exports = `
doctype html
html
  head
  meta(charset="UTF-8")
  meta(name="viewport", content="width=device-width, initial-scale=1.0")
  link(href="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap.min.css", rel="stylesheet")
  script(src="https://cdn.bootcss.com/jquery/3.4.1/core.js")
  script(src="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js")
  meta(http-equiv="X-UA-Compatible", content="ie=edge")
  title koa server pug
body
 .container
  .row
   .col-md-8
    h1 hi #{you}
    h1 #{me}
   .col-md-4
    p 测试pug模板引擎
`
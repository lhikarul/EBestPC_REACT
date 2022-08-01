import express from "express";
import { StaticRouter } from "react-router-dom/server";
import { Routes, Route } from "react-router-dom";
import { renderToString } from "react-dom/server";
import Home from "../components/Home";

const app = express();
app.use(express.static("dist"));

const render = (req, context) => {
  const content = renderToString(
    <StaticRouter location={req.path}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </StaticRouter>
  );

  const cssStr = context.css.length ? context.css.join("\n") : "";

  return `
        <html>
        <head>
            <title>ssr</title>
            <style>${cssStr}</style>
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="/js/index.js"></script>
        </body>
    </html>
    `;
};

app.get("/", (req, res) => {
  const context = {
    css: [],
  };
  const html = render(req, context);
  res.send(html);
});

const server = app.listen(3000);

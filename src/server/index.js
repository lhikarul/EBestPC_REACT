import express from "express";
import { StaticRouter } from "react-router-dom/server";
import { Routes, Route } from "react-router-dom";
import { renderToString } from "react-dom/server";
import Home from "../components/Home";
import cssContext from "./cssContext";

const app = express();
app.use(express.static("dist"));

const render = (req) => {
  const staticContext = {
    css: [],
  };
  const content = renderToString(
    <cssContext.Provider value={staticContext}>
      <StaticRouter location={req.path}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </StaticRouter>
    </cssContext.Provider>
  );

  const cssStr = staticContext.css.length ? staticContext.css.join("\n") : "";

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
  const html = render(req);
  res.send(html);
});

const server = app.listen(3000);

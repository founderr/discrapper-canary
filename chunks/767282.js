"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
});
var s = a("37983");
a("884691");
var n = a("414456"),
  i = a.n(n),
  l = a("77078"),
  r = a("564875"),
  o = a("701909"),
  d = a("386244"),
  u = a("253989"),
  c = a("49111"),
  E = a("782340"),
  f = a("250727"),
  m = a("259707");

function S(e) {
  let {
    user: t
  } = e;
  return (0, s.jsxs)("div", {
    className: f.infoContainer,
    children: [(0, s.jsx)("img", {
      className: f.infoPicture,
      alt: "",
      src: m
    }), (0, s.jsx)(l.Heading, {
      className: f.title,
      color: "header-primary",
      variant: "heading-xl/bold",
      children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_TITLE.format({
        n: t.tag
      })
    }), (0, s.jsx)(l.Text, {
      className: f.subtitleInfo,
      color: "header-secondary",
      variant: "text-md/medium",
      children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_1.format()
    }), (0, s.jsx)(l.Text, {
      className: f.prompt,
      color: "header-secondary",
      variant: "text-sm/medium",
      children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_2.format({
        helpdeskArticle: o.default.getArticleURL(c.HelpdeskArticles.POMELO_FAQ)
      })
    }), (0, s.jsxs)("div", {
      className: i([f.infoItem, f.infoItemSpacing]),
      children: [(0, s.jsx)("div", {
        className: f.infoIcon,
        children: (0, s.jsx)(r.default, {
          width: 20,
          height: 20
        })
      }), (0, s.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-sm/medium",
        children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_1.format()
      })]
    }), (0, s.jsxs)("div", {
      className: i([f.infoItem, f.infoItemSpacing]),
      children: [(0, s.jsx)("div", {
        className: f.infoIcon,
        children: (0, s.jsx)(d.default, {
          width: 20,
          height: 20
        })
      }), (0, s.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-sm/medium",
        children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_2.format()
      })]
    }), (0, s.jsxs)("div", {
      className: f.infoItem,
      children: [(0, s.jsx)("div", {
        className: f.infoIcon,
        children: (0, s.jsx)(u.default, {
          width: 20,
          height: 20
        })
      }), (0, s.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-sm/medium",
        children: E.default.Messages.UNIQUE_USERNAME_EXISTING_FLOW_PROMPT_ITEM_3.format({
          username: t.tag
        })
      })]
    })]
  })
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("481060"),
  a = n("782568"),
  o = n("63063"),
  l = n("981631"),
  u = n("689938"),
  d = n("54674"),
  _ = n("224275");

function c() {
  let e = r.useCallback(() => {
    (0, a.default)(o.default.getArticleURL(l.HelpdeskArticles.LAUNCHING_APPS_WITH_SHAPES_BUTTON))
  }, []);
  return (0, i.jsxs)("div", {
    className: d.container,
    children: [(0, i.jsx)("img", {
      className: d.image,
      src: _,
      alt: "",
      "aria-hidden": !0
    }), (0, i.jsxs)("div", {
      className: d.body,
      children: [(0, i.jsx)(s.Heading, {
        variant: "heading-lg/bold",
        color: "header-primary",
        children: u.default.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_TITLE
      }), (0, i.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "text-normal",
        children: u.default.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_BODY
      })]
    }), (0, i.jsx)(s.Button, {
      size: s.Button.Sizes.MEDIUM,
      "aria-label": u.default.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_TITLE,
      onClick: e,
      children: u.default.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_LEARN_MORE
    })]
  })
}
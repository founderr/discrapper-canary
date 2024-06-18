"use strict";
n.d(t, {
  Z: function() {
    return T
  }
});
var i = n(735250),
  r = n(470079),
  s = n(780384),
  o = n(481060),
  a = n(410030),
  l = n(782568),
  u = n(63063),
  _ = n(981631),
  c = n(689938),
  d = n(54674),
  E = n(983008),
  I = n(478408);

function T() {
  let e = (0, a.ZP)(),
    t = (0, s.ap)(e) ? I : E,
    n = r.useCallback(() => {
      (0, l.Z)(u.Z.getArticleURL(_.BhN.LAUNCHING_APPS_WITH_SHAPES_BUTTON))
    }, []);
  return (0, i.jsxs)("div", {
    className: d.container,
    children: [(0, i.jsx)("img", {
      className: d.image,
      src: t,
      alt: "",
      "aria-hidden": !0
    }), (0, i.jsxs)("div", {
      className: d.body,
      children: [(0, i.jsx)(o.Heading, {
        variant: "heading-lg/bold",
        color: "header-primary",
        children: c.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_TITLE
      }), (0, i.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-normal",
        children: c.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_BODY
      })]
    }), (0, i.jsx)(o.Button, {
      size: o.Button.Sizes.MEDIUM,
      "aria-label": c.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_TITLE,
      onClick: n,
      children: c.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_LEARN_MORE
    })]
  })
}
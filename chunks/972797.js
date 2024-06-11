"use strict";
t.r(A), t.d(A, {
  default: function() {
    return g
  }
}), t("47120");
var a = t("735250"),
  l = t("470079"),
  s = t("120356"),
  r = t.n(s),
  n = t("481060"),
  i = t("153124"),
  o = t("127384"),
  d = t("880008"),
  u = t("689938"),
  c = t("28351");

function g(e) {
  let {
    disabled: A = !1,
    disabledTooltip: t,
    published: s,
    submitting: g = !1,
    onClick: f
  } = e, C = (0, i.useUID)(), [h, T] = l.useState(s);
  return l.useEffect(() => {
    T(e => e || s)
  }, [s]), (0, a.jsxs)("div", {
    className: r()({
      [c.publishable]: !A && !s,
      [c.wasEverPublished]: h
    }, c.container),
    children: [(0, a.jsxs)("div", {
      className: c.explanationColumn,
      children: [(0, a.jsx)(n.Heading, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: s ? u.default.Messages.GUILD_PRODUCT_UNPUBLISH_TITLE : u.default.Messages.GUILD_PRODUCT_PUBLISH_TITLE
      }), (0, a.jsx)(n.Text, {
        id: C,
        variant: "text-sm/normal",
        color: "text-normal",
        children: s ? u.default.Messages.GUILD_PRODUCT_UNPUBLISH_DESCRIPTION : u.default.Messages.GUILD_PRODUCT_PUBLISH_DESCRIPTION
      })]
    }), (0, a.jsx)(n.Tooltip, {
      text: A ? t : void 0,
      children: e => (0, a.jsxs)(n.Button, {
        ...e,
        className: r()(c.button, {
          [c.wasEverPublished]: h,
          [c.publishButton]: !s,
          [c.disabledPublishButton]: A
        }),
        innerClassName: c.buttonContents,
        color: s ? n.Button.Colors.RED : n.Button.Colors.CUSTOM,
        "aria-describedby": C,
        "aria-disabled": A,
        grow: !1,
        onClick: A ? void 0 : f,
        submitting: g,
        children: [s ? u.default.Messages.GUILD_PRODUCT_EDIT_MODAL_UNPUBLISH_BUTTON : u.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PUBLISH_BUTTON, s ? (0, a.jsx)(d.default, {
          className: c.buttonIcon,
          color: "currentColor",
          foregroundColor: "currentColor"
        }) : (0, a.jsx)(o.default, {
          className: c.buttonIcon
        })]
      })
    })]
  })
}
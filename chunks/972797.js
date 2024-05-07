"use strict";
t.r(A), t.d(A, {
  default: function() {
    return C
  }
}), t("47120");
var a = t("735250"),
  l = t("470079"),
  s = t("120356"),
  n = t.n(s),
  r = t("481060"),
  o = t("153124"),
  i = t("127384"),
  d = t("880008"),
  u = t("689938"),
  c = t("317164");

function C(e) {
  let {
    disabled: A = !1,
    disabledTooltip: t,
    published: s,
    submitting: C = !1,
    onClick: f
  } = e, g = (0, o.useUID)(), [T, U] = l.useState(s);
  return l.useEffect(() => {
    U(e => e || s)
  }, [s]), (0, a.jsxs)("div", {
    className: n()({
      [c.publishable]: !A && !s,
      [c.wasEverPublished]: T
    }, c.container),
    children: [(0, a.jsxs)("div", {
      className: c.explanationColumn,
      children: [(0, a.jsx)(r.Heading, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: s ? u.default.Messages.GUILD_PRODUCT_UNPUBLISH_TITLE : u.default.Messages.GUILD_PRODUCT_PUBLISH_TITLE
      }), (0, a.jsx)(r.Text, {
        id: g,
        variant: "text-sm/normal",
        color: "text-normal",
        children: s ? u.default.Messages.GUILD_PRODUCT_UNPUBLISH_DESCRIPTION : u.default.Messages.GUILD_PRODUCT_PUBLISH_DESCRIPTION
      })]
    }), (0, a.jsx)(r.Tooltip, {
      text: A ? t : void 0,
      children: e => (0, a.jsxs)(r.Button, {
        ...e,
        className: n()(c.button, {
          [c.wasEverPublished]: T,
          [c.publishButton]: !s,
          [c.disabledPublishButton]: A
        }),
        innerClassName: c.buttonContents,
        color: s ? r.Button.Colors.RED : r.Button.Colors.CUSTOM,
        "aria-describedby": g,
        "aria-disabled": A,
        grow: !1,
        onClick: A ? void 0 : f,
        submitting: C,
        children: [s ? u.default.Messages.GUILD_PRODUCT_EDIT_MODAL_UNPUBLISH_BUTTON : u.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PUBLISH_BUTTON, s ? (0, a.jsx)(d.default, {
          className: c.buttonIcon,
          color: "currentColor",
          foregroundColor: "currentColor"
        }) : (0, a.jsx)(i.default, {
          className: c.buttonIcon
        })]
      })
    })]
  })
}
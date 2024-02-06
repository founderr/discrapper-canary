"use strict";
t.r(A), t.d(A, {
  default: function() {
    return f
  }
}), t("222007");
var a = t("37983"),
  n = t("884691"),
  l = t("414456"),
  r = t.n(l),
  s = t("77078"),
  o = t("476765"),
  i = t("952479"),
  d = t("867544"),
  u = t("782340"),
  c = t("972623");

function f(e) {
  let {
    disabled: A = !1,
    disabledTooltip: t,
    published: l,
    submitting: f = !1,
    onClick: C
  } = e, g = (0, o.useUID)(), [T, h] = n.useState(l);
  return n.useEffect(() => {
    h(e => e || l)
  }, [l]), (0, a.jsxs)("div", {
    className: r({
      [c.publishable]: !A && !l,
      [c.wasEverPublished]: T
    }, c.container),
    children: [(0, a.jsxs)("div", {
      className: c.explanationColumn,
      children: [(0, a.jsx)(s.Heading, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: l ? u.default.Messages.GUILD_PRODUCT_UNPUBLISH_TITLE : u.default.Messages.GUILD_PRODUCT_PUBLISH_TITLE
      }), (0, a.jsx)(s.Text, {
        id: g,
        variant: "text-sm/normal",
        color: "text-normal",
        children: l ? u.default.Messages.GUILD_PRODUCT_UNPUBLISH_DESCRIPTION : u.default.Messages.GUILD_PRODUCT_PUBLISH_DESCRIPTION
      })]
    }), (0, a.jsx)(s.Tooltip, {
      text: A ? t : void 0,
      children: e => (0, a.jsxs)(s.Button, {
        ...e,
        className: r(c.button, {
          [c.wasEverPublished]: T,
          [c.publishButton]: !l,
          [c.disabledPublishButton]: A
        }),
        innerClassName: c.buttonContents,
        color: l ? s.Button.Colors.RED : s.Button.Colors.CUSTOM,
        "aria-describedby": g,
        "aria-disabled": A,
        grow: !1,
        onClick: A ? void 0 : C,
        submitting: f,
        children: [l ? u.default.Messages.GUILD_PRODUCT_EDIT_MODAL_UNPUBLISH_BUTTON : u.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PUBLISH_BUTTON, l ? (0, a.jsx)(d.default, {
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
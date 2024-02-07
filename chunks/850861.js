"use strict";
t.r(A), t.d(A, {
  default: function() {
    return f
  }
}), t("222007");
var a = t("37983"),
  l = t("884691"),
  n = t("414456"),
  s = t.n(n),
  r = t("77078"),
  i = t("476765"),
  o = t("952479"),
  d = t("867544"),
  u = t("782340"),
  c = t("972623");

function f(e) {
  let {
    disabled: A = !1,
    disabledTooltip: t,
    published: n,
    submitting: f = !1,
    onClick: g
  } = e, C = (0, i.useUID)(), [h, T] = l.useState(n);
  return l.useEffect(() => {
    T(e => e || n)
  }, [n]), (0, a.jsxs)("div", {
    className: s({
      [c.publishable]: !A && !n,
      [c.wasEverPublished]: h
    }, c.container),
    children: [(0, a.jsxs)("div", {
      className: c.explanationColumn,
      children: [(0, a.jsx)(r.Heading, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: n ? u.default.Messages.GUILD_PRODUCT_UNPUBLISH_TITLE : u.default.Messages.GUILD_PRODUCT_PUBLISH_TITLE
      }), (0, a.jsx)(r.Text, {
        id: C,
        variant: "text-sm/normal",
        color: "text-normal",
        children: n ? u.default.Messages.GUILD_PRODUCT_UNPUBLISH_DESCRIPTION : u.default.Messages.GUILD_PRODUCT_PUBLISH_DESCRIPTION
      })]
    }), (0, a.jsx)(r.Tooltip, {
      text: A ? t : void 0,
      children: e => (0, a.jsxs)(r.Button, {
        ...e,
        className: s(c.button, {
          [c.wasEverPublished]: h,
          [c.publishButton]: !n,
          [c.disabledPublishButton]: A
        }),
        innerClassName: c.buttonContents,
        color: n ? r.Button.Colors.RED : r.Button.Colors.CUSTOM,
        "aria-describedby": C,
        "aria-disabled": A,
        grow: !1,
        onClick: A ? void 0 : g,
        submitting: f,
        children: [n ? u.default.Messages.GUILD_PRODUCT_EDIT_MODAL_UNPUBLISH_BUTTON : u.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PUBLISH_BUTTON, n ? (0, a.jsx)(d.default, {
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
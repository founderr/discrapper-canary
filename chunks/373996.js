"use strict";
t.r(A), t.d(A, {
  default: function() {
    return h
  }
});
var a = t("37983");
t("884691");
var l = t("627445"),
  n = t.n(l),
  s = t("509043"),
  r = t("77078"),
  i = t("973262"),
  o = t("191814"),
  d = t("476765"),
  u = t("422403"),
  c = t("49111"),
  f = t("782340"),
  g = t("513706");
let C = (0, d.uid)();

function h(e) {
  let {
    newRoleParams: A,
    setNewRoleParams: t
  } = e, {
    name: l,
    color: d
  } = A, h = e => t(A => (n(null != A, "newRoleParams should be defined"), {
    ...A,
    color: e
  }));
  return (0, a.jsxs)("div", {
    className: g.roleInputContainer,
    children: [(0, a.jsx)(r.TextInput, {
      autoFocus: !0,
      value: l,
      onChange: e => t(A => (n(null != A, "newRoleParams should be defined"), {
        ...A,
        name: e
      })),
      id: C,
      placeholder: f.default.Messages.GUILD_PRODUCT_SETTINGS_CREATE_ROLE_NAME_PLACEHOLDER,
      maxLength: c.ROLE_NAME_MAX_LENGTH,
      inputClassName: g.input
    }), (0, a.jsxs)("div", {
      className: g.roleColorContainer,
      children: [(0, a.jsx)(r.HiddenVisually, {
        children: f.default.Messages.GUILD_PRODUCT_SETTINGS_SELECT_ROLE_COLOR_ARIA.format({
          color: (0, s.int2hex)(d)
        })
      }), (0, a.jsx)("div", {
        className: g.roleColorPreview,
        style: {
          backgroundColor: (0, s.int2hex)(d)
        }
      }), (0, a.jsx)(o.default, {
        size: 8,
        horizontal: !0
      }), (0, a.jsx)(r.Popout, {
        renderPopout: e => (0, a.jsx)(i.CustomColorPicker, {
          ...e,
          value: d,
          onChange: h
        }),
        children: e => (0, a.jsx)(r.Clickable, {
          ...e,
          tag: "span",
          "aria-label": f.default.Messages.GUILD_PRODUCT_SETTINGS_CREATE_ROLE_SELECT_COLOR_ARIA,
          className: g.dropperIconContainer,
          children: (0, a.jsx)(u.default, {
            width: 16,
            height: 16,
            className: g.dropperIcon
          })
        })
      })]
    })]
  })
}
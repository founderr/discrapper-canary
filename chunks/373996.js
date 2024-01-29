"use strict";
t.r(A), t.d(A, {
  default: function() {
    return T
  }
});
var a = t("37983");
t("884691");
var l = t("627445"),
  n = t.n(l),
  r = t("509043"),
  s = t("77078"),
  o = t("973262"),
  i = t("191814"),
  d = t("476765"),
  u = t("422403"),
  c = t("49111"),
  f = t("782340"),
  C = t("513706");
let g = (0, d.uid)();

function T(e) {
  let {
    newRoleParams: A,
    setNewRoleParams: t
  } = e, {
    name: l,
    color: d
  } = A, T = e => t(A => (n(null != A, "newRoleParams should be defined"), {
    ...A,
    color: e
  }));
  return (0, a.jsxs)("div", {
    className: C.roleInputContainer,
    children: [(0, a.jsx)(s.TextInput, {
      autoFocus: !0,
      value: l,
      onChange: e => t(A => (n(null != A, "newRoleParams should be defined"), {
        ...A,
        name: e
      })),
      id: g,
      placeholder: f.default.Messages.GUILD_PRODUCT_SETTINGS_CREATE_ROLE_NAME_PLACEHOLDER,
      maxLength: c.ROLE_NAME_MAX_LENGTH,
      inputClassName: C.input
    }), (0, a.jsxs)("div", {
      className: C.roleColorContainer,
      children: [(0, a.jsx)(s.HiddenVisually, {
        children: f.default.Messages.GUILD_PRODUCT_SETTINGS_SELECT_ROLE_COLOR_ARIA.format({
          color: (0, r.int2hex)(d)
        })
      }), (0, a.jsx)("div", {
        className: C.roleColorPreview,
        style: {
          backgroundColor: (0, r.int2hex)(d)
        }
      }), (0, a.jsx)(i.default, {
        size: 8,
        horizontal: !0
      }), (0, a.jsx)(s.Popout, {
        renderPopout: e => (0, a.jsx)(o.CustomColorPicker, {
          ...e,
          value: d,
          onChange: T
        }),
        children: e => (0, a.jsx)(s.Clickable, {
          ...e,
          tag: "span",
          "aria-label": f.default.Messages.GUILD_PRODUCT_SETTINGS_CREATE_ROLE_SELECT_COLOR_ARIA,
          className: C.dropperIconContainer,
          children: (0, a.jsx)(u.default, {
            width: 16,
            height: 16,
            className: C.dropperIcon
          })
        })
      })]
    })]
  })
}
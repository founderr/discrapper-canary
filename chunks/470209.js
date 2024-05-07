"use strict";
t.r(A), t.d(A, {
  default: function() {
    return T
  }
});
var a = t("735250");
t("470079");
var l = t("512722"),
  s = t.n(l),
  n = t("866442"),
  r = t("481060"),
  o = t("703685"),
  i = t("682864"),
  d = t("153124"),
  u = t("214623"),
  c = t("981631"),
  C = t("689938"),
  f = t("625505");
let g = (0, d.uid)();

function T(e) {
  let {
    newRoleParams: A,
    setNewRoleParams: t
  } = e, {
    name: l,
    color: d
  } = A, T = e => t(A => (s()(null != A, "newRoleParams should be defined"), {
    ...A,
    color: e
  }));
  return (0, a.jsxs)("div", {
    className: f.roleInputContainer,
    children: [(0, a.jsx)(r.TextInput, {
      autoFocus: !0,
      value: l,
      onChange: e => t(A => (s()(null != A, "newRoleParams should be defined"), {
        ...A,
        name: e
      })),
      id: g,
      placeholder: C.default.Messages.GUILD_PRODUCT_SETTINGS_CREATE_ROLE_NAME_PLACEHOLDER,
      maxLength: c.ROLE_NAME_MAX_LENGTH,
      inputClassName: f.input
    }), (0, a.jsxs)("div", {
      className: f.roleColorContainer,
      children: [(0, a.jsx)(r.HiddenVisually, {
        children: C.default.Messages.GUILD_PRODUCT_SETTINGS_SELECT_ROLE_COLOR_ARIA.format({
          color: (0, n.int2hex)(d)
        })
      }), (0, a.jsx)("div", {
        className: f.roleColorPreview,
        style: {
          backgroundColor: (0, n.int2hex)(d)
        }
      }), (0, a.jsx)(i.default, {
        size: 8,
        horizontal: !0
      }), (0, a.jsx)(r.Popout, {
        renderPopout: e => (0, a.jsx)(o.CustomColorPicker, {
          ...e,
          value: d,
          onChange: T
        }),
        children: e => (0, a.jsx)(r.Clickable, {
          ...e,
          tag: "span",
          "aria-label": C.default.Messages.GUILD_PRODUCT_SETTINGS_CREATE_ROLE_SELECT_COLOR_ARIA,
          className: f.dropperIconContainer,
          children: (0, a.jsx)(u.default, {
            width: 16,
            height: 16,
            className: f.dropperIcon
          })
        })
      })]
    })]
  })
}
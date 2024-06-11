"use strict";
t.r(A), t.d(A, {
  default: function() {
    return f
  }
});
var a = t("735250");
t("470079");
var l = t("512722"),
  s = t.n(l),
  r = t("866442"),
  n = t("481060"),
  i = t("153124"),
  o = t("214623"),
  d = t("981631"),
  u = t("689938"),
  c = t("355876");
let g = (0, i.uid)();

function f(e) {
  let {
    newRoleParams: A,
    setNewRoleParams: t
  } = e, {
    name: l,
    color: i
  } = A, f = e => t(A => (s()(null != A, "newRoleParams should be defined"), {
    ...A,
    color: e
  }));
  return (0, a.jsxs)("div", {
    className: c.roleInputContainer,
    children: [(0, a.jsx)(n.TextInput, {
      autoFocus: !0,
      value: l,
      onChange: e => t(A => (s()(null != A, "newRoleParams should be defined"), {
        ...A,
        name: e
      })),
      id: g,
      placeholder: u.default.Messages.GUILD_PRODUCT_SETTINGS_CREATE_ROLE_NAME_PLACEHOLDER,
      maxLength: d.ROLE_NAME_MAX_LENGTH,
      inputClassName: c.input
    }), (0, a.jsxs)("div", {
      className: c.roleColorContainer,
      children: [(0, a.jsx)(n.HiddenVisually, {
        children: u.default.Messages.GUILD_PRODUCT_SETTINGS_SELECT_ROLE_COLOR_ARIA.format({
          color: (0, r.int2hex)(i)
        })
      }), (0, a.jsx)("div", {
        className: c.roleColorPreview,
        style: {
          backgroundColor: (0, r.int2hex)(i)
        }
      }), (0, a.jsx)(n.Spacer, {
        size: 8,
        horizontal: !0
      }), (0, a.jsx)(n.Popout, {
        renderPopout: e => (0, a.jsx)(n.CustomColorPicker, {
          ...e,
          value: i,
          onChange: f
        }),
        children: e => (0, a.jsx)(n.Clickable, {
          ...e,
          tag: "span",
          "aria-label": u.default.Messages.GUILD_PRODUCT_SETTINGS_CREATE_ROLE_SELECT_COLOR_ARIA,
          className: c.dropperIconContainer,
          children: (0, a.jsx)(o.default, {
            width: 16,
            height: 16,
            className: c.dropperIcon
          })
        })
      })]
    })]
  })
}
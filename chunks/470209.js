t.d(A, {
  Z: function() {
    return C
  }
});
var n = t(735250);
t(470079);
var a = t(512722),
  s = t.n(a),
  r = t(866442),
  l = t(481060),
  o = t(153124),
  i = t(981631),
  d = t(689938),
  c = t(34727);
let u = (0, o.hQ)();

function C(e) {
  let {
    newRoleParams: A,
    setNewRoleParams: t
  } = e, {
    name: a,
    color: o
  } = A, C = e => t(A => (s()(null != A, "newRoleParams should be defined"), {
    ...A,
    color: e
  }));
  return (0, n.jsxs)("div", {
    className: c.roleInputContainer,
    children: [(0, n.jsx)(l.TextInput, {
      autoFocus: !0,
      value: a,
      onChange: e => t(A => (s()(null != A, "newRoleParams should be defined"), {
        ...A,
        name: e
      })),
      id: u,
      placeholder: d.Z.Messages.GUILD_PRODUCT_SETTINGS_CREATE_ROLE_NAME_PLACEHOLDER,
      maxLength: i.VKK,
      inputClassName: c.input
    }), (0, n.jsxs)("div", {
      className: c.roleColorContainer,
      children: [(0, n.jsx)(l.HiddenVisually, {
        children: d.Z.Messages.GUILD_PRODUCT_SETTINGS_SELECT_ROLE_COLOR_ARIA.format({
          color: (0, r.Rf)(o)
        })
      }), (0, n.jsx)("div", {
        className: c.roleColorPreview,
        style: {
          backgroundColor: (0, r.Rf)(o)
        }
      }), (0, n.jsx)(l.Spacer, {
        size: 8,
        horizontal: !0
      }), (0, n.jsx)(l.Popout, {
        renderPopout: e => (0, n.jsx)(l.CustomColorPicker, {
          ...e,
          value: o,
          onChange: C
        }),
        children: e => (0, n.jsx)(l.Clickable, {
          ...e,
          tag: "span",
          "aria-label": d.Z.Messages.GUILD_PRODUCT_SETTINGS_CREATE_ROLE_SELECT_COLOR_ARIA,
          className: c.dropperIconContainer,
          children: (0, n.jsx)(l.EyeDropperIcon, {
            size: "xs",
            color: "currentColor",
            className: c.dropperIcon
          })
        })
      })]
    })]
  })
}
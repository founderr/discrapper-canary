s.d(n, {
  Z: function() {
    return o
  }
});
var l = s(735250);
s(470079);
var t = s(993409),
  i = s(901952),
  r = s(689938),
  a = s(472375);

function o(e) {
  let {
    user: n,
    hideMessageInput: s,
    hideExampleButton: o
  } = e;
  return s ? (0, l.jsx)("footer", {
    className: a.footer,
    children: !o && (0, l.jsx)(t.Z, {
      variant: "text",
      text: r.Z.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON,
      fullWidth: !0
    })
  }) : (0, l.jsx)("footer", {
    inert: "",
    className: a.footer,
    children: (0, l.jsx)(i.Z, {
      user: n
    })
  })
}
i.d(a, {
  Z: function() {
    return o
  }
});
var n = i(735250);
i(470079);
var l = i(993409),
  r = i(901952),
  t = i(689938),
  s = i(472375);

function o(e) {
  let {
    user: a,
    hideMessageInput: i,
    hideExampleButton: o
  } = e;
  return i ? (0, n.jsx)("footer", {
    className: s.footer,
    children: !o && (0, n.jsx)(l.Z, {
      variant: "text",
      text: t.Z.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON,
      fullWidth: !0
    })
  }) : (0, n.jsx)("footer", {
    inert: "",
    className: s.footer,
    children: (0, n.jsx)(r.Z, {
      user: a
    })
  })
}
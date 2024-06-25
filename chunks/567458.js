n.d(t, {
  Z: function() {
    return o
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(921944),
  a = n(689938),
  r = n(769285);

function o(e) {
  let {
    markAsDismissed: t
  } = e;
  return (0, s.jsxs)("div", {
    className: r.container,
    children: [(0, s.jsx)("div", {
      className: r.pointer
    }), (0, s.jsx)(i.Text, {
      variant: "text-sm/normal",
      className: r.content,
      children: a.Z.Messages.HUB_PRIVACY_SETTINGS_TOOLTIP
    }), (0, s.jsx)(i.Button, {
      color: i.Button.Colors.BRAND_INVERTED,
      fullWidth: !0,
      onClick: () => {
        t(l.L.AUTO)
      },
      children: a.Z.Messages.GOT_IT
    })]
  })
}
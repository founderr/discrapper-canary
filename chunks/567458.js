n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  l = n(921944),
  a = n(689938),
  r = n(769285);

function o(e) {
  let {
    markAsDismissed: t
  } = e;
  return (0, i.jsxs)("div", {
    className: r.container,
    children: [(0, i.jsx)("div", {
      className: r.pointer
    }), (0, i.jsx)(s.Text, {
      variant: "text-sm/normal",
      className: r.content,
      children: a.Z.Messages.HUB_PRIVACY_SETTINGS_TOOLTIP
    }), (0, i.jsx)(s.Button, {
      color: s.Button.Colors.BRAND_INVERTED,
      fullWidth: !0,
      onClick: () => {
        t(l.L.AUTO)
      },
      children: a.Z.Messages.GOT_IT
    })]
  })
}
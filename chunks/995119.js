t.d(n, {
  Z: function() {
    return l
  }
});
var a = t(735250);
t(470079);
var r = t(481060),
  s = t(689938),
  i = t(684201);

function l(e) {
  let {
    onClick: n
  } = e;
  return (0, a.jsxs)(r.Button, {
    className: i.randomizeButton,
    innerClassName: i.randomizeButtonInner,
    look: r.Button.Looks.OUTLINED,
    size: r.Button.Sizes.MEDIUM,
    color: r.Button.Colors.PRIMARY,
    onClick: n,
    grow: !1,
    children: [(0, a.jsx)(r.RetryIcon, {
      size: "xs"
    }), s.Z.Messages.CLAN_SETUP_RANDOMIZE_LOOK]
  })
}
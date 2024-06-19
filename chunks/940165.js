s.d(n, {
  Z: function() {
    return _
  }
});
var a = s(735250);
s(470079);
var t = s(120356),
  o = s.n(t),
  c = s(793030),
  i = s(481060),
  l = s(759198),
  r = s(552958),
  O = s(767157),
  C = s(689938),
  I = s(16561);

function _(e) {
  let {
    label: n,
    className: s,
    description: t,
    soundpack: _,
    location: M
  } = e, {
    playSound: T,
    isPlaying: d
  } = (0, r.Z)();
  return (0, a.jsxs)(i.Clickable, {
    "aria-label": C.Z.Messages.PLAY,
    className: o()(I.container, s, {
      [I.containerActive]: d
    }),
    onClick: () => {
      (0, O.Z)(_, M), T(_)
    },
    children: [(0, a.jsx)(i.CirclePlayIcon, {
      className: I.playButton,
      color: d ? i.tokens.colors.INTERACTIVE_ACTIVE : i.tokens.colors.INTERACTIVE_NORMAL
    }), (0, a.jsxs)("div", {
      className: I.textContainer,
      children: [(0, a.jsx)(l.Z, {
        variant: "text-md/medium",
        children: n
      }), (0, a.jsx)(c.x, {
        variant: "text-sm/normal",
        children: t
      })]
    })]
  })
}
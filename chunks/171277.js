"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250");
n("470079");
var l = n("120356"),
  s = n.n(l),
  i = n("442837"),
  r = n("481060"),
  o = n("607070"),
  u = n("254238"),
  d = n("689938"),
  c = n("582575");

function f(e) {
  let {
    height: t
  } = e, l = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion);
  return (0, a.jsxs)("div", {
    className: c.root,
    children: [(0, a.jsx)(r.LottieAnimation, {
      importData: () => n.e("70036").then(n.t.bind(n, "141923", 19)).then(e => {
        let {
          default: t
        } = e;
        return t
      }),
      shouldAnimate: !l,
      className: s()(c.art, {
        [c.hidden]: t <= 280
      })
    }), (0, a.jsx)(r.Heading, {
      className: c.header,
      variant: "heading-md/bold",
      children: d.default.Messages.PLAYSTATION_TRANSFERRING
    }), (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: d.default.Messages.CONSOLE_TRANSFERRING_SUBTITLE.format({
        onCancel: u.disconnectRemote
      })
    })]
  })
}
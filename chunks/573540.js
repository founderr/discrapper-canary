"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("446674"),
  r = n("77078"),
  o = n("206230"),
  u = n("700507"),
  d = n("491605"),
  c = n("782340"),
  f = n("701206");

function h(e) {
  let {
    height: t
  } = e, a = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion);
  return (0, l.jsxs)("div", {
    className: f.root,
    children: [(0, l.jsx)(d.default, {
      importData: () => n.el("210565").then(n.t.bind(n, "210565", 19)).then(e => {
        let {
          default: t
        } = e;
        return t
      }),
      shouldAnimate: !a,
      className: s(f.art, {
        [f.hidden]: t <= 280
      })
    }), (0, l.jsx)(r.Heading, {
      className: f.header,
      variant: "heading-md/bold",
      children: c.default.Messages.PLAYSTATION_TRANSFERRING
    }), (0, l.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: c.default.Messages.CONSOLE_TRANSFERRING_SUBTITLE.format({
        onCancel: u.disconnectRemote
      })
    })]
  })
}
n.d(t, {
  Z: function() {
    return u
  }
}), n(47120);
var l = n(735250);
n(470079);
var i = n(481060),
  s = n(619915),
  r = n(737592),
  a = n(561788),
  o = n(854018);

function u(e) {
  let {
    channel: t,
    onAction: n
  } = e, u = (0, s.ZP)(t), c = Array.from((0, s.uF)(u).values());
  return 0 === c.length ? null : (0, l.jsxs)(i.Scroller, {
    className: o.container,
    children: [(0, l.jsx)("div", {
      className: o.popoutHeaderContainer,
      children: (0, l.jsx)(a.Z, {
        channel: t
      })
    }), (0, l.jsx)("div", {
      className: o.headerDivider
    }), c.map((e, i) => {
      var s;
      return (0, l.jsx)(r.Z, {
        embeddedApp: e,
        presenceActivity: null !== (s = e.presenceActivity) && void 0 !== s ? s : void 0,
        channel: t,
        onAction: n
      }, i)
    })]
  })
}
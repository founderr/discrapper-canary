"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("575136"),
  i = n("563903"),
  r = n("321314"),
  u = n("950043");

function o(e) {
  let {
    channel: t,
    onAction: n
  } = e, o = (0, s.default)(t), d = (0, s.useEmbeddedAppsWithPresence)(o), c = Array.from(d.values());
  return 0 === c.length ? null : (0, l.jsxs)(a.Scroller, {
    className: u.container,
    children: [(0, l.jsx)("div", {
      className: u.popoutHeaderContainer,
      children: (0, l.jsx)(r.default, {
        channel: t
      })
    }), (0, l.jsx)("div", {
      className: u.headerDivider
    }), c.map((e, a) => {
      var s;
      return (0, l.jsx)(i.default, {
        embeddedApp: e,
        presenceActivity: null !== (s = e.presenceActivity) && void 0 !== s ? s : void 0,
        channel: t,
        onAction: n
      }, a)
    })]
  })
}
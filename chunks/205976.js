n.d(t, {
  Z: function() {
    return h
  }
});
var i = n(735250);
n(470079);
var s = n(692547),
  l = n(481060),
  a = n(436088),
  r = n(770471),
  o = n(143614),
  c = n(106674),
  u = n(787740),
  d = n(689938),
  E = n(609962);

function h() {
  let {
    canViewBroadcasts: e
  } = r.Z.useExperiment({
    location: "broadcast_list_no_track"
  }, {
    autoTrackExposure: !1
  }), t = (0, o.Z)();
  return 0 === t.length ? null : (r.Z.trackExposure({
    location: "broadcast_list"
  }), e) ? (0, i.jsxs)("div", {
    className: E.container,
    children: [(0, i.jsx)("div", {
      className: E.header,
      children: (0, i.jsxs)("div", {
        className: E.inline,
        children: [(0, i.jsx)(a.Z, {
          color: s.Z.colors.HEADER_PRIMARY.css,
          height: 20,
          width: 20
        }), (0, i.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          children: d.Z.Messages.LIVE_BROADCASTS
        }), (0, i.jsx)(u.Z, {}), (0, i.jsxs)(l.Heading, {
          variant: "heading-md/semibold",
          children: ["— ", t.length.toLocaleString()]
        })]
      })
    }), t.map(e => (0, i.jsx)(c.Z, {
      broadcast: e
    }, e.userId))]
  }) : null
}
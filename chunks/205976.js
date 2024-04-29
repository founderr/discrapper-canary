"use strict";
a.r(t), a.d(t, {
  default: function() {
    return E
  }
});
var n = a("735250");
a("470079");
var s = a("692547"),
  l = a("481060"),
  i = a("436088"),
  r = a("770471"),
  o = a("143614"),
  u = a("106674"),
  d = a("787740"),
  c = a("689938"),
  f = a("421983");

function E() {
  let {
    canViewBroadcasts: e
  } = r.default.useExperiment({
    location: "broadcast_list_no_track"
  }, {
    autoTrackExposure: !1
  }), t = (0, o.default)();
  return 0 === t.length ? null : (r.default.trackExposure({
    location: "broadcast_list"
  }), e) ? (0, n.jsxs)("div", {
    className: f.container,
    children: [(0, n.jsx)("div", {
      className: f.header,
      children: (0, n.jsxs)("div", {
        className: f.inline,
        children: [(0, n.jsx)(i.default, {
          color: s.default.colors.HEADER_PRIMARY.css,
          height: 20,
          width: 20
        }), (0, n.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          children: c.default.Messages.LIVE_BROADCASTS
        }), (0, n.jsx)(d.default, {}), (0, n.jsxs)(l.Heading, {
          variant: "heading-md/semibold",
          children: ["— ", t.length.toLocaleString()]
        })]
      })
    }), t.map(e => (0, n.jsx)(u.default, {
      broadcast: e
    }, e.userId))]
  }) : null
}
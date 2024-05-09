"use strict";
n.r(t), n.d(t, {
  SelectChannelOption: function() {
    return p
  }
});
var s = n("735250");
n("470079");
var i = n("447003"),
  u = n("687352"),
  a = n("409216"),
  l = n("632184"),
  r = n("414896"),
  c = n("823379"),
  o = n("619915"),
  g = n("128124");

function p(e) {
  let {
    channel: t,
    users: n
  } = e, p = (0, o.default)(t);
  return (0, s.jsxs)("div", {
    className: g.channelInfo,
    children: [(0, i.default)(t) ? (0, s.jsx)(r.default, {
      className: g.speakerIcon
    }) : (0, s.jsx)(l.default, {
      className: g.speakerIcon
    }), (0, s.jsx)("div", {
      className: g.channelName,
      children: t.name
    }), p.length > 0 ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("div", {
        className: g.divider
      }), (0, s.jsx)(u.default, {
        embeddedApps: p,
        className: g.channelItemActivities
      }), (0, s.jsx)("div", {
        className: g.channelActivitiesText,
        children: p.map(e => {
          var t;
          return null === (t = e.application) || void 0 === t ? void 0 : t.name
        }).filter(c.isNotNullish).join(", ")
      })]
    }) : null, (0, s.jsx)("div", {
      className: g.voiceUserContainer,
      children: (0, s.jsx)(a.default, {
        users: n,
        max: 4
      })
    })]
  })
}
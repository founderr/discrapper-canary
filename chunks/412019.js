"use strict";
n.r(t), n.d(t, {
  SelectChannelOption: function() {
    return d
  }
});
var i = n("735250");
n("470079");
var s = n("447003"),
  u = n("687352"),
  a = n("409216"),
  l = n("632184"),
  r = n("414896"),
  c = n("823379"),
  o = n("619915"),
  g = n("128124");

function d(e) {
  let {
    channel: t,
    users: n
  } = e, d = (0, o.default)(t);
  return (0, i.jsxs)("div", {
    className: g.channelInfo,
    children: [(0, s.default)(t) ? (0, i.jsx)(r.default, {
      className: g.speakerIcon
    }) : (0, i.jsx)(l.default, {
      className: g.speakerIcon
    }), (0, i.jsx)("div", {
      className: g.channelName,
      children: t.name
    }), d.length > 0 ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("div", {
        className: g.divider
      }), (0, i.jsx)(u.default, {
        embeddedApps: d,
        className: g.channelItemActivities
      }), (0, i.jsx)("div", {
        className: g.channelActivitiesText,
        children: d.map(e => {
          var t;
          return null === (t = e.application) || void 0 === t ? void 0 : t.name
        }).filter(c.isNotNullish).join(", ")
      })]
    }) : null, (0, i.jsx)("div", {
      className: g.voiceUserContainer,
      children: (0, i.jsx)(a.default, {
        users: n,
        max: 4
      })
    })]
  })
}
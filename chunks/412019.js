i.d(n, {
  O: function() {
    return d
  }
});
var a = i(735250);
i(470079);
var l = i(481060),
  t = i(447003),
  s = i(687352),
  r = i(409216),
  o = i(823379),
  u = i(619915),
  c = i(426910);

function d(e) {
  let {
    channel: n,
    users: i
  } = e, d = (0, u.ZP)(n);
  return (0, a.jsxs)("div", {
    className: c.channelInfo,
    children: [(0, t.Z)(n) ? (0, a.jsx)(l.VoiceLockIcon, {
      size: "md",
      color: "currentColor",
      className: c.speakerIcon
    }) : (0, a.jsx)(l.VoiceNormalIcon, {
      size: "md",
      color: "currentColor",
      className: c.speakerIcon
    }), (0, a.jsx)("div", {
      className: c.channelName,
      children: n.name
    }), d.length > 0 ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: c.divider
      }), (0, a.jsx)(s.Z, {
        embeddedApps: d,
        className: c.channelItemActivities
      }), (0, a.jsx)("div", {
        className: c.channelActivitiesText,
        children: d.map(e => {
          var n;
          return null === (n = e.application) || void 0 === n ? void 0 : n.name
        }).filter(o.lm).join(", ")
      })]
    }) : null, (0, a.jsx)("div", {
      className: c.voiceUserContainer,
      children: (0, a.jsx)(r.Z, {
        users: i,
        max: 4
      })
    })]
  })
}
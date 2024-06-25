n.d(t, {
  dt: function() {
    return p
  },
  eo: function() {
    return g
  }
});
var l = n(735250),
  i = n(470079),
  s = n(602623),
  r = n(934415),
  a = n(540126),
  o = n(700026),
  u = n(301342),
  c = n(327530),
  d = n(857100);
let h = i.memo(function(e) {
  let {
    guildChannels: t,
    guildChannelsVersion: n
  } = e, s = i.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
  return null == s ? null : (0, l.jsx)(u.Qo, {
    category: s
  })
});

function p(e) {
  let {
    sectionIndex: t,
    guildChannels: n,
    voiceStates: l,
    selectedChannelId: i,
    selectedVoiceChannelId: s,
    optInEnabled: r
  } = e;
  if (t === n.voiceChannelsSectionNumber) return 44;
  let {
    hasDivider: u,
    canHaveVoiceSummary: d
  } = (0, o.ie)(n, r, t), h = u ? c.QP : 0;
  if (!d || t === a.zm) return h;
  let p = n.getNamedCategoryFromSection(t);
  return null == p ? h : (0, o.V5)({
    category: p,
    selectedChannelId: i,
    selectedVoiceChannelId: s,
    voiceStates: l
  }) ? c.Vf + h : h
}

function g(e, t, n) {
  if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
  let {
    hasDivider: l,
    canHaveVoiceSummary: i
  } = (0, o.ie)(t, n, e);
  return "section-footer-".concat(e).concat(l ? "-divider" : "").concat(i ? "-voice-summary" : "")
}
t.ZP = i.memo(function(e) {
  let {
    sectionIndex: t,
    guildChannels: n,
    guildChannelsVersion: u,
    voiceStates: c,
    guildId: p,
    selectedChannelId: g,
    selectedVoiceChannelId: m,
    optInEnabled: C
  } = e, {
    hasDivider: E,
    canHaveVoiceSummary: f
  } = i.useMemo(() => (0, o.ie)(n, C, t), [n, C, t, u]), _ = i.useMemo(() => t === a.zm ? null : n.getCategoryFromSection(t), [n, t, u]), I = i.useMemo(() => null != _ && _.isCollapsed ? (0, r.c4)({
    channels: _.getChannelRecords(),
    selectedChannelId: g,
    selectedVoiceChannelId: m,
    voiceStates: c
  }) : [], [_, g, m, c]);
  if (t === n.voiceChannelsSectionNumber) return (0, l.jsx)(h, {
    guildChannels: n,
    guildChannelsVersion: u
  });
  let N = E ? (0, l.jsx)("div", {
    className: d.sectionDivider
  }) : null;
  return f && 0 !== I.length ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: d.voiceUserSummary,
      children: (0, l.jsx)(s.Z, {
        renderIcon: !0,
        users: I,
        max: 8,
        showUserPopout: !0,
        guildId: p
      })
    }), N]
  }) : N
})
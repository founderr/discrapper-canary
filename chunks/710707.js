"use strict";
n.r(t), n.d(t, {
  getChannelListSectionFooterHeight: function() {
    return h
  },
  getKeyForSectionFooter: function() {
    return C
  },
  default: function() {
    return p
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("811305"),
  i = n("404008"),
  r = n("319839"),
  u = n("175632"),
  o = n("708186"),
  d = n("249181"),
  c = n("216659");
let f = a.memo(function(e) {
  let {
    guildChannels: t,
    guildChannelsVersion: n
  } = e, s = a.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
  return null == s ? null : (0, l.jsx)(o.VoiceChannelCategoryButton, {
    category: s
  })
});

function h(e) {
  let {
    sectionIndex: t,
    guildChannels: n,
    voiceStates: l,
    selectedChannelId: a,
    selectedVoiceChannelId: s,
    optInEnabled: i
  } = e;
  if (t === n.voiceChannelsSectionNumber) return 44;
  let {
    hasDivider: o,
    canHaveVoiceSummary: c
  } = (0, u.getSectionFooterConfig)(n, i, t), f = o ? d.HEIGHT_SECTION_DIVIDER : 0;
  if (!c || t === r.SECTION_INDEX_COMMUNITY) return f;
  let h = n.getNamedCategoryFromSection(t);
  if (null == h) return f;
  let C = (0, u.isSectionFooterWithActiveVoiceChannels)({
    category: h,
    selectedChannelId: a,
    selectedVoiceChannelId: s,
    voiceStates: l
  });
  return C ? d.HEIGHT_CHANNEL + f : f
}

function C(e, t, n) {
  if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
  let {
    hasDivider: l,
    canHaveVoiceSummary: a
  } = (0, u.getSectionFooterConfig)(t, n, e);
  return "section-footer-".concat(e).concat(l ? "-divider" : "").concat(a ? "-voice-summary" : "")
}
var p = a.memo(function(e) {
  let {
    sectionIndex: t,
    guildChannels: n,
    guildChannelsVersion: o,
    voiceStates: d,
    guildId: h,
    selectedChannelId: C,
    selectedVoiceChannelId: p,
    optInEnabled: m
  } = e, {
    hasDivider: E,
    canHaveVoiceSummary: g
  } = a.useMemo(() => (0, u.getSectionFooterConfig)(n, m, t), [n, m, t, o]), I = a.useMemo(() => t === r.SECTION_INDEX_COMMUNITY ? null : n.getCategoryFromSection(t), [n, t, o]), _ = a.useMemo(() => null != I && I.isCollapsed ? (0, i.computeSummarizedVoiceUsers)({
    channels: I.getChannelRecords(),
    selectedChannelId: C,
    selectedVoiceChannelId: p,
    voiceStates: d
  }) : [], [I, C, p, d]);
  if (t === n.voiceChannelsSectionNumber) return (0, l.jsx)(f, {
    guildChannels: n,
    guildChannelsVersion: o
  });
  let S = E ? (0, l.jsx)("div", {
    className: c.sectionDivider
  }) : null;
  return g && 0 !== _.length ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: c.voiceUserSummary,
      children: (0, l.jsx)(s.default, {
        renderIcon: !0,
        users: _,
        max: 8,
        showUserPopout: !0,
        guildId: h
      })
    }), S]
  }) : S
})
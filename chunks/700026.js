n.d(t, {
  V5: function() {
    return u
  },
  ie: function() {
    return o
  }
});
var l = n(680089),
  i = n(496675),
  s = n(540126),
  r = n(443063),
  a = n(981631);

function o(e, t, n) {
  var l, i, a, o, u;
  return {
    hasDivider: (l = e, i = t, ! function(e, t) {
      if (t === s.zm) {
        let t = e.getCommunitySection().getRows();
        return 1 === t.length && t[0] === r.f.GUILD_PREMIUM_PROGRESS_BAR || e.getCommunitySection().isEmpty()
      }
      return 0 === e.getSections()[t]
    }(l, a = n) && (a === s.zm || !!i && (a === s.p2 || a !== s.wd && (a === l.recentsSectionNumber || (l.voiceChannelsSectionNumber, !1))))),
    canHaveVoiceSummary: (o = e, !((u = n) === s.zm || u === s.p2 || u === s.wd || u === o.recentsSectionNumber || u === o.voiceChannelsSectionNumber))
  }
}

function u(e) {
  let {
    category: t,
    voiceStates: n,
    selectedChannelId: s,
    selectedVoiceChannelId: r
  } = e;
  return function(e) {
    let {
      category: t,
      voiceStates: n,
      selectedChannelId: s,
      selectedVoiceChannelId: r
    } = e;
    return !0 !== l.Z.isCollapsed(t.record.id) ? [] : t.getChannelRecords().filter(e => {
      var t;
      if (!i.Z.can(a.Plq.VIEW_CHANNEL, e)) return !1;
      let l = null !== (t = n[e.id]) && void 0 !== t ? t : [];
      return e.id !== r && e.id !== s && l.length > 0
    })
  }({
    category: t,
    selectedChannelId: s,
    selectedVoiceChannelId: r,
    voiceStates: n
  }).length > 0
}
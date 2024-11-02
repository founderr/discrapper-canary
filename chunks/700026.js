n.d(t, {
    V5: function () {
        return c;
    },
    ie: function () {
        return s;
    }
});
var i = n(680089),
    l = n(496675),
    r = n(540126),
    a = n(443063),
    o = n(981631);
function s(e, t, n) {
    var i, l, o, s, c;
    return {
        hasDivider:
            ((i = e),
            (l = t),
            !(function (e, t) {
                if (t === r.wZ) {
                    let t = e.getGuildActionSection().getRows();
                    return (1 === t.length && t[0] === a.z.GUILD_PREMIUM_PROGRESS_BAR) || e.getGuildActionSection().isEmpty();
                }
                return 0 === e.getSections(!1)[t];
            })(i, (o = n)) &&
                (o === r.wZ || (!!l && (o === r.p2 || (o !== r.wd && (o === i.recentsSectionNumber || (i.voiceChannelsSectionNumber, !1))))))),
        canHaveVoiceSummary: ((s = e), !((c = n) === r.wZ || c === r.p2 || c === r.wd || c === s.recentsSectionNumber || c === s.voiceChannelsSectionNumber))
    };
}
function c(e) {
    let { category: t, voiceStates: n, selectedChannelId: r, selectedVoiceChannelId: a } = e;
    return (
        (function (e) {
            let { category: t, voiceStates: n, selectedChannelId: r, selectedVoiceChannelId: a } = e;
            return !0 !== i.Z.isCollapsed(t.record.id)
                ? []
                : t.getChannelRecords().filter((e) => {
                      var t;
                      if (!l.Z.can(o.Plq.VIEW_CHANNEL, e)) return !1;
                      let i = null !== (t = n[e.id]) && void 0 !== t ? t : [];
                      return e.id !== a && e.id !== r && i.length > 0;
                  });
        })({
            category: t,
            selectedChannelId: r,
            selectedVoiceChannelId: a,
            voiceStates: n
        }).length > 0
    );
}

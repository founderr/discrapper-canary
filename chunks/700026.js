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
    o = n(443063),
    a = n(981631);
function s(e, t, n) {
    var i, l, a, s, c;
    return {
        hasDivider:
            ((i = e),
            (l = t),
            !(function (e, t) {
                if (t === r.wZ) {
                    let t = e.getGuildActionSection().getRows();
                    return (1 === t.length && t[0] === o.z.GUILD_PREMIUM_PROGRESS_BAR) || e.getGuildActionSection().isEmpty();
                }
                return 0 === e.getSections(!1)[t];
            })(i, (a = n)) &&
                (a === r.wZ || (!!l && (a === r.p2 || (a !== r.wd && (a === i.recentsSectionNumber || (i.voiceChannelsSectionNumber, !1))))))),
        canHaveVoiceSummary: ((s = e), !((c = n) === r.wZ || c === r.p2 || c === r.wd || c === s.recentsSectionNumber || c === s.voiceChannelsSectionNumber))
    };
}
function c(e) {
    let { category: t, voiceStates: n, selectedChannelId: r, selectedVoiceChannelId: o } = e;
    return (
        (function (e) {
            let { category: t, voiceStates: n, selectedChannelId: r, selectedVoiceChannelId: o } = e;
            return !0 !== i.Z.isCollapsed(t.record.id)
                ? []
                : t.getChannelRecords().filter((e) => {
                      var t;
                      if (!l.Z.can(a.Plq.VIEW_CHANNEL, e)) return !1;
                      let i = null !== (t = n[e.id]) && void 0 !== t ? t : [];
                      return e.id !== o && e.id !== r && i.length > 0;
                  });
        })({
            category: t,
            selectedChannelId: r,
            selectedVoiceChannelId: o,
            voiceStates: n
        }).length > 0
    );
}

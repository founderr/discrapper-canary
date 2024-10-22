n.d(t, {
    V5: function () {
        return c;
    },
    ie: function () {
        return o;
    }
});
var i = n(680089),
    l = n(496675),
    a = n(540126),
    r = n(443063),
    s = n(981631);
function o(e, t, n) {
    var i, l, s, o, c;
    return {
        hasDivider:
            ((i = e),
            (l = t),
            !(function (e, t) {
                if (t === a.wZ) {
                    let t = e.getGuildActionSection().getRows();
                    return (1 === t.length && t[0] === r.z.GUILD_PREMIUM_PROGRESS_BAR) || e.getGuildActionSection().isEmpty();
                }
                return 0 === e.getSections(!1)[t];
            })(i, (s = n)) &&
                (s === a.wZ || (!!l && (s === a.p2 || (s !== a.wd && (s === i.recentsSectionNumber || (i.voiceChannelsSectionNumber, !1))))))),
        canHaveVoiceSummary: ((o = e), !((c = n) === a.wZ || c === a.p2 || c === a.wd || c === o.recentsSectionNumber || c === o.voiceChannelsSectionNumber))
    };
}
function c(e) {
    let { category: t, voiceStates: n, selectedChannelId: a, selectedVoiceChannelId: r } = e;
    return (
        (function (e) {
            let { category: t, voiceStates: n, selectedChannelId: a, selectedVoiceChannelId: r } = e;
            return !0 !== i.Z.isCollapsed(t.record.id)
                ? []
                : t.getChannelRecords().filter((e) => {
                      var t;
                      if (!l.Z.can(s.Plq.VIEW_CHANNEL, e)) return !1;
                      let i = null !== (t = n[e.id]) && void 0 !== t ? t : [];
                      return e.id !== r && e.id !== a && i.length > 0;
                  });
        })({
            category: t,
            selectedChannelId: a,
            selectedVoiceChannelId: r,
            voiceStates: n
        }).length > 0
    );
}

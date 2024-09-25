n.d(t, {
    A: function () {
        return f;
    },
    q: function () {
        return _;
    }
});
var r = n(724458);
var i = n(392711),
    a = n.n(i),
    o = n(131704),
    s = n(592125),
    l = n(580005),
    u = n(650774),
    c = n(70956),
    d = n(789662);
function _(e, t, n, r, i) {
    var a, o, l, c;
    let _ = s.Z.getMutableGuildChannelsForGuild(e.id),
        f = r.filter((e) => e.channel_id in _),
        h = null !== (a = n.filter((t) => t.guild_id === e.id)[0]) && void 0 !== a ? a : {},
        p = u.Z.getMemberCount(e.id),
        m = E('year', r, f, (e) => {
            var t;
            return Number(null !== (t = e.num_year_opens) && void 0 !== t ? t : 0);
        }),
        I = E('one month', r, f, (e) => {
            var t;
            return Number(null !== (t = e.num_month_opens) && void 0 !== t ? t : 0);
        }),
        T = E('three month', r, f, (e) => {
            var t;
            return Number(null !== (t = e.num_three_month_opens) && void 0 !== t ? t : 0);
        }),
        g = [
            I,
            T,
            E('six month', r, f, (e) => {
                var t;
                return Number(null !== (t = e.num_six_month_opens) && void 0 !== t ? t : 0);
            }),
            m
        ],
        S = 0,
        A = 0;
    f.forEach((e) => {
        var t;
        S++, (A += null !== (t = Number(e.num_messages)) && void 0 !== t ? t : 0);
    });
    let v = '\n**Pain**:\n- Everyones: '
            .concat(d.XR[null !== (o = h.everyones) && void 0 !== o ? o : 0], '\n- Messages: ')
            .concat(d.XR[null !== (l = h.messages) && void 0 !== l ? l : 0], '\n- Size: ')
            .concat(p, '\n**Remote**:\n- Channels: ')
            .concat(S, '\n- AllVisits: ')
            .concat(g.map((e) => e.totalOpensAcrossAllServers).join(' / '), '\n- GuildVisits: ')
            .concat(g.map((e) => e.guildOpens).join(' / '), '\n- Biggest Channel (abs): ')
            .concat(g.map((e) => e.biggestChannel).join(' / '), '\n- Biggest Channel (%): ')
            .concat(g.map((e) => e.biggestChannelFormatted).join(' / '), '\n- Sent Msgs: ')
            .concat(A, '\n'),
        N = T.guildOpens >= 0.02 * T.totalOpensAcrossAllServers,
        O = (null !== (c = m.guildOpens) && void 0 !== c ? c : 0) > 0;
    if (h.messages === d.XR.High) {
        if (!i) return [d.AR.UseGreyDot, N, 'UseGreyDot' + v];
        if (!N && O) return [d.AR.UseGreyDot, N, 'UseGreyDot' + v];
    }
    return [d.AR.KeepAsIs, N, 'KeepAsIs' + v];
}
function E(e, t, n, r) {
    let i = t.reduce((e, t) => e + r(t), 0),
        o = n.reduce((e, t) => e + r(t), 0),
        s = a().sortBy(n, r).reverse()[0],
        l = null == s ? 0 : r(s),
        u = ((l / o) * 100).toFixed(1);
    return {
        label: e,
        totalOpensAcrossAllServers: i,
        guildOpens: o,
        biggestChannel: l,
        biggestChannelFormatted: u
    };
}
function f(e, t) {
    var n, r;
    let i = null !== (n = t.filter((t) => t.guild_id === e.id)[0]) && void 0 !== n ? n : {},
        a = null !== (r = u.Z.getMemberCount(e.id)) && void 0 !== r ? r : 0,
        s = Date.now() - c.Z.Millis.DAYS_30,
        _ = l.Z.getFrequentlyWithoutFetchingLatest().filter((t) => t instanceof o.Sf && t.guild_id === e.id),
        E = _.filter((e) => {
            var t, n;
            let r = null !== (n = null === (t = l.Z.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
            return 0 !== r.length && r[r.length - 1] >= s;
        }),
        f = E.length >= 5,
        h = _.reduce((e, t) => {
            var n, r;
            return e + (null !== (r = null === (n = l.Z.frecencyWithoutFetchingLatest.usageHistory[t.id]) || void 0 === n ? void 0 : n.totalUses) && void 0 !== r ? r : 0);
        }, 0),
        p = '\n- **Local**:\n    - Guild Visits: '.concat(h, '\n    - Channels: ').concat(_.length, '\n    - Recent Channels: ').concat(E.length, '\n');
    return i.messages === d.XR.High || a > 1000 ? [d.AR.UseGreyDot, f, 'SuggestGreyDot' + p] : [d.AR.KeepAsIs, f, 'KeepAsIs' + p];
}

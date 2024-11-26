n.d(t, {
    A: function () {
        return _;
    },
    q: function () {
        return d;
    }
}),
    n(724458);
var r = n(392711),
    i = n.n(r),
    a = n(131704),
    s = n(592125),
    o = n(580005),
    l = n(650774),
    u = n(70956),
    c = n(789662);
function d(e, t, n, r, i) {
    var a, o, u, d;
    let _ = s.Z.getMutableGuildChannelsForGuild(e.id),
        p = r.filter((e) => e.channel_id in _),
        h = null !== (a = n.filter((t) => t.guild_id === e.id)[0]) && void 0 !== a ? a : {},
        m = l.Z.getMemberCount(e.id),
        g = f('year', r, p, (e) => {
            var t;
            return Number(null !== (t = e.num_year_opens) && void 0 !== t ? t : 0);
        }),
        E = f('one month', r, p, (e) => {
            var t;
            return Number(null !== (t = e.num_month_opens) && void 0 !== t ? t : 0);
        }),
        v = f('three month', r, p, (e) => {
            var t;
            return Number(null !== (t = e.num_three_month_opens) && void 0 !== t ? t : 0);
        }),
        I = [
            E,
            v,
            f('six month', r, p, (e) => {
                var t;
                return Number(null !== (t = e.num_six_month_opens) && void 0 !== t ? t : 0);
            }),
            g
        ],
        T = 0,
        b = 0;
    p.forEach((e) => {
        var t;
        T++, (b += null !== (t = Number(e.num_messages)) && void 0 !== t ? t : 0);
    });
    let S = '\n**Pain**:\n- Everyones: '
            .concat(c.XR[null !== (o = h.everyones) && void 0 !== o ? o : 0], '\n- Messages: ')
            .concat(c.XR[null !== (u = h.messages) && void 0 !== u ? u : 0], '\n- Size: ')
            .concat(m, '\n**Remote**:\n- Channels: ')
            .concat(T, '\n- AllVisits: ')
            .concat(I.map((e) => e.totalOpensAcrossAllServers).join(' / '), '\n- GuildVisits: ')
            .concat(I.map((e) => e.guildOpens).join(' / '), '\n- Biggest Channel (abs): ')
            .concat(I.map((e) => e.biggestChannel).join(' / '), '\n- Biggest Channel (%): ')
            .concat(I.map((e) => e.biggestChannelFormatted).join(' / '), '\n- Sent Msgs: ')
            .concat(b, '\n'),
        y = v.guildOpens >= 0.02 * v.totalOpensAcrossAllServers,
        A = (null !== (d = g.guildOpens) && void 0 !== d ? d : 0) > 0;
    if (h.messages === c.XR.High) {
        if (!i) return [c.AR.UseGreyDot, y, 'UseGreyDot' + S];
        if (!y && A) return [c.AR.UseGreyDot, y, 'UseGreyDot' + S];
    }
    return [c.AR.KeepAsIs, y, 'KeepAsIs' + S];
}
function f(e, t, n, r) {
    let a = t.reduce((e, t) => e + r(t), 0),
        s = n.reduce((e, t) => e + r(t), 0),
        o = i().sortBy(n, r).reverse()[0],
        l = null == o ? 0 : r(o),
        u = ((l / s) * 100).toFixed(1);
    return {
        label: e,
        totalOpensAcrossAllServers: a,
        guildOpens: s,
        biggestChannel: l,
        biggestChannelFormatted: u
    };
}
function _(e, t) {
    var n, r;
    let i = null !== (n = t.filter((t) => t.guild_id === e.id)[0]) && void 0 !== n ? n : {},
        s = null !== (r = l.Z.getMemberCount(e.id)) && void 0 !== r ? r : 0,
        d = Date.now() - u.Z.Millis.DAYS_30,
        f = o.Z.getFrequentlyWithoutFetchingLatest().filter((t) => t instanceof a.Sf && t.guild_id === e.id),
        _ = f.filter((e) => {
            var t, n;
            let r = null !== (n = null === (t = o.Z.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
            return 0 !== r.length && r[r.length - 1] >= d;
        }),
        p = _.length >= 5,
        h = f.reduce((e, t) => {
            var n, r;
            return e + (null !== (r = null === (n = o.Z.frecencyWithoutFetchingLatest.usageHistory[t.id]) || void 0 === n ? void 0 : n.totalUses) && void 0 !== r ? r : 0);
        }, 0),
        m = '\n- **Local**:\n    - Guild Visits: '.concat(h, '\n    - Channels: ').concat(f.length, '\n    - Recent Channels: ').concat(_.length, '\n');
    return i.messages === c.XR.High || s > 1000 ? [c.AR.UseGreyDot, p, 'SuggestGreyDot' + m] : [c.AR.KeepAsIs, p, 'KeepAsIs' + m];
}

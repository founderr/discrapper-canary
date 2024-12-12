r.d(n, {
    A: function () {
        return p;
    },
    q: function () {
        return _;
    }
});
var i = r(724458);
var a = r(392711),
    s = r.n(a),
    o = r(131704),
    l = r(592125),
    u = r(580005),
    c = r(650774),
    d = r(70956),
    f = r(789662);
function _(e, n, r, i, a) {
    var s, o, u, d;
    let _ = l.Z.getMutableGuildChannelsForGuild(e.id),
        p = i.filter((e) => e.channel_id in _),
        m = null !== (s = r.filter((n) => n.guild_id === e.id)[0]) && void 0 !== s ? s : {},
        g = c.Z.getMemberCount(e.id),
        E = h('year', i, p, (e) => {
            var n;
            return Number(null !== (n = e.num_year_opens) && void 0 !== n ? n : 0);
        }),
        v = h('one month', i, p, (e) => {
            var n;
            return Number(null !== (n = e.num_month_opens) && void 0 !== n ? n : 0);
        }),
        I = h('three month', i, p, (e) => {
            var n;
            return Number(null !== (n = e.num_three_month_opens) && void 0 !== n ? n : 0);
        }),
        T = [
            v,
            I,
            h('six month', i, p, (e) => {
                var n;
                return Number(null !== (n = e.num_six_month_opens) && void 0 !== n ? n : 0);
            }),
            E
        ],
        b = 0,
        y = 0;
    p.forEach((e) => {
        var n;
        b++, (y += null !== (n = Number(e.num_messages)) && void 0 !== n ? n : 0);
    });
    let S = '\n**Pain**:\n- Everyones: '
            .concat(f.XR[null !== (o = m.everyones) && void 0 !== o ? o : 0], '\n- Messages: ')
            .concat(f.XR[null !== (u = m.messages) && void 0 !== u ? u : 0], '\n- Size: ')
            .concat(g, '\n**Remote**:\n- Channels: ')
            .concat(b, '\n- AllVisits: ')
            .concat(T.map((e) => e.totalOpensAcrossAllServers).join(' / '), '\n- GuildVisits: ')
            .concat(T.map((e) => e.guildOpens).join(' / '), '\n- Biggest Channel (abs): ')
            .concat(T.map((e) => e.biggestChannel).join(' / '), '\n- Biggest Channel (%): ')
            .concat(T.map((e) => e.biggestChannelFormatted).join(' / '), '\n- Sent Msgs: ')
            .concat(y, '\n'),
        A = I.guildOpens >= 0.02 * I.totalOpensAcrossAllServers,
        N = (null !== (d = E.guildOpens) && void 0 !== d ? d : 0) > 0;
    if (m.messages === f.XR.High) {
        if (!a) return [f.AR.UseGreyDot, A, 'UseGreyDot' + S];
        if (!A && N) return [f.AR.UseGreyDot, A, 'UseGreyDot' + S];
    }
    return [f.AR.KeepAsIs, A, 'KeepAsIs' + S];
}
function h(e, n, r, i) {
    let a = n.reduce((e, n) => e + i(n), 0),
        o = r.reduce((e, n) => e + i(n), 0),
        l = s().sortBy(r, i).reverse()[0],
        u = null == l ? 0 : i(l),
        c = ((u / o) * 100).toFixed(1);
    return {
        label: e,
        totalOpensAcrossAllServers: a,
        guildOpens: o,
        biggestChannel: u,
        biggestChannelFormatted: c
    };
}
function p(e, n) {
    var r, i;
    let a = null !== (r = n.filter((n) => n.guild_id === e.id)[0]) && void 0 !== r ? r : {},
        s = null !== (i = c.Z.getMemberCount(e.id)) && void 0 !== i ? i : 0,
        l = Date.now() - d.Z.Millis.DAYS_30,
        _ = u.Z.getFrequentlyWithoutFetchingLatest().filter((n) => n instanceof o.Sf && n.guild_id === e.id),
        h = _.filter((e) => {
            var n, r;
            let i = null !== (r = null === (n = u.Z.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === n ? void 0 : n.recentUses) && void 0 !== r ? r : [];
            return 0 !== i.length && i[i.length - 1] >= l;
        }),
        p = h.length >= 5,
        m = _.reduce((e, n) => {
            var r, i;
            return e + (null !== (i = null === (r = u.Z.frecencyWithoutFetchingLatest.usageHistory[n.id]) || void 0 === r ? void 0 : r.totalUses) && void 0 !== i ? i : 0);
        }, 0),
        g = '\n- **Local**:\n    - Guild Visits: '.concat(m, '\n    - Channels: ').concat(_.length, '\n    - Recent Channels: ').concat(h.length, '\n');
    return a.messages === f.XR.High || s > 1000 ? [f.AR.UseGreyDot, p, 'SuggestGreyDot' + g] : [f.AR.KeepAsIs, p, 'KeepAsIs' + g];
}

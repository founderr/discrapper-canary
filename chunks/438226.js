n.d(t, {
    HV: function () {
        return s;
    },
    IS: function () {
        return r;
    },
    VY: function () {
        return u;
    }
}),
    n(627494),
    n(757143),
    n(201133);
var i = n(5192),
    l = n(561308),
    a = n(388032);
let r = (e, t) =>
        a.intl.formatToPlainString(a.t.tAwI1t, {
            username: t.username,
            activity: e.extra.game_name
        }),
    o = (e) => {
        let t = (0, l.kr)(e);
        return (0, l.Ol)(e) ? (t ? a.t.MHO1AQ : a.t.i7AOz8) : t ? a.t.lLPKY2 : a.t['bES+y8'];
    },
    s = (e, t, n) => {
        let l = o(e),
            r = i.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
            s = e.extra.game_name;
        return a.intl
            .formatToMarkdownString(l, {
                gameName: s,
                userName: r
            })
            .replaceAll('*', '');
    },
    u = (e) => {
        let { entry: t, channel: n, users: r, countOthers: o } = e,
            s = (0, l.kr)(t) ? a.t.QaUWPT : a.t['7j/5mp'];
        return a.intl
            .formatToMarkdownString(s, {
                gameName: t.extra.game_name,
                user1: i.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[0]),
                user2: i.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[1]),
                countOthers: o
            })
            .replaceAll('*', '');
    };

n.d(t, {
    Fo: function () {
        return h;
    },
    KY: function () {
        return C;
    },
    Uo: function () {
        return M;
    },
    fU: function () {
        return v;
    },
    qw: function () {
        return b;
    },
    tn: function () {
        return m;
    }
}),
    n(733860);
var r = n(192379),
    l = n(658722),
    i = n.n(l),
    s = n(913527),
    a = n.n(s),
    o = n(442837),
    E = n(704215),
    u = n(45114),
    c = n(740504),
    d = n(605236),
    _ = n(931261),
    A = n(540126),
    T = n(671098),
    I = n(703656),
    N = n(592125),
    g = n(324067),
    R = n(306680),
    O = n(709054),
    f = n(981631),
    S = n(176505),
    D = n(443063),
    U = n(490897),
    L = n(388032);
function p(e, t) {
    e.index = t;
}
function h(e, t, n, l) {
    l = l.toLowerCase();
    let s = (0, _.g)(e),
        a = r.useCallback((e, t) => !(s && e.channel.hasFlag(S.zZ.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== f.d4z.GUILD_DIRECTORY && (0 === t.length || i()(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [s]);
    return r.useMemo(() => {
        let e = {
            null: [],
            _categories: []
        };
        return (
            n[f.d4z.GUILD_CATEGORY].forEach((n) => {
                let { channel: r } = n;
                'null' === r.id && (e.null = t.null.filter((e) => a(e, l))), (e[r.id] = t[r.id].filter((e) => a(e, l)));
            }),
            (e._categories = t._categories.filter((t) => 'null' === t.channel.id || 0 === l.length || e[t.channel.id].length > 0)),
            (0, c.Z)(e._categories, e).forEach(p),
            e
        );
    }, [t, n, a, l]);
}
function C(e) {
    let t = e.getSections(!1);
    if (t[A.wZ] > 0)
        switch (e.getGuildActionSection().getRow(0)) {
            case D.z.GUILD_HOME:
                return S.oC.GUILD_HOME;
            case D.z.GUILD_ROLE_SUBSCRIPTIONS:
                return S.oC.ROLE_SUBSCRIPTIONS;
            case D.z.GUILD_MEMBER_APPLICATIONS:
                return S.oC.MEMBER_APPLICATIONS;
        }
    for (let r = A.wd; r < e.voiceChannelsSectionNumber; r++)
        if (t[r] > 0) {
            var n;
            let t = null === (n = e.getChannelFromSectionRow(r, 0)) || void 0 === n ? void 0 : n.channel;
            if (null != t) return t.id;
        }
    return null;
}
function M(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    (0, T.n)(e, t),
        (0, u.y5)(
            t.map((e) => ({
                channelId: e,
                readStateType: U.W.CHANNEL,
                messageId: R.ZP.lastMessageId(e)
            }))
        ),
        null != n && (0, I.uL)(f.Z5c.CHANNEL(e, n));
}
function m(e, t, n, r) {
    let l = (0, d.wE)(E.z.CHANNEL_BROWSER_NUX),
        i = (0, o.cj)(
            [N.Z],
            () => {
                let t = {},
                    n = N.Z.getMutableGuildChannelsForGuild(e);
                for (let e in n) {
                    let { parent_id: l } = n[e];
                    if (null != l) {
                        var r;
                        t[l] = (null !== (r = t[l]) && void 0 !== r ? r : 0) + 1;
                    }
                }
                return t;
            },
            [e]
        ),
        s = t._categories.map((e) => {
            let r = t[e.channel.id];
            return {
                rowCount: 'null' !== e.channel.id && 0 === i[e.channel.id] ? 1 : r.length,
                rowHeight: 0 === r.length ? 0 : n
            };
        });
    return (
        !l &&
            null != r &&
            s.unshift({
                rowCount: 1,
                rowHeight: r
            }),
        s
    );
}
function v(e) {
    var t, n;
    let r = (0, o.e7)([g.Z], () => g.Z.getCategories(e)),
        l = r._categories.length,
        i = r._categories[r._categories.length - 1];
    if (null == i) return 0;
    let s = r[null !== (n = null === (t = i.channel) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : 'null'];
    return null == s ? 0 : 0 === s.length ? i.index + 2 - l : s[s.length - 1].index + 2 - l;
}
function b(e) {
    var t;
    return L.intl.formatToPlainString(L.t['8N0BHR'], { timeAgo: a()(O.default.extractTimestamp(null !== (t = R.ZP.lastMessageId(e)) && void 0 !== t ? t : e)).fromNow() });
}

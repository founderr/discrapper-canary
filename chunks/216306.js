E.d(_, {
    Fo: function () {
        return C;
    },
    KY: function () {
        return f;
    },
    Uo: function () {
        return p;
    },
    fU: function () {
        return m;
    },
    qw: function () {
        return P;
    },
    tn: function () {
        return h;
    }
}),
    E(733860);
var s = E(192379),
    n = E(658722),
    t = E.n(n),
    r = E(913527),
    T = E.n(r),
    a = E(442837),
    I = E(704215),
    l = E(45114),
    o = E(740504),
    A = E(605236),
    i = E(931261),
    N = E(540126),
    D = E(671098),
    L = E(703656),
    S = E(592125),
    u = E(324067),
    c = E(306680),
    O = E(709054),
    U = E(981631),
    G = E(176505),
    d = E(443063),
    M = E(490897),
    R = E(689938);
function g(e, _) {
    e.index = _;
}
function C(e, _, E, n) {
    n = n.toLowerCase();
    let r = (0, i.g)(e),
        T = s.useCallback((e, _) => !(r && e.channel.hasFlag(G.zZ.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== U.d4z.GUILD_DIRECTORY && (0 === _.length || t()(_, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(_)), [r]);
    return s.useMemo(() => {
        let e = {
            null: [],
            _categories: []
        };
        return (
            E[U.d4z.GUILD_CATEGORY].forEach((E) => {
                let { channel: s } = E;
                'null' === s.id && (e.null = _.null.filter((e) => T(e, n))), (e[s.id] = _[s.id].filter((e) => T(e, n)));
            }),
            (e._categories = _._categories.filter((_) => 'null' === _.channel.id || 0 === n.length || e[_.channel.id].length > 0)),
            (0, o.Z)(e._categories, e).forEach(g),
            e
        );
    }, [_, E, T, n]);
}
function f(e) {
    let _ = e.getSections(!1);
    if (_[N.wZ] > 0)
        switch (e.getGuildActionSection().getRow(0)) {
            case d.z.GUILD_HOME:
                return G.oC.GUILD_HOME;
            case d.z.GUILD_ROLE_SUBSCRIPTIONS:
                return G.oC.ROLE_SUBSCRIPTIONS;
            case d.z.GUILD_MEMBER_APPLICATIONS:
                return G.oC.MEMBER_APPLICATIONS;
        }
    for (let s = N.wd; s < e.voiceChannelsSectionNumber; s++)
        if (_[s] > 0) {
            var E;
            let _ = null === (E = e.getChannelFromSectionRow(s, 0)) || void 0 === E ? void 0 : E.channel;
            if (null != _) return _.id;
        }
    return null;
}
function p(e, _) {
    let E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    (0, D.n)(e, _),
        (0, l.y5)(
            _.map((e) => ({
                channelId: e,
                readStateType: M.W.CHANNEL,
                messageId: c.ZP.lastMessageId(e)
            }))
        ),
        null != E && (0, L.uL)(U.Z5c.CHANNEL(e, E));
}
function h(e, _, E, s) {
    let n = (0, A.wE)(I.z.CHANNEL_BROWSER_NUX),
        t = (0, a.cj)(
            [S.Z],
            () => {
                let _ = {},
                    E = S.Z.getMutableGuildChannelsForGuild(e);
                for (let e in E) {
                    let { parent_id: n } = E[e];
                    if (null != n) {
                        var s;
                        _[n] = (null !== (s = _[n]) && void 0 !== s ? s : 0) + 1;
                    }
                }
                return _;
            },
            [e]
        ),
        r = _._categories.map((e) => {
            let s = _[e.channel.id];
            return {
                rowCount: 'null' !== e.channel.id && 0 === t[e.channel.id] ? 1 : s.length,
                rowHeight: 0 === s.length ? 0 : E
            };
        });
    return (
        !n &&
            null != s &&
            r.unshift({
                rowCount: 1,
                rowHeight: s
            }),
        r
    );
}
function m(e) {
    var _, E;
    let s = (0, a.e7)([u.Z], () => u.Z.getCategories(e)),
        n = s._categories.length,
        t = s._categories[s._categories.length - 1];
    if (null == t) return 0;
    let r = s[null !== (E = null === (_ = t.channel) || void 0 === _ ? void 0 : _.id) && void 0 !== E ? E : 'null'];
    return null == r ? 0 : 0 === r.length ? t.index + 2 - n : r[r.length - 1].index + 2 - n;
}
function P(e) {
    var _;
    return R.Z.Messages.CHANNEL_BROWSER_ACTIVE_TEXT.format({ timeAgo: T()(O.default.extractTimestamp(null !== (_ = c.ZP.lastMessageId(e)) && void 0 !== _ ? _ : e)).fromNow() });
}

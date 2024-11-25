n.d(t, {
    Dq: function () {
        return x;
    },
    hf: function () {
        return C;
    },
    li: function () {
        return S;
    },
    oP: function () {
        return g;
    },
    rJ: function () {
        return p;
    },
    rm: function () {
        return _;
    },
    ul: function () {
        return T;
    }
}),
    n(653041),
    n(47120);
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(392711),
    a = n.n(l),
    o = n(481060),
    c = n(930153),
    d = n(275759),
    u = n(856651),
    m = n(388032),
    h = n(119028);
function g(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        s = [],
        r = Number(null !== (t = e[u.PC.REDDIT_TOTAL_KARMA]) && void 0 !== t ? t : -1),
        l = '1' === e[u.PC.REDDIT_GOLD],
        a = '1' === e[u.PC.REDDIT_MOD];
    return (
        r > -1 &&
            s.push(
                (0, i.jsx)(
                    E,
                    {
                        className: n,
                        count: r,
                        label: m.t.SbCNo6
                    },
                    u.PC.REDDIT_TOTAL_KARMA
                )
            ),
        l &&
            s.push(
                (0, i.jsx)(
                    N,
                    {
                        className: n,
                        label: m.intl.string(m.t['06rDHR'])
                    },
                    u.PC.REDDIT_GOLD
                )
            ),
        a &&
            s.push(
                (0, i.jsx)(
                    N,
                    {
                        className: n,
                        label: m.intl.string(m.t.oWM95O)
                    },
                    u.PC.REDDIT_MOD
                )
            ),
        s
    );
}
function p(e) {
    var t, n;
    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        r = [],
        l = Number(null !== (t = e[u.PC.TWITTER_STATUSES_COUNT]) && void 0 !== t ? t : -1),
        a = Number(null !== (n = e[u.PC.TWITTER_FOLLOWERS_COUNT]) && void 0 !== n ? n : -1);
    return (
        l > -1 &&
            r.push(
                (0, i.jsx)(
                    E,
                    {
                        className: s,
                        count: l,
                        label: m.t.llwqqa
                    },
                    u.PC.TWITTER_STATUSES_COUNT
                )
            ),
        a > -1 &&
            r.push(
                (0, i.jsx)(
                    E,
                    {
                        className: s,
                        count: a,
                        label: m.t.LMNOUV
                    },
                    u.PC.TWITTER_FOLLOWERS_COUNT
                )
            ),
        r
    );
}
function x(e) {
    var t, s, r;
    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        a = [],
        o = Number(null !== (t = e[u.PC.STEAM_GAME_COUNT]) && void 0 !== t ? t : -1),
        c = Number(null !== (s = e[u.PC.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== s ? s : -1),
        d = Number(null !== (r = e[u.PC.STEAM_ITEM_COUNT_TF2]) && void 0 !== r ? r : -1);
    return (
        o > -1 &&
            a.push(
                (0, i.jsx)(
                    E,
                    {
                        className: l,
                        count: o,
                        label: m.t.ppXMu7
                    },
                    u.PC.STEAM_GAME_COUNT
                )
            ),
        c > -1 &&
            a.push(
                (0, i.jsx)(
                    I,
                    {
                        className: l,
                        label: m.intl.format(m.t['Y88M5+'], { count: c }),
                        imageSrc: n(738535),
                        imageAlt: m.intl.string(m.t.HKUEZm)
                    },
                    u.PC.STEAM_ITEM_COUNT_DOTA2
                )
            ),
        d > -1 &&
            a.push(
                (0, i.jsx)(
                    I,
                    {
                        className: l,
                        label: m.intl.format(m.t['Y88M5+'], { count: d }),
                        imageSrc: n(80730),
                        imageAlt: m.intl.string(m.t.C8p1Sk)
                    },
                    u.PC.STEAM_ITEM_COUNT_TF2
                )
            ),
        a
    );
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = [];
    return (
        '1' === e[u.PC.PAYPAL_VERIFIED] &&
            n.push(
                (0, i.jsx)(
                    N,
                    {
                        className: r()(t, h.paypalVerifiedTag),
                        label: m.intl.string(m.t.IhXLy8)
                    },
                    u.PC.PAYPAL_VERIFIED
                )
            ),
        n
    );
}
function T(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        s = [],
        r = Number(null !== (t = e[u.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) && void 0 !== t ? t : -1),
        l = '1' === e[u.PC.EBAY_TOP_RATED_SELLER];
    return (
        r > 0 &&
            s.push(
                (0, i.jsx)(
                    E,
                    {
                        className: n,
                        count: r,
                        label: m.t.YmL22d,
                        percent: !0
                    },
                    u.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE
                )
            ),
        l &&
            s.push(
                (0, i.jsx)(
                    N,
                    {
                        className: n,
                        label: m.intl.string(m.t.TEEYwc)
                    },
                    u.PC.EBAY_TOP_RATED_SELLER
                )
            ),
        s
    );
}
function C(e) {
    var t, n, s;
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        l = [],
        a = '1' === e[u.PC.TIKTOK_VERIFIED],
        o = Number(null !== (t = e[u.PC.TIKTOK_FOLLOWER_COUNT]) && void 0 !== t ? t : -1),
        c = Number(null !== (n = e[u.PC.TIKTOK_FOLLOWING_COUNT]) && void 0 !== n ? n : -1),
        d = Number(null !== (s = e[u.PC.TIKTOK_LIKES_COUNT]) && void 0 !== s ? s : -1);
    return (
        o > -1 &&
            l.push(
                (0, i.jsx)(
                    E,
                    {
                        className: r,
                        count: o,
                        label: m.t['Mpm/BQ']
                    },
                    u.PC.TIKTOK_FOLLOWER_COUNT
                )
            ),
        c > -1 &&
            l.push(
                (0, i.jsx)(
                    E,
                    {
                        className: r,
                        count: c,
                        label: m.t.ftf12t
                    },
                    u.PC.TIKTOK_FOLLOWING_COUNT
                )
            ),
        d > -1 &&
            l.push(
                (0, i.jsx)(
                    E,
                    {
                        className: r,
                        count: d,
                        label: m.t.Qwhe5u
                    },
                    u.PC.TIKTOK_LIKES_COUNT
                )
            ),
        a &&
            l.push(
                (0, i.jsx)(
                    N,
                    {
                        className: r,
                        label: m.intl.string(m.t.QHHwRU)
                    },
                    u.PC.TIKTOK_VERIFIED
                )
            ),
        l
    );
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        s = [],
        r = Object.keys(e.metadata);
    if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === r.length) return s;
    for (let l of a().sortBy(r, (t) => {
        var n, i;
        return null === (i = e.application_metadata) || void 0 === i ? void 0 : null === (n = i[t]) || void 0 === n ? void 0 : n.name;
    })) {
        let r = e.application_metadata[l];
        if (null == r) continue;
        let a = e.metadata[l];
        try {
            switch (r.type) {
                case u.xn.BOOLEAN_EQUAL:
                case u.xn.BOOLEAN_NOT_EQUAL:
                    ((r.type === u.xn.BOOLEAN_EQUAL && '1' === a) || (r.type === u.xn.BOOLEAN_NOT_EQUAL && '1' !== a)) &&
                        s.push(
                            (0, i.jsx)(
                                N,
                                {
                                    className: t,
                                    label: r.name
                                },
                                r.key
                            )
                        );
                    break;
                case u.xn.DATETIME_GREATER_THAN_EQUAL:
                case u.xn.DATETIME_LESS_THAN_EQUAL:
                    s.push(
                        (0, i.jsx)(
                            f,
                            {
                                className: t,
                                date: a,
                                locale: n,
                                label: r.name
                            },
                            r.key
                        )
                    );
                    break;
                case u.xn.INTEGER_EQUAL:
                case u.xn.INTEGER_NOT_EQUAL:
                case u.xn.INTEGER_GREATER_THAN_EQUAL:
                case u.xn.INTEGER_LESS_THAN_EQUAL:
                    s.push(
                        (0, i.jsx)(
                            E,
                            {
                                className: t,
                                count: Number(a),
                                label: r.name
                            },
                            r.key
                        )
                    );
            }
        } catch (e) {}
    }
    return s;
}
function E(e) {
    let t,
        { count: n, label: s, className: l, percent: a } = e,
        d = (0, c.$U)(n) + (a ? '%' : '');
    return (
        (t =
            'string' == typeof s
                ? m.intl.format(m.t.HLoinJ, {
                      name: s,
                      value: d
                  })
                : m.intl.format(s, { value: d })),
        (0, i.jsx)(o.Text, {
            className: r()(h.connectedAccountVanityMetadata, l),
            variant: 'text-xs/normal',
            color: 'interactive-active',
            children: t
        })
    );
}
function f(e) {
    let { date: t, locale: n, label: s, className: l } = e;
    return (0, i.jsx)(o.Text, {
        className: r()(h.connectedAccountVanityMetadata, l),
        variant: 'text-xs/normal',
        color: 'interactive-active',
        children: m.intl.format(m.t.HLoinJ, {
            value: (0, d.FI)(t, n),
            name: s
        })
    });
}
function I(e) {
    let { label: t, imageSrc: n, imageAlt: s, className: l } = e;
    return (0, i.jsxs)('div', {
        className: r()(h.connectedAccountVanityMetadata, h.connectedAccountVanityMetadataItem, l),
        children: [
            (0, i.jsx)(o.Tooltip, {
                text: s,
                children: (e) =>
                    (0, i.jsx)('img', {
                        ...e,
                        src: n,
                        alt: s,
                        className: h.connectedAccountVanityMetadataItemIcon
                    })
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'interactive-active',
                children: t
            })
        ]
    });
}
function N(e) {
    let { label: t, className: n } = e;
    return (0, i.jsx)(o.Text, {
        variant: 'text-xs/semibold',
        color: 'interactive-active',
        className: r()(h.connectedAccountVanityMetadata, h.connectedAccountVanityMetadataTag, n),
        children: t
    });
}

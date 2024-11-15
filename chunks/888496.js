n.d(t, {
    Dq: function () {
        return m;
    },
    hf: function () {
        return N;
    },
    li: function () {
        return _;
    },
    oP: function () {
        return A;
    },
    rJ: function () {
        return p;
    },
    rm: function () {
        return f;
    },
    ul: function () {
        return I;
    }
}),
    n(653041),
    n(47120);
var c = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    o = n(392711),
    a = n.n(o),
    i = n(481060),
    u = n(930153),
    s = n(275759),
    d = n(856651),
    T = n(388032),
    E = n(473522);
function A(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        l = [],
        r = Number(null !== (t = e[d.PC.REDDIT_TOTAL_KARMA]) && void 0 !== t ? t : -1),
        o = '1' === e[d.PC.REDDIT_GOLD],
        a = '1' === e[d.PC.REDDIT_MOD];
    return (
        r > -1 &&
            l.push(
                (0, c.jsx)(
                    h,
                    {
                        className: n,
                        count: r,
                        label: T.t.SbCNo6
                    },
                    d.PC.REDDIT_TOTAL_KARMA
                )
            ),
        o &&
            l.push(
                (0, c.jsx)(
                    v,
                    {
                        className: n,
                        label: T.intl.string(T.t['06rDHR'])
                    },
                    d.PC.REDDIT_GOLD
                )
            ),
        a &&
            l.push(
                (0, c.jsx)(
                    v,
                    {
                        className: n,
                        label: T.intl.string(T.t.oWM95O)
                    },
                    d.PC.REDDIT_MOD
                )
            ),
        l
    );
}
function p(e) {
    var t, n;
    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        r = [],
        o = Number(null !== (t = e[d.PC.TWITTER_STATUSES_COUNT]) && void 0 !== t ? t : -1),
        a = Number(null !== (n = e[d.PC.TWITTER_FOLLOWERS_COUNT]) && void 0 !== n ? n : -1);
    return (
        o > -1 &&
            r.push(
                (0, c.jsx)(
                    h,
                    {
                        className: l,
                        count: o,
                        label: T.t.llwqqa
                    },
                    d.PC.TWITTER_STATUSES_COUNT
                )
            ),
        a > -1 &&
            r.push(
                (0, c.jsx)(
                    h,
                    {
                        className: l,
                        count: a,
                        label: T.t.LMNOUV
                    },
                    d.PC.TWITTER_FOLLOWERS_COUNT
                )
            ),
        r
    );
}
function m(e) {
    var t, l, r;
    let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        a = [],
        i = Number(null !== (t = e[d.PC.STEAM_GAME_COUNT]) && void 0 !== t ? t : -1),
        u = Number(null !== (l = e[d.PC.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== l ? l : -1),
        s = Number(null !== (r = e[d.PC.STEAM_ITEM_COUNT_TF2]) && void 0 !== r ? r : -1);
    return (
        i > -1 &&
            a.push(
                (0, c.jsx)(
                    h,
                    {
                        className: o,
                        count: i,
                        label: T.t.ppXMu7
                    },
                    d.PC.STEAM_GAME_COUNT
                )
            ),
        u > -1 &&
            a.push(
                (0, c.jsx)(
                    O,
                    {
                        className: o,
                        label: T.intl.format(T.t['Y88M5+'], { count: u }),
                        imageSrc: n(738535),
                        imageAlt: T.intl.string(T.t.HKUEZm)
                    },
                    d.PC.STEAM_ITEM_COUNT_DOTA2
                )
            ),
        s > -1 &&
            a.push(
                (0, c.jsx)(
                    O,
                    {
                        className: o,
                        label: T.intl.format(T.t['Y88M5+'], { count: s }),
                        imageSrc: n(80730),
                        imageAlt: T.intl.string(T.t.C8p1Sk)
                    },
                    d.PC.STEAM_ITEM_COUNT_TF2
                )
            ),
        a
    );
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = [];
    return (
        '1' === e[d.PC.PAYPAL_VERIFIED] &&
            n.push(
                (0, c.jsx)(
                    v,
                    {
                        className: r()(t, E.paypalVerifiedTag),
                        label: T.intl.string(T.t.IhXLy8)
                    },
                    d.PC.PAYPAL_VERIFIED
                )
            ),
        n
    );
}
function I(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        l = [],
        r = Number(null !== (t = e[d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) && void 0 !== t ? t : -1),
        o = '1' === e[d.PC.EBAY_TOP_RATED_SELLER];
    return (
        r > 0 &&
            l.push(
                (0, c.jsx)(
                    h,
                    {
                        className: n,
                        count: r,
                        label: T.t.YmL22d,
                        percent: !0
                    },
                    d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE
                )
            ),
        o &&
            l.push(
                (0, c.jsx)(
                    v,
                    {
                        className: n,
                        label: T.intl.string(T.t.TEEYwc)
                    },
                    d.PC.EBAY_TOP_RATED_SELLER
                )
            ),
        l
    );
}
function N(e) {
    var t, n, l;
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        o = [],
        a = '1' === e[d.PC.TIKTOK_VERIFIED],
        i = Number(null !== (t = e[d.PC.TIKTOK_FOLLOWER_COUNT]) && void 0 !== t ? t : -1),
        u = Number(null !== (n = e[d.PC.TIKTOK_FOLLOWING_COUNT]) && void 0 !== n ? n : -1),
        s = Number(null !== (l = e[d.PC.TIKTOK_LIKES_COUNT]) && void 0 !== l ? l : -1);
    return (
        i > -1 &&
            o.push(
                (0, c.jsx)(
                    h,
                    {
                        className: r,
                        count: i,
                        label: T.t['Mpm/BQ']
                    },
                    d.PC.TIKTOK_FOLLOWER_COUNT
                )
            ),
        u > -1 &&
            o.push(
                (0, c.jsx)(
                    h,
                    {
                        className: r,
                        count: u,
                        label: T.t.ftf12t
                    },
                    d.PC.TIKTOK_FOLLOWING_COUNT
                )
            ),
        s > -1 &&
            o.push(
                (0, c.jsx)(
                    h,
                    {
                        className: r,
                        count: s,
                        label: T.t.Qwhe5u
                    },
                    d.PC.TIKTOK_LIKES_COUNT
                )
            ),
        a &&
            o.push(
                (0, c.jsx)(
                    v,
                    {
                        className: r,
                        label: T.intl.string(T.t.QHHwRU)
                    },
                    d.PC.TIKTOK_VERIFIED
                )
            ),
        o
    );
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        l = [],
        r = Object.keys(e.metadata);
    if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === r.length) return l;
    for (let o of a().sortBy(r, (t) => {
        var n, c;
        return null === (c = e.application_metadata) || void 0 === c ? void 0 : null === (n = c[t]) || void 0 === n ? void 0 : n.name;
    })) {
        let r = e.application_metadata[o];
        if (null == r) continue;
        let a = e.metadata[o];
        try {
            switch (r.type) {
                case d.xn.BOOLEAN_EQUAL:
                case d.xn.BOOLEAN_NOT_EQUAL:
                    ((r.type === d.xn.BOOLEAN_EQUAL && '1' === a) || (r.type === d.xn.BOOLEAN_NOT_EQUAL && '1' !== a)) &&
                        l.push(
                            (0, c.jsx)(
                                v,
                                {
                                    className: t,
                                    label: r.name
                                },
                                r.key
                            )
                        );
                    break;
                case d.xn.DATETIME_GREATER_THAN_EQUAL:
                case d.xn.DATETIME_LESS_THAN_EQUAL:
                    l.push(
                        (0, c.jsx)(
                            C,
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
                case d.xn.INTEGER_EQUAL:
                case d.xn.INTEGER_NOT_EQUAL:
                case d.xn.INTEGER_GREATER_THAN_EQUAL:
                case d.xn.INTEGER_LESS_THAN_EQUAL:
                    l.push(
                        (0, c.jsx)(
                            h,
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
    return l;
}
function h(e) {
    let t,
        { count: n, label: l, className: o, percent: a } = e,
        s = (0, u.$U)(n) + (a ? '%' : '');
    return (
        (t =
            'string' == typeof l
                ? T.intl.format(T.t.HLoinJ, {
                      name: l,
                      value: s
                  })
                : T.intl.format(l, { value: s })),
        (0, c.jsx)(i.Text, {
            className: r()(E.connectedAccountVanityMetadata, o),
            variant: 'text-xs/normal',
            color: 'interactive-active',
            children: t
        })
    );
}
function C(e) {
    let { date: t, locale: n, label: l, className: o } = e;
    return (0, c.jsx)(i.Text, {
        className: r()(E.connectedAccountVanityMetadata, o),
        variant: 'text-xs/normal',
        color: 'interactive-active',
        children: T.intl.format(T.t.HLoinJ, {
            value: (0, s.FI)(t, n),
            name: l
        })
    });
}
function O(e) {
    let { label: t, imageSrc: n, imageAlt: l, className: o } = e;
    return (0, c.jsxs)('div', {
        className: r()(E.connectedAccountVanityMetadata, E.connectedAccountVanityMetadataItem, o),
        children: [
            (0, c.jsx)(i.Tooltip, {
                text: l,
                children: (e) =>
                    (0, c.jsx)('img', {
                        ...e,
                        src: n,
                        alt: l,
                        className: E.connectedAccountVanityMetadataItemIcon
                    })
            }),
            (0, c.jsx)(i.Text, {
                variant: 'text-xs/normal',
                color: 'interactive-active',
                children: t
            })
        ]
    });
}
function v(e) {
    let { label: t, className: n } = e;
    return (0, c.jsx)(i.Text, {
        variant: 'text-xs/semibold',
        color: 'interactive-active',
        className: r()(E.connectedAccountVanityMetadata, E.connectedAccountVanityMetadataTag, n),
        children: t
    });
}

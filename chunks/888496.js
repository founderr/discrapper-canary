n.d(t, {
    Dq: function () {
        return _;
    },
    hf: function () {
        return O;
    },
    li: function () {
        return I;
    },
    oP: function () {
        return E;
    },
    rJ: function () {
        return p;
    },
    rm: function () {
        return N;
    },
    ul: function () {
        return m;
    }
}),
    n(653041),
    n(47120);
var c = n(200651);
n(192379);
var l = n(120356),
    o = n.n(l),
    a = n(392711),
    r = n.n(a),
    i = n(481060),
    s = n(930153),
    u = n(275759),
    d = n(856651),
    T = n(388032),
    A = n(119028);
function E(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        l = [],
        o = Number(null !== (t = e[d.PC.REDDIT_TOTAL_KARMA]) && void 0 !== t ? t : -1),
        a = '1' === e[d.PC.REDDIT_GOLD],
        r = '1' === e[d.PC.REDDIT_MOD];
    return (
        o > -1 &&
            l.push(
                (0, c.jsx)(
                    v,
                    {
                        className: n,
                        count: o,
                        label: T.t.SbCNo6
                    },
                    d.PC.REDDIT_TOTAL_KARMA
                )
            ),
        a &&
            l.push(
                (0, c.jsx)(
                    f,
                    {
                        className: n,
                        label: T.intl.string(T.t['06rDHR'])
                    },
                    d.PC.REDDIT_GOLD
                )
            ),
        r &&
            l.push(
                (0, c.jsx)(
                    f,
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
        o = [],
        a = Number(null !== (t = e[d.PC.TWITTER_STATUSES_COUNT]) && void 0 !== t ? t : -1),
        r = Number(null !== (n = e[d.PC.TWITTER_FOLLOWERS_COUNT]) && void 0 !== n ? n : -1);
    return (
        a > -1 &&
            o.push(
                (0, c.jsx)(
                    v,
                    {
                        className: l,
                        count: a,
                        label: T.t.llwqqa
                    },
                    d.PC.TWITTER_STATUSES_COUNT
                )
            ),
        r > -1 &&
            o.push(
                (0, c.jsx)(
                    v,
                    {
                        className: l,
                        count: r,
                        label: T.t.LMNOUV
                    },
                    d.PC.TWITTER_FOLLOWERS_COUNT
                )
            ),
        o
    );
}
function _(e) {
    var t, l, o;
    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        r = [],
        i = Number(null !== (t = e[d.PC.STEAM_GAME_COUNT]) && void 0 !== t ? t : -1),
        s = Number(null !== (l = e[d.PC.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== l ? l : -1),
        u = Number(null !== (o = e[d.PC.STEAM_ITEM_COUNT_TF2]) && void 0 !== o ? o : -1);
    return (
        i > -1 &&
            r.push(
                (0, c.jsx)(
                    v,
                    {
                        className: a,
                        count: i,
                        label: T.t.ppXMu7
                    },
                    d.PC.STEAM_GAME_COUNT
                )
            ),
        s > -1 &&
            r.push(
                (0, c.jsx)(
                    C,
                    {
                        className: a,
                        label: T.intl.format(T.t['Y88M5+'], { count: s }),
                        imageSrc: n(738535),
                        imageAlt: T.intl.string(T.t.HKUEZm)
                    },
                    d.PC.STEAM_ITEM_COUNT_DOTA2
                )
            ),
        u > -1 &&
            r.push(
                (0, c.jsx)(
                    C,
                    {
                        className: a,
                        label: T.intl.format(T.t['Y88M5+'], { count: u }),
                        imageSrc: n(80730),
                        imageAlt: T.intl.string(T.t.C8p1Sk)
                    },
                    d.PC.STEAM_ITEM_COUNT_TF2
                )
            ),
        r
    );
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = [];
    return (
        '1' === e[d.PC.PAYPAL_VERIFIED] &&
            n.push(
                (0, c.jsx)(
                    f,
                    {
                        className: o()(t, A.paypalVerifiedTag),
                        label: T.intl.string(T.t.IhXLy8)
                    },
                    d.PC.PAYPAL_VERIFIED
                )
            ),
        n
    );
}
function m(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        l = [],
        o = Number(null !== (t = e[d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) && void 0 !== t ? t : -1),
        a = '1' === e[d.PC.EBAY_TOP_RATED_SELLER];
    return (
        o > 0 &&
            l.push(
                (0, c.jsx)(
                    v,
                    {
                        className: n,
                        count: o,
                        label: T.t.YmL22d,
                        percent: !0
                    },
                    d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE
                )
            ),
        a &&
            l.push(
                (0, c.jsx)(
                    f,
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
function O(e) {
    var t, n, l;
    let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        a = [],
        r = '1' === e[d.PC.TIKTOK_VERIFIED],
        i = Number(null !== (t = e[d.PC.TIKTOK_FOLLOWER_COUNT]) && void 0 !== t ? t : -1),
        s = Number(null !== (n = e[d.PC.TIKTOK_FOLLOWING_COUNT]) && void 0 !== n ? n : -1),
        u = Number(null !== (l = e[d.PC.TIKTOK_LIKES_COUNT]) && void 0 !== l ? l : -1);
    return (
        i > -1 &&
            a.push(
                (0, c.jsx)(
                    v,
                    {
                        className: o,
                        count: i,
                        label: T.t['Mpm/BQ']
                    },
                    d.PC.TIKTOK_FOLLOWER_COUNT
                )
            ),
        s > -1 &&
            a.push(
                (0, c.jsx)(
                    v,
                    {
                        className: o,
                        count: s,
                        label: T.t.ftf12t
                    },
                    d.PC.TIKTOK_FOLLOWING_COUNT
                )
            ),
        u > -1 &&
            a.push(
                (0, c.jsx)(
                    v,
                    {
                        className: o,
                        count: u,
                        label: T.t.Qwhe5u
                    },
                    d.PC.TIKTOK_LIKES_COUNT
                )
            ),
        r &&
            a.push(
                (0, c.jsx)(
                    f,
                    {
                        className: o,
                        label: T.intl.string(T.t.QHHwRU)
                    },
                    d.PC.TIKTOK_VERIFIED
                )
            ),
        a
    );
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        l = [],
        o = Object.keys(e.metadata);
    if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === o.length) return l;
    for (let a of r().sortBy(o, (t) => {
        var n, c;
        return null === (c = e.application_metadata) || void 0 === c ? void 0 : null === (n = c[t]) || void 0 === n ? void 0 : n.name;
    })) {
        let o = e.application_metadata[a];
        if (null == o) continue;
        let r = e.metadata[a];
        try {
            switch (o.type) {
                case d.xn.BOOLEAN_EQUAL:
                case d.xn.BOOLEAN_NOT_EQUAL:
                    ((o.type === d.xn.BOOLEAN_EQUAL && '1' === r) || (o.type === d.xn.BOOLEAN_NOT_EQUAL && '1' !== r)) &&
                        l.push(
                            (0, c.jsx)(
                                f,
                                {
                                    className: t,
                                    label: o.name
                                },
                                o.key
                            )
                        );
                    break;
                case d.xn.DATETIME_GREATER_THAN_EQUAL:
                case d.xn.DATETIME_LESS_THAN_EQUAL:
                    l.push(
                        (0, c.jsx)(
                            h,
                            {
                                className: t,
                                date: r,
                                locale: n,
                                label: o.name
                            },
                            o.key
                        )
                    );
                    break;
                case d.xn.INTEGER_EQUAL:
                case d.xn.INTEGER_NOT_EQUAL:
                case d.xn.INTEGER_GREATER_THAN_EQUAL:
                case d.xn.INTEGER_LESS_THAN_EQUAL:
                    l.push(
                        (0, c.jsx)(
                            v,
                            {
                                className: t,
                                count: Number(r),
                                label: o.name
                            },
                            o.key
                        )
                    );
            }
        } catch (e) {}
    }
    return l;
}
function v(e) {
    let t,
        { count: n, label: l, className: a, percent: r } = e,
        u = (0, s.$U)(n) + (r ? '%' : '');
    return (
        (t =
            'string' == typeof l
                ? T.intl.format(T.t.HLoinJ, {
                      name: l,
                      value: u
                  })
                : T.intl.format(l, { value: u })),
        (0, c.jsx)(i.Text, {
            className: o()(A.connectedAccountVanityMetadata, a),
            variant: 'text-xs/normal',
            color: 'interactive-active',
            children: t
        })
    );
}
function h(e) {
    let { date: t, locale: n, label: l, className: a } = e;
    return (0, c.jsx)(i.Text, {
        className: o()(A.connectedAccountVanityMetadata, a),
        variant: 'text-xs/normal',
        color: 'interactive-active',
        children: T.intl.format(T.t.HLoinJ, {
            value: (0, u.FI)(t, n),
            name: l
        })
    });
}
function C(e) {
    let { label: t, imageSrc: n, imageAlt: l, className: a } = e;
    return (0, c.jsxs)('div', {
        className: o()(A.connectedAccountVanityMetadata, A.connectedAccountVanityMetadataItem, a),
        children: [
            (0, c.jsx)(i.Tooltip, {
                text: l,
                children: (e) =>
                    (0, c.jsx)('img', {
                        ...e,
                        src: n,
                        alt: l,
                        className: A.connectedAccountVanityMetadataItemIcon
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
function f(e) {
    let { label: t, className: n } = e;
    return (0, c.jsx)(i.Text, {
        variant: 'text-xs/semibold',
        color: 'interactive-active',
        className: o()(A.connectedAccountVanityMetadata, A.connectedAccountVanityMetadataTag, n),
        children: t
    });
}

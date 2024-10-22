t.d(n, {
    Dq: function () {
        return I;
    },
    hf: function () {
        return C;
    },
    li: function () {
        return O;
    },
    oP: function () {
        return N;
    },
    rJ: function () {
        return _;
    },
    rm: function () {
        return m;
    },
    ul: function () {
        return A;
    }
}),
    t(653041),
    t(47120);
var c = t(200651);
t(192379);
var a = t(120356),
    l = t.n(a),
    o = t(392711),
    r = t.n(o),
    i = t(481060),
    s = t(930153),
    u = t(275759),
    T = t(856651),
    E = t(689938),
    d = t(473522);
function N(e) {
    var n;
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        a = [],
        l = Number(null !== (n = e[T.PC.REDDIT_TOTAL_KARMA]) && void 0 !== n ? n : -1),
        o = '1' === e[T.PC.REDDIT_GOLD],
        r = '1' === e[T.PC.REDDIT_MOD];
    return (
        l > -1 &&
            a.push(
                (0, c.jsx)(
                    p,
                    {
                        className: t,
                        count: l,
                        label: E.Z.Messages.CONNECTIONS_PROFILE_REDDIT_KARMA
                    },
                    T.PC.REDDIT_TOTAL_KARMA
                )
            ),
        o &&
            a.push(
                (0, c.jsx)(
                    x,
                    {
                        className: t,
                        label: E.Z.Messages.CONNECTIONS_REDDIT_GOLD
                    },
                    T.PC.REDDIT_GOLD
                )
            ),
        r &&
            a.push(
                (0, c.jsx)(
                    x,
                    {
                        className: t,
                        label: E.Z.Messages.CONNECTIONS_REDDIT_MOD
                    },
                    T.PC.REDDIT_MOD
                )
            ),
        a
    );
}
function _(e) {
    var n, t;
    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        l = [],
        o = Number(null !== (n = e[T.PC.TWITTER_STATUSES_COUNT]) && void 0 !== n ? n : -1),
        r = Number(null !== (t = e[T.PC.TWITTER_FOLLOWERS_COUNT]) && void 0 !== t ? t : -1);
    return (
        o > -1 &&
            l.push(
                (0, c.jsx)(
                    p,
                    {
                        className: a,
                        count: o,
                        label: E.Z.Messages.CONNECTIONS_PROFILE_TWITTER_STATUSES
                    },
                    T.PC.TWITTER_STATUSES_COUNT
                )
            ),
        r > -1 &&
            l.push(
                (0, c.jsx)(
                    p,
                    {
                        className: a,
                        count: r,
                        label: E.Z.Messages.CONNECTIONS_PROFILE_TWITTER_FOLLOWERS
                    },
                    T.PC.TWITTER_FOLLOWERS_COUNT
                )
            ),
        l
    );
}
function I(e) {
    var n, a, l;
    let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        r = [],
        i = Number(null !== (n = e[T.PC.STEAM_GAME_COUNT]) && void 0 !== n ? n : -1),
        s = Number(null !== (a = e[T.PC.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== a ? a : -1),
        u = Number(null !== (l = e[T.PC.STEAM_ITEM_COUNT_TF2]) && void 0 !== l ? l : -1);
    return (
        i > -1 &&
            r.push(
                (0, c.jsx)(
                    p,
                    {
                        className: o,
                        count: i,
                        label: E.Z.Messages.CONNECTIONS_PROFILE_STEAM_GAMES
                    },
                    T.PC.STEAM_GAME_COUNT
                )
            ),
        s > -1 &&
            r.push(
                (0, c.jsx)(
                    R,
                    {
                        className: o,
                        label: E.Z.Messages.CONNECTIONS_STEAM_ITEMS.format({ count: s }),
                        imageSrc: t(448238),
                        imageAlt: E.Z.Messages.CONNECTIONS_STEAM_DOTA2
                    },
                    T.PC.STEAM_ITEM_COUNT_DOTA2
                )
            ),
        u > -1 &&
            r.push(
                (0, c.jsx)(
                    R,
                    {
                        className: o,
                        label: E.Z.Messages.CONNECTIONS_STEAM_ITEMS.format({ count: u }),
                        imageSrc: t(80730),
                        imageAlt: E.Z.Messages.CONNECTIONS_STEAM_TF2
                    },
                    T.PC.STEAM_ITEM_COUNT_TF2
                )
            ),
        r
    );
}
function O(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        t = [];
    return (
        '1' === e[T.PC.PAYPAL_VERIFIED] &&
            t.push(
                (0, c.jsx)(
                    x,
                    {
                        className: l()(n, d.paypalVerifiedTag),
                        label: E.Z.Messages.CONNECTIONS_PAYPAL_VERIFIED
                    },
                    T.PC.PAYPAL_VERIFIED
                )
            ),
        t
    );
}
function A(e) {
    var n;
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        a = [],
        l = Number(null !== (n = e[T.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) && void 0 !== n ? n : -1),
        o = '1' === e[T.PC.EBAY_TOP_RATED_SELLER];
    return (
        l > 0 &&
            a.push(
                (0, c.jsx)(
                    p,
                    {
                        className: t,
                        count: l,
                        label: E.Z.Messages.CONNECTIONS_PROFILE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                        percent: !0
                    },
                    T.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE
                )
            ),
        o &&
            a.push(
                (0, c.jsx)(
                    x,
                    {
                        className: t,
                        label: E.Z.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
                    },
                    T.PC.EBAY_TOP_RATED_SELLER
                )
            ),
        a
    );
}
function C(e) {
    var n, t, a;
    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        o = [],
        r = '1' === e[T.PC.TIKTOK_VERIFIED],
        i = Number(null !== (n = e[T.PC.TIKTOK_FOLLOWER_COUNT]) && void 0 !== n ? n : -1),
        s = Number(null !== (t = e[T.PC.TIKTOK_FOLLOWING_COUNT]) && void 0 !== t ? t : -1),
        u = Number(null !== (a = e[T.PC.TIKTOK_LIKES_COUNT]) && void 0 !== a ? a : -1);
    return (
        i > -1 &&
            o.push(
                (0, c.jsx)(
                    p,
                    {
                        className: l,
                        count: i,
                        label: E.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWERS
                    },
                    T.PC.TIKTOK_FOLLOWER_COUNT
                )
            ),
        s > -1 &&
            o.push(
                (0, c.jsx)(
                    p,
                    {
                        className: l,
                        count: s,
                        label: E.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWING
                    },
                    T.PC.TIKTOK_FOLLOWING_COUNT
                )
            ),
        u > -1 &&
            o.push(
                (0, c.jsx)(
                    p,
                    {
                        className: l,
                        count: u,
                        label: E.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_LIKES
                    },
                    T.PC.TIKTOK_LIKES_COUNT
                )
            ),
        r &&
            o.push(
                (0, c.jsx)(
                    x,
                    {
                        className: l,
                        label: E.Z.Messages.CONNECTIONS_TIKTOK_VERIFIED
                    },
                    T.PC.TIKTOK_VERIFIED
                )
            ),
        o
    );
}
function m(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        a = [],
        l = Object.keys(e.metadata);
    if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === l.length) return a;
    for (let o of r().sortBy(l, (n) => {
        var t, c;
        return null === (c = e.application_metadata) || void 0 === c ? void 0 : null === (t = c[n]) || void 0 === t ? void 0 : t.name;
    })) {
        let l = e.application_metadata[o];
        if (null == l) continue;
        let r = e.metadata[o];
        try {
            switch (l.type) {
                case T.xn.BOOLEAN_EQUAL:
                case T.xn.BOOLEAN_NOT_EQUAL:
                    ((l.type === T.xn.BOOLEAN_EQUAL && '1' === r) || (l.type === T.xn.BOOLEAN_NOT_EQUAL && '1' !== r)) &&
                        a.push(
                            (0, c.jsx)(
                                x,
                                {
                                    className: n,
                                    label: l.name
                                },
                                l.key
                            )
                        );
                    break;
                case T.xn.DATETIME_GREATER_THAN_EQUAL:
                case T.xn.DATETIME_LESS_THAN_EQUAL:
                    a.push(
                        (0, c.jsx)(
                            h,
                            {
                                className: n,
                                date: r,
                                locale: t,
                                label: l.name
                            },
                            l.key
                        )
                    );
                    break;
                case T.xn.INTEGER_EQUAL:
                case T.xn.INTEGER_NOT_EQUAL:
                case T.xn.INTEGER_GREATER_THAN_EQUAL:
                case T.xn.INTEGER_LESS_THAN_EQUAL:
                    a.push(
                        (0, c.jsx)(
                            p,
                            {
                                className: n,
                                count: Number(r),
                                label: l.name
                            },
                            l.key
                        )
                    );
            }
        } catch (e) {}
    }
    return a;
}
function p(e) {
    let n,
        { count: t, label: a, className: o, percent: r } = e,
        u = (0, s.$U)(t) + (r ? '%' : '');
    return (
        (n =
            'string' == typeof a
                ? E.Z.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
                      name: a,
                      value: u
                  })
                : a.format({ value: u })),
        (0, c.jsx)(i.Text, {
            className: l()(d.connectedAccountVanityMetadata, o),
            variant: 'text-xs/normal',
            color: 'interactive-active',
            children: n
        })
    );
}
function h(e) {
    let { date: n, locale: t, label: a, className: o } = e;
    return (0, c.jsx)(i.Text, {
        className: l()(d.connectedAccountVanityMetadata, o),
        variant: 'text-xs/normal',
        color: 'interactive-active',
        children: E.Z.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
            value: (0, u.FI)(n, t),
            name: a
        })
    });
}
function R(e) {
    let { label: n, imageSrc: t, imageAlt: a, className: o } = e;
    return (0, c.jsxs)('div', {
        className: l()(d.connectedAccountVanityMetadata, d.connectedAccountVanityMetadataItem, o),
        children: [
            (0, c.jsx)(i.Tooltip, {
                text: a,
                children: (e) =>
                    (0, c.jsx)('img', {
                        ...e,
                        src: t,
                        alt: a,
                        className: d.connectedAccountVanityMetadataItemIcon
                    })
            }),
            (0, c.jsx)(i.Text, {
                variant: 'text-xs/normal',
                color: 'interactive-active',
                children: n
            })
        ]
    });
}
function x(e) {
    let { label: n, className: t } = e;
    return (0, c.jsx)(i.Text, {
        variant: 'text-xs/semibold',
        color: 'interactive-active',
        className: l()(d.connectedAccountVanityMetadata, d.connectedAccountVanityMetadataTag, t),
        children: n
    });
}

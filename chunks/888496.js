t.d(s, {
    Dq: function () {
        return S;
    },
    hf: function () {
        return C;
    },
    li: function () {
        return N;
    },
    oP: function () {
        return T;
    },
    rJ: function () {
        return I;
    },
    rm: function () {
        return g;
    },
    ul: function () {
        return m;
    }
}),
    t(653041),
    t(47120);
var n = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(392711),
    o = t.n(r),
    l = t(481060),
    c = t(930153),
    d = t(275759),
    u = t(856651),
    _ = t(689938),
    E = t(83661);
function T(e) {
    var s;
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        a = [],
        i = Number(null !== (s = e[u.PC.REDDIT_TOTAL_KARMA]) && void 0 !== s ? s : -1),
        r = '1' === e[u.PC.REDDIT_GOLD],
        o = '1' === e[u.PC.REDDIT_MOD];
    return (
        i > -1 &&
            a.push(
                (0, n.jsx)(
                    A,
                    {
                        className: t,
                        count: i,
                        label: _.Z.Messages.CONNECTIONS_PROFILE_REDDIT_KARMA
                    },
                    u.PC.REDDIT_TOTAL_KARMA
                )
            ),
        r &&
            a.push(
                (0, n.jsx)(
                    p,
                    {
                        className: t,
                        label: _.Z.Messages.CONNECTIONS_REDDIT_GOLD
                    },
                    u.PC.REDDIT_GOLD
                )
            ),
        o &&
            a.push(
                (0, n.jsx)(
                    p,
                    {
                        className: t,
                        label: _.Z.Messages.CONNECTIONS_REDDIT_MOD
                    },
                    u.PC.REDDIT_MOD
                )
            ),
        a
    );
}
function I(e) {
    var s, t;
    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        i = [],
        r = Number(null !== (s = e[u.PC.TWITTER_STATUSES_COUNT]) && void 0 !== s ? s : -1),
        o = Number(null !== (t = e[u.PC.TWITTER_FOLLOWERS_COUNT]) && void 0 !== t ? t : -1);
    return (
        r > -1 &&
            i.push(
                (0, n.jsx)(
                    A,
                    {
                        className: a,
                        count: r,
                        label: _.Z.Messages.CONNECTIONS_PROFILE_TWITTER_STATUSES
                    },
                    u.PC.TWITTER_STATUSES_COUNT
                )
            ),
        o > -1 &&
            i.push(
                (0, n.jsx)(
                    A,
                    {
                        className: a,
                        count: o,
                        label: _.Z.Messages.CONNECTIONS_PROFILE_TWITTER_FOLLOWERS
                    },
                    u.PC.TWITTER_FOLLOWERS_COUNT
                )
            ),
        i
    );
}
function S(e) {
    var s, a, i;
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        o = [],
        l = Number(null !== (s = e[u.PC.STEAM_GAME_COUNT]) && void 0 !== s ? s : -1),
        c = Number(null !== (a = e[u.PC.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== a ? a : -1),
        d = Number(null !== (i = e[u.PC.STEAM_ITEM_COUNT_TF2]) && void 0 !== i ? i : -1);
    return (
        l > -1 &&
            o.push(
                (0, n.jsx)(
                    A,
                    {
                        className: r,
                        count: l,
                        label: _.Z.Messages.CONNECTIONS_PROFILE_STEAM_GAMES
                    },
                    u.PC.STEAM_GAME_COUNT
                )
            ),
        c > -1 &&
            o.push(
                (0, n.jsx)(
                    O,
                    {
                        className: r,
                        label: _.Z.Messages.CONNECTIONS_STEAM_ITEMS.format({ count: c }),
                        imageSrc: t(448238),
                        imageAlt: _.Z.Messages.CONNECTIONS_STEAM_DOTA2
                    },
                    u.PC.STEAM_ITEM_COUNT_DOTA2
                )
            ),
        d > -1 &&
            o.push(
                (0, n.jsx)(
                    O,
                    {
                        className: r,
                        label: _.Z.Messages.CONNECTIONS_STEAM_ITEMS.format({ count: d }),
                        imageSrc: t(80730),
                        imageAlt: _.Z.Messages.CONNECTIONS_STEAM_TF2
                    },
                    u.PC.STEAM_ITEM_COUNT_TF2
                )
            ),
        o
    );
}
function N(e) {
    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        t = [];
    return (
        '1' === e[u.PC.PAYPAL_VERIFIED] &&
            t.push(
                (0, n.jsx)(
                    p,
                    {
                        className: i()(s, E.paypalVerifiedTag),
                        label: _.Z.Messages.CONNECTIONS_PAYPAL_VERIFIED
                    },
                    u.PC.PAYPAL_VERIFIED
                )
            ),
        t
    );
}
function m(e) {
    var s;
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        a = [],
        i = Number(null !== (s = e[u.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) && void 0 !== s ? s : -1),
        r = '1' === e[u.PC.EBAY_TOP_RATED_SELLER];
    return (
        i > 0 &&
            a.push(
                (0, n.jsx)(
                    A,
                    {
                        className: t,
                        count: i,
                        label: _.Z.Messages.CONNECTIONS_PROFILE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                        percent: !0
                    },
                    u.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE
                )
            ),
        r &&
            a.push(
                (0, n.jsx)(
                    p,
                    {
                        className: t,
                        label: _.Z.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
                    },
                    u.PC.EBAY_TOP_RATED_SELLER
                )
            ),
        a
    );
}
function C(e) {
    var s, t, a;
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        r = [],
        o = '1' === e[u.PC.TIKTOK_VERIFIED],
        l = Number(null !== (s = e[u.PC.TIKTOK_FOLLOWER_COUNT]) && void 0 !== s ? s : -1),
        c = Number(null !== (t = e[u.PC.TIKTOK_FOLLOWING_COUNT]) && void 0 !== t ? t : -1),
        d = Number(null !== (a = e[u.PC.TIKTOK_LIKES_COUNT]) && void 0 !== a ? a : -1);
    return (
        l > -1 &&
            r.push(
                (0, n.jsx)(
                    A,
                    {
                        className: i,
                        count: l,
                        label: _.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWERS
                    },
                    u.PC.TIKTOK_FOLLOWER_COUNT
                )
            ),
        c > -1 &&
            r.push(
                (0, n.jsx)(
                    A,
                    {
                        className: i,
                        count: c,
                        label: _.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWING
                    },
                    u.PC.TIKTOK_FOLLOWING_COUNT
                )
            ),
        d > -1 &&
            r.push(
                (0, n.jsx)(
                    A,
                    {
                        className: i,
                        count: d,
                        label: _.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_LIKES
                    },
                    u.PC.TIKTOK_LIKES_COUNT
                )
            ),
        o &&
            r.push(
                (0, n.jsx)(
                    p,
                    {
                        className: i,
                        label: _.Z.Messages.CONNECTIONS_TIKTOK_VERIFIED
                    },
                    u.PC.TIKTOK_VERIFIED
                )
            ),
        r
    );
}
function g(e) {
    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        a = [],
        i = Object.keys(e.metadata);
    if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === i.length) return a;
    for (let r of o().sortBy(i, (s) => {
        var t, n;
        return null === (n = e.application_metadata) || void 0 === n ? void 0 : null === (t = n[s]) || void 0 === t ? void 0 : t.name;
    })) {
        let i = e.application_metadata[r];
        if (null == i) continue;
        let o = e.metadata[r];
        try {
            switch (i.type) {
                case u.xn.BOOLEAN_EQUAL:
                case u.xn.BOOLEAN_NOT_EQUAL:
                    ((i.type === u.xn.BOOLEAN_EQUAL && '1' === o) || (i.type === u.xn.BOOLEAN_NOT_EQUAL && '1' !== o)) &&
                        a.push(
                            (0, n.jsx)(
                                p,
                                {
                                    className: s,
                                    label: i.name
                                },
                                i.key
                            )
                        );
                    break;
                case u.xn.DATETIME_GREATER_THAN_EQUAL:
                case u.xn.DATETIME_LESS_THAN_EQUAL:
                    a.push(
                        (0, n.jsx)(
                            h,
                            {
                                className: s,
                                date: o,
                                locale: t,
                                label: i.name
                            },
                            i.key
                        )
                    );
                    break;
                case u.xn.INTEGER_EQUAL:
                case u.xn.INTEGER_NOT_EQUAL:
                case u.xn.INTEGER_GREATER_THAN_EQUAL:
                case u.xn.INTEGER_LESS_THAN_EQUAL:
                    a.push(
                        (0, n.jsx)(
                            A,
                            {
                                className: s,
                                count: Number(o),
                                label: i.name
                            },
                            i.key
                        )
                    );
            }
        } catch (e) {}
    }
    return a;
}
function A(e) {
    let s,
        { count: t, label: a, className: r, percent: o } = e,
        d = (0, c.$U)(t) + (o ? '%' : '');
    return (
        (s =
            'string' == typeof a
                ? _.Z.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
                      name: a,
                      value: d
                  })
                : a.format({ value: d })),
        (0, n.jsx)(l.Text, {
            className: i()(E.connectedAccountVanityMetadata, r),
            variant: 'text-xs/normal',
            color: 'interactive-active',
            children: s
        })
    );
}
function h(e) {
    let { date: s, locale: t, label: a, className: r } = e;
    return (0, n.jsx)(l.Text, {
        className: i()(E.connectedAccountVanityMetadata, r),
        variant: 'text-xs/normal',
        color: 'interactive-active',
        children: _.Z.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
            value: (0, d.FI)(s, t),
            name: a
        })
    });
}
function O(e) {
    let { label: s, imageSrc: t, imageAlt: a, className: r } = e;
    return (0, n.jsxs)('div', {
        className: i()(E.connectedAccountVanityMetadata, E.connectedAccountVanityMetadataItem, r),
        children: [
            (0, n.jsx)(l.Tooltip, {
                text: a,
                children: (e) =>
                    (0, n.jsx)('img', {
                        ...e,
                        src: t,
                        alt: a,
                        className: E.connectedAccountVanityMetadataItemIcon
                    })
            }),
            (0, n.jsx)(l.Text, {
                variant: 'text-xs/normal',
                color: 'interactive-active',
                children: s
            })
        ]
    });
}
function p(e) {
    let { label: s, className: t } = e;
    return (0, n.jsx)(l.Text, {
        variant: 'text-xs/semibold',
        color: 'interactive-active',
        className: i()(E.connectedAccountVanityMetadata, E.connectedAccountVanityMetadataTag, t),
        children: s
    });
}

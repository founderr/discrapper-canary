t.d(n, {
    Dq: function () {
        return O;
    },
    hf: function () {
        return A;
    },
    li: function () {
        return I;
    },
    oP: function () {
        return d;
    },
    rJ: function () {
        return _;
    },
    rm: function () {
        return m;
    },
    ul: function () {
        return C;
    }
}),
    t(653041),
    t(47120);
var a = t(735250);
t(470079);
var c = t(120356),
    l = t.n(c),
    s = t(392711),
    o = t.n(s),
    i = t(481060),
    r = t(930153),
    u = t(275759),
    T = t(856651),
    E = t(689938),
    N = t(473522);
function d(e) {
    var n;
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        c = [],
        l = Number(null !== (n = e[T.PC.REDDIT_TOTAL_KARMA]) && void 0 !== n ? n : -1),
        s = '1' === e[T.PC.REDDIT_GOLD],
        o = '1' === e[T.PC.REDDIT_MOD];
    return (
        l > -1 &&
            c.push(
                (0, a.jsx)(
                    x,
                    {
                        className: t,
                        count: l,
                        label: E.Z.Messages.CONNECTIONS_PROFILE_REDDIT_KARMA
                    },
                    T.PC.REDDIT_TOTAL_KARMA
                )
            ),
        s &&
            c.push(
                (0, a.jsx)(
                    p,
                    {
                        className: t,
                        label: E.Z.Messages.CONNECTIONS_REDDIT_GOLD
                    },
                    T.PC.REDDIT_GOLD
                )
            ),
        o &&
            c.push(
                (0, a.jsx)(
                    p,
                    {
                        className: t,
                        label: E.Z.Messages.CONNECTIONS_REDDIT_MOD
                    },
                    T.PC.REDDIT_MOD
                )
            ),
        c
    );
}
function _(e) {
    var n, t;
    let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        l = [],
        s = Number(null !== (n = e[T.PC.TWITTER_STATUSES_COUNT]) && void 0 !== n ? n : -1),
        o = Number(null !== (t = e[T.PC.TWITTER_FOLLOWERS_COUNT]) && void 0 !== t ? t : -1);
    return (
        s > -1 &&
            l.push(
                (0, a.jsx)(
                    x,
                    {
                        className: c,
                        count: s,
                        label: E.Z.Messages.CONNECTIONS_PROFILE_TWITTER_STATUSES
                    },
                    T.PC.TWITTER_STATUSES_COUNT
                )
            ),
        o > -1 &&
            l.push(
                (0, a.jsx)(
                    x,
                    {
                        className: c,
                        count: o,
                        label: E.Z.Messages.CONNECTIONS_PROFILE_TWITTER_FOLLOWERS
                    },
                    T.PC.TWITTER_FOLLOWERS_COUNT
                )
            ),
        l
    );
}
function O(e) {
    var n, c, l;
    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        o = [],
        i = Number(null !== (n = e[T.PC.STEAM_GAME_COUNT]) && void 0 !== n ? n : -1),
        r = Number(null !== (c = e[T.PC.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== c ? c : -1),
        u = Number(null !== (l = e[T.PC.STEAM_ITEM_COUNT_TF2]) && void 0 !== l ? l : -1);
    return (
        i > -1 &&
            o.push(
                (0, a.jsx)(
                    x,
                    {
                        className: s,
                        count: i,
                        label: E.Z.Messages.CONNECTIONS_PROFILE_STEAM_GAMES
                    },
                    T.PC.STEAM_GAME_COUNT
                )
            ),
        r > -1 &&
            o.push(
                (0, a.jsx)(
                    h,
                    {
                        className: s,
                        label: E.Z.Messages.CONNECTIONS_STEAM_ITEMS.format({ count: r }),
                        imageSrc: t(448238),
                        imageAlt: E.Z.Messages.CONNECTIONS_STEAM_DOTA2
                    },
                    T.PC.STEAM_ITEM_COUNT_DOTA2
                )
            ),
        u > -1 &&
            o.push(
                (0, a.jsx)(
                    h,
                    {
                        className: s,
                        label: E.Z.Messages.CONNECTIONS_STEAM_ITEMS.format({ count: u }),
                        imageSrc: t(80730),
                        imageAlt: E.Z.Messages.CONNECTIONS_STEAM_TF2
                    },
                    T.PC.STEAM_ITEM_COUNT_TF2
                )
            ),
        o
    );
}
function I(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        t = [];
    return (
        '1' === e[T.PC.PAYPAL_VERIFIED] &&
            t.push(
                (0, a.jsx)(
                    p,
                    {
                        className: l()(n, N.paypalVerifiedTag),
                        label: E.Z.Messages.CONNECTIONS_PAYPAL_VERIFIED
                    },
                    T.PC.PAYPAL_VERIFIED
                )
            ),
        t
    );
}
function C(e) {
    var n;
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        c = [],
        l = Number(null !== (n = e[T.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) && void 0 !== n ? n : -1),
        s = '1' === e[T.PC.EBAY_TOP_RATED_SELLER];
    return (
        l > 0 &&
            c.push(
                (0, a.jsx)(
                    x,
                    {
                        className: t,
                        count: l,
                        label: E.Z.Messages.CONNECTIONS_PROFILE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                        percent: !0
                    },
                    T.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE
                )
            ),
        s &&
            c.push(
                (0, a.jsx)(
                    p,
                    {
                        className: t,
                        label: E.Z.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
                    },
                    T.PC.EBAY_TOP_RATED_SELLER
                )
            ),
        c
    );
}
function A(e) {
    var n, t, c;
    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        s = [],
        o = '1' === e[T.PC.TIKTOK_VERIFIED],
        i = Number(null !== (n = e[T.PC.TIKTOK_FOLLOWER_COUNT]) && void 0 !== n ? n : -1),
        r = Number(null !== (t = e[T.PC.TIKTOK_FOLLOWING_COUNT]) && void 0 !== t ? t : -1),
        u = Number(null !== (c = e[T.PC.TIKTOK_LIKES_COUNT]) && void 0 !== c ? c : -1);
    return (
        i > -1 &&
            s.push(
                (0, a.jsx)(
                    x,
                    {
                        className: l,
                        count: i,
                        label: E.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWERS
                    },
                    T.PC.TIKTOK_FOLLOWER_COUNT
                )
            ),
        r > -1 &&
            s.push(
                (0, a.jsx)(
                    x,
                    {
                        className: l,
                        count: r,
                        label: E.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWING
                    },
                    T.PC.TIKTOK_FOLLOWING_COUNT
                )
            ),
        u > -1 &&
            s.push(
                (0, a.jsx)(
                    x,
                    {
                        className: l,
                        count: u,
                        label: E.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_LIKES
                    },
                    T.PC.TIKTOK_LIKES_COUNT
                )
            ),
        o &&
            s.push(
                (0, a.jsx)(
                    p,
                    {
                        className: l,
                        label: E.Z.Messages.CONNECTIONS_TIKTOK_VERIFIED
                    },
                    T.PC.TIKTOK_VERIFIED
                )
            ),
        s
    );
}
function m(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        c = [],
        l = Object.keys(e.metadata);
    if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === l.length) return c;
    for (let s of o().sortBy(l, (n) => {
        var t, a;
        return null === (a = e.application_metadata) || void 0 === a ? void 0 : null === (t = a[n]) || void 0 === t ? void 0 : t.name;
    })) {
        let l = e.application_metadata[s];
        if (null == l) continue;
        let o = e.metadata[s];
        try {
            switch (l.type) {
                case T.xn.BOOLEAN_EQUAL:
                case T.xn.BOOLEAN_NOT_EQUAL:
                    ((l.type === T.xn.BOOLEAN_EQUAL && '1' === o) || (l.type === T.xn.BOOLEAN_NOT_EQUAL && '1' !== o)) &&
                        c.push(
                            (0, a.jsx)(
                                p,
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
                    c.push(
                        (0, a.jsx)(
                            v,
                            {
                                className: n,
                                date: o,
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
                    c.push(
                        (0, a.jsx)(
                            x,
                            {
                                className: n,
                                count: Number(o),
                                label: l.name
                            },
                            l.key
                        )
                    );
            }
        } catch (e) {}
    }
    return c;
}
function x(e) {
    let n,
        { count: t, label: c, className: s, percent: o } = e,
        u = (0, r.$U)(t) + (o ? '%' : '');
    return (
        (n =
            'string' == typeof c
                ? E.Z.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
                      name: c,
                      value: u
                  })
                : c.format({ value: u })),
        (0, a.jsx)(i.Text, {
            className: l()(N.connectedAccountVanityMetadata, s),
            variant: 'text-xs/normal',
            color: 'interactive-active',
            children: n
        })
    );
}
function v(e) {
    let { date: n, locale: t, label: c, className: s } = e;
    return (0, a.jsx)(i.Text, {
        className: l()(N.connectedAccountVanityMetadata, s),
        variant: 'text-xs/normal',
        color: 'interactive-active',
        children: E.Z.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
            value: (0, u.FI)(n, t),
            name: c
        })
    });
}
function h(e) {
    let { label: n, imageSrc: t, imageAlt: c, className: s } = e;
    return (0, a.jsxs)('div', {
        className: l()(N.connectedAccountVanityMetadata, N.connectedAccountVanityMetadataItem, s),
        children: [
            (0, a.jsx)(i.Tooltip, {
                text: c,
                children: (e) =>
                    (0, a.jsx)('img', {
                        ...e,
                        src: t,
                        alt: c,
                        className: N.connectedAccountVanityMetadataItemIcon
                    })
            }),
            (0, a.jsx)(i.Text, {
                variant: 'text-xs/normal',
                color: 'interactive-active',
                children: n
            })
        ]
    });
}
function p(e) {
    let { label: n, className: t } = e;
    return (0, a.jsx)(i.Text, {
        variant: 'text-xs/semibold',
        color: 'interactive-active',
        className: l()(N.connectedAccountVanityMetadata, N.connectedAccountVanityMetadataTag, t),
        children: n
    });
}

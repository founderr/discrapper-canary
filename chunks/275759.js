n.d(t, {
    FI: function () {
        return g;
    },
    O1: function () {
        return r;
    },
    SJ: function () {
        return h;
    },
    Ur: function () {
        return T;
    },
    kQ: function () {
        return I;
    },
    n_: function () {
        return m;
    },
    xp: function () {
        return p;
    }
});
var r,
    i = n(512722),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(729594);
n(442837);
var u = n(627420);
n(704215);
var c = n(277800);
n(605236);
var d = n(430824);
n(496675);
var _ = n(856651),
    E = n(981631),
    f = n(689938);
let h = ['426537812993638400', '1042836142560645130', '296023718839451649', '979802510766268446', '1031611223235637258', '512333785338216465'];
function p(e) {
    let { query: t } = l.parse(e, !0),
        { code: n, state: r, error: i, error_description: o } = t;
    return (
        a()(!Array.isArray(n), 'Received multiple query param values for code'),
        a()(!Array.isArray(r), 'Received multiple query param values for state'),
        a()(!Array.isArray(i), 'Received multiple query param values for error'),
        a()(!Array.isArray(o), 'Received multiple query param values for error_description'),
        {
            code: n,
            state: r,
            error: i,
            errorDescription: o
        }
    );
}
function m(e) {
    let { connectionType: t, connectionMetadataField: n, operator: r, operatorText: i, value: a } = e,
        o = null,
        s = Math.round(Number(a));
    switch (r) {
        case _.iO.EQUAL:
            (o = f.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_BE), t === E.ABu.PAYPAL && n === _.PC.PAYPAL_VERIFIED && (o = f.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_A);
            break;
        case _.iO.NOT_EQUAL:
            o = f.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_NOT_BE;
            break;
        case _.iO.LESS_THAN:
            (o = f.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_MOST), (s = Math.max(0, s - 1));
            break;
        case _.iO.GREATER_THAN:
            (o = f.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_LEAST), (s = Math.max(0, s + 1));
            break;
        case void 0:
        case null:
            return null;
    }
    if ((null != i && (o = i), o instanceof u._H && null != r))
        switch (t) {
            case E.ABu.REDDIT:
                switch (n) {
                    case _.PC.CREATED_AT:
                        o = o.format({ platformQuantityHook: () => f.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({ days: s }) });
                        break;
                    case _.PC.REDDIT_TOTAL_KARMA:
                        o = o.format({ platformQuantityHook: () => f.Z.Messages.CONNECTIONS_ROLE_RULE_REDDIT_KARMA.format({ karma: s }) });
                        break;
                    case _.PC.REDDIT_GOLD:
                        o = o.format({ platformQuantityHook: () => f.Z.Messages.CONNECTIONS_ROLE_RULE_REDDIT_GOLD });
                        break;
                    case _.PC.REDDIT_MOD:
                        o = o.format({ platformQuantityHook: () => f.Z.Messages.CONNECTIONS_ROLE_RULE_REDDIT_MODERATOR });
                        break;
                    default:
                        return null;
                }
                break;
            case E.ABu.STEAM:
                switch (n) {
                    case _.PC.CREATED_AT:
                        o = o.format({ platformQuantityHook: () => f.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({ days: s }) });
                        break;
                    case _.PC.STEAM_GAME_COUNT:
                        o = o.format({ platformQuantityHook: () => f.Z.Messages.CONNECTIONS_ROLE_RULE_STEAM_GAMES.format({ count: s }) });
                        break;
                    case _.PC.STEAM_ITEM_COUNT_TF2:
                        o = o.format({ platformQuantityHook: () => f.Z.Messages.CONNECTIONS_ROLE_RULE_STEAM_TF2_ITEMS.format({ count: s }) });
                        break;
                    case _.PC.STEAM_ITEM_COUNT_DOTA2:
                        o = o.format({ platformQuantityHook: () => f.Z.Messages.CONNECTIONS_ROLE_RULE_STEAM_DOTA2_ITEMS.format({ count: s }) });
                        break;
                    default:
                        return null;
                }
                break;
            case E.ABu.TWITTER:
                switch (n) {
                    case _.PC.CREATED_AT:
                        o = o.format({ platformQuantityHook: () => f.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({ days: s }) });
                        break;
                    case _.PC.TWITTER_VERIFIED:
                        o = o.format({ platformQuantityHook: () => f.Z.Messages.CONNECTIONS_ROLE_RULE_TWITTER_VERIFIED });
                        break;
                    case _.PC.TWITTER_FOLLOWERS_COUNT:
                        o = o.format({ platformQuantityHook: () => f.Z.Messages.CONNECTIONS_ROLE_RULE_TWITTER_FOLLOWERS.format({ count: s }) });
                        break;
                    case _.PC.TWITTER_STATUSES_COUNT:
                        o = o.format({ platformQuantityHook: () => f.Z.Messages.CONNECTIONS_ROLE_RULE_TWITTER_STATUSES.format({ count: s }) });
                        break;
                    default:
                        return null;
                }
                break;
            case E.ABu.PAYPAL:
                switch (n) {
                    case _.PC.CREATED_AT:
                        o = o.format({ platformQuantityHook: () => f.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({ days: s }) });
                        break;
                    case _.PC.PAYPAL_VERIFIED:
                        o = o.format({ platformQuantityHook: () => f.Z.Messages.CONNECTIONS_ROLE_RULE_PAYPAL_VERIFIED });
                        break;
                    default:
                        return null;
                }
                break;
            case E.ABu.EBAY:
                switch (n) {
                    case _.PC.CREATED_AT:
                        o = o.format({ platformQuantityHook: () => f.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({ days: s }) });
                        break;
                    case _.PC.EBAY_TOP_RATED_SELLER:
                        o = o.format({ platformQuantityHook: () => f.Z.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER });
                        break;
                    case _.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                        o = o.format({ platformQuantityHook: () => f.Z.Messages.CONNECTIONS_ROLE_RULE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE.format({ value: s }) });
                        break;
                    case _.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                        o = o.format({ platformQuantityHook: () => f.Z.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT.format({ count: s }) });
                        break;
                    case _.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                        o = o.format({ platformQuantityHook: () => f.Z.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT.format({ count: s }) });
                        break;
                    default:
                        return null;
                }
                break;
            case E.ABu.TIKTOK:
                switch (n) {
                    case _.PC.TIKTOK_VERIFIED:
                        o = o.format({ platformQuantityHook: () => f.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_VERIFIED });
                        break;
                    case _.PC.TIKTOK_FOLLOWER_COUNT:
                        o = o.format({ platformQuantityHook: () => f.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWER_COUNT.format({ count: s }) });
                        break;
                    case _.PC.TIKTOK_FOLLOWING_COUNT:
                        o = o.format({ platformQuantityHook: () => f.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWING_COUNT.format({ count: s }) });
                        break;
                    case _.PC.TIKTOK_LIKES_COUNT:
                        o = o.format({ platformQuantityHook: () => f.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_LIKES_COUNT.format({ count: s }) });
                        break;
                    default:
                        return null;
                }
                break;
            default:
                return null;
        }
    return o;
}
function I(e, t) {
    return Object.values(t).some((e) => {
        var t;
        return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null;
    });
}
function T(e) {
    var t, n;
    let { guildMember: r, guild: i, guildRoles: o, channel: l, onlyChannelConnectionRoles: u = !1 } = e;
    if (null == r) return null;
    if ((null == i && null != l && (i = d.Z.getGuild(l.getGuildId())), null == i)) return null;
    let { id: _ } = i;
    null == o && (o = d.Z.getRoles(_));
    let E = r.roles
            .map((e) => o[e])
            .filter((e) => {
                var t;
                return (null == e ? void 0 : null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null;
            })
            .sort((e, t) => (a()(null != e && null != t, 'roleA or roleB is null'), t.position - e.position)),
        f = s().intersection(E, (0, c.Z)(l));
    return f.length > 0 ? (null !== (t = f[0]) && void 0 !== t ? t : null) : u ? null : null !== (n = E[0]) && void 0 !== n ? n : null;
}
function g(e, t) {
    if (null == e || '' === e) return null;
    let n = new Date(e);
    return !(n instanceof Date) || isNaN(n.getTime())
        ? null
        : n.toLocaleDateString(t, {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
          });
}
!(function (e) {
    (e[(e.AND = 0)] = 'AND'), (e[(e.OR = 1)] = 'OR');
})(r || (r = {}));

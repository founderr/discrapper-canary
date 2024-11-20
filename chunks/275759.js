n.d(t, {
    FI: function () {
        return b;
    },
    O1: function () {
        return i;
    },
    SJ: function () {
        return m;
    },
    Ur: function () {
        return I;
    },
    kQ: function () {
        return v;
    },
    n_: function () {
        return E;
    },
    xp: function () {
        return g;
    }
});
var r,
    i,
    a = n(512722),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(729594);
n(442837);
var c = n(627420);
n(704215);
var d = n(277800);
n(605236);
var f = n(430824);
n(496675);
var _ = n(856651),
    p = n(981631),
    h = n(388032);
let m = ['426537812993638400', '1042836142560645130', '296023718839451649', '979802510766268446', '1031611223235637258', '512333785338216465'];
function g(e) {
    let { query: t } = u.parse(e, !0),
        { code: n, state: r, error: i, error_description: a } = t;
    return (
        s()(!Array.isArray(n), 'Received multiple query param values for code'),
        s()(!Array.isArray(r), 'Received multiple query param values for state'),
        s()(!Array.isArray(i), 'Received multiple query param values for error'),
        s()(!Array.isArray(a), 'Received multiple query param values for error_description'),
        {
            code: n,
            state: r,
            error: i,
            errorDescription: a
        }
    );
}
function E(e) {
    let { connectionType: t, connectionMetadataField: n, operator: r, operatorText: i, value: a } = e,
        s = null,
        o = Math.round(Number(a));
    switch (r) {
        case _.iO.EQUAL:
            (s = h.t.H97H4e), t === p.ABu.PAYPAL && n === _.PC.PAYPAL_VERIFIED && (s = h.t['N95b+f']);
            break;
        case _.iO.NOT_EQUAL:
            s = h.t['D9B/q6'];
            break;
        case _.iO.LESS_THAN:
            (s = h.t['3ru8/P']), (o = Math.max(0, o - 1));
            break;
        case _.iO.GREATER_THAN:
            (s = h.t.wCVDHh), (o = Math.max(0, o + 1));
            break;
        case void 0:
        case null:
            return null;
    }
    if ((null != i && (s = i), s instanceof c._H && null != r))
        switch (t) {
            case p.ABu.REDDIT:
                switch (n) {
                    case _.PC.CREATED_AT:
                        s = h.intl.format(s, { platformQuantityHook: () => h.intl.formatToPlainString(h.t.TPbtEh, { days: o }) });
                        break;
                    case _.PC.REDDIT_TOTAL_KARMA:
                        s = h.intl.format(s, { platformQuantityHook: () => h.intl.formatToPlainString(h.t.P2JAER, { karma: o }) });
                        break;
                    case _.PC.REDDIT_GOLD:
                        s = h.intl.format(s, { platformQuantityHook: () => h.intl.string(h.t['+/5TCw']) });
                        break;
                    case _.PC.REDDIT_MOD:
                        s = h.intl.format(s, { platformQuantityHook: () => h.intl.string(h.t['9rPbEh']) });
                        break;
                    default:
                        return null;
                }
                break;
            case p.ABu.STEAM:
                switch (n) {
                    case _.PC.CREATED_AT:
                        s = h.intl.format(s, { platformQuantityHook: () => h.intl.formatToPlainString(h.t.TPbtEh, { days: o }) });
                        break;
                    case _.PC.STEAM_GAME_COUNT:
                        s = h.intl.format(s, { platformQuantityHook: () => h.intl.formatToPlainString(h.t.H9eLoa, { count: o }) });
                        break;
                    case _.PC.STEAM_ITEM_COUNT_TF2:
                        s = h.intl.format(s, { platformQuantityHook: () => h.intl.formatToPlainString(h.t.MceZJy, { count: o }) });
                        break;
                    case _.PC.STEAM_ITEM_COUNT_DOTA2:
                        s = h.intl.format(s, { platformQuantityHook: () => h.intl.formatToPlainString(h.t.dMnRam, { count: o }) });
                        break;
                    default:
                        return null;
                }
                break;
            case p.ABu.TWITTER:
                switch (n) {
                    case _.PC.CREATED_AT:
                        s = h.intl.format(s, { platformQuantityHook: () => h.intl.formatToPlainString(h.t.TPbtEh, { days: o }) });
                        break;
                    case _.PC.TWITTER_VERIFIED:
                        s = h.intl.format(s, { platformQuantityHook: () => h.intl.string(h.t.xRygZG) });
                        break;
                    case _.PC.TWITTER_FOLLOWERS_COUNT:
                        s = h.intl.format(s, { platformQuantityHook: () => h.intl.formatToPlainString(h.t.bkajam, { count: o }) });
                        break;
                    case _.PC.TWITTER_STATUSES_COUNT:
                        s = h.intl.format(s, { platformQuantityHook: () => h.intl.formatToPlainString(h.t.MI7NKi, { count: o }) });
                        break;
                    default:
                        return null;
                }
                break;
            case p.ABu.PAYPAL:
                switch (n) {
                    case _.PC.CREATED_AT:
                        s = h.intl.format(s, { platformQuantityHook: () => h.intl.formatToPlainString(h.t.TPbtEh, { days: o }) });
                        break;
                    case _.PC.PAYPAL_VERIFIED:
                        s = h.intl.format(s, { platformQuantityHook: () => h.intl.string(h.t.slSQuL) });
                        break;
                    default:
                        return null;
                }
                break;
            case p.ABu.EBAY:
                switch (n) {
                    case _.PC.CREATED_AT:
                        s = h.intl.format(s, { platformQuantityHook: () => h.intl.formatToPlainString(h.t.TPbtEh, { days: o }) });
                        break;
                    case _.PC.EBAY_TOP_RATED_SELLER:
                        s = h.intl.format(s, { platformQuantityHook: () => h.intl.string(h.t.TEEYwc) });
                        break;
                    case _.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                        s = h.intl.format(s, { platformQuantityHook: () => h.intl.formatToPlainString(h.t.rl9Vg4, { value: o }) });
                        break;
                    case _.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                        s = h.intl.format(s, { platformQuantityHook: () => h.intl.formatToPlainString(h.t.QP5W1d, { count: o }) });
                        break;
                    case _.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                        s = h.intl.format(s, { platformQuantityHook: () => h.intl.formatToPlainString(h.t['6ZFYdH'], { count: o }) });
                        break;
                    default:
                        return null;
                }
                break;
            case p.ABu.TIKTOK:
                switch (n) {
                    case _.PC.TIKTOK_VERIFIED:
                        s = h.intl.format(s, { platformQuantityHook: () => h.intl.string(h.t.uv7et7) });
                        break;
                    case _.PC.TIKTOK_FOLLOWER_COUNT:
                        s = h.intl.format(s, { platformQuantityHook: () => h.intl.formatToPlainString(h.t.qIPDR0, { count: o }) });
                        break;
                    case _.PC.TIKTOK_FOLLOWING_COUNT:
                        s = h.intl.format(s, { platformQuantityHook: () => h.intl.formatToPlainString(h.t.zRta4e, { count: o }) });
                        break;
                    case _.PC.TIKTOK_LIKES_COUNT:
                        s = h.intl.format(s, { platformQuantityHook: () => h.intl.formatToPlainString(h.t.ar0WW1, { count: o }) });
                        break;
                    default:
                        return null;
                }
                break;
            default:
                return null;
        }
    return s;
}
function v(e, t) {
    return Object.values(t).some((e) => {
        var t;
        return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null;
    });
}
function I(e) {
    var t, n;
    let { guildMember: r, guild: i, guildRoles: a, channel: o, onlyChannelConnectionRoles: u = !1 } = e;
    if (null == r) return null;
    if ((null == i && null != o && (i = f.Z.getGuild(o.getGuildId())), null == i)) return null;
    let { id: c } = i;
    null == a && (a = f.Z.getRoles(c));
    let _ = r.roles
            .map((e) => a[e])
            .filter((e) => {
                var t;
                return (null == e ? void 0 : null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null;
            })
            .sort((e, t) => (s()(null != e && null != t, 'roleA or roleB is null'), t.position - e.position)),
        p = l().intersection(_, (0, d.Z)(o));
    return p.length > 0 ? (null !== (t = p[0]) && void 0 !== t ? t : null) : u ? null : null !== (n = _[0]) && void 0 !== n ? n : null;
}
function b(e, t) {
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
((r = i || (i = {}))[(r.AND = 0)] = 'AND'), (r[(r.OR = 1)] = 'OR');

r.d(n, {
    FI: function () {
        return N;
    },
    O1: function () {
        return i;
    },
    SJ: function () {
        return T;
    },
    Ur: function () {
        return A;
    },
    kQ: function () {
        return S;
    },
    n_: function () {
        return y;
    },
    xp: function () {
        return b;
    }
});
var i,
    a = r(610138);
var s = r(216116);
var o = r(78328);
var l = r(815648);
var u = r(47120);
var c = r(512722),
    d = r.n(c),
    f = r(392711),
    _ = r.n(f);
r(442837);
var h = r(627420);
r(704215);
var p = r(277800);
r(605236);
var m = r(430824);
r(496675);
var g = r(591759),
    E = r(856651),
    v = r(981631),
    I = r(388032);
let T = ['426537812993638400', '1042836142560645130', '296023718839451649', '979802510766268446', '1031611223235637258', '512333785338216465'];
function b(e) {
    var n;
    let { searchParams: r } = null !== (n = g.Z.toURLSafe(e)) && void 0 !== n ? n : { searchParams: new URLSearchParams() },
        { code: i, state: a, error: s, error_description: o } = Object.fromEntries(r);
    return (
        d()(!Array.isArray(i), 'Received multiple query param values for code'),
        d()(!Array.isArray(a), 'Received multiple query param values for state'),
        d()(!Array.isArray(s), 'Received multiple query param values for error'),
        d()(!Array.isArray(o), 'Received multiple query param values for error_description'),
        {
            code: i,
            state: a,
            error: s,
            errorDescription: o
        }
    );
}
function y(e) {
    let { connectionType: n, connectionMetadataField: r, operator: i, operatorText: a, value: s } = e,
        o = null,
        l = Math.round(Number(s));
    switch (i) {
        case E.iO.EQUAL:
            (o = I.t.H97H4e), n === v.ABu.PAYPAL && r === E.PC.PAYPAL_VERIFIED && (o = I.t['N95b+f']);
            break;
        case E.iO.NOT_EQUAL:
            o = I.t['D9B/q6'];
            break;
        case E.iO.LESS_THAN:
            (o = I.t['3ru8/P']), (l = Math.max(0, l - 1));
            break;
        case E.iO.GREATER_THAN:
            (o = I.t.wCVDHh), (l = Math.max(0, l + 1));
            break;
        case void 0:
        case null:
            return null;
    }
    if ((null != a && (o = a), o instanceof h._H && null != i))
        switch (n) {
            case v.ABu.REDDIT:
                switch (r) {
                    case E.PC.CREATED_AT:
                        o = I.intl.format(o, { platformQuantityHook: () => I.intl.formatToPlainString(I.t.TPbtEh, { days: l }) });
                        break;
                    case E.PC.REDDIT_TOTAL_KARMA:
                        o = I.intl.format(o, { platformQuantityHook: () => I.intl.formatToPlainString(I.t.P2JAER, { karma: l }) });
                        break;
                    case E.PC.REDDIT_GOLD:
                        o = I.intl.format(o, { platformQuantityHook: () => I.intl.string(I.t['+/5TCw']) });
                        break;
                    case E.PC.REDDIT_MOD:
                        o = I.intl.format(o, { platformQuantityHook: () => I.intl.string(I.t['9rPbEh']) });
                        break;
                    default:
                        return null;
                }
                break;
            case v.ABu.STEAM:
                switch (r) {
                    case E.PC.CREATED_AT:
                        o = I.intl.format(o, { platformQuantityHook: () => I.intl.formatToPlainString(I.t.TPbtEh, { days: l }) });
                        break;
                    case E.PC.STEAM_GAME_COUNT:
                        o = I.intl.format(o, { platformQuantityHook: () => I.intl.formatToPlainString(I.t.H9eLoa, { count: l }) });
                        break;
                    case E.PC.STEAM_ITEM_COUNT_TF2:
                        o = I.intl.format(o, { platformQuantityHook: () => I.intl.formatToPlainString(I.t.MceZJy, { count: l }) });
                        break;
                    case E.PC.STEAM_ITEM_COUNT_DOTA2:
                        o = I.intl.format(o, { platformQuantityHook: () => I.intl.formatToPlainString(I.t.dMnRam, { count: l }) });
                        break;
                    default:
                        return null;
                }
                break;
            case v.ABu.TWITTER:
                switch (r) {
                    case E.PC.CREATED_AT:
                        o = I.intl.format(o, { platformQuantityHook: () => I.intl.formatToPlainString(I.t.TPbtEh, { days: l }) });
                        break;
                    case E.PC.TWITTER_VERIFIED:
                        o = I.intl.format(o, { platformQuantityHook: () => I.intl.string(I.t.xRygZG) });
                        break;
                    case E.PC.TWITTER_FOLLOWERS_COUNT:
                        o = I.intl.format(o, { platformQuantityHook: () => I.intl.formatToPlainString(I.t.bkajam, { count: l }) });
                        break;
                    case E.PC.TWITTER_STATUSES_COUNT:
                        o = I.intl.format(o, { platformQuantityHook: () => I.intl.formatToPlainString(I.t.MI7NKi, { count: l }) });
                        break;
                    default:
                        return null;
                }
                break;
            case v.ABu.PAYPAL:
                switch (r) {
                    case E.PC.CREATED_AT:
                        o = I.intl.format(o, { platformQuantityHook: () => I.intl.formatToPlainString(I.t.TPbtEh, { days: l }) });
                        break;
                    case E.PC.PAYPAL_VERIFIED:
                        o = I.intl.format(o, { platformQuantityHook: () => I.intl.string(I.t.slSQuL) });
                        break;
                    default:
                        return null;
                }
                break;
            case v.ABu.EBAY:
                switch (r) {
                    case E.PC.CREATED_AT:
                        o = I.intl.format(o, { platformQuantityHook: () => I.intl.formatToPlainString(I.t.TPbtEh, { days: l }) });
                        break;
                    case E.PC.EBAY_TOP_RATED_SELLER:
                        o = I.intl.format(o, { platformQuantityHook: () => I.intl.string(I.t.TEEYwc) });
                        break;
                    case E.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                        o = I.intl.format(o, { platformQuantityHook: () => I.intl.formatToPlainString(I.t.rl9Vg4, { value: l }) });
                        break;
                    case E.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                        o = I.intl.format(o, { platformQuantityHook: () => I.intl.formatToPlainString(I.t.QP5W1d, { count: l }) });
                        break;
                    case E.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                        o = I.intl.format(o, { platformQuantityHook: () => I.intl.formatToPlainString(I.t['6ZFYdH'], { count: l }) });
                        break;
                    default:
                        return null;
                }
                break;
            case v.ABu.TIKTOK:
                switch (r) {
                    case E.PC.TIKTOK_VERIFIED:
                        o = I.intl.format(o, { platformQuantityHook: () => I.intl.string(I.t.uv7et7) });
                        break;
                    case E.PC.TIKTOK_FOLLOWER_COUNT:
                        o = I.intl.format(o, { platformQuantityHook: () => I.intl.formatToPlainString(I.t.qIPDR0, { count: l }) });
                        break;
                    case E.PC.TIKTOK_FOLLOWING_COUNT:
                        o = I.intl.format(o, { platformQuantityHook: () => I.intl.formatToPlainString(I.t.zRta4e, { count: l }) });
                        break;
                    case E.PC.TIKTOK_LIKES_COUNT:
                        o = I.intl.format(o, { platformQuantityHook: () => I.intl.formatToPlainString(I.t.ar0WW1, { count: l }) });
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
function S(e, n) {
    return Object.values(n).some((e) => {
        var n;
        return (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) === null;
    });
}
function A(e) {
    var n, r;
    let { guildMember: i, guild: a, guildRoles: s, channel: o, onlyChannelConnectionRoles: l = !1 } = e;
    if (null == i) return null;
    if ((null == a && null != o && (a = m.Z.getGuild(o.getGuildId())), null == a)) return null;
    let { id: u } = a;
    null == s && (s = m.Z.getRoles(u));
    let c = i.roles
            .map((e) => s[e])
            .filter((e) => {
                var n;
                return (null == e ? void 0 : null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) === null;
            })
            .sort((e, n) => (d()(null != e && null != n, 'roleA or roleB is null'), n.position - e.position)),
        f = _().intersection(c, (0, p.Z)(o));
    return f.length > 0 ? (null !== (n = f[0]) && void 0 !== n ? n : null) : l ? null : null !== (r = c[0]) && void 0 !== r ? r : null;
}
function N(e, n) {
    if (null == e || '' === e) return null;
    let r = new Date(e);
    return !(r instanceof Date) || isNaN(r.getTime())
        ? null
        : r.toLocaleDateString(n, {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
          });
}
!(function (e) {
    (e[(e.AND = 0)] = 'AND'), (e[(e.OR = 1)] = 'OR');
})(i || (i = {}));

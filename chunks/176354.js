r.d(n, {
    B6: function () {
        return C;
    },
    qc: function () {
        return R;
    },
    sp: function () {
        return N;
    }
});
var i = r(47120);
var a = r(757143);
var s = r(653041);
var o = r(738774),
    l = r(906411),
    u = r(889564),
    c = r(131704),
    d = r(496675),
    f = r(594174),
    _ = r(768581),
    h = r(563114),
    p = r(956664),
    m = r(74538),
    g = r(981631),
    E = r(185923);
let v = 2097152,
    I = new Set([E.Z5.PREMIUM_LOCKED, E.Z5.ROLE_SUBSCRIPTION_LOCKED]),
    T = new Set([E.Z5.PREMIUM_LOCKED, E.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE, E.Z5.ROLE_SUBSCRIPTION_LOCKED, E.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE]),
    b = new Set([E.Z5.DISALLOW_EXTERNAL, E.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE, E.Z5.ONLY_GUILD_EMOJIS_ALLOWED]);
function y(e) {
    if (e.type === l.B.GUILD) return !0;
    return null != e.guildId;
}
function S(e, n) {
    return null != e && null != n && (!y(e) || n === e.guildId);
}
function A(e) {
    let { emoji: n, channel: r, guildId: i = null == r ? void 0 : r.getGuildId(), intention: a, forceIncludeExternalGuilds: s } = e;
    if (!y(n)) return null;
    let l = null != r && (0, c.zi)(r.type),
        _ = null != r && (0, c.bw)(r.type),
        h = S(n, i),
        p = d.Z.can(g.Plq.USE_EXTERNAL_EMOJIS, r);
    if (a === E.Hz.COMMUNITY_CONTENT) return h && null != n.guildId && n.available ? null : E.Z5.DISALLOW_EXTERNAL;
    if ((!(0, E.Gt)(a) && !S(n, i) && !s) || ((l || _) && !h && !p)) return E.Z5.DISALLOW_EXTERNAL;
    if (null != n.id && !n.available) return E.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE;
    let v = f.default.getCurrentUser();
    if (!m.ZP.canUseEmojisEverywhere(v) && !h) {
        if (a === E.Hz.STATUS) return E.Z5.PREMIUM_LOCKED;
        if (!n.managed) return E.Z5.PREMIUM_LOCKED;
    }
    if ((0, u.Fv)(n, null != i ? i : void 0)) return (0, o.Ol)(n.guildId) ? E.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE : E.Z5.ROLE_SUBSCRIPTION_LOCKED;
    return !n.animated || m.ZP.canUseAnimatedEmojis(v) || (0, u.yH)(n) ? null : E.Z5.PREMIUM_LOCKED;
}
function N(e, n) {
    let r = 0,
        i = 0,
        a = 0,
        s = 0,
        o = 0,
        u = 0;
    return (
        e.forEach((e) => {
            null != e.id ? (e.type === l.B.GUILD && (e.guildId === n ? (e.managed ? s++ : i++) : e.managed ? o++ : a++), e.animated && u++) : r++;
        }),
        {
            unicode: r,
            custom: i,
            customExternal: a,
            managed: s,
            managedExternal: o,
            animated: u
        }
    );
}
async function C(e) {
    return await h.Z.getEmojiColors(e);
}
function R(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
        { id: r, name: i, animated: a } = e;
    return null != r
        ? _.ZP.getEmojiURL({
              id: r,
              size: n,
              animated: null != a && a
          })
        : h.Z.getURL(i);
}
n.ZP = {
    sanitizeEmojiName(e) {
        for (e = e.replace(E.sW, '').slice(0, E.Yc); e.length < 2; ) e += '_';
        return e;
    },
    filterUnsupportedEmojis: h.Z.filterUnsupportedEmojis,
    getURL: h.Z.getURL,
    isInternalEmojiForGuildId: S,
    getEmojiUnavailableReason: A,
    isCustomEmoji: y,
    getEmojiUnavailableReasons(e) {
        let { categoryEmojis: n, channel: r, guildId: i, intention: a, computeUnfiltered: s = !1 } = e,
            o = new Set(),
            l = 0,
            u = s ? [] : void 0,
            c = 0,
            d = !1;
        for (let e of n) {
            let n = A({
                emoji: e,
                channel: r,
                guildId: i,
                intention: a
            });
            null != n ? (b.has(n) ? l++ : s && (null == u || u.push(e)), I.has(n) && (!d && n === E.Z5.PREMIUM_LOCKED && (d = !0), null != e.id && o.add(e.id), c++)) : s && (null == u || u.push(e));
        }
        return {
            emojisDisabled: o,
            emojisUnfiltered: u,
            emojisFilteredCount: l,
            emojisPremiumLockedCount: c,
            emojiNitroLocked: d
        };
    },
    isEmojiFiltered(e) {
        let n = A(e);
        return b.has(n);
    },
    isEmojiPremiumLocked(e) {
        let n = A(e);
        return I.has(n);
    },
    isEmojiCategoryNitroLocked(e) {
        let { categoryEmojis: n, channel: r, guildId: i, intention: a } = e,
            s = !1,
            o = 0;
        for (let e of n) {
            let n = A({
                emoji: e,
                channel: r,
                intention: a,
                guildId: i
            });
            n === E.Z5.PREMIUM_LOCKED ? ((s = !0), o++) : n === E.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE && o++;
        }
        return s && o === n.length;
    },
    isEmojiFilteredOrLocked(e) {
        return this.isEmojiFiltered(e) || this.isEmojiPremiumLocked(e);
    },
    isEmojiDisabled(e) {
        let n = A(e);
        return T.has(n);
    },
    isFileTooBig: (e) => e.size > v,
    isDataTooBig: (e) => (0, p.QB)(e) > E.h_
};

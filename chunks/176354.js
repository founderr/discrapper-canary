n.d(t, {
    B6: function () {
        return R;
    },
    qc: function () {
        return C;
    },
    sp: function () {
        return O;
    }
});
var r = n(47120);
var i = n(757143);
var a = n(653041);
var o = n(738774),
    s = n(906411),
    l = n(889564),
    u = n(131704),
    c = n(496675),
    d = n(594174),
    _ = n(768581),
    E = n(563114),
    f = n(956664),
    h = n(74538),
    p = n(981631),
    m = n(185923);
let I = 2097152,
    T = new Set([m.Z5.PREMIUM_LOCKED, m.Z5.ROLE_SUBSCRIPTION_LOCKED]),
    g = new Set([m.Z5.PREMIUM_LOCKED, m.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE, m.Z5.ROLE_SUBSCRIPTION_LOCKED, m.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE]),
    S = new Set([m.Z5.DISALLOW_EXTERNAL, m.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE, m.Z5.ONLY_GUILD_EMOJIS_ALLOWED]);
function A(e) {
    if (e.type === s.B.GUILD) return !0;
    return null != e.guildId;
}
function v(e, t) {
    return null != e && null != t && (!A(e) || t === e.guildId);
}
function N(e) {
    let { emoji: t, channel: n, guildId: r = null == n ? void 0 : n.getGuildId(), intention: i, forceIncludeExternalGuilds: a } = e;
    if (!A(t)) return null;
    let s = null != n && (0, u.zi)(n.type),
        _ = null != n && (0, u.bw)(n.type),
        E = v(t, r),
        f = c.Z.can(p.Plq.USE_EXTERNAL_EMOJIS, n);
    if (i === m.Hz.COMMUNITY_CONTENT) return E && null != t.guildId && t.available ? null : m.Z5.DISALLOW_EXTERNAL;
    if ((!(0, m.Gt)(i) && !v(t, r) && !a) || ((s || _) && !E && !f)) return m.Z5.DISALLOW_EXTERNAL;
    if (null != t.id && !t.available) return m.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE;
    let I = d.default.getCurrentUser();
    if (!h.ZP.canUseEmojisEverywhere(I) && !E) {
        if (i === m.Hz.STATUS) return m.Z5.PREMIUM_LOCKED;
        if (!t.managed) return m.Z5.PREMIUM_LOCKED;
    }
    if ((0, l.Fv)(t, null != r ? r : void 0)) return (0, o.Ol)(t.guildId) ? m.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE : m.Z5.ROLE_SUBSCRIPTION_LOCKED;
    return !t.animated || h.ZP.canUseAnimatedEmojis(I) || (0, l.yH)(t) ? null : m.Z5.PREMIUM_LOCKED;
}
function O(e, t) {
    let n = 0,
        r = 0,
        i = 0,
        a = 0,
        o = 0,
        l = 0;
    return (
        e.forEach((e) => {
            null != e.id ? (e.type === s.B.GUILD && (e.guildId === t ? (e.managed ? a++ : r++) : e.managed ? o++ : i++), e.animated && l++) : n++;
        }),
        {
            unicode: n,
            custom: r,
            customExternal: i,
            managed: a,
            managedExternal: o,
            animated: l
        }
    );
}
async function R(e) {
    return await E.Z.getEmojiColors(e);
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
        { id: n, name: r, animated: i } = e;
    return null != n
        ? _.ZP.getEmojiURL({
              id: n,
              size: t,
              animated: null != i && i
          })
        : E.Z.getURL(r);
}
t.ZP = {
    sanitizeEmojiName(e) {
        for (e = e.replace(m.sW, '').slice(0, m.Yc); e.length < 2; ) e += '_';
        return e;
    },
    filterUnsupportedEmojis: E.Z.filterUnsupportedEmojis,
    getURL: E.Z.getURL,
    isInternalEmojiForGuildId: v,
    getEmojiUnavailableReason: N,
    isCustomEmoji: A,
    getEmojiUnavailableReasons(e) {
        let { categoryEmojis: t, channel: n, guildId: r, intention: i, computeUnfiltered: a = !1 } = e,
            o = new Set(),
            s = 0,
            l = a ? [] : void 0,
            u = 0,
            c = !1;
        for (let e of t) {
            let t = N({
                emoji: e,
                channel: n,
                guildId: r,
                intention: i
            });
            null != t ? (S.has(t) ? s++ : a && (null == l || l.push(e)), T.has(t) && (!c && t === m.Z5.PREMIUM_LOCKED && (c = !0), null != e.id && o.add(e.id), u++)) : a && (null == l || l.push(e));
        }
        return {
            emojisDisabled: o,
            emojisUnfiltered: l,
            emojisFilteredCount: s,
            emojisPremiumLockedCount: u,
            emojiNitroLocked: c
        };
    },
    isEmojiFiltered(e) {
        let t = N(e);
        return S.has(t);
    },
    isEmojiPremiumLocked(e) {
        let t = N(e);
        return T.has(t);
    },
    isEmojiCategoryNitroLocked(e) {
        let { categoryEmojis: t, channel: n, guildId: r, intention: i } = e,
            a = !1,
            o = 0;
        for (let e of t) {
            let t = N({
                emoji: e,
                channel: n,
                intention: i,
                guildId: r
            });
            t === m.Z5.PREMIUM_LOCKED ? ((a = !0), o++) : t === m.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE && o++;
        }
        return a && o === t.length;
    },
    isEmojiFilteredOrLocked(e) {
        return this.isEmojiFiltered(e) || this.isEmojiPremiumLocked(e);
    },
    isEmojiDisabled(e) {
        let t = N(e);
        return g.has(t);
    },
    isFileTooBig: (e) => e.size > I,
    isDataTooBig: (e) => (0, f.QB)(e) > m.h_
};

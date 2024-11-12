n.d(t, {
    B6: function () {
        return S;
    },
    qc: function () {
        return T;
    },
    sp: function () {
        return b;
    }
}),
    n(47120),
    n(757143),
    n(653041);
var r = n(738774),
    i = n(906411),
    a = n(889564),
    s = n(131704),
    o = n(496675),
    l = n(594174),
    u = n(768581),
    c = n(563114),
    d = n(956664),
    f = n(74538),
    _ = n(981631),
    p = n(185923);
let h = new Set([p.Z5.PREMIUM_LOCKED, p.Z5.ROLE_SUBSCRIPTION_LOCKED]),
    m = new Set([p.Z5.PREMIUM_LOCKED, p.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE, p.Z5.ROLE_SUBSCRIPTION_LOCKED, p.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE]),
    g = new Set([p.Z5.DISALLOW_EXTERNAL, p.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE, p.Z5.ONLY_GUILD_EMOJIS_ALLOWED]);
function E(e) {
    if (e.type === i.B.GUILD) return !0;
    return null != e.guildId;
}
function v(e, t) {
    return null != e && null != t && (!E(e) || t === e.guildId);
}
function I(e) {
    let { emoji: t, channel: n, guildId: i = null == n ? void 0 : n.getGuildId(), intention: u, forceIncludeExternalGuilds: c } = e;
    if (!E(t)) return null;
    let d = null != n && (0, s.zi)(n.type),
        h = null != n && (0, s.bw)(n.type),
        m = v(t, i),
        g = o.Z.can(_.Plq.USE_EXTERNAL_EMOJIS, n);
    if (u === p.Hz.COMMUNITY_CONTENT) return m && null != t.guildId && t.available ? null : p.Z5.DISALLOW_EXTERNAL;
    if ((!(0, p.Gt)(u) && !v(t, i) && !c) || ((d || h) && !m && !g)) return p.Z5.DISALLOW_EXTERNAL;
    if (null != t.id && !t.available) return p.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE;
    let I = l.default.getCurrentUser();
    if (!f.ZP.canUseEmojisEverywhere(I) && !m) {
        if (u === p.Hz.STATUS) return p.Z5.PREMIUM_LOCKED;
        if (!t.managed) return p.Z5.PREMIUM_LOCKED;
    }
    if ((0, a.Fv)(t, null != i ? i : void 0)) return (0, r.Ol)(t.guildId) ? p.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE : p.Z5.ROLE_SUBSCRIPTION_LOCKED;
    return !t.animated || f.ZP.canUseAnimatedEmojis(I) || (0, a.yH)(t) ? null : p.Z5.PREMIUM_LOCKED;
}
function b(e, t) {
    let n = 0,
        r = 0,
        a = 0,
        s = 0,
        o = 0,
        l = 0;
    return (
        e.forEach((e) => {
            null != e.id ? (e.type === i.B.GUILD && (e.guildId === t ? (e.managed ? s++ : r++) : e.managed ? o++ : a++), e.animated && l++) : n++;
        }),
        {
            unicode: n,
            custom: r,
            customExternal: a,
            managed: s,
            managedExternal: o,
            animated: l
        }
    );
}
async function S(e) {
    return await c.Z.getEmojiColors(e);
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
        { id: n, name: r, animated: i } = e;
    return null != n
        ? u.ZP.getEmojiURL({
              id: n,
              size: t,
              animated: null != i && i
          })
        : c.Z.getURL(r);
}
t.ZP = {
    sanitizeEmojiName(e) {
        for (e = e.replace(p.sW, '').slice(0, p.Yc); e.length < 2; ) e += '_';
        return e;
    },
    filterUnsupportedEmojis: c.Z.filterUnsupportedEmojis,
    getURL: c.Z.getURL,
    isInternalEmojiForGuildId: v,
    getEmojiUnavailableReason: I,
    isCustomEmoji: E,
    getEmojiUnavailableReasons(e) {
        let { categoryEmojis: t, channel: n, guildId: r, intention: i, computeUnfiltered: a = !1 } = e,
            s = new Set(),
            o = 0,
            l = a ? [] : void 0,
            u = 0,
            c = !1;
        for (let e of t) {
            let t = I({
                emoji: e,
                channel: n,
                guildId: r,
                intention: i
            });
            null != t ? (g.has(t) ? o++ : a && (null == l || l.push(e)), h.has(t) && (!c && t === p.Z5.PREMIUM_LOCKED && (c = !0), null != e.id && s.add(e.id), u++)) : a && (null == l || l.push(e));
        }
        return {
            emojisDisabled: s,
            emojisUnfiltered: l,
            emojisFilteredCount: o,
            emojisPremiumLockedCount: u,
            emojiNitroLocked: c
        };
    },
    isEmojiFiltered(e) {
        let t = I(e);
        return g.has(t);
    },
    isEmojiPremiumLocked(e) {
        let t = I(e);
        return h.has(t);
    },
    isEmojiCategoryNitroLocked(e) {
        let { categoryEmojis: t, channel: n, guildId: r, intention: i } = e,
            a = !1,
            s = 0;
        for (let e of t) {
            let t = I({
                emoji: e,
                channel: n,
                intention: i,
                guildId: r
            });
            t === p.Z5.PREMIUM_LOCKED ? ((a = !0), s++) : t === p.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE && s++;
        }
        return a && s === t.length;
    },
    isEmojiFilteredOrLocked(e) {
        return this.isEmojiFiltered(e) || this.isEmojiPremiumLocked(e);
    },
    isEmojiDisabled(e) {
        let t = I(e);
        return m.has(t);
    },
    isFileTooBig: (e) => e.size > 2097152,
    isDataTooBig: (e) => (0, d.QB)(e) > p.h_
};

"use strict";
n.r(t), n.d(t, {
  countEmoji: function() {
    return N
  },
  getEmojiColors: function() {
    return p
  },
  getEmojiUrl: function() {
    return O
  }
}), n("47120"), n("757143");
var i = n("738774"),
  r = n("906411"),
  s = n("889564"),
  a = n("131704"),
  o = n("496675"),
  l = n("594174"),
  u = n("768581"),
  d = n("563114"),
  _ = n("956664"),
  c = n("74538"),
  E = n("981631"),
  I = n("185923");
let T = new Set([I.EmojiDisabledReasons.PREMIUM_LOCKED, I.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED]),
  f = new Set([I.EmojiDisabledReasons.PREMIUM_LOCKED, I.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE, I.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED, I.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE]),
  S = new Set([I.EmojiDisabledReasons.DISALLOW_EXTERNAL, I.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE, I.EmojiDisabledReasons.ONLY_GUILD_EMOJIS_ALLOWED]);

function h(e) {
  if (e.type === r.EmojiTypes.GUILD) return !0;
  return null != e.guildId
}

function A(e, t) {
  return null != e && null != t && (!h(e) || t === e.guildId)
}

function m(e) {
  let {
    emoji: t,
    channel: n,
    guildId: r = null == n ? void 0 : n.getGuildId(),
    intention: u,
    forceIncludeExternalGuilds: d
  } = e;
  if (!h(t)) return null;
  let _ = null != n && (0, a.isGuildTextChannelType)(n.type),
    T = null != n && (0, a.isGuildVocalChannelType)(n.type),
    f = A(t, r),
    S = o.default.can(E.Permissions.USE_EXTERNAL_EMOJIS, n);
  if (u === I.EmojiIntention.COMMUNITY_CONTENT) return f && null != t.guildId && t.available ? null : I.EmojiDisabledReasons.DISALLOW_EXTERNAL;
  if (!(0, I.isExternalEmojiAllowedForIntention)(u) && !A(t, r) && !d || (_ || T) && !f && !S) return I.EmojiDisabledReasons.DISALLOW_EXTERNAL;
  if (null != t.id && !t.available) return I.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE;
  let m = l.default.getCurrentUser();
  if (!c.default.canUseEmojisEverywhere(m) && !f) {
    if (u === I.EmojiIntention.STATUS) return I.EmojiDisabledReasons.PREMIUM_LOCKED;
    if (!t.managed) return I.EmojiDisabledReasons.PREMIUM_LOCKED
  }
  if ((0, s.isUnusableRoleSubscriptionEmoji)(t, null != r ? r : void 0)) return (0, i.shouldHideGuildPurchaseEntryPoints)(t.guildId) ? I.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE : I.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED;
  return !t.animated || c.default.canUseAnimatedEmojis(m) || (0, s.isPurchasableRoleSubscriptionEmoji)(t) ? null : I.EmojiDisabledReasons.PREMIUM_LOCKED
}

function N(e, t) {
  let n = 0,
    i = 0,
    s = 0,
    a = 0,
    o = 0,
    l = 0;
  return e.forEach(e => {
    null != e.id ? (e.type === r.EmojiTypes.GUILD && (e.guildId === t ? e.managed ? a++ : i++ : e.managed ? o++ : s++), e.animated && l++) : n++
  }), {
    unicode: n,
    custom: i,
    customExternal: s,
    managed: a,
    managedExternal: o,
    animated: l
  }
}
async function p(e) {
  return await d.default.getEmojiColors(e)
}

function O(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
    {
      id: n,
      name: i,
      animated: r
    } = e;
  return null != n ? u.default.getEmojiURL({
    id: n,
    size: t,
    animated: null != r && r
  }) : d.default.getURL(i)
}
t.default = {
  sanitizeEmojiName(e) {
    for (e = e.replace(I.EMOJI_RE, "").slice(0, I.EMOJI_MAX_LENGTH); e.length < 2;) e += "_";
    return e
  },
  filterUnsupportedEmojis: d.default.filterUnsupportedEmojis,
  getURL: d.default.getURL,
  isInternalEmojiForGuildId: A,
  getEmojiUnavailableReason: m,
  isCustomEmoji: h,
  isEmojiFiltered(e) {
    let t = m(e);
    return S.has(t)
  },
  isEmojiPremiumLocked(e) {
    let t = m(e);
    return T.has(t)
  },
  isEmojiCategoryNitroLocked(e) {
    let {
      categoryEmojis: t,
      channel: n,
      guildId: i,
      intention: r
    } = e, s = !1, a = 0;
    for (let e of t) {
      let t = m({
        emoji: e,
        channel: n,
        intention: r,
        guildId: i
      });
      t === I.EmojiDisabledReasons.PREMIUM_LOCKED ? (s = !0, a++) : t === I.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE && a++
    }
    return s && a === t.length
  },
  isEmojiFilteredOrLocked(e) {
    return this.isEmojiFiltered(e) || this.isEmojiPremiumLocked(e)
  },
  isEmojiDisabled(e) {
    let t = m(e);
    return f.has(t)
  },
  isFileTooBig: e => e.size > 2097152,
  isDataTooBig: e => (0, _.dataUriFileSize)(e) > I.EMOJI_MAX_FILESIZE
}
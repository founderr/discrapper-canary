"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("70102"), n("702976");
var r, i = n("316693"),
  o = n("666038"),
  l = n("234251"),
  u = n("315102"),
  a = n("299039"),
  s = n("49111"),
  E = n("680894"),
  _ = n("646718");
new(r = class extends o.default {
  get createdAt() {
    return new Date(a.default.extractTimestamp(this.id))
  }
  hasVerifiedEmailOrPhone() {
    return !0 === this.verified || null != this.phone
  }
  getAvatarURL(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      r = null != e ? this.guildMemberAvatars[e] : void 0;
    return null != r && null != e ? u.default.getGuildMemberAvatarURLSimple({
      guildId: e,
      avatar: r,
      userId: this.id,
      canAnimate: n
    }) : u.default.getUserAvatarURL(this, n, t)
  }
  addGuildAvatarHash(e, t) {
    if (this.guildMemberAvatars[e] === t) return this;
    let n = {
      ...this.guildMemberAvatars,
      [e]: t
    };
    return this.merge({
      guildMemberAvatars: n
    })
  }
  removeGuildAvatarHash(e) {
    if (void 0 === this.guildMemberAvatars[e]) return this;
    let t = {
      ...this.guildMemberAvatars,
      [e]: void 0
    };
    return this.merge({
      guildMemberAvatars: t
    })
  }
  getAvatarSource(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 ? arguments[2] : void 0;
    if (null != e) {
      let r = this.guildMemberAvatars[e];
      if (null != r) return u.default.getAnimatableSourceWithFallback(t, t => u.default.makeSource(u.default.getGuildMemberAvatarURLSimple({
        guildId: e,
        avatar: r,
        userId: this.id,
        canAnimate: t,
        size: n
      })))
    }
    return u.default.getAnimatableSourceWithFallback(t, e => u.default.getUserAvatarSource({
      id: this.id,
      avatar: this.avatar,
      discriminator: this.discriminator,
      bot: this.bot
    }, e, n))
  }
  isClaimed() {
    return null != this.email || null != this.phone
  }
  isPhoneVerified() {
    return null != this.phone
  }
  toString() {
    return "" !== this.username ? this.username : "???"
  }
  get tag() {
    return "".concat(this.username, "#").concat("".concat(this.discriminator).padStart(4, "0"))
  }
  hasPurchasedFlag(e) {
    return (this.purchasedFlags & e) === e
  }
  hasPremiumUsageFlag(e) {
    return (this.premiumUsageFlags & e) === e
  }
  hasHadSKU(e) {
    let t = _.SKU_ID_PURCHASED_FLAGS[e];
    return null != t && this.hasPurchasedFlag(t)
  }
  hasHadPremium() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
      t = this.hasHadSKU(_.PremiumSubscriptionSKUs.TIER_0),
      n = this.hasHadSKU(_.PremiumSubscriptionSKUs.TIER_1),
      r = this.hasHadSKU(_.PremiumSubscriptionSKUs.TIER_2);
    if (e === _.PremiumTypes.TIER_1) return n;
    if (e === _.PremiumTypes.TIER_2) return r;
    if (e === _.PremiumTypes.TIER_0) return t;
    else return t || n || r
  }
  hasFreePremium() {
    return this.isStaff() || this.hasFlag(s.UserFlags.PARTNER) || this.isStaffPersonal()
  }
  hasUrgentMessages() {
    return this.hasFlag(s.UserFlags.HAS_UNREAD_URGENT_MESSAGES)
  }
  isNonUserBot() {
    return this.isSystemUser() || this.bot && this.discriminator === s.NON_USER_BOT_DISCRIMINATOR
  }
  isLocalBot() {
    return this.bot && this.id === s.LOCAL_BOT_ID
  }
  isVerifiedBot() {
    return this.isSystemUser() || this.isLocalBot() || this.hasFlag(s.UserFlags.VERIFIED_BOT)
  }
  isSystemUser() {
    return !0 === this.system
  }
  isClyde() {
    return this.id === E.CLYDE_AI_USER_ID
  }
  hasAvatarForGuild(e) {
    return null != e && null != this.guildMemberAvatars[e]
  }
  isPomelo() {
    return "0" === this.discriminator
  }
  get avatarDecoration() {
    return this.avatarDecorationData
  }
  set avatarDecoration(e) {
    this.avatarDecorationData = (0, l.parseAvatarDecorationData)(e)
  }
  constructor(e) {
    var t, n, r, o, l, u, a, E, _, c, d, T, A, I, S, f, O, R, N, L, p, C, m, P, h, D, g, U, M;
    super(), this.hasFlag = e => !1, this.isStaff = () => !1, this.isStaffPersonal = () => !1, this.hasAnyStaffLevel = () => !1;
    let v = null !== (n = e.premium_type) && void 0 !== n ? n : e.premiumType;
    this.id = e.id, this.username = null !== (r = e.username) && void 0 !== r ? r : "", this.discriminator = null !== (o = e.discriminator) && void 0 !== o ? o : s.NON_USER_BOT_DISCRIMINATOR, this.avatar = null !== (l = e.avatar) && void 0 !== l ? l : null, this.avatarDecoration = null !== (u = e.avatar_decoration_data) && void 0 !== u ? u : e.avatarDecorationData, this.email = null !== (a = e.email) && void 0 !== a ? a : null, this.verified = null !== (E = e.verified) && void 0 !== E && E, this.bot = null !== (_ = e.bot) && void 0 !== _ && _, this.system = null !== (c = e.system) && void 0 !== c && c, this.mfaEnabled = null !== (T = null !== (d = e.mfa_enabled) && void 0 !== d ? d : e.mfaEnabled) && void 0 !== T && T, this.mobile = null !== (A = e.mobile) && void 0 !== A && A, this.desktop = null !== (I = e.desktop) && void 0 !== I && I, this.premiumType = v === s.PREMIUM_TYPE_NONE ? null : v, this.flags = null !== (S = e.flags) && void 0 !== S ? S : 0, this.publicFlags = null !== (O = null !== (f = e.public_flags) && void 0 !== f ? f : e.publicFlags) && void 0 !== O ? O : 0, this.purchasedFlags = null !== (N = null !== (R = e.purchased_flags) && void 0 !== R ? R : e.purchasedFlags) && void 0 !== N ? N : 0, this.premiumUsageFlags = null !== (p = null !== (L = e.premium_usage_flags) && void 0 !== L ? L : e.premiumUsageFlags) && void 0 !== p ? p : 0, this.phone = null !== (C = e.phone) && void 0 !== C ? C : null, this.nsfwAllowed = null !== (m = e.nsfw_allowed) && void 0 !== m ? m : e.nsfwAllowed, this.guildMemberAvatars = null !== (P = e.guildMemberAvatars) && void 0 !== P ? P : {}, this.hasBouncedEmail = null !== (D = null !== (h = e.has_bounced_email) && void 0 !== h ? h : e.hasBouncedEmail) && void 0 !== D && D, this.personalConnectionId = null !== (U = null !== (g = e.personal_connection_id) && void 0 !== g ? g : e.personalConnectionId) && void 0 !== U ? U : null, this.globalName = null !== (M = e.global_name) && void 0 !== M ? M : e.globalName, Object.defineProperties(this, {
      hasFlag: {
        writable: !1,
        configurable: !1,
        value: e => {
          if (e <= 1073741824) return ((this.flags | this.publicFlags) & e) === e;
          let t = i.default.deserialize(this.flags),
            n = i.default.deserialize(this.publicFlags),
            r = i.default.deserialize(e);
          return i.default.has(i.default.combine(t, n), r)
        }
      },
      isStaff: {
        writable: !1,
        configurable: !1,
        value: () => this.hasFlag(s.UserFlags.STAFF)
      },
      isStaffPersonal: {
        writable: !1,
        configurable: !1,
        value: () => !this.hasFlag(s.UserFlags.STAFF) && null != this.personalConnectionId
      },
      hasAnyStaffLevel: {
        writable: !1,
        configurable: !1,
        value: () => this.hasFlag(s.UserFlags.STAFF) || this.hasFlag(s.UserFlags.COLLABORATOR) || this.hasFlag(s.UserFlags.RESTRICTED_COLLABORATOR)
      }
    }), (null === (t = this.globalName) || void 0 === t ? void 0 : t.length) === 0 && (this.globalName = null)
  }
})({
  id: "0"
})
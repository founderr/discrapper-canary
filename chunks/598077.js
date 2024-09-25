n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(411104);
var i = n(789020);
var a = n(149765),
    o = n(81825),
    s = n(864106),
    l = n(768581),
    u = n(709054),
    c = n(981631),
    d = n(308083),
    _ = n(377668),
    E = n(474936);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class h extends o.Z {
    get createdAt() {
        return new Date(u.default.extractTimestamp(this.id));
    }
    hasVerifiedEmailOrPhone() {
        return !0 === this.verified || null != this.phone;
    }
    getAvatarURL(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = null != e ? this.guildMemberAvatars[e] : void 0;
        return null != r && null != e
            ? l.ZP.getGuildMemberAvatarURLSimple({
                  guildId: e,
                  avatar: r,
                  userId: this.id,
                  canAnimate: n
              })
            : l.ZP.getUserAvatarURL(this, n, t);
    }
    addGuildAvatarHash(e, t) {
        if (this.guildMemberAvatars[e] === t) return this;
        let n = {
            ...this.guildMemberAvatars,
            [e]: t
        };
        return this.merge({ guildMemberAvatars: n });
    }
    removeGuildAvatarHash(e) {
        if (void 0 === this.guildMemberAvatars[e]) return this;
        let t = {
            ...this.guildMemberAvatars,
            [e]: void 0
        };
        return this.merge({ guildMemberAvatars: t });
    }
    getAvatarSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (null != e) {
            let r = this.guildMemberAvatars[e];
            if (null != r)
                return l.ZP.getAnimatableSourceWithFallback(t, (t) =>
                    l.ZP.makeSource(
                        l.ZP.getGuildMemberAvatarURLSimple({
                            guildId: e,
                            avatar: r,
                            userId: this.id,
                            canAnimate: t,
                            size: n
                        })
                    )
                );
        }
        return l.ZP.getAnimatableSourceWithFallback(t, (e) =>
            l.ZP.getUserAvatarSource(
                {
                    id: this.id,
                    avatar: this.avatar,
                    discriminator: this.discriminator,
                    bot: this.bot
                },
                e,
                n
            )
        );
    }
    isClaimed() {
        return null != this.email || null != this.phone;
    }
    isPhoneVerified() {
        return null != this.phone;
    }
    toString() {
        return '' !== this.username ? this.username : '???';
    }
    get tag() {
        return ''.concat(this.username, '#').concat(''.concat(this.discriminator).padStart(4, '0'));
    }
    hasPurchasedFlag(e) {
        return (this.purchasedFlags & e) === e;
    }
    hasPremiumUsageFlag(e) {
        return (this.premiumUsageFlags & e) === e;
    }
    hasHadSKU(e) {
        let t = E.vL[e];
        return null != t && this.hasPurchasedFlag(t);
    }
    hasHadPremium() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = this.hasHadSKU(E.Si.TIER_0),
            n = this.hasHadSKU(E.Si.TIER_1),
            r = this.hasHadSKU(E.Si.TIER_2);
        if (e === E.p9.TIER_1) return n;
        if (e === E.p9.TIER_2) return r;
        if (e === E.p9.TIER_0) return t;
        else return t || n || r;
    }
    hasFreePremium() {
        return this.isStaff() || this.hasFlag(c.xW$.PARTNER) || this.isStaffPersonal();
    }
    hasUrgentMessages() {
        return this.hasFlag(c.xW$.HAS_UNREAD_URGENT_MESSAGES);
    }
    isNonUserBot() {
        return this.isSystemUser() || (this.bot && this.discriminator === c.fo$);
    }
    isLocalBot() {
        return this.bot && this.id === c.LAt;
    }
    isVerifiedBot() {
        return this.isSystemUser() || this.isLocalBot() || this.hasFlag(c.xW$.VERIFIED_BOT);
    }
    isSystemUser() {
        return !0 === this.system;
    }
    isClyde() {
        return this.id === _.fL;
    }
    hasAvatarForGuild(e) {
        return null != e && null != this.guildMemberAvatars[e];
    }
    isPomelo() {
        return '0' === this.discriminator;
    }
    isProvisional() {
        return this.hasFlag(c.xW$.PROVISIONAL_ACCOUNT);
    }
    get avatarDecoration() {
        return this.avatarDecorationData;
    }
    set avatarDecoration(e) {
        this.avatarDecorationData = (0, s.FG)(e);
    }
    constructor(e) {
        var t, n, r, i, o, s, l, u, _, E, h, p, m, I, T, g, S, A, v, N, O, R, C, y, b, L, D, M, P, U;
        super(), f(this, 'id', void 0), f(this, 'username', void 0), f(this, 'discriminator', void 0), f(this, 'avatar', void 0), f(this, 'avatarDecorationData', void 0), f(this, 'banner', void 0), f(this, 'email', void 0), f(this, 'verified', void 0), f(this, 'bot', void 0), f(this, 'system', void 0), f(this, 'mfaEnabled', void 0), f(this, 'mobile', void 0), f(this, 'desktop', void 0), f(this, 'premiumType', void 0), f(this, 'flags', void 0), f(this, 'publicFlags', void 0), f(this, 'purchasedFlags', void 0), f(this, 'premiumUsageFlags', void 0), f(this, 'phone', void 0), f(this, 'nsfwAllowed', void 0), f(this, 'guildMemberAvatars', void 0), f(this, 'hasBouncedEmail', void 0), f(this, 'personalConnectionId', void 0), f(this, 'globalName', void 0), f(this, 'clan', void 0), f(this, 'hasFlag', (e) => !1), f(this, 'isStaff', () => !1), f(this, 'isStaffPersonal', () => !1), f(this, 'hasAnyStaffLevel', () => !1);
        let w = null !== (n = e.premium_type) && void 0 !== n ? n : e.premiumType;
        (this.id = e.id),
            (this.username = null !== (r = e.username) && void 0 !== r ? r : ''),
            (this.discriminator = null !== (i = e.discriminator) && void 0 !== i ? i : c.fo$),
            (this.avatar = null !== (o = e.avatar) && void 0 !== o ? o : null),
            (this.avatarDecoration = null !== (s = e.avatar_decoration_data) && void 0 !== s ? s : e.avatarDecorationData),
            (this.email = null !== (l = e.email) && void 0 !== l ? l : null),
            (this.verified = null !== (u = e.verified) && void 0 !== u && u),
            (this.bot = null !== (_ = e.bot) && void 0 !== _ && _),
            (this.system = null !== (E = e.system) && void 0 !== E && E),
            (this.mfaEnabled = null !== (p = null !== (h = e.mfa_enabled) && void 0 !== h ? h : e.mfaEnabled) && void 0 !== p && p),
            (this.mobile = null !== (m = e.mobile) && void 0 !== m && m),
            (this.desktop = null !== (I = e.desktop) && void 0 !== I && I),
            (this.premiumType = w === c.WND ? null : w),
            (this.flags = null !== (T = e.flags) && void 0 !== T ? T : 0),
            (this.publicFlags = null !== (S = null !== (g = e.public_flags) && void 0 !== g ? g : e.publicFlags) && void 0 !== S ? S : 0),
            (this.purchasedFlags = null !== (v = null !== (A = e.purchased_flags) && void 0 !== A ? A : e.purchasedFlags) && void 0 !== v ? v : 0),
            (this.premiumUsageFlags = null !== (O = null !== (N = e.premium_usage_flags) && void 0 !== N ? N : e.premiumUsageFlags) && void 0 !== O ? O : 0),
            (this.phone = null !== (R = e.phone) && void 0 !== R ? R : null),
            (this.nsfwAllowed = null !== (C = e.nsfw_allowed) && void 0 !== C ? C : e.nsfwAllowed),
            (this.guildMemberAvatars = null !== (y = e.guildMemberAvatars) && void 0 !== y ? y : {}),
            (this.hasBouncedEmail = null !== (L = null !== (b = e.has_bounced_email) && void 0 !== b ? b : e.hasBouncedEmail) && void 0 !== L && L),
            (this.personalConnectionId = null !== (M = null !== (D = e.personal_connection_id) && void 0 !== D ? D : e.personalConnectionId) && void 0 !== M ? M : null),
            (this.globalName = null !== (P = e.global_name) && void 0 !== P ? P : e.globalName),
            (this.banner = e.banner),
            (this.clan = (0, d.yi)(null !== (U = e.clan) && void 0 !== U ? U : null)),
            Object.defineProperties(this, {
                hasFlag: {
                    writable: !1,
                    configurable: !1,
                    value: (e) => {
                        if (e <= 1073741824) return ((this.flags | this.publicFlags) & e) === e;
                        let t = a.vB(this.flags),
                            n = a.vB(this.publicFlags),
                            r = a.vB(e);
                        return a.e$(a.$e(t, n), r);
                    }
                },
                isStaff: {
                    writable: !1,
                    configurable: !1,
                    value: () => this.hasFlag(c.xW$.STAFF)
                },
                isStaffPersonal: {
                    writable: !1,
                    configurable: !1,
                    value: () => !this.hasFlag(c.xW$.STAFF) && null != this.personalConnectionId
                },
                hasAnyStaffLevel: {
                    writable: !1,
                    configurable: !1,
                    value: () => this.hasFlag(c.xW$.STAFF) || this.hasFlag(c.xW$.COLLABORATOR) || this.hasFlag(c.xW$.RESTRICTED_COLLABORATOR)
                }
            }),
            (null === (t = this.globalName) || void 0 === t ? void 0 : t.length) === 0 && (this.globalName = null);
    }
}
new h({ id: '0' });

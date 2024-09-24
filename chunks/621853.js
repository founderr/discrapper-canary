n(47120), n(789020);
var r = n(392711),
    i = n.n(r),
    a = n(846519),
    s = n(726542),
    o = n(706454),
    l = n(598077),
    u = n(314897),
    c = n(430824),
    d = n(158776),
    _ = n(412788),
    E = n(771845),
    f = n(291175),
    h = n(215023),
    p = n(689938);
function I(e, t, n) {
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
let m = new Map(),
    T = new Set(),
    S = new Map(),
    g = new Map(),
    A = new Map(),
    N = new Map(),
    O = new Map(),
    R = new Map(),
    v = new Map(),
    C = !1;
function y(e) {
    let t = S.get(e);
    if ((null == t ? void 0 : t.profileEffectExpiresAt) == null) return;
    let n = 1000 * t.profileEffectExpiresAt + h.Cm - Date.now();
    if (n <= 0) (t.profileEffectId = void 0), (t.profileEffectExpiresAt = void 0), A.delete(e), z.emitChange();
    else {
        let t = A.get(e);
        if (null == t) return;
        t.start(Math.min(2147483647, n), () => y(e));
    }
}
function L(e, t) {
    let n = g.get(e);
    if (null == n) return;
    let r = n.get(t);
    if ((null == r ? void 0 : r.profileEffectExpiresAt) == null) return;
    let i = N.get(e),
        a = 1000 * r.profileEffectExpiresAt + h.Cm - Date.now();
    if (a <= 0)
        n.set(t, {
            ...r,
            profileEffectId: void 0,
            profileEffectExpiresAt: void 0
        }),
            null != i && i.delete(t),
            z.emitChange();
    else {
        if (null == i) return;
        let n = i.get(t);
        if (null == n) return;
        n.start(Math.min(2147483647, a), () => L(e, t));
    }
}
function D() {
    m.clear(), T.clear(), S.clear(), g.clear(), O.clear(), R.clear(), v.clear(), (C = !1);
}
function b(e) {
    let { userId: t } = e;
    T.add(t);
}
function M(e) {
    let { userId: t } = e;
    T.delete(t);
}
function P(e) {
    return i()(e)
        .map((e) => ({
            key: e.id,
            user: new l.Z(e),
            status: d.Z.getStatus(e.id)
        }))
        .sortBy((e) => {
            let { user: t } = e;
            return t.username.toLowerCase();
        })
        .value();
}
function U(e) {
    T.delete(e.userId), O.set(e.userId, P(e.mutualFriends)), R.set(e.userId, e.mutualFriends.length);
}
function w(e) {
    var t, n, r, i, o, l, u, d, _, h, I, T, C, D, b, M, U, w, x, G, k, B, F, V, H, Z;
    if (((null === (t = e.guild_member_profile) || void 0 === t ? void 0 : t.guild_id) != null && (null === (D = m.get(e.user.id)) || void 0 === D || D.delete(e.guild_member_profile.guild_id)), null != e.mutual_guilds)) {
        let t = {};
        e.mutual_guilds.forEach((e) => {
            let { id: n, nick: r } = e,
                i = c.Z.getGuild(n);
            null != i &&
                (t[n] = {
                    guild: i,
                    nick: r
                });
        }),
            v.set(
                e.user.id,
                E.ZP.getFlattenedGuildIds()
                    .filter((e) => null != t[e])
                    .map((e) => ({
                        guild: t[e].guild,
                        nick: t[e].nick
                    }))
            );
    }
    if (null != e.mutual_friends_count) {
        let t = e.mutual_friends_count;
        R.set(e.user.id, t);
    }
    null != e.mutual_friends && (O.set(e.user.id, P(e.mutual_friends)), R.set(e.user.id, e.mutual_friends.length));
    let Y = null != e.premium_since ? new Date(e.premium_since) : null,
        j = null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
        W = e.application;
    if (
        (S.set(e.user.id, {
            userId: e.user.id,
            banner: null === (n = e.user_profile) || void 0 === n ? void 0 : n.banner,
            accentColor: null === (r = e.user_profile) || void 0 === r ? void 0 : r.accent_color,
            themeColors: null === (i = e.user_profile) || void 0 === i ? void 0 : i.theme_colors,
            popoutAnimationParticleType: null === (o = e.user_profile) || void 0 === o ? void 0 : o.popout_animation_particle_type,
            bio: null !== (b = null === (l = e.user_profile) || void 0 === l ? void 0 : l.bio) && void 0 !== b ? b : '',
            profileEffectId: null === (d = e.user_profile) || void 0 === d ? void 0 : null === (u = d.profile_effect) || void 0 === u ? void 0 : u.id,
            profileEffectExpiresAt: null === (h = e.user_profile) || void 0 === h ? void 0 : null === (_ = h.profile_effect) || void 0 === _ ? void 0 : _.expires_at,
            pronouns: null !== (M = null === (I = e.user_profile) || void 0 === I ? void 0 : I.pronouns) && void 0 !== M ? M : '',
            connectedAccounts: null !== (U = e.connected_accounts.filter((e) => s.Z.isSupported(e.type))) && void 0 !== U ? U : [],
            applicationRoleConnections: null !== (w = e.application_role_connections) && void 0 !== w ? w : [],
            premiumSince: Y,
            premiumType: e.premium_type,
            premiumGuildSince: j,
            lastFetched: Date.now(),
            legacyUsername: e.legacy_username,
            application:
                null != W
                    ? {
                          id: W.id,
                          primarySkuId: W.primary_sku_id,
                          customInstallUrl: W.custom_install_url,
                          installParams: W.install_params,
                          integrationTypesConfig: W.integration_types_config,
                          flags: W.flags,
                          popularApplicationCommandIds: W.popular_application_command_ids,
                          storefront_available: W.storefront_available
                      }
                    : null,
            badges:
                null != e.badges
                    ? e.badges.map((e) => {
                          if ('premium' === e.id && null != Y)
                              return {
                                  ...e,
                                  description: p.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({ date: Y })
                              };
                          let t = (0, f.gn)(e.id);
                          return null != t && null != Y
                              ? {
                                    ...e,
                                    description: (0, f.sZ)(t, Y)
                                }
                              : e.id.startsWith('guild_booster_lvl') && null != j
                                ? {
                                      ...e,
                                      description: p.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({ date: j })
                                  }
                                : e;
                      })
                    : e.badges
        }),
        (null === (C = e.user_profile) || void 0 === C ? void 0 : null === (T = C.profile_effect) || void 0 === T ? void 0 : T.expires_at) != null)
    ) {
        let t = new a.V7();
        A.set(e.user.id, t), y(e.user.id);
    }
    if (null != e.guild_member_profile) {
        let t = {
                userId: e.user.id,
                guildId: e.guild_member_profile.guild_id,
                banner: e.guild_member_profile.banner,
                accentColor: e.guild_member_profile.accent_color,
                themeColors: null === (x = e.guild_member_profile) || void 0 === x ? void 0 : x.theme_colors,
                popoutAnimationParticleType: null === (G = e.guild_member_profile) || void 0 === G ? void 0 : G.popout_animation_particle_type,
                profileEffectId: null === (B = e.guild_member_profile) || void 0 === B ? void 0 : null === (k = B.profile_effect) || void 0 === k ? void 0 : k.id,
                profileEffectExpiresAt: null === (V = e.guild_member_profile) || void 0 === V ? void 0 : null === (F = V.profile_effect) || void 0 === F ? void 0 : F.expires_at,
                bio: e.guild_member_profile.bio,
                pronouns: e.guild_member_profile.pronouns,
                badges: e.guild_badges
            },
            n = g.get(e.user.id);
        if (null != n) n.set(e.guild_member_profile.guild_id, t);
        else {
            let n = new Map();
            n.set(e.guild_member_profile.guild_id, t), g.set(e.user.id, n);
        }
        if ((null === (Z = e.guild_member_profile) || void 0 === Z ? void 0 : null === (H = Z.profile_effect) || void 0 === H ? void 0 : H.expires_at) != null) {
            let t = new a.V7(),
                n = N.get(e.user.id);
            if (null != n) n.set(e.guild_member_profile.guild_id, t);
            else {
                let n = new Map();
                n.set(e.guild_member_profile.guild_id, t), N.set(e.user.id, n);
            }
            L(e.user.id, e.guild_member_profile.guild_id);
        }
    }
}
function x(e) {
    let { userId: t, guildId: n } = e;
    if (null == n) return;
    let r = m.get(t);
    if (null != r) r.add(n);
    else {
        let e = new Set();
        e.add(n), m.set(t, e);
    }
}
function G(e) {
    var t, n;
    let { userId: r, guildId: i, apiError: a } = e;
    null != i && (null === (t = m.get(r)) || void 0 === t || t.delete(i));
    let s =
        null !== (n = S.get(r)) && void 0 !== n
            ? n
            : {
                  connectedAccounts: [],
                  applicationRoleConnections: [],
                  premiumSince: null,
                  premiumGuildSince: null,
                  application: null,
                  legacyUsername: null,
                  userId: r,
                  banner: null,
                  accentColor: null,
                  bio: '',
                  pronouns: '',
                  premiumType: null,
                  lastFetched: 0,
                  fetchError: void 0
              };
    (s.lastFetched = Date.now()), (s.fetchError = a), S.set(r, s);
}
function k(e) {
    C = !0;
}
function B(e) {
    (C = !1),
        null != e.guild_id
            ? !(function (e) {
                  let { userId: t, guild_id: n, accent_color: r, banner: i, bio: s, pronouns: o, popout_animation_particle_type: l, theme_colors: u, profileEffectId: c, profileEffectExpiresAt: d } = e,
                      _ = g.get(t);
                  if (null == n || null == _) return !1;
                  let E = _.get(n);
                  if (null == E) return !1;
                  if (
                      (_.set(n, {
                          ...E,
                          accentColor: r,
                          banner: i,
                          bio: s,
                          pronouns: o,
                          popoutAnimationParticleType: l,
                          themeColors: u,
                          profileEffectId: c,
                          profileEffectExpiresAt: d
                      }),
                      null != d)
                  ) {
                      let e = new a.V7(),
                          r = N.get(t);
                      if (null != r) r.set(n, e);
                      else {
                          let r = new Map();
                          r.set(n, e), N.set(t, r);
                      }
                      L(t, n);
                  }
              })(e)
            : !(function (e) {
                  let { userId: t, accent_color: n, banner: r, bio: i, pronouns: s, popout_animation_particle_type: o, theme_colors: l, profileEffectId: u, profileEffectExpiresAt: c } = e,
                      d = S.get(t);
                  if (null == d) return !1;
                  if (
                      (S.set(t, {
                          ...d,
                          accentColor: n,
                          banner: r,
                          bio: i,
                          pronouns: s,
                          popoutAnimationParticleType: o,
                          themeColors: l,
                          profileEffectId: u,
                          profileEffectExpiresAt: c
                      }),
                      null != c)
                  ) {
                      let e = new a.V7();
                      A.set(t, e), y(t);
                  }
              })(e);
}
function F(e) {
    C = !1;
}
function V(e) {
    var t, n;
    let r = e.user.id,
        i = S.get(r);
    if (null == i || (null !== (n = null === (t = m.get(r)) || void 0 === t ? void 0 : t.size) && void 0 !== n ? n : 0) > 0) return !1;
    W(i);
}
function H(e) {
    if (v.size < 1 && S.size < 1) return !1;
    for (let e of (v.clear(), S.values())) W(e);
}
function Z(e) {
    let t = e.user.id,
        n = S.get(t);
    if (null == v.get(t) && null == n) return !1;
    v.delete(t), W(n);
}
function Y(e) {
    let t = e.relationship.id,
        n = S.get(t);
    if (!O.has(t) && !R.has(t) && null == n) return !1;
    O.delete(t), R.delete(t), W(n);
}
function j() {
    m.clear(), S.clear(), g.clear();
}
function W(e) {
    null != e && ((e.lastFetched = 0), (e.fetchError = void 0));
}
class K extends _.Z {
    initialize() {
        this.waitFor(E.ZP), this.syncWith([o.default], j);
    }
    isFetchingProfile(e, t) {
        var n;
        let r = m.get(e);
        return null == t ? (null !== (n = null == r ? void 0 : r.size) && void 0 !== n ? n : 0) > 0 : null == r ? void 0 : r.has(t);
    }
    isFetchingFriends(e) {
        return T.has(e);
    }
    get isSubmitting() {
        return C;
    }
    getUserProfile(e) {
        return S.get(e);
    }
    getGuildMemberProfile(e, t) {
        var n, r;
        return null == t ? null : null !== (r = null === (n = g.get(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== r ? r : null;
    }
    getMutualFriends(e) {
        return O.get(e);
    }
    getMutualFriendsCount(e) {
        return R.get(e);
    }
    getMutualGuilds(e) {
        return v.get(e);
    }
    takeSnapshot() {
        let e = u.default.getId(),
            t = S.get(e);
        return null != t
            ? {
                  version: K.LATEST_SNAPSHOT_VERSION,
                  data: [
                      {
                          userId: e,
                          profile: t
                      }
                  ]
              }
            : {
                  version: K.LATEST_SNAPSHOT_VERSION,
                  data: []
              };
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: x,
            USER_PROFILE_FETCH_FAILURE: G,
            USER_PROFILE_FETCH_SUCCESS: w,
            USER_PROFILE_UPDATE_START: k,
            USER_PROFILE_UPDATE_SUCCESS: B,
            USER_PROFILE_UPDATE_FAILURE: F,
            MUTUAL_FRIENDS_FETCH_START: b,
            MUTUAL_FRIENDS_FETCH_SUCCESS: U,
            MUTUAL_FRIENDS_FETCH_FAILURE: M,
            USER_UPDATE: V,
            GUILD_MEMBER_UPDATE: V,
            GUILD_JOIN: H,
            GUILD_DELETE: H,
            GUILD_MEMBER_ADD: Z,
            GUILD_MEMBER_REMOVE: Z,
            RELATIONSHIP_ADD: Y,
            RELATIONSHIP_REMOVE: Y,
            RELATIONSHIP_UPDATE: Y,
            LOGOUT: D
        }),
            I(this, 'loadCache', () => {
                let e = this.readSnapshot(K.LATEST_SNAPSHOT_VERSION);
                null != e &&
                    e.forEach((e) => {
                        let { userId: t, profile: n } = e;
                        null != t && (null != n ? S.set(t, n) : S.delete(t));
                    });
            });
    }
}
I(K, 'displayName', 'UserProfileStore'), I(K, 'LATEST_SNAPSHOT_VERSION', 1);
let z = new K();
t.Z = z;

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
let m = Symbol('NO GUILD ID'),
    T = new Map(),
    S = new Set(),
    g = new Map(),
    A = new Map(),
    N = new Map(),
    R = new Map(),
    O = new Map(),
    v = new Map(),
    C = new Map(),
    L = !1;
function D(e) {
    let t = g.get(e);
    if ((null == t ? void 0 : t.profileEffectExpiresAt) == null) return;
    let n = 1000 * t.profileEffectExpiresAt + h.Cm - Date.now();
    if (n <= 0) (t.profileEffectId = void 0), (t.profileEffectExpiresAt = void 0), N.delete(e), q.emitChange();
    else {
        let t = N.get(e);
        if (null == t) return;
        t.start(Math.min(2147483647, n), () => D(e));
    }
}
function y(e, t) {
    let n = A.get(e);
    if (null == n) return;
    let r = n.get(t);
    if ((null == r ? void 0 : r.profileEffectExpiresAt) == null) return;
    let i = R.get(e),
        a = 1000 * r.profileEffectExpiresAt + h.Cm - Date.now();
    if (a <= 0)
        n.set(t, {
            ...r,
            profileEffectId: void 0,
            profileEffectExpiresAt: void 0
        }),
            null != i && i.delete(t),
            q.emitChange();
    else {
        if (null == i) return;
        let n = i.get(t);
        if (null == n) return;
        n.start(Math.min(2147483647, a), () => y(e, t));
    }
}
function b() {
    T.clear(), S.clear(), g.clear(), A.clear(), O.clear(), v.clear(), C.clear(), (L = !1);
}
function M(e) {
    let { userId: t } = e;
    S.add(t);
}
function P(e) {
    let { userId: t } = e;
    S.delete(t);
}
function U(e) {
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
function w(e) {
    S.delete(e.userId), O.set(e.userId, U(e.mutualFriends)), v.set(e.userId, e.mutualFriends.length);
}
function x(e) {
    var t, n, r, i, o, l, u, d, _, h, I, S, L, b, M, P, w, x, G, k, B, F, V, H, Z, Y, j;
    let W = null !== (M = null === (t = e.guild_member_profile) || void 0 === t ? void 0 : t.guild_id) && void 0 !== M ? M : m;
    if ((null === (n = T.get(e.user.id)) || void 0 === n || n.delete(W), null != e.mutual_guilds)) {
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
            C.set(
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
        v.set(e.user.id, t);
    }
    null != e.mutual_friends && (O.set(e.user.id, U(e.mutual_friends)), v.set(e.user.id, e.mutual_friends.length));
    let K = null != e.premium_since ? new Date(e.premium_since) : null,
        z = null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
        q = e.application;
    if (
        (g.set(e.user.id, {
            userId: e.user.id,
            banner: null === (r = e.user_profile) || void 0 === r ? void 0 : r.banner,
            accentColor: null === (i = e.user_profile) || void 0 === i ? void 0 : i.accent_color,
            themeColors: null === (o = e.user_profile) || void 0 === o ? void 0 : o.theme_colors,
            popoutAnimationParticleType: null === (l = e.user_profile) || void 0 === l ? void 0 : l.popout_animation_particle_type,
            bio: null !== (P = null === (u = e.user_profile) || void 0 === u ? void 0 : u.bio) && void 0 !== P ? P : '',
            profileEffectId: null === (_ = e.user_profile) || void 0 === _ ? void 0 : null === (d = _.profile_effect) || void 0 === d ? void 0 : d.id,
            profileEffectExpiresAt: null === (I = e.user_profile) || void 0 === I ? void 0 : null === (h = I.profile_effect) || void 0 === h ? void 0 : h.expires_at,
            pronouns: null !== (w = null === (S = e.user_profile) || void 0 === S ? void 0 : S.pronouns) && void 0 !== w ? w : '',
            connectedAccounts: null !== (x = e.connected_accounts.filter((e) => s.Z.isSupported(e.type))) && void 0 !== x ? x : [],
            applicationRoleConnections: null !== (G = e.application_role_connections) && void 0 !== G ? G : [],
            premiumSince: K,
            premiumType: e.premium_type,
            premiumGuildSince: z,
            lastFetched: Date.now(),
            legacyUsername: e.legacy_username,
            application:
                null != q
                    ? {
                          id: q.id,
                          primarySkuId: q.primary_sku_id,
                          customInstallUrl: q.custom_install_url,
                          installParams: q.install_params,
                          integrationTypesConfig: q.integration_types_config,
                          flags: q.flags,
                          popularApplicationCommandIds: q.popular_application_command_ids,
                          storefront_available: q.storefront_available,
                          name: q.name
                      }
                    : null,
            badges:
                null != e.badges
                    ? e.badges.map((e) => {
                          if ('premium' === e.id && null != K)
                              return {
                                  ...e,
                                  description: p.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({ date: K })
                              };
                          let t = (0, f.gn)(e.id);
                          return null != t && null != K
                              ? {
                                    ...e,
                                    description: (0, f.sZ)(t, K)
                                }
                              : e.id.startsWith('guild_booster_lvl') && null != z
                                ? {
                                      ...e,
                                      description: p.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({ date: z })
                                  }
                                : e;
                      })
                    : e.badges
        }),
        (null === (b = e.user_profile) || void 0 === b ? void 0 : null === (L = b.profile_effect) || void 0 === L ? void 0 : L.expires_at) != null)
    ) {
        let t = new a.V7();
        N.set(e.user.id, t), D(e.user.id);
    }
    if (null != e.guild_member_profile) {
        let t = {
                userId: e.user.id,
                guildId: e.guild_member_profile.guild_id,
                banner: e.guild_member_profile.banner,
                accentColor: e.guild_member_profile.accent_color,
                themeColors: null === (k = e.guild_member_profile) || void 0 === k ? void 0 : k.theme_colors,
                popoutAnimationParticleType: null === (B = e.guild_member_profile) || void 0 === B ? void 0 : B.popout_animation_particle_type,
                profileEffectId: null === (V = e.guild_member_profile) || void 0 === V ? void 0 : null === (F = V.profile_effect) || void 0 === F ? void 0 : F.id,
                profileEffectExpiresAt: null === (Z = e.guild_member_profile) || void 0 === Z ? void 0 : null === (H = Z.profile_effect) || void 0 === H ? void 0 : H.expires_at,
                bio: e.guild_member_profile.bio,
                pronouns: e.guild_member_profile.pronouns,
                badges: e.guild_badges
            },
            n = A.get(e.user.id);
        if (null != n) n.set(e.guild_member_profile.guild_id, t);
        else {
            let n = new Map();
            n.set(e.guild_member_profile.guild_id, t), A.set(e.user.id, n);
        }
        if ((null === (j = e.guild_member_profile) || void 0 === j ? void 0 : null === (Y = j.profile_effect) || void 0 === Y ? void 0 : Y.expires_at) != null) {
            let t = new a.V7(),
                n = R.get(e.user.id);
            if (null != n) n.set(e.guild_member_profile.guild_id, t);
            else {
                let n = new Map();
                n.set(e.guild_member_profile.guild_id, t), R.set(e.user.id, n);
            }
            y(e.user.id, e.guild_member_profile.guild_id);
        }
    }
}
function G(e) {
    let { userId: t, guildId: n } = e,
        r = null != n ? n : m,
        i = T.get(t);
    if (null != i) i.add(r);
    else {
        let e = new Set();
        e.add(r), T.set(t, e);
    }
}
function k(e) {
    var t, n;
    let { userId: r, guildId: i, apiError: a } = e;
    null === (t = T.get(r)) || void 0 === t || t.delete(null != i ? i : m);
    let s =
        null !== (n = g.get(r)) && void 0 !== n
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
    (s.lastFetched = Date.now()), (s.fetchError = a), g.set(r, s);
}
function B(e) {
    L = !0;
}
function F(e) {
    (L = !1),
        null != e.guild_id
            ? !(function (e) {
                  let { userId: t, guild_id: n, accent_color: r, banner: i, bio: s, pronouns: o, popout_animation_particle_type: l, theme_colors: u, profileEffectId: c, profileEffectExpiresAt: d } = e,
                      _ = A.get(t);
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
                          r = R.get(t);
                      if (null != r) r.set(n, e);
                      else {
                          let r = new Map();
                          r.set(n, e), R.set(t, r);
                      }
                      y(t, n);
                  }
              })(e)
            : !(function (e) {
                  let { userId: t, accent_color: n, banner: r, bio: i, pronouns: s, popout_animation_particle_type: o, theme_colors: l, profileEffectId: u, profileEffectExpiresAt: c } = e,
                      d = g.get(t);
                  if (null == d) return !1;
                  if (
                      (g.set(t, {
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
                      N.set(t, e), D(t);
                  }
              })(e);
}
function V(e) {
    L = !1;
}
function H(e) {
    var t, n;
    let r = e.user.id,
        i = g.get(r);
    if (null == i || (null !== (n = null === (t = T.get(r)) || void 0 === t ? void 0 : t.size) && void 0 !== n ? n : 0) > 0) return !1;
    K(i);
}
function Z(e) {
    if (C.size < 1 && g.size < 1) return !1;
    for (let e of (C.clear(), g.values())) K(e);
}
function Y(e) {
    let t = e.user.id,
        n = g.get(t);
    if (null == C.get(t) && null == n) return !1;
    C.delete(t), K(n);
}
function j(e) {
    let t = e.relationship.id,
        n = g.get(t);
    if (!O.has(t) && !v.has(t) && null == n) return !1;
    O.delete(t), v.delete(t), K(n);
}
function W() {
    T.clear(), g.clear(), A.clear();
}
function K(e) {
    null != e && ((e.lastFetched = 0), (e.fetchError = void 0));
}
class z extends _.Z {
    initialize() {
        this.waitFor(E.ZP), this.syncWith([o.default], W);
    }
    isFetchingProfile(e, t) {
        let n = T.get(e);
        return null != n && n.has(null != t ? t : m);
    }
    isFetchingFriends(e) {
        return S.has(e);
    }
    get isSubmitting() {
        return L;
    }
    getUserProfile(e) {
        return g.get(e);
    }
    getGuildMemberProfile(e, t) {
        var n, r;
        return null == t ? null : null !== (r = null === (n = A.get(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== r ? r : null;
    }
    getMutualFriends(e) {
        return O.get(e);
    }
    getMutualFriendsCount(e) {
        return v.get(e);
    }
    getMutualGuilds(e) {
        return C.get(e);
    }
    takeSnapshot() {
        let e = u.default.getId(),
            t = g.get(e);
        return null != t
            ? {
                  version: z.LATEST_SNAPSHOT_VERSION,
                  data: [
                      {
                          userId: e,
                          profile: t
                      }
                  ]
              }
            : {
                  version: z.LATEST_SNAPSHOT_VERSION,
                  data: []
              };
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: G,
            USER_PROFILE_FETCH_FAILURE: k,
            USER_PROFILE_FETCH_SUCCESS: x,
            USER_PROFILE_UPDATE_START: B,
            USER_PROFILE_UPDATE_SUCCESS: F,
            USER_PROFILE_UPDATE_FAILURE: V,
            MUTUAL_FRIENDS_FETCH_START: M,
            MUTUAL_FRIENDS_FETCH_SUCCESS: w,
            MUTUAL_FRIENDS_FETCH_FAILURE: P,
            USER_UPDATE: H,
            GUILD_MEMBER_UPDATE: H,
            GUILD_JOIN: Z,
            GUILD_DELETE: Z,
            GUILD_MEMBER_ADD: Y,
            GUILD_MEMBER_REMOVE: Y,
            RELATIONSHIP_ADD: j,
            RELATIONSHIP_REMOVE: j,
            RELATIONSHIP_UPDATE: j,
            LOGOUT: b
        }),
            I(this, 'loadCache', () => {
                let e = this.readSnapshot(z.LATEST_SNAPSHOT_VERSION);
                null != e &&
                    e.forEach((e) => {
                        let { userId: t, profile: n } = e;
                        null != t && (null != n ? g.set(t, n) : g.delete(t));
                    });
            });
    }
}
I(z, 'displayName', 'UserProfileStore'), I(z, 'LATEST_SNAPSHOT_VERSION', 1);
let q = new z();
t.Z = q;

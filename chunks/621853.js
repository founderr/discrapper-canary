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
    f = n(215023),
    h = n(689938);
function p(e, t, n) {
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
let I = {},
    m = new Set(),
    T = {},
    g = {},
    S = {},
    A = {},
    N = {},
    O = {},
    R = {},
    v = !1;
function C(e) {
    let t = T[e];
    if ((null == t ? void 0 : t.profileEffectExpiresAt) == null) return;
    let n = 1000 * t.profileEffectExpiresAt + f.Cm - Date.now();
    if (n <= 0)
        (T[e] = {
            ...t,
            profileEffectId: void 0,
            profileEffectExpiresAt: void 0
        }),
            delete S[e],
            W.emitChange();
    else {
        let t = S[e];
        if (null == t) return;
        t.start(Math.min(2147483647, n), () => C(e));
    }
}
function y(e, t) {
    let n = g[e];
    if (null == n) return;
    let r = n[t];
    if ((null == r ? void 0 : r.profileEffectExpiresAt) == null) return;
    let i = 1000 * r.profileEffectExpiresAt + f.Cm - Date.now();
    if (i <= 0)
        (n[t] = {
            ...r,
            profileEffectId: void 0,
            profileEffectExpiresAt: void 0
        }),
            null != A[e] && delete A[e][t],
            W.emitChange();
    else {
        let n = A[e];
        if (null == n) return;
        let r = n[t];
        if (null == r) return;
        r.start(Math.min(2147483647, i), () => y(e, t));
    }
}
function D() {
    (I = {}), m.clear(), (T = {}), (g = {}), (N = {}), (O = {}), (R = {}), (v = !1);
}
function L(e) {
    let { userId: t } = e;
    m.add(t);
}
function b(e) {
    let { userId: t } = e;
    m.delete(t);
}
function M(e) {
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
function P(e) {
    m.delete(e.userId), (N[e.userId] = M(e.mutualFriends)), (O[e.userId] = e.mutualFriends.length);
}
function U(e) {
    var t, n, r, i, o, l, u, d, _, f, p, m, v, D, L, b, P, U, w, x, G, k, B, F, V, H;
    if ((null === (n = I[e.user.id]) || void 0 === n || n.delete(null === (t = e.guild_member_profile) || void 0 === t ? void 0 : t.guild_id), null != e.mutual_guilds)) {
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
            (R[e.user.id] = E.ZP.getFlattenedGuildIds()
                .filter((e) => null != t[e])
                .map((e) => ({
                    guild: t[e].guild,
                    nick: t[e].nick
                })));
    }
    if (null != e.mutual_friends_count) {
        let t = e.mutual_friends_count;
        O[e.user.id] = t;
    }
    null != e.mutual_friends && ((N[e.user.id] = M(e.mutual_friends)), (O[e.user.id] = e.mutual_friends.length));
    let Z = null != e.premium_since ? new Date(e.premium_since) : null,
        Y = null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
        j = e.application;
    if (
        ((T[e.user.id] = {
            userId: e.user.id,
            banner: null === (r = e.user_profile) || void 0 === r ? void 0 : r.banner,
            accentColor: null === (i = e.user_profile) || void 0 === i ? void 0 : i.accent_color,
            themeColors: null === (o = e.user_profile) || void 0 === o ? void 0 : o.theme_colors,
            popoutAnimationParticleType: null === (l = e.user_profile) || void 0 === l ? void 0 : l.popout_animation_particle_type,
            bio: null !== (L = null === (u = e.user_profile) || void 0 === u ? void 0 : u.bio) && void 0 !== L ? L : '',
            profileEffectId: null === (_ = e.user_profile) || void 0 === _ ? void 0 : null === (d = _.profile_effect) || void 0 === d ? void 0 : d.id,
            profileEffectExpiresAt: null === (p = e.user_profile) || void 0 === p ? void 0 : null === (f = p.profile_effect) || void 0 === f ? void 0 : f.expires_at,
            pronouns: null !== (b = null === (m = e.user_profile) || void 0 === m ? void 0 : m.pronouns) && void 0 !== b ? b : '',
            connectedAccounts: null !== (P = e.connected_accounts.filter((e) => s.Z.isSupported(e.type))) && void 0 !== P ? P : [],
            applicationRoleConnections: null !== (U = e.application_role_connections) && void 0 !== U ? U : [],
            premiumSince: Z,
            premiumType: e.premium_type,
            premiumGuildSince: Y,
            lastFetched: Date.now(),
            legacyUsername: e.legacy_username,
            application:
                null != j
                    ? {
                          id: j.id,
                          primarySkuId: j.primary_sku_id,
                          customInstallUrl: j.custom_install_url,
                          installParams: j.install_params,
                          integrationTypesConfig: j.integration_types_config,
                          flags: j.flags,
                          popularApplicationCommandIds: j.popular_application_command_ids,
                          storefront_available: j.storefront_available
                      }
                    : null,
            badges:
                null != e.badges
                    ? e.badges.map((e) =>
                          'premium' === e.id && null != Z
                              ? {
                                    ...e,
                                    description: h.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({ date: Z })
                                }
                              : e.id.startsWith('guild_booster_lvl') && null != Y
                                ? {
                                      ...e,
                                      description: h.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({ date: Y })
                                  }
                                : e
                      )
                    : e.badges
        }),
        (null === (D = e.user_profile) || void 0 === D ? void 0 : null === (v = D.profile_effect) || void 0 === v ? void 0 : v.expires_at) != null)
    ) {
        let t = new a.V7();
        (S[e.user.id] = t), C(e.user.id);
    }
    if (null != e.guild_member_profile) {
        let t = {
            userId: e.user.id,
            guildId: e.guild_member_profile.guild_id,
            banner: e.guild_member_profile.banner,
            accentColor: e.guild_member_profile.accent_color,
            themeColors: null === (w = e.guild_member_profile) || void 0 === w ? void 0 : w.theme_colors,
            popoutAnimationParticleType: null === (x = e.guild_member_profile) || void 0 === x ? void 0 : x.popout_animation_particle_type,
            profileEffectId: null === (k = e.guild_member_profile) || void 0 === k ? void 0 : null === (G = k.profile_effect) || void 0 === G ? void 0 : G.id,
            profileEffectExpiresAt: null === (F = e.guild_member_profile) || void 0 === F ? void 0 : null === (B = F.profile_effect) || void 0 === B ? void 0 : B.expires_at,
            bio: e.guild_member_profile.bio,
            pronouns: e.guild_member_profile.pronouns,
            badges: e.guild_badges
        };
        if ((null != g[e.user.id] ? (g[e.user.id][e.guild_member_profile.guild_id] = t) : (g[e.user.id] = { [e.guild_member_profile.guild_id]: t }), (null === (H = e.guild_member_profile) || void 0 === H ? void 0 : null === (V = H.profile_effect) || void 0 === V ? void 0 : V.expires_at) != null)) {
            let t = new a.V7();
            (A[e.user.id][e.guild_member_profile.guild_id] = t), y(e.user.id, e.guild_member_profile.guild_id);
        }
    }
}
function w(e) {
    var t;
    let { userId: n, guildId: r } = e;
    (I[n] = null !== (t = I[n]) && void 0 !== t ? t : new Set()), I[n].add(r);
}
function x(e) {
    var t, n;
    let { userId: r, guildId: i, apiError: a } = e;
    null === (t = I[r]) || void 0 === t || t.delete(i);
    let s =
        null !== (n = T[r]) && void 0 !== n
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
                  pronouns: ''
              };
    T[r] = {
        ...s,
        lastFetched: Date.now(),
        fetchError: a
    };
}
function G(e) {
    v = !0;
}
function k(e) {
    (v = !1),
        null != e.guild_id
            ? !(function (e) {
                  let { userId: t, guild_id: n, accent_color: r, banner: i, bio: s, pronouns: o, popout_animation_particle_type: l, theme_colors: u, profileEffectId: c, profileEffectExpiresAt: d } = e;
                  if (null == n || null == g[t]) return !1;
                  let _ = g[t][n];
                  if (null == _) return !1;
                  if (
                      ((g[t][n] = {
                          ..._,
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
                      let e = new a.V7();
                      null != A[t] ? (A[t][n] = e) : (A[t] = { [n]: e }), y(t, n);
                  }
              })(e)
            : !(function (e) {
                  let { userId: t, accent_color: n, banner: r, bio: i, pronouns: s, popout_animation_particle_type: o, theme_colors: l, profileEffectId: u, profileEffectExpiresAt: c } = e,
                      d = T[t];
                  if (null == d) return !1;
                  if (
                      ((T[t] = {
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
                      (S[t] = e), C(t);
                  }
              })(e);
}
function B(e) {
    v = !1;
}
function F(e) {
    let t = e.user.id;
    if (null == T[t] || (null != I[t] && I[t].size > 0)) return !1;
    (T[t].lastFetched = 0), (T[t].fetchError = void 0);
}
function V(e) {
    if (0 === Object.keys(R).length && 0 === Object.keys(T).length) return !1;
    (R = {}),
        Object.values(T).forEach((e) => {
            (e.lastFetched = 0), (e.fetchError = void 0);
        });
}
function H(e) {
    let t = e.user.id;
    if (null == R[t] && null == T[t]) return !1;
    delete R[t], (T[t].lastFetched = 0), (T[t].fetchError = void 0);
}
function Z(e) {
    let t = e.relationship.id;
    if (null == N[t] && null == O[t] && null == T[t]) return !1;
    delete N[t], delete O[t], (T[t].lastFetched = 0), (T[t].fetchError = void 0);
}
function Y() {
    (I = {}), (T = {}), (g = {});
}
class j extends _.Z {
    initialize() {
        this.waitFor(E.ZP), this.syncWith([o.default], Y);
    }
    isFetchingProfile(e, t) {
        return null != I[e] && (null != t ? I[e].has(t) : I[e].size > 0);
    }
    isFetchingFriends(e) {
        return m.has(e);
    }
    get isSubmitting() {
        return v;
    }
    getUserProfile(e) {
        return T[e];
    }
    getGuildMemberProfile(e, t) {
        var n;
        return null == t ? null : null === (n = g[e]) || void 0 === n ? void 0 : n[t];
    }
    getMutualFriends(e) {
        return N[e];
    }
    getMutualFriendsCount(e) {
        return O[e];
    }
    getMutualGuilds(e) {
        return R[e];
    }
    takeSnapshot() {
        let e = u.default.getId();
        return {
            version: j.LATEST_SNAPSHOT_VERSION,
            data: [
                {
                    userId: e,
                    profile: T[e]
                }
            ]
        };
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: w,
            USER_PROFILE_FETCH_FAILURE: x,
            USER_PROFILE_FETCH_SUCCESS: U,
            USER_PROFILE_UPDATE_START: G,
            USER_PROFILE_UPDATE_SUCCESS: k,
            USER_PROFILE_UPDATE_FAILURE: B,
            MUTUAL_FRIENDS_FETCH_START: L,
            MUTUAL_FRIENDS_FETCH_SUCCESS: P,
            MUTUAL_FRIENDS_FETCH_FAILURE: b,
            USER_UPDATE: F,
            GUILD_MEMBER_UPDATE: F,
            GUILD_JOIN: V,
            GUILD_DELETE: V,
            GUILD_MEMBER_ADD: H,
            GUILD_MEMBER_REMOVE: H,
            RELATIONSHIP_ADD: Z,
            RELATIONSHIP_REMOVE: Z,
            RELATIONSHIP_UPDATE: Z,
            LOGOUT: D
        }),
            p(this, 'loadCache', () => {
                let e = this.readSnapshot(j.LATEST_SNAPSHOT_VERSION);
                null != e &&
                    e.forEach((e) => {
                        let { userId: t, profile: n } = e;
                        T[t] = n;
                    });
            });
    }
}
p(j, 'displayName', 'UserProfileStore'), p(j, 'LATEST_SNAPSHOT_VERSION', 1);
let W = new j();
t.Z = W;

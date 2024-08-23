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
    f = n(689938);
function h(e, t, n) {
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
let p = {},
    I = new Set(),
    m = {},
    T = {},
    g = {},
    S = {},
    A = {},
    N = {},
    O = {},
    v = !1;
function R(e) {
    let t = m[e];
    if ((null == t ? void 0 : t.profileEffectExpiresAt) == null) return;
    let n = 1000 * t.profileEffectExpiresAt - Date.now();
    if (n <= 0)
        (m[e] = {
            ...t,
            profileEffectId: void 0,
            profileEffectExpiresAt: void 0
        }),
            delete g[e],
            j.emitChange();
    else {
        let t = g[e];
        if (null == t) return;
        t.start(Math.min(2147483647, n), () => R(e));
    }
}
function C(e, t) {
    let n = T[e];
    if (null == n) return;
    let r = n[t];
    if ((null == r ? void 0 : r.profileEffectExpiresAt) == null) return;
    let i = 1000 * r.profileEffectExpiresAt - Date.now();
    if (i <= 0)
        (n[t] = {
            ...r,
            profileEffectId: void 0,
            profileEffectExpiresAt: void 0
        }),
            null != S[e] && delete S[e][t],
            j.emitChange();
    else {
        let n = S[e];
        if (null == n) return;
        let r = n[t];
        if (null == r) return;
        r.start(Math.min(2147483647, i), () => C(e, t));
    }
}
function y() {
    (p = {}), I.clear(), (m = {}), (T = {}), (A = {}), (N = {}), (O = {}), (v = !1);
}
function D(e) {
    let { userId: t } = e;
    I.add(t);
}
function L(e) {
    let { userId: t } = e;
    I.delete(t);
}
function b(e) {
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
function M(e) {
    I.delete(e.userId), (A[e.userId] = b(e.mutualFriends)), (N[e.userId] = e.mutualFriends.length);
}
function P(e) {
    var t, n, r, i, o, l, u, d, _, h, I, v, y, D, L, M, P, U, w, x, G, k, B, F, V, H;
    if ((null === (n = p[e.user.id]) || void 0 === n || n.delete(null === (t = e.guild_member_profile) || void 0 === t ? void 0 : t.guild_id), null != e.mutual_guilds)) {
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
            (O[e.user.id] = E.ZP.getFlattenedGuildIds()
                .filter((e) => null != t[e])
                .map((e) => ({
                    guild: t[e].guild,
                    nick: t[e].nick
                })));
    }
    if (null != e.mutual_friends_count) {
        let t = e.mutual_friends_count;
        N[e.user.id] = t;
    }
    null != e.mutual_friends && ((A[e.user.id] = b(e.mutual_friends)), (N[e.user.id] = e.mutual_friends.length));
    let Z = null != e.premium_since ? new Date(e.premium_since) : null,
        Y = null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
        j = e.application;
    if (
        ((m[e.user.id] = {
            userId: e.user.id,
            banner: null === (r = e.user_profile) || void 0 === r ? void 0 : r.banner,
            accentColor: null === (i = e.user_profile) || void 0 === i ? void 0 : i.accent_color,
            themeColors: null === (o = e.user_profile) || void 0 === o ? void 0 : o.theme_colors,
            popoutAnimationParticleType: null === (l = e.user_profile) || void 0 === l ? void 0 : l.popout_animation_particle_type,
            bio: null !== (L = null === (u = e.user_profile) || void 0 === u ? void 0 : u.bio) && void 0 !== L ? L : '',
            profileEffectId: null === (_ = e.user_profile) || void 0 === _ ? void 0 : null === (d = _.profile_effect) || void 0 === d ? void 0 : d.id,
            profileEffectExpiresAt: null === (I = e.user_profile) || void 0 === I ? void 0 : null === (h = I.profile_effect) || void 0 === h ? void 0 : h.expires_at,
            pronouns: null !== (M = null === (v = e.user_profile) || void 0 === v ? void 0 : v.pronouns) && void 0 !== M ? M : '',
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
                                    description: f.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({ date: Z })
                                }
                              : e.id.startsWith('guild_booster_lvl') && null != Y
                                ? {
                                      ...e,
                                      description: f.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({ date: Y })
                                  }
                                : e
                      )
                    : e.badges
        }),
        (null === (D = e.user_profile) || void 0 === D ? void 0 : null === (y = D.profile_effect) || void 0 === y ? void 0 : y.expires_at) != null)
    ) {
        let t = new a.V7();
        (g[e.user.id] = t), R(e.user.id);
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
        if ((null != T[e.user.id] ? (T[e.user.id][e.guild_member_profile.guild_id] = t) : (T[e.user.id] = { [e.guild_member_profile.guild_id]: t }), (null === (H = e.guild_member_profile) || void 0 === H ? void 0 : null === (V = H.profile_effect) || void 0 === V ? void 0 : V.expires_at) != null)) {
            let t = new a.V7();
            (S[e.user.id][e.guild_member_profile.guild_id] = t), C(e.user.id, e.guild_member_profile.guild_id);
        }
    }
}
function U(e) {
    var t;
    let { userId: n, guildId: r } = e;
    (p[n] = null !== (t = p[n]) && void 0 !== t ? t : new Set()), p[n].add(r);
}
function w(e) {
    var t, n;
    let { userId: r, guildId: i, apiError: a } = e;
    null === (t = p[r]) || void 0 === t || t.delete(i);
    let s =
        null !== (n = m[r]) && void 0 !== n
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
    m[r] = {
        ...s,
        lastFetched: Date.now(),
        fetchError: a
    };
}
function x(e) {
    v = !0;
}
function G(e) {
    (v = !1),
        null != e.guild_id
            ? !(function (e) {
                  let { userId: t, guild_id: n, accent_color: r, banner: i, bio: s, pronouns: o, popout_animation_particle_type: l, theme_colors: u, profileEffectId: c, profileEffectExpiresAt: d } = e;
                  if (null == n || null == T[t]) return !1;
                  let _ = T[t][n];
                  if (null == _) return !1;
                  if (
                      ((T[t][n] = {
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
                      null != S[t] ? (S[t][n] = e) : (S[t] = { [n]: e }), C(t, n);
                  }
              })(e)
            : !(function (e) {
                  let { userId: t, accent_color: n, banner: r, bio: i, pronouns: s, popout_animation_particle_type: o, theme_colors: l, profileEffectId: u, profileEffectExpiresAt: c } = e,
                      d = m[t];
                  if (null == d) return !1;
                  if (
                      ((m[t] = {
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
                      (g[t] = e), R(t);
                  }
              })(e);
}
function k(e) {
    v = !1;
}
function B(e) {
    let t = e.user.id;
    if (null == m[t] || (null != p[t] && p[t].size > 0)) return !1;
    (m[t].lastFetched = 0), (m[t].fetchError = void 0);
}
function F(e) {
    if (0 === Object.keys(O).length && 0 === Object.keys(m).length) return !1;
    (O = {}),
        Object.values(m).forEach((e) => {
            (e.lastFetched = 0), (e.fetchError = void 0);
        });
}
function V(e) {
    let t = e.user.id;
    if (null == O[t] && null == m[t]) return !1;
    delete O[t], (m[t].lastFetched = 0), (m[t].fetchError = void 0);
}
function H(e) {
    let t = e.relationship.id;
    if (null == A[t] && null == N[t] && null == m[t]) return !1;
    delete A[t], delete N[t], (m[t].lastFetched = 0), (m[t].fetchError = void 0);
}
function Z() {
    (p = {}), (m = {}), (T = {});
}
class Y extends _.Z {
    initialize() {
        this.waitFor(E.ZP), this.syncWith([o.default], Z);
    }
    isFetchingProfile(e, t) {
        return null != p[e] && (null != t ? p[e].has(t) : p[e].size > 0);
    }
    isFetchingFriends(e) {
        return I.has(e);
    }
    get isSubmitting() {
        return v;
    }
    getUserProfile(e) {
        return m[e];
    }
    getGuildMemberProfile(e, t) {
        var n;
        return null == t ? null : null === (n = T[e]) || void 0 === n ? void 0 : n[t];
    }
    getMutualFriends(e) {
        return A[e];
    }
    getMutualFriendsCount(e) {
        return N[e];
    }
    getMutualGuilds(e) {
        return O[e];
    }
    takeSnapshot() {
        let e = u.default.getId();
        return {
            version: Y.LATEST_SNAPSHOT_VERSION,
            data: [
                {
                    userId: e,
                    profile: m[e]
                }
            ]
        };
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: U,
            USER_PROFILE_FETCH_FAILURE: w,
            USER_PROFILE_FETCH_SUCCESS: P,
            USER_PROFILE_UPDATE_START: x,
            USER_PROFILE_UPDATE_SUCCESS: G,
            USER_PROFILE_UPDATE_FAILURE: k,
            MUTUAL_FRIENDS_FETCH_START: D,
            MUTUAL_FRIENDS_FETCH_SUCCESS: M,
            MUTUAL_FRIENDS_FETCH_FAILURE: L,
            USER_UPDATE: B,
            GUILD_MEMBER_UPDATE: B,
            GUILD_JOIN: F,
            GUILD_DELETE: F,
            GUILD_MEMBER_ADD: V,
            GUILD_MEMBER_REMOVE: V,
            RELATIONSHIP_ADD: H,
            RELATIONSHIP_REMOVE: H,
            RELATIONSHIP_UPDATE: H,
            LOGOUT: y
        }),
            h(this, 'loadCache', () => {
                let e = this.readSnapshot(Y.LATEST_SNAPSHOT_VERSION);
                null != e &&
                    e.forEach((e) => {
                        let { userId: t, profile: n } = e;
                        m[t] = n;
                    });
            });
    }
}
h(Y, 'displayName', 'UserProfileStore'), h(Y, 'LATEST_SNAPSHOT_VERSION', 1);
let j = new Y();
t.Z = j;

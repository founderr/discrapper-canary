var r = n(47120);
var i = n(789020);
var a = n(392711),
    o = n.n(a),
    s = n(846519),
    l = n(726542),
    u = n(706454),
    c = n(598077),
    d = n(314897),
    _ = n(430824),
    E = n(158776),
    f = n(412788),
    h = n(771845),
    p = n(291175),
    m = n(215023),
    I = n(689938);
function T(e, t, n) {
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
let g = new Map(),
    S = new Set(),
    A = 'premium',
    v = 'guild_booster_lvl',
    N = 2147483647,
    O = new Map(),
    R = new Map(),
    C = new Map(),
    y = new Map(),
    b = new Map(),
    L = new Map(),
    D = new Map(),
    M = !1;
function P(e) {
    let t = O.get(e);
    if ((null == t ? void 0 : t.profileEffectExpiresAt) == null) return;
    let n = 1000 * t.profileEffectExpiresAt + m.Cm - Date.now();
    if (n <= 0) (t.profileEffectId = void 0), (t.profileEffectExpiresAt = void 0), C.delete(e), et.emitChange();
    else {
        let t = C.get(e);
        if (null == t) return;
        t.start(Math.min(N, n), () => P(e));
    }
}
function U(e, t) {
    let n = R.get(e);
    if (null == n) return;
    let r = n.get(t);
    if ((null == r ? void 0 : r.profileEffectExpiresAt) == null) return;
    let i = y.get(e),
        a = 1000 * r.profileEffectExpiresAt + m.Cm - Date.now();
    if (a <= 0)
        n.set(t, {
            ...r,
            profileEffectId: void 0,
            profileEffectExpiresAt: void 0
        }),
            null != i && i.delete(t),
            et.emitChange();
    else {
        if (null == i) return;
        let n = i.get(t);
        if (null == n) return;
        n.start(Math.min(N, a), () => U(e, t));
    }
}
function w() {
    g.clear(), S.clear(), O.clear(), R.clear(), b.clear(), L.clear(), D.clear(), (M = !1);
}
function x(e) {
    let { userId: t } = e;
    S.add(t);
}
function G(e) {
    let { userId: t } = e;
    S.delete(t);
}
function k(e) {
    return o()(e)
        .map((e) => ({
            key: e.id,
            user: new c.Z(e),
            status: E.Z.getStatus(e.id)
        }))
        .sortBy((e) => {
            let { user: t } = e;
            return t.username.toLowerCase();
        })
        .value();
}
function B(e) {
    S.delete(e.userId), b.set(e.userId, k(e.mutualFriends)), L.set(e.userId, e.mutualFriends.length);
}
function F(e) {
    var t, n, r, i, a, o, u, c, d, E, f, m, T, S, N, M, w, x, G, B, F, Z, V, H, Y, j;
    if (((null === (t = e.guild_member_profile) || void 0 === t ? void 0 : t.guild_id) != null && (null === (S = g.get(e.user.id)) || void 0 === S || S.delete(e.guild_member_profile.guild_id)), null != e.mutual_guilds)) {
        let t = {};
        e.mutual_guilds.forEach((e) => {
            let { id: n, nick: r } = e,
                i = _.Z.getGuild(n);
            null != i &&
                (t[n] = {
                    guild: i,
                    nick: r
                });
        }),
            D.set(
                e.user.id,
                h.ZP.getFlattenedGuildIds()
                    .filter((e) => null != t[e])
                    .map((e) => ({
                        guild: t[e].guild,
                        nick: t[e].nick
                    }))
            );
    }
    if (null != e.mutual_friends_count) {
        let t = e.mutual_friends_count;
        L.set(e.user.id, t);
    }
    null != e.mutual_friends && (b.set(e.user.id, k(e.mutual_friends)), L.set(e.user.id, e.mutual_friends.length));
    let W = null != e.premium_since ? new Date(e.premium_since) : null,
        K = null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
        z = e.application;
    if (
        (O.set(e.user.id, {
            userId: e.user.id,
            banner: null === (n = e.user_profile) || void 0 === n ? void 0 : n.banner,
            accentColor: null === (r = e.user_profile) || void 0 === r ? void 0 : r.accent_color,
            themeColors: null === (i = e.user_profile) || void 0 === i ? void 0 : i.theme_colors,
            popoutAnimationParticleType: null === (a = e.user_profile) || void 0 === a ? void 0 : a.popout_animation_particle_type,
            bio: null !== (N = null === (o = e.user_profile) || void 0 === o ? void 0 : o.bio) && void 0 !== N ? N : '',
            profileEffectId: null === (c = e.user_profile) || void 0 === c ? void 0 : null === (u = c.profile_effect) || void 0 === u ? void 0 : u.id,
            profileEffectExpiresAt: null === (E = e.user_profile) || void 0 === E ? void 0 : null === (d = E.profile_effect) || void 0 === d ? void 0 : d.expires_at,
            pronouns: null !== (M = null === (f = e.user_profile) || void 0 === f ? void 0 : f.pronouns) && void 0 !== M ? M : '',
            connectedAccounts: null !== (w = e.connected_accounts.filter((e) => l.Z.isSupported(e.type))) && void 0 !== w ? w : [],
            applicationRoleConnections: null !== (x = e.application_role_connections) && void 0 !== x ? x : [],
            premiumSince: W,
            premiumType: e.premium_type,
            premiumGuildSince: K,
            lastFetched: Date.now(),
            legacyUsername: e.legacy_username,
            application:
                null != z
                    ? {
                          id: z.id,
                          primarySkuId: z.primary_sku_id,
                          customInstallUrl: z.custom_install_url,
                          installParams: z.install_params,
                          integrationTypesConfig: z.integration_types_config,
                          flags: z.flags,
                          popularApplicationCommandIds: z.popular_application_command_ids,
                          storefront_available: z.storefront_available
                      }
                    : null,
            badges:
                null != e.badges
                    ? e.badges.map((e) => {
                          if (e.id === A && null != W)
                              return {
                                  ...e,
                                  description: I.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({ date: W })
                              };
                          let t = (0, p.gn)(e.id);
                          return null != t && null != W
                              ? {
                                    ...e,
                                    description: (0, p.sZ)(t, W)
                                }
                              : e.id.startsWith(v) && null != K
                                ? {
                                      ...e,
                                      description: I.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({ date: K })
                                  }
                                : e;
                      })
                    : e.badges
        }),
        (null === (T = e.user_profile) || void 0 === T ? void 0 : null === (m = T.profile_effect) || void 0 === m ? void 0 : m.expires_at) != null)
    ) {
        let t = new s.V7();
        C.set(e.user.id, t), P(e.user.id);
    }
    if (null != e.guild_member_profile) {
        let t = {
                userId: e.user.id,
                guildId: e.guild_member_profile.guild_id,
                banner: e.guild_member_profile.banner,
                accentColor: e.guild_member_profile.accent_color,
                themeColors: null === (G = e.guild_member_profile) || void 0 === G ? void 0 : G.theme_colors,
                popoutAnimationParticleType: null === (B = e.guild_member_profile) || void 0 === B ? void 0 : B.popout_animation_particle_type,
                profileEffectId: null === (Z = e.guild_member_profile) || void 0 === Z ? void 0 : null === (F = Z.profile_effect) || void 0 === F ? void 0 : F.id,
                profileEffectExpiresAt: null === (H = e.guild_member_profile) || void 0 === H ? void 0 : null === (V = H.profile_effect) || void 0 === V ? void 0 : V.expires_at,
                bio: e.guild_member_profile.bio,
                pronouns: e.guild_member_profile.pronouns,
                badges: e.guild_badges
            },
            n = R.get(e.user.id);
        if (null != n) n.set(e.guild_member_profile.guild_id, t);
        else {
            let n = new Map();
            n.set(e.guild_member_profile.guild_id, t), R.set(e.user.id, n);
        }
        if ((null === (j = e.guild_member_profile) || void 0 === j ? void 0 : null === (Y = j.profile_effect) || void 0 === Y ? void 0 : Y.expires_at) != null) {
            let t = new s.V7(),
                n = y.get(e.user.id);
            if (null != n) n.set(e.guild_member_profile.guild_id, t);
            else {
                let n = new Map();
                n.set(e.guild_member_profile.guild_id, t), y.set(e.user.id, n);
            }
            U(e.user.id, e.guild_member_profile.guild_id);
        }
    }
}
function Z(e) {
    let { userId: t, guildId: n } = e;
    if (null == n) return;
    let r = g.get(t);
    if (null != r) r.add(n);
    else {
        let e = new Set();
        e.add(n), g.set(t, e);
    }
}
function V(e) {
    var t, n;
    let { userId: r, guildId: i, apiError: a } = e;
    null != i && (null === (t = g.get(r)) || void 0 === t || t.delete(i));
    let o =
        null !== (n = O.get(r)) && void 0 !== n
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
    (o.lastFetched = Date.now()), (o.fetchError = a), O.set(r, o);
}
function H(e) {
    let { userId: t, accent_color: n, banner: r, bio: i, pronouns: a, popout_animation_particle_type: o, theme_colors: l, profileEffectId: u, profileEffectExpiresAt: c } = e,
        d = O.get(t);
    if (null == d) return !1;
    if (
        (O.set(t, {
            ...d,
            accentColor: n,
            banner: r,
            bio: i,
            pronouns: a,
            popoutAnimationParticleType: o,
            themeColors: l,
            profileEffectId: u,
            profileEffectExpiresAt: c
        }),
        null != c)
    ) {
        let e = new s.V7();
        C.set(t, e), P(t);
    }
}
function Y(e) {
    let { userId: t, guild_id: n, accent_color: r, banner: i, bio: a, pronouns: o, popout_animation_particle_type: l, theme_colors: u, profileEffectId: c, profileEffectExpiresAt: d } = e,
        _ = R.get(t);
    if (null == n || null == _) return !1;
    let E = _.get(n);
    if (null == E) return !1;
    if (
        (_.set(n, {
            ...E,
            accentColor: r,
            banner: i,
            bio: a,
            pronouns: o,
            popoutAnimationParticleType: l,
            themeColors: u,
            profileEffectId: c,
            profileEffectExpiresAt: d
        }),
        null != d)
    ) {
        let e = new s.V7(),
            r = y.get(t);
        if (null != r) r.set(n, e);
        else {
            let r = new Map();
            r.set(n, e), y.set(t, r);
        }
        U(t, n);
    }
}
function j(e) {
    M = !0;
}
function W(e) {
    (M = !1), null != e.guild_id ? Y(e) : H(e);
}
function K(e) {
    M = !1;
}
function z(e) {
    var t, n;
    let r = e.user.id,
        i = O.get(r);
    if (null == i || (null !== (n = null === (t = g.get(r)) || void 0 === t ? void 0 : t.size) && void 0 !== n ? n : 0) > 0) return !1;
    J(i);
}
function q(e) {
    if (D.size < 1 && O.size < 1) return !1;
    for (let e of (D.clear(), O.values())) J(e);
}
function Q(e) {
    let t = e.user.id,
        n = O.get(t);
    if (null == D.get(t) && null == n) return !1;
    D.delete(t), J(n);
}
function X(e) {
    let t = e.relationship.id,
        n = O.get(t);
    if (!b.has(t) && !L.has(t) && null == n) return !1;
    b.delete(t), L.delete(t), J(n);
}
function $() {
    g.clear(), O.clear(), R.clear();
}
function J(e) {
    null != e && ((e.lastFetched = 0), (e.fetchError = void 0));
}
class ee extends f.Z {
    initialize() {
        this.waitFor(h.ZP), this.syncWith([u.default], $);
    }
    isFetchingProfile(e, t) {
        var n;
        let r = g.get(e);
        return null == t ? (null !== (n = null == r ? void 0 : r.size) && void 0 !== n ? n : 0) > 0 : null == r ? void 0 : r.has(t);
    }
    isFetchingFriends(e) {
        return S.has(e);
    }
    get isSubmitting() {
        return M;
    }
    getUserProfile(e) {
        return O.get(e);
    }
    getGuildMemberProfile(e, t) {
        var n, r;
        return null == t ? null : null !== (r = null === (n = R.get(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== r ? r : null;
    }
    getMutualFriends(e) {
        return b.get(e);
    }
    getMutualFriendsCount(e) {
        return L.get(e);
    }
    getMutualGuilds(e) {
        return D.get(e);
    }
    takeSnapshot() {
        let e = d.default.getId(),
            t = O.get(e);
        return null != t
            ? {
                  version: ee.LATEST_SNAPSHOT_VERSION,
                  data: [
                      {
                          userId: e,
                          profile: t
                      }
                  ]
              }
            : {
                  version: ee.LATEST_SNAPSHOT_VERSION,
                  data: []
              };
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: Z,
            USER_PROFILE_FETCH_FAILURE: V,
            USER_PROFILE_FETCH_SUCCESS: F,
            USER_PROFILE_UPDATE_START: j,
            USER_PROFILE_UPDATE_SUCCESS: W,
            USER_PROFILE_UPDATE_FAILURE: K,
            MUTUAL_FRIENDS_FETCH_START: x,
            MUTUAL_FRIENDS_FETCH_SUCCESS: B,
            MUTUAL_FRIENDS_FETCH_FAILURE: G,
            USER_UPDATE: z,
            GUILD_MEMBER_UPDATE: z,
            GUILD_JOIN: q,
            GUILD_DELETE: q,
            GUILD_MEMBER_ADD: Q,
            GUILD_MEMBER_REMOVE: Q,
            RELATIONSHIP_ADD: X,
            RELATIONSHIP_REMOVE: X,
            RELATIONSHIP_UPDATE: X,
            LOGOUT: w
        }),
            T(this, 'loadCache', () => {
                let e = this.readSnapshot(ee.LATEST_SNAPSHOT_VERSION);
                null != e &&
                    e.forEach((e) => {
                        let { userId: t, profile: n } = e;
                        null != t && (null != n ? O.set(t, n) : O.delete(t));
                    });
            });
    }
}
T(ee, 'displayName', 'UserProfileStore'), T(ee, 'LATEST_SNAPSHOT_VERSION', 1);
let et = new ee();
t.Z = et;

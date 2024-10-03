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
    L = new Map(),
    b = new Map(),
    D = new Map(),
    M = '0',
    P = !1;
function U(e) {
    let t = O.get(e);
    if ((null == t ? void 0 : t.profileEffectExpiresAt) == null) return;
    let n = 1000 * t.profileEffectExpiresAt + m.Cm - Date.now();
    if (n <= 0) (t.profileEffectId = void 0), (t.profileEffectExpiresAt = void 0), C.delete(e), en.emitChange();
    else {
        let t = C.get(e);
        if (null == t) return;
        t.start(Math.min(N, n), () => U(e));
    }
}
function w(e, t) {
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
            en.emitChange();
    else {
        if (null == i) return;
        let n = i.get(t);
        if (null == n) return;
        n.start(Math.min(N, a), () => w(e, t));
    }
}
function x() {
    g.clear(), S.clear(), O.clear(), R.clear(), L.clear(), b.clear(), D.clear(), (P = !1);
}
function G(e) {
    let { userId: t } = e;
    S.add(t);
}
function k(e) {
    let { userId: t } = e;
    S.delete(t);
}
function B(e) {
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
function F(e) {
    S.delete(e.userId), L.set(e.userId, B(e.mutualFriends)), b.set(e.userId, e.mutualFriends.length);
}
function Z(e) {
    var t, n, r, i, a, o, u, c, d, E, f, m, T, S, N, P, x, G, k, F, Z, V, H, Y, j, W, K;
    let z = null !== (N = null === (t = e.guild_member_profile) || void 0 === t ? void 0 : t.guild_id) && void 0 !== N ? N : M;
    if ((null === (n = g.get(e.user.id)) || void 0 === n || n.delete(z), null != e.mutual_guilds)) {
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
        b.set(e.user.id, t);
    }
    null != e.mutual_friends && (L.set(e.user.id, B(e.mutual_friends)), b.set(e.user.id, e.mutual_friends.length));
    let q = null != e.premium_since ? new Date(e.premium_since) : null,
        Q = null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
        X = e.application;
    if (
        (O.set(e.user.id, {
            userId: e.user.id,
            banner: null === (r = e.user_profile) || void 0 === r ? void 0 : r.banner,
            accentColor: null === (i = e.user_profile) || void 0 === i ? void 0 : i.accent_color,
            themeColors: null === (a = e.user_profile) || void 0 === a ? void 0 : a.theme_colors,
            popoutAnimationParticleType: null === (o = e.user_profile) || void 0 === o ? void 0 : o.popout_animation_particle_type,
            bio: null !== (P = null === (u = e.user_profile) || void 0 === u ? void 0 : u.bio) && void 0 !== P ? P : '',
            profileEffectId: null === (d = e.user_profile) || void 0 === d ? void 0 : null === (c = d.profile_effect) || void 0 === c ? void 0 : c.id,
            profileEffectExpiresAt: null === (f = e.user_profile) || void 0 === f ? void 0 : null === (E = f.profile_effect) || void 0 === E ? void 0 : E.expires_at,
            pronouns: null !== (x = null === (m = e.user_profile) || void 0 === m ? void 0 : m.pronouns) && void 0 !== x ? x : '',
            connectedAccounts: null !== (G = e.connected_accounts.filter((e) => l.Z.isSupported(e.type))) && void 0 !== G ? G : [],
            applicationRoleConnections: null !== (k = e.application_role_connections) && void 0 !== k ? k : [],
            premiumSince: q,
            premiumType: e.premium_type,
            premiumGuildSince: Q,
            lastFetched: Date.now(),
            legacyUsername: e.legacy_username,
            application:
                null != X
                    ? {
                          id: X.id,
                          primarySkuId: X.primary_sku_id,
                          customInstallUrl: X.custom_install_url,
                          installParams: X.install_params,
                          integrationTypesConfig: X.integration_types_config,
                          flags: X.flags,
                          popularApplicationCommandIds: X.popular_application_command_ids,
                          storefront_available: X.storefront_available
                      }
                    : null,
            badges:
                null != e.badges
                    ? e.badges.map((e) => {
                          if (e.id === A && null != q)
                              return {
                                  ...e,
                                  description: I.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({ date: q })
                              };
                          let t = (0, p.gn)(e.id);
                          return null != t && null != q
                              ? {
                                    ...e,
                                    description: (0, p.sZ)(t, q)
                                }
                              : e.id.startsWith(v) && null != Q
                                ? {
                                      ...e,
                                      description: I.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({ date: Q })
                                  }
                                : e;
                      })
                    : e.badges
        }),
        (null === (S = e.user_profile) || void 0 === S ? void 0 : null === (T = S.profile_effect) || void 0 === T ? void 0 : T.expires_at) != null)
    ) {
        let t = new s.V7();
        C.set(e.user.id, t), U(e.user.id);
    }
    if (null != e.guild_member_profile) {
        let t = {
                userId: e.user.id,
                guildId: e.guild_member_profile.guild_id,
                banner: e.guild_member_profile.banner,
                accentColor: e.guild_member_profile.accent_color,
                themeColors: null === (F = e.guild_member_profile) || void 0 === F ? void 0 : F.theme_colors,
                popoutAnimationParticleType: null === (Z = e.guild_member_profile) || void 0 === Z ? void 0 : Z.popout_animation_particle_type,
                profileEffectId: null === (H = e.guild_member_profile) || void 0 === H ? void 0 : null === (V = H.profile_effect) || void 0 === V ? void 0 : V.id,
                profileEffectExpiresAt: null === (j = e.guild_member_profile) || void 0 === j ? void 0 : null === (Y = j.profile_effect) || void 0 === Y ? void 0 : Y.expires_at,
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
        if ((null === (K = e.guild_member_profile) || void 0 === K ? void 0 : null === (W = K.profile_effect) || void 0 === W ? void 0 : W.expires_at) != null) {
            let t = new s.V7(),
                n = y.get(e.user.id);
            if (null != n) n.set(e.guild_member_profile.guild_id, t);
            else {
                let n = new Map();
                n.set(e.guild_member_profile.guild_id, t), y.set(e.user.id, n);
            }
            w(e.user.id, e.guild_member_profile.guild_id);
        }
    }
}
function V(e) {
    let { userId: t, guildId: n } = e,
        r = null != n ? n : M,
        i = g.get(t);
    if (null != i) i.add(r);
    else {
        let e = new Set();
        e.add(r), g.set(t, e);
    }
}
function H(e) {
    var t, n;
    let { userId: r, guildId: i, apiError: a } = e;
    null === (t = g.get(r)) || void 0 === t || t.delete(null != i ? i : M);
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
function Y(e) {
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
        C.set(t, e), U(t);
    }
}
function j(e) {
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
        w(t, n);
    }
}
function W(e) {
    P = !0;
}
function K(e) {
    (P = !1), null != e.guild_id ? j(e) : Y(e);
}
function z(e) {
    P = !1;
}
function q(e) {
    var t, n;
    let r = e.user.id,
        i = O.get(r);
    if (null == i || (null !== (n = null === (t = g.get(r)) || void 0 === t ? void 0 : t.size) && void 0 !== n ? n : 0) > 0) return !1;
    ee(i);
}
function Q(e) {
    if (D.size < 1 && O.size < 1) return !1;
    for (let e of (D.clear(), O.values())) ee(e);
}
function X(e) {
    let t = e.user.id,
        n = O.get(t);
    if (null == D.get(t) && null == n) return !1;
    D.delete(t), ee(n);
}
function $(e) {
    let t = e.relationship.id,
        n = O.get(t);
    if (!L.has(t) && !b.has(t) && null == n) return !1;
    L.delete(t), b.delete(t), ee(n);
}
function J() {
    g.clear(), O.clear(), R.clear();
}
function ee(e) {
    null != e && ((e.lastFetched = 0), (e.fetchError = void 0));
}
class et extends f.Z {
    initialize() {
        this.waitFor(h.ZP), this.syncWith([u.default], J);
    }
    isFetchingProfile(e, t) {
        let n = g.get(e);
        return null != n && n.has(null != t ? t : M);
    }
    isFetchingFriends(e) {
        return S.has(e);
    }
    get isSubmitting() {
        return P;
    }
    getUserProfile(e) {
        return O.get(e);
    }
    getGuildMemberProfile(e, t) {
        var n, r;
        return null == t ? null : null !== (r = null === (n = R.get(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== r ? r : null;
    }
    getMutualFriends(e) {
        return L.get(e);
    }
    getMutualFriendsCount(e) {
        return b.get(e);
    }
    getMutualGuilds(e) {
        return D.get(e);
    }
    takeSnapshot() {
        let e = d.default.getId(),
            t = O.get(e);
        return null != t
            ? {
                  version: et.LATEST_SNAPSHOT_VERSION,
                  data: [
                      {
                          userId: e,
                          profile: t
                      }
                  ]
              }
            : {
                  version: et.LATEST_SNAPSHOT_VERSION,
                  data: []
              };
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: V,
            USER_PROFILE_FETCH_FAILURE: H,
            USER_PROFILE_FETCH_SUCCESS: Z,
            USER_PROFILE_UPDATE_START: W,
            USER_PROFILE_UPDATE_SUCCESS: K,
            USER_PROFILE_UPDATE_FAILURE: z,
            MUTUAL_FRIENDS_FETCH_START: G,
            MUTUAL_FRIENDS_FETCH_SUCCESS: F,
            MUTUAL_FRIENDS_FETCH_FAILURE: k,
            USER_UPDATE: q,
            GUILD_MEMBER_UPDATE: q,
            GUILD_JOIN: Q,
            GUILD_DELETE: Q,
            GUILD_MEMBER_ADD: X,
            GUILD_MEMBER_REMOVE: X,
            RELATIONSHIP_ADD: $,
            RELATIONSHIP_REMOVE: $,
            RELATIONSHIP_UPDATE: $,
            LOGOUT: x
        }),
            T(this, 'loadCache', () => {
                let e = this.readSnapshot(et.LATEST_SNAPSHOT_VERSION);
                null != e &&
                    e.forEach((e) => {
                        let { userId: t, profile: n } = e;
                        null != t && (null != n ? O.set(t, n) : O.delete(t));
                    });
            });
    }
}
T(et, 'displayName', 'UserProfileStore'), T(et, 'LATEST_SNAPSHOT_VERSION', 1);
let en = new et();
t.Z = en;

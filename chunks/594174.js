n.r(t),
    n.d(t, {
        ASSISTANT_WUMPUS_VOICE_USER: function () {
            return N;
        },
        mergeUser: function () {
            return b;
        },
        transformUser: function () {
            return y;
        },
        users: function () {
            return A;
        }
    });
var r = n(47120);
var i = n(789020);
var a = n(724458);
var o = n(51350);
var s = n(653041);
var l = n(392711);
var u = n(864106),
    c = n(502087),
    d = n(911955),
    _ = n(168232),
    E = n(598077),
    f = n(630388),
    h = n(823379),
    p = n(314897),
    m = n(412788),
    I = n(981631),
    T = n(308083),
    g = n(474936);
function S(e, t, n) {
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
let A = {},
    v = 0,
    N = '47835198259242069';
function O(e, t, n) {
    let r = A[e];
    if (null == r) return !1;
    let i = r;
    (i = null == n ? r.removeGuildAvatarHash(t) : r.addGuildAvatarHash(t, n)), (A[r.id] = i);
    let a = r !== i;
    return a && v++, a;
}
function R(e, t) {
    let n = A[e];
    return !(null == n || (0, T.Dd)(n.clan, t.clan)) && (null == n.clan || null != t.clan) && ((n.clan = (0, T.yi)(t.clan)), (A[n.id] = n), v++, !0);
}
function C(e, t) {
    switch (!0) {
        case null == e.clan && null == t.clan:
            break;
        case null != e.clan && null == t.clan:
        case (0, T.Dd)(e.clan, t.clan):
            t.clan = e.clan;
            break;
        default:
            t.clan = (0, T.yi)(t.clan);
    }
    return t;
}
function y(e) {
    let t = e.mfa_enabled;
    null != t && ((e.mfaEnabled = t), delete e.mfa_enabled);
    let n = (0, _.G)(e.premium_type);
    void 0 !== n && ((e.premiumType = n), delete e.premium_type);
    let r = e.nsfw_allowed;
    null != r && ((e.nsfwAllowed = r), delete e.nsfw_allowed);
    let i = e.public_flags;
    null != i && ((e.publicFlags = i), delete e.public_flags);
    let a = e.purchased_flags;
    void 0 !== a && ((e.purchasedFlags = a), delete e.purchased_flags);
    let o = e.premium_usage_flags;
    void 0 !== o && ((e.premiumUsageFlags = o), delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color;
    let s = e.avatar_decoration_data;
    void 0 !== s && ((e.avatarDecorationData = (0, u.FG)(s)), delete e.avatar_decoration_data);
    let l = e.global_name;
    void 0 !== l && ((e.globalName = l), delete e.global_name);
    let c = e.clan;
    return void 0 !== c && (e.clan = (0, T.yi)(c)), e;
}
function L(e) {
    return e.id !== p.default.getId();
}
function b(e) {
    let t,
        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = A[e.id],
        i = void 0 !== e.id && e.id === p.default.getId();
    if (null == r) void 0 !== (t = (r = new E.Z(e)).premiumType) && i && (r.premiumType = M((0, _.QI)(r), r.premiumType));
    else if (n) {
        var a;
        let n = y(e);
        void 0 !== (t = null !== (a = n.premium_type) && void 0 !== a ? a : n.premiumType) && i && (0, _.VR)(n) && (n = D(n)), (n = C(r, n)), (r = r.merge(n));
    }
    (0, _.jX)((0, _.QI)(r), t, r.premiumType);
    let o = A[e.id] !== r;
    return (A[e.id] = r), o && v++, o;
}
function D(e) {
    var t;
    let n = null !== (t = e.premium_type) && void 0 !== t ? t : e.premiumType,
        r = M((0, _.VR)(e), n);
    return void 0 !== e.premiumType ? (e.premiumType = r) : void 0 !== e.premium_type && (e.premium_type = r), e;
}
function M(e, t) {
    if (!e) return t;
    let n = c.Z.getPremiumTypeOverride(),
        r = c.Z.getPremiumTypeActual();
    return n === g.F_ ? r : n;
}
function P(e, t) {
    var n, r, i, a, o;
    if (
        (null != e.author && 'SENDING' !== e.state && L(e.author) && b(e.author, t),
        null === (n = e.mentions) ||
            void 0 === n ||
            n.forEach((e) => {
                L(e) && b(e, t);
            }),
        (null === (r = e.interaction) || void 0 === r ? void 0 : r.user) != null && L(null === (i = e.interaction) || void 0 === i ? void 0 : i.user) && b(e.interaction.user, t),
        null === (a = e.attachments) ||
            void 0 === a ||
            a.forEach((e) => {
                var n;
                null === (n = e.clip_participants) ||
                    void 0 === n ||
                    n.forEach((e) => {
                        L(e) && b(e, t);
                    });
            }),
        (null === (o = e.resolved) || void 0 === o ? void 0 : o.users) != null)
    )
        for (let n in e.resolved.users) {
            let r = e.resolved.users[n];
            L(r) && b(r, t);
        }
}
function U(e) {
    null != e.application.bot && b(e.application.bot);
}
function w(e) {
    let { user: t, users: n, guilds: r } = e;
    delete t.premium,
        delete t.banner_color,
        b(t),
        n.forEach((e) => {
            b(e);
        }),
        r.forEach((e) => {
            e.members.forEach((t) => {
                O(t.user.id, e.id, t.avatar), R(t.user.id, t.user);
            });
        }),
        null != A[p.default.getId()] &&
            (A[N] = new E.Z({
                id: N,
                username: 'Wumpus',
                discriminator: '0',
                globalName: 'Wumpus',
                avatar: 'c1f86b313385cb97985f1b118851c28c'
            }));
}
function x(e) {
    let { guilds: t, lazyPrivateChannels: n } = e;
    t.forEach((e) => {
        e.members.forEach((t) => {
            O(t.user.id, e.id, t.avatar), R(t.user.id, t.user);
        });
    }),
        null == n ||
            n.forEach((e) => {
                var t;
                null === (t = e.rawRecipients) ||
                    void 0 === t ||
                    t.forEach((e) => {
                        b(e);
                    });
            });
}
function G(e) {
    return !('incomplete' in e);
}
function k(e) {
    if (null != e.users)
        for (let t of e.users) {
            if (!(t.id in A && G(t))) A[t.id] = new E.Z(t);
        }
}
function B(e) {
    let { user: t } = e;
    t.id !== p.default.getId() && b(t);
}
function F(e) {
    let { user: t } = e;
    b(t);
}
function Z(e) {
    let { user: t } = e;
    b(t);
}
function V(e) {
    let { messages: t } = e;
    return t.forEach((e) => P(e, !0)), !1;
}
function H(e) {
    let { mostRecentMessages: t } = e;
    return null == t || t.forEach((e) => P(e, !1)), !1;
}
function Y(e) {
    let { messages: t } = e;
    return t.forEach((e) => V({ messages: e })), !1;
}
function j(e) {
    let { firstMessages: t, owners: n } = e;
    null != t && t.forEach((e) => P(e, !0)), null != n && n.forEach((e) => b(e.user, !0));
}
function W(e) {
    let { threads: t } = e;
    Object.values(t).forEach((e) => {
        let { first_message: t, most_recent_message: n, owner: r } = e;
        null != t && P(t, !0), null != n && P(n, !0), null != r && null != r.user && b(r.user, !0);
    });
}
function K(e) {
    let { supplementalData: t } = e;
    Object.values(t).forEach((e) => {
        let { message_preview: t } = e;
        null != t && P(t, !0);
    });
}
function z(e) {
    let { guildScheduledEventUsers: t, guildId: n } = e;
    t.forEach((e) => {
        let { user: t, member: r } = e;
        if (null == t) return;
        b(t);
        let i = null == r ? void 0 : r.avatar;
        null != i && O(t.id, n, i);
    });
}
function q(e) {
    let { items: t } = e;
    t.forEach((e) => {
        null != e.other_user && b(e.other_user);
    });
}
function Q(e) {
    let { item: t } = e;
    null != t.other_user && b(t.other_user);
}
function X(e) {
    let { message: t } = e;
    if ((P(t, !0), null != t.flags && f.yE(t.flags, I.iLy.URGENT))) {
        let e = A[p.default.getId()];
        return null != e && ((A[p.default.getId()] = e.set('flags', f.mB(e.flags, I.xW$.HAS_UNREAD_URGENT_MESSAGES, !0))), !0);
    }
    return !1;
}
function $(e) {
    let {
        channel: { rawRecipients: t }
    } = e;
    return null != t && t.forEach((e) => b(e)), !1;
}
function J(e) {
    let { channels: t } = e;
    for (let { rawRecipients: e } of t) null != e && e.forEach((e) => b(e));
    return !1;
}
let ee = ['username', 'avatar', 'global_name', 'discriminator', 'bot', 'clan'];
function et(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let t = A[e.user.id];
            if (null == t) return !1;
            let n = ee.reduce((n, r) => {
                if (e.user.hasOwnProperty(r)) {
                    let i = t.set((0, l.camelCase)(r), e.user[r]);
                    (n = n || i !== t), (t = i);
                }
                return n;
            }, !1);
            return !!n && ((A[t.id] = t), n);
        })
        .some((e) => e);
}
function en(e) {
    let { bans: t } = e;
    t.forEach((e) => b(e.user));
}
function er(e) {
    let { bans: t } = e;
    t.forEach((e) => b(e.user));
}
function ei(e) {
    return b(e.user);
}
function ea(e) {
    return !!e.isMember && b(e.user);
}
function eo(e) {
    let t = b(e.user);
    return O(e.user.id, e.guildId, e.avatar) || t;
}
function es(e) {
    let { ops: t } = e;
    for (let e of t)
        if ('INSERT' === e.op || 'UPDATE' === e.op) {
            var n;
            let t = null === (n = e.item.member) || void 0 === n ? void 0 : n.user;
            if (null == t) continue;
            R(t.id, t);
        }
    return !1;
}
function el(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t)
        n =
            e.members.reduce((t, n) => {
                let r = b(n.user);
                return O(n.user.id, e.guildId, n.avatar) || r || t;
            }, !1) || n;
    return n;
}
function eu(e) {
    let t = !1;
    for (let n of e.members) b(n.user) && (t = !0), O(n.user.id, e.guildId, n.avatar) && (t = !0);
    return t;
}
function ec(e) {
    var t;
    let n = !1;
    for (let r of null !== (t = e.users) && void 0 !== t ? t : []) !Object.hasOwn(A, r.id) && (n = b(r) || n);
    return n;
}
function ed(e) {
    let { members: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            null != e.member && b(e.member.user) && (n = !0), null != e.presence && b(e.presence.user) && (n = !0);
        }),
        n
    );
}
function e_(e) {
    let { addedMembers: t } = e,
        n = !1;
    return (
        null == t ||
            t.forEach((e) => {
                null != e.member && b(e.member.user) && (n = !0), null != e.presence && b(e.presence.user) && (n = !0);
            }),
        n
    );
}
function eE(e) {
    let { guild: t } = e;
    t.members.forEach((e) => {
        let {
            user: { id: n, username: r, avatar: i, discriminator: a, bot: o },
            avatar: s
        } = e;
        n !== p.default.getId() &&
            b({
                id: n,
                username: r,
                avatar: i,
                discriminator: a,
                bot: o
            }),
            O(n, t.id, s);
    });
}
function ef(e) {
    return b(e.relationship.user);
}
function eh(e) {
    let { relationships: t } = e;
    return t.reduce((e, t) => b(t.user) || e, !1);
}
function ep(e) {
    return b(e.suggestion.suggested_user);
}
function em(e) {
    let { suggestions: t } = e;
    return t.reduce((e, t) => b(t.suggested_user) || e, !1);
}
function eI(e) {
    let { users: t } = e;
    t.forEach((e) => {
        null == A[e.id] && (A[e.id] = new E.Z(e));
    });
}
function eT(e) {
    let { giftCode: t } = e;
    return null != t.user && b(t.user);
}
function eg(e) {
    let { appliedBoosts: t } = e;
    t.forEach((e) => {
        let { user: t } = e;
        if (null != t) b(t);
    });
}
function eS(e) {
    let { request: t } = e,
        { user: n, actioned_by_user: r } = t,
        i = !1;
    return null != n && (i = i || b(n)), null != r && (i = i || b(r)), i;
}
function eA(e) {
    let { integrations: t } = e;
    t.forEach((e) => U((0, d.F)(e)));
}
function ev(e) {
    let { integration: t } = e;
    U((0, d.F)(t));
}
function eN(e) {
    let { integration: t } = e;
    U((0, d.F)(t));
}
function eO(e) {
    let { users: t, familyCenterTeenActivity: n } = e,
        { users: r } = n;
    return [...t, ...r].reduce((e, t) => b(t) || e, !1);
}
function eR(e) {
    let { users: t } = e;
    return t.reduce((e, t) => b(t) || e, !1);
}
function eC(e) {
    let { users: t } = e;
    return t.reduce((e, t) => b(t) || e, !1);
}
function ey(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return;
    let { users: n } = t;
    return n.reduce((e, t) => b(t) || e, !1);
}
function eL(e) {
    let { familyCenterTeenActivity: t } = e,
        { users: n } = t;
    return n.reduce((e, t) => b(t) || e, !1);
}
function eb(e) {
    let { members: t } = e,
        n = p.default.getId();
    return t.reduce((e, t) => (t.member.user.id === n ? e : b(t.member.user) || e), !1);
}
function eD(e) {
    let { messageItems: t } = e;
    t.forEach((e) => {
        null != e.message && P(e.message, !0);
    }, !1);
}
function eM(e) {
    let { participants: t } = e;
    t.map((e) => {
        var t;
        return null === (t = e.member) || void 0 === t ? void 0 : t.user;
    })
        .filter(h.lm)
        .forEach((e) => {
            b(e);
        });
}
class eP extends m.Z {
    initialize() {
        this.waitFor(p.default, c.Z);
    }
    takeSnapshot() {
        let e = this.getCurrentUser();
        return {
            version: eP.LATEST_SNAPSHOT_VERSION,
            data: { users: [e].filter(h.lm) }
        };
    }
    handleLoadCache(e) {
        let t = this.readSnapshot(eP.LATEST_SNAPSHOT_VERSION);
        if (null != t) for (let e of t.users) A[e.id] = new E.Z(e);
        if (null != e.users)
            for (let t of e.users) {
                if (!(t.id in A && G(t))) A[t.id] = new E.Z(t);
            }
        for (let t of [e.privateChannels, e.initialGuildChannels])
            for (let e of t) {
                var n;
                null === (n = e.rawRecipients) || void 0 === n || n.forEach((e) => b(e, !1));
            }
    }
    getUserStoreVersion() {
        return v;
    }
    getUser(e) {
        if (null != e) return A[e];
    }
    getUsers() {
        return A;
    }
    forEach(e) {
        for (let t in A) if (!1 === e(A[t])) break;
    }
    findByTag(e, t) {
        for (let n in A) {
            let r = A[n];
            if (null != t && r.username === e && r.discriminator === t) return r;
            if (null == t && r.username === e && r.isPomelo()) return r;
        }
    }
    filter(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = [];
        for (let t in A) {
            let r = A[t];
            e(r) && n.push(r);
        }
        return t && n.sort((e, t) => (e.username > t.username ? 1 : e.username < t.username ? -1 : 0)), n;
    }
    getCurrentUser() {
        return A[p.default.getId()];
    }
    constructor() {
        super({
            CONNECTION_OPEN: w,
            CONNECTION_OPEN_SUPPLEMENTAL: x,
            UPDATE_CLIENT_PREMIUM_TYPE: Z,
            OVERLAY_INITIALIZE: k,
            CACHE_LOADED: (e) => this.handleLoadCache(e),
            USER_UPDATE: B,
            CURRENT_USER_UPDATE: F,
            PRESENCE_UPDATES: et,
            SEARCH_FINISH: Y,
            MOD_VIEW_SEARCH_FINISH: Y,
            LOAD_MESSAGES_SUCCESS: V,
            LOAD_MESSAGES_AROUND_SUCCESS: V,
            LOAD_PINNED_MESSAGES_SUCCESS: V,
            LOAD_RECENT_MENTIONS_SUCCESS: V,
            THREAD_LIST_SYNC: H,
            MESSAGE_CREATE: X,
            MESSAGE_UPDATE: X,
            GUILD_SETTINGS_LOADED_BANS: en,
            GUILD_SETTINGS_LOADED_BANS_BATCH: er,
            GUILD_CREATE: eE,
            GUILD_BAN_ADD: ei,
            GUILD_BAN_REMOVE: ei,
            CHANNEL_RECIPIENT_ADD: ea,
            CHANNEL_RECIPIENT_REMOVE: ea,
            GUILD_JOIN_REQUEST_CREATE: eS,
            GUILD_JOIN_REQUEST_UPDATE: eS,
            GUILD_MEMBER_ADD: eo,
            GUILD_MEMBER_UPDATE: eo,
            GUILD_MEMBERS_CHUNK_BATCH: el,
            GUILD_MEMBER_LIST_UPDATE: es,
            THREAD_MEMBER_LIST_UPDATE: ed,
            THREAD_MEMBERS_UPDATE: e_,
            CHANNEL_CREATE: $,
            CHANNEL_UPDATES: J,
            RELATIONSHIP_ADD: ef,
            LOAD_RELATIONSHIPS_SUCCESS: eh,
            FRIEND_SUGGESTION_CREATE: ep,
            LOAD_FRIEND_SUGGESTIONS_SUCCESS: em,
            AUDIT_LOG_FETCH_SUCCESS: eI,
            AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: eI,
            GIFT_CODE_RESOLVE_SUCCESS: eT,
            GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: eg,
            LOAD_THREADS_SUCCESS: j,
            LOAD_ARCHIVED_THREADS_SUCCESS: j,
            LOAD_FORUM_POSTS: W,
            GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: z,
            LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: q,
            NOTIFICATION_CENTER_ITEM_CREATE: Q,
            LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: K,
            PASSIVE_UPDATE_V2: eu,
            LOCAL_MESSAGES_LOADED: ec,
            FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS: eA,
            PRIVATE_CHANNEL_INTEGRATION_CREATE: ev,
            PRIVATE_CHANNEL_INTEGRATION_UPDATE: eN,
            FAMILY_CENTER_INITIAL_LOAD: eO,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eR,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: ey,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eL,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: eC,
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eb,
            LOAD_GRAVITY_HYDRATED: eD,
            EMBEDDED_ACTIVITY_UPDATE_V2: eM
        });
    }
}
S(eP, 'displayName', 'UserStore'), S(eP, 'LATEST_SNAPSHOT_VERSION', 1), (t.default = new eP());

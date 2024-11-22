n.r(t),
    n.d(t, {
        ASSISTANT_WUMPUS_VOICE_USER: function () {
            return v;
        },
        mergeUser: function () {
            return y;
        },
        transformUser: function () {
            return T;
        },
        users: function () {
            return g;
        }
    }),
    n(47120),
    n(789020),
    n(724458),
    n(51350),
    n(653041);
var r = n(392711),
    i = n(2572),
    a = n(864106),
    s = n(502087),
    o = n(168232),
    l = n(598077),
    u = n(630388),
    c = n(823379),
    d = n(314897),
    f = n(412788),
    _ = n(981631),
    p = n(308083),
    h = n(474936);
function m(e, t, n) {
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
let g = {},
    E = 0,
    v = '47835198259242069';
function I(e, t, n) {
    let r = g[e];
    if (null == r) return !1;
    let i = r;
    (i = null == n ? r.removeGuildAvatarHash(t) : r.addGuildAvatarHash(t, n)), (g[r.id] = i);
    let a = r !== i;
    return a && E++, a;
}
function b(e, t) {
    let n = g[e];
    return !(null == n || (0, p.Dd)(n.clan, t.clan)) && (null == n.clan || null != t.clan) && ((n.clan = (0, p.yi)(t.clan)), (g[n.id] = n), E++, !0);
}
function T(e) {
    let t = e.mfa_enabled;
    null != t && ((e.mfaEnabled = t), delete e.mfa_enabled);
    let n = (0, o.G)(e.premium_type);
    void 0 !== n && ((e.premiumType = n), delete e.premium_type);
    let r = e.nsfw_allowed;
    null != r && ((e.nsfwAllowed = r), delete e.nsfw_allowed);
    let i = e.public_flags;
    null != i && ((e.publicFlags = i), delete e.public_flags);
    let s = e.purchased_flags;
    void 0 !== s && ((e.purchasedFlags = s), delete e.purchased_flags);
    let l = e.premium_usage_flags;
    void 0 !== l && ((e.premiumUsageFlags = l), delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color;
    let u = e.avatar_decoration_data;
    void 0 !== u && ((e.avatarDecorationData = (0, a.FG)(u)), delete e.avatar_decoration_data);
    let c = e.global_name;
    void 0 !== c && ((e.globalName = c), delete e.global_name);
    let d = e.clan;
    return void 0 !== d && (e.clan = (0, p.yi)(d)), e;
}
function S(e) {
    return e.id !== d.default.getId();
}
function y(e) {
    let t,
        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = g[e.id],
        i = void 0 !== e.id && e.id === d.default.getId();
    if (null == r) void 0 !== (t = (r = new l.Z(e)).premiumType) && i && (r.premiumType = A((0, o.QI)(r), r.premiumType));
    else if (n) {
        var a;
        let n = T(e);
        void 0 !== (t = null !== (a = n.premium_type) && void 0 !== a ? a : n.premiumType) &&
            i &&
            (0, o.VR)(n) &&
            (n = (function (e) {
                var t;
                let n = null !== (t = e.premium_type) && void 0 !== t ? t : e.premiumType,
                    r = A((0, o.VR)(e), n);
                return void 0 !== e.premiumType ? (e.premiumType = r) : void 0 !== e.premium_type && (e.premium_type = r), e;
            })(n)),
            (n = (function (e, t) {
                switch (!0) {
                    case null == e.clan && null == t.clan:
                        break;
                    case null != e.clan && null == t.clan:
                    case (0, p.Dd)(e.clan, t.clan):
                        t.clan = e.clan;
                        break;
                    default:
                        t.clan = (0, p.yi)(t.clan);
                }
                return t;
            })(r, n)),
            (r = r.merge(n));
    }
    (0, o.jX)((0, o.QI)(r), t, r.premiumType);
    let s = g[e.id] !== r;
    return (g[e.id] = r), s && E++, s;
}
function A(e, t) {
    if (!e) return t;
    let n = s.Z.getPremiumTypeOverride(),
        r = s.Z.getPremiumTypeActual();
    return n === h.F_ ? r : n;
}
function N(e, t) {
    var n, r, i, a, s;
    if (
        (null != e.author && 'SENDING' !== e.state && S(e.author) && y(e.author, t),
        null === (n = e.mentions) ||
            void 0 === n ||
            n.forEach((e) => {
                S(e) && y(e, t);
            }),
        (null === (r = e.interaction) || void 0 === r ? void 0 : r.user) != null && S(null === (i = e.interaction) || void 0 === i ? void 0 : i.user) && y(e.interaction.user, t),
        null === (a = e.attachments) ||
            void 0 === a ||
            a.forEach((e) => {
                var n;
                null === (n = e.clip_participants) ||
                    void 0 === n ||
                    n.forEach((e) => {
                        S(e) && y(e, t);
                    });
            }),
        (null === (s = e.resolved) || void 0 === s ? void 0 : s.users) != null)
    )
        for (let n in e.resolved.users) {
            let r = e.resolved.users[n];
            S(r) && y(r, t);
        }
}
function C(e) {
    let { user: t, users: n, guilds: r } = e;
    delete t.premium,
        delete t.banner_color,
        y(t),
        n.forEach((e) => {
            y(e);
        }),
        r.forEach((e) => {
            e.members.forEach((t) => {
                I(t.user.id, e.id, t.avatar), b(t.user.id, t.user);
            });
        }),
        null != g[d.default.getId()] &&
            (g[v] = new l.Z({
                id: v,
                username: 'Wumpus',
                discriminator: '0',
                globalName: 'Wumpus',
                avatar: 'c1f86b313385cb97985f1b118851c28c'
            }));
}
function R(e) {
    let { guilds: t, lazyPrivateChannels: n } = e;
    t.forEach((e) => {
        e.members.forEach((t) => {
            I(t.user.id, e.id, t.avatar), b(t.user.id, t.user);
        });
    }),
        null == n ||
            n.forEach((e) => {
                var t;
                null === (t = e.rawRecipients) ||
                    void 0 === t ||
                    t.forEach((e) => {
                        y(e);
                    });
            });
}
function O(e) {
    return !('incomplete' in e);
}
function D(e) {
    if (null != e.users)
        for (let t of e.users) {
            if (!(t.id in g && O(t))) g[t.id] = new l.Z(t);
        }
}
function L(e) {
    let { user: t } = e;
    t.id !== d.default.getId() && y(t);
}
function x(e) {
    let { user: t } = e;
    y(t);
}
function w(e) {
    let { user: t } = e;
    y(t);
}
function M(e) {
    let { messages: t } = e;
    return t.forEach((e) => N(e, !0)), !1;
}
function P(e) {
    let { mostRecentMessages: t } = e;
    return null == t || t.forEach((e) => N(e, !1)), !1;
}
function k(e) {
    let { messages: t } = e;
    return t.forEach((e) => M({ messages: e })), !1;
}
function U(e) {
    let { firstMessages: t, owners: n } = e;
    null != t && t.forEach((e) => N(e, !0)), null != n && n.forEach((e) => y(e.user, !0));
}
function G(e) {
    let { threads: t } = e;
    Object.values(t).forEach((e) => {
        let { first_message: t, most_recent_message: n, owner: r } = e;
        null != t && N(t, !0), null != n && N(n, !0), null != r && null != r.user && y(r.user, !0);
    });
}
function B(e) {
    let { supplementalData: t } = e;
    Object.values(t).forEach((e) => {
        let { message_preview: t } = e;
        null != t && N(t, !0);
    });
}
function Z(e) {
    let { guildScheduledEventUsers: t, guildId: n } = e;
    t.forEach((e) => {
        let { user: t, member: r } = e;
        if (null == t) return;
        y(t);
        let i = null == r ? void 0 : r.avatar;
        null != i && I(t.id, n, i);
    });
}
function F(e) {
    let { items: t } = e;
    t.forEach((e) => {
        null != e.other_user && y(e.other_user);
    });
}
function V(e) {
    let { item: t } = e;
    null != t.other_user && y(t.other_user);
}
function j(e) {
    let { message: t } = e;
    if ((N(t, !0), null != t.flags && u.yE(t.flags, _.iLy.URGENT))) {
        let e = g[d.default.getId()];
        return null != e && ((g[d.default.getId()] = e.set('flags', u.mB(e.flags, _.xW$.HAS_UNREAD_URGENT_MESSAGES, !0))), !0);
    }
    return !1;
}
function H(e) {
    let {
        channel: { rawRecipients: t }
    } = e;
    return null != t && t.forEach((e) => y(e)), !1;
}
function Y(e) {
    let { channels: t } = e;
    for (let { rawRecipients: e } of t) null != e && e.forEach((e) => y(e));
    return !1;
}
let W = ['username', 'avatar', 'global_name', 'discriminator', 'bot', 'clan'];
function K(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let t = g[e.user.id];
            if (null == t) return !1;
            let n = W.reduce((n, i) => {
                if (e.user.hasOwnProperty(i)) {
                    let a = t.set((0, r.camelCase)(i), e.user[i]);
                    (n = n || a !== t), (t = a);
                }
                return n;
            }, !1);
            return !!n && ((g[t.id] = t), n);
        })
        .some((e) => e);
}
function z(e) {
    let { bans: t } = e;
    t.forEach((e) => y(e.user));
}
function q(e) {
    let { bans: t } = e;
    t.forEach((e) => y(e.user));
}
function Q(e) {
    return y(e.user);
}
function X(e) {
    return !!e.isMember && y(e.user);
}
function J(e) {
    let t = y(e.user);
    return I(e.user.id, e.guildId, e.avatar) || t;
}
function $(e) {
    let { ops: t } = e;
    for (let e of t)
        if ('INSERT' === e.op || 'UPDATE' === e.op) {
            var n;
            let t = null === (n = e.item.member) || void 0 === n ? void 0 : n.user;
            if (null == t) continue;
            b(t.id, t);
        }
    return !1;
}
function ee(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t)
        n =
            e.members.reduce((t, n) => {
                let r = y(n.user);
                return I(n.user.id, e.guildId, n.avatar) || r || t;
            }, !1) || n;
    return n;
}
function et(e) {
    let t = !1;
    for (let n of e.members) y(n.user) && (t = !0), I(n.user.id, e.guildId, n.avatar) && (t = !0);
    return t;
}
function en(e) {
    var t;
    let n = !1;
    for (let r of null !== (t = e.users) && void 0 !== t ? t : []) !Object.hasOwn(g, r.id) && (n = y(r) || n);
    return n;
}
function er(e) {
    let { members: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            null != e.member && y(e.member.user) && (n = !0), null != e.presence && y(e.presence.user) && (n = !0);
        }),
        n
    );
}
function ei(e) {
    let { addedMembers: t } = e,
        n = !1;
    return (
        null == t ||
            t.forEach((e) => {
                null != e.member && y(e.member.user) && (n = !0), null != e.presence && y(e.presence.user) && (n = !0);
            }),
        n
    );
}
function ea(e) {
    let { guild: t } = e;
    t.members.forEach((e) => {
        let {
            user: { id: n, username: r, avatar: i, discriminator: a, bot: s },
            avatar: o
        } = e;
        n !== d.default.getId() &&
            y({
                id: n,
                username: r,
                avatar: i,
                discriminator: a,
                bot: s
            }),
            I(n, t.id, o);
    });
}
function es(e) {
    return y(e.relationship.user);
}
function eo(e) {
    let { relationships: t } = e;
    return t.reduce((e, t) => y(t.user) || e, !1);
}
function el(e) {
    return y(e.suggestion.suggested_user);
}
function eu(e) {
    let { suggestions: t } = e;
    return t.reduce((e, t) => y(t.suggested_user) || e, !1);
}
function ec(e) {
    let { users: t } = e;
    t.forEach((e) => {
        null == g[e.id] && (g[e.id] = new l.Z(e));
    });
}
function ed(e) {
    let { giftCode: t } = e;
    return null != t.user && y(t.user);
}
function ef(e) {
    let { appliedBoosts: t } = e;
    t.forEach((e) => {
        let { user: t } = e;
        if (null != t) y(t);
    });
}
function e_(e) {
    let { request: t } = e,
        { user: n, actioned_by_user: r } = t,
        i = !1;
    return null != n && (i = i || y(n)), null != r && (i = i || y(r)), i;
}
function ep(e) {
    let { users: t, familyCenterTeenActivity: n } = e,
        { users: r } = n;
    return [...t, ...r].reduce((e, t) => y(t) || e, !1);
}
function eh(e) {
    let { users: t } = e;
    return t.reduce((e, t) => y(t) || e, !1);
}
function em(e) {
    let { users: t } = e;
    return t.reduce((e, t) => y(t) || e, !1);
}
function eg(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return;
    let { users: n } = t;
    return n.reduce((e, t) => y(t) || e, !1);
}
function eE(e) {
    let { familyCenterTeenActivity: t } = e,
        { users: n } = t;
    return n.reduce((e, t) => y(t) || e, !1);
}
function ev(e) {
    let { members: t } = e,
        n = d.default.getId();
    return t.reduce((e, t) => (t.member.user.id === n ? e : y(t.member.user) || e), !1);
}
function eI(e) {
    let { messageItems: t } = e;
    t.forEach((e) => {
        null != e.message && N(e.message, !0);
    }, !1);
}
function eb(e) {
    let { participants: t } = e;
    return t.reduce((e, t) => ((0, i.Z)(t) && y(t.member.user)) || e, !1);
}
class eT extends f.Z {
    initialize() {
        this.waitFor(d.default, s.Z);
    }
    takeSnapshot() {
        let e = this.getCurrentUser();
        return {
            version: eT.LATEST_SNAPSHOT_VERSION,
            data: { users: [e].filter(c.lm) }
        };
    }
    handleLoadCache(e) {
        let t = this.readSnapshot(eT.LATEST_SNAPSHOT_VERSION);
        if (null != t) for (let e of t.users) g[e.id] = new l.Z(e);
        if (null != e.users)
            for (let t of e.users) {
                if (!(t.id in g && O(t))) g[t.id] = new l.Z(t);
            }
        for (let t of [e.privateChannels, e.initialGuildChannels])
            for (let e of t) {
                var n;
                null === (n = e.rawRecipients) || void 0 === n || n.forEach((e) => y(e, !1));
            }
    }
    getUserStoreVersion() {
        return E;
    }
    getUser(e) {
        if (null != e) return g[e];
    }
    getUsers() {
        return g;
    }
    forEach(e) {
        for (let t in g) if (!1 === e(g[t])) break;
    }
    findByTag(e, t) {
        for (let n in g) {
            let r = g[n];
            if (null != t && r.username === e && r.discriminator === t) return r;
            if (null == t && r.username === e && r.isPomelo()) return r;
        }
    }
    filter(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = [];
        for (let t in g) {
            let r = g[t];
            e(r) && n.push(r);
        }
        return t && n.sort((e, t) => (e.username > t.username ? 1 : e.username < t.username ? -1 : 0)), n;
    }
    getCurrentUser() {
        return g[d.default.getId()];
    }
    constructor() {
        super({
            CONNECTION_OPEN: C,
            CONNECTION_OPEN_SUPPLEMENTAL: R,
            UPDATE_CLIENT_PREMIUM_TYPE: w,
            OVERLAY_INITIALIZE: D,
            CACHE_LOADED: (e) => this.handleLoadCache(e),
            USER_UPDATE: L,
            CURRENT_USER_UPDATE: x,
            PRESENCE_UPDATES: K,
            SEARCH_FINISH: k,
            MOD_VIEW_SEARCH_FINISH: k,
            LOAD_MESSAGES_SUCCESS: M,
            LOAD_MESSAGES_AROUND_SUCCESS: M,
            LOAD_PINNED_MESSAGES_SUCCESS: M,
            LOAD_RECENT_MENTIONS_SUCCESS: M,
            THREAD_LIST_SYNC: P,
            MESSAGE_CREATE: j,
            MESSAGE_UPDATE: j,
            GUILD_SETTINGS_LOADED_BANS: z,
            GUILD_SETTINGS_LOADED_BANS_BATCH: q,
            GUILD_CREATE: ea,
            GUILD_BAN_ADD: Q,
            GUILD_BAN_REMOVE: Q,
            CHANNEL_RECIPIENT_ADD: X,
            CHANNEL_RECIPIENT_REMOVE: X,
            GUILD_JOIN_REQUEST_CREATE: e_,
            GUILD_JOIN_REQUEST_UPDATE: e_,
            GUILD_MEMBER_ADD: J,
            GUILD_MEMBER_UPDATE: J,
            GUILD_MEMBERS_CHUNK_BATCH: ee,
            GUILD_MEMBER_LIST_UPDATE: $,
            THREAD_MEMBER_LIST_UPDATE: er,
            THREAD_MEMBERS_UPDATE: ei,
            CHANNEL_CREATE: H,
            CHANNEL_UPDATES: Y,
            RELATIONSHIP_ADD: es,
            LOAD_RELATIONSHIPS_SUCCESS: eo,
            FRIEND_SUGGESTION_CREATE: el,
            LOAD_FRIEND_SUGGESTIONS_SUCCESS: eu,
            AUDIT_LOG_FETCH_SUCCESS: ec,
            AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: ec,
            GIFT_CODE_RESOLVE_SUCCESS: ed,
            GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: ef,
            LOAD_THREADS_SUCCESS: U,
            LOAD_ARCHIVED_THREADS_SUCCESS: U,
            LOAD_FORUM_POSTS: G,
            GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: Z,
            LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: F,
            NOTIFICATION_CENTER_ITEM_CREATE: V,
            LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: B,
            PASSIVE_UPDATE_V2: et,
            LOCAL_MESSAGES_LOADED: en,
            FAMILY_CENTER_INITIAL_LOAD: ep,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eh,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eg,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eE,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: em,
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: ev,
            LOAD_GRAVITY_HYDRATED: eI,
            EMBEDDED_ACTIVITY_UPDATE_V2: eb
        });
    }
}
m(eT, 'displayName', 'UserStore'), m(eT, 'LATEST_SNAPSHOT_VERSION', 1), (t.default = new eT());

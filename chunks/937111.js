n.d(t, {
    j: function () {
        return h;
    }
});
var r,
    i = n(442837),
    a = n(570140),
    o = n(601964),
    s = n(594174),
    l = n(881952);
function u(e, t, n) {
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
let c = !1,
    d = {},
    _ = !1,
    E = {},
    f = {};
function h(e) {
    return {
        joinRequestId: e.join_request_id,
        guildId: e.guild_id,
        userId: e.user_id,
        user: e.user,
        createdAt: e.created_at,
        formResponses: e.form_responses,
        rejectionReason: e.rejection_reason,
        applicationStatus: e.application_status,
        actionedAt: e.actioned_at,
        actionedByUser: e.actioned_by_user,
        lastSeen: e.last_seen,
        interviewChannelId: e.interview_channel_id
    };
}
function p(e) {
    let { guildJoinRequests: t } = e;
    (_ = !1),
        (E = {}),
        (d = {}),
        t.forEach((e) => {
            let { guild_id: t } = e;
            null != t && (d[t] = h(e));
        });
}
function m(e) {
    let { request: t, guildId: n } = e;
    if (null == t) {
        delete d[n];
        return;
    }
    let r = h(t);
    (0, l.d3)(r) ? delete d[n] : (d[n] = r);
}
function I(e) {
    let { guildId: t, request: n } = e;
    if (null == n) return;
    let r = h(n),
        i = s.default.getCurrentUser();
    if (null != i && r.userId !== i.id) return !1;
    (0, l.d3)(r) ? delete d[t] : (d[t] = r);
}
function T(e) {
    let { guild: t } = e;
    delete d[t.id];
}
function g(e) {
    let { invite: t } = e,
        { guild: n, join_request: r } = t;
    if (null != n && null != r) {
        let { guild_id: e } = r;
        d[e] = h(r);
        let { id: t, name: i, icon: a, features: o } = n;
        E[t] = {
            id: t,
            name: i,
            icon: a,
            features: null != o ? o : []
        };
    }
}
function S(e) {
    let { guilds: t } = e;
    (_ = !0),
        t.forEach((e) => {
            let { id: t, name: n, features: r, icon: i } = e;
            E[t] = {
                id: t,
                name: n,
                features: r,
                icon: i
            };
        });
}
function A(e) {
    let { guildId: t, cooldown: n } = e;
    f[t] = null != n ? n : 0;
}
function v(e) {
    let { form: t, guildId: n } = e;
    if ((null == t ? void 0 : t.guild) != null) {
        let { id: e, name: r, icon: i, features: a } = t.guild;
        E[n] = {
            id: e,
            name: r,
            icon: i,
            features: null != a ? a : []
        };
    }
}
function N(e) {
    let { guildId: t } = e;
    delete d[t];
}
function O() {
    c = !0;
}
function R() {
    c = !1;
}
class C extends (r = i.ZP.Store) {
    getRequest(e) {
        return d[e];
    }
    computeGuildIds() {
        return Object.values(d)
            .map((e) => (null == e ? void 0 : e.guildId))
            .filter((e) => null != e);
    }
    getJoinRequestGuild(e) {
        return null != E[e] ? new o.ZP(E[e]) : null;
    }
    get hasFetchedRequestToJoinGuilds() {
        return _;
    }
    hasJoinRequestCoackmark() {
        return c;
    }
    getCooldown(e) {
        return f[e];
    }
}
u(C, 'displayName', 'UserGuildJoinRequestStore'),
    (t.Z = new C(a.Z, {
        CONNECTION_OPEN: p,
        GUILD_JOIN_REQUEST_UPDATE: I,
        GUILD_JOIN_REQUEST_CREATE: I,
        USER_GUILD_JOIN_REQUEST_UPDATE: m,
        GUILD_DELETE: T,
        USER_JOIN_REQUEST_GUILDS_FETCH: S,
        MEMBER_VERIFICATION_FORM_UPDATE: v,
        INVITE_ACCEPT_SUCCESS: g,
        ACK_APPROVED_GUILD_JOIN_REQUEST: N,
        USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW: O,
        USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR: R,
        USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH: A
    }));

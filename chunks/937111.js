n.d(t, {
    j: function () {
        return g;
    }
});
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(601964),
    c = n(594174),
    d = n(881952);
let f = !1,
    _ = {},
    h = !1,
    p = {},
    m = {};
function g(e) {
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
function E(e) {
    let { guildId: t, request: n } = e;
    if (null == n) return;
    let r = g(n),
        i = c.default.getCurrentUser();
    if (null != i && r.userId !== i.id) return !1;
    (0, d.d3)(r) ? delete _[t] : (_[t] = r);
}
class v extends (s = o.ZP.Store) {
    getRequest(e) {
        return _[e];
    }
    computeGuildIds() {
        return Object.values(_)
            .map((e) => (null == e ? void 0 : e.guildId))
            .filter((e) => null != e);
    }
    getJoinRequestGuild(e) {
        return null != p[e] ? new u.ZP(p[e]) : null;
    }
    get hasFetchedRequestToJoinGuilds() {
        return h;
    }
    hasJoinRequestCoackmark() {
        return f;
    }
    getCooldown(e) {
        return m[e];
    }
}
(a = 'UserGuildJoinRequestStore'),
    (i = 'displayName') in (r = v)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new v(l.Z, {
        CONNECTION_OPEN: function (e) {
            let { guildJoinRequests: t } = e;
            (h = !1),
                (p = {}),
                (_ = {}),
                t.forEach((e) => {
                    let { guild_id: t } = e;
                    null != t && (_[t] = g(e));
                });
        },
        GUILD_JOIN_REQUEST_UPDATE: E,
        GUILD_JOIN_REQUEST_CREATE: E,
        USER_GUILD_JOIN_REQUEST_UPDATE: function (e) {
            let { request: t, guildId: n } = e;
            if (null == t) {
                delete _[n];
                return;
            }
            let r = g(t);
            (0, d.d3)(r) ? delete _[n] : (_[n] = r);
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            delete _[t.id];
        },
        USER_JOIN_REQUEST_GUILDS_FETCH: function (e) {
            let { guilds: t } = e;
            (h = !0),
                t.forEach((e) => {
                    let { id: t, name: n, features: r, icon: i } = e;
                    p[t] = {
                        id: t,
                        name: n,
                        features: r,
                        icon: i
                    };
                });
        },
        MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
            let { form: t, guildId: n } = e;
            if ((null == t ? void 0 : t.guild) != null) {
                let { id: e, name: r, icon: i, features: a } = t.guild;
                p[n] = {
                    id: e,
                    name: r,
                    icon: i,
                    features: null != a ? a : []
                };
            }
        },
        INVITE_ACCEPT_SUCCESS: function (e) {
            let { invite: t } = e,
                { guild: n, join_request: r } = t;
            if (null != n && null != r) {
                let { guild_id: e } = r;
                _[e] = g(r);
                let { id: t, name: i, icon: a, features: s } = n;
                p[t] = {
                    id: t,
                    name: i,
                    icon: a,
                    features: null != s ? s : []
                };
            }
        },
        ACK_APPROVED_GUILD_JOIN_REQUEST: function (e) {
            let { guildId: t } = e;
            delete _[t];
        },
        USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW: function () {
            f = !0;
        },
        USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR: function () {
            f = !1;
        },
        USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH: function (e) {
            let { guildId: t, cooldown: n } = e;
            m[t] = null != n ? n : 0;
        }
    }));

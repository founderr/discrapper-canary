var r,
    i = n(789020);
var a = n(442837),
    o = n(570140),
    s = n(264229),
    l = n(981631);
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
let c = {},
    d = {},
    _ = {};
function E(e, t) {
    var n;
    e = null != e ? e : '';
    let r = (0, s.fU)(e),
        i = c[e],
        a =
            null != i
                ? {
                      state: l.r2o.RESOLVING,
                      ...i
                  }
                : {
                      state: l.r2o.RESOLVING,
                      code: r.baseCode
                  };
    t(a),
        (c = {
            ...c,
            [e]: a
        }),
        (null === (n = a.guild) || void 0 === n ? void 0 : n.id) != null &&
            (_ = {
                ..._,
                [a.guild.id]: e
            });
}
function f(e) {
    let { code: t } = e,
        n = (0, s.fU)(t);
    c = {
        ...c,
        [t]: {
            code: n.baseCode,
            state: l.r2o.RESOLVING
        }
    };
}
function h(e) {
    return E(e.code, (t) => {
        var n, r;
        (t.state = l.r2o.RESOLVED), (t.guild = e.invite.guild), (t.channel = e.invite.channel), (t.inviter = e.invite.inviter), (t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null), (t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null), (t.target_type = e.invite.target_type), (t.target_user = e.invite.target_user), (t.target_application = e.invite.target_application), (t.expires_at = e.invite.expires_at), (t.stage_instance = e.invite.stage_instance), (t.friends_count = e.invite.friends_count), (t.is_contact = e.invite.is_contact), (t.guild_scheduled_event = e.invite.guild_scheduled_event), (t.type = e.invite.type), (t.flags = e.invite.flags);
    });
}
function p(e) {
    return E(e.invite.code, (t) => {
        var n, r;
        (t.state = l.r2o.RESOLVED), (t.guild = e.invite.guild), (t.channel = e.invite.channel), (t.inviter = e.invite.inviter), (t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null), (t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null), (t.target_type = e.invite.target_type), (t.target_user = e.invite.target_user), (t.target_application = e.invite.target_application), (t.stage_instance = e.invite.stage_instance), (t.guild_scheduled_event = e.invite.guild_scheduled_event), (t.type = e.invite.type);
    });
}
function m(e) {
    return E(e.invite.code, (t) => {
        (t.state = l.r2o.RESOLVED), (t.inviter = e.invite.inviter);
    });
}
function I(e) {
    e.invites.forEach((e) =>
        E(e.code, (e) => {
            e.state = l.r2o.EXPIRED;
        })
    );
}
function T(e) {
    return E(e.code, (t) => {
        t.state = 'banned' in e && e.banned ? l.r2o.BANNED : l.r2o.EXPIRED;
    });
}
function g(e) {
    return E(e.code, (e) => {
        e.state = l.r2o.ACCEPTING;
    });
}
function S(e) {
    return E(e.code, (t) => {
        (t.state = l.r2o.ACCEPTED),
            (t.guild = e.invite.guild),
            (t.new_member = e.invite.new_member),
            (t.channel = {
                ...t.channel,
                ...e.invite.channel
            });
    });
}
function A(e) {
    return (
        (d[e.code] = e.error),
        E(e.code, (e) => {
            e.state = l.r2o.ERROR;
        })
    );
}
function v(e) {
    return E(e.code, (e) => {
        e.state = l.r2o.APP_OPENING;
    });
}
function N(e) {
    return E(e.code, (e) => {
        e.state = l.r2o.APP_OPENED;
    });
}
function O(e) {
    return E(e.code, (e) => {
        e.state = l.r2o.APP_NOT_OPENED;
    });
}
class R extends (r = a.ZP.Store) {
    getInvite(e) {
        return c[e];
    }
    getInviteError(e) {
        return d[e];
    }
    getInvites() {
        return c;
    }
    getInviteKeyForGuildId(e) {
        return _[e];
    }
}
u(R, 'displayName', 'InviteStore'),
    (t.Z = new R(o.Z, {
        INVITE_RESOLVE: f,
        INVITE_RESOLVE_SUCCESS: h,
        INVITE_RESOLVE_FAILURE: T,
        INSTANT_INVITE_REVOKE_SUCCESS: T,
        FRIEND_INVITE_CREATE_SUCCESS: m,
        FRIEND_INVITE_REVOKE_SUCCESS: I,
        INSTANT_INVITE_CREATE_SUCCESS: p,
        INVITE_ACCEPT: g,
        INVITE_ACCEPT_SUCCESS: S,
        INVITE_ACCEPT_FAILURE: A,
        INVITE_APP_OPENING: v,
        INVITE_APP_OPENED: N,
        INVITE_APP_NOT_OPENED: O
    }));

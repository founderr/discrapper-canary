var r,
    i = n(47120);
var a = n(442837),
    o = n(570140),
    s = n(823379),
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
let c = [],
    d = {},
    _ = null,
    E = 0;
function f(e) {
    let { gameInvites: t } = e;
    c = t.map(T).filter(s.lm);
}
function h(e) {
    let { gameInvite: t } = e,
        n = T(t);
    null != n && ((c = [n, ...c]), (_ = t), (E += 1));
}
function p(e) {
    let { inviteId: t } = e;
    c = c.filter((e) => e.invite_id !== t);
}
function m(e) {
    let { inviteIds: t } = e;
    c = c.filter((e) => !t.includes(e.invite_id));
}
function I(e) {
    (d = { ...d })[e.inviteId] = {
        installed: e.installed,
        joinable: e.joinable
    };
}
function T(e) {
    let t = null;
    try {
        t = JSON.parse(e.launch_parameters);
    } catch {
        return null;
    }
    if (e.platform_type === l.ABu.XBOX) {
        let n = null == t ? void 0 : t.titleId,
            r = null == t ? void 0 : t.inviteToken;
        return null == n || null == r
            ? null
            : {
                  ...e,
                  parsed_launch_parameters: {
                      titleId: n,
                      inviteToken: r
                  }
              };
    }
    return null;
}
function g(e) {
    (_ = null), (E = 0);
}
class S extends (r = a.ZP.Store) {
    getInvites() {
        return c;
    }
    getInviteStatuses() {
        return d;
    }
    isInviteGameInstalled(e) {
        var t;
        return null === (t = d[e.invite_id]) || void 0 === t ? void 0 : t.installed;
    }
    isInviteJoinable(e) {
        var t;
        return null === (t = d[e.invite_id]) || void 0 === t ? void 0 : t.joinable;
    }
    getLastUnseenInvite() {
        return _;
    }
    getUnseenInviteCount() {
        return E;
    }
}
u(S, 'displayName', 'GameInviteStore'),
    (t.Z = new S(o.Z, {
        CONNECTION_OPEN_SUPPLEMENTAL: f,
        GAME_INVITE_CREATE: h,
        GAME_INVITE_DELETE: p,
        GAME_INVITE_DELETE_MANY: m,
        GAME_INVITE_UPDATE_STATUS: I,
        GAME_INVITE_CLEAR_UNSEEN: g
    }));

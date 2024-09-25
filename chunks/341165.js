let r;
var i,
    a = n(569048),
    o = n.n(a),
    s = n(167006),
    l = n.n(s),
    u = n(989872),
    c = n.n(u),
    d = n(442837),
    _ = n(570140),
    E = n(758449),
    f = n(245335);
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
    m = {},
    I = {},
    T = {},
    g = !1,
    S = !1,
    A = !1;
function v() {
    (p = {}), (m = {}), (I = {}), (T = {}), (r = null), (S = !1), (A = !1), (g = !1);
}
function N(e) {
    let { channel: t } = e;
    delete p[t.id], delete m[t.id], delete I[t.id];
}
function O(e) {
    let { channelId: t, invite: n } = e,
        r = E.Z.createFromServer(n);
    r.targetType === f.Iq.STREAM && null != r.targetUser ? (null == m[t] && (m[t] = {}), (m[t][String(r.targetUser.id)] = r)) : r.targetType === f.Iq.EMBEDDED_APPLICATION && null != r.targetApplication ? (null == I[t] && (I[t] = {}), (I[t][r.targetApplication.id] = r)) : (p[t] = r);
}
function R(e) {
    let { channelId: t } = e;
    p[t] = null;
}
function C(e) {
    let { channelId: t } = e;
    p[t] = null;
}
function y(e) {
    var t;
    (T[e.invite.code] = E.Z.createFromServer(e.invite)), (r = null !== (t = o()(l()(c()(Object.values(T), 'createdAt')))) && void 0 !== t ? t : null), (A = !1);
}
function b() {
    A = !1;
}
function L(e) {
    var t;
    null != e.invites &&
        e.invites.forEach((e) => {
            null != T[e.code] && delete T[e.code];
        }),
        (r = null !== (t = o()(l()(c()(Object.values(T), 'createdAt')))) && void 0 !== t ? t : null),
        (S = !1);
}
function D() {
    S = !0;
}
function M() {
    A = !0;
}
function P() {
    g = !0;
}
function U(e) {
    var t;
    (T = {}),
        e.invites.forEach((e) => {
            T[e.code] = E.Z.createFromServer(e);
        }),
        (r = null !== (t = o()(l()(c()(Object.values(T), 'createdAt')))) && void 0 !== t ? t : null),
        (g = !1);
}
function w(e) {
    delete p[e.channelId];
}
class x extends (i = d.ZP.Store) {
    getInvite(e) {
        var t, n;
        let { targetType: r, targetUserId: i, targetApplicationId: a } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r === f.Iq.STREAM && null != i ? (null === (t = m[e]) || void 0 === t ? void 0 : t[i]) : r === f.Iq.EMBEDDED_APPLICATION && null != a ? (null === (n = I[e]) || void 0 === n ? void 0 : n[a]) : p[e];
    }
    getFriendInvite() {
        return r;
    }
    getFriendInvitesFetching() {
        return g;
    }
    canRevokeFriendInvite() {
        return null != r && !S && !A;
    }
}
h(x, 'displayName', 'InstantInviteStore'),
    (t.Z = new x(_.Z, {
        CONNECTION_OPEN: v,
        CHANNEL_DELETE: N,
        FRIEND_INVITE_CREATE_SUCCESS: y,
        FRIEND_INVITE_CREATE_FAILURE: b,
        FRIEND_INVITE_REVOKE_SUCCESS: L,
        INSTANT_INVITE_CREATE_SUCCESS: O,
        INSTANT_INVITE_CREATE_FAILURE: R,
        INSTANT_INVITE_REVOKE_SUCCESS: C,
        FRIEND_INVITE_REVOKE_REQUEST: D,
        FRIEND_INVITE_CREATE_REQUEST: M,
        FRIEND_INVITES_FETCH_REQUEST: P,
        FRIEND_INVITES_FETCH_RESPONSE: U,
        INSTANT_INVITE_CLEAR: w
    }));

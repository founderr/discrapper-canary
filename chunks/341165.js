let i;
var a,
    s = r(569048),
    o = r.n(s),
    l = r(167006),
    u = r.n(l),
    c = r(989872),
    d = r.n(c),
    f = r(442837),
    _ = r(570140),
    h = r(758449),
    p = r(245335);
function m(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let g = {},
    E = {},
    v = {},
    I = {},
    T = !1,
    b = !1,
    y = !1;
function S() {
    (g = {}), (E = {}), (v = {}), (I = {}), (i = null), (b = !1), (y = !1), (T = !1);
}
function A(e) {
    let { channel: n } = e;
    delete g[n.id], delete E[n.id], delete v[n.id];
}
function N(e) {
    let { channelId: n, invite: r } = e,
        i = h.Z.createFromServer(r);
    i.targetType === p.Iq.STREAM && null != i.targetUser ? (null == E[n] && (E[n] = {}), (E[n][String(i.targetUser.id)] = i)) : i.targetType === p.Iq.EMBEDDED_APPLICATION && null != i.targetApplication ? (null == v[n] && (v[n] = {}), (v[n][i.targetApplication.id] = i)) : (g[n] = i);
}
function C(e) {
    let { channelId: n } = e;
    g[n] = null;
}
function R(e) {
    let { channelId: n } = e;
    g[n] = null;
}
function O(e) {
    var n;
    (I[e.invite.code] = h.Z.createFromServer(e.invite)), (i = null !== (n = o()(u()(d()(Object.values(I), 'createdAt')))) && void 0 !== n ? n : null), (y = !1);
}
function D() {
    y = !1;
}
function L(e) {
    var n;
    null != e.invites &&
        e.invites.forEach((e) => {
            null != I[e.code] && delete I[e.code];
        }),
        (i = null !== (n = o()(u()(d()(Object.values(I), 'createdAt')))) && void 0 !== n ? n : null),
        (b = !1);
}
function x() {
    b = !0;
}
function w() {
    y = !0;
}
function P() {
    T = !0;
}
function M(e) {
    var n;
    (I = {}),
        e.invites.forEach((e) => {
            I[e.code] = h.Z.createFromServer(e);
        }),
        (i = null !== (n = o()(u()(d()(Object.values(I), 'createdAt')))) && void 0 !== n ? n : null),
        (T = !1);
}
function k(e) {
    delete g[e.channelId];
}
class U extends (a = f.ZP.Store) {
    getInvite(e) {
        var n, r;
        let { targetType: i, targetUserId: a, targetApplicationId: s } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return i === p.Iq.STREAM && null != a ? (null === (n = E[e]) || void 0 === n ? void 0 : n[a]) : i === p.Iq.EMBEDDED_APPLICATION && null != s ? (null === (r = v[e]) || void 0 === r ? void 0 : r[s]) : g[e];
    }
    getFriendInvite() {
        return i;
    }
    getFriendInvitesFetching() {
        return T;
    }
    canRevokeFriendInvite() {
        return null != i && !b && !y;
    }
}
m(U, 'displayName', 'InstantInviteStore'),
    (n.Z = new U(_.Z, {
        CONNECTION_OPEN: S,
        CHANNEL_DELETE: A,
        FRIEND_INVITE_CREATE_SUCCESS: O,
        FRIEND_INVITE_CREATE_FAILURE: D,
        FRIEND_INVITE_REVOKE_SUCCESS: L,
        INSTANT_INVITE_CREATE_SUCCESS: N,
        INSTANT_INVITE_CREATE_FAILURE: C,
        INSTANT_INVITE_REVOKE_SUCCESS: R,
        FRIEND_INVITE_REVOKE_REQUEST: x,
        FRIEND_INVITE_CREATE_REQUEST: w,
        FRIEND_INVITES_FETCH_REQUEST: P,
        FRIEND_INVITES_FETCH_RESPONSE: M,
        INSTANT_INVITE_CLEAR: k
    }));

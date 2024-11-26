let r;
var i,
    a,
    s,
    o,
    l = n(569048),
    u = n.n(l),
    c = n(167006),
    d = n.n(c),
    f = n(989872),
    _ = n.n(f),
    p = n(442837),
    h = n(570140),
    m = n(758449),
    g = n(245335);
let E = {},
    v = {},
    I = {},
    T = {},
    b = !1,
    S = !1,
    y = !1;
class A extends (o = p.ZP.Store) {
    getInvite(e) {
        var t, n;
        let { targetType: r, targetUserId: i, targetApplicationId: a } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r === g.Iq.STREAM && null != i ? (null === (t = v[e]) || void 0 === t ? void 0 : t[i]) : r === g.Iq.EMBEDDED_APPLICATION && null != a ? (null === (n = I[e]) || void 0 === n ? void 0 : n[a]) : E[e];
    }
    getFriendInvite() {
        return r;
    }
    getFriendInvitesFetching() {
        return b;
    }
    canRevokeFriendInvite() {
        return null != r && !S && !y;
    }
}
(s = 'InstantInviteStore'),
    (a = 'displayName') in (i = A)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new A(h.Z, {
        CONNECTION_OPEN: function () {
            (E = {}), (v = {}), (I = {}), (T = {}), (r = null), (S = !1), (y = !1), (b = !1);
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            delete E[t.id], delete v[t.id], delete I[t.id];
        },
        FRIEND_INVITE_CREATE_SUCCESS: function (e) {
            var t;
            (T[e.invite.code] = m.Z.createFromServer(e.invite)), (r = null !== (t = u()(d()(_()(Object.values(T), 'createdAt')))) && void 0 !== t ? t : null), (y = !1);
        },
        FRIEND_INVITE_CREATE_FAILURE: function () {
            y = !1;
        },
        FRIEND_INVITE_REVOKE_SUCCESS: function (e) {
            var t;
            null != e.invites &&
                e.invites.forEach((e) => {
                    null != T[e.code] && delete T[e.code];
                }),
                (r = null !== (t = u()(d()(_()(Object.values(T), 'createdAt')))) && void 0 !== t ? t : null),
                (S = !1);
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
            let { channelId: t, invite: n } = e,
                r = m.Z.createFromServer(n);
            r.targetType === g.Iq.STREAM && null != r.targetUser ? (null == v[t] && (v[t] = {}), (v[t][String(r.targetUser.id)] = r)) : r.targetType === g.Iq.EMBEDDED_APPLICATION && null != r.targetApplication ? (null == I[t] && (I[t] = {}), (I[t][r.targetApplication.id] = r)) : (E[t] = r);
        },
        INSTANT_INVITE_CREATE_FAILURE: function (e) {
            let { channelId: t } = e;
            E[t] = null;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
            let { channelId: t } = e;
            E[t] = null;
        },
        FRIEND_INVITE_REVOKE_REQUEST: function () {
            S = !0;
        },
        FRIEND_INVITE_CREATE_REQUEST: function () {
            y = !0;
        },
        FRIEND_INVITES_FETCH_REQUEST: function () {
            b = !0;
        },
        FRIEND_INVITES_FETCH_RESPONSE: function (e) {
            var t;
            (T = {}),
                e.invites.forEach((e) => {
                    T[e.code] = m.Z.createFromServer(e);
                }),
                (r = null !== (t = u()(d()(_()(Object.values(T), 'createdAt')))) && void 0 !== t ? t : null),
                (b = !1);
        },
        INSTANT_INVITE_CLEAR: function (e) {
            delete E[e.channelId];
        }
    }));

let r, i;
n.d(t, {
    q: function () {
        return a;
    }
}),
    n(653041);
var a,
    s,
    o,
    l = n(213919),
    u = n(442837),
    c = n(570140),
    d = n(990492),
    f = n(988965),
    _ = n(71509);
function p(e, t, n) {
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
((o = a || (a = {}))[(o.INVALID = 0)] = 'INVALID'), (o[(o.VALIDATING = 1)] = 'VALIDATING'), (o[(o.VALID = 2)] = 'VALID');
let h = [],
    m = !1;
function g(e) {
    (h = h.filter((t) => {
        let { id: n } = t;
        return n !== e;
    })),
        l.removeToken(e);
}
function E(e, t) {
    let n = h.slice(),
        r = n.find((t) => {
            let { id: n } = t;
            return n === e;
        });
    null != r && ((r.tokenStatus = t), (h = n));
}
class v extends (s = u.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t;
            (h = null !== (t = e.users) && void 0 !== t ? t : []), (i = e.canUseMultiAccountMobile);
        }
    }
    getCanUseMultiAccountMobile() {
        return i;
    }
    getState() {
        return {
            users: h,
            canUseMultiAccountMobile: i
        };
    }
    getUsers() {
        return h;
    }
    getValidUsers() {
        return h.filter((e) => {
            let { tokenStatus: t } = e;
            return 0 !== t;
        });
    }
    getHasLoggedInAccounts() {
        return h.length > 0;
    }
    getIsValidatingUsers() {
        return h.some((e) => {
            let { tokenStatus: t } = e;
            return 1 === t;
        });
    }
    get canUseMultiAccountNotifications() {
        return this.getCanUseMultiAccountMobile() && f.N.getCurrentConfig({ location: '09e468_1' }, { autoTrackExposure: !1 }).isMultiAccountMobileNotificationsEnabled;
    }
    get isSwitchingAccount() {
        return m;
    }
}
p(v, 'displayName', 'MultiAccountStore'),
    p(v, 'persistKey', 'MultiAccountStore'),
    p(v, 'migrations', [
        (e) => {
            if (null != e) {
                var t;
                return {
                    users: null !== (t = e.users) && void 0 !== t ? t : [],
                    canUseMultiAccountMobile: !1
                };
            }
            return {
                users: [],
                canUseMultiAccountMobile: !1
            };
        }
    ]),
    (t.Z = new v(c.Z, {
        CONNECTION_OPEN: function (e) {
            let { user: t } = e;
            (r = t.id), (m = !1);
            let n = h.slice(),
                i = n.findIndex((e) => {
                    let { id: n } = e;
                    return n === t.id;
                });
            i > -1
                ? ((h[i].avatar = t.avatar), (h[i].username = t.username), (h[i].discriminator = t.discriminator), (h[i].tokenStatus = 2))
                : n.push({
                      id: t.id,
                      avatar: t.avatar,
                      username: t.username,
                      discriminator: t.discriminator,
                      tokenStatus: 2,
                      pushSyncToken: null
                  }),
                (h = n).length > _.$H &&
                    h.splice(_.$H).forEach((e) => {
                        let { id: t } = e;
                        g(t);
                    });
        },
        LOGOUT: function (e) {
            (m = !!e.isSwitchingAccount),
                !e.isSwitchingAccount &&
                    (h = h.filter((e) => {
                        let { id: t } = e;
                        return t !== r;
                    })),
                (r = null);
        },
        MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST: (e) => E(e.userId, 1),
        MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS: (e) => E(e.userId, 2),
        MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE: (e) => E(e.userId, 0),
        MULTI_ACCOUNT_REMOVE_ACCOUNT: (e) => g(e.userId),
        MULTI_ACCOUNT_MOVE_ACCOUNT: function (e) {
            let { from: t, to: n } = e;
            h = (0, d.aB)(h, t, n);
        },
        CURRENT_USER_UPDATE: function (e) {
            let { user: t } = e,
                n = h.slice(),
                r = n.find((e) => {
                    let { id: n } = e;
                    return n === t.id;
                });
            null != r && ((r.avatar = t.avatar), (r.username = t.username), (r.discriminator = t.discriminator), (h = n));
        },
        MULTI_ACCOUNT_MOBILE_EXPERIMENT_UPDATE: function (e) {
            let { multiAccountMobileExperimentEnabled: t } = e;
            i = t;
        },
        MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN: function (e) {
            let { userId: t, pushSyncToken: n } = e;
            h = h.map((e) =>
                e.id === t
                    ? {
                          ...e,
                          pushSyncToken: n
                      }
                    : e
            );
        },
        MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS: function (e) {
            let { invalidPushSyncTokens: t } = e;
            h = h.map((e) =>
                null != e.pushSyncToken && t.includes(e.pushSyncToken)
                    ? {
                          ...e,
                          pushSyncToken: null
                      }
                    : e
            );
        }
    }));

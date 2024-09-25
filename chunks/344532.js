var r,
    i = n(724458);
var a = n(442837),
    o = n(570140);
function s(e, t, n) {
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
let l = {},
    u = null,
    c = null;
function d(e, t) {
    null == t ? e in l && delete l[e] : null != e && (l[e] = t);
}
function _(e) {
    let { required_actions: t, user_id: n } = e;
    d((u = n), t);
}
function E(e) {
    let { user: t } = e;
    c = t.id;
}
function f(e) {
    let { userId: t } = e;
    d(t, null);
}
function h(e) {
    let { isSwitchingAccount: t } = e;
    !t && null != c && d(c, null);
}
function p(e) {
    let { userId: t } = e;
    d(t, null);
}
class m extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        null != e && (l = e);
    }
    requiredActions(e) {
        var t;
        return null !== (t = l[e]) && void 0 !== t ? t : null;
    }
    requiredActionsIncludes(e, t) {
        let n = this.requiredActions(e);
        return null != n && t.reduce((e, t) => e || n.includes(t), !1);
    }
    wasLoginAttemptedInSession(e) {
        return u === e;
    }
    getState() {
        return l;
    }
}
s(m, 'displayName', 'LoginRequiredActionStore'),
    s(m, 'persistKey', 'LoginRequiredActionStore'),
    (t.Z = new m(o.Z, {
        LOGIN_ATTEMPTED: _,
        CONNECTION_OPEN: E,
        CURRENT_USER_UPDATE: E,
        LOGOUT: h,
        PASSWORD_UPDATED: f,
        MULTI_ACCOUNT_REMOVE_ACCOUNT: p
    }));

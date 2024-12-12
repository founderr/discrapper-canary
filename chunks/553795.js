var i,
    a = r(47120);
var s = r(442837),
    o = r(570140),
    l = r(457330),
    u = r(726542),
    c = r(368111),
    d = r(601964);
function f(e, n, r) {
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
let _ = new Set([r(981631).ABu.CONTACTS]),
    h = !0,
    p = [],
    m = [],
    g = {},
    E = new Set(),
    v = {},
    I = {},
    T = (e) => {
        (p = e.filter((e) => !_.has(e.type) && u.Z.isSupported(e.type))), (m = e.filter((e) => _.has(e.type))), (h = !1);
    };
function b(e) {
    T(e.connectedAccounts.map((e) => new c.Z(e)));
}
function y(e) {
    e.local && null != e.accounts
        ? T(
              e.accounts.map(
                  (e) =>
                      new c.Z({
                          ...e,
                          integrations: e.integrations.map((e) => ({
                              ...e,
                              guild: new d.ZP(e.guild)
                          }))
                      })
              )
          )
        : l.Z.fetch();
}
function S(e) {
    g[e.integrationId] = e.joining;
}
function A(e) {
    I[e.integrationId] = void 0 !== e.error ? e.error : '';
}
function N(e) {
    let { platformType: n, id: r, revoked: i, accessToken: a } = e,
        s = p.find((e) => e.id === r && e.type === n);
    if (null == s) return !1;
    null != i && (s.revoked = i), null != a && (s.accessToken = a);
}
function C(e) {
    let { code: n, state: r, openid_params: i, provider: a } = e;
    l.Z.callback(a, {
        code: n,
        state: r,
        openid_params: i
    });
}
class R extends (i = s.ZP.Store) {
    isJoining(e) {
        return g[e] || !1;
    }
    joinErrorMessage(e) {
        return I[e];
    }
    isFetching() {
        return h;
    }
    getAccounts() {
        return p;
    }
    getLocalAccounts() {
        return m;
    }
    getAccount(e, n) {
        return p.find((r) => (null == e || r.id === e) && r.type === n);
    }
    getLocalAccount(e) {
        return m.find((n) => n.type === e);
    }
    isSuggestedAccountType(e) {
        return v[e] || !1;
    }
    addPendingAuthorizedState(e) {
        E.add(e);
    }
    deletePendingAuthorizedState(e) {
        E.delete(e);
    }
    hasPendingAuthorizedState(e) {
        return E.has(e);
    }
}
f(R, 'displayName', 'ConnectedAccountsStore'),
    (n.Z = new R(o.Z, {
        CONNECTION_OPEN: b,
        USER_CONNECTIONS_UPDATE: y,
        USER_CONNECTIONS_INTEGRATION_JOINING: S,
        USER_CONNECTION_UPDATE: N,
        USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: A,
        USER_CONNECTIONS_CALLBACK: C
    }));

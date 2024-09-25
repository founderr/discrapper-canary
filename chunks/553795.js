var r,
    i = n(47120);
var a = n(442837),
    o = n(570140),
    s = n(457330),
    l = n(726542),
    u = n(368111),
    c = n(601964);
function d(e, t, n) {
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
let _ = new Set([n(981631).ABu.CONTACTS]),
    E = !0,
    f = [],
    h = [],
    p = {},
    m = new Set(),
    I = {},
    T = {},
    g = (e) => {
        (f = e.filter((e) => !_.has(e.type) && l.Z.isSupported(e.type))), (h = e.filter((e) => _.has(e.type))), (E = !1);
    };
function S(e) {
    g(e.connectedAccounts.map((e) => new u.Z(e)));
}
function A(e) {
    e.local && null != e.accounts
        ? g(
              e.accounts.map(
                  (e) =>
                      new u.Z({
                          ...e,
                          integrations: e.integrations.map((e) => ({
                              ...e,
                              guild: new c.ZP(e.guild)
                          }))
                      })
              )
          )
        : s.Z.fetch();
}
function v(e) {
    p[e.integrationId] = e.joining;
}
function N(e) {
    T[e.integrationId] = void 0 !== e.error ? e.error : '';
}
function O(e) {
    let { platformType: t, id: n, revoked: r, accessToken: i } = e,
        a = f.find((e) => e.id === n && e.type === t);
    if (null == a) return !1;
    null != r && (a.revoked = r), null != i && (a.accessToken = i);
}
function R(e) {
    let { state: t, code: n, provider: r, openid_params: i } = e;
    m.has(t) &&
        (m.delete(t),
        s.Z.callback(r, {
            code: n,
            state: t,
            openid_params: i
        }));
}
class C extends (r = a.ZP.Store) {
    isJoining(e) {
        return p[e] || !1;
    }
    joinErrorMessage(e) {
        return T[e];
    }
    isFetching() {
        return E;
    }
    getAccounts() {
        return f;
    }
    getLocalAccounts() {
        return h;
    }
    getAccount(e, t) {
        return f.find((n) => (null == e || n.id === e) && n.type === t);
    }
    getLocalAccount(e) {
        return h.find((t) => t.type === e);
    }
    isSuggestedAccountType(e) {
        return I[e] || !1;
    }
    addPendingAuthorizedState(e) {
        m.add(e);
    }
    deletePendingAuthorizedState(e) {
        m.delete(e);
    }
    hasPendingAuthorizedState(e) {
        return m.has(e);
    }
}
d(C, 'displayName', 'ConnectedAccountsStore'),
    (t.Z = new C(o.Z, {
        CONNECTION_OPEN: S,
        USER_CONNECTIONS_UPDATE: A,
        USER_CONNECTIONS_INTEGRATION_JOINING: v,
        USER_CONNECTION_UPDATE: O,
        USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: N,
        USER_CONNECTIONS_CALLBACK: R
    }));

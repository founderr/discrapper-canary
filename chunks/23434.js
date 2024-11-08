var i,
    r,
    l,
    a,
    o = n(442837),
    s = n(570140);
let c = null;
class d extends (a = o.ZP.Store) {
    hasAction() {
        return null != c;
    }
    getAction() {
        return c;
    }
}
function u(e) {
    c = e.requiredAction;
}
(l = 'UserRequiredActionStore'),
    (r = 'displayName') in (i = d)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new d(s.Z, {
        CONNECTION_OPEN: u,
        USER_REQUIRED_ACTION_UPDATE: u
    }));

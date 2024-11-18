var r,
    o,
    i,
    a,
    s = n(442837),
    l = n(570140);
let c = null;
class d extends (a = s.ZP.Store) {
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
(i = 'UserRequiredActionStore'),
    (o = 'displayName') in (r = d)
        ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[o] = i),
    (t.Z = new d(l.Z, {
        CONNECTION_OPEN: u,
        USER_REQUIRED_ACTION_UPDATE: u
    }));

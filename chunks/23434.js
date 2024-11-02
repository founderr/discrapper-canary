var t,
    i,
    o,
    r,
    _ = n(442837),
    R = n(570140);
let I = null;
class c extends (r = _.ZP.Store) {
    hasAction() {
        return null != I;
    }
    getAction() {
        return I;
    }
}
function a(e) {
    I = e.requiredAction;
}
(o = 'UserRequiredActionStore'),
    (i = 'displayName') in (t = c)
        ? Object.defineProperty(t, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (t[i] = o),
    (E.Z = new c(R.Z, {
        CONNECTION_OPEN: a,
        USER_REQUIRED_ACTION_UPDATE: a
    }));

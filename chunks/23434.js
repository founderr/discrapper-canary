var _,
    t,
    I,
    R,
    i = n(442837),
    o = n(570140);
let r = null;
class c extends (R = i.ZP.Store) {
    hasAction() {
        return null != r;
    }
    getAction() {
        return r;
    }
}
function a(e) {
    r = e.requiredAction;
}
(I = 'UserRequiredActionStore'),
    (t = 'displayName') in (_ = c)
        ? Object.defineProperty(_, t, {
              value: I,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (_[t] = I),
    (E.Z = new c(o.Z, {
        CONNECTION_OPEN: a,
        USER_REQUIRED_ACTION_UPDATE: a
    }));

var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
function s() {
    return {
        usageByApplicationId: {},
        shelfOrder: []
    };
}
let l = s();
function u() {
    l = s();
}
class c extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        l = {
            ...s(),
            ...(null != e ? e : {})
        };
    }
    getState() {
        return l;
    }
}
o(c, 'displayName', 'ActivityShelfStore'), o(c, 'persistKey', 'ActivityShelfStore'), (t.Z = new c(a.Z, { LOGOUT: u }));

var l,
    i = n(442837),
    r = n(570140);
function a(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
let u = null;
class o extends (l = i.ZP.PersistedStore) {
    initialize(t) {
        var e;
        u = null !== (e = null == t ? void 0 : t.type) && void 0 !== e ? e : null;
    }
    getType() {
        return u;
    }
    getState() {
        return { type: u };
    }
}
a(o, 'displayName', 'NewUserStore'),
    a(o, 'persistKey', 'nuf'),
    (e.Z = new o(r.Z, {
        NUF_NEW_USER: function (t) {
            let { newUserType: e } = t;
            u = e;
        },
        NUF_COMPLETE: function () {
            u = null;
        }
    }));

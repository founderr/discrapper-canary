var r,
    i = n(47120);
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
let l = [];
function u(e) {
    let { component: t } = e;
    if (l.indexOf(t) >= 0) return !1;
    l = [...l, t];
}
function c() {
    if (0 === l.length) return !1;
    l = l.slice(0, -1);
}
function d() {
    l = [];
}
class _ extends (r = a.ZP.Store) {
    hasLayers() {
        return l.length > 0;
    }
    getLayers() {
        return l;
    }
}
s(_, 'displayName', 'LayerStore'),
    (t.Z = new _(o.Z, {
        LAYER_PUSH: u,
        LAYER_POP: c,
        LAYER_POP_ALL: d,
        LOGOUT: d,
        NOTIFICATION_CLICK: d
    }));

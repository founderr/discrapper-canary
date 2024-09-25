n.d(t, {
    ZP: function () {
        return a;
    },
    _$: function () {
        return o;
    },
    d7: function () {
        return s;
    }
});
var r = n(47120);
var i = n(149765);
function a(e) {
    for (let { permissionOverwrites_: t } of e)
        if (null != t)
            for (let e in t) {
                let n = t[e];
                (n.allow = i.vB(n.allow)), (n.deny = i.vB(n.deny));
            }
}
function o(e) {
    for (let [t, n] of e) a(n);
}
function s(e) {
    let { permissionOverwrites_: t } = e;
    if (null != t)
        for (let e in t) {
            let n = t[e];
            (n.allow = i.vB(n.allow)), (n.deny = i.vB(n.deny));
        }
    return e;
}

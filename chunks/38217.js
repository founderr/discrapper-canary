r.d(n, {
    ZP: function () {
        return s;
    },
    _$: function () {
        return o;
    },
    d7: function () {
        return l;
    }
});
var i = r(47120);
var a = r(149765);
function s(e) {
    for (let { permissionOverwrites_: n } of e)
        if (null != n)
            for (let e in n) {
                let r = n[e];
                (r.allow = a.vB(r.allow)), (r.deny = a.vB(r.deny));
            }
}
function o(e) {
    for (let [n, r] of e) s(r);
}
function l(e) {
    let { permissionOverwrites_: n } = e;
    if (null != n)
        for (let e in n) {
            let r = n[e];
            (r.allow = a.vB(r.allow)), (r.deny = a.vB(r.deny));
        }
    return e;
}

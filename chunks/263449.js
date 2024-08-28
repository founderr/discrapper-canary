r.d(t, {
    $e: function () {
        return c;
    },
    aF: function () {
        return E;
    },
    lW: function () {
        return s;
    },
    nZ: function () {
        return _;
    },
    s3: function () {
        return u;
    },
    wi: function () {
        return I;
    }
});
var n = r(899517),
    a = r(833873),
    o = r(356442),
    i = r(307854);
function _() {
    let e = (0, o.c)();
    return (0, a.G)(e).getCurrentScope();
}
function E() {
    let e = (0, o.c)();
    return (0, a.G)(e).getIsolationScope();
}
function s() {
    return (0, n.Y)('globalScope', () => new i.s());
}
function c(...e) {
    let t = (0, o.c)(),
        r = (0, a.G)(t);
    if (2 === e.length) {
        let [t, n] = e;
        return t ? r.withSetScope(t, n) : r.withScope(n);
    }
    return r.withScope(e[0]);
}
function I(...e) {
    let t = (0, o.c)(),
        r = (0, a.G)(t);
    if (2 === e.length) {
        let [t, n] = e;
        return t ? r.withSetIsolationScope(t, n) : r.withIsolationScope(n);
    }
    return r.withIsolationScope(e[0]);
}
function u() {
    return _().getClient();
}

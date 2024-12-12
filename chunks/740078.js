r.d(n, {
    BL: function () {
        return c;
    },
    Ct: function () {
        return g;
    },
    F2: function () {
        return s;
    },
    I: function () {
        return a;
    },
    Pj: function () {
        return _;
    },
    YP: function () {
        return p;
    },
    bw: function () {
        return m;
    },
    d7: function () {
        return l;
    },
    k5: function () {
        return h;
    },
    mv: function () {
        return u;
    },
    t$: function () {
        return o;
    },
    ut: function () {
        return d;
    },
    we: function () {
        return i;
    },
    xs: function () {
        return E;
    },
    zV: function () {
        return f;
    }
});
var i = 'top',
    a = 'bottom',
    s = 'right',
    o = 'left',
    l = 'auto',
    u = [i, a, s, o],
    c = 'start',
    d = 'end',
    f = 'clippingParents',
    _ = 'viewport',
    h = 'popper',
    p = 'reference',
    m = u.reduce(function (e, n) {
        return e.concat([n + '-' + c, n + '-' + d]);
    }, []),
    g = [].concat(u, [l]).reduce(function (e, n) {
        return e.concat([n, n + '-' + c, n + '-' + d]);
    }, []),
    E = ['beforeRead', 'read', 'afterRead', 'beforeMain', 'main', 'afterMain', 'beforeWrite', 'write', 'afterWrite'];

n.d(t, {
    BL: function () {
        return u;
    },
    Ct: function () {
        return m;
    },
    F2: function () {
        return a;
    },
    I: function () {
        return i;
    },
    Pj: function () {
        return f;
    },
    YP: function () {
        return h;
    },
    bw: function () {
        return p;
    },
    d7: function () {
        return o;
    },
    k5: function () {
        return _;
    },
    mv: function () {
        return l;
    },
    t$: function () {
        return s;
    },
    ut: function () {
        return c;
    },
    we: function () {
        return r;
    },
    xs: function () {
        return g;
    },
    zV: function () {
        return d;
    }
});
var r = 'top',
    i = 'bottom',
    a = 'right',
    s = 'left',
    o = 'auto',
    l = [r, i, a, s],
    u = 'start',
    c = 'end',
    d = 'clippingParents',
    f = 'viewport',
    _ = 'popper',
    h = 'reference',
    p = l.reduce(function (e, t) {
        return e.concat([t + '-' + u, t + '-' + c]);
    }, []),
    m = [].concat(l, [o]).reduce(function (e, t) {
        return e.concat([t, t + '-' + u, t + '-' + c]);
    }, []),
    g = ['beforeRead', 'read', 'afterRead', 'beforeMain', 'main', 'afterMain', 'beforeWrite', 'write', 'afterWrite'];

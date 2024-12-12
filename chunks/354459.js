var i, a, s, o;
function l(e) {
    return !((null == e ? void 0 : e.type) !== 0 && (null == e ? void 0 : e.type) !== 1);
}
function u(e) {
    return (null == e ? void 0 : e.type) === 2;
}
function c(e) {
    return (null == e ? void 0 : e.type) === 3;
}
r.d(n, {
    $i: function () {
        return f;
    },
    I: function () {
        return c;
    },
    Io: function () {
        return u;
    },
    Rv: function () {
        return _;
    },
    _5: function () {
        return l;
    },
    cL: function () {
        return o;
    },
    dF: function () {
        return a;
    },
    e5: function () {
        return h;
    },
    fO: function () {
        return i;
    },
    l8: function () {
        return d;
    },
    wR: function () {
        return s;
    }
}),
    !(function (e) {
        (e[(e.STREAM = 0)] = 'STREAM'), (e[(e.HIDDEN_STREAM = 1)] = 'HIDDEN_STREAM'), (e[(e.USER = 2)] = 'USER'), (e[(e.ACTIVITY = 3)] = 'ACTIVITY');
    })(i || (i = {})),
    !(function (e) {
        (e.NONE = 'NONE'), (e.AUTO = 'AUTO');
    })(a || (a = {})),
    !(function (e) {
        (e[(e.DESKTOP = 0)] = 'DESKTOP'), (e[(e.MOBILE = 1)] = 'MOBILE'), (e[(e.XBOX = 2)] = 'XBOX'), (e[(e.PLAYSTATION = 3)] = 'PLAYSTATION');
    })(s || (s = {})),
    !(function (e) {
        (e[(e.VIDEO = 0)] = 'VIDEO'), (e[(e.CAMERA_PREVIEW = 1)] = 'CAMERA_PREVIEW');
    })(o || (o = {}));
let d = {
        0: 320,
        1: 160
    },
    f = {
        0: 960,
        1: 480
    },
    _ = {
        0: 200,
        1: 160
    },
    h = 8;

var r, i, a, o;
function s(e) {
    return !((null == e ? void 0 : e.type) !== 0 && (null == e ? void 0 : e.type) !== 1);
}
function l(e) {
    return (null == e ? void 0 : e.type) === 2;
}
function u(e) {
    return (null == e ? void 0 : e.type) === 3;
}
n.d(t, {
    $i: function () {
        return d;
    },
    I: function () {
        return u;
    },
    Io: function () {
        return l;
    },
    Rv: function () {
        return _;
    },
    _5: function () {
        return s;
    },
    cL: function () {
        return o;
    },
    dF: function () {
        return i;
    },
    e5: function () {
        return E;
    },
    fO: function () {
        return r;
    },
    l8: function () {
        return c;
    },
    wR: function () {
        return a;
    }
}),
    !(function (e) {
        (e[(e.STREAM = 0)] = 'STREAM'), (e[(e.HIDDEN_STREAM = 1)] = 'HIDDEN_STREAM'), (e[(e.USER = 2)] = 'USER'), (e[(e.ACTIVITY = 3)] = 'ACTIVITY');
    })(r || (r = {})),
    !(function (e) {
        (e.NONE = 'NONE'), (e.AUTO = 'AUTO');
    })(i || (i = {})),
    !(function (e) {
        (e[(e.DESKTOP = 0)] = 'DESKTOP'), (e[(e.MOBILE = 1)] = 'MOBILE'), (e[(e.XBOX = 2)] = 'XBOX'), (e[(e.PLAYSTATION = 3)] = 'PLAYSTATION');
    })(a || (a = {})),
    !(function (e) {
        (e[(e.VIDEO = 0)] = 'VIDEO'), (e[(e.CAMERA_PREVIEW = 1)] = 'CAMERA_PREVIEW');
    })(o || (o = {}));
let c = {
        0: 320,
        1: 160
    },
    d = {
        0: 960,
        1: 480
    },
    _ = {
        0: 200,
        1: 160
    },
    E = 8;

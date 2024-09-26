n.d(t, {
    A5: function () {
        return U;
    },
    Bg: function () {
        return E;
    },
    D5: function () {
        return o;
    },
    D_: function () {
        return u;
    },
    EF: function () {
        return _;
    },
    G$: function () {
        return c;
    },
    HW: function () {
        return I;
    },
    Hp: function () {
        return m;
    },
    JO: function () {
        return O;
    },
    Kw: function () {
        return C;
    },
    MG: function () {
        return g;
    },
    OT: function () {
        return r;
    },
    Qr: function () {
        return A;
    },
    Ut: function () {
        return S;
    },
    WM: function () {
        return f;
    },
    X9: function () {
        return a;
    },
    XH: function () {
        return T;
    },
    _U: function () {
        return M;
    },
    dJ: function () {
        return i;
    },
    f_: function () {
        return v;
    },
    i$: function () {
        return b;
    },
    jF: function () {
        return d;
    },
    ji: function () {
        return L;
    },
    jp: function () {
        return y;
    },
    mg: function () {
        return p;
    },
    nU: function () {
        return h;
    },
    wD: function () {
        return N;
    },
    xd: function () {
        return P;
    },
    xx: function () {
        return D;
    },
    yl: function () {
        return R;
    }
});
var r,
    i,
    a,
    o,
    s = n(710845),
    l = n(70956);
!(function (e) {
    (e[(e.SECONDS_30 = 30 * l.Z.Millis.SECOND)] = 'SECONDS_30'), (e[(e.MINUTES_1 = l.Z.Millis.MINUTE)] = 'MINUTES_1'), (e[(e.MINUTES_2 = 2 * l.Z.Millis.MINUTE)] = 'MINUTES_2');
})(r || (r = {})),
    !(function (e) {
        (e[(e.ALL = 0)] = 'ALL'), (e[(e.FRIENDS = 1)] = 'FRIENDS');
    })(i || (i = {})),
    !(function (e) {
        (e.DECOUPLED = 'decoupled'), (e.VIEWER = 'viewer'), (e.STREAMER = 'streamer');
    })(a || (a = {})),
    !(function (e) {
        (e[(e.Error = 0)] = 'Error'), (e[(e.Disabled = 1)] = 'Disabled'), (e[(e.Enabled = 2)] = 'Enabled');
    })(o || (o = {}));
let u = 'alt+c',
    c = 6 * l.Z.Millis.SECOND,
    d = new s.Z('Clips'),
    _ = (e) => 'Discord_Clip_'.concat(e, '.mp4'),
    E = 3,
    f = 1,
    h = /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
    p = /(NVIDIA GeForce (RTX (20|30|40).*))|(.*Radeon RX (57|58|59|6|7).*)/,
    m = 0.1,
    I = 25,
    T = 0,
    g = 200,
    S = 'clips-edit',
    A = 'clips-gallery',
    v = 640,
    N = 360,
    O = 100,
    R = (e) => 'Clip - '.concat(new Date(e).toLocaleString()),
    C = 15,
    y = 30000,
    L = 30,
    b = 10,
    D = 14 * l.Z.Millis.DAY,
    M = 5,
    P = 5,
    U = 1;

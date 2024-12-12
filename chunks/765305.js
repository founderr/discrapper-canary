r.d(n, {
    $I: function () {
        return v;
    },
    Fc: function () {
        return S;
    },
    Ku: function () {
        return E;
    },
    VF: function () {
        return A;
    },
    WX: function () {
        return a;
    },
    X_: function () {
        return u;
    },
    _U: function () {
        return T;
    },
    fL: function () {
        return l;
    },
    gG: function () {
        return m;
    },
    gv: function () {
        return c;
    },
    j8: function () {
        return o;
    },
    nz: function () {
        return I;
    },
    p: function () {
        return h;
    },
    p1: function () {
        return i;
    },
    pg: function () {
        return b;
    },
    rC: function () {
        return y;
    },
    sy: function () {
        return s;
    },
    wm: function () {
        return p;
    },
    zV: function () {
        return N;
    },
    zw: function () {
        return g;
    }
});
var i,
    a,
    s,
    o,
    l,
    u,
    c,
    d = r(47120);
var f = r(70956),
    _ = r(981631);
let h = 100,
    p = 1000,
    m = 100,
    g = 'Guild Events Modal',
    E = '-1';
!(function (e) {
    (e[(e.SCHEDULED = 1)] = 'SCHEDULED'), (e[(e.ACTIVE = 2)] = 'ACTIVE'), (e[(e.COMPLETED = 3)] = 'COMPLETED'), (e[(e.CANCELED = 4)] = 'CANCELED');
})(i || (i = {}));
let v = new Set([3, 4]);
!(function (e) {
    (e[(e.NONE = 0)] = 'NONE'), (e[(e.STAGE_INSTANCE = 1)] = 'STAGE_INSTANCE'), (e[(e.VOICE = 2)] = 'VOICE'), (e[(e.EXTERNAL = 3)] = 'EXTERNAL'), (e[(e.PRIME_TIME = 4)] = 'PRIME_TIME');
})(a || (a = {})),
    !(function (e) {
        e[(e.EVENT_START = 1)] = 'EVENT_START';
    })(s || (s = {})),
    !(function (e) {
        (e[(e.PUBLIC = 1)] = 'PUBLIC'), (e[(e.GUILD_ONLY = 2)] = 'GUILD_ONLY');
    })(o || (o = {}));
let I = {
        1: _.d4z.GUILD_STAGE_VOICE,
        2: _.d4z.GUILD_VOICE
    },
    T = new Set([3]),
    b = new Set([1, 2]);
!(function (e) {
    (e[(e.EVENT_INFO = 0)] = 'EVENT_INFO'), (e[(e.RSVP_LIST = 1)] = 'RSVP_LIST');
})(l || (l = {}));
let y = 100,
    S = 2 * f.Z.Millis.DAY,
    A = 12 * f.Z.Millis.HOUR,
    N = 4;
!(function (e) {
    (e.NEW_EVENT = 'Upcoming Event Notice'), (e.EVENT_STARTING_SOON = 'Event Starting Soon Notice');
})(u || (u = {})),
    !(function (e) {
        (e[(e.UNINTERESTED = 0)] = 'UNINTERESTED'), (e[(e.INTERESTED = 1)] = 'INTERESTED');
    })(c || (c = {}));

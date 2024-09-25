n.d(t, {
    $I: function () {
        return I;
    },
    Fc: function () {
        return v;
    },
    Ku: function () {
        return m;
    },
    VF: function () {
        return N;
    },
    WX: function () {
        return i;
    },
    X_: function () {
        return l;
    },
    _U: function () {
        return g;
    },
    fL: function () {
        return s;
    },
    gG: function () {
        return h;
    },
    gv: function () {
        return u;
    },
    j8: function () {
        return o;
    },
    nz: function () {
        return T;
    },
    p: function () {
        return E;
    },
    p1: function () {
        return r;
    },
    pg: function () {
        return S;
    },
    rC: function () {
        return A;
    },
    sy: function () {
        return a;
    },
    wm: function () {
        return f;
    },
    zV: function () {
        return O;
    },
    zw: function () {
        return p;
    }
});
var r,
    i,
    a,
    o,
    s,
    l,
    u,
    c = n(47120);
var d = n(70956),
    _ = n(981631);
let E = 100,
    f = 1000,
    h = 100,
    p = 'Guild Events Modal',
    m = '-1';
!(function (e) {
    (e[(e.SCHEDULED = 1)] = 'SCHEDULED'), (e[(e.ACTIVE = 2)] = 'ACTIVE'), (e[(e.COMPLETED = 3)] = 'COMPLETED'), (e[(e.CANCELED = 4)] = 'CANCELED');
})(r || (r = {}));
let I = new Set([3, 4]);
!(function (e) {
    (e[(e.NONE = 0)] = 'NONE'), (e[(e.STAGE_INSTANCE = 1)] = 'STAGE_INSTANCE'), (e[(e.VOICE = 2)] = 'VOICE'), (e[(e.EXTERNAL = 3)] = 'EXTERNAL'), (e[(e.PRIME_TIME = 4)] = 'PRIME_TIME');
})(i || (i = {})),
    !(function (e) {
        e[(e.EVENT_START = 1)] = 'EVENT_START';
    })(a || (a = {})),
    !(function (e) {
        (e[(e.PUBLIC = 1)] = 'PUBLIC'), (e[(e.GUILD_ONLY = 2)] = 'GUILD_ONLY');
    })(o || (o = {}));
let T = {
        1: _.d4z.GUILD_STAGE_VOICE,
        2: _.d4z.GUILD_VOICE
    },
    g = new Set([3]),
    S = new Set([1, 2]);
!(function (e) {
    (e[(e.EVENT_INFO = 0)] = 'EVENT_INFO'), (e[(e.RSVP_LIST = 1)] = 'RSVP_LIST');
})(s || (s = {}));
let A = 100,
    v = 2 * d.Z.Millis.DAY,
    N = 12 * d.Z.Millis.HOUR,
    O = 4;
!(function (e) {
    (e.NEW_EVENT = 'Upcoming Event Notice'), (e.EVENT_STARTING_SOON = 'Event Starting Soon Notice');
})(l || (l = {})),
    !(function (e) {
        (e[(e.UNINTERESTED = 0)] = 'UNINTERESTED'), (e[(e.INTERESTED = 1)] = 'INTERESTED');
    })(u || (u = {}));

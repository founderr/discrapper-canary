n.d(t, {
    AQ: function () {
        return g;
    },
    aw: function () {
        return d;
    },
    oz: function () {
        return h;
    },
    qp: function () {
        return _;
    }
});
var r = n(570899),
    i = n(328199),
    a = n(397319),
    s = n(165352),
    o = n(697),
    l = n(410914);
function u(e) {
    let t,
        n = 'object' == typeof e[0] ? e.shift() : new s.IQ();
    if ('string' == typeof e[0]) t = e.shift();
    else {
        let e = n.getEras();
        t = e[e.length - 1];
    }
    return [n, t, e.shift(), e.shift(), e.shift()];
}
var c = new WeakMap();
class d {
    copy() {
        return this.era ? new d(this.calendar, this.era, this.year, this.month, this.day) : new d(this.calendar, this.year, this.month, this.day);
    }
    add(e) {
        return (0, r.IH)(this, e);
    }
    subtract(e) {
        return (0, r.$X)(this, e);
    }
    set(e) {
        return (0, r.t8)(this, e);
    }
    cycle(e, t, n) {
        return (0, r.GK)(this, e, t, n);
    }
    toDate(e) {
        return (0, o.ZU)(this, e);
    }
    toString() {
        return (0, a.UW)(this);
    }
    compare(e) {
        return (0, i.rm)(this, e);
    }
    constructor(...e) {
        (0, l._)(this, c, {
            writable: !0,
            value: void 0
        });
        let [t, n, i, a, s] = u(e);
        (this.calendar = t), (this.era = n), (this.year = i), (this.month = a), (this.day = s), (0, r.jH)(this);
    }
}
var f = new WeakMap();
class _ {
    copy() {
        return new _(this.hour, this.minute, this.second, this.millisecond);
    }
    add(e) {
        return (0, r.yG)(this, e);
    }
    subtract(e) {
        return (0, r.U2)(this, e);
    }
    set(e) {
        return (0, r.q_)(this, e);
    }
    cycle(e, t, n) {
        return (0, r.xC)(this, e, t, n);
    }
    toString() {
        return (0, a.to)(this);
    }
    compare(e) {
        return (0, i.Xi)(this, e);
    }
    constructor(e = 0, t = 0, n = 0, i = 0) {
        (0, l._)(this, f, {
            writable: !0,
            value: void 0
        }),
            (this.hour = e),
            (this.minute = t),
            (this.second = n),
            (this.millisecond = i),
            (0, r.dW)(this);
    }
}
var p = new WeakMap();
class h {
    copy() {
        return this.era ? new h(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new h(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
    }
    add(e) {
        return (0, r.IH)(this, e);
    }
    subtract(e) {
        return (0, r.$X)(this, e);
    }
    set(e) {
        return (0, r.t8)((0, r.q_)(this, e), e);
    }
    cycle(e, t, n) {
        switch (e) {
            case 'era':
            case 'year':
            case 'month':
            case 'day':
                return (0, r.GK)(this, e, t, n);
            default:
                return (0, r.xC)(this, e, t, n);
        }
    }
    toDate(e, t) {
        return (0, o.ZU)(this, e, t);
    }
    toString() {
        return (0, a.LM)(this);
    }
    compare(e) {
        let t = (0, i.rm)(this, e);
        return 0 === t ? (0, i.Xi)(this, (0, o.IO)(e)) : t;
    }
    constructor(...e) {
        (0, l._)(this, p, {
            writable: !0,
            value: void 0
        });
        let [t, n, i, a, s] = u(e);
        (this.calendar = t), (this.era = n), (this.year = i), (this.month = a), (this.day = s), (this.hour = e.shift() || 0), (this.minute = e.shift() || 0), (this.second = e.shift() || 0), (this.millisecond = e.shift() || 0), (0, r.jH)(this);
    }
}
var m = new WeakMap();
class g {
    copy() {
        return this.era ? new g(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new g(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
    }
    add(e) {
        return (0, r.cW)(this, e);
    }
    subtract(e) {
        return (0, r.Co)(this, e);
    }
    set(e, t) {
        return (0, r.wC)(this, e, t);
    }
    cycle(e, t, n) {
        return (0, r.qr)(this, e, t, n);
    }
    toDate() {
        return (0, o.fk)(this);
    }
    toString() {
        return (0, a.Rf)(this);
    }
    toAbsoluteString() {
        return this.toDate().toISOString();
    }
    compare(e) {
        return this.toDate().getTime() - (0, o.fW)(e, this.timeZone).toDate().getTime();
    }
    constructor(...e) {
        (0, l._)(this, m, {
            writable: !0,
            value: void 0
        });
        let [t, n, i, a, s] = u(e),
            o = e.shift(),
            c = e.shift();
        (this.calendar = t), (this.era = n), (this.year = i), (this.month = a), (this.day = s), (this.timeZone = o), (this.offset = c), (this.hour = e.shift() || 0), (this.minute = e.shift() || 0), (this.second = e.shift() || 0), (this.millisecond = e.shift() || 0), (0, r.jH)(this);
    }
}

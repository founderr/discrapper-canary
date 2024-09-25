n.d(t, {
    A3: function () {
        return p;
    },
    CI: function () {
        return T;
    },
    G9: function () {
        return E;
    },
    J6: function () {
        return r;
    },
    Z_: function () {
        return d;
    },
    _v: function () {
        return h;
    },
    jU: function () {
        return I;
    },
    zO: function () {
        return c;
    }
});
var r,
    i = n(411104);
var a = n(368387);
var o = n(627698),
    s = n.n(o),
    l = n(643191);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = () => Math.floor(l.v0 + l.Sv.now()),
    d = new (class {
        now() {
            return c();
        }
    })();
class _ {
    isGreaterThan(e) {
        return this.milliseconds > e.milliseconds;
    }
    isGreaterOrEqualTo(e) {
        return this.milliseconds >= e.milliseconds;
    }
    constructor(e, t, n, r) {
        u(this, 'milliseconds', 0), u(this, 'asMilliseconds', () => this.milliseconds), u(this, 'asSeconds', () => this.milliseconds / 1000), u(this, 'asMinutes', () => this.milliseconds / 1000 / 60), u(this, 'asHours', () => this.milliseconds / 1000 / 60 / 60), u(this, 'add', (e) => _.fromMilliseconds(this.milliseconds + e.milliseconds)), u(this, 'subtract', (e) => _.fromMilliseconds(this.milliseconds - e.milliseconds)), u(this, 'subtractOrZero', (e) => _.fromMilliseconds(Math.max(this.milliseconds - e.milliseconds, 0))), (this.milliseconds += r || 0), (this.milliseconds += 1000 * (n || 0)), (this.milliseconds += 60000 * (t || 0)), (this.milliseconds += 3600000 * (e || 0));
    }
}
u(_, 'fromMilliseconds', (e) => new _(0, 0, 0, e)), u(_, 'fromSeconds', (e) => new _(0, 0, e)), u(_, 'fromMinutes', (e) => new _(0, e)), u(_, 'fromHours', (e) => new _(e));
class E {
    start() {
        if (null == this.startTime) this.startTime = this.timestampProducer.now();
    }
    restart() {
        this.startTime = this.timestampProducer.now();
    }
    reset() {
        (this.startTime = void 0), (this.timePassed = 0);
    }
    stop() {
        if (null != this.startTime) (this.timePassed += this.timestampProducer.now() - this.startTime), (this.startTime = void 0);
    }
    toggle(e) {
        e !== this.isRunning() && (e ? this.start() : this.stop());
    }
    elapsed() {
        if (null == this.startTime) return _.fromMilliseconds(this.timePassed);
        let e = this.timestampProducer.now() - this.startTime;
        return _.fromMilliseconds(this.timePassed + e);
    }
    isRunning() {
        return null != this.startTime;
    }
    static startNew() {
        let e = new E();
        return e.start(), e;
    }
    constructor(e = d) {
        u(this, 'timestampProducer', void 0), u(this, 'startTime', void 0), u(this, 'timePassed', void 0), (this.timestampProducer = e), (this.startTime = void 0), (this.timePassed = 0);
    }
}
class f {
    hasTimedOut() {
        if (!this.watch.isRunning()) throw Error('`start` must be called before `hasTimedOut`');
        return this.watch.elapsed().isGreaterOrEqualTo(this.timeout);
    }
    start() {
        this.watch.start();
    }
    static startNew(e) {
        let t = new f(e);
        return t.start(), t;
    }
    static async waitFor(e, t) {
        let n;
        let r = _.fromMilliseconds(100);
        e instanceof _ ? (n = e) : ((n = e.timeout), null != e.sleep && (r = e.sleep));
        let i = f.startNew(n);
        do {
            if ((await t()) === !0) return !0;
            await h(r);
        } while (!i.hasTimedOut());
        return !1;
    }
    constructor(e) {
        u(this, 'timeout', void 0), u(this, 'watch', void 0), (this.timeout = e), (this.watch = new E());
    }
}
function h(e) {
    let t = 'number' == typeof e ? e : e.asMilliseconds();
    return new Promise((e) => {
        setTimeout(() => e(), t);
    });
}
function p(e, t) {
    switch (t) {
        case 'NONE':
            return 0;
        case 'SECONDS':
            return 60 * e;
        case 'MINUTES':
            return e;
        case 'HOURS':
            return e / 60;
        case 'DAYS':
            return e / 60 / 24;
        case 'WEEKS':
            return e / 60 / 24 / 7;
        case 'MONTHS':
            return e / 60 / 24 / 31;
        case 'YEARS':
            return e / 60 / 24 / 365;
    }
}
!(function (e) {
    (e.NONE = 'NONE'), (e.SECONDS = 'SECONDS'), (e.MINUTES = 'MINUTES'), (e.HOURS = 'HOURS'), (e.DAYS = 'DAYS'), (e.WEEKS = 'WEEKS'), (e.MONTHS = 'MONTHS'), (e.YEARS = 'YEARS');
})(r || (r = {}));
let m = [
    {
        unit: 'NONE',
        max: 0
    },
    {
        unit: 'SECONDS',
        max: 1
    },
    {
        unit: 'MINUTES',
        max: 60
    },
    {
        unit: 'HOURS',
        max: 1440
    },
    {
        unit: 'DAYS',
        max: 44640
    },
    {
        unit: 'WEEKS',
        max: 40320
    },
    {
        unit: 'MONTHS',
        max: 525600
    },
    {
        unit: 'YEARS',
        max: 1 / 0
    }
];
function I(e, t) {
    let n = m.findIndex((t) => {
            let { max: n, unit: r } = t;
            return ('NONE' === r && e === n) || e < n;
        }),
        r = s()(
            m,
            (e) => {
                let { unit: n } = e;
                return t(n);
            },
            n
        );
    if (null != r) return r.unit;
    let i = m.find((e) => {
        let { unit: n } = e;
        return t(n);
    });
    return null != i ? i.unit : null;
}
function T(e, t) {
    if (null == e)
        return {
            unit: 'NONE',
            time: 0
        };
    let n = I(e, (e) => t.includes(e)),
        r = null != n ? p(e, n) : null;
    return {
        unit: n,
        time: null != r ? Math.floor(r) : null
    };
}

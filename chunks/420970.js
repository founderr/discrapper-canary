r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(653041);
var a = r(47120);
var s = r(411104);
var o = r(836560);
var l = r(259443),
    u = r(643191);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let d = new l.Yd('Flux');
class f extends o.EventEmitter {
    log(e, n) {
        let r = new h(e),
            i = (n, i) => {
                let a;
                let s = {
                        name: n,
                        time: -1
                    },
                    o = u.Sv.now();
                try {
                    a = i();
                } finally {
                    (s.time = u.Sv.now() - o), this.persist && r.traces.push(s), this.emit('trace', e.type, n, s.time);
                }
                return a;
            };
        r.startTime = u.Sv.now();
        try {
            n(i);
        } catch (e) {
            throw ((r.error = e), e);
        } finally {
            (r.totalTime = u.Sv.now() - r.startTime), this.persist && r.totalTime > 0 && this.logs.push(r), this.logs.length > 1000 && this.logs.shift(), this.emit('log', e);
        }
        return r;
    }
    getSlowestActions(e) {
        var n;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
            a = [];
        for (let n of this.logs) {
            if (null == e || n.name === e) for (let e of n.traces) a.push([e.name, n.name, e.time]);
        }
        a.sort((e, n) => n[2] - e[2]), a.length > i && (a.length = i);
        let s = 0,
            o = 0,
            l = a
                .map((n) => {
                    let [r, i, a] = n,
                        o = ''.concat(r);
                    return null == e && (o += '<'.concat(i, '>')), (s = Math.max(o.length, s)), [o, a];
                })
                .map((e) => {
                    let [n, r] = e;
                    return (o += r), ''.concat(n.padEnd(s + 1, ' '), ' - ').concat(r, 'ms');
                })
                .join('\n');
        return 0 === a.length || a[0][2] < 10 || o < 20 ? a : (d.log('Using Hermes:', void 0 !== (null === (n = r.g) || void 0 === n ? void 0 : n.HermesInternal)), d.log(''.concat(null != e ? '\n\n=== '.concat(e, ' ===') : '', '\n').concat(l, '\n')), d.log('Total Time: '.concat(o, 'ms')), a);
    }
    getLastActionMetrics(e) {
        var n;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
            a = {};
        for (let e of this.logs) for (let n of e.traces) a[n.name] = [n.name, e.name, n.time];
        let s = Object.values(a);
        s.sort((e, n) => n[2] - e[2]), s.length > i && (s.length = i);
        let o = 0,
            l = 0,
            u = s
                .map((e) => {
                    let [n, r, i] = e;
                    return (o = Math.max(n.length, o)), [n, i];
                })
                .map((e) => {
                    let [n, r] = e;
                    return (l += r), ''.concat(n.padEnd(o + 1, ' '), ' - ').concat(r, 'ms');
                })
                .join('\n');
        return 0 === s.length || l < 8 ? s : (d.log('\nUsing Hermes: '.concat(void 0 !== (null === (n = r.g) || void 0 === n ? void 0 : n.HermesInternal)), '\n\n=== '.concat(e, ' ===\n').concat(u), '\nTotal Time: '.concat(l, 'ms\n\n')), s);
    }
    constructor({ persist: e = !1 } = {}) {
        super(), c(this, 'logs', []), c(this, 'persist', void 0), (this.persist = e);
    }
}
let _ = 0;
class h {
    get name() {
        return this.action.type;
    }
    toJSON() {
        if (null == this.createdAt) throw Error('ActionLog.toJSON: You must complete your logging before calling toJSON');
        return {
            actionType: this.action.type,
            created_at: this.createdAt,
            totalTime: this.totalTime,
            traces: this.traces
        };
    }
    constructor(e) {
        c(this, 'id', void 0), c(this, 'action', void 0), c(this, 'createdAt', void 0), c(this, 'startTime', 0), c(this, 'totalTime', 0), c(this, 'traces', []), c(this, 'error', void 0), (this.id = _++), (this.action = e), (this.createdAt = new Date());
    }
}

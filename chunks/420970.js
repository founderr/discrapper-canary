n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(411104);
var o = n(836560);
var s = n(259443),
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
let c = new s.Y('Flux');
class d extends o.EventEmitter {
    log(e, t) {
        let n = new E(e),
            r = (t, r) => {
                let i;
                let a = {
                        name: t,
                        time: -1
                    },
                    o = l.Sv.now();
                try {
                    i = r();
                } finally {
                    (a.time = l.Sv.now() - o), this.persist && n.traces.push(a), this.emit('trace', e.type, t, a.time);
                }
                return i;
            };
        n.startTime = l.Sv.now();
        try {
            t(r);
        } catch (e) {
            throw ((n.error = e), e);
        } finally {
            (n.totalTime = l.Sv.now() - n.startTime), this.persist && n.totalTime > 0 && this.logs.push(n), this.logs.length > 1000 && this.logs.shift(), this.emit('log', e);
        }
        return n;
    }
    getSlowestActions(e) {
        var t;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
            i = [];
        for (let t of this.logs) {
            if (null == e || t.name === e) for (let e of t.traces) i.push([e.name, t.name, e.time]);
        }
        i.sort((e, t) => t[2] - e[2]), i.length > r && (i.length = r);
        let a = 0,
            o = 0,
            s = i
                .map((t) => {
                    let [n, r, i] = t,
                        o = ''.concat(n);
                    return null == e && (o += '<'.concat(r, '>')), (a = Math.max(o.length, a)), [o, i];
                })
                .map((e) => {
                    let [t, n] = e;
                    return (o += n), ''.concat(t.padEnd(a + 1, ' '), ' - ').concat(n, 'ms');
                })
                .join('\n');
        return 0 === i.length || i[0][2] < 10 || o < 20 ? i : (c.log('Using Hermes:', void 0 !== (null === (t = n.g) || void 0 === t ? void 0 : t.HermesInternal)), c.log(''.concat(null != e ? '\n\n=== '.concat(e, ' ===') : '', '\n').concat(s, '\n')), c.log('Total Time: '.concat(o, 'ms')), i);
    }
    getLastActionMetrics(e) {
        var t;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
            i = {};
        for (let e of this.logs) for (let t of e.traces) i[t.name] = [t.name, e.name, t.time];
        let a = Object.values(i);
        a.sort((e, t) => t[2] - e[2]), a.length > r && (a.length = r);
        let o = 0,
            s = 0,
            l = a
                .map((e) => {
                    let [t, n, r] = e;
                    return (o = Math.max(t.length, o)), [t, r];
                })
                .map((e) => {
                    let [t, n] = e;
                    return (s += n), ''.concat(t.padEnd(o + 1, ' '), ' - ').concat(n, 'ms');
                })
                .join('\n');
        return 0 === a.length || s < 8 ? a : (c.log('\nUsing Hermes: '.concat(void 0 !== (null === (t = n.g) || void 0 === t ? void 0 : t.HermesInternal)), '\n\n=== '.concat(e, ' ===\n').concat(l), '\nTotal Time: '.concat(s, 'ms\n\n')), a);
    }
    constructor({ persist: e = !1 } = {}) {
        super(), u(this, 'logs', []), u(this, 'persist', void 0), (this.persist = e);
    }
}
let _ = 0;
class E {
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
        u(this, 'id', void 0), u(this, 'action', void 0), u(this, 'createdAt', void 0), u(this, 'startTime', 0), u(this, 'totalTime', 0), u(this, 'traces', []), u(this, 'error', void 0), (this.id = _++), (this.action = e), (this.createdAt = new Date());
    }
}

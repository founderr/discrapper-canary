n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(653041);
function i(e, t, n) {
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
let a = 1 / 240;
class o {
    to(e) {
        let { to: t, from: n, animate: r = !1, callback: i } = e;
        if (((this.target = t), null != i && this.callbacks.push(i), null != n && (this.from = n), !r)) {
            this.stop(t);
            return;
        }
        return this.animating ? this : (this.start(), this);
    }
    cancel() {
        return this.stop(this.from), this;
    }
    start() {
        var e, t;
        (this.animating = !0), (this.vel = 0), (this.last = null), (this.nodeWindow = this.getNodeWindow()), (this.nextTick = null !== (t = null === (e = this.nodeWindow) || void 0 === e ? void 0 : e.requestAnimationFrame(this.update)) && void 0 !== t ? t : -1);
    }
    getUpdates(e, t) {
        let n = -this.tension * (t - this.target),
            r = (n + -this.friction * e) / this.mass;
        return (
            Math.abs((e += r * a)) > this.maxVelocity && (e = this.maxVelocity * (e > 0 ? 1 : -1)),
            {
                from: (t += e * a),
                vel: e,
                accel: r
            }
        );
    }
    stop(e) {
        var t;
        null === (t = this.nodeWindow) || void 0 === t || t.cancelAnimationFrame(this.nextTick), (this.animating = !1), (this.accumulator = 0), null != e && ((this.target = this.from = e), this.callback(e, this.abort)), this.callbacks.length > 0 && (this.callbacks.forEach((e) => e()), (this.callbacks.length = 0));
    }
    constructor({ callback: e, tension: t = 160, friction: n = 22, mass: r = 1, threshold: o = 0.001, clamp: s = !1, maxVelocity: l = 1 / 0, getNodeWindow: u = () => window }) {
        i(this, 'tension', void 0),
            i(this, 'friction', void 0),
            i(this, 'threshold', void 0),
            i(this, 'mass', void 0),
            i(this, 'maxVelocity', void 0),
            i(this, 'clamp', void 0),
            i(this, 'callback', void 0),
            i(this, 'accumulator', 0),
            i(this, 'from', 0),
            i(this, 'target', 0),
            i(this, 'vel', 0),
            i(this, 'animating', !1),
            i(this, 'last', null),
            i(this, 'nextTick', -1),
            i(this, 'getNodeWindow', void 0),
            i(this, 'nodeWindow', null),
            i(this, 'callbacks', []),
            i(this, 'mergeTo', (e) => {
                let { to: t, callback: n } = e;
                !this.animating && (null != n && this.callbacks.push(n), this.stop(t));
                let r = t - this.from;
                (this.from = t), (this.target = this.target + r), this.callback(this.from, this.abort), null != n && n();
            }),
            i(this, 'abort', () => {
                this.animating = !1;
            }),
            i(this, 'update', (e) => {
                var t, n, r, i;
                if (null == this.last) {
                    (this.last = e), (this.nextTick = null !== (n = null === (t = this.nodeWindow) || void 0 === t ? void 0 : t.requestAnimationFrame(this.update)) && void 0 !== n ? n : -1);
                    return;
                }
                let o = e;
                for (this.accumulator = Math.min((o - this.last) / 1000 + this.accumulator, 2); this.accumulator > a; ) {
                    this.accumulator -= a;
                    let { vel: e, from: t, accel: n } = this.getUpdates(this.vel, this.from);
                    if (((this.vel = e), (this.clamp && (t === this.target || (t < this.target && this.from > this.target) || (t > this.target && this.from < this.target))) || Math.abs(n * a) < this.threshold)) {
                        this.stop(this.target);
                        return;
                    }
                    this.from = t;
                }
                let { from: s } = this;
                if (this.accumulator > 0) {
                    let { from: e } = this.getUpdates(this.vel, s),
                        t = (e - s) * (this.accumulator / a);
                    s += t;
                }
                this.callback(s, this.abort), this.animating && ((this.last = o), (this.nextTick = null !== (i = null === (r = this.nodeWindow) || void 0 === r ? void 0 : r.requestAnimationFrame(this.update)) && void 0 !== i ? i : -1));
            }),
            (this.callback = e),
            (this.from = 0),
            (this.tension = t),
            (this.friction = n),
            (this.mass = r),
            (this.maxVelocity = l),
            (this.threshold = o),
            (this.clamp = s),
            (this.getNodeWindow = u);
    }
}

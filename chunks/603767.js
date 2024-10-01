n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(47120);
var i = n(212433);
function a(e, t, n) {
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
class o extends i.FrameLoop {
    setRAF(e, t) {
        0 !== this.id && (this._cancelAnimationFrame(this.id), (this.id = 0)), (this._requestAnimationFrame = e), (this._cancelAnimationFrame = t), this.loop();
    }
    constructor(...e) {
        super(...e),
            a(this, '_requestAnimationFrame', (e) => requestAnimationFrame(e)),
            a(this, '_cancelAnimationFrame', (e) => cancelAnimationFrame(e)),
            a(this, 'writing', !1),
            a(this, 'id', 0),
            a(this, 'lastTime', 0),
            a(this, 'animations', []),
            a(this, 'priority', 0),
            a(this, 'startQueue', new Set()),
            a(this, 'frameQueue', new Set()),
            a(this, 'writeQueue', new Set()),
            a(this, 'timeoutQueue', []),
            a(this, 'addAnimation', (e) => {
                let t = this.animations.indexOf(e);
                t < 0 && ((t = this.animations.findIndex((t) => t.priority > e.priority)), this.animations.splice(0 != ~t ? t : this.animations.length, 0, e));
            }),
            a(this, 'loop', () => {
                if (0 !== this.lastTime)
                    try {
                        this.advance();
                    } catch (e) {
                        console.error(e);
                    } finally {
                        this.animations.length > 0 || this.startQueue.size > 0 || this.frameQueue.size > 0 || this.writeQueue.size > 0 || this.timeoutQueue.length > 0 ? (this.id = this._requestAnimationFrame(this.loop)) : ((this.lastTime = 0), (this.id = 0));
                    }
            }),
            a(this, 'startLoop', () => {
                if (!(this.lastTime > 0)) (this.lastTime = i.Globals.now()), (this.id = this._requestAnimationFrame(this.loop));
            }),
            a(this, 'advance', () => {
                let e = i.Globals.now();
                if (
                    (this.startQueue.size > 0 && (this.startQueue.forEach(this.addAnimation), this.startQueue.clear()),
                    this.timeoutQueue.length > 0 &&
                        i.Globals.batchedUpdates(() => {
                            let t = s(this.timeoutQueue, (t) => t.time > e);
                            this.timeoutQueue.splice(0, t).forEach((e) => e.handler());
                        }),
                    e > this.lastTime)
                ) {
                    let t = Math.min(64, e - this.lastTime);
                    (this.lastTime = e),
                        i.Globals.batchedUpdates(() => {
                            this.animations.length > 0 && (i.Globals.willAdvance(this.animations), (this.animations = this.animations.filter((e) => ((this.priority = e.priority), !e.idle && e.advance(t), !e.idle))), (this.priority = 0)), this.frameQueue.size > 0 && (this.frameQueue.forEach((t) => t(e)), this.frameQueue.clear()), this.writeQueue.size > 0 && ((this.writing = !0), this.writeQueue.forEach((t) => t(e)), this.writeQueue.clear(), (this.writing = !1));
                        });
                }
            }),
            a(this, 'start', (e) => {
                this.priority > e.priority ? this.startQueue.add(e) : (this.addAnimation(e), this.startLoop());
            }),
            a(this, 'setTimeout', (e, t) => {
                let n = i.Globals.now() + t,
                    r = () => {
                        let e = this.timeoutQueue.findIndex((e) => e.cancel === r);
                        e >= 0 && this.timeoutQueue.splice(e, 1);
                    },
                    a = s(this.timeoutQueue, (e) => e.time > n),
                    o = {
                        time: n,
                        handler: e,
                        cancel: r
                    };
                return this.timeoutQueue.splice(a, 0, o), this.startLoop(), o;
            }),
            a(this, 'onFrame', (e) => {
                this.frameQueue.add(e), this.startLoop();
            }),
            a(this, 'onWrite', (e) => {
                this.writing ? e(this.lastTime) : this.writeQueue.add(e);
            });
    }
}
function s(e, t) {
    let n = e.findIndex(t);
    return n < 0 ? e.length : n;
}

n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(665443),
    s = n.n(a),
    o = n(259443),
    l = n(992774);
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
let c = new o.Y('DirectVideo');
class d {
    addref() {
        this.refcount++;
    }
    release() {
        return this.refcount--, 0 === this.refcount;
    }
    constructor(e) {
        u(this, 'refcount', void 0), u(this, 'stream', void 0), (this.refcount = 1), (this.stream = window.createDiscordStream(e));
    }
}
let _ = new Map();
function E(e) {
    let t = _.get(e);
    null != t && t.release() && ((0, l.zS)().removeDirectVideoOutputSink(e), _.delete(e));
}
function f(e, t) {
    let { streamId: n, paused: a, onReady: o, onResize: u, className: f, ...h } = e,
        p = i.useRef(null),
        I = i.useRef(null),
        m = i.useRef({
            width: 0,
            height: 0
        }),
        T = i.useRef({
            streamId: n,
            paused: a,
            onReady: o,
            onResize: u,
            onContainerResized: t
        });
    return (
        i.useLayoutEffect(() => {
            let { current: e } = p,
                t = new ResizeObserver((e) => {
                    for (let r of e) {
                        var t, n;
                        if (r.target !== I.current) continue;
                        let e = r.target.clientWidth,
                            i = r.target.clientHeight;
                        null === (t = (n = T.current).onContainerResized) || void 0 === t || t.call(n, T.current.streamId, e, i);
                    }
                });
            if (null != e) {
                let n = document.createElement('video');
                (n.style.display = 'block'),
                    (n.style.width = '100%'),
                    (n.style.height = '100%'),
                    (n.autoplay = !0),
                    (n.muted = !0),
                    n.addEventListener('pause', function () {
                        if (!T.current.paused) {
                            var e;
                            null === (e = I.current) || void 0 === e || e.play();
                        }
                    }),
                    n.addEventListener('resize', function () {
                        var e, t, n, r, i, a;
                        let { width: s, height: o } = m.current,
                            l = null !== (n = null === (e = I.current) || void 0 === e ? void 0 : e.videoWidth) && void 0 !== n ? n : 0,
                            u = null !== (r = null === (t = I.current) || void 0 === t ? void 0 : t.videoHeight) && void 0 !== r ? r : 0;
                        if (s !== l || o !== u) {
                            let e = {
                                width: l,
                                height: u
                            };
                            null === (i = (a = T.current).onResize) || void 0 === i || i.call(a, e), (m.current = e);
                        }
                    }),
                    n.addEventListener('canplaythrough', function () {
                        var e, t;
                        c.info('handleReady for '.concat(T.current.streamId, ', have onReady callback = ').concat(null != T.current.onReady)), null === (e = (t = T.current).onReady) || void 0 === e || e.call(t);
                    }),
                    c.info('create video element for '.concat(T.current.streamId, ', readyState=').concat(n.readyState)),
                    n.readyState > 3 && c.error('video element for '.concat(T.current.streamId, ' was ready before attached')),
                    e.appendChild(n),
                    t.disconnect(),
                    t.observe(n),
                    (I.current = n);
            }
        }, []),
        i.useEffect(() => {
            (T.current.streamId = n), (T.current.paused = a), (T.current.onReady = o), (T.current.onResize = u);
        }),
        i.useEffect(() => {
            let e = I.current;
            if (null != e) {
                if (a) null != e.srcObject && ((e.srcObject = null), E(n));
                else {
                    var t;
                    let r;
                    c.info('attaching srcObject for '.concat(n));
                    return (
                        (e.srcObject = ((t = n), null == (r = _.get(t)) ? ((r = new d(t)), (0, l.zS)().addDirectVideoOutputSink(t), _.set(t, r)) : r.addref(), r.stream)),
                        () => {
                            E(n), (e.srcObject = null);
                        }
                    );
                }
            }
        }, [a, n]),
        (0, r.jsx)('div', {
            className: s()('media-engine-video', f),
            ref: p,
            ...h
        })
    );
}
f.defaultProps = { paused: !1 };

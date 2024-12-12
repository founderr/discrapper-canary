r.d(n, {
    Z: function () {
        return g;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(665443),
    l = r.n(o),
    u = r(259443),
    c = r(992774);
function d(e, n, r) {
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
let f = new u.Yd('DirectVideo');
class _ {
    addref() {
        this.refcount++;
    }
    release() {
        return this.refcount--, 0 === this.refcount;
    }
    constructor(e) {
        d(this, 'refcount', void 0), d(this, 'stream', void 0), (this.refcount = 1), (this.stream = window.createDiscordStream(e));
    }
}
let h = new Map();
function p(e) {
    let n = h.get(e);
    return null == n ? ((n = new _(e)), (0, c.zS)().addDirectVideoOutputSink(e), h.set(e, n)) : n.addref(), n.stream;
}
function m(e) {
    let n = h.get(e);
    null != n && n.release() && ((0, c.zS)().removeDirectVideoOutputSink(e), h.delete(e));
}
function g(e, n) {
    let { streamId: r, paused: i, onReady: o, onResize: u, className: c, ...d } = e,
        _ = s.useRef(null),
        h = s.useRef(null),
        g = s.useRef({
            width: 0,
            height: 0
        }),
        E = s.useRef({
            streamId: r,
            paused: i,
            onReady: o,
            onResize: u,
            onContainerResized: n
        });
    return (
        s.useLayoutEffect(() => {
            let { current: e } = _;
            function n() {
                var e, n, r, i, a, s;
                let { width: o, height: l } = g.current,
                    u = null !== (r = null === (e = h.current) || void 0 === e ? void 0 : e.videoWidth) && void 0 !== r ? r : 0,
                    c = null !== (i = null === (n = h.current) || void 0 === n ? void 0 : n.videoHeight) && void 0 !== i ? i : 0;
                if (o !== u || l !== c) {
                    let e = {
                        width: u,
                        height: c
                    };
                    null === (a = (s = E.current).onResize) || void 0 === a || a.call(s, e), (g.current = e);
                }
            }
            function r() {
                var e, n;
                f.info('handleReady for '.concat(E.current.streamId, ', have onReady callback = ').concat(null != E.current.onReady)), null === (e = (n = E.current).onReady) || void 0 === e || e.call(n);
            }
            function i() {
                if (!E.current.paused) {
                    var e;
                    null === (e = h.current) || void 0 === e || e.play();
                }
            }
            let a = new ResizeObserver((e) => {
                for (let i of e) {
                    var n, r;
                    if (i.target !== h.current) continue;
                    let e = window.devicePixelRatio * i.target.clientWidth,
                        a = window.devicePixelRatio * i.target.clientHeight;
                    null === (n = (r = E.current).onContainerResized) || void 0 === n || n.call(r, E.current.streamId, e, a);
                }
            });
            if (null != e) {
                let s = document.createElement('video');
                (s.style.display = 'block'), (s.style.width = '100%'), (s.style.height = '100%'), (s.autoplay = !0), (s.muted = !0), s.addEventListener('pause', i), s.addEventListener('resize', n), s.addEventListener('canplaythrough', r), f.info('create video element for '.concat(E.current.streamId, ', readyState=').concat(s.readyState)), s.readyState > 3 && f.error('video element for '.concat(E.current.streamId, ' was ready before attached')), e.appendChild(s), a.disconnect(), a.observe(s), (h.current = s);
            }
        }, []),
        s.useEffect(() => {
            (E.current.streamId = r), (E.current.paused = i), (E.current.onReady = o), (E.current.onResize = u);
        }),
        s.useEffect(() => {
            let e = h.current;
            if (null != e) {
                if (!i)
                    return (
                        f.info('attaching srcObject for '.concat(r)),
                        (e.srcObject = p(r)),
                        () => {
                            m(r), (e.srcObject = null);
                        }
                    );
                null != e.srcObject && ((e.srcObject = null), m(r));
            }
        }, [i, r]),
        (0, a.jsx)('div', {
            className: l()('media-engine-video', c),
            ref: _,
            ...d
        })
    );
}
g.defaultProps = { paused: !1 };

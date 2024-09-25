n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(665443),
    s = n.n(o),
    l = n(259443),
    u = n(992774);
function c(e, t, n) {
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
let d = new l.Y('DirectVideo');
class _ {
    addref() {
        this.refcount++;
    }
    release() {
        return this.refcount--, 0 === this.refcount;
    }
    constructor(e) {
        c(this, 'refcount', void 0), c(this, 'stream', void 0), (this.refcount = 1), (this.stream = window.createDiscordStream(e));
    }
}
let E = new Map();
function f(e) {
    let t = E.get(e);
    return null == t ? ((t = new _(e)), (0, u.zS)().addDirectVideoOutputSink(e), E.set(e, t)) : t.addref(), t.stream;
}
function h(e) {
    let t = E.get(e);
    null != t && t.release() && ((0, u.zS)().removeDirectVideoOutputSink(e), E.delete(e));
}
function p(e) {
    let { streamId: t, paused: n, onReady: r, onResize: o, className: l, ...u } = e,
        c = a.useRef(null),
        _ = a.useRef(null),
        E = a.useRef({
            width: 0,
            height: 0
        }),
        p = a.useRef({
            streamId: t,
            paused: n,
            onReady: r,
            onResize: o
        });
    return (
        a.useLayoutEffect(() => {
            let { current: e } = c;
            function t() {
                var e, t, n, r, i, a;
                let { width: o, height: s } = E.current,
                    l = null !== (n = null === (e = _.current) || void 0 === e ? void 0 : e.videoWidth) && void 0 !== n ? n : 0,
                    u = null !== (r = null === (t = _.current) || void 0 === t ? void 0 : t.videoHeight) && void 0 !== r ? r : 0;
                if (o !== l || s !== u) {
                    let e = {
                        width: l,
                        height: u
                    };
                    null === (i = (a = p.current).onResize) || void 0 === i || i.call(a, e), (E.current = e);
                }
            }
            function n() {
                var e, t;
                d.info('handleReady for '.concat(p.current.streamId, ', have onReady callback = ').concat(null != p.current.onReady)), null === (e = (t = p.current).onReady) || void 0 === e || e.call(t);
            }
            function r() {
                if (!p.current.paused) {
                    var e;
                    null === (e = _.current) || void 0 === e || e.play();
                }
            }
            if (null != e) {
                let i = document.createElement('video');
                (i.style.display = 'block'), (i.style.width = '100%'), (i.style.height = '100%'), (i.autoplay = !0), (i.muted = !0), i.addEventListener('pause', r), i.addEventListener('resize', t), i.addEventListener('canplaythrough', n), d.info('create video element for '.concat(p.current.streamId, ', readyState=').concat(i.readyState)), i.readyState > 3 && d.error('video element for '.concat(p.current.streamId, ' was ready before attached')), e.appendChild(i), (_.current = i);
            }
        }, []),
        a.useEffect(() => {
            (p.current.streamId = t), (p.current.paused = n), (p.current.onReady = r), (p.current.onResize = o);
        }),
        a.useEffect(() => {
            let e = _.current;
            if (null != e) {
                if (!n)
                    return (
                        d.info('attaching srcObject for '.concat(t)),
                        (e.srcObject = f(t)),
                        () => {
                            h(t), (e.srcObject = null);
                        }
                    );
                null != e.srcObject && ((e.srcObject = null), h(t));
            }
        }, [n, t]),
        (0, i.jsx)('div', {
            className: s()('media-engine-video', l),
            ref: c,
            ...u
        })
    );
}
p.defaultProps = { paused: !1 };

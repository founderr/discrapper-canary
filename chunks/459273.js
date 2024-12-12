r.d(n, {
    I3: function () {
        return h;
    },
    d9: function () {
        return m;
    },
    oo: function () {
        return _;
    },
    yp: function () {
        return p;
    }
});
var i = r(47120);
var a = r(411104);
var s = r(200651),
    o = r(192379),
    l = r(836560);
var u = r(585483);
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
class d {
    subscribe(e, n) {
        u.S.subscribe(e, n), this.emitter.on(e, n);
    }
    unsubscribe(e, n) {
        u.S.unsubscribe(e, n), this.emitter.off(e, n);
    }
    bumpDispatchPriority() {
        for (let e of this.emitter.eventNames()) for (let n of this.emitter.listeners(e)) u.S.resubscribe(e, n);
    }
    constructor() {
        c(this, 'emitter', new l.EventEmitter());
    }
}
class f {
    subscribe(e, n) {
        u.S.subscribe(e, n);
    }
    unsubscribe(e, n) {
        u.S.unsubscribe(e, n);
    }
    bumpDispatchPriority() {}
}
let _ = o.createContext(new f()),
    h = o.forwardRef(function (e, n) {
        let { children: r } = e,
            i = o.useRef(null);
        function a() {
            return null === i.current && (i.current = new d()), i.current;
        }
        return (
            o.useImperativeHandle(n, a),
            (0, s.jsx)(_.Provider, {
                value: a(),
                children: r
            })
        );
    });
function p(e) {
    let { event: n, handler: r } = e,
        i = o.useContext(_),
        a = o.useRef(r);
    o.useEffect(() => {
        a.current = r;
    }, [r]);
    let s = null == r;
    return (
        o.useEffect(() => {
            if (s) return;
            let e = function () {
                for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                null === (e = a.current) || void 0 === e || e.call(a, ...r);
            };
            return (
                i.subscribe(n, e),
                () => {
                    i.unsubscribe(n, e);
                }
            );
        }, [i, n, s]),
        null
    );
}
function m(e) {
    return p(e), null;
}

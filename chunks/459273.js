n.d(t, {
    I3: function () {
        return E;
    },
    d9: function () {
        return h;
    },
    oo: function () {
        return _;
    },
    yp: function () {
        return f;
    }
});
var r = n(47120);
var i = n(411104);
var a = n(735250),
    o = n(470079),
    s = n(836560);
var l = n(585483);
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
class c {
    subscribe(e, t) {
        l.S.subscribe(e, t), this.emitter.on(e, t);
    }
    unsubscribe(e, t) {
        l.S.unsubscribe(e, t), this.emitter.off(e, t);
    }
    bumpDispatchPriority() {
        for (let e of this.emitter.eventNames()) for (let t of this.emitter.listeners(e)) l.S.resubscribe(e, t);
    }
    constructor() {
        u(this, 'emitter', new s.EventEmitter());
    }
}
class d {
    subscribe(e, t) {
        l.S.subscribe(e, t);
    }
    unsubscribe(e, t) {
        l.S.unsubscribe(e, t);
    }
    bumpDispatchPriority() {}
}
let _ = o.createContext(new d()),
    E = o.forwardRef(function (e, t) {
        let { children: n } = e,
            r = o.useRef(null);
        function i() {
            return null === r.current && (r.current = new c()), r.current;
        }
        return (
            o.useImperativeHandle(t, i),
            (0, a.jsx)(_.Provider, {
                value: i(),
                children: n
            })
        );
    });
function f(e) {
    let { event: t, handler: n } = e,
        r = o.useContext(_),
        i = o.useRef(n);
    o.useEffect(() => {
        i.current = n;
    }, [n]);
    let a = null == n;
    return (
        o.useEffect(() => {
            if (a) return;
            let e = function () {
                for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                null === (e = i.current) || void 0 === e || e.call(i, ...n);
            };
            return (
                r.subscribe(t, e),
                () => {
                    r.unsubscribe(t, e);
                }
            );
        }, [r, t, a]),
        null
    );
}
function h(e) {
    return f(e), null;
}

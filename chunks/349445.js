n.d(t, {
    SV: function () {
        return l;
    }
});
var i = n(470079);
let r = (0, i.createContext)(null),
    o = {
        didCatch: !1,
        error: null
    };
class l extends i.Component {
    constructor(e) {
        super(e), (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)), (this.state = o);
    }
    static getDerivedStateFromError(e) {
        return {
            didCatch: !0,
            error: e
        };
    }
    resetErrorBoundary() {
        let { error: e } = this.state;
        if (null !== e) {
            for (var t, n, i = arguments.length, r = Array(i), l = 0; l < i; l++) r[l] = arguments[l];
            null === (t = (n = this.props).onReset) ||
                void 0 === t ||
                t.call(n, {
                    args: r,
                    reason: 'imperative-api'
                }),
                this.setState(o);
        }
    }
    componentDidCatch(e, t) {
        var n, i;
        null === (n = (i = this.props).onError) || void 0 === n || n.call(i, e, t);
    }
    componentDidUpdate(e, t) {
        let { didCatch: n } = this.state,
            { resetKeys: i } = this.props;
        if (
            n &&
            null !== t.error &&
            (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]));
            })(e.resetKeys, i)
        ) {
            var r, l;
            null === (r = (l = this.props).onReset) ||
                void 0 === r ||
                r.call(l, {
                    next: i,
                    prev: e.resetKeys,
                    reason: 'keys'
                }),
                this.setState(o);
        }
    }
    render() {
        let { children: e, fallbackRender: t, FallbackComponent: n, fallback: o } = this.props,
            { didCatch: l, error: a } = this.state,
            c = e;
        if (l) {
            let e = {
                error: a,
                resetErrorBoundary: this.resetErrorBoundary
            };
            if ((0, i.isValidElement)(o)) c = o;
            else if ('function' == typeof t) c = t(e);
            else if (n) c = (0, i.createElement)(n, e);
            else throw a;
        }
        return (0, i.createElement)(
            r.Provider,
            {
                value: {
                    didCatch: l,
                    error: a,
                    resetErrorBoundary: this.resetErrorBoundary
                }
            },
            c
        );
    }
}

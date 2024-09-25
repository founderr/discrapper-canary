var r = n(47120);
var i = n(411104);
var a = n(735250),
    o = n(470079),
    s = n(902704),
    l = n(250919);
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
function c(e, t, n) {
    return null != n && n.forwardRef ? _(e, t) : E(e, t);
}
function d(e) {
    var t, n;
    return null !== (n = null !== (t = e.displayName) && void 0 !== t ? t : e.name) && void 0 !== n ? n : '<Unknown>';
}
function _(e, t) {
    return (n) => {
        var r;
        let i = 'FluxContainer('.concat(d(n), ')');
        class c extends (r = o.Component) {
            componentDidMount() {
                this.listener.attach(i);
            }
            componentWillUnmount() {
                this.listener.detach(), this.memoizedGetStateFromStores.clear();
            }
            render() {
                let { forwardedConnectStoresRef: e, childProps: t } = this.props,
                    r = this.memoizedGetStateFromStores(t);
                return (0, a.jsx)(n, {
                    ref: e,
                    ...t,
                    ...r
                });
            }
            constructor(...n) {
                super(...n),
                    u(this, 'memoizedGetStateFromStores', f(t)),
                    u(
                        this,
                        'listener',
                        new l.F(e, () => {
                            let e = this.memoizedGetStateFromStores.getCachedResult(this.props.childProps);
                            if (!(null != e && (this.memoizedGetStateFromStores.clear(), (0, s.Z)(this.memoizedGetStateFromStores(this.props.childProps), e)))) this.forceUpdate();
                        })
                    );
            }
        }
        u(c, 'displayName', i);
        let _ = o.forwardRef((e, t) =>
            (0, a.jsx)(c, {
                childProps: e,
                forwardedConnectStoresRef: t
            })
        );
        return (_.displayName = 'ForwardRef('.concat(i, ')')), _;
    };
}
function E(e, t) {
    return (n) => {
        var r;
        let i = 'FluxContainer('.concat(d(n), ')');
        class c extends (r = o.Component) {
            componentDidMount() {
                this.listener.attach(i);
            }
            componentWillUnmount() {
                this.listener.detach(), this.memoizedGetStateFromStores.clear();
            }
            render() {
                let e = this.memoizedGetStateFromStores(this.props);
                return (0, a.jsx)(n, {
                    ...this.props,
                    ...e
                });
            }
            constructor(...n) {
                super(...n),
                    u(this, 'memoizedGetStateFromStores', f(t)),
                    u(
                        this,
                        'listener',
                        new l.F(e, () => {
                            let e = this.memoizedGetStateFromStores.getCachedResult(this.props);
                            if (!(null != e && (this.memoizedGetStateFromStores.clear(), (0, s.Z)(this.memoizedGetStateFromStores(this.props), e)))) this.forceUpdate();
                        })
                    );
            }
        }
        return u(c, 'displayName', i), c;
    };
}
function f(e) {
    let t = null,
        n = null,
        r = (e) => (null != t && null != n && (0, s.Z)(t, e) ? n : null != t && null != n && (0, s.Z)(t, e) ? ((t = e), n) : null),
        i = (i) => {
            let a = r(i);
            return null != a ? a : (n = e((t = i)));
        };
    return (
        (i.getCachedResult = r),
        (i.clear = () => {
            (t = null), (n = null);
        }),
        i
    );
}
t.Z = c;

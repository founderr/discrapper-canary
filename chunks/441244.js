var i = r(47120);
var a = r(411104);
var s = r(200651),
    o = r(192379),
    l = r(902704),
    u = r(250919);
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
function d(e, n, r) {
    return null != r && r.forwardRef ? _(e, n) : h(e, n);
}
function f(e) {
    var n, r;
    return null !== (r = null !== (n = e.displayName) && void 0 !== n ? n : e.name) && void 0 !== r ? r : '<Unknown>';
}
function _(e, n) {
    return (r) => {
        var i;
        let a = 'FluxContainer('.concat(f(r), ')');
        class d extends (i = o.Component) {
            componentDidMount() {
                this.listener.attach(a);
            }
            componentWillUnmount() {
                this.listener.detach(), this.memoizedGetStateFromStores.clear();
            }
            render() {
                let { forwardedConnectStoresRef: e, childProps: n } = this.props,
                    i = this.memoizedGetStateFromStores(n);
                return (0, s.jsx)(r, {
                    ref: e,
                    ...n,
                    ...i
                });
            }
            constructor(...r) {
                super(...r),
                    c(this, 'memoizedGetStateFromStores', p(n)),
                    c(
                        this,
                        'listener',
                        new u.F(e, () => {
                            let e = this.memoizedGetStateFromStores.getCachedResult(this.props.childProps);
                            if (!(null != e && (this.memoizedGetStateFromStores.clear(), (0, l.Z)(this.memoizedGetStateFromStores(this.props.childProps), e)))) this.forceUpdate();
                        })
                    );
            }
        }
        c(d, 'displayName', a);
        let _ = o.forwardRef((e, n) =>
            (0, s.jsx)(d, {
                childProps: e,
                forwardedConnectStoresRef: n
            })
        );
        return (_.displayName = 'ForwardRef('.concat(a, ')')), _;
    };
}
function h(e, n) {
    return (r) => {
        var i;
        let a = 'FluxContainer('.concat(f(r), ')');
        class d extends (i = o.Component) {
            componentDidMount() {
                this.listener.attach(a);
            }
            componentWillUnmount() {
                this.listener.detach(), this.memoizedGetStateFromStores.clear();
            }
            render() {
                let e = this.memoizedGetStateFromStores(this.props);
                return (0, s.jsx)(r, {
                    ...this.props,
                    ...e
                });
            }
            constructor(...r) {
                super(...r),
                    c(this, 'memoizedGetStateFromStores', p(n)),
                    c(
                        this,
                        'listener',
                        new u.F(e, () => {
                            let e = this.memoizedGetStateFromStores.getCachedResult(this.props);
                            if (!(null != e && (this.memoizedGetStateFromStores.clear(), (0, l.Z)(this.memoizedGetStateFromStores(this.props), e)))) this.forceUpdate();
                        })
                    );
            }
        }
        return c(d, 'displayName', a), d;
    };
}
function p(e) {
    let n = null,
        r = null,
        i = (e) => (null != n && null != r && (0, l.Z)(n, e) ? r : null != n && null != r && (0, l.Z)(n, e) ? ((n = e), r) : null),
        a = (a) => {
            let s = i(a);
            return null != s ? s : (r = e((n = a)));
        };
    return (
        (a.getCachedResult = i),
        (a.clear = () => {
            (n = null), (r = null);
        }),
        a
    );
}
n.Z = d;

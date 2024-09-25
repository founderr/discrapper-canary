var r = n(781212),
    i = n(919499),
    a = n(476400);
var o = n(470079),
    s = n(699581),
    l = n(956060),
    u = n(717588),
    c = 'unmounted',
    d = 'exited',
    _ = 'entering',
    E = 'entered',
    f = 'exiting',
    h = (function (e) {
        function t(t, n) {
            r = e.call(this, t, n) || this;
            var r,
                i,
                a = n,
                o = a && !a.isMounting ? t.enter : t.appear;
            return (r.appearStatus = null), t.in ? (o ? ((i = d), (r.appearStatus = _)) : (i = E)) : (i = t.unmountOnExit || t.mountOnEnter ? c : d), (r.state = { status: i }), (r.nextCallback = null), r;
        }
        (0, i.Z)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
                return e.in && t.status === c ? { status: d } : null;
            });
        var n = t.prototype;
        return (
            (n.componentDidMount = function () {
                this.updateStatus(!0, this.appearStatus);
            }),
            (n.componentDidUpdate = function (e) {
                var t = null;
                if (e !== this.props) {
                    var n = this.state.status;
                    this.props.in ? n !== _ && n !== E && (t = _) : (n === _ || n === E) && (t = f);
                }
                this.updateStatus(!1, t);
            }),
            (n.componentWillUnmount = function () {
                this.cancelNextCallback();
            }),
            (n.getTimeouts = function () {
                var e,
                    t,
                    n,
                    r = this.props.timeout;
                return (
                    (e = t = n = r),
                    null != r && 'number' != typeof r && ((e = r.exit), (t = r.enter), (n = void 0 !== r.appear ? r.appear : t)),
                    {
                        exit: e,
                        enter: t,
                        appear: n
                    }
                );
            }),
            (n.updateStatus = function (e, t) {
                if ((void 0 === e && (e = !1), null !== t)) {
                    this.cancelNextCallback();
                    var n = s.findDOMNode(this);
                    t === _ ? this.performEnter(n, e) : this.performExit(n);
                } else this.props.unmountOnExit && this.state.status === d && this.setState({ status: c });
            }),
            (n.performEnter = function (e, t) {
                var n = this,
                    r = this.props.enter,
                    i = this.context ? this.context.isMounting : t,
                    a = this.getTimeouts(),
                    o = i ? a.appear : a.enter;
                if ((!t && !r) || l.Z.disabled) {
                    this.safeSetState({ status: E }, function () {
                        n.props.onEntered(e);
                    });
                    return;
                }
                this.props.onEnter(e, i),
                    this.safeSetState({ status: _ }, function () {
                        n.props.onEntering(e, i),
                            n.onTransitionEnd(e, o, function () {
                                n.safeSetState({ status: E }, function () {
                                    n.props.onEntered(e, i);
                                });
                            });
                    });
            }),
            (n.performExit = function (e) {
                var t = this,
                    n = this.props.exit,
                    r = this.getTimeouts();
                if (!n || l.Z.disabled) {
                    this.safeSetState({ status: d }, function () {
                        t.props.onExited(e);
                    });
                    return;
                }
                this.props.onExit(e),
                    this.safeSetState({ status: f }, function () {
                        t.props.onExiting(e),
                            t.onTransitionEnd(e, r.exit, function () {
                                t.safeSetState({ status: d }, function () {
                                    t.props.onExited(e);
                                });
                            });
                    });
            }),
            (n.cancelNextCallback = function () {
                null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (n.safeSetState = function (e, t) {
                (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (n.setNextCallback = function (e) {
                var t = this,
                    n = !0;
                return (
                    (this.nextCallback = function (r) {
                        n && ((n = !1), (t.nextCallback = null), e(r));
                    }),
                    (this.nextCallback.cancel = function () {
                        n = !1;
                    }),
                    this.nextCallback
                );
            }),
            (n.onTransitionEnd = function (e, t, n) {
                this.setNextCallback(n);
                var r = null == t && !this.props.addEndListener;
                if (!e || r) {
                    setTimeout(this.nextCallback, 0);
                    return;
                }
                this.props.addEndListener && this.props.addEndListener(e, this.nextCallback), null != t && setTimeout(this.nextCallback, t);
            }),
            (n.render = function () {
                var e = this.state.status;
                if (e === c) return null;
                var t = this.props,
                    n = t.children,
                    i = (0, r.Z)(t, ['children']);
                if ((delete i.in, delete i.mountOnEnter, delete i.unmountOnExit, delete i.appear, delete i.enter, delete i.exit, delete i.timeout, delete i.addEndListener, delete i.onEnter, delete i.onEntering, delete i.onEntered, delete i.onExit, delete i.onExiting, delete i.onExited, 'function' == typeof n)) return o.createElement(u.Z.Provider, { value: null }, n(e, i));
                var a = o.Children.only(n);
                return o.createElement(u.Z.Provider, { value: null }, o.cloneElement(a, i));
            }),
            t
        );
    })(o.Component);
function p() {}
(h.contextType = u.Z),
    (h.propTypes = {}),
    (h.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: p,
        onEntering: p,
        onEntered: p,
        onExit: p,
        onExiting: p,
        onExited: p
    }),
    (h.UNMOUNTED = 0),
    (h.EXITED = 1),
    (h.ENTERING = 2),
    (h.ENTERED = 3),
    (h.EXITING = 4),
    (t.ZP = h);

t(47120);
var i,
    a = t(735250),
    r = t(470079),
    o = t(846519);
function s(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
class l extends (i = r.Component) {
    static getDerivedStateFromProps(e) {
        return e.disable ? { hovered: !1 } : null;
    }
    componentDidMount() {
        let { pauseOnHover: e, disable: n } = this.props,
            t = this.state.hovered && e;
        !n && !t && this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer();
    }
    componentDidUpdate(e, n) {
        let t,
            i,
            a,
            r,
            { props: o } = this;
        let s = ((t = o), (i = this.state), !t.disable && !(i.hovered && t.pauseOnHover));
        let l = ((a = e), (r = n), !a.disable && !(r.hovered && a.pauseOnHover));
        (s && !l) || e.interval !== o.interval ? this.startTimer() : !s && l && this.stopTimer();
    }
    startTimer() {
        let { interval: e, onInterval: n, disable: t } = this.props;
        if (!t)
            this.timer.start(e, () => {
                n();
            });
    }
    stopTimer() {
        this.timer.stop();
    }
    render() {
        let { children: e, className: n, disable: t } = this.props,
            i = t
                ? null
                : {
                      onMouseEnter: this.handlePause,
                      onFocus: this.handlePause,
                      onMouseLeave: this.handleResume,
                      onBlur: this.handleResume
                  };
        return (0, a.jsx)('div', {
            ...i,
            className: n,
            children: e
        });
    }
    constructor(...e) {
        super(...e),
            s(this, 'timer', new o.Xp()),
            s(this, 'state', { hovered: !1 }),
            s(this, 'handlePause', () => {
                !this.state.hovered && this.setState({ hovered: !0 });
            }),
            s(this, 'handleResume', () => {
                this.setState({ hovered: !1 });
            });
    }
}
s(l, 'defaultProps', {
    disable: !1,
    pauseOnHover: !1
}),
    (n.Z = l);

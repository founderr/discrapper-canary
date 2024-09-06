t(47120);
var i,
    a = t(735250),
    r = t(470079),
    o = t(846519);
function l(e, n, t) {
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
class s extends (i = r.Component) {
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
        let l = ((t = o), (i = this.state), !t.disable && !(i.hovered && t.pauseOnHover));
        let s = ((a = e), (r = n), !a.disable && !(r.hovered && a.pauseOnHover));
        (l && !s) || e.interval !== o.interval ? this.startTimer() : !l && s && this.stopTimer();
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
            l(this, 'timer', new o.Xp()),
            l(this, 'state', { hovered: !1 }),
            l(this, 'handlePause', () => {
                !this.state.hovered && this.setState({ hovered: !0 });
            }),
            l(this, 'handleResume', () => {
                this.setState({ hovered: !1 });
            });
    }
}
l(s, 'defaultProps', {
    disable: !1,
    pauseOnHover: !1
}),
    (n.Z = s);

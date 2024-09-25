var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(846519);
function l(e, t, n) {
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
class u extends (r = o.Component) {
    static getDerivedStateFromProps(e) {
        return e.disable ? { hovered: !1 } : null;
    }
    componentDidMount() {
        let { pauseOnHover: e, disable: t } = this.props,
            n = this.state.hovered && e;
        !t && !n && this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer();
    }
    componentDidUpdate(e, t) {
        let { props: n } = this,
            r = (e, t) => !e.disable && !(t.hovered && e.pauseOnHover),
            i = r(n, this.state),
            a = r(e, t);
        (i && !a) || e.interval !== n.interval ? this.startTimer() : !i && a && this.stopTimer();
    }
    startTimer() {
        let { interval: e, onInterval: t, disable: n } = this.props;
        if (!n)
            this.timer.start(e, () => {
                t();
            });
    }
    stopTimer() {
        this.timer.stop();
    }
    render() {
        let { children: e, className: t, disable: n } = this.props,
            r = n
                ? null
                : {
                      onMouseEnter: this.handlePause,
                      onFocus: this.handlePause,
                      onMouseLeave: this.handleResume,
                      onBlur: this.handleResume
                  };
        return (0, a.jsx)('div', {
            ...r,
            className: t,
            children: e
        });
    }
    constructor(...e) {
        super(...e),
            l(this, 'timer', new s.Xp()),
            l(this, 'state', { hovered: !1 }),
            l(this, 'handlePause', () => {
                !this.state.hovered && this.setState({ hovered: !0 });
            }),
            l(this, 'handleResume', () => {
                this.setState({ hovered: !1 });
            });
    }
}
l(u, 'defaultProps', {
    disable: !1,
    pauseOnHover: !1
}),
    (t.Z = u);

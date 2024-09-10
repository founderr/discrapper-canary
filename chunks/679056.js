n(47120);
var i,
    s = n(735250),
    a = n(470079),
    r = n(846519);
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
class o extends (i = a.Component) {
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
        let n,
            i,
            s,
            a,
            { props: r } = this;
        let l = ((n = r), (i = this.state), !n.disable && !(i.hovered && n.pauseOnHover));
        let o = ((s = e), (a = t), !s.disable && !(a.hovered && s.pauseOnHover));
        (l && !o) || e.interval !== r.interval ? this.startTimer() : !l && o && this.stopTimer();
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
            i = n
                ? null
                : {
                      onMouseEnter: this.handlePause,
                      onFocus: this.handlePause,
                      onMouseLeave: this.handleResume,
                      onBlur: this.handleResume
                  };
        return (0, s.jsx)('div', {
            ...i,
            className: t,
            children: e
        });
    }
    constructor(...e) {
        super(...e),
            l(this, 'timer', new r.Xp()),
            l(this, 'state', { hovered: !1 }),
            l(this, 'handlePause', () => {
                !this.state.hovered && this.setState({ hovered: !0 });
            }),
            l(this, 'handleResume', () => {
                this.setState({ hovered: !1 });
            });
    }
}
l(o, 'defaultProps', {
    disable: !1,
    pauseOnHover: !1
}),
    (t.Z = o);

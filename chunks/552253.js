n(47120);
var i, a = n(735250), s = n(470079), l = n(846519);
function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class o extends (i = s.Component) {
    static getDerivedStateFromProps(e) {
        return e.disable ? { hovered: !1 } : null;
    }
    componentDidMount() {
        let {
                pauseOnHover: e,
                disable: t
            } = this.props, n = this.state.hovered && e;
        !t && !n && this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer();
    }
    componentDidUpdate(e, t) {
        let n, i, a, s, {props: l} = this;
        let r = (n = l, i = this.state, !n.disable && !(i.hovered && n.pauseOnHover));
        let o = (a = e, s = t, !a.disable && !(s.hovered && a.pauseOnHover));
        r && !o || e.interval !== l.interval ? this.startTimer() : !r && o && this.stopTimer();
    }
    startTimer() {
        let {
            interval: e,
            onInterval: t,
            disable: n
        } = this.props;
        if (!n)
            this.timer.start(e, () => {
                t();
            });
    }
    stopTimer() {
        this.timer.stop();
    }
    render() {
        let {
                children: e,
                className: t,
                disable: n
            } = this.props, i = n ? null : {
                onMouseEnter: this.handlePause,
                onFocus: this.handlePause,
                onMouseLeave: this.handleResume,
                onBlur: this.handleResume
            };
        return (0, a.jsx)('div', {
            ...i,
            className: t,
            children: e
        });
    }
    constructor(...e) {
        super(...e), r(this, 'timer', new l.Xp()), r(this, 'state', { hovered: !1 }), r(this, 'handlePause', () => {
            !this.state.hovered && this.setState({ hovered: !0 });
        }), r(this, 'handleResume', () => {
            this.setState({ hovered: !1 });
        });
    }
}
r(o, 'defaultProps', {
    disable: !1,
    pauseOnHover: !1
}), t.Z = o;

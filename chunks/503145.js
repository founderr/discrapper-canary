n.d(t, {
    U: function () {
        return d;
    }
});
var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(392711),
    l = n.n(s),
    u = n(607070);
function c(e, t, n) {
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
class d extends (r = o.Component) {
    componentDidMount() {
        this.props.isShaking && this.startShaking();
    }
    componentDidUpdate(e) {
        this.props.isShaking !== e.isShaking && this.setShaking(this.props.isShaking);
    }
    setShaking(e) {
        e ? this.startShaking() : this.stopShaking();
    }
    startShaking() {
        (this.shouldRenderFrame = !0), (this.animationFrame = requestAnimationFrame(this.animate));
    }
    stopShaking() {
        null != this.animationFrame && cancelAnimationFrame(this.animationFrame);
        let e = this.ref.current;
        null != e && (e.style.transform = '');
    }
    render() {
        let { className: e, children: t } = this.props;
        return (0, a.jsx)('div', {
            className: e,
            ref: this.ref,
            children: t
        });
    }
    constructor(...e) {
        super(...e),
            c(this, 'ref', o.createRef()),
            c(this, 'animationFrame', void 0),
            c(this, 'shouldRenderFrame', !0),
            c(this, 'animate', () => {
                let { intensity: e, isShaking: t } = this.props;
                if (!t) return;
                let n = this.ref.current;
                if (this.shouldRenderFrame && null != n) {
                    let t = l().random(-e, e, !0),
                        r = l().random(-e, e, !0);
                    n.style.transform = u.Z.useReducedMotion ? '' : 'translate3d('.concat(t, 'px,').concat(r, 'px,0px)');
                }
                (this.shouldRenderFrame = !this.shouldRenderFrame), (this.animationFrame = requestAnimationFrame(this.animate));
            });
    }
}
c(d, 'defaultProps', {
    isShaking: !0,
    intensity: 5
});

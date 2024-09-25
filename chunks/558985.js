n.d(t, {
    $: function () {
        return E;
    }
});
var r,
    i = n(47120);
var a = n(411104);
var o = n(470079),
    s = n(772848),
    l = n(324404);
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
let c = (0, s.Z)(),
    d = new Map(),
    _ = new Map();
class E extends (r = o.Component) {
    componentDidMount() {
        if (this.props.active) {
            let e = this.getVisibilityObserver();
            e.observe(this), (this.isVisible = e.isVisible(this)), this.props.onChange(this.isVisible);
        }
    }
    componentDidUpdate(e) {
        let t = this.getVisibilityObserver(),
            n = t.isVisible(this);
        this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), (this.isVisible = n);
    }
    componentWillUnmount() {
        this.getVisibilityObserver().unobserve(this);
    }
    getVisibilityObserverId() {
        let { rootMargin: e, threshold: t } = this.props;
        return ''.concat(this.elementId, ' ').concat(e, ' ').concat(t);
    }
    getVisibilityObserver() {
        let e = this.getVisibilityObserverId(),
            t = _.get(e);
        if (!t) throw Error('Visibility sensor with id '.concat(e, ' not found.'));
        return t;
    }
    render() {
        return o.Children.only(this.props.children);
    }
    constructor(e) {
        super(e), u(this, 'elementId', void 0), u(this, 'isVisible', !1);
        let { root: t, rootMargin: n, threshold: r } = e;
        t ? (d.has(t) ? (this.elementId = d.get(t) || '') : d.set(t, (0, s.Z)())) : (this.elementId = c);
        let i = this.getVisibilityObserverId();
        !_.has(i) &&
            _.set(
                i,
                new l.Z({
                    root: t,
                    rootMargin: n,
                    threshold: r
                })
            );
    }
}
u(E, 'defaultProps', {
    active: !0,
    children: o.createElement('span'),
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: [0, Number.MIN_VALUE]
});

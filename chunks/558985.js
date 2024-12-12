r.d(n, {
    $: function () {
        return h;
    }
});
var i,
    a = r(47120);
var s = r(411104);
var o = r(192379),
    l = r(772848),
    u = r(324404);
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
let d = (0, l.Z)(),
    f = new Map(),
    _ = new Map();
class h extends (i = o.Component) {
    componentDidMount() {
        if (this.props.active) {
            let e = this.getVisibilityObserver();
            e.observe(this), (this.isVisible = e.isVisible(this)), this.props.onChange(this.isVisible);
        }
    }
    componentDidUpdate(e) {
        let n = this.getVisibilityObserver(),
            r = n.isVisible(this);
        this.props.active && r !== this.isVisible && this.props.onChange(r), !e.active && this.props.active ? n.observe(this) : e.active && !this.props.active && n.unobserve(this), (this.isVisible = r);
    }
    componentWillUnmount() {
        this.getVisibilityObserver().unobserve(this);
    }
    getVisibilityObserverId() {
        let { rootMargin: e, threshold: n } = this.props;
        return ''.concat(this.elementId, ' ').concat(e, ' ').concat(n);
    }
    getVisibilityObserver() {
        let e = this.getVisibilityObserverId(),
            n = _.get(e);
        if (!n) throw Error('Visibility sensor with id '.concat(e, ' not found.'));
        return n;
    }
    render() {
        return o.Children.only(this.props.children);
    }
    constructor(e) {
        super(e), c(this, 'elementId', void 0), c(this, 'isVisible', !1);
        let { root: n, rootMargin: r, threshold: i } = e;
        n ? (f.has(n) ? (this.elementId = f.get(n) || '') : f.set(n, (0, l.Z)())) : (this.elementId = d);
        let a = this.getVisibilityObserverId();
        !_.has(a) &&
            _.set(
                a,
                new u.Z({
                    root: n,
                    rootMargin: r,
                    threshold: i
                })
            );
    }
}
c(h, 'defaultProps', {
    active: !0,
    children: o.createElement('span'),
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: [0, Number.MIN_VALUE]
});

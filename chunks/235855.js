"use strict";
n.r(e), n.d(e, {
  default: function() {
    return c
  }
}), n("222007"), n("70102");
var i = n("884691"),
  r = n("748820"),
  l = n("157590");
let s = (0, r.v4)(),
  a = new Map,
  o = new Map;
class u extends i.Component {
  componentDidMount() {
    if (this.props.active) {
      let t = this.getVisibilityObserver();
      t.observe(this), this.isVisible = t.isVisible(this), this.props.onChange(this.isVisible)
    }
  }
  componentDidUpdate(t) {
    let e = this.getVisibilityObserver(),
      n = e.isVisible(this);
    this.props.active && n !== this.isVisible && this.props.onChange(n), !t.active && this.props.active ? e.observe(this) : t.active && !this.props.active && e.unobserve(this), this.isVisible = n
  }
  componentWillUnmount() {
    this.getVisibilityObserver().unobserve(this)
  }
  getVisibilityObserverId() {
    let {
      rootMargin: t,
      threshold: e
    } = this.props;
    return "".concat(this.elementId, " ").concat(t, " ").concat(e)
  }
  getVisibilityObserver() {
    let t = this.getVisibilityObserverId(),
      e = o.get(t);
    if (!e) throw Error("Visibility sensor with id ".concat(t, " not found."));
    return e
  }
  render() {
    return i.Children.only(this.props.children)
  }
  constructor(t) {
    super(t), this.isVisible = !1;
    let {
      root: e,
      rootMargin: n,
      threshold: i
    } = t;
    e ? a.has(e) ? this.elementId = a.get(e) || "" : a.set(e, (0, r.v4)()) : this.elementId = s;
    let u = this.getVisibilityObserverId();
    !o.has(u) && o.set(u, new l.default({
      root: e,
      rootMargin: n,
      threshold: i
    }))
  }
}
u.defaultProps = {
  active: !0,
  children: i.createElement("span"),
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: [0, Number.MIN_VALUE]
};
var c = u
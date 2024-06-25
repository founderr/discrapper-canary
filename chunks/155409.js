n.d(t, {
  Z: function() {
    return f
  }
});
var l, i, s, a, r = n(735250),
  o = n(470079),
  c = n(699581),
  u = n(374470),
  d = n(442837),
  h = n(260300),
  m = n(451478),
  E = n(5560),
  p = n(10401);
class g extends(a = o.Component) {
  componentDidMount() {
    let {
      visible: e,
      inlineSpecs: t
    } = this.props;
    null == t && this.show(e)
  }
  componentWillUnmount() {
    let {
      inlineSpecs: e
    } = this.props;
    null == e && this.show(!1)
  }
  componentDidUpdate(e) {
    let {
      position: t,
      offsetX: n,
      offsetY: l,
      tutorialId: i,
      visible: s,
      windowSize: a
    } = e;
    i !== this.props.tutorialId ? h.Z.hide(i) : (s !== this.props.visible || t !== this.props.position || n !== this.props.offsetX || l !== this.props.offsetY || a !== this.props.windowSize) && this.show(this.props.visible)
  }
  show(e) {
    let {
      tutorialId: t,
      position: n,
      offsetX: l,
      offsetY: i,
      visible: s,
      inlineSpecs: a,
      autoInvert: r
    } = this.props;
    if (e && null == a) {
      let e = (0, c.findDOMNode)(this);
      if (!(0, u.k)(e)) return;
      let {
        top: s,
        left: a,
        right: o,
        bottom: d
      } = e.getBoundingClientRect();
      h.Z.show(t, {
        position: n,
        targetWidth: o - a,
        targetHeight: d - s,
        autoInvert: r,
        origin: {
          x: a,
          y: s
        },
        offset: {
          x: l,
          y: i
        }
      })
    } else s && h.Z.hide(t)
  }
  render() {
    let {
      inlineSpecs: e,
      tutorialId: t,
      children: n,
      visible: l,
      windowFocused: i,
      position: s,
      autoInvert: a
    } = this.props, c = p.Z.getData()[t];
    return null != e && null != c ? (0, r.jsxs)(r.Fragment, {
      children: [n, l && (0, r.jsx)(E.V, {
        autoInvert: a,
        position: s,
        tutorialId: t,
        tutorialDefinition: c,
        focused: i,
        ...e
      })]
    }) : o.Children.only(n)
  }
}

function f(e) {
  let {
    tutorialId: t
  } = e, n = (0, d.e7)([p.Z], () => p.Z.shouldShow(t), [t]), l = (0, d.e7)([m.Z], () => m.Z.isFocused()), i = (0, d.e7)([m.Z], () => m.Z.windowSize(), []);
  return (0, r.jsx)(g, {
    ...e,
    visible: n,
    windowFocused: l,
    windowSize: i
  })
}
s = {
  position: "top",
  offsetX: 0,
  offsetY: 0,
  autoInvert: !0
}, (i = "defaultProps") in(l = g) ? Object.defineProperty(l, i, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[i] = s
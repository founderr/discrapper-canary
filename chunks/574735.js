"use strict";
s.r(t), s.d(t, {
  normalizeIndex: function() {
    return m
  }
}), s("47120"), s("411104");
var n, a = s("735250"),
  i = s("470079"),
  r = s("120356"),
  l = s.n(r),
  o = s("748780"),
  d = s("112724"),
  h = s("667103");

function u(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let c = {
    tension: 7,
    friction: 5,
    overshootClamping: !0
  },
  p = {
    CENTER: "center",
    RIGHT: "right"
  };

function m(e, t) {
  return (e % t + t) % t
}
class g extends(n = i.Component) {
  componentDidMount() {
    this.animatedIndex.setValue(this.props.currentIndex)
  }
  componentDidUpdate(e) {
    let {
      align: t,
      animate: s,
      currentIndex: n,
      items: a,
      width: i
    } = this.props, r = m(n, a.length), l = m(e.currentIndex, a.length);
    (r !== l || a.length !== e.items.length) && this.updateAnimatedIndex(r, l), i !== e.width ? this.animatedAlignmentOffset.setValue(this.getAlignmentOffset(t)) : s && (t !== e.align || r !== l) && o.default.spring(this.animatedAlignmentOffset, {
      ...c,
      toValue: this.getAlignmentOffset(t)
    }).start()
  }
  getAlignmentOffset(e) {
    let {
      width: t,
      itemSize: s,
      currentIndex: n,
      gutter: a,
      items: i
    } = this.props, r = a * m(n, i.length) * 2;
    return e === p.CENTER ? (t - s.width) / 2 + r : e === p.RIGHT ? t - s.width - a + r : a + r
  }
  getCarouselTranslate() {
    let {
      itemSize: e,
      edgeItems: t
    } = this.props;
    return t * (e.width + e.margin)
  }
  animateToIndex(e, t) {
    let {
      animatedIndex: s
    } = this, {
      items: n,
      edgeItems: a
    } = this.props;
    a > 0 && (0 === e && t === n.length - 1 ? s.setValue(-1) : 0 === t && e === n.length - 1 && n.length > 2 && s.setValue(n.length)), o.default.spring(s, {
      ...c,
      toValue: e
    }).start()
  }
  updateAnimatedIndex(e, t) {
    let {
      animatedIndex: s,
      animatedOpacity: n
    } = this, {
      animate: a
    } = this.props;
    a ? this.animateToIndex(e, t) : o.default.timing(n, {
      fromValue: 1,
      toValue: 0,
      duration: 100
    }).start(() => {
      s.setValue(e), o.default.timing(n, {
        fromValue: 0,
        toValue: 1,
        duration: 100
      }).start()
    })
  }
  renderSingleItem() {
    let {
      renderItem: e,
      items: t,
      itemSize: s,
      className: n
    } = this.props;
    return (0, a.jsx)("div", {
      className: l()(h.singleItemWrapper, h.viewport, n),
      children: (0, a.jsx)("div", {
        className: h.singleItem,
        style: {
          width: s.width,
          height: s.height
        },
        children: e(t[0], 0)
      })
    })
  }
  renderCarouselItems() {
    let e;
    let {
      animatedIndex: t,
      animatedAlignmentOffset: s,
      animatedOpacity: n
    } = this, {
      renderItem: i,
      items: r,
      itemSize: l,
      edgeItems: d,
      gutter: u
    } = this.props, {
      margin: c,
      width: p
    } = l, m = this.getCarouselTranslate(), g = this.getItemStyle(), C = (e = d > 0 ? [...r.slice(-d), ...r, ...r.slice(0, d)] : r).map((e, t) => (0, a.jsx)("div", {
      style: g,
      className: h.item,
      children: i(e, t - d, this.interpolateValueForItem(t - d))
    }, t));
    return (0, a.jsx)(o.default.div, {
      className: h.carousel,
      style: {
        opacity: n,
        left: o.default.add(t.interpolate({
          inputRange: [0, 1],
          outputRange: [-m, -c - p - m - u * (r.length - 1)]
        }), s)
      },
      children: C
    })
  }
  render() {
    let {
      items: e,
      className: t,
      hideOverflow: s
    } = this.props;
    if (e.length <= 0) throw Error("Carousel has no items");
    return 1 === e.length ? this.renderSingleItem() : (0, a.jsx)("div", {
      className: l()({
        [h.viewport]: s
      }, t),
      children: this.renderCarouselItems()
    })
  }
  constructor(...e) {
    super(...e), u(this, "animatedIndex", new o.default.Value(this.props.currentIndex)), u(this, "animatedAlignmentOffset", new o.default.Value(this.getAlignmentOffset(this.props.align))), u(this, "animatedOpacity", new o.default.Value(1)), u(this, "getItemStyle", () => {
      let {
        itemSize: {
          width: e,
          margin: t,
          height: s
        }
      } = this.props;
      return {
        flexBasis: e,
        marginRight: t,
        height: s,
        width: e,
        maxWidth: e
      }
    }), u(this, "interpolateValueForItem", e => this.animatedIndex.interpolate({
      inputRange: [e - 1, e, e + 1],
      outputRange: [0, 1, 0],
      extrapolate: "clamp"
    }))
  }
}
u(g, "defaultProps", {
  animate: !0,
  edgeItems: 2,
  align: p.CENTER,
  gutter: 0,
  hideOverflow: !0
}), t.default = (0, d.default)(g)
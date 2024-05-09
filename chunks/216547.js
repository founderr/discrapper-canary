"use strict";
t.r(L), t("47120");
var a, C, s = t("735250"),
  i = t("470079"),
  l = t("120356"),
  n = t.n(l),
  r = t("699581"),
  H = t("374470"),
  d = t("481060"),
  V = t("112724"),
  c = t("996753"),
  o = t("514331");

function M(e, L, t) {
  return L in e ? Object.defineProperty(e, L, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[L] = t, e
}(C = a || (a = {}))[C.LEFT = 0] = "LEFT", C[C.RIGHT = 1] = "RIGHT";
let u = e => {
  let {
    onClick: L,
    className: t,
    direction: a
  } = e;
  return (0, s.jsx)(d.Clickable, {
    "aria-hidden": !0,
    className: n()(o.scrollerButton, t),
    onClick: L,
    children: (0, s.jsx)(c.default, {
      className: o.scrollerButtonArrow,
      direction: a
    })
  })
};
class E extends i.Component {
  static getDerivedStateFromProps(e, L) {
    return L.prevWidth !== e.width ? {
      tileIndex: 0,
      prevWidth: e.width,
      lastArrowDirection: 0
    } : null
  }
  getMaxOffset() {
    let {
      width: e
    } = this.props, {
      scrollerWidth: L
    } = this.state;
    return Math.max(Math.floor(L - e), 0)
  }
  getSideOffset() {
    let {
      tileWidth: e,
      tileMargin: L
    } = this.props, t = this.getMaxOffset(), a = e + L;
    return t - Math.floor(t / a) * a
  }
  getMaxIndex() {
    let {
      tileWidth: e,
      tileMargin: L
    } = this.props;
    return Math.round(this.getMaxOffset() / (e + L))
  }
  getOffset(e, L) {
    let {
      tileWidth: t,
      tileMargin: a
    } = this.props;
    return Math.min(e * (t + a) + (1 === L ? this.getSideOffset() : 0), this.getMaxOffset())
  }
  componentDidMount() {
    this.setScrollerWidth()
  }
  componentDidUpdate(e, L) {
    if (L.tileIndex !== this.state.tileIndex || L.lastArrowDirection !== this.state.lastArrowDirection) {
      var t, a, C;
      let {
        tileIndex: e
      } = this.state, L = this.getOffset(this.state.tileIndex, this.state.lastArrowDirection);
      null === (t = this.advancedScrollerRef.current) || void 0 === t || t.scrollTo({
        to: L,
        animate: !0
      }), null === (a = (C = this.props).onScroll) || void 0 === a || a.call(C, {
        tileIndex: e
      })
    }
    e.width !== this.props.width && this.setScrollerWidth()
  }
  render() {
    let {
      tileIndex: e,
      lastArrowDirection: L
    } = this.state, {
      header: t,
      headerId: a,
      subHeader: C,
      headerContainerClassName: i,
      scrollContainerClassName: l
    } = this.props, r = this.getMaxOffset();
    return (0, s.jsxs)("div", {
      children: [(0, s.jsxs)("div", {
        className: n()(o.headerContainer, i),
        children: [(0, s.jsxs)("div", {
          children: [(0, s.jsx)(d.Heading, {
            id: a,
            variant: "heading-lg/semibold",
            children: t
          }), null == C ? null : (0, s.jsx)(d.Text, {
            variant: "text-sm/medium",
            className: o.subheader,
            children: C
          })]
        }), r > 0 ? (0, s.jsxs)("div", {
          className: o.arrowsContainer,
          children: [(0, s.jsx)(u, {
            direction: c.default.Directions.LEFT,
            onClick: this.prev,
            className: n()(o.arrowLeft, {
              [o.arrowDisabled]: 0 === e && 0 === L
            })
          }), (0, s.jsx)(u, {
            direction: c.default.Directions.RIGHT,
            onClick: this.next,
            className: n()(o.arrowRight, {
              [o.arrowDisabled]: e === this.getMaxIndex() && 1 === L
            })
          })]
        }) : null]
      }), (0, s.jsx)("div", {
        className: n()(o.scrollerContainer, l),
        children: (0, s.jsx)(d.AdvancedScrollerNone, {
          ref: this.advancedScrollerRef,
          orientation: "horizontal",
          className: o.scroller,
          children: (0, s.jsx)("div", {
            className: o.scroller,
            ref: e => {
              this.tileScrollerRef.current = e, this.setScrollerWidth()
            },
            children: this.props.children
          })
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), M(this, "state", {
      tileIndex: 0,
      prevWidth: this.props.width,
      lastArrowDirection: 0,
      scrollerWidth: 0
    }), M(this, "advancedScrollerRef", i.createRef()), M(this, "tileScrollerRef", i.createRef()), M(this, "setScrollerWidth", () => {
      let e = (0, r.findDOMNode)(this.tileScrollerRef.current);
      (0, H.isElement)(e, HTMLElement) && e.offsetWidth !== this.state.scrollerWidth && this.setState({
        scrollerWidth: e.offsetWidth
      })
    }), M(this, "prev", () => {
      this.setState({
        tileIndex: Math.max(this.state.tileIndex - 1, 0),
        lastArrowDirection: 0
      })
    }), M(this, "next", () => {
      this.setState({
        tileIndex: Math.min(this.state.tileIndex + 1, this.getMaxIndex()),
        lastArrowDirection: 1
      })
    })
  }
}
L.default = (0, V.default)(E)
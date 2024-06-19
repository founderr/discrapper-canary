C(47120);
var a, s, t = C(735250),
  i = C(470079),
  n = C(120356),
  l = C.n(n),
  r = C(699581),
  H = C(374470),
  V = C(481060),
  c = C(112724),
  o = C(996753),
  d = C(248469);

function M(L, e, C) {
  return e in L ? Object.defineProperty(L, e, {
    value: C,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : L[e] = C, L
}(s = a || (a = {}))[s.LEFT = 0] = "LEFT", s[s.RIGHT = 1] = "RIGHT";
let Z = L => {
  let {
    onClick: e,
    className: C,
    direction: a
  } = L;
  return (0, t.jsx)(V.Clickable, {
    "aria-hidden": !0,
    className: l()(d.scrollerButton, C),
    onClick: e,
    children: (0, t.jsx)(o.Z, {
      className: d.scrollerButtonArrow,
      direction: a
    })
  })
};
class E extends i.Component {
  static getDerivedStateFromProps(L, e) {
    return e.prevWidth !== L.width ? {
      tileIndex: 0,
      prevWidth: L.width,
      lastArrowDirection: 0
    } : null
  }
  getMaxOffset() {
    let {
      width: L
    } = this.props, {
      scrollerWidth: e
    } = this.state;
    return Math.max(Math.floor(e - L), 0)
  }
  getSideOffset() {
    let {
      tileWidth: L,
      tileMargin: e
    } = this.props, C = this.getMaxOffset(), a = L + e;
    return C - Math.floor(C / a) * a
  }
  getMaxIndex() {
    let {
      tileWidth: L,
      tileMargin: e
    } = this.props;
    return Math.round(this.getMaxOffset() / (L + e))
  }
  getOffset(L, e) {
    let {
      tileWidth: C,
      tileMargin: a
    } = this.props;
    return Math.min(L * (C + a) + (1 === e ? this.getSideOffset() : 0), this.getMaxOffset())
  }
  componentDidMount() {
    this.setScrollerWidth()
  }
  componentDidUpdate(L, e) {
    if (e.tileIndex !== this.state.tileIndex || e.lastArrowDirection !== this.state.lastArrowDirection) {
      var C, a, s;
      let {
        tileIndex: L
      } = this.state, e = this.getOffset(this.state.tileIndex, this.state.lastArrowDirection);
      null === (C = this.advancedScrollerRef.current) || void 0 === C || C.scrollTo({
        to: e,
        animate: !0
      }), null === (a = (s = this.props).onScroll) || void 0 === a || a.call(s, {
        tileIndex: L
      })
    }
    L.width !== this.props.width && this.setScrollerWidth()
  }
  render() {
    let {
      tileIndex: L,
      lastArrowDirection: e
    } = this.state, {
      header: C,
      headerId: a,
      subHeader: s,
      headerContainerClassName: i,
      scrollContainerClassName: n
    } = this.props, r = this.getMaxOffset();
    return (0, t.jsxs)("div", {
      children: [(0, t.jsxs)("div", {
        className: l()(d.headerContainer, i),
        children: [(0, t.jsxs)("div", {
          children: [(0, t.jsx)(V.Heading, {
            id: a,
            variant: "heading-lg/semibold",
            children: C
          }), null == s ? null : (0, t.jsx)(V.Text, {
            variant: "text-sm/medium",
            className: d.subheader,
            children: s
          })]
        }), r > 0 ? (0, t.jsxs)("div", {
          className: d.arrowsContainer,
          children: [(0, t.jsx)(Z, {
            direction: o.Z.Directions.LEFT,
            onClick: this.prev,
            className: l()(d.arrowLeft, {
              [d.arrowDisabled]: 0 === L && 0 === e
            })
          }), (0, t.jsx)(Z, {
            direction: o.Z.Directions.RIGHT,
            onClick: this.next,
            className: l()(d.arrowRight, {
              [d.arrowDisabled]: L === this.getMaxIndex() && 1 === e
            })
          })]
        }) : null]
      }), (0, t.jsx)("div", {
        className: l()(d.scrollerContainer, n),
        children: (0, t.jsx)(V.AdvancedScrollerNone, {
          ref: this.advancedScrollerRef,
          orientation: "horizontal",
          className: d.scroller,
          children: (0, t.jsx)("div", {
            className: d.scroller,
            ref: L => {
              this.tileScrollerRef.current = L, this.setScrollerWidth()
            },
            children: this.props.children
          })
        })
      })]
    })
  }
  constructor(...L) {
    super(...L), M(this, "state", {
      tileIndex: 0,
      prevWidth: this.props.width,
      lastArrowDirection: 0,
      scrollerWidth: 0
    }), M(this, "advancedScrollerRef", i.createRef()), M(this, "tileScrollerRef", i.createRef()), M(this, "setScrollerWidth", () => {
      let L = (0, r.findDOMNode)(this.tileScrollerRef.current);
      (0, H.k)(L, HTMLElement) && L.offsetWidth !== this.state.scrollerWidth && this.setState({
        scrollerWidth: L.offsetWidth
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
e.Z = (0, c.Z)(E)
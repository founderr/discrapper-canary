"use strict";
i.r(t), i("47120");
var n, a, l, s, r = i("735250"),
  o = i("470079"),
  c = i("120356"),
  d = i.n(c),
  u = i("392711"),
  h = i.n(u),
  p = i("846519"),
  m = i("481060"),
  f = i("570140"),
  g = i("585483"),
  C = i("996753"),
  _ = i("206895"),
  I = i("259580"),
  x = i("981631"),
  v = i("689938"),
  A = i("382763");

function E(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e
}
let N = {
  JUMP: "jump",
  NEXT: "next",
  PREVIOUS: "previous"
};
(s = n || (n = {})).ARROW = "arrow", s.CARET = "caret";
class T extends(a = o.PureComponent) {
  componentDidMount() {
    g.ComponentDispatch.subscribe(x.ComponentActions.CAROUSEL_PREV, this.handlePrevious), g.ComponentDispatch.subscribe(x.ComponentActions.CAROUSEL_NEXT, this.handleNext)
  }
  componentWillUnmount() {
    g.ComponentDispatch.unsubscribe(x.ComponentActions.CAROUSEL_PREV, this.handlePrevious), g.ComponentDispatch.unsubscribe(x.ComponentActions.CAROUSEL_NEXT, this.handleNext)
  }
  render() {
    let {
      current: e,
      count: t,
      includeHitboxPadding: i,
      arrowClassName: n,
      paginationDotClassName: a,
      paginationDotSelectedClassName: l,
      paginationArrowIconType: s = "arrow"
    } = this.props, o = d()(A.arrowHitbox, {
      [A.arrowHitboxPadding]: i
    }, n);
    return (0, r.jsxs)("div", {
      className: d()(A.controls, this.props.className),
      children: [(0, r.jsx)(m.Button, {
        look: m.Button.Looks.BLANK,
        className: o,
        onClick: this.handlePrevious,
        "aria-label": v.default.Messages.PAGINATION_PREVIOUS,
        children: "caret" === s ? (0, r.jsx)(I.default, {
          className: A.arrow,
          direction: I.default.Directions.LEFT
        }) : (0, r.jsx)(C.default, {
          className: A.arrow,
          direction: C.default.Directions.LEFT
        })
      }), (0, r.jsx)("div", {
        className: A.dots,
        children: h().times(t, t => (0, r.jsx)(m.Button, {
          look: m.Button.Looks.BLANK,
          size: m.Button.Sizes.NONE,
          onClick: () => this.handleDotClick(t),
          className: t === e ? d()(A.dotSelected, l) : d()(A.dotNormal, a),
          "aria-label": v.default.Messages.PAGINATION_SLIDE_LABEL.format({
            pageNumber: t + 1
          })
        }, "dot-".concat(t)))
      }), (0, r.jsx)(m.Button, {
        look: m.Button.Looks.BLANK,
        className: o,
        onClick: this.handleNext,
        "aria-label": v.default.Messages.PAGINATION_NEXT,
        children: "caret" === s ? (0, r.jsx)(I.default, {
          className: A.arrow,
          direction: I.default.Directions.RIGHT
        }) : (0, r.jsx)(C.default, {
          className: A.arrow,
          direction: C.default.Directions.RIGHT
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), E(this, "handleDotClick", e => {
      let {
        onSetItem: t,
        onIntentionalChange: i,
        current: n
      } = this.props;
      null == i || i(n, e, N.JUMP), t(e)
    }), E(this, "handleNext", () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: i
      } = this.props, n = i(1);
      null == e || e(t, n, N.NEXT)
    }), E(this, "handlePrevious", () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: i
      } = this.props, n = i(-1);
      null == e || e(t, n, N.PREVIOUS)
    })
  }
}
E(T, "defaultProps", {
  includeHitboxPadding: !0
});
class R extends(l = o.PureComponent) {
  componentDidMount() {
    f.default.subscribe("WINDOW_FOCUS", this.handleWindowFocusChange), !this.props.initialPaused && !this.state.paused && this.startTimer()
  }
  componentWillUnmount() {
    this.stopTimer(), f.default.unsubscribe("WINDOW_FOCUS", this.handleWindowFocusChange)
  }
  componentDidUpdate(e, t) {
    let i, n, a, l;
    let s = (i = this.props, n = this.state, !i.initialPaused && !n.paused);
    let r = (a = e, l = t, !a.initialPaused && !l.paused);
    s && !r ? this.startTimer() : !s && r && this.stopTimer();
    let {
      items: o
    } = this.props, {
      visibleIndex: c
    } = this.state;
    null == o[c] && this.changeItem(o, 1)
  }
  startTimer() {
    null != this.props.delay && this.timer.start(this.props.delay, this.nextItem)
  }
  stopTimer() {
    null != this.props.delay && this.timer.stop()
  }
  changeItem(e, t) {
    let i = this.state.visibleIndex + t;
    i < 0 ? i = e.length - 1 : i > e.length - 1 && (i = 0);
    let {
      onChangeItem: n
    } = this.props;
    null == n || n(e[i], this.state.visibleIndex, i);
    let a = t > 0 ? _.SlideDirection.LEFT : _.SlideDirection.RIGHT;
    return this.setState({
      visibleIndex: i,
      direction: a
    }), i
  }
  render() {
    let {
      items: e,
      renderItem: t,
      className: i,
      slideAnimatorClassName: n,
      slideAnimatorSpringSettings: a,
      slideAnimatorFadeInOut: l,
      paginationClassName: s,
      paginationArrowClassName: o,
      paginationArrowIconType: c,
      paginationDotClassName: u,
      paginationDotSelectedClassName: h,
      themedPagination: p,
      includeHitboxPadding: m,
      style: f,
      aspectRatio: g,
      children: C
    } = this.props, {
      visibleIndex: I
    } = this.state;
    return (0, r.jsxs)("div", {
      className: A.root,
      children: [(0, r.jsxs)("div", {
        className: d()(A.carouselContainer, i),
        style: f,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: [(0, r.jsx)("div", {
          style: {
            aspectRatio: g
          },
          children: (0, r.jsx)(_.default, {
            className: d()(A.carousel, n),
            step: I,
            direction: this.getCurrentDirection(),
            springSettings: a,
            fadeInOut: l,
            children: t(e[I], I)
          })
        }), e.length > 1 && (0, r.jsx)(T, {
          className: d()(s, p ? A.themedPagination : A.pagination),
          arrowClassName: o,
          includeHitboxPadding: m,
          current: I,
          count: e.length,
          onChangePage: t => this.changeItem(e, t),
          onSetItem: this.handleSetItem,
          onIntentionalChange: this.handleIntentionalChange,
          paginationArrowIconType: c,
          paginationDotClassName: u,
          paginationDotSelectedClassName: h
        })]
      }), null != C && C({
        step: I,
        direction: this.getCurrentDirection()
      })]
    })
  }
  constructor(e) {
    super(e), E(this, "timer", new p.Interval), E(this, "handleWindowFocusChange", e => {
      let {
        focused: t
      } = e;
      this.setState({
        paused: !t
      })
    }), E(this, "getCurrentDirection", () => this.state.direction), E(this, "nextItem", () => {
      let {
        items: e
      } = this.props;
      this.changeItem(e, 1)
    }), E(this, "previousItem", () => {
      let {
        items: e
      } = this.props;
      this.changeItem(e, -1)
    }), E(this, "handleSetItem", e => {
      let {
        visibleIndex: t
      } = this.state, {
        items: i
      } = this.props;
      this.changeItem(i, e - t)
    }), E(this, "handleMouseEnter", () => {
      this.setState({
        paused: !0
      })
    }), E(this, "handleMouseLeave", () => {
      this.setState({
        paused: !1
      })
    }), E(this, "handleIntentionalChange", (e, t, i) => {
      let {
        items: n,
        onIntentionalChange: a
      } = this.props;
      return null == a ? void 0 : a(n[t], e, t, i)
    }), this.state = {
      visibleIndex: !0 === e.randomize ? h().random(0, e.items.length - 1) : 0,
      direction: _.SlideDirection.LEFT,
      paused: !1
    }
  }
}
E(R, "defaultProps", {
  aspectRatio: 16 / 9
}), t.default = R
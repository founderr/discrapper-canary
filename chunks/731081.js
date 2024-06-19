i(47120);
var n, s, a, r, l = i(735250),
  o = i(470079),
  c = i(120356),
  d = i.n(c),
  u = i(392711),
  h = i.n(u),
  m = i(846519),
  p = i(481060),
  _ = i(570140),
  x = i(585483),
  g = i(996753),
  C = i(206895),
  I = i(259580),
  f = i(981631),
  N = i(689938),
  v = i(280827);

function E(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e
}
let T = {
  JUMP: "jump",
  NEXT: "next",
  PREVIOUS: "previous"
};
(r = n || (n = {})).ARROW = "arrow", r.CARET = "caret";
class R extends(s = o.PureComponent) {
  componentDidMount() {
    x.S.subscribe(f.CkL.CAROUSEL_PREV, this.handlePrevious), x.S.subscribe(f.CkL.CAROUSEL_NEXT, this.handleNext)
  }
  componentWillUnmount() {
    x.S.unsubscribe(f.CkL.CAROUSEL_PREV, this.handlePrevious), x.S.unsubscribe(f.CkL.CAROUSEL_NEXT, this.handleNext)
  }
  render() {
    let {
      current: e,
      count: t,
      includeHitboxPadding: i,
      arrowClassName: n,
      paginationDotClassName: s,
      paginationDotSelectedClassName: a,
      paginationArrowIconType: r = "arrow"
    } = this.props, o = d()(v.arrowHitbox, {
      [v.arrowHitboxPadding]: i
    }, n);
    return (0, l.jsxs)("div", {
      className: d()(v.controls, this.props.className),
      children: [(0, l.jsx)(p.Button, {
        look: p.Button.Looks.BLANK,
        className: o,
        onClick: this.handlePrevious,
        "aria-label": N.Z.Messages.PAGINATION_PREVIOUS,
        children: "caret" === r ? (0, l.jsx)(I.Z, {
          className: v.arrow,
          direction: I.Z.Directions.LEFT
        }) : (0, l.jsx)(g.Z, {
          className: v.arrow,
          direction: g.Z.Directions.LEFT
        })
      }), (0, l.jsx)("div", {
        className: v.dots,
        children: h().times(t, t => (0, l.jsx)(p.Button, {
          look: p.Button.Looks.BLANK,
          size: p.Button.Sizes.NONE,
          onClick: () => this.handleDotClick(t),
          className: t === e ? d()(v.dotSelected, a) : d()(v.dotNormal, s),
          "aria-label": N.Z.Messages.PAGINATION_SLIDE_LABEL.format({
            pageNumber: t + 1
          })
        }, "dot-".concat(t)))
      }), (0, l.jsx)(p.Button, {
        look: p.Button.Looks.BLANK,
        className: o,
        onClick: this.handleNext,
        "aria-label": N.Z.Messages.PAGINATION_NEXT,
        children: "caret" === r ? (0, l.jsx)(I.Z, {
          className: v.arrow,
          direction: I.Z.Directions.RIGHT
        }) : (0, l.jsx)(g.Z, {
          className: v.arrow,
          direction: g.Z.Directions.RIGHT
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
      null == i || i(n, e, T.JUMP), t(e)
    }), E(this, "handleNext", () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: i
      } = this.props, n = i(1);
      null == e || e(t, n, T.NEXT)
    }), E(this, "handlePrevious", () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: i
      } = this.props, n = i(-1);
      null == e || e(t, n, T.PREVIOUS)
    })
  }
}
E(R, "defaultProps", {
  includeHitboxPadding: !0
});
class A extends(a = o.PureComponent) {
  componentDidMount() {
    _.Z.subscribe("WINDOW_FOCUS", this.handleWindowFocusChange), !this.props.initialPaused && !this.state.paused && this.startTimer()
  }
  componentWillUnmount() {
    this.stopTimer(), _.Z.unsubscribe("WINDOW_FOCUS", this.handleWindowFocusChange)
  }
  componentDidUpdate(e, t) {
    let i, n, s, a;
    let r = (i = this.props, n = this.state, !i.initialPaused && !n.paused);
    let l = (s = e, a = t, !s.initialPaused && !a.paused);
    r && !l ? this.startTimer() : !r && l && this.stopTimer();
    let {
      items: o
    } = this.props, {
      visibleIndex: c
    } = this.state;
    null == o[c] && this.changeItem(o, 1)
  }
  startTimer() {
    if (null != this.props.delay) this.timer.start(this.props.delay, this.nextItem)
  }
  stopTimer() {
    if (null != this.props.delay) this.timer.stop()
  }
  changeItem(e, t) {
    let i = this.state.visibleIndex + t;
    i < 0 ? i = e.length - 1 : i > e.length - 1 && (i = 0);
    let {
      onChangeItem: n
    } = this.props;
    null == n || n(e[i], this.state.visibleIndex, i);
    let s = t > 0 ? C.n.LEFT : C.n.RIGHT;
    return this.setState({
      visibleIndex: i,
      direction: s
    }), i
  }
  render() {
    let {
      items: e,
      renderItem: t,
      className: i,
      slideAnimatorClassName: n,
      slideAnimatorSpringSettings: s,
      slideAnimatorFadeInOut: a,
      paginationClassName: r,
      paginationArrowClassName: o,
      paginationArrowIconType: c,
      paginationDotClassName: u,
      paginationDotSelectedClassName: h,
      themedPagination: m,
      includeHitboxPadding: p,
      style: _,
      aspectRatio: x,
      children: g
    } = this.props, {
      visibleIndex: I
    } = this.state;
    return (0, l.jsxs)("div", {
      className: v.root,
      children: [(0, l.jsxs)("div", {
        className: d()(v.carouselContainer, i),
        style: _,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: [(0, l.jsx)("div", {
          style: {
            aspectRatio: x
          },
          children: (0, l.jsx)(C.Z, {
            className: d()(v.carousel, n),
            step: I,
            direction: this.getCurrentDirection(),
            springSettings: s,
            fadeInOut: a,
            children: t(e[I], I)
          })
        }), e.length > 1 && (0, l.jsx)(R, {
          className: d()(r, m ? v.themedPagination : v.pagination),
          arrowClassName: o,
          includeHitboxPadding: p,
          current: I,
          count: e.length,
          onChangePage: t => this.changeItem(e, t),
          onSetItem: this.handleSetItem,
          onIntentionalChange: this.handleIntentionalChange,
          paginationArrowIconType: c,
          paginationDotClassName: u,
          paginationDotSelectedClassName: h
        })]
      }), null != g && g({
        step: I,
        direction: this.getCurrentDirection()
      })]
    })
  }
  constructor(e) {
    super(e), E(this, "timer", new m.Xp), E(this, "handleWindowFocusChange", e => {
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
        onIntentionalChange: s
      } = this.props;
      return null == s ? void 0 : s(n[t], e, t, i)
    }), this.state = {
      visibleIndex: !0 === e.randomize ? h().random(0, e.items.length - 1) : 0,
      direction: C.n.LEFT,
      paused: !1
    }
  }
}
E(A, "defaultProps", {
  aspectRatio: 16 / 9
}), t.Z = A
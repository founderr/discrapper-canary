"use strict";
i.r(t), i.d(t, {
  PaginationArrowIconType: function() {
    return n
  }
}), i("47120");
var n, a, l, s, r = i("735250"),
  o = i("470079"),
  c = i("120356"),
  d = i.n(c),
  u = i("392711"),
  h = i.n(u),
  p = i("846519"),
  f = i("481060"),
  m = i("570140"),
  g = i("585483"),
  C = i("996753"),
  x = i("206895"),
  _ = i("259580"),
  I = i("981631"),
  v = i("689938"),
  A = i("382763");

function N(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e
}
let E = {
  JUMP: "jump",
  NEXT: "next",
  PREVIOUS: "previous"
};
(s = n || (n = {})).ARROW = "arrow", s.CARET = "caret";
class T extends(a = o.PureComponent) {
  componentDidMount() {
    g.ComponentDispatch.subscribe(I.ComponentActions.CAROUSEL_PREV, this.handlePrevious), g.ComponentDispatch.subscribe(I.ComponentActions.CAROUSEL_NEXT, this.handleNext)
  }
  componentWillUnmount() {
    g.ComponentDispatch.unsubscribe(I.ComponentActions.CAROUSEL_PREV, this.handlePrevious), g.ComponentDispatch.unsubscribe(I.ComponentActions.CAROUSEL_NEXT, this.handleNext)
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
      children: [(0, r.jsx)(f.Button, {
        look: f.Button.Looks.BLANK,
        className: o,
        onClick: this.handlePrevious,
        "aria-label": v.default.Messages.PAGINATION_PREVIOUS,
        children: "caret" === s ? (0, r.jsx)(_.default, {
          className: A.arrow,
          direction: _.default.Directions.LEFT
        }) : (0, r.jsx)(C.default, {
          className: A.arrow,
          direction: C.default.Directions.LEFT
        })
      }), (0, r.jsx)("div", {
        className: A.dots,
        children: h().times(t, t => (0, r.jsx)(f.Button, {
          look: f.Button.Looks.BLANK,
          size: f.Button.Sizes.NONE,
          onClick: () => this.handleDotClick(t),
          className: t === e ? d()(A.dotSelected, l) : d()(A.dotNormal, a),
          "aria-label": v.default.Messages.PAGINATION_SLIDE_LABEL.format({
            pageNumber: t + 1
          })
        }, "dot-".concat(t)))
      }), (0, r.jsx)(f.Button, {
        look: f.Button.Looks.BLANK,
        className: o,
        onClick: this.handleNext,
        "aria-label": v.default.Messages.PAGINATION_NEXT,
        children: "caret" === s ? (0, r.jsx)(_.default, {
          className: A.arrow,
          direction: _.default.Directions.RIGHT
        }) : (0, r.jsx)(C.default, {
          className: A.arrow,
          direction: C.default.Directions.RIGHT
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), N(this, "handleDotClick", e => {
      let {
        onSetItem: t,
        onIntentionalChange: i,
        current: n
      } = this.props;
      null == i || i(n, e, E.JUMP), t(e)
    }), N(this, "handleNext", () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: i
      } = this.props, n = i(1);
      null == e || e(t, n, E.NEXT)
    }), N(this, "handlePrevious", () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: i
      } = this.props, n = i(-1);
      null == e || e(t, n, E.PREVIOUS)
    })
  }
}
N(T, "defaultProps", {
  includeHitboxPadding: !0
});
class R extends(l = o.PureComponent) {
  componentDidMount() {
    m.default.subscribe("WINDOW_FOCUS", this.handleWindowFocusChange), !this.props.initialPaused && !this.state.paused && this.startTimer()
  }
  componentWillUnmount() {
    this.stopTimer(), m.default.unsubscribe("WINDOW_FOCUS", this.handleWindowFocusChange)
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
    let a = t > 0 ? x.SlideDirection.LEFT : x.SlideDirection.RIGHT;
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
      includeHitboxPadding: f,
      style: m,
      aspectRatio: g,
      children: C
    } = this.props, {
      visibleIndex: _
    } = this.state;
    return (0, r.jsxs)("div", {
      className: A.root,
      children: [(0, r.jsxs)("div", {
        className: d()(A.carouselContainer, i),
        style: m,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: [(0, r.jsx)("div", {
          style: {
            aspectRatio: g
          },
          children: (0, r.jsx)(x.default, {
            className: d()(A.carousel, n),
            step: _,
            direction: this.getCurrentDirection(),
            springSettings: a,
            fadeInOut: l,
            children: t(e[_], _)
          })
        }), e.length > 1 && (0, r.jsx)(T, {
          className: d()(s, p ? A.themedPagination : A.pagination),
          arrowClassName: o,
          includeHitboxPadding: f,
          current: _,
          count: e.length,
          onChangePage: t => this.changeItem(e, t),
          onSetItem: this.handleSetItem,
          onIntentionalChange: this.handleIntentionalChange,
          paginationArrowIconType: c,
          paginationDotClassName: u,
          paginationDotSelectedClassName: h
        })]
      }), null != C && C({
        step: _,
        direction: this.getCurrentDirection()
      })]
    })
  }
  constructor(e) {
    super(e), N(this, "timer", new p.Interval), N(this, "handleWindowFocusChange", e => {
      let {
        focused: t
      } = e;
      this.setState({
        paused: !t
      })
    }), N(this, "getCurrentDirection", () => this.state.direction), N(this, "nextItem", () => {
      let {
        items: e
      } = this.props;
      this.changeItem(e, 1)
    }), N(this, "previousItem", () => {
      let {
        items: e
      } = this.props;
      this.changeItem(e, -1)
    }), N(this, "handleSetItem", e => {
      let {
        visibleIndex: t
      } = this.state, {
        items: i
      } = this.props;
      this.changeItem(i, e - t)
    }), N(this, "handleMouseEnter", () => {
      this.setState({
        paused: !0
      })
    }), N(this, "handleMouseLeave", () => {
      this.setState({
        paused: !1
      })
    }), N(this, "handleIntentionalChange", (e, t, i) => {
      let {
        items: n,
        onIntentionalChange: a
      } = this.props;
      return null == a ? void 0 : a(n[t], e, t, i)
    }), this.state = {
      visibleIndex: !0 === e.randomize ? h().random(0, e.items.length - 1) : 0,
      direction: x.SlideDirection.LEFT,
      paused: !1
    }
  }
}
N(R, "defaultProps", {
  aspectRatio: 16 / 9
}), t.default = R
"use strict";
i.r(t), i("47120");
var n, a, l = i("735250"),
  s = i("470079"),
  r = i("120356"),
  o = i.n(r),
  c = i("392711"),
  d = i.n(c),
  u = i("846519"),
  h = i("481060"),
  p = i("585483"),
  f = i("996753"),
  m = i("206895"),
  g = i("981631"),
  x = i("689938"),
  C = i("382763");

function _(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e
}
let I = {
  JUMP: "jump",
  NEXT: "next",
  PREVIOUS: "previous"
};
class v extends(n = s.PureComponent) {
  componentDidMount() {
    p.ComponentDispatch.subscribe(g.ComponentActions.CAROUSEL_PREV, this.handlePrevious), p.ComponentDispatch.subscribe(g.ComponentActions.CAROUSEL_NEXT, this.handleNext)
  }
  componentWillUnmount() {
    p.ComponentDispatch.unsubscribe(g.ComponentActions.CAROUSEL_PREV, this.handlePrevious), p.ComponentDispatch.unsubscribe(g.ComponentActions.CAROUSEL_NEXT, this.handleNext)
  }
  render() {
    let {
      current: e,
      count: t,
      includeHitboxPadding: i,
      arrowClassName: n
    } = this.props, a = o()(C.arrowHitbox, n, {
      [C.arrowHitboxPadding]: i
    });
    return (0, l.jsxs)("div", {
      className: o()(C.controls, this.props.className),
      children: [(0, l.jsx)(h.Button, {
        look: h.Button.Looks.BLANK,
        className: a,
        onClick: this.handlePrevious,
        "aria-label": x.default.Messages.PAGINATION_PREVIOUS,
        children: (0, l.jsx)(f.default, {
          className: C.arrow,
          direction: f.default.Directions.LEFT
        })
      }), (0, l.jsx)("div", {
        className: C.dots,
        children: d().times(t, t => (0, l.jsx)(h.Button, {
          look: h.Button.Looks.BLANK,
          size: h.Button.Sizes.NONE,
          onClick: () => this.handleDotClick(t),
          className: t === e ? C.dotSelected : C.dotNormal,
          "aria-label": x.default.Messages.PAGINATION_SLIDE_LABEL.format({
            pageNumber: t + 1
          })
        }, "dot-".concat(t)))
      }), (0, l.jsx)(h.Button, {
        look: h.Button.Looks.BLANK,
        className: a,
        onClick: this.handleNext,
        "aria-label": x.default.Messages.PAGINATION_NEXT,
        children: (0, l.jsx)(f.default, {
          className: C.arrow,
          direction: f.default.Directions.RIGHT
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), _(this, "handleDotClick", e => {
      let {
        onSetItem: t,
        onIntentionalChange: i,
        current: n
      } = this.props;
      null == i || i(n, e, I.JUMP), t(e)
    }), _(this, "handleNext", () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: i
      } = this.props, n = i(1);
      null == e || e(t, n, I.NEXT)
    }), _(this, "handlePrevious", () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: i
      } = this.props, n = i(-1);
      null == e || e(t, n, I.PREVIOUS)
    })
  }
}
_(v, "defaultProps", {
  includeHitboxPadding: !0
});
class A extends(a = s.PureComponent) {
  componentDidMount() {
    !this.props.paused && !this.state.hovered && this.startTimer()
  }
  componentWillUnmount() {
    this.stopTimer()
  }
  componentDidUpdate(e, t) {
    let i, n, a, l;
    let s = (i = this.props, n = this.state, !i.paused && !n.hovered);
    let r = (a = e, l = t, !a.paused && !l.hovered);
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
    let a = t > 0 ? m.SlideDirection.LEFT : m.SlideDirection.RIGHT;
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
      paginationClassName: n,
      paginationArrowClassName: a,
      themedPagination: s,
      includeHitboxPadding: r,
      style: c,
      aspectRatio: d
    } = this.props, {
      visibleIndex: u
    } = this.state;
    return (0, l.jsxs)("div", {
      className: o()(C.root, i),
      style: c,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      children: [(0, l.jsx)("div", {
        style: {
          aspectRatio: d
        },
        children: (0, l.jsx)(m.default, {
          step: u,
          direction: this.getCurrentDirection(),
          className: C.carousel,
          children: t(e[u], u)
        })
      }), e.length > 1 && (0, l.jsx)(v, {
        className: o()(n, s ? C.themedPagination : C.pagination),
        arrowClassName: a,
        includeHitboxPadding: r,
        current: u,
        count: e.length,
        onChangePage: t => this.changeItem(e, t),
        onSetItem: this.handleSetItem,
        onIntentionalChange: this.handleIntentionalChange
      })]
    })
  }
  constructor(e) {
    super(e), _(this, "timer", new u.Interval), _(this, "getCurrentDirection", () => this.state.direction), _(this, "nextItem", () => {
      let {
        items: e
      } = this.props;
      this.changeItem(e, 1)
    }), _(this, "previousItem", () => {
      let {
        items: e
      } = this.props;
      this.changeItem(e, -1)
    }), _(this, "handleSetItem", e => {
      let {
        visibleIndex: t
      } = this.state, {
        items: i
      } = this.props;
      this.changeItem(i, e - t)
    }), _(this, "handleMouseEnter", () => {
      this.setState({
        hovered: !0
      })
    }), _(this, "handleMouseLeave", () => {
      this.setState({
        hovered: !1
      })
    }), _(this, "handleIntentionalChange", (e, t, i) => {
      let {
        items: n,
        onIntentionalChange: a
      } = this.props;
      return null == a ? void 0 : a(n[t], e, t, i)
    }), this.state = {
      visibleIndex: !0 === e.randomize ? d().random(0, e.items.length - 1) : 0,
      direction: m.SlideDirection.LEFT,
      hovered: !1
    }
  }
}
_(A, "defaultProps", {
  aspectRatio: 16 / 9
}), t.default = A
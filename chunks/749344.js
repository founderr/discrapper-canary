"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("222007");
var n = s("37983"),
  a = s("884691"),
  i = s("414456"),
  r = s.n(i),
  l = s("917351"),
  o = s.n(l),
  d = s("862337"),
  u = s("77078"),
  h = s("659500"),
  c = s("137215"),
  p = s("16594"),
  m = s("49111"),
  g = s("782340"),
  C = s("592994");
let f = {
  JUMP: "jump",
  NEXT: "next",
  PREVIOUS: "previous"
};
class I extends a.PureComponent {
  componentDidMount() {
    h.ComponentDispatch.subscribe(m.ComponentActions.CAROUSEL_PREV, this.handlePrevious), h.ComponentDispatch.subscribe(m.ComponentActions.CAROUSEL_NEXT, this.handleNext)
  }
  componentWillUnmount() {
    h.ComponentDispatch.unsubscribe(m.ComponentActions.CAROUSEL_PREV, this.handlePrevious), h.ComponentDispatch.unsubscribe(m.ComponentActions.CAROUSEL_NEXT, this.handleNext)
  }
  render() {
    let {
      current: e,
      count: t,
      includeHitboxPadding: s,
      arrowClassName: a
    } = this.props, i = r(C.arrowHitbox, a, {
      [C.arrowHitboxPadding]: s
    });
    return (0, n.jsxs)("div", {
      className: r(C.controls, this.props.className),
      children: [(0, n.jsx)(u.Button, {
        look: u.Button.Looks.BLANK,
        className: i,
        onClick: this.handlePrevious,
        "aria-label": g.default.Messages.PAGINATION_PREVIOUS,
        children: (0, n.jsx)(c.default, {
          className: C.arrow,
          direction: c.default.Directions.LEFT
        })
      }), (0, n.jsx)("div", {
        className: C.dots,
        children: o.times(t, t => (0, n.jsx)(u.Button, {
          look: u.Button.Looks.BLANK,
          size: u.Button.Sizes.NONE,
          onClick: () => this.handleDotClick(t),
          className: t === e ? C.dotSelected : C.dotNormal,
          "aria-label": g.default.Messages.PAGINATION_SLIDE_LABEL.format({
            pageNumber: t + 1
          })
        }, "dot-".concat(t)))
      }), (0, n.jsx)(u.Button, {
        look: u.Button.Looks.BLANK,
        className: i,
        onClick: this.handleNext,
        "aria-label": g.default.Messages.PAGINATION_NEXT,
        children: (0, n.jsx)(c.default, {
          className: C.arrow,
          direction: c.default.Directions.RIGHT
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), this.handleDotClick = e => {
      let {
        onSetItem: t,
        onIntentionalChange: s,
        current: n
      } = this.props;
      null == s || s(n, e, f.JUMP), t(e)
    }, this.handleNext = () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: s
      } = this.props, n = s(1);
      null == e || e(t, n, f.NEXT)
    }, this.handlePrevious = () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: s
      } = this.props, n = s(-1);
      null == e || e(t, n, f.PREVIOUS)
    }
  }
}
I.defaultProps = {
  includeHitboxPadding: !0
};
class x extends a.PureComponent {
  componentDidMount() {
    !this.props.paused && !this.state.hovered && this.startTimer()
  }
  componentWillUnmount() {
    this.stopTimer()
  }
  componentDidUpdate(e, t) {
    var s, n, a, i;
    let r = (s = this.props, n = this.state, !s.paused && !n.hovered);
    let l = (a = e, i = t, !a.paused && !i.hovered);
    r && !l ? this.startTimer() : !r && l && this.stopTimer();
    let {
      items: o
    } = this.props, {
      visibleIndex: d
    } = this.state;
    null == o[d] && this.changeItem(o, 1)
  }
  startTimer() {
    null != this.props.delay && this.timer.start(this.props.delay, this.nextItem)
  }
  stopTimer() {
    null != this.props.delay && this.timer.stop()
  }
  changeItem(e, t) {
    let s = this.state.visibleIndex + t;
    s < 0 ? s = e.length - 1 : s > e.length - 1 && (s = 0);
    let {
      onChangeItem: n
    } = this.props;
    null == n || n(e[s], this.state.visibleIndex, s);
    let a = t > 0 ? p.SlideDirection.LEFT : p.SlideDirection.RIGHT;
    return this.setState({
      visibleIndex: s,
      direction: a
    }), s
  }
  render() {
    let {
      items: e,
      renderItem: t,
      className: s,
      paginationClassName: a,
      paginationArrowClassName: i,
      themedPagination: l,
      includeHitboxPadding: o,
      style: d,
      aspectRatio: u
    } = this.props, {
      visibleIndex: h
    } = this.state;
    return (0, n.jsxs)("div", {
      className: r(C.root, s),
      style: d,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      children: [(0, n.jsx)("div", {
        style: {
          aspectRatio: u
        },
        children: (0, n.jsx)(p.default, {
          step: h,
          direction: this.getCurrentDirection(),
          className: C.carousel,
          children: t(e[h], h)
        })
      }), e.length > 1 && (0, n.jsx)(I, {
        className: r(a, l ? C.themedPagination : C.pagination),
        arrowClassName: i,
        includeHitboxPadding: o,
        current: h,
        count: e.length,
        onChangePage: t => this.changeItem(e, t),
        onSetItem: this.handleSetItem,
        onIntentionalChange: this.handleIntentionalChange
      })]
    })
  }
  constructor(e) {
    super(e), this.timer = new d.Interval, this.getCurrentDirection = () => this.state.direction, this.nextItem = () => {
      let {
        items: e
      } = this.props;
      this.changeItem(e, 1)
    }, this.previousItem = () => {
      let {
        items: e
      } = this.props;
      this.changeItem(e, -1)
    }, this.handleSetItem = e => {
      let {
        visibleIndex: t
      } = this.state, {
        items: s
      } = this.props;
      this.changeItem(s, e - t)
    }, this.handleMouseEnter = () => {
      this.setState({
        hovered: !0
      })
    }, this.handleMouseLeave = () => {
      this.setState({
        hovered: !1
      })
    }, this.handleIntentionalChange = (e, t, s) => {
      let {
        items: n,
        onIntentionalChange: a
      } = this.props;
      return null == a ? void 0 : a(n[t], e, t, s)
    }, this.state = {
      visibleIndex: !0 === e.randomize ? o.random(0, e.items.length - 1) : 0,
      direction: p.SlideDirection.LEFT,
      hovered: !1
    }
  }
}
x.defaultProps = {
  aspectRatio: 16 / 9
};
var E = x
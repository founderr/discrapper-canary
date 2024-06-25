n.d(t, {
  ZP: function() {
    return T
  },
  cy: function() {
    return i
  },
  iu: function() {
    return l
  }
}), n(47120);
var l, i, s, a, r, o = n(735250),
  c = n(470079),
  u = n(120356),
  d = n.n(u),
  h = n(780384),
  m = n(481060),
  E = n(626135),
  p = n(792125),
  g = n(285952),
  f = n(981631),
  C = n(689938),
  _ = n(634642);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(a = l || (l = {})).CENTER = "center", a.LEFT = "left", (r = i || (i = {})).TOP = "top", r.MIDDLE = "middle";
class x extends c.PureComponent {
  componentDidMount() {
    let {
      uniqueId: e
    } = this.props;
    E.default.track(f.rMx.SHOW_TUTORIAL, {
      tutorial: e
    })
  }
  componentWillUnmount() {
    E.default.track(f.rMx.CLOSE_TUTORIAL, {
      tutorial: this.props.uniqueId,
      acknowledged: this.state.confirmed
    })
  }
  render() {
    let {
      renderMedia: e,
      textAlign: t,
      isLongText: n,
      title: l,
      body: i,
      className: s,
      forceTheme: a,
      onClickSkipAll: r
    } = this.props, c = "left" === t || n, u = "center" === t || !c;
    return (0, o.jsxs)(m.Dialog, {
      className: d()(_.popoutRoot, s),
      children: [null != e && (0, o.jsx)(g.Z, {
        className: _.mediaContainer,
        justify: c ? g.Z.Justify.START : g.Z.Justify.CENTER,
        children: e()
      }), (0, o.jsx)(m.H, {
        className: d()({
          [_.titleCenter]: u,
          [_.titleLeft]: c
        }),
        children: l
      }), (0, o.jsx)("string" == typeof i ? "p" : "div", {
        className: d()({
          [_.bodyCenter]: u,
          [_.bodyLeft]: c
        }),
        children: i
      }), (0, o.jsxs)(g.Z, {
        className: _.buttonContainer,
        justify: c ? g.Z.Justify.BETWEEN : g.Z.Justify.CENTER,
        children: [(0, o.jsx)(m.Button, {
          size: m.ButtonSizes.SMALL,
          onClick: this.handleDismiss,
          children: C.Z.Messages.TUTORIAL_CLOSE
        }), (0, o.jsx)(m.Button, {
          size: m.ButtonSizes.SMALL,
          look: m.Button.Looks.BLANK,
          onClick: r,
          color: (0, h.ap)(a) ? m.Button.Colors.PRIMARY : m.Button.Colors.WHITE,
          className: c ? _.buttonSkipLeftAlign : _.buttonSkipCenterAlign,
          children: C.Z.Messages.SKIP_ALL_TIPS
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), I(this, "state", {
      confirmed: !1
    }), I(this, "handleDismiss", () => {
      let {
        onClickComplete: e
      } = this.props;
      this.setState({
        confirmed: !0
      }, () => null == e ? void 0 : e())
    })
  }
}
class T extends(s = c.PureComponent) {
  render() {
    let {
      renderMedia: e,
      textAlign: t,
      onComplete: n,
      onSkipAll: l,
      isLongText: i,
      title: s,
      body: a,
      children: r,
      spacing: c,
      forceTheme: u,
      ...d
    } = this.props, h = "top" === d.position || "bottom" === d.position ? "center" : "top";
    return (0, o.jsx)(m.Popout, {
      ...d,
      align: h,
      spacing: null != c ? c : 0,
      renderPopout: this.renderPopoutContent,
      nudgeAlignIntoViewport: !0,
      children: r
    })
  }
  constructor(...e) {
    super(...e), I(this, "onClickComplete", e => {
      e(), this.props.onComplete()
    }), I(this, "onClickSkipAll", e => {
      let {
        onSkipAll: t,
        uniqueId: n
      } = this.props;
      e(), t(), E.default.track(f.rMx.DISMISS_ALL_TUTORIALS, {
        tutorial: n
      })
    }), I(this, "renderPopoutContent", e => {
      let {
        closePopout: t,
        position: n
      } = e, {
        forceTheme: l,
        isLongText: i,
        arrowAlignment: s,
        renderMedia: a
      } = this.props, r = null != a;
      return (0, o.jsx)(x, {
        ...this.props,
        className: d()({
          [_.bottom]: "bottom" === n,
          [_.contentNarrowNoMedia]: !i && !r,
          [_.contentNarrowWithMedia]: !i && r,
          [_.contentWideNoMedia]: i && !r,
          [_.contentWideWithMedia]: i && r,
          [_.right]: "right" === n,
          [_.top]: "top" === n,
          [_.left]: "left" === n,
          [_.arrowAlignmentTop]: "top" === s,
          [_.arrowAlignmentMiddle]: "middle" === s,
          "force-theme": null != l
        }, (0, p.Q)(l)),
        onClickComplete: () => this.onClickComplete(t),
        onClickSkipAll: () => this.onClickSkipAll(t)
      })
    })
  }
}
I(T, "TextAlignments", l), I(T, "defaultProps", {
  textAlign: "left"
})
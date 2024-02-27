"use strict";
n.r(t), n.d(t, {
  TextAlignments: function() {
    return s
  },
  ArrowAlignments: function() {
    return l
  },
  default: function() {
    return i
  }
}), n("222007");
var a, s, l, i, r, o, u = n("37983"),
  d = n("884691"),
  c = n("414456"),
  f = n.n(c),
  h = n("819855"),
  C = n("77078"),
  p = n("599110"),
  E = n("439932"),
  m = n("145131"),
  g = n("49111"),
  _ = n("782340"),
  S = n("778548");
(r = s || (s = {})).CENTER = "center", r.LEFT = "left", (o = l || (l = {})).TOP = "top", o.MIDDLE = "middle";
class T extends d.PureComponent {
  componentDidMount() {
    let {
      uniqueId: e
    } = this.props;
    p.default.track(g.AnalyticEvents.SHOW_TUTORIAL, {
      tutorial: e
    })
  }
  componentWillUnmount() {
    p.default.track(g.AnalyticEvents.CLOSE_TUTORIAL, {
      tutorial: this.props.uniqueId,
      acknowledged: this.state.confirmed
    })
  }
  render() {
    let {
      renderMedia: e,
      textAlign: t,
      isLongText: n,
      title: a,
      body: s,
      className: l,
      forceTheme: i,
      onClickSkipAll: r
    } = this.props, o = "left" === t || n, d = "center" === t || !o;
    return (0, u.jsxs)(C.Dialog, {
      className: f(S.popoutRoot, l),
      children: [null != e && (0, u.jsx)(m.default, {
        className: S.mediaContainer,
        justify: o ? m.default.Justify.START : m.default.Justify.CENTER,
        children: e()
      }), (0, u.jsx)(C.H, {
        className: f({
          [S.titleCenter]: d,
          [S.titleLeft]: o
        }),
        children: a
      }), (0, u.jsx)("string" == typeof s ? "p" : "div", {
        className: f({
          [S.bodyCenter]: d,
          [S.bodyLeft]: o
        }),
        children: s
      }), (0, u.jsxs)(m.default, {
        className: S.buttonContainer,
        justify: o ? m.default.Justify.BETWEEN : m.default.Justify.CENTER,
        children: [(0, u.jsx)(C.Button, {
          size: C.ButtonSizes.SMALL,
          onClick: this.handleDismiss,
          children: _.default.Messages.TUTORIAL_CLOSE
        }), (0, u.jsx)(C.Button, {
          size: C.ButtonSizes.SMALL,
          look: C.Button.Looks.BLANK,
          onClick: r,
          color: (0, h.isThemeLight)(i) ? C.Button.Colors.PRIMARY : C.Button.Colors.WHITE,
          className: o ? S.buttonSkipLeftAlign : S.buttonSkipCenterAlign,
          children: _.default.Messages.SKIP_ALL_TIPS
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      confirmed: !1
    }, this.handleDismiss = () => {
      let {
        onClickComplete: e
      } = this.props;
      this.setState({
        confirmed: !0
      }, () => null == e ? void 0 : e())
    }
  }
}(a = class extends d.PureComponent {
  render() {
    let {
      renderMedia: e,
      textAlign: t,
      onComplete: n,
      onSkipAll: a,
      isLongText: s,
      title: l,
      body: i,
      children: r,
      spacing: o,
      forceTheme: d,
      ...c
    } = this.props, f = "top" === c.position || "bottom" === c.position ? "center" : "top";
    return (0, u.jsx)(C.Popout, {
      ...c,
      align: f,
      spacing: null != o ? o : 0,
      renderPopout: this.renderPopoutContent,
      nudgeAlignIntoViewport: !0,
      children: r
    })
  }
  constructor(...e) {
    super(...e), this.onClickComplete = e => {
      e(), this.props.onComplete()
    }, this.onClickSkipAll = e => {
      let {
        onSkipAll: t,
        uniqueId: n
      } = this.props;
      e(), t(), p.default.track(g.AnalyticEvents.DISMISS_ALL_TUTORIALS, {
        tutorial: n
      })
    }, this.renderPopoutContent = e => {
      let {
        closePopout: t,
        position: n
      } = e, {
        forceTheme: a,
        isLongText: s,
        arrowAlignment: l,
        renderMedia: i
      } = this.props, r = null != i;
      return (0, u.jsx)(T, {
        ...this.props,
        className: f({
          [S.bottom]: "bottom" === n,
          [S.contentNarrowNoMedia]: !s && !r,
          [S.contentNarrowWithMedia]: !s && r,
          [S.contentWideNoMedia]: s && !r,
          [S.contentWideWithMedia]: s && r,
          [S.right]: "right" === n,
          [S.top]: "top" === n,
          [S.left]: "left" === n,
          [S.arrowAlignmentTop]: "top" === l,
          [S.arrowAlignmentMiddle]: "middle" === l,
          "force-theme": null != a
        }, (0, E.getThemeClass)(a)),
        onClickComplete: () => this.onClickComplete(t),
        onClickSkipAll: () => this.onClickSkipAll(t)
      })
    }
  }
}).TextAlignments = s, a.defaultProps = {
  textAlign: "left"
}, i = a
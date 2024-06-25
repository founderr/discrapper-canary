n.d(t, {
  V: function() {
    return T
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(512722),
  o = n.n(r),
  c = n(699581),
  u = n(374470),
  d = n(442837),
  h = n(481060),
  m = n(260300),
  E = n(819640),
  p = n(451478),
  g = n(486458),
  f = n(21825),
  C = n(232495),
  _ = n(10401),
  I = n(427389);

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class T extends i.PureComponent {
  componentDidMount() {
    this.updateCache()
  }
  componentDidUpdate(e) {
    let {
      tutorialId: t,
      origin: {
        x: n,
        y: l
      },
      targetWidth: i,
      targetHeight: s,
      position: a,
      offset: r
    } = e;
    (this.props.tutorialId !== t || this.props.origin.x !== n || this.props.origin.y !== l || this.props.targetWidth !== i || this.props.targetHeight !== s || this.props.position !== a || this.props.offset.x !== r.x || this.props.offset.y !== r.y) && this.updateCache()
  }
  updateCache() {
    var e, t;
    let n = (0, c.findDOMNode)(this);
    if (null == n || !(0, u.k)(n, HTMLElement)) return;
    let {
      offsetWidth: l,
      offsetHeight: i
    } = n, s = {
      offsetX: (this.props.targetWidth - l) / 2,
      offsetY: (this.props.targetHeight - i) / 2
    };
    switch (this.props.position) {
      case "left":
        s.offsetX = -l;
        break;
      case "right":
        s.offsetX = this.props.targetWidth;
        break;
      case "bottom":
        s.offsetY = this.props.targetHeight;
        break;
      default:
        s.offsetY = -i
    }
    s.offsetX += null !== (e = this.props.offset.x) && void 0 !== e ? e : 0, s.offsetY += null !== (t = this.props.offset.y) && void 0 !== t ? t : 0, this.setState(s)
  }
  handleSkipTips() {
    m.Z.suppressAll()
  }
  getTutorialPopoutText() {
    let {
      tutorialId: e
    } = this.props;
    return (0, C.k)(e)
  }
  render() {
    let {
      tutorialId: e,
      autoInvert: t,
      focused: n,
      origin: i
    } = this.props, s = (0, f.S)(e);
    if (null == s) return null;
    let {
      media: r,
      textAlign: o,
      isLongText: c,
      highPriority: u,
      spacing: d,
      arrowAlignment: m = g.cy.TOP,
      popoutPosition: E
    } = s, {
      offsetX: p,
      offsetY: C
    } = this.state, _ = {
      left: null != p ? i.x + p : void 0,
      top: null != C ? i.y + C : void 0
    }, x = e => {
      let t = n && !e;
      return !0 !== u ? null : (0, l.jsxs)("div", {
        children: [(0, l.jsx)("div", {
          className: a()(I.top, {
            [I.animating]: t,
            [I.notAnimating]: !t
          })
        }), (0, l.jsx)("div", {
          className: a()(I.bottom, {
            [I.animating]: t,
            [I.notAnimating]: !t
          })
        })]
      })
    }, T = e => {
      let t = n && !e;
      return {
        [I.animating]: t,
        [I.notAnimating]: !t,
        [I.highPriority]: u
      }
    }, N = this.getTutorialPopoutText();
    return (0, l.jsx)(g.ZP, {
      position: E,
      renderMedia: r,
      textAlign: o,
      spacing: d,
      isLongText: c,
      uniqueId: e,
      autoInvert: t,
      arrowAlignment: m,
      onSkipAll: this.handleSkipTips,
      onComplete: this.handleDismiss,
      ...N,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, l.jsx)(h.Clickable, {
          ...e,
          className: I.indicator,
          style: _,
          children: (0, l.jsxs)("div", {
            className: a()(I.animationContainer, T(n)),
            children: [x(n), (0, l.jsx)("div", {
              className: a()(I.innerCircle, T(n))
            }), (0, l.jsx)("div", {
              className: a()(I.outerCircle, T(n))
            })]
          })
        })
      }
    })
  }
  constructor(...e) {
    super(...e), x(this, "state", {
      offsetX: null,
      offsetY: null
    }), x(this, "handleDismiss", () => {
      m.Z.dismiss(this.props.tutorialId)
    })
  }
}
t.Z = 12633 == n.j ? function() {
  let {
    indicators: e,
    tutorialData: t,
    windowFocused: n,
    shouldShowAny: i
  } = (0, d.cj)([_.Z, p.Z, E.Z], () => ({
    indicators: _.Z.getIndicators(),
    tutorialData: _.Z.getData(),
    shouldShowAny: _.Z.shouldShowAnyIndicators() && !E.Z.hasLayers(),
    windowFocused: p.Z.isFocused()
  }));
  return i ? (0, l.jsx)(l.Fragment, {
    children: Object.entries(e).map(e => {
      let [i, s] = e, a = t[i];
      return o()(null != a, "Missing tutorial definition for ".concat(i)), (0, l.jsx)(T, {
        tutorialId: i,
        tutorialDefinition: a,
        focused: n,
        ...s
      }, i)
    })
  }) : null
} : null
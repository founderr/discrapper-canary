n.d(t, {
  Z: function() {
    return S
  }
}), n(653041), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(748780),
  o = n(442837),
  c = n(215569),
  u = n(780384),
  d = n(481060),
  h = n(410030),
  m = n(451478),
  E = n(421600),
  p = n(354459),
  g = n(330280),
  f = n(83922),
  C = n(120393);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let I = {
    STEPS: 23,
    FRAME_DURATION: 17,
    FRAME_SIZE: 26
  },
  x = {
    SCALE_MIN: .7,
    SCALE_MAX: 1,
    DURATION_IN: 300,
    DURATION_OUT: 170,
    EASING_IN: r.Z.Easing.inOut(r.Z.Easing.back()),
    EASING_OUT: r.Z.Easing.quad
  },
  T = 200,
  N = 125;
class Z extends i.PureComponent {
  componentDidMount() {
    this.componentDidAppear()
  }
  componentDidAppear() {
    let {
      scaleAnimation: e,
      widthAnimation: t
    } = this;
    e.setValue(1), t.setValue(1)
  }
  componentWillEnter(e) {
    let {
      scaleAnimation: t,
      widthAnimation: n
    } = this;
    t.setValue(0), n.setValue(0), r.Z.parallel([r.Z.timing(t, {
      toValue: 1,
      duration: x.DURATION_IN,
      easing: x.EASING_IN
    }), r.Z.timing(n, {
      toValue: 1,
      duration: T
    })]).start(e)
  }
  componentWillLeave(e) {
    let {
      scaleAnimation: t,
      spriteAnimation: n,
      spriteOpacity: l,
      widthAnimation: i
    } = this;
    l.setValue(1), n.setValue(0);
    let s = [];
    for (let e = 0; e < I.STEPS; e++) s.push(r.Z.timing(n, {
      toValue: -I.FRAME_SIZE * e,
      duration: I.FRAME_DURATION
    }));
    r.Z.sequence([r.Z.timing(t, {
      toValue: 0,
      duration: x.DURATION_OUT,
      easing: x.EASING_OUT
    }), r.Z.sequence(s), r.Z.timing(i, {
      toValue: 0,
      duration: N
    })]).start(e)
  }
  getScaleStyle() {
    let {
      scaleAnimation: e
    } = this;
    return r.Z.accelerate({
      transform: [{
        scale: e.interpolate({
          inputRange: [0, 1],
          outputRange: [x.SCALE_MIN, x.SCALE_MAX]
        })
      }],
      opacity: e
    })
  }
  getSpriteStyle() {
    let {
      spriteAnimation: e,
      spriteOpacity: t
    } = this;
    return {
      backgroundPosition: e,
      opacity: t
    }
  }
  getWidthStyle() {
    return {
      width: this.widthAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0px", "".concat(this.props.width, "px")]
      })
    }
  }
  render() {
    let {
      theme: e,
      children: t,
      className: n
    } = this.props, i = (0, u.wj)(e), s = a()(g.sprite, {
      [C.crossWhite]: i,
      [C.crossGrey]: !i
    });
    return (0, l.jsxs)(r.Z.div, {
      className: a()(g.transition, n),
      style: this.getWidthStyle(),
      children: [(0, l.jsx)("div", {
        className: a()(g.spriteWrapper, f.horizontal, f.justifyCenter, f.alignCenter),
        children: (0, l.jsx)(r.Z.div, {
          className: s,
          style: this.getSpriteStyle()
        })
      }), (0, l.jsx)(r.Z.div, {
        style: this.getScaleStyle(),
        children: t
      })]
    })
  }
  constructor(...e) {
    super(...e), _(this, "scaleAnimation", new r.Z.Value(0)), _(this, "spriteAnimation", new r.Z.Value(0)), _(this, "spriteOpacity", new r.Z.Value(0)), _(this, "widthAnimation", new r.Z.Value(0))
  }
}

function S(e) {
  var t, n;
  let {
    participants: i,
    onContextMenu: s,
    className: r,
    onClick: u,
    width: f,
    guildId: C
  } = e, _ = (0, h.ZP)();
  let I = (t = f, n = i.length, ((0, d.getAvatarSize)(d.AvatarSizes.SIZE_80) + 16) * n > t ? d.AvatarSizes.SIZE_40 : d.AvatarSizes.SIZE_80),
    x = (0, o.e7)([m.Z], () => m.Z.isFocused()),
    T = i.map(e => {
      var t, n;
      if (e.type !== p.fO.USER) return null;
      let {
        user: i,
        voiceState: a,
        speaking: r,
        ringing: o
      } = e;
      return (0, l.jsx)(Z, {
        className: g.participant,
        width: (0, d.getAvatarSize)(I),
        theme: _,
        children: (0, l.jsx)(E.Z, {
          src: i.getAvatarURL(C, (0, d.getAvatarSize)(I), r && x),
          size: I,
          muted: null !== (t = null == a ? void 0 : a.isVoiceMuted()) && void 0 !== t && t,
          deafen: null !== (n = null == a ? void 0 : a.isVoiceDeafened()) && void 0 !== n && n,
          speaking: r,
          ringing: o,
          onClick: t => null == u ? void 0 : u(e, t),
          onContextMenu: t => null == s ? void 0 : s(e, t)
        }, e.id)
      }, i.id)
    });
  return (0, l.jsx)(c.W, {
    component: "div",
    className: a()(g.root, r),
    children: T
  })
}
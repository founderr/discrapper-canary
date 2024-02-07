"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  l = n("414456"),
  a = n.n(l),
  i = n("446674"),
  o = n("206230"),
  u = n("471671"),
  c = n("629758");
class d extends r.PureComponent {
  async componentDidMount() {
    let {
      importData: e,
      nextScene: t,
      pauseWhileUnfocused: s,
      pause: r,
      isWindowFocused: l,
      useReducedMotion: a
    } = this.props, [i, {
      default: o
    }] = await Promise.all([e(), n.el("865981").then(n.t.bind(n, "865981", 23))]);
    null != this.animationRef && (this.animation = o.loadAnimation({
      container: this.animationRef,
      renderer: "svg",
      loop: !0,
      autoplay: !0,
      animationData: i
    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (s && !l || r || a) && this.animation.pause())
  }
  componentWillUnmount() {
    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
  }
  componentDidUpdate(e) {
    var t, n, s;
    let {
      nextScene: r,
      pauseWhileUnfocused: l,
      pause: a,
      isWindowFocused: i,
      useReducedMotion: o
    } = this.props;
    r !== this.currentScene && this.shouldForcePlayAfter() && !a && this.playScene(r), null != this.animation && (l && !e.isWindowFocused && i && !o && !0 !== a ? this.animation.play() : (o || l && e.isWindowFocused && !i) && this.animation.pause()), !e.pause && a ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !a && !o && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== r && a && (this.playScene(r), null === (s = this.animation) || void 0 === s || s.pause())
  }
  shouldForcePlayAfter() {
    let {
      sceneSegments: e
    } = this.props, t = e[this.currentScene];
    return !0 === t.shouldForcePlayAfter
  }
  playScene(e) {
    if (this.isUnmounted) return;
    let {
      onScenePlay: t,
      sceneSegments: n,
      useReducedMotion: s
    } = this.props, r = n[e], l = n[this.currentScene];
    if (null != this.animation && (e === this.currentScene || r.BEG !== l.BEG || r.END !== l.END) && this.animation.playSegments([r.BEG, r.END], !0), this.currentScene = e, null != t && t(this.currentScene), s) {
      var a;
      null === (a = this.animation) || void 0 === a || a.pause()
    }
  }
  render() {
    return (0, s.jsx)("div", {
      ref: this.handleSetRef,
      className: a(this.props.className, c.wrapper)
    })
  }
  constructor(...e) {
    super(...e), this.animationRef = null, this.currentScene = this.props.nextScene, this.isUnmounted = !1, this.handleLoopComplete = () => {
      let {
        onSceneComplete: e,
        nextScene: t
      } = this.props;
      null != e && e(this.currentScene), this.playScene(t)
    }, this.handleComplete = () => {
      let {
        onSceneComplete: e
      } = this.props;
      null != e && e(this.currentScene)
    }, this.handleSetRef = e => {
      this.animationRef = e;
      let {
        animationRef: t
      } = this.props;
      null != t && t(e)
    }
  }
}
d.defaultProps = {
  pauseWhileUnfocused: !0,
  pause: !1
};
var f = e => {
  let {
    componentRef: t,
    ...n
  } = e, r = (0, i.useStateFromStores)([u.default], () => u.default.isFocused()), l = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion);
  return (0, s.jsx)(d, {
    ...n,
    isWindowFocused: r,
    useReducedMotion: l,
    ref: t
  })
}
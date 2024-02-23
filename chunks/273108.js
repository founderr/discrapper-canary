"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var r = n("37983"),
  s = n("884691"),
  i = n("414456"),
  a = n.n(i),
  l = n("446674"),
  o = n("206230"),
  u = n("471671"),
  c = n("708721");
class d extends s.PureComponent {
  async componentDidMount() {
    let {
      importData: e,
      nextScene: t,
      pauseWhileUnfocused: r,
      pause: s,
      isWindowFocused: i,
      useReducedMotion: a
    } = this.props, [l, {
      default: o
    }] = await Promise.all([e(), n.el("865981").then(n.t.bind(n, "865981", 23))]);
    null != this.animationRef && (this.animation = o.loadAnimation({
      container: this.animationRef,
      renderer: "svg",
      loop: !0,
      autoplay: !0,
      animationData: l
    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (r && !i || s || a) && this.animation.pause())
  }
  componentWillUnmount() {
    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
  }
  componentDidUpdate(e) {
    var t, n, r;
    let {
      nextScene: s,
      pauseWhileUnfocused: i,
      pause: a,
      isWindowFocused: l,
      useReducedMotion: o
    } = this.props;
    s !== this.currentScene && this.shouldForcePlayAfter() && !a && this.playScene(s), null != this.animation && (i && !e.isWindowFocused && l && !o && !0 !== a ? this.animation.play() : (o || i && e.isWindowFocused && !l) && this.animation.pause()), !e.pause && a ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !a && !o && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== s && a && (this.playScene(s), null === (r = this.animation) || void 0 === r || r.pause())
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
      useReducedMotion: r
    } = this.props, s = n[e], i = n[this.currentScene];
    if (null != this.animation && (e === this.currentScene || s.BEG !== i.BEG || s.END !== i.END) && this.animation.playSegments([s.BEG, s.END], !0), this.currentScene = e, null != t && t(this.currentScene), r) {
      var a;
      null === (a = this.animation) || void 0 === a || a.pause()
    }
  }
  render() {
    return (0, r.jsx)("div", {
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
var _ = e => {
  let {
    componentRef: t,
    ...n
  } = e, s = (0, l.useStateFromStores)([u.default], () => u.default.isFocused()), i = (0, l.useStateFromStores)([o.default], () => o.default.useReducedMotion);
  return (0, r.jsx)(d, {
    ...n,
    isWindowFocused: s,
    useReducedMotion: i,
    ref: t
  })
}
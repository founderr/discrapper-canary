"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var l = n("37983"),
  s = n("884691"),
  i = n("414456"),
  r = n.n(i),
  o = n("446674"),
  a = n("206230"),
  u = n("471671"),
  d = n("629758");
class c extends s.PureComponent {
  async componentDidMount() {
    let {
      importData: e,
      nextScene: t,
      pauseWhileUnfocused: l,
      pause: s,
      isWindowFocused: i,
      useReducedMotion: r
    } = this.props, [o, {
      default: a
    }] = await Promise.all([e(), n.el("865981").then(n.t.bind(n, "865981", 23))]);
    null != this.animationRef && (this.animation = a.loadAnimation({
      container: this.animationRef,
      renderer: "svg",
      loop: !0,
      autoplay: !0,
      animationData: o
    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (l && !i || s || r) && this.animation.pause())
  }
  componentWillUnmount() {
    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
  }
  componentDidUpdate(e) {
    var t, n, l;
    let {
      nextScene: s,
      pauseWhileUnfocused: i,
      pause: r,
      isWindowFocused: o,
      useReducedMotion: a
    } = this.props;
    s !== this.currentScene && this.shouldForcePlayAfter() && !r && this.playScene(s), null != this.animation && (i && !e.isWindowFocused && o && !a && !0 !== r ? this.animation.play() : (a || i && e.isWindowFocused && !o) && this.animation.pause()), !e.pause && r ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !r && !a && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== s && r && (this.playScene(s), null === (l = this.animation) || void 0 === l || l.pause())
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
      useReducedMotion: l
    } = this.props, s = n[e], i = n[this.currentScene];
    if (null != this.animation && (e === this.currentScene || s.BEG !== i.BEG || s.END !== i.END) && this.animation.playSegments([s.BEG, s.END], !0), this.currentScene = e, null != t && t(this.currentScene), l) {
      var r;
      null === (r = this.animation) || void 0 === r || r.pause()
    }
  }
  render() {
    return (0, l.jsx)("div", {
      ref: this.handleSetRef,
      className: r(this.props.className, d.wrapper)
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
c.defaultProps = {
  pauseWhileUnfocused: !0,
  pause: !1
};
var f = e => {
  let {
    componentRef: t,
    ...n
  } = e, s = (0, o.useStateFromStores)([u.default], () => u.default.isFocused()), i = (0, o.useStateFromStores)([a.default], () => a.default.useReducedMotion);
  return (0, l.jsx)(c, {
    ...n,
    isWindowFocused: s,
    useReducedMotion: i,
    ref: t
  })
}
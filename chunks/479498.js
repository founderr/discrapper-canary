n.d(t, {
    k: function () {
        return p;
    }
}),
    n(47120);
var r,
    i = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(442837),
    u = n(607070),
    c = n(451478),
    d = n(711328);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class _ extends (r = a.PureComponent) {
    async componentDidMount() {
        let { importData: e, nextScene: t, pauseWhileUnfocused: r, pause: i, isWindowFocused: a, useReducedMotion: s } = this.props,
            [o, { default: l }] = await Promise.all([e(), n.e('23755').then(n.t.bind(n, 500923, 23))]);
        if (null != this.animationRef)
            (this.animation = l.loadAnimation({
                container: this.animationRef,
                renderer: 'svg',
                loop: !0,
                autoplay: !0,
                animationData: o
            })),
                this.animation.addEventListener('loopComplete', this.handleLoopComplete),
                this.animation.addEventListener('complete', this.handleComplete),
                this.animation.addEventListener('enterFrame', this.handleEnterFrame),
                this.playScene(t),
                ((r && !a) || i || s) && this.animation.pause();
    }
    componentWillUnmount() {
        (this.isUnmounted = !0), null != this.animation && (this.animation.destroy(), (this.animation = void 0));
    }
    componentDidUpdate(e) {
        var t, n, r;
        let { nextScene: i, pauseWhileUnfocused: a, pause: s, isWindowFocused: o, useReducedMotion: l } = this.props;
        i !== this.currentScene && this.shouldForcePlayAfter() && !s && this.playScene(i), null != this.animation && (a && !e.isWindowFocused && o && !l && !0 !== s ? this.animation.play() : (l || (a && e.isWindowFocused && !o)) && this.animation.pause()), !e.pause && s ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !s && !l && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== i && s && (this.playScene(i), null === (r = this.animation) || void 0 === r || r.pause());
    }
    shouldForcePlayAfter() {
        let { sceneSegments: e } = this.props;
        return !0 === e[this.currentScene].shouldForcePlayAfter;
    }
    playScene(e) {
        if (this.isUnmounted) return;
        let { onScenePlay: t, sceneSegments: n, useReducedMotion: r } = this.props,
            i = n[e],
            a = n[this.currentScene];
        if ((null != this.animation && (e === this.currentScene || i.BEG !== a.BEG || i.END !== a.END) && this.animation.playSegments([i.BEG, i.END], !0), (this.currentScene = e), null != t && t(this.currentScene), r)) {
            var s;
            null === (s = this.animation) || void 0 === s || s.pause();
        }
    }
    render() {
        return (0, i.jsx)('div', {
            ref: this.handleSetRef,
            className: o()(this.props.className, d.wrapper)
        });
    }
    constructor(...e) {
        super(...e),
            f(this, 'animationRef', null),
            f(this, 'animation', void 0),
            f(this, 'currentScene', this.props.nextScene),
            f(this, 'isUnmounted', !1),
            f(this, 'handleLoopComplete', () => {
                let { onSceneComplete: e, nextScene: t } = this.props;
                null != e && e(this.currentScene), this.playScene(t);
            }),
            f(this, 'handleComplete', () => {
                let { onSceneComplete: e } = this.props;
                null != e && e(this.currentScene);
            }),
            f(this, 'handleEnterFrame', (e) => {
                let { onEnterFrame: t } = this.props;
                null == t || t(this.currentScene, e);
            }),
            f(this, 'handleSetRef', (e) => {
                this.animationRef = e;
                let { animationRef: t } = this.props;
                null != t && t(e);
            });
    }
}
f(_, 'defaultProps', {
    pauseWhileUnfocused: !0,
    pause: !1
});
let p = (e) => {
    let { componentRef: t, ignoreReducedMotion: n = !1, ...r } = e,
        a = (0, l.e7)([c.Z], () => c.Z.isFocused()),
        s = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, i.jsx)(_, {
        ...r,
        isWindowFocused: a,
        useReducedMotion: s && !n,
        ref: t
    });
};

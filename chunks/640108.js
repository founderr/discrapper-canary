n.d(t, {
    yv: function () {
        return V;
    }
});
var r,
    i,
    a = n(653041);
var o = n(47120);
var s = n(411104);
var l = n(735250),
    u = n(470079),
    c = n(120356),
    d = n.n(c),
    _ = n(392711),
    E = n.n(_),
    f = n(748780),
    h = n(481060),
    p = n(70097),
    m = n(167080),
    I = n(818083),
    T = n(268353),
    g = n(866960),
    S = n(181058),
    A = n(626135),
    v = n(70956),
    N = n(36703),
    O = n(228488),
    R = n(540026),
    C = n(455813),
    y = n(283756),
    b = n(793148),
    L = n(981631),
    D = n(217702),
    M = n(689938),
    P = n(505261),
    U = n(739017);
function w(e, t, n) {
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
let x = 3000,
    G = 1000,
    k = '-:--',
    B = {
        friction: 14,
        tension: 200
    },
    F = {
        VIDEO: 'VIDEO',
        AUDIO: 'AUDIO'
    },
    Z = {
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    };
function V(e) {
    let t = 0 | e,
        n = t % 60;
    return ''.concat((t - n) / 60, ':').concat(String(n).padStart(2, '0'));
}
function H(e) {
    let t = [],
        { duration: n } = e;
    for (let r = 0; r < e.buffered.length; r++) {
        let i = e.buffered.start(r),
            a = e.buffered.end(r);
        if (a - i < 1) continue;
        let o = (a - i) / n,
            s = i / n;
        t.push([s, o]);
    }
    return t;
}
let Y = (e) => {
    let { current: t, duration: n } = e,
        r = null != t ? V(t) : k,
        i = null != n ? V(n) : k;
    return (
        (r = r.padStart(i.length, '0')),
        (0, l.jsxs)('div', {
            className: P.durationTimeWrapper,
            children: [
                (0, l.jsx)('span', {
                    className: P.durationTimeDisplay,
                    children: r
                }),
                (0, l.jsx)('span', {
                    className: P.durationTimeSeparator,
                    children: '/'
                }),
                (0, l.jsx)('span', {
                    className: P.durationTimeDisplay,
                    children: i
                })
            ]
        })
    );
};
class j extends (r = u.Component) {
    componentDidMount() {
        this.state.translateY.setValue(this.props.autoPlay ? 1 : 0);
    }
    componentDidUpdate(e) {
        var t, n, r, i, a;
        let { hide: o, playing: s } = this.props;
        o && !e.hide ? (this.animateControls(1, s), null === (t = this.volumeButton) || void 0 === t || t.blur(), null === (n = (r = this.props).onControlsHide) || void 0 === n || n.call(r)) : !o && e.hide && (this.animateControls(0, s), null === (i = (a = this.props).onControlsShow) || void 0 === i || i.call(a));
    }
    updateProgress(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { durationBar: n } = this;
        null != n && n.setGrabber(e, t);
    }
    animateControls(e, t) {
        let { translateY: n } = this.state;
        t
            ? f.Z.spring(n, {
                  toValue: e,
                  ...B
              }).start()
            : n.setValue(e);
    }
    getAnimatedStyle() {
        let { translateY: e } = this.state;
        return {
            transform: [
                {
                    translateY: e.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0%', '100%']
                    })
                }
            ]
        };
    }
    renderPlayIcon() {
        let { playing: e, currentTime: t, duration: n, onPause: r, onPlay: i, disabled: a } = this.props;
        return e
            ? (0, l.jsx)(h.Clickable, {
                  className: P.videoButton,
                  onClick: r,
                  tabIndex: a ? -1 : 0,
                  'aria-label': M.Z.Messages.PAUSE,
                  children: (0, l.jsx)(
                      h.PauseIcon,
                      {
                          size: 'xs',
                          color: 'currentColor',
                          className: P.controlIcon
                      },
                      'pause'
                  )
              })
            : null != t && t === n
              ? (0, l.jsx)(h.Clickable, {
                    className: P.videoButton,
                    onClick: i,
                    tabIndex: a ? -1 : 0,
                    'aria-label': M.Z.Messages.PLAY_AGAIN,
                    children: (0, l.jsx)(S.Z, { className: P.controlIcon }, 'replay')
                })
              : (0, l.jsx)(h.Clickable, {
                    className: P.videoButton,
                    onClick: i,
                    tabIndex: a ? -1 : 0,
                    'aria-label': M.Z.Messages.PLAY,
                    children: (0, l.jsx)(
                        h.PlayIcon,
                        {
                            size: 'xs',
                            color: 'currentColor',
                            className: P.controlIcon
                        },
                        'play'
                    )
                });
    }
    render() {
        let { buffers: e, children: t, currentTime: n, duration: r, muted: i, onDrag: a, onDragEnd: o, onDragStart: s, onToggleMuted: u, onVolumeShow: c, onVolumeHide: d, width: _, volume: E, type: h } = this.props,
            p = 'string' == typeof _ || _ > 250;
        return (0, l.jsxs)(f.Z.div, {
            className: h === F.VIDEO ? P.videoControls : P.audioControls,
            onClick: (e) => e.stopPropagation(),
            onDoubleClick: (e) => e.stopPropagation(),
            style: this.getAnimatedStyle(),
            children: [
                this.renderPlayIcon(),
                p
                    ? (0, l.jsx)(Y, {
                          current: n,
                          duration: r
                      })
                    : null,
                (0, l.jsx)(R.Z, {
                    buffers: e,
                    value: null != r ? r : 0,
                    onDrag: a,
                    onDragEnd: o,
                    onDragStart: s,
                    type: R.Z.Types.DURATION,
                    ref: this.setDurationRef
                }),
                (0, l.jsx)('div', {
                    className: U.flex,
                    children: (0, l.jsx)(b.Z, {
                        ref: this.setVolumeButtonRef,
                        muted: i,
                        value: E,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: (e) => a(e, R.Z.Types.VOLUME),
                        onToggleMute: u,
                        onVolumeShow: c,
                        onVolumeHide: d,
                        iconClassName: P.controlIcon,
                        iconColor: 'currentColor',
                        sliderWrapperClassName: P.volumeSliderWrapper
                    })
                }),
                t
            ]
        });
    }
    constructor(...e) {
        super(...e),
            w(this, 'state', { translateY: new f.Z.Value(0) }),
            w(this, 'volumeButton', void 0),
            w(this, 'durationBar', void 0),
            w(this, 'setDurationRef', (e) => {
                this.durationBar = e;
            }),
            w(this, 'setVolumeButtonRef', (e) => {
                this.volumeButton = e;
            });
    }
}
function W(e) {
    let { fileName: t, fileSize: n, src: r, disabled: i, mimeType: a, hideDownloadButton: o } = e;
    return (0, l.jsxs)('div', {
        className: P.audioMetadata,
        children: [
            (0, l.jsxs)('div', {
                className: P.metadataContent,
                children: [
                    i
                        ? t
                        : (0, l.jsx)(m.Z, {
                              href: r,
                              className: P.metadataDownload,
                              iconClassName: P.metadataIcon,
                              mimeType: a,
                              fileName: t
                          }),
                    (0, l.jsx)('div', {
                        className: P.metadataSize,
                        children: n
                    })
                ]
            }),
            !o &&
                (0, l.jsx)(m.Z, {
                    href: r,
                    className: P.metadataDownload,
                    iconClassName: P.metadataIcon,
                    mimeType: a
                })
        ]
    });
}
w(j, 'defaultProps', { disabled: !1 });
class K extends u.Component {
    pop() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.setState({ play: e }, this.popAnimation);
    }
    getAnimatedStyle() {
        let { opacity: e, scale: t } = this.state;
        return f.Z.accelerate({
            opacity: e.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.8]
            }),
            transform: [
                {
                    scale: t.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 2]
                    })
                }
            ]
        });
    }
    render() {
        let { play: e } = this.state,
            t = e ? h.PlayIcon : h.PauseIcon;
        return (0, l.jsx)(f.Z.div, {
            className: P.playPausePop,
            style: this.getAnimatedStyle(),
            children: (0, l.jsx)(t, { className: P.playPausePopIcon })
        });
    }
    constructor(...e) {
        super(...e),
            w(this, 'state', {
                play: !1,
                scale: new f.Z.Value(0),
                opacity: new f.Z.Value(0)
            }),
            w(this, 'popAnimation', () => {
                let { opacity: e, scale: t } = this.state;
                t.setValue(0),
                    e.setValue(0),
                    f.Z.parallel([
                        f.Z.sequence([
                            f.Z.timing(e, {
                                toValue: 1,
                                duration: 200
                            }),
                            f.Z.timing(e, {
                                toValue: 0,
                                duration: 200
                            })
                        ]),
                        f.Z.spring(t, {
                            toValue: 1.5,
                            ...B,
                            friction: 80
                        })
                    ]).start();
            });
    }
}
let z = (0, I.B)({
    kind: 'user',
    id: '2024-03_media_play_metrics',
    label: 'Media play metrics User Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Send metrics',
            config: { enabled: !0 }
        }
    ]
});
class q {
    moveToState(e) {
        (this.stateTime = performance.now()), (this.currentState = e);
    }
    timeInState() {
        return performance.now() - this.stateTime;
    }
    assertUnreachable(e) {
        throw Error('uhoh');
    }
    sendEvent() {
        this.analyticsEnabled &&
            A.default.track(L.rMx.MEDIA_PLAY_FINISHED, {
                play_time_sec: this.playTimeSec,
                play_wall_time_ms: this.playWallTimeMs,
                first_play_waiting_ms: this.firstPlayWaitingMs,
                stall_count: this.stallCount,
                stall_ms: this.stallMs,
                seek_count: this.seekCount,
                seek_waiting_ms: this.seekWaitingMs,
                media_source: this.metadata.src,
                mime_type: this.metadata.mimeType,
                file_size: this.metadata.fileSize,
                file_duration_sec: this.metadata.fileDurationSec,
                connection_type: g.Z.getType(),
                effective_connection_speed: g.Z.getEffectiveConnectionSpeed(),
                service_provider: g.Z.getServiceProvider()
            }),
            (this.playTimeSec = 0),
            (this.playWallTimeMs = 0),
            (this.firstPlayWaitingMs = 0),
            (this.stallCount = 0),
            (this.stallMs = 0),
            (this.seekCount = 0),
            (this.seekWaitingMs = 0),
            (this.playbackStartTime = void 0),
            (this.lastPlayingTime = void 0),
            this.moveToState('not_started');
    }
    updatePlayTime(e) {
        var t, n;
        (this.playTimeSec += Math.max((null !== (t = this.lastPlayingTime) && void 0 !== t ? t : e) - (null !== (n = this.playbackStartTime) && void 0 !== n ? n : 0), 0)), (this.playWallTimeMs += this.timeInState());
    }
    constructor(e) {
        w(this, 'metadata', void 0),
            w(this, 'playTimeSec', 0),
            w(this, 'playWallTimeMs', 0),
            w(this, 'firstPlayWaitingMs', 0),
            w(this, 'stallCount', 0),
            w(this, 'stallMs', 0),
            w(this, 'seekCount', 0),
            w(this, 'seekWaitingMs', 0),
            w(this, 'stateTime', performance.now()),
            w(this, 'currentState', 'not_started'),
            w(this, 'playbackStartTime', void 0),
            w(this, 'lastPlayingTime', void 0),
            w(this, 'analyticsEnabled', void 0),
            w(this, 'onWaiting', (e) => {
                switch (this.currentState) {
                    case 'not_started':
                        this.moveToState('not_started_waiting');
                        break;
                    case 'playing':
                        this.updatePlayTime(e.currentTarget.currentTime), (this.stallCount += 1), this.moveToState('stalled');
                        break;
                    case 'seeking':
                    case 'not_started_waiting':
                    case 'stalled':
                        break;
                    case 'paused':
                    case 'seeked':
                        this.moveToState('stalled');
                        break;
                    default:
                        this.assertUnreachable(this.currentState);
                }
            }),
            w(this, 'onSeeking', (e) => {
                switch (this.currentState) {
                    case 'seeking':
                    case 'seeked':
                        this.moveToState('seeking');
                        return;
                    case 'stalled':
                        this.stallMs += this.timeInState();
                        break;
                    case 'playing':
                        this.updatePlayTime(e.currentTarget.currentTime);
                        break;
                    case 'not_started':
                    case 'not_started_waiting':
                    case 'paused':
                        break;
                    default:
                        this.assertUnreachable(this.currentState);
                }
                (this.seekCount += 1), this.moveToState('seeking');
            }),
            w(this, 'onSeeked', (e) => {
                switch (this.currentState) {
                    case 'seeking':
                    case 'seeked':
                        let t = this.stateTime;
                        this.moveToState('seeked'), (this.stateTime = t);
                        break;
                    case 'not_started':
                    case 'not_started_waiting':
                    case 'stalled':
                    case 'playing':
                    case 'paused':
                        break;
                    default:
                        this.assertUnreachable(this.currentState);
                }
            }),
            w(this, 'onPause', (e) => {
                switch (this.currentState) {
                    case 'playing':
                        this.updatePlayTime(e.currentTarget.currentTime), this.moveToState('paused'), this.sendEvent();
                        break;
                    case 'stalled':
                        (this.stallMs += this.timeInState()), this.moveToState('paused'), this.sendEvent();
                        break;
                    case 'not_started':
                    case 'not_started_waiting':
                    case 'paused':
                    case 'seeking':
                        break;
                    case 'seeked':
                        (this.seekWaitingMs += this.timeInState()), (this.seekCount += 1);
                        break;
                    default:
                        this.assertUnreachable(this.currentState);
                }
            }),
            w(this, 'onPlaying', (e) => {
                switch (this.currentState) {
                    case 'playing':
                        return;
                    case 'not_started':
                        this.firstPlayWaitingMs = 0;
                        break;
                    case 'not_started_waiting':
                        this.firstPlayWaitingMs = this.timeInState();
                        break;
                    case 'stalled':
                        this.stallMs += this.timeInState();
                        break;
                    case 'seeked':
                        this.seekWaitingMs += this.timeInState();
                        break;
                    case 'paused':
                    case 'seeking':
                        break;
                    default:
                        this.assertUnreachable(this.currentState);
                }
                (this.playbackStartTime = e.currentTarget.currentTime), this.moveToState('playing');
            }),
            w(this, 'onTimeUpdate', (e) => {
                switch (this.currentState) {
                    case 'playing':
                        this.lastPlayingTime = e.currentTarget.currentTime;
                        return;
                    case 'not_started':
                    case 'not_started_waiting':
                    case 'stalled':
                    case 'seeked':
                    case 'paused':
                    case 'seeking':
                        break;
                    default:
                        this.assertUnreachable(this.currentState);
                }
            }),
            w(this, 'onDragStart', (e) => {
                null != e && (this.lastPlayingTime = e);
            }),
            w(this, 'onLoadedMetadata', (e) => {
                this.metadata.fileDurationSec = e.currentTarget.duration;
            }),
            (this.metadata = e),
            (this.analyticsEnabled = z.getCurrentConfig({ location: 'media_player' }).enabled);
    }
}
class Q extends (i = u.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        return !e.playable && t.playing
            ? {
                  playing: !1,
                  hideControls: !1
              }
            : null;
    }
    componentDidMount() {
        let { playing: e, muted: t, volume: n } = this.state,
            { current: r } = this.mediaRef;
        if (null != r) t && (r.muted = t), e && (this.play(!0), this.handleUIUpdate()), (r.volume = n);
    }
    componentDidUpdate(e, t) {
        let {
                props: { onPause: n, onVolumeChange: r, onMute: i },
                state: { playing: a, fullscreen: o, muted: s, dragging: l, volume: u }
            } = this,
            { current: c } = this.mediaRef,
            { current: d } = this.playPausePopRef;
        if (null == c) return;
        a && !t.playing ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && (null == d || d.pop(a))) : !a && t.playing && (c.pause(), null == d || d.pop(a), null == n || n());
        let _ = (0, O.fn)(c.parentNode, c);
        o && !t.fullscreen && null != _ ? ((0, O.Dj)(_), _.addEventListener(O.NO, this.handleFullScreenExit)) : !o && t.fullscreen && null != _ && (_.removeEventListener(O.NO, this.handleFullScreenExit), (0, O.Pr)(_)), l === R.Z.Types.DURATION && t.dragging !== R.Z.Types.DURATION && a ? c.pause() : l !== R.Z.Types.DURATION && t.dragging === R.Z.Types.DURATION && a && c.play(), s !== t.muted && ((c.muted = s), null == i || i(s)), u !== t.volume && ((c.volume = u), null == r || r(u));
    }
    componentWillUnmount() {
        this._unmounted = !0;
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, O.fn)(e.parentNode, e);
        null != t && (t.removeEventListener(O.NO, this.handleFullScreenExit), (0, O.Pr)(t));
    }
    play() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { onPlay: t, volume: n, autoMute: r } = this.props,
            { current: i } = this.mediaRef;
        if (null != i) {
            let a = {};
            if ('function' == typeof n) {
                let e = n();
                e !== this.state.volume && ((i.volume = e), (a.volume = e));
            }
            if ('function' == typeof r) {
                let e = r();
                e !== this.state.muted && ((i.muted = e), (a.muted = e));
            }
            this.setState(a), i.play(), null == t || t(e, i.currentTime * v.Z.Millis.SECOND, i.duration * v.Z.Millis.SECOND);
        }
    }
    getWidth() {
        let { width: e } = this.props;
        return '100%' === e ? e : Math.max(e, Q.minWidth);
    }
    getHeight() {
        let { height: e } = this.props;
        return '100%' === e ? e : Math.max(e, Q.minHeight);
    }
    updateValue(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { current: n } = this.controlsRef;
        null != n && n.updateProgress(e, t);
    }
    updateTime(e, t) {
        let n = 0 | e,
            r = 0 | t;
        (this.state.currentTime !== n || this.state.duration !== r) &&
            this.setState({
                currentTime: n,
                duration: r
            });
    }
    updateControlsVisibility() {
        let { dragging: e, fullscreen: t } = this.state,
            n = t ? G : x,
            r = Math.max(0, Date.now() - this._lastMove) > n;
        r !== this.state.hideControls && null == e && this.setState({ hideControls: r });
    }
    renderVideo() {
        let { src: e, poster: t, forceExternal: n, onError: r, responsive: i, mediaLayoutType: a } = this.props,
            { playing: o, fullscreen: s } = this.state,
            u = this.getWidth(),
            c = this.getHeight();
        return n
            ? (0, l.jsx)(p.Z, {
                  className: P.video,
                  controls: !1,
                  height: c,
                  poster: t,
                  width: u,
                  responsive: i && !s,
                  mediaLayoutType: a,
                  playsInline: !0,
                  autoPlay: o
              })
            : (0, l.jsx)(p.Z, {
                  className: P.video,
                  controls: !1,
                  playsInline: !0,
                  autoPlay: o,
                  height: c,
                  responsive: i && !s,
                  mediaLayoutType: s ? D.hV.STATIC : a,
                  onClick: this.handleVideoClick,
                  onEnded: this.handleEnded,
                  onError: r,
                  onWaiting: this._analytics.onWaiting,
                  onSeeking: this._analytics.onSeeking,
                  onSeeked: this._analytics.onSeeked,
                  onPause: this._analytics.onPause,
                  onPlaying: this._analytics.onPlaying,
                  onTimeUpdate: this._analytics.onTimeUpdate,
                  onLoadedMetadata: this.handleLoaded,
                  onProgress: this.handleBuffer,
                  poster: t,
                  preload: this.state.preload,
                  ref: this.mediaRef,
                  width: u,
                  src: e
              });
    }
    renderAudio() {
        return (0, l.jsx)('audio', {
            className: P.audio,
            controls: !1,
            onClick: this.handleVideoClick,
            onEnded: this.handleEnded,
            onLoadedMetadata: this.handleLoaded,
            onProgress: this.handleBuffer,
            preload: this.state.preload,
            ref: this.mediaRef,
            children: (0, l.jsx)('source', { src: this.props.src })
        });
    }
    renderControls() {
        let { current: e } = this.mediaRef,
            {
                props: { type: t, autoPlay: n, playable: r = !0, onVolumeShow: i, onVolumeHide: a, onControlsHide: o, onControlsShow: s },
                state: { buffers: u, currentTime: c, duration: d, hasClickedPlay: _, hideControls: E, muted: f, playing: h, fullscreen: p, volume: m, dragging: I }
            } = this,
            g = this.getWidth();
        return _ || n || t === F.AUDIO
            ? (0, l.jsx)(j, {
                  buffers: u,
                  currentTime: c,
                  duration: d,
                  volume: (0, N.P)(m, 1),
                  hide: t === F.VIDEO && E,
                  muted: f,
                  autoPlay: n,
                  onDrag: this.handleDrag,
                  onDragEnd: this.handleDragEnd,
                  onDragStart: this.handleDragStart,
                  onPause: () => this.setPlay(!1),
                  onPlay: () => this.setPlay(!0),
                  onToggleMuted: this.toggleMuted,
                  onVolumeShow: i,
                  onVolumeHide: a,
                  onControlsShow: s,
                  onControlsHide: o,
                  playing: h,
                  dragging: I,
                  type: t,
                  ref: this.controlsRef,
                  width: p ? window.screen.width : g,
                  disabled: !r,
                  children:
                      t === F.VIDEO
                          ? (0, l.jsx)(T.Z, {
                                'aria-label': M.Z.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
                                className: P.videoButton,
                                iconClassName: P.controlIcon,
                                guestWindow: window,
                                onClick: this.toggleFullscreen,
                                node: (0, O.fn)(null == e ? void 0 : e.parentNode, e)
                            })
                          : null
              })
            : (0, l.jsx)(C.Z, {
                  onPlay: this.handleVideoClick,
                  inactive: !r
              });
    }
    renderMetadata() {
        let { fileName: e, fileSize: t, src: n, type: r, playable: i, mimeType: a } = this.props;
        return null == e || null == t
            ? null
            : r === F.AUDIO
              ? (0, l.jsx)(W, {
                    fileName: e,
                    fileSize: t,
                    src: n,
                    disabled: !i,
                    mimeType: a,
                    hideDownloadButton: !0
                })
              : null;
    }
    renderPlayPausePop() {
        return (0, l.jsx)(K, { ref: this.playPausePopRef });
    }
    getMediaStyle() {
        let { responsive: e, type: t, height: n } = this.props,
            { fullscreen: r } = this.state,
            i = this.getWidth();
        return r
            ? Z
            : t === F.AUDIO
              ? {
                    width: void 0,
                    height: 'auto'
                }
              : e
                ? void 0
                : {
                      width: i,
                      height: n
                  };
    }
    render() {
        let { height: e, type: t, src: n, forceExternal: r, className: i, renderLinkComponent: a, responsive: o, mediaLayoutType: s, renderOverlayContent: u } = this.props,
            { fullscreen: c, hideControls: _, playing: E } = this.state,
            f = P.wrapperPaused;
        if ((t === F.AUDIO ? (f = P.wrapperAudio) : _ ? (f = P.wrapperControlsHidden) : E && (f = P.wrapperPlaying), r && t === F.VIDEO)) {
            let t = this.getWidth();
            return (0, l.jsxs)('div', {
                className: d()(f, { [P.wrapperMediaMosaic]: s === D.hV.MOSAIC }),
                style: o
                    ? void 0
                    : {
                          width: t,
                          height: e
                      },
                children: [
                    this.renderMetadata(),
                    this.renderVideo(),
                    (0, l.jsx)('div', {
                        className: P.playCenter,
                        children: (0, l.jsx)(y.Z, {
                            className: P.__invalid_playButton,
                            externalURL: n,
                            renderLinkComponent: a
                        })
                    })
                ]
            });
        }
        return (0, l.jsxs)('div', {
            className: d()(f, P.newMosaicStyle, i, { [P.wrapperMediaMosaic]: s === D.hV.MOSAIC }),
            'data-fullscreen': c,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: E ? this.handleMouseMove : void 0,
            onKeyDown: this.handleKeyDown,
            style: this.getMediaStyle(),
            children: [
                this.renderMetadata(),
                t === F.AUDIO ? this.renderAudio() : this.renderVideo(),
                this.renderControls(),
                t === F.VIDEO ? this.renderPlayPausePop() : null,
                null != u
                    ? (0, l.jsx)('div', {
                          className: d()({ [P.overlayContentHidden]: E || c }),
                          children: u()
                      })
                    : null
            ]
        });
    }
    constructor(e) {
        var t, n;
        super(e),
            (t = this),
            w(this, '_unmounted', !1),
            w(this, '_lastMove', 0),
            w(this, '_analytics', void 0),
            w(this, 'mediaRef', u.createRef()),
            w(this, 'controlsRef', u.createRef()),
            w(this, 'playPausePopRef', u.createRef()),
            w(this, 'handleFullScreenExit', () => {
                let { current: e } = this.mediaRef;
                if (null == e) return;
                let t = (0, O.fn)(e.parentNode, e);
                (null == t || !(0, O.rB)(t)) && this.setState({ fullscreen: !1 });
            }),
            w(this, 'toggleFullscreen', () => {
                let e = !this.state.fullscreen;
                this.setState({ fullscreen: e });
            }),
            w(this, 'setMuted', (e) => {
                this.setState({ muted: e });
            }),
            w(this, 'toggleMuted', () => {
                this.setMuted(!this.state.muted);
            }),
            w(this, 'setTime', function (e) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    { current: r } = t.mediaRef;
                null != r && isFinite(r.duration) && isFinite(r.currentTime) && ((r.currentTime = e), t.updateValue(e / r.duration, n), t.updateTime(e, r.duration));
            }),
            w(this, 'handleUIUpdate', () => {
                if (!this.state.playing || this._unmounted) return;
                let { current: e } = this.mediaRef;
                if (null != e) e.duration > 0 && this.updateValue(e.currentTime / e.duration), this.updateTime(e.currentTime, e.duration), this.updateControlsVisibility(), requestAnimationFrame(this.handleUIUpdate);
            }),
            w(this, 'handleDrag', (e, t) => {
                let { current: n } = this.mediaRef;
                if (t === R.Z.Types.DURATION) null != n && isFinite(n.duration) && this.setTime(n.duration * e, !1);
                else if (t === R.Z.Types.VOLUME) {
                    let t = (0, N.A)(e, 1);
                    0 === t
                        ? this.setState({
                              muted: !0,
                              volume: t
                          })
                        : this.state.muted && t > 0
                          ? this.setState({
                                muted: !1,
                                volume: t
                            })
                          : this.setState({ volume: t });
                }
            }),
            w(this, 'handleLoaded', (e) => {
                this._analytics.onLoadedMetadata(e);
                let { current: t } = this.mediaRef;
                null != t &&
                    (this.updateTime(t.currentTime, t.duration),
                    this.setState({
                        hasLoadedMetadata: !0,
                        currentTime: t.currentTime,
                        duration: t.duration
                    }));
            }),
            w(this, 'handleDurationChange', () => {
                let { current: e } = this.mediaRef;
                null != e && (this.updateTime(e.currentTime, e.duration), this.setState({ duration: e.duration }));
            }),
            w(
                this,
                'handleBuffer',
                E().debounce(() => {
                    let { current: e } = this.mediaRef;
                    if (null == e) {
                        this.setState({ buffers: [] });
                        return;
                    }
                    this.setState({ buffers: H(e) });
                }, 400)
            ),
            w(this, 'handleEnded', (e) => {
                let { onEnded: t } = this.props;
                this.setState({
                    playing: !1,
                    hideControls: !1
                }),
                    null != t && t(e);
            }),
            w(this, 'handleMouseMove', () => {
                this._lastMove = Date.now();
            }),
            w(this, 'handleMouseLeave', () => {
                this.state.playing && (this._lastMove = 0), this.setState({ hovering: !1 });
            }),
            w(this, 'handleMouseEnter', () => {
                'none' === this.state.preload && this.setState({ preload: 'metadata' }), this.setState({ hovering: !0 });
            }),
            w(this, 'handleVideoClick', (e) => {
                let {
                    state: { hasClickedPlay: t, playing: n },
                    props: { onClick: r, autoPlay: i, autoMute: a }
                } = this;
                if (null != r) {
                    r(e);
                    return;
                }
                e.stopPropagation(),
                    i && !t && n && a
                        ? this.setState({
                              muted: !1,
                              hasClickedPlay: !0
                          })
                        : this.setPlay(!this.state.playing);
            }),
            w(this, 'setPlay', (e) => {
                let {
                    props: { autoMute: t },
                    state: { hasClickedPlay: n, muted: r }
                } = this;
                if (e !== this.state.playing)
                    e
                        ? this.setState({
                              playing: e,
                              hasClickedPlay: !0,
                              muted: (!!n || !t) && r
                          })
                        : this.setState({
                              playing: !1,
                              hideControls: !1
                          });
            }),
            w(this, 'handleDragStart', (e) => {
                var t, n;
                this.setState({ dragging: e }), this._analytics.onDragStart(null !== (n = null === (t = this.mediaRef.current) || void 0 === t ? void 0 : t.currentTime) && void 0 !== n ? n : null);
            }),
            w(this, 'handleDragEnd', () => {
                this.setState({ dragging: null }), (this._lastMove = Date.now());
            }),
            w(this, 'handleKeyDown', (e) => {
                let { current: t } = this.mediaRef;
                if (e.which === L.yXg.SPACE) e.preventDefault(), this.setPlay(!this.state.playing);
                else if (e.which >= L.yXg.DIGIT_0 && e.which <= L.yXg.DIGIT_9 && null != t) {
                    e.preventDefault();
                    let n = (e.which - L.yXg.DIGIT_0) / 10;
                    (t.currentTime = t.duration * n), this.setPlay(!0);
                }
            }),
            (this._analytics = new q({
                src: e.src,
                mimeType: null === (n = e.mimeType) || void 0 === n ? void 0 : n.join('/'),
                fileSize: e.fileSizeBytes
            }));
        let { autoPlay: r, autoMute: i, volume: a, playable: o } = this.props,
            s = 'function' == typeof a ? a() : a,
            l = 'function' == typeof i ? i() : i;
        this.state = {
            buffers: [],
            currentTime: null,
            dragging: null,
            duration: null,
            fullscreen: !1,
            hasClickedPlay: !1,
            hasLoadedMetadata: !1,
            hideControls: !o,
            muted: l,
            volume: s,
            playing: r,
            preload: 'none',
            width: Q.minWidth,
            height: Q.minHeight,
            hovering: !1
        };
    }
}
w(Q, 'Types', F),
    w(Q, 'defaultProps', {
        width: 400,
        height: 300,
        forceExternal: !1,
        playable: !0,
        downloadable: !0,
        autoPlay: !1,
        autoMute: !1,
        volume: 1
    }),
    w(Q, 'minWidth', 150),
    w(Q, 'minHeight', 110),
    (t.ZP = Q);

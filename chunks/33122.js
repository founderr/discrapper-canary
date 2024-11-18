n.d(t, {
    r: function () {
        return P;
    }
}),
    n(47120);
var a,
    i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(748780),
    d = n(481060),
    c = n(112724),
    u = n(446411),
    h = n(468846),
    p = n(679056),
    m = n(44488),
    g = n(519160),
    b = n(124347),
    f = n(283756),
    C = n(524444),
    I = n(585483),
    x = n(981631),
    _ = n(745747);
function v(e, t, n) {
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
function N() {
    var e, t;
    let n = ((e = ['grayscale(', ')']), !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })));
    return (
        (N = function () {
            return n;
        }),
        n
    );
}
let P = {
        SMALL: {
            width: 640,
            height: 360,
            margin: 15
        },
        MEDIUM: {
            width: 880,
            height: 495,
            margin: 20
        }
    },
    S = {
        width: 1920,
        height: 1080
    },
    E = {
        width: 1280,
        height: 720
    },
    L = (e) =>
        (0, C.lV)({
            ...e,
            className: _.videoWrapper,
            mediaPlayerClassName: _.mediaPlayer
        }),
    y = (e) => (0, i.jsx)(b.ZP, { ...e }),
    j = (e) => {
        let t,
            n,
            a,
            { item: s, size: r, onPlay: l, onEnded: o, onClick: c, playable: p, volume: m, isMuted: g, onVolumeChange: b, onMute: f } = e;
        if (s.type === x.s9s.YOUTUBE_VIDEO)
            (t = {
                url: (0, x.n8r)(s.youtubeVideoId),
                ...S
            }),
                (n = {
                    url: ''.concat((0, x.ivE)(s.youtubeVideoId), '?').concat('rel=0&iv_load_policy=3&showinfo=0&modestbranding=1'),
                    ...E
                }),
                (a = h.pn.YOUTUBE);
        else {
            let e = null != s.width ? s.width : 0,
                a = null != s.height ? s.height : 0;
            (t = {
                url: s.thumbnailSrc,
                width: e,
                height: a
            }),
                (n = {
                    url: s.src,
                    proxyURL: s.src,
                    width: e,
                    height: a
                });
        }
        let I = (0, i.jsx)(u.BC, {
            href: null,
            thumbnail: t,
            video: n,
            provider: a,
            allowFullScreen: !0,
            maxHeight: r.height,
            maxWidth: r.width,
            onPlay: l,
            onEnded: o,
            playable: p,
            className: _.video,
            volume: m,
            onVolumeChange: b,
            autoMute: g,
            onMute: f,
            autoPlay: p,
            renderVideoComponent: L,
            renderImageComponent: y,
            renderLinkComponent: C.iT
        });
        return p
            ? I
            : (0, i.jsx)(d.Clickable, {
                  className: _.itemImageWrapper,
                  onClick: c,
                  children: I
              });
    },
    k = () =>
        (0, i.jsx)('div', {
            className: _.paginationVideoOverlay,
            children: (0, i.jsx)(f.Z, {
                inactive: !0,
                className: _.paginationVideoPlayPill,
                renderLinkComponent: C.iT
            })
        });
class w extends (a = s.PureComponent) {
    componentDidMount() {
        I.S.subscribe(x.CkL.CAROUSEL_PREV, this.manualPrevious), I.S.subscribe(x.CkL.CAROUSEL_NEXT, this.manualNext);
    }
    componentWillUnmount() {
        I.S.unsubscribe(x.CkL.CAROUSEL_PREV, this.manualPrevious), I.S.unsubscribe(x.CkL.CAROUSEL_NEXT, this.manualNext);
    }
    getStyle(e, t) {
        let n = t.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
            extrapolate: o.Z.Extrapolate.CLAMP
        });
        return {
            opacity: t.interpolate({
                inputRange: [0, 1],
                outputRange: [0.3, 1],
                extrapolate: o.Z.Extrapolate.CLAMP
            }),
            filter: o.Z.template(N(), n)
        };
    }
    handleCurrentItemClick(e, t) {
        let { onCurrentItemClick: n } = this.props;
        null != n && n(e, t), this.setState({ hasInteracted: !0 });
    }
    handleEdgeItemMouseEnter(e) {
        let { currentIndex: t } = this.state;
        e < t ? this.setState({ hoveringPreviousItem: !0 }) : e > t && this.setState({ hoveringNextItem: !0 });
    }
    renderCarousel() {
        let { items: e } = this.props,
            { currentIndex: t, animate: n, hoveringPreviousItem: a, hoveringNextItem: s } = this.state,
            r = (0, i.jsx)(g.ZP, {
                items: e,
                itemSize: this.getItemSize(),
                renderItem: this.renderItem,
                currentIndex: t,
                animate: n,
                edgeItems: 2
            });
        return e.length <= 1
            ? r
            : (0, i.jsxs)('div', {
                  className: _.carouselButtonsContainer,
                  children: [
                      r,
                      (0, i.jsx)(m.am, {
                          onClick: this.manualPrevious,
                          className: l()(_.arrow, { [_.arrowHovered]: a })
                      }),
                      (0, i.jsx)(m.Pz, {
                          onClick: this.manualNext,
                          className: l()(_.arrow, { [_.arrowHovered]: s })
                      })
                  ]
              });
    }
    getPaginationSrc(e) {
        return e.type === x.s9s.YOUTUBE_VIDEO ? (0, x.n8r)(e.youtubeVideoId) : e.type === x.s9s.IMG ? e.src : e.type === x.s9s.VIDEO ? e.thumbnailSrc : null;
    }
    render() {
        let { items: e, className: t, autoplayInterval: n, paused: a } = this.props,
            { currentIndex: s, playingVideo: r, hasInteracted: l } = this.state;
        return (0, i.jsxs)(p.Z, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: n,
            className: t,
            disable: r || l || a,
            children: [
                this.renderCarousel(),
                (0, i.jsx)('div', {
                    className: _.pagination,
                    children: (0, i.jsx)(m.ZP, {
                        renderItem: this.renderPaginationItem,
                        scrollToPadding: 85,
                        items: e,
                        selectedIndex: s,
                        onSetItem: (e) => this.setItem(e, !0),
                        paginationContainerClass: _.scroller,
                        align: e.length < 6 ? m.ZP.Align.LEFT : m.ZP.Align.CENTER
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            v(this, 'state', {
                currentIndex: 0,
                animate: !0,
                playingVideo: !1,
                hasInteracted: !1,
                hoveringPreviousItem: !1,
                hoveringNextItem: !1,
                volume: 1,
                isMuted: !0
            }),
            v(this, 'getItemSize', () => {
                let { width: e } = this.props,
                    t = P.MEDIUM;
                return null != e && e < t.width && (t = P.SMALL), t;
            }),
            v(this, 'setItem', (e, t) => {
                let {
                        props: { items: n, onIntentionalChange: a },
                        state: { currentIndex: i }
                    } = this,
                    s = (0, g.gN)(i, n.length),
                    r = (0, g.gN)(e, n.length),
                    l = 1 === Math.abs(e - s) || (e === n.length - 1 && 0 === s) || (0 === e && s === n.length - 1);
                this.setState({
                    playingVideo: !1,
                    currentIndex: r,
                    animate: l,
                    hasInteracted: t
                }),
                    t && null != a && a(n[r], s, r);
            }),
            v(this, 'autoNext', () => {
                this.setItem(this.state.currentIndex + 1, !1);
            }),
            v(this, 'manualNext', () => {
                this.setItem(this.state.currentIndex + 1, !0);
            }),
            v(this, 'manualPrevious', () => {
                this.setItem(this.state.currentIndex - 1, !0);
            }),
            v(this, 'handlePlay', (e) =>
                this.setState({
                    playingVideo: !0,
                    hasInteracted: !e
                })
            ),
            v(this, 'handleEnded', () => {
                !this.state.hasInteracted && this.autoNext();
            }),
            v(this, 'handleVolumeChange', (e) => {
                this.setState({
                    volume: e,
                    hasInteracted: !0
                });
            }),
            v(this, 'handleMute', (e) => {
                this.setState({
                    isMuted: e,
                    hasInteracted: !0
                });
            }),
            v(this, 'handleVideoClick', (e) => {
                this.setItem(e, !0);
            }),
            v(this, 'handleEdgeItemMouseLeave', () => {
                this.setState({
                    hoveringPreviousItem: !1,
                    hoveringNextItem: !1
                });
            }),
            v(this, 'renderCarouselImage', (e, t, n) =>
                n
                    ? (0, i.jsx)(d.Clickable, {
                          onClick: () => this.handleCurrentItemClick(e, t),
                          className: _.itemImageWrapper,
                          children: (0, i.jsx)('img', {
                              src: e.src,
                              alt: '',
                              className: _.currentImage
                          })
                      })
                    : (0, i.jsx)(d.Clickable, {
                          onClick: () => this.setItem(t, !0),
                          className: _.itemImageWrapper,
                          children: (0, i.jsx)('img', {
                              alt: '',
                              className: _.itemImage,
                              src: e.src,
                              draggable: !1
                          })
                      })
            ),
            v(this, 'renderItem', (e, t, n) => {
                let { currentIndex: a, volume: s, isMuted: r } = this.state,
                    d = t === (0, g.gN)(a, this.props.items.length);
                return (0, i.jsx)(o.Z.div, {
                    className: l()(_.item, { [_.currentItem]: d }),
                    style: null != n ? this.getStyle(t, n) : null,
                    onMouseEnter: d ? null : () => this.handleEdgeItemMouseEnter(t),
                    onMouseLeave: d ? null : this.handleEdgeItemMouseLeave,
                    children:
                        e.type === x.s9s.VIDEO || e.type === x.s9s.YOUTUBE_VIDEO
                            ? (0, i.jsx)(j, {
                                  item: e,
                                  size: this.getItemSize(),
                                  onPlay: this.handlePlay,
                                  onEnded: this.handleEnded,
                                  playable: d,
                                  onClick: () => this.handleVideoClick(t),
                                  volume: s,
                                  onVolumeChange: this.handleVolumeChange,
                                  isMuted: r,
                                  onMute: this.handleMute
                              })
                            : this.renderCarouselImage(e, t, d)
                });
            }),
            v(this, 'renderPaginationItem', (e, t) => {
                let { currentIndex: n } = this.state,
                    a = n === t;
                return (0, i.jsxs)(
                    'div',
                    {
                        className: l()(_.paginationItem, a ? _.selectedStorePaginationItem : _.unselectedStorePaginationItem),
                        children: [
                            (0, i.jsx)('img', {
                                alt: null == e.alt ? t : e.alt,
                                className: _.storePaginationImg,
                                src: this.getPaginationSrc(e),
                                draggable: !1
                            }),
                            e.type === x.s9s.YOUTUBE_VIDEO || e.type === x.s9s.VIDEO ? (0, i.jsx)(k, {}) : null,
                            a ? (0, i.jsx)('div', { className: _.overlappingBorder }) : null
                        ]
                    },
                    'page-'.concat(t)
                );
            });
    }
}
v(w, 'defaultProps', {
    autoplayInterval: 8000,
    paused: !1
}),
    (t.Z = (0, c.Z)(w));

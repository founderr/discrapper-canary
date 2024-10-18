s.d(t, {
    r: function () {
        return y;
    }
}),
    s(47120);
var n,
    a = s(735250),
    i = s(470079),
    r = s(120356),
    l = s.n(r),
    o = s(748780),
    h = s(481060),
    d = s(112724),
    u = s(446411),
    c = s(468846),
    p = s(679056),
    m = s(44488),
    g = s(519160),
    I = s(124347),
    x = s(283756),
    C = s(524444),
    v = s(585483),
    N = s(981631),
    f = s(161243);
function b(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
function P() {
    var e, t;
    let s = ((e = ['grayscale(', ')']), !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })));
    return (
        (P = function () {
            return s;
        }),
        s
    );
}
let y = {
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
    j = (e) =>
        (0, C.lV)({
            ...e,
            className: f.videoWrapper,
            mediaPlayerClassName: f.mediaPlayer
        }),
    L = (e) => (0, a.jsx)(I.ZP, { ...e }),
    O = (e) => {
        let t,
            s,
            n,
            { item: i, size: r, onPlay: l, onEnded: o, onClick: d, playable: p, volume: m, isMuted: g, onVolumeChange: I, onMute: x } = e;
        if (i.type === N.s9s.YOUTUBE_VIDEO)
            (t = {
                url: (0, N.n8r)(i.youtubeVideoId),
                ...S
            }),
                (s = {
                    url: ''.concat((0, N.ivE)(i.youtubeVideoId), '?').concat('rel=0&iv_load_policy=3&showinfo=0&modestbranding=1'),
                    ...E
                }),
                (n = c.pn.YOUTUBE);
        else {
            let e = null != i.width ? i.width : 0,
                n = null != i.height ? i.height : 0;
            (t = {
                url: i.thumbnailSrc,
                width: e,
                height: n
            }),
                (s = {
                    url: i.src,
                    proxyURL: i.src,
                    width: e,
                    height: n
                });
        }
        let v = (0, a.jsx)(u.BC, {
            href: null,
            thumbnail: t,
            video: s,
            provider: n,
            allowFullScreen: !0,
            maxHeight: r.height,
            maxWidth: r.width,
            onPlay: l,
            onEnded: o,
            playable: p,
            className: f.video,
            volume: m,
            onVolumeChange: I,
            autoMute: g,
            onMute: x,
            autoPlay: p,
            renderVideoComponent: j,
            renderImageComponent: L,
            renderLinkComponent: C.iT
        });
        return p
            ? v
            : (0, a.jsx)(h.Clickable, {
                  className: f.itemImageWrapper,
                  onClick: d,
                  children: v
              });
    },
    M = () =>
        (0, a.jsx)('div', {
            className: f.paginationVideoOverlay,
            children: (0, a.jsx)(x.Z, {
                inactive: !0,
                className: f.paginationVideoPlayPill,
                renderLinkComponent: C.iT
            })
        });
class Z extends (n = i.PureComponent) {
    componentDidMount() {
        v.S.subscribe(N.CkL.CAROUSEL_PREV, this.manualPrevious), v.S.subscribe(N.CkL.CAROUSEL_NEXT, this.manualNext);
    }
    componentWillUnmount() {
        v.S.unsubscribe(N.CkL.CAROUSEL_PREV, this.manualPrevious), v.S.unsubscribe(N.CkL.CAROUSEL_NEXT, this.manualNext);
    }
    getStyle(e, t) {
        let s = t.interpolate({
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
            filter: o.Z.template(P(), s)
        };
    }
    handleCurrentItemClick(e, t) {
        let { onCurrentItemClick: s } = this.props;
        null != s && s(e, t), this.setState({ hasInteracted: !0 });
    }
    handleEdgeItemMouseEnter(e) {
        let { currentIndex: t } = this.state;
        e < t ? this.setState({ hoveringPreviousItem: !0 }) : e > t && this.setState({ hoveringNextItem: !0 });
    }
    renderCarousel() {
        let { items: e } = this.props,
            { currentIndex: t, animate: s, hoveringPreviousItem: n, hoveringNextItem: i } = this.state,
            r = (0, a.jsx)(g.ZP, {
                items: e,
                itemSize: this.getItemSize(),
                renderItem: this.renderItem,
                currentIndex: t,
                animate: s,
                edgeItems: 2
            });
        return e.length <= 1
            ? r
            : (0, a.jsxs)('div', {
                  className: f.carouselButtonsContainer,
                  children: [
                      r,
                      (0, a.jsx)(m.am, {
                          onClick: this.manualPrevious,
                          className: l()(f.arrow, { [f.arrowHovered]: n })
                      }),
                      (0, a.jsx)(m.Pz, {
                          onClick: this.manualNext,
                          className: l()(f.arrow, { [f.arrowHovered]: i })
                      })
                  ]
              });
    }
    getPaginationSrc(e) {
        return e.type === N.s9s.YOUTUBE_VIDEO ? (0, N.n8r)(e.youtubeVideoId) : e.type === N.s9s.IMG ? e.src : e.type === N.s9s.VIDEO ? e.thumbnailSrc : null;
    }
    render() {
        let { items: e, className: t, autoplayInterval: s, paused: n } = this.props,
            { currentIndex: i, playingVideo: r, hasInteracted: l } = this.state;
        return (0, a.jsxs)(p.Z, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: s,
            className: t,
            disable: r || l || n,
            children: [
                this.renderCarousel(),
                (0, a.jsx)('div', {
                    className: f.pagination,
                    children: (0, a.jsx)(m.ZP, {
                        renderItem: this.renderPaginationItem,
                        scrollToPadding: 85,
                        items: e,
                        selectedIndex: i,
                        onSetItem: (e) => this.setItem(e, !0),
                        paginationContainerClass: f.scroller,
                        align: e.length < 6 ? m.ZP.Align.LEFT : m.ZP.Align.CENTER
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            b(this, 'state', {
                currentIndex: 0,
                animate: !0,
                playingVideo: !1,
                hasInteracted: !1,
                hoveringPreviousItem: !1,
                hoveringNextItem: !1,
                volume: 1,
                isMuted: !0
            }),
            b(this, 'getItemSize', () => {
                let { width: e } = this.props,
                    t = y.MEDIUM;
                return null != e && e < t.width && (t = y.SMALL), t;
            }),
            b(this, 'setItem', (e, t) => {
                let {
                        props: { items: s, onIntentionalChange: n },
                        state: { currentIndex: a }
                    } = this,
                    i = (0, g.gN)(a, s.length),
                    r = (0, g.gN)(e, s.length),
                    l = 1 === Math.abs(e - i) || (e === s.length - 1 && 0 === i) || (0 === e && i === s.length - 1);
                this.setState({
                    playingVideo: !1,
                    currentIndex: r,
                    animate: l,
                    hasInteracted: t
                }),
                    t && null != n && n(s[r], i, r);
            }),
            b(this, 'autoNext', () => {
                this.setItem(this.state.currentIndex + 1, !1);
            }),
            b(this, 'manualNext', () => {
                this.setItem(this.state.currentIndex + 1, !0);
            }),
            b(this, 'manualPrevious', () => {
                this.setItem(this.state.currentIndex - 1, !0);
            }),
            b(this, 'handlePlay', (e) =>
                this.setState({
                    playingVideo: !0,
                    hasInteracted: !e
                })
            ),
            b(this, 'handleEnded', () => {
                !this.state.hasInteracted && this.autoNext();
            }),
            b(this, 'handleVolumeChange', (e) => {
                this.setState({
                    volume: e,
                    hasInteracted: !0
                });
            }),
            b(this, 'handleMute', (e) => {
                this.setState({
                    isMuted: e,
                    hasInteracted: !0
                });
            }),
            b(this, 'handleVideoClick', (e) => {
                this.setItem(e, !0);
            }),
            b(this, 'handleEdgeItemMouseLeave', () => {
                this.setState({
                    hoveringPreviousItem: !1,
                    hoveringNextItem: !1
                });
            }),
            b(this, 'renderCarouselImage', (e, t, s) =>
                s
                    ? (0, a.jsx)(h.Clickable, {
                          onClick: () => this.handleCurrentItemClick(e, t),
                          className: f.itemImageWrapper,
                          children: (0, a.jsx)('img', {
                              src: e.src,
                              alt: '',
                              className: f.currentImage
                          })
                      })
                    : (0, a.jsx)(h.Clickable, {
                          onClick: () => this.setItem(t, !0),
                          className: f.itemImageWrapper,
                          children: (0, a.jsx)('img', {
                              alt: '',
                              className: f.itemImage,
                              src: e.src,
                              draggable: !1
                          })
                      })
            ),
            b(this, 'renderItem', (e, t, s) => {
                let { currentIndex: n, volume: i, isMuted: r } = this.state,
                    h = t === (0, g.gN)(n, this.props.items.length);
                return (0, a.jsx)(o.Z.div, {
                    className: l()(f.item, { [f.currentItem]: h }),
                    style: null != s ? this.getStyle(t, s) : null,
                    onMouseEnter: h ? null : () => this.handleEdgeItemMouseEnter(t),
                    onMouseLeave: h ? null : this.handleEdgeItemMouseLeave,
                    children:
                        e.type === N.s9s.VIDEO || e.type === N.s9s.YOUTUBE_VIDEO
                            ? (0, a.jsx)(O, {
                                  item: e,
                                  size: this.getItemSize(),
                                  onPlay: this.handlePlay,
                                  onEnded: this.handleEnded,
                                  playable: h,
                                  onClick: () => this.handleVideoClick(t),
                                  volume: i,
                                  onVolumeChange: this.handleVolumeChange,
                                  isMuted: r,
                                  onMute: this.handleMute
                              })
                            : this.renderCarouselImage(e, t, h)
                });
            }),
            b(this, 'renderPaginationItem', (e, t) => {
                let { currentIndex: s } = this.state,
                    n = s === t;
                return (0, a.jsxs)(
                    'div',
                    {
                        className: l()(f.paginationItem, n ? f.selectedStorePaginationItem : f.unselectedStorePaginationItem),
                        children: [
                            (0, a.jsx)('img', {
                                alt: null == e.alt ? t : e.alt,
                                className: f.storePaginationImg,
                                src: this.getPaginationSrc(e),
                                draggable: !1
                            }),
                            e.type === N.s9s.YOUTUBE_VIDEO || e.type === N.s9s.VIDEO ? (0, a.jsx)(M, {}) : null,
                            n ? (0, a.jsx)('div', { className: f.overlappingBorder }) : null
                        ]
                    },
                    'page-'.concat(t)
                );
            });
    }
}
b(Z, 'defaultProps', {
    autoplayInterval: 8000,
    paused: !1
}),
    (t.Z = (0, d.Z)(Z));

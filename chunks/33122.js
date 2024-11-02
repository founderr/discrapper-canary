n.d(t, {
    r: function () {
        return P;
    }
}),
    n(47120);
var s,
    i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(748780),
    h = n(481060),
    u = n(112724),
    d = n(446411),
    c = n(468846),
    p = n(679056),
    m = n(44488),
    g = n(519160),
    C = n(124347),
    I = n(283756),
    x = n(524444),
    f = n(585483),
    v = n(981631),
    b = n(161243);
function E(e, t, n) {
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
    L = {
        width: 1280,
        height: 720
    },
    y = (e) =>
        (0, x.lV)({
            ...e,
            className: b.videoWrapper,
            mediaPlayerClassName: b.mediaPlayer
        }),
    j = (e) => (0, i.jsx)(C.ZP, { ...e }),
    k = (e) => {
        let t,
            n,
            s,
            { item: a, size: r, onPlay: l, onEnded: o, onClick: u, playable: p, volume: m, isMuted: g, onVolumeChange: C, onMute: I } = e;
        if (a.type === v.s9s.YOUTUBE_VIDEO)
            (t = {
                url: (0, v.n8r)(a.youtubeVideoId),
                ...S
            }),
                (n = {
                    url: ''.concat((0, v.ivE)(a.youtubeVideoId), '?').concat('rel=0&iv_load_policy=3&showinfo=0&modestbranding=1'),
                    ...L
                }),
                (s = c.pn.YOUTUBE);
        else {
            let e = null != a.width ? a.width : 0,
                s = null != a.height ? a.height : 0;
            (t = {
                url: a.thumbnailSrc,
                width: e,
                height: s
            }),
                (n = {
                    url: a.src,
                    proxyURL: a.src,
                    width: e,
                    height: s
                });
        }
        let f = (0, i.jsx)(d.BC, {
            href: null,
            thumbnail: t,
            video: n,
            provider: s,
            allowFullScreen: !0,
            maxHeight: r.height,
            maxWidth: r.width,
            onPlay: l,
            onEnded: o,
            playable: p,
            className: b.video,
            volume: m,
            onVolumeChange: C,
            autoMute: g,
            onMute: I,
            autoPlay: p,
            renderVideoComponent: y,
            renderImageComponent: j,
            renderLinkComponent: x.iT
        });
        return p
            ? f
            : (0, i.jsx)(h.Clickable, {
                  className: b.itemImageWrapper,
                  onClick: u,
                  children: f
              });
    },
    O = () =>
        (0, i.jsx)('div', {
            className: b.paginationVideoOverlay,
            children: (0, i.jsx)(I.Z, {
                inactive: !0,
                className: b.paginationVideoPlayPill,
                renderLinkComponent: x.iT
            })
        });
class M extends (s = a.PureComponent) {
    componentDidMount() {
        f.S.subscribe(v.CkL.CAROUSEL_PREV, this.manualPrevious), f.S.subscribe(v.CkL.CAROUSEL_NEXT, this.manualNext);
    }
    componentWillUnmount() {
        f.S.unsubscribe(v.CkL.CAROUSEL_PREV, this.manualPrevious), f.S.unsubscribe(v.CkL.CAROUSEL_NEXT, this.manualNext);
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
            { currentIndex: t, animate: n, hoveringPreviousItem: s, hoveringNextItem: a } = this.state,
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
                  className: b.carouselButtonsContainer,
                  children: [
                      r,
                      (0, i.jsx)(m.am, {
                          onClick: this.manualPrevious,
                          className: l()(b.arrow, { [b.arrowHovered]: s })
                      }),
                      (0, i.jsx)(m.Pz, {
                          onClick: this.manualNext,
                          className: l()(b.arrow, { [b.arrowHovered]: a })
                      })
                  ]
              });
    }
    getPaginationSrc(e) {
        return e.type === v.s9s.YOUTUBE_VIDEO ? (0, v.n8r)(e.youtubeVideoId) : e.type === v.s9s.IMG ? e.src : e.type === v.s9s.VIDEO ? e.thumbnailSrc : null;
    }
    render() {
        let { items: e, className: t, autoplayInterval: n, paused: s } = this.props,
            { currentIndex: a, playingVideo: r, hasInteracted: l } = this.state;
        return (0, i.jsxs)(p.Z, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: n,
            className: t,
            disable: r || l || s,
            children: [
                this.renderCarousel(),
                (0, i.jsx)('div', {
                    className: b.pagination,
                    children: (0, i.jsx)(m.ZP, {
                        renderItem: this.renderPaginationItem,
                        scrollToPadding: 85,
                        items: e,
                        selectedIndex: a,
                        onSetItem: (e) => this.setItem(e, !0),
                        paginationContainerClass: b.scroller,
                        align: e.length < 6 ? m.ZP.Align.LEFT : m.ZP.Align.CENTER
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'state', {
                currentIndex: 0,
                animate: !0,
                playingVideo: !1,
                hasInteracted: !1,
                hoveringPreviousItem: !1,
                hoveringNextItem: !1,
                volume: 1,
                isMuted: !0
            }),
            E(this, 'getItemSize', () => {
                let { width: e } = this.props,
                    t = P.MEDIUM;
                return null != e && e < t.width && (t = P.SMALL), t;
            }),
            E(this, 'setItem', (e, t) => {
                let {
                        props: { items: n, onIntentionalChange: s },
                        state: { currentIndex: i }
                    } = this,
                    a = (0, g.gN)(i, n.length),
                    r = (0, g.gN)(e, n.length),
                    l = 1 === Math.abs(e - a) || (e === n.length - 1 && 0 === a) || (0 === e && a === n.length - 1);
                this.setState({
                    playingVideo: !1,
                    currentIndex: r,
                    animate: l,
                    hasInteracted: t
                }),
                    t && null != s && s(n[r], a, r);
            }),
            E(this, 'autoNext', () => {
                this.setItem(this.state.currentIndex + 1, !1);
            }),
            E(this, 'manualNext', () => {
                this.setItem(this.state.currentIndex + 1, !0);
            }),
            E(this, 'manualPrevious', () => {
                this.setItem(this.state.currentIndex - 1, !0);
            }),
            E(this, 'handlePlay', (e) =>
                this.setState({
                    playingVideo: !0,
                    hasInteracted: !e
                })
            ),
            E(this, 'handleEnded', () => {
                !this.state.hasInteracted && this.autoNext();
            }),
            E(this, 'handleVolumeChange', (e) => {
                this.setState({
                    volume: e,
                    hasInteracted: !0
                });
            }),
            E(this, 'handleMute', (e) => {
                this.setState({
                    isMuted: e,
                    hasInteracted: !0
                });
            }),
            E(this, 'handleVideoClick', (e) => {
                this.setItem(e, !0);
            }),
            E(this, 'handleEdgeItemMouseLeave', () => {
                this.setState({
                    hoveringPreviousItem: !1,
                    hoveringNextItem: !1
                });
            }),
            E(this, 'renderCarouselImage', (e, t, n) =>
                n
                    ? (0, i.jsx)(h.Clickable, {
                          onClick: () => this.handleCurrentItemClick(e, t),
                          className: b.itemImageWrapper,
                          children: (0, i.jsx)('img', {
                              src: e.src,
                              alt: '',
                              className: b.currentImage
                          })
                      })
                    : (0, i.jsx)(h.Clickable, {
                          onClick: () => this.setItem(t, !0),
                          className: b.itemImageWrapper,
                          children: (0, i.jsx)('img', {
                              alt: '',
                              className: b.itemImage,
                              src: e.src,
                              draggable: !1
                          })
                      })
            ),
            E(this, 'renderItem', (e, t, n) => {
                let { currentIndex: s, volume: a, isMuted: r } = this.state,
                    h = t === (0, g.gN)(s, this.props.items.length);
                return (0, i.jsx)(o.Z.div, {
                    className: l()(b.item, { [b.currentItem]: h }),
                    style: null != n ? this.getStyle(t, n) : null,
                    onMouseEnter: h ? null : () => this.handleEdgeItemMouseEnter(t),
                    onMouseLeave: h ? null : this.handleEdgeItemMouseLeave,
                    children:
                        e.type === v.s9s.VIDEO || e.type === v.s9s.YOUTUBE_VIDEO
                            ? (0, i.jsx)(k, {
                                  item: e,
                                  size: this.getItemSize(),
                                  onPlay: this.handlePlay,
                                  onEnded: this.handleEnded,
                                  playable: h,
                                  onClick: () => this.handleVideoClick(t),
                                  volume: a,
                                  onVolumeChange: this.handleVolumeChange,
                                  isMuted: r,
                                  onMute: this.handleMute
                              })
                            : this.renderCarouselImage(e, t, h)
                });
            }),
            E(this, 'renderPaginationItem', (e, t) => {
                let { currentIndex: n } = this.state,
                    s = n === t;
                return (0, i.jsxs)(
                    'div',
                    {
                        className: l()(b.paginationItem, s ? b.selectedStorePaginationItem : b.unselectedStorePaginationItem),
                        children: [
                            (0, i.jsx)('img', {
                                alt: null == e.alt ? t : e.alt,
                                className: b.storePaginationImg,
                                src: this.getPaginationSrc(e),
                                draggable: !1
                            }),
                            e.type === v.s9s.YOUTUBE_VIDEO || e.type === v.s9s.VIDEO ? (0, i.jsx)(O, {}) : null,
                            s ? (0, i.jsx)('div', { className: b.overlappingBorder }) : null
                        ]
                    },
                    'page-'.concat(t)
                );
            });
    }
}
E(M, 'defaultProps', {
    autoplayInterval: 8000,
    paused: !1
}),
    (t.Z = (0, u.Z)(M));

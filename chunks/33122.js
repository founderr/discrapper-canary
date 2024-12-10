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
    d = n(112724),
    c = n(446411),
    u = n(468846),
    p = n(679056),
    m = n(44488),
    g = n(519160),
    C = n(124347),
    x = n(283756),
    I = n(524444),
    v = n(585483),
    f = n(981631),
    N = n(396587);
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
function b() {
    var e, t;
    let n = ((e = ['grayscale(', ')']), !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })));
    return (
        (b = function () {
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
        (0, I.lV)({
            ...e,
            className: N.videoWrapper,
            mediaPlayerClassName: N.mediaPlayer
        }),
    j = (e) => (0, i.jsx)(C.ZP, { ...e }),
    M = (e) => {
        let t,
            n,
            s,
            { item: a, size: r, onPlay: l, onEnded: o, onClick: d, playable: p, volume: m, isMuted: g, onVolumeChange: C, onMute: x } = e;
        if (a.type === f.s9s.YOUTUBE_VIDEO)
            (t = {
                url: (0, f.n8r)(a.youtubeVideoId),
                ...S
            }),
                (n = {
                    url: ''.concat((0, f.ivE)(a.youtubeVideoId), '?').concat('rel=0&iv_load_policy=3&showinfo=0&modestbranding=1'),
                    ...L
                }),
                (s = u.pn.YOUTUBE);
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
        let v = (0, i.jsx)(c.BC, {
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
            className: N.video,
            volume: m,
            onVolumeChange: C,
            autoMute: g,
            onMute: x,
            autoPlay: p,
            renderVideoComponent: y,
            renderImageComponent: j,
            renderLinkComponent: I.iT
        });
        return p
            ? v
            : (0, i.jsx)(h.Clickable, {
                  className: N.itemImageWrapper,
                  onClick: d,
                  children: v
              });
    },
    T = () =>
        (0, i.jsx)('div', {
            className: N.paginationVideoOverlay,
            children: (0, i.jsx)(x.Z, {
                inactive: !0,
                className: N.paginationVideoPlayPill,
                renderLinkComponent: I.iT
            })
        });
class O extends (s = a.PureComponent) {
    componentDidMount() {
        v.S.subscribe(f.CkL.CAROUSEL_PREV, this.manualPrevious), v.S.subscribe(f.CkL.CAROUSEL_NEXT, this.manualNext);
    }
    componentWillUnmount() {
        v.S.unsubscribe(f.CkL.CAROUSEL_PREV, this.manualPrevious), v.S.unsubscribe(f.CkL.CAROUSEL_NEXT, this.manualNext);
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
            filter: o.Z.template(b(), n)
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
                  className: N.carouselButtonsContainer,
                  children: [
                      r,
                      (0, i.jsx)(m.am, {
                          onClick: this.manualPrevious,
                          className: l()(N.arrow, { [N.arrowHovered]: s })
                      }),
                      (0, i.jsx)(m.Pz, {
                          onClick: this.manualNext,
                          className: l()(N.arrow, { [N.arrowHovered]: a })
                      })
                  ]
              });
    }
    getPaginationSrc(e) {
        return e.type === f.s9s.YOUTUBE_VIDEO ? (0, f.n8r)(e.youtubeVideoId) : e.type === f.s9s.IMG ? e.src : e.type === f.s9s.VIDEO ? e.thumbnailSrc : null;
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
                    className: N.pagination,
                    children: (0, i.jsx)(m.ZP, {
                        renderItem: this.renderPaginationItem,
                        scrollToPadding: 85,
                        items: e,
                        selectedIndex: a,
                        onSetItem: (e) => this.setItem(e, !0),
                        paginationContainerClass: N.scroller,
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
                          className: N.itemImageWrapper,
                          children: (0, i.jsx)('img', {
                              src: e.src,
                              alt: '',
                              className: N.currentImage
                          })
                      })
                    : (0, i.jsx)(h.Clickable, {
                          onClick: () => this.setItem(t, !0),
                          className: N.itemImageWrapper,
                          children: (0, i.jsx)('img', {
                              alt: '',
                              className: N.itemImage,
                              src: e.src,
                              draggable: !1
                          })
                      })
            ),
            E(this, 'renderItem', (e, t, n) => {
                let { currentIndex: s, volume: a, isMuted: r } = this.state,
                    h = t === (0, g.gN)(s, this.props.items.length);
                return (0, i.jsx)(o.Z.div, {
                    className: l()(N.item, { [N.currentItem]: h }),
                    style: null != n ? this.getStyle(t, n) : null,
                    onMouseEnter: h ? null : () => this.handleEdgeItemMouseEnter(t),
                    onMouseLeave: h ? null : this.handleEdgeItemMouseLeave,
                    children:
                        e.type === f.s9s.VIDEO || e.type === f.s9s.YOUTUBE_VIDEO
                            ? (0, i.jsx)(M, {
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
                        className: l()(N.paginationItem, s ? N.selectedStorePaginationItem : N.unselectedStorePaginationItem),
                        children: [
                            (0, i.jsx)('img', {
                                alt: null == e.alt ? t : e.alt,
                                className: N.storePaginationImg,
                                src: this.getPaginationSrc(e),
                                draggable: !1
                            }),
                            e.type === f.s9s.YOUTUBE_VIDEO || e.type === f.s9s.VIDEO ? (0, i.jsx)(T, {}) : null,
                            s ? (0, i.jsx)('div', { className: N.overlappingBorder }) : null
                        ]
                    },
                    'page-'.concat(t)
                );
            });
    }
}
E(O, 'defaultProps', {
    autoplayInterval: 8000,
    paused: !1
}),
    (t.Z = (0, d.Z)(O));

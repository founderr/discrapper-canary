n.d(t, {
    r: function () {
        return N;
    }
}),
    n(47120);
var a,
    i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(748780),
    d = n(481060),
    u = n(112724),
    c = n(446411),
    h = n(468846),
    p = n(679056),
    m = n(44488),
    g = n(519160),
    f = n(124347),
    b = n(283756),
    C = n(524444),
    I = n(585483),
    x = n(981631),
    v = n(829414);
function _(e, t, n) {
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
function P() {
    var e, t;
    let n = ((e = ['grayscale(', ')']), !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })));
    return (
        (P = function () {
            return n;
        }),
        n
    );
}
let N = {
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
    E = {
        width: 1920,
        height: 1080
    },
    S = {
        width: 1280,
        height: 720
    },
    L = (e) =>
        (0, C.lV)({
            ...e,
            className: v.videoWrapper,
            mediaPlayerClassName: v.mediaPlayer
        }),
    y = (e) => (0, i.jsx)(f.ZP, { ...e }),
    w = (e) => {
        let t,
            n,
            a,
            { item: r, size: s, onPlay: l, onEnded: o, onClick: u, playable: p, volume: m, isMuted: g, onVolumeChange: f, onMute: b } = e;
        if (r.type === x.s9s.YOUTUBE_VIDEO)
            (t = {
                url: (0, x.n8r)(r.youtubeVideoId),
                ...E
            }),
                (n = {
                    url: ''.concat((0, x.ivE)(r.youtubeVideoId), '?').concat('rel=0&iv_load_policy=3&showinfo=0&modestbranding=1'),
                    ...S
                }),
                (a = h.pn.YOUTUBE);
        else {
            let e = null != r.width ? r.width : 0,
                a = null != r.height ? r.height : 0;
            (t = {
                url: r.thumbnailSrc,
                width: e,
                height: a
            }),
                (n = {
                    url: r.src,
                    proxyURL: r.src,
                    width: e,
                    height: a
                });
        }
        let I = (0, i.jsx)(c.BC, {
            href: null,
            thumbnail: t,
            video: n,
            provider: a,
            allowFullScreen: !0,
            maxHeight: s.height,
            maxWidth: s.width,
            onPlay: l,
            onEnded: o,
            playable: p,
            className: v.video,
            volume: m,
            onVolumeChange: f,
            autoMute: g,
            onMute: b,
            autoPlay: p,
            renderVideoComponent: L,
            renderImageComponent: y,
            renderLinkComponent: C.iT
        });
        return p
            ? I
            : (0, i.jsx)(d.Clickable, {
                  className: v.itemImageWrapper,
                  onClick: u,
                  children: I
              });
    },
    k = () =>
        (0, i.jsx)('div', {
            className: v.paginationVideoOverlay,
            children: (0, i.jsx)(b.Z, {
                inactive: !0,
                className: v.paginationVideoPlayPill,
                renderLinkComponent: C.iT
            })
        });
class j extends (a = r.PureComponent) {
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
            filter: o.Z.template(P(), n)
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
            { currentIndex: t, animate: n, hoveringPreviousItem: a, hoveringNextItem: r } = this.state,
            s = (0, i.jsx)(g.ZP, {
                items: e,
                itemSize: this.getItemSize(),
                renderItem: this.renderItem,
                currentIndex: t,
                animate: n,
                edgeItems: 2
            });
        return e.length <= 1
            ? s
            : (0, i.jsxs)('div', {
                  className: v.carouselButtonsContainer,
                  children: [
                      s,
                      (0, i.jsx)(m.am, {
                          onClick: this.manualPrevious,
                          className: l()(v.arrow, { [v.arrowHovered]: a })
                      }),
                      (0, i.jsx)(m.Pz, {
                          onClick: this.manualNext,
                          className: l()(v.arrow, { [v.arrowHovered]: r })
                      })
                  ]
              });
    }
    getPaginationSrc(e) {
        return e.type === x.s9s.YOUTUBE_VIDEO ? (0, x.n8r)(e.youtubeVideoId) : e.type === x.s9s.IMG ? e.src : e.type === x.s9s.VIDEO ? e.thumbnailSrc : null;
    }
    render() {
        let { items: e, className: t, autoplayInterval: n, paused: a } = this.props,
            { currentIndex: r, playingVideo: s, hasInteracted: l } = this.state;
        return (0, i.jsxs)(p.Z, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: n,
            className: t,
            disable: s || l || a,
            children: [
                this.renderCarousel(),
                (0, i.jsx)('div', {
                    className: v.pagination,
                    children: (0, i.jsx)(m.ZP, {
                        renderItem: this.renderPaginationItem,
                        scrollToPadding: 85,
                        items: e,
                        selectedIndex: r,
                        onSetItem: (e) => this.setItem(e, !0),
                        paginationContainerClass: v.scroller,
                        align: e.length < 6 ? m.ZP.Align.LEFT : m.ZP.Align.CENTER
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'state', {
                currentIndex: 0,
                animate: !0,
                playingVideo: !1,
                hasInteracted: !1,
                hoveringPreviousItem: !1,
                hoveringNextItem: !1,
                volume: 1,
                isMuted: !0
            }),
            _(this, 'getItemSize', () => {
                let { width: e } = this.props,
                    t = N.MEDIUM;
                return null != e && e < t.width && (t = N.SMALL), t;
            }),
            _(this, 'setItem', (e, t) => {
                let {
                        props: { items: n, onIntentionalChange: a },
                        state: { currentIndex: i }
                    } = this,
                    r = (0, g.gN)(i, n.length),
                    s = (0, g.gN)(e, n.length),
                    l = 1 === Math.abs(e - r) || (e === n.length - 1 && 0 === r) || (0 === e && r === n.length - 1);
                this.setState({
                    playingVideo: !1,
                    currentIndex: s,
                    animate: l,
                    hasInteracted: t
                }),
                    t && null != a && a(n[s], r, s);
            }),
            _(this, 'autoNext', () => {
                this.setItem(this.state.currentIndex + 1, !1);
            }),
            _(this, 'manualNext', () => {
                this.setItem(this.state.currentIndex + 1, !0);
            }),
            _(this, 'manualPrevious', () => {
                this.setItem(this.state.currentIndex - 1, !0);
            }),
            _(this, 'handlePlay', (e) =>
                this.setState({
                    playingVideo: !0,
                    hasInteracted: !e
                })
            ),
            _(this, 'handleEnded', () => {
                !this.state.hasInteracted && this.autoNext();
            }),
            _(this, 'handleVolumeChange', (e) => {
                this.setState({
                    volume: e,
                    hasInteracted: !0
                });
            }),
            _(this, 'handleMute', (e) => {
                this.setState({
                    isMuted: e,
                    hasInteracted: !0
                });
            }),
            _(this, 'handleVideoClick', (e) => {
                this.setItem(e, !0);
            }),
            _(this, 'handleEdgeItemMouseLeave', () => {
                this.setState({
                    hoveringPreviousItem: !1,
                    hoveringNextItem: !1
                });
            }),
            _(this, 'renderCarouselImage', (e, t, n) =>
                n
                    ? (0, i.jsx)(d.Clickable, {
                          onClick: () => this.handleCurrentItemClick(e, t),
                          className: v.itemImageWrapper,
                          children: (0, i.jsx)('img', {
                              src: e.src,
                              alt: '',
                              className: v.currentImage
                          })
                      })
                    : (0, i.jsx)(d.Clickable, {
                          onClick: () => this.setItem(t, !0),
                          className: v.itemImageWrapper,
                          children: (0, i.jsx)('img', {
                              alt: '',
                              className: v.itemImage,
                              src: e.src,
                              draggable: !1
                          })
                      })
            ),
            _(this, 'renderItem', (e, t, n) => {
                let { currentIndex: a, volume: r, isMuted: s } = this.state,
                    d = t === (0, g.gN)(a, this.props.items.length);
                return (0, i.jsx)(o.Z.div, {
                    className: l()(v.item, { [v.currentItem]: d }),
                    style: null != n ? this.getStyle(t, n) : null,
                    onMouseEnter: d ? null : () => this.handleEdgeItemMouseEnter(t),
                    onMouseLeave: d ? null : this.handleEdgeItemMouseLeave,
                    children:
                        e.type === x.s9s.VIDEO || e.type === x.s9s.YOUTUBE_VIDEO
                            ? (0, i.jsx)(w, {
                                  item: e,
                                  size: this.getItemSize(),
                                  onPlay: this.handlePlay,
                                  onEnded: this.handleEnded,
                                  playable: d,
                                  onClick: () => this.handleVideoClick(t),
                                  volume: r,
                                  onVolumeChange: this.handleVolumeChange,
                                  isMuted: s,
                                  onMute: this.handleMute
                              })
                            : this.renderCarouselImage(e, t, d)
                });
            }),
            _(this, 'renderPaginationItem', (e, t) => {
                let { currentIndex: n } = this.state,
                    a = n === t;
                return (0, i.jsxs)(
                    'div',
                    {
                        className: l()(v.paginationItem, a ? v.selectedStorePaginationItem : v.unselectedStorePaginationItem),
                        children: [
                            (0, i.jsx)('img', {
                                alt: null == e.alt ? t : e.alt,
                                className: v.storePaginationImg,
                                src: this.getPaginationSrc(e),
                                draggable: !1
                            }),
                            e.type === x.s9s.YOUTUBE_VIDEO || e.type === x.s9s.VIDEO ? (0, i.jsx)(k, {}) : null,
                            a ? (0, i.jsx)('div', { className: v.overlappingBorder }) : null
                        ]
                    },
                    'page-'.concat(t)
                );
            });
    }
}
_(j, 'defaultProps', {
    autoplayInterval: 8000,
    paused: !1
}),
    (t.Z = (0, u.Z)(j));

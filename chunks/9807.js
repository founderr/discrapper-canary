n(47120), n(411104);
var s,
    i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(481060),
    h = n(33122),
    d = n(446411),
    c = n(468846),
    u = n(453499),
    p = n(124347),
    m = n(80966),
    g = n(524444),
    C = n(843445),
    x = n(981631),
    I = n(388032),
    v = n(16655);
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
let N = (e) => {
        let { className: t, ...n } = e;
        return (0, i.jsx)(m.Z, {
            ...n,
            className: l()(v.sizedToParent, t),
            mediaPlayerClassName: v.sizedToParent,
            renderLinkComponent: g.iT
        });
    },
    E = (e) => {
        let { containerClassName: t, className: n, ...s } = e;
        return (0, i.jsx)(p.ZP, {
            ...s,
            className: l()(n, t)
        });
    },
    b = {
        width: 1280,
        height: 720
    },
    P = {
        width: 640,
        height: 360
    },
    S = (e) => {
        let t,
            n,
            s,
            { item: a, onPlay: r, volume: l, onVolumeChange: o, onMute: u, isMuted: p, autoPlay: m } = e;
        if (a.type === x.s9s.YOUTUBE_VIDEO)
            (t = {
                url: (0, x.n8r)(a.youtubeVideoId),
                ...b
            }),
                (n = {
                    url: ''.concat((0, x.ivE)(a.youtubeVideoId), '?').concat('rel=0&iv_load_policy=3&showinfo=0&modestbranding=1'),
                    ...P
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
        return (0, i.jsx)('div', {
            className: v.embedContainer,
            children: (0, i.jsx)(d.BC, {
                className: v.sizedToParent,
                iframeWrapperClassName: v.sizedToParent,
                href: null,
                thumbnail: t,
                video: n,
                provider: s,
                maxHeight: h.r.SMALL.height,
                maxWidth: C.b.SMALL,
                onPlay: r,
                playable: !0,
                volume: l,
                onVolumeChange: o,
                autoMute: p,
                onMute: u,
                autoPlay: m,
                renderImageComponent: E,
                renderVideoComponent: N,
                renderLinkComponent: g.iT
            })
        });
    };
class L extends (s = a.PureComponent) {
    componentDidMount() {
        let { items: e } = this.props;
        e.length > 0 && e[0].type === x.s9s.IMG && this.setState({ imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e[0].src, Date.now()) });
    }
    handleCurrentItemClick(e, t) {
        let { onCurrentItemClick: n } = this.props;
        null != n && n(e, t), this.setState({ hasInteracted: !0 });
    }
    render() {
        let { items: e, autoplayInterval: t, className: n, paused: s, themedPagination: a } = this.props,
            { hasInteracted: r } = this.state;
        return (0, i.jsx)(u.Z, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: s || r,
            renderItem: this.renderItem,
            className: l()(v.smallCarousel, n),
            themedPagination: a,
            onIntentionalChange: this.handleIntentionalChange,
            onChangeItem: this.handleChangeItem
        });
    }
    constructor(...e) {
        super(...e),
            f(this, 'state', {
                hasInteracted: !1,
                isVideoPlaying: !1,
                isMuted: !0,
                volume: 1,
                status: new Map(),
                imageLoadingStartTime: new Map()
            }),
            f(this, 'handlePlay', (e) => {
                this.setState({
                    isVideoPlaying: !0,
                    hasInteracted: !e
                });
            }),
            f(this, 'handleVolumeChange', (e) => {
                this.setState({
                    volume: e,
                    hasInteracted: !0
                });
            }),
            f(this, 'handleMute', (e) => {
                this.setState({
                    isMuted: e,
                    hasInteracted: !0
                });
            }),
            f(this, 'handleChangeItem', (e) => {
                this.setState({ isVideoPlaying: !1 }), e.type === x.s9s.IMG && this.setState({ imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now()) });
            }),
            f(this, 'handleIntentionalChange', (e, t, n, s) => {
                this.setState({ hasInteracted: !0 });
                let { onIntentionalChange: i } = this.props;
                null != i && i(e, t, n, s);
            }),
            f(this, 'handleOnErrorImg', (e) => {
                this.setState({ status: new Map(this.state.status).set(e.target.src, 'errored') });
            }),
            f(this, 'handleOnLoadImg', (e) => {
                let { onImageLoad: t } = this.props;
                this.setState({ status: new Map(this.state.status).set(e.target.src, 'loaded') });
                let n = this.state.imageLoadingStartTime.get(e.target.src),
                    s = null != n ? Date.now() - n : void 0;
                null == t ||
                    t({
                        src: e.target.src,
                        loadTimeMs: s
                    });
            }),
            f(this, 'renderItem', (e, t) => {
                let n;
                let { isMuted: s, volume: a } = this.state,
                    { videoAutoPlay: r } = this.props;
                switch (e.type) {
                    case x.s9s.YOUTUBE_VIDEO:
                    case x.s9s.VIDEO:
                        n = (0, i.jsx)(S, {
                            item: e,
                            onPlay: this.handlePlay,
                            isMuted: s,
                            volume: a,
                            onVolumeChange: this.handleVolumeChange,
                            onMute: this.handleMute,
                            autoPlay: r
                        });
                        break;
                    case x.s9s.IMG:
                        if ('errored' === this.state.status.get(e.src)) {
                            let e = (0, i.jsx)(o.Heading, {
                                variant: 'heading-xl/semibold',
                                children: I.intl.string(I.t.UvDfMz)
                            });
                            return (0, i.jsx)('div', {
                                className: v.errorContainer,
                                children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e
                            });
                        }
                        {
                            var h;
                            let t = null !== (h = e.alt) && void 0 !== h ? h : I.intl.string(I.t.X4IxWF);
                            n = (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(o.Spinner, {
                                        className: l()(v.spinner, { [v.hidden]: void 0 !== this.state.status.get(e.src) }),
                                        type: o.Spinner.Type.SPINNING_CIRCLE
                                    }),
                                    (0, i.jsx)('img', {
                                        onError: this.handleOnErrorImg,
                                        onLoad: this.handleOnLoadImg,
                                        className: l()(v.smallCarouselImage, { [v.hidden]: 'loaded' !== this.state.status.get(e.src) }),
                                        src: e.src,
                                        alt: t
                                    })
                                ]
                            });
                        }
                        break;
                    default:
                        throw Error('Unexpected MediaType');
                }
                return (0, i.jsx)(o.Clickable, {
                    className: v.smallCarouselItem,
                    onClick: () => this.handleCurrentItemClick(e, t),
                    children: n
                });
            });
    }
}
f(L, 'defaultProps', {
    paused: !1,
    videoAutoPlay: !0
}),
    (t.Z = L);

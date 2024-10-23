n(47120), n(411104);
var s,
    i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(481060),
    h = n(33122),
    u = n(446411),
    d = n(468846),
    c = n(453499),
    p = n(124347),
    m = n(80966),
    g = n(524444),
    I = n(843445),
    C = n(981631),
    x = n(689938),
    f = n(310436);
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
let E = (e) => {
        let { className: t, ...n } = e;
        return (0, i.jsx)(m.Z, {
            ...n,
            className: l()(f.sizedToParent, t),
            mediaPlayerClassName: f.sizedToParent,
            renderLinkComponent: g.iT
        });
    },
    N = (e) => {
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
            { item: a, onPlay: r, volume: l, onVolumeChange: o, onMute: c, isMuted: p, autoPlay: m } = e;
        if (a.type === C.s9s.YOUTUBE_VIDEO)
            (t = {
                url: (0, C.n8r)(a.youtubeVideoId),
                ...b
            }),
                (n = {
                    url: ''.concat((0, C.ivE)(a.youtubeVideoId), '?').concat('rel=0&iv_load_policy=3&showinfo=0&modestbranding=1'),
                    ...P
                }),
                (s = d.pn.YOUTUBE);
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
            className: f.embedContainer,
            children: (0, i.jsx)(u.BC, {
                className: f.sizedToParent,
                iframeWrapperClassName: f.sizedToParent,
                href: null,
                thumbnail: t,
                video: n,
                provider: s,
                maxHeight: h.r.SMALL.height,
                maxWidth: I.b.SMALL,
                onPlay: r,
                playable: !0,
                volume: l,
                onVolumeChange: o,
                autoMute: p,
                onMute: c,
                autoPlay: m,
                renderImageComponent: N,
                renderVideoComponent: E,
                renderLinkComponent: g.iT
            })
        });
    };
class L extends (s = a.PureComponent) {
    componentDidMount() {
        let { items: e } = this.props;
        e.length > 0 && e[0].type === C.s9s.IMG && this.setState({ imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e[0].src, Date.now()) });
    }
    handleCurrentItemClick(e, t) {
        let { onCurrentItemClick: n } = this.props;
        null != n && n(e, t), this.setState({ hasInteracted: !0 });
    }
    render() {
        let { items: e, autoplayInterval: t, className: n, paused: s, themedPagination: a } = this.props,
            { hasInteracted: r } = this.state;
        return (0, i.jsx)(c.Z, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: s || r,
            renderItem: this.renderItem,
            className: l()(f.smallCarousel, n),
            themedPagination: a,
            onIntentionalChange: this.handleIntentionalChange,
            onChangeItem: this.handleChangeItem
        });
    }
    constructor(...e) {
        super(...e),
            v(this, 'state', {
                hasInteracted: !1,
                isVideoPlaying: !1,
                isMuted: !0,
                volume: 1,
                status: new Map(),
                imageLoadingStartTime: new Map()
            }),
            v(this, 'handlePlay', (e) => {
                this.setState({
                    isVideoPlaying: !0,
                    hasInteracted: !e
                });
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
            v(this, 'handleChangeItem', (e) => {
                this.setState({ isVideoPlaying: !1 }), e.type === C.s9s.IMG && this.setState({ imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now()) });
            }),
            v(this, 'handleIntentionalChange', (e, t, n, s) => {
                this.setState({ hasInteracted: !0 });
                let { onIntentionalChange: i } = this.props;
                null != i && i(e, t, n, s);
            }),
            v(this, 'handleOnErrorImg', (e) => {
                this.setState({ status: new Map(this.state.status).set(e.target.src, 'errored') });
            }),
            v(this, 'handleOnLoadImg', (e) => {
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
            v(this, 'renderItem', (e, t) => {
                let n;
                let { isMuted: s, volume: a } = this.state,
                    { videoAutoPlay: r } = this.props;
                switch (e.type) {
                    case C.s9s.YOUTUBE_VIDEO:
                    case C.s9s.VIDEO:
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
                    case C.s9s.IMG:
                        if ('errored' === this.state.status.get(e.src)) {
                            let e = (0, i.jsx)(o.Heading, {
                                variant: 'heading-xl/semibold',
                                children: x.Z.Messages.ERRORS_IMAGE_NOT_FOUND
                            });
                            return (0, i.jsx)('div', {
                                className: f.errorContainer,
                                children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e
                            });
                        }
                        {
                            var h;
                            let t = null !== (h = e.alt) && void 0 !== h ? h : x.Z.Messages.IMAGE;
                            n = (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(o.Spinner, {
                                        className: l()(f.spinner, { [f.hidden]: void 0 !== this.state.status.get(e.src) }),
                                        type: o.Spinner.Type.SPINNING_CIRCLE
                                    }),
                                    (0, i.jsx)('img', {
                                        onError: this.handleOnErrorImg,
                                        onLoad: this.handleOnLoadImg,
                                        className: l()(f.smallCarouselImage, { [f.hidden]: 'loaded' !== this.state.status.get(e.src) }),
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
                    className: f.smallCarouselItem,
                    onClick: () => this.handleCurrentItemClick(e, t),
                    children: n
                });
            });
    }
}
v(L, 'defaultProps', {
    paused: !1,
    videoAutoPlay: !0
}),
    (t.Z = L);

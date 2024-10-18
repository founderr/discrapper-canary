s(47120), s(411104);
var n,
    i = s(735250),
    a = s(470079),
    r = s(120356),
    l = s.n(r),
    o = s(481060),
    h = s(33122),
    d = s(446411),
    u = s(468846),
    c = s(453499),
    p = s(124347),
    m = s(80966),
    g = s(524444),
    I = s(843445),
    x = s(981631),
    C = s(689938),
    v = s(310436);
function N(e, t, s) {
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
let f = (e) => {
        let { className: t, ...s } = e;
        return (0, i.jsx)(m.Z, {
            ...s,
            className: l()(v.sizedToParent, t),
            mediaPlayerClassName: v.sizedToParent,
            renderLinkComponent: g.iT
        });
    },
    E = (e) => {
        let { containerClassName: t, className: s, ...n } = e;
        return (0, i.jsx)(p.ZP, {
            ...n,
            className: l()(s, t)
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
            s,
            n,
            { item: a, onPlay: r, volume: l, onVolumeChange: o, onMute: c, isMuted: p, autoPlay: m } = e;
        if (a.type === x.s9s.YOUTUBE_VIDEO)
            (t = {
                url: (0, x.n8r)(a.youtubeVideoId),
                ...b
            }),
                (s = {
                    url: ''.concat((0, x.ivE)(a.youtubeVideoId), '?').concat('rel=0&iv_load_policy=3&showinfo=0&modestbranding=1'),
                    ...P
                }),
                (n = u.pn.YOUTUBE);
        else {
            let e = null != a.width ? a.width : 0,
                n = null != a.height ? a.height : 0;
            (t = {
                url: a.thumbnailSrc,
                width: e,
                height: n
            }),
                (s = {
                    url: a.src,
                    proxyURL: a.src,
                    width: e,
                    height: n
                });
        }
        return (0, i.jsx)('div', {
            className: v.embedContainer,
            children: (0, i.jsx)(d.BC, {
                className: v.sizedToParent,
                iframeWrapperClassName: v.sizedToParent,
                href: null,
                thumbnail: t,
                video: s,
                provider: n,
                maxHeight: h.r.SMALL.height,
                maxWidth: I.b.SMALL,
                onPlay: r,
                playable: !0,
                volume: l,
                onVolumeChange: o,
                autoMute: p,
                onMute: c,
                autoPlay: m,
                renderImageComponent: E,
                renderVideoComponent: f,
                renderLinkComponent: g.iT
            })
        });
    };
class y extends (n = a.PureComponent) {
    componentDidMount() {
        let { items: e } = this.props;
        e.length > 0 && e[0].type === x.s9s.IMG && this.setState({ imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e[0].src, Date.now()) });
    }
    handleCurrentItemClick(e, t) {
        let { onCurrentItemClick: s } = this.props;
        null != s && s(e, t), this.setState({ hasInteracted: !0 });
    }
    render() {
        let { items: e, autoplayInterval: t, className: s, paused: n, themedPagination: a } = this.props,
            { hasInteracted: r } = this.state;
        return (0, i.jsx)(c.Z, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: n || r,
            renderItem: this.renderItem,
            className: l()(v.smallCarousel, s),
            themedPagination: a,
            onIntentionalChange: this.handleIntentionalChange,
            onChangeItem: this.handleChangeItem
        });
    }
    constructor(...e) {
        super(...e),
            N(this, 'state', {
                hasInteracted: !1,
                isVideoPlaying: !1,
                isMuted: !0,
                volume: 1,
                status: new Map(),
                imageLoadingStartTime: new Map()
            }),
            N(this, 'handlePlay', (e) => {
                this.setState({
                    isVideoPlaying: !0,
                    hasInteracted: !e
                });
            }),
            N(this, 'handleVolumeChange', (e) => {
                this.setState({
                    volume: e,
                    hasInteracted: !0
                });
            }),
            N(this, 'handleMute', (e) => {
                this.setState({
                    isMuted: e,
                    hasInteracted: !0
                });
            }),
            N(this, 'handleChangeItem', (e) => {
                this.setState({ isVideoPlaying: !1 }), e.type === x.s9s.IMG && this.setState({ imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now()) });
            }),
            N(this, 'handleIntentionalChange', (e, t, s, n) => {
                this.setState({ hasInteracted: !0 });
                let { onIntentionalChange: i } = this.props;
                null != i && i(e, t, s, n);
            }),
            N(this, 'handleOnErrorImg', (e) => {
                this.setState({ status: new Map(this.state.status).set(e.target.src, 'errored') });
            }),
            N(this, 'handleOnLoadImg', (e) => {
                let { onImageLoad: t } = this.props;
                this.setState({ status: new Map(this.state.status).set(e.target.src, 'loaded') });
                let s = this.state.imageLoadingStartTime.get(e.target.src),
                    n = null != s ? Date.now() - s : void 0;
                null == t ||
                    t({
                        src: e.target.src,
                        loadTimeMs: n
                    });
            }),
            N(this, 'renderItem', (e, t) => {
                let s;
                let { isMuted: n, volume: a } = this.state,
                    { videoAutoPlay: r } = this.props;
                switch (e.type) {
                    case x.s9s.YOUTUBE_VIDEO:
                    case x.s9s.VIDEO:
                        s = (0, i.jsx)(S, {
                            item: e,
                            onPlay: this.handlePlay,
                            isMuted: n,
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
                                children: C.Z.Messages.ERRORS_IMAGE_NOT_FOUND
                            });
                            return (0, i.jsx)('div', {
                                className: v.errorContainer,
                                children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e
                            });
                        }
                        {
                            var h;
                            let t = null !== (h = e.alt) && void 0 !== h ? h : C.Z.Messages.IMAGE;
                            s = (0, i.jsxs)(i.Fragment, {
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
                    children: s
                });
            });
    }
}
N(y, 'defaultProps', {
    paused: !1,
    videoAutoPlay: !0
}),
    (t.Z = y);

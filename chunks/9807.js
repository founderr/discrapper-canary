n(47120), n(411104);
var a,
    i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(481060),
    d = n(33122),
    c = n(446411),
    u = n(468846),
    h = n(453499),
    p = n(124347),
    m = n(80966),
    g = n(524444),
    b = n(843445),
    f = n(981631),
    I = n(388032),
    C = n(310436);
function x(e, t, n) {
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
let _ = (e) => {
        let { className: t, ...n } = e;
        return (0, i.jsx)(m.Z, {
            ...n,
            className: l()(C.sizedToParent, t),
            mediaPlayerClassName: C.sizedToParent,
            renderLinkComponent: g.iT
        });
    },
    v = (e) => {
        let { containerClassName: t, className: n, ...a } = e;
        return (0, i.jsx)(p.ZP, {
            ...a,
            className: l()(n, t)
        });
    },
    N = {
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
            a,
            { item: s, onPlay: r, volume: l, onVolumeChange: o, onMute: h, isMuted: p, autoPlay: m } = e;
        if (s.type === f.s9s.YOUTUBE_VIDEO)
            (t = {
                url: (0, f.n8r)(s.youtubeVideoId),
                ...N
            }),
                (n = {
                    url: ''.concat((0, f.ivE)(s.youtubeVideoId), '?').concat('rel=0&iv_load_policy=3&showinfo=0&modestbranding=1'),
                    ...P
                }),
                (a = u.pn.YOUTUBE);
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
        return (0, i.jsx)('div', {
            className: C.embedContainer,
            children: (0, i.jsx)(c.BC, {
                className: C.sizedToParent,
                iframeWrapperClassName: C.sizedToParent,
                href: null,
                thumbnail: t,
                video: n,
                provider: a,
                maxHeight: d.r.SMALL.height,
                maxWidth: b.b.SMALL,
                onPlay: r,
                playable: !0,
                volume: l,
                onVolumeChange: o,
                autoMute: p,
                onMute: h,
                autoPlay: m,
                renderImageComponent: v,
                renderVideoComponent: _,
                renderLinkComponent: g.iT
            })
        });
    };
class E extends (a = s.PureComponent) {
    componentDidMount() {
        let { items: e } = this.props;
        e.length > 0 && e[0].type === f.s9s.IMG && this.setState({ imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e[0].src, Date.now()) });
    }
    handleCurrentItemClick(e, t) {
        let { onCurrentItemClick: n } = this.props;
        null != n && n(e, t), this.setState({ hasInteracted: !0 });
    }
    render() {
        let { items: e, autoplayInterval: t, className: n, paused: a, themedPagination: s } = this.props,
            { hasInteracted: r } = this.state;
        return (0, i.jsx)(h.Z, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: a || r,
            renderItem: this.renderItem,
            className: l()(C.smallCarousel, n),
            themedPagination: s,
            onIntentionalChange: this.handleIntentionalChange,
            onChangeItem: this.handleChangeItem
        });
    }
    constructor(...e) {
        super(...e),
            x(this, 'state', {
                hasInteracted: !1,
                isVideoPlaying: !1,
                isMuted: !0,
                volume: 1,
                status: new Map(),
                imageLoadingStartTime: new Map()
            }),
            x(this, 'handlePlay', (e) => {
                this.setState({
                    isVideoPlaying: !0,
                    hasInteracted: !e
                });
            }),
            x(this, 'handleVolumeChange', (e) => {
                this.setState({
                    volume: e,
                    hasInteracted: !0
                });
            }),
            x(this, 'handleMute', (e) => {
                this.setState({
                    isMuted: e,
                    hasInteracted: !0
                });
            }),
            x(this, 'handleChangeItem', (e) => {
                this.setState({ isVideoPlaying: !1 }), e.type === f.s9s.IMG && this.setState({ imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now()) });
            }),
            x(this, 'handleIntentionalChange', (e, t, n, a) => {
                this.setState({ hasInteracted: !0 });
                let { onIntentionalChange: i } = this.props;
                null != i && i(e, t, n, a);
            }),
            x(this, 'handleOnErrorImg', (e) => {
                this.setState({ status: new Map(this.state.status).set(e.target.src, 'errored') });
            }),
            x(this, 'handleOnLoadImg', (e) => {
                let { onImageLoad: t } = this.props;
                this.setState({ status: new Map(this.state.status).set(e.target.src, 'loaded') });
                let n = this.state.imageLoadingStartTime.get(e.target.src),
                    a = null != n ? Date.now() - n : void 0;
                null == t ||
                    t({
                        src: e.target.src,
                        loadTimeMs: a
                    });
            }),
            x(this, 'renderItem', (e, t) => {
                let n;
                let { isMuted: a, volume: s } = this.state,
                    { videoAutoPlay: r } = this.props;
                switch (e.type) {
                    case f.s9s.YOUTUBE_VIDEO:
                    case f.s9s.VIDEO:
                        n = (0, i.jsx)(S, {
                            item: e,
                            onPlay: this.handlePlay,
                            isMuted: a,
                            volume: s,
                            onVolumeChange: this.handleVolumeChange,
                            onMute: this.handleMute,
                            autoPlay: r
                        });
                        break;
                    case f.s9s.IMG:
                        if ('errored' === this.state.status.get(e.src)) {
                            let e = (0, i.jsx)(o.Heading, {
                                variant: 'heading-xl/semibold',
                                children: I.intl.string(I.t.UvDfMz)
                            });
                            return (0, i.jsx)('div', {
                                className: C.errorContainer,
                                children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e
                            });
                        }
                        {
                            var d;
                            let t = null !== (d = e.alt) && void 0 !== d ? d : I.intl.string(I.t.X4IxWF);
                            n = (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(o.Spinner, {
                                        className: l()(C.spinner, { [C.hidden]: void 0 !== this.state.status.get(e.src) }),
                                        type: o.Spinner.Type.SPINNING_CIRCLE
                                    }),
                                    (0, i.jsx)('img', {
                                        onError: this.handleOnErrorImg,
                                        onLoad: this.handleOnLoadImg,
                                        className: l()(C.smallCarouselImage, { [C.hidden]: 'loaded' !== this.state.status.get(e.src) }),
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
                    className: C.smallCarouselItem,
                    onClick: () => this.handleCurrentItemClick(e, t),
                    children: n
                });
            });
    }
}
x(E, 'defaultProps', {
    paused: !1,
    videoAutoPlay: !0
}),
    (t.Z = E);

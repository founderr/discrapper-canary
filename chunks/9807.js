n(47120), n(411104);
var a,
    i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(481060),
    d = n(33122),
    u = n(446411),
    c = n(468846),
    h = n(453499),
    p = n(124347),
    m = n(80966),
    g = n(524444),
    f = n(843445),
    b = n(981631),
    C = n(388032),
    I = n(310436);
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
let v = (e) => {
        let { className: t, ...n } = e;
        return (0, i.jsx)(m.Z, {
            ...n,
            className: l()(I.sizedToParent, t),
            mediaPlayerClassName: I.sizedToParent,
            renderLinkComponent: g.iT
        });
    },
    _ = (e) => {
        let { containerClassName: t, className: n, ...a } = e;
        return (0, i.jsx)(p.ZP, {
            ...a,
            className: l()(n, t)
        });
    },
    P = {
        width: 1280,
        height: 720
    },
    N = {
        width: 640,
        height: 360
    },
    E = (e) => {
        let t,
            n,
            a,
            { item: r, onPlay: s, volume: l, onVolumeChange: o, onMute: h, isMuted: p, autoPlay: m } = e;
        if (r.type === b.s9s.YOUTUBE_VIDEO)
            (t = {
                url: (0, b.n8r)(r.youtubeVideoId),
                ...P
            }),
                (n = {
                    url: ''.concat((0, b.ivE)(r.youtubeVideoId), '?').concat('rel=0&iv_load_policy=3&showinfo=0&modestbranding=1'),
                    ...N
                }),
                (a = c.pn.YOUTUBE);
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
        return (0, i.jsx)('div', {
            className: I.embedContainer,
            children: (0, i.jsx)(u.BC, {
                className: I.sizedToParent,
                iframeWrapperClassName: I.sizedToParent,
                href: null,
                thumbnail: t,
                video: n,
                provider: a,
                maxHeight: d.r.SMALL.height,
                maxWidth: f.b.SMALL,
                onPlay: s,
                playable: !0,
                volume: l,
                onVolumeChange: o,
                autoMute: p,
                onMute: h,
                autoPlay: m,
                renderImageComponent: _,
                renderVideoComponent: v,
                renderLinkComponent: g.iT
            })
        });
    };
class S extends (a = r.PureComponent) {
    componentDidMount() {
        let { items: e } = this.props;
        e.length > 0 && e[0].type === b.s9s.IMG && this.setState({ imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e[0].src, Date.now()) });
    }
    handleCurrentItemClick(e, t) {
        let { onCurrentItemClick: n } = this.props;
        null != n && n(e, t), this.setState({ hasInteracted: !0 });
    }
    render() {
        let { items: e, autoplayInterval: t, className: n, paused: a, themedPagination: r } = this.props,
            { hasInteracted: s } = this.state;
        return (0, i.jsx)(h.Z, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: a || s,
            renderItem: this.renderItem,
            className: l()(I.smallCarousel, n),
            themedPagination: r,
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
                this.setState({ isVideoPlaying: !1 }), e.type === b.s9s.IMG && this.setState({ imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now()) });
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
                let { isMuted: a, volume: r } = this.state,
                    { videoAutoPlay: s } = this.props;
                switch (e.type) {
                    case b.s9s.YOUTUBE_VIDEO:
                    case b.s9s.VIDEO:
                        n = (0, i.jsx)(E, {
                            item: e,
                            onPlay: this.handlePlay,
                            isMuted: a,
                            volume: r,
                            onVolumeChange: this.handleVolumeChange,
                            onMute: this.handleMute,
                            autoPlay: s
                        });
                        break;
                    case b.s9s.IMG:
                        if ('errored' === this.state.status.get(e.src)) {
                            let e = (0, i.jsx)(o.Heading, {
                                variant: 'heading-xl/semibold',
                                children: C.intl.string(C.t.UvDfMz)
                            });
                            return (0, i.jsx)('div', {
                                className: I.errorContainer,
                                children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e
                            });
                        }
                        {
                            var d;
                            let t = null !== (d = e.alt) && void 0 !== d ? d : C.intl.string(C.t.X4IxWF);
                            n = (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(o.Spinner, {
                                        className: l()(I.spinner, { [I.hidden]: void 0 !== this.state.status.get(e.src) }),
                                        type: o.Spinner.Type.SPINNING_CIRCLE
                                    }),
                                    (0, i.jsx)('img', {
                                        onError: this.handleOnErrorImg,
                                        onLoad: this.handleOnLoadImg,
                                        className: l()(I.smallCarouselImage, { [I.hidden]: 'loaded' !== this.state.status.get(e.src) }),
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
                    className: I.smallCarouselItem,
                    onClick: () => this.handleCurrentItemClick(e, t),
                    children: n
                });
            });
    }
}
x(S, 'defaultProps', {
    paused: !1,
    videoAutoPlay: !0
}),
    (t.Z = S);

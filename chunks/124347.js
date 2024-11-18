n.d(t, {
    YG: function () {
        return A;
    },
    ZP: function () {
        return C;
    },
    uo: function () {
        return y;
    }
}),
    n(47120);
var r,
    i,
    a,
    s = n(200651),
    o = n(192379),
    l = n(392711),
    u = n(286379),
    c = n(622535),
    d = n(916616),
    f = n(818083),
    _ = n(279745),
    p = n(134432),
    h = n(797614),
    m = n(740492),
    g = n(866960),
    E = n(626135),
    v = n(768581),
    b = n(956664),
    I = n(981631),
    S = n(217702);
function T(e, t, n) {
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
let y = /\.gif($|\?|#)/i,
    A = /\.webp($|\?|#)/i,
    N = /\.png($|\?|#)/i;
((a = r || (r = {})).LOAD = 'LOAD'), (a.PRELOAD = 'PRELOAD'), (a.CLICK = 'CLICK');
class C extends (i = o.Component) {
    static isAnimated(e) {
        let { src: t, original: n, animated: r, srcIsAnimated: i } = e;
        return r || y.test(null != n && '' !== n ? n : t) || (null != i && i && A.test(null != n && '' !== n ? n : t));
    }
    static isSrcPNG(e) {
        let { src: t } = e;
        return N.test(t);
    }
    componentDidMount() {
        let { readyState: e } = this.state;
        e === I.zo9.LOADING && this.loadImage(this.getSrc(this.getRatio(), C.isAnimated(this.props)), this.handleImageLoad), C.isAnimated(this.props) && this.observeVisibility();
    }
    componentDidUpdate(e) {
        let t = C.isAnimated(this.props);
        C.isAnimated(e) !== t && (t ? this.observeVisibility() : this.unobserveVisibility());
    }
    componentWillUnmount() {
        C.isAnimated(this.props) && this.unobserveVisibility(), this._cancellers.forEach((e) => e()), this._cancellers.clear();
    }
    getSrc(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { src: n, width: r, height: i, maxWidth: a, maxHeight: s, mediaLayoutType: o } = this.props,
            { format: l, quality: u } = this.getFormatQuality(t);
        return (0, p.Q4)({
            src: n,
            width: r,
            height: i,
            ratio: e,
            maxWidth: o === S.hV.MOSAIC ? a : void 0,
            maxHeight: o === S.hV.MOSAIC ? s : void 0,
            format: l,
            quality: u,
            animated: !t,
            srcIsAnimated: this.props.srcIsAnimated
        });
    }
    getFormatQuality() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = null,
            n = null;
        return (
            v.$k && (e || !C.isAnimated(this.props)) ? ((t = 'webp'), C.isSrcPNG(this.props) && (n = 'lossless')) : e && (t = 'png'),
            {
                format: t,
                quality: n
            }
        );
    }
    getRatio() {
        let { width: e, height: t, maxWidth: n = 400, maxHeight: r = 300, mediaLayoutType: i, useFullWidth: a } = this.props;
        return i === S.hV.MOSAIC && a
            ? (0, b.rn)({
                  width: e,
                  height: t,
                  maxWidth: n,
                  maxHeight: r
              })
            : (0, b.Dc)({
                  width: e,
                  height: t,
                  maxWidth: n,
                  maxHeight: r
              });
    }
    getType() {
        let { mediaLayoutType: e, responsive: t } = this.props;
        return null != e ? e : t ? S.hV.RESPONSIVE : S.hV.STATIC;
    }
    loadImage(e, t) {
        let { width: n, height: r } = this.props;
        if (((this.startLoadingTime = Date.now()), 1 === n && 1 === r)) return;
        let i = (0, p.po)(e, (e, n) => {
            null != i && this._cancellers.delete(i), null == t || t(e, n);
        });
        null != i && this._cancellers.add(i);
    }
    render() {
        let { alt: e, zoomThumbnailPlaceholder: t, onZoom: n, shouldLink: r, onContextMenu: i, autoPlay: a, original: o, className: u, imageClassName: c, children: f, animated: _, shouldAnimate: p, width: h, height: m, minWidth: g, minHeight: E, maxWidth: v, maxHeight: b, onClick: S, renderAccessory: T, tabIndex: y, limitResponsiveWidth: A, useFullWidth: N, placeholder: R, placeholderVersion: O, dataSafeSrc: D, srcIsAnimated: L } = this.props,
            { readyState: x, hasMouseOver: w, hasFocus: M } = this.state,
            P = null != n,
            k = this.getRatio(),
            U = (0, l.clamp)(Math.round(h * k), null != g ? g : 0, null != v ? v : 1 / 0),
            G = (0, l.clamp)(Math.round(m * k), null != E ? E : 0, null != b ? b : 1 / 0),
            B = {
                alt: e,
                readyState: x,
                onContextMenu: null != i ? i : void 0,
                zoomable: P,
                className: u,
                imageClassName: c,
                minWidth: g,
                minHeight: E,
                mediaLayoutType: this.getType(),
                limitResponsiveWidth: A,
                useFullWidth: N,
                tabIndex: y,
                width: U,
                height: G,
                src: '',
                placeholder: R,
                placeholderVersion: O,
                dataSafeSrc: D,
                srcIsAnimated: L,
                children:
                    null != f
                        ? (e) => {
                              let { src: t, size: n, alt: r, mediaLayoutType: i } = e;
                              return f({
                                  src: t,
                                  size: n,
                                  alt: r,
                                  mediaLayoutType: i
                              });
                          }
                        : void 0,
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
                onFocus: this.onFocus,
                onBlur: this.onBlur
            };
        if (1 === B.width && 1 === B.height) return null;
        switch (((P || null != S) && (B.onClick = this.onClick), r && (B.original = null != o && '' !== o ? o : B.src), x)) {
            case I.zo9.LOADING:
                null != t && (B.src = t);
                break;
            case I.zo9.READY:
                if (C.isAnimated(this.props)) {
                    B.onMouseLeave = this.onMouseLeave;
                    let e = (a || w || M) && (null == p || p) && C.visibilityObserver.isVisible(this);
                    e ? ((B.src = this.getSrc(k)), (B.renderAccessory = T)) : ((B.src = this.getSrc(k, !_ || !a)), (B.renderAccessory = this.renderAccessory)),
                        null != f &&
                            (B.children = (t) => {
                                let { src: n, size: r, alt: i, mediaLayoutType: a } = t;
                                return f({
                                    src: n,
                                    size: r,
                                    animating: e,
                                    alt: i,
                                    mediaLayoutType: a
                                });
                            });
                } else B.src = this.getSrc(k);
        }
        return (0, s.jsx)(d.E, { ...B });
    }
    async trackLoadingCompleted(e, t, n) {
        var r;
        if ((e && h.Z.increment({ name: u.V.IMAGE_LOAD_ERROR }), !this.imageLoadAnalyticsEnabled)) return;
        let i = await fetch(t.url).catch(() => void 0),
            a = null == i ? void 0 : null === (r = i.headers) || void 0 === r ? void 0 : r.get('content-length'),
            s = null != a ? Number(a) : null,
            o = Date.now() - this.startLoadingTime,
            { format: l, quality: c } = this.getFormatQuality();
        E.default.track(I.rMx.IMAGE_LOADING_COMPLETED, {
            duration_ms: o,
            requested_height: t.height,
            requested_width: t.width,
            height: this.props.height,
            width: this.props.width,
            original_url: this.props.original,
            url: this.props.src,
            requested_url: t.url,
            format: l,
            quality: c,
            state: e ? I.zo9.ERROR : this.state.readyState,
            data_saving_mode: m.ZP.dataSavingMode,
            low_quality_image_mode: m.ZP.dataSavingMode,
            trigger: n,
            size: s,
            connection_type: g.Z.getType(),
            effective_connection_speed: g.Z.getEffectiveConnectionSpeed(),
            service_provider: g.Z.getServiceProvider()
        });
    }
    constructor(e) {
        super(e),
            T(this, 'imageLoadAnalyticsEnabled', !1),
            T(this, 'state', {
                readyState: I.zo9.LOADING,
                hasMouseOver: !1,
                hasFocus: !1
            }),
            T(this, 'startLoadingTime', Date.now()),
            T(this, '_cancellers', new Set()),
            T(this, 'observeVisibility', () => {
                C.visibilityObserver.observe(this);
            }),
            T(this, 'unobserveVisibility', () => {
                C.visibilityObserver.unobserve(this);
            }),
            T(this, 'handleImageLoad', (e, t) => {
                this.setState({ readyState: e ? I.zo9.ERROR : I.zo9.READY }, () => {
                    var n;
                    return this.trackLoadingCompleted(e, t, null !== (n = this.props.trigger) && void 0 !== n ? n : 'LOAD');
                });
            }),
            T(this, 'preloadImage', (e, t) => {
                let { width: n, height: r } = e,
                    { width: i, height: a } = this.props;
                (1 !== i || 1 !== a) &&
                    this.loadImage(
                        this.getSrc(
                            (0, b.Dc)({
                                width: i,
                                height: a,
                                maxWidth: n,
                                maxHeight: r
                            })
                        ),
                        (e, n) => {
                            this.trackLoadingCompleted(e, n, 'PRELOAD'), null == t || t(e, n);
                        }
                    );
            }),
            T(this, 'onMouseEnter', (e) => {
                C.isAnimated(this.props) && this.setState({ hasMouseOver: !0 });
                let { onMouseEnter: t } = this.props;
                null == t || t(e, { preloadImage: this.preloadImage });
            }),
            T(this, 'onMouseLeave', (e) => {
                C.isAnimated(this.props) && this.setState({ hasMouseOver: !1 });
                let { onMouseLeave: t } = this.props;
                null == t || t(e);
            }),
            T(this, 'onFocus', (e) => {
                C.isAnimated(this.props) && this.setState({ hasFocus: !0 });
            }),
            T(this, 'onBlur', (e) => {
                let { currentTarget: t, relatedTarget: n } = e;
                !t.contains(n) && this.setState({ hasFocus: !1 });
            }),
            T(this, 'onClick', (e) => {
                let { onZoom: t, onClick: n } = this.props;
                null != n
                    ? n(e)
                    : null != t &&
                      (e.preventDefault(),
                      t(e, {
                          zoomThumbnailPlaceholder: this.getSrc(this.getRatio()),
                          trigger: 'CLICK'
                      }));
            }),
            T(this, 'renderAccessory', () => {
                let { hasMouseOver: e, hasFocus: t } = this.state,
                    n = null != this.props.renderAccessory ? this.props.renderAccessory() : null;
                return this.props.shouldRenderAccessory ? (e || t ? n : (0, s.jsx)(_.Z, {})) : null;
            }),
            (0, p.Vv)(this.getSrc(this.getRatio(), C.isAnimated(this.props))) && (this.state.readyState = I.zo9.READY),
            (this.imageLoadAnalyticsEnabled = R.getCurrentConfig({ location: 'lazy_image' }).enabled);
    }
}
T(C, 'visibilityObserver', new c.Z({ threshold: 0.7 })),
    T(C, 'defaultProps', {
        shouldLink: !1,
        autoPlay: !1,
        animated: !1,
        minWidth: 0,
        minHeight: 0,
        shouldRenderAccessory: !0,
        srcIsAnimated: !1
    });
let R = (0, f.B)({
    kind: 'user',
    id: '2024-02_image_load_metrics',
    label: 'Image load metrics Config User Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Do not send metrics for image load',
            config: { enabled: !1 }
        },
        {
            id: 2,
            label: 'Send metrics for image load',
            config: { enabled: !0 }
        }
    ]
});

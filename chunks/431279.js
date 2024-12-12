r.d(n, {
    Z: function () {
        return T;
    }
});
var i,
    a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(374470),
    u = r(481060),
    c = r(40851),
    d = r(124347),
    f = r(312097),
    _ = r(626135),
    h = r(956664),
    p = r(506071),
    m = r(981631),
    g = r(701865),
    E = r(765568);
function v(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class I extends (i = o.PureComponent) {
    render() {
        let { appContext: e, isWindowFocused: n, ...r } = this.props;
        return (0, s.jsx)(d.ZP, {
            ...r,
            onZoom: this.onZoom,
            onMouseEnter: this.onMouseEnter,
            shouldAnimate: n
        });
    }
    constructor(...e) {
        super(...e),
            v(this, 'onMouseEnter', (e, n) => {
                let { preloadImage: r } = n,
                    { width: i, height: a, onMouseEnter: s } = this.props;
                null == s || s(e, { preloadImage: r }), r((0, h.zp)(i, a));
            }),
            v(this, 'modalContext', (0, u.modalContextFromAppContext)(this.props.appContext)),
            v(this, 'onCloseImage', () => {
                (0, u.closeModal)(g.U, this.modalContext);
            }),
            v(this, 'onZoom', (e, n) => {
                let { zoomThumbnailPlaceholder: r, trigger: i } = n;
                e.preventDefault();
                let { alt: a, src: s, original: o, width: u, height: c, animated: d, srcIsAnimated: h, children: p, shouldHideMediaOptions: g = !1, sourceMetadata: v } = this.props,
                    I = {
                        url: s,
                        width: u,
                        height: c,
                        type: 'IMAGE',
                        alt: a,
                        zoomThumbnailPlaceholder: r,
                        animated: d,
                        srcIsAnimated: h,
                        children: p,
                        trigger: i,
                        sourceMetadata: v,
                        original: null != o ? o : s
                    };
                (0, l.k)(e.currentTarget) && e.currentTarget.blur(),
                    _.default.track(m.rMx.OPEN_MODAL, { type: 'Media Modal' }),
                    (0, f.K)({
                        className: E.modal,
                        onClose: this.onCloseImage,
                        items: [I],
                        shouldHideMediaOptions: g,
                        location: 'LazyImageZoomable',
                        contextKey: this.modalContext
                    });
            });
    }
}
function T(e) {
    let n = (0, c.bp)(),
        r = (0, p.n)();
    return (0, s.jsx)(I, {
        ...e,
        isWindowFocused: r,
        appContext: n
    });
}
v(I, 'defaultProps', {
    shouldLink: !0,
    autoPlay: !1,
    animated: !1
});

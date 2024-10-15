n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var r,
    i = n(735250),
    a = n(470079),
    s = n(374470),
    o = n(481060),
    l = n(40851),
    u = n(124347),
    c = n(950120),
    d = n(626135),
    _ = n(956664),
    E = n(506071),
    f = n(981631),
    h = n(701865),
    p = n(167251);
function I(e, t, n) {
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
class m extends (r = a.PureComponent) {
    render() {
        let { appContext: e, isWindowFocused: t, ...n } = this.props;
        return (0, i.jsx)(u.ZP, {
            ...n,
            onZoom: this.onZoom,
            onMouseEnter: this.onMouseEnter,
            shouldAnimate: t
        });
    }
    constructor(...e) {
        super(...e),
            I(this, 'onMouseEnter', (e, t) => {
                let { preloadImage: n } = t,
                    { width: r, height: i, onMouseEnter: a } = this.props;
                null == a || a(e, { preloadImage: n }), n((0, _.zp)(r, i));
            }),
            I(this, 'modalContext', (0, o.modalContextFromAppContext)(this.props.appContext)),
            I(this, 'onCloseImage', () => {
                (0, o.closeModal)(h.U, this.modalContext);
            }),
            I(this, 'onZoom', (e, t) => {
                let { zoomThumbnailPlaceholder: n, trigger: r } = t;
                e.preventDefault();
                let { alt: a, src: l, original: u, width: _, height: E, animated: I, srcIsAnimated: m, children: T, shouldHideMediaOptions: S = !1, sourceMetadata: g } = this.props,
                    A = {
                        url: l,
                        width: _,
                        height: E,
                        type: 'IMAGE',
                        alt: a,
                        zoomThumbnailPlaceholder: n,
                        animated: I,
                        srcIsAnimated: m,
                        children: T,
                        trigger: r,
                        sourceMetadata: g,
                        original: null != u ? u : l
                    };
                (0, s.k)(e.currentTarget) && e.currentTarget.blur(),
                    d.default.track(f.rMx.OPEN_MODAL, { type: 'Media Modal' }),
                    (0, o.openModal)(
                        (e) =>
                            (0, i.jsx)(c.default, {
                                ...e,
                                className: p.modal,
                                onClose: this.onCloseImage,
                                items: [A],
                                shouldHideMediaOptions: S
                            }),
                        { modalKey: h.U },
                        this.modalContext
                    );
            });
    }
}
function T(e) {
    let t = (0, l.bp)(),
        n = (0, E.n)();
    return (0, i.jsx)(m, {
        ...e,
        isWindowFocused: n,
        appContext: t
    });
}
I(m, 'defaultProps', {
    shouldLink: !0,
    autoPlay: !1,
    animated: !1
});

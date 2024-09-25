n.d(t, {
    Z: function () {
        return S;
    }
});
var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(374470),
    l = n(481060),
    u = n(40851),
    c = n(124347),
    d = n(751586),
    _ = n(626135),
    E = n(956664),
    f = n(506071),
    h = n(981631),
    p = n(503349),
    m = n(689938),
    I = n(167251);
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
class g extends (r = o.PureComponent) {
    render() {
        let { appContext: e, isWindowFocused: t, ...n } = this.props;
        return (0, a.jsx)(c.Z, {
            ...n,
            onZoom: this.onZoom,
            onMouseEnter: this.onMouseEnter,
            shouldAnimate: t
        });
    }
    constructor(...e) {
        super(...e),
            T(this, 'onMouseEnter', (e, t) => {
                let { preloadImage: n } = t,
                    { width: r, height: i, onMouseEnter: a } = this.props;
                null == a || a(e, { preloadImage: n }), n((0, E.zp)(r, i));
            }),
            T(this, 'modalContext', (0, l.modalContextFromAppContext)(this.props.appContext)),
            T(this, 'onCloseImage', () => {
                (0, l.closeModal)(p.c, this.modalContext);
            }),
            T(this, 'onZoom', (e, t) => {
                let { zoomThumbnailPlaceholder: n, trigger: r } = t;
                e.preventDefault();
                let { alt: i, src: o, original: u, width: c, height: E, animated: f, children: T, renderLinkComponent: g, renderForwardComponent: S, isWindowFocused: A, shouldHideMediaOptions: v = !1 } = this.props,
                    N = {
                        alt: i,
                        src: o,
                        original: null != u ? u : o,
                        width: c,
                        height: E,
                        animated: f,
                        children: T,
                        zoomThumbnailPlaceholder: n,
                        renderLinkComponent: g,
                        renderForwardComponent: S,
                        onContextMenu: v
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault();
                              }
                            : void 0,
                        trigger: r
                    };
                (0, s.k)(e.currentTarget) && e.currentTarget.blur(),
                    _.default.track(h.rMx.OPEN_MODAL, { type: 'Media Modal' }),
                    (0, l.openModal)(
                        (e) =>
                            (0, a.jsx)(l.ModalRoot, {
                                className: I.modal,
                                ...e,
                                size: l.ModalSize.DYNAMIC,
                                'aria-label': m.Z.Messages.IMAGE,
                                children: (0, a.jsx)(d.y, {
                                    ...N,
                                    className: I.image,
                                    shouldAnimate: A,
                                    onClose: this.onCloseImage,
                                    shouldHideMediaOptions: v
                                })
                            }),
                        { modalKey: p.c },
                        this.modalContext
                    );
            });
    }
}
function S(e) {
    let t = (0, u.bp)(),
        n = (0, f.n)();
    return (0, a.jsx)(g, {
        ...e,
        isWindowFocused: n,
        appContext: t
    });
}
T(g, 'defaultProps', {
    shouldLink: !0,
    autoPlay: !1,
    animated: !1
});

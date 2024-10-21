n(47120);
var i,
    a = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(86357),
    c = n(54936),
    u = n(491598),
    d = n(351465),
    _ = n(669021),
    E = n(73346),
    I = n(568836),
    m = n(345898),
    T = n(981631),
    f = n(262203);
function h(e, t, n) {
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
class N extends (i = s.PureComponent) {
    render() {
        let { sku: e, storeListing: t, isHorizontal: n, className: i, renderCustomTagline: s, renderCustomTitle: r, renderCustomMedia: l, isEmbed: o } = this.props,
            c = o ? I.$G : m.Z;
        return (0, a.jsx)(c, {
            className: i,
            renderMedia: null != l ? l : this.renderMedia,
            renderTitle: null != r ? r : () => e.name,
            renderTagline: null != s ? s : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n
        });
    }
    constructor(...e) {
        super(...e),
            h(this, 'renderActions', () => {
                let { inLibrary: e, sku: t, renderCustomActions: n, isMouseOver: i, showBuyInline: s } = this.props,
                    r = (s || !t.requiresPayment) && !e;
                return null != n
                    ? n()
                    : (0, a.jsxs)('div', {
                          className: f.priceOs,
                          children: [
                              (0, a.jsx)(o.Z, {
                                  type: o.Z.Types.DIRECTORY_TILE,
                                  sku: t,
                                  inLibrary: e,
                                  className: r && i ? f.tilePriceWithVisibleBuyButton : f.tilePrice
                              }),
                              (0, a.jsx)(c.n, {
                                  systems: [T.TaA.WINDOWS],
                                  className: f.platform
                              }),
                              r ? (0, a.jsx)('div', { children: 'deprecated!' }) : null
                          ]
                      });
            }),
            h(this, 'renderMedia', () => {
                let { playing: e, muted: t, showMediaPlaceholder: n, onToggleMute: i, sku: r, isHorizontal: o, storeListing: c } = this.props;
                return (0, a.jsxs)(s.Fragment, {
                    children: [
                        (0, a.jsx)(_.Z, {
                            className: l()(f.splashContainer, { [f.splashContainerHorizontal]: o }),
                            video: null != c.previewVideo ? (0, E._W)(r.applicationId, c.previewVideo) : void 0,
                            image: null != c.thumbnail ? (0, E._W)(r.applicationId, c.thumbnail, 600) : null,
                            title: r.name,
                            playing: e,
                            muted: t,
                            placeholder: n,
                            onToggleMute: i,
                            splashClassName: f.splashVideo,
                            splashPlaceholderClassName: f.splashPlaceholder
                        }),
                        r.exclusive ? (0, a.jsx)(d.Z, { className: l()(f.exclusiveRegular, { [f.exclusivePlaying]: e }) }) : r.isTheGameAwardsWinner ? (0, a.jsx)(u.Z, { className: l()(f.exclusiveRegular, { [f.exclusivePlaying]: e }) }) : null
                    ]
                });
            });
    }
}
h(N, 'defaultProps', {
    showMediaPlaceholder: !1,
    isMouseOver: !1,
    showBuyInline: !1,
    isHorizontal: !1,
    isEmbed: !1
}),
    (t.Z = N);

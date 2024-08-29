n(47120);
var i,
    s = n(735250),
    a = n(470079),
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
    N = n(164857);
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
class C extends (i = a.PureComponent) {
    render() {
        let { sku: e, storeListing: t, isHorizontal: n, className: i, renderCustomTagline: a, renderCustomTitle: r, renderCustomMedia: l, isEmbed: o } = this.props,
            c = o ? I.$G : m.Z;
        return (0, s.jsx)(c, {
            className: i,
            renderMedia: null != l ? l : this.renderMedia,
            renderTitle: null != r ? r : () => e.name,
            renderTagline: null != a ? a : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n
        });
    }
    constructor(...e) {
        super(...e),
            h(this, 'renderActions', () => {
                let { inLibrary: e, sku: t, renderCustomActions: n, isMouseOver: i, showBuyInline: a } = this.props,
                    r = (a || !t.requiresPayment) && !e;
                return null != n
                    ? n()
                    : (0, s.jsxs)('div', {
                          className: N.priceOs,
                          children: [
                              (0, s.jsx)(o.Z, {
                                  type: o.Z.Types.DIRECTORY_TILE,
                                  sku: t,
                                  inLibrary: e,
                                  className: r && i ? N.tilePriceWithVisibleBuyButton : N.tilePrice
                              }),
                              (0, s.jsx)(c.n, {
                                  systems: [T.TaA.WINDOWS],
                                  className: N.platform
                              }),
                              r ? (0, s.jsx)('div', { children: 'deprecated!' }) : null
                          ]
                      });
            }),
            h(this, 'renderMedia', () => {
                let { playing: e, muted: t, showMediaPlaceholder: n, onToggleMute: i, sku: r, isHorizontal: o, storeListing: c } = this.props;
                return (0, s.jsxs)(a.Fragment, {
                    children: [
                        (0, s.jsx)(_.Z, {
                            className: l()(N.splashContainer, { [N.splashContainerHorizontal]: o }),
                            video: null != c.previewVideo ? (0, E._W)(r.applicationId, c.previewVideo) : void 0,
                            image: null != c.thumbnail ? (0, E._W)(r.applicationId, c.thumbnail, 600) : null,
                            title: r.name,
                            playing: e,
                            muted: t,
                            placeholder: n,
                            onToggleMute: i,
                            splashClassName: N.splashVideo,
                            splashPlaceholderClassName: N.splashPlaceholder
                        }),
                        r.exclusive ? (0, s.jsx)(d.Z, { className: l()(N.exclusiveRegular, { [N.exclusivePlaying]: e }) }) : r.isTheGameAwardsWinner ? (0, s.jsx)(u.Z, { className: l()(N.exclusiveRegular, { [N.exclusivePlaying]: e }) }) : null
                    ]
                });
            });
    }
}
h(C, 'defaultProps', {
    showMediaPlaceholder: !1,
    isMouseOver: !1,
    showBuyInline: !1,
    isHorizontal: !1,
    isEmbed: !1
}),
    (t.Z = C);

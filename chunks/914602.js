n(47120);
var i,
    a = n(735250),
    s = n(470079),
    l = n(120356),
    r = n.n(l),
    o = n(86357),
    c = n(54936),
    d = n(491598),
    u = n(351465),
    _ = n(669021),
    E = n(73346),
    I = n(568836),
    m = n(345898),
    T = n(981631),
    N = n(262203);
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
class C extends (i = s.PureComponent) {
    render() {
        let { sku: e, storeListing: t, isHorizontal: n, className: i, renderCustomTagline: s, renderCustomTitle: l, renderCustomMedia: r, isEmbed: o } = this.props,
            c = o ? I.$G : m.Z;
        return (0, a.jsx)(c, {
            className: i,
            renderMedia: null != r ? r : this.renderMedia,
            renderTitle: null != l ? l : () => e.name,
            renderTagline: null != s ? s : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n
        });
    }
    constructor(...e) {
        super(...e),
            h(this, 'renderActions', () => {
                let { inLibrary: e, sku: t, renderCustomActions: n, isMouseOver: i, showBuyInline: s } = this.props,
                    l = (s || !t.requiresPayment) && !e;
                return null != n
                    ? n()
                    : (0, a.jsxs)('div', {
                          className: N.priceOs,
                          children: [
                              (0, a.jsx)(o.Z, {
                                  type: o.Z.Types.DIRECTORY_TILE,
                                  sku: t,
                                  inLibrary: e,
                                  className: l && i ? N.tilePriceWithVisibleBuyButton : N.tilePrice
                              }),
                              (0, a.jsx)(c.n, {
                                  systems: [T.TaA.WINDOWS],
                                  className: N.platform
                              }),
                              l ? (0, a.jsx)('div', { children: 'deprecated!' }) : null
                          ]
                      });
            }),
            h(this, 'renderMedia', () => {
                let { playing: e, muted: t, showMediaPlaceholder: n, onToggleMute: i, sku: l, isHorizontal: o, storeListing: c } = this.props;
                return (0, a.jsxs)(s.Fragment, {
                    children: [
                        (0, a.jsx)(_.Z, {
                            className: r()(N.splashContainer, { [N.splashContainerHorizontal]: o }),
                            video: null != c.previewVideo ? (0, E._W)(l.applicationId, c.previewVideo) : void 0,
                            image: null != c.thumbnail ? (0, E._W)(l.applicationId, c.thumbnail, 600) : null,
                            title: l.name,
                            playing: e,
                            muted: t,
                            placeholder: n,
                            onToggleMute: i,
                            splashClassName: N.splashVideo,
                            splashPlaceholderClassName: N.splashPlaceholder
                        }),
                        l.exclusive ? (0, a.jsx)(u.Z, { className: r()(N.exclusiveRegular, { [N.exclusivePlaying]: e }) }) : l.isTheGameAwardsWinner ? (0, a.jsx)(d.Z, { className: r()(N.exclusiveRegular, { [N.exclusivePlaying]: e }) }) : null
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

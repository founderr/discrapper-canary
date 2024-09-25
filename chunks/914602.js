var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(86357),
    c = n(54936),
    d = n(491598),
    _ = n(351465),
    E = n(669021),
    f = n(73346),
    h = n(568836),
    p = n(345898),
    m = n(981631),
    I = n(262203);
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
let g = 600;
class S extends (r = o.PureComponent) {
    render() {
        let { sku: e, storeListing: t, isHorizontal: n, className: r, renderCustomTagline: i, renderCustomTitle: o, renderCustomMedia: s, isEmbed: l } = this.props,
            u = l ? h.$G : p.Z;
        return (0, a.jsx)(u, {
            className: r,
            renderMedia: null != s ? s : this.renderMedia,
            renderTitle: null != o ? o : () => e.name,
            renderTagline: null != i ? i : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n
        });
    }
    constructor(...e) {
        super(...e),
            T(this, 'renderActions', () => {
                let { inLibrary: e, sku: t, renderCustomActions: n, isMouseOver: r, showBuyInline: i } = this.props,
                    o = (i || !t.requiresPayment) && !e,
                    s = o && r;
                return null != n
                    ? n()
                    : (0, a.jsxs)('div', {
                          className: I.priceOs,
                          children: [
                              (0, a.jsx)(u.Z, {
                                  type: u.Z.Types.DIRECTORY_TILE,
                                  sku: t,
                                  inLibrary: e,
                                  className: s ? I.tilePriceWithVisibleBuyButton : I.tilePrice
                              }),
                              (0, a.jsx)(c.n, {
                                  systems: [m.TaA.WINDOWS],
                                  className: I.platform
                              }),
                              o ? (0, a.jsx)('div', { children: 'deprecated!' }) : null
                          ]
                      });
            }),
            T(this, 'renderMedia', () => {
                let { playing: e, muted: t, showMediaPlaceholder: n, onToggleMute: r, sku: i, isHorizontal: s, storeListing: u } = this.props;
                return (0, a.jsxs)(o.Fragment, {
                    children: [
                        (0, a.jsx)(E.Z, {
                            className: l()(I.splashContainer, { [I.splashContainerHorizontal]: s }),
                            video: null != u.previewVideo ? (0, f._W)(i.applicationId, u.previewVideo) : void 0,
                            image: null != u.thumbnail ? (0, f._W)(i.applicationId, u.thumbnail, g) : null,
                            title: i.name,
                            playing: e,
                            muted: t,
                            placeholder: n,
                            onToggleMute: r,
                            splashClassName: I.splashVideo,
                            splashPlaceholderClassName: I.splashPlaceholder
                        }),
                        i.exclusive ? (0, a.jsx)(_.Z, { className: l()(I.exclusiveRegular, { [I.exclusivePlaying]: e }) }) : i.isTheGameAwardsWinner ? (0, a.jsx)(d.Z, { className: l()(I.exclusiveRegular, { [I.exclusivePlaying]: e }) }) : null
                    ]
                });
            });
    }
}
T(S, 'defaultProps', {
    showMediaPlaceholder: !1,
    isMouseOver: !1,
    showBuyInline: !1,
    isHorizontal: !1,
    isEmbed: !1
}),
    (t.Z = S);

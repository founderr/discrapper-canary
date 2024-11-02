n.d(t, {
    $: function () {
        return P;
    }
}),
    n(47120),
    n(411104);
var i,
    r = n(200651),
    l = n(192379),
    a = n(568611),
    o = n(442837),
    s = n(481060),
    c = n(558381),
    u = n(410575),
    d = n(498179),
    m = n(86357),
    f = n(914602),
    h = n(568836),
    p = n(730749),
    g = n(112724),
    _ = n(812206),
    C = n(283595),
    E = n(558314),
    I = n(55563),
    x = n(551428),
    v = n(73346),
    N = n(981631),
    T = n(388032),
    S = n(232822);
function b(e, t, n) {
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
class A extends (i = l.Component) {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
            analyticsSection: t
        } = this.props;
        return {
            ...e,
            section: null != t ? t : N.jXE.APPLICATION_EMBED,
            object: N.qAy.CARD
        };
    }
    componentDidMount() {
        let { sku: e, skuId: t, storeListing: n } = this.props;
        (null == e || null == n) && (0, c.km)(t);
    }
    renderViewInStoreButton() {
        return (0, r.jsx)(s.Button.Link, {
            to: this.getStoreListingLocation(),
            className: S.actionButton,
            color: s.Button.Colors.GREEN,
            size: s.Button.Sizes.SMALL,
            children: T.intl.string(T.t['W+NB9/'])
        });
    }
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: i, renderFallback: l } = this.props,
            o = n > h.aL;
        if (null == e || null == t) return i ? l() : (0, r.jsx)(h.OR, { isHorizontal: o });
        return e.productLine === N.POd.COLLECTIBLES
            ? (0, r.jsx)(u.Z, {
                  section: N.jXE.APPLICATION_EMBED,
                  children: this.renderApplicationTile(e, t)
              })
            : (0, r.jsx)(u.Z, {
                  section: N.jXE.APPLICATION_EMBED,
                  children: (0, r.jsx)(a.rU, {
                      onClick: this.handleLinkClick,
                      to: this.getStoreListingLocation(),
                      onMouseEnter: this.handleMouseEnter,
                      onMouseLeave: this.handleMouseLeave,
                      children: this.renderApplicationTile(e, t)
                  })
              });
    }
    constructor(...e) {
        super(...e),
            b(this, 'state', {
                playing: !1,
                muted: !0
            }),
            b(this, 'handleToggleMute', () => {
                this.setState({ muted: !this.state.muted });
            }),
            b(this, 'handleMouseEnter', () => {
                this.setState({ playing: !0 });
            }),
            b(this, 'handleMouseLeave', () => {
                this.setState({ playing: !1 });
            }),
            b(this, 'getStoreListingLocation', () => {
                let { sku: e } = this.props;
                if (null == e) throw Error('Should not be link to ApplicationStoreListing without SKU');
                return (0, v.ZI)(e.id, {
                    slug: e.slug,
                    analyticsSource: this.analyticsLocation
                });
            }),
            b(this, 'handleActionButtonClick', (e) => e.preventDefault()),
            b(this, 'handleBuyButtonClick', (e) => e.preventDefault()),
            b(this, 'handleLinkClick', (e) => {
                let { onEmbedClick: t } = this.props;
                null != t && t(e);
            }),
            b(this, 'renderApplicationTile', (e, t) => {
                let { inLibrary: n, width: i, renderCustomTitle: l, renderCustomTagline: a, renderCustomMedia: o } = this.props,
                    { playing: s, muted: c } = this.state,
                    u = i > h.aL;
                return (0, r.jsx)(f.Z, {
                    sku: e,
                    storeListing: t,
                    playing: s,
                    muted: c,
                    inLibrary: n,
                    onToggleMute: this.handleToggleMute,
                    renderCustomActions: () => this.renderActions(e),
                    renderCustomTitle: l,
                    renderCustomTagline: a,
                    renderCustomMedia: o,
                    isHorizontal: u,
                    isEmbed: !0
                });
            }),
            b(this, 'renderActions', (e) => {
                let { inLibrary: t, application: n, skuId: i, libraryApplication: l, renderCustomActions: a } = this.props;
                if (null != a)
                    return (0, r.jsx)('div', {
                        className: S.tileActions,
                        children: a()
                    });
                if (null == n) return null;
                let o = null != n && n.primarySkuId === i,
                    c = null != l && l.hasFlag(N.eHb.HIDDEN);
                return (0, r.jsxs)('div', {
                    className: S.tileActions,
                    children: [
                        !o || c
                            ? this.renderViewInStoreButton()
                            : (0, r.jsx)(d.Z, {
                                  application: n,
                                  customDisabledColor: s.Button.Colors.PRIMARY,
                                  size: s.Button.Sizes.SMALL,
                                  className: S.actionButton,
                                  source: N.Sbl.MESSAGE_EMBED,
                                  onClick: this.handleActionButtonClick
                              }),
                        (t && !c) || e.premium
                            ? null
                            : (0, r.jsx)(m.Z, {
                                  type: m.Z.Types.EMBED,
                                  sku: e,
                                  inLibrary: !1
                              })
                    ]
                });
            });
    }
}
b(A, 'defaultProps', { renderFallback: N.dG4 });
let j = [I.Z, E.Z, C.Z, x.Z];
function Z(e) {
    let { skuId: t } = e,
        n = I.Z.get(t),
        i = null != n ? _.Z.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: I.Z.didFetchingSkuFail(t),
        inLibrary: null != n && C.Z.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? x.Z.getForSKU(n.id) : null,
        libraryApplication: null != n ? C.Z.getLibraryApplication(n.applicationId, n.applicationId, !0) : null
    };
}
let R = (0, g.Z)((0, p.Z)(A));
t.Z = o.ZP.connectStores(j, Z)(R);
let P = (0, p.Z)(o.ZP.connectStores(j, Z)(A));

n.d(t, {
    $: function () {
        return L;
    }
}),
    n(47120),
    n(411104);
var i,
    a = n(735250),
    s = n(470079),
    l = n(613828),
    r = n(442837),
    o = n(481060),
    c = n(558381),
    d = n(410575),
    u = n(498179),
    _ = n(86357),
    E = n(914602),
    I = n(568836),
    m = n(730749),
    T = n(112724),
    N = n(812206),
    h = n(283595),
    C = n(558314),
    p = n(55563),
    f = n(551428),
    g = n(73346),
    A = n(981631),
    S = n(689938),
    M = n(232822);
function O(e, t, n) {
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
class x extends (i = s.Component) {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
            analyticsSection: t
        } = this.props;
        return {
            ...e,
            section: null != t ? t : A.jXE.APPLICATION_EMBED,
            object: A.qAy.CARD
        };
    }
    componentDidMount() {
        let { sku: e, skuId: t, storeListing: n } = this.props;
        (null == e || null == n) && (0, c.km)(t);
    }
    renderViewInStoreButton() {
        return (0, a.jsx)(o.Button.Link, {
            to: this.getStoreListingLocation(),
            className: M.actionButton,
            color: o.Button.Colors.GREEN,
            size: o.Button.Sizes.SMALL,
            children: S.Z.Messages.GAME_ACTION_BUTTON_VIEW_IN_STORE
        });
    }
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: i, renderFallback: s } = this.props,
            r = n > I.aL;
        if (null == e || null == t) return i ? s() : (0, a.jsx)(I.OR, { isHorizontal: r });
        return e.productLine === A.POd.COLLECTIBLES
            ? (0, a.jsx)(d.Z, {
                  section: A.jXE.APPLICATION_EMBED,
                  children: this.renderApplicationTile(e, t)
              })
            : (0, a.jsx)(d.Z, {
                  section: A.jXE.APPLICATION_EMBED,
                  children: (0, a.jsx)(l.rU, {
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
            O(this, 'state', {
                playing: !1,
                muted: !0
            }),
            O(this, 'handleToggleMute', () => {
                this.setState({ muted: !this.state.muted });
            }),
            O(this, 'handleMouseEnter', () => {
                this.setState({ playing: !0 });
            }),
            O(this, 'handleMouseLeave', () => {
                this.setState({ playing: !1 });
            }),
            O(this, 'getStoreListingLocation', () => {
                let { sku: e } = this.props;
                if (null == e) throw Error('Should not be link to ApplicationStoreListing without SKU');
                return (0, g.ZI)(e.id, {
                    slug: e.slug,
                    analyticsSource: this.analyticsLocation
                });
            }),
            O(this, 'handleActionButtonClick', (e) => e.preventDefault()),
            O(this, 'handleBuyButtonClick', (e) => e.preventDefault()),
            O(this, 'handleLinkClick', (e) => {
                let { onEmbedClick: t } = this.props;
                null != t && t(e);
            }),
            O(this, 'renderApplicationTile', (e, t) => {
                let { inLibrary: n, width: i, renderCustomTitle: s, renderCustomTagline: l, renderCustomMedia: r } = this.props,
                    { playing: o, muted: c } = this.state,
                    d = i > I.aL;
                return (0, a.jsx)(E.Z, {
                    sku: e,
                    storeListing: t,
                    playing: o,
                    muted: c,
                    inLibrary: n,
                    onToggleMute: this.handleToggleMute,
                    renderCustomActions: () => this.renderActions(e),
                    renderCustomTitle: s,
                    renderCustomTagline: l,
                    renderCustomMedia: r,
                    isHorizontal: d,
                    isEmbed: !0
                });
            }),
            O(this, 'renderActions', (e) => {
                let { inLibrary: t, application: n, skuId: i, libraryApplication: s, renderCustomActions: l } = this.props;
                if (null != l)
                    return (0, a.jsx)('div', {
                        className: M.tileActions,
                        children: l()
                    });
                if (null == n) return null;
                let r = null != n && n.primarySkuId === i,
                    c = null != s && s.hasFlag(A.eHb.HIDDEN);
                return (0, a.jsxs)('div', {
                    className: M.tileActions,
                    children: [
                        !r || c
                            ? this.renderViewInStoreButton()
                            : (0, a.jsx)(u.Z, {
                                  application: n,
                                  customDisabledColor: o.Button.Colors.PRIMARY,
                                  size: o.Button.Sizes.SMALL,
                                  className: M.actionButton,
                                  source: A.Sbl.MESSAGE_EMBED,
                                  onClick: this.handleActionButtonClick
                              }),
                        (t && !c) || e.premium
                            ? null
                            : (0, a.jsx)(_.Z, {
                                  type: _.Z.Types.EMBED,
                                  sku: e,
                                  inLibrary: !1
                              })
                    ]
                });
            });
    }
}
O(x, 'defaultProps', { renderFallback: A.dG4 });
let R = [p.Z, C.Z, h.Z, f.Z];
function v(e) {
    let { skuId: t } = e,
        n = p.Z.get(t),
        i = null != n ? N.Z.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: p.Z.didFetchingSkuFail(t),
        inLibrary: null != n && h.Z.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? f.Z.getForSKU(n.id) : null,
        libraryApplication: null != n ? h.Z.getLibraryApplication(n.applicationId, n.applicationId, !0) : null
    };
}
let Z = (0, T.Z)((0, m.Z)(x));
t.Z = r.ZP.connectStores(R, v)(Z);
let L = (0, m.Z)(r.ZP.connectStores(R, v)(x));

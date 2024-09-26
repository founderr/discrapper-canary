n.d(t, {
    $: function () {
        return P;
    }
});
var r,
    i = n(47120);
var a = n(411104);
var o = n(735250),
    s = n(470079),
    l = n(613828),
    u = n(442837),
    c = n(481060),
    d = n(558381),
    _ = n(410575),
    E = n(498179),
    f = n(86357),
    h = n(914602),
    p = n(568836),
    m = n(730749),
    I = n(112724),
    T = n(812206),
    g = n(283595),
    S = n(558314),
    A = n(55563),
    v = n(551428),
    N = n(73346),
    O = n(981631),
    R = n(689938),
    C = n(232822);
function y(e, t, n) {
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
class L extends (r = s.Component) {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
            analyticsSection: t
        } = this.props;
        return {
            ...e,
            section: null != t ? t : O.jXE.APPLICATION_EMBED,
            object: O.qAy.CARD
        };
    }
    componentDidMount() {
        let { sku: e, skuId: t, storeListing: n } = this.props;
        (null == e || null == n) && (0, d.km)(t);
    }
    renderViewInStoreButton() {
        return (0, o.jsx)(c.Button.Link, {
            to: this.getStoreListingLocation(),
            className: C.actionButton,
            color: c.Button.Colors.GREEN,
            size: c.Button.Sizes.SMALL,
            children: R.Z.Messages.GAME_ACTION_BUTTON_VIEW_IN_STORE
        });
    }
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: r, renderFallback: i } = this.props,
            a = n > p.aL;
        if (null == e || null == t) return r ? i() : (0, o.jsx)(p.OR, { isHorizontal: a });
        return e.productLine === O.POd.COLLECTIBLES
            ? (0, o.jsx)(_.Z, {
                  section: O.jXE.APPLICATION_EMBED,
                  children: this.renderApplicationTile(e, t)
              })
            : (0, o.jsx)(_.Z, {
                  section: O.jXE.APPLICATION_EMBED,
                  children: (0, o.jsx)(l.rU, {
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
            y(this, 'state', {
                playing: !1,
                muted: !0
            }),
            y(this, 'handleToggleMute', () => {
                this.setState({ muted: !this.state.muted });
            }),
            y(this, 'handleMouseEnter', () => {
                this.setState({ playing: !0 });
            }),
            y(this, 'handleMouseLeave', () => {
                this.setState({ playing: !1 });
            }),
            y(this, 'getStoreListingLocation', () => {
                let { sku: e } = this.props;
                if (null == e) throw Error('Should not be link to ApplicationStoreListing without SKU');
                return (0, N.ZI)(e.id, {
                    slug: e.slug,
                    analyticsSource: this.analyticsLocation
                });
            }),
            y(this, 'handleActionButtonClick', (e) => e.preventDefault()),
            y(this, 'handleBuyButtonClick', (e) => e.preventDefault()),
            y(this, 'handleLinkClick', (e) => {
                let { onEmbedClick: t } = this.props;
                null != t && t(e);
            }),
            y(this, 'renderApplicationTile', (e, t) => {
                let { inLibrary: n, width: r, renderCustomTitle: i, renderCustomTagline: a, renderCustomMedia: s } = this.props,
                    { playing: l, muted: u } = this.state,
                    c = r > p.aL;
                return (0, o.jsx)(h.Z, {
                    sku: e,
                    storeListing: t,
                    playing: l,
                    muted: u,
                    inLibrary: n,
                    onToggleMute: this.handleToggleMute,
                    renderCustomActions: () => this.renderActions(e),
                    renderCustomTitle: i,
                    renderCustomTagline: a,
                    renderCustomMedia: s,
                    isHorizontal: c,
                    isEmbed: !0
                });
            }),
            y(this, 'renderActions', (e) => {
                let { inLibrary: t, application: n, skuId: r, libraryApplication: i, renderCustomActions: a } = this.props;
                if (null != a)
                    return (0, o.jsx)('div', {
                        className: C.tileActions,
                        children: a()
                    });
                if (null == n) return null;
                let s = null != n && n.primarySkuId === r,
                    l = null != i && i.hasFlag(O.eHb.HIDDEN);
                return (0, o.jsxs)('div', {
                    className: C.tileActions,
                    children: [
                        !s || l
                            ? this.renderViewInStoreButton()
                            : (0, o.jsx)(E.Z, {
                                  application: n,
                                  customDisabledColor: c.Button.Colors.PRIMARY,
                                  size: c.Button.Sizes.SMALL,
                                  className: C.actionButton,
                                  source: O.Sbl.MESSAGE_EMBED,
                                  onClick: this.handleActionButtonClick
                              }),
                        (t && !l) || e.premium
                            ? null
                            : (0, o.jsx)(f.Z, {
                                  type: f.Z.Types.EMBED,
                                  sku: e,
                                  inLibrary: !1
                              })
                    ]
                });
            });
    }
}
y(L, 'defaultProps', { renderFallback: O.dG4 });
let b = [A.Z, S.Z, g.Z, v.Z];
function D(e) {
    let { skuId: t } = e,
        n = A.Z.get(t),
        r = null != n ? T.Z.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: r,
        fetchFailed: A.Z.didFetchingSkuFail(t),
        inLibrary: null != n && g.Z.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? v.Z.getForSKU(n.id) : null,
        libraryApplication: null != n ? g.Z.getLibraryApplication(n.applicationId, n.applicationId, !0) : null
    };
}
let M = (0, I.Z)((0, m.Z)(L));
t.Z = u.ZP.connectStores(b, D)(M);
let P = (0, m.Z)(u.ZP.connectStores(b, D)(L));

n(411104);
var i,
    a,
    s,
    r,
    l,
    o,
    c,
    u,
    d = n(735250),
    _ = n(470079),
    E = n(120356),
    I = n.n(E),
    m = n(481060),
    T = n(646288),
    f = n(689938),
    h = n(656652);
((r = i || (i = {}))[(r.DIRECTORY_HERO = 1)] = 'DIRECTORY_HERO'), (r[(r.DIRECTORY_TILE = 2)] = 'DIRECTORY_TILE'), (r[(r.DIRECTORY_SEARCH = 3)] = 'DIRECTORY_SEARCH'), (r[(r.LISTING = 4)] = 'LISTING'), (r[(r.EMBED = 5)] = 'EMBED'), ((l = a || (a = {}))[(l.IN_LIBRARY = 1)] = 'IN_LIBRARY'), (l[(l.ON_SALE = 2)] = 'ON_SALE'), (l[(l.PREMIUM = 3)] = 'PREMIUM'), (l[(l.DEFAULT = 4)] = 'DEFAULT'), (l[(l.ENTITLEMENT_BRANCH = 5)] = 'ENTITLEMENT_BRANCH');
let N = (e) => {
        let { className: t } = e;
        return (0, d.jsxs)('div', {
            className: I()(h.row, t),
            children: [
                (0, d.jsx)(m.InventoryIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: h.icon
                }),
                f.Z.Messages.APPLICATION_STORE_IN_LIBRARY
            ]
        });
    },
    p = (e) => {
        let { sku: t, className: n } = e;
        return (0, d.jsxs)('div', {
            className: I()(h.row, n),
            children: [
                (0, d.jsx)(m.NitroWheelIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: h.icon
                }),
                (0, T.Z)(t)
            ]
        });
    },
    C = (e) => {
        let { sku: t, className: n } = e;
        return (0, d.jsx)('div', {
            className: I()(h.salePercentage, n),
            children: t.getDisplaySalePercentage()
        });
    },
    g = (e) => {
        let { sku: t, className: n } = e;
        return (0, d.jsx)('div', {
            className: I()(h.originalAmount, n),
            children: (0, T.Z)(t, !1)
        });
    },
    S = (e) => {
        let { sku: t, className: n } = e;
        return (0, d.jsx)('div', {
            className: n,
            children: (0, T.Z)(t)
        });
    },
    A = (e) => {
        let { sku: t, className: n } = e;
        return (0, d.jsxs)('div', {
            className: I()(h.row, n),
            children: [(0, d.jsx)(C, { sku: t }), (0, d.jsx)(g, { sku: t }), (0, d.jsx)(S, { sku: t })]
        });
    },
    x = (e) => {
        let { className: t } = e;
        return (0, d.jsx)('div', {
            className: t,
            children: f.Z.Messages.APPLICATION_STORE_FREE
        });
    };
class R extends (s = _.PureComponent) {
    getState() {
        let { inLibrary: e, sku: t, hasEntitlementBranch: n } = this.props;
        if (n) return 5;
        if (e) return 1;
        if (!t.available) return 4;
        else if (t.premium) return 3;
        else if (t.isOnSale) return 2;
        else if (null != t.getPrice()) return 4;
        return null;
    }
    renderGeneric(e, t) {
        let { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                return (0, d.jsx)(x, { className: I()(t, n) });
            case 1:
                return (0, d.jsx)(N, { className: I()(t, n) });
            case 3:
                return (0, d.jsx)(p, {
                    sku: i,
                    className: I()(t, n)
                });
            case 2:
                return (0, d.jsx)(A, {
                    sku: i,
                    className: I()(t, n)
                });
            default:
                return (0, d.jsx)(S, {
                    className: I()(t, n),
                    sku: i
                });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, d.jsx)(x, { className: I()(t) });
            case 3:
                return (0, d.jsx)(p, {
                    sku: n,
                    className: I()(h.directoryHeroPricePremium, t)
                });
            case 2:
                return (0, d.jsx)(A, {
                    sku: n,
                    className: I()(h.directoryHeroPrice, t)
                });
            default:
                return (0, d.jsx)(S, {
                    className: I()(h.directoryHeroPrice, t),
                    sku: n
                });
        }
    }
    renderListing(e) {
        let t;
        let { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                t = (0, d.jsx)(x, {});
                break;
            case 2:
                t = (0, d.jsxs)(_.Fragment, {
                    children: [
                        (0, d.jsxs)('div', {
                            className: h.row,
                            children: [(0, d.jsx)(S, { sku: i }), (0, d.jsx)(C, { sku: i })]
                        }),
                        (0, d.jsx)(g, { sku: i })
                    ]
                });
                break;
            default:
                t = (0, d.jsx)(S, { sku: i });
        }
        return (0, d.jsx)('div', {
            className: I()(h.listingPrice, n),
            children: t
        });
    }
    render() {
        let e = this.getState();
        if (null == e) return null;
        switch (this.props.type) {
            case 1:
                return this.renderDirectoryHero(e);
            case 2:
                return this.renderGeneric(e, h.directoryTilePrice);
            case 3:
                return this.renderGeneric(e, h.directorySearchPrice);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, h.embedPrice);
            default:
                throw Error('Invalid Price Unit Type');
        }
    }
}
(o = R),
    (c = 'Types'),
    (u = i),
    c in o
        ? Object.defineProperty(o, c, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[c] = u),
    (t.Z = R);

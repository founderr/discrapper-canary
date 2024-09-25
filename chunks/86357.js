var r,
    i,
    a,
    o = n(411104);
var s = n(735250),
    l = n(470079),
    u = n(120356),
    c = n.n(u),
    d = n(481060),
    _ = n(646288),
    E = n(689938),
    f = n(656652);
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
!(function (e) {
    (e[(e.DIRECTORY_HERO = 1)] = 'DIRECTORY_HERO'), (e[(e.DIRECTORY_TILE = 2)] = 'DIRECTORY_TILE'), (e[(e.DIRECTORY_SEARCH = 3)] = 'DIRECTORY_SEARCH'), (e[(e.LISTING = 4)] = 'LISTING'), (e[(e.EMBED = 5)] = 'EMBED');
})(r || (r = {})),
    !(function (e) {
        (e[(e.IN_LIBRARY = 1)] = 'IN_LIBRARY'), (e[(e.ON_SALE = 2)] = 'ON_SALE'), (e[(e.PREMIUM = 3)] = 'PREMIUM'), (e[(e.DEFAULT = 4)] = 'DEFAULT'), (e[(e.ENTITLEMENT_BRANCH = 5)] = 'ENTITLEMENT_BRANCH');
    })(i || (i = {}));
let p = (e) => {
        let { className: t } = e;
        return (0, s.jsxs)('div', {
            className: c()(f.row, t),
            children: [
                (0, s.jsx)(d.InventoryIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: f.icon
                }),
                E.Z.Messages.APPLICATION_STORE_IN_LIBRARY
            ]
        });
    },
    m = (e) => {
        let { sku: t, className: n } = e;
        return (0, s.jsxs)('div', {
            className: c()(f.row, n),
            children: [
                (0, s.jsx)(d.NitroWheelIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: f.icon
                }),
                (0, _.Z)(t)
            ]
        });
    },
    I = (e) => {
        let { sku: t, className: n } = e;
        return (0, s.jsx)('div', {
            className: c()(f.salePercentage, n),
            children: t.getDisplaySalePercentage()
        });
    },
    T = (e) => {
        let { sku: t, className: n } = e;
        return (0, s.jsx)('div', {
            className: c()(f.originalAmount, n),
            children: (0, _.Z)(t, !1)
        });
    },
    g = (e) => {
        let { sku: t, className: n } = e;
        return (0, s.jsx)('div', {
            className: n,
            children: (0, _.Z)(t)
        });
    },
    S = (e) => {
        let { sku: t, className: n } = e;
        return (0, s.jsxs)('div', {
            className: c()(f.row, n),
            children: [(0, s.jsx)(I, { sku: t }), (0, s.jsx)(T, { sku: t }), (0, s.jsx)(g, { sku: t })]
        });
    },
    A = (e) => {
        let { className: t } = e;
        return (0, s.jsx)('div', {
            className: t,
            children: E.Z.Messages.APPLICATION_STORE_FREE
        });
    };
class v extends (a = l.PureComponent) {
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
        let { className: n, sku: r } = this.props;
        switch (e) {
            case 5:
                return (0, s.jsx)(A, { className: c()(t, n) });
            case 1:
                return (0, s.jsx)(p, { className: c()(t, n) });
            case 3:
                return (0, s.jsx)(m, {
                    sku: r,
                    className: c()(t, n)
                });
            case 2:
                return (0, s.jsx)(S, {
                    sku: r,
                    className: c()(t, n)
                });
            default:
                return (0, s.jsx)(g, {
                    className: c()(t, n),
                    sku: r
                });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, s.jsx)(A, { className: c()(t) });
            case 3:
                return (0, s.jsx)(m, {
                    sku: n,
                    className: c()(f.directoryHeroPricePremium, t)
                });
            case 2:
                return (0, s.jsx)(S, {
                    sku: n,
                    className: c()(f.directoryHeroPrice, t)
                });
            default:
                return (0, s.jsx)(g, {
                    className: c()(f.directoryHeroPrice, t),
                    sku: n
                });
        }
    }
    renderListing(e) {
        let t;
        let { className: n, sku: r } = this.props;
        switch (e) {
            case 5:
                t = (0, s.jsx)(A, {});
                break;
            case 2:
                t = (0, s.jsxs)(l.Fragment, {
                    children: [
                        (0, s.jsxs)('div', {
                            className: f.row,
                            children: [(0, s.jsx)(g, { sku: r }), (0, s.jsx)(I, { sku: r })]
                        }),
                        (0, s.jsx)(T, { sku: r })
                    ]
                });
                break;
            default:
                t = (0, s.jsx)(g, { sku: r });
        }
        return (0, s.jsx)('div', {
            className: c()(f.listingPrice, n),
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
                return this.renderGeneric(e, f.directoryTilePrice);
            case 3:
                return this.renderGeneric(e, f.directorySearchPrice);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, f.embedPrice);
            default:
                throw Error('Invalid Price Unit Type');
        }
    }
}
h(v, 'Types', r), (t.Z = v);

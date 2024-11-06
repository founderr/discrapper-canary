n(411104);
var i,
    r,
    l,
    a,
    o,
    s,
    c,
    u,
    d = n(200651),
    m = n(192379),
    h = n(120356),
    f = n.n(h),
    p = n(481060),
    g = n(646288),
    _ = n(388032),
    C = n(656652);
((a = i || (i = {}))[(a.DIRECTORY_HERO = 1)] = 'DIRECTORY_HERO'), (a[(a.DIRECTORY_TILE = 2)] = 'DIRECTORY_TILE'), (a[(a.DIRECTORY_SEARCH = 3)] = 'DIRECTORY_SEARCH'), (a[(a.LISTING = 4)] = 'LISTING'), (a[(a.EMBED = 5)] = 'EMBED'), ((o = r || (r = {}))[(o.IN_LIBRARY = 1)] = 'IN_LIBRARY'), (o[(o.ON_SALE = 2)] = 'ON_SALE'), (o[(o.PREMIUM = 3)] = 'PREMIUM'), (o[(o.DEFAULT = 4)] = 'DEFAULT'), (o[(o.ENTITLEMENT_BRANCH = 5)] = 'ENTITLEMENT_BRANCH');
let E = (e) => {
        let { className: t } = e;
        return (0, d.jsxs)('div', {
            className: f()(C.row, t),
            children: [
                (0, d.jsx)(p.InventoryIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: C.icon
                }),
                _.intl.string(_.t['7eicAA'])
            ]
        });
    },
    I = (e) => {
        let { sku: t, className: n } = e;
        return (0, d.jsxs)('div', {
            className: f()(C.row, n),
            children: [
                (0, d.jsx)(p.NitroWheelIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: C.icon
                }),
                (0, g.Z)(t)
            ]
        });
    },
    x = (e) => {
        let { sku: t, className: n } = e;
        return (0, d.jsx)('div', {
            className: f()(C.salePercentage, n),
            children: t.getDisplaySalePercentage()
        });
    },
    v = (e) => {
        let { sku: t, className: n } = e;
        return (0, d.jsx)('div', {
            className: f()(C.originalAmount, n),
            children: (0, g.Z)(t, !1)
        });
    },
    N = (e) => {
        let { sku: t, className: n } = e;
        return (0, d.jsx)('div', {
            className: n,
            children: (0, g.Z)(t)
        });
    },
    T = (e) => {
        let { sku: t, className: n } = e;
        return (0, d.jsxs)('div', {
            className: f()(C.row, n),
            children: [(0, d.jsx)(x, { sku: t }), (0, d.jsx)(v, { sku: t }), (0, d.jsx)(N, { sku: t })]
        });
    },
    S = (e) => {
        let { className: t } = e;
        return (0, d.jsx)('div', {
            className: t,
            children: _.intl.string(_.t.QQsaCQ)
        });
    };
class b extends (l = m.PureComponent) {
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
                return (0, d.jsx)(S, { className: f()(t, n) });
            case 1:
                return (0, d.jsx)(E, { className: f()(t, n) });
            case 3:
                return (0, d.jsx)(I, {
                    sku: i,
                    className: f()(t, n)
                });
            case 2:
                return (0, d.jsx)(T, {
                    sku: i,
                    className: f()(t, n)
                });
            default:
                return (0, d.jsx)(N, {
                    className: f()(t, n),
                    sku: i
                });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, d.jsx)(S, { className: f()(t) });
            case 3:
                return (0, d.jsx)(I, {
                    sku: n,
                    className: f()(C.directoryHeroPricePremium, t)
                });
            case 2:
                return (0, d.jsx)(T, {
                    sku: n,
                    className: f()(C.directoryHeroPrice, t)
                });
            default:
                return (0, d.jsx)(N, {
                    className: f()(C.directoryHeroPrice, t),
                    sku: n
                });
        }
    }
    renderListing(e) {
        let t;
        let { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                t = (0, d.jsx)(S, {});
                break;
            case 2:
                t = (0, d.jsxs)(m.Fragment, {
                    children: [
                        (0, d.jsxs)('div', {
                            className: C.row,
                            children: [(0, d.jsx)(N, { sku: i }), (0, d.jsx)(x, { sku: i })]
                        }),
                        (0, d.jsx)(v, { sku: i })
                    ]
                });
                break;
            default:
                t = (0, d.jsx)(N, { sku: i });
        }
        return (0, d.jsx)('div', {
            className: f()(C.listingPrice, n),
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
                return this.renderGeneric(e, C.directoryTilePrice);
            case 3:
                return this.renderGeneric(e, C.directorySearchPrice);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, C.embedPrice);
            default:
                throw Error('Invalid Price Unit Type');
        }
    }
}
(s = b),
    (c = 'Types'),
    (u = i),
    c in s
        ? Object.defineProperty(s, c, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[c] = u),
    (t.Z = b);

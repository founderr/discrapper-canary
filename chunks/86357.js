"use strict";
n.r(t), n("411104");
var s, a, l, i, r, o, u, d, c = n("735250"),
  f = n("470079"),
  E = n("120356"),
  _ = n.n(E),
  T = n("646288"),
  m = n("427828"),
  I = n("466111"),
  N = n("689938"),
  p = n("585040");
(i = s || (s = {}))[i.DIRECTORY_HERO = 1] = "DIRECTORY_HERO", i[i.DIRECTORY_TILE = 2] = "DIRECTORY_TILE", i[i.DIRECTORY_SEARCH = 3] = "DIRECTORY_SEARCH", i[i.LISTING = 4] = "LISTING", i[i.EMBED = 5] = "EMBED", (r = a || (a = {}))[r.IN_LIBRARY = 1] = "IN_LIBRARY", r[r.ON_SALE = 2] = "ON_SALE", r[r.PREMIUM = 3] = "PREMIUM", r[r.DEFAULT = 4] = "DEFAULT", r[r.ENTITLEMENT_BRANCH = 5] = "ENTITLEMENT_BRANCH";
let h = e => {
    let {
      className: t
    } = e;
    return (0, c.jsxs)("div", {
      className: _()(p.row, t),
      children: [(0, c.jsx)(m.default, {
        className: p.icon
      }), N.default.Messages.APPLICATION_STORE_IN_LIBRARY]
    })
  },
  S = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, c.jsxs)("div", {
      className: _()(p.row, n),
      children: [(0, c.jsx)(I.default, {
        className: p.icon
      }), (0, T.default)(t)]
    })
  },
  C = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, c.jsx)("div", {
      className: _()(p.salePercentage, n),
      children: t.getDisplaySalePercentage()
    })
  },
  A = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, c.jsx)("div", {
      className: _()(p.originalAmount, n),
      children: (0, T.default)(t, !1)
    })
  },
  g = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, c.jsx)("div", {
      className: n,
      children: (0, T.default)(t)
    })
  },
  M = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, c.jsxs)("div", {
      className: _()(p.row, n),
      children: [(0, c.jsx)(C, {
        sku: t
      }), (0, c.jsx)(A, {
        sku: t
      }), (0, c.jsx)(g, {
        sku: t
      })]
    })
  },
  R = e => {
    let {
      className: t
    } = e;
    return (0, c.jsx)("div", {
      className: t,
      children: N.default.Messages.APPLICATION_STORE_FREE
    })
  };
class O extends(l = f.PureComponent) {
  getState() {
    let {
      inLibrary: e,
      sku: t,
      hasEntitlementBranch: n
    } = this.props;
    if (n) return 5;
    if (e) return 1;
    if (!t.available) return 4;
    else if (t.premium) return 3;
    else if (t.isOnSale) return 2;
    else if (null != t.getPrice()) return 4;
    return null
  }
  renderGeneric(e, t) {
    let {
      className: n,
      sku: s
    } = this.props;
    switch (e) {
      case 5:
        return (0, c.jsx)(R, {
          className: _()(t, n)
        });
      case 1:
        return (0, c.jsx)(h, {
          className: _()(t, n)
        });
      case 3:
        return (0, c.jsx)(S, {
          sku: s,
          className: _()(t, n)
        });
      case 2:
        return (0, c.jsx)(M, {
          sku: s,
          className: _()(t, n)
        });
      default:
        return (0, c.jsx)(g, {
          className: _()(t, n),
          sku: s
        })
    }
  }
  renderDirectoryHero(e) {
    let {
      className: t,
      sku: n
    } = this.props;
    switch (e) {
      case 5:
        return (0, c.jsx)(R, {
          className: _()(t)
        });
      case 3:
        return (0, c.jsx)(S, {
          sku: n,
          className: _()(p.directoryHeroPricePremium, t)
        });
      case 2:
        return (0, c.jsx)(M, {
          sku: n,
          className: _()(p.directoryHeroPrice, t)
        });
      default:
        return (0, c.jsx)(g, {
          className: _()(p.directoryHeroPrice, t),
          sku: n
        })
    }
  }
  renderListing(e) {
    let t;
    let {
      className: n,
      sku: s
    } = this.props;
    switch (e) {
      case 5:
        t = (0, c.jsx)(R, {});
        break;
      case 2:
        t = (0, c.jsxs)(f.Fragment, {
          children: [(0, c.jsxs)("div", {
            className: p.row,
            children: [(0, c.jsx)(g, {
              sku: s
            }), (0, c.jsx)(C, {
              sku: s
            })]
          }), (0, c.jsx)(A, {
            sku: s
          })]
        });
        break;
      default:
        t = (0, c.jsx)(g, {
          sku: s
        })
    }
    return (0, c.jsx)("div", {
      className: _()(p.listingPrice, n),
      children: t
    })
  }
  render() {
    let e = this.getState();
    if (null == e) return null;
    switch (this.props.type) {
      case 1:
        return this.renderDirectoryHero(e);
      case 2:
        return this.renderGeneric(e, p.directoryTilePrice);
      case 3:
        return this.renderGeneric(e, p.directorySearchPrice);
      case 4:
        return this.renderListing(e);
      case 5:
        return this.renderGeneric(e, p.embedPrice);
      default:
        throw Error("Invalid Price Unit Type")
    }
  }
}
o = O, u = "Types", d = s, u in o ? Object.defineProperty(o, u, {
  value: d,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[u] = d, t.default = O
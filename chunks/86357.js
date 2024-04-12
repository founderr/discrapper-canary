"use strict";
n.r(t), n("411104");
var s, a, l, i, r, o, u, d, c = n("735250"),
  E = n("470079"),
  f = n("803997"),
  _ = n.n(f),
  T = n("646288"),
  I = n("427828"),
  m = n("466111"),
  p = n("689938"),
  N = n("316556");
(i = s || (s = {}))[i.DIRECTORY_HERO = 1] = "DIRECTORY_HERO", i[i.DIRECTORY_TILE = 2] = "DIRECTORY_TILE", i[i.DIRECTORY_SEARCH = 3] = "DIRECTORY_SEARCH", i[i.LISTING = 4] = "LISTING", i[i.EMBED = 5] = "EMBED", (r = a || (a = {}))[r.IN_LIBRARY = 1] = "IN_LIBRARY", r[r.ON_SALE = 2] = "ON_SALE", r[r.PREMIUM = 3] = "PREMIUM", r[r.DEFAULT = 4] = "DEFAULT", r[r.ENTITLEMENT_BRANCH = 5] = "ENTITLEMENT_BRANCH";
let S = e => {
    let {
      className: t
    } = e;
    return (0, c.jsxs)("div", {
      className: _()(N.row, t),
      children: [(0, c.jsx)(I.default, {
        className: N.icon
      }), p.default.Messages.APPLICATION_STORE_IN_LIBRARY]
    })
  },
  C = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, c.jsxs)("div", {
      className: _()(N.row, n),
      children: [(0, c.jsx)(m.default, {
        className: N.icon
      }), (0, T.default)(t)]
    })
  },
  A = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, c.jsx)("div", {
      className: _()(N.salePercentage, n),
      children: t.getDisplaySalePercentage()
    })
  },
  h = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, c.jsx)("div", {
      className: _()(N.originalAmount, n),
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
      className: _()(N.row, n),
      children: [(0, c.jsx)(A, {
        sku: t
      }), (0, c.jsx)(h, {
        sku: t
      }), (0, c.jsx)(g, {
        sku: t
      })]
    })
  },
  O = e => {
    let {
      className: t
    } = e;
    return (0, c.jsx)("div", {
      className: t,
      children: p.default.Messages.APPLICATION_STORE_FREE
    })
  };
class R extends(l = E.PureComponent) {
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
        return (0, c.jsx)(O, {
          className: _()(t, n)
        });
      case 1:
        return (0, c.jsx)(S, {
          className: _()(t, n)
        });
      case 3:
        return (0, c.jsx)(C, {
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
        return (0, c.jsx)(O, {
          className: _()(t)
        });
      case 3:
        return (0, c.jsx)(C, {
          sku: n,
          className: _()(N.directoryHeroPricePremium, t)
        });
      case 2:
        return (0, c.jsx)(M, {
          sku: n,
          className: _()(N.directoryHeroPrice, t)
        });
      default:
        return (0, c.jsx)(g, {
          className: _()(N.directoryHeroPrice, t),
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
        t = (0, c.jsx)(O, {});
        break;
      case 2:
        t = (0, c.jsxs)(E.Fragment, {
          children: [(0, c.jsxs)("div", {
            className: N.row,
            children: [(0, c.jsx)(g, {
              sku: s
            }), (0, c.jsx)(A, {
              sku: s
            })]
          }), (0, c.jsx)(h, {
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
      className: _()(N.listingPrice, n),
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
        return this.renderGeneric(e, N.directoryTilePrice);
      case 3:
        return this.renderGeneric(e, N.directorySearchPrice);
      case 4:
        return this.renderListing(e);
      case 5:
        return this.renderGeneric(e, N.embedPrice);
      default:
        throw Error("Invalid Price Unit Type")
    }
  }
}
o = R, u = "Types", d = s, u in o ? Object.defineProperty(o, u, {
  value: d,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[u] = d, t.default = R
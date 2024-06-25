n(411104);
var s, i, l, a, r, o, c, u, d = n(735250),
  E = n(470079),
  _ = n(120356),
  I = n.n(_),
  T = n(481060),
  m = n(646288),
  N = n(689938),
  h = n(162176);
(a = s || (s = {}))[a.DIRECTORY_HERO = 1] = "DIRECTORY_HERO", a[a.DIRECTORY_TILE = 2] = "DIRECTORY_TILE", a[a.DIRECTORY_SEARCH = 3] = "DIRECTORY_SEARCH", a[a.LISTING = 4] = "LISTING", a[a.EMBED = 5] = "EMBED", (r = i || (i = {}))[r.IN_LIBRARY = 1] = "IN_LIBRARY", r[r.ON_SALE = 2] = "ON_SALE", r[r.PREMIUM = 3] = "PREMIUM", r[r.DEFAULT = 4] = "DEFAULT", r[r.ENTITLEMENT_BRANCH = 5] = "ENTITLEMENT_BRANCH";
let C = e => {
    let {
      className: t
    } = e;
    return (0, d.jsxs)("div", {
      className: I()(h.row, t),
      children: [(0, d.jsx)(T.InventoryIcon, {
        size: "md",
        color: "currentColor",
        className: h.icon
      }), N.Z.Messages.APPLICATION_STORE_IN_LIBRARY]
    })
  },
  S = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, d.jsxs)("div", {
      className: I()(h.row, n),
      children: [(0, d.jsx)(T.NitroWheelIcon, {
        size: "md",
        color: "currentColor",
        className: h.icon
      }), (0, m.Z)(t)]
    })
  },
  A = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, d.jsx)("div", {
      className: I()(h.salePercentage, n),
      children: t.getDisplaySalePercentage()
    })
  },
  g = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, d.jsx)("div", {
      className: I()(h.originalAmount, n),
      children: (0, m.Z)(t, !1)
    })
  },
  p = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, d.jsx)("div", {
      className: n,
      children: (0, m.Z)(t)
    })
  },
  f = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, d.jsxs)("div", {
      className: I()(h.row, n),
      children: [(0, d.jsx)(A, {
        sku: t
      }), (0, d.jsx)(g, {
        sku: t
      }), (0, d.jsx)(p, {
        sku: t
      })]
    })
  },
  R = e => {
    let {
      className: t
    } = e;
    return (0, d.jsx)("div", {
      className: t,
      children: N.Z.Messages.APPLICATION_STORE_FREE
    })
  };
class O extends(l = E.PureComponent) {
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
        return (0, d.jsx)(R, {
          className: I()(t, n)
        });
      case 1:
        return (0, d.jsx)(C, {
          className: I()(t, n)
        });
      case 3:
        return (0, d.jsx)(S, {
          sku: s,
          className: I()(t, n)
        });
      case 2:
        return (0, d.jsx)(f, {
          sku: s,
          className: I()(t, n)
        });
      default:
        return (0, d.jsx)(p, {
          className: I()(t, n),
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
        return (0, d.jsx)(R, {
          className: I()(t)
        });
      case 3:
        return (0, d.jsx)(S, {
          sku: n,
          className: I()(h.directoryHeroPricePremium, t)
        });
      case 2:
        return (0, d.jsx)(f, {
          sku: n,
          className: I()(h.directoryHeroPrice, t)
        });
      default:
        return (0, d.jsx)(p, {
          className: I()(h.directoryHeroPrice, t),
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
        t = (0, d.jsx)(R, {});
        break;
      case 2:
        t = (0, d.jsxs)(E.Fragment, {
          children: [(0, d.jsxs)("div", {
            className: h.row,
            children: [(0, d.jsx)(p, {
              sku: s
            }), (0, d.jsx)(A, {
              sku: s
            })]
          }), (0, d.jsx)(g, {
            sku: s
          })]
        });
        break;
      default:
        t = (0, d.jsx)(p, {
          sku: s
        })
    }
    return (0, d.jsx)("div", {
      className: I()(h.listingPrice, n),
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
        return this.renderGeneric(e, h.directoryTilePrice);
      case 3:
        return this.renderGeneric(e, h.directorySearchPrice);
      case 4:
        return this.renderListing(e);
      case 5:
        return this.renderGeneric(e, h.embedPrice);
      default:
        throw Error("Invalid Price Unit Type")
    }
  }
}
o = O, c = "Types", u = s, c in o ? Object.defineProperty(o, c, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[c] = u, t.Z = O
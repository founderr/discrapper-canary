"use strict";
n.r(t), n.d(t, {
  StoreEmbedWithoutDimensions: function() {
    return D
  }
}), n("47120"), n("411104");
var s, l = n("735250"),
  a = n("470079"),
  i = n("613828"),
  r = n("442837"),
  o = n("481060"),
  u = n("558381"),
  d = n("410575"),
  c = n("498179"),
  E = n("86357"),
  f = n("914602"),
  _ = n("568836"),
  T = n("730749"),
  I = n("112724"),
  m = n("812206"),
  N = n("283595"),
  p = n("558314"),
  S = n("55563"),
  C = n("551428"),
  A = n("73346"),
  h = n("981631"),
  g = n("689938"),
  M = n("179856");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class R extends(s = a.Component) {
  get analyticsLocation() {
    let {
      analyticsContext: {
        location: e
      },
      analyticsSection: t
    } = this.props;
    return {
      ...e,
      section: null != t ? t : h.AnalyticsSections.APPLICATION_EMBED,
      object: h.AnalyticsObjects.CARD
    }
  }
  componentDidMount() {
    let {
      sku: e,
      skuId: t,
      storeListing: n
    } = this.props;
    (null == e || null == n) && (0, u.fetchStoreListingForSku)(t)
  }
  renderViewInStoreButton() {
    return (0, l.jsx)(o.Button.Link, {
      to: this.getStoreListingLocation(),
      className: M.actionButton,
      color: o.Button.Colors.GREEN,
      size: o.Button.Sizes.SMALL,
      children: g.default.Messages.GAME_ACTION_BUTTON_VIEW_IN_STORE
    })
  }
  render() {
    let {
      sku: e,
      storeListing: t,
      width: n,
      fetchFailed: s,
      renderFallback: a
    } = this.props, r = n > _.HORIZONTAL_EMBED_BREAKPOINT;
    if (null == e || null == t) return s ? a() : (0, l.jsx)(_.ResponsiveLoadingEmbedTile, {
      isHorizontal: r
    });
    return e.productLine === h.SKUProductLines.COLLECTIBLES ? (0, l.jsx)(d.default, {
      section: h.AnalyticsSections.APPLICATION_EMBED,
      children: this.renderApplicationTile(e, t)
    }) : (0, l.jsx)(d.default, {
      section: h.AnalyticsSections.APPLICATION_EMBED,
      children: (0, l.jsx)(i.Link, {
        onClick: this.handleLinkClick,
        to: this.getStoreListingLocation(),
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: this.renderApplicationTile(e, t)
      })
    })
  }
  constructor(...e) {
    super(...e), O(this, "state", {
      playing: !1,
      muted: !0
    }), O(this, "handleToggleMute", () => {
      this.setState({
        muted: !this.state.muted
      })
    }), O(this, "handleMouseEnter", () => {
      this.setState({
        playing: !0
      })
    }), O(this, "handleMouseLeave", () => {
      this.setState({
        playing: !1
      })
    }), O(this, "getStoreListingLocation", () => {
      let {
        sku: e
      } = this.props;
      if (null == e) throw Error("Should not be link to ApplicationStoreListing without SKU");
      return (0, A.getStoreListingLocation)(e.id, {
        slug: e.slug,
        analyticsSource: this.analyticsLocation
      })
    }), O(this, "handleActionButtonClick", e => e.preventDefault()), O(this, "handleBuyButtonClick", e => e.preventDefault()), O(this, "handleLinkClick", e => {
      let {
        onEmbedClick: t
      } = this.props;
      null != t && t(e)
    }), O(this, "renderApplicationTile", (e, t) => {
      let {
        inLibrary: n,
        width: s,
        renderCustomTitle: a,
        renderCustomTagline: i,
        renderCustomMedia: r
      } = this.props, {
        playing: o,
        muted: u
      } = this.state, d = s > _.HORIZONTAL_EMBED_BREAKPOINT;
      return (0, l.jsx)(f.default, {
        sku: e,
        storeListing: t,
        playing: o,
        muted: u,
        inLibrary: n,
        onToggleMute: this.handleToggleMute,
        renderCustomActions: () => this.renderActions(e),
        renderCustomTitle: a,
        renderCustomTagline: i,
        renderCustomMedia: r,
        isHorizontal: d,
        isEmbed: !0
      })
    }), O(this, "renderActions", e => {
      let {
        inLibrary: t,
        application: n,
        skuId: s,
        libraryApplication: a,
        renderCustomActions: i
      } = this.props;
      if (null != i) return (0, l.jsx)("div", {
        className: M.tileActions,
        children: i()
      });
      if (null == n) return null;
      let r = null != n && n.primarySkuId === s,
        u = null != a && a.hasFlag(h.LibraryApplicationFlags.HIDDEN);
      return (0, l.jsxs)("div", {
        className: M.tileActions,
        children: [!r || u ? this.renderViewInStoreButton() : (0, l.jsx)(c.default, {
          application: n,
          customDisabledColor: o.Button.Colors.PRIMARY,
          size: o.Button.Sizes.SMALL,
          className: M.actionButton,
          source: h.AnalyticsLocations.MESSAGE_EMBED,
          onClick: this.handleActionButtonClick
        }), t && !u || e.premium ? null : (0, l.jsx)(E.default, {
          type: E.default.Types.EMBED,
          sku: e,
          inLibrary: !1
        })]
      })
    })
  }
}
O(R, "defaultProps", {
  renderFallback: h.NOOP
});
let v = [S.default, p.default, N.default, C.default];

function L(e) {
  let {
    skuId: t
  } = e, n = S.default.get(t), s = null != n ? m.default.getApplication(n.applicationId) : null;
  return {
    sku: n,
    application: s,
    fetchFailed: S.default.didFetchingSkuFail(t),
    inLibrary: null != n && N.default.hasApplication(n.applicationId, n.applicationId, !0),
    storeListing: null != n ? C.default.getForSKU(n.id) : null,
    libraryApplication: null != n ? N.default.getLibraryApplication(n.applicationId, n.applicationId, !0) : null
  }
}
let P = (0, I.default)((0, T.default)(R));
t.default = r.default.connectStores(v, L)(P);
let D = (0, T.default)(r.default.connectStores(v, L)(R))
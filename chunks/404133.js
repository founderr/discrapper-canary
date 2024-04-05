"use strict";
n.r(t), n("789020"), n("47120"), n("411104");
var s, a = n("735250"),
  l = n("470079"),
  i = n("803997"),
  r = n.n(i),
  o = n("593473"),
  u = n("442837"),
  d = n("481060"),
  c = n("668781"),
  E = n("401131"),
  f = n("16084"),
  _ = n("558381"),
  T = n("230711"),
  I = n("72924"),
  m = n("2052"),
  N = n("115130"),
  p = n("812206"),
  S = n("646288"),
  C = n("703656"),
  A = n("706454"),
  h = n("594174"),
  g = n("580130"),
  M = n("855775"),
  O = n("55563"),
  R = n("695103"),
  v = n("451478"),
  L = n("976644"),
  P = n("466111"),
  D = n("626135"),
  x = n("630388"),
  y = n("74538"),
  U = n("814225"),
  j = n("981631"),
  b = n("689938"),
  G = n("53970");

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class k extends(s = l.Component) {
  get analyticsLocation() {
    let {
      storeListingAnalyticsProperties: e,
      asGift: t
    } = this.props, n = null != e ? e.promotionId : null;
    return {
      ...this.props.analyticsContext.location,
      object: j.AnalyticsObjects.BUTTON_CTA,
      objectType: t ? j.AnalyticsObjectTypes.GIFT : j.AnalyticsObjectTypes.BUY,
      promotionId: n
    }
  }
  get hover() {
    let {
      hover: e,
      color: t
    } = this.props;
    return null != e ? e : null != t ? d.Button.Hovers.GREEN : d.Button.Hovers.DEFAULT
  }
  componentDidMount() {
    let {
      sku: e,
      applicationId: t,
      targetSkuId: n
    } = this.props;
    null == e && null != n && f.fetchSKU(t, n).catch(() => {})
  }
  componentDidUpdate(e) {
    this.props.locale !== e.locale && null != this.props.targetSkuId && f.fetchSKU(this.props.applicationId, this.props.targetSkuId).catch(() => {})
  }
  async purchaseOrGrantSKU(e) {
    let {
      channelId: t,
      entitlementBranchId: n,
      analyticsContext: s
    } = this.props;
    return null != t && null != n ? await f.grantChannelBranchEntitlement(e.applicationId, t, e.id) : (await f.purchaseSKU(e.applicationId, e.id, {
      analyticsLoadId: s.loadId
    })).entitlements
  }
  wrapWithDisabledTooltip(e, t) {
    let {
      className: n,
      tooltipPosition: s
    } = this.props;
    return (0, a.jsxs)("div", {
      className: r()(G.disabledButtonWrapper, n),
      children: [e, (0, a.jsx)(d.Tooltip, {
        text: t,
        position: s,
        children: e => (0, a.jsx)("div", {
          className: G.disabledButtonOverlay,
          ...e
        })
      })]
    })
  }
  renderButton(e) {
    let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
      {
        isPurchasing: s,
        wrapperClassName: l,
        className: i,
        fullWidth: o,
        size: u,
        isWindowFocused: c,
        color: E,
        customDisabledColor: f,
        pauseAnimation: _,
        isEntitled: T,
        asGift: I,
        sku: m,
        entitlementBranchId: N,
        isInTestMode: p,
        innerClassName: S
      } = this.props,
      C = !0 === T && (null == m || m.type !== j.SKUTypes.CONSUMABLE),
      A = !0 === n.disabled || null != m && !m.available && !(null != N) && !p || C && !I,
      h = n.disabledTooltipText,
      g = {
        wrapperClassName: l,
        className: i,
        fullWidth: o,
        size: u,
        color: A && null != f ? f : null != E ? E : d.Button.Colors.GREEN,
        hover: this.hover,
        innerClassName: r()(null != S ? S : null, G.applicationBuyButton),
        disabled: A,
        submitting: s || !0 === n.submitting,
        onClick: null != n.onClick ? n.onClick : this.handleClick
      };
    return (t = !0 === n.useShinyButton ? (0, a.jsxs)(L.default, {
      ...g,
      pauseAnimation: !c || _,
      children: [n.buttonIcon, e]
    }) : (0, a.jsxs)(d.Button, {
      ...g,
      children: [n.buttonIcon, e]
    }), null != h) ? this.wrapWithDisabledTooltip(t, h) : t
  }
  renderFreeButton(e, t) {
    let {
      isEntitled: n,
      isUserPremium: s,
      isInTestMode: a,
      forceDistribution: l,
      entitlementBranchId: i
    } = this.props;
    if (null != i) return (0, U.canUserInstall)(e) && !n ? this.renderButton(b.default.Messages.GAME_ACTION_BUTTON_INSTALL) : this.renderButton(b.default.Messages.GAME_ACTION_BUTTON_ADD_TO_LIBRARY);
    let r = e.getPrice();
    if (e.premium && !l && (s || a)) return (0, U.canUserInstall)(e) && !n ? this.renderButton(b.default.Messages.GAME_ACTION_BUTTON_INSTALL, t) : this.renderButton(b.default.Messages.GAME_ACTION_BUTTON_ADD_TO_LIBRARY, t);
    if (null != r && 0 === r.amount && (!e.premium || (0, x.hasFlag)(e.flags, j.SKUFlags.PREMIUM_AND_DISTRIBUTION))) return (0, U.canUserInstall)(e) && !n ? this.renderButton(b.default.Messages.GAME_ACTION_BUTTON_INSTALL) : this.renderButton(b.default.Messages.GAME_ACTION_BUTTON_ADD_TO_LIBRARY)
  }
  render() {
    let {
      isAuthenticated: e,
      sku: t,
      onStoreListing: n,
      shouldRenderPrice: s,
      forceDistribution: l,
      asGift: i,
      isInTestMode: r
    } = this.props, o = {
      useShinyButton: !0,
      buttonIcon: (0, a.jsx)(P.default, {
        className: G.premiumIcon
      })
    };
    if (null == t) return this.renderButton(null, {
      submitting: !0
    });
    if (i) return t.isPreorder() ? this.renderButton(b.default.Messages.APPLICATION_STORE_PREORDER_AS_GIFT) : this.renderButton(b.default.Messages.APPLICATION_STORE_BUY_AS_GIFT);
    let u = this.renderFreeButton(t, o);
    if (null != u) return u;
    if (!n) return this.renderButton(b.default.Messages.GAME_ACTION_BUTTON_VIEW_IN_STORE, {
      onClick: this.handleViewInStore
    });
    let d = t.getPrice();
    return (t.available || r) && (t.premium || null != d) ? t.restricted ? this.renderButton(b.default.Messages.APPLICATION_STORE_BUY, {
      disabledTooltipText: b.default.Messages.GAME_ACTION_BUTTON_RESTRICTED_IN_REGION
    }) : t.premium && !l ? this.renderButton(b.default.Messages.APPLICATION_STORE_GET_PREMIUM, o) : e || null != t.externalPurchaseUrl ? t.isPreorder() ? this.renderButton(s ? b.default.Messages.APPLICATION_STORE_PREORDER_FOR_PRICE.format({
      price: (0, S.default)(t, !0, !0)
    }) : b.default.Messages.APPLICATION_STORE_PREORDER) : this.renderButton(s ? b.default.Messages.APPLICATION_STORE_BUY_FOR_PRICE.format({
      price: (0, S.default)(t, !0, !0)
    }) : b.default.Messages.APPLICATION_STORE_BUY) : this.renderButton(b.default.Messages.GAME_ACTION_BUTTON_LOGIN_TO_BUY) : this.renderButton(b.default.Messages.GAME_ACTION_BUTTON_UNAVAILABLE, {
      disabled: !0
    })
  }
  constructor(...e) {
    super(...e), B(this, "handleViewInStore", e => {
      let {
        sku: t,
        skuId: n,
        application: s,
        onClick: a
      } = this.props;
      if (null == t) throw Error("Unexpected missing sku");
      null != a && a(e), null != n ? (0, _.goToSKUStoreListing)(t.id, {
        analyticsSource: this.analyticsLocation,
        slug: t.slug
      }) : null != s && (0, _.goToApplicationStoreListing)(s.id, {
        analyticsSource: this.analyticsLocation,
        slug: s.slug
      })
    }), B(this, "handleClick", async e => {
      let {
        isAuthenticated: t,
        applicationId: n,
        sku: s,
        targetSkuId: a,
        entitlementBranchId: l,
        isUserPremium: i,
        onClick: r,
        isInTestMode: u,
        storeListingAnalyticsProperties: d,
        asGift: f,
        forceDistribution: _
      } = this.props;
      if (null == s) throw Error("should not be able to buy without sku");
      if (null != r && null != e && r(e), null != s.externalPurchaseUrl) {
        window.open(s.externalPurchaseUrl);
        return
      }
      if (!t) {
        let e = {
          redirect_to: j.Routes.APPLICATION_STORE_LISTING_SKU(s.id, s.slug)
        };
        (0, C.transitionTo)(j.Routes.LOGIN, {
          search: (0, o.stringify)(e)
        });
        return
      }
      let m = null != l;
      if (!s.premium || _ || i || u || m) {
        if ((s.requiresPayment || _) && !m) {
          if (null != a) try {
            await (0, I.openSKUPaymentModal)(n, a, this.analyticsLocation, {
              promotionId: null != d ? d.promotionId : null,
              isGift: f
            })
          } catch (e) {
            e === j.PaymentModalPriceChangedError && c.default.show({
              title: b.default.Messages.PAYMENT_PRICE_CHANGE_TITLE,
              body: b.default.Messages.PAYMENT_PRICE_CHANGE_BODY,
              confirmText: b.default.Messages.OKAY
            })
          }
        } else try {
          let e = await this.purchaseOrGrantSKU(s);
          (0, E.openPurchaseConfirmationModal)(s.applicationId, s.id, e, {
            analyticsSource: this.analyticsLocation
          })
        } catch (e) {}
      } else {
        var N;
        N = this.analyticsLocation, D.default.track(j.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
          location: N
        }), T.default.open(j.UserSettingsSections.PREMIUM)
      }
    })
  }
}
B(k, "defaultProps", {
  tooltipPosition: "top",
  onStoreListing: !1,
  shouldRenderPrice: !1,
  pauseAnimation: !1,
  asGift: !1,
  forceDistribution: !1
}), t.default = l.forwardRef((e, t) => {
  let {
    entitlementBranchId: n,
    applicationId: s,
    channelId: l,
    skuId: i,
    ...r
  } = e, o = (0, u.useStateFromStores)([N.default, R.default], () => R.default.inTestModeForApplication(s) || N.default.inDevModeForApplication(s), [s]), [d, c, E, f, _, T] = (0, u.useStateFromStoresArray)([p.default, h.default, O.default, g.default], () => {
    let e = p.default.getApplication(s),
      t = h.default.getCurrentUser(),
      a = null == i && null != e ? e.destinationSkuId : i,
      l = null != a ? O.default.get(a) : null,
      r = null != n ? n : s,
      o = null != a ? g.default.isEntitledToSku(t, a, s, r) : null,
      u = y.default.canInstallPremiumApplications(t);
    return [e, t, l, o, u, a]
  }), I = (0, u.useStateFromStores)([v.default], () => v.default.isFocused()), S = (0, u.useStateFromStores)([M.default], () => M.default.isPurchasingSKU), C = (0, u.useStateFromStores)([A.default], () => A.default.locale), L = (0, m.useAnalyticsContext)();
  if (null != n && null == l) throw Error("Unexpected entitlementBranchId without a channelId");
  return (0, a.jsx)(k, {
    ...r,
    applicationId: s,
    skuId: i,
    entitlementBranchId: n,
    channelId: l,
    application: d,
    sku: E,
    isAuthenticated: null != c,
    isInTestMode: o,
    isEntitled: f,
    isUserPremium: _,
    isWindowFocused: I,
    isPurchasing: S,
    locale: C,
    analyticsContext: L,
    ref: t,
    targetSkuId: T
  })
})
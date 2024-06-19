n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(913527),
  o = n.n(r),
  c = n(442837),
  u = n(481060),
  d = n(230711),
  E = n(568836),
  _ = n(730749),
  I = n(112724),
  T = n(607070),
  N = n(884697),
  m = n(479446),
  h = n(930114),
  C = n(981632),
  S = n(703656),
  A = n(314897),
  p = n(82142),
  g = n(283595),
  f = n(594174),
  O = n(509545),
  R = n(55563),
  M = n(285952),
  x = n(199480),
  v = n(70613),
  L = n(626135),
  Z = n(669079),
  P = n(74538),
  D = n(296848),
  j = n(51144),
  U = n(626799),
  b = n(981631),
  y = n(474936),
  B = n(689938),
  k = n(366838);

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function F(e) {
  let {
    onClick: t,
    libraryApplication: n
  } = e;
  return (0, s.jsxs)(u.Clickable, {
    className: k.libraryLink,
    onClick: t,
    children: [(0, s.jsx)(u.InventoryIcon, {
      size: "md",
      color: "currentColor",
      className: k.libraryIcon
    }), (0, s.jsx)("div", {
      children: n.isHidden() ? B.Z.Messages.APPLICATION_STORE_PURCHASE_IN_LIBRARY_HIDDEN : B.Z.Messages.APPLICATION_STORE_PURCHASE_IN_LIBRARY
    })]
  })
}
class w extends i.PureComponent {
  get isHorizontal() {
    let {
      width: e
    } = this.props;
    return e >= E.aL
  }
  handleViewInventory() {
    d.Z.open(b.oAB.INVENTORY)
  }
  render() {
    return (0, s.jsx)(E.$G, {
      isHorizontal: this.isHorizontal,
      renderTitle: this.renderTitle,
      renderTagline: this.renderTagline,
      renderMedia: this.renderMedia,
      renderActions: this.renderActions
    })
  }
  constructor(...e) {
    super(...e), G(this, "renderMedia", () => (0, s.jsx)("div", {
      className: a()(k.invalidPoop, {
        [k.invalidPoopHorizontal]: this.isHorizontal
      })
    })), G(this, "renderTitle", () => this.props.isSelfGift ? B.Z.Messages.GIFT_EMBED_INVALID_TITLE_SELF : B.Z.Messages.GIFT_EMBED_INVALID_TITLE_OTHER), G(this, "renderActions", () => this.props.isSelfGift ? (0, s.jsx)(u.Button, {
      size: u.Button.Sizes.SMALL,
      onClick: this.handleViewInventory,
      children: B.Z.Messages.GIFT_INVENTORY
    }) : (0, s.jsx)(u.Button, {
      disabled: !0,
      size: u.Button.Sizes.SMALL,
      children: B.Z.Messages.GIFT_EMBED_BUTTON_ACCEPT
    })), G(this, "renderTagline", () => this.props.isSelfGift ? B.Z.Messages.GIFT_EMBED_INVALID_TAGLINE_SELF : B.Z.Messages.GIFT_EMBED_INVALID_TAGLINE_OTHER)
  }
}
class V extends i.Component {
  get analyticsLocation() {
    let {
      analyticsContext: {
        location: e
      }
    } = this.props;
    return {
      ...e,
      section: b.jXE.GIFT_CODE_EMBED
    }
  }
  renderActions(e) {
    let {
      libraryApplication: t
    } = this.props;
    return (0, s.jsxs)(M.Z, {
      justify: M.Z.Justify.BETWEEN,
      children: [(0, s.jsxs)(M.Z, {
        children: [this.renderButton(e), null == t || e.isSubscription ? null : (0, s.jsx)(F, {
          onClick: this.handleViewLibrary,
          libraryApplication: t
        })]
      }), (0, s.jsxs)(M.Z, {
        align: M.Z.Align.END,
        justify: M.Z.Justify.END,
        className: k.metadata,
        direction: M.Z.Direction.VERTICAL,
        children: [e.hasMultipleCopies ? (0, s.jsx)("div", {
          children: this.renderGiftCodeCopiesLeft(e)
        }) : null, e.redeemed || e.isClaimed || null != t || null == e.expiresAt ? null : (0, s.jsx)("div", {
          children: B.Z.Messages.GIFT_EMBED_EXPIRATION.format({
            hours: e.expiresAt.diff(o()(), "h")
          })
        })]
      })]
    })
  }
  renderGiftCodeCopiesLeft(e) {
    return (e.isSubscription ? B.Z.Messages.GIFT_EMBED_SUBSCRIPTIONS_LEFT : B.Z.Messages.GIFT_EMBED_COPIES_LEFT).format({
      remaining: e.remainingUses,
      total: e.maxUses
    })
  }
  renderButton(e) {
    let {
      libraryApplication: t,
      currentUser: n,
      isSelfGift: i
    } = this.props, l = {
      onClick: this.handleAccept,
      color: u.Button.Colors.BRAND
    }, a = !e.isSubscription && null != t || !e.isSelfRedeemable && i || e.isExistingPremiumSubscriptionDisallowed && (0, P.I5)(n);
    return (e.redeemed || a || e.isClaimed || !n.verified) && (l.color = u.Button.Colors.BRAND, l.disabled = !0), (0, s.jsx)(u.Button, {
      ...l,
      className: (0, N.mO)(e) ? k.collectiblesAcceptButton : null,
      size: u.Button.Sizes.SMALL,
      children: e.redeemed ? B.Z.Messages.GIFT_EMBED_BUTTON_CLAIMED : null != e.giftStyle ? B.Z.Messages.SEASONAL_GIFTING_OPEN_GIFT : B.Z.Messages.GIFT_EMBED_BUTTON_ACCEPT
    })
  }
  isCustomGiftMessage() {
    let {
      type: e
    } = this.props;
    return e === b.uaV.CUSTOM_GIFT
  }
  renderTitle(e) {
    let {
      currentUser: t,
      isSelfGift: n,
      sku: s
    } = this.props;
    return this.isCustomGiftMessage() && !n ? B.Z.Messages.GIFT_RECIPIENT_NOTIFICATION.format({
      recipientDisplayName: j.ZP.getName(t)
    }) : null == s ? null : e.isSubscription ? n ? B.Z.Messages.GIFT_EMBED_TITLE_SUBSCRIPTION_SELF : B.Z.Messages.GIFT_EMBED_TITLE_SUBSCRIPTION : n ? B.Z.Messages.GIFT_EMBED_TITLE_SELF : B.Z.Messages.GIFT_EMBED_TITLE
  }
  renderBody(e) {
    let {
      libraryApplication: t,
      isSelfGift: n,
      sku: s,
      gifter: i,
      subscriptionPlan: l,
      currentUser: a
    } = this.props;
    if (null == s) return B.Z.Messages.LOADING;
    if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
    let r = s.isPreorder() ? B.Z.Messages.PREORDER_SKU_NAME.format({
      name: s.name
    }) : s.name;
    if (e.redeemed) return e.isSubscription || (0, N.mO)(e) ? B.Z.Messages.GIFT_EMBED_BODY_CLAIMED_SELF_SUBSCRIPTION : B.Z.Messages.GIFT_EMBED_BODY_CLAIMED_SELF.format({
      skuName: r,
      onViewInLibrary: this.handleViewLibrary
    });
    if (!e.isSubscription && null != t) return B.Z.Messages.GIFT_EMBED_BODY_OWNED.format({
      skuName: r,
      onViewInLibrary: this.handleViewLibrary
    });
    if (e.isClaimed) return B.Z.Messages.GIFT_EMBED_BODY_CLAIMED_OTHER;
    if (!a.verified) return B.Z.Messages.GIFT_EMBED_BODY_REQUIRES_VERIFICATION.format({
      onClick: this.handleVerificationClick
    });
    if (n) return e.isSelfRedeemable ? B.Z.Messages.GIFT_EMBED_BODY_SELF : B.Z.Messages.GIFT_EMBED_BODY_SELF_NOT_REDEEMABLE.format({
      skuName: r
    });
    if (e.isExistingPremiumSubscriptionDisallowed) return B.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_ALREADY_ACTIVE;
    if (e.hasMultipleCopies) return null != i ? e.isSubscription ? B.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_GIVEAWAY.format({
      username: j.ZP.getUserTag(i),
      maxUses: e.maxUses,
      skuName: r
    }) : B.Z.Messages.GIFT_EMBED_BODY_GIVEAWAY.format({
      username: j.ZP.getUserTag(i),
      totalCopies: e.maxUses,
      skuName: r
    }) : e.isSubscription ? B.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_NO_USER_GIVEAWAY.format({
      maxUses: e.maxUses,
      skuName: r
    }) : B.Z.Messages.GIFT_EMBED_BODY_NO_USER_GIVEAWAY.format({
      totalCopies: e.maxUses,
      skuName: r
    });
    if (e.isSubscription) return null == l ? B.Z.Messages.LOADING : null != i ? (l.interval === y.rV.MONTH ? B.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_DEFAULT_MONTHS : B.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_DEFAULT_YEARS).format({
      username: j.ZP.getUserTag(i),
      skuName: r,
      intervalCount: l.intervalCount
    }) : (l.interval === y.rV.MONTH ? B.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_NO_USER_DEFAULT_MONTHS : B.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_NO_USER_DEFAULT_YEARS).format({
      skuName: r,
      intervalCount: l.intervalCount
    });
    return null != i ? B.Z.Messages.GIFT_EMBED_BODY_DEFAULT.format({
      username: j.ZP.getUserTag(i)
    }) : B.Z.Messages.GIFT_EMBED_BODY_NO_USER_DEFAULT
  }
  renderPromotionActions() {
    return (0, s.jsx)(u.Button, {
      size: u.Button.Sizes.SMALL,
      onClick: this.handleClaimPromotion,
      children: B.Z.Messages.GIFT_EMBED_BUTTON_CLAIM
    })
  }
  renderEmbed() {
    let {
      giftCode: e,
      width: t
    } = this.props;
    return null == e ? null : (0, s.jsx)(U.$, {
      skuId: e.skuId,
      onEmbedClick: this.handleEmbedClick,
      analyticsSection: b.jXE.GIFT_CODE_EMBED,
      renderCustomActions: () => this.renderActions(e),
      renderCustomTitle: () => this.renderTitle(e),
      renderCustomTagline: () => this.renderBody(e),
      renderCustomMedia: null == e.giftStyle ? void 0 : () => this.renderCustomGiftBox(e),
      width: t
    })
  }
  render() {
    let {
      giftCode: e,
      resolved: t,
      width: n,
      isSelfGift: i
    } = this.props;
    if (null != e && null != e.promotion) return (0, s.jsx)(U.$, {
      skuId: e.skuId,
      onEmbedClick: this.handleClaimPromotion,
      analyticsSection: b.jXE.GIFT_CODE_EMBED,
      renderCustomActions: () => this.renderPromotionActions(),
      renderCustomTitle: () => B.Z.Messages.GIFT_EMBED_TITLE_PROMOTION,
      renderCustomTagline: () => B.Z.Messages.GIFT_EMBED_TAGLINE_PROMOTION,
      width: n
    });
    if (null == e || e.revoked) return t ? (0, s.jsx)(w, {
      isSelfGift: i,
      width: n
    }) : (0, s.jsx)(E.OR, {
      isHorizontal: n >= E.aL
    });
    return (0, N.mO)(e) ? (0, s.jsx)("div", {
      className: k.collectiblesEmbedWrapper,
      children: this.renderEmbed()
    }) : this.renderEmbed()
  }
  constructor(...e) {
    super(...e), G(this, "handleViewLibrary", e => {
      let {
        libraryApplication: t
      } = this.props;
      e.preventDefault(), null != t && t.isHidden() ? (0, S.uL)(b.Z5c.APPLICATION_LIBRARY_SETTINGS) : (0, S.uL)(b.Z5c.APPLICATION_LIBRARY, {
        state: {
          applicationId: null != t ? t.id : null
        }
      })
    }), G(this, "handleVerificationClick", e => {
      e.stopPropagation(), e.preventDefault(), d.Z.open(b.oAB.ACCOUNT)
    }), G(this, "handleAccept", e => {
      let {
        channelId: t,
        code: n,
        content: s,
        type: i,
        giftInfo: l
      } = this.props;
      e.preventDefault(), e.stopPropagation(), L.default.track(b.rMx.OPEN_MODAL, {
        type: "gift_accept",
        location: {
          ...this.analyticsLocation,
          object: b.qAy.BUTTON_CTA
        }
      });
      let a = i !== b.uaV.CUSTOM_GIFT ? void 0 : s;
      (0, h.V)({
        processedCode: n,
        channelContext: t,
        customGiftMessage: a,
        giftInfo: l
      })
    }), G(this, "handleEmbedClick", e => {
      let {
        giftCode: t
      } = this.props;
      null != t && t.isSubscription && (e.preventDefault(), d.Z.open(b.oAB.PREMIUM))
    }), G(this, "handleClaimPromotion", e => {
      var t;
      e.stopPropagation(), e.preventDefault();
      let n = null === (t = this.props.giftCode) || void 0 === t ? void 0 : t.code;
      if (null != n) window.open(b.Z5c.BILLING_PROMOTION_REDEMPTION(n))
    }), G(this, "renderCustomGiftBox", e => {
      let {
        useReducedMotion: t,
        width: n
      } = this.props;
      if (null == e || null == e.giftStyle) return null;
      let i = y.jy.includes(e.giftStyle),
        l = a()(k.customGiftEmbedWrapper, {
          [k.legacySeasonalGiftEmbedWrapper]: i,
          [k.giftEmbedWrapperHorizontal]: n >= E.aL
        }),
        r = a()({
          [k.legacySeasonalGiftEmbedBox]: i,
          [k.legacySeasonalGiftEmbedBoxHorizontal]: i && n >= E.aL,
          [k.customGiftEmbedBox]: !i,
          [k.customGiftEmbedBoxHorizontal]: !i && n >= E.aL
        });
      return (0, s.jsxs)("div", {
        className: l,
        children: [!t && y.eZ.includes(e.giftStyle) && (0, s.jsx)(v.Z, {
          className: k.snow,
          wind: 5
        }), i && (0, s.jsx)(x.Z, {
          className: k.headerIcon
        }), null != e.giftStyle && (0, s.jsx)(C.Z, {
          defaultAnimationState: e.redeemed ? m.S.LOOP : m.S.IDLE,
          giftStyle: e.giftStyle,
          className: r
        })]
      })
    })
  }
}
let H = (0, I.Z)((0, _.Z)(V));
t.Z = c.ZP.connectStores([p.Z, R.Z, f.default, g.Z, O.Z, A.default, T.Z], e => {
  let {
    code: t,
    author: n,
    currentUser: s
  } = e, i = p.Z.get(t), l = null != i ? R.Z.get(i.skuId) : null, a = null != i && null != i.userId ? f.default.getUser(i.userId) : null, r = T.Z.useReducedMotion;
  return {
    sku: l,
    giftCode: i,
    gifter: a,
    currentUser: s,
    subscriptionPlan: null != i && null != i.subscriptionPlanId ? (0, D.oE)(i.subscriptionPlanId) : null,
    isSelfGift: null != i ? A.default.getId() === i.userId : A.default.getId() === n.id,
    resolved: p.Z.getIsResolved(t),
    libraryApplication: null != l && (null == i ? void 0 : i.entitlementBranches) != null ? Z.z2(i.entitlementBranches, l, g.Z) : null,
    useReducedMotion: r
  }
})(H)
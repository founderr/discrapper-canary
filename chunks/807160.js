"use strict";
s.r(t), s.d(t, {
  default: function() {
    return eS
  }
}), s("47120"), s("653041"), s("789020");
var a, n, i, l = s("735250"),
  r = s("470079"),
  o = s("120356"),
  u = s.n(o),
  d = s("512722"),
  c = s.n(d),
  p = s("913527"),
  f = s.n(p),
  E = s("924826"),
  m = s("314877"),
  _ = s("442837"),
  S = s("481060"),
  I = s("37234"),
  N = s("782568"),
  P = s("812206"),
  C = s("593061"),
  T = s("267101"),
  h = s("240864"),
  A = s("942833"),
  R = s("400916"),
  y = s("916001"),
  M = s("539290"),
  g = s("336197"),
  L = s("307643"),
  x = s("378233"),
  D = s("419922"),
  U = s("46141"),
  b = s("430824"),
  O = s("853872"),
  v = s("509545"),
  B = s("230307"),
  j = s("285952"),
  G = s("366695"),
  k = s("499150"),
  F = s("912454"),
  w = s("259580"),
  Y = s("263704"),
  H = s("465670"),
  W = s("126900"),
  V = s("559629"),
  K = s("466111"),
  z = s("572004"),
  Z = s("55935"),
  q = s("630388"),
  X = s("74538"),
  J = s("937615"),
  Q = s("244526"),
  $ = s("712358"),
  ee = s("362786"),
  et = s("981631"),
  es = s("474936"),
  ea = s("231338"),
  en = s("689938"),
  ei = s("486158");

function el(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let er = e => "https://".concat(et.SUPPORT_DOMAIN, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000118612"),
  eo = [et.SKUTypes.DURABLE_PRIMARY, et.SKUTypes.DURABLE, et.SKUTypes.CONSUMABLE];
(i = a || (a = {})).PURCHASE_DATE = "PURCHASE_DATE", i.SKU_TYPE = "SKU_TYPE", i.ALREADY_REFUNDED = "ALREADY_REFUNDED", i.PAYMENT_STATUS = "PAYMENT_STATUS", i.PAYMENT_GATEWAY = "PAYMENT_GATEWAY", i.SKU_STICKER_PACK = "SKU_STICKER_PACK", i.SUBSCRIPTION_TYPE = "SUBSCRIPTION_TYPE", i.GUILD_PRODUCT = "GUILD_PRODUCT";
let eu = [et.PaymentStatusTypes.FAILED, et.PaymentStatusTypes.REVERSED, et.PaymentStatusTypes.CANCELED],
  ed = [ea.PaymentGateways.APPLE],
  ec = e => {
    let {
      description: t,
      cost: s
    } = e;
    return (0, l.jsx)("li", {
      className: ei.paymentDetail,
      children: (0, l.jsxs)(j.default, {
        justify: j.default.Justify.BETWEEN,
        children: [(0, l.jsx)("div", {
          children: t
        }), (0, l.jsx)("div", {
          children: s
        })]
      })
    })
  };

function ep(e) {
  let {
    value: t,
    copyText: s,
    copyFeedbackText: a
  } = e, [n, i] = r.useState(!1), [o, u] = r.useState(!1), d = () => {
    (0, z.copy)(t), u(!0), i(!0)
  };
  return (0, l.jsx)(S.Tooltip, {
    forceOpen: o,
    text: n ? a : s,
    children: e => {
      let {
        onMouseEnter: s,
        onMouseLeave: a,
        ...r
      } = e;
      return (0, l.jsx)(S.Clickable, {
        ...r,
        onMouseEnter: () => {
          n && i(!1), "function" == typeof s && s()
        },
        onMouseLeave: () => {
          u(!1), "function" == typeof a && a()
        },
        onClick: d,
        children: (0, l.jsx)("div", {
          className: ei.copiableContainer,
          children: t
        })
      })
    }
  })
}
let ef = e => {
  let {
    description: t,
    detail: s
  } = e;
  return (0, l.jsx)("li", {
    className: ei.guildProductDetail,
    children: (0, l.jsxs)(j.default, {
      justify: j.default.Justify.BETWEEN,
      children: [(0, l.jsx)("div", {
        children: t
      }), (0, l.jsx)("div", {
        children: s
      })]
    })
  })
};

function eE(e) {
  let {
    guildId: t,
    guildProductListingId: s
  } = e, a = (0, T.useFetchGuildProductListing)(t, s, {
    requireCurrentGuild: !1
  }), n = (0, A.useProductType)(a), i = (0, _.useStateFromStores)([b.default], () => b.default.getGuild(t)), o = (null == a ? void 0 : a.role_id) != null && (null == a ? void 0 : a.attachments_count) === 0 ? en.default.Messages.GUILD_PRODUCT_BILLING_TYPE_PREMIUM_ROLE : n, u = r.useCallback(async () => {
    (null == i ? void 0 : i.hasFeature(et.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0 ? await (0, g.default)(et.Routes.GUILD_PRODUCT(t, s)) : await (0, g.default)(et.Routes.CHANNEL(t)), (0, I.popLayer)()
  }, [i, t, s]);
  return (0, l.jsxs)(l.Fragment, {
    children: [null != o && (0, l.jsx)(ef, {
      description: en.default.Messages.GUILD_PRODUCT_BILLING_PRODUCT_TYPE,
      detail: o
    }), null != i && (0, l.jsx)(ef, {
      description: en.default.Messages.GUILD_PRODUCT_BILLING_SERVER_NAME,
      detail: (0, l.jsx)(k.default, {
        onClick: u,
        children: i.name
      })
    })]
  })
}

function em(e) {
  var t, s;
  let {
    guildId: a,
    guildProductListingId: n
  } = e, i = (0, T.useFetchGuildProductListing)(a, n, {
    requireCurrentGuild: !1
  }), r = (0, _.useStateFromStores)([h.default], () => h.default.getGuildProductFetchState(n) === h.FetchState.FETCHING), o = null == i ? void 0 : i.role_id, u = (0, _.useStateFromStores)([b.default], () => null != o ? b.default.getRole(a, o) : void 0, [a, o]), d = (null !== (s = null == i ? void 0 : null === (t = i.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== s ? s : 0) > 0, c = null != u;
  return r ? (0, l.jsx)("div", {
    className: ei.guildProductBenefits,
    children: (0, l.jsx)(S.Spinner, {})
  }) : null != i && (d || c) ? (0, l.jsxs)("div", {
    className: ei.guildProductBenefits,
    children: [d && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(S.Text, {
        variant: "text-xs/semibold",
        color: "header-secondary",
        className: ei.guildProductBenefitLabel,
        children: en.default.Messages.GUILD_PRODUCT_BILLING_ACCESS_DOWNLOADABLES
      }), (0, l.jsx)(R.default, {
        guildId: a,
        productId: i.id
      })]
    }), c && (0, l.jsxs)(l.Fragment, {
      children: [d && (0, l.jsx)("div", {
        className: ei.divider
      }), (0, l.jsx)(S.Text, {
        variant: "text-xs/semibold",
        color: "header-secondary",
        className: ei.guildProductBenefitLabel,
        children: en.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_ROLE_UNLOCKED
      }), (0, l.jsx)(y.default, {
        role: u
      })]
    })]
  }) : null
}
class e_ extends(n = r.PureComponent) {
  get daysSincePurchase() {
    let {
      payment: e
    } = this.props, t = null != e.sku ? e.sku.releaseDate : null, s = null != t && t.isAfter(e.createdAt) ? t : e.createdAt;
    return f()().diff(s, "days")
  }
  get isPremium() {
    let {
      payment: e
    } = this.props;
    return e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift
  }
  get typeString() {
    let {
      payment: {
        paymentSource: e
      }
    } = this.props;
    return e instanceof U.PaypalSourceRecord ? F.default.Types.PAYPAL : e instanceof U.CreditCardSourceRecord ? F.default.getType(e.brand) : F.default.Types.UNKNOWN
  }
  validateRefundRules() {
    return this.refundRules.filter(e => {
      let {
        canRefund: t
      } = e;
      return !t()
    }).map(e => {
      let {
        rule: t
      } = e;
      return t
    })
  }
  renderStatus() {
    let {
      payment: e
    } = this.props;
    switch (e.status) {
      case et.PaymentStatusTypes.PENDING:
        return (0, l.jsx)("span", {
          className: ei.statusTagGrey,
          children: en.default.Messages.BILLING_TAG_PENDING
        });
      case et.PaymentStatusTypes.FAILED:
        return (0, l.jsx)("span", {
          className: ei.statusTagRed,
          children: en.default.Messages.BILLING_TAG_FAILED
        });
      case et.PaymentStatusTypes.REFUNDED:
        if (e.amountRefunded !== e.amount) return (0, l.jsx)("span", {
          className: ei.statusTagGreen,
          children: en.default.Messages.BILLING_TAG_PARTIALLY_REFUNDED
        });
        return (0, l.jsx)("span", {
          className: ei.statusTagGreen,
          children: en.default.Messages.BILLING_TAG_REFUNDED
        });
      case et.PaymentStatusTypes.REVERSED:
        return (0, l.jsx)("span", {
          className: ei.statusTagRed,
          children: en.default.Messages.BILLING_TAG_REVERSED
        });
      case et.PaymentStatusTypes.CANCELED:
        return (0, l.jsx)("span", {
          className: ei.statusTagRed,
          children: en.default.Messages.BILLING_TAG_CANCELED
        });
      default:
        return null
    }
  }
  renderPrice() {
    let {
      payment: e
    } = this.props, t = e.amount - e.amountRefunded;
    return (0, l.jsx)("span", {
      className: ei.price,
      children: (0, J.formatPrice)(t, e.currency)
    })
  }
  renderPaymentIdField() {
    let {
      payment: e
    } = this.props;
    return (0, l.jsx)("li", {
      className: ei.paymentDetail,
      children: (0, l.jsxs)("div", {
        className: ei.paymentInfo,
        children: [(0, l.jsx)("div", {
          children: en.default.Messages.BILLING_PAYMENT_ID
        }), (0, l.jsx)(ep, {
          value: e.id,
          copyText: en.default.Messages.BILLING_PAYMENT_ID_COPY,
          copyFeedbackText: en.default.Messages.BILLING_PAYMENT_ID_COPIED
        })]
      })
    })
  }
  renderPaymentBreakdown() {
    let {
      payment: e,
      locale: t,
      application: s
    } = this.props, {
      taxInclusive: a,
      tax: n,
      amount: i,
      amountRefunded: o,
      currency: d
    } = e, c = null == s ? void 0 : s.guildId;
    return (0, l.jsxs)("div", {
      className: u()(ei.paymentText, ei.paymentBreakdown),
      children: [null != e.paymentSource ? (0, l.jsx)(Q.default, {
        paymentSource: e.paymentSource,
        locale: t,
        descriptionClassName: ei.paymentText
      }) : e.paymentGateway === ea.PaymentGateways.APPLE_PARTNER ? (0, l.jsx)(Q.default, {
        paymentSource: new U.AppleSourceRecord({}),
        locale: t,
        descriptionClassName: ei.paymentText
      }) : null, (0, l.jsxs)("ul", {
        children: [this.renderPaymentIdField(), !a && n > 0 ? (0, l.jsxs)(r.Fragment, {
          children: [(0, l.jsx)(ec, {
            description: e.description,
            cost: (0, J.formatPrice)(i - n, d)
          }), (0, l.jsx)(ec, {
            description: en.default.Messages.BILLING_PAYMENT_BREAKDOWN_TAXES,
            cost: (0, J.formatPrice)(n, d)
          })]
        }) : null, (0, l.jsx)(ec, {
          description: en.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
          cost: (0, J.formatPrice)(i, d)
        }), e.isGuildProductPurchase && null != c && null != e.sku && (0, l.jsx)(eE, {
          guildId: c,
          guildProductListingId: e.sku.id
        }), o > 0 && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(ec, {
            description: en.default.Messages.BILLING_PAYMENT_BREAKDOWN_REFUNDED,
            cost: (0, J.formatPrice)(o, d)
          }), (0, l.jsx)(ec, {
            description: en.default.Messages.BILLING_PAYMENT_BREAKDOWN_NET,
            cost: (0, J.formatPrice)(i - o, d)
          })]
        })]
      })]
    })
  }
  renderInvoiceDownload() {
    let {
      payment: e
    } = this.props;
    return (0, l.jsx)(C.default, {
      payment: e
    })
  }
  renderRefundDetails() {
    let e;
    let {
      locale: t,
      payment: s
    } = this.props, a = this.validateRefundRules();
    if (a.includes("PAYMENT_GATEWAY") || a.includes("PAYMENT_STATUS") || a.includes("ALREADY_REFUNDED") || a.includes("SKU_STICKER_PACK") || a.includes("SUBSCRIPTION_TYPE") || a.includes("GUILD_PRODUCT")) return null;
    let n = 0 === a.length,
      i = er(t),
      o = this.isPremium ? 5 : 14;
    return e = a.includes("SKU_TYPE") ? en.default.Messages.BILLING_APPLICATION_CONSUMABLE_REFUND_TEXT_UNABLE.format({
      supportURL: i
    }) : n ? s.isPremiumSubscription || s.isPremiumGuildSubscription ? en.default.Messages.BILLING_PREMIUM_REFUND_TEXT.format({
      dateLimit: o,
      supportURL: i
    }) : s.isGift ? en.default.Messages.BILLING_GIFT_REFUND_TEXT.format({
      dateLimit: o,
      supportURL: i
    }) : en.default.Messages.BILLING_APPLICATION_REFUND_TEXT.format({
      dateLimit: o,
      playtimeLimit: 2,
      supportURL: i
    }) : s.isGift ? en.default.Messages.BILLING_GIFT_REFUND_TEXT_UNABLE.format({
      dateLimit: o
    }) : s.isPremiumSubscription || s.isPremiumGuildSubscription ? en.default.Messages.BILLING_PREMIUM_REFUND_TEXT_UNABLE.format({
      dateLimit: o
    }) : s.isCollectible ? en.default.Messages.BILLING_COLLECTIBLES_REFUND_TEXT_UNABLE : en.default.Messages.BILLING_APPLICATION_REFUND_TEXT_UNABLE.format({
      dateLimit: o,
      playtimeLimit: 2
    }), this.isPremium && (0, $.userInRefundExperiment)() && (e = null), (0, l.jsxs)(r.Fragment, {
      children: [(0, l.jsx)(S.H, {
        className: ei.paymentHeader,
        children: en.default.Messages.BILLING_REFUND_HEADER
      }), (0, l.jsxs)("div", {
        className: ei.paymentText,
        children: [(0, l.jsx)("div", {
          children: e
        }), this.renderRefundActions(a)]
      })]
    })
  }
  renderRefundCriteria(e, t, s, a) {
    return (0, l.jsxs)("div", {
      className: ei.refundCriteria,
      children: [(0, l.jsx)(S.H, {
        className: ei.refundSubHeader,
        children: e
      }), (0, l.jsxs)("div", {
        className: ei.refundIconContainer,
        children: [(0, l.jsx)(t, {
          className: ei.refundCriteriaIcon
        }), null != s && (0, l.jsx)("div", {
          children: s
        })]
      })]
    }, a)
  }
  renderRefundActions(e) {
    var t;
    let {
      locale: a,
      payment: n
    } = this.props;
    if (e.includes("SKU_TYPE")) return null;
    let i = e.includes("PURCHASE_DATE") ? H.default : Y.default;
    if (!this.isPremium || !(0, $.userInRefundExperiment)()) return (0, l.jsxs)("div", {
      className: ei.refundActions,
      children: [(0, l.jsx)("div", {
        className: ei.refundRules,
        children: !n.isCollectible && this.renderRefundCriteria(en.default.Messages.BILLING_REFUND_PURCHASE_DATE_SUBHEADER, i, en.default.Messages.BILLING_REFUND_PURCHASE_DATE.format({
          daysSincePurchase: this.daysSincePurchase
        }))
      }), (0, l.jsx)(S.Anchor, {
        href: er(a),
        children: en.default.Messages.BILLING_REFUND_REPORT_A_PROBLEM
      })]
    });
    let r = (null !== (t = n.premiumRefundDisqualificationReasons) && void 0 !== t ? t : [ee.PremiumRefundDisqualificationReason.OTHER])[0],
      o = null != r || 0 !== e.length || n.isPurchasedExternally;
    return (0, l.jsxs)("div", {
      className: ei.refundActions,
      children: [(0, l.jsx)(S.Tooltip, {
        shouldShow: o,
        text: function(e) {
          switch (e) {
            case ee.PremiumRefundDisqualificationReason.ALREADY_REFUNDED_PREMIUM:
              return en.default.Messages.BILLING_REFUND_ALREADY_REFUNDED_PREMIUM_REASON;
            case ee.PremiumRefundDisqualificationReason.ALREADY_REFUNDED_PREMIUM_GUILD:
              return en.default.Messages.BILLING_REFUND_ALREADY_REFUNDED_PREMIUM_GUILD_REASON;
            case ee.PremiumRefundDisqualificationReason.ENTITLEMENT_ALREADY_CONSUMED:
              return en.default.Messages.BILLING_REFUND_ALREADY_CONSUMED_REASON;
            default:
              return en.default.Messages.BILLING_REFUND_GENERIC_REASON
          }
        }(r),
        children: e => (0, l.jsx)(S.Button, {
          ...e,
          color: S.Button.Colors.PRIMARY,
          disabled: o,
          onClick: () => (0, S.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([s.e("99387"), s.e("69473")]).then(s.bind(s, "436022"));
            return t => (0, l.jsx)(e, {
              payment: n,
              reportProblemUrl: er(a),
              ...t
            })
          }),
          children: en.default.Messages.BILLING_REFUND_BUTTON_TEXT
        })
      }), (0, l.jsx)(S.Anchor, {
        href: er(a),
        children: en.default.Messages.BILLING_REFUND_REPORT_A_PROBLEM
      })]
    })
  }
  renderDescription() {
    let e, t;
    let {
      compactMode: s,
      payment: a,
      application: n,
      guild: i,
      stickerPack: o
    } = this.props, {
      expanded: u
    } = this.state, d = a.sku, p = a.subscription, E = null != a.paymentSource && et.PREPAID_PAYMENT_SOURCES.has(a.paymentSource.type);
    if (null != p && 0 !== p.items.length) {
      let s = [],
        a = null;
      if (p.type === et.SubscriptionTypes.PREMIUM) p.items.forEach(e => {
        let {
          planId: t,
          quantity: n
        } = e;
        (0, X.isPremiumBaseSubscriptionPlan)(t) ? (s.push(X.default.getDisplayName(t, !1, E)), a = (0, X.castPremiumSubscriptionAsSkuId)(es.SubscriptionPlanInfo[t].skuId)) : (s.push("".concat(n > 1 ? "".concat(n, "x ") : "").concat(X.default.getDisplayName(t, !1, E))), null == a && (a = (0, X.castPremiumSubscriptionAsSkuId)(es.SubscriptionPlanInfo[t].skuId)))
      });
      else if (p.type === et.SubscriptionTypes.GUILD) {
        let e = v.default.get(p.items[0].planId);
        c()(null != e, "Guild subscription plan should already have been loaded");
        let t = e.interval === es.SubscriptionIntervalTypes.YEAR ? en.default.Messages.YEARLY_GUILD_SUBSCRIPTION : en.default.Messages.MONTHLY_GUILD_SUBSCRIPTION;
        s.push(t.format({
          planName: e.name
        })), a = e.skuId
      } else if (p.type === et.SubscriptionTypes.APPLICATION) {
        let e = v.default.get(p.items[0].planId);
        c()(null != e, "Application subscription plan should already have been loaded"), null != n ? s.push(en.default.Messages.MONTHLY_APPLICATION_SUBSCRIPTION_V2.format({
          tier: null == d ? void 0 : d.name
        })) : s.push(en.default.Messages.APPLICATION_SUBSCRIPTION_FROM_DELETED_APPLICATION), a = e.skuId
      }
      t = s.join(", "), e = (0, l.jsx)(G.default, {
        className: ei.descriptionIcon,
        guildClassName: ei.guildDescriptionIcon,
        game: n,
        guild: i,
        size: G.default.Sizes.XSMALL,
        skuId: a
      })
    } else if (null != d) {
      var m;
      if (t = a.isGuildProductPurchase && a.isSoftDeletedProduct ? en.default.Messages.GUILD_PRODUCT_BILLING_DELISTED_PRODUCT : d.name, null != o) {
        let t = (0, x.getStickerPackPreviewSticker)(o);
        e = (0, l.jsx)(D.default, {
          disableAnimation: !u,
          isInteracting: u,
          sticker: t,
          className: ei.descriptionIcon,
          size: 24
        })
      } else e = (null === (m = a.sku) || void 0 === m ? void 0 : m.productLine) === et.SKUProductLines.COLLECTIBLES ? (0, l.jsx)(W.default, {
        className: ei.shopIcon
      }) : (0, l.jsx)(G.default, {
        className: ei.descriptionIcon,
        guildClassName: ei.guildDescriptionIcon,
        game: n,
        guild: i,
        size: G.default.Sizes.XSMALL,
        skuId: d.id
      })
    } else e = (0, l.jsx)(K.default, {
      className: ei.descriptionIcon
    }), t = a.description;
    let _ = (0, l.jsx)("div", {
        className: ei.date,
        children: (0, Z.dateFormat)(f()(a.createdAt), "MM/DD/YYYY")
      }),
      I = a.isGift ? (0, l.jsx)(S.Tooltip, {
        text: en.default.Messages.BILLING_GIFT_PURCHASE_TOOLTIP,
        children: e => (0, l.jsx)(V.default, {
          className: ei.giftIcon,
          ...e
        })
      }) : null;
    return s ? (0, l.jsxs)("div", {
      className: ei.description,
      children: [e, (0, l.jsxs)("div", {
        children: [t, _]
      }), I]
    }) : (0, l.jsxs)(r.Fragment, {
      children: [_, (0, l.jsxs)("div", {
        className: ei.description,
        children: [e, (0, l.jsx)("div", {
          children: t
        }), I]
      })]
    })
  }
  renderGuildProductBenefits() {
    let {
      payment: e,
      application: t,
      locale: s
    } = this.props, a = null == t ? void 0 : t.guildId;
    return e.isGuildProductPurchase ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: ei.sectionDivider
      }), e.isSoftDeletedProduct ? (0, l.jsx)(M.default, {
        className: ei.warningBlock,
        buttonPosition: M.WarningBlockButtonPosition.RIGHT,
        notice: en.default.Messages.GUILD_PRODUCT_BILLING_PRODUCT_UNAVAILABLE,
        ctaLabel: en.default.Messages.GUILD_PRODUCT_BILLING_CONTACT_SUPPORT,
        onClick: () => (0, N.default)(er(s))
      }) : null != a && null != e.sku && (0, l.jsx)(em, {
        guildId: a,
        guildProductListingId: e.sku.id
      })]
    }) : null
  }
  renderExpandedSection() {
    return (0, l.jsx)(S.Clickable, {
      onClick: e => e.stopPropagation(),
      children: (0, l.jsxs)("div", {
        className: ei.expandedInfo,
        children: [(0, l.jsx)(S.H, {
          className: ei.paymentHeader,
          children: en.default.Messages.BILLING_PURCHASE_DETAILS_HEADER
        }), this.renderPaymentBreakdown(), this.renderGuildProductBenefits(), this.renderInvoiceDownload(), this.renderRefundDetails()]
      })
    })
  }
  render() {
    let {
      payment: e,
      className: t,
      compactMode: s
    } = this.props, {
      expanded: a
    } = this.state;
    return (0, l.jsx)(E.ListNavigatorItem, {
      id: e.id,
      children: e => (0, l.jsxs)(S.Clickable, {
        onClick: this.handleExpandInfo,
        className: u()(a ? ei.payment : ei.hoverablePayment, t, {
          [ei.compact]: s
        }),
        focusProps: {
          offset: 4
        },
        ...e,
        children: [(0, l.jsxs)(j.default, {
          className: ei.summaryInfo,
          align: j.default.Align.CENTER,
          children: [this.renderDescription(), (0, l.jsxs)("div", {
            className: ei.amount,
            children: [this.renderStatus(), this.renderPrice()]
          }), (0, l.jsx)(w.default, {
            className: ei.expand,
            direction: a ? w.default.Directions.UP : w.default.Directions.DOWN
          })]
        }), a ? this.renderExpandedSection() : null]
      })
    })
  }
  constructor(...e) {
    super(...e), el(this, "state", {
      expanded: !1
    }), el(this, "refundRules", [{
      rule: "PURCHASE_DATE",
      canRefund: () => {
        let {
          payment: e
        } = this.props, t = e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift ? 5 : 14;
        return this.daysSincePurchase <= t
      }
    }, {
      rule: "SKU_TYPE",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.sku || e.sku.type !== et.SKUTypes.CONSUMABLE
      }
    }, {
      rule: "ALREADY_REFUNDED",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return e.amountRefunded < e.amount
      }
    }, {
      rule: "PAYMENT_STATUS",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return !eu.includes(e.status)
      }
    }, {
      rule: "PAYMENT_GATEWAY",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.paymentGateway || !ed.includes(e.paymentGateway)
      }
    }, {
      rule: "SKU_STICKER_PACK",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.sku || !(0, q.hasFlag)(e.sku.flags, et.SKUFlags.STICKER_PACK)
      }
    }, {
      rule: "SUBSCRIPTION_TYPE",
      canRefund: () => {
        var e, t;
        let {
          payment: s
        } = this.props;
        return (null === (e = s.subscription) || void 0 === e ? void 0 : e.type) !== et.SubscriptionTypes.GUILD && (null === (t = s.subscription) || void 0 === t ? void 0 : t.type) !== et.SubscriptionTypes.APPLICATION
      }
    }, {
      rule: "GUILD_PRODUCT",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.sku || !(0, q.hasFlag)(e.sku.flags, m.SKUFlags.GUILD_PRODUCT)
      }
    }]), el(this, "handleExpandInfo", () => {
      this.setState({
        expanded: !this.state.expanded
      })
    })
  }
}

function eS(e) {
  var t, s;
  let {
    payment: a,
    locale: n,
    compactMode: i,
    className: o
  } = e, u = null != a.sku && eo.includes(a.sku.type), d = null != a.sku && u ? a.sku.applicationId : null, c = null === (t = a.sku) || void 0 === t ? void 0 : t.applicationId, p = (null === (s = a.subscription) || void 0 === s ? void 0 : s.type) === et.SubscriptionTypes.APPLICATION, {
    applicationStatistics: f,
    gameApplication: E,
    paymentSources: m
  } = (0, _.useStateFromStoresObject)([O.default, B.default, P.default], () => {
    var e, t;
    return {
      applicationStatistics: null != d ? B.default.getCurrentUserStatisticsForApplication(d) : null,
      gameApplication: null !== (t = P.default.getApplication(null != d ? d : "")) && void 0 !== t ? t : null === (e = a.sku) || void 0 === e ? void 0 : e.application,
      paymentSources: O.default.paymentSources
    }
  }), S = (0, _.useStateFromStores)([P.default], () => null != c ? P.default.getApplication(c) : null);
  r.useEffect(() => {
    p && null != c && (0, L.fetchApplication)(c)
  }, [c, p]);
  let I = (0, _.useStateFromStores)([b.default], () => b.default.getGuild(null == E ? void 0 : E.guildId));
  return (0, l.jsx)(e_, {
    applicationStatistics: f,
    application: p ? S : u ? E : void 0,
    guild: I,
    stickerPack: null,
    paymentSources: m,
    locale: n,
    compactMode: i,
    className: o,
    payment: a
  })
}
el(e_, "defaultProps", {
  compactMode: !1
})
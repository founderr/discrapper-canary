"use strict";
s.r(t), s.d(t, {
  default: function() {
    return eI
  }
}), s("47120"), s("653041"), s("789020");
var a, n, i, l = s("735250"),
  r = s("470079"),
  u = s("803997"),
  o = s.n(u),
  d = s("512722"),
  c = s.n(d),
  E = s("913527"),
  f = s.n(E),
  p = s("924826"),
  _ = s("314877"),
  m = s("442837"),
  I = s("481060"),
  N = s("37234"),
  S = s("782568"),
  T = s("812206"),
  C = s("593061"),
  P = s("267101"),
  A = s("240864"),
  R = s("942833"),
  M = s("400916"),
  h = s("916001"),
  L = s("539290"),
  g = s("336197"),
  y = s("307643"),
  x = s("378233"),
  D = s("419922"),
  U = s("46141"),
  b = s("430824"),
  O = s("853872"),
  v = s("509545"),
  B = s("230307"),
  j = s("285952"),
  G = s("366695"),
  F = s("499150"),
  k = s("912454"),
  w = s("259580"),
  H = s("263704"),
  Y = s("465670"),
  W = s("126900"),
  V = s("559629"),
  K = s("466111"),
  z = s("572004"),
  Z = s("55935"),
  X = s("630388"),
  q = s("74538"),
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
  eu = [et.SKUTypes.DURABLE_PRIMARY, et.SKUTypes.DURABLE, et.SKUTypes.CONSUMABLE];
(i = a || (a = {})).PURCHASE_DATE = "PURCHASE_DATE", i.SKU_TYPE = "SKU_TYPE", i.ALREADY_REFUNDED = "ALREADY_REFUNDED", i.PAYMENT_STATUS = "PAYMENT_STATUS", i.PAYMENT_GATEWAY = "PAYMENT_GATEWAY", i.SKU_STICKER_PACK = "SKU_STICKER_PACK", i.SUBSCRIPTION_TYPE = "SUBSCRIPTION_TYPE", i.GUILD_PRODUCT = "GUILD_PRODUCT";
let eo = [et.PaymentStatusTypes.FAILED, et.PaymentStatusTypes.REVERSED, et.PaymentStatusTypes.CANCELED],
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

function eE(e) {
  let {
    value: t,
    copyText: s,
    copyFeedbackText: a
  } = e, [n, i] = r.useState(!1), [u, o] = r.useState(!1), d = () => {
    (0, z.copy)(t), o(!0), i(!0)
  };
  return (0, l.jsx)(I.Tooltip, {
    forceOpen: u,
    text: n ? a : s,
    children: e => {
      let {
        onMouseEnter: s,
        onMouseLeave: a,
        ...r
      } = e;
      return (0, l.jsx)(I.Clickable, {
        ...r,
        onMouseEnter: () => {
          n && i(!1), "function" == typeof s && s()
        },
        onMouseLeave: () => {
          o(!1), "function" == typeof a && a()
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

function ep(e) {
  let {
    guildId: t,
    guildProductListingId: s
  } = e, a = (0, P.useFetchGuildProductListing)(t, s, {
    requireCurrentGuild: !1
  }), n = (0, R.useProductType)(a), i = (0, m.useStateFromStores)([b.default], () => b.default.getGuild(t)), u = (null == a ? void 0 : a.role_id) != null && (null == a ? void 0 : a.attachments_count) === 0 ? en.default.Messages.GUILD_PRODUCT_BILLING_TYPE_PREMIUM_ROLE : n, o = r.useCallback(async () => {
    (null == i ? void 0 : i.hasFeature(et.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0 ? await (0, g.default)(et.Routes.GUILD_PRODUCT(t, s)) : await (0, g.default)(et.Routes.CHANNEL(t)), (0, N.popLayer)()
  }, [i, t, s]);
  return (0, l.jsxs)(l.Fragment, {
    children: [null != u && (0, l.jsx)(ef, {
      description: en.default.Messages.GUILD_PRODUCT_BILLING_PRODUCT_TYPE,
      detail: u
    }), null != i && (0, l.jsx)(ef, {
      description: en.default.Messages.GUILD_PRODUCT_BILLING_SERVER_NAME,
      detail: (0, l.jsx)(F.default, {
        onClick: o,
        children: i.name
      })
    })]
  })
}

function e_(e) {
  var t, s;
  let {
    guildId: a,
    guildProductListingId: n
  } = e, i = (0, P.useFetchGuildProductListing)(a, n, {
    requireCurrentGuild: !1
  }), r = (0, m.useStateFromStores)([A.default], () => A.default.getGuildProductFetchState(n) === A.FetchState.FETCHING), u = null == i ? void 0 : i.role_id, o = (0, m.useStateFromStores)([b.default], () => null != u ? b.default.getRole(a, u) : void 0, [a, u]), d = (null !== (s = null == i ? void 0 : null === (t = i.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== s ? s : 0) > 0, c = null != o;
  return r ? (0, l.jsx)("div", {
    className: ei.guildProductBenefits,
    children: (0, l.jsx)(I.Spinner, {})
  }) : null != i && (d || c) ? (0, l.jsxs)("div", {
    className: ei.guildProductBenefits,
    children: [d && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(I.Text, {
        variant: "text-xs/semibold",
        color: "header-secondary",
        className: ei.guildProductBenefitLabel,
        children: en.default.Messages.GUILD_PRODUCT_BILLING_ACCESS_DOWNLOADABLES
      }), (0, l.jsx)(M.default, {
        guildId: a,
        productId: i.id
      })]
    }), c && (0, l.jsxs)(l.Fragment, {
      children: [d && (0, l.jsx)("div", {
        className: ei.divider
      }), (0, l.jsx)(I.Text, {
        variant: "text-xs/semibold",
        color: "header-secondary",
        className: ei.guildProductBenefitLabel,
        children: en.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_ROLE_UNLOCKED
      }), (0, l.jsx)(h.default, {
        role: o
      })]
    })]
  }) : null
}
class em extends(n = r.PureComponent) {
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
    return e instanceof U.PaypalSourceRecord ? k.default.Types.PAYPAL : e instanceof U.CreditCardSourceRecord ? k.default.getType(e.brand) : k.default.Types.UNKNOWN
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
        }), (0, l.jsx)(eE, {
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
      amountRefunded: u,
      currency: d
    } = e, c = null == s ? void 0 : s.guildId;
    return (0, l.jsxs)("div", {
      className: o()(ei.paymentText, ei.paymentBreakdown),
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
        }), e.isGuildProductPurchase && null != c && null != e.sku && (0, l.jsx)(ep, {
          guildId: c,
          guildProductListingId: e.sku.id
        }), u > 0 && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(ec, {
            description: en.default.Messages.BILLING_PAYMENT_BREAKDOWN_REFUNDED,
            cost: (0, J.formatPrice)(u, d)
          }), (0, l.jsx)(ec, {
            description: en.default.Messages.BILLING_PAYMENT_BREAKDOWN_NET,
            cost: (0, J.formatPrice)(i - u, d)
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
      u = this.isPremium ? 5 : 14;
    return e = a.includes("SKU_TYPE") ? en.default.Messages.BILLING_APPLICATION_CONSUMABLE_REFUND_TEXT_UNABLE.format({
      supportURL: i
    }) : n ? s.isPremiumSubscription || s.isPremiumGuildSubscription ? en.default.Messages.BILLING_PREMIUM_REFUND_TEXT.format({
      dateLimit: u,
      supportURL: i
    }) : s.isGift ? en.default.Messages.BILLING_GIFT_REFUND_TEXT.format({
      dateLimit: u,
      supportURL: i
    }) : en.default.Messages.BILLING_APPLICATION_REFUND_TEXT.format({
      dateLimit: u,
      playtimeLimit: 2,
      supportURL: i
    }) : s.isGift ? en.default.Messages.BILLING_GIFT_REFUND_TEXT_UNABLE.format({
      dateLimit: u
    }) : s.isPremiumSubscription || s.isPremiumGuildSubscription ? en.default.Messages.BILLING_PREMIUM_REFUND_TEXT_UNABLE.format({
      dateLimit: u
    }) : s.isCollectible ? en.default.Messages.BILLING_COLLECTIBLES_REFUND_TEXT_UNABLE : en.default.Messages.BILLING_APPLICATION_REFUND_TEXT_UNABLE.format({
      dateLimit: u,
      playtimeLimit: 2
    }), this.isPremium && (0, $.userInRefundExperiment)() && (e = null), (0, l.jsxs)(r.Fragment, {
      children: [(0, l.jsx)(I.H, {
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
      children: [(0, l.jsx)(I.H, {
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
    let i = e.includes("PURCHASE_DATE") ? Y.default : H.default;
    if (!this.isPremium || !(0, $.userInRefundExperiment)()) return (0, l.jsxs)("div", {
      className: ei.refundActions,
      children: [(0, l.jsx)("div", {
        className: ei.refundRules,
        children: !n.isCollectible && this.renderRefundCriteria(en.default.Messages.BILLING_REFUND_PURCHASE_DATE_SUBHEADER, i, en.default.Messages.BILLING_REFUND_PURCHASE_DATE.format({
          daysSincePurchase: this.daysSincePurchase
        }))
      }), (0, l.jsx)(I.Anchor, {
        href: er(a),
        children: en.default.Messages.BILLING_REFUND_REPORT_A_PROBLEM
      })]
    });
    let r = (null !== (t = n.premiumRefundDisqualificationReasons) && void 0 !== t ? t : [ee.PremiumRefundDisqualificationReason.OTHER])[0],
      u = null != r || 0 !== e.length || n.isPurchasedExternally;
    return (0, l.jsxs)("div", {
      className: ei.refundActions,
      children: [(0, l.jsx)(I.Tooltip, {
        shouldShow: u,
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
        children: e => (0, l.jsx)(I.Button, {
          ...e,
          color: I.Button.Colors.PRIMARY,
          disabled: u,
          onClick: () => (0, I.openModalLazy)(async () => {
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
      }), (0, l.jsx)(I.Anchor, {
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
      stickerPack: u
    } = this.props, {
      expanded: o
    } = this.state, d = a.sku, E = a.subscription, p = null != a.paymentSource && et.PREPAID_PAYMENT_SOURCES.has(a.paymentSource.type);
    if (null != E && 0 !== E.items.length) {
      let s = [],
        a = null;
      if (E.type === et.SubscriptionTypes.PREMIUM) E.items.forEach(e => {
        let {
          planId: t,
          quantity: n
        } = e;
        (0, q.isPremiumBaseSubscriptionPlan)(t) ? (s.push(q.default.getDisplayName(t, !1, p)), a = (0, q.castPremiumSubscriptionAsSkuId)(es.SubscriptionPlanInfo[t].skuId)) : (s.push("".concat(n > 1 ? "".concat(n, "x ") : "").concat(q.default.getDisplayName(t, !1, p))), null == a && (a = (0, q.castPremiumSubscriptionAsSkuId)(es.SubscriptionPlanInfo[t].skuId)))
      });
      else if (E.type === et.SubscriptionTypes.GUILD) {
        let e = v.default.get(E.items[0].planId);
        c()(null != e, "Guild subscription plan should already have been loaded");
        let t = e.interval === es.SubscriptionIntervalTypes.YEAR ? en.default.Messages.YEARLY_GUILD_SUBSCRIPTION : en.default.Messages.MONTHLY_GUILD_SUBSCRIPTION;
        s.push(t.format({
          planName: e.name
        })), a = e.skuId
      } else if (E.type === et.SubscriptionTypes.APPLICATION) {
        let e = v.default.get(E.items[0].planId);
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
      var _;
      if (t = a.isGuildProductPurchase && a.isSoftDeletedProduct ? en.default.Messages.GUILD_PRODUCT_BILLING_DELISTED_PRODUCT : d.name, null != u) {
        let t = (0, x.getStickerPackPreviewSticker)(u);
        e = (0, l.jsx)(D.default, {
          disableAnimation: !o,
          isInteracting: o,
          sticker: t,
          className: ei.descriptionIcon,
          size: 24
        })
      } else e = (null === (_ = a.sku) || void 0 === _ ? void 0 : _.productLine) === et.SKUProductLines.COLLECTIBLES ? (0, l.jsx)(W.default, {
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
    let m = (0, l.jsx)("div", {
        className: ei.date,
        children: (0, Z.dateFormat)(f()(a.createdAt), "MM/DD/YYYY")
      }),
      N = a.isGift ? (0, l.jsx)(I.Tooltip, {
        text: en.default.Messages.BILLING_GIFT_PURCHASE_TOOLTIP,
        children: e => (0, l.jsx)(V.default, {
          className: ei.giftIcon,
          ...e
        })
      }) : null;
    return s ? (0, l.jsxs)("div", {
      className: ei.description,
      children: [e, (0, l.jsxs)("div", {
        children: [t, m]
      }), N]
    }) : (0, l.jsxs)(r.Fragment, {
      children: [m, (0, l.jsxs)("div", {
        className: ei.description,
        children: [e, (0, l.jsx)("div", {
          children: t
        }), N]
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
      }), e.isSoftDeletedProduct ? (0, l.jsx)(L.default, {
        className: ei.warningBlock,
        buttonPosition: L.WarningBlockButtonPosition.RIGHT,
        notice: en.default.Messages.GUILD_PRODUCT_BILLING_PRODUCT_UNAVAILABLE,
        ctaLabel: en.default.Messages.GUILD_PRODUCT_BILLING_CONTACT_SUPPORT,
        onClick: () => (0, S.default)(er(s))
      }) : null != a && null != e.sku && (0, l.jsx)(e_, {
        guildId: a,
        guildProductListingId: e.sku.id
      })]
    }) : null
  }
  renderExpandedSection() {
    return (0, l.jsx)(I.Clickable, {
      onClick: e => e.stopPropagation(),
      children: (0, l.jsxs)("div", {
        className: ei.expandedInfo,
        children: [(0, l.jsx)(I.H, {
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
    return (0, l.jsx)(p.ListNavigatorItem, {
      id: e.id,
      children: e => (0, l.jsxs)(I.Clickable, {
        onClick: this.handleExpandInfo,
        className: o()(a ? ei.payment : ei.hoverablePayment, t, {
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
        return !eo.includes(e.status)
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
        return null == e.sku || !(0, X.hasFlag)(e.sku.flags, et.SKUFlags.STICKER_PACK)
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
        return null == e.sku || !(0, X.hasFlag)(e.sku.flags, _.SKUFlags.GUILD_PRODUCT)
      }
    }]), el(this, "handleExpandInfo", () => {
      this.setState({
        expanded: !this.state.expanded
      })
    })
  }
}

function eI(e) {
  var t, s;
  let {
    payment: a,
    locale: n,
    compactMode: i,
    className: u
  } = e, o = null != a.sku && eu.includes(a.sku.type), d = null != a.sku && o ? a.sku.applicationId : null, c = null === (t = a.sku) || void 0 === t ? void 0 : t.applicationId, E = (null === (s = a.subscription) || void 0 === s ? void 0 : s.type) === et.SubscriptionTypes.APPLICATION, {
    applicationStatistics: f,
    gameApplication: p,
    paymentSources: _
  } = (0, m.useStateFromStoresObject)([O.default, B.default, T.default], () => {
    var e, t;
    return {
      applicationStatistics: null != d ? B.default.getCurrentUserStatisticsForApplication(d) : null,
      gameApplication: null !== (t = T.default.getApplication(null != d ? d : "")) && void 0 !== t ? t : null === (e = a.sku) || void 0 === e ? void 0 : e.application,
      paymentSources: O.default.paymentSources
    }
  }), I = (0, m.useStateFromStores)([T.default], () => null != c ? T.default.getApplication(c) : null);
  r.useEffect(() => {
    E && null != c && (0, y.fetchApplication)(c)
  }, [c, E]);
  let N = (0, m.useStateFromStores)([b.default], () => b.default.getGuild(null == p ? void 0 : p.guildId));
  return (0, l.jsx)(em, {
    applicationStatistics: f,
    application: E ? I : o ? p : void 0,
    guild: N,
    stickerPack: null,
    paymentSources: _,
    locale: n,
    compactMode: i,
    className: u,
    payment: a
  })
}
el(em, "defaultProps", {
  compactMode: !1
})
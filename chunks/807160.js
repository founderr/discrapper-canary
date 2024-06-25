n.d(t, {
  Z: function() {
    return e_
  }
}), n(47120), n(653041), n(789020);
var s, a, i, o = n(735250),
  r = n(470079),
  l = n(120356),
  c = n.n(l),
  d = n(512722),
  u = n.n(d),
  _ = n(913527),
  p = n.n(_),
  m = n(91192),
  f = n(314877),
  E = n(442837),
  I = n(481060),
  C = n(37234),
  h = n(782568),
  N = n(812206),
  P = n(593061),
  g = n(267101),
  T = n(240864),
  S = n(942833),
  R = n(400916),
  A = n(916001),
  b = n(539290),
  x = n(336197),
  M = n(307643),
  L = n(378233),
  y = n(419922),
  B = n(46141),
  D = n(430824),
  O = n(853872),
  v = n(509545),
  U = n(230307),
  Z = n(285952),
  j = n(366695),
  w = n(499150),
  k = n(912454),
  G = n(259580),
  F = n(572004),
  Y = n(55935),
  H = n(630388),
  W = n(74538),
  V = n(937615),
  z = n(244526),
  K = n(712358),
  q = n(362786),
  X = n(981631),
  Q = n(474936),
  J = n(231338),
  $ = n(689938),
  ee = n(69630);

function et(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let en = e => "https://".concat(X.xr4, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000118612"),
  es = [X.epS.DURABLE_PRIMARY, X.epS.DURABLE, X.epS.CONSUMABLE];
(i = s || (s = {})).PURCHASE_DATE = "PURCHASE_DATE", i.SKU_TYPE = "SKU_TYPE", i.ALREADY_REFUNDED = "ALREADY_REFUNDED", i.PAYMENT_STATUS = "PAYMENT_STATUS", i.PAYMENT_GATEWAY = "PAYMENT_GATEWAY", i.SKU_STICKER_PACK = "SKU_STICKER_PACK", i.SUBSCRIPTION_TYPE = "SUBSCRIPTION_TYPE", i.GUILD_PRODUCT = "GUILD_PRODUCT";
let ea = [X.PyE.FAILED, X.PyE.REVERSED, X.PyE.CANCELED],
  ei = [J.gg.APPLE],
  eo = e => {
    let {
      description: t,
      cost: n
    } = e;
    return (0, o.jsx)("li", {
      className: ee.paymentDetail,
      children: (0, o.jsxs)(Z.Z, {
        justify: Z.Z.Justify.BETWEEN,
        children: [(0, o.jsx)("div", {
          children: t
        }), (0, o.jsx)("div", {
          children: n
        })]
      })
    })
  };

function er(e) {
  let {
    value: t,
    copyText: n,
    copyFeedbackText: s
  } = e, [a, i] = r.useState(!1), [l, c] = r.useState(!1), d = () => {
    (0, F.JG)(t), c(!0), i(!0)
  };
  return (0, o.jsx)(I.Tooltip, {
    forceOpen: l,
    text: a ? s : n,
    children: e => {
      let {
        onMouseEnter: n,
        onMouseLeave: s,
        ...r
      } = e;
      return (0, o.jsx)(I.Clickable, {
        ...r,
        onMouseEnter: () => {
          a && i(!1), "function" == typeof n && n()
        },
        onMouseLeave: () => {
          c(!1), "function" == typeof s && s()
        },
        onClick: d,
        children: (0, o.jsx)("div", {
          className: ee.copiableContainer,
          children: t
        })
      })
    }
  })
}
let el = e => {
  let {
    description: t,
    detail: n
  } = e;
  return (0, o.jsx)("li", {
    className: ee.guildProductDetail,
    children: (0, o.jsxs)(Z.Z, {
      justify: Z.Z.Justify.BETWEEN,
      children: [(0, o.jsx)("div", {
        children: t
      }), (0, o.jsx)("div", {
        children: n
      })]
    })
  })
};

function ec(e) {
  let {
    guildId: t,
    guildProductListingId: n
  } = e, s = (0, g.hO)(t, n, {
    requireCurrentGuild: !1
  }), a = (0, S.C)(s), i = (0, E.e7)([D.Z], () => D.Z.getGuild(t)), l = (null == s ? void 0 : s.role_id) != null && (null == s ? void 0 : s.attachments_count) === 0 ? $.Z.Messages.GUILD_PRODUCT_BILLING_TYPE_PREMIUM_ROLE : a, c = r.useCallback(async () => {
    (null == i ? void 0 : i.hasFeature(X.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0 ? await (0, x.Z)(X.Z5c.GUILD_PRODUCT(t, n)) : await (0, x.Z)(X.Z5c.CHANNEL(t)), (0, C.xf)()
  }, [i, t, n]);
  return (0, o.jsxs)(o.Fragment, {
    children: [null != l && (0, o.jsx)(el, {
      description: $.Z.Messages.GUILD_PRODUCT_BILLING_PRODUCT_TYPE,
      detail: l
    }), null != i && (0, o.jsx)(el, {
      description: $.Z.Messages.GUILD_PRODUCT_BILLING_SERVER_NAME,
      detail: (0, o.jsx)(w.Z, {
        onClick: c,
        children: i.name
      })
    })]
  })
}

function ed(e) {
  var t, n;
  let {
    guildId: s,
    guildProductListingId: a
  } = e, i = (0, g.hO)(s, a, {
    requireCurrentGuild: !1
  }), r = (0, E.e7)([T.Z], () => T.Z.getGuildProductFetchState(a) === T.M.FETCHING), l = null == i ? void 0 : i.role_id, c = (0, E.e7)([D.Z], () => null != l ? D.Z.getRole(s, l) : void 0, [s, l]), d = (null !== (n = null == i ? void 0 : null === (t = i.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) > 0, u = null != c;
  return r ? (0, o.jsx)("div", {
    className: ee.guildProductBenefits,
    children: (0, o.jsx)(I.Spinner, {})
  }) : null != i && (d || u) ? (0, o.jsxs)("div", {
    className: ee.guildProductBenefits,
    children: [d && (0, o.jsxs)(o.Fragment, {
      children: [(0, o.jsx)(I.Text, {
        variant: "text-xs/semibold",
        color: "header-secondary",
        className: ee.guildProductBenefitLabel,
        children: $.Z.Messages.GUILD_PRODUCT_BILLING_ACCESS_DOWNLOADABLES
      }), (0, o.jsx)(R.Z, {
        guildId: s,
        productId: i.id
      })]
    }), u && (0, o.jsxs)(o.Fragment, {
      children: [d && (0, o.jsx)("div", {
        className: ee.divider
      }), (0, o.jsx)(I.Text, {
        variant: "text-xs/semibold",
        color: "header-secondary",
        className: ee.guildProductBenefitLabel,
        children: $.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_ROLE_UNLOCKED
      }), (0, o.jsx)(A.Z, {
        role: c
      })]
    })]
  }) : null
}
class eu extends(a = r.PureComponent) {
  get daysSincePurchase() {
    let {
      payment: e
    } = this.props, t = null != e.sku ? e.sku.releaseDate : null, n = null != t && t.isAfter(e.createdAt) ? t : e.createdAt;
    return p()().diff(n, "days")
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
    return e instanceof B.qo ? k.ZP.Types.PAYPAL : e instanceof B.dm ? k.ZP.getType(e.brand) : k.ZP.Types.UNKNOWN
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
      case X.PyE.PENDING:
        return (0, o.jsx)("span", {
          className: ee.statusTagGrey,
          children: $.Z.Messages.BILLING_TAG_PENDING
        });
      case X.PyE.FAILED:
        return (0, o.jsx)("span", {
          className: ee.statusTagRed,
          children: $.Z.Messages.BILLING_TAG_FAILED
        });
      case X.PyE.REFUNDED:
        if (e.amountRefunded !== e.amount) return (0, o.jsx)("span", {
          className: ee.statusTagGreen,
          children: $.Z.Messages.BILLING_TAG_PARTIALLY_REFUNDED
        });
        return (0, o.jsx)("span", {
          className: ee.statusTagGreen,
          children: $.Z.Messages.BILLING_TAG_REFUNDED
        });
      case X.PyE.REVERSED:
        return (0, o.jsx)("span", {
          className: ee.statusTagRed,
          children: $.Z.Messages.BILLING_TAG_REVERSED
        });
      case X.PyE.CANCELED:
        return (0, o.jsx)("span", {
          className: ee.statusTagRed,
          children: $.Z.Messages.BILLING_TAG_CANCELED
        });
      default:
        return null
    }
  }
  renderPrice() {
    let {
      payment: e
    } = this.props, t = e.amount - e.amountRefunded;
    return (0, o.jsx)("span", {
      className: ee.price,
      children: (0, V.T4)(t, e.currency)
    })
  }
  renderPaymentIdField() {
    let {
      payment: e
    } = this.props;
    return (0, o.jsx)("li", {
      className: ee.paymentDetail,
      children: (0, o.jsxs)("div", {
        className: ee.paymentInfo,
        children: [(0, o.jsx)("div", {
          children: $.Z.Messages.BILLING_PAYMENT_ID
        }), (0, o.jsx)(er, {
          value: e.id,
          copyText: $.Z.Messages.BILLING_PAYMENT_ID_COPY,
          copyFeedbackText: $.Z.Messages.BILLING_PAYMENT_ID_COPIED
        })]
      })
    })
  }
  renderPaymentBreakdown() {
    let {
      payment: e,
      locale: t,
      application: n
    } = this.props, {
      taxInclusive: s,
      tax: a,
      amount: i,
      amountRefunded: l,
      currency: d
    } = e, u = null == n ? void 0 : n.guildId;
    return (0, o.jsxs)("div", {
      className: c()(ee.paymentText, ee.paymentBreakdown),
      children: [null != e.paymentSource ? (0, o.jsx)(z.Z, {
        paymentSource: e.paymentSource,
        locale: t,
        descriptionClassName: ee.paymentText,
        showLabels: !0,
        showPaymentSourceIcon: !0
      }) : e.paymentGateway === J.gg.APPLE_PARTNER ? (0, o.jsx)(z.Z, {
        paymentSource: new B.$z({}),
        locale: t,
        descriptionClassName: ee.paymentText,
        showLabels: !0,
        showPaymentSourceIcon: !0
      }) : null, (0, o.jsxs)("ul", {
        children: [this.renderPaymentIdField(), !s && a > 0 ? (0, o.jsxs)(r.Fragment, {
          children: [(0, o.jsx)(eo, {
            description: e.description,
            cost: (0, V.T4)(i - a, d)
          }), (0, o.jsx)(eo, {
            description: $.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TAXES,
            cost: (0, V.T4)(a, d)
          })]
        }) : null, (0, o.jsx)(eo, {
          description: $.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
          cost: (0, V.T4)(i, d)
        }), e.isGuildProductPurchase && null != u && null != e.sku && (0, o.jsx)(ec, {
          guildId: u,
          guildProductListingId: e.sku.id
        }), l > 0 && (0, o.jsxs)(o.Fragment, {
          children: [(0, o.jsx)(eo, {
            description: $.Z.Messages.BILLING_PAYMENT_BREAKDOWN_REFUNDED,
            cost: (0, V.T4)(l, d)
          }), (0, o.jsx)(eo, {
            description: $.Z.Messages.BILLING_PAYMENT_BREAKDOWN_NET,
            cost: (0, V.T4)(i - l, d)
          })]
        })]
      })]
    })
  }
  renderInvoiceDownload() {
    let {
      payment: e
    } = this.props;
    return (0, o.jsx)(P.Z, {
      payment: e
    })
  }
  renderRefundDetails() {
    let e;
    let {
      locale: t,
      payment: n
    } = this.props, s = this.validateRefundRules();
    if (s.includes("PAYMENT_GATEWAY") || s.includes("PAYMENT_STATUS") || s.includes("ALREADY_REFUNDED") || s.includes("SKU_STICKER_PACK") || s.includes("SUBSCRIPTION_TYPE") || s.includes("GUILD_PRODUCT")) return null;
    let a = 0 === s.length,
      i = en(t),
      l = this.isPremium ? 5 : 14;
    return e = s.includes("SKU_TYPE") ? $.Z.Messages.BILLING_APPLICATION_CONSUMABLE_REFUND_TEXT_UNABLE.format({
      supportURL: i
    }) : a ? n.isPremiumSubscription || n.isPremiumGuildSubscription ? $.Z.Messages.BILLING_PREMIUM_REFUND_TEXT.format({
      dateLimit: l,
      supportURL: i
    }) : n.isGift ? $.Z.Messages.BILLING_GIFT_REFUND_TEXT.format({
      dateLimit: l,
      supportURL: i
    }) : $.Z.Messages.BILLING_APPLICATION_REFUND_TEXT.format({
      dateLimit: l,
      playtimeLimit: 2,
      supportURL: i
    }) : n.isGift ? $.Z.Messages.BILLING_GIFT_REFUND_TEXT_UNABLE.format({
      dateLimit: l
    }) : n.isPremiumSubscription || n.isPremiumGuildSubscription ? $.Z.Messages.BILLING_PREMIUM_REFUND_TEXT_UNABLE.format({
      dateLimit: l
    }) : n.isCollectible ? $.Z.Messages.BILLING_COLLECTIBLES_REFUND_TEXT_UNABLE : $.Z.Messages.BILLING_APPLICATION_REFUND_TEXT_UNABLE.format({
      dateLimit: l,
      playtimeLimit: 2
    }), this.isPremium && (0, K.U)() && (e = null), (0, o.jsxs)(r.Fragment, {
      children: [(0, o.jsx)(I.H, {
        className: ee.paymentHeader,
        children: $.Z.Messages.BILLING_REFUND_HEADER
      }), (0, o.jsxs)("div", {
        className: ee.paymentText,
        children: [(0, o.jsx)("div", {
          children: e
        }), this.renderRefundActions(s)]
      })]
    })
  }
  renderRefundCriteria(e, t, n, s) {
    return (0, o.jsxs)("div", {
      className: ee.refundCriteria,
      children: [(0, o.jsx)(I.H, {
        className: ee.refundSubHeader,
        children: e
      }), (0, o.jsxs)("div", {
        className: ee.refundIconContainer,
        children: [(0, o.jsx)(t, {
          className: ee.refundCriteriaIcon,
          color: "currentColor"
        }), null != n && (0, o.jsx)("div", {
          children: n
        })]
      })]
    }, s)
  }
  renderRefundActions(e) {
    var t;
    let {
      locale: s,
      payment: a
    } = this.props;
    if (e.includes("SKU_TYPE")) return null;
    let i = e.includes("PURCHASE_DATE") ? I.CloseSmallIcon : I.CheckmarkLargeIcon;
    if (!this.isPremium || !(0, K.U)()) return (0, o.jsxs)("div", {
      className: ee.refundActions,
      children: [(0, o.jsx)("div", {
        className: ee.refundRules,
        children: !a.isCollectible && this.renderRefundCriteria($.Z.Messages.BILLING_REFUND_PURCHASE_DATE_SUBHEADER, i, $.Z.Messages.BILLING_REFUND_PURCHASE_DATE.format({
          daysSincePurchase: this.daysSincePurchase
        }))
      }), (0, o.jsx)(I.Anchor, {
        href: en(s),
        children: $.Z.Messages.BILLING_REFUND_REPORT_A_PROBLEM
      })]
    });
    let r = (null !== (t = a.premiumRefundDisqualificationReasons) && void 0 !== t ? t : [q.d$.OTHER])[0],
      l = null != r || 0 !== e.length || a.isPurchasedExternally;
    return (0, o.jsxs)("div", {
      className: ee.refundActions,
      children: [(0, o.jsx)(I.Tooltip, {
        shouldShow: l,
        text: function(e) {
          switch (e) {
            case q.d$.ALREADY_REFUNDED_PREMIUM:
              return $.Z.Messages.BILLING_REFUND_ALREADY_REFUNDED_PREMIUM_REASON;
            case q.d$.ALREADY_REFUNDED_PREMIUM_GUILD:
              return $.Z.Messages.BILLING_REFUND_ALREADY_REFUNDED_PREMIUM_GUILD_REASON;
            case q.d$.ENTITLEMENT_ALREADY_CONSUMED:
              return $.Z.Messages.BILLING_REFUND_ALREADY_CONSUMED_REASON;
            default:
              return $.Z.Messages.BILLING_REFUND_GENERIC_REASON
          }
        }(r),
        children: e => (0, o.jsx)(I.Button, {
          ...e,
          color: I.Button.Colors.PRIMARY,
          disabled: l,
          onClick: () => (0, I.openModalLazy)(async () => {
            let {
              default: e
            } = await n.e("69473").then(n.bind(n, 436022));
            return t => (0, o.jsx)(e, {
              payment: a,
              reportProblemUrl: en(s),
              ...t
            })
          }),
          children: $.Z.Messages.BILLING_REFUND_BUTTON_TEXT
        })
      }), (0, o.jsx)(I.Anchor, {
        href: en(s),
        children: $.Z.Messages.BILLING_REFUND_REPORT_A_PROBLEM
      })]
    })
  }
  renderDescription() {
    let e, t;
    let {
      compactMode: n,
      payment: s,
      application: a,
      guild: i,
      stickerPack: l
    } = this.props, {
      expanded: c
    } = this.state, d = s.sku, _ = s.subscription, m = null != s.paymentSource && X.Uk1.has(s.paymentSource.type);
    if (null != _ && 0 !== _.items.length) {
      let n = [],
        s = null;
      if (_.type === X.NYc.PREMIUM) _.items.forEach(e => {
        let {
          planId: t,
          quantity: a
        } = e;
        (0, W.uZ)(t) ? (n.push(W.ZP.getDisplayName(t, !1, m)), s = (0, W.Wz)(Q.GP[t].skuId)) : (n.push("".concat(a > 1 ? "".concat(a, "x ") : "").concat(W.ZP.getDisplayName(t, !1, m))), null == s && (s = (0, W.Wz)(Q.GP[t].skuId)))
      });
      else if (_.type === X.NYc.GUILD) {
        let e = v.Z.get(_.items[0].planId);
        u()(null != e, "Guild subscription plan should already have been loaded");
        let t = e.interval === Q.rV.YEAR ? $.Z.Messages.YEARLY_GUILD_SUBSCRIPTION : $.Z.Messages.MONTHLY_GUILD_SUBSCRIPTION;
        n.push(t.format({
          planName: e.name
        })), s = e.skuId
      } else if (_.type === X.NYc.APPLICATION) {
        let e = v.Z.get(_.items[0].planId);
        u()(null != e, "Application subscription plan should already have been loaded"), null != a ? n.push($.Z.Messages.MONTHLY_APPLICATION_SUBSCRIPTION_V2.format({
          tier: null == d ? void 0 : d.name
        })) : n.push($.Z.Messages.APPLICATION_SUBSCRIPTION_FROM_DELETED_APPLICATION), s = e.skuId
      }
      t = n.join(", "), e = (0, o.jsx)(j.Z, {
        className: ee.descriptionIcon,
        guildClassName: ee.guildDescriptionIcon,
        game: a,
        guild: i,
        size: j.Z.Sizes.XSMALL,
        skuId: s
      })
    } else if (null != d) {
      var f;
      if (t = s.isGuildProductPurchase && s.isSoftDeletedProduct ? $.Z.Messages.GUILD_PRODUCT_BILLING_DELISTED_PRODUCT : d.name, null != l) {
        let t = (0, L.Zt)(l);
        e = (0, o.jsx)(y.ZP, {
          disableAnimation: !c,
          isInteracting: c,
          sticker: t,
          className: ee.descriptionIcon,
          size: 24
        })
      } else e = (null === (f = s.sku) || void 0 === f ? void 0 : f.productLine) === X.POd.COLLECTIBLES ? (0, o.jsx)(I.ShopIcon, {
        size: "custom",
        width: 23,
        height: 23,
        color: "currentColor",
        className: ee.shopIcon
      }) : (0, o.jsx)(j.Z, {
        className: ee.descriptionIcon,
        guildClassName: ee.guildDescriptionIcon,
        game: a,
        guild: i,
        size: j.Z.Sizes.XSMALL,
        skuId: d.id
      })
    } else e = (0, o.jsx)(I.NitroWheelIcon, {
      size: "md",
      color: "currentColor",
      className: ee.descriptionIcon
    }), t = s.description;
    let E = (0, o.jsx)("div", {
        className: ee.date,
        children: (0, Y.vc)(p()(s.createdAt), "MM/DD/YYYY")
      }),
      C = s.isGift ? (0, o.jsx)(I.Tooltip, {
        text: $.Z.Messages.BILLING_GIFT_PURCHASE_TOOLTIP,
        children: e => (0, o.jsx)(I.GiftIcon, {
          size: "md",
          color: "currentColor",
          className: ee.giftIcon,
          ...e
        })
      }) : null;
    return n ? (0, o.jsxs)("div", {
      className: ee.description,
      children: [e, (0, o.jsxs)("div", {
        children: [t, E]
      }), C]
    }) : (0, o.jsxs)(r.Fragment, {
      children: [E, (0, o.jsxs)("div", {
        className: ee.description,
        children: [e, (0, o.jsx)("div", {
          children: t
        }), C]
      })]
    })
  }
  renderGuildProductBenefits() {
    let {
      payment: e,
      application: t,
      locale: n
    } = this.props, s = null == t ? void 0 : t.guildId;
    return e.isGuildProductPurchase ? (0, o.jsxs)(o.Fragment, {
      children: [(0, o.jsx)("div", {
        className: ee.sectionDivider
      }), e.isSoftDeletedProduct ? (0, o.jsx)(b.Z, {
        className: ee.warningBlock,
        buttonPosition: b.E.RIGHT,
        notice: $.Z.Messages.GUILD_PRODUCT_BILLING_PRODUCT_UNAVAILABLE,
        ctaLabel: $.Z.Messages.GUILD_PRODUCT_BILLING_CONTACT_SUPPORT,
        onClick: () => (0, h.Z)(en(n))
      }) : null != s && null != e.sku && (0, o.jsx)(ed, {
        guildId: s,
        guildProductListingId: e.sku.id
      })]
    }) : null
  }
  renderExpandedSection() {
    return (0, o.jsx)(I.Clickable, {
      onClick: e => e.stopPropagation(),
      children: (0, o.jsxs)("div", {
        className: ee.expandedInfo,
        children: [(0, o.jsx)(I.H, {
          className: ee.paymentHeader,
          children: $.Z.Messages.BILLING_PURCHASE_DETAILS_HEADER
        }), this.renderPaymentBreakdown(), this.renderGuildProductBenefits(), this.renderInvoiceDownload(), this.renderRefundDetails()]
      })
    })
  }
  render() {
    let {
      payment: e,
      className: t,
      compactMode: n
    } = this.props, {
      expanded: s
    } = this.state;
    return (0, o.jsx)(m.mh, {
      id: e.id,
      children: e => (0, o.jsxs)(I.Clickable, {
        onClick: this.handleExpandInfo,
        className: c()(s ? ee.payment : ee.hoverablePayment, t, {
          [ee.compact]: n
        }),
        focusProps: {
          offset: 4
        },
        ...e,
        children: [(0, o.jsxs)(Z.Z, {
          className: ee.summaryInfo,
          align: Z.Z.Align.CENTER,
          children: [this.renderDescription(), (0, o.jsxs)("div", {
            className: ee.amount,
            children: [this.renderStatus(), this.renderPrice()]
          }), (0, o.jsx)(G.Z, {
            className: ee.expand,
            direction: s ? G.Z.Directions.UP : G.Z.Directions.DOWN
          })]
        }), s ? this.renderExpandedSection() : null]
      })
    })
  }
  constructor(...e) {
    super(...e), et(this, "state", {
      expanded: !1
    }), et(this, "refundRules", [{
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
        return null == e.sku || e.sku.type !== X.epS.CONSUMABLE
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
        return !ea.includes(e.status)
      }
    }, {
      rule: "PAYMENT_GATEWAY",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.paymentGateway || !ei.includes(e.paymentGateway)
      }
    }, {
      rule: "SKU_STICKER_PACK",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.sku || !(0, H.yE)(e.sku.flags, X.l4R.STICKER_PACK)
      }
    }, {
      rule: "SUBSCRIPTION_TYPE",
      canRefund: () => {
        var e, t;
        let {
          payment: n
        } = this.props;
        return (null === (e = n.subscription) || void 0 === e ? void 0 : e.type) !== X.NYc.GUILD && (null === (t = n.subscription) || void 0 === t ? void 0 : t.type) !== X.NYc.APPLICATION
      }
    }, {
      rule: "GUILD_PRODUCT",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.sku || !(0, H.yE)(e.sku.flags, f.l.GUILD_PRODUCT)
      }
    }]), et(this, "handleExpandInfo", () => {
      this.setState({
        expanded: !this.state.expanded
      })
    })
  }
}

function e_(e) {
  var t, n;
  let {
    payment: s,
    locale: a,
    compactMode: i,
    className: l
  } = e, c = null != s.sku && es.includes(s.sku.type), d = null != s.sku && c ? s.sku.applicationId : null, u = null === (t = s.sku) || void 0 === t ? void 0 : t.applicationId, _ = (null === (n = s.subscription) || void 0 === n ? void 0 : n.type) === X.NYc.APPLICATION, {
    applicationStatistics: p,
    gameApplication: m,
    paymentSources: f
  } = (0, E.cj)([O.Z, U.Z, N.Z], () => {
    var e, t;
    return {
      applicationStatistics: null != d ? U.Z.getCurrentUserStatisticsForApplication(d) : null,
      gameApplication: null !== (t = N.Z.getApplication(null != d ? d : "")) && void 0 !== t ? t : null === (e = s.sku) || void 0 === e ? void 0 : e.application,
      paymentSources: O.Z.paymentSources
    }
  }), I = (0, E.e7)([N.Z], () => null != u ? N.Z.getApplication(u) : null);
  r.useEffect(() => {
    _ && null != u && (0, M.UM)(u)
  }, [u, _]);
  let C = (0, E.e7)([D.Z], () => D.Z.getGuild(null == m ? void 0 : m.guildId)),
    h = c ? m : void 0;
  return (0, o.jsx)(eu, {
    applicationStatistics: p,
    application: _ ? I : h,
    guild: C,
    stickerPack: null,
    paymentSources: f,
    locale: a,
    compactMode: i,
    className: l,
    payment: s
  })
}
et(eu, "defaultProps", {
  compactMode: !1
})
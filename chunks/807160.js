t.d(s, {
  Z: function() {
    return eE
  }
}), t(47120), t(653041), t(789020);
var n, a, i, l = t(735250),
  r = t(470079),
  o = t(120356),
  c = t.n(o),
  u = t(512722),
  d = t.n(u),
  E = t(913527),
  _ = t.n(E),
  p = t(91192),
  I = t(314877),
  m = t(442837),
  N = t(481060),
  C = t(37234),
  h = t(782568),
  P = t(812206),
  T = t(593061),
  A = t(267101),
  R = t(240864),
  S = t(942833),
  M = t(400916),
  f = t(916001),
  g = t(539290),
  L = t(336197),
  x = t(307643),
  O = t(378233),
  D = t(419922),
  y = t(46141),
  U = t(430824),
  Z = t(853872),
  v = t(509545),
  B = t(230307),
  j = t(285952),
  b = t(366695),
  G = t(499150),
  k = t(912454),
  w = t(259580),
  Y = t(572004),
  F = t(55935),
  H = t(630388),
  W = t(74538),
  V = t(937615),
  z = t(244526),
  K = t(712358),
  X = t(362786),
  q = t(981631),
  Q = t(474936),
  J = t(231338),
  $ = t(689938),
  ee = t(69630);

function es(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let et = e => "https://".concat(q.xr4, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000118612"),
  en = [q.epS.DURABLE_PRIMARY, q.epS.DURABLE, q.epS.CONSUMABLE];
(i = n || (n = {})).PURCHASE_DATE = "PURCHASE_DATE", i.SKU_TYPE = "SKU_TYPE", i.ALREADY_REFUNDED = "ALREADY_REFUNDED", i.PAYMENT_STATUS = "PAYMENT_STATUS", i.PAYMENT_GATEWAY = "PAYMENT_GATEWAY", i.SKU_STICKER_PACK = "SKU_STICKER_PACK", i.SUBSCRIPTION_TYPE = "SUBSCRIPTION_TYPE", i.GUILD_PRODUCT = "GUILD_PRODUCT";
let ea = [q.PyE.FAILED, q.PyE.REVERSED, q.PyE.CANCELED],
  ei = [J.gg.APPLE],
  el = e => {
    let {
      description: s,
      cost: t
    } = e;
    return (0, l.jsx)("li", {
      className: ee.paymentDetail,
      children: (0, l.jsxs)(j.Z, {
        justify: j.Z.Justify.BETWEEN,
        children: [(0, l.jsx)("div", {
          children: s
        }), (0, l.jsx)("div", {
          children: t
        })]
      })
    })
  };

function er(e) {
  let {
    value: s,
    copyText: t,
    copyFeedbackText: n
  } = e, [a, i] = r.useState(!1), [o, c] = r.useState(!1), u = () => {
    (0, Y.JG)(s), c(!0), i(!0)
  };
  return (0, l.jsx)(N.Tooltip, {
    forceOpen: o,
    text: a ? n : t,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n,
        ...r
      } = e;
      return (0, l.jsx)(N.Clickable, {
        ...r,
        onMouseEnter: () => {
          a && i(!1), "function" == typeof t && t()
        },
        onMouseLeave: () => {
          c(!1), "function" == typeof n && n()
        },
        onClick: u,
        children: (0, l.jsx)("div", {
          className: ee.copiableContainer,
          children: s
        })
      })
    }
  })
}
let eo = e => {
  let {
    description: s,
    detail: t
  } = e;
  return (0, l.jsx)("li", {
    className: ee.guildProductDetail,
    children: (0, l.jsxs)(j.Z, {
      justify: j.Z.Justify.BETWEEN,
      children: [(0, l.jsx)("div", {
        children: s
      }), (0, l.jsx)("div", {
        children: t
      })]
    })
  })
};

function ec(e) {
  let {
    guildId: s,
    guildProductListingId: t
  } = e, n = (0, A.hO)(s, t, {
    requireCurrentGuild: !1
  }), a = (0, S.C)(n), i = (0, m.e7)([U.Z], () => U.Z.getGuild(s)), o = (null == n ? void 0 : n.role_id) != null && (null == n ? void 0 : n.attachments_count) === 0 ? $.Z.Messages.GUILD_PRODUCT_BILLING_TYPE_PREMIUM_ROLE : a, c = r.useCallback(async () => {
    (null == i ? void 0 : i.hasFeature(q.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0 ? await (0, L.Z)(q.Z5c.GUILD_PRODUCT(s, t)) : await (0, L.Z)(q.Z5c.CHANNEL(s)), (0, C.xf)()
  }, [i, s, t]);
  return (0, l.jsxs)(l.Fragment, {
    children: [null != o && (0, l.jsx)(eo, {
      description: $.Z.Messages.GUILD_PRODUCT_BILLING_PRODUCT_TYPE,
      detail: o
    }), null != i && (0, l.jsx)(eo, {
      description: $.Z.Messages.GUILD_PRODUCT_BILLING_SERVER_NAME,
      detail: (0, l.jsx)(G.Z, {
        onClick: c,
        children: i.name
      })
    })]
  })
}

function eu(e) {
  var s, t;
  let {
    guildId: n,
    guildProductListingId: a
  } = e, i = (0, A.hO)(n, a, {
    requireCurrentGuild: !1
  }), r = (0, m.e7)([R.Z], () => R.Z.getGuildProductFetchState(a) === R.M.FETCHING), o = null == i ? void 0 : i.role_id, c = (0, m.e7)([U.Z], () => null != o ? U.Z.getRole(n, o) : void 0, [n, o]), u = (null !== (t = null == i ? void 0 : null === (s = i.attachments) || void 0 === s ? void 0 : s.length) && void 0 !== t ? t : 0) > 0, d = null != c;
  return r ? (0, l.jsx)("div", {
    className: ee.guildProductBenefits,
    children: (0, l.jsx)(N.Spinner, {})
  }) : null != i && (u || d) ? (0, l.jsxs)("div", {
    className: ee.guildProductBenefits,
    children: [u && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(N.Text, {
        variant: "text-xs/semibold",
        color: "header-secondary",
        className: ee.guildProductBenefitLabel,
        children: $.Z.Messages.GUILD_PRODUCT_BILLING_ACCESS_DOWNLOADABLES
      }), (0, l.jsx)(M.Z, {
        guildId: n,
        productId: i.id
      })]
    }), d && (0, l.jsxs)(l.Fragment, {
      children: [u && (0, l.jsx)("div", {
        className: ee.divider
      }), (0, l.jsx)(N.Text, {
        variant: "text-xs/semibold",
        color: "header-secondary",
        className: ee.guildProductBenefitLabel,
        children: $.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_ROLE_UNLOCKED
      }), (0, l.jsx)(f.Z, {
        role: c
      })]
    })]
  }) : null
}
class ed extends(a = r.PureComponent) {
  get daysSincePurchase() {
    let {
      payment: e
    } = this.props, s = null != e.sku ? e.sku.releaseDate : null, t = null != s && s.isAfter(e.createdAt) ? s : e.createdAt;
    return _()().diff(t, "days")
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
    return e instanceof y.qo ? k.ZP.Types.PAYPAL : e instanceof y.dm ? k.ZP.getType(e.brand) : k.ZP.Types.UNKNOWN
  }
  validateRefundRules() {
    return this.refundRules.filter(e => {
      let {
        canRefund: s
      } = e;
      return !s()
    }).map(e => {
      let {
        rule: s
      } = e;
      return s
    })
  }
  renderStatus() {
    let {
      payment: e
    } = this.props;
    switch (e.status) {
      case q.PyE.PENDING:
        return (0, l.jsx)("span", {
          className: ee.statusTagGrey,
          children: $.Z.Messages.BILLING_TAG_PENDING
        });
      case q.PyE.FAILED:
        return (0, l.jsx)("span", {
          className: ee.statusTagRed,
          children: $.Z.Messages.BILLING_TAG_FAILED
        });
      case q.PyE.REFUNDED:
        if (e.amountRefunded !== e.amount) return (0, l.jsx)("span", {
          className: ee.statusTagGreen,
          children: $.Z.Messages.BILLING_TAG_PARTIALLY_REFUNDED
        });
        return (0, l.jsx)("span", {
          className: ee.statusTagGreen,
          children: $.Z.Messages.BILLING_TAG_REFUNDED
        });
      case q.PyE.REVERSED:
        return (0, l.jsx)("span", {
          className: ee.statusTagRed,
          children: $.Z.Messages.BILLING_TAG_REVERSED
        });
      case q.PyE.CANCELED:
        return (0, l.jsx)("span", {
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
    } = this.props, s = e.amount - e.amountRefunded;
    return (0, l.jsx)("span", {
      className: ee.price,
      children: (0, V.T4)(s, e.currency)
    })
  }
  renderPaymentIdField() {
    let {
      payment: e
    } = this.props;
    return (0, l.jsx)("li", {
      className: ee.paymentDetail,
      children: (0, l.jsxs)("div", {
        className: ee.paymentInfo,
        children: [(0, l.jsx)("div", {
          children: $.Z.Messages.BILLING_PAYMENT_ID
        }), (0, l.jsx)(er, {
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
      locale: s,
      application: t
    } = this.props, {
      taxInclusive: n,
      tax: a,
      amount: i,
      amountRefunded: o,
      currency: u
    } = e, d = null == t ? void 0 : t.guildId;
    return (0, l.jsxs)("div", {
      className: c()(ee.paymentText, ee.paymentBreakdown),
      children: [null != e.paymentSource ? (0, l.jsx)(z.Z, {
        paymentSource: e.paymentSource,
        locale: s,
        descriptionClassName: ee.paymentText,
        showLabels: !0,
        showPaymentSourceIcon: !0
      }) : e.paymentGateway === J.gg.APPLE_PARTNER ? (0, l.jsx)(z.Z, {
        paymentSource: new y.$z({}),
        locale: s,
        descriptionClassName: ee.paymentText,
        showLabels: !0,
        showPaymentSourceIcon: !0
      }) : null, (0, l.jsxs)("ul", {
        children: [this.renderPaymentIdField(), !n && a > 0 ? (0, l.jsxs)(r.Fragment, {
          children: [(0, l.jsx)(el, {
            description: e.description,
            cost: (0, V.T4)(i - a, u)
          }), (0, l.jsx)(el, {
            description: $.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TAXES,
            cost: (0, V.T4)(a, u)
          })]
        }) : null, (0, l.jsx)(el, {
          description: $.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
          cost: (0, V.T4)(i, u)
        }), e.isGuildProductPurchase && null != d && null != e.sku && (0, l.jsx)(ec, {
          guildId: d,
          guildProductListingId: e.sku.id
        }), o > 0 && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(el, {
            description: $.Z.Messages.BILLING_PAYMENT_BREAKDOWN_REFUNDED,
            cost: (0, V.T4)(o, u)
          }), (0, l.jsx)(el, {
            description: $.Z.Messages.BILLING_PAYMENT_BREAKDOWN_NET,
            cost: (0, V.T4)(i - o, u)
          })]
        })]
      })]
    })
  }
  renderInvoiceDownload() {
    let {
      payment: e
    } = this.props;
    return (0, l.jsx)(T.Z, {
      payment: e
    })
  }
  renderRefundDetails() {
    let e;
    let {
      locale: s,
      payment: t
    } = this.props, n = this.validateRefundRules();
    if (n.includes("PAYMENT_GATEWAY") || n.includes("PAYMENT_STATUS") || n.includes("ALREADY_REFUNDED") || n.includes("SKU_STICKER_PACK") || n.includes("SUBSCRIPTION_TYPE") || n.includes("GUILD_PRODUCT")) return null;
    let a = 0 === n.length,
      i = et(s),
      o = this.isPremium ? 5 : 14;
    return e = n.includes("SKU_TYPE") ? $.Z.Messages.BILLING_APPLICATION_CONSUMABLE_REFUND_TEXT_UNABLE.format({
      supportURL: i
    }) : a ? t.isPremiumSubscription || t.isPremiumGuildSubscription ? $.Z.Messages.BILLING_PREMIUM_REFUND_TEXT.format({
      dateLimit: o,
      supportURL: i
    }) : t.isGift ? $.Z.Messages.BILLING_GIFT_REFUND_TEXT.format({
      dateLimit: o,
      supportURL: i
    }) : $.Z.Messages.BILLING_APPLICATION_REFUND_TEXT.format({
      dateLimit: o,
      playtimeLimit: 2,
      supportURL: i
    }) : t.isGift ? $.Z.Messages.BILLING_GIFT_REFUND_TEXT_UNABLE.format({
      dateLimit: o
    }) : t.isPremiumSubscription || t.isPremiumGuildSubscription ? $.Z.Messages.BILLING_PREMIUM_REFUND_TEXT_UNABLE.format({
      dateLimit: o
    }) : t.isCollectible ? $.Z.Messages.BILLING_COLLECTIBLES_REFUND_TEXT_UNABLE : $.Z.Messages.BILLING_APPLICATION_REFUND_TEXT_UNABLE.format({
      dateLimit: o,
      playtimeLimit: 2
    }), this.isPremium && (0, K.U)() && (e = null), (0, l.jsxs)(r.Fragment, {
      children: [(0, l.jsx)(N.H, {
        className: ee.paymentHeader,
        children: $.Z.Messages.BILLING_REFUND_HEADER
      }), (0, l.jsxs)("div", {
        className: ee.paymentText,
        children: [(0, l.jsx)("div", {
          children: e
        }), this.renderRefundActions(n)]
      })]
    })
  }
  renderRefundCriteria(e, s, t, n) {
    return (0, l.jsxs)("div", {
      className: ee.refundCriteria,
      children: [(0, l.jsx)(N.H, {
        className: ee.refundSubHeader,
        children: e
      }), (0, l.jsxs)("div", {
        className: ee.refundIconContainer,
        children: [(0, l.jsx)(s, {
          className: ee.refundCriteriaIcon,
          color: "currentColor"
        }), null != t && (0, l.jsx)("div", {
          children: t
        })]
      })]
    }, n)
  }
  renderRefundActions(e) {
    var s;
    let {
      locale: n,
      payment: a
    } = this.props;
    if (e.includes("SKU_TYPE")) return null;
    let i = e.includes("PURCHASE_DATE") ? N.CloseSmallIcon : N.CheckmarkLargeIcon;
    if (!this.isPremium || !(0, K.U)()) return (0, l.jsxs)("div", {
      className: ee.refundActions,
      children: [(0, l.jsx)("div", {
        className: ee.refundRules,
        children: !a.isCollectible && this.renderRefundCriteria($.Z.Messages.BILLING_REFUND_PURCHASE_DATE_SUBHEADER, i, $.Z.Messages.BILLING_REFUND_PURCHASE_DATE.format({
          daysSincePurchase: this.daysSincePurchase
        }))
      }), (0, l.jsx)(N.Anchor, {
        href: et(n),
        children: $.Z.Messages.BILLING_REFUND_REPORT_A_PROBLEM
      })]
    });
    let r = (null !== (s = a.premiumRefundDisqualificationReasons) && void 0 !== s ? s : [X.d$.OTHER])[0],
      o = null != r || 0 !== e.length || a.isPurchasedExternally;
    return (0, l.jsxs)("div", {
      className: ee.refundActions,
      children: [(0, l.jsx)(N.Tooltip, {
        shouldShow: o,
        text: function(e) {
          switch (e) {
            case X.d$.ALREADY_REFUNDED_PREMIUM:
              return $.Z.Messages.BILLING_REFUND_ALREADY_REFUNDED_PREMIUM_REASON;
            case X.d$.ALREADY_REFUNDED_PREMIUM_GUILD:
              return $.Z.Messages.BILLING_REFUND_ALREADY_REFUNDED_PREMIUM_GUILD_REASON;
            case X.d$.ENTITLEMENT_ALREADY_CONSUMED:
              return $.Z.Messages.BILLING_REFUND_ALREADY_CONSUMED_REASON;
            default:
              return $.Z.Messages.BILLING_REFUND_GENERIC_REASON
          }
        }(r),
        children: e => (0, l.jsx)(N.Button, {
          ...e,
          color: N.Button.Colors.PRIMARY,
          disabled: o,
          onClick: () => (0, N.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([t.e("99387"), t.e("69473")]).then(t.bind(t, 436022));
            return s => (0, l.jsx)(e, {
              payment: a,
              reportProblemUrl: et(n),
              ...s
            })
          }),
          children: $.Z.Messages.BILLING_REFUND_BUTTON_TEXT
        })
      }), (0, l.jsx)(N.Anchor, {
        href: et(n),
        children: $.Z.Messages.BILLING_REFUND_REPORT_A_PROBLEM
      })]
    })
  }
  renderDescription() {
    let e, s;
    let {
      compactMode: t,
      payment: n,
      application: a,
      guild: i,
      stickerPack: o
    } = this.props, {
      expanded: c
    } = this.state, u = n.sku, E = n.subscription, p = null != n.paymentSource && q.Uk1.has(n.paymentSource.type);
    if (null != E && 0 !== E.items.length) {
      let t = [],
        n = null;
      if (E.type === q.NYc.PREMIUM) E.items.forEach(e => {
        let {
          planId: s,
          quantity: a
        } = e;
        (0, W.uZ)(s) ? (t.push(W.ZP.getDisplayName(s, !1, p)), n = (0, W.Wz)(Q.GP[s].skuId)) : (t.push("".concat(a > 1 ? "".concat(a, "x ") : "").concat(W.ZP.getDisplayName(s, !1, p))), null == n && (n = (0, W.Wz)(Q.GP[s].skuId)))
      });
      else if (E.type === q.NYc.GUILD) {
        let e = v.Z.get(E.items[0].planId);
        d()(null != e, "Guild subscription plan should already have been loaded");
        let s = e.interval === Q.rV.YEAR ? $.Z.Messages.YEARLY_GUILD_SUBSCRIPTION : $.Z.Messages.MONTHLY_GUILD_SUBSCRIPTION;
        t.push(s.format({
          planName: e.name
        })), n = e.skuId
      } else if (E.type === q.NYc.APPLICATION) {
        let e = v.Z.get(E.items[0].planId);
        d()(null != e, "Application subscription plan should already have been loaded"), null != a ? t.push($.Z.Messages.MONTHLY_APPLICATION_SUBSCRIPTION_V2.format({
          tier: null == u ? void 0 : u.name
        })) : t.push($.Z.Messages.APPLICATION_SUBSCRIPTION_FROM_DELETED_APPLICATION), n = e.skuId
      }
      s = t.join(", "), e = (0, l.jsx)(b.Z, {
        className: ee.descriptionIcon,
        guildClassName: ee.guildDescriptionIcon,
        game: a,
        guild: i,
        size: b.Z.Sizes.XSMALL,
        skuId: n
      })
    } else if (null != u) {
      var I;
      if (s = n.isGuildProductPurchase && n.isSoftDeletedProduct ? $.Z.Messages.GUILD_PRODUCT_BILLING_DELISTED_PRODUCT : u.name, null != o) {
        let s = (0, O.Zt)(o);
        e = (0, l.jsx)(D.ZP, {
          disableAnimation: !c,
          isInteracting: c,
          sticker: s,
          className: ee.descriptionIcon,
          size: 24
        })
      } else e = (null === (I = n.sku) || void 0 === I ? void 0 : I.productLine) === q.POd.COLLECTIBLES ? (0, l.jsx)(N.ShopIcon, {
        size: "custom",
        width: 23,
        height: 23,
        color: "currentColor",
        className: ee.shopIcon
      }) : (0, l.jsx)(b.Z, {
        className: ee.descriptionIcon,
        guildClassName: ee.guildDescriptionIcon,
        game: a,
        guild: i,
        size: b.Z.Sizes.XSMALL,
        skuId: u.id
      })
    } else e = (0, l.jsx)(N.NitroWheelIcon, {
      size: "md",
      color: "currentColor",
      className: ee.descriptionIcon
    }), s = n.description;
    let m = (0, l.jsx)("div", {
        className: ee.date,
        children: (0, F.vc)(_()(n.createdAt), "MM/DD/YYYY")
      }),
      C = n.isGift ? (0, l.jsx)(N.Tooltip, {
        text: $.Z.Messages.BILLING_GIFT_PURCHASE_TOOLTIP,
        children: e => (0, l.jsx)(N.GiftIcon, {
          size: "md",
          color: "currentColor",
          className: ee.giftIcon,
          ...e
        })
      }) : null;
    return t ? (0, l.jsxs)("div", {
      className: ee.description,
      children: [e, (0, l.jsxs)("div", {
        children: [s, m]
      }), C]
    }) : (0, l.jsxs)(r.Fragment, {
      children: [m, (0, l.jsxs)("div", {
        className: ee.description,
        children: [e, (0, l.jsx)("div", {
          children: s
        }), C]
      })]
    })
  }
  renderGuildProductBenefits() {
    let {
      payment: e,
      application: s,
      locale: t
    } = this.props, n = null == s ? void 0 : s.guildId;
    return e.isGuildProductPurchase ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: ee.sectionDivider
      }), e.isSoftDeletedProduct ? (0, l.jsx)(g.Z, {
        className: ee.warningBlock,
        buttonPosition: g.E.RIGHT,
        notice: $.Z.Messages.GUILD_PRODUCT_BILLING_PRODUCT_UNAVAILABLE,
        ctaLabel: $.Z.Messages.GUILD_PRODUCT_BILLING_CONTACT_SUPPORT,
        onClick: () => (0, h.Z)(et(t))
      }) : null != n && null != e.sku && (0, l.jsx)(eu, {
        guildId: n,
        guildProductListingId: e.sku.id
      })]
    }) : null
  }
  renderExpandedSection() {
    return (0, l.jsx)(N.Clickable, {
      onClick: e => e.stopPropagation(),
      children: (0, l.jsxs)("div", {
        className: ee.expandedInfo,
        children: [(0, l.jsx)(N.H, {
          className: ee.paymentHeader,
          children: $.Z.Messages.BILLING_PURCHASE_DETAILS_HEADER
        }), this.renderPaymentBreakdown(), this.renderGuildProductBenefits(), this.renderInvoiceDownload(), this.renderRefundDetails()]
      })
    })
  }
  render() {
    let {
      payment: e,
      className: s,
      compactMode: t
    } = this.props, {
      expanded: n
    } = this.state;
    return (0, l.jsx)(p.mh, {
      id: e.id,
      children: e => (0, l.jsxs)(N.Clickable, {
        onClick: this.handleExpandInfo,
        className: c()(n ? ee.payment : ee.hoverablePayment, s, {
          [ee.compact]: t
        }),
        focusProps: {
          offset: 4
        },
        ...e,
        children: [(0, l.jsxs)(j.Z, {
          className: ee.summaryInfo,
          align: j.Z.Align.CENTER,
          children: [this.renderDescription(), (0, l.jsxs)("div", {
            className: ee.amount,
            children: [this.renderStatus(), this.renderPrice()]
          }), (0, l.jsx)(w.Z, {
            className: ee.expand,
            direction: n ? w.Z.Directions.UP : w.Z.Directions.DOWN
          })]
        }), n ? this.renderExpandedSection() : null]
      })
    })
  }
  constructor(...e) {
    super(...e), es(this, "state", {
      expanded: !1
    }), es(this, "refundRules", [{
      rule: "PURCHASE_DATE",
      canRefund: () => {
        let {
          payment: e
        } = this.props, s = e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift ? 5 : 14;
        return this.daysSincePurchase <= s
      }
    }, {
      rule: "SKU_TYPE",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.sku || e.sku.type !== q.epS.CONSUMABLE
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
        return null == e.sku || !(0, H.yE)(e.sku.flags, q.l4R.STICKER_PACK)
      }
    }, {
      rule: "SUBSCRIPTION_TYPE",
      canRefund: () => {
        var e, s;
        let {
          payment: t
        } = this.props;
        return (null === (e = t.subscription) || void 0 === e ? void 0 : e.type) !== q.NYc.GUILD && (null === (s = t.subscription) || void 0 === s ? void 0 : s.type) !== q.NYc.APPLICATION
      }
    }, {
      rule: "GUILD_PRODUCT",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.sku || !(0, H.yE)(e.sku.flags, I.l.GUILD_PRODUCT)
      }
    }]), es(this, "handleExpandInfo", () => {
      this.setState({
        expanded: !this.state.expanded
      })
    })
  }
}

function eE(e) {
  var s, t;
  let {
    payment: n,
    locale: a,
    compactMode: i,
    className: o
  } = e, c = null != n.sku && en.includes(n.sku.type), u = null != n.sku && c ? n.sku.applicationId : null, d = null === (s = n.sku) || void 0 === s ? void 0 : s.applicationId, E = (null === (t = n.subscription) || void 0 === t ? void 0 : t.type) === q.NYc.APPLICATION, {
    applicationStatistics: _,
    gameApplication: p,
    paymentSources: I
  } = (0, m.cj)([Z.Z, B.Z, P.Z], () => {
    var e, s;
    return {
      applicationStatistics: null != u ? B.Z.getCurrentUserStatisticsForApplication(u) : null,
      gameApplication: null !== (s = P.Z.getApplication(null != u ? u : "")) && void 0 !== s ? s : null === (e = n.sku) || void 0 === e ? void 0 : e.application,
      paymentSources: Z.Z.paymentSources
    }
  }), N = (0, m.e7)([P.Z], () => null != d ? P.Z.getApplication(d) : null);
  r.useEffect(() => {
    E && null != d && (0, x.UM)(d)
  }, [d, E]);
  let C = (0, m.e7)([U.Z], () => U.Z.getGuild(null == p ? void 0 : p.guildId)),
    h = c ? p : void 0;
  return (0, l.jsx)(ed, {
    applicationStatistics: _,
    application: E ? N : h,
    guild: C,
    stickerPack: null,
    paymentSources: I,
    locale: a,
    compactMode: i,
    className: o,
    payment: n
  })
}
es(ed, "defaultProps", {
  compactMode: !1
})
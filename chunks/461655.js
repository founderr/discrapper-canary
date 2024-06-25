n.d(t, {
  Z: function() {
    return m
  }
}), n(789020);
var s, a, i = n(314877),
  o = n(81825),
  r = n(630388),
  l = n(46141),
  c = n(659181),
  d = n(255078),
  u = n(981631),
  _ = n(474936);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(a = s || (s = {}))[a.GIFT = 1] = "GIFT", a[a.PREORDER = 8] = "PREORDER";
class m extends o.Z {
  static createFromServer(e) {
    let t = null != e.payment_source ? l.ZP.createFromServer(e.payment_source) : null,
      n = null != e.sku ? c.Z.createFromServer(e.sku) : null,
      s = null != e.subscription ? d.Z.createFromServer(e.subscription) : null;
    return new m({
      id: e.id,
      createdAt: new Date(e.created_at),
      currency: e.currency,
      tax: e.tax,
      taxInclusive: e.tax_inclusive,
      amount: e.amount,
      amountRefunded: e.amount_refunded,
      status: e.status,
      metadata: e.metadata,
      description: e.description,
      paymentSource: t,
      paymentGateway: e.payment_gateway,
      paymentGatewayPaymentId: e.payment_gateway_payment_id,
      flags: e.flags,
      subscription: s,
      skuId: e.sku_id,
      skuPrice: e.sku_price,
      sku: n,
      downloadableInvoice: e.downloadable_invoice,
      downloadableRefundInvoices: e.downloadable_refund_invoices,
      premiumRefundDisqualificationReasons: e.premium_refund_disqualification_reasons
    })
  }
  get isPurchasedViaApple() {
    return this.paymentGateway === u.gg$.APPLE
  }
  get isPurchasedViaGoogle() {
    return this.paymentGateway === u.gg$.GOOGLE
  }
  get isPurchasedExternally() {
    return this.isPurchasedViaApple || this.isPurchasedViaGoogle
  }
  get isSubscription() {
    return null != this.subscription
  }
  get isPremiumSubscription() {
    return null != this.subscription && _.dJ.has(this.subscription.planId)
  }
  get isPremiumGuildSubscription() {
    return null != this.subscription && null != this.subscription.additionalPlans.find(e => {
      let {
        planId: t
      } = e;
      return _.Z1.has(t)
    })
  }
  get isGift() {
    return r.yE(this.flags, 1)
  }
  get isPremiumGift() {
    return this.isGift && Object.values(_.Si).includes(this.skuId)
  }
  get isGuildProductPurchase() {
    return null != this.sku && (this.sku.productLine === u.POd.GUILD_PRODUCT || r.yE(this.sku.flags, i.l.GUILD_PRODUCT))
  }
  get isSoftDeletedProduct() {
    var e;
    return (null === (e = this.sku) || void 0 === e ? void 0 : e.deleted) === !0
  }
  get isCollectible() {
    return null != this.sku && this.sku.productLine === u.POd.COLLECTIBLES
  }
  constructor(e) {
    super(), p(this, "id", void 0), p(this, "createdAt", void 0), p(this, "currency", void 0), p(this, "tax", void 0), p(this, "taxInclusive", void 0), p(this, "amount", void 0), p(this, "amountRefunded", void 0), p(this, "status", void 0), p(this, "description", void 0), p(this, "downloadableInvoice", void 0), p(this, "downloadableRefundInvoices", void 0), p(this, "flags", void 0), p(this, "paymentSource", void 0), p(this, "paymentGateway", void 0), p(this, "paymentGatewayPaymentId", void 0), p(this, "subscription", void 0), p(this, "skuId", void 0), p(this, "skuPrice", void 0), p(this, "sku", void 0), p(this, "premiumRefundDisqualificationReasons", void 0), this.id = e.id, this.amount = e.amount, this.amountRefunded = e.amountRefunded, this.createdAt = e.createdAt, this.currency = e.currency, this.description = e.description, this.paymentSource = e.paymentSource, this.paymentGateway = e.paymentGateway, this.paymentGatewayPaymentId = e.paymentGatewayPaymentId, this.status = e.status, this.tax = e.tax, this.taxInclusive = e.taxInclusive, this.subscription = e.subscription, this.skuId = e.skuId, this.skuPrice = e.skuPrice, this.sku = e.sku, this.flags = e.flags, this.downloadableInvoice = e.downloadableInvoice, this.downloadableRefundInvoices = e.downloadableRefundInvoices, this.premiumRefundDisqualificationReasons = e.premiumRefundDisqualificationReasons
  }
}
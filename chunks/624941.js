var i,
    s = n(442837),
    r = n(570140);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class a extends (i = s.ZP.Store) {
    handleRedeemVirtualCurrencyStart(e) {
        let { skuId: t } = e;
        (this._entitlements = null), (this._redeemingSkuId = t), (this._redeemVirtualCurrencyError = null), (this._isRedeemingVirtualCurrency = !0);
    }
    handleRedeemVirtualCurrencySuccess(e) {
        let { entitlements: t } = e;
        (this._entitlements = t), (this._redeemingSkuId = null), (this._isRedeemingVirtualCurrency = !1);
    }
    handleRedeemVirtualCurrencyFail(e) {
        let { error: t } = e;
        (this._redeemVirtualCurrencyError = t), (this._redeemingSkuId = null), (this._isRedeemingVirtualCurrency = !1);
    }
    get error() {
        return this._redeemVirtualCurrencyError;
    }
    get isRedeeming() {
        return this._isRedeemingVirtualCurrency;
    }
    get redeemingSkuId() {
        return this._redeemingSkuId;
    }
    get entitlements() {
        return this._entitlements;
    }
    constructor() {
        super(r.Z, {
            VIRTUAL_CURRENCY_REDEEM_START: (e) => this.handleRedeemVirtualCurrencyStart(e),
            VIRTUAL_CURRENCY_REDEEM_SUCCESS: (e) => this.handleRedeemVirtualCurrencySuccess(e),
            VIRTUAL_CURRENCY_REDEEM_FAIL: (e) => this.handleRedeemVirtualCurrencyFail(e)
        }),
            l(this, '_entitlements', null),
            l(this, '_redeemingSkuId', null),
            l(this, '_isRedeemingVirtualCurrency', !1),
            l(this, '_redeemVirtualCurrencyError', null);
    }
}
l(a, 'displayName', 'VirtualCurrencyStore'), (t.Z = new a());

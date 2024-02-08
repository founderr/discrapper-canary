"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var i = n("872717"),
  s = n("913144"),
  l = n("651057"),
  r = n("299285"),
  a = n("523086"),
  u = n("21526"),
  o = n("659632"),
  d = n("49111"),
  c = n("646718"),
  E = {
    resolveGiftCode: async function e(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      s.default.dispatch({
        type: "GIFT_CODE_RESOLVE",
        code: e
      });
      try {
        let i = await (0, o.resolveGiftCode)(e, t, n);
        if (null != i.application_id && i.application_id !== c.PREMIUM_SUBSCRIPTION_APPLICATION) {
          let e = r.default.getApplication(i.application_id);
          if (null == e) try {
            await l.default.fetchApplication(i.application_id)
          } catch (e) {}
        }
        if (i.application_id === d.COLLECTIBLES_APPLICATION_ID) try {
          await (0, u.fetchCollectiblesProduct)(i.sku_id)
        } catch (e) {}
        return s.default.dispatch({
          type: "GIFT_CODE_RESOLVE_SUCCESS",
          giftCode: i
        }), {
          giftCode: i
        }
      } catch (t) {
        throw s.default.dispatch({
          type: "GIFT_CODE_RESOLVE_FAILURE",
          code: e,
          error: t
        }), t
      }
    },
    async fetchUserGiftCodesForSKU(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      s.default.dispatch({
        type: "GIFT_CODES_FETCH",
        skuId: e,
        subscriptionPlanId: t
      });
      try {
        let n = await i.default.get({
          url: d.Endpoints.USER_GIFT_CODES,
          query: {
            sku_id: e,
            subscription_plan_id: t
          },
          oldFormErrors: !0
        });
        s.default.dispatch({
          type: "GIFT_CODES_FETCH_SUCCESS",
          giftCodes: n.body,
          skuId: e,
          subscriptionPlanId: t
        })
      } catch (n) {
        s.default.dispatch({
          type: "GIFT_CODES_FETCH_FAILURE",
          skuId: e,
          subscriptionPlanId: t
        })
      }
    },
    async createGiftCode(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      s.default.dispatch({
        type: "GIFT_CODE_CREATE_START",
        skuId: e,
        subscriptionPlanId: t
      });
      try {
        let l = await i.default.post({
          url: d.Endpoints.USER_GIFT_CODE_CREATE,
          body: {
            sku_id: e,
            subscription_plan_id: t,
            gift_style: n
          },
          oldFormErrors: !0
        });
        return s.default.dispatch({
          type: "GIFT_CODE_CREATE_SUCCESS",
          giftCode: l.body
        }), l.body
      } catch (n) {
        s.default.dispatch({
          type: "GIFT_CODE_CREATE_FAILURE",
          skuId: e,
          subscriptionPlanId: t
        })
      }
    },
    async revokeGiftCode(e) {
      s.default.dispatch({
        type: "GIFT_CODE_REVOKE",
        code: e
      });
      try {
        await i.default.delete({
          url: d.Endpoints.USER_GIFT_CODE_REVOKE(e),
          oldFormErrors: !0
        }), s.default.dispatch({
          type: "GIFT_CODE_REVOKE_SUCCESS",
          code: e
        })
      } catch (t) {
        s.default.dispatch({
          type: "GIFT_CODE_REVOKE_FAILURE",
          code: e
        })
      }
    },
    openNativeGiftCodeModal(e) {
      a.default.openNativeAppModal(e, d.RPCCommands.GIFT_CODE_BROWSER)
    },
    ...n("812495").default
  }
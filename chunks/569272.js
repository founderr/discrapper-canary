"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("872717"),
  i = n("913144"),
  s = n("651057"),
  r = n("299285"),
  u = n("523086"),
  a = n("21526"),
  d = n("659632"),
  o = n("49111"),
  c = n("646718"),
  E = {
    resolveGiftCode: async function e(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      i.default.dispatch({
        type: "GIFT_CODE_RESOLVE",
        code: e
      });
      try {
        let l = await (0, d.resolveGiftCode)(e, t, n);
        if (null != l.application_id && l.application_id !== c.PREMIUM_SUBSCRIPTION_APPLICATION) {
          let e = r.default.getApplication(l.application_id);
          if (null == e) try {
            await s.default.fetchApplication(l.application_id)
          } catch (e) {}
        }
        if (l.application_id === o.COLLECTIBLES_APPLICATION_ID) try {
          await (0, a.fetchCollectiblesProduct)(l.sku_id)
        } catch (e) {}
        return i.default.dispatch({
          type: "GIFT_CODE_RESOLVE_SUCCESS",
          giftCode: l
        }), {
          giftCode: l
        }
      } catch (t) {
        throw i.default.dispatch({
          type: "GIFT_CODE_RESOLVE_FAILURE",
          code: e,
          error: t
        }), t
      }
    },
    async fetchUserGiftCodesForSKU(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      i.default.dispatch({
        type: "GIFT_CODES_FETCH",
        skuId: e,
        subscriptionPlanId: t
      });
      try {
        let n = await l.default.get({
          url: o.Endpoints.USER_GIFT_CODES,
          query: {
            sku_id: e,
            subscription_plan_id: t
          },
          oldFormErrors: !0
        });
        i.default.dispatch({
          type: "GIFT_CODES_FETCH_SUCCESS",
          giftCodes: n.body,
          skuId: e,
          subscriptionPlanId: t
        })
      } catch (n) {
        i.default.dispatch({
          type: "GIFT_CODES_FETCH_FAILURE",
          skuId: e,
          subscriptionPlanId: t
        })
      }
    },
    async createGiftCode(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      i.default.dispatch({
        type: "GIFT_CODE_CREATE_START",
        skuId: e,
        subscriptionPlanId: t
      });
      try {
        let s = await l.default.post({
          url: o.Endpoints.USER_GIFT_CODE_CREATE,
          body: {
            sku_id: e,
            subscription_plan_id: t,
            gift_style: n
          },
          oldFormErrors: !0
        });
        return i.default.dispatch({
          type: "GIFT_CODE_CREATE_SUCCESS",
          giftCode: s.body
        }), s.body
      } catch (n) {
        i.default.dispatch({
          type: "GIFT_CODE_CREATE_FAILURE",
          skuId: e,
          subscriptionPlanId: t
        })
      }
    },
    async revokeGiftCode(e) {
      i.default.dispatch({
        type: "GIFT_CODE_REVOKE",
        code: e
      });
      try {
        await l.default.delete({
          url: o.Endpoints.USER_GIFT_CODE_REVOKE(e),
          oldFormErrors: !0
        }), i.default.dispatch({
          type: "GIFT_CODE_REVOKE_SUCCESS",
          code: e
        })
      } catch (t) {
        i.default.dispatch({
          type: "GIFT_CODE_REVOKE_FAILURE",
          code: e
        })
      }
    },
    openNativeGiftCodeModal(e) {
      u.default.openNativeAppModal(e, o.RPCCommands.GIFT_CODE_BROWSER)
    },
    ...n("812495").default
  }
"use strict";
n.r(t), n.d(t, {
  fetchUserProfileEffects: function() {
    return a
  }
});
var s = n("872717"),
  l = n("913144"),
  i = n("448993");
n("845962");
var r = n("49111");
let o = e => {
    let {
      sku_id: t,
      ...n
    } = e;
    return {
      id: n.id,
      skuId: t,
      config: {
        ...n,
        skuId: t
      }
    }
  },
  a = async () => {
    l.default.dispatch({
      type: "USER_PROFILE_EFFECTS_FETCH"
    });
    try {
      let {
        body: e
      } = await s.default.get(r.Endpoints.USER_PROFILE_EFFECTS), t = null == e ? void 0 : e.profile_effect_configs, n = t.map(o);
      l.default.dispatch({
        type: "USER_PROFILE_EFFECTS_FETCH_SUCCESS",
        profileEffects: n
      })
    } catch (e) {
      throw l.default.dispatch({
        type: "USER_PROFILE_EFFECTS_FETCH_FAILURE",
        error: e
      }), new i.APIError(e)
    }
  }
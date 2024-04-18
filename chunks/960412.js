"use strict";
a.r(t), a.d(t, {
  fetchEmailSettings: function() {
    return u
  },
  updateEmailSetting: function() {
    return d
  },
  updateMarketingEmailSettings: function() {
    return c
  }
}), a("724458");
var n = a("990547"),
  s = a("283693"),
  l = a("570140"),
  i = a("573261"),
  r = a("930441"),
  o = a("981631");
async function u() {
  try {
    let e = await i.default.get({
      url: o.Endpoints.EMAIL_SETTINGS,
      trackedActionData: {
        event: n.NetworkActionNames.EMAIL_SETTINGS_FETCH,
        properties: e => {
          var t;
          let a = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.initialized;
          return (0, s.exact)({
            initialized: a
          })
        }
      }
    });
    l.default.dispatch({
      type: "EMAIL_SETTINGS_FETCH_SUCCESS",
      settings: e.body
    })
  } catch {
    l.default.dispatch({
      type: "EMAIL_SETTINGS_FETCH_FAILURE"
    })
  }
}
async function d(e, t) {
  l.default.dispatch({
    type: "EMAIL_SETTINGS_UPDATE",
    updates: {
      [e]: t
    }
  });
  try {
    let a = await i.default.patch({
      url: o.Endpoints.EMAIL_SETTINGS,
      body: {
        settings: {
          categories: {
            [e]: t
          }
        }
      },
      trackedActionData: {
        event: n.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
        properties: {
          category: e,
          value: t
        }
      }
    });
    l.default.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_SUCCESS",
      settings: a.body
    })
  } catch (e) {
    l.default.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_FAILURE"
    })
  }
}
async function c() {
  let e = r.MarketingEmailCategories.reduce((e, t) => ({
    ...e,
    [t]: !1
  }), {});
  l.default.dispatch({
    type: "EMAIL_SETTINGS_UPDATE",
    updates: e
  });
  try {
    let t = await i.default.patch({
      url: o.Endpoints.EMAIL_SETTINGS,
      body: {
        settings: {
          categories: e
        }
      },
      trackedActionData: {
        event: n.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
        properties: {
          category: "marketing",
          value: !1
        }
      }
    });
    l.default.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_SUCCESS",
      settings: t.body
    })
  } catch (e) {
    l.default.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_FAILURE"
    })
  }
}
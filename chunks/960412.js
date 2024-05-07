"use strict";
n.r(t), n.d(t, {
  fetchEmailSettings: function() {
    return u
  },
  updateEmailSetting: function() {
    return d
  },
  updateMarketingEmailSettings: function() {
    return c
  }
}), n("724458");
var a = n("990547"),
  s = n("283693"),
  i = n("570140"),
  l = n("573261"),
  r = n("930441"),
  o = n("981631");
async function u() {
  try {
    let e = await l.default.get({
      url: o.Endpoints.EMAIL_SETTINGS,
      trackedActionData: {
        event: a.NetworkActionNames.EMAIL_SETTINGS_FETCH,
        properties: e => {
          var t;
          let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.initialized;
          return (0, s.exact)({
            initialized: n
          })
        }
      }
    });
    i.default.dispatch({
      type: "EMAIL_SETTINGS_FETCH_SUCCESS",
      settings: e.body
    })
  } catch {
    i.default.dispatch({
      type: "EMAIL_SETTINGS_FETCH_FAILURE"
    })
  }
}
async function d(e, t) {
  i.default.dispatch({
    type: "EMAIL_SETTINGS_UPDATE",
    updates: {
      [e]: t
    }
  });
  try {
    let n = await l.default.patch({
      url: o.Endpoints.EMAIL_SETTINGS,
      body: {
        settings: {
          categories: {
            [e]: t
          }
        }
      },
      trackedActionData: {
        event: a.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
        properties: {
          category: e,
          value: t
        }
      }
    });
    i.default.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_SUCCESS",
      settings: n.body
    })
  } catch (e) {
    i.default.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_FAILURE"
    })
  }
}
async function c() {
  let e = r.MarketingEmailCategories.reduce((e, t) => ({
    ...e,
    [t]: !1
  }), {});
  i.default.dispatch({
    type: "EMAIL_SETTINGS_UPDATE",
    updates: e
  });
  try {
    let t = await l.default.patch({
      url: o.Endpoints.EMAIL_SETTINGS,
      body: {
        settings: {
          categories: e
        }
      },
      trackedActionData: {
        event: a.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
        properties: {
          category: "marketing",
          value: !1
        }
      }
    });
    i.default.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_SUCCESS",
      settings: t.body
    })
  } catch (e) {
    i.default.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_FAILURE"
    })
  }
}
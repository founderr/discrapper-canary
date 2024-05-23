"use strict";
n.r(t), n.d(t, {
  fetchEmailSettings: function() {
    return u
  },
  updateEmailSetting: function() {
    return d
  },
  updateMarketingEmailSettings: function() {
    return _
  }
}), n("724458");
var i = n("990547"),
  r = n("283693"),
  s = n("570140"),
  a = n("573261"),
  o = n("930441"),
  l = n("981631");
async function u() {
  try {
    let e = await a.default.get({
      url: l.Endpoints.EMAIL_SETTINGS,
      trackedActionData: {
        event: i.NetworkActionNames.EMAIL_SETTINGS_FETCH,
        properties: e => {
          var t;
          let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.initialized;
          return (0, r.exact)({
            initialized: n
          })
        }
      }
    });
    return s.default.dispatch({
      type: "EMAIL_SETTINGS_FETCH_SUCCESS",
      settings: e.body
    }), e.body
  } catch {
    s.default.dispatch({
      type: "EMAIL_SETTINGS_FETCH_FAILURE"
    })
  }
}
async function d(e, t) {
  s.default.dispatch({
    type: "EMAIL_SETTINGS_UPDATE",
    updates: {
      [e]: t
    }
  });
  try {
    let n = await a.default.patch({
      url: l.Endpoints.EMAIL_SETTINGS,
      body: {
        settings: {
          categories: {
            [e]: t
          }
        }
      },
      trackedActionData: {
        event: i.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
        properties: {
          category: e,
          value: t
        }
      }
    });
    s.default.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_SUCCESS",
      settings: n.body
    })
  } catch (e) {
    s.default.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_FAILURE"
    })
  }
}
async function _() {
  let e = o.MarketingEmailCategories.reduce((e, t) => ({
    ...e,
    [t]: !1
  }), {});
  s.default.dispatch({
    type: "EMAIL_SETTINGS_UPDATE",
    updates: e
  });
  try {
    let t = await a.default.patch({
      url: l.Endpoints.EMAIL_SETTINGS,
      body: {
        settings: {
          categories: e
        }
      },
      trackedActionData: {
        event: i.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
        properties: {
          category: "marketing",
          value: !1
        }
      }
    });
    s.default.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_SUCCESS",
      settings: t.body
    })
  } catch (e) {
    s.default.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_FAILURE"
    })
  }
}
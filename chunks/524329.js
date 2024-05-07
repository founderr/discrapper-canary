"use strict";
s.r(t), s.d(t, {
  clearWelcomeScreenSettings: function() {
    return r
  },
  fetchWelcomeScreen: function() {
    return l
  },
  resetWelcomeScreen: function() {
    return _
  },
  saveWelcomeScreen: function() {
    return o
  },
  updateSettings: function() {
    return u
  },
  welcomeScreenViewed: function() {
    return E
  }
});
var a = s("544891"),
  n = s("570140"),
  i = s("981631");
let E = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    n.default.dispatch({
      type: "WELCOME_SCREEN_VIEW",
      guildId: e,
      isLurking: t
    })
  },
  l = async e => {
    n.default.dispatch({
      type: "WELCOME_SCREEN_FETCH_START"
    });
    try {
      let t = await a.HTTP.get({
        url: i.Endpoints.GUILD_WELCOME_SCREEN(e),
        oldFormErrors: !0
      });
      return n.default.dispatch({
        type: "WELCOME_SCREEN_FETCH_SUCCESS",
        guildId: e,
        welcomeScreen: t.body
      }), t.body
    } catch (e) {
      n.default.dispatch({
        type: "WELCOME_SCREEN_FETCH_FAIL"
      })
    }
  }, _ = () => {
    n.default.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_RESET"
    })
  }, r = () => {
    n.default.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_CLEAR"
    })
  }, u = e => {
    n.default.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_UPDATE",
      settings: e
    })
  }, o = async (e, t) => {
    n.default.dispatch({
      type: "WELCOME_SCREEN_SUBMIT"
    });
    try {
      let s = await a.HTTP.patch({
        url: i.Endpoints.GUILD_WELCOME_SCREEN(e),
        body: {
          description: t.description,
          welcome_channels: t.channels,
          enabled: t.enabled
        },
        oldFormErrors: !0
      });
      n.default.dispatch({
        type: "WELCOME_SCREEN_SUBMIT_SUCCESS",
        guildId: e,
        welcomeScreen: s.body
      })
    } catch (e) {
      n.default.dispatch({
        type: "WELCOME_SCREEN_SUBMIT_FAILURE"
      })
    }
  }
"use strict";
E.r(t), E.d(t, {
  clearWelcomeScreenSettings: function() {
    return I
  },
  fetchWelcomeScreen: function() {
    return A
  },
  resetWelcomeScreen: function() {
    return n
  },
  saveWelcomeScreen: function() {
    return i
  },
  updateSettings: function() {
    return u
  },
  welcomeScreenViewed: function() {
    return a
  }
});
var _ = E("544891"),
  s = E("570140"),
  T = E("981631");
let a = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    s.default.dispatch({
      type: "WELCOME_SCREEN_VIEW",
      guildId: e,
      isLurking: t
    })
  },
  A = async e => {
    s.default.dispatch({
      type: "WELCOME_SCREEN_FETCH_START"
    });
    try {
      let t = await _.HTTP.get({
        url: T.Endpoints.GUILD_WELCOME_SCREEN(e),
        oldFormErrors: !0
      });
      return s.default.dispatch({
        type: "WELCOME_SCREEN_FETCH_SUCCESS",
        guildId: e,
        welcomeScreen: t.body
      }), t.body
    } catch (e) {
      s.default.dispatch({
        type: "WELCOME_SCREEN_FETCH_FAIL"
      })
    }
  }, n = () => {
    s.default.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_RESET"
    })
  }, I = () => {
    s.default.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_CLEAR"
    })
  }, u = e => {
    s.default.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_UPDATE",
      settings: e
    })
  }, i = async (e, t) => {
    s.default.dispatch({
      type: "WELCOME_SCREEN_SUBMIT"
    });
    try {
      let E = await _.HTTP.patch({
        url: T.Endpoints.GUILD_WELCOME_SCREEN(e),
        body: {
          description: t.description,
          welcome_channels: t.channels,
          enabled: t.enabled
        },
        oldFormErrors: !0
      });
      s.default.dispatch({
        type: "WELCOME_SCREEN_SUBMIT_SUCCESS",
        guildId: e,
        welcomeScreen: E.body
      })
    } catch (e) {
      s.default.dispatch({
        type: "WELCOME_SCREEN_SUBMIT_FAILURE"
      })
    }
  }
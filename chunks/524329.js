"use strict";
E.r(t), E.d(t, {
  clearWelcomeScreenSettings: function() {
    return I
  },
  fetchWelcomeScreen: function() {
    return n
  },
  resetWelcomeScreen: function() {
    return A
  },
  saveWelcomeScreen: function() {
    return i
  },
  updateSettings: function() {
    return u
  },
  welcomeScreenViewed: function() {
    return T
  }
});
var s = E("544891"),
  _ = E("570140"),
  a = E("981631");
let T = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    _.default.dispatch({
      type: "WELCOME_SCREEN_VIEW",
      guildId: e,
      isLurking: t
    })
  },
  n = async e => {
    _.default.dispatch({
      type: "WELCOME_SCREEN_FETCH_START"
    });
    try {
      let t = await s.HTTP.get({
        url: a.Endpoints.GUILD_WELCOME_SCREEN(e),
        oldFormErrors: !0
      });
      return _.default.dispatch({
        type: "WELCOME_SCREEN_FETCH_SUCCESS",
        guildId: e,
        welcomeScreen: t.body
      }), t.body
    } catch (e) {
      _.default.dispatch({
        type: "WELCOME_SCREEN_FETCH_FAIL"
      })
    }
  }, A = () => {
    _.default.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_RESET"
    })
  }, I = () => {
    _.default.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_CLEAR"
    })
  }, u = e => {
    _.default.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_UPDATE",
      settings: e
    })
  }, i = async (e, t) => {
    _.default.dispatch({
      type: "WELCOME_SCREEN_SUBMIT"
    });
    try {
      let E = await s.HTTP.patch({
        url: a.Endpoints.GUILD_WELCOME_SCREEN(e),
        body: {
          description: t.description,
          welcome_channels: t.channels,
          enabled: t.enabled
        },
        oldFormErrors: !0
      });
      _.default.dispatch({
        type: "WELCOME_SCREEN_SUBMIT_SUCCESS",
        guildId: e,
        welcomeScreen: E.body
      })
    } catch (e) {
      _.default.dispatch({
        type: "WELCOME_SCREEN_SUBMIT_FAILURE"
      })
    }
  }
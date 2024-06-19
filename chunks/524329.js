e.d(_, {
  Es: function() {
    return a
  },
  RM: function() {
    return n
  },
  VP: function() {
    return r
  },
  Xb: function() {
    return N
  },
  sm: function() {
    return t
  },
  y0: function() {
    return A
  }
});
var T = e(544891),
  s = e(570140),
  I = e(981631);
let A = function(E) {
    let _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    s.Z.dispatch({
      type: "WELCOME_SCREEN_VIEW",
      guildId: E,
      isLurking: _
    })
  },
  n = async E => {
    s.Z.dispatch({
      type: "WELCOME_SCREEN_FETCH_START"
    });
    try {
      let _ = await T.tn.get({
        url: I.ANM.GUILD_WELCOME_SCREEN(E),
        oldFormErrors: !0
      });
      return s.Z.dispatch({
        type: "WELCOME_SCREEN_FETCH_SUCCESS",
        guildId: E,
        welcomeScreen: _.body
      }), _.body
    } catch (E) {
      s.Z.dispatch({
        type: "WELCOME_SCREEN_FETCH_FAIL"
      })
    }
  }, N = () => {
    s.Z.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_RESET"
    })
  }, t = () => {
    s.Z.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_CLEAR"
    })
  }, r = E => {
    s.Z.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_UPDATE",
      settings: E
    })
  }, a = async (E, _) => {
    s.Z.dispatch({
      type: "WELCOME_SCREEN_SUBMIT"
    });
    try {
      let e = await T.tn.patch({
        url: I.ANM.GUILD_WELCOME_SCREEN(E),
        body: {
          description: _.description,
          welcome_channels: _.channels,
          enabled: _.enabled
        },
        oldFormErrors: !0
      });
      s.Z.dispatch({
        type: "WELCOME_SCREEN_SUBMIT_SUCCESS",
        guildId: E,
        welcomeScreen: e.body
      })
    } catch (E) {
      s.Z.dispatch({
        type: "WELCOME_SCREEN_SUBMIT_FAILURE"
      })
    }
  }
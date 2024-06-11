"use strict";
e.r(n), e.d(n, {
  deleteAllSafetyWarnings: function() {
    return c
  },
  markAsInappropriateConversation: function() {
    return l
  },
  pauseVibingWumpusMusic: function() {
    return o
  },
  playVibingWumpusMusic: function() {
    return u
  },
  stopVibingWumpusMusic: function() {
    return r
  }
});
var i = e("544891"),
  s = e("570140"),
  a = e("981631");

function u() {
  s.default.dispatch({
    type: "VIBING_WUMPUS_PLAY_MUSIC"
  })
}

function r() {
  s.default.dispatch({
    type: "VIBING_WUMPUS_STOP_MUSIC"
  })
}

function o() {
  s.default.dispatch({
    type: "VIBING_WUMPUS_PAUSE_MUSIC"
  })
}

function c(t) {
  return i.HTTP.del({
    url: a.Endpoints.DELETE_SAFETY_WARNINGS(t)
  })
}

function l(t, n) {
  return i.HTTP.post({
    url: a.Endpoints.ADD_SAFETY_WARNING(t),
    body: {
      safety_warning_type: n
    }
  })
}
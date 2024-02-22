"use strict";
n.r(t), n.d(t, {
  playVibingWumpusMusic: function() {
    return l
  },
  stopVibingWumpusMusic: function() {
    return s
  },
  markAsInappropriateConversation: function() {
    return u
  }
});
var i = n("872717"),
  a = n("913144"),
  r = n("49111");

function l() {
  a.default.dispatch({
    type: "VIBING_WUMPUS_PLAY_MUSIC"
  })
}

function s() {
  a.default.dispatch({
    type: "VIBING_WUMPUS_STOP_MUSIC"
  })
}

function u(e, t) {
  return i.default.post({
    url: r.Endpoints.ADD_SAFETY_WARNING(e),
    body: {
      safety_warning_type: t
    }
  })
}
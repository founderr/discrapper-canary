n.d(e, {
  JO: function() {
    return i
  },
  KK: function() {
    return l
  },
  Vp: function() {
    return u
  },
  hW: function() {
    return c
  },
  zu: function() {
    return o
  }
});
var a = n(544891),
  r = n(570140),
  s = n(981631);

function i() {
  r.Z.dispatch({
    type: "VIBING_WUMPUS_PLAY_MUSIC"
  })
}

function o() {
  r.Z.dispatch({
    type: "VIBING_WUMPUS_STOP_MUSIC"
  })
}

function c() {
  r.Z.dispatch({
    type: "VIBING_WUMPUS_PAUSE_MUSIC"
  })
}

function u(t) {
  return a.tn.del({
    url: s.ANM.DELETE_SAFETY_WARNINGS(t)
  })
}

function l(t, e) {
  return a.tn.post({
    url: s.ANM.ADD_SAFETY_WARNING(t),
    body: {
      safety_warning_type: e
    }
  })
}
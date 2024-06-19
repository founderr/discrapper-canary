t.d(s, {
  $Z: function() {
    return r
  },
  L$: function() {
    return o
  },
  fw: function() {
    return l
  }
});
var n = t(544891),
  i = t(570140),
  a = t(981631);
async function l() {
  var e;
  let s = await n.tn.get({
    url: a.ANM.AUTH_SESSIONS
  });
  return (null == s ? void 0 : s.ok) && (null === (e = s.body) || void 0 === e ? void 0 : e.user_sessions) != null && i.Z.dispatch({
    type: "FETCH_AUTH_SESSIONS_SUCCESS",
    sessions: s.body.user_sessions
  }), s
}

function r() {
  i.Z.dispatch({
    type: "FETCH_AUTH_SESSIONS_SUCCESS",
    sessions: []
  })
}
async function o(e) {
  if (Array.isArray(e)) {
    if (0 === e.length) return
  } else e = [e];
  let s = await n.tn.post({
    url: a.ANM.AUTH_SESSIONS_LOGOUT,
    body: {
      session_id_hashes: e
    }
  });
  return (null == s ? void 0 : s.ok) && i.Z.dispatch({
    type: "LOGOUT_AUTH_SESSIONS_SUCCESS",
    sessionIdHashes: e
  }), s
}
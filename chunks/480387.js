n.d(t, {
  HJ: function() {
    return _
  },
  Zd: function() {
    return h
  },
  yD: function() {
    return E
  }
});
var i = n(213919),
  s = n(544891),
  a = n(570140),
  r = n(893776),
  l = n(710845),
  o = n(314897),
  c = n(726745),
  d = n(981631);
let u = new l.Z("MultiAccountActionCreators");

function _() {
  let e = o.default.getId();
  c.Z.getUsers().forEach(async t => {
    let n, {
        id: r
      } = t,
      l = i.getToken(r);
    if (null == l || "" === l) {
      a.Z.dispatch({
        type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
        userId: r
      });
      return
    }
    a.Z.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
      userId: r
    });
    try {
      n = await s.tn.get({
        url: d.ANM.ME,
        headers: {
          authorization: l
        },
        retries: 3
      })
    } catch (t) {
      let e = (null == t ? void 0 : t.status) === 401 || (null == t ? void 0 : t.status) === 403;
      a.Z.dispatch({
        type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
        userId: r
      });
      return
    }
    a.Z.dispatch({
      type: e === r ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
      user: n.body
    }), a.Z.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
      userId: r
    })
  })
}

function E(e, t) {
  u.log("Switching account to ".concat(e), {
    switchSynchronously: t
  });
  let n = i.getToken(e);
  return null == n ? (u.log("Switching accounts failed because there was no token"), a.Z.dispatch({
    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
    userId: e
  }), Promise.resolve()) : r.Z.switchAccountToken(n, t)
}

function h(e) {
  a.Z.dispatch({
    type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
    userId: e
  })
}
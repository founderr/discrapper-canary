n.d(t, {
  HJ: function() {
    return E
  },
  Zd: function() {
    return _
  },
  yD: function() {
    return h
  }
});
var i = n(213919),
  s = n(544891),
  l = n(570140),
  a = n(893776),
  r = n(710845),
  o = n(314897),
  c = n(726745),
  u = n(981631);
let d = new r.Z("MultiAccountActionCreators");

function E() {
  let e = o.default.getId();
  c.Z.getUsers().forEach(async t => {
    let n, {
        id: a
      } = t,
      r = i.getToken(a);
    if (null == r || "" === r) {
      l.Z.dispatch({
        type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
        userId: a
      });
      return
    }
    l.Z.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
      userId: a
    });
    try {
      n = await s.tn.get({
        url: u.ANM.ME,
        headers: {
          authorization: r
        },
        retries: 3
      })
    } catch (t) {
      let e = (null == t ? void 0 : t.status) === 401 || (null == t ? void 0 : t.status) === 403;
      l.Z.dispatch({
        type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
        userId: a
      });
      return
    }
    l.Z.dispatch({
      type: e === a ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
      user: n.body
    }), l.Z.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
      userId: a
    })
  })
}

function h(e, t) {
  d.log("Switching account to ".concat(e), {
    switchSynchronously: t
  });
  let n = i.getToken(e);
  return null == n ? (d.log("Switching accounts failed because there was no token"), l.Z.dispatch({
    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
    userId: e
  }), Promise.resolve()) : a.Z.switchAccountToken(n, t)
}

function _(e) {
  l.Z.dispatch({
    type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
    userId: e
  })
}
"use strict";
n.r(t), n.d(t, {
  validateMultiAccountTokens: function() {
    return f
  },
  switchAccount: function() {
    return E
  },
  removeAccount: function() {
    return h
  }
});
var s = n("171718"),
  a = n("872717"),
  r = n("913144"),
  i = n("437822"),
  l = n("605250"),
  o = n("271938"),
  u = n("770032"),
  d = n("49111");
let c = new l.default("MultiAccountActionCreators");

function f() {
  let e = o.default.getId(),
    t = u.default.getUsers();
  t.forEach(async t => {
    let n, {
        id: i
      } = t,
      l = s.getToken(i);
    if (null == l || "" === l) {
      r.default.dispatch({
        type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
        userId: i
      });
      return
    }
    r.default.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
      userId: i
    });
    try {
      n = await a.HTTP.get({
        url: d.Endpoints.ME,
        headers: {
          authorization: l
        },
        retries: 3
      })
    } catch (t) {
      let e = (null == t ? void 0 : t.status) === 401 || (null == t ? void 0 : t.status) === 403;
      r.default.dispatch({
        type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
        userId: i
      });
      return
    }
    r.default.dispatch({
      type: e === i ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
      user: n.body
    }), r.default.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
      userId: i
    })
  })
}

function E(e, t) {
  c.log("Switching account to ".concat(e), {
    switchSynchronously: t
  });
  let n = s.getToken(e);
  return null == n ? (c.log("Switching accounts failed because there was no token"), r.default.dispatch({
    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
    userId: e
  }), Promise.resolve()) : i.default.switchAccountToken(n, t)
}

function h(e) {
  r.default.dispatch({
    type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
    userId: e
  })
}
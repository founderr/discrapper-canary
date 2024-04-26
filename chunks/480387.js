"use strict";
a.r(t), a.d(t, {
  removeAccount: function() {
    return h
  },
  switchAccount: function() {
    return E
  },
  validateMultiAccountTokens: function() {
    return f
  }
});
var n = a("213919"),
  s = a("544891"),
  l = a("570140"),
  i = a("893776"),
  r = a("710845"),
  o = a("314897"),
  u = a("726745"),
  d = a("981631");
let c = new r.default("MultiAccountActionCreators");

function f() {
  let e = o.default.getId();
  u.default.getUsers().forEach(async t => {
    let a, {
        id: i
      } = t,
      r = n.getToken(i);
    if (null == r || "" === r) {
      l.default.dispatch({
        type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
        userId: i
      });
      return
    }
    l.default.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
      userId: i
    });
    try {
      a = await s.HTTP.get({
        url: d.Endpoints.ME,
        headers: {
          authorization: r
        },
        retries: 3
      })
    } catch (t) {
      let e = (null == t ? void 0 : t.status) === 401 || (null == t ? void 0 : t.status) === 403;
      l.default.dispatch({
        type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
        userId: i
      });
      return
    }
    l.default.dispatch({
      type: e === i ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
      user: a.body
    }), l.default.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
      userId: i
    })
  })
}

function E(e, t) {
  c.log("Switching account to ".concat(e), {
    switchSynchronously: t
  });
  let a = n.getToken(e);
  return null == a ? (c.log("Switching accounts failed because there was no token"), l.default.dispatch({
    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
    userId: e
  }), Promise.resolve()) : i.default.switchAccountToken(a, t)
}

function h(e) {
  l.default.dispatch({
    type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
    userId: e
  })
}
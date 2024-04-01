"use strict";
n.r(t), n.d(t, {
  removeAccount: function() {
    return _
  },
  switchAccount: function() {
    return E
  },
  validateMultiAccountTokens: function() {
    return f
  }
});
var a = n("213919"),
  s = n("544891"),
  l = n("570140"),
  i = n("893776"),
  r = n("710845"),
  o = n("314897"),
  u = n("726745"),
  d = n("981631");
let c = new r.default("MultiAccountActionCreators");

function f() {
  let e = o.default.getId();
  u.default.getUsers().forEach(async t => {
    let n, {
        id: i
      } = t,
      r = a.getToken(i);
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
      n = await s.HTTP.get({
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
      user: n.body
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
  let n = a.getToken(e);
  return null == n ? (c.log("Switching accounts failed because there was no token"), l.default.dispatch({
    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
    userId: e
  }), Promise.resolve()) : i.default.switchAccountToken(n, t)
}

function _(e) {
  l.default.dispatch({
    type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
    userId: e
  })
}
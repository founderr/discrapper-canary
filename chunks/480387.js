"use strict";
n.r(t), n.d(t, {
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
var a = n("213919"),
  s = n("544891"),
  i = n("570140"),
  l = n("893776"),
  r = n("710845"),
  o = n("314897"),
  u = n("726745"),
  d = n("981631");
let c = new r.default("MultiAccountActionCreators");

function f() {
  let e = o.default.getId();
  u.default.getUsers().forEach(async t => {
    let n, {
        id: l
      } = t,
      r = a.getToken(l);
    if (null == r || "" === r) {
      i.default.dispatch({
        type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
        userId: l
      });
      return
    }
    i.default.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
      userId: l
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
      i.default.dispatch({
        type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
        userId: l
      });
      return
    }
    i.default.dispatch({
      type: e === l ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
      user: n.body
    }), i.default.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
      userId: l
    })
  })
}

function E(e, t) {
  c.log("Switching account to ".concat(e), {
    switchSynchronously: t
  });
  let n = a.getToken(e);
  return null == n ? (c.log("Switching accounts failed because there was no token"), i.default.dispatch({
    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
    userId: e
  }), Promise.resolve()) : l.default.switchAccountToken(n, t)
}

function h(e) {
  i.default.dispatch({
    type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
    userId: e
  })
}
"use strict";
n.r(t), n.d(t, {
  fetchMemberCounts: function() {
    return c
  },
  requestMembersForRole: function() {
    return f
  }
});
var l = n("693566"),
  u = n.n(l),
  r = n("872717"),
  i = n("913144"),
  a = n("851387"),
  d = n("36402"),
  o = n("49111");
async function s(e) {
  try {
    i.default.dispatch({
      type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
      guildId: e
    });
    let t = await r.default.get({
        url: o.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
      }),
      n = t.body;
    i.default.dispatch({
      type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
      guildId: e,
      roleMemberCount: n
    })
  } catch (t) {
    i.default.dispatch({
      type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
      guildId: e
    })
  }
}
async function c(e) {
  d.default.shouldFetch(e) && await s(e)
}
let E = new u({
  maxAge: 1e4
});

function f(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    l = "".concat(e, "-").concat(t);
  if (!n || null == E.get(l)) {
    var u, i;
    return E.set(l, !0), u = e, i = t, r.default.get({
      url: o.Endpoints.GUILD_ROLE_MEMBER_IDS(u, i)
    }).then(e => (a.default.requestMembersById(u, e.body, !1), e.body.length))
  }
  return Promise.resolve(null)
}
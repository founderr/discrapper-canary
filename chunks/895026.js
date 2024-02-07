"use strict";
l.r(t), l.d(t, {
  fetchMemberCounts: function() {
    return c
  },
  requestMembersForRole: function() {
    return m
  }
});
var a = l("693566"),
  n = l.n(a),
  r = l("872717"),
  i = l("913144"),
  u = l("851387"),
  s = l("36402"),
  o = l("49111");
async function d(e) {
  try {
    i.default.dispatch({
      type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
      guildId: e
    });
    let t = await r.default.get({
        url: o.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
      }),
      l = t.body;
    i.default.dispatch({
      type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
      guildId: e,
      roleMemberCount: l
    })
  } catch (t) {
    i.default.dispatch({
      type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
      guildId: e
    })
  }
}
async function c(e) {
  s.default.shouldFetch(e) && await d(e)
}
let f = new n({
  maxAge: 1e4
});

function m(e, t) {
  let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    a = "".concat(e, "-").concat(t);
  if (!l || null == f.get(a)) {
    var n, i;
    return f.set(a, !0), n = e, i = t, r.default.get({
      url: o.Endpoints.GUILD_ROLE_MEMBER_IDS(n, i)
    }).then(e => (u.default.requestMembersById(n, e.body, !1), e.body.length))
  }
  return Promise.resolve(null)
}
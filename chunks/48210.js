"use strict";
r.r(t);
var o = r("544891"),
  a = r("981631");
t.default = {
  async updateEstimate(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
      r = arguments.length > 2 ? arguments[2] : void 0;
    return (await o.HTTP.get({
      url: a.Endpoints.GUILD_PRUNE(e),
      query: {
        days: t,
        include_roles: r
      },
      oldFormErrors: !0
    })).body.pruned
  },
  prune: (e, t, r) => o.HTTP.post({
    url: a.Endpoints.GUILD_PRUNE(e),
    body: {
      days: t,
      compute_prune_count: !1,
      include_roles: r
    },
    oldFormErrors: !0
  })
}
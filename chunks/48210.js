"use strict";
l.r(t);
var a = l("544891"),
  s = l("981631");
t.default = {
  async updateEstimate(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
      l = arguments.length > 2 ? arguments[2] : void 0;
    return (await a.HTTP.get({
      url: s.Endpoints.GUILD_PRUNE(e),
      query: {
        days: t,
        include_roles: l
      },
      oldFormErrors: !0
    })).body.pruned
  },
  prune: (e, t, l) => a.HTTP.post({
    url: s.Endpoints.GUILD_PRUNE(e),
    body: {
      days: t,
      compute_prune_count: !1,
      include_roles: l
    },
    oldFormErrors: !0
  })
}
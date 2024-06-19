var n = t(544891),
  s = t(981631);
l.Z = {
  async updateEstimate(e) {
    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
      t = arguments.length > 2 ? arguments[2] : void 0;
    return (await n.tn.get({
      url: s.ANM.GUILD_PRUNE(e),
      query: {
        days: l,
        include_roles: t
      },
      oldFormErrors: !0
    })).body.pruned
  },
  prune: (e, l, t) => n.tn.post({
    url: s.ANM.GUILD_PRUNE(e),
    body: {
      days: l,
      compute_prune_count: !1,
      include_roles: t
    },
    oldFormErrors: !0
  })
}
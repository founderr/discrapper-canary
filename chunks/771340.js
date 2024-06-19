var l = n(544891),
  i = n(570140),
  s = n(981631);
t.Z = {
  fetchRegions(e) {
    l.tn.get({
      url: s.ANM.REGIONS(e),
      retries: 1,
      oldFormErrors: !0
    }).then(t => i.Z.dispatch({
      type: "LOAD_REGIONS",
      regions: t.body,
      guildId: e
    }), () => i.Z.dispatch({
      type: "LOAD_REGIONS",
      regions: [],
      guildId: e
    }))
  },
  changeCallRegion(e, t) {
    l.tn.patch({
      url: s.ANM.CALL(e),
      body: {
        region: t
      },
      oldFormErrors: !0
    })
  }
}
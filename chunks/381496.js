n.d(t, {
  j: function() {
    return r
  }
});
var s = n(544891),
  a = n(570140),
  i = n(981631);
let r = () => s.tn.get({
  url: i.ANM.GUILD_AFFINITIES,
  oldFormErrors: !0
}).then(e => {
  let {
    body: {
      guild_affinities: t
    }
  } = e;
  a.Z.dispatch({
    type: "LOAD_GUILD_AFFINITIES_SUCCESS",
    guildAffinities: t
  })
}, () => {
  a.Z.dispatch({
    type: "LOAD_GUILD_AFFINITIES_FAILURE"
  })
})
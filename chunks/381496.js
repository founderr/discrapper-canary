s.d(t, {
  j: function() {
    return r
  }
});
var n = s(544891),
  a = s(570140),
  i = s(981631);
let r = () => n.tn.get({
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
"use strict";
n.r(t), n.d(t, {
  fetchGuildAffinities: function() {
    return l
  }
});
var a = n("544891"),
  s = n("570140"),
  i = n("981631");
let l = () => a.HTTP.get({
  url: i.Endpoints.GUILD_AFFINITIES,
  oldFormErrors: !0
}).then(e => {
  let {
    body: {
      guild_affinities: t
    }
  } = e;
  s.default.dispatch({
    type: "LOAD_GUILD_AFFINITIES_SUCCESS",
    guildAffinities: t
  })
}, () => {
  s.default.dispatch({
    type: "LOAD_GUILD_AFFINITIES_FAILURE"
  })
})
"use strict";
a.r(t), a.d(t, {
  fetchGuildAffinities: function() {
    return i
  }
});
var n = a("544891"),
  s = a("570140"),
  l = a("981631");
let i = () => n.HTTP.get({
  url: l.Endpoints.GUILD_AFFINITIES,
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
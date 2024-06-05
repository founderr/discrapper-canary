"use strict";
s.r(t), s.d(t, {
  fetchGuildAffinities: function() {
    return i
  }
});
var a = s("544891"),
  n = s("570140"),
  l = s("981631");
let i = () => a.HTTP.get({
  url: l.Endpoints.GUILD_AFFINITIES,
  oldFormErrors: !0
}).then(e => {
  let {
    body: {
      guild_affinities: t
    }
  } = e;
  n.default.dispatch({
    type: "LOAD_GUILD_AFFINITIES_SUCCESS",
    guildAffinities: t
  })
}, () => {
  n.default.dispatch({
    type: "LOAD_GUILD_AFFINITIES_FAILURE"
  })
})
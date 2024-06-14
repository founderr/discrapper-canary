"use strict";
s.r(t), s.d(t, {
  fetchGuildAffinities: function() {
    return i
  }
});
var n = s("544891"),
  a = s("570140"),
  l = s("981631");
let i = () => n.HTTP.get({
  url: l.Endpoints.GUILD_AFFINITIES,
  oldFormErrors: !0
}).then(e => {
  let {
    body: {
      guild_affinities: t
    }
  } = e;
  a.default.dispatch({
    type: "LOAD_GUILD_AFFINITIES_SUCCESS",
    guildAffinities: t
  })
}, () => {
  a.default.dispatch({
    type: "LOAD_GUILD_AFFINITIES_FAILURE"
  })
})
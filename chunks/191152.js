"use strict";
n.r(t), n.d(t, {
  fetchActiveChannels: function() {
    return r
  }
});
var i = n("872717"),
  a = n("913144"),
  l = n("599417"),
  s = n("49111");
async function r(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
  a.default.dispatch({
    type: "ACTIVE_CHANNELS_FETCH_START",
    guildId: e
  });
  try {
    var n, r;
    let l = await i.default.get({
        url: s.Endpoints.ACTIVE_CHANNELS(e),
        query: {
          channel_limit: t
        }
      }),
      o = null !== (r = null === (n = l.body) || void 0 === n ? void 0 : n.channels) && void 0 !== r ? r : [];
    return a.default.dispatch({
      type: "ACTIVE_CHANNELS_FETCH_SUCCESS",
      guildId: e,
      channels: o
    }), l
  } catch (t) {
    throw a.default.dispatch({
      type: "ACTIVE_CHANNELS_FETCH_FAILURE",
      guildId: e,
      error: new l.default(t)
    }), t
  }
}
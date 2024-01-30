"use strict";
s.r(t), s.d(t, {
  useChannelsUserCanStartStageIn: function() {
    return i
  }
}), s("808653"), s("424973");
var n = s("446674"),
  a = s("923510"),
  r = s("923959"),
  l = s("957255");

function i(e) {
  var t;
  let s = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null;
  return (0, n.useStateFromStoresArray)([r.default, l.default], () => {
    let e = r.default.getChannels(s)[r.GUILD_VOCAL_CHANNELS_KEY];
    return e.reduce((e, t) => {
      let s = t.channel;
      return s.isGuildStageVoice() ? (function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.default;
        return !!e.isGuildStageVoice() && t.can(a.MODERATE_STAGE_CHANNEL_PERMISSIONS, e)
      }(t.channel, l.default) && e.push(s), e) : e
    }, [])
  }, [s])
}
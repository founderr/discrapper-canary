"use strict";
l.r(t), l.d(t, {
  useChannelsUserCanStartStageIn: function() {
    return i
  }
}), l("724458"), l("653041");
var a = l("442837"),
  n = l("146085"),
  s = l("984933"),
  r = l("496675");

function i(e) {
  var t;
  let l = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null;
  return (0, a.useStateFromStoresArray)([s.default, r.default], () => s.default.getChannels(l)[s.GUILD_VOCAL_CHANNELS_KEY].reduce((e, t) => {
    let l = t.channel;
    return l.isGuildStageVoice() ? (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default;
      return !!e.isGuildStageVoice() && t.can(n.MODERATE_STAGE_CHANNEL_PERMISSIONS, e)
    }(t.channel, r.default) && e.push(l), e) : e
  }, []), [l])
}
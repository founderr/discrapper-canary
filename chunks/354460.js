"use strict";
n.r(t), n.d(t, {
  getGuildFeatureFromUploadType: function() {
    return r
  },
  shouldShowPremiumIconForGIFPickerOption: function() {
    return i
  }
});
var a = n("49111"),
  l = n("75015");

function r(e, t) {
  let {
    isGIF: n
  } = t;
  if (e === l.UploadTypes.GUILD_BANNER) return n ? a.GuildFeatures.ANIMATED_BANNER : a.GuildFeatures.BANNER
}

function i(e) {
  return e === l.UploadTypes.AVATAR || e === l.UploadTypes.BANNER
}
"use strict";
n.r(t), n.d(t, {
  getGuildFeatureFromUploadType: function() {
    return i
  },
  shouldShowPremiumIconForGIFPickerOption: function() {
    return u
  }
});
var a = n("49111"),
  r = n("75015");

function i(e, t) {
  let {
    isGIF: n
  } = t;
  if (e === r.UploadTypes.GUILD_BANNER) return n ? a.GuildFeatures.ANIMATED_BANNER : a.GuildFeatures.BANNER
}

function u(e) {
  return e === r.UploadTypes.AVATAR || e === r.UploadTypes.BANNER
}
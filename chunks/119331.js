"use strict";
t.d(s, {
  t: function() {
    return o
  }
}), t(411104);
var n = t(120356),
  i = t.n(n),
  l = t(481060),
  a = t(267642),
  r = t(426305);

function o(e, s) {
  if (s) return {
    icon: l.CheckmarkLargeIcon,
    className: r.unlocked
  };
  switch (e) {
    case a.Ro.EMOJI:
      return {
        icon: l.ReactionIcon, className: i()(r.icon, r.emoji)
      };
    case a.Ro.AUDIO:
      return {
        icon: l.HeadphonesIcon, className: i()(r.icon, r.audio)
      };
    case a.Ro.ANIMATED:
      return {
        icon: l.GifIcon, className: i()(r.icon, r.animated)
      };
    case a.Ro.CUSTOMIZATION:
      return {
        icon: l.ImagesIcon, className: i()(r.icon, r.customization)
      };
    case a.Ro.UPLOAD:
      return {
        icon: l.UploadIcon, className: i()(r.icon, r.upload)
      };
    case a.Ro.VANITY:
      return {
        icon: l.StarIcon, className: i()(r.icon, r.vanity)
      };
    case a.Ro.STREAM:
      return {
        icon: l.ScreenArrowIcon, className: i()(r.icon, r.stream)
      };
    case a.Ro.STICKER:
      return {
        icon: l.StickerIcon, className: i()(r.icon, r.sticker)
      };
    case a.Ro.CUSTOM_ROLE_ICON:
      return {
        icon: l.ShieldUserIcon, className: i()(r.icon, r.customRoleIcon)
      };
    case a.Ro.STAGE_VIDEO:
      return {
        icon: l.StageIcon, className: i()(r.icon, r.stage)
      };
    case a.Ro.SOUNDBOARD:
      return {
        icon: l.SoundboardIcon, className: i()(r.icon, r.soundboard)
      }
  }
  throw Error("Unexpected perk icon ".concat(e))
}
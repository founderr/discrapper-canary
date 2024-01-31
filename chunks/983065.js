"use strict";
s.r(t), s.d(t, {
  getPerkIcon: function() {
    return g
  }
}), s("70102");
var a = s("414456"),
  n = s.n(a),
  l = s("36694"),
  i = s("46829"),
  r = s("272339"),
  o = s("110006"),
  d = s("682344"),
  u = s("238521"),
  c = s("754576"),
  E = s("228427"),
  _ = s("290581"),
  T = s("595086"),
  I = s("619911"),
  S = s("698015"),
  N = s("427459"),
  f = s("392568");

function g(e, t) {
  if (t) return {
    icon: l.default,
    className: f.unlocked
  };
  switch (e) {
    case N.PerkIcons.EMOJI:
      return {
        icon: i.default, className: n(f.icon, f.emoji)
      };
    case N.PerkIcons.AUDIO:
      return {
        icon: r.default, className: n(f.icon, f.audio)
      };
    case N.PerkIcons.ANIMATED:
      return {
        icon: o.default, className: n(f.icon, f.animated)
      };
    case N.PerkIcons.CUSTOMIZATION:
      return {
        icon: u.default, className: n(f.icon, f.customization)
      };
    case N.PerkIcons.UPLOAD:
      return {
        icon: S.default, className: n(f.icon, f.upload)
      };
    case N.PerkIcons.VANITY:
      return {
        icon: _.default, className: n(f.icon, f.vanity)
      };
    case N.PerkIcons.STREAM:
      return {
        icon: I.default, className: n(f.icon, f.stream)
      };
    case N.PerkIcons.STICKER:
      return {
        icon: T.default, className: n(f.icon, f.sticker)
      };
    case N.PerkIcons.CUSTOM_ROLE_ICON:
      return {
        icon: d.default, className: n(f.icon, f.customRoleIcon)
      };
    case N.PerkIcons.STAGE_VIDEO:
      return {
        icon: E.default, className: n(f.icon, f.stage)
      };
    case N.PerkIcons.SOUNDBOARD:
      return {
        icon: c.default, className: n(f.icon, f.soundboard)
      }
  }
  throw Error("Unexpected perk icon ".concat(e))
}
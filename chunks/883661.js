"use strict";
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(149203);
let a = e => {
    switch (e) {
      case o.UX.RECENT:
        return s.ClockIcon;
      case o.UX.FAVORITES:
        return s.StarIcon;
      case o.UX.TOP_GUILD_EMOJI:
        return s.TrophyIcon;
      case o.UX.PEOPLE:
        return s.ReactionIcon;
      case o.UX.NATURE:
        return s.NatureIcon;
      case o.UX.FOOD:
        return s.FoodIcon;
      case o.UX.ACTIVITY:
        return s.GameControllerIcon;
      case o.UX.TRAVEL:
        return s.BicycleIcon;
      case o.UX.OBJECTS:
        return s.ObjectIcon;
      case o.UX.SYMBOLS:
        return s.HeartIcon;
      case o.UX.FLAGS:
        return s.FlagIcon;
      case o.UX.PREMIUM_UPSELL:
        return s.NitroWheelIcon;
      default:
        return
    }
  },
  l = r.memo(function(e) {
    let {
      categoryId: t,
      ...n
    } = e, r = a(t);
    return null == r ? null : (0, i.jsx)(r, {
      color: "currentColor",
      ...n
    })
  });
t.Z = l
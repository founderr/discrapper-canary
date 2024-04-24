"use strict";
a.r(v), a.d(v, {
  ClanBadge: function() {
    return f
  }
});
var t = a("735250");
a("470079");
var l = a("496532"),
  e = a("72977"),
  i = a("775259"),
  s = a("907120"),
  n = a("533122"),
  r = a("874706"),
  d = a("775101"),
  M = a("718572"),
  Z = a("496223"),
  H = a("846262"),
  V = a("116175");
let f = h => {
  let {
    badge: v,
    primaryTintColor: a,
    secondaryTintColor: f,
    ...o
  } = h;
  switch (v) {
    case V.ClanBadgeKind.SWORD:
    case V.ClanBadgeKind.SWORD_10:
    case V.ClanBadgeKind.SWORD_11:
    case V.ClanBadgeKind.SWORD_12:
    case V.ClanBadgeKind.SWORD_13:
    case V.ClanBadgeKind.SWORD_14:
    case V.ClanBadgeKind.SWORD_15:
    case V.ClanBadgeKind.SWORD_16:
    case V.ClanBadgeKind.SWORD_17:
    case V.ClanBadgeKind.SWORD_18:
    case V.ClanBadgeKind.SWORD_19:
    case V.ClanBadgeKind.SWORD_20:
      return (0, t.jsx)(M.ClanBadgeSword, {
        primaryTintColor: a,
        secondaryTintColor: f,
        ...o
      });
    case V.ClanBadgeKind.WATER_DROP:
      return (0, t.jsx)(H.ClanBadgeWaterDrop, {
        primaryTintColor: a,
        ...o
      });
    case V.ClanBadgeKind.SKULL:
      return (0, t.jsx)(d.ClanBadgeSkull, {
        primaryTintColor: a,
        ...o
      });
    case V.ClanBadgeKind.TOADSTOOL:
      return (0, t.jsx)(Z.ClanBadgeToadstool, {
        primaryTintColor: a,
        secondaryTintColor: f,
        ...o
      });
    case V.ClanBadgeKind.MOON:
      return (0, t.jsx)(r.ClanBadgeMoon, {
        primaryTintColor: a,
        ...o
      });
    case V.ClanBadgeKind.LIGHTNING:
      return (0, t.jsx)(n.ClanBadgeLightning, {
        primaryTintColor: a,
        ...o
      });
    case V.ClanBadgeKind.LEAF:
      return (0, t.jsx)(s.ClanBadgeLeaf, {
        primaryTintColor: a,
        ...o
      });
    case V.ClanBadgeKind.HEART:
      return (0, t.jsx)(i.ClanBadgeHeart, {
        primaryTintColor: a,
        ...o
      });
    case V.ClanBadgeKind.FIRE:
      return (0, t.jsx)(e.ClanBadgeFire, {
        primaryTintColor: a,
        ...o
      });
    case V.ClanBadgeKind.COMPASS:
      return (0, t.jsx)(l.ClanBadgeCompass, {
        primaryTintColor: a,
        secondaryTintColor: f,
        ...o
      })
  }
  return null
}
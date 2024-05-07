"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
});
var a = s("735250");
s("470079");
var n = s("108930"),
  i = s("86406"),
  E = s("146068"),
  l = s("308545"),
  _ = s("397697"),
  r = s("129871"),
  u = s("206851"),
  o = s("246933"),
  T = s("995414"),
  d = s("308083");

function A(e) {
  let {
    banner: t,
    ...s
  } = e;
  switch (t) {
    case d.ClanBannerKind.NIGHT_SKY:
      return (0, a.jsx)(_.default, {
        ...s
      });
    case d.ClanBannerKind.CASTLE:
      return (0, a.jsx)(n.default, {
        ...s
      });
    case d.ClanBannerKind.WORLD_MAP:
      return (0, a.jsx)(T.default, {
        ...s
      });
    case d.ClanBannerKind.SEA_FOAM:
      return (0, a.jsx)(r.default, {
        ...s
      });
    case d.ClanBannerKind.WARP_TUNNEL:
      return (0, a.jsx)(o.default, {
        ...s
      });
    case d.ClanBannerKind.HOUSE:
      return (0, a.jsx)(E.default, {
        ...s
      });
    case d.ClanBannerKind.HEIGHTMAP:
      return (0, a.jsx)(i.default, {
        ...s
      });
    case d.ClanBannerKind.MESH:
      return (0, a.jsx)(l.default, {
        ...s
      });
    case d.ClanBannerKind.SPATTER:
      return (0, a.jsx)(u.default, {
        ...s
      })
  }
  return null
}
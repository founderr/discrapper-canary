"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var s = n("108930"),
  l = n("86406"),
  i = n("146068"),
  r = n("308545"),
  o = n("397697"),
  u = n("129871"),
  d = n("206851"),
  c = n("246933"),
  f = n("995414"),
  E = n("308083");

function h(e) {
  let {
    banner: t,
    ...n
  } = e;
  switch (t) {
    case E.ClanBannerKind.NIGHT_SKY:
      return (0, a.jsx)(o.default, {
        ...n
      });
    case E.ClanBannerKind.CASTLE:
      return (0, a.jsx)(s.default, {
        ...n
      });
    case E.ClanBannerKind.WORLD_MAP:
      return (0, a.jsx)(f.default, {
        ...n
      });
    case E.ClanBannerKind.SEA_FOAM:
      return (0, a.jsx)(u.default, {
        ...n
      });
    case E.ClanBannerKind.WARP_TUNNEL:
      return (0, a.jsx)(c.default, {
        ...n
      });
    case E.ClanBannerKind.HOUSE:
      return (0, a.jsx)(i.default, {
        ...n
      });
    case E.ClanBannerKind.HEIGHTMAP:
      return (0, a.jsx)(l.default, {
        ...n
      });
    case E.ClanBannerKind.MESH:
      return (0, a.jsx)(r.default, {
        ...n
      });
    case E.ClanBannerKind.SPATTER:
      return (0, a.jsx)(d.default, {
        ...n
      })
  }
  return null
}
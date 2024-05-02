"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var r = n("108930"),
  i = n("86406"),
  s = n("146068"),
  l = n("308545"),
  o = n("397697"),
  c = n("129871"),
  d = n("206851"),
  u = n("246933"),
  f = n("995414"),
  m = n("308083");

function h(e) {
  let {
    banner: t,
    ...n
  } = e;
  switch (t) {
    case m.ClanBannerKind.NIGHT_SKY:
      return (0, a.jsx)(o.default, {
        ...n
      });
    case m.ClanBannerKind.CASTLE:
      return (0, a.jsx)(r.default, {
        ...n
      });
    case m.ClanBannerKind.WORLD_MAP:
      return (0, a.jsx)(f.default, {
        ...n
      });
    case m.ClanBannerKind.SEA_FOAM:
      return (0, a.jsx)(c.default, {
        ...n
      });
    case m.ClanBannerKind.WARP_TUNNEL:
      return (0, a.jsx)(u.default, {
        ...n
      });
    case m.ClanBannerKind.HOUSE:
      return (0, a.jsx)(s.default, {
        ...n
      });
    case m.ClanBannerKind.HEIGHTMAP:
      return (0, a.jsx)(i.default, {
        ...n
      });
    case m.ClanBannerKind.MESH:
      return (0, a.jsx)(l.default, {
        ...n
      });
    case m.ClanBannerKind.SPATTER:
      return (0, a.jsx)(d.default, {
        ...n
      })
  }
  return null
}
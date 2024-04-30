"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
});
var n = a("735250");
a("470079");
var s = a("108930"),
  l = a("86406"),
  i = a("146068"),
  r = a("308545"),
  o = a("397697"),
  u = a("129871"),
  d = a("206851"),
  c = a("246933"),
  f = a("995414"),
  E = a("308083");

function h(e) {
  let {
    banner: t,
    ...a
  } = e;
  switch (t) {
    case E.ClanBannerKind.NIGHT_SKY:
      return (0, n.jsx)(o.default, {
        ...a
      });
    case E.ClanBannerKind.CASTLE:
      return (0, n.jsx)(s.default, {
        ...a
      });
    case E.ClanBannerKind.WORLD_MAP:
      return (0, n.jsx)(f.default, {
        ...a
      });
    case E.ClanBannerKind.SEA_FOAM:
      return (0, n.jsx)(u.default, {
        ...a
      });
    case E.ClanBannerKind.WARP_TUNNEL:
      return (0, n.jsx)(c.default, {
        ...a
      });
    case E.ClanBannerKind.HOUSE:
      return (0, n.jsx)(i.default, {
        ...a
      });
    case E.ClanBannerKind.HEIGHTMAP:
      return (0, n.jsx)(l.default, {
        ...a
      });
    case E.ClanBannerKind.MESH:
      return (0, n.jsx)(r.default, {
        ...a
      });
    case E.ClanBannerKind.SPATTER:
      return (0, n.jsx)(d.default, {
        ...a
      })
  }
  return null
}
"use strict";
a.r(t), a.d(t, {
  default: function() {
    return E
  }
});
var n = a("735250");
a("470079");
var r = a("108930"),
  i = a("86406"),
  s = a("146068"),
  l = a("308545"),
  o = a("397697"),
  d = a("129871"),
  c = a("206851"),
  u = a("246933"),
  f = a("995414"),
  m = a("308083");

function E(e) {
  let {
    banner: t,
    ...a
  } = e;
  switch (t) {
    case m.ClanBannerKind.NIGHT_SKY:
      return (0, n.jsx)(o.default, {
        ...a
      });
    case m.ClanBannerKind.CASTLE:
      return (0, n.jsx)(r.default, {
        ...a
      });
    case m.ClanBannerKind.WORLD_MAP:
      return (0, n.jsx)(f.default, {
        ...a
      });
    case m.ClanBannerKind.SEA_FOAM:
      return (0, n.jsx)(d.default, {
        ...a
      });
    case m.ClanBannerKind.WARP_TUNNEL:
      return (0, n.jsx)(u.default, {
        ...a
      });
    case m.ClanBannerKind.HOUSE:
      return (0, n.jsx)(s.default, {
        ...a
      });
    case m.ClanBannerKind.HEIGHTMAP:
      return (0, n.jsx)(i.default, {
        ...a
      });
    case m.ClanBannerKind.MESH:
      return (0, n.jsx)(l.default, {
        ...a
      });
    case m.ClanBannerKind.SPATTER:
      return (0, n.jsx)(c.default, {
        ...a
      })
  }
  return null
}
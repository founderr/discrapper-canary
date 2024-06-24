t.d(n, {
  Z: function() {
    return C
  }
});
var a = t(735250);
t(470079);
var r = t(108930),
  s = t(86406),
  i = t(146068),
  l = t(308545),
  o = t(397697),
  c = t(129871),
  d = t(206851),
  u = t(246933),
  m = t(995414),
  h = t(308083);

function C(e) {
  let {
    banner: n,
    ...t
  } = e;
  switch (n) {
    case h.qC.NIGHT_SKY:
      return (0, a.jsx)(o.Z, {
        ...t
      });
    case h.qC.CASTLE:
      return (0, a.jsx)(r.Z, {
        ...t
      });
    case h.qC.WORLD_MAP:
      return (0, a.jsx)(m.Z, {
        ...t
      });
    case h.qC.SEA_FOAM:
      return (0, a.jsx)(c.Z, {
        ...t
      });
    case h.qC.WARP_TUNNEL:
      return (0, a.jsx)(u.Z, {
        ...t
      });
    case h.qC.HOUSE:
      return (0, a.jsx)(i.Z, {
        ...t
      });
    case h.qC.HEIGHTMAP:
      return (0, a.jsx)(s.Z, {
        ...t
      });
    case h.qC.MESH:
      return (0, a.jsx)(l.Z, {
        ...t
      });
    case h.qC.SPATTER:
      return (0, a.jsx)(d.Z, {
        ...t
      })
  }
  return null
}
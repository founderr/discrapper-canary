n.d(t, {
  Z: function() {
    return l
  }
});
var o = n(735250);
n(470079);
var i = n(180781),
  s = n(321867),
  a = n(486324);

function l(e) {
  let {
    type: t,
    analyticsPage: n,
    analyticsSection: l,
    isGIF: r,
    banner: c
  } = e;
  return [a.pC.BANNER, a.pC.AVATAR].includes(t) && r ? (0, o.jsx)(s.Z, {
    analyticsSection: l,
    type: t
  }) : t === a.pC.GUILD_BANNER ? (0, o.jsx)(i.Z, {
    analyticsSection: l,
    analyticsPage: n,
    isGIF: r,
    banner: c
  }) : null
}
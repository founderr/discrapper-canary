n.d(t, {
  Z: function() {
    return l
  }
});
var r = n(735250);
n(470079);
var i = n(180781),
  s = n(321867),
  a = n(486324);

function l(e) {
  let {
    type: t,
    analyticsPage: n,
    analyticsSection: l,
    isGIF: o,
    banner: c
  } = e;
  return [a.pC.BANNER, a.pC.AVATAR].includes(t) && o ? (0, r.jsx)(s.Z, {
    analyticsSection: l,
    type: t
  }) : t === a.pC.GUILD_BANNER ? (0, r.jsx)(i.Z, {
    analyticsSection: l,
    analyticsPage: n,
    isGIF: o,
    banner: c
  }) : null
}
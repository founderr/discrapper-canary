n.d(t, {
  BK: function() {
    return o
  },
  Bf: function() {
    return c
  },
  KZ: function() {
    return u
  }
}), n(724458), n(653041);
var l = n(476326),
  i = n(403182),
  s = n(74538),
  a = n(474936),
  r = n(689938);

function o(e, t) {
  let n = i.Ng(i.dg(t));
  return s.ZP.isPremium(e, a.p9.TIER_2) ? r.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
    maxSize: n
  }) : s.ZP.isPremium(e, a.p9.TIER_1) ? r.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format({
    maxSize: n
  }) : r.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
    maxSize: n
  })
}

function c(e, t) {
  return i.nA(e, t) || i.vY(e)
}

function u(e) {
  return e.reduce((e, t) => (t.item.platform === l.ow.WEB && e.push(t.item.file), e), [])
}
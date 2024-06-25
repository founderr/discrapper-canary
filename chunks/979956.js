i.d(t, {
  BK: function() {
    return _
  },
  Bf: function() {
    return r
  },
  KZ: function() {
    return s
  }
}), i(724458), i(653041);
var n = i(476326),
  c = i(403182),
  o = i(74538),
  a = i(474936),
  l = i(689938);

function _(e, t) {
  let i = c.Ng(c.dg(t));
  return o.ZP.isPremium(e, a.p9.TIER_2) ? l.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
    maxSize: i
  }) : o.ZP.isPremium(e, a.p9.TIER_1) ? l.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format({
    maxSize: i
  }) : l.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
    maxSize: i
  })
}

function r(e, t) {
  return c.nA(e, t) || c.vY(e)
}

function s(e) {
  return e.reduce((e, t) => (t.item.platform === n.ow.WEB && e.push(t.item.file), e), [])
}
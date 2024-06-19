a.d(l, {
  Z: function() {
    return d
  }
});
var i = a(735250);
a(470079);
var n = a(866442),
  r = a(518738),
  t = a(176278),
  o = a(134433),
  s = a(981631);

function d(e) {
  var l;
  let {
    guildId: a,
    role: d,
    size: c,
    className: u
  } = e, m = (0, r.p9)({
    guildId: a,
    roleId: d.id,
    size: c
  });
  return null != m ? (0, i.jsx)(t.Z, {
    className: u,
    ...m
  }) : (0, i.jsx)(o.Z, {
    color: null !== (l = d.colorString) && void 0 !== l ? l : (0, n.Rf)(s.p6O),
    className: u,
    size: c
  })
}
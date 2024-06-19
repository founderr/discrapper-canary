n.d(t, {
  Z: function() {
    return u
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(113434),
  a = n(497505),
  r = n(37303),
  o = n(683650),
  c = n(59685);

function u(e) {
  let {
    questId: t
  } = e, {
    quests: n,
    isFetchingCurrentQuests: u
  } = (0, l.J2)({
    fetchPolicy: "cache-or-network"
  }), d = n.find(e => e.id === t);
  return u ? (0, s.jsx)(i.Spinner, {
    className: c.spinner
  }) : null == d ? (0, s.jsx)(o.o, {}) : (0, s.jsx)(r.Z, {
    quest: d,
    location: a.jn.QUESTS_EMBED
  }, d.id)
}
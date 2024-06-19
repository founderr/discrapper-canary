var l = n(735250),
  i = n(470079),
  s = n(450369),
  a = n(235753);
t.Z = i.memo(function(e) {
  let {
    channel: t,
    participants: n,
    tileWidth: i,
    selectedParticipant: r
  } = e;
  return (0, l.jsx)("div", {
    className: a.rowContainer,
    children: n.map(e => e.id === (null == r ? void 0 : r.id) ? null : (0, l.jsx)(s.Z, {
      channel: t,
      participant: e,
      width: i
    }, e.id))
  })
})
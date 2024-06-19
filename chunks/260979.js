n(653041);
var l = n(735250),
  i = n(470079),
  s = n(965288),
  a = n(311496);
t.Z = i.memo(function(e) {
  let {
    channel: t,
    participants: n,
    maxTiles: i
  } = e;
  if (0 === n.length) return null;
  let r = [];
  for (let e = 0; e < i; e++)
    if (e < n.length) {
      let i = n[e];
      r.push((0, l.jsx)(s.Z, {
        channel: t,
        participant: i
      }, i.id))
    } else r.push((0, l.jsx)(s.y, {}, e));
  return (0, l.jsx)("div", {
    className: a.participants,
    children: r
  })
})
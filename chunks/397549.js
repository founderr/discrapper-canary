n.d(t, {
  Z: function() {
    return a
  }
});
var s = n(735250);
n(470079);
var i = n(786089),
  l = n(256426);

function a(e) {
  let {
    quests: t
  } = e;
  return (0, s.jsx)("div", {
    className: l.container,
    children: t.map(e => (0, s.jsx)(i.Z, {
      quest: e
    }, e.id))
  })
}
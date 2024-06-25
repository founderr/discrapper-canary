n.d(t, {
  Z: function() {
    return r
  }
});
var i = n(735250);
n(470079);
var s = n(786089),
  a = n(256426);

function r(e) {
  let {
    quests: t
  } = e;
  return (0, i.jsx)("div", {
    className: a.container,
    children: t.map(e => (0, i.jsx)(s.Z, {
      quest: e
    }, e.id))
  })
}
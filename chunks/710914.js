n.d(t, {
  Z: function() {
return d;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(497505),
  o = n(415104),
  c = n(456727);

function d(e) {
  let {
quests: t,
selectedQuestId: n
  } = e;
  s.useEffect(() => {
for (let e of t)
  if (e.id === n) {
    let e = document.getElementById('quest-tile-'.concat(n));
    null == e || e.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
    break;
  }
  }, [
t,
n
  ]);
  let a = null != n;
  return (0, i.jsx)('div', {
className: c.container,
children: t.map(e => (0, i.jsx)(o.Z, {
  quest: e,
  questContent: l.jn.QUEST_HOME_DESKTOP,
  className: r()(c.questTile, {
    [c.selected]: a && e.id === n,
    [c.unselected]: a && e.id !== n
  })
}, e.id))
  }, null != n ? n : '');
}
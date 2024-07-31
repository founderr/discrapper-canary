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
  var t;
  let {
quests: n,
selectedQuestId: a
  } = e;
  s.useEffect(() => {
for (let e of n)
  if (e.id === a) {
    let e = document.getElementById('quest-tile-'.concat(a));
    null == e || e.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
    break;
  }
  }, [
n,
a
  ]);
  let d = null != a,
[u, _] = s.useState(window.innerWidth);
  s.useEffect(() => {
let e = () => {
  _(window.innerWidth);
};
return window.addEventListener('resize', e), () => {
  window.removeEventListener('resize', e);
};
  }, []);
  let h = (t = u) >= 1610 ? 3 : t >= 1340 ? 2 : 1;
  return (0, i.jsx)('div', {
className: c.container,
children: n.map((e, t) => {
  let n = Math.floor(t / h);
  return (0, i.jsx)(o.Z, {
    quest: e,
    questContent: l.jn.QUEST_HOME_DESKTOP,
    contentPosition: t,
    rowIndex: n,
    className: r()(c.questTile, {
      [c.selected]: d && e.id === a,
      [c.unselected]: d && e.id !== a
    })
  }, e.id);
})
  }, null != a ? a : '');
}
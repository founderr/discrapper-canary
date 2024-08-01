n.d(t, {
  Z: function() {
return _;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(44315),
  r = n(360048),
  l = n(709158),
  o = n(46140),
  c = n(981631),
  d = n(689938),
  u = n(139510);

function _(e) {
  let {
isSelected: t,
onClick: n
  } = e, _ = (0, l.Z)(o.dr.QUEST_HOME_DESKTOP), h = (0, a.Sl)(c.Ilk.WHITE);
  return _ ? (0, i.jsx)(r.Z, {
avatar: (0, i.jsx)(s.QuestsIcon, {
  color: t ? h.hex : void 0
}),
name: d.Z.Messages.QUESTS,
focusProps: {
  offset: {
    right: 4,
    top: 1,
    bottom: 1
  }
},
onClick: n,
wrapContent: !0,
selected: t,
className: u.categoryItem,
selectedClassName: u.selectedCategoryItem,
innerClassName: u.itemInner
  }, 'quest-home') : null;
}
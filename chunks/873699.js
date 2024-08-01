n.d(t, {
  Z: function() {
return T;
  }
}), n(724458), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(481060),
  l = n(668781),
  o = n(79390),
  c = n(222677),
  u = n(665906),
  d = n(496675),
  _ = n(768581),
  E = n(176354),
  I = n(981631),
  m = n(689938);

function T(e, t) {
  let {
reducedMotion: n
  } = a.useContext(r.AccessibilityPreferencesContext), T = (0, u.$R)(t), h = (0, s.e7)([d.Z], () => d.Z.can(I.Plq.MANAGE_MESSAGES, t) && T, [
t,
T
  ]), N = e.reactions.reduce((e, t) => {
var n;
return (null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) != null || null != e.find(e => null != e.id && e.id === t.emoji.id || e.name === t.emoji.name) ? e : [
  ...e,
  t.emoji
];
  }, []), f = (n, i) => {
n.shiftKey ? (0, c.$E)(t.id, e.id, i) : l.Z.show({
  title: m.Z.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_TITLE,
  body: m.Z.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_BODY,
  confirmText: m.Z.Messages.YES_TEXT,
  cancelText: m.Z.Messages.NO_TEXT,
  onConfirm: () => {
    (0, c.$E)(t.id, e.id, i);
  }
});
  };
  return !h || null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, o.eQ)(e) ? null : (0, i.jsx)(r.MenuItem, {
id: 'remove-emoji-reactions',
label: m.Z.Messages.REMOVE_EMOJI_REACTIONS,
color: 'danger',
children: N.map(e => {
  var t, a;
  return (0, i.jsx)(r.MenuItem, {
    id: 'remove-emoji-reactions-'.concat(null !== (t = e.name) && void 0 !== t ? t : e.id),
    label: null == e.id ? e.name : ':'.concat(e.name, ':'),
    action: t => f(t, e),
    imageUrl: t => {
      var i;
      let {
        isFocused: a
      } = t;
      return null != e.id ? _.ZP.getEmojiURL({
        id: e.id,
        animated: e.animated && (!n.enabled || a),
        size: 18
      }) : E.ZP.getURL(null !== (i = e.name) && void 0 !== i ? i : '');
    },
    dontCloseOnActionIfHoldingShiftKey: !0
  }, null !== (a = e.name) && void 0 !== a ? a : e.id);
})
  });
}
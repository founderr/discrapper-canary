n.d(t, {
  Z: function() {
return f;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(481060),
  l = n(543241),
  o = n(222677),
  c = n(995774),
  u = n(665906),
  d = n(695346),
  _ = n(496675),
  E = n(768581),
  I = n(585483),
  m = n(176354),
  T = n(981631),
  h = n(185923),
  N = n(689938);

function f(e, t) {
  let {
reducedMotion: n
  } = a.useContext(r.AccessibilityPreferencesContext), f = (0, u.$R)(t), C = (0, s.e7)([_.Z], () => (t.isPrivate() || _.Z.can(T.Plq.ADD_REACTIONS, t)) && f, [
t,
f
  ]), p = (0, l.MZ)(t.getGuildId());
  if (!d.nc.getSetting() || !C || e.type === T.uaV.GUILD_INVITE_REMINDER)
return null;
  let g = p.filter(e => !m.ZP.isEmojiFilteredOrLocked({
emoji: e,
channel: t,
intention: h.Hz.REACTION
  })).slice(0, 12).map((a, s) => {
var l, u;
return (0, i.jsx)(r.MenuItem, {
  color: 'default',
  id: null !== (u = null !== (l = a.id) && void 0 !== l ? l : a.optionallyDiverseSequence) && void 0 !== u ? u : a.name,
  label: ':'.concat(a.name, ':'),
  imageUrl: e => {
    var t;
    let {
      isFocused: i
    } = e;
    return null != a.id ? E.ZP.getEmojiURL({
      id: a.id,
      animated: a.animated && (!n.enabled || i),
      size: 18
    }) : m.ZP.getURL(null !== (t = a.optionallyDiverseSequence) && void 0 !== t ? t : '');
  },
  action: () => {
    (0, o.rU)(t.id, e.id, (0, c.g1)(a), o.TW.MESSAGE_CONTEXT_MENU);
  },
  dontCloseOnActionIfHoldingShiftKey: !0
}, s);
  });
  return (0, i.jsx)(r.MenuItem, {
id: 'add-reaction',
label: N.Z.Messages.ADD_REACTION,
action: () => {
  I.S.dispatchKeyed(T.LPv.TOGGLE_REACTION_POPOUT, e.id, {
    emojiPicker: !0
  });
},
color: 'default',
children: (0, i.jsxs)(i.Fragment, {
  children: [
    g,
    (0, i.jsx)(r.MenuSeparator, {}),
    (0, i.jsx)(r.MenuItem, {
      color: 'default',
      id: 'other-reactions',
      label: N.Z.Messages.VIEW_MORE,
      icon: r.ReactionIcon,
      action: () => {
        I.S.dispatchKeyed(T.LPv.TOGGLE_REACTION_POPOUT, e.id, {
          emojiPicker: !0
        });
      }
    })
  ]
})
  });
}
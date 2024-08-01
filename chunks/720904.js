n.d(t, {
  Z: function() {
return g;
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(442837),
  l = n(481060),
  o = n(543241),
  c = n(222677),
  u = n(995774),
  d = n(665906),
  _ = n(695346),
  E = n(496675),
  I = n(768581),
  m = n(176354),
  T = n(981631),
  h = n(185923),
  N = n(689938),
  f = n(27887);
let C = [
  'slight_smile',
  'frowning',
  'smile',
  'stuck_out_tongue',
  'wink'
];

function p(e) {
  var t;
  let {
emoji: n,
isFocused: s
  } = e, {
animated: r,
src: o,
surrogates: c
  } = n;
  return null == o && null != n.id ? o = I.ZP.getEmojiURL({
id: n.id,
animated: !!r,
size: 20
  }) : null == o && (o = m.ZP.getURL(c)), (0, i.jsx)(l.Tooltip, {
text: n.allNamesString,
hideOnClick: !0,
spacing: 16,
forceOpen: s,
children: e => (0, i.jsx)('div', {
  'aria-label': N.Z.Messages.ADD_REACTION_NAMED.format({
    emojiName: n.name
  }),
  className: a()(f.button, {
    [f.focused]: s
  }),
  ...e,
  children: null == o || '' === o.trim() ? (0, i.jsx)('span', {
    className: a()('emoji', 'emoji-text', f.icon),
    ...e,
    children: c
  }) : (0, i.jsx)('img', {
    className: f.icon,
    src: o,
    alt: ''
  })
})
  }, null !== (t = n.id) && void 0 !== t ? t : n.name);
}

function g(e, t) {
  let n = (0, o.MZ)(t.guild_id).filter(e => {
var n;
return !(e.useSpriteSheet && C.indexOf(null !== (n = e.uniqueName) && void 0 !== n ? n : '') >= 0) && !m.ZP.isEmojiPremiumLocked({
  emoji: e,
  channel: t,
  intention: h.Hz.REACTION
});
  });
  n.length > 4 && (n.length = 4);
  let s = _.nc.useSetting(),
a = (0, d.$R)(t),
I = (0, r.e7)([E.Z], () => s && a && (t.isPrivate() || E.Z.can(T.Plq.ADD_REACTIONS, t)), [
  t,
  a,
  s
]),
N = n => {
  (0, c.rU)(t.id, e.id, (0, u.g1)(n), void 0);
};
  return I && n.length > 0 ? (0, i.jsx)(l.MenuGroup, {
className: f.wrapper,
children: n.map((e, t) => {
  var n;
  return (0, i.jsx)(l.MenuItem, {
    id: 'quickreact-'.concat(null !== (n = e.id) && void 0 !== n ? n : t),
    render: t => {
      let {
        isFocused: n
      } = t;
      return (0, i.jsx)(p, {
        emoji: e,
        isFocused: n
      });
    },
    action: () => N(e),
    dontCloseOnActionIfHoldingShiftKey: !0
  }, t);
})
  }) : null;
}
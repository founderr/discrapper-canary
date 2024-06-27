t.d(n, {
  Z: function() {
    return Z
  }
});
var i = t(735250),
  a = t(470079),
  r = t(442837),
  l = t(481060),
  o = t(543241),
  s = t(222677),
  u = t(995774),
  d = t(665906),
  c = t(695346),
  E = t(496675),
  f = t(768581),
  M = t(585483),
  I = t(176354),
  g = t(981631),
  m = t(185923),
  _ = t(689938);

function Z(e, n) {
  let {
    reducedMotion: t
  } = a.useContext(l.AccessibilityPreferencesContext), Z = (0, d.$R)(n), S = (0, r.e7)([E.Z], () => (n.isPrivate() || E.Z.can(g.Plq.ADD_REACTIONS, n)) && Z, [n, Z]), v = (0, o.MZ)(n.getGuildId());
  if (!c.nc.getSetting() || !S || e.type === g.uaV.GUILD_INVITE_REMINDER) return null;
  let A = v.filter(e => !I.ZP.isEmojiFilteredOrLocked({
    emoji: e,
    channel: n,
    intention: m.Hz.REACTION
  })).slice(0, 12).map((a, r) => {
    var o, d;
    return (0, i.jsx)(l.MenuItem, {
      color: "default",
      id: null !== (d = null !== (o = a.id) && void 0 !== o ? o : a.optionallyDiverseSequence) && void 0 !== d ? d : a.name,
      label: ":".concat(a.name, ":"),
      imageUrl: e => {
        var n;
        let {
          isFocused: i
        } = e;
        return null != a.id ? f.ZP.getEmojiURL({
          id: a.id,
          animated: a.animated && (!t.enabled || i),
          size: 18
        }) : I.ZP.getURL(null !== (n = a.optionallyDiverseSequence) && void 0 !== n ? n : "")
      },
      action: () => {
        (0, s.rU)(n.id, e.id, (0, u.g1)(a), void 0)
      },
      dontCloseOnActionIfHoldingShiftKey: !0
    }, r)
  });
  return (0, i.jsx)(l.MenuItem, {
    id: "add-reaction",
    label: _.Z.Messages.ADD_REACTION,
    action: () => {
      M.S.dispatchKeyed(g.LPv.TOGGLE_REACTION_POPOUT, e.id, {
        emojiPicker: !0
      })
    },
    color: "default",
    children: (0, i.jsxs)(i.Fragment, {
      children: [A, (0, i.jsx)(l.MenuSeparator, {}), (0, i.jsx)(l.MenuItem, {
        color: "default",
        id: "other-reactions",
        label: _.Z.Messages.VIEW_MORE,
        icon: l.ReactionIcon,
        action: () => {
          M.S.dispatchKeyed(g.LPv.TOGGLE_REACTION_POPOUT, e.id, {
            emojiPicker: !0
          })
        }
      })]
    })
  })
}
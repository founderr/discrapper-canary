t.d(n, {
  Z: function() {
    return _
  }
});
var i = t(735250),
  a = t(470079),
  l = t(442837),
  r = t(481060),
  o = t(543241),
  u = t(222677),
  s = t(995774),
  c = t(665906),
  d = t(695346),
  E = t(496675),
  f = t(768581),
  M = t(585483),
  g = t(176354),
  m = t(981631),
  I = t(185923),
  Z = t(689938);

function _(e, n) {
  let {
    reducedMotion: t
  } = a.useContext(r.AccessibilityPreferencesContext), _ = (0, c.$R)(n), v = (0, l.e7)([E.Z], () => (n.isPrivate() || E.Z.can(m.Plq.ADD_REACTIONS, n)) && _, [n, _]), S = (0, o.MZ)(n.getGuildId());
  if (!d.nc.getSetting() || !v || e.type === m.uaV.GUILD_INVITE_REMINDER) return null;
  let A = S.filter(e => !g.ZP.isEmojiFilteredOrLocked({
    emoji: e,
    channel: n,
    intention: I.Hz.REACTION
  })).slice(0, 12).map((a, l) => {
    var o, c, d;
    return (0, i.jsx)(r.MenuItem, {
      color: "default",
      id: null !== (d = null !== (c = null !== (o = a.id) && void 0 !== o ? o : a.optionallyDiverseSequence) && void 0 !== c ? c : a.name) && void 0 !== d ? d : ":".concat(a.name, ":"),
      label: null == a.id ? a.name : ":".concat(a.name, ":"),
      imageUrl: e => {
        var n;
        let {
          isFocused: i
        } = e;
        return null != a.id ? f.ZP.getEmojiURL({
          id: a.id,
          animated: a.animated && (!t.enabled || i),
          size: 18
        }) : g.ZP.getURL(null !== (n = a.optionallyDiverseSequence) && void 0 !== n ? n : "")
      },
      action: () => {
        (0, u.rU)(n.id, e.id, (0, s.g1)(a), void 0)
      },
      dontCloseOnActionIfHoldingShiftKey: !0
    }, l)
  });
  return (0, i.jsx)(r.MenuItem, {
    id: "add-reaction",
    label: Z.Z.Messages.ADD_REACTION,
    action: () => {
      M.S.dispatchKeyed(m.LPv.TOGGLE_REACTION_POPOUT, e.id, {
        emojiPicker: !0
      })
    },
    color: "default",
    children: (0, i.jsxs)(i.Fragment, {
      children: [A, (0, i.jsx)(r.MenuSeparator, {}), (0, i.jsx)(r.MenuItem, {
        color: "default",
        id: "other-reactions",
        label: Z.Z.Messages.VIEW_MORE,
        icon: r.ReactionIcon,
        action: () => {
          M.S.dispatchKeyed(m.LPv.TOGGLE_REACTION_POPOUT, e.id, {
            emojiPicker: !0
          })
        }
      })]
    })
  })
}
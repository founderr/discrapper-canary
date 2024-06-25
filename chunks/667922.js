t.d(n, {
  Z: function() {
    return _
  }
});
var i = t(735250),
  a = t(470079),
  r = t(442837),
  l = t(481060),
  o = t(543241),
  u = t(222677),
  s = t(995774),
  c = t(665906),
  d = t(695346),
  E = t(496675),
  f = t(768581),
  I = t(585483),
  M = t(176354),
  g = t(981631),
  m = t(185923),
  Z = t(689938);

function _(e, n) {
  let {
    reducedMotion: t
  } = a.useContext(l.AccessibilityPreferencesContext), _ = (0, c.$R)(n), v = (0, r.e7)([E.Z], () => (n.isPrivate() || E.Z.can(g.Plq.ADD_REACTIONS, n)) && _, [n, _]), S = (0, o.MZ)(n.getGuildId());
  if (!d.nc.getSetting() || !v || e.type === g.uaV.GUILD_INVITE_REMINDER) return null;
  let A = S.filter(e => !M.ZP.isEmojiFilteredOrLocked({
    emoji: e,
    channel: n,
    intention: m.Hz.REACTION
  })).slice(0, 12).map((a, r) => {
    var o, c, d;
    return (0, i.jsx)(l.MenuItem, {
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
        }) : M.ZP.getURL(null !== (n = a.optionallyDiverseSequence) && void 0 !== n ? n : "")
      },
      action: () => {
        (0, u.rU)(n.id, e.id, (0, s.g1)(a), void 0)
      },
      dontCloseOnActionIfHoldingShiftKey: !0
    }, r)
  });
  return (0, i.jsx)(l.MenuItem, {
    id: "add-reaction",
    label: Z.Z.Messages.ADD_REACTION,
    action: () => {
      I.S.dispatchKeyed(g.LPv.TOGGLE_REACTION_POPOUT, e.id, {
        emojiPicker: !0
      })
    },
    color: "default",
    children: (0, i.jsxs)(i.Fragment, {
      children: [A, (0, i.jsx)(l.MenuSeparator, {}), (0, i.jsx)(l.MenuItem, {
        color: "default",
        id: "other-reactions",
        label: Z.Z.Messages.VIEW_MORE,
        icon: l.ReactionIcon,
        action: () => {
          I.S.dispatchKeyed(g.LPv.TOGGLE_REACTION_POPOUT, e.id, {
            emojiPicker: !0
          })
        }
      })]
    })
  })
}
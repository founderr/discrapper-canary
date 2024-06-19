t.d(n, {
  Z: function() {
    return m
  }
}), t(724458), t(47120);
var i = t(735250),
  a = t(470079),
  l = t(442837),
  r = t(481060),
  o = t(668781),
  u = t(79390),
  s = t(222677),
  c = t(665906),
  d = t(496675),
  E = t(768581),
  f = t(176354),
  M = t(981631),
  g = t(689938);

function m(e, n) {
  let {
    reducedMotion: t
  } = a.useContext(r.AccessibilityPreferencesContext), m = (0, c.$R)(n), I = (0, l.e7)([d.Z], () => d.Z.can(M.Plq.MANAGE_MESSAGES, n) && m, [n, m]), Z = e.reactions.reduce((e, n) => {
    var t;
    return (null === (t = n.count_details) || void 0 === t ? void 0 : t.vote) != null || null != e.find(e => null != e.id && e.id === n.emoji.id || e.name === n.emoji.name) ? e : [...e, n.emoji]
  }, []), _ = (t, i) => {
    t.shiftKey ? (0, s.$E)(n.id, e.id, i) : o.Z.show({
      title: g.Z.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_TITLE,
      body: g.Z.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_BODY,
      confirmText: g.Z.Messages.YES_TEXT,
      cancelText: g.Z.Messages.NO_TEXT,
      onConfirm: () => {
        (0, s.$E)(n.id, e.id, i)
      }
    })
  };
  return !I || null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, u.eQ)(e) ? null : (0, i.jsx)(r.MenuItem, {
    id: "remove-emoji-reactions",
    label: g.Z.Messages.REMOVE_EMOJI_REACTIONS,
    color: "danger",
    children: Z.map(e => {
      var n, a;
      return (0, i.jsx)(r.MenuItem, {
        id: "remove-emoji-reactions-".concat(null !== (n = e.name) && void 0 !== n ? n : e.id),
        label: null == e.id ? e.name : ":".concat(e.name, ":"),
        action: n => _(n, e),
        imageUrl: n => {
          var i;
          let {
            isFocused: a
          } = n;
          return null != e.id ? E.ZP.getEmojiURL({
            id: e.id,
            animated: e.animated && (!t.enabled || a),
            size: 18
          }) : f.ZP.getURL(null !== (i = e.name) && void 0 !== i ? i : "")
        },
        dontCloseOnActionIfHoldingShiftKey: !0
      }, null !== (a = e.name) && void 0 !== a ? a : e.id)
    })
  })
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("735250"),
  i = n("470079"),
  l = n("442837"),
  s = n("481060"),
  r = n("543241"),
  u = n("222677"),
  o = n("995774"),
  d = n("665906"),
  c = n("695346"),
  f = n("496675"),
  M = n("250690"),
  E = n("768581"),
  m = n("585483"),
  g = n("176354"),
  v = n("981631"),
  I = n("185923"),
  h = n("689938");

function p(e, t) {
  let {
    reducedMotion: n
  } = i.useContext(s.AccessibilityPreferencesContext), p = (0, d.useIsActiveChannelOrUnarchivableThread)(t), S = (0, l.useStateFromStores)([f.default], () => (t.isPrivate() || f.default.can(v.Permissions.ADD_REACTIONS, t)) && p, [t, p]), A = (0, r.useEmojiInPriorityOrder)(t.getGuildId());
  if (!c.RenderReactions.getSetting() || !S || e.type === v.MessageTypes.GUILD_INVITE_REMINDER) return null;
  let C = A.filter(e => !g.default.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: I.EmojiIntention.REACTION
  })).slice(0, 12).map((i, l) => {
    var r, d, c;
    return (0, a.jsx)(s.MenuItem, {
      color: "default",
      id: null !== (c = null !== (d = null !== (r = i.id) && void 0 !== r ? r : i.optionallyDiverseSequence) && void 0 !== d ? d : i.name) && void 0 !== c ? c : ":".concat(i.name, ":"),
      label: null == i.id ? i.name : ":".concat(i.name, ":"),
      imageUrl: e => {
        var t;
        let {
          isFocused: a
        } = e;
        return null != i.id ? E.default.getEmojiURL({
          id: i.id,
          animated: i.animated && (!n.enabled || a),
          size: 18
        }) : g.default.getURL(null !== (t = i.optionallyDiverseSequence) && void 0 !== t ? t : "")
      },
      action: () => {
        (0, u.addReaction)(t.id, e.id, (0, o.toReactionEmoji)(i), void 0)
      },
      dontCloseOnActionIfHoldingShiftKey: !0
    }, l)
  });
  return (0, a.jsx)(s.MenuItem, {
    id: "add-reaction",
    label: h.default.Messages.ADD_REACTION,
    action: () => {
      m.ComponentDispatch.dispatchKeyed(v.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, e.id, {
        emojiPicker: !0
      })
    },
    color: "default",
    children: (0, a.jsxs)(a.Fragment, {
      children: [C, (0, a.jsx)(s.MenuSeparator, {}), (0, a.jsx)(s.MenuItem, {
        color: "default",
        id: "other-reactions",
        label: h.default.Messages.VIEW_MORE,
        icon: M.default,
        action: () => {
          m.ComponentDispatch.dispatchKeyed(v.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, e.id, {
            emojiPicker: !0
          })
        }
      })]
    })
  })
}
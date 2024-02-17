"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983"),
  i = n("884691"),
  l = n("446674"),
  s = n("77078"),
  u = n("788506"),
  r = n("166257"),
  d = n("432173"),
  o = n("300322"),
  c = n("845579"),
  f = n("957255"),
  E = n("79945"),
  M = n("315102"),
  m = n("659500"),
  g = n("402671"),
  S = n("49111"),
  I = n("958706"),
  p = n("782340");

function h(e, t) {
  let {
    reducedMotion: n
  } = i.useContext(s.AccessibilityPreferencesContext), h = (0, o.useIsActiveChannelOrUnarchivableThread)(t), v = (0, l.useStateFromStores)([f.default], () => (t.isPrivate() || f.default.can(S.Permissions.ADD_REACTIONS, t)) && h, [t, h]), _ = (0, u.useEmojiInPriorityOrder)(t.getGuildId());
  if (!c.RenderReactions.getSetting() || !v || e.type === S.MessageTypes.GUILD_INVITE_REMINDER) return null;
  let A = _.filter(e => !g.default.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: I.EmojiIntention.REACTION
  })).slice(0, 12).map((i, l) => {
    var u, o, c;
    return (0, a.jsx)(s.MenuItem, {
      color: "default",
      id: null !== (c = null !== (o = null !== (u = i.id) && void 0 !== u ? u : i.optionallyDiverseSequence) && void 0 !== o ? o : i.name) && void 0 !== c ? c : ":".concat(i.name, ":"),
      label: null == i.id ? i.name : ":".concat(i.name, ":"),
      imageUrl: e => {
        var t;
        let {
          isFocused: a
        } = e;
        return null != i.id ? M.default.getEmojiURL({
          id: i.id,
          animated: i.animated && (!n.enabled || a),
          size: 18
        }) : g.default.getURL(null !== (t = i.optionallyDiverseSequence) && void 0 !== t ? t : "")
      },
      action: () => {
        (0, r.addReaction)(t.id, e.id, (0, d.toReactionEmoji)(i), void 0)
      },
      dontCloseOnActionIfHoldingShiftKey: !0
    }, l)
  });
  return (0, a.jsx)(s.MenuItem, {
    id: "add-reaction",
    label: p.default.Messages.ADD_REACTION,
    action: () => {
      m.ComponentDispatch.dispatchKeyed(S.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, e.id, {
        emojiPicker: !0
      })
    },
    color: "default",
    children: (0, a.jsxs)(a.Fragment, {
      children: [A, (0, a.jsx)(s.MenuSeparator, {}), (0, a.jsx)(s.MenuItem, {
        color: "default",
        id: "other-reactions",
        label: p.default.Messages.VIEW_MORE,
        icon: E.default,
        action: () => {
          m.ComponentDispatch.dispatchKeyed(S.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, e.id, {
            emojiPicker: !0
          })
        }
      })]
    })
  })
}
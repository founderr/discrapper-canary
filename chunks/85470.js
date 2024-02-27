"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
});
var s = n("884691"),
  a = n("819689"),
  l = n("267567"),
  i = n("625149"),
  r = n("300322"),
  o = n("967241"),
  u = n("845579"),
  d = n("271938"),
  c = n("42203"),
  f = n("836417"),
  h = n("26989"),
  C = n("88093"),
  p = n("377253"),
  m = n("957255"),
  E = n("306160"),
  g = n("659500"),
  S = n("773336"),
  _ = n("299039"),
  T = n("61400"),
  A = n("913491"),
  M = n("583022"),
  I = n("363396"),
  N = n("49111");

function v(e) {
  return m.default.can(N.Permissions.MANAGE_MESSAGES, e)
}
var L = function(e, t, n) {
  let L = s.useRef(n);
  return L.current = n, s.useCallback(n => {
    var s, R, x, y, O, D;
    if (!L.current || n.target !== n.currentTarget) return;
    let P = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
      j = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
      b = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
      F = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
      H = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
      U = p.default.getMessage(t, e),
      k = c.default.getChannel(t);
    if (null == U || null == k) return;
    let B = d.default.getId(),
      w = U.author.id === B,
      G = (null === (s = U.interactionMetadata) || void 0 === s ? void 0 : s.user_id) === B;
    switch (n.key.toLowerCase()) {
      case "backspace":
        P && (v(k) || w || G) && (n.preventDefault(), (0, I.deleteMessage)(k, U, n));
        break;
      case "c":
        ((0, S.isMac)() ? F : b) && E.SUPPORTS_COPY && (n.preventDefault(), (0, E.copy)(U.content));
        break;
      case "e":
        if (P) {
          ;
          if (R = B, x = k, y = U, !x.isSystemDM() && (0, T.default)(y, R)) n.preventDefault(), (0, I.editMessage)(k, U)
        }
        break;
      case "p":
        if (P || H) {
          ;
          if (O = k, D = U, !O.isSystemDM() && !(0, A.default)(D) && (v(O) || O.isPrivate())) n.preventDefault(), (0, I.pinMessage)(k, U, n)
        }
        break;
      case "+":
        (P || H) && function(e) {
          let t = null == e.guild_id || C.default.canChatInGuild(e.guild_id),
            n = u.RenderReactions.getSetting(),
            {
              disableReactionCreates: s
            } = (0, M.default)({
              channel: e,
              canChat: t,
              renderReactions: n,
              canAddNewReactions: t && m.default.can(N.Permissions.ADD_REACTIONS, e),
              isLurking: null != e.guild_id && l.default.isLurking(e.guild_id),
              isGuest: null != e.guild_id && h.default.isCurrentUserGuest(e.guild_id),
              isActiveChannelOrUnarchivableThread: (0, r.getIsActiveChannelOrUnarchivableThread)(e)
            });
          return !s && n
        }(k) && (n.preventDefault(), g.ComponentDispatch.dispatchKeyed(N.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, U.id, {
          emojiPicker: !0
        }));
        break;
      case "r":
        (P || H) && (0, i.canReplyToMessage)(k, U) && (n.preventDefault(), (0, I.replyToMessage)(k, U, n));
        break;
      case "t":
        if (P && (0, r.computeCanStartPublicThread)(k, U)) n.preventDefault(), (0, o.openThreadSidebarForCreating)(k, U, "Message Shortcut");
        else if (U.hasFlag(N.MessageFlags.HAS_THREAD)) {
          let e = c.default.getChannel(_.default.castMessageIdAsChannelId(U.id));
          null != e && (P || H) && (n.preventDefault(), (0, o.openThreadSidebarForViewing)(e, H))
        }
        break;
      case "enter":
        j && (n.preventDefault(), (0, I.markMessageUnread)(k, U));
        break;
      case "escape":
        f.default.isEditing(k.id, U.id) ? a.default.endEditMessage(k.id) : g.ComponentDispatch.dispatch(N.ComponentActions.TEXTAREA_FOCUS)
    }
  }, [e, t])
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var a = n("884691"),
  s = n("819689"),
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
  _ = n("61400"),
  T = n("913491"),
  A = n("583022"),
  M = n("363396"),
  I = n("49111");

function N(e) {
  return m.default.can(I.Permissions.MANAGE_MESSAGES, e)
}
var v = function(e, t, n) {
  let v = a.useRef(n);
  return v.current = n, a.useCallback(n => {
    var a, L, R, x, y;
    if (!v.current || n.target !== n.currentTarget) return;
    let O = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
      D = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
      j = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
      P = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
      b = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
      F = p.default.getMessage(t, e),
      H = c.default.getChannel(t);
    if (null == F || null == H) return;
    let U = d.default.getId(),
      k = F.author.id === U;
    switch (n.key.toLowerCase()) {
      case "backspace":
        O && (N(H) || k) && (n.preventDefault(), (0, M.deleteMessage)(H, F, n));
        break;
      case "c":
        ((0, S.isMac)() ? P : j) && E.SUPPORTS_COPY && (n.preventDefault(), (0, E.copy)(F.content));
        break;
      case "e":
        if (O) {
          ;
          if (a = U, L = H, R = F, !L.isSystemDM() && (0, _.default)(R, a)) n.preventDefault(), (0, M.editMessage)(H, F)
        }
        break;
      case "p":
        if (O || b) {
          ;
          if (x = H, y = F, !x.isSystemDM() && !(0, T.default)(y) && (N(x) || x.isPrivate())) n.preventDefault(), (0, M.pinMessage)(H, F, n)
        }
        break;
      case "+":
        (O || b) && function(e) {
          let t = null == e.guild_id || C.default.canChatInGuild(e.guild_id),
            n = u.RenderReactions.getSetting(),
            {
              disableReactionCreates: a
            } = (0, A.default)({
              channel: e,
              canChat: t,
              renderReactions: n,
              canAddNewReactions: t && m.default.can(I.Permissions.ADD_REACTIONS, e),
              isLurking: null != e.guild_id && l.default.isLurking(e.guild_id),
              isGuest: null != e.guild_id && h.default.isCurrentUserGuest(e.guild_id),
              isActiveChannelOrUnarchivableThread: (0, r.getIsActiveChannelOrUnarchivableThread)(e)
            });
          return !a && n
        }(H) && (n.preventDefault(), g.ComponentDispatch.dispatchKeyed(I.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, F.id, {
          emojiPicker: !0
        }));
        break;
      case "r":
        (O || b) && (0, i.canReplyToMessage)(H, F) && (n.preventDefault(), (0, M.replyToMessage)(H, F, n));
        break;
      case "t":
        if (O && (0, r.computeCanStartPublicThread)(H, F)) n.preventDefault(), (0, o.openThreadSidebarForCreating)(H, F, "Message Shortcut");
        else if (F.hasFlag(I.MessageFlags.HAS_THREAD)) {
          let e = c.default.getChannel(F.id);
          null != e && (O || b) && (n.preventDefault(), (0, o.openThreadSidebarForViewing)(e, b))
        }
        break;
      case "enter":
        D && (n.preventDefault(), (0, M.markMessageUnread)(H, F));
        break;
      case "escape":
        f.default.isEditing(H.id, F.id) ? s.default.endEditMessage(H.id) : g.ComponentDispatch.dispatch(I.ComponentActions.TEXTAREA_FOCUS)
    }
  }, [e, t])
}
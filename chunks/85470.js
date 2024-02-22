"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
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
  let L = a.useRef(n);
  return L.current = n, a.useCallback(n => {
    var a, R, x, y, O;
    if (!L.current || n.target !== n.currentTarget) return;
    let D = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
      j = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
      P = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
      b = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
      H = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
      F = p.default.getMessage(t, e),
      U = c.default.getChannel(t);
    if (null == F || null == U) return;
    let k = d.default.getId(),
      w = F.author.id === k;
    switch (n.key.toLowerCase()) {
      case "backspace":
        D && (v(U) || w) && (n.preventDefault(), (0, I.deleteMessage)(U, F, n));
        break;
      case "c":
        ((0, S.isMac)() ? b : P) && E.SUPPORTS_COPY && (n.preventDefault(), (0, E.copy)(F.content));
        break;
      case "e":
        if (D) {
          ;
          if (a = k, R = U, x = F, !R.isSystemDM() && (0, T.default)(x, a)) n.preventDefault(), (0, I.editMessage)(U, F)
        }
        break;
      case "p":
        if (D || H) {
          ;
          if (y = U, O = F, !y.isSystemDM() && !(0, A.default)(O) && (v(y) || y.isPrivate())) n.preventDefault(), (0, I.pinMessage)(U, F, n)
        }
        break;
      case "+":
        (D || H) && function(e) {
          let t = null == e.guild_id || C.default.canChatInGuild(e.guild_id),
            n = u.RenderReactions.getSetting(),
            {
              disableReactionCreates: a
            } = (0, M.default)({
              channel: e,
              canChat: t,
              renderReactions: n,
              canAddNewReactions: t && m.default.can(N.Permissions.ADD_REACTIONS, e),
              isLurking: null != e.guild_id && l.default.isLurking(e.guild_id),
              isGuest: null != e.guild_id && h.default.isCurrentUserGuest(e.guild_id),
              isActiveChannelOrUnarchivableThread: (0, r.getIsActiveChannelOrUnarchivableThread)(e)
            });
          return !a && n
        }(U) && (n.preventDefault(), g.ComponentDispatch.dispatchKeyed(N.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, F.id, {
          emojiPicker: !0
        }));
        break;
      case "r":
        (D || H) && (0, i.canReplyToMessage)(U, F) && (n.preventDefault(), (0, I.replyToMessage)(U, F, n));
        break;
      case "t":
        if (D && (0, r.computeCanStartPublicThread)(U, F)) n.preventDefault(), (0, o.openThreadSidebarForCreating)(U, F, "Message Shortcut");
        else if (F.hasFlag(N.MessageFlags.HAS_THREAD)) {
          let e = c.default.getChannel(_.default.castMessageIdAsChannelId(F.id));
          null != e && (D || H) && (n.preventDefault(), (0, o.openThreadSidebarForViewing)(e, H))
        }
        break;
      case "enter":
        j && (n.preventDefault(), (0, I.markMessageUnread)(U, F));
        break;
      case "escape":
        f.default.isEditing(U.id, F.id) ? s.default.endEditMessage(U.id) : g.ComponentDispatch.dispatch(N.ComponentActions.TEXTAREA_FOCUS)
    }
  }, [e, t])
}
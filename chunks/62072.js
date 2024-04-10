"use strict";
n.r(t);
var a = n("470079"),
  l = n("904245"),
  s = n("41776"),
  i = n("280845"),
  r = n("665906"),
  o = n("488131"),
  u = n("695346"),
  d = n("314897"),
  c = n("592125"),
  f = n("323873"),
  h = n("271383"),
  m = n("607744"),
  p = n("375954"),
  E = n("496675"),
  C = n("572004"),
  g = n("585483"),
  S = n("358085"),
  _ = n("709054"),
  T = n("418476"),
  I = n("901461"),
  A = n("432376"),
  v = n("996861"),
  x = n("981631");

function N(e) {
  return E.default.can(x.Permissions.MANAGE_MESSAGES, e)
}
t.default = function(e, t, n) {
  let M = a.useRef(n);
  return M.current = n, a.useCallback(n => {
    var a, R, L, y, j;
    if (!M.current || n.target !== n.currentTarget) return;
    let O = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
      P = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
      D = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
      b = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
      U = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
      F = p.default.getMessage(t, e),
      w = c.default.getChannel(t);
    if (null == F || null == w) return;
    let k = d.default.getId();
    switch (n.key.toLowerCase()) {
      case "backspace":
        O && (N(w) || F.canDeleteOwnMessage(k)) && (n.preventDefault(), (0, v.deleteMessage)(w, F, n));
        break;
      case "c":
        ((0, S.isMac)() ? b : D) && C.SUPPORTS_COPY && (n.preventDefault(), (0, C.copy)(F.content));
        break;
      case "e":
        if (O) {
          ;
          if (a = k, R = w, L = F, !R.isSystemDM() && (0, T.default)(L, a)) n.preventDefault(), (0, v.editMessage)(w, F)
        }
        break;
      case "p":
        if (O || U) {
          ;
          if (y = w, j = F, !y.isSystemDM() && !(0, I.default)(j) && (N(y) || y.isPrivate())) n.preventDefault(), (0, v.pinMessage)(w, F, n)
        }
        break;
      case "+":
        (O || U) && function(e) {
          let t = null == e.guild_id || m.default.canChatInGuild(e.guild_id),
            n = u.RenderReactions.getSetting(),
            {
              disableReactionCreates: a
            } = (0, A.default)({
              channel: e,
              canChat: t,
              renderReactions: n,
              canAddNewReactions: t && E.default.can(x.Permissions.ADD_REACTIONS, e),
              isLurking: null != e.guild_id && s.default.isLurking(e.guild_id),
              isGuest: null != e.guild_id && h.default.isCurrentUserGuest(e.guild_id),
              isActiveChannelOrUnarchivableThread: (0, r.getIsActiveChannelOrUnarchivableThread)(e)
            });
          return !a && n
        }(w) && (n.preventDefault(), g.ComponentDispatch.dispatchKeyed(x.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, F.id, {
          emojiPicker: !0
        }));
        break;
      case "r":
        (O || U) && (0, i.canReplyToMessage)(w, F) && (n.preventDefault(), (0, v.replyToMessage)(w, F, n));
        break;
      case "t":
        if (O && (0, r.computeCanStartPublicThread)(w, F)) n.preventDefault(), (0, o.openThreadSidebarForCreating)(w, F, "Message Shortcut");
        else if (F.hasFlag(x.MessageFlags.HAS_THREAD)) {
          let e = c.default.getChannel(_.default.castMessageIdAsChannelId(F.id));
          null != e && (O || U) && (n.preventDefault(), (0, o.openThreadSidebarForViewing)(e, U))
        }
        break;
      case "enter":
        P && (n.preventDefault(), (0, v.markMessageUnread)(w, F));
        break;
      case "escape":
        f.default.isEditing(w.id, F.id) ? l.default.endEditMessage(w.id) : g.ComponentDispatch.dispatch(x.ComponentActions.TEXTAREA_FOCUS)
    }
  }, [e, t])
}
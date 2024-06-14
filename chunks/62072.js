"use strict";
n.r(t);
var a = n("470079"),
  l = n("904245"),
  s = n("346610"),
  i = n("868643"),
  r = n("912332"),
  o = n("41776"),
  u = n("280845"),
  d = n("665906"),
  c = n("488131"),
  f = n("695346"),
  h = n("314897"),
  m = n("592125"),
  p = n("323873"),
  E = n("271383"),
  C = n("607744"),
  g = n("375954"),
  S = n("496675"),
  _ = n("572004"),
  T = n("585483"),
  I = n("358085"),
  A = n("709054"),
  v = n("418476"),
  x = n("901461"),
  N = n("432376"),
  M = n("996861"),
  y = n("981631");

function R(e) {
  return S.default.can(y.Permissions.MANAGE_MESSAGES, e)
}
t.default = function(e, t, n) {
  let L = a.useRef(n);
  return L.current = n, a.useCallback(n => {
    var a, j, O, P, D;
    if (!L.current || n.target !== n.currentTarget) return;
    let b = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
      U = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
      F = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
      w = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
      k = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
      H = g.default.getMessage(t, e),
      G = m.default.getChannel(t);
    if (null == H || null == G) return;
    let B = h.default.getId();
    switch (n.key.toLowerCase()) {
      case "backspace":
        b && (R(G) || H.canDeleteOwnMessage(B)) && (n.preventDefault(), (0, M.deleteMessage)(G, H, n));
        break;
      case "c":
        ((0, I.isMac)() ? w : F) && _.SUPPORTS_COPY && (n.preventDefault(), (0, _.copy)(H.content));
        break;
      case "e":
        if (b) {
          ;
          if (a = B, j = G, O = H, !j.isSystemDM() && (0, v.default)(O, a)) n.preventDefault(), (0, M.editMessage)(G, H)
        }
        break;
      case "p":
        if (b || k) {
          ;
          if (P = G, D = H, !P.isSystemDM() && !(0, x.default)(D) && (R(P) || P.isPrivate())) n.preventDefault(), (0, M.pinMessage)(G, H, n)
        }
        break;
      case "+":
        (b || k) && function(e) {
          let t = null == e.guild_id || C.default.canChatInGuild(e.guild_id),
            n = f.RenderReactions.getSetting(),
            {
              disableReactionCreates: a
            } = (0, N.default)({
              channel: e,
              canChat: t,
              renderReactions: n,
              canAddNewReactions: t && S.default.can(y.Permissions.ADD_REACTIONS, e),
              isLurking: null != e.guild_id && o.default.isLurking(e.guild_id),
              isGuest: null != e.guild_id && E.default.isCurrentUserGuest(e.guild_id),
              isActiveChannelOrUnarchivableThread: (0, d.getIsActiveChannelOrUnarchivableThread)(e)
            });
          return !a && n
        }(G) && (n.preventDefault(), T.ComponentDispatch.dispatchKeyed(y.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, H.id, {
          emojiPicker: !0
        }));
        break;
      case "r":
        (b || k) && (0, u.canReplyToMessage)(G, H) && (n.preventDefault(), (0, M.replyToMessage)(G, H, n));
        break;
      case "f":
        (b || k) && s.MessageForwardingExperiment.getCurrentConfig({
          location: "keyboard-shortcut"
        }, {
          autoTrackExposure: !1
        }).canForwardMessages && (0, i.canForwardMessage)(H) && (n.preventDefault(), (0, r.openForwardModal)({
          messageId: H.id,
          channelId: G.id,
          source: "keyboard-shortcut"
        }));
        break;
      case "t":
        if (b && (0, d.computeCanStartPublicThread)(G, H)) n.preventDefault(), (0, c.openThreadSidebarForCreating)(G, H, "Message Shortcut");
        else if (H.hasFlag(y.MessageFlags.HAS_THREAD)) {
          let e = m.default.getChannel(A.default.castMessageIdAsChannelId(H.id));
          null != e && (b || k) && (n.preventDefault(), (0, c.openThreadSidebarForViewing)(e, k))
        }
        break;
      case "enter":
        U && (n.preventDefault(), (0, M.markMessageUnread)(G, H));
        break;
      case "escape":
        p.default.isEditing(G.id, H.id) ? l.default.endEditMessage(G.id) : T.ComponentDispatch.dispatch(y.ComponentActions.TEXTAREA_FOCUS)
    }
  }, [e, t])
}
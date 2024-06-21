var l = n(470079),
  i = n(904245),
  s = n(346610),
  a = n(868643),
  r = n(912332),
  o = n(41776),
  c = n(280845),
  u = n(665906),
  d = n(488131),
  h = n(695346),
  m = n(314897),
  p = n(592125),
  E = n(323873),
  g = n(271383),
  f = n(607744),
  C = n(375954),
  _ = n(496675),
  I = n(572004),
  x = n(585483),
  T = n(358085),
  N = n(709054),
  Z = n(418476),
  S = n(901461),
  v = n(432376),
  A = n(996861),
  M = n(981631);

function R(e) {
  return _.Z.can(M.Plq.MANAGE_MESSAGES, e)
}
t.Z = function(e, t, n) {
  let j = l.useRef(n);
  return j.current = n, l.useCallback(n => {
    var l, L, O, P, b;
    if (!j.current || n.target !== n.currentTarget) return;
    let y = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
      D = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
      U = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
      k = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
      w = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
      H = C.Z.getMessage(t, e),
      B = p.Z.getChannel(t);
    if (null == H || null == B) return;
    let G = m.default.getId();
    switch (n.key.toLowerCase()) {
      case "backspace":
        y && (R(B) || H.canDeleteOwnMessage(G)) && (n.preventDefault(), (0, A.$Z)(B, H, n));
        break;
      case "c":
        ((0, T.isMac)() ? k : U) && I.wS && (n.preventDefault(), (0, I.JG)(H.content));
        break;
      case "e":
        if (y) {
          ;
          if (l = G, L = B, O = H, !L.isSystemDM() && (0, Z.Z)(O, l)) n.preventDefault(), (0, A.Hd)(B, H)
        }
        break;
      case "p":
        if (y || w) {
          ;
          if (P = B, b = H, !P.isSystemDM() && !(0, S.Z)(b) && (R(P) || P.isPrivate())) n.preventDefault(), (0, A.rY)(B, H, n)
        }
        break;
      case "+":
        (y || w) && function(e) {
          let t = null == e.guild_id || f.Z.canChatInGuild(e.guild_id),
            n = h.nc.getSetting(),
            {
              disableReactionCreates: l
            } = (0, v.Z)({
              channel: e,
              canChat: t,
              renderReactions: n,
              canAddNewReactions: t && _.Z.can(M.Plq.ADD_REACTIONS, e),
              isLurking: null != e.guild_id && o.Z.isLurking(e.guild_id),
              isGuest: null != e.guild_id && g.ZP.isCurrentUserGuest(e.guild_id),
              isActiveChannelOrUnarchivableThread: (0, u.RG)(e)
            });
          return !l && n
        }(B) && (n.preventDefault(), x.S.dispatchKeyed(M.LPv.TOGGLE_REACTION_POPOUT, H.id, {
          emojiPicker: !0
        }));
        break;
      case "r":
        (y || w) && (0, c.o)(B, H) && (n.preventDefault(), (0, A.HH)(B, H, n));
        break;
      case "f":
        (y || w) && s.w.getCurrentConfig({
          location: "keyboard-shortcut"
        }, {
          autoTrackExposure: !1
        }).canForwardMessages && (0, a.h)(H) && (n.preventDefault(), (0, r.l8)({
          messageId: H.id,
          channelId: B.id,
          source: "keyboard-shortcut"
        }));
        break;
      case "t":
        if (y && (0, u.ki)(B, H)) n.preventDefault(), (0, d.R6)(B, H, "Message Shortcut");
        else if (H.hasFlag(M.iLy.HAS_THREAD)) {
          let e = p.Z.getChannel(N.default.castMessageIdAsChannelId(H.id));
          null != e && (y || w) && (n.preventDefault(), (0, d.ok)(e, w))
        }
        break;
      case "enter":
        D && (n.preventDefault(), (0, A.B8)(B, H));
        break;
      case "escape":
        E.Z.isEditing(B.id, H.id) ? i.Z.endEditMessage(B.id) : x.S.dispatch(M.CkL.TEXTAREA_FOCUS)
    }
  }, [e, t])
}
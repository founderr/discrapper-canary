t.d(n, {
  f: function() {
    return p
  }
});
var i = t(374470),
  l = t(475179),
  o = t(904245),
  r = t(45114),
  E = t(40851),
  u = t(358221),
  a = t(623292),
  s = t(807092),
  d = t(6025),
  _ = t(897473),
  c = t(913663),
  C = t(268350),
  A = t(433355),
  I = t(592125),
  S = t(703558),
  T = t(323873),
  L = t(375954),
  N = t(306680),
  O = t(944486),
  D = t(914010),
  f = t(574254),
  g = t(451478),
  h = t(585483),
  R = t(981631);
let p = {
  binds: ["esc", "shift+pagedown"],
  comboKeysBindGlobal: !0,
  action(e) {
    if (g.Z.isElementFullScreen()) return !1;
    if (h.S.hasSubscribers(R.CkL.CALL_DECLINE)) return h.S.dispatch(R.CkL.CALL_DECLINE), !1;
    if (f.Z.close()) return !1;
    if (h.S.hasSubscribers(R.CkL.MEDIA_MODAL_CLOSE)) return h.S.dispatch(R.CkL.MEDIA_MODAL_CLOSE), !1;
    if ((0, i.k)(e.target)) {
      let n = (0, E.J5)(e.target);
      if (null == n ? void 0 : n.hasSubscribers(R.CkL.POPOUT_CLOSE)) return n.dispatch(R.CkL.POPOUT_CLOSE), !1
    }
    if (h.S.hasSubscribers(R.CkL.CLOSE_GIF_PICKER)) return h.S.dispatch(R.CkL.CLOSE_GIF_PICKER), !1;
    if (h.S.hasSubscribers(R.CkL.MODAL_CLOSE)) return h.S.dispatch(R.CkL.MODAL_CLOSE), !1;
    if (h.S.hasSubscribers(R.CkL.SEARCH_RESULTS_CLOSE)) return h.S.dispatch(R.CkL.SEARCH_RESULTS_CLOSE), !1;
    let n = D.Z.getGuildId(),
      t = O.Z.getChannelId(n),
      o = I.Z.getChannel(t),
      r = A.ZP.getSection(t, null == o ? void 0 : o.isDM()) === R.ULH.SIDEBAR_CHAT ? A.ZP.getSidebarState(t) : null,
      a = (null == r ? void 0 : r.type) === _.tI.VIEW_THREAD || (null == r ? void 0 : r.type) === _.tI.VIEW_CHANNEL ? r.channelId : null;
    if (!1 === P(t) || !1 === P(a)) return !1;
    if (null != t && (null == r ? void 0 : r.type) === _.tI.CREATE_THREAD) return d.Z.closeChannelSidebar(t), !1;
    let s = Z(t),
      c = Z(a);
    return null == t || s || c || null == r ? null != t && !s && u.Z.getChatOpen(t) ? (l.Z.updateChatOpen(t, !1), !1) : (h.S.dispatch(R.CkL.SCROLLTO_PRESENT), !1) : (d.Z.closeChannelSidebar(t), !1)
  }
};

function P(e) {
  if (null != e) {
    if (T.Z.isEditingAny(e)) return o.Z.endEditMessage(e), !1;
    if (null != s.Z.getPendingReply(e)) return (0, a.A6)(e), !1;
    if (null != c.Z.getStickerPreview(e, S.d.ChannelMessage)) return (0, C.qB)(e, S.d.ChannelMessage), !1
  }
}

function Z(e) {
  if (null == e) return !1;
  let n = !1;
  return L.Z.getMessages(e).hasMoreAfter && (o.Z.jumpToPresent(e, R.AQB), n = !0), N.ZP.hasUnread(e) && ((0, r.In)(e), n = !0), (0, r.iV)(e), n
}
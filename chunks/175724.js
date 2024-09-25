t.d(n, {
    f: function () {
        return p;
    }
});
var i = t(374470),
    o = t(475179),
    l = t(904245),
    E = t(45114),
    r = t(40851),
    a = t(358221),
    u = t(623292),
    d = t(807092),
    s = t(6025),
    _ = t(897473),
    c = t(913663),
    A = t(268350),
    C = t(433355),
    S = t(592125),
    I = t(703558),
    T = t(323873),
    L = t(375954),
    N = t(306680),
    O = t(944486),
    D = t(914010),
    g = t(574254),
    R = t(451478),
    f = t(585483),
    h = t(981631);
let p = {
    binds: ['esc', 'shift+pagedown'],
    comboKeysBindGlobal: !0,
    action(e) {
        if (R.Z.isElementFullScreen()) return !1;
        if (f.S.hasSubscribers(h.CkL.CALL_DECLINE)) return f.S.dispatch(h.CkL.CALL_DECLINE), !1;
        if (g.Z.close()) return !1;
        if (f.S.hasSubscribers(h.CkL.MEDIA_MODAL_CLOSE)) return f.S.dispatch(h.CkL.MEDIA_MODAL_CLOSE), !1;
        if ((0, i.k)(e.target)) {
            let n = (0, r.J5)(e.target);
            if (null == n ? void 0 : n.hasSubscribers(h.CkL.POPOUT_CLOSE)) return n.dispatch(h.CkL.POPOUT_CLOSE), !1;
        }
        if (f.S.hasSubscribers(h.CkL.CLOSE_GIF_PICKER)) return f.S.dispatch(h.CkL.CLOSE_GIF_PICKER), !1;
        if (f.S.hasSubscribers(h.CkL.MODAL_CLOSE)) return f.S.dispatch(h.CkL.MODAL_CLOSE), !1;
        if (f.S.hasSubscribers(h.CkL.SEARCH_RESULTS_CLOSE)) return f.S.dispatch(h.CkL.SEARCH_RESULTS_CLOSE), !1;
        let n = D.Z.getGuildId(),
            t = O.Z.getChannelId(n),
            l = S.Z.getChannel(t),
            E = C.ZP.getSection(t, null == l ? void 0 : l.isDM()) === h.ULH.SIDEBAR_CHAT ? C.ZP.getSidebarState(t) : null,
            u = (null == E ? void 0 : E.type) === _.tI.VIEW_THREAD || (null == E ? void 0 : E.type) === _.tI.VIEW_CHANNEL ? E.channelId : null;
        if (!1 === P(t) || !1 === P(u)) return !1;
        if (null != t && (null == E ? void 0 : E.type) === _.tI.CREATE_THREAD) return s.Z.closeChannelSidebar(t), !1;
        let d = G(t),
            c = G(u);
        return null == t || d || c || null == E ? (null != t && !d && a.Z.getChatOpen(t) ? (o.Z.updateChatOpen(t, !1), !1) : (f.S.dispatch(h.CkL.SCROLLTO_PRESENT), !1)) : (s.Z.closeChannelSidebar(t), !1);
    }
};
function P(e) {
    if (null != e) {
        if (T.Z.isEditingAny(e)) return l.Z.endEditMessage(e), !1;
        if (null != d.Z.getPendingReply(e)) return (0, u.A6)(e), !1;
        if (null != c.Z.getStickerPreview(e, I.d.ChannelMessage)) return (0, A.qB)(e, I.d.ChannelMessage), !1;
    }
}
function G(e) {
    if (null == e) return !1;
    let n = !1;
    return L.Z.getMessages(e).hasMoreAfter && (l.Z.jumpToPresent(e, h.AQB), (n = !0)), N.ZP.hasUnread(e) && ((0, E.In)(e), (n = !0)), (0, E.iV)(e), n;
}

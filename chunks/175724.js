t.d(n, {
    f: function () {
        return O;
    }
});
var l = t(374470),
    i = t(475179),
    o = t(904245),
    a = t(45114),
    u = t(40851),
    r = t(358221),
    d = t(623292),
    c = t(807092),
    s = t(6025),
    E = t(897473),
    C = t(913663),
    _ = t(268350),
    h = t(433355),
    S = t(592125),
    I = t(703558),
    A = t(323873),
    T = t(375954),
    f = t(306680),
    L = t(944486),
    g = t(914010),
    Z = t(574254),
    p = t(451478),
    P = t(585483),
    N = t(981631);
let O = {
    binds: ['esc', 'shift+pagedown'],
    comboKeysBindGlobal: !0,
    action(e) {
        if (p.Z.isElementFullScreen()) return !1;
        if (P.S.hasSubscribers(N.CkL.CALL_DECLINE)) return P.S.dispatch(N.CkL.CALL_DECLINE), !1;
        if (Z.Z.close()) return !1;
        if (P.S.hasSubscribers(N.CkL.MEDIA_MODAL_CLOSE)) return P.S.dispatch(N.CkL.MEDIA_MODAL_CLOSE), !1;
        if ((0, l.k)(e.target)) {
            let n = (0, u.J5)(e.target);
            if (null == n ? void 0 : n.hasSubscribers(N.CkL.POPOUT_CLOSE)) return n.dispatch(N.CkL.POPOUT_CLOSE), !1;
        }
        if (P.S.hasSubscribers(N.CkL.CLOSE_GIF_PICKER)) return P.S.dispatch(N.CkL.CLOSE_GIF_PICKER), !1;
        if (P.S.hasSubscribers(N.CkL.MODAL_CLOSE)) return P.S.dispatch(N.CkL.MODAL_CLOSE), !1;
        if (P.S.hasSubscribers(N.CkL.SEARCH_RESULTS_CLOSE)) return P.S.dispatch(N.CkL.SEARCH_RESULTS_CLOSE), !1;
        let n = g.Z.getGuildId(),
            t = L.Z.getChannelId(n),
            o = S.Z.getChannel(t),
            a = h.ZP.getSection(t, null == o ? void 0 : o.isDM()) === N.ULH.SIDEBAR_CHAT ? h.ZP.getSidebarState(t) : null,
            d = (null == a ? void 0 : a.type) === E.tI.VIEW_THREAD || (null == a ? void 0 : a.type) === E.tI.VIEW_CHANNEL ? a.channelId : null;
        if (!1 === R(t) || !1 === R(d)) return !1;
        if (null != t && (null == a ? void 0 : a.type) === E.tI.CREATE_THREAD) return s.Z.closeChannelSidebar(t), !1;
        let c = b(t),
            C = b(d);
        return null == t || c || C || null == a ? (null != t && !c && r.Z.getChatOpen(t) ? (i.Z.updateChatOpen(t, !1), !1) : (P.S.dispatch(N.CkL.SCROLLTO_PRESENT), !1)) : (s.Z.closeChannelSidebar(t), !1);
    }
};
function R(e) {
    if (null != e) {
        if (A.Z.isEditingAny(e)) return o.Z.endEditMessage(e), !1;
        if (null != c.Z.getPendingReply(e)) return (0, d.A6)(e), !1;
        if (null != C.Z.getStickerPreview(e, I.d.ChannelMessage)) return (0, _.qB)(e, I.d.ChannelMessage), !1;
    }
}
function b(e) {
    if (null == e) return !1;
    let n = !1;
    return T.Z.getMessages(e).hasMoreAfter && (o.Z.jumpToPresent(e, N.AQB), (n = !0)), f.ZP.hasUnread(e) && ((0, a.In)(e), (n = !0)), (0, a.iV)(e), n;
}

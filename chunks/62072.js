var i = n(192379),
    l = n(904245),
    r = n(346610),
    s = n(868643),
    a = n(912332),
    o = n(41776),
    c = n(280845),
    u = n(665906),
    d = n(488131),
    h = n(695346),
    m = n(314897),
    p = n(592125),
    f = n(323873),
    g = n(271383),
    C = n(607744),
    x = n(375954),
    v = n(496675),
    _ = n(572004),
    I = n(585483),
    E = n(358085),
    b = n(709054),
    S = n(418476),
    Z = n(901461),
    T = n(432376),
    N = n(996861),
    j = n(981631);
function A(e) {
    return v.Z.can(j.Plq.MANAGE_MESSAGES, e);
}
t.Z = function (e, t, n) {
    let y = i.useRef(n);
    return (
        (y.current = n),
        i.useCallback(
            (n) => {
                var i, P, M, R, L;
                if (!y.current || n.target !== n.currentTarget) return;
                let k = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                    O = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                    w = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                    D = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                    U = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                    B = x.Z.getMessage(t, e),
                    H = p.Z.getChannel(t);
                if (null == B || null == H) return;
                let F = m.default.getId();
                switch (n.key.toLowerCase()) {
                    case 'backspace':
                        k && (A(H) || B.canDeleteOwnMessage(F)) && (n.preventDefault(), (0, N.$Z)(H, B, n));
                        break;
                    case 'c':
                        ((0, E.isMac)() ? D : w) && _.wS && (n.preventDefault(), (0, _.JG)(B.content));
                        break;
                    case 'e':
                        if (k) {
                            if (((i = F), (P = H), (M = B), !P.isSystemDM() && (0, S.Z)(M, i))) n.preventDefault(), (0, N.Hd)(H, B);
                        }
                        break;
                    case 'p':
                        if (k || U) {
                            if (((R = H), (L = B), !R.isSystemDM() && !(0, Z.Z)(L) && (A(R) || R.isPrivate()))) n.preventDefault(), (0, N.rY)(H, B, n);
                        }
                        break;
                    case '+':
                        (k || U) &&
                            (function (e) {
                                let t = null == e.guild_id || C.Z.canChatInGuild(e.guild_id),
                                    n = h.nc.getSetting(),
                                    { disableReactionCreates: i } = (0, T.Z)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && v.Z.can(j.Plq.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && o.Z.isLurking(e.guild_id),
                                        isGuest: null != e.guild_id && g.ZP.isCurrentUserGuest(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, u.RG)(e)
                                    });
                                return !i && n;
                            })(H) &&
                            (n.preventDefault(), I.S.dispatchKeyed(j.LPv.TOGGLE_REACTION_POPOUT, B.id, { emojiPicker: !0 }));
                        break;
                    case 'r':
                        (k || U) && (0, c.o)(H, B) && (n.preventDefault(), (0, N.HH)(H, B, n));
                        break;
                    case 'f':
                        (k || U) &&
                            (0, r.WT)({ location: 'keyboard-shortcut' }, { autoTrackExposure: !1 }).canForwardMessages &&
                            (0, s.h)(B) &&
                            (n.preventDefault(),
                            (0, a.l8)({
                                messageId: B.id,
                                channelId: H.id,
                                source: 'keyboard-shortcut'
                            }));
                        break;
                    case 't':
                        if (k && (0, u.ki)(H, B)) n.preventDefault(), (0, d.R6)(H, B, 'Message Shortcut');
                        else if (B.hasFlag(j.iLy.HAS_THREAD)) {
                            let e = p.Z.getChannel(b.default.castMessageIdAsChannelId(B.id));
                            null != e && (k || U) && (n.preventDefault(), (0, d.ok)(e, U));
                        }
                        break;
                    case 'enter':
                        O && (n.preventDefault(), (0, N.B8)(H, B));
                        break;
                    case 'escape':
                        f.Z.isEditing(H.id, B.id) ? l.Z.endEditMessage(H.id) : I.S.dispatch(j.CkL.TEXTAREA_FOCUS);
                }
            },
            [e, t]
        )
    );
};

n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    s = n(911969),
    a = n(581364),
    o = n(869765),
    c = n(699516),
    u = n(697451),
    d = n(348238),
    h = n(614584);
let m = l.memo(function (e) {
    var t, n;
    let { message: m, channel: p, compact: f = !1, interactionUsernameProfile: g, interactionAvatarProfile: C, interactionData: x, referencedUsernameProfile: v, referencedAvatarProfile: _, setPopout: I } = e,
        E = (0, r.e7)([c.Z], () => c.Z.isBlockedForMessage(m), [m]),
        b = (0, r.e7)([o.Z], () => o.Z.getMessageByReference(null == m ? void 0 : m.messageReference)),
        S = (0, d.wq)(null === (t = m.interaction) || void 0 === t ? void 0 : t.user.id, p.id),
        Z = (0, d.Nk)(m.interaction, p, g, I),
        T = (0, d.NU)(C, I),
        N = (0, a.t0)(m),
        j = (null == N ? void 0 : N.type) === s.B8.APPLICATION_COMMAND ? (null === (n = N.target_user) || void 0 === n ? void 0 : n.id) : void 0,
        A = (0, d.wq)(j, p.id),
        y = (0, d.JC)(j, p, v, I),
        P = (0, d.rY)(_, I),
        M = (0, d.Xn)(x, I),
        R = l.useCallback(
            () =>
                I({
                    interactionUsernameProfile: !1,
                    interactionAvatarProfile: !1,
                    interactionData: !1,
                    referencedUsernameProfile: !1,
                    referencedAvatarProfile: !1
                }),
            [I]
        ),
        L = l.useCallback(
            () =>
                (0, h.Z)({
                    message: m,
                    channel: p,
                    compact: f,
                    setPopout: I,
                    referencedAvatarProfile: _,
                    referencedUsernameProfile: v,
                    replyReference: m.messageReference,
                    replyMessage: b,
                    isReplySpineClickable: !1,
                    showReplySpine: !1
                }),
            [p, f, m, _, b, v, I]
        );
    return (0, i.jsx)(u.Z, {
        message: m,
        channel: p,
        compact: f,
        isInteractionUserBlocked: E,
        showAvatarPopout: C,
        showUsernamePopout: g,
        showDataPopout: x,
        showTargetAvatarPopout: _,
        showTargetUsernamePopout: v,
        onClickAvatar: T,
        onClickUsername: Z,
        onClickCommand: M,
        onUserContextMenu: S,
        onClickTargetAvatar: P,
        onClickTargetUsername: y,
        onTargetUserContextMenu: A,
        onPopoutRequestClose: R,
        renderTargetMessage: L
    });
});
function p(e, t, n) {
    let { message: l, channel: r, compact: s } = e;
    return null != l.interaction && '' !== l.interaction.displayName
        ? (0, i.jsx)(m, {
              message: l,
              channel: r,
              compact: s,
              setPopout: t,
              ...n
          })
        : null;
}

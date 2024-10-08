n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(653041);
var i = n(735250),
    s = n(470079),
    a = n(392711),
    l = n(442837),
    r = n(481060),
    o = n(481051),
    c = n(871499),
    u = n(306680),
    d = n(111583),
    h = n(459273),
    p = n(566620),
    m = n(317381),
    _ = n(918559),
    f = n(981631),
    E = n(689938),
    g = n(657918);
function C(e) {
    let { channelId: t, className: n, ...C } = e,
        I = s.useRef(null),
        T = (0, l.e7)([m.ZP], () => m.ZP.getFocusedLayout() === _.MI.RESIZABLE),
        x = s.useCallback(() => {
            let e = T ? _.MI.NO_CHAT : _.MI.RESIZABLE;
            (0, p.gC)(e);
        }, [T]),
        { unreadCount: v, mentionCount: S } = (function (e) {
            let t = (0, l.e7)([d.Z], () => !(0, a.isEmpty)(d.Z.getTypingUsers(e)), [e]),
                { unreadCount: n, mentionCount: i } = (0, l.cj)(
                    [u.ZP],
                    () => ({
                        unreadCount: u.ZP.getUnreadCount(e),
                        mentionCount: u.ZP.getMentionCount(e)
                    }),
                    [e]
                );
            return {
                unreadCount: n,
                mentionCount: i,
                isTyping: t
            };
        })(t),
        N = s.useCallback(() => {
            var e;
            null === (e = I.current) || void 0 === e || e.focus();
        }, []);
    (0, h.yp)({
        event: f.CkL.FOCUS_CHAT_BUTTON,
        handler: N
    });
    let A = T ? E.Z.Messages.HIDE_CHAT : E.Z.Messages.SHOW_CHAT,
        Z = [A];
    S > 0 && Z.push(E.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({ mentionCount: S })), v > 0 && Z.push(E.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD);
    let M = (0, l.e7)([m.ZP], () => m.ZP.getFocusedLayout()),
        b = S > 0 ? S : v,
        R = b > 0;
    return (0, i.jsxs)('div', {
        className: g.wrapper,
        children: [
            (0, i.jsx)(c.d, {
                buttonRef: I,
                onClick: x,
                label: A,
                'aria-label': Z.join(', '),
                tooltipPosition: 'top',
                iconComponent: M === _.MI.NO_CHAT ? r.ChevronLargeUpIcon : r.ChevronLargeDownIcon,
                themeable: !0,
                className: n,
                ...C
            }),
            R
                ? (0, i.jsx)(o.Z, {
                      hasMentions: S > 0,
                      truncatedCount: b > 99 ? '99+' : b,
                      className: g.badge
                  })
                : null
        ]
    });
}

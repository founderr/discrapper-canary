n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(442837),
    r = n(481060),
    l = n(317632),
    o = n(602478),
    c = n(665149),
    u = n(306680),
    d = n(594174),
    _ = n(178088),
    E = n(222940),
    I = n(490897),
    m = n(689938),
    T = n(233194);
function N(e) {
    let { onOpen: t, onClose: n, className: N } = e,
        h = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        C = s.useRef(null),
        f = (0, a.e7)([u.ZP], () => (null == h ? void 0 : h.id) != null && u.ZP.getMentionCount(h.id, I.W.NOTIFICATION_CENTER) > 0),
        { enabled: p } = o.Z.useExperiment({ location: 'RecentsButton' }, { autoTrackExposure: !1 }),
        g = (0, a.e7)([l.Z], () => p && l.Z.getUnseenInviteCount() > 0);
    return (0, i.jsx)(_.k, {
        onOpen: t,
        onClose: n,
        badgeState: { badgeForYou: f },
        popoutPosition: 'bottom',
        popoutAlign: 'right',
        children: (e, t, n, s) =>
            (0, i.jsxs)('div', {
                ref: C,
                className: T.recentsIcon,
                children: [
                    p &&
                        (0, i.jsx)(E.Z, {
                            inboxIconRef: C,
                            recentsPopoutShown: t
                        }),
                    (0, i.jsx)(c.JO, {
                        ...n,
                        className: N,
                        onClick: e,
                        icon: r.InboxIcon,
                        'aria-label': m.Z.Messages.INBOX,
                        tooltip: t ? null : m.Z.Messages.INBOX,
                        selected: t,
                        showBadge: f || g || s
                    })
                ]
            })
    });
}

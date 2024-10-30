n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(442837),
    r = n(481060),
    l = n(317632),
    o = n(602478),
    c = n(665149),
    u = n(388035),
    d = n(306680),
    _ = n(594174),
    E = n(178088),
    I = n(222940),
    m = n(490897),
    f = n(689938),
    h = n(233194);
function T(e) {
    let { onOpen: t, onClose: n, className: T } = e,
        N = (0, s.e7)([_.default], () => _.default.getCurrentUser()),
        p = a.useRef(null),
        C = (0, s.e7)([d.ZP], () => (null == N ? void 0 : N.id) != null && d.ZP.getMentionCount(N.id, m.W.NOTIFICATION_CENTER) > 0),
        { enabled: g } = o.Z.useExperiment({ location: 'RecentsButton' }, { autoTrackExposure: !1 }),
        S = (0, s.e7)([l.Z], () => g && l.Z.getUnseenInviteCount() > 0);
    return (0, i.jsx)(E.k, {
        onOpen: t,
        onClose: n,
        badgeState: { badgeForYou: C },
        popoutPosition: 'bottom',
        popoutAlign: 'right',
        children: (e, t, n, a) =>
            (0, i.jsxs)('div', {
                ref: p,
                className: h.recentsIcon,
                children: [
                    g &&
                        (0, i.jsx)(I.Z, {
                            inboxIconRef: p,
                            recentsPopoutShown: t
                        }),
                    (0, i.jsx)(u.U, {
                        location: 'inbox-button',
                        children: (0, i.jsx)(c.JO, {
                            ...n,
                            className: T,
                            onClick: e,
                            icon: r.InboxIcon,
                            'aria-label': f.Z.Messages.INBOX,
                            tooltip: t ? null : f.Z.Messages.INBOX,
                            selected: t,
                            showBadge: C || S || a
                        })
                    })
                ]
            })
    });
}

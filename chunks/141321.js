n.d(t, {
    Z: function () {
        return I;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(481060),
    s = n(317632),
    l = n(602478),
    u = n(665149),
    c = n(388035),
    d = n(306680),
    _ = n(594174),
    E = n(178088),
    f = n(222940),
    h = n(490897),
    p = n(689938),
    m = n(233194);
function I(e) {
    let { onOpen: t, onClose: n, className: I } = e,
        T = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
        g = i.useRef(null),
        S = (0, a.e7)([d.ZP], () => (null == T ? void 0 : T.id) != null && d.ZP.getMentionCount(T.id, h.W.NOTIFICATION_CENTER) > 0),
        { enabled: A } = l.Z.useExperiment({ location: 'RecentsButton' }, { autoTrackExposure: !1 }),
        v = (0, a.e7)([s.Z], () => A && s.Z.getUnseenInviteCount() > 0);
    return (0, r.jsx)(E.k, {
        onOpen: t,
        onClose: n,
        badgeState: { badgeForYou: S },
        popoutPosition: 'bottom',
        popoutAlign: 'right',
        children: (e, t, n, i) =>
            (0, r.jsxs)('div', {
                ref: g,
                className: m.recentsIcon,
                children: [
                    A &&
                        (0, r.jsx)(f.Z, {
                            inboxIconRef: g,
                            recentsPopoutShown: t
                        }),
                    (0, r.jsx)(c.U, {
                        location: 'inbox-button',
                        children: (0, r.jsx)(u.JO, {
                            ...n,
                            className: I,
                            onClick: e,
                            icon: o.InboxIcon,
                            'aria-label': p.Z.Messages.INBOX,
                            tooltip: t ? null : p.Z.Messages.INBOX,
                            selected: t,
                            showBadge: S || v || i
                        })
                    })
                ]
            })
    });
}

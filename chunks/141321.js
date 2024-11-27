n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(317632),
    s = n(602478),
    c = n(665149),
    u = n(388035),
    d = n(306680),
    m = n(594174),
    h = n(178088),
    f = n(222940),
    p = n(490897),
    g = n(388032),
    _ = n(122682);
function E(e) {
    let { onOpen: t, onClose: n, className: E } = e,
        C = (0, l.e7)([m.default], () => m.default.getCurrentUser()),
        I = r.useRef(null),
        x = (0, l.e7)([d.ZP], () => (null == C ? void 0 : C.id) != null && d.ZP.getMentionCount(C.id, p.W.NOTIFICATION_CENTER) > 0),
        { enabled: N } = s.Z.useExperiment({ location: 'RecentsButton' }, { autoTrackExposure: !1 }),
        v = (0, l.e7)([o.Z], () => N && o.Z.getUnseenInviteCount() > 0);
    return (0, i.jsx)(h.k, {
        onOpen: t,
        onClose: n,
        badgeState: { badgeForYou: x },
        popoutPosition: 'bottom',
        popoutAlign: 'right',
        children: (e, t, n, r) =>
            (0, i.jsxs)('div', {
                ref: I,
                className: _.recentsIcon,
                children: [
                    N &&
                        (0, i.jsx)(f.Z, {
                            inboxIconRef: I,
                            recentsPopoutShown: t
                        }),
                    (0, i.jsx)(u.U, {
                        location: 'inbox-button',
                        children: (0, i.jsx)(c.JO, {
                            ...n,
                            className: E,
                            onClick: e,
                            icon: a.InboxIcon,
                            'aria-label': g.intl.string(g.t.GSmTKC),
                            tooltip: t ? null : g.intl.string(g.t.GSmTKC),
                            selected: t,
                            showBadge: x || v || r
                        })
                    })
                ]
            })
    });
}

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
    d = n(388035),
    u = n(306680),
    m = n(594174),
    h = n(178088),
    f = n(222940),
    p = n(490897),
    _ = n(388032),
    g = n(122682);
function E(e) {
    let { onOpen: t, onClose: n, className: E } = e,
        C = (0, l.e7)([m.default], () => m.default.getCurrentUser()),
        I = r.useRef(null),
        x = (0, l.e7)([u.ZP], () => (null == C ? void 0 : C.id) != null && u.ZP.getMentionCount(C.id, p.W.NOTIFICATION_CENTER) > 0),
        { enabled: v } = s.Z.useExperiment({ location: 'RecentsButton' }, { autoTrackExposure: !1 }),
        N = (0, l.e7)([o.Z], () => v && o.Z.getUnseenInviteCount() > 0);
    return (0, i.jsx)(h.k, {
        onOpen: t,
        onClose: n,
        badgeState: { badgeForYou: x },
        popoutPosition: 'bottom',
        popoutAlign: 'right',
        children: (e, t, n, r) =>
            (0, i.jsxs)('div', {
                ref: I,
                className: g.recentsIcon,
                children: [
                    v &&
                        (0, i.jsx)(f.Z, {
                            inboxIconRef: I,
                            recentsPopoutShown: t
                        }),
                    (0, i.jsx)(d.U, {
                        location: 'inbox-button',
                        children: (0, i.jsx)(c.JO, {
                            ...n,
                            className: E,
                            onClick: e,
                            icon: a.InboxIcon,
                            'aria-label': _.intl.string(_.t.GSmTKC),
                            tooltip: t ? null : _.intl.string(_.t.GSmTKC),
                            selected: t,
                            showBadge: x || N || r
                        })
                    })
                ]
            })
    });
}

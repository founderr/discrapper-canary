n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(23536),
    o = n(40851),
    c = n(731290),
    u = n(306680),
    d = n(594174),
    h = n(585483),
    m = n(665149),
    p = n(981631),
    f = n(388032);
t.Z = function (e) {
    let { channel: t } = e,
        n = (0, r.e7)(
            [c.Z, d.default],
            () => {
                let e = d.default.getCurrentUser();
                return null == e || (t.isNSFW() && (!e.nsfwAllowed || !c.Z.didAgree(t.getGuildId())));
            },
            [t]
        ),
        [g, C] = l.useState(!1),
        x = (0, r.e7)([u.ZP], () => u.ZP.hasUnreadPins(t.id), [t]),
        v = (0, o.Aq)(),
        _ = l.useCallback(() => {
            !n && C((e) => !e);
        }, [n]);
    function I(e) {
        !(null == e ? void 0 : e.shiftKey) && v.dispatch(p.CkL.POPOUT_CLOSE);
    }
    return (
        l.useEffect(
            () => (
                h.S.subscribe(p.CkL.TOGGLE_CHANNEL_PINS, _),
                () => {
                    h.S.unsubscribe(p.CkL.TOGGLE_CHANNEL_PINS, _);
                }
            ),
            [_]
        ),
        (0, i.jsx)(a.Popout, {
            shouldShow: g,
            animation: a.Popout.Animation.NONE,
            position: 'bottom',
            align: 'right',
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => C(!1),
            renderPopout: function (e) {
                return (0, i.jsx)(s.Z, {
                    ...e,
                    onJump: I,
                    channel: t
                });
            },
            children: (e, t) => {
                let { isShown: l } = t;
                return (0, i.jsx)(m.JO, {
                    ...e,
                    onClick: _,
                    tooltip: l ? null : f.intl.string(f.t['mp1N//']),
                    icon: a.PinIcon,
                    'aria-label': f.intl.string(f.t['mp1N//']),
                    disabled: n,
                    showBadge: x,
                    selected: l
                });
            }
        })
    );
};

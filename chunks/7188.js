n.d(t, {
    Z: function () {
        return O;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(158631),
    l = n(709369),
    u = n(686546),
    c = n(544384),
    d = n(76021),
    _ = n(592125),
    E = n(594174),
    f = n(834348),
    h = n(74538),
    p = n(618158),
    I = n(871499),
    m = n(981631),
    T = n(474936),
    S = n(689938),
    g = n(157380);
function A(e) {
    let { className: t } = e;
    return (0, r.jsx)(s.SettingsIcon, {
        size: 'md',
        color: 'currentColor',
        className: t
    });
}
function N(e) {
    let { className: t } = e;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)(u.ZP, {
                className: t,
                mask: u.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                children: (0, r.jsx)(A, {})
            }),
            (0, r.jsx)(f.Z, { className: g.badgeUpgrade })
        ]
    });
}
function O(e) {
    let { hideBadges: t = !1, stream: n, ...u } = e,
        f = (0, a.e7)([E.default], () => h.ZP.isPremium(E.default.getCurrentUser(), T.p9.TIER_1)),
        g = (0, a.e7)([_.Z], () => _.Z.getChannel(null == n ? void 0 : n.channelId)),
        O = i.useMemo(() => (null != n ? [n] : []), [n]),
        R = (0, o.zW)(null == g ? void 0 : g.id),
        v = i.useCallback(() => {
            null != g && (0, d.Z)(g.getGuildId(), g.id, m.jXE.STREAM_SETTINGS);
        }, [g]);
    if (null == n || null == g) return null;
    let C = A;
    return (
        !t && !f && (C = N),
        (0, r.jsx)(s.Popout, {
            position: 'top',
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(p.Z, {
                    children: R
                        ? (0, r.jsx)(l.Z, { onClose: t })
                        : (0, r.jsx)(c.Z, {
                              channel: g,
                              currentUser: E.default.getCurrentUser(),
                              activeStreams: O,
                              onClose: t,
                              showReportOption: !0,
                              handleGoLive: v
                          })
                });
            },
            animation: s.Popout.Animation.FADE,
            children: (e) =>
                (0, r.jsx)(I.Z, {
                    ...e,
                    label: S.Z.Messages.STREAMER_SETTINGS_TITLE,
                    iconComponent: C,
                    ...u
                })
        })
    );
}

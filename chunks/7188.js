n.d(t, {
    Z: function () {
        return A;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(481060),
    s = n(686546),
    l = n(544384),
    u = n(76021),
    c = n(592125),
    d = n(594174),
    _ = n(834348),
    E = n(74538),
    f = n(618158),
    h = n(871499),
    p = n(981631),
    m = n(474936),
    I = n(689938),
    T = n(157380);
function g(e) {
    let { className: t } = e;
    return (0, r.jsx)(o.SettingsIcon, {
        size: 'md',
        color: 'currentColor',
        className: t
    });
}
function S(e) {
    let { className: t } = e;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)(s.ZP, {
                className: t,
                mask: s.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                children: (0, r.jsx)(g, {})
            }),
            (0, r.jsx)(_.Z, { className: T.badgeUpgrade })
        ]
    });
}
function A(e) {
    let { hideBadges: t = !1, stream: n, ...s } = e,
        _ = (0, a.e7)([d.default], () => E.ZP.isPremium(d.default.getCurrentUser(), m.p9.TIER_1)),
        T = (0, a.e7)([c.Z], () => c.Z.getChannel(null == n ? void 0 : n.channelId)),
        A = i.useMemo(() => (null != n ? [n] : []), [n]),
        v = i.useCallback(() => {
            null != T && (0, u.Z)(T.getGuildId(), T.id, p.jXE.STREAM_SETTINGS);
        }, [T]);
    if (null == n || null == T) return null;
    let N = g;
    return (
        !t && !_ && (N = S),
        (0, r.jsx)(o.Popout, {
            position: 'top',
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(f.Z, {
                    children: (0, r.jsx)(l.Z, {
                        channel: T,
                        currentUser: d.default.getCurrentUser(),
                        activeStreams: A,
                        onClose: t,
                        showReportOption: !0,
                        handleGoLive: v
                    })
                });
            },
            animation: o.Popout.Animation.FADE,
            children: (e) =>
                (0, r.jsx)(h.Z, {
                    ...e,
                    label: I.Z.Messages.STREAMER_SETTINGS_TITLE,
                    iconComponent: N,
                    ...s
                })
        })
    );
}

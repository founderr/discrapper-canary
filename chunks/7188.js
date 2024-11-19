n.d(t, {
    Z: function () {
        return T;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(686546),
    l = n(544384),
    u = n(76021),
    c = n(592125),
    d = n(594174),
    f = n(834348),
    _ = n(74538),
    p = n(618158),
    h = n(871499),
    m = n(981631),
    g = n(474936),
    E = n(388032),
    v = n(846862);
function b(e) {
    let { className: t } = e;
    return (0, r.jsx)(s.SettingsIcon, {
        size: 'md',
        color: 'currentColor',
        className: t
    });
}
function I(e) {
    let { className: t } = e;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)(o.ZP, {
                className: t,
                mask: o.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                children: (0, r.jsx)(b, {})
            }),
            (0, r.jsx)(f.Z, { className: v.badgeUpgrade })
        ]
    });
}
function T(e) {
    let { hideBadges: t = !1, stream: n, ...o } = e,
        f = (0, a.e7)([d.default], () => _.ZP.isPremium(d.default.getCurrentUser(), g.p9.TIER_1)),
        v = (0, a.e7)([c.Z], () => c.Z.getChannel(null == n ? void 0 : n.channelId)),
        T = i.useMemo(() => (null != n ? [n] : []), [n]),
        S = i.useCallback(() => {
            null != v && (0, u.Z)(v.getGuildId(), v.id, m.jXE.STREAM_SETTINGS);
        }, [v]);
    if (null == n || null == v) return null;
    let y = b;
    return (
        !t && !f && (y = I),
        (0, r.jsx)(s.Popout, {
            position: 'top',
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(p.Z, {
                    children: (0, r.jsx)(l.Z, {
                        channel: v,
                        currentUser: d.default.getCurrentUser(),
                        activeStreams: T,
                        onClose: t,
                        showReportOption: !0,
                        handleGoLive: S
                    })
                });
            },
            animation: s.Popout.Animation.FADE,
            children: (e) =>
                (0, r.jsx)(h.Z, {
                    ...e,
                    label: E.intl.string(E.t.tmiYpK),
                    iconComponent: y,
                    ...o
                })
        })
    );
}

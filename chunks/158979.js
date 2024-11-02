n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(13245),
    o = n(593481),
    a = n(312839),
    l = n(981631),
    c = n(987650),
    d = n(388032),
    u = n(57266);
function h() {
    return (0, i.jsx)('div', {
        className: u.footer,
        children: (0, i.jsx)(r.Button, {
            color: r.Button.Colors.GREEN,
            size: r.Button.Sizes.SMALL,
            className: u.ctaButton,
            children: d.intl.string(d.t.U76Ft7)
        })
    });
}
function p(e) {
    switch (e.type) {
        case c.nc.GO_LIVE_VOICE: {
            let { game: t, voiceGuild: u } = e,
                { trackView: p, trackClick: f } = (0, a.R)(c.n0.GoLiveNudge, { notif_type: c.n0.GoLiveNudge });
            return {
                colorScheme: o.IC.PRIMARY,
                icon: n(847881),
                title: null,
                body: d.intl.formatToPlainString(d.t.z9znpa, {
                    game: t.name,
                    server: u.toString()
                }),
                hint: () => (0, i.jsx)(h, {}),
                renderFooter: () => (0, i.jsx)(h, {}),
                onNotificationShow: () => {
                    p();
                },
                onNotificationClick: (e, t) => {
                    f('unlock'),
                        s.Z.updateNotificationStatus(t),
                        s.Z.setInstanceLocked(!1),
                        (0, r.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e('46746'), n.e('33641')]).then(n.bind(n, 60594));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    selectSource: !1,
                                    guildId: u.id,
                                    analyticsLocation: l.Sbl.OVERLAY_NUDGE
                                });
                        });
                },
                onDismissClick: () => {
                    f('dismiss');
                }
            };
        }
        case c.nc.GO_LIVE_NON_VOICE: {
            let { game: t } = e,
                { trackView: u, trackClick: p } = (0, a.R)(c.n0.GoLiveNonVoiceNudge, { notif_type: c.n0.GoLiveNonVoiceNudge });
            return {
                colorScheme: o.IC.PRIMARY,
                icon: n(847881),
                title: null,
                body: d.intl.formatToPlainString(d.t['0SVWgI'], { game: t.name }),
                hint: () => (0, i.jsx)(h, {}),
                renderFooter: () => (0, i.jsx)(h, {}),
                onNotificationShow: () => {
                    u();
                },
                onNotificationClick: (e, t) => {
                    p('unlock'),
                        s.Z.updateNotificationStatus(t),
                        s.Z.setInstanceLocked(!1),
                        (0, r.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e('46746'), n.e('33641')]).then(n.bind(n, 60594));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    selectSource: !1,
                                    selectGuild: !0,
                                    analyticsLocation: l.Sbl.OVERLAY_NUDGE
                                });
                        });
                },
                onDismissClick: () => {
                    p('dismiss');
                }
            };
        }
    }
}

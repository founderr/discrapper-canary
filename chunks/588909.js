n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(952265),
    l = n(988298),
    o = n(13245),
    a = n(620662),
    s = n(835473),
    u = n(442550),
    c = n(293273),
    d = n(145597),
    h = n(603618),
    f = n(380736),
    p = n(620954),
    m = n(987650),
    E = n(981631),
    v = n(602091),
    g = n(701488),
    _ = n(388032),
    C = n(638266),
    S = n(624960);
function I(e) {
    let { game: t } = e,
        n = (0, s.q)(t.id);
    return null == n
        ? null
        : (0, i.jsx)(u.f, {
              src: n.getIconURL(g.Si.LARGE),
              size: 40
          });
}
function Z(e, t) {
    let { trackView: s, trackClick: u } = (0, p.R)(m.n0.WelcomeNudge, { notif_type: m.n0.WelcomeNudge }),
        g = {};
    for (let s of t)
        switch (s.type) {
            case m.nc.WELCOME: {
                let t = (null == e ? void 0 : e.altId) != null ? c.Z.getApplicationActivity(e.altId) : (null == e ? void 0 : e.id) != null ? c.Z.getApplicationActivity(e.id) : null;
                null != t &&
                    (0, a.Z)(t, E.xjy.JOIN) &&
                    ((g.cancelText = _.intl.string(_.t['6F9ivr'])),
                    (g.onCancelClick = (e, n) => {
                        u('unlock'), o.Z.updateNotificationStatus(n), o.Z.setInputLocked(!1, (0, d.QF)()), (0, l.h7)(t, !1, E.IlC.POPOUT);
                    }));
                break;
            }
            case m.nc.GO_LIVE_VOICE:
            case m.nc.GO_LIVE_NON_VOICE:
                (g.confirmText = _.intl.string(_.t.U76Ft7)),
                    (g.onConfirmClick = (e, t) => {
                        u('unlock'),
                            o.Z.updateNotificationStatus(t),
                            o.Z.setInputLocked(!1, (0, d.QF)()),
                            (0, r.ZD)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e('63288'), n.e('77298'), n.e('23357'), n.e('29549'), n.e('12013'), n.e('52249'), n.e('14627'), n.e('31605'), n.e('26182'), n.e('95900'), n.e('32776'), n.e('87624'), n.e('88449'), n.e('57674'), n.e('10274'), n.e('46746'), n.e('80811')]).then(n.bind(n, 60594));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            selectSource: !1,
                                            guildId: s.type === m.nc.GO_LIVE_VOICE ? s.voiceGuild.id : void 0,
                                            selectGuild: s.type === m.nc.GO_LIVE_NON_VOICE,
                                            analyticsLocation: E.Sbl.OVERLAY_NUDGE
                                        });
                                },
                                { contextKey: v.u1 }
                            );
                    });
                break;
            case m.nc.CONTENT_INVENTORY:
                (g.renderFooter = () =>
                    (0, i.jsx)('div', {
                        className: S.container,
                        children: (0, i.jsx)(h.i, { entries: s.entries })
                    })),
                    (g.onNotificationShow = () => {
                        o.Z.track(E.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                            user_ids: s.entries.map((e) => e.author_id),
                            entry_ids: s.entries.map((e) => e.id)
                        });
                    });
        }
    return {
        ...g,
        icon:
            null != e
                ? (0, i.jsx)(I, { game: e })
                : (0, i.jsx)('img', {
                      src: n(328756),
                      className: C.icon,
                      alt: ''
                  }),
        title: null != e ? e.name : _.intl.string(_.t.pkXAeH),
        body: null,
        hint: () => (0, f.Q)((0, p.P)(), _.t.e6giBQ),
        onNotificationShow: (e) => {
            var t;
            s(), null === (t = g.onNotificationShow) || void 0 === t || t.call(g, e);
        },
        onNotificationClick: () => {
            u('unlock'), o.Z.setInputLocked(!1, (0, d.QF)());
        },
        onDismissClick: () => {
            u('dismiss');
        }
    };
}

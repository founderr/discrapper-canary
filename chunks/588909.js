n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(952265),
    r = n(988298),
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
    v = n(981631),
    g = n(602091),
    E = n(701488),
    _ = n(388032),
    C = n(638266),
    S = n(624960);
function Z(e) {
    let { game: t } = e,
        n = (0, s.q)(t.id);
    return null == n
        ? null
        : (0, i.jsx)(u.f, {
              src: n.getIconURL(E.Si.LARGE),
              size: 40
          });
}
function I(e, t) {
    let { trackView: s, trackClick: u } = (0, p.R)(m.n0.WelcomeNudge, { notif_type: m.n0.WelcomeNudge }),
        E = {};
    for (let s of t)
        switch (s.type) {
            case m.nc.WELCOME: {
                let t = (null == e ? void 0 : e.altId) != null ? c.Z.getApplicationActivity(e.altId) : (null == e ? void 0 : e.id) != null ? c.Z.getApplicationActivity(e.id) : null;
                null != t &&
                    (0, a.Z)(t, v.xjy.JOIN) &&
                    ((E.cancelText = _.intl.string(_.t['6F9ivr'])),
                    (E.onCancelClick = (e, n) => {
                        u('unlock'), o.Z.updateNotificationStatus(n), o.Z.setInputLocked(!1, (0, d.QF)()), (0, r.h7)(t, !1, v.IlC.POPOUT);
                    }));
                break;
            }
            case m.nc.GO_LIVE_VOICE:
            case m.nc.GO_LIVE_NON_VOICE:
                (E.confirmText = _.intl.string(_.t.U76Ft7)),
                    (E.onConfirmClick = (e, t) => {
                        u('unlock'),
                            o.Z.updateNotificationStatus(t),
                            o.Z.setInputLocked(!1, (0, d.QF)()),
                            (0, l.ZD)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e('63288'), n.e('77298'), n.e('23357'), n.e('29549'), n.e('12013'), n.e('52249'), n.e('14627'), n.e('31605'), n.e('26182'), n.e('95900'), n.e('32776'), n.e('87624'), n.e('88449'), n.e('57674'), n.e('46746'), n.e('18145')]).then(n.bind(n, 60594));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            selectSource: !1,
                                            guildId: s.type === m.nc.GO_LIVE_VOICE ? s.voiceGuild.id : void 0,
                                            selectGuild: s.type === m.nc.GO_LIVE_NON_VOICE,
                                            analyticsLocation: v.Sbl.OVERLAY_NUDGE
                                        });
                                },
                                { contextKey: g.u1 }
                            );
                    });
                break;
            case m.nc.CONTENT_INVENTORY:
                (E.renderFooter = () =>
                    (0, i.jsx)('div', {
                        className: S.container,
                        children: (0, i.jsx)(h.i, { entries: s.entries })
                    })),
                    (E.onNotificationShow = () => {
                        o.Z.track(v.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                            user_ids: s.entries.map((e) => e.author_id),
                            entry_ids: s.entries.map((e) => e.id)
                        });
                    });
        }
    return {
        ...E,
        icon:
            null != e
                ? (0, i.jsx)(Z, { game: e })
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
            s(), null === (t = E.onNotificationShow) || void 0 === t || t.call(E, e);
        },
        onNotificationClick: () => {
            u('unlock'), o.Z.setInputLocked(!1, (0, d.QF)());
        },
        onDismissClick: () => {
            u('dismiss');
        }
    };
}

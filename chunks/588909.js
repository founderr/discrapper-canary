n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var o = n(952265),
    l = n(988298),
    r = n(13245),
    s = n(620662),
    a = n(835473),
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
    x = n(388032),
    C = n(176463),
    Z = n(802334);
function _(e) {
    let { game: t } = e,
        n = (0, a.q)(t.id);
    return null == n
        ? null
        : (0, i.jsx)(u.f, {
              src: n.getIconURL(E.Si.LARGE),
              size: 40
          });
}
function I(e, t) {
    let { trackView: a, trackClick: u } = (0, p.R)(m.n0.WelcomeNudge, { notif_type: m.n0.WelcomeNudge }),
        E = {};
    for (let a of t)
        switch (a.type) {
            case m.nc.WELCOME: {
                let t = (null == e ? void 0 : e.altId) != null ? c.Z.getApplicationActivity(e.altId) : (null == e ? void 0 : e.id) != null ? c.Z.getApplicationActivity(e.id) : null;
                null != t &&
                    (0, s.Z)(t, v.xjy.JOIN) &&
                    ((E.cancelText = x.intl.string(x.t['6F9ivr'])),
                    (E.onCancelClick = (e, n) => {
                        u('unlock'), r.Z.updateNotificationStatus(n), r.Z.setInputLocked(!1, (0, d.QF)()), (0, l.h7)(t, !1, v.IlC.POPOUT);
                    }));
                break;
            }
            case m.nc.GO_LIVE_VOICE:
            case m.nc.GO_LIVE_NON_VOICE:
                (E.confirmText = x.intl.string(x.t.U76Ft7)),
                    (E.onConfirmClick = (e, t) => {
                        u('unlock'),
                            r.Z.updateNotificationStatus(t),
                            r.Z.setInputLocked(!1, (0, d.QF)()),
                            (0, o.ZD)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e('46746'), n.e('66913')]).then(n.bind(n, 60594));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            selectSource: !1,
                                            guildId: a.type === m.nc.GO_LIVE_VOICE ? a.voiceGuild.id : void 0,
                                            selectGuild: a.type === m.nc.GO_LIVE_NON_VOICE,
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
                        className: Z.container,
                        children: (0, i.jsx)(h.i, { entries: a.entries })
                    })),
                    (E.onNotificationShow = () => {
                        r.Z.track(v.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                            user_ids: a.entries.map((e) => e.author_id),
                            entry_ids: a.entries.map((e) => e.id)
                        });
                    });
        }
    return {
        ...E,
        icon:
            null != e
                ? (0, i.jsx)(_, { game: e })
                : (0, i.jsx)('img', {
                      src: n(328756),
                      className: C.icon,
                      alt: ''
                  }),
        title: null != e ? e.name : x.intl.string(x.t.pkXAeH),
        body: null,
        hint: () => (0, f.Q)((0, p.P)(), x.t.e6giBQ, x.intl.string(x.t.jZkzVF)),
        onNotificationShow: (e) => {
            var t;
            a(), null === (t = E.onNotificationShow) || void 0 === t || t.call(E, e);
        },
        onNotificationClick: () => {
            u('unlock'), r.Z.setInputLocked(!1, (0, d.QF)());
        },
        onDismissClick: () => {
            u('dismiss');
        }
    };
}

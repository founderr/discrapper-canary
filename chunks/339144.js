n.d(t, {
    J: function () {
        return x;
    },
    y: function () {
        return v;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(512722),
    a = n.n(r),
    o = n(481060),
    s = n(988298),
    c = n(620662),
    u = n(513202),
    d = n(311352),
    h = n(803647),
    p = n(131704),
    m = n(626135),
    f = n(870569),
    g = n(981631),
    C = n(388032),
    _ = n(661609);
function v(e, t, n) {
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === g.IIU.PLAYING && (0, c.Z)(t, g.xjy.JOIN));
}
let x = l.memo(function (e) {
    let t,
        r,
        c,
        x,
        { stream: I, canGoLive: b, guildId: E, isStreaming: S, channel: Z, canStream: N, runningGame: y, embeddedActivity: T, activity: j, application: A, analyticsContext: P } = e,
        M = v(A, j, T),
        R = l.useCallback(() => {
            a()(null != j, 'Received null activity'),
                m.default.track(g.rMx.OPEN_MODAL, {
                    type: 'Send Join Invite',
                    application_id: j.application_id,
                    location: P.location
                }),
                (0, s.h7)(j, !1);
        }, [j, P]),
        w = l.useCallback(
            (e, t) => () => {
                u.Z.leaveActivity({
                    channelId: t.id,
                    applicationId: e,
                    showFeedback: !0
                });
            },
            []
        ),
        L = l.useCallback(() => {
            (0, h.Z)(I);
        }, [I]),
        D = l.useCallback(() => {
            let e = null != Z && (0, p.vd)(Z.type) ? Z : null,
                t = null != e ? e.getGuildId() : E;
            (0, o.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('46746'), n.e('33641')]).then(n.bind(n, 60594));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        selectSource: !1,
                        guildId: t,
                        analyticsLocation: g.Sbl.ACTIVITY_PANEL
                    });
            });
        }, [Z, E]);
    let O =
            (null != y || null == T) && (S || (b && null != y))
                ? (S ? ((t = !1), (r = L), (c = o.ScreenXIcon), (x = C.intl.string(C.t.S5anIS))) : N ? ((t = !1), (r = D), (c = o.ScreenArrowIcon), (x = null != y ? C.intl.formatToPlainString(C.t.AB5gT0, { game: y.name }) : C.intl.string(C.t.FeUKeH))) : ((t = !0), (r = null), (c = o.ScreenArrowIcon), (x = null != Z && (0, p.vd)(Z.type) ? C.intl.string(C.t.uQn9Bw) : null != E ? C.intl.string(C.t.fBXEoK) : C.intl.string(C.t.n3feND))),
                  (0, i.jsx)('div', {
                      className: _.panelButtonContainer,
                      children: (0, i.jsx)(f.Z, {
                          tooltipText: x,
                          disabled: t,
                          onClick: r,
                          icon: c
                      })
                  }))
                : null,
        k =
            M && null == T
                ? (0, i.jsx)(f.Z, {
                      tooltipText: C.intl.string(C.t['hC/Ze3']),
                      onClick: R,
                      icon: o.GroupPlusIcon
                  })
                : null,
        U =
            null == T || null == Z
                ? null
                : (0, i.jsx)(f.Z, {
                      tooltipText: C.intl.string(C.t['R/FK4O']),
                      onClick: w(T.applicationId, Z),
                      icon: o.DoorExitIcon
                  }),
        G = null == I ? null : (0, i.jsx)(d.Z, {});
    return null == O && null == k && null == U
        ? null
        : (0, i.jsxs)('div', {
              className: _.actions,
              children: [O, k, null == O ? U : G]
          });
});

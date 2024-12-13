n.d(t, {
    J: function () {
        return I;
    },
    y: function () {
        return x;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(512722),
    o = n.n(r),
    a = n(481060),
    s = n(988298),
    c = n(636449),
    u = n(620662),
    d = n(513202),
    h = n(311352),
    p = n(803647),
    m = n(131704),
    f = n(626135),
    g = n(870569),
    C = n(981631),
    v = n(388032),
    _ = n(272371);
function x(e, t, n) {
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === C.IIU.PLAYING && (0, u.Z)(t, C.xjy.JOIN));
}
let I = l.memo(function (e) {
    let t,
        r,
        u,
        I,
        { stream: b, canGoLive: E, guildId: S, isStreaming: Z, channel: N, canStream: y, runningGame: T, embeddedActivity: j, activity: A, application: P, analyticsContext: R } = e,
        M = x(P, A, j),
        w = l.useCallback(() => {
            o()(null != A, 'Received null activity'),
                f.default.track(C.rMx.OPEN_MODAL, {
                    type: 'Send Join Invite',
                    application_id: A.application_id,
                    location: R.location
                }),
                (0, s.h7)(A, !1);
        }, [A, R]),
        L = l.useCallback(
            (e, t) => () => {
                d.Z.leaveActivity({
                    channelId: t.id,
                    applicationId: e,
                    showFeedback: !0
                });
            },
            []
        ),
        D = l.useCallback(() => {
            (0, p.Z)(b);
        }, [b]),
        O = l.useCallback(() => {
            let e = null != N && (0, m.vd)(N.type) ? N : null,
                t = null != e ? e.getGuildId() : S;
            (0, a.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('93382'), n.e('79477'), n.e('67911')]).then(n.bind(n, 60594));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        selectSource: !1,
                        guildId: t,
                        analyticsLocation: C.Sbl.ACTIVITY_PANEL
                    });
            });
        }, [N, S]);
    let k =
            (null != T || null == j || (0, c.R)()) && (Z || E)
                ? (Z ? ((t = !1), (r = D), (u = a.ScreenXIcon), (I = v.intl.string(v.t.S5anIS))) : y ? ((t = !1), (r = O), (u = a.ScreenArrowIcon), (I = null != T ? v.intl.formatToPlainString(v.t.AB5gT0, { game: T.name }) : v.intl.string(v.t.FeUKeH))) : ((t = !0), (r = null), (u = a.ScreenArrowIcon), (I = null != N && (0, m.vd)(N.type) ? v.intl.string(v.t.uQn9Bw) : null != S ? v.intl.string(v.t.fBXEoK) : v.intl.string(v.t.n3feND))),
                  (0, i.jsx)('div', {
                      className: _.panelButtonContainer,
                      children: (0, i.jsx)(g.Z, {
                          tooltipText: I,
                          disabled: t,
                          onClick: r,
                          icon: u
                      })
                  }))
                : null,
        G =
            M && null == j
                ? (0, i.jsx)(g.Z, {
                      tooltipText: v.intl.string(v.t['hC/Ze3']),
                      onClick: w,
                      icon: a.GroupPlusIcon
                  })
                : null,
        U =
            null == j || null == N
                ? null
                : (0, i.jsx)(g.Z, {
                      tooltipText: v.intl.string(v.t['R/FK4O']),
                      onClick: L(j.applicationId, N),
                      icon: a.DoorExitIcon
                  }),
        B = null == b ? null : (0, i.jsx)(h.Z, {});
    return null == k && null == G && null == U
        ? null
        : (0, i.jsxs)('div', {
              className: _.actions,
              children: [k, G, null != U ? U : B]
          });
});

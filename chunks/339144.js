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
    a = n.n(r),
    o = n(481060),
    s = n(988298),
    c = n(316253),
    u = n(620662),
    d = n(513202),
    h = n(311352),
    p = n(803647),
    m = n(131704),
    f = n(626135),
    g = n(870569),
    C = n(981631),
    _ = n(388032),
    v = n(900087);
function x(e, t, n) {
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === C.IIU.PLAYING && (0, u.Z)(t, C.xjy.JOIN));
}
let I = l.memo(function (e) {
    let t,
        r,
        u,
        I,
        { stream: b, canGoLive: E, guildId: S, isStreaming: Z, channel: N, canStream: y, runningGame: T, embeddedActivity: A, activity: P, application: j, analyticsContext: R } = e,
        M = x(j, P, A),
        L = l.useCallback(() => {
            a()(null != P, 'Received null activity'),
                f.default.track(C.rMx.OPEN_MODAL, {
                    type: 'Send Join Invite',
                    application_id: P.application_id,
                    location: R.location
                }),
                (0, s.h7)(P, !1);
        }, [P, R]),
        w = l.useCallback(
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
            (0, o.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('46746'), n.e('33641')]).then(n.bind(n, 60594));
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
            (null != T || ((0, c.Z)() && null != A)) && (Z || E)
                ? (Z ? ((t = !1), (r = D), (u = o.ScreenXIcon), (I = _.intl.string(_.t.S5anIS))) : y ? ((t = !1), (r = O), (u = o.ScreenArrowIcon), (I = null != T ? _.intl.formatToPlainString(_.t.AB5gT0, { game: T.name }) : _.intl.string(_.t.FeUKeH))) : ((t = !0), (r = null), (u = o.ScreenArrowIcon), (I = null != N && (0, m.vd)(N.type) ? _.intl.string(_.t.uQn9Bw) : null != S ? _.intl.string(_.t.fBXEoK) : _.intl.string(_.t.n3feND))),
                  (0, i.jsx)('div', {
                      className: v.panelButtonContainer,
                      children: (0, i.jsx)(g.Z, {
                          tooltipText: I,
                          disabled: t,
                          onClick: r,
                          icon: u
                      })
                  }))
                : null,
        U =
            M && null == A
                ? (0, i.jsx)(g.Z, {
                      tooltipText: _.intl.string(_.t['hC/Ze3']),
                      onClick: L,
                      icon: o.GroupPlusIcon
                  })
                : null,
        G =
            null == A || null == N
                ? null
                : (0, i.jsx)(g.Z, {
                      tooltipText: _.intl.string(_.t['R/FK4O']),
                      onClick: w(A.applicationId, N),
                      icon: o.DoorExitIcon
                  }),
        B = null == b ? null : (0, i.jsx)(h.Z, {});
    return null == k && null == U && null == G
        ? null
        : (0, i.jsxs)('div', {
              className: v.actions,
              children: [k, U, null != G ? G : B]
          });
});

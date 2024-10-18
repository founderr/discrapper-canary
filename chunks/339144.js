n.d(t, {
    J: function () {
        return E;
    },
    y: function () {
        return I;
    }
});
var i = n(735250),
    l = n(470079),
    r = n(512722),
    a = n.n(r),
    s = n(481060),
    o = n(988298),
    c = n(620662),
    u = n(513202),
    d = n(311352),
    h = n(803647),
    p = n(131704),
    f = n(626135),
    _ = n(870569),
    m = n(981631),
    g = n(689938),
    C = n(900087);
function I(e, t, n) {
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === m.IIU.PLAYING && (0, c.Z)(t, m.xjy.JOIN));
}
let E = l.memo(function (e) {
    let t,
        r,
        c,
        E,
        { stream: N, canGoLive: x, guildId: S, isStreaming: v, channel: Z, canStream: T, runningGame: b, embeddedActivity: A, activity: M, application: R, analyticsContext: L } = e,
        y = I(R, M, A),
        P = l.useCallback(() => {
            a()(null != M, 'Received null activity'),
                f.default.track(m.rMx.OPEN_MODAL, {
                    type: 'Send Join Invite',
                    application_id: M.application_id,
                    location: L.location
                }),
                (0, o.h7)(M, !1);
        }, [M, L]),
        O = l.useCallback(
            (e, t) => () => {
                u.Z.leaveActivity({
                    channelId: t.id,
                    applicationId: e,
                    showFeedback: !0
                });
            },
            []
        ),
        j = l.useCallback(() => {
            (0, h.Z)(N);
        }, [N]),
        D = l.useCallback(() => {
            let e = null != Z && (0, p.vd)(Z.type) ? Z : null,
                t = null != e ? e.getGuildId() : S;
            (0, s.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('46746'), n.e('33641')]).then(n.bind(n, 60594));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        selectSource: !1,
                        guildId: t,
                        analyticsLocation: m.Sbl.ACTIVITY_PANEL
                    });
            });
        }, [Z, S]);
    let w =
            (null != b || null == A) && (v || (x && null != b))
                ? (v ? ((t = !1), (r = j), (c = s.ScreenXIcon), (E = g.Z.Messages.STOP_STREAMING)) : T ? ((t = !1), (r = D), (c = s.ScreenArrowIcon), (E = null != b ? g.Z.Messages.ACTIVITY_PANEL_GO_LIVE_STREAM_GAME.format({ game: b.name }) : g.Z.Messages.ACTIVITY_PANEL_GO_LIVE)) : ((t = !0), (r = null), (c = s.ScreenArrowIcon), (E = null != Z && (0, p.vd)(Z.type) ? g.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE : null != S ? g.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_GUILD : g.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NOT_IN_GUILD)),
                  (0, i.jsx)('div', {
                      className: C.panelButtonContainer,
                      children: (0, i.jsx)(_.Z, {
                          tooltipText: E,
                          disabled: t,
                          onClick: r,
                          icon: c
                      })
                  }))
                : null,
        U =
            y && null == A
                ? (0, i.jsx)(_.Z, {
                      tooltipText: g.Z.Messages.INVITE_EMBED_INVITE_TO_JOIN,
                      onClick: P,
                      icon: s.GroupPlusIcon
                  })
                : null,
        G =
            null == A || null == Z
                ? null
                : (0, i.jsx)(_.Z, {
                      tooltipText: g.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
                      onClick: O(A.applicationId, Z),
                      icon: s.DoorExitIcon
                  }),
        k = null == N ? null : (0, i.jsx)(d.Z, {});
    return null == w && null == U && null == G
        ? null
        : (0, i.jsxs)('div', {
              className: C.actions,
              children: [w, U, null == w ? G : k]
          });
});

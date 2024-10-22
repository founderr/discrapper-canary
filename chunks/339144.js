n.d(t, {
    J: function () {
        return L;
    },
    y: function () {
        return M;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(512722),
    a = n.n(r),
    s = n(704215),
    o = n(481060),
    c = n(988298),
    u = n(620662),
    d = n(513202),
    h = n(570938),
    p = n(311352),
    f = n(686546),
    _ = n(207796),
    m = n(243778),
    g = n(749681),
    C = n(216742),
    I = n(803647),
    E = n(131704),
    N = n(626135),
    x = n(870569),
    S = n(981631),
    v = n(921944),
    Z = n(49898),
    T = n(128449),
    b = n(689938),
    A = n(900087);
function M(e, t, n) {
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === S.IIU.PLAYING && (0, u.Z)(t, S.xjy.JOIN));
}
function R(e) {
    let { badged: t } = e;
    return t
        ? (0, i.jsxs)('div', {
              className: A.badgedGuildIcon,
              children: [
                  (0, i.jsx)(f.ZP, {
                      mask: f.ZP.Masks.BADGED_GUILD_ICON,
                      width: 20,
                      height: 20,
                      children: (0, i.jsx)(h.Z, {
                          width: 20,
                          height: 20,
                          color: 'currentColor'
                      })
                  }),
                  (0, i.jsx)('div', { className: A.badge })
              ]
          })
        : (0, i.jsx)(h.Z, {
              width: 20,
              height: 20,
              color: 'currentColor'
          });
}
let L = l.memo(function (e) {
    let t,
        r,
        u,
        h,
        { stream: f, canGoLive: L, guildId: y, isStreaming: P, channel: O, canStream: j, runningGame: D, embeddedActivity: w, activity: U, application: G, analyticsContext: k } = e,
        B = M(G, U, w),
        { enabled: H } = (0, C.I7)(),
        [V, F] = (0, m.US)(H ? [s.z.RAPIDASH_RTC_BROWSE_GUILDS] : [], void 0, !0),
        W = V === s.z.RAPIDASH_RTC_BROWSE_GUILDS,
        z = l.useCallback(() => {
            a()(null != U, 'Received null activity'),
                N.default.track(S.rMx.OPEN_MODAL, {
                    type: 'Send Join Invite',
                    application_id: U.application_id,
                    location: k.location
                }),
                (0, c.h7)(U, !1);
        }, [U, k]),
        Y = l.useCallback(
            (e, t) => () => {
                d.Z.leaveActivity({
                    channelId: t.id,
                    applicationId: e,
                    showFeedback: !0
                });
            },
            []
        ),
        K = l.useCallback(() => {
            (0, I.Z)(f);
        }, [f]),
        q = l.useCallback(() => {
            let e = null != O && (0, E.vd)(O.type) ? O : null,
                t = null != e ? e.getGuildId() : y;
            (0, o.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('46746'), n.e('33641')]).then(n.bind(n, 60594));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        selectSource: !1,
                        guildId: t,
                        analyticsLocation: S.Sbl.ACTIVITY_PANEL
                    });
            });
        }, [O, y]),
        Q = l.useCallback(() => {
            (null == D ? void 0 : D.id) != null && _.GN.getState().setSelectedGames([D.id]),
                F(v.L.PRIMARY),
                (0, g.transitionToGlobalDiscovery)({
                    tab: Z.F$.SERVERS,
                    selectedServersTab: T.vf.GUILDS
                });
        }, [D, F]);
    let X =
            (null != D || null == w) && (P || (L && null != D))
                ? (P ? ((t = !1), (r = K), (u = o.ScreenXIcon), (h = b.Z.Messages.STOP_STREAMING)) : j ? ((t = !1), (r = q), (u = o.ScreenArrowIcon), (h = null != D ? b.Z.Messages.ACTIVITY_PANEL_GO_LIVE_STREAM_GAME.format({ game: D.name }) : b.Z.Messages.ACTIVITY_PANEL_GO_LIVE)) : ((t = !0), (r = null), (u = o.ScreenArrowIcon), (h = null != O && (0, E.vd)(O.type) ? b.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE : null != y ? b.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_GUILD : b.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NOT_IN_GUILD)),
                  (0, i.jsx)('div', {
                      className: A.panelButtonContainer,
                      children: (0, i.jsx)(x.Z, {
                          tooltipText: h,
                          disabled: t,
                          onClick: r,
                          icon: u
                      })
                  }))
                : null,
        J =
            B && null == w
                ? (0, i.jsx)(x.Z, {
                      tooltipText: b.Z.Messages.INVITE_EMBED_INVITE_TO_JOIN,
                      onClick: z,
                      icon: o.GroupPlusIcon
                  })
                : null,
        $ =
            null == w || null == O
                ? null
                : (0, i.jsx)(x.Z, {
                      tooltipText: b.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
                      onClick: Y(w.applicationId, O),
                      icon: o.DoorExitIcon
                  }),
        ee = null == f ? null : (0, i.jsx)(p.Z, {}),
        et = H && !P && null == w && null != D;
    return null == X && null == J && null == $
        ? null
        : (0, i.jsxs)('div', {
              className: A.actions,
              children: [
                  et
                      ? (0, i.jsx)(x.Z, {
                            'aria-label': b.Z.Messages.RAPIDASH_BROWSE_GUILDS_CTA_ARIA.format({ gameName: null == D ? void 0 : D.name }),
                            tooltipText: b.Z.Messages.RAPIDASH_BROWSE_GUILDS_CTA.format({ gameName: null == D ? void 0 : D.name }),
                            tooltipContentClassName: A.centeredTooltip,
                            onClick: Q,
                            icon: (0, i.jsx)(R, { badged: W })
                        })
                      : null,
                  X,
                  J,
                  null == X ? $ : ee
              ]
          });
});

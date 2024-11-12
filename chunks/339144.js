n.d(t, {
    J: function () {
        return P;
    },
    y: function () {
        return j;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(512722),
    a = n.n(r),
    o = n(704215),
    s = n(481060),
    c = n(988298),
    u = n(620662),
    d = n(513202),
    h = n(570938),
    p = n(311352),
    f = n(686546),
    m = n(207796),
    g = n(243778),
    C = n(749681),
    _ = n(216742),
    v = n(803647),
    x = n(131704),
    I = n(626135),
    b = n(870569),
    S = n(981631),
    E = n(921944),
    N = n(49898),
    Z = n(128449),
    y = n(388032),
    T = n(900087);
function j(e, t, n) {
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === S.IIU.PLAYING && (0, u.Z)(t, S.xjy.JOIN));
}
function A(e) {
    let { badged: t } = e;
    return t
        ? (0, i.jsxs)('div', {
              className: T.badgedGuildIcon,
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
                  (0, i.jsx)('div', { className: T.badge })
              ]
          })
        : (0, i.jsx)(h.Z, {
              width: 20,
              height: 20,
              color: 'currentColor'
          });
}
let P = l.memo(function (e) {
    let t,
        r,
        u,
        h,
        { stream: f, canGoLive: P, guildId: M, isStreaming: R, channel: L, canStream: w, runningGame: D, embeddedActivity: O, activity: k, application: U, analyticsContext: G } = e,
        B = j(U, k, O),
        { enabled: H } = (0, _.I7)(),
        [V, F] = (0, g.US)(H ? [o.z.RAPIDASH_RTC_BROWSE_GUILDS] : [], void 0, !0),
        W = V === o.z.RAPIDASH_RTC_BROWSE_GUILDS,
        z = l.useCallback(() => {
            a()(null != k, 'Received null activity'),
                I.default.track(S.rMx.OPEN_MODAL, {
                    type: 'Send Join Invite',
                    application_id: k.application_id,
                    location: G.location
                }),
                (0, c.h7)(k, !1);
        }, [k, G]),
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
            (0, v.Z)(f);
        }, [f]),
        q = l.useCallback(() => {
            let e = null != L && (0, x.vd)(L.type) ? L : null,
                t = null != e ? e.getGuildId() : M;
            (0, s.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('46746'), n.e('33641')]).then(n.bind(n, 60594));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        selectSource: !1,
                        guildId: t,
                        analyticsLocation: S.Sbl.ACTIVITY_PANEL
                    });
            });
        }, [L, M]),
        Q = l.useCallback(() => {
            (null == D ? void 0 : D.id) != null && m.GN.getState().setSelectedGames([D.id]),
                F(E.L.PRIMARY),
                (0, C.transitionToGlobalDiscovery)({
                    tab: N.F$.SERVERS,
                    selectedServersTab: Z.vf.GUILDS,
                    entrypoint: Z.Qq.RTC_PANEL
                });
        }, [D, F]);
    let J =
            (null != D || null == O) && (R || (P && null != D))
                ? (R ? ((t = !1), (r = K), (u = s.ScreenXIcon), (h = y.intl.string(y.t.S5anIS))) : w ? ((t = !1), (r = q), (u = s.ScreenArrowIcon), (h = null != D ? y.intl.formatToPlainString(y.t.AB5gT0, { game: D.name }) : y.intl.string(y.t.FeUKeH))) : ((t = !0), (r = null), (u = s.ScreenArrowIcon), (h = null != L && (0, x.vd)(L.type) ? y.intl.string(y.t.uQn9Bw) : null != M ? y.intl.string(y.t.fBXEoK) : y.intl.string(y.t.n3feND))),
                  (0, i.jsx)('div', {
                      className: T.panelButtonContainer,
                      children: (0, i.jsx)(b.Z, {
                          tooltipText: h,
                          disabled: t,
                          onClick: r,
                          icon: u
                      })
                  }))
                : null,
        X =
            B && null == O
                ? (0, i.jsx)(b.Z, {
                      tooltipText: y.intl.string(y.t['hC/Ze3']),
                      onClick: z,
                      icon: s.GroupPlusIcon
                  })
                : null,
        $ =
            null == O || null == L
                ? null
                : (0, i.jsx)(b.Z, {
                      tooltipText: y.intl.string(y.t['R/FK4O']),
                      onClick: Y(O.applicationId, L),
                      icon: s.DoorExitIcon
                  }),
        ee = null == f ? null : (0, i.jsx)(p.Z, {}),
        et = H && !R && null == O && null != D;
    return null == J && null == X && null == $
        ? null
        : (0, i.jsxs)('div', {
              className: T.actions,
              children: [
                  et
                      ? (0, i.jsx)(b.Z, {
                            'aria-label': y.intl.formatToPlainString(y.t.iz7mkp, { gameName: null == D ? void 0 : D.name }),
                            tooltipText: y.intl.format(y.t['NN+Y8P'], { gameName: null == D ? void 0 : D.name }),
                            tooltipContentClassName: T.centeredTooltip,
                            onClick: Q,
                            icon: (0, i.jsx)(A, { badged: W })
                        })
                      : null,
                  J,
                  X,
                  null == J ? $ : ee
              ]
          });
});

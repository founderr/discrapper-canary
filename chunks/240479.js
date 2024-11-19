n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120),
    n(773603);
var r = n(200651),
    i = n(192379),
    a = n(793030),
    s = n(442837),
    o = n(481060),
    l = n(749210),
    u = n(231053),
    c = n(183023),
    d = n(524444),
    f = n(208049),
    _ = n(697426),
    p = n(409673),
    h = n(430824),
    m = n(197115),
    g = n(409700),
    E = n(767434),
    v = n(474936),
    b = n(981631),
    I = n(710111),
    S = n(388032),
    T = n(827857);
function y(e) {
    let { discoverableGuildId: t, closePopout: n, buttonType: a } = e,
        s = i.useCallback(async () => {
            if ((n(), null != t))
                try {
                    await l.Z.joinGuild(t), l.Z.transitionToGuildSync(t);
                } catch {}
        }, [n, t]);
    return a === E.y.GET_NITRO
        ? (0, r.jsx)(m.Z, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: b.jXE.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: v.Si.TIER_2,
              size: o.Button.Sizes.SMALL,
              color: o.Button.Colors.CUSTOM,
              onClick: n,
              buttonText: S.intl.string(S.t.pj0XBA)
          })
        : a === E.y.JOIN_GUILD
          ? (0, r.jsx)(o.Button, {
                size: o.Button.Sizes.SMALL,
                fullWidth: !0,
                onClick: s,
                children: S.intl.string(S.t.riu2R0)
            })
          : null;
}
function A(e) {
    let { sound: t, channel: n, closePopout: o, refreshPosition: l } = e,
        m = t.guildId === I.X8,
        v = (0, s.e7)([h.Z], () => h.Z.getGuild(t.guildId)),
        b = !m && null != v,
        [S, A] = i.useState(!m && !b),
        [N, C] = i.useState();
    i.useEffect(() => {
        if (!m && !b && null == N)
            A(!0),
                (0, f.xU)(t.soundId, t.guildId)
                    .then((e) => {
                        C(e);
                    })
                    .finally(() => {
                        A(!1), l();
                    });
    }, [t, m, b, l, N]);
    let { buttonType: R, description: O } = (0, E.Z)(t, n, b, N),
        D = !b && null != N,
        L = !m && S,
        x = i.useMemo(() => (b ? u.JO.createFromGuildRecord(v) : null != N ? u.JO.createFromDiscoverableGuild(N) : void 0), [v, b, N]);
    return L
        ? (0, r.jsx)(d.SE, {})
        : (0, r.jsxs)(d.W_, {
              className: T.infoContainer,
              children: [
                  (0, r.jsx)(g.P6, {
                      sound: t,
                      forceShowBetaLabel: R === E.y.GET_NITRO
                  }),
                  (0, r.jsxs)('div', {
                      className: T.infoExpandedSoundContainer,
                      children: [
                          (0, r.jsx)(p.ZP, {
                              refreshEnabled: !0,
                              buttonOverlay: _.Pb.NONE,
                              sound: t,
                              channel: void 0,
                              isSoundmoji: !0,
                              onSelectItem: () => {}
                          }),
                          (0, r.jsx)(a.xv, {
                              variant: 'text-sm/normal',
                              children: O
                          })
                      ]
                  }),
                  null != x &&
                      (0, r.jsxs)('div', {
                          className: T.infoExpandedGuildContainer,
                          children: [
                              (0, r.jsx)(a.xv, {
                                  variant: 'eyebrow',
                                  color: 'header-muted',
                                  className: T.infoExpandedGuildTitle,
                                  children: 'This soundmoji is from'
                              }),
                              (0, r.jsx)('div', {
                                  className: T.infoExpandedGuildInfo,
                                  children: (0, r.jsx)(c.Oe, {
                                      expressionSourceGuild: x,
                                      hasJoinedExpressionSourceGuild: b,
                                      isDisplayingJoinGuildButtonInPopout: D
                                  })
                              }),
                              (0, r.jsx)(y, {
                                  buttonType: R,
                                  discoverableGuildId: null == N ? void 0 : N.id,
                                  closePopout: o
                              })
                          ]
                      })
              ]
          });
}

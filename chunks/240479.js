n.d(t, {
    Z: function () {
        return N;
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
    g = n(125900),
    E = n(409700),
    v = n(767434),
    b = n(474936),
    I = n(981631),
    S = n(710111),
    T = n(388032),
    y = n(827857);
function A(e) {
    let { discoverableGuildId: t, closePopout: n, buttonType: a } = e,
        s = i.useCallback(async () => {
            if ((n(), null != t))
                try {
                    await l.Z.joinGuild(t), l.Z.transitionToGuildSync(t);
                } catch {}
        }, [n, t]);
    return a === v.y.GET_NITRO
        ? (0, r.jsx)(m.Z, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: I.jXE.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: b.Si.TIER_2,
              size: o.Button.Sizes.SMALL,
              color: o.Button.Colors.CUSTOM,
              onClick: n,
              buttonText: T.intl.string(T.t.pj0XBA)
          })
        : a === v.y.JOIN_GUILD
          ? (0, r.jsx)(o.Button, {
                size: o.Button.Sizes.SMALL,
                fullWidth: !0,
                onClick: s,
                children: T.intl.string(T.t.riu2R0)
            })
          : null;
}
function N(e) {
    let { sound: t, channel: n, closePopout: o, refreshPosition: l } = e,
        m = t.guildId === S.X8,
        b = (0, s.e7)([h.Z], () => h.Z.getGuild(t.guildId)),
        I = !m && null != b,
        [N, C] = i.useState(),
        R = (0, g.V)({ location: 'SoundmojiGuildInfo' }),
        O = m || I || null != N || !R,
        [D, L] = i.useState(!O);
    i.useEffect(() => {
        if (!O)
            L(!0),
                (0, f.xU)(t.soundId, t.guildId)
                    .then((e) => {
                        C(e);
                    })
                    .finally(() => {
                        L(!1), l();
                    });
    }, [l, O, t.guildId, t.soundId]);
    let { buttonType: x, description: w } = (0, v.Z)(t, n, I, N),
        M = !I && null != N,
        P = !m && D,
        k = i.useMemo(() => (I ? u.JO.createFromGuildRecord(b) : null != N ? u.JO.createFromDiscoverableGuild(N) : void 0), [b, I, N]);
    return P
        ? (0, r.jsx)(d.SE, {})
        : (0, r.jsxs)(d.W_, {
              className: y.infoContainer,
              children: [
                  (0, r.jsx)(E.P6, {
                      sound: t,
                      forceShowBetaLabel: x === v.y.GET_NITRO
                  }),
                  (0, r.jsxs)('div', {
                      className: y.infoExpandedSoundContainer,
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
                              children: w
                          })
                      ]
                  }),
                  null != k &&
                      (0, r.jsxs)('div', {
                          className: y.infoExpandedGuildContainer,
                          children: [
                              (0, r.jsx)(a.xv, {
                                  variant: 'eyebrow',
                                  color: 'header-muted',
                                  className: y.infoExpandedGuildTitle,
                                  children: I ? T.intl.string(T.t.tGDabm) : T.intl.string(T.t.rnOmOT)
                              }),
                              (0, r.jsx)('div', {
                                  className: y.infoExpandedGuildInfo,
                                  children: (0, r.jsx)(c.Oe, {
                                      expressionSourceGuild: k,
                                      hasJoinedExpressionSourceGuild: I,
                                      isDisplayingJoinGuildButtonInPopout: M
                                  })
                              }),
                              (0, r.jsx)(A, {
                                  buttonType: x,
                                  discoverableGuildId: null == N ? void 0 : N.id,
                                  closePopout: o
                              })
                          ]
                      })
              ]
          });
}

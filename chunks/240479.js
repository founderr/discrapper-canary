r.d(n, {
    Z: function () {
        return O;
    }
});
var i = r(47120);
var a = r(773603);
var s = r(200651),
    o = r(192379),
    l = r(793030),
    u = r(442837),
    c = r(481060),
    d = r(749210),
    f = r(231053),
    _ = r(183023),
    h = r(524444),
    p = r(208049),
    m = r(697426),
    g = r(409673),
    E = r(430824),
    v = r(197115),
    I = r(125900),
    T = r(409700),
    b = r(767434),
    y = r(474936),
    S = r(981631),
    A = r(710111),
    N = r(388032),
    C = r(89107);
function R(e) {
    let { discoverableGuildId: n, closePopout: r, buttonType: i } = e,
        a = o.useCallback(async () => {
            if ((r(), null != n))
                try {
                    await d.Z.joinGuild(n), d.Z.transitionToGuildSync(n);
                } catch {}
        }, [r, n]);
    return i === b.y.GET_NITRO
        ? (0, s.jsx)(v.Z, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: S.jXE.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: y.Si.TIER_2,
              size: c.Button.Sizes.SMALL,
              color: c.Button.Colors.CUSTOM,
              onClick: r,
              buttonText: N.intl.string(N.t.pj0XBA)
          })
        : i === b.y.JOIN_GUILD
          ? (0, s.jsx)(c.Button, {
                size: c.Button.Sizes.SMALL,
                fullWidth: !0,
                onClick: a,
                children: N.intl.string(N.t.riu2R0)
            })
          : null;
}
function O(e) {
    let { sound: n, channel: r, closePopout: i, refreshPosition: a } = e,
        c = n.guildId === A.X8,
        d = (0, u.e7)([E.Z], () => E.Z.getGuild(n.guildId)),
        v = !c && null != d,
        [y, S] = o.useState(),
        O = (0, I.V2)({ location: 'SoundmojiGuildInfo' }),
        D = c || v || null != y || !O,
        [L, x] = o.useState(!D);
    o.useEffect(() => {
        if (!D)
            x(!0),
                (0, p.xU)(n.soundId, n.guildId)
                    .then((e) => {
                        S(e);
                    })
                    .finally(() => {
                        x(!1), a();
                    });
    }, [a, D, n.guildId, n.soundId]);
    let { buttonType: w, description: P } = (0, b.Z)(n, r, v, y),
        M = !v && null != y,
        k = !c && L,
        U = o.useMemo(() => (v ? f.JO.createFromGuildRecord(d) : null != y ? f.JO.createFromDiscoverableGuild(y) : void 0), [d, v, y]);
    return k
        ? (0, s.jsx)(h.SE, {})
        : (0, s.jsxs)(h.W_, {
              className: C.infoContainer,
              children: [
                  (0, s.jsx)(T.P6, {
                      sound: n,
                      forceShowBetaLabel: w === b.y.GET_NITRO
                  }),
                  (0, s.jsxs)('div', {
                      className: C.infoExpandedSoundContainer,
                      children: [
                          (0, s.jsx)(g.ZP, {
                              refreshEnabled: !0,
                              buttonOverlay: m.Pb.NONE,
                              sound: n,
                              channel: void 0,
                              isSoundmoji: !0,
                              onSelectItem: () => {}
                          }),
                          (0, s.jsx)(l.xv, {
                              variant: 'text-sm/normal',
                              children: P
                          })
                      ]
                  }),
                  null != U &&
                      (0, s.jsxs)('div', {
                          className: C.infoExpandedGuildContainer,
                          children: [
                              (0, s.jsx)(l.xv, {
                                  variant: 'eyebrow',
                                  color: 'header-muted',
                                  className: C.infoExpandedGuildTitle,
                                  children: v ? N.intl.string(N.t.tGDabm) : N.intl.string(N.t.rnOmOT)
                              }),
                              (0, s.jsx)('div', {
                                  className: C.infoExpandedGuildInfo,
                                  children: (0, s.jsx)(_.Oe, {
                                      expressionSourceGuild: U,
                                      hasJoinedExpressionSourceGuild: v,
                                      isDisplayingJoinGuildButtonInPopout: M
                                  })
                              }),
                              (0, s.jsx)(R, {
                                  buttonType: w,
                                  discoverableGuildId: null == y ? void 0 : y.id,
                                  closePopout: i
                              })
                          ]
                      })
              ]
          });
}

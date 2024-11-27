t.d(n, {
    Z: function () {
        return E;
    }
}),
    t(47120);
var i = t(200651),
    o = t(192379),
    a = t(120356),
    r = t.n(a),
    c = t(442837),
    l = t(481060),
    d = t(13245),
    s = t(753972),
    u = t(812206),
    _ = t(726721),
    f = t(610394),
    p = t(390322),
    v = t(961048),
    b = t(871499),
    h = t(786915),
    m = t(592125),
    x = t(271383),
    C = t(594174),
    g = t(51144),
    I = t(145597),
    k = t(214629),
    Z = t(317381),
    y = t(884338),
    N = t(473179),
    S = t(981631),
    j = t(388032),
    z = t(124062);
let A = y.u.SIZE_24;
function E(e) {
    let { applicationId: n, channelId: t } = e,
        a = (0, c.e7)([u.Z], () => u.Z.getApplication(n)),
        E = (0, c.e7)([Z.ZP], () => Z.ZP.getSelfEmbeddedActivities().get(n)),
        W = (0, c.e7)([m.Z], () => m.Z.getChannel(t)),
        B = (0, c.Wu)(
            [x.ZP],
            () => {
                var e;
                return null == W || null == E ? [] : Array.from(null !== (e = E.userIds) && void 0 !== e ? e : []).map((e) => x.ZP.getMember(W.guild_id, e));
            },
            [E, W]
        ),
        P = o.useMemo(() => {
            let e = new Map();
            return (
                B.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [B]),
        w = o.useCallback(
            (e, n) => {
                var t;
                if (null == e || void 0 === e || void 0 === n) return null;
                let o = P.get(e.id),
                    a = null !== (t = null == o ? void 0 : o.nick) && void 0 !== t ? t : g.ZP.getName(e);
                return (0, i.jsx)(
                    l.TooltipContainer,
                    {
                        text: a,
                        position: 'bottom',
                        children: (0, i.jsx)(
                            'img',
                            {
                                src: e.getAvatarURL(n.guild_id, A),
                                alt: a,
                                className: z.avatar
                            },
                            e.id
                        )
                    },
                    e.id
                );
            },
            [P]
        ),
        L = null == E ? void 0 : E.userIds,
        R = (0, c.Wu)(
            [C.default],
            () =>
                Array.from(null != L ? L : [])
                    .map((e) => C.default.getUser(e))
                    .filter((e) => null != e && void 0 !== e),
            [L]
        ),
        T = _.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !1 }).enabled,
        U = o.useCallback(() => {
            let e = (0, I.QF)();
            d.Z.setInputLocked(!f.Z.isInputLocked(e), e);
        }, []),
        O = (0, k.PR)();
    return null == a || null == t || null == W
        ? null
        : (0, i.jsx)(l.ThemeProvider, {
              theme: S.BRd.DARK,
              children: (e) =>
                  (0, i.jsxs)('div', {
                      className: r()(z.container, e),
                      children: [
                          (0, i.jsxs)('div', {
                              className: r()(z.headerSection, z.headerSectionLeft),
                              children: [
                                  (0, i.jsx)(s.Z, {
                                      application: a,
                                      size: 24,
                                      className: z.appIcon
                                  }),
                                  (0, i.jsx)(l.Text, {
                                      variant: 'text-md/normal',
                                      color: 'header-primary',
                                      children: a.name
                                  }),
                                  (0, i.jsx)('div', {
                                      className: z.dotSpacer,
                                      children: (0, i.jsx)(l.Text, {
                                          variant: 'text-md/normal',
                                          color: 'text-muted',
                                          children: '.'
                                      })
                                  }),
                                  (0, i.jsx)(y.Z, {
                                      renderIcon: !1,
                                      users: R,
                                      size: A,
                                      max: 6,
                                      className: z.userAvatars,
                                      renderUser: (e) => w(e, W)
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              className: r()(z.headerSection, z.headerSectionRight),
                              children: (0, i.jsxs)('div', {
                                  className: z.actionButtonsContainer,
                                  children: [
                                      (0, i.jsx)(h.Z, {
                                          appContext: S.IlC.POPOUT,
                                          applicationId: n,
                                          channel: W,
                                          shouldPrioritizeGroupPlusIcon: !0
                                      }),
                                      O
                                          ? (0, i.jsx)(b.Z, {
                                                onClick: U,
                                                iconComponent: l.WindowTopOutlineIcon,
                                                label: j.intl.string(j.t.mseZsL)
                                            })
                                          : null,
                                      T &&
                                          (0, i.jsx)(
                                              l.Popout,
                                              {
                                                  position: 'bottom',
                                                  renderPopout: (e) => {
                                                      let { closePopout: n } = e;
                                                      return (0, i.jsx)(p.Z, {
                                                          children: (0, i.jsx)(N.Z, {
                                                              application: a,
                                                              channelId: t,
                                                              onClose: n
                                                          })
                                                      });
                                                  },
                                                  children: (e, n) => {
                                                      let { isShown: t } = n;
                                                      return (0, o.createElement)(v.Z, {
                                                          ...e,
                                                          key: 'more-options',
                                                          isActive: t
                                                      });
                                                  }
                                              },
                                              'more-options-popout'
                                          )
                                  ]
                              })
                          })
                      ]
                  })
          });
}

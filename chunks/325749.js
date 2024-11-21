t.d(n, {
    Z: function () {
        return B;
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
    _ = t(665149),
    f = t(726721),
    p = t(610394),
    v = t(390322),
    h = t(961048),
    b = t(871499),
    m = t(786915),
    C = t(592125),
    x = t(271383),
    g = t(594174),
    I = t(51144),
    k = t(145597),
    Z = t(214629),
    j = t(317381),
    N = t(574952),
    S = t(884338),
    y = t(473179),
    z = t(981631),
    A = t(388032),
    E = t(114195);
let W = S.u.SIZE_24;
function B(e) {
    let { applicationId: n, channelId: t } = e,
        a = (0, c.e7)([u.Z], () => u.Z.getApplication(n)),
        B = (0, c.e7)([j.ZP], () => j.ZP.getSelfEmbeddedActivities().get(n)),
        P = (0, c.e7)([C.Z], () => C.Z.getChannel(t)),
        w = (0, c.Wu)(
            [x.ZP],
            () => {
                var e;
                return null == P || null == B ? [] : Array.from(null !== (e = B.userIds) && void 0 !== e ? e : []).map((e) => x.ZP.getMember(P.guild_id, e));
            },
            [B, P]
        ),
        L = o.useMemo(() => {
            let e = new Map();
            return (
                w.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [w]),
        R = o.useCallback(
            (e, n) => {
                var t;
                if (null == e || void 0 === e || void 0 === n) return null;
                let o = L.get(e.id),
                    a = null !== (t = null == o ? void 0 : o.nick) && void 0 !== t ? t : I.ZP.getName(e);
                return (0, i.jsx)(
                    l.TooltipContainer,
                    {
                        text: a,
                        position: 'bottom',
                        children: (0, i.jsx)(
                            'img',
                            {
                                src: e.getAvatarURL(n.guild_id, W),
                                alt: a,
                                className: E.avatar
                            },
                            e.id
                        )
                    },
                    e.id
                );
            },
            [L]
        ),
        T = null == B ? void 0 : B.userIds,
        O = (0, c.Wu)(
            [g.default],
            () =>
                Array.from(null != T ? T : [])
                    .map((e) => g.default.getUser(e))
                    .filter((e) => null != e && void 0 !== e),
            [T]
        ),
        D = o.useCallback(() => {
            (0, N.Z)().leaveActivity({
                channelId: t,
                applicationId: n
            });
        }, [t, n]),
        U = f.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !1 }).enabled,
        M = o.useCallback(() => {
            let e = (0, k.QF)();
            d.Z.setInputLocked(!p.Z.isInputLocked(e), e);
        }, []),
        F = (0, Z.PR)();
    return null == a || null == t || null == P
        ? null
        : (0, i.jsx)(l.ThemeProvider, {
              theme: z.BRd.DARK,
              children: (e) =>
                  (0, i.jsxs)('div', {
                      className: r()(E.container, e),
                      children: [
                          (0, i.jsxs)('div', {
                              className: r()(E.headerSection, E.headerSectionLeft),
                              children: [
                                  (0, i.jsx)('div', {
                                      className: E.leaveIconContainer,
                                      children: (0, i.jsx)(_.ZP.Icon, {
                                          onClick: D,
                                          icon: l.XSmallIcon,
                                          tooltip: A.intl.string(A.t['R/FK4O'])
                                      })
                                  }),
                                  (0, i.jsx)(s.Z, {
                                      application: a,
                                      size: 24,
                                      className: E.appIcon
                                  }),
                                  (0, i.jsx)(l.Text, {
                                      variant: 'text-md/normal',
                                      color: 'header-primary',
                                      children: a.name
                                  }),
                                  (0, i.jsx)('div', {
                                      className: E.dotSpacer,
                                      children: (0, i.jsx)(l.Text, {
                                          variant: 'text-md/normal',
                                          color: 'text-muted',
                                          children: '.'
                                      })
                                  }),
                                  (0, i.jsx)(S.Z, {
                                      renderIcon: !1,
                                      users: O,
                                      size: W,
                                      max: 6,
                                      className: E.userAvatars,
                                      renderUser: (e) => R(e, P)
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              className: r()(E.headerSection, E.headerSectionRight),
                              children: (0, i.jsxs)('div', {
                                  className: E.actionButtonsContainer,
                                  children: [
                                      (0, i.jsx)(m.Z, {
                                          appContext: z.IlC.POPOUT,
                                          applicationId: n,
                                          channel: P,
                                          shouldPrioritizeGroupPlusIcon: !0
                                      }),
                                      F
                                          ? (0, i.jsx)(b.Z, {
                                                onClick: M,
                                                iconComponent: l.WindowTopOutlineIcon,
                                                label: A.intl.string(A.t.mseZsL)
                                            })
                                          : null,
                                      U &&
                                          (0, i.jsx)(
                                              l.Popout,
                                              {
                                                  position: 'bottom',
                                                  renderPopout: (e) => {
                                                      let { closePopout: n } = e;
                                                      return (0, i.jsx)(v.Z, {
                                                          children: (0, i.jsx)(y.Z, {
                                                              application: a,
                                                              onClose: n
                                                          })
                                                      });
                                                  },
                                                  children: (e, n) => {
                                                      let { isShown: t } = n;
                                                      return (0, o.createElement)(h.Z, {
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

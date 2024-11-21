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
    v = t(788983),
    h = t(390322),
    b = t(961048),
    m = t(871499),
    C = t(786915),
    x = t(592125),
    g = t(271383),
    I = t(594174),
    k = t(51144),
    Z = t(145597),
    j = t(214629),
    N = t(317381),
    S = t(574952),
    y = t(884338),
    z = t(473179),
    A = t(981631),
    E = t(388032),
    W = t(114195);
let P = y.u.SIZE_24;
function B(e) {
    let { applicationId: n, channelId: t } = e,
        a = (0, c.e7)([u.Z], () => u.Z.getApplication(n)),
        B = (0, c.e7)([N.ZP], () => N.ZP.getSelfEmbeddedActivities().get(n)),
        w = (0, c.e7)([x.Z], () => x.Z.getChannel(t)),
        L = (0, c.Wu)(
            [g.ZP],
            () => {
                var e;
                return null == w || null == B ? [] : Array.from(null !== (e = B.userIds) && void 0 !== e ? e : []).map((e) => g.ZP.getMember(w.guild_id, e));
            },
            [B, w]
        ),
        T = o.useMemo(() => {
            let e = new Map();
            return (
                L.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [L]),
        R = o.useCallback(
            (e, n) => {
                var t;
                if (null == e || void 0 === e || void 0 === n) return null;
                let o = T.get(e.id),
                    a = null !== (t = null == o ? void 0 : o.nick) && void 0 !== t ? t : k.ZP.getName(e);
                return (0, i.jsx)(
                    l.TooltipContainer,
                    {
                        text: a,
                        position: 'bottom',
                        children: (0, i.jsx)(
                            'img',
                            {
                                src: e.getAvatarURL(n.guild_id, P),
                                alt: a,
                                className: W.avatar
                            },
                            e.id
                        )
                    },
                    e.id
                );
            },
            [T]
        ),
        O = null == B ? void 0 : B.userIds,
        U = (0, c.Wu)(
            [I.default],
            () =>
                Array.from(null != O ? O : [])
                    .map((e) => I.default.getUser(e))
                    .filter((e) => null != e && void 0 !== e),
            [O]
        ),
        D = o.useCallback(() => {
            (0, S.Z)().leaveActivity({
                channelId: t,
                applicationId: n
            }),
                (0, v.xv)(A.KJ3.ACTIVITY_POPOUT);
        }, [t, n]),
        M = f.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !1 }).enabled,
        F = o.useCallback(() => {
            let e = (0, Z.QF)();
            d.Z.setInputLocked(!p.Z.isInputLocked(e), e);
        }, []),
        K = (0, j.PR)();
    return null == a || null == t || null == w
        ? null
        : (0, i.jsx)(l.ThemeProvider, {
              theme: A.BRd.DARK,
              children: (e) =>
                  (0, i.jsxs)('div', {
                      className: r()(W.container, e),
                      children: [
                          (0, i.jsxs)('div', {
                              className: r()(W.headerSection, W.headerSectionLeft),
                              children: [
                                  (0, i.jsx)('div', {
                                      className: W.leaveIconContainer,
                                      children: (0, i.jsx)(_.ZP.Icon, {
                                          onClick: D,
                                          icon: l.XSmallIcon,
                                          tooltip: E.intl.string(E.t['R/FK4O'])
                                      })
                                  }),
                                  (0, i.jsx)(s.Z, {
                                      application: a,
                                      size: 24,
                                      className: W.appIcon
                                  }),
                                  (0, i.jsx)(l.Text, {
                                      variant: 'text-md/normal',
                                      color: 'header-primary',
                                      children: a.name
                                  }),
                                  (0, i.jsx)('div', {
                                      className: W.dotSpacer,
                                      children: (0, i.jsx)(l.Text, {
                                          variant: 'text-md/normal',
                                          color: 'text-muted',
                                          children: '.'
                                      })
                                  }),
                                  (0, i.jsx)(y.Z, {
                                      renderIcon: !1,
                                      users: U,
                                      size: P,
                                      max: 6,
                                      className: W.userAvatars,
                                      renderUser: (e) => R(e, w)
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              className: r()(W.headerSection, W.headerSectionRight),
                              children: (0, i.jsxs)('div', {
                                  className: W.actionButtonsContainer,
                                  children: [
                                      (0, i.jsx)(C.Z, {
                                          appContext: A.IlC.POPOUT,
                                          applicationId: n,
                                          channel: w,
                                          shouldPrioritizeGroupPlusIcon: !0
                                      }),
                                      K
                                          ? (0, i.jsx)(m.Z, {
                                                onClick: F,
                                                iconComponent: l.WindowTopOutlineIcon,
                                                label: E.intl.string(E.t.mseZsL)
                                            })
                                          : null,
                                      M &&
                                          (0, i.jsx)(
                                              l.Popout,
                                              {
                                                  position: 'bottom',
                                                  renderPopout: (e) => {
                                                      let { closePopout: n } = e;
                                                      return (0, i.jsx)(h.Z, {
                                                          children: (0, i.jsx)(z.Z, {
                                                              application: a,
                                                              onClose: n
                                                          })
                                                      });
                                                  },
                                                  children: (e, n) => {
                                                      let { isShown: t } = n;
                                                      return (0, o.createElement)(b.Z, {
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

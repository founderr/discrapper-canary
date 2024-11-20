t.d(n, {
    Z: function () {
        return O;
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
    v = t(522474),
    b = t(788983),
    h = t(390322),
    m = t(961048),
    C = t(871499),
    x = t(268353),
    g = t(786915),
    I = t(592125),
    k = t(271383),
    Z = t(594174),
    N = t(51144),
    j = t(228488),
    y = t(145597),
    S = t(214629),
    A = t(566620),
    E = t(317381),
    z = t(574952),
    P = t(884338),
    W = t(473179),
    B = t(701488),
    w = t(981631),
    L = t(388032),
    T = t(114195);
let R = P.u.SIZE_24;
function O(e) {
    let { applicationId: n, channelId: t } = e,
        a = (0, c.e7)([u.Z], () => u.Z.getApplication(n)),
        O = (0, c.e7)([E.ZP], () => E.ZP.getSelfEmbeddedActivities().get(n)),
        U = (0, c.e7)([I.Z], () => I.Z.getChannel(t)),
        M = (0, c.Wu)(
            [k.ZP],
            () => {
                var e;
                return null == U || null == O ? [] : Array.from(null !== (e = O.userIds) && void 0 !== e ? e : []).map((e) => k.ZP.getMember(U.guild_id, e));
            },
            [O, U]
        ),
        D = o.useMemo(() => {
            let e = new Map();
            return (
                M.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [M]),
        F = o.useCallback(
            (e, n) => {
                var t;
                if (null == e || void 0 === e || void 0 === n) return null;
                let o = D.get(e.id),
                    a = null !== (t = null == o ? void 0 : o.nick) && void 0 !== t ? t : N.ZP.getName(e);
                return (0, i.jsx)(
                    l.TooltipContainer,
                    {
                        text: a,
                        position: 'bottom',
                        children: (0, i.jsx)(
                            'img',
                            {
                                src: e.getAvatarURL(n.guild_id, R),
                                alt: a,
                                className: T.avatar
                            },
                            e.id
                        )
                    },
                    e.id
                );
            },
            [D]
        ),
        K = null == O ? void 0 : O.userIds,
        G = (0, c.Wu)(
            [Z.default],
            () =>
                Array.from(null != K ? K : [])
                    .map((e) => Z.default.getUser(e))
                    .filter((e) => null != e && void 0 !== e),
            [K]
        ),
        H = o.useCallback(() => {
            (0, z.Z)().leaveActivity({
                channelId: t,
                applicationId: n
            }),
                (0, b.xv)(w.KJ3.ACTIVITY_POPOUT);
        }, [t, n]),
        J = (0, c.e7)([E.ZP], () => E.ZP.getActivityPopoutWindowLayout()),
        Y = (0, c.e7)([v.Z], () => v.Z.getWindow(w.KJ3.ACTIVITY_POPOUT)),
        V = o.useCallback(() => (null == Y ? void 0 : Y.document.getElementById('app-mount')), [Y]),
        q = o.useCallback(() => {
            let e = V();
            null != e && (J !== B.GM.FULL_SCREEN ? ((0, A.Hp)(B.GM.FULL_SCREEN), (0, j.Dj)(e)) : ((0, A.Hp)(B.GM.NORMAL), (0, j.Pr)(e, null == Y ? void 0 : Y.document)));
        }, [J, V, Y]),
        Q = f.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !1 }).enabled,
        X = o.useCallback(() => {
            let e = (0, y.QF)();
            d.Z.setInputLocked(!p.Z.isInputLocked(e), e);
        }, []),
        $ = (0, S.PR)();
    return null == a || null == t || null == U
        ? null
        : (0, i.jsx)(l.ThemeProvider, {
              theme: w.BRd.DARK,
              children: (e) =>
                  (0, i.jsxs)('div', {
                      className: r()(T.container, e),
                      children: [
                          (0, i.jsxs)('div', {
                              className: r()(T.headerSection, T.headerSectionLeft),
                              children: [
                                  (0, i.jsx)('div', {
                                      className: T.leaveIconContainer,
                                      children: (0, i.jsx)(_.ZP.Icon, {
                                          onClick: H,
                                          icon: l.XSmallIcon,
                                          tooltip: L.intl.string(L.t['R/FK4O'])
                                      })
                                  }),
                                  (0, i.jsx)(s.Z, {
                                      application: a,
                                      size: 24,
                                      className: T.appIcon
                                  }),
                                  (0, i.jsx)(l.Text, {
                                      variant: 'text-md/normal',
                                      color: 'header-primary',
                                      children: a.name
                                  }),
                                  (0, i.jsx)('div', {
                                      className: T.dotSpacer,
                                      children: (0, i.jsx)(l.Text, {
                                          variant: 'text-md/normal',
                                          color: 'text-muted',
                                          children: '.'
                                      })
                                  }),
                                  (0, i.jsx)(P.Z, {
                                      renderIcon: !1,
                                      users: G,
                                      size: R,
                                      max: 6,
                                      className: T.userAvatars,
                                      renderUser: (e) => F(e, U)
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              className: r()(T.headerSection, T.headerSectionRight),
                              children: (0, i.jsxs)('div', {
                                  className: T.actionButtonsContainer,
                                  children: [
                                      (0, i.jsx)(g.Z, {
                                          appContext: w.IlC.POPOUT,
                                          applicationId: n,
                                          channel: U
                                      }),
                                      $
                                          ? (0, i.jsx)(C.Z, {
                                                onClick: X,
                                                iconComponent: l.WindowTopOutlineIcon,
                                                label: L.intl.string(L.t.mseZsL)
                                            })
                                          : null,
                                      (0, i.jsx)(x.Z, {
                                          onClick: q,
                                          guestWindow: Y,
                                          node: V()
                                      }),
                                      Q &&
                                          (0, i.jsx)(
                                              l.Popout,
                                              {
                                                  position: 'bottom',
                                                  renderPopout: (e) => {
                                                      let { closePopout: n } = e;
                                                      return (0, i.jsx)(h.Z, {
                                                          children: (0, i.jsx)(W.Z, {
                                                              application: a,
                                                              onClose: n
                                                          })
                                                      });
                                                  },
                                                  children: (e, n) => {
                                                      let { isShown: t } = n;
                                                      return (0, o.createElement)(m.Z, {
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

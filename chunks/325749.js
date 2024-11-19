t.d(n, {
    Z: function () {
        return O;
    }
}),
    t(47120);
var i = t(200651),
    a = t(192379),
    r = t(120356),
    o = t.n(r),
    l = t(442837),
    c = t(481060),
    d = t(753972),
    u = t(812206),
    s = t(665149),
    p = t(726721),
    v = t(522474),
    m = t(788983),
    f = t(390322),
    h = t(961048),
    x = t(268353),
    C = t(786915),
    Z = t(592125),
    I = t(271383),
    _ = t(594174),
    j = t(51144),
    g = t(228488),
    P = t(566620),
    A = t(317381),
    S = t(574952),
    N = t(884338),
    T = t(473179),
    b = t(701488),
    y = t(981631),
    E = t(388032),
    k = t(713622);
let w = N.u.SIZE_24;
function O(e) {
    let { applicationId: n, channelId: t } = e,
        r = (0, l.e7)([u.Z], () => u.Z.getApplication(n)),
        O = (0, l.e7)([A.ZP], () => A.ZP.getSelfEmbeddedActivities().get(n)),
        R = (0, l.e7)([Z.Z], () => Z.Z.getChannel(t)),
        L = (0, l.Wu)(
            [I.ZP],
            () => {
                var e;
                return null == R || null == O ? [] : Array.from(null !== (e = O.userIds) && void 0 !== e ? e : []).map((e) => I.ZP.getMember(R.guild_id, e));
            },
            [O, R]
        ),
        M = a.useMemo(() => {
            let e = new Map();
            return (
                L.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [L]),
        U = a.useCallback(
            (e, n) => {
                var t;
                if (null == e || void 0 === e || void 0 === n) return null;
                let a = M.get(e.id),
                    r = null !== (t = null == a ? void 0 : a.nick) && void 0 !== t ? t : j.ZP.getName(e);
                return (0, i.jsx)(
                    c.TooltipContainer,
                    {
                        text: r,
                        position: 'bottom',
                        children: (0, i.jsx)(
                            'img',
                            {
                                src: e.getAvatarURL(n.guild_id, w),
                                alt: r,
                                className: k.avatar
                            },
                            e.id
                        )
                    },
                    e.id
                );
            },
            [M]
        ),
        B = null == O ? void 0 : O.userIds,
        K = (0, l.Wu)(
            [_.default],
            () =>
                Array.from(null != B ? B : [])
                    .map((e) => _.default.getUser(e))
                    .filter((e) => null != e && void 0 !== e),
            [B]
        ),
        H = a.useCallback(() => {
            (0, S.Z)().leaveActivity({
                channelId: t,
                applicationId: n
            }),
                (0, m.xv)(y.KJ3.ACTIVITY_POPOUT);
        }, [t, n]),
        W = (0, l.e7)([A.ZP], () => A.ZP.getActivityPopoutWindowLayout()),
        F = (0, l.e7)([v.Z], () => v.Z.getWindow(y.KJ3.ACTIVITY_POPOUT)),
        J = a.useCallback(() => (null == F ? void 0 : F.document.getElementById('app-mount')), [F]),
        Y = a.useCallback(() => {
            let e = J();
            null != e && (W !== b.GM.FULL_SCREEN ? ((0, P.Hp)(b.GM.FULL_SCREEN), (0, g.Dj)(e)) : ((0, P.Hp)(b.GM.NORMAL), (0, g.Pr)(e, null == F ? void 0 : F.document)));
        }, [W, J, F]),
        G = p.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !1 }).enabled;
    return null == r || null == t || null == R
        ? null
        : (0, i.jsx)(c.ThemeProvider, {
              theme: y.BRd.DARK,
              children: (e) =>
                  (0, i.jsxs)('div', {
                      className: o()(k.container, e),
                      children: [
                          (0, i.jsxs)('div', {
                              className: o()(k.headerSection, k.headerSectionLeft),
                              children: [
                                  (0, i.jsx)('div', {
                                      className: k.leaveIconContainer,
                                      children: (0, i.jsx)(s.ZP.Icon, {
                                          onClick: H,
                                          icon: c.XSmallIcon,
                                          tooltip: E.intl.string(E.t['R/FK4O'])
                                      })
                                  }),
                                  (0, i.jsx)(d.Z, {
                                      application: r,
                                      size: 24,
                                      className: k.appIcon
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-md/normal',
                                      color: 'header-primary',
                                      children: r.name
                                  }),
                                  (0, i.jsx)('div', {
                                      className: k.dotSpacer,
                                      children: (0, i.jsx)(c.Text, {
                                          variant: 'text-md/normal',
                                          color: 'text-muted',
                                          children: '.'
                                      })
                                  }),
                                  (0, i.jsx)(N.Z, {
                                      renderIcon: !1,
                                      users: K,
                                      size: w,
                                      max: 6,
                                      className: k.userAvatars,
                                      renderUser: (e) => U(e, R)
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              className: o()(k.headerSection, k.headerSectionRight),
                              children: (0, i.jsxs)('div', {
                                  className: k.actionButtonsContainer,
                                  children: [
                                      (0, i.jsx)(C.Z, {
                                          appContext: y.IlC.POPOUT,
                                          applicationId: n,
                                          channel: R
                                      }),
                                      (0, i.jsx)(x.Z, {
                                          onClick: Y,
                                          guestWindow: F,
                                          node: J()
                                      }),
                                      G &&
                                          (0, i.jsx)(
                                              c.Popout,
                                              {
                                                  position: 'bottom',
                                                  renderPopout: (e) => {
                                                      let { closePopout: n } = e;
                                                      return (0, i.jsx)(f.Z, {
                                                          children: (0, i.jsx)(T.Z, {
                                                              application: r,
                                                              onClose: n
                                                          })
                                                      });
                                                  },
                                                  children: (e, n) => {
                                                      let { isShown: t } = n;
                                                      return (0, a.createElement)(h.Z, {
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

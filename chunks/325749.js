t.d(n, {
    Z: function () {
        return w;
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
    C = t(592125),
    Z = t(271383),
    _ = t(594174),
    I = t(51144),
    j = t(228488),
    g = t(566620),
    A = t(317381),
    P = t(574952),
    S = t(884338),
    N = t(473179),
    b = t(701488),
    y = t(981631),
    T = t(388032),
    E = t(713622);
let k = S.u.SIZE_24;
function w(e) {
    let { applicationId: n, channelId: t } = e,
        r = (0, l.e7)([u.Z], () => u.Z.getApplication(n)),
        w = (0, l.e7)([A.ZP], () => A.ZP.getSelfEmbeddedActivities().get(n)),
        R = (0, l.e7)([C.Z], () => C.Z.getChannel(t)),
        L = (0, l.Wu)(
            [Z.ZP],
            () => {
                var e;
                return null == R || null == w ? [] : Array.from(null !== (e = w.userIds) && void 0 !== e ? e : []).map((e) => Z.ZP.getMember(R.guild_id, e));
            },
            [w, R]
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
        O = a.useCallback(
            (e, n) => {
                var t;
                if (null == e || void 0 === e || void 0 === n) return null;
                let a = M.get(e.id),
                    r = null !== (t = null == a ? void 0 : a.nick) && void 0 !== t ? t : I.ZP.getName(e);
                return (0, i.jsx)(
                    c.TooltipContainer,
                    {
                        text: r,
                        position: 'bottom',
                        children: (0, i.jsx)(
                            'img',
                            {
                                src: e.getAvatarURL(n.guild_id, k),
                                alt: r,
                                className: E.avatar
                            },
                            e.id
                        )
                    },
                    e.id
                );
            },
            [M]
        ),
        U = null == w ? void 0 : w.userIds,
        B = (0, l.Wu)(
            [_.default],
            () =>
                Array.from(null != U ? U : [])
                    .map((e) => _.default.getUser(e))
                    .filter((e) => null != e && void 0 !== e),
            [U]
        ),
        K = a.useCallback(() => {
            (0, P.Z)().leaveActivity({
                channelId: t,
                applicationId: n
            }),
                (0, m.xv)(y.KJ3.ACTIVITY_POPOUT);
        }, [t, n]),
        H = (0, l.e7)([A.ZP], () => A.ZP.getActivityPopoutWindowLayout()),
        W = (0, l.e7)([v.Z], () => v.Z.getWindow(y.KJ3.ACTIVITY_POPOUT)),
        F = a.useCallback(() => (null == W ? void 0 : W.document.getElementById('app-mount')), [W]),
        J = a.useCallback(() => {
            let e = F();
            null != e && (H !== b.GM.FULL_SCREEN ? ((0, g.Hp)(b.GM.FULL_SCREEN), (0, j.Dj)(e)) : ((0, g.Hp)(b.GM.NORMAL), (0, j.Pr)(e, null == W ? void 0 : W.document)));
        }, [H, F, W]),
        Y = p.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !1 }).enabled;
    return null == r || null == t || null == R
        ? null
        : (0, i.jsx)(c.ThemeProvider, {
              theme: y.BRd.DARK,
              children: (e) =>
                  (0, i.jsxs)('div', {
                      className: o()(E.container, e),
                      children: [
                          (0, i.jsxs)('div', {
                              className: o()(E.headerSection, E.headerSectionLeft),
                              children: [
                                  (0, i.jsx)('div', {
                                      className: E.leaveIconContainer,
                                      children: (0, i.jsx)(s.ZP.Icon, {
                                          onClick: K,
                                          icon: c.XSmallIcon,
                                          tooltip: T.intl.string(T.t['R/FK4O'])
                                      })
                                  }),
                                  (0, i.jsx)(d.Z, {
                                      application: r,
                                      size: 24,
                                      className: E.appIcon
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-md/normal',
                                      color: 'header-primary',
                                      children: r.name
                                  }),
                                  (0, i.jsx)('div', {
                                      className: E.dotSpacer,
                                      children: (0, i.jsx)(c.Text, {
                                          variant: 'text-md/normal',
                                          color: 'text-muted',
                                          children: '.'
                                      })
                                  }),
                                  (0, i.jsx)(S.Z, {
                                      renderIcon: !1,
                                      users: B,
                                      size: k,
                                      max: 6,
                                      className: E.userAvatars,
                                      renderUser: (e) => O(e, R)
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              className: o()(E.headerSection, E.headerSectionRight),
                              children: (0, i.jsxs)('div', {
                                  className: E.actionButtonsContainer,
                                  children: [
                                      (0, i.jsx)(x.Z, {
                                          onClick: J,
                                          guestWindow: W,
                                          node: F()
                                      }),
                                      Y &&
                                          (0, i.jsx)(
                                              c.Popout,
                                              {
                                                  position: 'bottom',
                                                  renderPopout: (e) => {
                                                      let { closePopout: n } = e;
                                                      return (0, i.jsx)(f.Z, {
                                                          children: (0, i.jsx)(N.Z, {
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

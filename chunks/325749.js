i.d(n, {
    Z: function () {
        return y;
    }
}),
    i(47120);
var t = i(200651),
    a = i(192379),
    l = i(120356),
    r = i.n(l),
    d = i(442837),
    o = i(481060),
    c = i(753972),
    u = i(812206),
    s = i(665149),
    v = i(522474),
    m = i(788983),
    f = i(268353),
    h = i(592125),
    p = i(271383),
    x = i(594174),
    C = i(51144),
    I = i(228488),
    Z = i(566620),
    _ = i(317381),
    j = i(574952),
    g = i(884338),
    A = i(701488),
    P = i(981631),
    S = i(388032),
    N = i(114195);
let T = g.u.SIZE_24;
function y(e) {
    let { applicationId: n, channelId: i } = e,
        l = (0, d.e7)([u.Z], () => u.Z.getApplication(n)),
        y = (0, d.e7)([_.ZP], () => _.ZP.getSelfEmbeddedActivities().get(n)),
        b = (0, d.e7)([h.Z], () => h.Z.getChannel(i)),
        k = (0, d.Wu)(
            [p.ZP],
            () => {
                var e;
                return null == b || null == y ? [] : Array.from(null !== (e = y.userIds) && void 0 !== e ? e : []).map((e) => p.ZP.getMember(b.guild_id, e));
            },
            [y, b]
        ),
        R = a.useMemo(() => {
            let e = new Map();
            return (
                k.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [k]),
        w = a.useCallback(
            (e, n) => {
                var i;
                if (null == e || void 0 === e || void 0 === n) return null;
                let a = R.get(e.id),
                    l = null !== (i = null == a ? void 0 : a.nick) && void 0 !== i ? i : C.ZP.getName(e);
                return (0, t.jsx)(
                    o.TooltipContainer,
                    {
                        text: l,
                        position: 'bottom',
                        children: (0, t.jsx)(
                            'img',
                            {
                                src: e.getAvatarURL(n.guild_id, T),
                                alt: l,
                                className: N.avatar
                            },
                            e.id
                        )
                    },
                    e.id
                );
            },
            [R]
        ),
        E = null == y ? void 0 : y.userIds,
        L = (0, d.Wu)(
            [x.default],
            () =>
                Array.from(null != E ? E : [])
                    .map((e) => x.default.getUser(e))
                    .filter((e) => null != e && void 0 !== e),
            [E]
        ),
        O = a.useCallback(() => {
            (0, j.Z)().leaveActivity({
                channelId: i,
                applicationId: n
            }),
                (0, m.xv)(P.KJ3.ACTIVITY_POPOUT);
        }, [i, n]),
        U = (0, d.e7)([_.ZP], () => _.ZP.getActivityPopoutWindowLayout()),
        M = (0, d.e7)([v.Z], () => v.Z.getWindow(P.KJ3.ACTIVITY_POPOUT)),
        B = a.useCallback(() => (null == M ? void 0 : M.document.getElementById('app-mount')), [M]),
        K = a.useCallback(() => {
            let e = B();
            null != e && (U !== A.GM.FULL_SCREEN ? ((0, Z.Hp)(A.GM.FULL_SCREEN), (0, I.Dj)(e)) : ((0, Z.Hp)(A.GM.NORMAL), (0, I.Pr)(e, null == M ? void 0 : M.document)));
        }, [U, B, M]);
    return null == l || null == i || null == b
        ? null
        : (0, t.jsx)(o.ThemeProvider, {
              theme: P.BRd.DARK,
              children: (e) =>
                  (0, t.jsxs)('div', {
                      className: r()(N.container, e),
                      children: [
                          (0, t.jsxs)('div', {
                              className: r()(N.headerSection, N.headerSectionLeft),
                              children: [
                                  (0, t.jsx)('div', {
                                      className: N.leaveIconContainer,
                                      children: (0, t.jsx)(s.ZP.Icon, {
                                          onClick: O,
                                          icon: o.XSmallIcon,
                                          tooltip: S.intl.string(S.t['R/FK4O'])
                                      })
                                  }),
                                  (0, t.jsx)(c.Z, {
                                      application: l,
                                      size: 24,
                                      className: N.appIcon
                                  }),
                                  (0, t.jsx)(o.Text, {
                                      variant: 'text-md/normal',
                                      color: 'header-primary',
                                      children: l.name
                                  }),
                                  (0, t.jsx)('div', {
                                      className: N.dotSpacer,
                                      children: (0, t.jsx)(o.Text, {
                                          variant: 'text-md/normal',
                                          color: 'text-muted',
                                          children: '.'
                                      })
                                  }),
                                  (0, t.jsx)(g.Z, {
                                      renderIcon: !1,
                                      users: L,
                                      size: T,
                                      max: 6,
                                      className: N.userAvatars,
                                      renderUser: (e) => w(e, b)
                                  })
                              ]
                          }),
                          (0, t.jsx)('div', {
                              className: r()(N.headerSection, N.headerSectionRight),
                              children: (0, t.jsx)('div', {
                                  className: N.fullScreenButtonContainer,
                                  children: (0, t.jsx)(f.Z, {
                                      onClick: K,
                                      guestWindow: M,
                                      node: B()
                                  })
                              })
                          })
                      ]
                  })
          });
}

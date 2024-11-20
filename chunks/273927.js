n.d(t, {
    GF: function () {
        return _;
    },
    ZP: function () {
        return I;
    },
    yo: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(194359),
    d = n(99690),
    u = n(100527),
    m = n(699516),
    h = n(594174),
    g = n(838436),
    p = n(726985),
    x = n(388032),
    S = n(371620);
function T(e) {
    let { listType: t, numberOfUsers: n } = e,
        s = 'blocked' === t;
    return (0, i.jsxs)('div', {
        className: S.header,
        children: [
            (0, i.jsx)('div', {
                className: S.iconContainer,
                children: s ? (0, i.jsx)(o.DenyIcon, {}) : (0, i.jsx)(o.EyeSlashIcon, {})
            }),
            (0, i.jsxs)('div', {
                className: S.text,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/semibold',
                        color: 'interactive-active',
                        children: x.intl.string(s ? x.t.PFOUKS : x.t['93ZDWF'])
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: s ? x.intl.format(x.t['r91W/v'], { numberOfBlockedUsers: n }) : x.intl.format(x.t.rXUeOj, { numberOfIgnoredUsers: n })
                    })
                ]
            })
        ]
    });
}
function C(e) {
    let { userId: t, last: n } = e,
        r = (0, a.e7)([m.Z], () => m.Z.isBlocked(t)),
        g = (0, a.e7)([h.default], () => h.default.getUser(t)),
        [p, T] = s.useState(!1),
        C = s.useCallback(() => {
            T(!0),
                r
                    ? c.Z.unblockUser(t).catch(() => {
                          T(!1);
                      })
                    : c.Z.unignoreUser(t, u.Z.USER_SETTINGS).catch(() => {
                          T(!1);
                      });
        }, [r, t]);
    return null == g
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: (0, i.jsxs)('div', {
                  className: l()(S.row, { [S.lastRow]: n }),
                  children: [
                      (0, i.jsxs)('div', {
                          className: S.userInfo,
                          children: [
                              (0, i.jsx)(d.Z, {
                                  user: g,
                                  size: o.AvatarSizes.SIZE_40
                              }),
                              (0, i.jsxs)('div', {
                                  className: S.text,
                                  children: [
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-md/semibold',
                                          color: 'header-primary',
                                          children: g.username
                                      }),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'header-secondary',
                                          children: x.intl.string(r ? x.t['4bDptL'] : x.t.tFY5ZW)
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, i.jsx)(o.Button, {
                          color: o.ButtonColors.PRIMARY,
                          onClick: C,
                          submitting: p,
                          children: x.intl.string(r ? x.t.XyHpKC : x.t['8wXU9P'])
                      })
                  ]
              })
          });
}
function E(e) {
    let { setting: t, userIds: n, listType: r } = e,
        [l, a] = s.useState(5);
    return (0, i.jsx)(g.U, {
        setting: t,
        children: (0, i.jsxs)('div', {
            className: S.card,
            children: [
                (0, i.jsx)(T, {
                    listType: r,
                    numberOfUsers: n.length
                }),
                (0, i.jsx)('div', {
                    className: S.usersList,
                    children: n.slice(0, l).map((e, t) =>
                        (0, i.jsx)(
                            C,
                            {
                                userId: e,
                                last: t === n.length - 1
                            },
                            e
                        )
                    )
                }),
                l < n.length
                    ? (0, i.jsx)('div', {
                          className: S.loadMoreContainer,
                          children: (0, i.jsx)(o.Clickable, {
                              onClick: () => {
                                  a((e) => e + 5);
                              },
                              className: S.loadMoreButton,
                              children: (0, i.jsx)(o.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-normal',
                                  children: x.intl.format(x.t.jULEDg, { numberOfUsers: l + 5 < n.length ? 5 : n.length - l })
                              })
                          })
                      })
                    : null
            ]
        })
    });
}
function _() {
    let e = (0, a.e7)([m.Z], () => m.Z.getBlockedIDs());
    return (0, i.jsx)(E, {
        setting: p.s6.BLOCKED_USERS,
        userIds: e,
        listType: 'blocked'
    });
}
function f() {
    let e = (0, a.e7)([m.Z], () => m.Z.getIgnoredIDs());
    return (0, i.jsx)(E, {
        setting: p.s6.IGNORED_USERS,
        userIds: e,
        listType: 'ignored'
    });
}
function I() {
    return (0, i.jsxs)(g.U, {
        setting: p.s6.RESTRICTED_USERS,
        children: [
            (0, i.jsx)(g.H, {
                header: x.intl.string(x.t['3wRorq']),
                description: x.intl.format(x.t.dDvZy8, { helpArticle: '' })
            }),
            (0, i.jsx)(_, {}),
            (0, i.jsx)(f, {})
        ]
    });
}

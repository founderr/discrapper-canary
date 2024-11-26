n.d(t, {
    GF: function () {
        return I;
    },
    ZP: function () {
        return N;
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
    p = n(526761),
    x = n(726985),
    S = n(388032),
    T = n(599764);
function E(e) {
    let { listType: t, numberOfUsers: n } = e,
        s = 'blocked' === t;
    return (0, i.jsxs)('div', {
        className: T.header,
        children: [
            (0, i.jsx)('div', {
                className: T.iconContainer,
                children: s ? (0, i.jsx)(o.DenyIcon, {}) : (0, i.jsx)(o.EyeSlashIcon, {})
            }),
            (0, i.jsxs)('div', {
                className: T.text,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/semibold',
                        color: 'interactive-active',
                        children: S.intl.string(s ? S.t.PFOUKS : S.t['93ZDWF'])
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: s ? S.intl.format(S.t['r91W/v'], { numberOfBlockedUsers: n }) : S.intl.format(S.t.rXUeOj, { numberOfIgnoredUsers: n })
                    })
                ]
            })
        ]
    });
}
function _(e) {
    var t;
    let { userId: n, last: r } = e,
        g = (0, a.e7)([m.Z], () => m.Z.isBlocked(n)),
        p = (0, a.e7)([h.default], () => h.default.getUser(n)),
        [x, E] = s.useState(!1),
        _ = s.useCallback(() => {
            E(!0),
                g
                    ? c.Z.unblockUser(n).catch(() => {
                          E(!1);
                      })
                    : c.Z.unignoreUser(n, u.Z.USER_SETTINGS).catch(() => {
                          E(!1);
                      });
        }, [g, n]);
    return null == p
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: (0, i.jsxs)('div', {
                  className: l()(T.row, { [T.lastRow]: r }),
                  children: [
                      (0, i.jsxs)('div', {
                          className: T.userInfo,
                          children: [
                              (0, i.jsx)(d.Z, {
                                  user: p,
                                  size: o.AvatarSizes.SIZE_40
                              }),
                              (0, i.jsxs)('div', {
                                  className: T.text,
                                  children: [
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-md/semibold',
                                          color: 'header-primary',
                                          children: null !== (t = p.globalName) && void 0 !== t ? t : p.username
                                      }),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'header-secondary',
                                          children: null != p.globalName ? p.username : null
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, i.jsx)(o.Button, {
                          color: o.ButtonColors.PRIMARY,
                          onClick: _,
                          submitting: x,
                          children: S.intl.string(g ? S.t.XyHpKC : S.t['8wXU9P'])
                      })
                  ]
              })
          });
}
function C(e) {
    let { setting: t, userIds: n, listType: r } = e,
        [l, a] = s.useState(5);
    return (0, i.jsx)(g.U, {
        setting: t,
        children: (0, i.jsxs)('div', {
            className: T.card,
            children: [
                (0, i.jsx)(E, {
                    listType: r,
                    numberOfUsers: n.length
                }),
                (0, i.jsx)('div', {
                    className: T.usersList,
                    children: n.slice(0, l).map((e, t) =>
                        (0, i.jsx)(
                            _,
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
                          className: T.loadMoreContainer,
                          children: (0, i.jsx)(o.Clickable, {
                              onClick: () => {
                                  a((e) => e + 5);
                              },
                              className: T.loadMoreButton,
                              children: (0, i.jsx)(o.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-normal',
                                  children: S.intl.format(S.t.jULEDg, { numberOfUsers: l + 5 < n.length ? 5 : n.length - l })
                              })
                          })
                      })
                    : null
            ]
        })
    });
}
function I() {
    let e = (0, a.e7)([m.Z], () => m.Z.getBlockedIDs());
    return (0, i.jsx)(C, {
        setting: x.s6.BLOCKED_USERS,
        userIds: e,
        listType: 'blocked'
    });
}
function f() {
    let e = (0, a.e7)([m.Z], () => m.Z.getIgnoredIDs());
    return (0, i.jsx)(C, {
        setting: x.s6.IGNORED_USERS,
        userIds: e,
        listType: 'ignored'
    });
}
function N() {
    return (0, i.jsxs)(g.U, {
        setting: x.s6.RESTRICTED_USERS,
        scrollPosition: p.FY.RESTRICTED_ACCOUNTS,
        children: [
            (0, i.jsx)(g.H, {
                header: S.intl.string(S.t['3wRorq']),
                description: S.intl.format(S.t['0aNQo6'], { helpArticle: '' })
            }),
            (0, i.jsx)(I, {}),
            (0, i.jsx)(f, {})
        ]
    });
}

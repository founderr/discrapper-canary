n.d(t, {
    GF: function () {
        return N;
    },
    ZP: function () {
        return b;
    },
    yo: function () {
        return A;
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
    g = n(63063),
    p = n(838436),
    x = n(526761),
    S = n(726985),
    T = n(981631),
    E = n(388032),
    C = n(599764);
function _(e) {
    let { listType: t, numberOfUsers: n } = e,
        s = 'blocked' === t;
    return (0, i.jsxs)('div', {
        className: C.header,
        children: [
            (0, i.jsx)('div', {
                className: C.iconContainer,
                children: s ? (0, i.jsx)(o.DenyIcon, {}) : (0, i.jsx)(o.EyeSlashIcon, {})
            }),
            (0, i.jsxs)('div', {
                className: C.text,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/semibold',
                        color: 'interactive-active',
                        children: E.intl.string(s ? E.t.PFOUKS : E.t['93ZDWF'])
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: s ? E.intl.format(E.t['r91W/v'], { numberOfBlockedUsers: n }) : E.intl.format(E.t.rXUeOj, { numberOfIgnoredUsers: n })
                    })
                ]
            })
        ]
    });
}
function f(e) {
    var t;
    let { userId: n, last: r } = e,
        g = (0, a.e7)([m.Z], () => m.Z.isBlocked(n)),
        p = (0, a.e7)([h.default], () => h.default.getUser(n)),
        [x, S] = s.useState(!1),
        T = s.useCallback(() => {
            S(!0),
                g
                    ? c.Z.unblockUser(n).catch(() => {
                          S(!1);
                      })
                    : c.Z.unignoreUser(n, u.Z.USER_SETTINGS).catch(() => {
                          S(!1);
                      });
        }, [g, n]);
    return null == p
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: (0, i.jsxs)('div', {
                  className: l()(C.row, { [C.lastRow]: r }),
                  children: [
                      (0, i.jsxs)('div', {
                          className: C.userInfo,
                          children: [
                              (0, i.jsx)(d.Z, {
                                  user: p,
                                  size: o.AvatarSizes.SIZE_40
                              }),
                              (0, i.jsxs)('div', {
                                  className: C.text,
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
                          onClick: T,
                          submitting: x,
                          children: E.intl.string(g ? E.t.XyHpKC : E.t['8wXU9P'])
                      })
                  ]
              })
          });
}
function I(e) {
    let { setting: t, userIds: n, listType: r } = e,
        [l, a] = s.useState(5);
    return (0, i.jsx)(p.U, {
        setting: t,
        children: (0, i.jsxs)('div', {
            className: C.card,
            children: [
                (0, i.jsx)(_, {
                    listType: r,
                    numberOfUsers: n.length
                }),
                (0, i.jsx)('div', {
                    className: C.usersList,
                    children: n.slice(0, l).map((e, t) =>
                        (0, i.jsx)(
                            f,
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
                          className: C.loadMoreContainer,
                          children: (0, i.jsx)(o.Clickable, {
                              onClick: () => {
                                  a((e) => e + 5);
                              },
                              className: C.loadMoreButton,
                              children: (0, i.jsx)(o.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-normal',
                                  children: E.intl.format(E.t.jULEDg, { numberOfUsers: l + 5 < n.length ? 5 : n.length - l })
                              })
                          })
                      })
                    : null
            ]
        })
    });
}
function N() {
    let e = (0, a.Wu)([m.Z], () => m.Z.getBlockedIDs());
    return (0, i.jsx)(I, {
        setting: S.s6.BLOCKED_USERS,
        userIds: e,
        listType: 'blocked'
    });
}
function A() {
    let e = (0, a.Wu)([m.Z], () => m.Z.getIgnoredIDs());
    return (0, i.jsx)(I, {
        setting: S.s6.IGNORED_USERS,
        userIds: e,
        listType: 'ignored'
    });
}
function b() {
    return (0, i.jsxs)(p.U, {
        setting: S.s6.RESTRICTED_USERS,
        scrollPosition: x.FY.RESTRICTED_ACCOUNTS,
        scrollHighlightDelay: 900,
        children: [
            (0, i.jsx)(p.H, {
                header: E.intl.string(E.t['3wRorq']),
                description: E.intl.format(E.t['0aNQo6'], { helpArticle: g.Z.getArticleURL(T.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
            }),
            (0, i.jsx)(N, {}),
            (0, i.jsx)(A, {})
        ]
    });
}

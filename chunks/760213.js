n.d(t, {
    W: function () {
        return s;
    },
    Z: function () {
        return S;
    }
}),
    n(773603);
var s,
    r,
    i = n(200651),
    o = n(192379),
    l = n(120356),
    a = n.n(l),
    c = n(442837),
    u = n(481060),
    d = n(893776),
    h = n(239091),
    p = n(598077),
    m = n(314897),
    f = n(246946),
    g = n(594174),
    x = n(626135),
    C = n(51144),
    v = n(480387),
    N = n(726745),
    j = n(251423),
    y = n(981631),
    E = n(388032),
    k = n(536554);
function w(e) {
    let { actionText: t, user: n, onAction: s } = e,
        {
            currentUser: r,
            hidePrivateData: o,
            isAuthenticated: l
        } = (0, c.cj)([g.default, f.Z, m.default], () => ({
            currentUser: g.default.getCurrentUser(),
            hidePrivateData: f.Z.hidePersonalInformation,
            isAuthenticated: m.default.isAuthenticated()
        })),
        j = new p.Z(n),
        w = l && (null == r ? void 0 : r.id) === j.id,
        S = n.tokenStatus === N.q.INVALID,
        A = o || j.isPomelo() ? null : '#'.concat(j.discriminator),
        b = null;
    return (
        w
            ? (b = (0, i.jsx)(u.Text, {
                  variant: 'text-sm/semibold',
                  className: k.hintText,
                  color: 'text-positive',
                  children: E.intl.string(E.t.seV8ys)
              }))
            : S &&
              (b = (0, i.jsx)(u.Text, {
                  variant: 'text-sm/semibold',
                  className: k.hintText,
                  color: 'text-danger',
                  children: E.intl.string(E.t.tYX2pq)
              })),
        (0, i.jsx)('div', {
            className: k.accountCard,
            children: (0, i.jsxs)('div', {
                className: k.userDetails,
                children: [
                    (0, i.jsx)(u.Avatar, {
                        src: j.getAvatarURL(void 0, 40),
                        size: u.AvatarSizes.SIZE_40,
                        'aria-label': n.username
                    }),
                    (0, i.jsxs)('div', {
                        className: a()(k.usernameSection, { [k.hasActionMaxWidth]: !w }),
                        children: [
                            (0, i.jsxs)('div', {
                                className: k.username,
                                children: [
                                    (0, i.jsx)(u.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        className: k.textOverflow,
                                        children: C.ZP.getUserTag(j, {
                                            mode: 'username',
                                            identifiable: o ? 'never' : 'always'
                                        })
                                    }),
                                    (0, i.jsx)(u.Text, {
                                        color: 'header-secondary',
                                        variant: 'text-sm/normal',
                                        children: A
                                    })
                                ]
                            }),
                            b
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: k.userActions,
                        children: [
                            !w &&
                                (0, i.jsx)(u.Button, {
                                    onClick: function () {
                                        if (S) {
                                            s(0, n.id);
                                            return;
                                        }
                                        x.default.track(y.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, { location: { section: y.jXE.MANAGE_ACCOUNTS_MODAL } }), v.yD(n.id), s(1, n.id);
                                    },
                                    color: u.Button.Colors.PRIMARY,
                                    children: S ? E.intl.string(E.t['DSN+h4']) : t
                                }),
                            (0, i.jsx)(u.Button, {
                                className: k.userActionMenu,
                                onClick: function (e) {
                                    (0, h.vq)(e, (e) => {
                                        let { onSelect: t } = e;
                                        return (0, i.jsx)(u.Menu, {
                                            'aria-label': E.intl.string(E.t['41qiDQ']),
                                            navId: 'manage-multi-account',
                                            onClose: h.Zy,
                                            onSelect: t,
                                            children: (0, i.jsx)(u.MenuItem, {
                                                id: 'remove-account',
                                                label: E.intl.string(E.t.lSLMaW),
                                                action: () => {
                                                    !(function () {
                                                        d.Z.logout(null, n.id).finally(() => {
                                                            v.Zd(n.id);
                                                        });
                                                        let e = {};
                                                        null != r ? (e.section = y.jXE.MANAGE_ACCOUNTS_MODAL) : (e.page = y.Usc.LOGIN), x.default.track(y.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE, { location: e }), s(2, n.id);
                                                    })(),
                                                        null != t && t();
                                                },
                                                color: 'danger'
                                            })
                                        });
                                    });
                                },
                                size: u.Button.Sizes.ICON,
                                look: u.Button.Looks.BLANK,
                                color: u.Button.Colors.WHITE,
                                'aria-label': E.intl.string(E.t.PdRCRk),
                                children: (0, i.jsx)(u.MoreHorizontalIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: k.overflowMenuIcon
                                })
                            })
                        ]
                    })
                ]
            })
        })
    );
}
function S(e) {
    let { actionText: t, onAction: n } = e,
        { isLoading: s, multiAccountUsers: r } = (0, j.L)();
    return (0, i.jsx)('div', {
        className: k.list,
        children: s
            ? (0, i.jsx)(u.Spinner, {})
            : r.map((e, s) =>
                  (0, i.jsxs)(
                      o.Fragment,
                      {
                          children: [
                              (0, i.jsx)(
                                  w,
                                  {
                                      user: e,
                                      actionText: t,
                                      onAction: n
                                  },
                                  e.id
                              ),
                              r.length - 1 !== s &&
                                  (0, i.jsx)('div', {
                                      role: 'separator',
                                      className: k.separator
                                  })
                          ]
                      },
                      e.id
                  )
              )
    });
}
((r = s || (s = {}))[(r.LOGIN_REQUIRED = 0)] = 'LOGIN_REQUIRED'), (r[(r.SWITCHED = 1)] = 'SWITCHED'), (r[(r.REMOVED = 2)] = 'REMOVED');

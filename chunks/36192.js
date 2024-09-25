t.d(s, {
    Z: function () {
        return p;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    l = t(544891),
    c = t(704215),
    d = t(481060),
    _ = t(230711),
    u = t(497321),
    E = t(43015),
    T = t(136097),
    S = t(605236),
    I = t(246946),
    N = t(594174),
    m = t(460562),
    A = t(823379),
    C = t(981631),
    g = t(921944),
    h = t(689938),
    O = t(722177);
function p() {
    let e;
    let { currentSession: s, otherSessions: t } = (0, T.h)(),
        i = (0, o.e7)([I.Z], () => I.Z.hidePersonalInformation),
        r = (0, o.e7)([N.default], () => N.default.getCurrentUser()),
        [_, m] = a.useState(!1);
    a.useEffect(() => {
        (0, S.EW)(c.z.AUTH_SESSIONS_NEW, { dismissAction: g.L.AUTO }), (0, E.fw)();
        let e = setTimeout(() => m(!0), 500);
        return () => {
            clearTimeout(e), (0, E.$Z)();
        };
    }, []);
    let A = () => {
            l.tn.post({ url: C.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG });
        },
        [p, f] = a.useState(new Set());
    return i
        ? (0, n.jsx)(u.Z, {})
        : ((e =
              null == s && 0 === t.length
                  ? _
                      ? (0, n.jsx)('div', {
                            className: O.loading,
                            children: (0, n.jsx)(d.Spinner, {})
                        })
                      : null
                  : (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsxs)('div', {
                                className: O.sessions,
                                children: [
                                    (0, n.jsx)(d.FormSection, {
                                        tag: d.FormTitleTags.H5,
                                        title: h.Z.Messages.AUTH_SESSIONS_CURRENT,
                                        titleClassName: O.groupTitle,
                                        children:
                                            null != s
                                                ? (0, n.jsx)(R, {
                                                      session: s,
                                                      current: !0
                                                  })
                                                : null
                                    }),
                                    !(t.length > 0) && (null == r ? void 0 : r.mfaEnabled)
                                        ? null
                                        : (0, n.jsxs)(d.FormSection, {
                                              tag: d.FormTitleTags.H5,
                                              title: h.Z.Messages.AUTH_SESSIONS_OTHERS,
                                              titleClassName: O.groupTitle,
                                              className: O.otherSessions,
                                              children: [
                                                  t.map((e) =>
                                                      (0, n.jsx)(
                                                          R,
                                                          {
                                                              session: e,
                                                              useChecks: p.size > 0,
                                                              checked: p.has(e.id_hash),
                                                              setChecked: (s) => {
                                                                  let t = new Set(p);
                                                                  s ? t.add(e.id_hash) : t.delete(e.id_hash), f(t);
                                                              }
                                                          },
                                                          e.id_hash
                                                      )
                                                  ),
                                                  (null == r ? void 0 : r.mfaEnabled) ? null : (0, n.jsx)(x, {})
                                              ]
                                          })
                                ]
                            }),
                            t.length > 0
                                ? (0, n.jsxs)(d.FormSection, {
                                      tag: d.FormTitleTags.H5,
                                      title: p.size > 0 ? h.Z.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_SELECTED_TITLE : h.Z.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_TITLE,
                                      children: [
                                          (0, n.jsx)(d.FormText, {
                                              type: d.FormTextTypes.DESCRIPTION,
                                              children: h.Z.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_DESCRIPTION
                                          }),
                                          (0, n.jsx)(d.Button, {
                                              look: d.Button.Looks.OUTLINED,
                                              color: d.Button.Colors.RED,
                                              size: d.Button.Sizes.SMALL,
                                              className: O.logOutAllButton,
                                              onClick: () => {
                                                  p.size > 0 ? (0, E.L$)(Array.from(p)) : (0, E.L$)(t.map((e) => e.id_hash));
                                              },
                                              children: p.size > 0 ? h.Z.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_SELECTED_ACTION.format({ count: p.size }) : h.Z.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_ACTION
                                          })
                                      ]
                                  })
                                : null
                        ]
                    })),
          (0, n.jsxs)(d.FormSection, {
              tag: d.FormTitleTags.H1,
              title: h.Z.Messages.AUTH_SESSIONS,
              children: [
                  (0, n.jsx)(d.FormText, {
                      type: d.FormTextTypes.DESCRIPTION,
                      className: O.description,
                      children: h.Z.Messages.AUTH_SESSIONS_DESCRIPTION
                  }),
                  (null == r ? void 0 : r.isStaff())
                      ? (0, n.jsxs)('div', {
                            className: O.tools,
                            children: [
                                (0, n.jsx)(d.Text, {
                                    className: O.toolsTitle,
                                    variant: 'text-md/bold',
                                    children: 'DEV TOOLS'
                                }),
                                (0, n.jsx)(d.Text, {
                                    className: O.toolsTitle,
                                    variant: 'text-sm/normal',
                                    color: 'text-danger',
                                    children: 'These tools are only shown to staff users.'
                                }),
                                (0, n.jsx)(d.Tooltip, {
                                    text: 'Triggers mobile and email suspicious session notifications for the current user',
                                    children: (e) => {
                                        let { onMouseEnter: s, onMouseLeave: t } = e;
                                        return (0, n.jsx)(d.Button, {
                                            size: d.Button.Sizes.SMALL,
                                            color: d.Button.Colors.PRIMARY,
                                            onClick: A,
                                            onMouseEnter: s,
                                            onMouseLeave: t,
                                            children: 'Trigger Suspicious Sessions Notification'
                                        });
                                    }
                                })
                            ]
                        })
                      : null,
                  e
              ]
          }));
}
function R(e) {
    var s, t, a, i, o;
    let { session: l, current: c, setChecked: _, checked: u, useChecks: S } = e,
        I = null !== (o = null === (s = l.client_info) || void 0 === s ? void 0 : s.location) && void 0 !== o ? o : null === (t = l.client_info) || void 0 === t ? void 0 : t.ip,
        N = null === (a = l.client_info) || void 0 === a ? void 0 : a.platform,
        { text: m, icon: C } = (function (e) {
            switch (null == e ? void 0 : e.toLowerCase().trim()) {
                case null:
                case void 0:
                case '':
                    return {
                        text: h.Z.Messages.AUTH_SESSIONS_OS_UNKNOWN,
                        icon: d.ScreenIcon
                    };
                case 'ios':
                case 'android':
                    return {
                        text: e,
                        icon: d.MobilePhoneIcon
                    };
                default:
                    return {
                        text: e,
                        icon: d.ScreenIcon
                    };
            }
        })(null === (i = l.client_info) || void 0 === i ? void 0 : i.os),
        g = c ? null : (0, T.p)(l.approx_last_used_time),
        p = [m, N].filter(A.lm),
        R = [I, g].filter(A.lm);
    return (0, n.jsxs)(
        'div',
        {
            className: r()(O.session, c ? O.currentSession : null),
            children: [
                (0, n.jsx)('div', {
                    className: O.sessionIcon,
                    children: (0, n.jsx)(C, {
                        size: 'md',
                        color: 'currentColor'
                    })
                }),
                (0, n.jsxs)('div', {
                    className: O.sessionInfo,
                    children: [
                        (0, n.jsxs)(d.Text, {
                            variant: 'eyebrow',
                            className: O.sessionInfoRow,
                            children: [
                                (0, n.jsx)('span', { children: p[0] }),
                                p.length > 1 &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [(0, n.jsx)('span', { children: '\xB7' }), (0, n.jsx)('span', { children: p[1] })]
                                    })
                            ]
                        }),
                        (0, n.jsxs)(d.Text, {
                            variant: 'text-sm/medium',
                            className: O.sessionInfoRow,
                            children: [
                                (0, n.jsx)('span', { children: R[0] }),
                                R.length > 1 &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [(0, n.jsx)('span', { children: '\xB7' }), (0, n.jsx)('span', { children: R[1] })]
                                    })
                            ]
                        })
                    ]
                }),
                c
                    ? null
                    : S
                      ? (0, n.jsx)('div', {
                            className: O.sessionCheckbox,
                            children: (0, n.jsx)(d.Checkbox, {
                                onChange: (e, s) => {
                                    null == _ || _(s);
                                },
                                value: u
                            })
                        })
                      : (0, n.jsx)(d.Clickable, {
                            className: O.sessionMoreButton,
                            onClick: (e) => {
                                e.shiftKey ? null == _ || _(!0) : (0, E.L$)(l.id_hash);
                            },
                            'aria-label': h.Z.Messages.AUTH_SESSIONS_SESSION_LOG_OUT,
                            children: (0, n.jsx)(d.XSmallIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
            ]
        },
        l.id_hash
    );
}
function x() {
    return (0, n.jsxs)('div', {
        className: r()(O.session, O.legacySession),
        children: [
            (0, n.jsx)('div', {
                className: O.sessionIcon,
                children: (0, n.jsx)(m.Z, {
                    width: '32',
                    height: '32'
                })
            }),
            (0, n.jsxs)('div', {
                className: O.sessionInfo,
                children: [
                    (0, n.jsx)(d.Text, {
                        variant: 'eyebrow',
                        className: O.sessionInfoRow,
                        color: 'text-muted',
                        children: (0, n.jsx)('span', { children: h.Z.Messages.AUTH_SESSIONS_UNKNOWN_LEGACY })
                    }),
                    (0, n.jsx)(d.Text, {
                        variant: 'text-sm/medium',
                        className: O.sessionInfoRow,
                        color: 'text-muted',
                        children: (0, n.jsx)('span', { children: h.Z.Messages.AUTH_SESSIONS_UNKNOWN_LEGACY_LOG_OUT.format({ onClick: () => _.Z.setSection(C.oAB.ACCOUNT) }) })
                    })
                ]
            })
        ]
    });
}

n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(544891),
    c = n(704215),
    d = n(481060),
    u = n(230711),
    m = n(497321),
    h = n(43015),
    g = n(136097),
    p = n(605236),
    x = n(246946),
    S = n(594174),
    T = n(460562),
    C = n(823379),
    E = n(981631),
    _ = n(921944),
    I = n(388032),
    f = n(675176);
function N() {
    let e;
    let { currentSession: t, otherSessions: n } = (0, g.h)(),
        r = (0, a.e7)([x.Z], () => x.Z.hidePersonalInformation),
        l = (0, a.e7)([S.default], () => S.default.getCurrentUser()),
        [u, T] = s.useState(!1);
    s.useEffect(() => {
        (0, p.EW)(c.z.AUTH_SESSIONS_NEW, { dismissAction: _.L.AUTO }), (0, h.fw)();
        let e = setTimeout(() => T(!0), 500);
        return () => {
            clearTimeout(e), (0, h.$Z)();
        };
    }, []);
    let C = () => {
            o.tn.post({
                url: E.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG,
                rejectWithError: !1
            });
        },
        [N, v] = s.useState(new Set());
    return r
        ? (0, i.jsx)(m.Z, {})
        : ((e =
              null == t && 0 === n.length
                  ? u
                      ? (0, i.jsx)('div', {
                            className: f.loading,
                            children: (0, i.jsx)(d.Spinner, {})
                        })
                      : null
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)('div', {
                                className: f.sessions,
                                children: [
                                    (0, i.jsx)(d.FormSection, {
                                        tag: d.FormTitleTags.H5,
                                        title: I.intl.string(I.t.LLS19v),
                                        titleClassName: f.groupTitle,
                                        children:
                                            null != t
                                                ? (0, i.jsx)(A, {
                                                      session: t,
                                                      current: !0
                                                  })
                                                : null
                                    }),
                                    !(n.length > 0) && (null == l ? void 0 : l.mfaEnabled)
                                        ? null
                                        : (0, i.jsxs)(d.FormSection, {
                                              tag: d.FormTitleTags.H5,
                                              title: I.intl.string(I.t.xx1MWV),
                                              titleClassName: f.groupTitle,
                                              className: f.otherSessions,
                                              children: [
                                                  n.map((e) =>
                                                      (0, i.jsx)(
                                                          A,
                                                          {
                                                              session: e,
                                                              useChecks: N.size > 0,
                                                              checked: N.has(e.id_hash),
                                                              setChecked: (t) => {
                                                                  let n = new Set(N);
                                                                  t ? n.add(e.id_hash) : n.delete(e.id_hash), v(n);
                                                              }
                                                          },
                                                          e.id_hash
                                                      )
                                                  ),
                                                  (null == l ? void 0 : l.mfaEnabled) ? null : (0, i.jsx)(b, {})
                                              ]
                                          })
                                ]
                            }),
                            n.length > 0
                                ? (0, i.jsxs)(d.FormSection, {
                                      tag: d.FormTitleTags.H5,
                                      title: N.size > 0 ? I.intl.string(I.t.mMEmRE) : I.intl.string(I.t.Vij32N),
                                      children: [
                                          (0, i.jsx)(d.FormText, {
                                              type: d.FormTextTypes.DESCRIPTION,
                                              children: I.intl.string(I.t.OTXyaW)
                                          }),
                                          (0, i.jsx)(d.Button, {
                                              look: d.Button.Looks.OUTLINED,
                                              color: d.Button.Colors.RED,
                                              size: d.Button.Sizes.SMALL,
                                              className: f.logOutAllButton,
                                              onClick: () => {
                                                  N.size > 0 ? (0, h.L$)(Array.from(N)) : (0, h.L$)(n.map((e) => e.id_hash));
                                              },
                                              children: N.size > 0 ? I.intl.formatToPlainString(I.t['83CPLi'], { count: N.size }) : I.intl.string(I.t.cLmmeX)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    })),
          (0, i.jsxs)(d.FormSection, {
              tag: d.FormTitleTags.H1,
              title: I.intl.string(I.t['+1h0k5']),
              children: [
                  (0, i.jsx)(d.FormText, {
                      type: d.FormTextTypes.DESCRIPTION,
                      className: f.description,
                      children: I.intl.string(I.t.zZp619)
                  }),
                  (null == l ? void 0 : l.isStaff())
                      ? (0, i.jsxs)('div', {
                            className: f.tools,
                            children: [
                                (0, i.jsx)(d.Text, {
                                    className: f.toolsTitle,
                                    variant: 'text-md/bold',
                                    children: 'DEV TOOLS'
                                }),
                                (0, i.jsx)(d.Text, {
                                    className: f.toolsTitle,
                                    variant: 'text-sm/normal',
                                    color: 'text-danger',
                                    children: 'These tools are only shown to staff users.'
                                }),
                                (0, i.jsx)(d.Tooltip, {
                                    text: 'Triggers mobile and email suspicious session notifications for the current user',
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, i.jsx)(d.Button, {
                                            size: d.Button.Sizes.SMALL,
                                            color: d.Button.Colors.PRIMARY,
                                            onClick: C,
                                            onMouseEnter: t,
                                            onMouseLeave: n,
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
function A(e) {
    var t, n, s, r, a;
    let { session: o, current: c, setChecked: u, checked: m, useChecks: p } = e,
        x = null !== (a = null === (t = o.client_info) || void 0 === t ? void 0 : t.location) && void 0 !== a ? a : null === (n = o.client_info) || void 0 === n ? void 0 : n.ip,
        S = null === (s = o.client_info) || void 0 === s ? void 0 : s.platform,
        { text: T, icon: E } = (function (e) {
            switch (null == e ? void 0 : e.toLowerCase().trim()) {
                case null:
                case void 0:
                case '':
                    return {
                        text: I.intl.string(I.t.cDHCNT),
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
        })(null === (r = o.client_info) || void 0 === r ? void 0 : r.os),
        _ = c ? null : (0, g.p)(o.approx_last_used_time),
        N = [T, S].filter(C.lm),
        A = [x, _].filter(C.lm);
    return (0, i.jsxs)(
        'div',
        {
            className: l()(f.session, c ? f.currentSession : null),
            children: [
                (0, i.jsx)('div', {
                    className: f.sessionIcon,
                    children: (0, i.jsx)(E, {
                        size: 'md',
                        color: 'currentColor'
                    })
                }),
                (0, i.jsxs)('div', {
                    className: f.sessionInfo,
                    children: [
                        (0, i.jsxs)(d.Text, {
                            variant: 'eyebrow',
                            className: f.sessionInfoRow,
                            children: [
                                (0, i.jsx)('span', { children: N[0] }),
                                N.length > 1 &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)('span', { children: '\xB7' }), (0, i.jsx)('span', { children: N[1] })]
                                    })
                            ]
                        }),
                        (0, i.jsxs)(d.Text, {
                            variant: 'text-sm/medium',
                            className: f.sessionInfoRow,
                            children: [
                                (0, i.jsx)('span', { children: A[0] }),
                                A.length > 1 &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)('span', { children: '\xB7' }), (0, i.jsx)('span', { children: A[1] })]
                                    })
                            ]
                        })
                    ]
                }),
                c
                    ? null
                    : p
                      ? (0, i.jsx)('div', {
                            className: f.sessionCheckbox,
                            children: (0, i.jsx)(d.Checkbox, {
                                onChange: (e, t) => {
                                    null == u || u(t);
                                },
                                value: m
                            })
                        })
                      : (0, i.jsx)(d.Clickable, {
                            className: f.sessionMoreButton,
                            onClick: (e) => {
                                e.shiftKey ? null == u || u(!0) : (0, h.L$)(o.id_hash);
                            },
                            'aria-label': I.intl.string(I.t.E4MJNj),
                            children: (0, i.jsx)(d.XSmallIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
            ]
        },
        o.id_hash
    );
}
function b() {
    return (0, i.jsxs)('div', {
        className: l()(f.session, f.legacySession),
        children: [
            (0, i.jsx)('div', {
                className: f.sessionIcon,
                children: (0, i.jsx)(T.Z, {
                    width: '32',
                    height: '32'
                })
            }),
            (0, i.jsxs)('div', {
                className: f.sessionInfo,
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: 'eyebrow',
                        className: f.sessionInfoRow,
                        color: 'text-muted',
                        children: (0, i.jsx)('span', { children: I.intl.string(I.t.iUa0sr) })
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-sm/medium',
                        className: f.sessionInfoRow,
                        color: 'text-muted',
                        children: (0, i.jsx)('span', { children: I.intl.format(I.t['044+8v'], { onClick: () => u.Z.setSection(E.oAB.ACCOUNT) }) })
                    })
                ]
            })
        ]
    });
}

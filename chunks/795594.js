t(653041), t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(658722),
    l = t.n(o),
    c = t(243814),
    d = t(442837),
    _ = t(921072),
    u = t(1561),
    E = t(481060),
    T = t(384275),
    S = t(230711),
    I = t(497321),
    N = t(468026),
    m = t(317381),
    C = t(513202),
    A = t(979200),
    g = t(600164),
    h = t(713938),
    O = t(881998),
    p = t(246946),
    R = t(768581),
    x = t(49012),
    f = t(709054),
    M = t(706454),
    D = t(210887),
    P = t(436267),
    L = t(149418),
    b = t(494620),
    Z = t(981631),
    v = t(689938),
    j = t(822352),
    B = t(113207);
let U = d.ZP.connectStores([D.Z], () => ({ theme: D.Z.theme }))(E.EmptyState);
function G(e) {
    let { application: s } = e;
    return (0, n.jsxs)('div', {
        className: j.twoWayWarning,
        children: [
            (0, n.jsx)(E.CircleInformationIcon, {
                size: 'md',
                color: 'currentColor',
                className: j.twoWayWarningIcon
            }),
            (0, n.jsx)(E.Text, {
                color: 'text-normal',
                variant: 'text-sm/medium',
                children: v.Z.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT.format({
                    applicationName: s.name,
                    onConnectionPress: () => S.Z.setSection(Z.jXE.SETTINGS_CONNECTIONS)
                })
            })
        ]
    });
}
let F = (e) => {
        let { disclosure: s } = e;
        return a.useMemo(() => {
            switch (s) {
                case _.u$.IP_LOCATION:
                    return (0, n.jsx)(E.GlobeEarthIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: j.disclosureIcon
                    });
                case _.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, n.jsx)(E.EmbedIcon, { className: j.disclosureIcon });
                default:
                    return (0, n.jsx)(E.CircleInformationIcon, { className: j.disclosureIcon });
            }
        }, [s]);
    },
    y = (e) => {
        let { scopes: s, application: t, onDelete: a, disclosures: i, locale: o, id: l } = e,
            d = () => {
                let e = v.Z.Messages.DELETE_APP_CONFIRM_MSG_V2.format({ applicationName: t.name });
                return (
                    (0, L.Z)(t) &&
                        (e = (0, n.jsxs)(n.Fragment, {
                            children: [
                                e,
                                (0, n.jsx)(b.Z, {
                                    look: b.z.WARNING,
                                    className: j.infoBox,
                                    children: v.Z.Messages.SOCIAL_LAYER_APPLICATION_UNLINK_WARNING
                                })
                            ]
                        })),
                    (0, P.Z)(t.id) &&
                        (e = (0, n.jsxs)(n.Fragment, {
                            children: [
                                e,
                                (0, n.jsx)(b.Z, {
                                    className: j.infoBox,
                                    children: v.Z.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT_DISCONNECT_WARNING.format({ applicationName: t.name })
                                })
                            ]
                        })),
                    (0, E.openModal)((s) =>
                        (0, n.jsx)(N.default, {
                            title: v.Z.Messages.DEAUTHORIZE_APP,
                            body: e,
                            confirmText: v.Z.Messages.DEAUTHORIZE,
                            cancelText: v.Z.Messages.CANCEL,
                            onConfirm: a,
                            ...s
                        })
                    )
                );
            },
            _ = () => {
                null != t.terms_of_service_url &&
                    (0, x.q)({
                        href: t.terms_of_service_url,
                        shouldConfirm: !0
                    });
            },
            T = () => {
                null != t.privacy_policy_url &&
                    (0, x.q)({
                        href: t.privacy_policy_url,
                        shouldConfirm: !0
                    });
            },
            S = (0, P.O)(t.id);
        return (0, n.jsx)(E.Card, {
            className: r()(j.authedApp, B.marginBottom8),
            outline: !0,
            children: (0, n.jsxs)(E.HeadingLevel, {
                component: (() => {
                    let e = R.ZP.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon
                        }),
                        s =
                            null != e
                                ? (0, n.jsx)(g.Z.Child, {
                                      className: j.appAvatar,
                                      grow: 0,
                                      children: (0, n.jsx)('img', {
                                          src: e,
                                          alt: ''
                                      })
                                  })
                                : null,
                        a = new Date(f.default.extractTimestamp(l)).toLocaleDateString(o);
                    return (0, n.jsxs)('div', {
                        className: r()(j.header, B.marginBottom20),
                        children: [
                            s,
                            (0, n.jsxs)('div', {
                                className: j.headerTextContainer,
                                children: [
                                    (0, n.jsx)(E.Heading, {
                                        variant: 'text-sm/semibold',
                                        className: j.headerText,
                                        children: t.name
                                    }),
                                    (0, n.jsx)(E.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-normal',
                                        children: v.Z.Messages.AUTHORIZED_APPS_AUTHORIZED_ON.format({ date: a })
                                    })
                                ]
                            }),
                            (0, n.jsx)(E.Button, {
                                color: E.ButtonColors.RED,
                                look: E.ButtonLooks.OUTLINED,
                                size: E.ButtonSizes.SMALL,
                                onClick: d,
                                children: v.Z.Messages.DEAUTHORIZE
                            })
                        ]
                    });
                })(),
                children: [
                    (() => {
                        if (null != t.description && '' !== t.description)
                            return (0, n.jsx)(E.FormItem, {
                                faded: !0,
                                title: v.Z.Messages.ABOUT_THIS_APP,
                                children: (0, n.jsx)(E.FormText, { children: t.description })
                            });
                    })(),
                    (() => {
                        if (null != t.terms_of_service_url || null != t.privacy_policy_url)
                            return (0, n.jsxs)('div', {
                                className: j.tosPrivacy,
                                children: [
                                    null != t.terms_of_service_url
                                        ? (0, n.jsxs)(u.P, {
                                              tag: 'a',
                                              onClick: _,
                                              className: j.tos,
                                              children: [
                                                  (0, n.jsx)(E.FormText, {
                                                      className: j.link,
                                                      children: v.Z.Messages.AUTHORIZED_APPS_TERMS_OF_SERVICE
                                                  }),
                                                  (0, n.jsx)(E.LinkExternalSmallIcon, {
                                                      className: j.externalLinkIcon,
                                                      color: 'var(--text-link)'
                                                  })
                                              ]
                                          })
                                        : null,
                                    null != t.privacy_policy_url
                                        ? (0, n.jsxs)('div', {
                                              className: j.privacy,
                                              children: [
                                                  null != t.terms_of_service_url ? (0, n.jsx)('div', { className: j.divider }) : null,
                                                  (0, n.jsxs)(u.P, {
                                                      tag: 'a',
                                                      onClick: T,
                                                      className: j.privacy,
                                                      children: [
                                                          (0, n.jsx)(E.FormText, {
                                                              className: j.link,
                                                              children: v.Z.Messages.AUTHORIZED_APPS_PRIVACY_POLICY
                                                          }),
                                                          (0, n.jsx)(E.LinkExternalSmallIcon, {
                                                              className: j.externalLinkIcon,
                                                              color: 'var(--text-link)'
                                                          })
                                                      ]
                                                  })
                                              ]
                                          })
                                        : null
                                ]
                            });
                    })(),
                    (() => {
                        let e = [];
                        for (let t of s) e.push(...(0, h.CI)(t, s)), t === c.x.APPLICATIONS_COMMANDS && e.push(v.Z.Messages.SCOPE_DM_YOU);
                        if (e.length > 0 || (null != i && i.length > 0))
                            return (0, n.jsx)(E.FormItem, {
                                faded: !0,
                                title: v.Z.Messages.PERMISSIONS,
                                className: B.marginTop20,
                                children: (0, n.jsxs)('ul', {
                                    children: [
                                        e.map((e, s) =>
                                            (0, n.jsxs)(
                                                'li',
                                                {
                                                    className: r()(j.permission, B.marginTop8),
                                                    children: [(0, n.jsx)('i', { className: j.permissionCheckmark }), (0, n.jsx)(E.FormText, { children: e })]
                                                },
                                                s
                                            )
                                        ),
                                        null == i
                                            ? void 0
                                            : i.map((s, t) => {
                                                  let a = (0, A.PM)(s);
                                                  return null != a
                                                      ? (0, n.jsxs)(
                                                            'li',
                                                            {
                                                                className: r()(j.permission, B.marginTop8),
                                                                children: [(0, n.jsx)(F, { disclosure: s }), (0, n.jsx)(E.FormText, { children: a })]
                                                            },
                                                            t + e.length
                                                        )
                                                      : null;
                                              })
                                    ]
                                })
                            });
                    })(),
                    S && (0, n.jsx)(G, { application: t })
                ]
            })
        });
    };
s.Z = () => {
    let e = (0, d.e7)([p.Z], () => p.Z.hidePersonalInformation),
        s = (0, d.e7)([O.Z], () => O.Z.getApps()),
        i = (0, d.e7)([M.default], () => M.default.locale),
        r = (0, d.e7)([m.ZP], () => m.ZP.getSelfEmbeddedActivities());
    a.useEffect(() => {
        T.Z.fetch();
    }, []);
    let o = (e) => {
            let { id: s, application: t } = e;
            T.Z.delete(s);
            let n = r.get(t.id);
            null != n &&
                C.Z.leaveActivity({
                    channelId: n.channelId,
                    applicationId: t.id,
                    showFeedback: !1
                });
        },
        [c, _] = a.useState(''),
        u = (e) => {
            _(e);
        },
        S = () => {
            _('');
        },
        N = () =>
            (0, n.jsx)('div', {
                className: j.searchContainer,
                children: (0, n.jsx)(E.SearchBar, {
                    size: E.SearchBar.Sizes.MEDIUM,
                    query: c,
                    onChange: u,
                    onClear: S,
                    placeholder: v.Z.Messages.INTEGRATIONS_SEARCH,
                    'aria-label': v.Z.Messages.INTEGRATIONS_SEARCH
                })
            }),
        A = (e, s) =>
            (0, n.jsxs)(U, {
                className: j.__invalid_marginTop20,
                children: [
                    (0, n.jsx)(E.EmptyStateImage, {
                        darkSrc: t(701972),
                        lightSrc: t(818658),
                        width: 380,
                        height: 282
                    }),
                    (0, n.jsx)(E.EmptyStateText, {
                        note: e,
                        children: s
                    })
                ]
            }),
        g = a.useMemo(() => {
            let e = c.trim().toLowerCase();
            return '' === e || null == s ? s : s.length < 100 ? s.filter((s) => l()(e, s.application.name.toLowerCase())) : s.filter((s) => s.application.name.toLowerCase().includes(e));
        }, [s, c]);
    return e
        ? (0, n.jsx)(I.Z, {})
        : (0, n.jsx)(E.FormSection, {
              tag: E.FormTitleTags.H1,
              title: v.Z.Messages.AUTHORIZED_APPS,
              children: (0, n.jsx)(E.HeadingLevel, {
                  component: (0, n.jsx)(E.FormNotice, {
                      className: B.marginBottom40,
                      type: E.CardTypes.PRIMARY,
                      title: v.Z.Messages.APPLICATIONS_AND_CONNECTIONS,
                      body: v.Z.Messages.APPLICATIONS_AND_CONNECTIONS_BODY
                  }),
                  children:
                      null == s || null == g
                          ? (0, n.jsx)(E.Spinner, {
                                className: B.marginTop20,
                                type: E.Spinner.Type.SPINNING_CIRCLE
                            })
                          : 0 === s.length
                            ? A(v.Z.Messages.NO_AUTHORIZED_APPS_NOTE, v.Z.Messages.NO_AUTHORIZED_APPS)
                            : 0 === g.length
                              ? (0, n.jsxs)(n.Fragment, {
                                    children: [N(), A(null, v.Z.Messages.INTEGRATIONS_SEARCH_NO_MATCH)]
                                })
                              : (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        N(),
                                        g
                                            .sort((e, s) => e.application.name.localeCompare(s.application.name))
                                            .map((e) =>
                                                (0, n.jsx)(
                                                    y,
                                                    {
                                                        locale: i,
                                                        onDelete: () => o(e),
                                                        ...e
                                                    },
                                                    e.id
                                                )
                                            )
                                    ]
                                })
              })
          });
};

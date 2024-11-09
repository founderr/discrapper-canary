n(47120);
var i = n(200651),
    r = n(192379),
    l = n(772848),
    s = n(640358),
    a = n(442837),
    o = n(544891),
    c = n(704215),
    d = n(692547),
    u = n(481060),
    m = n(497321),
    h = n(841470),
    g = n(605236),
    x = n(142497),
    p = n(690221),
    f = n(706454),
    C = n(650774),
    I = n(430824),
    _ = n(246946),
    N = n(626135),
    v = n(771212),
    T = n(434404),
    j = n(146596),
    S = n(559368),
    b = n(999382),
    E = n(981631),
    R = n(921944),
    Z = n(190378),
    A = n(388032),
    L = n(396466),
    y = n(287837),
    D = n(573189),
    O = n(899947),
    M = n(117831),
    P = n(996737),
    k = n(21846),
    w = n(280632),
    B = n(44234),
    U = n(117428);
let G = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = null;
        return (
            null == t || Number.isNaN(t) ? (null == t || Number.isNaN(t)) && null != e && (r = A.intl.string(A.t.xO2msb)) : (r = A.intl.formatToPlainString(A.t.nskeMz, { percentage: (0, s.o)(Math.abs(t), n) })),
            {
                localizedNumber: null != e ? ''.concat((0, s.o)(e, n)).concat(i ? '%' : '') : A.intl.string(A.t.jHpxws),
                subtext: r,
                isTrendingUp: t > 0,
                isTrendingDown: t < 0
            }
        );
    },
    F = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return t || e === E.evJ.NOT_ENOUGH_GUILD_MEMBERS
            ? (0, i.jsx)(u.FormErrorBlock, {
                  icon: u.CircleInformationIcon,
                  className: L.notEnoughMembersError,
                  backgroundColor: u.FormErrorBlockColors.BACKGROUND_ACCENT,
                  children: A.intl.string(A.t['FsgE/P'])
              })
            : null == e
              ? null
              : (0, i.jsx)(u.FormErrorBlock, {
                    backgroundColor: u.FormErrorBlockColors.BACKGROUND_ACCENT,
                    children: A.intl.string(A.t.Iju63d)
                });
    };
function H(e) {
    N.default.track(E.rMx.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, { guild_id: e });
    let t = null == e ? E.E07.DEVELOPER_PORTAL : E.E07.DEVELOPER_PORTAL_GUILD_ANALYTICS(e),
        n = (0, l.Z)();
    return o.tn
        .post({
            url: E.ANM.HANDOFF,
            body: { key: n },
            oldFormErrors: !0
        })
        .then(
            (e) => {
                let i = e.body.handoff_token;
                window.open(E.EYA.DEVELOPER_PORTAL_LOGIN_HANDOFF(n, i, t));
            },
            () => {
                window.open(t);
            }
        );
}
let z = () => {
    let [e, t] = r.useState(!1),
        n = (0, a.e7)([b.Z], () => b.Z.getGuildId());
    return (0, i.jsx)(u.Button, {
        className: L.developerPortalCta,
        onClick: () => {
            t(!0),
                H(n).then(() => {
                    t(!1);
                });
        },
        submitting: e,
        children: A.intl.string(A.t.Uskgx8)
    });
};
function V(e) {
    let { guildId: t } = e,
        { hasAccessRate: n, accessRate: l } = (0, a.cj)([S.Z], () => S.Z.getMemberInsights(t)),
        s = (0, a.e7)([C.Z], () => {
            var e;
            return null !== (e = C.Z.getMemberCount()) && void 0 !== e ? e : 0;
        }),
        { showAccessRate: o } = (0, v.eA)(t, !n);
    if (
        (r.useEffect(() => {
            o && ((0, g.kk)(c.z.GUILD_INSIGHTS_ACCESS_RATE_NEW), (0, g.EW)(c.z.GUILD_INSIGHTS_ACCESS_RATE_NEW, { dismissAction: R.L.AUTO }));
        }, [o]),
        !o || !n || null == l)
    )
        return null;
    let m = 10 * Math.ceil((1 - l) * 10),
        h = U,
        x = null,
        f = null;
    return (
        l >= 0.9
            ? ((h = U),
              (x = A.intl.format(A.t.wMU3am, {
                  ratingHook: (e, t) =>
                      (0, i.jsx)(
                          'span',
                          {
                              className: L.ratingVeryGood,
                              children: e
                          },
                          t
                      )
              })),
              (f = A.intl.formatToPlainString(A.t.cgTr3d, { accessRate: 10 })))
            : l >= (s > 10000 ? 0.7 : 0.8)
              ? ((h = w),
                (x = A.intl.format(A.t.DelTmZ, {
                    ratingHook: (e, t) =>
                        (0, i.jsx)(
                            'span',
                            {
                                className: L.ratingGood,
                                children: e
                            },
                            t
                        )
                })),
                (f = A.intl.formatToPlainString(A.t['+k7pAA'], { accessRate: m })))
              : l >= 0.5
                ? ((h = B),
                  (x = A.intl.format(A.t.THsJo6, {
                      ratingHook: (e, t) =>
                          (0, i.jsx)(
                              'span',
                              {
                                  className: L.ratingNeutral,
                                  children: e
                              },
                              t
                          )
                  })),
                  (f = A.intl.formatToPlainString(A.t['+k7pAA'], { accessRate: m })))
                : ((h = k),
                  (x = A.intl.format(A.t.RNxsr6, {
                      ratingHook: (e, t) =>
                          (0, i.jsx)(
                              'span',
                              {
                                  className: L.ratingBad,
                                  children: e
                              },
                              t
                          )
                  })),
                  (f = 100 === m ? A.intl.formatToPlainString(A.t['+k7pAA'], { accessRate: m }) : A.intl.formatToPlainString(A.t['Qsgz/v'], { accessRate: m }))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(u.Heading, {
                    variant: 'heading-md/semibold',
                    className: L.insightsTitle,
                    children: [
                        A.intl.string(A.t['qF8c+/']),
                        (0, i.jsx)(u.TextBadge, {
                            text: A.intl.string(A.t.oW0eUV),
                            color: d.Z.unsafe_rawColors.BRAND_500.css,
                            className: L.betaTag
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: L.memberInsightsContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: L.insightsHeader,
                            children: [
                                (0, i.jsx)('img', {
                                    alt: '',
                                    className: L.insightsIcon,
                                    src: h
                                }),
                                (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-md/semibold',
                                            className: L.title,
                                            children: x
                                        }),
                                        (0, i.jsxs)(u.Text, {
                                            className: L.description,
                                            variant: 'text-sm/normal',
                                            children: [
                                                f,
                                                (0, i.jsx)(u.TooltipContainer, {
                                                    text: A.intl.string(A.t['60A+Hh']),
                                                    className: L.insightsTooltip,
                                                    children: (0, i.jsx)(u.CircleInformationIcon, {
                                                        size: 'xs',
                                                        color: 'currentColor',
                                                        className: L.insightsTooltipIcon
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        l < 0.9
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('div', { className: L.divider }),
                                      (0, i.jsx)(u.Text, {
                                          className: L.tips,
                                          variant: 'text-sm/semibold',
                                          children: A.intl.format(A.t.lTFjS0, {})
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: L.insightsActions,
                                          children: [
                                              (0, i.jsxs)('div', {
                                                  className: L.insightAction,
                                                  children: [
                                                      (0, i.jsx)('img', {
                                                          alt: '',
                                                          className: L.actionIcon,
                                                          src: O
                                                      }),
                                                      (0, i.jsx)(u.Text, {
                                                          className: L.actionText,
                                                          variant: 'text-sm/normal',
                                                          children: A.intl.string(A.t.SpYbQE)
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsx)('div', { className: L.dividerInline }),
                                              (0, i.jsxs)('div', {
                                                  className: L.insightAction,
                                                  children: [
                                                      (0, i.jsx)('img', {
                                                          alt: '',
                                                          className: L.actionIcon,
                                                          src: M
                                                      }),
                                                      (0, i.jsx)(u.Text, {
                                                          className: L.actionText,
                                                          variant: 'text-sm/normal',
                                                          children: A.intl.string(A.t.fLKr9v)
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsx)('div', { className: L.dividerInline }),
                                              (0, i.jsxs)('div', {
                                                  className: L.insightAction,
                                                  children: [
                                                      (0, i.jsx)('img', {
                                                          alt: '',
                                                          className: L.actionIcon,
                                                          src: D
                                                      }),
                                                      (0, i.jsx)(u.Text, {
                                                          className: L.actionText,
                                                          variant: 'text-sm/normal',
                                                          children: A.intl.format(A.t.cq9w2N, {
                                                              integrationsHook: (e, t) =>
                                                                  (0, i.jsx)(
                                                                      p.Z,
                                                                      {
                                                                          onClick: () => T.Z.setSection(E.pNK.INTEGRATIONS),
                                                                          className: L.link,
                                                                          children: e
                                                                      },
                                                                      t
                                                                  )
                                                          })
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsx)('div', { className: L.dividerInline }),
                                              (0, i.jsxs)('div', {
                                                  className: L.insightAction,
                                                  children: [
                                                      (0, i.jsx)('img', {
                                                          alt: '',
                                                          className: L.actionIcon,
                                                          src: y
                                                      }),
                                                      (0, i.jsx)(u.Text, {
                                                          className: L.actionText,
                                                          variant: 'text-sm/normal',
                                                          children: A.intl.string(A.t['2Gz/j4'])
                                                      })
                                                  ]
                                              })
                                          ]
                                      })
                                  ]
                              })
                            : (0, i.jsx)('div', {
                                  className: L.insightsActions,
                                  children: (0, i.jsxs)('div', {
                                      className: L.insightAction,
                                      children: [
                                          (0, i.jsx)('img', {
                                              alt: '',
                                              className: L.actionIcon,
                                              src: P
                                          }),
                                          (0, i.jsx)(u.Text, {
                                              className: L.actionText,
                                              variant: 'text-sm/normal',
                                              children: A.intl.format(A.t['3i3mAg'], {
                                                  insightsHook: (e, n) =>
                                                      (0, i.jsx)(
                                                          p.Z,
                                                          {
                                                              onClick: () => H(t),
                                                              className: L.link,
                                                              children: e
                                                          },
                                                          n
                                                      )
                                              })
                                          })
                                      ]
                                  })
                              })
                    ]
                }),
                (0, i.jsx)('div', { className: L.divider }),
                (0, i.jsx)(u.Heading, {
                    variant: 'heading-md/semibold',
                    className: L.insightsTitle,
                    children: A.intl.string(A.t['0wWfUF'])
                })
            ]
        })
    );
}
t.Z = () => {
    let e = (0, a.e7)([b.Z], () => b.Z.getGuildId()),
        t = (0, a.e7)([C.Z], () => C.Z.getMemberCount(e)),
        n = (0, a.e7)([I.Z], () => I.Z.getGuild(e)),
        l = (0, a.e7)([f.default], () => f.default.locale),
        { analytics: s, errorCode: o } = (0, a.cj)([S.Z], () => ({
            analytics: null != e ? S.Z.getOverviewAnalytics(e) : null,
            errorCode: S.Z.getError()
        })),
        c = (0, a.e7)([_.Z], () => _.Z.getSettings().enabled),
        d = null == t || null == n || (null != t && t < 500 && null != n && !n.hasFeature(E.oNc.PARTNERED) && !n.hasFeature(E.oNc.VERIFIED));
    r.useEffect(() => {
        null != e && !d && ((0, j.Vk)(e), (0, j.SR)(e), (0, j.xl)(e));
    }, [e, d]),
        r.useEffect(() => {
            (0, x.Kw)(Z.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU);
        }, []);
    let g =
        null != s
            ? (0, i.jsx)('div', {
                  className: L.__invalid_guildAnalyticsOverviewWrapper,
                  children: (0, i.jsxs)('div', {
                      className: L.overviewData,
                      children: [
                          (0, i.jsx)(h.Z, {
                              title: A.intl.string(A.t.i0Nora),
                              tooltipText: A.intl.string(A.t.KiRbLC),
                              ...G(s.visitors, s.visitorsChange, l)
                          }),
                          (0, i.jsx)(h.Z, {
                              title: A.intl.string(A.t.DDAHdX),
                              tooltipText: A.intl.string(A.t.HxWUkZ),
                              ...G(s.communicators, s.communicatorsChange, l)
                          }),
                          (0, i.jsx)(h.Z, {
                              title: A.intl.string(A.t.hYeOqK),
                              ...G(s.newMembers, s.newMembersChange, l)
                          }),
                          (0, i.jsx)(h.Z, {
                              title: A.intl.string(A.t.jj7OPz),
                              tooltipText: A.intl.string(A.t.MQCsl5),
                              ...G(s.pctRetained, s.pctRetainedChange, l, !0)
                          })
                      ]
                  })
              })
            : null;
    return (0, i.jsxs)(u.FormSection, {
        tag: u.FormTitleTags.H1,
        title: A.intl.string(A.t['0wWfUF']),
        children: [
            (0, i.jsx)(u.FormText, {
                type: u.FormTextTypes.DESCRIPTION,
                children: A.intl.format(A.t.NIZ60d, {})
            }),
            F(o, d),
            null != e ? (0, i.jsx)(V, { guildId: e }) : null,
            (0, i.jsxs)('div', {
                className: L.developerPortalCtaWrapper,
                children: [
                    (0, i.jsx)('div', { className: L.placeholderImage }),
                    (0, i.jsx)(u.Text, {
                        className: L.developerPortalCtaText,
                        variant: 'text-sm/normal',
                        children: A.intl.string(A.t.A5vsws)
                    }),
                    (0, i.jsx)(z, {})
                ]
            }),
            c
                ? (0, i.jsx)('div', {
                      className: L.streamerMode,
                      children: (0, i.jsx)(m.Z, {})
                  })
                : g
        ]
    });
};

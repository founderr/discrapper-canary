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
    v = n(430824),
    _ = n(246946),
    I = n(626135),
    N = n(771212),
    T = n(434404),
    j = n(146596),
    b = n(559368),
    S = n(999382),
    E = n(981631),
    R = n(921944),
    Z = n(190378),
    y = n(388032),
    A = n(19902),
    L = n(287837),
    D = n(573189),
    O = n(899947),
    k = n(117831),
    M = n(996737),
    P = n(21846),
    w = n(280632),
    B = n(44234),
    U = n(117428);
let G = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = null;
        return (
            null == t || Number.isNaN(t) ? (null == t || Number.isNaN(t)) && null != e && (r = y.intl.string(y.t.xO2msb)) : (r = y.intl.formatToPlainString(y.t.nskeMz, { percentage: (0, s.o)(Math.abs(t), n) })),
            {
                localizedNumber: null != e ? ''.concat((0, s.o)(e, n)).concat(i ? '%' : '') : y.intl.string(y.t.jHpxws),
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
                  className: A.notEnoughMembersError,
                  backgroundColor: u.FormErrorBlockColors.BACKGROUND_ACCENT,
                  children: y.intl.string(y.t['FsgE/P'])
              })
            : null == e
              ? null
              : (0, i.jsx)(u.FormErrorBlock, {
                    backgroundColor: u.FormErrorBlockColors.BACKGROUND_ACCENT,
                    children: y.intl.string(y.t.Iju63d)
                });
    };
function H(e) {
    I.default.track(E.rMx.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, { guild_id: e });
    let t = null == e ? E.E07.DEVELOPER_PORTAL : E.E07.DEVELOPER_PORTAL_GUILD_ANALYTICS(e),
        n = (0, l.Z)();
    return o.tn
        .post({
            url: E.ANM.HANDOFF,
            body: { key: n },
            oldFormErrors: !0,
            rejectWithError: !1
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
        n = (0, a.e7)([S.Z], () => S.Z.getGuildId());
    return (0, i.jsx)(u.Button, {
        className: A.developerPortalCta,
        onClick: () => {
            t(!0),
                H(n).then(() => {
                    t(!1);
                });
        },
        submitting: e,
        children: y.intl.string(y.t.Uskgx8)
    });
};
function W(e) {
    let { guildId: t } = e,
        { hasAccessRate: n, accessRate: l } = (0, a.cj)([b.Z], () => b.Z.getMemberInsights(t)),
        s = (0, a.e7)([C.Z], () => {
            var e;
            return null !== (e = C.Z.getMemberCount()) && void 0 !== e ? e : 0;
        }),
        { showAccessRate: o } = (0, N.eA)(t, !n);
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
              (x = y.intl.format(y.t.wMU3am, {
                  ratingHook: (e, t) =>
                      (0, i.jsx)(
                          'span',
                          {
                              className: A.ratingVeryGood,
                              children: e
                          },
                          t
                      )
              })),
              (f = y.intl.formatToPlainString(y.t.cgTr3d, { accessRate: 10 })))
            : l >= (s > 10000 ? 0.7 : 0.8)
              ? ((h = w),
                (x = y.intl.format(y.t.DelTmZ, {
                    ratingHook: (e, t) =>
                        (0, i.jsx)(
                            'span',
                            {
                                className: A.ratingGood,
                                children: e
                            },
                            t
                        )
                })),
                (f = y.intl.formatToPlainString(y.t['+k7pAA'], { accessRate: m })))
              : l >= 0.5
                ? ((h = B),
                  (x = y.intl.format(y.t.THsJo6, {
                      ratingHook: (e, t) =>
                          (0, i.jsx)(
                              'span',
                              {
                                  className: A.ratingNeutral,
                                  children: e
                              },
                              t
                          )
                  })),
                  (f = y.intl.formatToPlainString(y.t['+k7pAA'], { accessRate: m })))
                : ((h = P),
                  (x = y.intl.format(y.t.RNxsr6, {
                      ratingHook: (e, t) =>
                          (0, i.jsx)(
                              'span',
                              {
                                  className: A.ratingBad,
                                  children: e
                              },
                              t
                          )
                  })),
                  (f = 100 === m ? y.intl.formatToPlainString(y.t['+k7pAA'], { accessRate: m }) : y.intl.formatToPlainString(y.t['Qsgz/v'], { accessRate: m }))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(u.Heading, {
                    variant: 'heading-md/semibold',
                    className: A.insightsTitle,
                    children: [
                        y.intl.string(y.t['qF8c+/']),
                        (0, i.jsx)(u.TextBadge, {
                            text: y.intl.string(y.t.oW0eUV),
                            color: d.Z.unsafe_rawColors.BRAND_500.css,
                            className: A.betaTag
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: A.memberInsightsContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: A.insightsHeader,
                            children: [
                                (0, i.jsx)('img', {
                                    alt: '',
                                    className: A.insightsIcon,
                                    src: h
                                }),
                                (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-md/semibold',
                                            className: A.title,
                                            children: x
                                        }),
                                        (0, i.jsxs)(u.Text, {
                                            className: A.description,
                                            variant: 'text-sm/normal',
                                            children: [
                                                f,
                                                (0, i.jsx)(u.TooltipContainer, {
                                                    text: y.intl.string(y.t['60A+Hh']),
                                                    className: A.insightsTooltip,
                                                    children: (0, i.jsx)(u.CircleInformationIcon, {
                                                        size: 'xs',
                                                        color: 'currentColor',
                                                        className: A.insightsTooltipIcon
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
                                      (0, i.jsx)('div', { className: A.divider }),
                                      (0, i.jsx)(u.Text, {
                                          className: A.tips,
                                          variant: 'text-sm/semibold',
                                          children: y.intl.format(y.t.lTFjS0, {})
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: A.insightsActions,
                                          children: [
                                              (0, i.jsxs)('div', {
                                                  className: A.insightAction,
                                                  children: [
                                                      (0, i.jsx)('img', {
                                                          alt: '',
                                                          className: A.actionIcon,
                                                          src: O
                                                      }),
                                                      (0, i.jsx)(u.Text, {
                                                          className: A.actionText,
                                                          variant: 'text-sm/normal',
                                                          children: y.intl.string(y.t.SpYbQE)
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsx)('div', { className: A.dividerInline }),
                                              (0, i.jsxs)('div', {
                                                  className: A.insightAction,
                                                  children: [
                                                      (0, i.jsx)('img', {
                                                          alt: '',
                                                          className: A.actionIcon,
                                                          src: k
                                                      }),
                                                      (0, i.jsx)(u.Text, {
                                                          className: A.actionText,
                                                          variant: 'text-sm/normal',
                                                          children: y.intl.string(y.t.fLKr9v)
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsx)('div', { className: A.dividerInline }),
                                              (0, i.jsxs)('div', {
                                                  className: A.insightAction,
                                                  children: [
                                                      (0, i.jsx)('img', {
                                                          alt: '',
                                                          className: A.actionIcon,
                                                          src: D
                                                      }),
                                                      (0, i.jsx)(u.Text, {
                                                          className: A.actionText,
                                                          variant: 'text-sm/normal',
                                                          children: y.intl.format(y.t.cq9w2N, {
                                                              integrationsHook: (e, t) =>
                                                                  (0, i.jsx)(
                                                                      p.Z,
                                                                      {
                                                                          onClick: () => T.Z.setSection(E.pNK.INTEGRATIONS),
                                                                          className: A.link,
                                                                          children: e
                                                                      },
                                                                      t
                                                                  )
                                                          })
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsx)('div', { className: A.dividerInline }),
                                              (0, i.jsxs)('div', {
                                                  className: A.insightAction,
                                                  children: [
                                                      (0, i.jsx)('img', {
                                                          alt: '',
                                                          className: A.actionIcon,
                                                          src: L
                                                      }),
                                                      (0, i.jsx)(u.Text, {
                                                          className: A.actionText,
                                                          variant: 'text-sm/normal',
                                                          children: y.intl.string(y.t['2Gz/j4'])
                                                      })
                                                  ]
                                              })
                                          ]
                                      })
                                  ]
                              })
                            : (0, i.jsx)('div', {
                                  className: A.insightsActions,
                                  children: (0, i.jsxs)('div', {
                                      className: A.insightAction,
                                      children: [
                                          (0, i.jsx)('img', {
                                              alt: '',
                                              className: A.actionIcon,
                                              src: M
                                          }),
                                          (0, i.jsx)(u.Text, {
                                              className: A.actionText,
                                              variant: 'text-sm/normal',
                                              children: y.intl.format(y.t['3i3mAg'], {
                                                  insightsHook: (e, n) =>
                                                      (0, i.jsx)(
                                                          p.Z,
                                                          {
                                                              onClick: () => H(t),
                                                              className: A.link,
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
                (0, i.jsx)('div', { className: A.divider }),
                (0, i.jsx)(u.Heading, {
                    variant: 'heading-md/semibold',
                    className: A.insightsTitle,
                    children: y.intl.string(y.t['0wWfUF'])
                })
            ]
        })
    );
}
t.Z = () => {
    let e = (0, a.e7)([S.Z], () => S.Z.getGuildId()),
        t = (0, a.e7)([C.Z], () => C.Z.getMemberCount(e)),
        n = (0, a.e7)([v.Z], () => v.Z.getGuild(e)),
        l = (0, a.e7)([f.default], () => f.default.locale),
        { analytics: s, errorCode: o } = (0, a.cj)([b.Z], () => ({
            analytics: null != e ? b.Z.getOverviewAnalytics(e) : null,
            errorCode: b.Z.getError()
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
                  className: A.__invalid_guildAnalyticsOverviewWrapper,
                  children: (0, i.jsxs)('div', {
                      className: A.overviewData,
                      children: [
                          (0, i.jsx)(h.Z, {
                              title: y.intl.string(y.t.i0Nora),
                              tooltipText: y.intl.string(y.t.KiRbLC),
                              ...G(s.visitors, s.visitorsChange, l)
                          }),
                          (0, i.jsx)(h.Z, {
                              title: y.intl.string(y.t.DDAHdX),
                              tooltipText: y.intl.string(y.t.HxWUkZ),
                              ...G(s.communicators, s.communicatorsChange, l)
                          }),
                          (0, i.jsx)(h.Z, {
                              title: y.intl.string(y.t.hYeOqK),
                              ...G(s.newMembers, s.newMembersChange, l)
                          }),
                          (0, i.jsx)(h.Z, {
                              title: y.intl.string(y.t.jj7OPz),
                              tooltipText: y.intl.string(y.t.MQCsl5),
                              ...G(s.pctRetained, s.pctRetainedChange, l, !0)
                          })
                      ]
                  })
              })
            : null;
    return (0, i.jsxs)(u.FormSection, {
        tag: u.FormTitleTags.H1,
        title: y.intl.string(y.t['0wWfUF']),
        children: [
            (0, i.jsx)(u.FormText, {
                type: u.FormTextTypes.DESCRIPTION,
                children: y.intl.format(y.t.NIZ60d, {})
            }),
            F(o, d),
            null != e ? (0, i.jsx)(W, { guildId: e }) : null,
            (0, i.jsxs)('div', {
                className: A.developerPortalCtaWrapper,
                children: [
                    (0, i.jsx)('div', { className: A.placeholderImage }),
                    (0, i.jsx)(u.Text, {
                        className: A.developerPortalCtaText,
                        variant: 'text-sm/normal',
                        children: y.intl.string(y.t.A5vsws)
                    }),
                    (0, i.jsx)(z, {})
                ]
            }),
            c
                ? (0, i.jsx)('div', {
                      className: A.streamerMode,
                      children: (0, i.jsx)(m.Z, {})
                  })
                : g
        ]
    });
};

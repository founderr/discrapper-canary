var n = i(200651),
    a = i(192379),
    l = i(286379),
    o = i(692547),
    s = i(481060),
    r = i(442837),
    c = i(797614),
    d = i(706454),
    u = i(626135),
    m = i(219230),
    h = i(531441),
    p = i(236289),
    x = i(788080),
    f = i(451284),
    g = i(613734),
    _ = i(846488),
    v = i(384725),
    A = i(853178),
    E = i(97568),
    T = i(800530),
    C = i(981631),
    j = i(388032),
    N = i(729779);
let y = (e) => {
        let { classificationTypeText: t, guildMetadata: i } = e,
            l = (0, m.B)('classification_detail'),
            o = a.useMemo(() => {
                let e = {
                    classification_type: t,
                    classificationHook: (e, t) => (0, n.jsx)('strong', { children: e }, t)
                };
                return l && null != i
                    ? (null == i ? void 0 : i.member_type) === h.wO.OWNER
                        ? j.intl.format(j.t.X1ngSU, {
                              ...e,
                              guildName: null == i ? void 0 : i.name
                          })
                        : j.intl.format(j.t.rmpEPD, {
                              ...e,
                              guildName: null == i ? void 0 : i.name
                          })
                    : j.intl.format(j.t.HpvELi, e);
            }, [t, i, l]);
        return (0, n.jsx)('div', {
            className: N.classificationHeader,
            children: (0, n.jsx)(s.Heading, {
                variant: 'heading-xl/normal',
                children: o
            })
        });
    },
    S = (e) => {
        let { actions: t, classificationExpiration: i } = e,
            a = (0, r.e7)([d.default], () => d.default.locale);
        return 0 === t.filter((e) => e.descriptions.length > 0).length && null == i
            ? null
            : (0, n.jsxs)('div', {
                  className: N.classificationActionsTakenContainer,
                  children: [
                      (0, n.jsx)(s.Text, {
                          variant: 'eyebrow',
                          color: 'text-muted',
                          children: j.intl.string(j.t.O2nYk5)
                      }),
                      (0, n.jsxs)('ul', {
                          className: N.classificationActionsTakenList,
                          children: [
                              t.map((e) => (0, n.jsx)(I, { action: e }, e.id)),
                              null != i
                                  ? (0, n.jsx)(
                                        'li',
                                        {
                                            className: N.classificationActionsTakenRow,
                                            children: (0, n.jsx)(s.Text, {
                                                tag: 'span',
                                                variant: 'heading-md/normal',
                                                color: 'text-normal',
                                                children: j.intl.format(j.t.TByIjY, { expirationDate: i.toLocaleDateString(a, { dateStyle: 'medium' }) })
                                            })
                                        },
                                        'expiration'
                                    )
                                  : null
                          ]
                      })
                  ]
              });
    },
    I = (e) => {
        let { action: t } = e;
        return (0, n.jsx)(n.Fragment, {
            children: t.descriptions.map((e, t) =>
                (0, n.jsx)(
                    'li',
                    {
                        className: N.classificationActionsTakenRow,
                        children: (0, n.jsx)(s.Text, {
                            tag: 'span',
                            variant: 'heading-md/normal',
                            color: 'text-normal',
                            children: e
                        })
                    },
                    t
                )
            )
        });
    },
    L = (e) => {
        let { classificationTypeText: t, policyExplainerLink: i } = e;
        return (0, n.jsxs)(s.Anchor, {
            href: i,
            className: N.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
                (0, n.jsx)('div', {
                    className: N.classificationPolicyCardIcon,
                    children: (0, n.jsx)(s.ShieldIcon, {
                        size: 'md',
                        color: o.Z.colors.FOCUS_PRIMARY
                    })
                }),
                (0, n.jsx)('div', {
                    className: N.classificationPolicyDescriptionContainer,
                    children: (0, n.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: j.intl.format(j.t.zxUdpq, { classificationDescription: t })
                    })
                }),
                (0, n.jsx)('div', {
                    className: N.classificationPolicyLinkIcon,
                    children: (0, n.jsx)(s.ChevronSmallRightIcon, {
                        size: 'md',
                        color: o.Z.colors.INTERACTIVE_NORMAL
                    })
                })
            ]
        });
    },
    w = () =>
        (0, n.jsx)(s.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: j.intl.string(j.t['I2H0/P'])
        }),
    P = (e) =>
        (0, n.jsx)(s.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: j.intl.format(j.t.IFxUaW, {
                letUsKnowHook: (t, i) =>
                    (0, n.jsx)(
                        s.Anchor,
                        {
                            href: e.isAppealEligible ? void 0 : e.appealLink,
                            onClick: e.letUsKnowClick,
                            children: t
                        },
                        i
                    )
            })
        }),
    U = (e) =>
        (0, n.jsx)('div', {
            className: N.classificationLetUsKnowContainer,
            children: e.hasBeenAppealed
                ? (0, n.jsx)(w, {})
                : (0, n.jsx)(P, {
                      appealLink: T.sQ.APPEALS_LINK,
                      letUsKnowClick: e.onLetUsKnowClick,
                      isAppealEligible: e.isAppealEligible
                  })
        }),
    k = (e) => {
        let { tosLink: t, communityGuidelinesLink: i, classificationTypeText: a, policyExplainerLink: l, appealComponent: o } = e;
        return (0, n.jsxs)('div', {
            className: N.classificationActionExplanationContainer,
            children: [
                (0, n.jsx)(s.Text, {
                    variant: 'eyebrow',
                    color: 'text-muted',
                    children: j.intl.string(j.t['977ien'])
                }),
                (0, n.jsx)(s.Text, {
                    className: N.guidelinesExplanation,
                    variant: 'text-sm/normal',
                    children: j.intl.format(j.t['1Z/+aG'], {
                        tosLink: t,
                        communityGuidelinesLink: i
                    })
                }),
                (0, n.jsx)(L, {
                    classificationTypeText: a,
                    policyExplainerLink: l
                }),
                o
            ]
        });
    };
t.Z = (e) => {
    var t;
    let { classificationId: i, source: o, onError: s, onClose: d } = e,
        { classification: m, classificationRequestState: j, isAppealEligible: I, isDsaEligible: L, violationType: w } = (0, g.YG)(i),
        P = (0, r.e7)([p.Z], () => p.Z.getAppealEligibility()),
        Z = (0, f.P)(),
        M = null != m && null != m.flagged_content && m.flagged_content.length > 0,
        O = (0, _.e)(),
        D = !!(null == m ? void 0 : m.is_coppa) && P.includes(h.tG.AGE_VERIFY_ELIGIBLE);
    return (a.useEffect(() => {
        O &&
            u.default.track(C.rMx.SAFETY_HUB_ACTION, {
                action: T.n0.ViewViolationDetail,
                account_standing: Z.state,
                classification_ids: [Number(i)],
                source: o,
                is_violative_content_shown: M,
                is_dsa_eligible: L,
                violation_type: w
            });
    }, [O]),
    null == m && j === h.OY.FAILED)
        ? (s(), null)
        : null == m
          ? null
          : (0, n.jsxs)('div', {
                className: N.classificationContainer,
                children: [
                    (0, n.jsx)(y, {
                        classificationTypeText: m.description,
                        guildMetadata: null == m ? void 0 : m.guild_metadata
                    }),
                    (0, n.jsx)(E.s, { flaggedContent: null !== (t = m.flagged_content) && void 0 !== t ? t : [] }),
                    (0, n.jsx)(S, {
                        actions: m.actions,
                        classificationExpiration: (0, x.Pu)(m)
                    }),
                    (0, n.jsx)(k, {
                        classificationTypeText: m.description,
                        tosLink: T.sQ.TOS_LINK,
                        communityGuidelinesLink: T.sQ.COMMUNITY_GUIDELINES,
                        policyExplainerLink: m.explainer_link,
                        appealComponent: (0, n.jsx)(U, {
                            hasBeenAppealed: null != m.appeal_status,
                            onLetUsKnowClick: () => {
                                u.default.track(C.rMx.SAFETY_HUB_ACTION, {
                                    action: T.n0.ClickLetUsKnow,
                                    account_standing: Z.state,
                                    classification_ids: [Number(i)],
                                    source: o,
                                    is_violative_content_shown: M,
                                    is_dsa_eligible: L,
                                    violation_type: w
                                }),
                                    D ? A.Z.open(d) : I && (c.Z.increment({ name: l.V.APPEAL_INGESTION_VIEW }), v.Z.open(i));
                            },
                            isAppealEligible: I || D
                        })
                    })
                ]
            });
};

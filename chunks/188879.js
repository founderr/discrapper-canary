var n = t(200651),
    a = t(192379),
    l = t(286379),
    o = t(692547),
    s = t(481060),
    r = t(442837),
    c = t(797614),
    d = t(706454),
    u = t(626135),
    m = t(219230),
    h = t(531441),
    p = t(236289),
    x = t(788080),
    f = t(451284),
    g = t(613734),
    v = t(846488),
    _ = t(384725),
    A = t(853178),
    E = t(97568),
    C = t(800530),
    j = t(981631),
    T = t(388032),
    N = t(729779);
let y = (e) => {
        let { classificationTypeText: i, guildMetadata: t } = e,
            l = (0, m.B)('classification_detail'),
            o = a.useMemo(() => {
                let e = {
                    classification_type: i,
                    classificationHook: (e, i) => (0, n.jsx)('strong', { children: e }, i)
                };
                return l && null != t
                    ? (null == t ? void 0 : t.member_type) === h.wO.OWNER
                        ? T.intl.format(T.t.X1ngSU, {
                              ...e,
                              guildName: null == t ? void 0 : t.name
                          })
                        : T.intl.format(T.t.rmpEPD, {
                              ...e,
                              guildName: null == t ? void 0 : t.name
                          })
                    : T.intl.format(T.t.HpvELi, e);
            }, [i, t, l]);
        return (0, n.jsx)('div', {
            className: N.classificationHeader,
            children: (0, n.jsx)(s.Heading, {
                variant: 'heading-xl/normal',
                children: o
            })
        });
    },
    S = (e) => {
        let { actions: i, classificationExpiration: t } = e,
            a = (0, r.e7)([d.default], () => d.default.locale);
        return 0 === i.filter((e) => e.descriptions.length > 0).length && null == t
            ? null
            : (0, n.jsxs)('div', {
                  className: N.classificationActionsTakenContainer,
                  children: [
                      (0, n.jsx)(s.Text, {
                          variant: 'eyebrow',
                          color: 'text-muted',
                          children: T.intl.string(T.t.O2nYk5)
                      }),
                      (0, n.jsxs)('ul', {
                          className: N.classificationActionsTakenList,
                          children: [
                              i.map((e) => (0, n.jsx)(I, { action: e }, e.id)),
                              null != t
                                  ? (0, n.jsx)(
                                        'li',
                                        {
                                            className: N.classificationActionsTakenRow,
                                            children: (0, n.jsx)(s.Text, {
                                                tag: 'span',
                                                variant: 'heading-md/normal',
                                                color: 'text-normal',
                                                children: T.intl.format(T.t.TByIjY, { expirationDate: t.toLocaleDateString(a, { dateStyle: 'medium' }) })
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
        let { action: i } = e;
        return (0, n.jsx)(n.Fragment, {
            children: i.descriptions.map((e, i) =>
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
                    i
                )
            )
        });
    },
    L = (e) => {
        let { classificationTypeText: i, policyExplainerLink: t } = e;
        return (0, n.jsxs)(s.Anchor, {
            href: t,
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
                        children: T.intl.format(T.t.zxUdpq, { classificationDescription: i })
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
            children: T.intl.string(T.t['I2H0/P'])
        }),
    k = (e) =>
        (0, n.jsx)(s.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: T.intl.format(T.t.IFxUaW, {
                letUsKnowHook: (i, t) =>
                    (0, n.jsx)(
                        s.Anchor,
                        {
                            href: e.isAppealEligible ? void 0 : e.appealLink,
                            onClick: e.letUsKnowClick,
                            children: i
                        },
                        t
                    )
            })
        }),
    P = (e) =>
        (0, n.jsx)('div', {
            className: N.classificationLetUsKnowContainer,
            children: e.hasBeenAppealed
                ? (0, n.jsx)(w, {})
                : (0, n.jsx)(k, {
                      appealLink: C.sQ.APPEALS_LINK,
                      letUsKnowClick: e.onLetUsKnowClick,
                      isAppealEligible: e.isAppealEligible
                  })
        }),
    U = (e) => {
        let { tosLink: i, communityGuidelinesLink: t, classificationTypeText: a, policyExplainerLink: l, appealComponent: o } = e;
        return (0, n.jsxs)('div', {
            className: N.classificationActionExplanationContainer,
            children: [
                (0, n.jsx)(s.Text, {
                    variant: 'eyebrow',
                    color: 'text-muted',
                    children: T.intl.string(T.t['977ien'])
                }),
                (0, n.jsx)(s.Text, {
                    className: N.guidelinesExplanation,
                    variant: 'text-sm/normal',
                    children: T.intl.format(T.t['1Z/+aG'], {
                        tosLink: i,
                        communityGuidelinesLink: t
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
i.Z = (e) => {
    var i;
    let { classificationId: t, source: o, onError: s, onClose: d } = e,
        { classification: m, classificationRequestState: T, isAppealEligible: I, isDsaEligible: L, violationType: w } = (0, g.YG)(t),
        k = (0, r.e7)([p.Z], () => p.Z.getAppealEligibility()),
        Z = (0, f.P)(),
        M = null != m && null != m.flagged_content && m.flagged_content.length > 0,
        O = (0, v.e)(),
        b = !!(null == m ? void 0 : m.is_coppa) && k.includes(h.tG.AGE_VERIFY_ELIGIBLE);
    return (a.useEffect(() => {
        O &&
            u.default.track(j.rMx.SAFETY_HUB_ACTION, {
                action: C.n0.ViewViolationDetail,
                account_standing: Z.state,
                classification_ids: [Number(t)],
                source: o,
                is_violative_content_shown: M,
                is_dsa_eligible: L,
                violation_type: w
            });
    }, [O]),
    null == m && T === h.OY.FAILED)
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
                    (0, n.jsx)(E.s, { flaggedContent: null !== (i = m.flagged_content) && void 0 !== i ? i : [] }),
                    (0, n.jsx)(S, {
                        actions: m.actions,
                        classificationExpiration: (0, x.Pu)(m)
                    }),
                    (0, n.jsx)(U, {
                        classificationTypeText: m.description,
                        tosLink: C.sQ.TOS_LINK,
                        communityGuidelinesLink: C.sQ.COMMUNITY_GUIDELINES,
                        policyExplainerLink: m.explainer_link,
                        appealComponent: (0, n.jsx)(P, {
                            hasBeenAppealed: null != m.appeal_status,
                            onLetUsKnowClick: () => {
                                u.default.track(j.rMx.SAFETY_HUB_ACTION, {
                                    action: C.n0.ClickLetUsKnow,
                                    account_standing: Z.state,
                                    classification_ids: [Number(t)],
                                    source: o,
                                    is_violative_content_shown: M,
                                    is_dsa_eligible: L,
                                    violation_type: w
                                }),
                                    b ? A.Z.open(d) : I && (c.Z.increment({ name: l.V.APPEAL_INGESTION_VIEW }), _.Z.open(t));
                            },
                            isAppealEligible: I || b
                        })
                    })
                ]
            });
};

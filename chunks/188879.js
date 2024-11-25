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
    E = t(853178),
    j = t(97568),
    A = t(800530),
    C = t(981631),
    N = t(388032),
    T = t(729779);
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
                        ? N.intl.format(N.t.X1ngSU, {
                              ...e,
                              guildName: null == t ? void 0 : t.name
                          })
                        : N.intl.format(N.t.rmpEPD, {
                              ...e,
                              guildName: null == t ? void 0 : t.name
                          })
                    : N.intl.format(N.t.HpvELi, e);
            }, [i, t, l]);
        return (0, n.jsx)('div', {
            className: T.classificationHeader,
            children: (0, n.jsx)(s.Heading, {
                variant: 'heading-xl/normal',
                children: o
            })
        });
    },
    I = (e) => {
        let { actions: i, classificationExpiration: t } = e,
            a = (0, r.e7)([d.default], () => d.default.locale);
        return 0 === i.filter((e) => e.descriptions.length > 0).length && null == t
            ? null
            : (0, n.jsxs)('div', {
                  className: T.classificationActionsTakenContainer,
                  children: [
                      (0, n.jsx)(s.Text, {
                          variant: 'eyebrow',
                          color: 'text-muted',
                          children: N.intl.string(N.t.O2nYk5)
                      }),
                      (0, n.jsxs)('ul', {
                          className: T.classificationActionsTakenList,
                          children: [
                              i.map((e) => (0, n.jsx)(S, { action: e }, e.id)),
                              null != t
                                  ? (0, n.jsx)(
                                        'li',
                                        {
                                            className: T.classificationActionsTakenRow,
                                            children: (0, n.jsx)(s.Text, {
                                                tag: 'span',
                                                variant: 'heading-md/normal',
                                                color: 'text-normal',
                                                children: N.intl.format(N.t.TByIjY, { expirationDate: t.toLocaleDateString(a, { dateStyle: 'medium' }) })
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
    S = (e) => {
        let { action: i } = e;
        return (0, n.jsx)(n.Fragment, {
            children: i.descriptions.map((e, i) =>
                (0, n.jsx)(
                    'li',
                    {
                        className: T.classificationActionsTakenRow,
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
            className: T.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
                (0, n.jsx)('div', {
                    className: T.classificationPolicyCardIcon,
                    children: (0, n.jsx)(s.ShieldIcon, {
                        size: 'md',
                        color: o.Z.colors.FOCUS_PRIMARY
                    })
                }),
                (0, n.jsx)('div', {
                    className: T.classificationPolicyDescriptionContainer,
                    children: (0, n.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: N.intl.format(N.t.zxUdpq, { classificationDescription: i })
                    })
                }),
                (0, n.jsx)('div', {
                    className: T.classificationPolicyLinkIcon,
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
            children: N.intl.string(N.t['I2H0/P'])
        }),
    k = (e) =>
        (0, n.jsx)(s.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: N.intl.format(N.t.IFxUaW, {
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
            className: T.classificationLetUsKnowContainer,
            children: e.hasBeenAppealed
                ? (0, n.jsx)(w, {})
                : (0, n.jsx)(k, {
                      appealLink: A.sQ.APPEALS_LINK,
                      letUsKnowClick: e.onLetUsKnowClick,
                      isAppealEligible: e.isAppealEligible
                  })
        }),
    Z = (e) => {
        let { tosLink: i, communityGuidelinesLink: t, classificationTypeText: a, policyExplainerLink: l, appealComponent: o } = e;
        return (0, n.jsxs)('div', {
            className: T.classificationActionExplanationContainer,
            children: [
                (0, n.jsx)(s.Text, {
                    variant: 'eyebrow',
                    color: 'text-muted',
                    children: N.intl.string(N.t['977ien'])
                }),
                (0, n.jsx)(s.Text, {
                    className: T.guidelinesExplanation,
                    variant: 'text-sm/normal',
                    children: N.intl.format(N.t['1Z/+aG'], {
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
    let { classificationId: t, source: o, onError: s } = e,
        { classification: d, classificationRequestState: m, isAppealEligible: N, isDsaEligible: S, violationType: L } = (0, g.YG)(t),
        w = (0, r.e7)([p.Z], () => p.Z.getAppealEligibility()),
        k = (0, f.P)(),
        U = null != d && null != d.flagged_content && d.flagged_content.length > 0,
        O = (0, v.e)();
    return (a.useEffect(() => {
        O &&
            u.default.track(C.rMx.SAFETY_HUB_ACTION, {
                action: A.n0.ViewViolationDetail,
                account_standing: k.state,
                classification_ids: [Number(t)],
                source: o,
                is_violative_content_shown: U,
                is_dsa_eligible: S,
                violation_type: L
            });
    }, [O]),
    null == d && m === h.OY.FAILED)
        ? (s(), null)
        : null == d
          ? null
          : (0, n.jsxs)('div', {
                className: T.classificationContainer,
                children: [
                    (0, n.jsx)(y, {
                        classificationTypeText: d.description,
                        guildMetadata: null == d ? void 0 : d.guild_metadata
                    }),
                    (0, n.jsx)(j.s, { flaggedContent: null !== (i = d.flagged_content) && void 0 !== i ? i : [] }),
                    (0, n.jsx)(I, {
                        actions: d.actions,
                        classificationExpiration: (0, x.Pu)(d)
                    }),
                    (0, n.jsx)(Z, {
                        classificationTypeText: d.description,
                        tosLink: A.sQ.TOS_LINK,
                        communityGuidelinesLink: A.sQ.COMMUNITY_GUIDELINES,
                        policyExplainerLink: d.explainer_link,
                        appealComponent: (0, n.jsx)(P, {
                            hasBeenAppealed: null != d.appeal_status,
                            onLetUsKnowClick: () => {
                                u.default.track(C.rMx.SAFETY_HUB_ACTION, {
                                    action: A.n0.ClickLetUsKnow,
                                    account_standing: k.state,
                                    classification_ids: [Number(t)],
                                    source: o,
                                    is_violative_content_shown: U,
                                    is_dsa_eligible: S,
                                    violation_type: L
                                }),
                                    (null == d ? void 0 : d.is_coppa) && w.includes(h.tG.AGE_VERIFY_ELIGIBLE) ? E.Z.open() : N && (c.Z.increment({ name: l.V.APPEAL_INGESTION_VIEW }), _.Z.open(t));
                            },
                            isAppealEligible: N
                        })
                    })
                ]
            });
};

var n = t(200651),
    a = t(192379),
    l = t(286379),
    o = t(692547),
    s = t(481060),
    r = t(442837),
    c = t(797614),
    d = t(706454),
    m = t(626135),
    u = t(219230),
    h = t(531441),
    p = t(788080),
    x = t(451284),
    f = t(613734),
    g = t(846488),
    v = t(384725),
    j = t(97568),
    C = t(800530),
    _ = t(981631),
    N = t(388032),
    A = t(300106);
let E = (e) => {
        let { classificationTypeText: i, guildMetadata: t } = e,
            l = (0, u.B)('classification_detail'),
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
            className: A.classificationHeader,
            children: (0, n.jsx)(s.Heading, {
                variant: 'heading-xl/normal',
                children: o
            })
        });
    },
    y = (e) => {
        let { actions: i, classificationExpiration: t } = e,
            a = (0, r.e7)([d.default], () => d.default.locale);
        return 0 === i.filter((e) => e.descriptions.length > 0).length && null == t
            ? null
            : (0, n.jsxs)('div', {
                  className: A.classificationActionsTakenContainer,
                  children: [
                      (0, n.jsx)(s.Text, {
                          variant: 'eyebrow',
                          color: 'text-muted',
                          children: N.intl.string(N.t.O2nYk5)
                      }),
                      (0, n.jsxs)('ul', {
                          className: A.classificationActionsTakenList,
                          children: [
                              i.map((e) => (0, n.jsx)(T, { action: e }, e.id)),
                              null != t
                                  ? (0, n.jsx)(
                                        'li',
                                        {
                                            className: A.classificationActionsTakenRow,
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
    T = (e) => {
        let { action: i } = e;
        return (0, n.jsx)(n.Fragment, {
            children: i.descriptions.map((e, i) =>
                (0, n.jsx)(
                    'li',
                    {
                        className: A.classificationActionsTakenRow,
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
    I = (e) => {
        let { classificationTypeText: i, policyExplainerLink: t } = e;
        return (0, n.jsxs)(s.Anchor, {
            href: t,
            className: A.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
                (0, n.jsx)('div', {
                    className: A.classificationPolicyCardIcon,
                    children: (0, n.jsx)(s.ShieldIcon, {
                        size: 'md',
                        color: o.Z.colors.FOCUS_PRIMARY
                    })
                }),
                (0, n.jsx)('div', {
                    className: A.classificationPolicyDescriptionContainer,
                    children: (0, n.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: N.intl.format(N.t.zxUdpq, { classificationDescription: i })
                    })
                }),
                (0, n.jsx)('div', {
                    className: A.classificationPolicyLinkIcon,
                    children: (0, n.jsx)(s.ChevronSmallRightIcon, {
                        size: 'md',
                        color: o.Z.colors.INTERACTIVE_NORMAL
                    })
                })
            ]
        });
    },
    S = () =>
        (0, n.jsx)(s.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: N.intl.string(N.t['I2H0/P'])
        }),
    w = (e) =>
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
    k = (e) =>
        (0, n.jsx)('div', {
            className: A.classificationLetUsKnowContainer,
            children: e.hasBeenAppealed
                ? (0, n.jsx)(S, {})
                : (0, n.jsx)(w, {
                      appealLink: C.sQ.APPEALS_LINK,
                      letUsKnowClick: e.onLetUsKnowClick,
                      isAppealEligible: e.isAppealEligible
                  })
        }),
    L = (e) => {
        let { tosLink: i, communityGuidelinesLink: t, classificationTypeText: a, policyExplainerLink: l, appealComponent: o } = e;
        return (0, n.jsxs)('div', {
            className: A.classificationActionExplanationContainer,
            children: [
                (0, n.jsx)(s.Text, {
                    variant: 'eyebrow',
                    color: 'text-muted',
                    children: N.intl.string(N.t['977ien'])
                }),
                (0, n.jsx)(s.Text, {
                    className: A.guidelinesExplanation,
                    variant: 'text-sm/normal',
                    children: N.intl.format(N.t['1Z/+aG'], {
                        tosLink: i,
                        communityGuidelinesLink: t
                    })
                }),
                (0, n.jsx)(I, {
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
        { classification: r, classificationRequestState: d, isAppealEligible: u, isDsaEligible: N, violationType: T } = (0, f.YG)(t),
        I = (0, x.P)(),
        S = null != r && null != r.flagged_content && r.flagged_content.length > 0,
        w = (0, g.e)();
    return (a.useEffect(() => {
        w &&
            m.default.track(_.rMx.SAFETY_HUB_ACTION, {
                action: C.n0.ViewViolationDetail,
                account_standing: I.state,
                classification_ids: [Number(t)],
                source: o,
                is_violative_content_shown: S,
                is_dsa_eligible: N,
                violation_type: T
            });
    }, [w]),
    null == r && d === h.OY.FAILED)
        ? (s(), null)
        : null == r
          ? null
          : (0, n.jsxs)('div', {
                className: A.classificationContainer,
                children: [
                    (0, n.jsx)(E, {
                        classificationTypeText: r.description,
                        guildMetadata: null == r ? void 0 : r.guild_metadata
                    }),
                    (0, n.jsx)(j.s, { flaggedContent: null !== (i = r.flagged_content) && void 0 !== i ? i : [] }),
                    (0, n.jsx)(y, {
                        actions: r.actions,
                        classificationExpiration: (0, p.Pu)(r)
                    }),
                    (0, n.jsx)(L, {
                        classificationTypeText: r.description,
                        tosLink: C.sQ.TOS_LINK,
                        communityGuidelinesLink: C.sQ.COMMUNITY_GUIDELINES,
                        policyExplainerLink: r.explainer_link,
                        appealComponent: (0, n.jsx)(k, {
                            hasBeenAppealed: null != r.appeal_status,
                            onLetUsKnowClick: () => {
                                m.default.track(_.rMx.SAFETY_HUB_ACTION, {
                                    action: C.n0.ClickLetUsKnow,
                                    account_standing: I.state,
                                    classification_ids: [Number(t)],
                                    source: o,
                                    is_violative_content_shown: S,
                                    is_dsa_eligible: N,
                                    violation_type: T
                                }),
                                    u && (c.Z.increment({ name: l.V.APPEAL_INGESTION_VIEW }), v.Z.open(t));
                            },
                            isAppealEligible: u
                        })
                    })
                ]
            });
};

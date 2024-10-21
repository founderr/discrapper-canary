var t = n(200651),
    a = n(192379),
    l = n(286379),
    s = n(692547),
    o = n(481060),
    r = n(442837),
    c = n(797614),
    d = n(706454),
    m = n(626135),
    u = n(219230),
    _ = n(531441),
    h = n(788080),
    A = n(451284),
    p = n(613734),
    I = n(846488),
    x = n(384725),
    T = n(97568),
    E = n(800530),
    C = n(981631),
    g = n(689938),
    f = n(300106);
let S = (e) => {
        let { classificationTypeText: i, guildMetadata: n } = e,
            l = (0, u.B)('classification_detail'),
            s = a.useMemo(() => {
                let e = {
                    classification_type: i,
                    classificationHook: (e, i) => (0, t.jsx)('strong', { children: e }, i)
                };
                return l && null != n
                    ? (null == n ? void 0 : n.member_type) === _.wO.OWNER
                        ? g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD.format({
                              ...e,
                              guildName: null == n ? void 0 : n.name
                          })
                        : g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD_PRESENCE.format({
                              ...e,
                              guildName: null == n ? void 0 : n.name
                          })
                    : g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V3.format(e);
            }, [i, n, l]);
        return (0, t.jsx)('div', {
            className: f.classificationHeader,
            children: (0, t.jsx)(o.Heading, {
                variant: 'heading-xl/normal',
                children: s
            })
        });
    },
    v = (e) => {
        let { actions: i, classificationExpiration: n } = e,
            a = (0, r.e7)([d.default], () => d.default.locale);
        return 0 === i.filter((e) => e.descriptions.length > 0).length && null == n
            ? null
            : (0, t.jsxs)('div', {
                  className: f.classificationActionsTakenContainer,
                  children: [
                      (0, t.jsx)(o.Text, {
                          variant: 'eyebrow',
                          color: 'text-muted',
                          children: g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER_V2
                      }),
                      (0, t.jsxs)('ul', {
                          className: f.classificationActionsTakenList,
                          children: [
                              i.map((e) => (0, t.jsx)(N, { action: e }, e.id)),
                              null != n
                                  ? (0, t.jsx)(
                                        'li',
                                        {
                                            className: f.classificationActionsTakenRow,
                                            children: (0, t.jsx)(o.Text, {
                                                tag: 'span',
                                                variant: 'heading-md/normal',
                                                color: 'text-normal',
                                                children: g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_VIOLATION_ACCOUNT_STATUS.format({ expirationDate: n.toLocaleDateString(a, { dateStyle: 'medium' }) })
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
    N = (e) => {
        let { action: i } = e;
        return (0, t.jsx)(t.Fragment, {
            children: i.descriptions.map((e, i) =>
                (0, t.jsx)(
                    'li',
                    {
                        className: f.classificationActionsTakenRow,
                        children: (0, t.jsx)(o.Text, {
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
        let { classificationTypeText: i, policyExplainerLink: n } = e;
        return (0, t.jsxs)(o.Anchor, {
            href: n,
            className: f.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
                (0, t.jsx)('div', {
                    className: f.classificationPolicyCardIcon,
                    children: (0, t.jsx)(o.ShieldIcon, {
                        size: 'md',
                        color: s.Z.colors.FOCUS_PRIMARY
                    })
                }),
                (0, t.jsx)('div', {
                    className: f.classificationPolicyDescriptionContainer,
                    children: (0, t.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER_V2.format({ classificationDescription: i })
                    })
                }),
                (0, t.jsx)('div', {
                    className: f.classificationPolicyLinkIcon,
                    children: (0, t.jsx)(o.ChevronSmallRightIcon, {
                        size: 'md',
                        color: s.Z.colors.INTERACTIVE_NORMAL
                    })
                })
            ]
        });
    },
    j = () =>
        (0, t.jsx)(o.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_APPEAL_STATUS
        }),
    y = (e) =>
        (0, t.jsx)(o.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format({
                letUsKnowHook: (i, n) =>
                    (0, t.jsx)(
                        o.Anchor,
                        {
                            href: e.isAppealEligible ? void 0 : e.appealLink,
                            onClick: e.letUsKnowClick,
                            children: i
                        },
                        n
                    )
            })
        }),
    O = (e) =>
        (0, t.jsx)('div', {
            className: f.classificationLetUsKnowContainer,
            children: e.hasBeenAppealed
                ? (0, t.jsx)(j, {})
                : (0, t.jsx)(y, {
                      appealLink: E.sQ.APPEALS_LINK,
                      letUsKnowClick: e.onLetUsKnowClick,
                      isAppealEligible: e.isAppealEligible
                  })
        }),
    D = (e) => {
        let { tosLink: i, communityGuidelinesLink: n, classificationTypeText: a, policyExplainerLink: l, appealComponent: s } = e;
        return (0, t.jsxs)('div', {
            className: f.classificationActionExplanationContainer,
            children: [
                (0, t.jsx)(o.Text, {
                    variant: 'eyebrow',
                    color: 'text-muted',
                    children: g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_HEADER
                }),
                (0, t.jsx)(o.Text, {
                    className: f.guidelinesExplanation,
                    variant: 'text-sm/normal',
                    children: g.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_DESCRIPTION.format({
                        tosLink: i,
                        communityGuidelinesLink: n
                    })
                }),
                (0, t.jsx)(L, {
                    classificationTypeText: a,
                    policyExplainerLink: l
                }),
                s
            ]
        });
    };
i.Z = (e) => {
    var i;
    let { classificationId: n, source: s, onError: o } = e,
        { classification: r, classificationRequestState: d, isAppealEligible: u, isDsaEligible: g, violationType: N } = (0, p.YG)(n),
        L = (0, A.P)(),
        j = null != r && null != r.flagged_content && r.flagged_content.length > 0,
        y = (0, I.e)();
    return (a.useEffect(() => {
        y &&
            m.default.track(C.rMx.SAFETY_HUB_ACTION, {
                action: E.n0.ViewViolationDetail,
                account_standing: L.state,
                classification_ids: [Number(n)],
                source: s,
                is_violative_content_shown: j,
                is_dsa_eligible: g,
                violation_type: N
            });
    }, [y]),
    null == r && d === _.OY.FAILED)
        ? (o(), null)
        : null == r
          ? null
          : (0, t.jsxs)('div', {
                className: f.classificationContainer,
                children: [
                    (0, t.jsx)(S, {
                        classificationTypeText: r.description,
                        guildMetadata: null == r ? void 0 : r.guild_metadata
                    }),
                    (0, t.jsx)(T.s, { flaggedContent: null !== (i = r.flagged_content) && void 0 !== i ? i : [] }),
                    (0, t.jsx)(v, {
                        actions: r.actions,
                        classificationExpiration: (0, h.Pu)(r)
                    }),
                    (0, t.jsx)(D, {
                        classificationTypeText: r.description,
                        tosLink: E.sQ.TOS_LINK,
                        communityGuidelinesLink: E.sQ.COMMUNITY_GUIDELINES,
                        policyExplainerLink: r.explainer_link,
                        appealComponent: (0, t.jsx)(O, {
                            hasBeenAppealed: null != r.appeal_status,
                            onLetUsKnowClick: () => {
                                m.default.track(C.rMx.SAFETY_HUB_ACTION, {
                                    action: E.n0.ClickLetUsKnow,
                                    account_standing: L.state,
                                    classification_ids: [Number(n)],
                                    source: s,
                                    is_violative_content_shown: j,
                                    is_dsa_eligible: g,
                                    violation_type: N
                                }),
                                    u && (c.Z.increment({ name: l.V.APPEAL_INGESTION_VIEW }), x.Z.open(n));
                            },
                            isAppealEligible: u
                        })
                    })
                ]
            });
};

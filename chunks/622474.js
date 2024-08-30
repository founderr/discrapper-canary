t(47120), t(653041);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(913527),
    l = t.n(o),
    c = t(374470),
    d = t(399606),
    u = t(481060),
    _ = t(570140),
    E = t(37234),
    T = t(960359),
    I = t(853197),
    S = t(430492),
    N = t(688465),
    m = t(594174),
    C = t(55935),
    g = t(288836),
    A = t(689938),
    h = t(161368);
let O = 'YYYY-MM-DD HH:mm';
function p(e) {
    let { drop: s, enrolled: t, completed: i } = e,
        r = a.useRef(null),
        o = (e) => {
            let s = e.target;
            (0, c.k)(s, HTMLAnchorElement) && (0, E.xf)();
        };
    (0, a.useEffect)(() => {
        let e = r.current;
        return (
            null != e && e.addEventListener('click', o),
            () => {
                null != e && e.removeEventListener('click', o);
            }
        );
    }, []);
    let { title: d, endDate: S, dropsQuestId: N, assets: m, articleUrl: C } = s,
        g = (0, I.EW)(N);
    if (null == g) return null;
    let O = () => {
        (0, T.RJ)(N).then(() => {
            _.Z.wait(async () => {
                await (0, T.R5)();
            });
        });
    };
    return (0, n.jsxs)('div', {
        className: h.dropContainer,
        children: [
            (0, n.jsx)('div', {
                className: h.dropCard,
                children: (0, n.jsxs)('div', {
                    className: h.mainPromotionCardContainer,
                    children: [
                        (0, n.jsxs)('div', {
                            className: h.promotionCardLeftContainer,
                            children: [
                                (0, n.jsx)('div', {
                                    className: h.promotionIcon,
                                    children: (0, n.jsx)('img', {
                                        alt: '',
                                        src: m.iconSrc,
                                        className: h.promotionIconImage
                                    })
                                }),
                                (0, n.jsxs)('div', {
                                    children: [
                                        (0, n.jsx)(u.Heading, {
                                            variant: 'heading-md/semibold',
                                            children: d
                                        }),
                                        (0, n.jsx)(u.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-normal',
                                            className: h.availableUntil,
                                            children: A.Z.Messages.DROPS_CARD_REDEEM_UNTIL.format({ endDate: l()(S, 'YYYY-MM-DD HH:mm').format('MMMM Do, YYYY') })
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, n.jsx)(u.Tooltip, {
                            text: t && !i ? A.Z.Messages.DROPS_GIFT_INVENTORY_REDEMPTION_TOOLTIP : null,
                            tooltipContentClassName: h.redeemTooltipContent,
                            children: (e) =>
                                (0, n.jsx)(u.Button, {
                                    className: h.promotionCardButton,
                                    color: u.Button.Colors.BRAND,
                                    size: u.Button.Sizes.SMALL,
                                    onClick: O,
                                    disabled: t && !i,
                                    ...e,
                                    children: t ? A.Z.Messages.REDEEM : A.Z.Messages.DROPS_GIFT_INVENTORY_ENROLL
                                })
                        })
                    ]
                })
            }),
            (0, n.jsxs)('div', {
                className: h.dropCriteria,
                children: [
                    (0, n.jsx)('img', {
                        alt: '',
                        src: m.rewardSrc,
                        className: h.dropRewardImage
                    }),
                    (0, n.jsx)('div', {
                        ref: r,
                        children: (0, n.jsx)(u.Text, {
                            color: 'text-muted',
                            variant: 'text-sm/normal',
                            className: h.dropCriteriaText,
                            children: g.messages.giftInfo()
                        })
                    }),
                    (0, n.jsx)(u.Text, {
                        color: 'text-muted',
                        variant: 'text-sm/normal',
                        className: h.dropLearnMore,
                        children: A.Z.Messages.DROPS_LEARN_MORE.format({ faqUrl: C })
                    })
                ]
            })
        ]
    });
}
function x(e) {
    let { drop: s, code: t, platform: i } = e,
        [o, c] = a.useState(!1),
        d = void 0 !== t,
        _ = (0, C.vc)(l()(s.endDate), 'LL'),
        E = A.Z.Messages.DROPS_CARD_REDEEM_UNTIL.format({ endDate: _ }),
        T = d ? A.Z.Messages.OUTBOUND_PROMOTION_SEE_CODE : A.Z.Messages.PROMOTION_CARD_ACTION_CLAIM,
        I = a.useCallback(() => c(!1), []);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)('div', {
                className: r()(h.skuCard, h.promotionCard),
                children: (0, n.jsxs)('div', {
                    className: h.mainPromotionCardContainer,
                    children: [
                        (0, n.jsxs)('div', {
                            className: h.promotionCardLeftContainer,
                            children: [
                                (0, n.jsx)('div', {
                                    className: h.promotionIcon,
                                    children: (0, n.jsx)('img', {
                                        alt: '',
                                        src: s.assets.iconSrc,
                                        className: h.promotionIconImage
                                    })
                                }),
                                (0, n.jsxs)('div', {
                                    children: [
                                        (0, n.jsx)(u.Heading, {
                                            variant: 'heading-md/semibold',
                                            children: s.title
                                        }),
                                        (0, n.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-normal',
                                            className: h.__invalid_promotionText,
                                            children: E
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, n.jsx)(u.Button, {
                            color: u.Button.Colors.BRAND,
                            size: u.Button.Sizes.SMALL,
                            onClick: () => c(!0),
                            children: T
                        })
                    ]
                })
            }),
            o &&
                (0, n.jsx)(u.Modal, {
                    renderModal: (e) =>
                        (0, n.jsx)(S.ZP, {
                            ...e,
                            onClose: I,
                            code: t,
                            drop: s,
                            platform: i
                        }),
                    onCloseRequest: I
                })
        ]
    });
}
s.Z = function (e) {
    var s;
    let { dropsOptedOut: t, dropsStatuses: a } = e,
        i = [],
        r = [],
        o = (0, d.e7)([m.default], () => m.default.getCurrentUser()),
        c = !1;
    if (null == a) return null;
    for (let e of Object.keys(a)) {
        let s = (0, I.EW)(e);
        if (null == s) continue;
        let t = a[e],
            n = (0, I.x8)(e);
        if (null == n) continue;
        let d = (0, I.Xt)(n),
            u = t.eligible && d,
            _ = (0, I.A5)(n);
        if (null == _) continue;
        u && _.trackExposure({ location: 'ENTITLEMENT_GIFTS' });
        let E = !!((null == o ? void 0 : o.isStaff()) && _.getCurrentConfig({ location: '076035_2' }, { autoTrackExposure: !1 }).showUnenroll);
        if (!_.getCurrentConfig({ location: '076035_3' }, { autoTrackExposure: !1 }).dropsEnabled) continue;
        c = !0;
        let T = l()(s.endDate, O),
            S = l()();
        (u && null == t.completed_at) || (null != t.enrolled_at && null == t.completed_at && t.eligible)
            ? S < T &&
              i.push({
                  dropsQuestId: e,
                  dropsStatus: t,
                  showUnenroll: E,
                  experiment: _
              })
            : (null != t.code || null != t.completed_at) &&
              S < l()(s.finalClaimDate, O) &&
              r.push({
                  dropsQuestId: e,
                  dropsStatus: t,
                  showUnenroll: E,
                  experiment: _
              });
    }
    let _ = (0, n.jsxs)('div', {
        className: h.dropsHeaderContainer,
        children: [
            (0, n.jsx)(u.Heading, {
                variant: 'heading-md/semibold',
                children: A.Z.Messages.DROPS_GIFT_INVENTORY_TITLE
            }),
            (0, n.jsx)(N.Z, { className: h.betaTagIcon })
        ]
    });
    return c && 0 === i.length && 0 === r.length && t
        ? (0, n.jsxs)(u.FormSection, {
              children: [
                  _,
                  (0, n.jsx)(u.FormDivider, { className: h.divider }),
                  (0, n.jsx)('div', {
                      className: h.dropsHelpText,
                      children: A.Z.Messages.DROPS_READ_BLOG_TO_ENABLE.format({ blogURL: g.n4 })
                  })
              ]
          })
        : 0 === i.length && 0 === r.length
          ? null
          : (0, n.jsxs)(u.FormSection, {
                children: [
                    _,
                    (0, n.jsx)(u.FormDivider, { className: h.divider }),
                    i.map((e) => {
                        let s = (0, I.EW)(e.dropsQuestId),
                            t = null != e.dropsStatus.enrolled_at,
                            a = null != e.dropsStatus.completed_at;
                        return null != s
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(
                                          p,
                                          {
                                              drop: { ...s },
                                              enrolled: t,
                                              completed: a
                                          },
                                          s.dropsQuestId
                                      ),
                                      e.showUnenroll &&
                                          (0, n.jsx)(u.Button, {
                                              size: u.Button.Sizes.SMALL,
                                              onClick: () => (0, T.VT)(e.dropsQuestId),
                                              children: 'UNENROLL'
                                          })
                                  ]
                              })
                            : null;
                    }),
                    r.map((e) => {
                        var s, t;
                        let a = (0, I.EW)(e.dropsQuestId);
                        return null != a
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(
                                          x,
                                          {
                                              drop: a,
                                              code: null !== (s = e.dropsStatus.code) && void 0 !== s ? s : void 0,
                                              platform: null !== (t = e.dropsStatus.platform) && void 0 !== t ? t : void 0
                                          },
                                          e.dropsQuestId
                                      ),
                                      e.showUnenroll &&
                                          (0, n.jsx)(u.Button, {
                                              size: u.Button.Sizes.SMALL,
                                              onClick: () => (0, T.VT)(e.dropsQuestId),
                                              children: 'UNENROLL'
                                          })
                                  ]
                              })
                            : null;
                    }),
                    'string' == typeof (null == o ? void 0 : o.id) && r.length > 0
                        ? (0, n.jsx)('div', {
                              className: h.feedback,
                              children: A.Z.Messages.DROPS_REQUEST_FEEDBACK_SUCCESS.format({ feedbackURL: 'https://survey.alchemer.com/s3/7043098/Discord-Drops-CSAT?user_id='.concat(null !== (s = null == o ? void 0 : o.id) && void 0 !== s ? s : '') })
                          })
                        : null
                ]
            });
};

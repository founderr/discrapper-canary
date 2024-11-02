t.d(n, {
    Z: function () {
        return N;
    }
}),
    t(653041),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(243814),
    s = t(442837),
    d = t(481060),
    c = t(367907),
    u = t(213459),
    m = t(600164),
    h = t(488915),
    p = t(970731),
    g = t(598077),
    f = t(626135),
    x = t(486199),
    b = t(929507),
    v = t(981631),
    C = t(388032),
    I = t(556208);
function N(e) {
    var n, t, r, N, T, _, j;
    let { name: S, icon: E, imageSrc: Z, iconBackgroundColor: A, iconClassName: y, iconWrapperClassName: R, details: O, integration: L, buttonText: k, buttonDisabled: w, hasNextSection: M, onButtonClick: B, guildId: P, isScrolling: D, canShowMigrationTooltip: U, trailing: G } = e,
        [F, H] = l.useState(!1),
        [W, z] = l.useState(!1);
    let V =
            ((N = k),
            (T = w),
            (_ = M),
            (j = B),
            null == N || null == j
                ? null
                : _
                  ? (0, i.jsxs)(m.Z, {
                        align: m.Z.Align.CENTER,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                children: N
                            }),
                            _
                                ? (0, i.jsx)(d.ChevronSmallRightIcon, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 10,
                                      height: 10,
                                      className: I.caret
                                  })
                                : null
                        ]
                    })
                  : (0, i.jsx)(d.Button, {
                        size: d.Button.Sizes.SMALL,
                        look: _ ? d.Button.Looks.LINK : d.Button.Looks.FILLED,
                        color: _ ? d.Button.Colors.PRIMARY : d.Button.Colors.BRAND,
                        disabled: T,
                        onClick: j,
                        children: N
                    })),
        K = U && !D && !W && void 0 !== P && null != L;
    l.useEffect(() => {
        K &&
            f.default.track(v.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, c.hH)(P),
                application_id: null == L ? void 0 : L.application.id,
                location: 'overview'
            });
    }, [P, null == L ? void 0 : L.application.id, K]);
    let q = K
            ? (0, i.jsx)(d.Popout, {
                  renderPopout: () =>
                      (0, i.jsx)(d.Clickable, {
                          onClick: (e) => {
                              e.stopPropagation(), z(!0), b.Z.dismissOverviewTooltip(P, L.integration);
                          },
                          children: (0, i.jsx)(p.ZP, {
                              content: C.intl.string(C.t.TyMJwM),
                              onClick: () => {}
                          })
                      }),
                  position: 'bottom',
                  align: 'center',
                  animation: d.Popout.Animation.TRANSLATE,
                  shouldShow: !0,
                  children: () => V
              })
            : V,
        Y = (0, s.Wu)([h.Z], () => {
            var e;
            return null != L && null != P && null !== (e = h.Z.getApplicationEntitlementsForGuild(L.application.id, P)) && void 0 !== e ? e : [];
        }),
        J = (0, u.LD)(P, !0),
        Q = (null == L ? void 0 : L.application) != null && Object.keys(null !== (r = null === (t = J.result) || void 0 === t ? void 0 : null === (n = t.sections[L.application.id]) || void 0 === n ? void 0 : n.commands) && void 0 !== r ? r : {}).length > 0,
        X = (0, i.jsxs)(m.Z, {
            children: [
                (0, i.jsx)(x.Z, {
                    name: S,
                    icon: E,
                    imageSrc: Z,
                    iconBackgroundColor: A,
                    iconClassName: y,
                    iconWrapperClassName: R,
                    details: O,
                    isPremium: Y.length > 0
                }),
                (0, i.jsx)(m.Z.Child, {
                    shrink: 0,
                    grow: 0,
                    children: (0, i.jsxs)(m.Z, {
                        align: m.Z.Align.CENTER,
                        justify: m.Z.Justify.END,
                        children: [
                            (function (e, n, t) {
                                var l;
                                if (null == e) return null;
                                let r = [],
                                    { application: a, integration: s, webhooks: c } = e;
                                return (
                                    null != a.bot &&
                                        r.push(
                                            (0, i.jsx)(
                                                d.TooltipContainer,
                                                {
                                                    forceOpen: n,
                                                    text: new g.Z(a.bot).isVerifiedBot() ? C.intl.string(C.t.xxcTGx) : C.intl.string(C.t.AOdOYm),
                                                    className: I.feature,
                                                    children: (0, i.jsx)(d.RobotIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: I.featureIcon
                                                    })
                                                },
                                                'bot'
                                            )
                                        ),
                                    c.length > 0 &&
                                        r.push(
                                            (0, i.jsx)(
                                                d.TooltipContainer,
                                                {
                                                    forceOpen: n,
                                                    text: C.intl.formatToPlainString(C.t['6HqDfX'], { count: c.length }),
                                                    className: I.feature,
                                                    children: (0, i.jsx)(d.WebhookIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: I.featureIcon
                                                    })
                                                },
                                                'webhooks'
                                            )
                                        ),
                                    (null == s ? void 0 : null === (l = s.scopes) || void 0 === l ? void 0 : l.includes(o.x.APPLICATIONS_COMMANDS)) === !0 &&
                                        t &&
                                        r.push(
                                            (0, i.jsx)(
                                                'div',
                                                {
                                                    className: I.feature,
                                                    children: (0, i.jsx)(d.SlashBoxIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: I.featureIcon
                                                    })
                                                },
                                                'commands'
                                            )
                                        ),
                                    r
                                );
                            })(L, F, Q),
                            q,
                            G
                        ]
                    })
                })
            ]
        });
    return M
        ? (0, i.jsx)(d.Clickable, {
              onClick: () => {
                  U && null != P && null != L && b.Z.dismissOverviewTooltip(P, L.integration), null == B || B();
              },
              onFocus: () => H(!0),
              onBlur: () => H(!1),
              children: (0, i.jsx)(d.Card, {
                  editable: !0,
                  className: a()(I.card, I.clickable),
                  children: X
              })
          })
        : (0, i.jsx)(d.Card, {
              editable: !0,
              className: I.card,
              children: X
          });
}

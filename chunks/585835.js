t.d(n, {
    Z: function () {
        return C;
    }
}),
    t(653041),
    t(47120);
var i = t(200651),
    a = t(192379),
    l = t(120356),
    s = t.n(l),
    o = t(243814),
    r = t(442837),
    d = t(481060),
    c = t(367907),
    u = t(213459),
    I = t(600164),
    m = t(488915),
    _ = t(970731),
    N = t(598077),
    E = t(626135),
    T = t(486199),
    h = t(929507),
    g = t(981631),
    p = t(689938),
    f = t(556208);
function C(e) {
    var n, t, l, C, x, O, S;
    let { name: A, icon: R, imageSrc: b, iconBackgroundColor: Z, iconClassName: v, iconWrapperClassName: M, details: L, integration: j, buttonText: D, buttonDisabled: P, hasNextSection: B, onButtonClick: y, guildId: G, isScrolling: k, canShowMigrationTooltip: H, trailing: w } = e,
        [U, W] = a.useState(!1),
        [F, V] = a.useState(!1);
    let K =
            ((C = D),
            (x = P),
            (O = B),
            (S = y),
            null == C || null == S
                ? null
                : O
                  ? (0, i.jsxs)(I.Z, {
                        align: I.Z.Align.CENTER,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                children: C
                            }),
                            O
                                ? (0, i.jsx)(d.ChevronSmallRightIcon, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 10,
                                      height: 10,
                                      className: f.caret
                                  })
                                : null
                        ]
                    })
                  : (0, i.jsx)(d.Button, {
                        size: d.Button.Sizes.SMALL,
                        look: O ? d.Button.Looks.LINK : d.Button.Looks.FILLED,
                        color: O ? d.Button.Colors.PRIMARY : d.Button.Colors.BRAND,
                        disabled: x,
                        onClick: S,
                        children: C
                    })),
        Y = H && !k && !F && void 0 !== G && null != j;
    a.useEffect(() => {
        Y &&
            E.default.track(g.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, c.hH)(G),
                application_id: null == j ? void 0 : j.application.id,
                location: 'overview'
            });
    }, [G, null == j ? void 0 : j.application.id, Y]);
    let z = Y
            ? (0, i.jsx)(d.Popout, {
                  renderPopout: () =>
                      (0, i.jsx)(d.Clickable, {
                          onClick: (e) => {
                              e.stopPropagation(), V(!0), h.Z.dismissOverviewTooltip(G, j.integration);
                          },
                          children: (0, i.jsx)(_.ZP, {
                              content: p.Z.Messages.COMMANDS_SCOPE_MIGRATION_OVERVIEW_TOOLTIP,
                              onClick: () => {}
                          })
                      }),
                  position: 'bottom',
                  align: 'center',
                  animation: d.Popout.Animation.TRANSLATE,
                  shouldShow: !0,
                  children: () => K
              })
            : K,
        q = (0, r.Wu)([m.Z], () => {
            var e;
            return null != j && null != G && null !== (e = m.Z.getApplicationEntitlementsForGuild(j.application.id, G)) && void 0 !== e ? e : [];
        }),
        X = (0, u.LD)(G, !0),
        J = (null == j ? void 0 : j.application) != null && Object.keys(null !== (l = null === (t = X.result) || void 0 === t ? void 0 : null === (n = t.sections[j.application.id]) || void 0 === n ? void 0 : n.commands) && void 0 !== l ? l : {}).length > 0,
        Q = (0, i.jsxs)(I.Z, {
            children: [
                (0, i.jsx)(T.Z, {
                    name: A,
                    icon: R,
                    imageSrc: b,
                    iconBackgroundColor: Z,
                    iconClassName: v,
                    iconWrapperClassName: M,
                    details: L,
                    isPremium: q.length > 0
                }),
                (0, i.jsx)(I.Z.Child, {
                    shrink: 0,
                    grow: 0,
                    children: (0, i.jsxs)(I.Z, {
                        align: I.Z.Align.CENTER,
                        justify: I.Z.Justify.END,
                        children: [
                            (function (e, n, t) {
                                var a;
                                if (null == e) return null;
                                let l = [],
                                    { application: s, integration: r, webhooks: c } = e;
                                return (
                                    null != s.bot &&
                                        l.push(
                                            (0, i.jsx)(
                                                d.TooltipContainer,
                                                {
                                                    forceOpen: n,
                                                    text: new N.Z(s.bot).isVerifiedBot() ? p.Z.Messages.INTEGRATIONS_APPLICATION_VERIFIED_BOT : p.Z.Messages.INTEGRATIONS_APPLICATION_BOT,
                                                    className: f.feature,
                                                    children: (0, i.jsx)(d.RobotIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: f.featureIcon
                                                    })
                                                },
                                                'bot'
                                            )
                                        ),
                                    c.length > 0 &&
                                        l.push(
                                            (0, i.jsx)(
                                                d.TooltipContainer,
                                                {
                                                    forceOpen: n,
                                                    text: p.Z.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format({ count: c.length }),
                                                    className: f.feature,
                                                    children: (0, i.jsx)(d.WebhookIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: f.featureIcon
                                                    })
                                                },
                                                'webhooks'
                                            )
                                        ),
                                    (null == r ? void 0 : null === (a = r.scopes) || void 0 === a ? void 0 : a.includes(o.x.APPLICATIONS_COMMANDS)) === !0 &&
                                        t &&
                                        l.push(
                                            (0, i.jsx)(
                                                'div',
                                                {
                                                    className: f.feature,
                                                    children: (0, i.jsx)(d.SlashBoxIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: f.featureIcon
                                                    })
                                                },
                                                'commands'
                                            )
                                        ),
                                    l
                                );
                            })(j, U, J),
                            z,
                            w
                        ]
                    })
                })
            ]
        });
    return B
        ? (0, i.jsx)(d.Clickable, {
              onClick: () => {
                  H && null != G && null != j && h.Z.dismissOverviewTooltip(G, j.integration), null == y || y();
              },
              onFocus: () => W(!0),
              onBlur: () => W(!1),
              children: (0, i.jsx)(d.Card, {
                  editable: !0,
                  className: s()(f.card, f.clickable),
                  children: Q
              })
          })
        : (0, i.jsx)(d.Card, {
              editable: !0,
              className: f.card,
              children: Q
          });
}

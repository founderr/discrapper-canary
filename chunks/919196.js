t.d(n, {
    Z: function () {
        return _;
    }
}),
    t(47120),
    t(653041);
var i = t(200651),
    l = t(192379),
    r = t(442837),
    a = t(481060),
    o = t(668781),
    s = t(600164),
    d = t(434404),
    c = t(590157),
    u = t(280885),
    m = t(496675),
    h = t(768581),
    p = t(709054),
    g = t(51144),
    f = t(486199),
    x = t(366598),
    b = t(125657),
    v = t(725875),
    C = t(981631),
    I = t(388032),
    N = t(695768);
function T(e) {
    let { application: n, guild: t, integration: l, ...r } = e;
    return (0, i.jsx)(a.ConfirmModal, {
        ...r,
        header: I.intl.formatToPlainString(I.t['rL9d//'], { applicationName: n.name }),
        confirmText: I.intl.string(I.t.ebGf4u),
        cancelText: I.intl.string(I.t['ETE/oK']),
        onConfirm: () => {
            d.Z.disableIntegration(t.id, l.id).catch(() => {
                o.Z.show({
                    title: I.intl.string(I.t.wYqMmJ),
                    body: I.intl.string(I.t.A4Mnsr)
                });
            });
        },
        children: (0, i.jsx)(a.Text, {
            variant: 'text-md/normal',
            children: I.intl.format(I.t.FGE8yc, { applicationName: n.name })
        })
    });
}
function _(e) {
    var n;
    let { guild: t, applicationIntegration: o, selectableWebhookChannels: d, editedWebhook: _, errors: j, canNavigate: S } = e,
        { application: E, integration: Z, webhooks: A } = o,
        [y, R] = (0, r.Wu)([m.Z], () => [m.Z.can(C.Plq.MANAGE_ROLES, t), null == E.bot || m.Z.canManageUser(C.Plq.MANAGE_GUILD, E.bot.id, t)], [E.bot, t]),
        O = (0, r.e7)([m.Z], () => m.Z.can(C.Plq.MANAGE_WEBHOOKS, t), [t]),
        L = l.useCallback(() => {
            S() &&
                (0, a.openModal)((e) =>
                    (0, i.jsx)(T, {
                        guild: t,
                        application: E,
                        integration: Z,
                        ...e
                    })
                );
        }, [E, S, t, Z]),
        k = l.useMemo(() => {
            let e = [
                {
                    icon: a.ClockIcon,
                    text: I.intl.formatToPlainString(I.t.gcdJ8P, { timestamp: p.default.extractTimestamp(Z.id) })
                }
            ];
            return (
                null != Z.user &&
                    e.push({
                        icon: a.UserIcon,
                        text: I.intl.formatToPlainString(I.t.qE7oqq, { user: g.ZP.getUserTag(Z.user) })
                    }),
                e
            );
        }, [Z.id, Z.user]),
        w = l.useMemo(
            () =>
                null != E.bot
                    ? (0, i.jsx)(b.Z, {
                          guild: t,
                          applicationIntegration: o
                      })
                    : (0, i.jsx)(a.Card, {
                          className: N.emptyCard,
                          editable: !0,
                          children: (0, i.jsx)(a.Text, {
                              color: 'text-muted',
                              variant: 'text-sm/normal',
                              children: I.intl.string(I.t.pfLnzc)
                          })
                      }),
            [E.bot, o, t]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f.Z, {
                name: E.name,
                imageSrc: null !== (n = E.getIconURL(32)) && void 0 !== n ? n : h.pK['0'],
                details: k,
                isHeader: !0
            }),
            (null == E ? void 0 : E.description) != null
                ? (0, i.jsx)(u.Z, {
                      userBio: E.description,
                      className: N.headerDescription
                  })
                : null,
            y
                ? (0, i.jsx)(c.Z, {
                      application: E,
                      canNavigate: S,
                      guildId: t.id
                  })
                : null,
            (0, i.jsx)(a.FormDivider, { className: N.headerDivider }),
            null != E.bot
                ? (0, i.jsxs)('div', {
                      className: N.section,
                      children: [
                          (0, i.jsx)(x.Z, {
                              icon: (0, i.jsx)(a.RobotIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              title: I.intl.string(I.t.AOdOYm)
                          }),
                          w
                      ]
                  })
                : null,
            (0, i.jsxs)('div', {
                className: N.section,
                children: [
                    (0, i.jsx)(x.Z, {
                        icon: (0, i.jsx)(a.WebhookIcon, {
                            size: 'md',
                            color: 'currentColor'
                        }),
                        title: I.intl.string(I.t['t9ZX/P'])
                    }),
                    A.length > 0
                        ? (0, i.jsx)(v.Z, {
                              webhooks: A,
                              editedWebhook: _,
                              selectableWebhookChannels: d,
                              errors: j,
                              canNavigate: S
                          })
                        : (0, i.jsx)(a.Card, {
                              className: N.emptyCard,
                              editable: !0,
                              children: (0, i.jsx)(a.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/normal',
                                  children: O ? I.intl.string(I.t.ahPd2d) : I.intl.string(I.t.axqYMj)
                              })
                          })
                ]
            }),
            (0, i.jsx)(a.FormDivider, { className: N.headerDivider }),
            (0, i.jsxs)(s.Z, {
                className: N.section,
                justify: s.Z.Justify.BETWEEN,
                align: s.Z.Align.CENTER,
                children: [
                    (0, i.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: R ? I.intl.string(I.t.hdneLy) : I.intl.string(I.t.xRCMq6)
                    }),
                    (0, i.jsx)(s.Z.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(a.Button, {
                            size: a.Button.Sizes.SMALL,
                            color: a.Button.Colors.RED,
                            look: a.Button.Looks.FILLED,
                            disabled: !R,
                            onClick: L,
                            children: I.intl.string(I.t.ebGf4u)
                        })
                    })
                ]
            })
        ]
    });
}

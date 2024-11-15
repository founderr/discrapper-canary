n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(668781),
    s = n(600164),
    c = n(434404),
    d = n(590157),
    u = n(280885),
    m = n(496675),
    h = n(768581),
    p = n(709054),
    g = n(51144),
    x = n(486199),
    f = n(366598),
    b = n(125657),
    v = n(725875),
    C = n(981631),
    N = n(388032),
    I = n(782849);
function j(e) {
    let { application: t, guild: n, integration: l, ...r } = e;
    return (0, i.jsx)(a.ConfirmModal, {
        ...r,
        header: N.intl.formatToPlainString(N.t['rL9d//'], { applicationName: t.name }),
        confirmText: N.intl.string(N.t.ebGf4u),
        cancelText: N.intl.string(N.t['ETE/oK']),
        onConfirm: () => {
            c.Z.disableIntegration(n.id, l.id).catch(() => {
                o.Z.show({
                    title: N.intl.string(N.t.wYqMmJ),
                    body: N.intl.string(N.t.A4Mnsr)
                });
            });
        },
        children: (0, i.jsx)(a.Text, {
            variant: 'text-md/normal',
            children: N.intl.format(N.t.FGE8yc, { applicationName: t.name })
        })
    });
}
function _(e) {
    var t;
    let { guild: n, applicationIntegration: o, selectableWebhookChannels: c, editedWebhook: _, errors: T, canNavigate: S } = e,
        { application: Z, integration: E, webhooks: y } = o,
        [A, R] = (0, r.Wu)([m.Z], () => [m.Z.can(C.Plq.MANAGE_ROLES, n), null == Z.bot || m.Z.canManageUser(C.Plq.MANAGE_GUILD, Z.bot.id, n)], [Z.bot, n]),
        k = (0, r.e7)([m.Z], () => m.Z.can(C.Plq.MANAGE_WEBHOOKS, n), [n]),
        L = l.useCallback(() => {
            S() &&
                (0, a.openModal)((e) =>
                    (0, i.jsx)(j, {
                        guild: n,
                        application: Z,
                        integration: E,
                        ...e
                    })
                );
        }, [Z, S, n, E]),
        O = l.useMemo(() => {
            let e = [
                {
                    icon: a.ClockIcon,
                    text: N.intl.formatToPlainString(N.t.gcdJ8P, { timestamp: p.default.extractTimestamp(E.id) })
                }
            ];
            return (
                null != E.user &&
                    e.push({
                        icon: a.UserIcon,
                        text: N.intl.formatToPlainString(N.t.qE7oqq, { user: g.ZP.getUserTag(E.user) })
                    }),
                e
            );
        }, [E.id, E.user]),
        w = l.useMemo(
            () =>
                null != Z.bot
                    ? (0, i.jsx)(b.Z, {
                          guild: n,
                          applicationIntegration: o
                      })
                    : (0, i.jsx)(a.Card, {
                          className: I.emptyCard,
                          editable: !0,
                          children: (0, i.jsx)(a.Text, {
                              color: 'text-muted',
                              variant: 'text-sm/normal',
                              children: N.intl.string(N.t.pfLnzc)
                          })
                      }),
            [Z.bot, o, n]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(x.Z, {
                name: Z.name,
                imageSrc: null !== (t = Z.getIconURL(32)) && void 0 !== t ? t : h.pK['0'],
                details: O,
                isHeader: !0
            }),
            (null == Z ? void 0 : Z.description) != null
                ? (0, i.jsx)(u.Z, {
                      userBio: Z.description,
                      className: I.headerDescription
                  })
                : null,
            A
                ? (0, i.jsx)(d.Z, {
                      application: Z,
                      canNavigate: S,
                      guildId: n.id
                  })
                : null,
            (0, i.jsx)(a.FormDivider, { className: I.headerDivider }),
            null != Z.bot
                ? (0, i.jsxs)('div', {
                      className: I.section,
                      children: [
                          (0, i.jsx)(f.Z, {
                              icon: (0, i.jsx)(a.RobotIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              title: N.intl.string(N.t.AOdOYm)
                          }),
                          w
                      ]
                  })
                : null,
            (0, i.jsxs)('div', {
                className: I.section,
                children: [
                    (0, i.jsx)(f.Z, {
                        icon: (0, i.jsx)(a.WebhookIcon, {
                            size: 'md',
                            color: 'currentColor'
                        }),
                        title: N.intl.string(N.t['t9ZX/P'])
                    }),
                    y.length > 0
                        ? (0, i.jsx)(v.Z, {
                              webhooks: y,
                              editedWebhook: _,
                              selectableWebhookChannels: c,
                              errors: T,
                              canNavigate: S
                          })
                        : (0, i.jsx)(a.Card, {
                              className: I.emptyCard,
                              editable: !0,
                              children: (0, i.jsx)(a.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/normal',
                                  children: k ? N.intl.string(N.t.ahPd2d) : N.intl.string(N.t.axqYMj)
                              })
                          })
                ]
            }),
            (0, i.jsx)(a.FormDivider, { className: I.headerDivider }),
            (0, i.jsxs)(s.Z, {
                className: I.section,
                justify: s.Z.Justify.BETWEEN,
                align: s.Z.Align.CENTER,
                children: [
                    (0, i.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: R ? N.intl.string(N.t.hdneLy) : N.intl.string(N.t.xRCMq6)
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
                            children: N.intl.string(N.t.ebGf4u)
                        })
                    })
                ]
            })
        ]
    });
}

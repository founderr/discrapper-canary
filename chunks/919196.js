t.d(n, {
    Z: function () {
        return O;
    }
}),
    t(47120),
    t(653041);
var i = t(200651),
    a = t(192379),
    l = t(442837),
    s = t(481060),
    o = t(668781),
    r = t(600164),
    d = t(434404),
    c = t(590157),
    u = t(280885),
    I = t(496675),
    m = t(768581),
    _ = t(709054),
    N = t(51144),
    E = t(486199),
    T = t(366598),
    h = t(125657),
    g = t(725875),
    p = t(981631),
    f = t(689938),
    C = t(695768);
function x(e) {
    let { application: n, guild: t, integration: a, ...l } = e;
    return (0, i.jsx)(s.ConfirmModal, {
        ...l,
        header: f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_TITLE.format({ applicationName: n.name }),
        confirmText: f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE,
        cancelText: f.Z.Messages.CANCEL,
        onConfirm: () => {
            d.Z.disableIntegration(t.id, a.id).catch(() => {
                o.Z.show({
                    title: f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR_TITLE,
                    body: f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR
                });
            });
        },
        children: (0, i.jsx)(s.Text, {
            variant: 'text-md/normal',
            children: f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_BODY.format({ applicationName: n.name })
        })
    });
}
function O(e) {
    var n;
    let { guild: t, applicationIntegration: o, selectableWebhookChannels: d, editedWebhook: O, errors: S, canNavigate: A } = e,
        { application: R, integration: b, webhooks: Z } = o,
        [v, M] = (0, l.Wu)([I.Z], () => [I.Z.can(p.Plq.MANAGE_ROLES, t), null == R.bot || I.Z.canManageUser(p.Plq.MANAGE_GUILD, R.bot.id, t)], [R.bot, t]),
        L = (0, l.e7)([I.Z], () => I.Z.can(p.Plq.MANAGE_WEBHOOKS, t), [t]),
        j = a.useCallback(() => {
            A() &&
                (0, s.openModal)((e) =>
                    (0, i.jsx)(x, {
                        guild: t,
                        application: R,
                        integration: b,
                        ...e
                    })
                );
        }, [R, A, t, b]),
        D = a.useMemo(() => {
            let e = [
                {
                    icon: s.ClockIcon,
                    text: f.Z.Messages.INTEGRATION_ADDED_DATE.format({ timestamp: _.default.extractTimestamp(b.id) })
                }
            ];
            return (
                null != b.user &&
                    e.push({
                        icon: s.UserIcon,
                        text: f.Z.Messages.INTEGRATION_ADDED_USER.format({ user: N.ZP.getUserTag(b.user) })
                    }),
                e
            );
        }, [b.id, b.user]),
        P = a.useMemo(
            () =>
                null != R.bot
                    ? (0, i.jsx)(h.Z, {
                          guild: t,
                          applicationIntegration: o
                      })
                    : (0, i.jsx)(s.Card, {
                          className: C.emptyCard,
                          editable: !0,
                          children: (0, i.jsx)(s.Text, {
                              color: 'text-muted',
                              variant: 'text-sm/normal',
                              children: f.Z.Messages.INTEGRATIONS_APPLICATION_NO_BOT
                          })
                      }),
            [R.bot, o, t]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(E.Z, {
                name: R.name,
                imageSrc: null !== (n = R.getIconURL(32)) && void 0 !== n ? n : m.pK['0'],
                details: D,
                isHeader: !0
            }),
            (null == R ? void 0 : R.description) != null
                ? (0, i.jsx)(u.Z, {
                      userBio: R.description,
                      className: C.headerDescription
                  })
                : null,
            v
                ? (0, i.jsx)(c.Z, {
                      application: R,
                      canNavigate: A,
                      guildId: t.id
                  })
                : null,
            (0, i.jsx)(s.FormDivider, { className: C.headerDivider }),
            null != R.bot
                ? (0, i.jsxs)('div', {
                      className: C.section,
                      children: [
                          (0, i.jsx)(T.Z, {
                              icon: (0, i.jsx)(s.RobotIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              title: f.Z.Messages.INTEGRATIONS_APPLICATION_BOT
                          }),
                          P
                      ]
                  })
                : null,
            (0, i.jsxs)('div', {
                className: C.section,
                children: [
                    (0, i.jsx)(T.Z, {
                        icon: (0, i.jsx)(s.WebhookIcon, {
                            size: 'md',
                            color: 'currentColor'
                        }),
                        title: f.Z.Messages.INTEGRATIONS_APPLICATION_WEBHOOKS
                    }),
                    Z.length > 0
                        ? (0, i.jsx)(g.Z, {
                              webhooks: Z,
                              editedWebhook: O,
                              selectableWebhookChannels: d,
                              errors: S,
                              canNavigate: A
                          })
                        : (0, i.jsx)(s.Card, {
                              className: C.emptyCard,
                              editable: !0,
                              children: (0, i.jsx)(s.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/normal',
                                  children: L ? f.Z.Messages.INTEGRATIONS_APPLICATION_NO_WEBHOOKS : f.Z.Messages.INTEGRATIONS_APPLICATION_APPLICATION_WEBHOOK_PERMISSIONS
                              })
                          })
                ]
            }),
            (0, i.jsx)(s.FormDivider, { className: C.headerDivider }),
            (0, i.jsxs)(r.Z, {
                className: C.section,
                justify: r.Z.Justify.BETWEEN,
                align: r.Z.Align.CENTER,
                children: [
                    (0, i.jsx)(s.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: M ? f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_SUMMARY : f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_NO_PERMISSIONS
                    }),
                    (0, i.jsx)(r.Z.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(s.Button, {
                            size: s.Button.Sizes.SMALL,
                            color: s.Button.Colors.RED,
                            look: s.Button.Looks.FILLED,
                            disabled: !M,
                            onClick: j,
                            children: f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE
                        })
                    })
                ]
            })
        ]
    });
}

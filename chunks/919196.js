t.d(n, {
    Z: function () {
        return O;
    }
}),
    t(47120),
    t(653041);
var i = t(735250),
    a = t(470079),
    s = t(442837),
    l = t(481060),
    r = t(668781),
    o = t(600164),
    c = t(434404),
    d = t(590157),
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
    x = t(695768);
function C(e) {
    let { application: n, guild: t, integration: a, ...s } = e;
    return (0, i.jsx)(l.ConfirmModal, {
        ...s,
        header: f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_TITLE.format({ applicationName: n.name }),
        confirmText: f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE,
        cancelText: f.Z.Messages.CANCEL,
        onConfirm: () => {
            c.Z.disableIntegration(t.id, a.id).catch(() => {
                r.Z.show({
                    title: f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR_TITLE,
                    body: f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR
                });
            });
        },
        children: (0, i.jsx)(l.Text, {
            variant: 'text-md/normal',
            children: f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_BODY.format({ applicationName: n.name })
        })
    });
}
function O(e) {
    var n;
    let { guild: t, applicationIntegration: r, selectableWebhookChannels: c, editedWebhook: O, errors: S, canNavigate: A } = e,
        { application: R, integration: b, webhooks: Z } = r,
        [v, M] = (0, s.Wu)([I.Z], () => [I.Z.can(p.Plq.MANAGE_ROLES, t), null == R.bot || I.Z.canManageUser(p.Plq.MANAGE_GUILD, R.bot.id, t)], [R.bot, t]),
        L = (0, s.e7)([I.Z], () => I.Z.can(p.Plq.MANAGE_WEBHOOKS, t), [t]),
        j = a.useCallback(() => {
            A() &&
                (0, l.openModal)((e) =>
                    (0, i.jsx)(C, {
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
                    icon: l.ClockIcon,
                    text: f.Z.Messages.INTEGRATION_ADDED_DATE.format({ timestamp: _.default.extractTimestamp(b.id) })
                }
            ];
            return (
                null != b.user &&
                    e.push({
                        icon: l.UserIcon,
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
                          applicationIntegration: r
                      })
                    : (0, i.jsx)(l.Card, {
                          className: x.emptyCard,
                          editable: !0,
                          children: (0, i.jsx)(l.Text, {
                              color: 'text-muted',
                              variant: 'text-sm/normal',
                              children: f.Z.Messages.INTEGRATIONS_APPLICATION_NO_BOT
                          })
                      }),
            [R.bot, r, t]
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
                      className: x.headerDescription
                  })
                : null,
            v
                ? (0, i.jsx)(d.Z, {
                      application: R,
                      canNavigate: A,
                      guildId: t.id
                  })
                : null,
            (0, i.jsx)(l.FormDivider, { className: x.headerDivider }),
            null != R.bot
                ? (0, i.jsxs)('div', {
                      className: x.section,
                      children: [
                          (0, i.jsx)(T.Z, {
                              icon: (0, i.jsx)(l.RobotIcon, {
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
                className: x.section,
                children: [
                    (0, i.jsx)(T.Z, {
                        icon: (0, i.jsx)(l.WebhookIcon, {
                            size: 'md',
                            color: 'currentColor'
                        }),
                        title: f.Z.Messages.INTEGRATIONS_APPLICATION_WEBHOOKS
                    }),
                    Z.length > 0
                        ? (0, i.jsx)(g.Z, {
                              webhooks: Z,
                              editedWebhook: O,
                              selectableWebhookChannels: c,
                              errors: S,
                              canNavigate: A
                          })
                        : (0, i.jsx)(l.Card, {
                              className: x.emptyCard,
                              editable: !0,
                              children: (0, i.jsx)(l.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/normal',
                                  children: L ? f.Z.Messages.INTEGRATIONS_APPLICATION_NO_WEBHOOKS : f.Z.Messages.INTEGRATIONS_APPLICATION_APPLICATION_WEBHOOK_PERMISSIONS
                              })
                          })
                ]
            }),
            (0, i.jsx)(l.FormDivider, { className: x.headerDivider }),
            (0, i.jsxs)(o.Z, {
                className: x.section,
                justify: o.Z.Justify.BETWEEN,
                align: o.Z.Align.CENTER,
                children: [
                    (0, i.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: M ? f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_SUMMARY : f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_NO_PERMISSIONS
                    }),
                    (0, i.jsx)(o.Z.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(l.Button, {
                            size: l.Button.Sizes.SMALL,
                            color: l.Button.Colors.RED,
                            look: l.Button.Looks.FILLED,
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

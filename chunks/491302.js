t.d(n, {
    Z: function () {
        return E;
    }
}),
    t(653041);
var i = t(200651),
    a = t(192379),
    l = t(481060),
    s = t(668781),
    o = t(139387),
    r = t(308063),
    d = t(600164),
    c = t(259580),
    u = t(768581),
    I = t(486199),
    m = t(981631),
    _ = t(689938),
    N = t(176662);
function E(e) {
    let { webhook: n, editedWebhook: t, channelOptions: E, isExpanded: T, errors: h, onToggleExpand: g } = e,
        p = a.useMemo(() => {
            var e, t;
            return (
                (e = n),
                null != (t = n.avatar) && /^data:/.test(t)
                    ? t
                    : (0, u.ov)({
                          id: e.id,
                          avatar: t,
                          discriminator: m.fo$
                      })
            );
        }, [n]),
        f = a.useCallback(() => {
            (0, l.openModal)((e) =>
                (0, i.jsx)(l.ConfirmModal, {
                    ...e,
                    header: _.Z.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE_TITLE.format({ name: n.name }),
                    confirmText: _.Z.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE,
                    cancelText: _.Z.Messages.CANCEL,
                    onConfirm: () => {
                        r.Z.delete(n.guild_id, n.id).catch(() => {
                            s.Z.show({
                                title: _.Z.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_ERROR_DELETING,
                                body: _.Z.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR
                            });
                        });
                    },
                    children: (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: _.Z.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE_BODY
                    })
                })
            );
        }, [n.guild_id, n.id, n.name]),
        C = [];
    null != n.source_channel &&
        null != n.source_guild &&
        (C.push({
            icon: l.AnnouncementsIcon,
            text: n.source_channel.name
        }),
        C.push({
            text: (0, i.jsx)(
                'span',
                {
                    className: N.guildSource,
                    children: _.Z.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_GUILD_SOURCE.format({
                        guildHook: () =>
                            (0, i.jsx)(
                                'span',
                                {
                                    className: N.sourceName,
                                    children: n.source_guild.name
                                },
                                n.id
                            )
                    })
                },
                'guild-source'
            )
        }));
    let x = null;
    return (
        T &&
            null != t &&
            (x = (0, i.jsxs)('div', {
                className: N.body,
                children: [
                    (0, i.jsx)(l.FormDivider, { className: N.topDivider }),
                    (0, i.jsx)(d.Z, {
                        children: (0, i.jsxs)(d.Z, {
                            direction: d.Z.Direction.VERTICAL,
                            children: [
                                (0, i.jsxs)(d.Z, {
                                    children: [
                                        (0, i.jsx)(d.Z.Child, {
                                            basis: '50%',
                                            children: (0, i.jsx)(l.FormItem, {
                                                title: _.Z.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_NAME,
                                                children: (0, i.jsx)(l.TextInput, {
                                                    value: t.name,
                                                    onChange: (e) => {
                                                        o.Z.updateWebhook({ name: e });
                                                    },
                                                    maxLength: 80,
                                                    error: h.name
                                                })
                                            })
                                        }),
                                        (0, i.jsx)(d.Z.Child, {
                                            basis: '50%',
                                            children: (0, i.jsx)(l.FormItem, {
                                                title: _.Z.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DEST_CHANNEL,
                                                children: (0, i.jsx)(l.SingleSelect, {
                                                    value: t.channel_id,
                                                    options: E,
                                                    onChange: (e) => {
                                                        o.Z.updateWebhook({ channelId: e });
                                                    }
                                                })
                                            })
                                        })
                                    ]
                                }),
                                (0, i.jsx)(l.FormDivider, { className: N.bottomDivider }),
                                (0, i.jsx)(d.Z, {
                                    children: (0, i.jsx)(l.Button, {
                                        onClick: f,
                                        size: l.Button.Sizes.SMALL,
                                        color: l.Button.Colors.RED,
                                        look: l.Button.Looks.LINK,
                                        className: N.removeButton,
                                        children: _.Z.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE
                                    })
                                })
                            ]
                        })
                    })
                ]
            })),
        (0, i.jsx)(l.Card, {
            editable: !0,
            className: N.card,
            children: (0, i.jsxs)(d.Z, {
                direction: d.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(l.Clickable, {
                        className: N.header,
                        'aria-expanded': T,
                        onClick: g,
                        children: (0, i.jsxs)(d.Z, {
                            align: d.Z.Align.CENTER,
                            children: [
                                (0, i.jsx)(I.Z, {
                                    name: n.name,
                                    imageSrc: p,
                                    detailsClassName: N.__invalid_description,
                                    details: C
                                }),
                                (0, i.jsx)(c.Z, {
                                    className: N.expandIcon,
                                    expanded: T,
                                    'aria-hidden': !0
                                })
                            ]
                        })
                    }),
                    x
                ]
            })
        })
    );
}

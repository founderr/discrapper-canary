t.d(n, {
    Z: function () {
        return f;
    }
}),
    t(653041);
var i = t(200651),
    l = t(192379),
    r = t(481060),
    a = t(668781),
    o = t(139387),
    s = t(308063),
    d = t(600164),
    c = t(259580),
    u = t(768581),
    m = t(486199),
    h = t(981631),
    p = t(388032),
    g = t(176662);
function f(e) {
    let { webhook: n, editedWebhook: t, channelOptions: f, isExpanded: x, errors: b, onToggleExpand: v } = e,
        C = l.useMemo(() => {
            var e, t;
            return (
                (e = n),
                null != (t = n.avatar) && /^data:/.test(t)
                    ? t
                    : (0, u.ov)({
                          id: e.id,
                          avatar: t,
                          discriminator: h.fo$
                      })
            );
        }, [n]),
        I = l.useCallback(() => {
            (0, r.openModal)((e) =>
                (0, i.jsx)(r.ConfirmModal, {
                    ...e,
                    header: p.intl.formatToPlainString(p.t.gBKqZ2, { name: n.name }),
                    confirmText: p.intl.string(p.t.CMy0Cg),
                    cancelText: p.intl.string(p.t['ETE/oK']),
                    onConfirm: () => {
                        s.Z.delete(n.guild_id, n.id).catch(() => {
                            a.Z.show({
                                title: p.intl.string(p.t.LpbaFR),
                                body: p.intl.string(p.t['/4TwKS'])
                            });
                        });
                    },
                    children: (0, i.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        children: p.intl.string(p.t.zO9jrK)
                    })
                })
            );
        }, [n.guild_id, n.id, n.name]),
        N = [];
    null != n.source_channel &&
        null != n.source_guild &&
        (N.push({
            icon: r.AnnouncementsIcon,
            text: n.source_channel.name
        }),
        N.push({
            text: (0, i.jsx)(
                'span',
                {
                    className: g.guildSource,
                    children: p.intl.format(p.t['H/jJ6e'], {
                        guildHook: () =>
                            (0, i.jsx)(
                                'span',
                                {
                                    className: g.sourceName,
                                    children: n.source_guild.name
                                },
                                n.id
                            )
                    })
                },
                'guild-source'
            )
        }));
    let T = null;
    return (
        x &&
            null != t &&
            (T = (0, i.jsxs)('div', {
                className: g.body,
                children: [
                    (0, i.jsx)(r.FormDivider, { className: g.topDivider }),
                    (0, i.jsx)(d.Z, {
                        children: (0, i.jsxs)(d.Z, {
                            direction: d.Z.Direction.VERTICAL,
                            children: [
                                (0, i.jsxs)(d.Z, {
                                    children: [
                                        (0, i.jsx)(d.Z.Child, {
                                            basis: '50%',
                                            children: (0, i.jsx)(r.FormItem, {
                                                title: p.intl.string(p.t.I1o5gY),
                                                children: (0, i.jsx)(r.TextInput, {
                                                    value: t.name,
                                                    onChange: (e) => {
                                                        o.Z.updateWebhook({ name: e });
                                                    },
                                                    maxLength: 80,
                                                    error: b.name
                                                })
                                            })
                                        }),
                                        (0, i.jsx)(d.Z.Child, {
                                            basis: '50%',
                                            children: (0, i.jsx)(r.FormItem, {
                                                title: p.intl.string(p.t['4TuWfX']),
                                                children: (0, i.jsx)(r.SingleSelect, {
                                                    value: t.channel_id,
                                                    options: f,
                                                    onChange: (e) => {
                                                        o.Z.updateWebhook({ channelId: e });
                                                    }
                                                })
                                            })
                                        })
                                    ]
                                }),
                                (0, i.jsx)(r.FormDivider, { className: g.bottomDivider }),
                                (0, i.jsx)(d.Z, {
                                    children: (0, i.jsx)(r.Button, {
                                        onClick: I,
                                        size: r.Button.Sizes.SMALL,
                                        color: r.Button.Colors.RED,
                                        look: r.Button.Looks.LINK,
                                        className: g.removeButton,
                                        children: p.intl.string(p.t.CMy0Cg)
                                    })
                                })
                            ]
                        })
                    })
                ]
            })),
        (0, i.jsx)(r.Card, {
            editable: !0,
            className: g.card,
            children: (0, i.jsxs)(d.Z, {
                direction: d.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(r.Clickable, {
                        className: g.header,
                        'aria-expanded': x,
                        onClick: v,
                        children: (0, i.jsxs)(d.Z, {
                            align: d.Z.Align.CENTER,
                            children: [
                                (0, i.jsx)(m.Z, {
                                    name: n.name,
                                    imageSrc: C,
                                    detailsClassName: g.__invalid_description,
                                    details: N
                                }),
                                (0, i.jsx)(c.Z, {
                                    className: g.expandIcon,
                                    expanded: x,
                                    'aria-hidden': !0
                                })
                            ]
                        })
                    }),
                    T
                ]
            })
        })
    );
}

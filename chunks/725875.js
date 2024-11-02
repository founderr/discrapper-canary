t.d(n, {
    Z: function () {
        return g;
    }
}),
    t(653041),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(481060),
    a = t(139387),
    o = t(933557),
    s = t(699516),
    d = t(594174),
    c = t(491302),
    u = t(936726),
    m = t(981631),
    h = t(388032),
    p = t(672994);
function g(e) {
    let { webhooks: n, selectableWebhookChannels: t, lastCreatedWebhookId: g, editedWebhook: f, errors: x, canNavigate: b } = e,
        v = l.useMemo(
            () =>
                Object.values(t).map((e) => ({
                    value: e.id,
                    label: (0, o.F6)(e, d.default, s.Z, !0)
                })),
            [t]
        ),
        C = l.useMemo(() => {
            let e = {};
            for (let i of n)
                if (i.channel_id in e) e[i.channel_id].webhooks.push(i);
                else {
                    let n = t[i.channel_id];
                    null != n &&
                        (e[i.channel_id] = {
                            channel: n,
                            webhooks: [i]
                        });
                }
            return Object.values(e).sort((e, n) => e.channel.name.localeCompare(n.channel.name));
        }, [t, n]),
        I = l.useCallback(
            (e) => {
                b() && (e === (null == f ? void 0 : f.id) ? a.Z.stopEditingWebhook() : a.Z.startEditingWebhook(e));
            },
            [b, f]
        );
    return (0, i.jsx)('div', {
        className: p.__invalid_list,
        children: C.map((e) => {
            let { channel: n, webhooks: t } = e;
            return (function (e) {
                let { channel: n, webhooks: t, channelOptions: l, lastCreatedWebhookId: a, editedWebhook: g, errors: f, toggleWebhookExpand: x } = e;
                return (0, i.jsxs)(
                    'div',
                    {
                        children: [
                            (0, i.jsx)(r.FormTitle, {
                                className: p.groupHeader,
                                children: h.intl.format(h.t.TKDIZm, {
                                    channelHook: () =>
                                        (0, i.jsx)(
                                            'span',
                                            {
                                                className: p.channelName,
                                                children: (0, o.F6)(n, d.default, s.Z, !0)
                                            },
                                            n.id
                                        )
                                })
                            }),
                            t.map((e) => {
                                var n;
                                if (e.type === m.ylB.CHANNEL_FOLLOWER)
                                    return (0, i.jsx)(
                                        c.Z,
                                        {
                                            webhook: e,
                                            editedWebhook: g,
                                            channelOptions: l,
                                            isExpanded: (null == g ? void 0 : g.id) === e.id,
                                            onToggleExpand: () => x(e.id),
                                            errors: f
                                        },
                                        e.id
                                    );
                                return (0, i.jsx)(
                                    u.Z,
                                    {
                                        id: ((n = e.id), 'settings-integrations-webhook-'.concat(n)),
                                        webhook: e,
                                        editedWebhook: g,
                                        channelOptions: l,
                                        isExpanded: (null == g ? void 0 : g.id) === e.id,
                                        isNew: a === e.id,
                                        onToggleExpand: () => x(e.id),
                                        errors: f
                                    },
                                    e.id
                                );
                            })
                        ]
                    },
                    n.id
                );
            })({
                channel: n,
                webhooks: t,
                channelOptions: v,
                lastCreatedWebhookId: g,
                editedWebhook: f,
                errors: x,
                toggleWebhookExpand: I
            });
        })
    });
}

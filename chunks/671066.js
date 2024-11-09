n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    s = n(933557),
    a = n(592125),
    o = n(699516),
    c = n(594174),
    d = n(556012),
    u = n(388032),
    m = n(794078);
function h(e) {
    var t;
    let { action: n, triggerType: h, toggled: g, onToggleAction: x } = e,
        p = (e) => () => x(e),
        f = (0, d.c)(n.type, n, h),
        C = null === (t = n.metadata) || void 0 === t ? void 0 : t.channelId,
        I = (0, r.e7)(
            [c.default, o.Z, a.Z],
            () => {
                let e = a.Z.getChannel(C);
                return null == e ? null : (0, s.F6)(e, c.default, o.Z);
            },
            [C]
        );
    if (null == f) return null;
    let { headerText: _, descriptionText: N, icon: v } = f;
    return (0, i.jsxs)('div', {
        className: m.actionContainer,
        children: [
            (0, i.jsx)('div', {
                className: m.actionIconContainer,
                children: (0, i.jsx)(v, {
                    size: 'md',
                    color: 'currentColor',
                    className: m.actionIcon
                })
            }),
            (0, i.jsxs)('div', {
                className: m.actionTextContainer,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-sm/semibold',
                        children: _
                    }),
                    (0, i.jsx)(l.Text, {
                        color: 'interactive-normal',
                        variant: 'text-xs/medium',
                        children: N
                    }),
                    g &&
                        (0, i.jsxs)(l.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/medium',
                            children: [
                                null != I && u.intl.format(u.t['8Sr/am'], { channelName: I }),
                                (0, i.jsx)(l.Clickable, {
                                    onClick: p(!0),
                                    className: m.editChannel,
                                    tag: 'span',
                                    role: 'link',
                                    children: u.intl.string(u.t['3gUsJS'])
                                })
                            ]
                        })
                ]
            }),
            (0, i.jsx)('div', {
                children: (0, i.jsx)(l.Checkbox, {
                    type: l.Checkbox.Types.INVERTED,
                    value: g,
                    onChange: p(!1),
                    className: m.__invalid_actionCheckbox
                })
            })
        ]
    });
}

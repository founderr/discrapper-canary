n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(481060),
    o = n(951394),
    c = n(455839),
    d = n(689938),
    u = n(271183);
t.Z = function (e) {
    let { guild: t, className: n } = e,
        [s, _] = a.useState(!1),
        E = a.useCallback(() => _(!0), [_]),
        h = a.useCallback(() => _(!0), [_]);
    return (0, i.jsx)('div', {
        className: r()(u.actionButtonsContainer, n, { [u.forceButtonsShow]: s }),
        children: (0, i.jsx)(o.ZP, {
            children: (0, i.jsx)(c.GuildDiscoveryMenuPopout, {
                onRequestOpen: E,
                onRequestClose: h,
                guild: t,
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(l.Tooltip, {
                        text: d.Z.Messages.MORE,
                        hideOnClick: !0,
                        children: (e) => {
                            let { onClick: a, ...s } = e;
                            return (0, i.jsx)(o.zx, {
                                ...n,
                                ...s,
                                onClick: (e) => {
                                    e.stopPropagation(), null == a || a(), t(e);
                                },
                                'aria-label': d.Z.Messages.MORE,
                                children: (0, i.jsx)(l.MoreHorizontalIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: u.overflowIcon
                                })
                            });
                        }
                    });
                }
            })
        })
    });
};

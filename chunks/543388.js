n.d(t, {
    Z: function () {
        return _;
    },
    j: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var i = n(913527),
    a = n.n(i),
    s = n(481060),
    o = n(925329),
    l = n(689938),
    u = n(901613);
function c(e) {
    let { application: t, timestamp: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.Z, {
                size: o.Z.Sizes.LARGE,
                game: t
            }),
            (0, r.jsxs)('div', {
                className: u.textContainer,
                children: [
                    (0, r.jsx)(s.Text, {
                        className: u.timestamp,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: a()(n).format('LLLL')
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        color: 'interactive-active',
                        children: l.Z.Messages.MESSAGE_GAME_ICON_TOOLTIP_CONTENT.format({ applicationName: t.name })
                    })
                ]
            })
        ]
    });
}
function d(e) {
    let { application: t, timestamp: n, children: i } = e;
    return (0, r.jsx)(s.Tooltip, {
        hideOnClick: !0,
        position: 'top',
        'aria-label': l.Z.Messages.MESSAGE_GAME_ICON_TOOLTIP,
        tooltipClassName: u.gameMessageTooltip,
        tooltipContentClassName: u.gameMessageTooltipContent,
        text: (0, r.jsx)(c, {
            application: t,
            timestamp: n
        }),
        children: (e) =>
            (0, r.jsx)(s.Clickable, {
                tag: 'span',
                ...e,
                children: i
            })
    });
}
function _(e) {
    let { application: t, timestamp: n, compact: i, children: a } = e;
    return (0, r.jsxs)(d, {
        application: t,
        timestamp: n,
        children: [
            i
                ? null
                : (0, r.jsx)(s.GameControllerIcon, {
                      className: u.gameIcon,
                      size: 'custom',
                      width: 14,
                      height: 14
                  }),
            a
        ]
    });
}

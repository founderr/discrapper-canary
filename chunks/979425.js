n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    a = n.n(s),
    l = n(481060),
    r = n(871118),
    o = n(689938),
    c = n(810190);
function u(e) {
    let { stream: t, isSmall: n, selected: s, isSelfStream: u } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.Z, {
                className: a()(c.absoluteFill, c.streamPreviewOpacity),
                stream: t,
                noText: !0
            }),
            !s &&
                (0, i.jsxs)('div', {
                    className: a()(c.content, c.streamUnavailable, { [c.small]: n }),
                    children: [
                        (0, i.jsx)(l.Text, {
                            className: c.streamUnavailableText,
                            color: 'always-white',
                            variant: n ? 'text-sm/semibold' : 'text-md/semibold',
                            children: u ? o.Z.Messages.CONSOLE_STREAMING : o.Z.Messages.CONSOLE_STREAM_UNAVAILABLE
                        }),
                        (0, i.jsx)(l.TooltipContainer, {
                            text: u ? o.Z.Messages.CONSOLE_STREAMING_TOOLTIP : o.Z.Messages.CONSOLE_STREAM_UNAVAILABLE_TOOLTIP,
                            className: c.darkCircle,
                            children: (0, i.jsx)('div', {
                                children: (0, i.jsx)(l.ScreenSlashIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: c.stopStreamIcon,
                                    colorClass: c.stopStreamForeground
                                })
                            })
                        })
                    ]
                })
        ]
    });
}

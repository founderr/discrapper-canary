n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(789020);
var i = n(735250);
n(470079);
var a = n(913527),
    o = n.n(a),
    s = n(481060),
    l = n(835473),
    u = n(925329),
    c = n(630388),
    d = n(981631),
    _ = n(689938),
    E = n(341383);
function f(e) {
    let { application: t, messageTimestamp: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.Z, {
                size: u.Z.Sizes.LARGE,
                game: t
            }),
            (0, i.jsxs)('div', {
                className: E.textContainer,
                children: [
                    (0, i.jsx)(s.Text, {
                        className: E.timestamp,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: o()(n).format('LLLL')
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        color: 'interactive-active',
                        children: _.Z.Messages.MESSAGE_GAME_ICON_TOOLTIP_CONTENT.format({ applicationName: t.name })
                    })
                ]
            })
        ]
    });
}
function h(e) {
    let { message: t } = e,
        n = (0, l.q)(t.applicationId);
    return null != n && (0, c.yE)(n.flags, d.udG.SOCIAL_LAYER_INTEGRATION)
        ? (0, i.jsx)(s.Tooltip, {
              hideOnClick: !0,
              position: 'top',
              'aria-label': _.Z.Messages.MESSAGE_GAME_ICON_TOOLTIP,
              tooltipClassName: E.gameMessageTooltip,
              tooltipContentClassName: E.gameMessageTooltipContent,
              text: (0, i.jsx)(f, {
                  application: n,
                  messageTimestamp: t.timestamp
              }),
              children: (e) =>
                  (0, i.jsx)(s.Clickable, {
                      tag: 'span',
                      ...e,
                      children: (0, i.jsx)(s.GameControllerIcon, {
                          className: E.gameIcon,
                          size: 'custom',
                          width: 14,
                          height: 14
                      })
                  })
          })
        : null;
}

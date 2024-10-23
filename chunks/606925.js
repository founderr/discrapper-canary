n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var s = n(442837),
    a = n(231757),
    l = n(553795),
    r = n(915863),
    o = n(689938),
    c = n(814803);
function u(e) {
    let { platform: t, color: n, look: u, onAction: d, Icon: h } = e;
    if ((0, s.e7)([l.Z], () => l.Z.getAccounts().some((e) => e.type === t.type))) return null;
    let m =
        null != h
            ? (0, i.jsx)(h, { className: c.platformIcon })
            : (0, i.jsx)('img', {
                  alt: '',
                  className: c.platformIcon,
                  src: t.icon.whiteSVG
              });
    return (0, i.jsx)(
        r.Z,
        {
            onClick: () => {
                null == d || d(),
                    (0, a.Z)({
                        platformType: t.type,
                        location: 'Activity Action'
                    });
            },
            color: n,
            look: u,
            fullWidth: !0,
            children: (0, i.jsxs)('div', {
                className: c.flex,
                children: [m, o.Z.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({ platform: t.name })]
            })
        },
        'connect-platform-activity'
    );
}

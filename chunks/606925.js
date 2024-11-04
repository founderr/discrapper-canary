n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(231757),
    s = n(553795),
    a = n(915863),
    o = n(388032),
    c = n(814803);
function u(e) {
    let { platform: t, color: n, look: u, onAction: d, Icon: h } = e;
    if ((0, l.e7)([s.Z], () => s.Z.getAccounts().some((e) => e.type === t.type))) return null;
    let m =
        null != h
            ? (0, i.jsx)(h, { className: c.platformIcon })
            : (0, i.jsx)('img', {
                  alt: '',
                  className: c.platformIcon,
                  src: t.icon.whiteSVG
              });
    return (0, i.jsx)(
        a.Z,
        {
            onClick: () => {
                null == d || d(),
                    (0, r.Z)({
                        platformType: t.type,
                        location: 'Activity Action'
                    });
            },
            color: n,
            look: u,
            fullWidth: !0,
            children: (0, i.jsxs)('div', {
                className: c.flex,
                children: [m, o.intl.format(o.t.XWSHTU, { platform: t.name })]
            })
        },
        'connect-platform-activity'
    );
}

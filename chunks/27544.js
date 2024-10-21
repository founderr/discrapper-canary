s.d(t, {
    Z: function () {
        return g;
    }
}),
    s(47120);
var n = s(200651),
    l = s(192379),
    i = s(748780),
    a = s(442837),
    r = s(481060),
    o = s(741361),
    c = s(856606),
    d = s(277053),
    u = s(259580),
    h = s(689938),
    m = s(724129);
function g() {
    let e = (0, a.e7)([d.Z], () => d.Z.advancedMode),
        [t] = l.useState(new i.Z.Value(e ? 1 : 0));
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(r.FormDivider, { className: m.advancedModeDivider }),
            (0, n.jsx)(r.HeadingLevel, {
                component: (0, n.jsx)(r.Button, {
                    look: r.Button.Looks.BLANK,
                    color: r.Button.Colors.TRANSPARENT,
                    onClick: function () {
                        e
                            ? i.Z.timing(t, {
                                  toValue: 0,
                                  duration: 250
                              }).start(() => {
                                  (0, o.d$)(!1);
                              })
                            : ((0, o.d$)(!0),
                              i.Z.timing(t, {
                                  toValue: 1,
                                  duration: 250
                              }).start());
                    },
                    children: (0, n.jsxs)(r.FormTitle, {
                        tag: 'h1',
                        className: m.advancedTitle,
                        children: [
                            h.Z.Messages.CHANNEL_PERMISSIONS_ADVANCED_PERMISSIONS,
                            (0, n.jsx)(u.Z, {
                                expanded: e,
                                className: m.titleCaret,
                                width: 20,
                                height: 20
                            })
                        ]
                    })
                }),
                children:
                    e &&
                    (0, n.jsx)(i.Z.div, {
                        style: { opacity: t },
                        children: (0, n.jsx)(c.Z, {})
                    })
            })
        ]
    });
}

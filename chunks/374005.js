n.d(t, {
    b: function () {
        return E;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(393238),
    a = n(540059),
    s = n(720734),
    o = n(840780),
    c = n(235555),
    d = n(746508),
    u = n(210724),
    h = n(905423),
    m = n(410575),
    p = n(981631),
    g = n(388032),
    f = n(812040);
function _(e) {
    let t = (0, h.Z)((e) => {
        let { guildId: t } = e;
        return t;
    });
    return (0, i.jsx)(o.Z, {
        ...e,
        guildId: t
    });
}
function E() {
    let e = (0, a.Q)('AppPanels'),
        t = r.useRef(null);
    return (
        (0, l.P)(
            t,
            (t) => {
                let { height: n } = t;
                e && document.body.style.setProperty('--custom-app-panels-height', ''.concat(n, 'px'));
            },
            []
        ),
        (0, i.jsxs)('section', {
            ref: t,
            className: f.panels,
            'aria-label': g.intl.string(g.t.StREWF),
            children: [
                (0, i.jsx)(u.Z, {}),
                (0, i.jsx)(c.Z, {}),
                (0, i.jsx)(m.Z, {
                    section: p.jXE.ACTIVITY_PANEL,
                    children: (0, i.jsx)(_, { className: f.activityPanel })
                }),
                (0, i.jsx)(m.Z, {
                    section: p.jXE.RTC_CONNECTION_PANEL,
                    children: (0, i.jsx)(d.Z, {})
                }),
                (0, i.jsx)(m.Z, {
                    section: p.jXE.ACCOUNT_PANEL,
                    children: (0, i.jsx)(s.Z, {})
                })
            ]
        })
    );
}

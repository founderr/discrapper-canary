n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(873546),
    s = n(442837),
    a = n(481060),
    o = n(665149),
    c = n(911560),
    u = n(210887),
    d = n(914010),
    h = n(981631),
    m = n(388032),
    p = n(294826);
function f(e) {
    let t,
        { channelId: f } = e;
    l.useEffect(() => {
        c.Z.loadThread(f);
    });
    let g = (0, s.e7)([d.Z], () => d.Z.getGuildId()) === h.I_8,
        C = (0, s.e7)([u.Z], () => u.Z.theme);
    return (
        (t = g
            ? (0, i.jsx)(a.EmptyStateText, {
                  note: m.intl.string(m.t['D5SN5+']),
                  children: m.intl.string(m.t.xVTAdX)
              })
            : null != f
              ? (0, i.jsx)(a.Spinner, { type: a.Spinner.Type.SPINNING_CIRCLE })
              : (0, i.jsx)(a.EmptyStateText, {
                    note: m.intl.string(m.t['LTr+x8']),
                    children: m.intl.string(m.t.ai6Lbm)
                })),
        (0, i.jsxs)('div', {
            className: p.noChannel,
            children: [
                r.tq && (0, i.jsx)(o.ZP, { children: (0, i.jsx)(l.Fragment, {}) }),
                (0, i.jsxs)(a.EmptyState, {
                    theme: C,
                    children: [
                        (0, i.jsx)(a.EmptyStateImage, {
                            darkSrc: g ? n(691270) : n(625065),
                            lightSrc: g ? n(704139) : n(875184),
                            width: 272,
                            height: 222
                        }),
                        t
                    ]
                })
            ]
        })
    );
}

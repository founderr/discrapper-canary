n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(873546),
    r = n(442837),
    s = n(481060),
    o = n(665149),
    c = n(911560),
    d = n(210887),
    u = n(592125),
    h = n(496675),
    p = n(914010),
    m = n(981631),
    f = n(388032),
    g = n(294826);
function C(e) {
    let t,
        { channelId: C } = e;
    l.useEffect(() => {
        c.Z.loadThread(C);
    });
    let x = (0, r.e7)([p.Z], () => p.Z.getGuildId()) === m.I_8,
        _ = (0, r.e7)([d.Z], () => d.Z.theme),
        v = (0, r.e7)([h.Z, u.Z], () => h.Z.can(m.Plq.VIEW_CHANNEL, u.Z.getChannel(C)));
    return (
        (t = x
            ? (0, i.jsx)(s.EmptyStateText, {
                  note: f.intl.string(f.t['D5SN5+']),
                  children: f.intl.string(f.t.xVTAdX)
              })
            : null != C && v
              ? (0, i.jsx)(s.Spinner, { type: s.Spinner.Type.SPINNING_CIRCLE })
              : null == C || v
                ? (0, i.jsx)(s.EmptyStateText, {
                      note: f.intl.string(f.t['LTr+x8']),
                      children: f.intl.string(f.t.ai6Lbm)
                  })
                : (0, i.jsx)(s.EmptyStateText, {
                      note: f.intl.string(f.t.gB0uRE),
                      children: f.intl.string(f.t.qZJlWF)
                  })),
        (0, i.jsxs)('div', {
            className: g.noChannel,
            children: [
                a.tq && (0, i.jsx)(o.ZP, { children: (0, i.jsx)(l.Fragment, {}) }),
                (0, i.jsxs)(s.EmptyState, {
                    theme: _,
                    children: [
                        (0, i.jsx)(s.EmptyStateImage, {
                            darkSrc: x ? n(691270) : n(625065),
                            lightSrc: x ? n(704139) : n(875184),
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

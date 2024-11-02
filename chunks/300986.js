n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(692547),
    a = n(481060),
    o = n(706454),
    s = n(594174),
    c = n(626135),
    u = n(63063),
    d = n(51144),
    m = n(665149),
    f = n(981631),
    h = n(388032);
let p = new Set(['ko', 'ja']);
function g() {
    let e = (0, r.e7)([s.default], () => s.default.getCurrentUser()),
        t = (0, r.e7)([o.default], () => o.default.locale),
        n = (0, d.EO)(e);
    return (0, i.jsx)(a.Anchor, {
        href: u.w,
        target: '_blank',
        tabIndex: -1,
        children: (0, i.jsx)(m.JO, {
            color: n ? l.Z.unsafe_rawColors.GREEN_360.css : 'currentColor',
            onClick: () => c.default.track(f.rMx.HELP_CLICKED, { highlighted: n }),
            icon: a.CircleQuestionIcon,
            tooltipPosition: p.has(t) ? 'left' : void 0,
            tooltip: h.intl.string(h.t.cqEoj4)
        })
    });
}

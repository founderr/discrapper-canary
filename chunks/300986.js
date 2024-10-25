n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var a = n(442837),
    s = n(692547),
    r = n(481060),
    l = n(706454),
    o = n(594174),
    c = n(626135),
    u = n(63063),
    d = n(51144),
    _ = n(665149),
    E = n(981631),
    I = n(689938);
let m = new Set(['ko', 'ja']);
function f() {
    let e = (0, a.e7)([o.default], () => o.default.getCurrentUser()),
        t = (0, a.e7)([l.default], () => l.default.locale),
        n = (0, d.EO)(e);
    return (0, i.jsx)(r.Anchor, {
        href: u.w,
        target: '_blank',
        tabIndex: -1,
        children: (0, i.jsx)(_.JO, {
            color: n ? s.Z.unsafe_rawColors.GREEN_360.css : 'currentColor',
            onClick: () => c.default.track(E.rMx.HELP_CLICKED, { highlighted: n }),
            icon: r.CircleQuestionIcon,
            tooltipPosition: m.has(t) ? 'left' : void 0,
            tooltip: I.Z.Messages.HELP
        })
    });
}

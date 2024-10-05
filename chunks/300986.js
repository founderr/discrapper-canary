n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var i = n(735250);
n(470079);
var a = n(442837),
    s = n(692547),
    l = n(481060),
    r = n(706454),
    o = n(594174),
    c = n(626135),
    d = n(63063),
    u = n(51144),
    _ = n(665149),
    E = n(981631),
    I = n(689938);
let m = new Set(['ko', 'ja']);
function T() {
    let e = (0, a.e7)([o.default], () => o.default.getCurrentUser()),
        t = (0, a.e7)([r.default], () => r.default.locale),
        n = (0, u.EO)(e);
    return (0, i.jsx)(l.Anchor, {
        href: d.w,
        target: '_blank',
        tabIndex: -1,
        children: (0, i.jsx)(_.JO, {
            color: n ? s.Z.unsafe_rawColors.GREEN_360.css : 'currentColor',
            onClick: () => c.default.track(E.rMx.HELP_CLICKED, { highlighted: n }),
            icon: l.CircleQuestionIcon,
            tooltipPosition: m.has(t) ? 'left' : void 0,
            tooltip: I.Z.Messages.HELP
        })
    });
}

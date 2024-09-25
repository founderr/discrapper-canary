n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(47120);
var i = n(735250);
n(470079);
var a = n(442837),
    o = n(692547),
    s = n(481060),
    l = n(706454),
    u = n(594174),
    c = n(626135),
    d = n(63063),
    _ = n(51144),
    E = n(665149),
    f = n(981631),
    h = n(689938);
let p = new Set(['ko', 'ja']);
function m() {
    let e = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        t = (0, a.e7)([l.default], () => l.default.locale),
        n = (0, _.EO)(e);
    return (0, i.jsx)(s.Anchor, {
        href: d.w,
        target: '_blank',
        tabIndex: -1,
        children: (0, i.jsx)(E.JO, {
            color: n ? o.Z.unsafe_rawColors.GREEN_360.css : 'currentColor',
            onClick: () => c.default.track(f.rMx.HELP_CLICKED, { highlighted: n }),
            icon: s.CircleQuestionIcon,
            tooltipPosition: p.has(t) ? 'left' : void 0,
            tooltip: h.Z.Messages.HELP
        })
    });
}

n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(735250);
n(470079);
var s = n(120356),
    r = n.n(s),
    a = n(442837),
    o = n(481060),
    l = n(556296),
    c = n(13140),
    d = n(981631),
    u = n(389439);
let h = {
    [d.kg4.TOGGLE_MUTE]: {
        legacy: {
            slash: o.MicrophoneSlashIcon,
            default: o.MicrophoneIcon
        },
        new: {
            slash: o.MicrophoneSlashIcon,
            default: o.MicrophoneIcon
        }
    }
};
function p(e) {
    let { value: t, action: n, shouldShow: s } = e,
        d = (0, a.e7)([l.Z], () => l.Z.getKeybindForAction(n, !1, !0)),
        p = (0, o.useRedesignIconContext)().enabled;
    if (null == d || !s) return null;
    let f = c.BB(d.shortcut),
        _ = p ? h[n].new : h[n].legacy,
        E = t ? _.slash : _.default;
    return (0, i.jsxs)('div', {
        className: u.keybindIndicator,
        children: [
            (0, i.jsx)(E, {
                className: u.keybindIcon,
                size: 'xs',
                color: 'currentColor'
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-xxs/semibold',
                className: r()(u.keybindIndicatorText),
                children: f
            })
        ]
    });
}

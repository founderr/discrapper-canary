n.d(t, {
    X: function () {
        return r;
    }
});
var i = n(200651);
n(192379);
var a = n(481060),
    s = n(988064);
function r(e) {
    let { tooltipText: t, textColor: n } = e;
    return (0, i.jsxs)('span', {
        className: s.tooltipTextContainer,
        children: [
            (0, i.jsx)(a.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                className: s.nitroWheel
            }),
            (0, i.jsx)(a.Text, {
                className: s.tooltipText,
                variant: 'text-sm/medium',
                color: null != n ? n : 'text-normal',
                children: t
            })
        ]
    });
}

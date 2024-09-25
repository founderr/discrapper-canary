n.d(t, {
    X: function () {
        return o;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(988064);
function o(e) {
    let { tooltipText: t, textColor: n } = e;
    return (0, r.jsxs)('span', {
        className: a.tooltipTextContainer,
        children: [
            (0, r.jsx)(i.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                className: a.nitroWheel
            }),
            (0, r.jsx)(i.Text, {
                className: a.tooltipText,
                variant: 'text-sm/medium',
                color: null != n ? n : 'text-normal',
                children: t
            })
        ]
    });
}

n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(649576);
function r(e) {
    let { userCount: t } = e;
    return (0, i.jsxs)('div', {
        className: a.container,
        children: [
            (0, i.jsx)(l.GroupIcon, {
                size: 'xxs',
                color: 'currentColor',
                className: a.peopleIcon
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                className: a.userCountText,
                children: t
            })
        ]
    });
}

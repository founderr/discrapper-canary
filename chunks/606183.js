t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(735250);
t(470079);
var a = t(481060),
    r = t(668896);
function o(e) {
    let { activeSection: n, setSection: t, sections: o } = e;
    return (0, i.jsx)(a.TabBar, {
        selectedItem: n,
        type: 'top',
        onItemSelect: t,
        className: r.tabBar,
        children: o.map((e) => {
            let { name: n, text: t, Icon: o } = e;
            return (0, i.jsxs)(
                a.TabBar.Item,
                {
                    id: n,
                    className: r.tabBarItem,
                    'aria-label': t,
                    children: [
                        (0, i.jsx)(o, {
                            className: r.icon,
                            color: 'currentColor'
                        }),
                        t
                    ]
                },
                n
            );
        })
    });
}

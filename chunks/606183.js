a.d(n, {
    Z: function () {
        return l;
    }
});
var i = a(735250);
a(470079);
var t = a(481060),
    r = a(668896);
function l(e) {
    let { activeSection: n, setSection: a, sections: l } = e;
    return (0, i.jsx)(t.TabBar, {
        selectedItem: n,
        type: 'top',
        onItemSelect: a,
        className: r.tabBar,
        children: l.map((e) => {
            let { name: n, text: a, Icon: l } = e;
            return (0, i.jsxs)(
                t.TabBar.Item,
                {
                    id: n,
                    className: r.tabBarItem,
                    'aria-label': a,
                    children: [
                        (0, i.jsx)(l, {
                            className: r.icon,
                            color: 'currentColor'
                        }),
                        a
                    ]
                },
                n
            );
        })
    });
}

n.d(a, {
    Z: function () {
        return l;
    }
});
var i = n(735250);
n(470079);
var t = n(481060),
    r = n(668896);
function l(e) {
    let { activeSection: a, setSection: n, sections: l } = e;
    return (0, i.jsx)(t.TabBar, {
        selectedItem: a,
        type: 'top',
        onItemSelect: n,
        className: r.tabBar,
        children: l.map((e) => {
            let { name: a, text: n, Icon: l } = e;
            return (0, i.jsxs)(
                t.TabBar.Item,
                {
                    id: a,
                    className: r.tabBarItem,
                    'aria-label': n,
                    children: [
                        (0, i.jsx)(l, {
                            className: r.icon,
                            color: 'currentColor'
                        }),
                        n
                    ]
                },
                a
            );
        })
    });
}

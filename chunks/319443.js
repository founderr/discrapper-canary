var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(674588),
    l = n(611928),
    o = n(922122),
    c = n(119014),
    d = n(726941),
    u = n(370648),
    _ = n(979007),
    h = n(842221);
t.Z = function () {
    let { tabs: e, selectedTab: t, onSelectTab: n } = (0, c.i)();
    return (
        a.useEffect(() => {
            r.CP();
        }, []),
        (0, i.jsxs)('div', {
            className: h.container,
            children: [
                (0, i.jsxs)(l.ZP, {
                    children: [
                        (0, i.jsx)(l.aV, { icon: s.AppsIcon }),
                        (0, i.jsx)(o.Z, {
                            tabs: e,
                            selectedTab: t,
                            onTabSelect: n
                        })
                    ]
                }),
                t === _.k ? (0, i.jsx)(u.Z, {}) : (0, i.jsx)(d.Z, { tabId: Number(t) })
            ]
        })
    );
};

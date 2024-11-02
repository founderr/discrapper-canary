var i = n(399606),
    r = n(626135),
    a = n(280570),
    s = n(914788),
    l = n(292352),
    o = n(981631);
t.Z = () => {
    let e = (0, i.e7)([s.Z], () => s.Z.getSelectedTab());
    return {
        selectedTab: e,
        handleTabChange: (e) => {
            a.ZP.selectTab(e),
                r.default.track(o.rMx.FAMILY_CENTER_ACTION, {
                    action: l.YC.TabChange,
                    tab: e
                });
        }
    };
};

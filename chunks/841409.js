var s = n(399606),
    a = n(626135),
    r = n(280570),
    i = n(914788),
    o = n(292352),
    l = n(981631);
t.Z = () => {
    let e = (0, s.e7)([i.Z], () => i.Z.getSelectedTab());
    return {
        selectedTab: e,
        handleTabChange: (e) => {
            r.ZP.selectTab(e),
                a.default.track(l.rMx.FAMILY_CENTER_ACTION, {
                    action: o.YC.TabChange,
                    tab: e
                });
        }
    };
};

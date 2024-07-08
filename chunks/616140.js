i.d(n, {
    Z: function () {
        return N;
    }
}), i(47120);
var o = i(735250), s = i(470079), t = i(442837), l = i(706898), a = i(481060), r = i(246946), c = i(543595), d = i(785717), u = i(100849), I = i(487922), E = i(944546), _ = i(470900), f = i(988246), Z = i(715388), m = i(834534), v = i(228168), S = i(47460);
function x(e) {
    let {
        section: n,
        subsection: i,
        user: s,
        currentUser: t,
        displayProfile: l,
        onClose: a
    } = e;
    return n === v.oh.ACTIVITY ? (0, o.jsx)(u.Z, {
        showActions: (null == t ? void 0 : t.id) !== s.id,
        user: s,
        type: c.Y.SIMPLIFIED_PROFILE,
        onClose: a
    }) : n === v.oh.MUTUAL_FRIENDS ? (0, o.jsx)(E.Z, {
        user: s,
        onClose: a
    }) : n === v.oh.MUTUAL_GUILDS ? (0, o.jsx)(_.Z, {
        user: s,
        onClose: a
    }) : n === v.oh.BOT_DATA_ACCESS ? (0, o.jsx)(I.Z, { user: s }) : n === v.oh.BOT_INFO ? (0, o.jsx)(Z.Z, {
        user: s,
        currentUser: t,
        displayProfile: l,
        subsection: i,
        onClose: a
    }) : (0, o.jsx)(m.Z, {
        user: s,
        currentUser: t,
        displayProfile: l,
        subsection: i,
        onClose: a
    });
}
function N(e) {
    var n, i, c;
    let {
            user: u,
            currentUser: I,
            displayProfile: E,
            items: _,
            initialSection: Z = v.oh.USER_INFO,
            initialSubsection: m,
            onClose: N
        } = e, {trackUserProfileAction: h} = (0, d.KZ)(), g = (0, t.e7)([r.Z], () => r.Z.hidePersonalInformation), [{
                section: p,
                subsection: C
            }, T] = s.useState({
            section: null !== (c = null === (n = _.find(e => {
                let {section: n} = e;
                return n === Z;
            })) || void 0 === n ? void 0 : n.section) && void 0 !== c ? c : null === (i = _[0]) || void 0 === i ? void 0 : i.section,
            subsection: m
        }), R = s.useCallback(e => {
            h({
                action: 'PRESS_SECTION',
                section: e
            }), T({
                section: e,
                subsection: void 0
            });
        }, [
            h,
            T
        ]);
    return g ? (0, o.jsx)('div', {
        className: S.container,
        children: (0, o.jsx)(f.Z, {})
    }) : (0, o.jsxs)('div', {
        className: S.container,
        children: [
            (0, o.jsx)(l.n, {
                className: S.tabBar,
                type: 'top',
                selectedItem: p,
                onItemSelect: R,
                children: _.map(e => {
                    let {
                        section: n,
                        text: i
                    } = e;
                    return (0, o.jsx)(l.n.Item, {
                        className: S.tabBarItem,
                        id: n,
                        'aria-label': i,
                        children: (0, o.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            children: i
                        })
                    }, n);
                })
            }),
            (0, o.jsx)(x, {
                items: _,
                section: p,
                subsection: C,
                user: u,
                currentUser: I,
                displayProfile: E,
                onClose: N
            })
        ]
    });
}

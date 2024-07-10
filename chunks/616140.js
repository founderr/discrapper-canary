n.d(i, {
    Z: function () {
        return h;
    }
}), n(47120);
var s = n(735250), l = n(470079), t = n(442837), o = n(706898), r = n(481060), a = n(246946), d = n(543595), c = n(785717), u = n(100849), I = n(944546), _ = n(470900), f = n(988246), E = n(970041), m = n(715388), S = n(834534), v = n(228168), Z = n(47460);
function x(e) {
    let {
        section: i,
        subsection: n,
        user: l,
        currentUser: t,
        displayProfile: o,
        onClose: r
    } = e;
    return i === v.oh.ACTIVITY ? (0, s.jsx)(u.Z, {
        showActions: (null == t ? void 0 : t.id) !== l.id,
        user: l,
        type: d.Y.SIMPLIFIED_PROFILE,
        onClose: r
    }) : i === v.oh.MUTUAL_FRIENDS ? (0, s.jsx)(I.Z, {
        user: l,
        onClose: r
    }) : i === v.oh.MUTUAL_GUILDS ? (0, s.jsx)(_.Z, {
        user: l,
        onClose: r
    }) : i === v.oh.BOT_DATA_ACCESS ? (0, s.jsx)(E.Z, { user: l }) : i === v.oh.BOT_INFO ? (0, s.jsx)(m.Z, {
        user: l,
        currentUser: t,
        displayProfile: o,
        subsection: n,
        onClose: r
    }) : (0, s.jsx)(S.Z, {
        user: l,
        currentUser: t,
        displayProfile: o,
        subsection: n,
        onClose: r
    });
}
function h(e) {
    var i, n, d;
    let {
            user: u,
            currentUser: I,
            displayProfile: _,
            items: E,
            initialSection: m = v.oh.USER_INFO,
            initialSubsection: S,
            onClose: h
        } = e, {trackUserProfileAction: p} = (0, c.KZ)(), g = (0, t.e7)([a.Z], () => a.Z.hidePersonalInformation), [{
                section: T,
                subsection: N
            }, C] = l.useState({
            section: null !== (d = null === (i = E.find(e => {
                let {section: i} = e;
                return i === m;
            })) || void 0 === i ? void 0 : i.section) && void 0 !== d ? d : null === (n = E[0]) || void 0 === n ? void 0 : n.section,
            subsection: S
        }), j = l.useCallback(e => {
            p({
                action: 'PRESS_SECTION',
                section: e
            }), C({
                section: e,
                subsection: void 0
            });
        }, [
            p,
            C
        ]);
    return g ? (0, s.jsx)('div', {
        className: Z.container,
        children: (0, s.jsx)(f.Z, {})
    }) : (0, s.jsxs)('div', {
        className: Z.container,
        children: [
            (0, s.jsx)(o.n, {
                className: Z.tabBar,
                type: 'top',
                selectedItem: T,
                onItemSelect: j,
                children: E.map(e => {
                    let {
                        section: i,
                        text: n
                    } = e;
                    return (0, s.jsx)(o.n.Item, {
                        className: Z.tabBarItem,
                        id: i,
                        'aria-label': n,
                        children: (0, s.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            children: n
                        })
                    }, i);
                })
            }),
            (0, s.jsx)(x, {
                items: E,
                section: T,
                subsection: N,
                user: u,
                currentUser: I,
                displayProfile: _,
                onClose: h
            })
        ]
    });
}

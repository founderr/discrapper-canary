i.d(n, {
    Z: function () {
        return h;
    }
}), i(47120);
var l = i(735250), s = i(470079), o = i(442837), t = i(706898), a = i(481060), r = i(246946), d = i(543595), c = i(785717), u = i(100849), I = i(487922), f = i(944546), _ = i(470900), E = i(988246), m = i(715388), Z = i(834534), v = i(228168), S = i(47460);
function x(e) {
    let {
        section: n,
        subsection: i,
        user: s,
        currentUser: o,
        displayProfile: t,
        onClose: a
    } = e;
    return n === v.oh.ACTIVITY ? (0, l.jsx)(u.Z, {
        showActions: (null == o ? void 0 : o.id) !== s.id,
        user: s,
        type: d.Y.SIMPLIFIED_PROFILE,
        onClose: a
    }) : n === v.oh.MUTUAL_FRIENDS ? (0, l.jsx)(f.Z, {
        user: s,
        onClose: a
    }) : n === v.oh.MUTUAL_GUILDS ? (0, l.jsx)(_.Z, {
        user: s,
        onClose: a
    }) : n === v.oh.BOT_DATA_ACCESS ? (0, l.jsx)(I.Z, { user: s }) : n === v.oh.BOT_INFO ? (0, l.jsx)(m.Z, {
        user: s,
        currentUser: o,
        displayProfile: t,
        subsection: i,
        onClose: a
    }) : (0, l.jsx)(Z.Z, {
        user: s,
        currentUser: o,
        displayProfile: t,
        subsection: i,
        onClose: a
    });
}
function h(e) {
    var n, i, d;
    let {
            user: u,
            currentUser: I,
            displayProfile: f,
            items: _,
            initialSection: m = v.oh.USER_INFO,
            initialSubsection: Z,
            onClose: h
        } = e, {trackUserProfileAction: N} = (0, c.KZ)(), p = (0, o.e7)([r.Z], () => r.Z.hidePersonalInformation), [{
                section: g,
                subsection: T
            }, C] = s.useState({
            section: null !== (d = null === (n = _.find(e => {
                let {section: n} = e;
                return n === m;
            })) || void 0 === n ? void 0 : n.section) && void 0 !== d ? d : null === (i = _[0]) || void 0 === i ? void 0 : i.section,
            subsection: Z
        }), j = s.useCallback(e => {
            N({
                action: 'PRESS_SECTION',
                section: e
            }), C({
                section: e,
                subsection: void 0
            });
        }, [
            N,
            C
        ]);
    return p ? (0, l.jsx)('div', {
        className: S.container,
        children: (0, l.jsx)(E.Z, {})
    }) : (0, l.jsxs)('div', {
        className: S.container,
        children: [
            (0, l.jsx)(t.n, {
                className: S.tabBar,
                type: 'top',
                selectedItem: g,
                onItemSelect: j,
                children: _.map(e => {
                    let {
                        section: n,
                        text: i
                    } = e;
                    return (0, l.jsx)(t.n.Item, {
                        className: S.tabBarItem,
                        id: n,
                        'aria-label': i,
                        children: (0, l.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            children: i
                        })
                    }, n);
                })
            }),
            (0, l.jsx)(x, {
                items: _,
                section: g,
                subsection: T,
                user: u,
                currentUser: I,
                displayProfile: f,
                onClose: h
            })
        ]
    });
}

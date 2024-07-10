n.d(i, {
    Z: function () {
        return h;
    }
}), n(47120);
var l = n(735250), s = n(470079), t = n(442837), o = n(706898), a = n(481060), r = n(246946), d = n(543595), c = n(785717), u = n(100849), I = n(487922), f = n(944546), _ = n(470900), E = n(988246), m = n(715388), Z = n(834534), v = n(228168), S = n(47460);
function x(e) {
    let {
        section: i,
        subsection: n,
        user: s,
        currentUser: t,
        displayProfile: o,
        onClose: a
    } = e;
    return i === v.oh.ACTIVITY ? (0, l.jsx)(u.Z, {
        showActions: (null == t ? void 0 : t.id) !== s.id,
        user: s,
        type: d.Y.SIMPLIFIED_PROFILE,
        onClose: a
    }) : i === v.oh.MUTUAL_FRIENDS ? (0, l.jsx)(f.Z, {
        user: s,
        onClose: a
    }) : i === v.oh.MUTUAL_GUILDS ? (0, l.jsx)(_.Z, {
        user: s,
        onClose: a
    }) : i === v.oh.BOT_DATA_ACCESS ? (0, l.jsx)(I.Z, { user: s }) : i === v.oh.BOT_INFO ? (0, l.jsx)(m.Z, {
        user: s,
        currentUser: t,
        displayProfile: o,
        subsection: n,
        onClose: a
    }) : (0, l.jsx)(Z.Z, {
        user: s,
        currentUser: t,
        displayProfile: o,
        subsection: n,
        onClose: a
    });
}
function h(e) {
    var i, n, d;
    let {
            user: u,
            currentUser: I,
            displayProfile: f,
            items: _,
            initialSection: m = v.oh.USER_INFO,
            initialSubsection: Z,
            onClose: h
        } = e, {trackUserProfileAction: p} = (0, c.KZ)(), g = (0, t.e7)([r.Z], () => r.Z.hidePersonalInformation), [{
                section: N,
                subsection: T
            }, C] = s.useState({
            section: null !== (d = null === (i = _.find(e => {
                let {section: i} = e;
                return i === m;
            })) || void 0 === i ? void 0 : i.section) && void 0 !== d ? d : null === (n = _[0]) || void 0 === n ? void 0 : n.section,
            subsection: Z
        }), j = s.useCallback(e => {
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
    return g ? (0, l.jsx)('div', {
        className: S.container,
        children: (0, l.jsx)(E.Z, {})
    }) : (0, l.jsxs)('div', {
        className: S.container,
        children: [
            (0, l.jsx)(o.n, {
                className: S.tabBar,
                type: 'top',
                selectedItem: N,
                onItemSelect: j,
                children: _.map(e => {
                    let {
                        section: i,
                        text: n
                    } = e;
                    return (0, l.jsx)(o.n.Item, {
                        className: S.tabBarItem,
                        id: i,
                        'aria-label': n,
                        children: (0, l.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            children: n
                        })
                    }, i);
                })
            }),
            (0, l.jsx)(x, {
                items: _,
                section: N,
                subsection: T,
                user: u,
                currentUser: I,
                displayProfile: f,
                onClose: h
            })
        ]
    });
}

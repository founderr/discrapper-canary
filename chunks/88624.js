n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var s = n(512722),
    r = n.n(s),
    l = n(442837),
    a = n(481060),
    o = n(346951),
    c = n(644744),
    d = n(792423),
    u = n(674985),
    m = n(594174),
    h = n(843200),
    g = n(388032),
    p = n(906405);
function x() {
    let {
        houseMembership: e,
        isClaimed: t,
        isVerified: n
    } = (0, l.cj)([m.default, u.Z], () => {
        let e = m.default.getCurrentUser();
        return (
            r()(null != e, 'UserSettingsHypeSquad: currentUser cannot be undefined'),
            {
                houseMembership: u.Z.getHouseMembership(),
                isClaimed: e.isClaimed(),
                isVerified: e.verified
            }
        );
    });
    return (0, i.jsxs)(a.HeadingLevel, {
        component: (0, i.jsxs)('div', {
            className: p.intro,
            children: [
                (0, i.jsx)(a.Heading, {
                    variant: 'heading-xxl/semibold',
                    className: p.introHeader,
                    children: null == e ? g.intl.string(g.t.iZowCQ) : g.intl.string(g.t.e7fL7O)
                }),
                (0, i.jsx)(a.Text, {
                    variant: 'text-lg/normal',
                    children: g.intl.string(g.t['6FaVFB'])
                })
            ]
        }),
        children: [
            (0, i.jsx)(h.Z, {
                className: p.verificationNotice,
                unclaimedNotice: g.intl.string(g.t.vZU8Ki),
                unverifiedNotice: g.intl.string(g.t.T7TYEB)
            }),
            (0, i.jsx)(c.Z, {
                houseMembership: e,
                isClaimed: t,
                isVerified: n
            }),
            (0, i.jsx)(o.Z, {}),
            (0, i.jsx)(d.Z, { isHypeSquadOnlineMember: null != e })
        ]
    });
}

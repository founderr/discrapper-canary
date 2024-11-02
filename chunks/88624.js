var i = n(200651),
    s = n(192379),
    r = n(512722),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(346951),
    d = n(644744),
    u = n(792423),
    m = n(674985),
    h = n(594174),
    g = n(843200),
    p = n(388032),
    x = n(903407);
class S extends s.PureComponent {
    renderIntroHeader() {
        let { houseMembership: e } = this.props;
        return null == e ? p.intl.string(p.t.iZowCQ) : p.intl.string(p.t.e7fL7O);
    }
    render() {
        let { houseMembership: e, isClaimed: t, isVerified: n } = this.props;
        return (0, i.jsxs)(o.HeadingLevel, {
            component: (0, i.jsxs)('div', {
                className: x.intro,
                children: [
                    (0, i.jsx)(o.Heading, {
                        variant: 'heading-xxl/semibold',
                        className: x.introHeader,
                        children: this.renderIntroHeader()
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-lg/normal',
                        children: p.intl.string(p.t['6FaVFB'])
                    })
                ]
            }),
            children: [
                (0, i.jsx)(g.Z, {
                    className: x.verificationNotice,
                    unclaimedNotice: p.intl.string(p.t.vZU8Ki),
                    unverifiedNotice: p.intl.string(p.t.T7TYEB)
                }),
                (0, i.jsx)(d.Z, {
                    houseMembership: e,
                    isClaimed: t,
                    isVerified: n
                }),
                (0, i.jsx)(c.Z, {}),
                (0, i.jsx)(u.Z, { isHypeSquadOnlineMember: null != e })
            ]
        });
    }
}
t.Z = a.ZP.connectStores([h.default, m.Z], () => {
    let e = h.default.getCurrentUser();
    return (
        l()(null != e, 'UserSettingsHypeSquad: currentUser cannot be undefined'),
        {
            houseMembership: m.Z.getHouseMembership(),
            isClaimed: e.isClaimed(),
            isVerified: e.verified
        }
    );
})(S);

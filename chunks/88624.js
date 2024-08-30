var n = t(735250),
    a = t(470079),
    i = t(512722),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(346951),
    d = t(644744),
    u = t(792423),
    _ = t(674985),
    E = t(594174),
    T = t(843200),
    I = t(689938),
    S = t(477810);
class N extends a.PureComponent {
    renderIntroHeader() {
        let { houseMembership: e } = this.props;
        return null == e ? I.Z.Messages.HYPESQUAD_HEADING : I.Z.Messages.HYPESQUAD_HEADING_EXISTING_MEMBER;
    }
    render() {
        let { houseMembership: e, isClaimed: s, isVerified: t } = this.props;
        return (0, n.jsxs)(l.HeadingLevel, {
            component: (0, n.jsxs)('div', {
                className: S.intro,
                children: [
                    (0, n.jsx)(l.Heading, {
                        variant: 'heading-xxl/semibold',
                        className: S.introHeader,
                        children: this.renderIntroHeader()
                    }),
                    (0, n.jsx)(l.Text, {
                        variant: 'text-lg/normal',
                        children: I.Z.Messages.HYPESQUAD_SUBHEADING
                    })
                ]
            }),
            children: [
                (0, n.jsx)(T.Z, {
                    className: S.verificationNotice,
                    unclaimedNotice: I.Z.Messages.HYPESQUAD_UNCLAIMED_ACCOUNT_NOTICE,
                    unverifiedNotice: I.Z.Messages.HYPESQUAD_UNVERIFIED_EMAIL_NOTICE
                }),
                (0, n.jsx)(d.Z, {
                    houseMembership: e,
                    isClaimed: s,
                    isVerified: t
                }),
                (0, n.jsx)(c.Z, {}),
                (0, n.jsx)(u.Z, { isHypeSquadOnlineMember: null != e })
            ]
        });
    }
}
s.Z = o.ZP.connectStores([E.default, _.Z], () => {
    let e = E.default.getCurrentUser();
    return (
        r()(null != e, 'UserSettingsHypeSquad: currentUser cannot be undefined'),
        {
            houseMembership: _.Z.getHouseMembership(),
            isClaimed: e.isClaimed(),
            isVerified: e.verified
        }
    );
})(N);

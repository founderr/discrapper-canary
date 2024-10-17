var n = t(735250),
    a = t(470079),
    i = t(512722),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(346951),
    d = t(60285),
    _ = t(792423),
    u = t(674985),
    E = t(594174),
    T = t(843200),
    S = t(689938),
    I = t(903407);
class N extends a.PureComponent {
    renderIntroHeader() {
        let { houseMembership: e } = this.props;
        return null == e ? S.Z.Messages.HYPESQUAD_HEADING : S.Z.Messages.HYPESQUAD_HEADING_EXISTING_MEMBER;
    }
    render() {
        let { houseMembership: e, isClaimed: s, isVerified: t } = this.props;
        return (0, n.jsxs)(l.HeadingLevel, {
            component: (0, n.jsxs)('div', {
                className: I.intro,
                children: [
                    (0, n.jsx)(l.Heading, {
                        variant: 'heading-xxl/semibold',
                        className: I.introHeader,
                        children: this.renderIntroHeader()
                    }),
                    (0, n.jsx)(l.Text, {
                        variant: 'text-lg/normal',
                        children: S.Z.Messages.HYPESQUAD_SUBHEADING
                    })
                ]
            }),
            children: [
                (0, n.jsx)(T.Z, {
                    className: I.verificationNotice,
                    unclaimedNotice: S.Z.Messages.HYPESQUAD_UNCLAIMED_ACCOUNT_NOTICE,
                    unverifiedNotice: S.Z.Messages.HYPESQUAD_UNVERIFIED_EMAIL_NOTICE
                }),
                (0, n.jsx)(d.Z, {
                    houseMembership: e,
                    isClaimed: s,
                    isVerified: t
                }),
                (0, n.jsx)(c.Z, {}),
                (0, n.jsx)(_.Z, { isHypeSquadOnlineMember: null != e })
            ]
        });
    }
}
s.Z = o.ZP.connectStores([E.default, u.Z], () => {
    let e = E.default.getCurrentUser();
    return (
        r()(null != e, 'UserSettingsHypeSquad: currentUser cannot be undefined'),
        {
            houseMembership: u.Z.getHouseMembership(),
            isClaimed: e.isClaimed(),
            isVerified: e.verified
        }
    );
})(N);

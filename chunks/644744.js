t.d(s, {
    Z: function () {
        return N;
    }
}),
    t(47120);
var n = t(200651),
    a = t(192379),
    i = t(120356),
    r = t.n(i),
    o = t(481060),
    l = t(600164),
    c = t(490529),
    d = t(981631),
    _ = t(689938),
    u = t(18415);
let E = {
        [d.gkr.HOUSE_1]: u.membershipDialogHouse1,
        [d.gkr.HOUSE_2]: u.membershipDialogHouse2,
        [d.gkr.HOUSE_3]: u.membershipDialogHouse3
    },
    T = {
        [d.gkr.HOUSE_1]: u.houseLogoHouse1,
        [d.gkr.HOUSE_2]: u.__invalid_houseLogoHouse2,
        [d.gkr.HOUSE_3]: u.__invalid_houseLogoHouse3
    },
    S = {
        [d.gkr.HOUSE_1]: t(246300),
        [d.gkr.HOUSE_2]: t(797148),
        [d.gkr.HOUSE_3]: t(374347)
    },
    I = (e) =>
        ({
            [d.gkr.HOUSE_1]: _.Z.Messages.HYPESQUAD_DESCRIPTION_HOUSE_1,
            [d.gkr.HOUSE_2]: _.Z.Messages.HYPESQUAD_DESCRIPTION_HOUSE_2,
            [d.gkr.HOUSE_3]: _.Z.Messages.HYPESQUAD_DESCRIPTION_HOUSE_3
        })[e];
class N extends a.Component {
    render() {
        let { houseMembership: e, isClaimed: s, isVerified: t } = this.props;
        if (!s || !t) return null;
        if (null != e) {
            let s = _.Z.Messages.HYPESQUAD_MEMBERSHIP_HEADING.format({ houseName: (0, c.X8)(e) });
            return (0, n.jsx)('div', {
                className: r()(u.membershipDialog, E[e]),
                children: (0, n.jsxs)('div', {
                    className: u.membershipDialogContent,
                    children: [
                        (0, n.jsxs)(l.Z, {
                            children: [
                                (0, n.jsxs)(l.Z.Child, {
                                    grow: 1,
                                    shrink: 1,
                                    children: [
                                        (0, n.jsx)(o.Text, {
                                            className: u.membershipDialogHeading,
                                            variant: 'text-xs/bold',
                                            children: _.Z.Messages.HYPESQUAD_YOUR_HOUSE
                                        }),
                                        (0, n.jsx)(o.Heading, {
                                            className: u.membershipDialogHouseName,
                                            variant: 'heading-sm/semibold',
                                            children: s
                                        }),
                                        (0, n.jsx)(o.Text, {
                                            className: u.membershipDialogHouseDescription,
                                            variant: 'text-md/normal',
                                            children: I(e)
                                        })
                                    ]
                                }),
                                (0, n.jsx)(l.Z.Child, {
                                    className: u.houseLogoWrapper,
                                    grow: 0,
                                    shrink: 0,
                                    wrap: !0,
                                    children: (0, n.jsx)('img', {
                                        className: r()(u.houseLogo, T[e]),
                                        src: S[e],
                                        alt: s
                                    })
                                })
                            ]
                        }),
                        (0, n.jsxs)(o.Text, {
                            className: u.membershipDialogSwitchHouses,
                            variant: 'text-md/normal',
                            children: [
                                _.Z.Messages.HYPESQUAD_SWITCH_HOUSES_PROMPT,
                                (0, n.jsx)(o.Clickable, {
                                    className: u.membershipDialogSwitchHousesAction,
                                    onClick: this.handleJoinHypeSquadClick,
                                    tag: 'span',
                                    children: _.Z.Messages.HYPESQUAD_SWITCH_HOUSES_ACTION
                                })
                            ]
                        })
                    ]
                })
            });
        }
        return (0, n.jsxs)('div', {
            className: u.joinCTAWrapper,
            children: [
                (0, n.jsxs)(l.Z, {
                    className: u.joinCTA,
                    align: l.Z.Align.CENTER,
                    justify: l.Z.Justify.CENTER,
                    direction: l.Z.Direction.HORIZONTAL,
                    children: [
                        (0, n.jsx)(l.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, n.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                children: _.Z.Messages.HYPESQUAD_READY_TO_REP
                            })
                        }),
                        (0, n.jsx)(l.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, n.jsx)(o.Button, {
                                onClick: this.handleJoinHypeSquadClick,
                                children: _.Z.Messages.HYPESQUAD_JOIN
                            })
                        })
                    ]
                }),
                (0, n.jsx)(o.Text, {
                    className: u.newsletterWarning,
                    variant: 'text-sm/normal',
                    children: _.Z.Messages.HYPESQUAD_NEWSLETTER_WARNING
                })
            ]
        });
    }
    constructor(...e) {
        var s, a, i;
        super(...e),
            (s = this),
            (a = 'handleJoinHypeSquadClick'),
            (i = () => {
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await t.e('83264').then(t.bind(t, 711184));
                    return (s) => (0, n.jsx)(e, { ...s });
                });
            }),
            a in s
                ? Object.defineProperty(s, a, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (s[a] = i);
    }
}

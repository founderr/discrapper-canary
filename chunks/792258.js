var s = n(735250);
n(470079);
var a = n(120356),
    r = n.n(a),
    i = n(468194),
    l = n(399606),
    o = n(481060),
    c = n(372769),
    _ = n(914788),
    d = n(981631),
    E = n(689938),
    u = n(43123);
let T = [18, 18, 16, 16, 14, 12, 10];
t.Z = (e) => {
    let { guildId: t } = e,
        n = (0, l.e7)([_.Z], () => _.Z.getGuild(t));
    if (void 0 === n) return null;
    let a = n.hasFeature(d.oNc.VERIFIED) || n.hasFeature(d.oNc.PARTNERED),
        I = n.toString(),
        R = n.getIconURL(40, !0),
        g = null,
        N = T[T.length - 1];
    if (null == n.icon && null != I) {
        var C;
        N = null !== (C = T[(g = (0, i.Zg)(I)).length - 1]) && void 0 !== C ? C : T[T.length - 1];
    }
    return (0, s.jsxs)('div', {
        className: u.container,
        children: [
            (0, s.jsxs)('div', {
                style: { fontSize: N },
                children: [
                    null != g
                        ? (0, s.jsx)('div', {
                              className: r()(u.childWrapper, u.acronym),
                              'aria-hidden': !0,
                              children: g
                          })
                        : null,
                    null != R
                        ? (0, s.jsx)(o.Avatar, {
                              src: n.getIconURL(40, !0),
                              size: o.AvatarSizes.SIZE_40,
                              'aria-hidden': !0
                          })
                        : null
                ]
            }),
            (0, s.jsxs)('div', {
                className: u.descriptors,
                children: [
                    (0, s.jsxs)('div', {
                        className: u.header,
                        children: [
                            a
                                ? (0, s.jsx)(c.Z, {
                                      guild: n,
                                      tooltipPosition: 'bottom',
                                      tooltipColor: o.Tooltip.Colors.PRIMARY,
                                      className: u.guildBadge
                                  })
                                : null,
                            (0, s.jsx)(o.Text, {
                                variant: 'text-md/semibold',
                                children: n.toString()
                            })
                        ]
                    }),
                    void 0 !== n.approximateMemberCount
                        ? (0, s.jsx)(o.Text, {
                              variant: 'text-xs/medium',
                              color: 'text-muted',
                              children: E.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_ROW_MEMBER_COUNT.format({ members: n.approximateMemberCount })
                          })
                        : null
                ]
            })
        ]
    });
};

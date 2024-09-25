var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(481060),
    c = n(297700),
    d = n(665786),
    _ = n(823379),
    E = n(981631),
    f = n(689938),
    h = n(722612);
function p(e) {
    switch (e) {
        case 2:
            return f.Z.Messages.GUILD_VERIFIED;
        case 0:
            return f.Z.Messages.GUILD_PARTNERED;
        case 3:
            return f.Z.Messages.GUILD_VERIFIED_AND_PARTNERED;
        case 4:
            return f.Z.Messages.HUB_VERIFIED_DISCORD_HUB;
        case 5:
            return f.Z.Messages.HUB_DISCORD_HUB;
        case 1:
            return f.Z.Messages.INTERNAL_EMPLOYEE_ONLY;
        case 6:
            return null;
        default:
            (0, _.vE)(e);
    }
}
!(function (e) {
    (e[(e.PARTNERED = 0)] = 'PARTNERED'), (e[(e.STAFF = 1)] = 'STAFF'), (e[(e.VERIFIED = 2)] = 'VERIFIED'), (e[(e.VERIFIED_AND_PARTNERED = 3)] = 'VERIFIED_AND_PARTNERED'), (e[(e.VERIFIED_AND_HUB = 4)] = 'VERIFIED_AND_HUB'), (e[(e.HUB = 5)] = 'HUB'), (e[(e.NONE = 6)] = 'NONE');
})(r || (r = {}));
class m extends o.PureComponent {
    renderBadge(e, t, n) {
        let { className: r, badgeStrokeColor: i, tooltipColor: o = u.Tooltip.Colors.BRAND, tooltipPosition: s, tooltipDelay: d, size: _ = 16, badgeColor: E, iconClassName: f, flowerStarClassName: m } = this.props,
            I = p(e);
        return (0, a.jsx)(u.Tooltip, {
            color: o,
            position: s,
            delay: d,
            text: I,
            children: (o) => {
                if (5 !== e && 4 !== e)
                    return (0, a.jsx)(c.Z, {
                        ...o,
                        className: l()(n, r),
                        flowerStarClassName: m,
                        color: E,
                        stroke: i,
                        size: _,
                        children: (0, a.jsx)(t, {
                            size: 'xxs',
                            className: l()(h.icon, f),
                            color: 'currentColor'
                        })
                    });
                {
                    let e = {
                        width: _,
                        height: _
                    };
                    return (0, a.jsx)('div', {
                        ...o,
                        className: l()(n, r),
                        style: e,
                        children: (0, a.jsx)(t, {
                            className: l()(h.icon, f),
                            color: 'currentColor'
                        })
                    });
                }
            }
        });
    }
    render() {
        let { guild: e } = this.props,
            t = new Set(e.features);
        return t.has(E.oNc.INTERNAL_EMPLOYEE_ONLY) ? this.renderBadge(1, u.StaffBadgeIcon, h.staff) : t.has(E.oNc.VERIFIED) && t.has(E.oNc.HUB) ? this.renderBadge(4, u.HubIcon, h.verifiedHub) : t.has(E.oNc.HUB) ? this.renderBadge(5, u.HubIcon, h.hub) : t.has(E.oNc.VERIFIED) && t.has(E.oNc.PARTNERED) ? this.renderBadge(3, u.CheckmarkSmallIcon, h.verified) : t.has(E.oNc.VERIFIED) ? this.renderBadge(2, u.CheckmarkSmallIcon, h.verified) : t.has(E.oNc.PARTNERED) ? this.renderBadge(0, (0, u.makeIconCompat)(d.Z), h.partnered) : null;
    }
}
t.Z = m;

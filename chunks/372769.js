n(47120);
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(481060),
    c = n(297700),
    d = n(665786),
    f = n(823379),
    _ = n(981631),
    h = n(388032),
    p = n(729612);
((i = r || (r = {}))[(i.PARTNERED = 0)] = 'PARTNERED'), (i[(i.STAFF = 1)] = 'STAFF'), (i[(i.VERIFIED = 2)] = 'VERIFIED'), (i[(i.VERIFIED_AND_PARTNERED = 3)] = 'VERIFIED_AND_PARTNERED'), (i[(i.VERIFIED_AND_HUB = 4)] = 'VERIFIED_AND_HUB'), (i[(i.HUB = 5)] = 'HUB'), (i[(i.NONE = 6)] = 'NONE');
class m extends s.PureComponent {
    renderBadge(e, t, n) {
        let { className: r, badgeStrokeColor: i, tooltipColor: s = u.Tooltip.Colors.BRAND, tooltipPosition: o, tooltipDelay: d, size: _ = 16, badgeColor: m, iconClassName: g, flowerStarClassName: E } = this.props,
            v = (function (e) {
                switch (e) {
                    case 2:
                        return h.intl.string(h.t.iCehw8);
                    case 0:
                        return h.intl.string(h.t.hfYfEB);
                    case 3:
                        return h.intl.string(h.t['TX+iFB']);
                    case 4:
                        return h.intl.string(h.t.NSYGX1);
                    case 5:
                        return h.intl.string(h.t.jjUTLy);
                    case 1:
                        return h.intl.string(h.t['lMrv9/']);
                    case 6:
                        return null;
                    default:
                        (0, f.vE)(e);
                }
            })(e);
        return (0, a.jsx)(u.Tooltip, {
            color: s,
            position: o,
            delay: d,
            text: v,
            children: (s) =>
                5 === e || 4 === e
                    ? (0, a.jsx)('div', {
                          ...s,
                          className: l()(n, r),
                          style: {
                              width: _,
                              height: _
                          },
                          children: (0, a.jsx)(t, {
                              className: l()(p.icon, g),
                              color: 'currentColor'
                          })
                      })
                    : (0, a.jsx)(c.Z, {
                          ...s,
                          className: l()(n, r),
                          flowerStarClassName: E,
                          color: m,
                          stroke: i,
                          size: _,
                          children: (0, a.jsx)(t, {
                              size: 'xxs',
                              className: l()(p.icon, g),
                              color: 'currentColor'
                          })
                      })
        });
    }
    render() {
        let { guild: e } = this.props,
            t = new Set(e.features);
        return t.has(_.oNc.INTERNAL_EMPLOYEE_ONLY) ? this.renderBadge(1, u.StaffBadgeIcon, p.staff) : t.has(_.oNc.VERIFIED) && t.has(_.oNc.HUB) ? this.renderBadge(4, u.HubIcon, p.verifiedHub) : t.has(_.oNc.HUB) ? this.renderBadge(5, u.HubIcon, p.hub) : t.has(_.oNc.VERIFIED) && t.has(_.oNc.PARTNERED) ? this.renderBadge(3, u.CheckmarkSmallIcon, p.verified) : t.has(_.oNc.VERIFIED) ? this.renderBadge(2, u.CheckmarkSmallIcon, p.verified) : t.has(_.oNc.PARTNERED) ? this.renderBadge(0, (0, u.makeIconCompat)(d.Z), p.partnered) : null;
    }
}
t.Z = m;

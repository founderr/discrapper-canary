"use strict";
n(47120);
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(481060),
  _ = n(823379),
  c = n(797717),
  d = n(665786),
  E = n(981631),
  I = n(689938),
  T = n(298829);
(r = i || (i = {}))[r.PARTNERED = 0] = "PARTNERED", r[r.STAFF = 1] = "STAFF", r[r.VERIFIED = 2] = "VERIFIED", r[r.VERIFIED_AND_PARTNERED = 3] = "VERIFIED_AND_PARTNERED", r[r.VERIFIED_AND_HUB = 4] = "VERIFIED_AND_HUB", r[r.HUB = 5] = "HUB", r[r.NONE = 6] = "NONE";
class h extends o.PureComponent {
  renderBadge(e, t, n) {
    let {
      className: i,
      badgeStrokeColor: r,
      tooltipColor: o = u.Tooltip.Colors.BRAND,
      tooltipPosition: a,
      tooltipDelay: d,
      size: E = 16,
      badgeColor: h,
      iconClassName: S,
      flowerStarClassName: f
    } = this.props, N = function(e) {
      switch (e) {
        case 2:
          return I.Z.Messages.GUILD_VERIFIED;
        case 0:
          return I.Z.Messages.GUILD_PARTNERED;
        case 3:
          return I.Z.Messages.GUILD_VERIFIED_AND_PARTNERED;
        case 4:
          return I.Z.Messages.HUB_VERIFIED_DISCORD_HUB;
        case 5:
          return I.Z.Messages.HUB_DISCORD_HUB;
        case 1:
          return I.Z.Messages.INTERNAL_EMPLOYEE_ONLY;
        case 6:
          return null;
        default:
          (0, _.vE)(e)
      }
    }(e);
    return (0, s.jsx)(u.Tooltip, {
      color: o,
      position: a,
      delay: d,
      text: N,
      children: o => 5 === e || 4 === e ? (0, s.jsx)("div", {
        ...o,
        className: l()(n, i),
        style: {
          width: E,
          height: E
        },
        children: (0, s.jsx)(t, {
          className: l()(T.icon, S),
          color: "currentColor"
        })
      }) : (0, s.jsx)(c.Z, {
        ...o,
        className: l()(n, i),
        flowerStarClassName: f,
        color: h,
        stroke: r,
        size: E,
        children: (0, s.jsx)(t, {
          className: l()(T.icon, S),
          color: "currentColor"
        })
      })
    })
  }
  render() {
    let {
      guild: e
    } = this.props, t = new Set(e.features);
    return t.has(E.oNc.INTERNAL_EMPLOYEE_ONLY) ? this.renderBadge(1, u.StaffBadgeIcon, T.staff) : t.has(E.oNc.VERIFIED) && t.has(E.oNc.HUB) ? this.renderBadge(4, u.HubIcon, T.verifiedHub) : t.has(E.oNc.HUB) ? this.renderBadge(5, u.HubIcon, T.hub) : t.has(E.oNc.VERIFIED) && t.has(E.oNc.PARTNERED) ? this.renderBadge(3, u.CheckmarkSmallIcon, T.verified) : t.has(E.oNc.VERIFIED) ? this.renderBadge(2, u.CheckmarkSmallIcon, T.verified) : t.has(E.oNc.PARTNERED) ? this.renderBadge(0, (0, u.makeIconCompat)(d.Z), T.partnered) : null
  }
}
t.Z = h
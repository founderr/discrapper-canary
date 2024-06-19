t.d(s, {
  Z: function() {
    return _
  }
});
var n = t(735250),
  r = t(470079),
  i = t(120356),
  a = t.n(i),
  l = t(481060),
  o = t(55935),
  c = t(981631),
  u = t(689938),
  I = t(45154);
let T = e => {
    let {
      IconComponent: s,
      className: t
    } = e;
    return (0, n.jsx)("div", {
      className: a()(I.iconCircle, t),
      children: (0, n.jsx)(s, {
        className: I.icon,
        color: "currentColor"
      })
    })
  },
  d = e => {
    let {
      circle: s,
      smallHeader: t,
      text: r,
      className: i
    } = e;
    return (0, n.jsxs)("div", {
      className: a()(I.recommendationReason, i),
      children: [s, (0, n.jsxs)("div", {
        className: I.description,
        children: [null != t ? (0, n.jsx)("div", {
          className: I.smallHeader,
          children: t
        }) : null, (0, n.jsx)("div", {
          className: I.text,
          children: r
        })]
      })]
    })
  };
class _ extends r.Component {
  render() {
    let {
      reason: e,
      className: s
    } = this.props;
    if (e.type === c.AzA.RECENT_RELEASE_DATE) return (0, n.jsx)(d, {
      className: s,
      circle: (0, n.jsx)(T, {
        IconComponent: l.CalendarIcon
      }),
      smallHeader: u.Z.Messages.APPLICATION_STORE_NEW_RELEASE,
      text: (0, o.vc)(e.releaseDate, "LL")
    });
    if (e.type === c.AzA.RELEASE_DATE) return (0, n.jsx)(d, {
      className: s,
      circle: (0, n.jsx)(T, {
        IconComponent: l.CalendarIcon
      }),
      smallHeader: u.Z.Messages.APPLICATION_STORE_DETAILS_RELEASE_DATE,
      text: (0, o.vc)(e.releaseDate, "LL")
    });
    if (e.type === c.AzA.EARLY_ACCESS) return null != e.releaseDate ? (0, n.jsx)(d, {
      className: s,
      circle: (0, n.jsx)(T, {
        IconComponent: l.LockUnlockedIcon,
        className: I.earlyAccess
      }),
      smallHeader: u.Z.Messages.APPLICATION_STORE_EARLY_ACCESS,
      text: (0, o.vc)(e.releaseDate, "LL")
    }) : (0, n.jsx)(d, {
      className: s,
      circle: (0, n.jsx)(T, {
        IconComponent: l.LockUnlockedIcon,
        className: I.earlyAccess
      }),
      text: u.Z.Messages.APPLICATION_STORE_EARLY_ACCESS
    });
    return e.type === c.AzA.FLAVOR_TEXT ? (0, n.jsx)(d, {
      circle: (0, n.jsx)(T, {
        IconComponent: l.CheckmarkLargeIcon
      }),
      text: e.flavorText,
      className: s
    }) : e.type === c.AzA.HAS_FREE_PREMIUM_CONTENT ? (0, n.jsx)(d, {
      className: s,
      circle: (0, n.jsx)(T, {
        IconComponent: l.NitroWheelIcon,
        className: I.premiumCircle
      }),
      text: u.Z.Messages.APPLICATION_STORE_FREE_PREMIUM_CONTENT
    }) : null
  }
}
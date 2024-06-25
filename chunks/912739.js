n.d(t, {
  Z: function() {
    return _
  }
});
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(481060),
  o = n(55935),
  c = n(981631),
  u = n(689938),
  d = n(45154);
let E = e => {
    let {
      IconComponent: t,
      className: n
    } = e;
    return (0, s.jsx)("div", {
      className: a()(d.iconCircle, n),
      children: (0, s.jsx)(t, {
        className: d.icon,
        color: "currentColor"
      })
    })
  },
  h = e => {
    let {
      circle: t,
      smallHeader: n,
      text: i,
      className: l
    } = e;
    return (0, s.jsxs)("div", {
      className: a()(d.recommendationReason, l),
      children: [t, (0, s.jsxs)("div", {
        className: d.description,
        children: [null != n ? (0, s.jsx)("div", {
          className: d.smallHeader,
          children: n
        }) : null, (0, s.jsx)("div", {
          className: d.text,
          children: i
        })]
      })]
    })
  };
class _ extends i.Component {
  render() {
    let {
      reason: e,
      className: t
    } = this.props;
    if (e.type === c.AzA.RECENT_RELEASE_DATE) return (0, s.jsx)(h, {
      className: t,
      circle: (0, s.jsx)(E, {
        IconComponent: r.CalendarIcon
      }),
      smallHeader: u.Z.Messages.APPLICATION_STORE_NEW_RELEASE,
      text: (0, o.vc)(e.releaseDate, "LL")
    });
    if (e.type === c.AzA.RELEASE_DATE) return (0, s.jsx)(h, {
      className: t,
      circle: (0, s.jsx)(E, {
        IconComponent: r.CalendarIcon
      }),
      smallHeader: u.Z.Messages.APPLICATION_STORE_DETAILS_RELEASE_DATE,
      text: (0, o.vc)(e.releaseDate, "LL")
    });
    if (e.type === c.AzA.EARLY_ACCESS) return null != e.releaseDate ? (0, s.jsx)(h, {
      className: t,
      circle: (0, s.jsx)(E, {
        IconComponent: r.LockUnlockedIcon,
        className: d.earlyAccess
      }),
      smallHeader: u.Z.Messages.APPLICATION_STORE_EARLY_ACCESS,
      text: (0, o.vc)(e.releaseDate, "LL")
    }) : (0, s.jsx)(h, {
      className: t,
      circle: (0, s.jsx)(E, {
        IconComponent: r.LockUnlockedIcon,
        className: d.earlyAccess
      }),
      text: u.Z.Messages.APPLICATION_STORE_EARLY_ACCESS
    });
    return e.type === c.AzA.FLAVOR_TEXT ? (0, s.jsx)(h, {
      circle: (0, s.jsx)(E, {
        IconComponent: r.CheckmarkLargeIcon
      }),
      text: e.flavorText,
      className: t
    }) : e.type === c.AzA.HAS_FREE_PREMIUM_CONTENT ? (0, s.jsx)(h, {
      className: t,
      circle: (0, s.jsx)(E, {
        IconComponent: r.NitroWheelIcon,
        className: d.premiumCircle
      }),
      text: u.Z.Messages.APPLICATION_STORE_FREE_PREMIUM_CONTENT
    }) : null
  }
}
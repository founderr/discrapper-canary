n(47120);
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(704215),
  r = n(433517),
  o = n(963202),
  c = n(824991),
  u = n(705348),
  d = n(243778),
  E = n(360453),
  h = n(377743),
  _ = n(834743),
  I = n(862099),
  m = n(704631),
  T = n(819792),
  g = n(919285),
  p = n(118470),
  N = n(413307),
  S = n(849688),
  C = n(374023),
  A = n(661599),
  f = n(923608),
  Z = n(617899),
  L = n(8521),
  O = n(760326),
  v = n(536687),
  R = n(652785),
  P = n(981631),
  x = n(921944);

function M(e) {
  e.stopPropagation()
}

function D(e) {
  var t;
  let {
    guild: n
  } = e, [E, I] = i.useState(null !== (t = r.K.get(R.Iv)) && void 0 !== t ? t : 0), T = e => {
    r.K.set(R.Iv, e), I(e)
  }, {
    defaultGameId: g,
    enableClanCreation: p
  } = (0, o.St)({
    guild: n,
    location: "ChannelNoticesGuard",
    includeConverted: !1
  }), N = (0, l.Wu)(R.HG, () => R.XN.filter(e => {
    let {
      type: t,
      store: s
    } = e;
    if (t === P.vID.CLAN_ADMIN_UPSELL) return p;
    return null == s ? void 0 : s.channelNoticePredicate(n, E)
  }).map(e => e.dismissibleContentType));
  return (0, s.jsx)(d.Z, {
    contentTypes: N,
    groupName: x.R.CHANNEL_NOTICES,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: i
      } = e, l = () => {
        T(Date.now()), i(x.L.UNKNOWN)
      }, r = (() => {
        switch (t) {
          case a.z.CHANNEL_NOTICE_HUBLINK:
            return (0, s.jsx)(m.Z, {
              guild: n,
              markAsDismissed: l
            });
          case a.z.CHANNEL_NOTICE_INVITE:
            return (0, s.jsx)(Z.Z, {
              guild: n,
              markAsDismissed: l
            });
          case a.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
            return (0, s.jsx)(_.Z, {
              guild: n,
              markAsDismissed: l
            });
          case a.z.CHANNEL_NOTICE_QUICKSWITCHER:
            return (0, s.jsx)(O.Z, {
              guild: n,
              markAsDismissed: l
            });
          case a.z.CHANNEL_NOTICE_GUILD_BANNER:
            return (0, s.jsx)(h.Z, {
              guild: n,
              markAsDismissed: l
            });
          case a.z.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE:
            return (0, s.jsx)(f.Z, {
              guild: n,
              markAsDismissed: l
            });
          case a.z.LINKED_ROLE_ADMIN_GUILD:
            return (0, s.jsx)(u.Z, {
              guild: n,
              markAsDismissed: () => i(x.L.UNKNOWN)
            });
          case a.z.CHANNEL_LIST_CLAN_ADMIN_UPSELL:
            return (0, s.jsx)(c.ZP, {
              guild: n,
              markAsDismissed: l,
              defaultGameId: g
            });
          default:
            return null
        }
      })();
      return null == r ? null : (0, s.jsx)("div", {
        onContextMenu: M,
        children: r
      })
    }
  })
}
t.Z = e => {
  let {
    guild: t
  } = e;
  switch ((0, v.Z)(t)) {
    case v.R.ENABLE_PUBLIC_GUILD:
      return (0, s.jsx)(N.Z, {
        guild: t
      });
    case v.R.APPLIED_GUILD_BOOST_GRACE_PERIOD:
      return (0, s.jsx)(E.Z, {
        guild: t
      });
    case v.R.MAX_MEMBER_COUNT:
      return (0, s.jsx)(L.Z, {
        guild: t
      });
    case v.R.GUILD_LIVE_CHANNEL:
      return (0, s.jsx)(I.ZP, {
        guild: t
      });
    case v.R.GUILD_MFA_WARNING:
      return (0, s.jsx)(A.Z, {
        guild: t
      });
    case v.R.COMMANDS_MIGRATION:
      return (0, s.jsx)(g.Z, {
        guild: t
      });
    case v.R.APPLICATION_SUBSCRIPTION_EXPIRATION:
      return (0, s.jsx)(p.Z, {
        guild: t
      });
    case v.R.HUB_STUDY_ROOM:
      return (0, s.jsx)(T.Z, {
        guild: t
      });
    case v.R.SIGNUP:
      return (0, s.jsx)(S.Z, {
        guild: t
      })
  }
  return C.s.isDisallowPopupsSet() ? null : (0, s.jsx)(D, {
    guild: e.guild
  })
}
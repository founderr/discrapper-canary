n(47120);
var i = n(735250),
  s = n(470079),
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
  g = n(819792),
  p = n(919285),
  N = n(118470),
  T = n(413307),
  C = n(849688),
  S = n(374023),
  A = n(661599),
  f = n(923608),
  Z = n(617899),
  v = n(8521),
  L = n(760326),
  O = n(536687),
  R = n(652785),
  x = n(981631),
  M = n(921944);

function P(e) {
  e.stopPropagation()
}

function D(e) {
  var t;
  let {
    guild: n
  } = e, [E, I] = s.useState(null !== (t = r.K.get(R.Iv)) && void 0 !== t ? t : 0), g = e => {
    r.K.set(R.Iv, e), I(e)
  }, {
    defaultGameId: p,
    enableClanCreation: N
  } = (0, o.St)({
    guild: n,
    location: "ChannelNoticesGuard",
    includeConverted: !1
  }), T = (0, l.Wu)(R.HG, () => R.XN.filter(e => {
    let {
      type: t,
      store: i
    } = e;
    if (t === x.vID.CLAN_ADMIN_UPSELL) return N;
    return null == i ? void 0 : i.channelNoticePredicate(n, E)
  }).map(e => e.dismissibleContentType));
  return (0, i.jsx)(d.Z, {
    contentTypes: T,
    groupName: M.R.CHANNEL_NOTICES,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: s
      } = e, l = () => {
        g(Date.now()), s(M.L.UNKNOWN)
      }, r = (() => {
        switch (t) {
          case a.z.CHANNEL_NOTICE_HUBLINK:
            return (0, i.jsx)(m.Z, {
              guild: n,
              markAsDismissed: l
            });
          case a.z.CHANNEL_NOTICE_INVITE:
            return (0, i.jsx)(Z.Z, {
              guild: n,
              markAsDismissed: l
            });
          case a.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
            return (0, i.jsx)(_.Z, {
              guild: n,
              markAsDismissed: l
            });
          case a.z.CHANNEL_NOTICE_QUICKSWITCHER:
            return (0, i.jsx)(L.Z, {
              guild: n,
              markAsDismissed: l
            });
          case a.z.CHANNEL_NOTICE_GUILD_BANNER:
            return (0, i.jsx)(h.Z, {
              guild: n,
              markAsDismissed: l
            });
          case a.z.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE:
            return (0, i.jsx)(f.Z, {
              guild: n,
              markAsDismissed: l
            });
          case a.z.LINKED_ROLE_ADMIN_GUILD:
            return (0, i.jsx)(u.Z, {
              guild: n,
              markAsDismissed: () => s(M.L.UNKNOWN)
            });
          case a.z.CHANNEL_LIST_CLAN_ADMIN_UPSELL:
            return (0, i.jsx)(c.ZP, {
              guild: n,
              markAsDismissed: l,
              defaultGameId: p
            });
          default:
            return null
        }
      })();
      return null == r ? null : (0, i.jsx)("div", {
        onContextMenu: P,
        children: r
      })
    }
  })
}
t.Z = e => {
  let {
    guild: t
  } = e;
  switch ((0, O.Z)(t)) {
    case O.R.ENABLE_PUBLIC_GUILD:
      return (0, i.jsx)(T.Z, {
        guild: t
      });
    case O.R.APPLIED_GUILD_BOOST_GRACE_PERIOD:
      return (0, i.jsx)(E.Z, {
        guild: t
      });
    case O.R.MAX_MEMBER_COUNT:
      return (0, i.jsx)(v.Z, {
        guild: t
      });
    case O.R.GUILD_LIVE_CHANNEL:
      return (0, i.jsx)(I.ZP, {
        guild: t
      });
    case O.R.GUILD_MFA_WARNING:
      return (0, i.jsx)(A.Z, {
        guild: t
      });
    case O.R.COMMANDS_MIGRATION:
      return (0, i.jsx)(p.Z, {
        guild: t
      });
    case O.R.APPLICATION_SUBSCRIPTION_EXPIRATION:
      return (0, i.jsx)(N.Z, {
        guild: t
      });
    case O.R.HUB_STUDY_ROOM:
      return (0, i.jsx)(g.Z, {
        guild: t
      });
    case O.R.SIGNUP:
      return (0, i.jsx)(C.Z, {
        guild: t
      })
  }
  return S.s.isDisallowPopupsSet() ? null : (0, i.jsx)(D, {
    guild: e.guild
  })
}
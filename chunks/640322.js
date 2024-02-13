"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("151426"),
  r = n("95410"),
  o = n("489560"),
  u = n("55058"),
  d = n("384997"),
  c = n("48821"),
  f = n("388437"),
  E = n("667048"),
  h = n("153014"),
  _ = n("79176"),
  C = n("986321"),
  I = n("519440"),
  S = n("947337"),
  p = n("197881"),
  m = n("401774"),
  T = n("607894"),
  g = n("746504"),
  A = n("107153"),
  N = n("32505"),
  R = n("731681"),
  v = n("427474"),
  O = n("994428");

function L(e) {
  e.stopPropagation()
}

function M(e) {
  var t;
  let {
    guild: n
  } = e, [o, c] = s.useState(null !== (t = r.default.get(v.LAST_HIDDEN_CHANNEL_NOTICE)) && void 0 !== t ? t : 0), h = e => {
    r.default.set(v.LAST_HIDDEN_CHANNEL_NOTICE, e), c(e)
  }, C = (0, l.useStateFromStoresArray)(v.CHANNEL_NOTICE_STORES, () => v.CHANNEL_NOTICES.filter(e => {
    let {
      store: t
    } = e;
    return null == t ? void 0 : t.channelNoticePredicate(n, o)
  }).map(e => e.dismissibleContentType));
  return (0, a.jsx)(d.default, {
    contentTypes: C,
    groupName: O.DismissibleContentGroupName.CHANNEL_NOTICES,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: s
      } = e, l = () => {
        h(Date.now()), s(O.ContentDismissActionType.UNKNOWN)
      }, r = (() => {
        switch (t) {
          case i.DismissibleContent.CHANNEL_NOTICE_HUBLINK:
            return (0, a.jsx)(_.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_INVITE:
            return (0, a.jsx)(g.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
            return (0, a.jsx)(E.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_QUICKSWITCHER:
            return (0, a.jsx)(N.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_GUILD_BANNER:
            return (0, a.jsx)(f.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE:
            return (0, a.jsx)(T.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.LINKED_ROLE_ADMIN_GUILD:
            return (0, a.jsx)(u.default, {
              guild: n,
              markAsDismissed: () => s(O.ContentDismissActionType.UNKNOWN)
            });
          default:
            return null
        }
      })();
      return null == r ? null : (0, a.jsx)("div", {
        onContextMenu: L,
        children: r
      })
    }
  })
}
var P = e => {
  let {
    guild: t
  } = e, n = (0, R.default)(t);
  switch (n) {
    case R.ConnectedChannelNotices.ENABLE_PUBLIC_GUILD:
      return (0, a.jsx)(S.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.APPLIED_GUILD_BOOST_GRACE_PERIOD:
      return (0, a.jsx)(c.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.MAX_MEMBER_COUNT:
      return (0, a.jsx)(A.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.GUILD_LIVE_CHANNEL:
      return (0, a.jsx)(h.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.GUILD_MFA_WARNING:
      return (0, a.jsx)(m.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.COMMANDS_MIGRATION:
      return (0, a.jsx)(I.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.APPLICATION_SUBSCRIPTION_EXPIRATION:
      return (0, a.jsx)(o.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.HUB_STUDY_ROOM:
      return (0, a.jsx)(C.default, {
        guild: t
      })
  }
  return p.ProcessArgs.isDisallowPopupsSet() ? null : (0, a.jsx)(M, {
    guild: e.guild
  })
}
"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("442837"),
  i = a("524437"),
  r = a("433517"),
  o = a("258841"),
  u = a("705348"),
  d = a("243778"),
  c = a("360453"),
  f = a("377743"),
  E = a("834743"),
  h = a("862099"),
  _ = a("704631"),
  C = a("819792"),
  m = a("919285"),
  S = a("118470"),
  I = a("413307"),
  p = a("849688"),
  T = a("374023"),
  g = a("661599"),
  A = a("923608"),
  N = a("617899"),
  v = a("8521"),
  R = a("760326"),
  O = a("536687"),
  L = a("652785"),
  M = a("921944");

function P(e) {
  e.stopPropagation()
}

function x(e) {
  var t;
  let {
    guild: a
  } = e, [o, c] = s.useState(null !== (t = r.Storage.get(L.LAST_HIDDEN_CHANNEL_NOTICE)) && void 0 !== t ? t : 0), h = e => {
    r.Storage.set(L.LAST_HIDDEN_CHANNEL_NOTICE, e), c(e)
  }, C = (0, l.useStateFromStoresArray)(L.CHANNEL_NOTICE_STORES, () => L.CHANNEL_NOTICES.filter(e => {
    let {
      store: t
    } = e;
    return null == t ? void 0 : t.channelNoticePredicate(a, o)
  }).map(e => e.dismissibleContentType));
  return (0, n.jsx)(d.default, {
    contentTypes: C,
    groupName: M.DismissibleContentGroupName.CHANNEL_NOTICES,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: s
      } = e, l = () => {
        h(Date.now()), s(M.ContentDismissActionType.UNKNOWN)
      }, r = (() => {
        switch (t) {
          case i.DismissibleContent.CHANNEL_NOTICE_HUBLINK:
            return (0, n.jsx)(_.default, {
              guild: a,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_INVITE:
            return (0, n.jsx)(N.default, {
              guild: a,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
            return (0, n.jsx)(E.default, {
              guild: a,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_QUICKSWITCHER:
            return (0, n.jsx)(R.default, {
              guild: a,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_GUILD_BANNER:
            return (0, n.jsx)(f.default, {
              guild: a,
              markAsDismissed: l
            });
          case i.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE:
            return (0, n.jsx)(A.default, {
              guild: a,
              markAsDismissed: l
            });
          case i.DismissibleContent.LINKED_ROLE_ADMIN_GUILD:
            return (0, n.jsx)(u.default, {
              guild: a,
              markAsDismissed: () => s(M.ContentDismissActionType.UNKNOWN)
            });
          default:
            return null
        }
      })();
      return null == r ? null : (0, n.jsx)("div", {
        onContextMenu: P,
        children: r
      })
    }
  })
}
t.default = e => {
  let {
    guild: t
  } = e;
  switch ((0, O.default)(t)) {
    case O.ConnectedChannelNotices.ENABLE_PUBLIC_GUILD:
      return (0, n.jsx)(I.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.APPLIED_GUILD_BOOST_GRACE_PERIOD:
      return (0, n.jsx)(c.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.MAX_MEMBER_COUNT:
      return (0, n.jsx)(v.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.GUILD_LIVE_CHANNEL:
      return (0, n.jsx)(h.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.GUILD_MFA_WARNING:
      return (0, n.jsx)(g.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.COMMANDS_MIGRATION:
      return (0, n.jsx)(m.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.APPLICATION_SUBSCRIPTION_EXPIRATION:
      return (0, n.jsx)(S.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.HUB_STUDY_ROOM:
      return (0, n.jsx)(C.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.SIGNUP:
      return (0, n.jsx)(p.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.CLAN_UPSELL:
      return (0, n.jsx)(o.default, {
        guildId: t.id
      })
  }
  return T.ProcessArgs.isDisallowPopupsSet() ? null : (0, n.jsx)(x, {
    guild: e.guild
  })
}
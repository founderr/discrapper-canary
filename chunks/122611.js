"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("524437"),
  r = n("433517"),
  o = n("824991"),
  u = n("705348"),
  d = n("802001"),
  c = n("243778"),
  f = n("360453"),
  E = n("377743"),
  h = n("834743"),
  _ = n("862099"),
  C = n("704631"),
  m = n("819792"),
  S = n("919285"),
  p = n("118470"),
  I = n("413307"),
  T = n("849688"),
  g = n("374023"),
  A = n("661599"),
  N = n("923608"),
  v = n("617899"),
  R = n("8521"),
  L = n("760326"),
  O = n("536687"),
  M = n("652785"),
  P = n("981631"),
  y = n("921944");

function x(e) {
  e.stopPropagation()
}

function D(e) {
  var t;
  let {
    guild: n
  } = e, [f, _] = s.useState(null !== (t = r.Storage.get(M.LAST_HIDDEN_CHANNEL_NOTICE)) && void 0 !== t ? t : 0), m = e => {
    r.Storage.set(M.LAST_HIDDEN_CHANNEL_NOTICE, e), _(e)
  }, {
    enableClanCreation: S,
    defaultGameId: p
  } = (0, d.useIsGuildEligibleForClanConversion)(n), I = (0, l.useStateFromStoresArray)(M.CHANNEL_NOTICE_STORES, () => M.CHANNEL_NOTICES.filter(e => {
    let {
      type: t,
      store: a
    } = e;
    if (t === P.ChannelNoticeTypes.CLAN_ADMIN_UPSELL) return S;
    return null == a ? void 0 : a.channelNoticePredicate(n, f)
  }).map(e => e.dismissibleContentType));
  return (0, a.jsx)(c.default, {
    contentTypes: I,
    groupName: y.DismissibleContentGroupName.CHANNEL_NOTICES,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: s
      } = e, l = () => {
        m(Date.now()), s(y.ContentDismissActionType.UNKNOWN)
      }, r = (() => {
        switch (t) {
          case i.DismissibleContent.CHANNEL_NOTICE_HUBLINK:
            return (0, a.jsx)(C.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_INVITE:
            return (0, a.jsx)(v.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
            return (0, a.jsx)(h.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_QUICKSWITCHER:
            return (0, a.jsx)(L.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_GUILD_BANNER:
            return (0, a.jsx)(E.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE:
            return (0, a.jsx)(N.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.LINKED_ROLE_ADMIN_GUILD:
            return (0, a.jsx)(u.default, {
              guild: n,
              markAsDismissed: () => s(y.ContentDismissActionType.UNKNOWN)
            });
          case i.DismissibleContent.CHANNEL_LIST_CLAN_ADMIN_UPSELL:
            return (0, a.jsx)(o.default, {
              guild: n,
              markAsDismissed: l,
              defaultGameId: p
            });
          default:
            return null
        }
      })();
      return null == r ? null : (0, a.jsx)("div", {
        onContextMenu: x,
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
      return (0, a.jsx)(I.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.APPLIED_GUILD_BOOST_GRACE_PERIOD:
      return (0, a.jsx)(f.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.MAX_MEMBER_COUNT:
      return (0, a.jsx)(R.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.GUILD_LIVE_CHANNEL:
      return (0, a.jsx)(_.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.GUILD_MFA_WARNING:
      return (0, a.jsx)(A.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.COMMANDS_MIGRATION:
      return (0, a.jsx)(S.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.APPLICATION_SUBSCRIPTION_EXPIRATION:
      return (0, a.jsx)(p.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.HUB_STUDY_ROOM:
      return (0, a.jsx)(m.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.SIGNUP:
      return (0, a.jsx)(T.default, {
        guild: t
      })
  }
  return g.ProcessArgs.isDisallowPopupsSet() ? null : (0, a.jsx)(D, {
    guild: e.guild
  })
}
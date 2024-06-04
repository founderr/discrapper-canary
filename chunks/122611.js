"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("524437"),
  r = n("433517"),
  o = n("963202"),
  u = n("824991"),
  d = n("705348"),
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
  g = n("849688"),
  T = n("374023"),
  A = n("661599"),
  N = n("923608"),
  v = n("617899"),
  R = n("8521"),
  O = n("760326"),
  L = n("536687"),
  M = n("652785"),
  P = n("981631"),
  x = n("921944");

function y(e) {
  e.stopPropagation()
}

function D(e) {
  var t;
  let {
    guild: n
  } = e, [f, _] = s.useState(null !== (t = r.Storage.get(M.LAST_HIDDEN_CHANNEL_NOTICE)) && void 0 !== t ? t : 0), m = e => {
    r.Storage.set(M.LAST_HIDDEN_CHANNEL_NOTICE, e), _(e)
  }, {
    defaultGameId: S,
    enableClanCreation: p
  } = (0, o.useClanPrepilotExperimentForGuild)({
    guild: n,
    location: "ChannelNoticesGuard",
    includeConverted: !1
  }), I = (0, l.useStateFromStoresArray)(M.CHANNEL_NOTICE_STORES, () => M.CHANNEL_NOTICES.filter(e => {
    let {
      type: t,
      store: a
    } = e;
    if (t === P.ChannelNoticeTypes.CLAN_ADMIN_UPSELL) return p;
    return null == a ? void 0 : a.channelNoticePredicate(n, f)
  }).map(e => e.dismissibleContentType));
  return (0, a.jsx)(c.default, {
    contentTypes: I,
    groupName: x.DismissibleContentGroupName.CHANNEL_NOTICES,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: s
      } = e, l = () => {
        m(Date.now()), s(x.ContentDismissActionType.UNKNOWN)
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
            return (0, a.jsx)(O.default, {
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
            return (0, a.jsx)(d.default, {
              guild: n,
              markAsDismissed: () => s(x.ContentDismissActionType.UNKNOWN)
            });
          case i.DismissibleContent.CHANNEL_LIST_CLAN_ADMIN_UPSELL:
            return (0, a.jsx)(u.default, {
              guild: n,
              markAsDismissed: l,
              defaultGameId: S
            });
          default:
            return null
        }
      })();
      return null == r ? null : (0, a.jsx)("div", {
        onContextMenu: y,
        children: r
      })
    }
  })
}
t.default = e => {
  let {
    guild: t
  } = e;
  switch ((0, L.default)(t)) {
    case L.ConnectedChannelNotices.ENABLE_PUBLIC_GUILD:
      return (0, a.jsx)(I.default, {
        guild: t
      });
    case L.ConnectedChannelNotices.APPLIED_GUILD_BOOST_GRACE_PERIOD:
      return (0, a.jsx)(f.default, {
        guild: t
      });
    case L.ConnectedChannelNotices.MAX_MEMBER_COUNT:
      return (0, a.jsx)(R.default, {
        guild: t
      });
    case L.ConnectedChannelNotices.GUILD_LIVE_CHANNEL:
      return (0, a.jsx)(_.default, {
        guild: t
      });
    case L.ConnectedChannelNotices.GUILD_MFA_WARNING:
      return (0, a.jsx)(A.default, {
        guild: t
      });
    case L.ConnectedChannelNotices.COMMANDS_MIGRATION:
      return (0, a.jsx)(S.default, {
        guild: t
      });
    case L.ConnectedChannelNotices.APPLICATION_SUBSCRIPTION_EXPIRATION:
      return (0, a.jsx)(p.default, {
        guild: t
      });
    case L.ConnectedChannelNotices.HUB_STUDY_ROOM:
      return (0, a.jsx)(m.default, {
        guild: t
      });
    case L.ConnectedChannelNotices.SIGNUP:
      return (0, a.jsx)(g.default, {
        guild: t
      })
  }
  return T.ProcessArgs.isDisallowPopupsSet() ? null : (0, a.jsx)(D, {
    guild: e.guild
  })
}
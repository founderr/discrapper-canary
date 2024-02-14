"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("446674"),
  i = n("305808"),
  r = n("753809"),
  o = n("77078"),
  u = n("982108"),
  d = n("109264"),
  c = n("994906"),
  f = n("180968"),
  h = n("136281"),
  m = n("789150"),
  p = n("782340"),
  E = n("63893");

function S(e) {
  let {
    userId: t,
    guildId: n
  } = e, S = (0, s.useStateFromStores)([u.default], () => u.default.getGuildSidebarState(n), [n]), {
    messages: g,
    links: C,
    media: _
  } = (0, f.useServerActivityForUser)(t, n), {
    messageCount: I
  } = g, {
    messageCount: T
  } = C, {
    messageCount: v
  } = _, x = new Intl.NumberFormat(p.default.getLocale()).format(I), N = new Intl.NumberFormat(p.default.getLocale()).format(T), A = new Intl.NumberFormat(p.default.getLocale()).format(v), M = l.useCallback(async e => {
    if (null == S) return;
    let a = (0, f.getSearchQueryForUser)(t, e);
    await (0, c.openGuildMemberModViewSidebar)(n, t, S.baseChannelId, {
      modViewPanel: m.ModViewPanel.MESSAGE_HISTORY,
      additionalSearchQuery: a
    })
  }, [n, S, t]);
  return (0, a.jsx)(o.FormItem, {
    title: p.default.Messages.GUILD_MEMBER_MOD_VIEW_GUILD_MESSAGE_ACTIVITY_TITLE,
    titleClassName: E.infoTitle,
    children: (0, a.jsxs)(h.UserModInfoItemContainer, {
      children: [(0, a.jsx)(h.UserModInfoItem, {
        icon: (0, a.jsx)(d.default, {
          width: h.USER_MOD_ICON_SIZE_PX,
          height: h.USER_MOD_ICON_SIZE_PX
        }),
        name: (0, a.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: p.default.Messages.MESSAGES
        }),
        description: I === f.HAS_NO_COUNT ? (0, a.jsx)(o.Spinner, {
          type: o.SpinnerTypes.SPINNING_CIRCLE,
          className: E.loadingSpinner
        }) : (0, a.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: x
        }),
        onNavigate: I > 0 ? () => M(f.SearchKeyType.MESSAGES) : void 0
      }), (0, a.jsx)(h.UserModInfoItem, {
        icon: (0, a.jsx)(r.LinkIcon, {
          width: h.USER_MOD_ICON_SIZE_PX,
          height: h.USER_MOD_ICON_SIZE_PX
        }),
        name: (0, a.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: p.default.Messages.QUICKSEARCH_LINKS
        }),
        description: T === f.HAS_NO_COUNT ? (0, a.jsx)(o.Spinner, {
          type: o.SpinnerTypes.SPINNING_CIRCLE,
          className: E.loadingSpinner
        }) : (0, a.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: N
        }),
        onNavigate: T > 0 ? () => M(f.SearchKeyType.LINKS) : void 0
      }), (0, a.jsx)(h.UserModInfoItem, {
        icon: (0, a.jsx)(i.ImagesIcon, {
          width: h.USER_MOD_ICON_SIZE_PX,
          height: h.USER_MOD_ICON_SIZE_PX
        }),
        name: (0, a.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: p.default.Messages.QUICKSEARCH_MEDIA
        }),
        description: v === f.HAS_NO_COUNT ? (0, a.jsx)(o.Spinner, {
          type: o.SpinnerTypes.SPINNING_CIRCLE,
          className: E.loadingSpinner
        }) : (0, a.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: A
        }),
        onNavigate: v > 0 ? () => M(f.SearchKeyType.MEDIA) : void 0
      })]
    })
  })
}
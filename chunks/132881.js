"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("305808"),
  r = n("753809"),
  u = n("77078"),
  o = n("982108"),
  d = n("109264"),
  c = n("994906"),
  f = n("180968"),
  h = n("136281"),
  m = n("789150"),
  p = n("782340"),
  E = n("865331");

function g(e) {
  let {
    userId: t,
    guildId: n
  } = e, g = (0, s.useStateFromStores)([o.default], () => o.default.getGuildSidebarState(n), [n]), {
    messagesCount: C,
    linksCount: S,
    mediaCount: _
  } = (0, f.useServerActivityCountsForUser)(t, n), I = new Intl.NumberFormat(p.default.getLocale()).format(C), T = new Intl.NumberFormat(p.default.getLocale()).format(S), v = new Intl.NumberFormat(p.default.getLocale()).format(_), x = a.useCallback(async e => {
    if (null == g) return;
    let l = (0, f.getSearchQueryForUser)(t, e);
    await (0, c.openGuildMemberModViewSidebar)(n, t, g.baseChannelId, {
      modViewPanel: m.ModViewPanel.MESSAGE_HISTORY,
      additionalSearchQuery: l
    })
  }, [n, g, t]);
  return (0, l.jsx)(u.FormItem, {
    title: p.default.Messages.GUILD_MEMBER_MOD_VIEW_GUILD_MESSAGE_ACTIVITY_TITLE,
    titleClassName: E.infoTitle,
    children: (0, l.jsxs)(h.UserModInfoItemContainer, {
      children: [(0, l.jsx)(h.UserModInfoItem, {
        icon: (0, l.jsx)(d.default, {
          width: h.USER_MOD_ICON_SIZE_PX,
          height: h.USER_MOD_ICON_SIZE_PX
        }),
        name: (0, l.jsx)(u.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: p.default.Messages.MESSAGES
        }),
        description: C === f.HAS_NO_COUNT ? (0, l.jsx)(u.Spinner, {
          type: u.SpinnerTypes.SPINNING_CIRCLE,
          className: E.loadingSpinner
        }) : (0, l.jsx)(u.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: I
        }),
        onNavigate: C > 0 ? () => x(f.SearchKeyType.MESSAGES) : void 0
      }), (0, l.jsx)(h.UserModInfoItem, {
        icon: (0, l.jsx)(r.LinkIcon, {
          width: h.USER_MOD_ICON_SIZE_PX,
          height: h.USER_MOD_ICON_SIZE_PX
        }),
        name: (0, l.jsx)(u.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: p.default.Messages.QUICKSEARCH_LINKS
        }),
        description: S === f.HAS_NO_COUNT ? (0, l.jsx)(u.Spinner, {
          type: u.SpinnerTypes.SPINNING_CIRCLE,
          className: E.loadingSpinner
        }) : (0, l.jsx)(u.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: T
        }),
        onNavigate: S > 0 ? () => x(f.SearchKeyType.LINKS) : void 0
      }), (0, l.jsx)(h.UserModInfoItem, {
        icon: (0, l.jsx)(i.ImagesIcon, {
          width: h.USER_MOD_ICON_SIZE_PX,
          height: h.USER_MOD_ICON_SIZE_PX
        }),
        name: (0, l.jsx)(u.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: p.default.Messages.QUICKSEARCH_MEDIA
        }),
        description: _ === f.HAS_NO_COUNT ? (0, l.jsx)(u.Spinner, {
          type: u.SpinnerTypes.SPINNING_CIRCLE,
          className: E.loadingSpinner
        }) : (0, l.jsx)(u.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: v
        }),
        onNavigate: _ > 0 ? () => x(f.SearchKeyType.MEDIA) : void 0
      })]
    })
  })
}
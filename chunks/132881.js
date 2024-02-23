"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var l = n("37983"),
  a = n("884691"),
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
  E = n("865331");

function S(e) {
  let {
    userId: t,
    guildId: n
  } = e, S = (0, s.useStateFromStores)([u.default], () => u.default.getGuildSidebarState(n), [n]), {
    messagesCount: g,
    linksCount: C,
    mediaCount: _
  } = (0, f.useServerActivityCountsForUser)(t, n), I = new Intl.NumberFormat(p.default.getLocale()).format(g), T = new Intl.NumberFormat(p.default.getLocale()).format(C), v = new Intl.NumberFormat(p.default.getLocale()).format(_), x = a.useCallback(async e => {
    if (null == S) return;
    let l = (0, f.getSearchQueryForUser)(t, e);
    await (0, c.openGuildMemberModViewSidebar)(n, t, S.baseChannelId, {
      modViewPanel: m.ModViewPanel.MESSAGE_HISTORY,
      additionalSearchQuery: l
    })
  }, [n, S, t]);
  return (0, l.jsx)(o.FormItem, {
    title: p.default.Messages.GUILD_MEMBER_MOD_VIEW_GUILD_MESSAGE_ACTIVITY_TITLE,
    titleClassName: E.infoTitle,
    children: (0, l.jsxs)(h.UserModInfoItemContainer, {
      children: [(0, l.jsx)(h.UserModInfoItem, {
        icon: (0, l.jsx)(d.default, {
          width: h.USER_MOD_ICON_SIZE_PX,
          height: h.USER_MOD_ICON_SIZE_PX
        }),
        name: (0, l.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: p.default.Messages.MESSAGES
        }),
        description: g === f.HAS_NO_COUNT ? (0, l.jsx)(o.Spinner, {
          type: o.SpinnerTypes.SPINNING_CIRCLE,
          className: E.loadingSpinner
        }) : (0, l.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: I
        }),
        onNavigate: g > 0 ? () => x(f.SearchKeyType.MESSAGES) : void 0
      }), (0, l.jsx)(h.UserModInfoItem, {
        icon: (0, l.jsx)(r.LinkIcon, {
          width: h.USER_MOD_ICON_SIZE_PX,
          height: h.USER_MOD_ICON_SIZE_PX
        }),
        name: (0, l.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: p.default.Messages.QUICKSEARCH_LINKS
        }),
        description: C === f.HAS_NO_COUNT ? (0, l.jsx)(o.Spinner, {
          type: o.SpinnerTypes.SPINNING_CIRCLE,
          className: E.loadingSpinner
        }) : (0, l.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: T
        }),
        onNavigate: C > 0 ? () => x(f.SearchKeyType.LINKS) : void 0
      }), (0, l.jsx)(h.UserModInfoItem, {
        icon: (0, l.jsx)(i.ImagesIcon, {
          width: h.USER_MOD_ICON_SIZE_PX,
          height: h.USER_MOD_ICON_SIZE_PX
        }),
        name: (0, l.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: p.default.Messages.QUICKSEARCH_MEDIA
        }),
        description: _ === f.HAS_NO_COUNT ? (0, l.jsx)(o.Spinner, {
          type: o.SpinnerTypes.SPINNING_CIRCLE,
          className: E.loadingSpinner
        }) : (0, l.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: v
        }),
        onNavigate: _ > 0 ? () => x(f.SearchKeyType.MEDIA) : void 0
      })]
    })
  })
}
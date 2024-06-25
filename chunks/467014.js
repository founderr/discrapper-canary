n.d(t, {
  Z: function() {
    return E
  }
});
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(481060),
  r = n(433355),
  o = n(189432),
  c = n(356778),
  u = n(776767),
  d = n(50493),
  h = n(689938),
  m = n(332513);

function E(e) {
  let {
    userId: t,
    guildId: n
  } = e, E = (0, s.e7)([r.ZP], () => r.ZP.getGuildSidebarState(n), [n]), {
    messagesCount: p,
    linksCount: g,
    mediaCount: f
  } = (0, c.P2)(t, n), C = new Intl.NumberFormat(h.Z.getLocale()).format(p), _ = new Intl.NumberFormat(h.Z.getLocale()).format(g), I = new Intl.NumberFormat(h.Z.getLocale()).format(f), x = i.useCallback(async e => {
    if (null == E) return;
    let l = (0, c.Ow)(t, e);
    await (0, o.r)(n, t, E.baseChannelId, {
      modViewPanel: d.k.MESSAGE_HISTORY,
      additionalSearchQuery: l
    })
  }, [n, E, t]);
  return (0, l.jsx)(a.FormItem, {
    title: h.Z.Messages.GUILD_MEMBER_MOD_VIEW_GUILD_MESSAGE_ACTIVITY_TITLE,
    titleClassName: m.infoTitle,
    children: (0, l.jsxs)(u.WM, {
      children: [(0, l.jsx)(u._2, {
        icon: (0, l.jsx)(a.ChatIcon, {
          size: "custom",
          color: "currentColor",
          width: u.Mn,
          height: u.Mn
        }),
        name: (0, l.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: h.Z.Messages.MESSAGES
        }),
        description: p === c.II ? (0, l.jsx)(a.Spinner, {
          type: a.SpinnerTypes.SPINNING_CIRCLE,
          className: m.loadingSpinner
        }) : (0, l.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: C
        }),
        onNavigate: p > 0 ? () => x(c.mw.MESSAGES) : void 0
      }), (0, l.jsx)(u._2, {
        icon: (0, l.jsx)(a.LinkIcon, {
          size: "custom",
          width: u.Mn,
          height: u.Mn
        }),
        name: (0, l.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: h.Z.Messages.QUICKSEARCH_LINKS
        }),
        description: g === c.II ? (0, l.jsx)(a.Spinner, {
          type: a.SpinnerTypes.SPINNING_CIRCLE,
          className: m.loadingSpinner
        }) : (0, l.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: _
        }),
        onNavigate: g > 0 ? () => x(c.mw.LINKS) : void 0
      }), (0, l.jsx)(u._2, {
        icon: (0, l.jsx)(a.ImagesIcon, {
          size: "custom",
          width: u.Mn,
          height: u.Mn
        }),
        name: (0, l.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: h.Z.Messages.QUICKSEARCH_MEDIA
        }),
        description: f === c.II ? (0, l.jsx)(a.Spinner, {
          type: a.SpinnerTypes.SPINNING_CIRCLE,
          className: m.loadingSpinner
        }) : (0, l.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: I
        }),
        onNavigate: f > 0 ? () => x(c.mw.MEDIA) : void 0
      })]
    })
  })
}
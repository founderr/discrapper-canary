var l = n(735250),
  i = n(470079),
  s = n(481060),
  a = n(128557),
  r = n(981631),
  o = n(689938),
  c = n(937618);
t.Z = e => {
  let {
    guild: t,
    onAddGuild: u
  } = e, d = i.useCallback(() => {
    (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("7654"), n.e("1425")]).then(n.bind(n, 560114));
      return n => (0, l.jsx)(e, {
        ...n,
        guild: t,
        source: r.t4x.HUB_DIRECTORY,
        analyticsLocation: {
          section: r.jXE.HUB_WELCOME_CTA
        }
      })
    })
  }, [t]);
  return (0, l.jsxs)("div", {
    className: c.emptyWrapper,
    children: [(0, l.jsx)("img", {
      className: c.emptyImage,
      alt: "",
      src: n(705845)
    }), (0, l.jsx)(s.Heading, {
      className: c.emptyTitle,
      variant: "heading-xl/semibold",
      children: o.Z.Messages.HUB_DIRECTORY_CHANNEL_EMPTY_TITLE.format({
        guildName: t.name
      })
    }), (0, l.jsx)(s.Text, {
      variant: "text-md/normal",
      className: c.emptySubtitle,
      children: o.Z.Messages.HUB_DIRECTORY_CHANNEL_EMPTY_SUBTITLE
    }), null != u ? (0, l.jsx)(a.i, {
      className: c.emptyCTA,
      iconUrl: n(362827),
      header: o.Z.Messages.HUB_DIRECTORY_CHANNEL_EMPTY_ADD_SERVER,
      completed: !1,
      onClick: u
    }) : null, (0, l.jsx)(a.i, {
      className: c.emptyCTA,
      iconUrl: n(538548),
      header: o.Z.Messages.HUB_DIRECTORY_CHANNEL_EMPTY_INVITE,
      completed: !1,
      onClick: d
    })]
  })
}
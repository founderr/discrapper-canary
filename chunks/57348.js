i.d(t, {
  Z: function() {
    return C
  }
});
var n = i(735250);
i(470079);
var s = i(120356),
  a = i.n(s),
  r = i(912370),
  l = i(481060),
  o = i(626135),
  c = i(463571),
  d = i(34674),
  u = i(218864),
  h = i(950854),
  m = i(132871),
  p = i(147890),
  _ = i(57716),
  x = i(981631),
  g = i(597599);

function C(e) {
  let {
    collection: t,
    collection: {
      id: i,
      title: s,
      application_directory_collection_items: C
    }
  } = e, I = (0, _.Z)({
    collection: t
  }), f = (0, m.useApplicationDirectoryHistory)(e => e.guildId);
  return (0, n.jsxs)("div", {
    ref: I,
    children: [(0, n.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      className: g.header,
      children: s
    }), (0, n.jsx)("div", {
      className: g.list,
      children: C.map(e => {
        let {
          id: t,
          type: s,
          application: m,
          image_hash: _,
          title: C,
          description: I,
          call_to_action_label: N,
          call_to_action_url: v
        } = e;
        if (null == _) return;
        let E = (0, d.$_)({
          itemId: t,
          hash: _
        });
        return s === r.C.APPLICATION && null != m ? (0, n.jsx)(c.Z, {
          href: x.Z5c.APPLICATION_DIRECTORY_PROFILE(m.id),
          className: g.item,
          children: (0, n.jsx)(u.Z, {
            imageSrc: E,
            application: m,
            onClick: e => {
              let {
                mutualGuilds: t
              } = e;
              o.default.track(x.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                collection_id: i,
                application_id: m.id,
                guild_id: f,
                shown_mutual_guilds_count: t.length
              }), (0, p.goToApplication)({
                applicationId: m.id
              })
            },
            animatesOnHover: !0
          })
        }, t) : s === r.C.LINK && null != C ? (0, n.jsxs)(h.Z, {
          className: a()(g.item, g.linkCard),
          imageSrc: E,
          header: C,
          headerClassName: g.cardHeader,
          children: [(0, n.jsx)(l.Text, {
            variant: "text-sm/normal",
            className: g.linkDescription,
            children: I
          }), (0, n.jsx)(l.Anchor, {
            onClick: () => {
              o.default.track(x.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                collection_id: i,
                link: v,
                guild_id: f,
                shown_mutual_guilds_count: void 0
              })
            },
            href: v,
            className: a()((0, l.getButtonStyle)(), g.linkCta),
            children: N
          })]
        }, t) : void 0
      })
    })]
  })
}
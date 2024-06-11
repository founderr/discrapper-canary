"use strict";
i.r(t), i.d(t, {
  default: function() {
    return _
  }
});
var n = i("735250");
i("470079");
var a = i("120356"),
  l = i.n(a),
  s = i("912370"),
  r = i("481060"),
  o = i("626135"),
  c = i("463571"),
  d = i("34674"),
  u = i("218864"),
  h = i("950854"),
  p = i("132871"),
  m = i("147890"),
  f = i("57716"),
  g = i("981631"),
  C = i("95830");

function _(e) {
  let {
    collection: t,
    collection: {
      id: i,
      title: a,
      application_directory_collection_items: _
    }
  } = e, I = (0, f.default)({
    collection: t
  }), x = (0, p.useApplicationDirectoryHistory)(e => e.guildId);
  return (0, n.jsxs)("div", {
    ref: I,
    children: [(0, n.jsx)(r.Heading, {
      variant: "heading-lg/semibold",
      className: C.header,
      children: a
    }), (0, n.jsx)("div", {
      className: C.list,
      children: _.map(e => {
        let {
          id: t,
          type: a,
          application: p,
          image_hash: f,
          title: _,
          description: I,
          call_to_action_label: v,
          call_to_action_url: A
        } = e;
        if (null == f) return;
        let E = (0, d.getCollectionItemAssetUrl)({
          itemId: t,
          hash: f
        });
        return a === s.ApplicationDirectoryCollectionItemType.APPLICATION && null != p ? (0, n.jsx)(c.default, {
          href: g.Routes.APPLICATION_DIRECTORY_PROFILE(p.id),
          className: C.item,
          children: (0, n.jsx)(u.default, {
            imageSrc: E,
            application: p,
            onClick: e => {
              let {
                mutualGuilds: t
              } = e;
              o.default.track(g.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                collection_id: i,
                application_id: p.id,
                guild_id: x,
                shown_mutual_guilds_count: t.length
              }), (0, m.goToApplication)({
                applicationId: p.id
              })
            },
            animatesOnHover: !0
          })
        }, t) : a === s.ApplicationDirectoryCollectionItemType.LINK && null != _ ? (0, n.jsxs)(h.default, {
          className: l()(C.item, C.linkCard),
          imageSrc: E,
          header: _,
          headerClassName: C.cardHeader,
          children: [(0, n.jsx)(r.Text, {
            variant: "text-sm/normal",
            className: C.linkDescription,
            children: I
          }), (0, n.jsx)(r.Anchor, {
            onClick: () => {
              o.default.track(g.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                collection_id: i,
                link: A,
                guild_id: x,
                shown_mutual_guilds_count: void 0
              })
            },
            href: A,
            className: l()((0, r.getButtonStyle)(), C.linkCta),
            children: v
          })]
        }, t) : void 0
      })
    })]
  })
}
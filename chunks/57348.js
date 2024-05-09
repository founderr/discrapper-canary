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
  f = i("147890"),
  m = i("57716"),
  C = i("981631"),
  x = i("95830");

function _(e) {
  let {
    collection: t,
    collection: {
      id: i,
      title: a,
      application_directory_collection_items: _
    }
  } = e, g = (0, m.default)({
    collection: t
  }), I = (0, p.useApplicationDirectoryHistory)(e => e.guildId);
  return (0, n.jsxs)("div", {
    ref: g,
    children: [(0, n.jsx)(r.Heading, {
      variant: "heading-lg/semibold",
      className: x.header,
      children: a
    }), (0, n.jsx)("div", {
      className: x.list,
      children: _.map(e => {
        let {
          id: t,
          type: a,
          application: p,
          image_hash: m,
          title: _,
          description: g,
          call_to_action_label: v,
          call_to_action_url: A
        } = e;
        if (null == m) return;
        let E = (0, d.getCollectionItemAssetUrl)({
          itemId: t,
          hash: m
        });
        return a === s.ApplicationDirectoryCollectionItemType.APPLICATION && null != p ? (0, n.jsx)(c.default, {
          href: C.Routes.APPLICATION_DIRECTORY_PROFILE(p.id),
          className: x.item,
          children: (0, n.jsx)(u.default, {
            imageSrc: E,
            application: p,
            onClick: e => {
              let {
                mutualGuilds: t
              } = e;
              o.default.track(C.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                collection_id: i,
                application_id: p.id,
                guild_id: I,
                shown_mutual_guilds_count: t.length
              }), (0, f.goToApplication)({
                applicationId: p.id
              })
            },
            animatesOnHover: !0
          })
        }, t) : a === s.ApplicationDirectoryCollectionItemType.LINK && null != _ ? (0, n.jsxs)(h.default, {
          className: l()(x.item, x.linkCard),
          imageSrc: E,
          header: _,
          headerClassName: x.cardHeader,
          children: [(0, n.jsx)(r.Text, {
            variant: "text-sm/normal",
            className: x.linkDescription,
            children: g
          }), (0, n.jsx)(r.Anchor, {
            onClick: () => {
              o.default.track(C.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                collection_id: i,
                link: A,
                guild_id: I,
                shown_mutual_guilds_count: void 0
              })
            },
            href: A,
            className: l()((0, r.getButtonStyle)(), x.linkCta),
            children: v
          })]
        }, t) : void 0
      })
    })]
  })
}
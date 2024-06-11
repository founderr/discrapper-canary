"use strict";
i.r(t), i.d(t, {
  default: function() {
    return A
  }
}), i("47120");
var n = i("735250"),
  a = i("470079"),
  l = i("120356"),
  s = i.n(l),
  r = i("912370"),
  o = i("477690"),
  c = i("481060"),
  d = i("731081"),
  u = i("626135"),
  h = i("463571"),
  p = i("34674"),
  m = i("132871"),
  f = i("147890"),
  g = i("409425"),
  C = i("57716"),
  _ = i("981631"),
  I = i("689938"),
  x = i("305319");

function v(e) {
  let {
    collectionTitle: t,
    title: i,
    description: a,
    handleClick: l,
    imageSrc: r,
    ctaLabel: o,
    ctaLink: d,
    applicationId: u
  } = e, p = "936929561302675456" === u, m = null == u ? (0, n.jsx)(c.Button, {
    className: x.applicationCta,
    onClick: l,
    children: o
  }) : (0, n.jsx)(h.default, {
    href: _.Routes.APPLICATION_DIRECTORY_PROFILE(u),
    children: (0, n.jsx)(c.Button, {
      className: x.applicationCta,
      onClick: l,
      children: o
    })
  });
  return (0, n.jsxs)("div", {
    className: x.card,
    children: [(0, n.jsx)("div", {
      className: x.textContainer,
      children: (0, n.jsxs)("div", {
        className: x.verticallyCenter,
        children: [(0, n.jsx)(c.Text, {
          className: x.collectionTitle,
          tag: "span",
          color: "header-secondary",
          variant: "heading-deprecated-12/semibold",
          children: t
        }), (0, n.jsxs)(c.Heading, {
          className: x.applicationName,
          variant: "heading-xxl/medium",
          children: [i, " ", p && (0, n.jsx)(g.default, {})]
        }), (0, n.jsx)(c.Text, {
          className: x.applicationDescription,
          variant: "text-md/normal",
          lineClamp: 3,
          children: a
        }), null == d ? m : (0, n.jsx)(c.Anchor, {
          onClick: l,
          href: d,
          className: s()((0, c.getButtonStyle)({
            grow: !1
          }), x.applicationCta),
          children: o
        })]
      })
    }), (0, n.jsx)("div", {
      className: x.imageContainer,
      children: (0, n.jsx)("img", {
        alt: i,
        className: x.image,
        src: r
      })
    })]
  })
}

function A(e) {
  let {
    collection: t,
    collection: {
      id: i,
      title: l,
      application_directory_collection_items: c
    }
  } = e, h = (0, C.default)({
    collection: t
  }), [g, A] = a.useState(), E = (0, m.useApplicationDirectoryHistory)(e => e.guildId);
  return a.useEffect(() => {
    let e = null == h ? void 0 : h.current;
    if (null == e) return;
    let t = new ResizeObserver(() => {
      let t = document.body.offsetWidth < parseFloat(o.default.COLLECTION_GALLERY_MEDIA_BREAKPOINT) ? parseFloat(o.default.COLLECTION_GALLERY_COLUMN_CARD_HEIGHT) : parseFloat(o.default.COLLECTION_GALLERY_ROW_CARD_HEIGHT);
      A(e.offsetWidth / t)
    });
    return t.observe(document.body), () => {
      t.disconnect()
    }
  }, [h]), (0, n.jsx)("article", {
    ref: h,
    className: s()({
      [x.collectionBottomMargin]: c.length <= 1
    }),
    children: (0, n.jsx)(d.default, {
      aspectRatio: g,
      themedPagination: !0,
      paginationClassName: x.paginationControls,
      paginationArrowClassName: x.paginationArrow,
      items: c,
      onChangeItem: (e, t, n) => {
        let {
          application: a
        } = e;
        null != a && u.default.track(_.AnalyticEvents.APP_DIRECTORY_COLLECTION_SCROLLED, {
          collection_id: i,
          offset: n,
          results: [a.id],
          guild_id: E
        })
      },
      renderItem: e => {
        let {
          id: t,
          image_hash: a,
          application: s,
          type: o,
          description: c,
          title: d,
          call_to_action_label: h,
          call_to_action_url: m
        } = e;
        if (null == a) return;
        let g = (0, p.getCollectionItemAssetUrl)({
          itemId: t,
          hash: a
        });
        if (o === r.ApplicationDirectoryCollectionItemType.APPLICATION && null != s) {
          var C, x;
          return (0, n.jsx)(v, {
            collectionTitle: l,
            title: s.name,
            description: null !== (x = null === (C = s.directory_entry) || void 0 === C ? void 0 : C.short_description) && void 0 !== x ? x : s.description,
            handleClick: () => {
              u.default.track(_.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                collection_id: i,
                application_id: s.id,
                guild_id: E,
                shown_mutual_guilds_count: void 0
              }), (0, f.goToApplication)({
                applicationId: s.id
              })
            },
            imageSrc: g,
            ctaLabel: I.default.Messages.APP_DIRECTORY_GALLERY_COLLECTION_VIEW_APP_CTA,
            applicationId: s.id
          })
        }
        if (o === r.ApplicationDirectoryCollectionItemType.LINK && null != d && null != m && null != h) return (0, n.jsx)(v, {
          collectionTitle: l,
          title: d,
          description: c,
          handleClick: () => {
            u.default.track(_.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
              collection_id: i,
              link: m,
              guild_id: E,
              shown_mutual_guilds_count: void 0
            })
          },
          imageSrc: g,
          ctaLabel: h,
          ctaLink: m
        })
      }
    })
  })
}
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
  f = i("132871"),
  m = i("147890"),
  C = i("409425"),
  x = i("57716"),
  _ = i("981631"),
  g = i("689938"),
  I = i("305319");

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
  } = e, p = "936929561302675456" === u, f = null == u ? (0, n.jsx)(c.Button, {
    className: I.applicationCta,
    onClick: l,
    children: o
  }) : (0, n.jsx)(h.default, {
    href: _.Routes.APPLICATION_DIRECTORY_PROFILE(u),
    children: (0, n.jsx)(c.Button, {
      className: I.applicationCta,
      onClick: l,
      children: o
    })
  });
  return (0, n.jsxs)("div", {
    className: I.card,
    children: [(0, n.jsx)("div", {
      className: I.textContainer,
      children: (0, n.jsxs)("div", {
        className: I.verticallyCenter,
        children: [(0, n.jsx)(c.Text, {
          className: I.collectionTitle,
          tag: "span",
          color: "header-secondary",
          variant: "heading-deprecated-12/semibold",
          children: t
        }), (0, n.jsxs)(c.Heading, {
          className: I.applicationName,
          variant: "heading-xxl/medium",
          children: [i, " ", p && (0, n.jsx)(C.default, {})]
        }), (0, n.jsx)(c.Text, {
          className: I.applicationDescription,
          variant: "text-md/normal",
          lineClamp: 3,
          children: a
        }), null == d ? f : (0, n.jsx)(c.Anchor, {
          onClick: l,
          href: d,
          className: s()((0, c.getButtonStyle)({
            grow: !1
          }), I.applicationCta),
          children: o
        })]
      })
    }), (0, n.jsx)("div", {
      className: I.imageContainer,
      children: (0, n.jsx)("img", {
        alt: i,
        className: I.image,
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
  } = e, h = (0, x.default)({
    collection: t
  }), [C, A] = a.useState(), E = (0, f.useApplicationDirectoryHistory)(e => e.guildId);
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
      [I.collectionBottomMargin]: c.length <= 1
    }),
    children: (0, n.jsx)(d.default, {
      aspectRatio: C,
      themedPagination: !0,
      paginationClassName: I.paginationControls,
      paginationArrowClassName: I.paginationArrow,
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
          call_to_action_url: f
        } = e;
        if (null == a) return;
        let C = (0, p.getCollectionItemAssetUrl)({
          itemId: t,
          hash: a
        });
        if (o === r.ApplicationDirectoryCollectionItemType.APPLICATION && null != s) {
          var x, I;
          return (0, n.jsx)(v, {
            collectionTitle: l,
            title: s.name,
            description: null !== (I = null === (x = s.directory_entry) || void 0 === x ? void 0 : x.short_description) && void 0 !== I ? I : s.description,
            handleClick: () => {
              u.default.track(_.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                collection_id: i,
                application_id: s.id,
                guild_id: E,
                shown_mutual_guilds_count: void 0
              }), (0, m.goToApplication)({
                applicationId: s.id
              })
            },
            imageSrc: C,
            ctaLabel: g.default.Messages.APP_DIRECTORY_GALLERY_COLLECTION_VIEW_APP_CTA,
            applicationId: s.id
          })
        }
        if (o === r.ApplicationDirectoryCollectionItemType.LINK && null != d && null != f && null != h) return (0, n.jsx)(v, {
          collectionTitle: l,
          title: d,
          description: c,
          handleClick: () => {
            u.default.track(_.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
              collection_id: i,
              link: f,
              guild_id: E,
              shown_mutual_guilds_count: void 0
            })
          },
          imageSrc: C,
          ctaLabel: h,
          ctaLink: f
        })
      }
    })
  })
}
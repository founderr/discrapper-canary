i.d(t, {
  Z: function() {
    return v
  }
}), i(47120);
var n = i(735250),
  s = i(470079),
  a = i(120356),
  r = i.n(a),
  l = i(912370),
  o = i(477690),
  c = i(481060),
  d = i(731081),
  u = i(626135),
  h = i(463571),
  m = i(34674),
  p = i(132871),
  _ = i(147890),
  x = i(409425),
  g = i(57716),
  C = i(981631),
  I = i(689938),
  f = i(76405);

function N(e) {
  let {
    collectionTitle: t,
    title: i,
    description: s,
    handleClick: a,
    imageSrc: l,
    ctaLabel: o,
    ctaLink: d,
    applicationId: u
  } = e, m = "936929561302675456" === u, p = null == u ? (0, n.jsx)(c.Button, {
    className: f.applicationCta,
    onClick: a,
    children: o
  }) : (0, n.jsx)(h.Z, {
    href: C.Z5c.APPLICATION_DIRECTORY_PROFILE(u),
    children: (0, n.jsx)(c.Button, {
      className: f.applicationCta,
      onClick: a,
      children: o
    })
  });
  return (0, n.jsxs)("div", {
    className: f.card,
    children: [(0, n.jsx)("div", {
      className: f.textContainer,
      children: (0, n.jsxs)("div", {
        className: f.verticallyCenter,
        children: [(0, n.jsx)(c.Text, {
          className: f.collectionTitle,
          tag: "span",
          color: "header-secondary",
          variant: "heading-deprecated-12/semibold",
          children: t
        }), (0, n.jsxs)(c.Heading, {
          className: f.applicationName,
          variant: "heading-xxl/medium",
          children: [i, " ", m && (0, n.jsx)(x.Z, {})]
        }), (0, n.jsx)(c.Text, {
          className: f.applicationDescription,
          variant: "text-md/normal",
          lineClamp: 3,
          children: s
        }), null == d ? p : (0, n.jsx)(c.Anchor, {
          onClick: a,
          href: d,
          className: r()((0, c.getButtonStyle)({
            grow: !1
          }), f.applicationCta),
          children: o
        })]
      })
    }), (0, n.jsx)("div", {
      className: f.imageContainer,
      children: (0, n.jsx)("img", {
        alt: i,
        className: f.image,
        src: l
      })
    })]
  })
}

function v(e) {
  let {
    collection: t,
    collection: {
      id: i,
      title: a,
      application_directory_collection_items: c
    }
  } = e, h = (0, g.Z)({
    collection: t
  }), [x, v] = s.useState(), E = (0, p.useApplicationDirectoryHistory)(e => e.guildId);
  return s.useEffect(() => {
    let e = null == h ? void 0 : h.current;
    if (null == e) return;
    let t = new ResizeObserver(() => {
      let t = document.body.offsetWidth < parseFloat(o.Z.COLLECTION_GALLERY_MEDIA_BREAKPOINT) ? parseFloat(o.Z.COLLECTION_GALLERY_COLUMN_CARD_HEIGHT) : parseFloat(o.Z.COLLECTION_GALLERY_ROW_CARD_HEIGHT);
      v(e.offsetWidth / t)
    });
    return t.observe(document.body), () => {
      t.disconnect()
    }
  }, [h]), (0, n.jsx)("article", {
    ref: h,
    className: r()({
      [f.collectionBottomMargin]: c.length <= 1
    }),
    children: (0, n.jsx)(d.Z, {
      aspectRatio: x,
      themedPagination: !0,
      paginationClassName: f.paginationControls,
      paginationArrowClassName: f.paginationArrow,
      items: c,
      onChangeItem: (e, t, n) => {
        let {
          application: s
        } = e;
        null != s && u.default.track(C.rMx.APP_DIRECTORY_COLLECTION_SCROLLED, {
          collection_id: i,
          offset: n,
          results: [s.id],
          guild_id: E
        })
      },
      renderItem: e => {
        let {
          id: t,
          image_hash: s,
          application: r,
          type: o,
          description: c,
          title: d,
          call_to_action_label: h,
          call_to_action_url: p
        } = e;
        if (null == s) return;
        let x = (0, m.$_)({
          itemId: t,
          hash: s
        });
        if (o === l.C.APPLICATION && null != r) {
          var g, f;
          return (0, n.jsx)(N, {
            collectionTitle: a,
            title: r.name,
            description: null !== (f = null === (g = r.directory_entry) || void 0 === g ? void 0 : g.short_description) && void 0 !== f ? f : r.description,
            handleClick: () => {
              u.default.track(C.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                collection_id: i,
                application_id: r.id,
                guild_id: E,
                shown_mutual_guilds_count: void 0
              }), (0, _.goToApplication)({
                applicationId: r.id
              })
            },
            imageSrc: x,
            ctaLabel: I.Z.Messages.APP_DIRECTORY_GALLERY_COLLECTION_VIEW_APP_CTA,
            applicationId: r.id
          })
        }
        if (o === l.C.LINK && null != d && null != p && null != h) return (0, n.jsx)(N, {
          collectionTitle: a,
          title: d,
          description: c,
          handleClick: () => {
            u.default.track(C.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
              collection_id: i,
              link: p,
              guild_id: E,
              shown_mutual_guilds_count: void 0
            })
          },
          imageSrc: x,
          ctaLabel: h,
          ctaLink: p
        })
      }
    })
  })
}
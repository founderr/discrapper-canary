n.d(t, {
  Z: function() {
    return O
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(990547),
  o = n(831209),
  c = n(442837),
  u = n(481060),
  d = n(367907),
  E = n(213609),
  _ = n(267101),
  I = n(336197),
  T = n(430824),
  N = n(346656),
  m = n(132338),
  h = n(626135),
  C = n(76535),
  S = n(866104),
  A = n(886176),
  p = n(981631),
  g = n(689938),
  f = n(919455);

function O(e) {
  var t;
  let {
    guildId: n
  } = e, l = (0, c.e7)([T.Z], () => T.Z.getGuild(n)), {
    loading: O,
    subscriptionsSettings: R
  } = (0, C.H)(n), {
    listingsLoaded: M
  } = (0, _.eD)(n), x = (0, _.ue)(n, {
    publishedOnly: !0
  }), v = i.useCallback(async () => {
    h.default.track(p.rMx.GUILD_SHOP_EMBED_CLICKED, {
      ...(0, d.hH)(n)
    }), await (0, I.Z)(p.Z5c.SERVER_SHOP(n))
  }, [n]);
  (0, E.Z)({
    type: r.ImpressionTypes.VIEW,
    name: r.ImpressionNames.GUILD_SHOP_EMBED
  }, {
    disableTrack: null == l
  });
  let L = x.length > 0 ? new Date(Math.min(...x.map(e => Date.parse(e.published_at)))) : void 0;
  return O || !M ? (0, s.jsx)("div", {
    className: a()(f.guildShopEmbed, f.spinnerContainer),
    children: (0, s.jsx)(u.Spinner, {})
  }) : null == l || null == R ? null : (0, s.jsxs)("div", {
    className: f.guildShopEmbed,
    children: [(0, s.jsx)(S.Z, {
      coverImageAsset: null !== (t = R.cover_image_asset) && void 0 !== t ? t : null
    }), (0, s.jsx)(u.Spacer, {
      size: 16
    }), (0, s.jsxs)("div", {
      className: f.serverShopLabel,
      children: [(0, s.jsx)(A.Z, {
        height: "16px",
        width: "16px",
        color: o.Z.INTERACTIVE_NORMAL
      }), (0, s.jsx)(u.Heading, {
        variant: "heading-sm/semibold",
        color: "interactive-normal",
        className: f.serverShopLabelText,
        children: g.Z.Messages.GUILD_SHOP_CHANNEL_LABEL
      })]
    }), (0, s.jsx)(u.Spacer, {
      size: 16
    }), (0, s.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      color: "text-normal",
      children: g.Z.Messages.GUILD_STORE_HERO_TITLE.format({
        guildName: l.name
      })
    }), (0, s.jsx)(u.Spacer, {
      size: 4
    }), (0, s.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      lineClamp: 2,
      children: R.description
    }), (0, s.jsx)(u.Spacer, {
      size: 16
    }), (0, s.jsx)(m.Z, {}), (0, s.jsx)(u.Spacer, {
      size: 16
    }), (0, s.jsxs)("div", {
      className: f.guildShopEmbedFooter,
      children: [(0, s.jsx)(N.Z, {
        guild: l
      }), (0, s.jsxs)("ul", {
        className: f.guildShopSummary,
        children: [(0, s.jsx)("li", {
          children: (0, s.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: g.Z.Messages.GUILD_SHOP_EMBED_LISTINGS_AVAILABLE.format({
              listingCount: x.length
            })
          })
        }), null != L && (0, s.jsx)("li", {
          children: (0, s.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: g.Z.Messages.GUILD_SHOP_EMBED_SHOP_AGE.format({
              createdYear: L.getFullYear()
            })
          })
        })]
      }), (0, s.jsx)(u.Button, {
        className: f.guildShopEmbedCta,
        onClick: v,
        children: (0, s.jsxs)("div", {
          className: f.guildShopEmbedCtaContent,
          children: [(0, s.jsx)(A.Z, {
            height: "18px",
            width: "18px"
          }), (0, s.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            children: g.Z.Messages.GUILD_SHOP_EMBED_CTA
          })]
        })
      })]
    })]
  })
}
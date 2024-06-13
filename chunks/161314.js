"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("990547"),
  o = n("831209"),
  u = n("442837"),
  d = n("481060"),
  c = n("367907"),
  f = n("213609"),
  E = n("267101"),
  _ = n("336197"),
  T = n("430824"),
  m = n("346656"),
  I = n("132338"),
  N = n("626135"),
  p = n("76535"),
  h = n("866104"),
  S = n("886176"),
  C = n("981631"),
  A = n("689938"),
  g = n("98742");

function M(e) {
  var t;
  let {
    guildId: n
  } = e, l = (0, u.useStateFromStores)([T.default], () => T.default.getGuild(n)), {
    loading: M,
    subscriptionsSettings: R
  } = (0, p.useMonetizationSettings)(n), {
    listingsLoaded: O
  } = (0, E.useFetchGuildProductListingsForGuild)(n), v = (0, E.useGuildProductsForGuild)(n, {
    publishedOnly: !0
  }), x = a.useCallback(async () => {
    N.default.track(C.AnalyticEvents.GUILD_SHOP_EMBED_CLICKED, {
      ...(0, c.collectGuildAnalyticsMetadata)(n)
    }), await (0, _.default)(C.Routes.SERVER_SHOP(n))
  }, [n]);
  (0, f.default)({
    type: r.ImpressionTypes.VIEW,
    name: r.ImpressionNames.GUILD_SHOP_EMBED
  }, {
    disableTrack: null == l
  });
  let L = v.length > 0 ? new Date(Math.min(...v.map(e => Date.parse(e.published_at)))) : void 0;
  return M || !O ? (0, s.jsx)("div", {
    className: i()(g.guildShopEmbed, g.spinnerContainer),
    children: (0, s.jsx)(d.Spinner, {})
  }) : null == l || null == R ? null : (0, s.jsxs)("div", {
    className: g.guildShopEmbed,
    children: [(0, s.jsx)(h.HeroImage, {
      coverImageAsset: null !== (t = R.cover_image_asset) && void 0 !== t ? t : null
    }), (0, s.jsx)(d.Spacer, {
      size: 16
    }), (0, s.jsxs)("div", {
      className: g.serverShopLabel,
      children: [(0, s.jsx)(S.default, {
        height: "16px",
        width: "16px",
        color: o.default.INTERACTIVE_NORMAL
      }), (0, s.jsx)(d.Heading, {
        variant: "heading-sm/semibold",
        color: "interactive-normal",
        className: g.serverShopLabelText,
        children: A.default.Messages.GUILD_SHOP_CHANNEL_LABEL
      })]
    }), (0, s.jsx)(d.Spacer, {
      size: 16
    }), (0, s.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      color: "text-normal",
      children: A.default.Messages.GUILD_STORE_HERO_TITLE.format({
        guildName: l.name
      })
    }), (0, s.jsx)(d.Spacer, {
      size: 4
    }), (0, s.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      lineClamp: 2,
      children: R.description
    }), (0, s.jsx)(d.Spacer, {
      size: 16
    }), (0, s.jsx)(I.default, {}), (0, s.jsx)(d.Spacer, {
      size: 16
    }), (0, s.jsxs)("div", {
      className: g.guildShopEmbedFooter,
      children: [(0, s.jsx)(m.default, {
        guild: l
      }), (0, s.jsxs)("ul", {
        className: g.guildShopSummary,
        children: [(0, s.jsx)("li", {
          children: (0, s.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: A.default.Messages.GUILD_SHOP_EMBED_LISTINGS_AVAILABLE.format({
              listingCount: v.length
            })
          })
        }), null != L && (0, s.jsx)("li", {
          children: (0, s.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: A.default.Messages.GUILD_SHOP_EMBED_SHOP_AGE.format({
              createdYear: L.getFullYear()
            })
          })
        })]
      }), (0, s.jsx)(d.Button, {
        className: g.guildShopEmbedCta,
        onClick: x,
        children: (0, s.jsxs)("div", {
          className: g.guildShopEmbedCtaContent,
          children: [(0, s.jsx)(S.default, {
            height: "18px",
            width: "18px"
          }), (0, s.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            children: A.default.Messages.GUILD_SHOP_EMBED_CTA
          })]
        })
      })]
    })]
  })
}
"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
});
var a = s("735250");
s("470079");
var l = s("120356"),
  n = s.n(l),
  i = s("481060"),
  r = s("596454"),
  o = s("782568"),
  d = s("377171"),
  u = s("601964"),
  c = s("346656"),
  E = s("526717"),
  _ = s("594278"),
  I = s("549631"),
  T = s("689938"),
  S = s("697931");

function f(e) {
  let {
    subscribers: t
  } = e;
  return (0, a.jsxs)("div", {
    className: S.guildSubscriberCount,
    children: [(0, a.jsx)("div", {
      className: S.subscriberCountValue,
      children: (0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: t
      })
    }), (0, a.jsxs)("div", {
      className: S.subscriberCountText,
      children: [(0, a.jsx)(I.default, {
        color: d.default.WHITE
      }), (0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SUBSCRIBERS_LABEL
      })]
    })]
  })
}

function m(e) {
  let {
    guildName: t,
    guildIcon: s,
    guildAvatarUrl: l,
    subscriberCount: n
  } = e, r = new u.default({
    name: t,
    icon: s
  });
  return (0, a.jsxs)("div", {
    className: S.guildCardHeader,
    children: [(0, a.jsx)(c.default, {
      className: S.guildCardHeaderAvatar,
      iconSrc: l,
      guild: r,
      size: c.default.Sizes.LARGE
    }), (0, a.jsxs)("div", {
      className: S.guildCardHeaderTitle,
      children: [(0, a.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: t
      }), null != n && (0, a.jsx)(f, {
        subscribers: n
      })]
    })]
  })
}

function N(e) {
  let {
    quote: t,
    quoteAttribution: s,
    quoteAttributionTitle: l
  } = e;
  return (0, a.jsxs)("div", {
    className: S.guildCardQuote,
    children: [(0, a.jsx)(i.Text, {
      variant: "text-lg/normal",
      color: "interactive-active",
      children: t
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "interactive-active",
      children: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_QUOTE_ATTRIBUTION.format({
        attributionName: s,
        attributionTitle: null != l ? l : T.default.Messages.GUILD_OWNER
      })
    })]
  })
}

function g(e) {
  let {
    emojisToShow: t,
    notShownEmojiCount: s,
    storePageUrl: l
  } = e, d = null != t && t.length > 0, u = () => {
    null != l && (0, o.default)(l)
  };
  return (0, a.jsx)("div", {
    className: S.guildPremiumEmojis,
    children: d ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(i.Text, {
        variant: "text-xs/semibold",
        color: "header-primary",
        className: S.premiumEmojisTitle,
        children: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_CARD_PREMIUM_EMOJI_TITLE
      }), (0, a.jsxs)("div", {
        className: S.premiumEmojisRow,
        children: [(0, a.jsxs)("div", {
          className: n()(S.emojisContainer, null != s && S.fullEmojisContainer),
          children: [t.map(e => (0, a.jsx)(r.default, {
            className: S.emoji,
            emojiId: e.id,
            emojiName: e.name,
            animated: e.animated
          }, e.id)), null != s && (0, a.jsx)("div", {
            className: S.extraEmojiCount,
            children: (0, a.jsxs)(i.Text, {
              variant: "text-md/semibold",
              color: "text-normal",
              children: ["+", s]
            })
          })]
        }), (0, a.jsx)("div", {
          children: (0, a.jsx)(i.Button, {
            className: S.viewServerButton,
            innerClassName: S.viewServerButtonText,
            color: i.Button.Colors.CUSTOM,
            disabled: null == l,
            onClick: u,
            children: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_VIEW_SERVER_CTA
          })
        })]
      })]
    }) : (0, a.jsx)(i.Button, {
      className: n()(S.viewServerButton, S.roundedEdges),
      innerClassName: S.viewServerButtonText,
      color: i.Button.Colors.CUSTOM,
      disabled: null == l,
      onClick: u,
      children: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_VIEW_SERVER_CTA
    })
  })
}

function h(e) {
  let {
    highlightedCreatorGuild: t
  } = e, {
    guild_id: s,
    quote: l,
    quote_attribution: n,
    quote_attribution_title: r
  } = t, o = (0, E.default)(s, 4, 60), {
    isLoading: d,
    hasAllImperativeDetails: u
  } = o;
  if (d) return (0, a.jsx)("div", {
    className: S.guildCard,
    children: (0, a.jsx)(i.Spinner, {})
  });
  if (!u) return null;
  let {
    guildIcon: c,
    guildName: _,
    guildAvatarUrl: I,
    subscriberCount: T,
    emojisToShow: f,
    notShownEmojiCount: h,
    storePageUrl: C
  } = o.details;
  return (0, a.jsxs)("div", {
    className: S.guildCard,
    children: [(0, a.jsx)(m, {
      guildIcon: c,
      guildName: _,
      guildAvatarUrl: I,
      subscriberCount: T
    }), (0, a.jsx)(N, {
      quote: l,
      quoteAttribution: n,
      quoteAttributionTitle: r
    }), (0, a.jsx)(g, {
      emojisToShow: f,
      notShownEmojiCount: h,
      storePageUrl: C
    })]
  })
}

function C(e) {
  let {
    highlightedCreators: t
  } = e;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_GUILD_SECTION_TITLE
    }), (0, a.jsx)(i.Spacer, {
      size: 24
    }), (0, a.jsx)(_.default, {
      carouselClassName: S.creatorGuildCarousel,
      items: t,
      renderItem: e => (0, a.jsx)(h, {
        highlightedCreatorGuild: e
      }),
      intervalBetweenAutomaticItemRotations: 7e3
    })]
  })
}
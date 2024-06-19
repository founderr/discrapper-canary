t.d(s, {
  Z: function() {
    return I
  }
});
var a = t(735250);
t(470079);
var n = t(866442),
  l = t(481060),
  i = t(377171),
  r = t(937615),
  c = t(549631),
  o = t(981631),
  d = t(689938),
  _ = t(804190);

function m(e) {
  let {
    listing: s
  } = e, {
    name: t,
    image: i,
    description: c
  } = s, d = (0, r.T4)(s.price_tier, o.pKx.USD);
  return (0, a.jsxs)("div", {
    children: [(0, a.jsxs)("div", {
      className: _.listingInfoRow,
      children: [(0, a.jsx)("img", {
        src: i,
        alt: "",
        className: _.avatar
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(l.Heading, {
          variant: "heading-md/medium",
          className: _.tierName,
          children: t
        }), (0, a.jsx)(l.Text, {
          variant: "text-md/medium",
          tag: "span",
          children: d
        }), (0, a.jsx)(l.Text, {
          variant: "text-xxs/medium",
          tag: "span",
          children: "/mo."
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: _.listingRoleRow,
      children: [(0, a.jsx)("div", {
        style: {
          backgroundColor: (0, n.Rf)(s.role_color)
        },
        className: _.roleColor
      }), (0, a.jsx)("img", {
        src: i,
        alt: "",
        className: _.roleIcon
      }), (0, a.jsx)(l.Text, {
        variant: "text-xs/medium",
        children: t
      })]
    }), (0, a.jsx)(l.Text, {
      variant: "text-xs/normal",
      className: _.tierDescription,
      children: c
    })]
  })
}

function T(e) {
  let {
    channel: s
  } = e, t = function(e) {
    switch (e) {
      case o.d4z.GUILD_TEXT:
        return l.TextLockIcon;
      case o.d4z.GUILD_VOICE:
        return l.VoiceLockIcon;
      case o.d4z.GUILD_STAGE_VOICE:
        return l.StageLockIcon;
      case o.d4z.GUILD_FORUM:
        return l.ForumLockIcon;
      case o.d4z.GUILD_MEDIA:
        return l.ImageLockIcon;
      case o.d4z.GUILD_ANNOUNCEMENT:
        return l.AnnouncementsLockIcon;
      default:
        return null
    }
  }(s.type);
  return (0, a.jsxs)("div", {
    className: _.channelBenefitRow,
    children: [null != t && (0, a.jsx)(t, {
      className: _.channelBenefitIcon,
      color: "currentColor"
    }), (0, a.jsxs)("div", {
      className: _.channelBenefitText,
      children: [(0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: s.name
      }), (0, a.jsx)(l.Text, {
        variant: "text-xs/normal",
        className: _.channelBenefitTagline,
        children: s.tagline
      })]
    }), (0, a.jsx)(c.Z, {
      className: _.__invalid_emojiIcon,
      color: i.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
    })]
  })
}

function E(e) {
  let {
    benefit: s
  } = e;
  return void 0 === s ? null : (0, a.jsxs)("div", {
    className: _.intangibleBenefitRow,
    children: [(0, a.jsx)("div", {
      className: _.intangibleBenefitIcon
    }), (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: s
    })]
  })
}

function x(e) {
  let {
    listing: s
  } = e;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-sm/semibold",
      className: _.perksHeader,
      children: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_PERKS_HEADER
    }), (0, a.jsx)(l.Text, {
      variant: "text-xs/semibold",
      className: _.benefitTypeHeader,
      children: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_EXCLUSIVE_CHANNELS_HEADER
    }), s.channels.map(e => (0, a.jsx)(T, {
      channel: e
    }, e.id)), (0, a.jsx)(l.Text, {
      variant: "text-xs/semibold",
      className: _.benefitTypeHeader,
      children: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_EXCLUSIVE_BENEFITS_HEADER
    }), s.additional_perks.map((e, s) => (0, a.jsx)(E, {
      benefit: e.name
    }, s))]
  })
}

function I(e) {
  let {
    selectedTemplate: s,
    handleSelectTemplate: t
  } = e;
  if (void 0 === s) return null;
  let n = s.listings[0];
  return (0, a.jsxs)("div", {
    className: _.container,
    children: [(0, a.jsxs)(l.ScrollerThin, {
      className: _.content,
      children: [(0, a.jsx)(m, {
        listing: n
      }), (0, a.jsx)("div", {
        className: _.divider
      }), (0, a.jsx)(x, {
        listing: n
      })]
    }), (0, a.jsx)(l.Button, {
      size: l.Button.Sizes.MEDIUM,
      onClick: () => {
        t(s)
      },
      children: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_SELECT_TEMPLATE_BUTTON
    })]
  })
}
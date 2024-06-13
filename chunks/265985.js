"use strict";
s.r(t), s.d(t, {
  Header: function() {
    return L
  },
  PurchaseConfirmation: function() {
    return R
  }
});
var n = s("735250");
s("470079");
var i = s("120356"),
  l = s.n(i),
  a = s("442837"),
  r = s("481060"),
  u = s("596454"),
  o = s("131388"),
  d = s("409813"),
  c = s("430824"),
  f = s("465670"),
  _ = s("73346"),
  I = s("817460"),
  C = s("584825"),
  m = s("570533"),
  E = s("629262"),
  S = s("575460"),
  T = s("293810"),
  N = s("689938"),
  g = s("159367");
let L = e => {
    let {
      onClose: t,
      listing: s,
      step: i,
      guildId: a
    } = e, u = (0, C.useSubscriptionsSettings)(a), c = (0, o.default)(T.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY), I = (() => {
      var e;
      if (c) return null;
      let t = (null == u ? void 0 : null === (e = u.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null ? (0, _.getAssetURL)(u.cover_image_asset.application_id, u.cover_image_asset, 440) : void 0;
      return null == t && i !== d.Step.CONFIRM ? null : null == t ? (0, n.jsx)("div", {
        className: g.headerImageEmpty
      }) : (0, n.jsx)("img", {
        src: t,
        alt: "",
        className: g.headerImage
      })
    })();
    return (0, n.jsxs)("div", {
      className: l()(g.headerContainer, {
        [g.headerEmpty]: c || null == I
      }),
      children: [I, (() => {
        if (i !== d.Step.CONFIRM) return null;
        let e = null == s.image_asset ? void 0 : (0, _.getAssetURL)(s.application_id, s.image_asset, 80);
        return (0, n.jsx)("div", {
          className: g.tierImageContainer,
          children: (0, n.jsx)("img", {
            src: e,
            alt: "",
            className: g.tierImage
          })
        })
      })(), (0, n.jsx)(r.Clickable, {
        className: g.closeContainer,
        onClick: () => t(!1),
        "aria-label": N.default.Messages.CLOSE,
        children: (0, n.jsx)(f.default, {
          className: g.closeIcon
        })
      })]
    })
  },
  R = e => {
    let {
      onClose: t,
      listing: s,
      guildId: i
    } = e, l = (0, a.useStateFromStores)([c.default], () => c.default.getGuild(i), [i]), o = (0, m.default)(i).filter(e => e.roles.includes(s.role_id)), d = s.role_benefits.benefits.filter(I.isChannelBenefit).slice(0, null === o.length ? 4 : 3), f = (0, E.default)(d).slice(0, null === o.length ? 4 : 3);
    return (0, n.jsxs)("div", {
      className: g.confirmationContainer,
      children: [(0, n.jsx)(r.Heading, {
        className: g.confirmationHeader,
        variant: "heading-xl/semibold",
        color: "header-secondary",
        children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE.format({
          serverName: null == l ? void 0 : l.toString()
        })
      }), (0, n.jsx)(r.Text, {
        className: g.confirmationSubtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
          tier: s.name
        })
      }), f.length > 0 && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: g.confirmationSectionLabel,
          children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CHANNEL_PREVIEW
        }), (0, n.jsx)("div", {
          className: g.confirmationBenefits,
          children: f.map(e => (0, n.jsx)(S.default, {
            benefit: e,
            guildId: i,
            onClick: () => t(!0)
          }, (0, I.getBenefitKey)(e)))
        })]
      }), (() => {
        var e;
        if (0 === o.length) return null;
        let t = o[0];
        return (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(r.Text, {
            variant: "text-xs/medium",
            color: "header-secondary",
            className: g.confirmationSectionLabel,
            children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_PREVIEW_TITLE
          }), (0, n.jsxs)("div", {
            className: g.emojiBenefitsRow,
            children: [(0, n.jsx)(u.default, {
              emojiId: t.id,
              emojiName: t.name,
              animated: null !== (e = t.animated) && void 0 !== e && e,
              className: g.emojiImage
            }), (0, n.jsxs)("div", {
              children: [(0, n.jsx)(r.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                className: g.emojiName,
                children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_TEXT
              }), (0, n.jsx)(r.Text, {
                color: "interactive-normal",
                variant: "text-sm/normal",
                children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_DESCRIPTION.format({
                  count: o.length
                })
              })]
            })]
          })]
        })
      })(), (0, n.jsx)(r.Button, {
        className: g.confirmationButton,
        onClick: () => t(!0),
        children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
      })]
    })
  }
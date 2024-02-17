"use strict";
n.r(t), n.d(t, {
  Header: function() {
    return T
  },
  PurchaseConfirmation: function() {
    return v
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("446674"),
  r = n("77078"),
  o = n("430568"),
  u = n("834897"),
  d = n("85336"),
  c = n("305961"),
  f = n("945330"),
  h = n("271560"),
  m = n("577357"),
  p = n("837008"),
  E = n("41391"),
  g = n("833531"),
  S = n("393381"),
  C = n("677795"),
  _ = n("782340"),
  I = n("935035");
let T = e => {
    let {
      onClose: t,
      listing: n,
      step: a,
      guildId: i
    } = e, o = (0, p.useSubscriptionsSettings)(i), c = (0, u.default)(C.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY), m = (() => {
      var e;
      if (c) return null;
      let t = (null == o ? void 0 : null === (e = o.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null ? (0, h.getAssetURL)(o.cover_image_asset.application_id, o.cover_image_asset, 440) : void 0;
      return null == t && a !== d.Step.CONFIRM ? null : null == t ? (0, l.jsx)("div", {
        className: I.headerImageEmpty
      }) : (0, l.jsx)("img", {
        src: t,
        alt: "",
        className: I.headerImage
      })
    })();
    return (0, l.jsxs)("div", {
      className: s(I.headerContainer, {
        [I.headerEmpty]: c || null == m
      }),
      children: [m, (() => {
        if (a !== d.Step.CONFIRM) return null;
        let e = null == n.image_asset ? void 0 : (0, h.getAssetURL)(n.application_id, n.image_asset, 80);
        return (0, l.jsx)("div", {
          className: I.tierImageContainer,
          children: (0, l.jsx)("img", {
            src: e,
            alt: "",
            className: I.tierImage
          })
        })
      })(), (0, l.jsx)(r.Clickable, {
        className: I.closeContainer,
        onClick: () => t(!1),
        "aria-label": _.default.Messages.CLOSE,
        children: (0, l.jsx)(f.default, {
          className: I.closeIcon
        })
      })]
    })
  },
  v = e => {
    let {
      onClose: t,
      listing: n,
      guildId: a
    } = e, s = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(a), [a]), u = (0, E.default)(a), d = u.filter(e => e.roles.includes(n.role_id)), f = n.role_benefits.benefits.filter(m.isChannelBenefit).slice(0, null === d.length ? 4 : 3), h = (0, g.default)(f).slice(0, null === d.length ? 4 : 3);
    return (0, l.jsxs)("div", {
      className: I.confirmationContainer,
      children: [(0, l.jsx)(r.Heading, {
        className: I.confirmationHeader,
        variant: "heading-xl/semibold",
        color: "header-secondary",
        children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE.format({
          serverName: null == s ? void 0 : s.toString()
        })
      }), (0, l.jsx)(r.Text, {
        className: I.confirmationSubtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
          tier: n.name
        })
      }), h.length > 0 && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: I.confirmationSectionLabel,
          children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CHANNEL_PREVIEW
        }), (0, l.jsx)("div", {
          className: I.confirmationBenefits,
          children: h.map(e => (0, l.jsx)(S.default, {
            benefit: e,
            guildId: a,
            onClick: () => t(!0)
          }, (0, m.getBenefitKey)(e)))
        })]
      }), (() => {
        var e;
        if (0 === d.length) return null;
        let t = d[0];
        return (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(r.Text, {
            variant: "text-xs/medium",
            color: "header-secondary",
            className: I.confirmationSectionLabel,
            children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_PREVIEW_TITLE
          }), (0, l.jsxs)("div", {
            className: I.emojiBenefitsRow,
            children: [(0, l.jsx)(o.default, {
              emojiId: t.id,
              emojiName: t.name,
              animated: null !== (e = t.animated) && void 0 !== e && e,
              className: I.emojiImage
            }), (0, l.jsxs)("div", {
              children: [(0, l.jsx)(r.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                className: I.emojiName,
                children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_TEXT
              }), (0, l.jsx)(r.Text, {
                color: "interactive-normal",
                variant: "text-sm/normal",
                children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_DESCRIPTION.format({
                  count: d.length
                })
              })]
            })]
          })]
        })
      })(), (0, l.jsx)(r.Button, {
        className: I.confirmationButton,
        onClick: () => t(!0),
        children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
      })]
    })
  }
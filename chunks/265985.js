"use strict";
n.r(t), n.d(t, {
  Header: function() {
    return g
  },
  PurchaseConfirmation: function() {
    return v
  }
});
var s = n("735250");
n("470079");
var a = n("120356"),
  i = n.n(a),
  l = n("442837"),
  r = n("481060"),
  u = n("596454"),
  o = n("131388"),
  d = n("409813"),
  c = n("430824"),
  E = n("465670"),
  f = n("73346"),
  _ = n("817460"),
  T = n("584825"),
  I = n("570533"),
  S = n("629262"),
  m = n("575460"),
  C = n("293810"),
  N = n("689938"),
  R = n("159367");
let g = e => {
    let {
      onClose: t,
      listing: n,
      step: a,
      guildId: l
    } = e, u = (0, T.useSubscriptionsSettings)(l), c = (0, o.default)(C.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY), _ = (() => {
      var e;
      if (c) return null;
      let t = (null == u ? void 0 : null === (e = u.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null ? (0, f.getAssetURL)(u.cover_image_asset.application_id, u.cover_image_asset, 440) : void 0;
      return null == t && a !== d.Step.CONFIRM ? null : null == t ? (0, s.jsx)("div", {
        className: R.headerImageEmpty
      }) : (0, s.jsx)("img", {
        src: t,
        alt: "",
        className: R.headerImage
      })
    })();
    return (0, s.jsxs)("div", {
      className: i()(R.headerContainer, {
        [R.headerEmpty]: c || null == _
      }),
      children: [_, (() => {
        if (a !== d.Step.CONFIRM) return null;
        let e = null == n.image_asset ? void 0 : (0, f.getAssetURL)(n.application_id, n.image_asset, 80);
        return (0, s.jsx)("div", {
          className: R.tierImageContainer,
          children: (0, s.jsx)("img", {
            src: e,
            alt: "",
            className: R.tierImage
          })
        })
      })(), (0, s.jsx)(r.Clickable, {
        className: R.closeContainer,
        onClick: () => t(!1),
        "aria-label": N.default.Messages.CLOSE,
        children: (0, s.jsx)(E.default, {
          className: R.closeIcon
        })
      })]
    })
  },
  v = e => {
    let {
      onClose: t,
      listing: n,
      guildId: a
    } = e, i = (0, l.useStateFromStores)([c.default], () => c.default.getGuild(a), [a]), o = (0, I.default)(a).filter(e => e.roles.includes(n.role_id)), d = n.role_benefits.benefits.filter(_.isChannelBenefit).slice(0, null === o.length ? 4 : 3), E = (0, S.default)(d).slice(0, null === o.length ? 4 : 3);
    return (0, s.jsxs)("div", {
      className: R.confirmationContainer,
      children: [(0, s.jsx)(r.Heading, {
        className: R.confirmationHeader,
        variant: "heading-xl/semibold",
        color: "header-secondary",
        children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE.format({
          serverName: null == i ? void 0 : i.toString()
        })
      }), (0, s.jsx)(r.Text, {
        className: R.confirmationSubtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
          tier: n.name
        })
      }), E.length > 0 && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: R.confirmationSectionLabel,
          children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CHANNEL_PREVIEW
        }), (0, s.jsx)("div", {
          className: R.confirmationBenefits,
          children: E.map(e => (0, s.jsx)(m.default, {
            benefit: e,
            guildId: a,
            onClick: () => t(!0)
          }, (0, _.getBenefitKey)(e)))
        })]
      }), (() => {
        var e;
        if (0 === o.length) return null;
        let t = o[0];
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(r.Text, {
            variant: "text-xs/medium",
            color: "header-secondary",
            className: R.confirmationSectionLabel,
            children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_PREVIEW_TITLE
          }), (0, s.jsxs)("div", {
            className: R.emojiBenefitsRow,
            children: [(0, s.jsx)(u.default, {
              emojiId: t.id,
              emojiName: t.name,
              animated: null !== (e = t.animated) && void 0 !== e && e,
              className: R.emojiImage
            }), (0, s.jsxs)("div", {
              children: [(0, s.jsx)(r.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                className: R.emojiName,
                children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_TEXT
              }), (0, s.jsx)(r.Text, {
                color: "interactive-normal",
                variant: "text-sm/normal",
                children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_DESCRIPTION.format({
                  count: o.length
                })
              })]
            })]
          })]
        })
      })(), (0, s.jsx)(r.Button, {
        className: R.confirmationButton,
        onClick: () => t(!0),
        children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
      })]
    })
  }
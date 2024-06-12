"use strict";
n.r(t), n.d(t, {
  Header: function() {
    return v
  },
  PurchaseConfirmation: function() {
    return g
  }
});
var i = n("735250");
n("470079");
var a = n("120356"),
  s = n.n(a),
  r = n("442837"),
  l = n("481060"),
  u = n("596454"),
  o = n("131388"),
  d = n("409813"),
  c = n("430824"),
  f = n("465670"),
  E = n("73346"),
  _ = n("817460"),
  T = n("584825"),
  I = n("570533"),
  S = n("629262"),
  C = n("575460"),
  m = n("293810"),
  N = n("689938"),
  R = n("159367");
let v = e => {
    let {
      onClose: t,
      listing: n,
      step: a,
      guildId: r
    } = e, u = (0, T.useSubscriptionsSettings)(r), c = (0, o.default)(m.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY), _ = (() => {
      var e;
      if (c) return null;
      let t = (null == u ? void 0 : null === (e = u.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null ? (0, E.getAssetURL)(u.cover_image_asset.application_id, u.cover_image_asset, 440) : void 0;
      return null == t && a !== d.Step.CONFIRM ? null : null == t ? (0, i.jsx)("div", {
        className: R.headerImageEmpty
      }) : (0, i.jsx)("img", {
        src: t,
        alt: "",
        className: R.headerImage
      })
    })();
    return (0, i.jsxs)("div", {
      className: s()(R.headerContainer, {
        [R.headerEmpty]: c || null == _
      }),
      children: [_, (() => {
        if (a !== d.Step.CONFIRM) return null;
        let e = null == n.image_asset ? void 0 : (0, E.getAssetURL)(n.application_id, n.image_asset, 80);
        return (0, i.jsx)("div", {
          className: R.tierImageContainer,
          children: (0, i.jsx)("img", {
            src: e,
            alt: "",
            className: R.tierImage
          })
        })
      })(), (0, i.jsx)(l.Clickable, {
        className: R.closeContainer,
        onClick: () => t(!1),
        "aria-label": N.default.Messages.CLOSE,
        children: (0, i.jsx)(f.default, {
          className: R.closeIcon
        })
      })]
    })
  },
  g = e => {
    let {
      onClose: t,
      listing: n,
      guildId: a
    } = e, s = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(a), [a]), o = (0, I.default)(a).filter(e => e.roles.includes(n.role_id)), d = n.role_benefits.benefits.filter(_.isChannelBenefit).slice(0, null === o.length ? 4 : 3), f = (0, S.default)(d).slice(0, null === o.length ? 4 : 3);
    return (0, i.jsxs)("div", {
      className: R.confirmationContainer,
      children: [(0, i.jsx)(l.Heading, {
        className: R.confirmationHeader,
        variant: "heading-xl/semibold",
        color: "header-secondary",
        children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE.format({
          serverName: null == s ? void 0 : s.toString()
        })
      }), (0, i.jsx)(l.Text, {
        className: R.confirmationSubtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
          tier: n.name
        })
      }), f.length > 0 && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: R.confirmationSectionLabel,
          children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CHANNEL_PREVIEW
        }), (0, i.jsx)("div", {
          className: R.confirmationBenefits,
          children: f.map(e => (0, i.jsx)(C.default, {
            benefit: e,
            guildId: a,
            onClick: () => t(!0)
          }, (0, _.getBenefitKey)(e)))
        })]
      }), (() => {
        var e;
        if (0 === o.length) return null;
        let t = o[0];
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(l.Text, {
            variant: "text-xs/medium",
            color: "header-secondary",
            className: R.confirmationSectionLabel,
            children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_PREVIEW_TITLE
          }), (0, i.jsxs)("div", {
            className: R.emojiBenefitsRow,
            children: [(0, i.jsx)(u.default, {
              emojiId: t.id,
              emojiName: t.name,
              animated: null !== (e = t.animated) && void 0 !== e && e,
              className: R.emojiImage
            }), (0, i.jsxs)("div", {
              children: [(0, i.jsx)(l.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                className: R.emojiName,
                children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_TEXT
              }), (0, i.jsx)(l.Text, {
                color: "interactive-normal",
                variant: "text-sm/normal",
                children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_DESCRIPTION.format({
                  count: o.length
                })
              })]
            })]
          })]
        })
      })(), (0, i.jsx)(l.Button, {
        className: R.confirmationButton,
        onClick: () => t(!0),
        children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
      })]
    })
  }
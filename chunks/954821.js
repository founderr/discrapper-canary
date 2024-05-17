"use strict";
s.r(t), s.d(t, {
  openModal: function() {
    return h
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("913527"),
  i = s.n(l),
  r = s("481060"),
  o = s("355467"),
  d = s("100527"),
  u = s("906732"),
  c = s("153124"),
  S = s("73346"),
  E = s("584825"),
  T = s("305342"),
  f = s("293810"),
  _ = s("689938"),
  m = s("504110");
let g = e => {
    let [t, s] = n.useState(!1), [a, l] = n.useState(null);
    return {
      cancelSubscription: async t => {
        try {
          return s(!0), await o.cancelSubscription(t, e), !0
        } catch (e) {
          l(e)
        } finally {
          s(!1)
        }
      },
      error: a,
      submitting: t
    }
  },
  I = e => {
    var t;
    let {
      transitionState: s,
      groupListing: n,
      guildId: l,
      listing: o,
      subscription: I,
      onClose: h
    } = e, N = (0, c.useUID)(), p = (0, E.useSubscriptionsSettings)(l), C = (null == p ? void 0 : null === (t = p.cover_image_asset) || void 0 === t ? void 0 : t.application_id) != null ? (0, S.getAssetURL)(p.cover_image_asset.application_id, p.cover_image_asset, 440) : void 0, {
      analyticsLocations: A
    } = (0, u.default)(d.default.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL), {
      cancelSubscription: O,
      error: x,
      submitting: R
    } = g(A), M = async () => {
      await O(I.id) && h()
    }, v = o.role_benefits.benefits.filter(e => e.ref_type === f.GuildRoleSubscriptionBenefitTypes.CHANNEL), L = o.role_benefits.benefits.filter(e => e.ref_type === f.GuildRoleSubscriptionBenefitTypes.INTANGIBLE), D = i()(I.currentPeriodEnd).format("MMMM Do, YYYY"), P = _.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_DESCRIPTION.format({
      numChannels: v.length,
      numAdditionalBenefits: L.length,
      subscriptionEndDate: D
    });
    return (0, a.jsxs)(r.ModalRoot, {
      transitionState: s,
      className: m.__invalid_modal,
      "aria-labelledby": N,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)("img", {
          src: C,
          alt: "",
          className: m.headerImage
        }), (0, a.jsx)(r.ModalCloseButton, {
          withCircleBackground: !0,
          className: m.closeButton,
          onClick: h
        })]
      }), null != x ? (0, a.jsx)(r.FormErrorBlock, {
        children: x.message
      }) : null, (0, a.jsxs)(r.ModalContent, {
        className: m.content,
        children: [(0, a.jsx)(r.Heading, {
          id: N,
          variant: "text-md/medium",
          className: m.title,
          children: _.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_TITLE
        }), (0, a.jsx)(r.Text, {
          className: m.description,
          variant: "text-sm/normal",
          children: P
        }), (0, a.jsx)(T.GuildRoleSubscriptionBenefits, {
          listingId: o.id,
          guildId: n.guild_id,
          className: m.benefits
        })]
      }), (0, a.jsxs)(r.ModalFooter, {
        className: m.footer,
        children: [(0, a.jsx)(r.Button, {
          color: r.Button.Colors.RED,
          onClick: M,
          submitting: R,
          children: _.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_CANCEL_CTA
        }), (0, a.jsx)(r.Button, {
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.WHITE,
          className: m.goBackButton,
          onClick: h,
          children: _.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_NEVERMIND_CTA
        })]
      })]
    })
  },
  h = e => {
    (0, r.openModal)(t => (0, a.jsx)(I, {
      ...t,
      ...e
    }))
  }
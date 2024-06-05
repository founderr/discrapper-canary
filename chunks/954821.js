"use strict";
s.r(t), s.d(t, {
  openModal: function() {
    return g
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
  _ = s("293810"),
  I = s("689938"),
  f = s("504110");
let m = e => {
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
  N = e => {
    var t;
    let {
      transitionState: s,
      groupListing: n,
      guildId: l,
      listing: o,
      subscription: N,
      onClose: g
    } = e, h = (0, c.useUID)(), C = (0, E.useSubscriptionsSettings)(l), O = (null == C ? void 0 : null === (t = C.cover_image_asset) || void 0 === t ? void 0 : t.application_id) != null ? (0, S.getAssetURL)(C.cover_image_asset.application_id, C.cover_image_asset, 440) : void 0, {
      analyticsLocations: A
    } = (0, u.default)(d.default.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL), {
      cancelSubscription: p,
      error: R,
      submitting: x
    } = m(A), M = async () => {
      await p(N.id) && g()
    }, D = o.role_benefits.benefits.filter(e => e.ref_type === _.GuildRoleSubscriptionBenefitTypes.CHANNEL), L = o.role_benefits.benefits.filter(e => e.ref_type === _.GuildRoleSubscriptionBenefitTypes.INTANGIBLE), P = i()(N.currentPeriodEnd).format("MMMM Do, YYYY"), v = I.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_DESCRIPTION.format({
      numChannels: D.length,
      numAdditionalBenefits: L.length,
      subscriptionEndDate: P
    });
    return (0, a.jsxs)(r.ModalRoot, {
      transitionState: s,
      className: f.__invalid_modal,
      "aria-labelledby": h,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)("img", {
          src: O,
          alt: "",
          className: f.headerImage
        }), (0, a.jsx)(r.ModalCloseButton, {
          withCircleBackground: !0,
          className: f.closeButton,
          onClick: g
        })]
      }), null != R ? (0, a.jsx)(r.FormErrorBlock, {
        children: R.message
      }) : null, (0, a.jsxs)(r.ModalContent, {
        className: f.content,
        children: [(0, a.jsx)(r.Heading, {
          id: h,
          variant: "text-md/medium",
          className: f.title,
          children: I.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_TITLE
        }), (0, a.jsx)(r.Text, {
          className: f.description,
          variant: "text-sm/normal",
          children: v
        }), (0, a.jsx)(T.GuildRoleSubscriptionBenefits, {
          listingId: o.id,
          guildId: n.guild_id,
          className: f.benefits
        })]
      }), (0, a.jsxs)(r.ModalFooter, {
        className: f.footer,
        children: [(0, a.jsx)(r.Button, {
          color: r.Button.Colors.RED,
          onClick: M,
          submitting: x,
          children: I.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_CANCEL_CTA
        }), (0, a.jsx)(r.Button, {
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.WHITE,
          className: f.goBackButton,
          onClick: g,
          children: I.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_NEVERMIND_CTA
        })]
      })]
    })
  },
  g = e => {
    (0, r.openModal)(t => (0, a.jsx)(N, {
      ...t,
      ...e
    }))
  }
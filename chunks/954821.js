"use strict";
s.r(t), s.d(t, {
  openModal: function() {
    return m
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("913527"),
  l = s.n(i),
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
  N = s("504110");
let g = e => {
    let [t, s] = n.useState(!1), [a, i] = n.useState(null);
    return {
      cancelSubscription: async t => {
        try {
          return s(!0), await o.cancelSubscription(t, e), !0
        } catch (e) {
          i(e)
        } finally {
          s(!1)
        }
      },
      error: a,
      submitting: t
    }
  },
  f = e => {
    var t;
    let {
      transitionState: s,
      groupListing: n,
      guildId: i,
      listing: o,
      subscription: f,
      onClose: m
    } = e, A = (0, c.useUID)(), C = (0, E.useSubscriptionsSettings)(i), O = (null == C ? void 0 : null === (t = C.cover_image_asset) || void 0 === t ? void 0 : t.application_id) != null ? (0, S.getAssetURL)(C.cover_image_asset.application_id, C.cover_image_asset, 440) : void 0, {
      analyticsLocations: h
    } = (0, u.default)(d.default.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL), {
      cancelSubscription: R,
      error: p,
      submitting: M
    } = g(h), D = async () => {
      await R(f.id) && m()
    }, x = o.role_benefits.benefits.filter(e => e.ref_type === _.GuildRoleSubscriptionBenefitTypes.CHANNEL), L = o.role_benefits.benefits.filter(e => e.ref_type === _.GuildRoleSubscriptionBenefitTypes.INTANGIBLE), P = l()(f.currentPeriodEnd).format("MMMM Do, YYYY"), b = I.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_DESCRIPTION.format({
      numChannels: x.length,
      numAdditionalBenefits: L.length,
      subscriptionEndDate: P
    });
    return (0, a.jsxs)(r.ModalRoot, {
      transitionState: s,
      className: N.__invalid_modal,
      "aria-labelledby": A,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)("img", {
          src: O,
          alt: "",
          className: N.headerImage
        }), (0, a.jsx)(r.ModalCloseButton, {
          withCircleBackground: !0,
          className: N.closeButton,
          onClick: m
        })]
      }), null != p ? (0, a.jsx)(r.FormErrorBlock, {
        children: p.message
      }) : null, (0, a.jsxs)(r.ModalContent, {
        className: N.content,
        children: [(0, a.jsx)(r.Heading, {
          id: A,
          variant: "text-md/medium",
          className: N.title,
          children: I.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_TITLE
        }), (0, a.jsx)(r.Text, {
          className: N.description,
          variant: "text-sm/normal",
          children: b
        }), (0, a.jsx)(T.GuildRoleSubscriptionBenefits, {
          listingId: o.id,
          guildId: n.guild_id,
          className: N.benefits
        })]
      }), (0, a.jsxs)(r.ModalFooter, {
        className: N.footer,
        children: [(0, a.jsx)(r.Button, {
          color: r.Button.Colors.RED,
          onClick: D,
          submitting: M,
          children: I.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_CANCEL_CTA
        }), (0, a.jsx)(r.Button, {
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.WHITE,
          className: N.goBackButton,
          onClick: m,
          children: I.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_NEVERMIND_CTA
        })]
      })]
    })
  },
  m = e => {
    (0, r.openModal)(t => (0, a.jsx)(f, {
      ...t,
      ...e
    }))
  }
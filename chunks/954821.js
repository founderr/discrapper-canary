t.d(s, {
  h: function() {
    return O
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(913527),
  l = t.n(a),
  r = t(481060),
  o = t(355467),
  c = t(100527),
  E = t(906732),
  d = t(153124),
  _ = t(73346),
  T = t(584825),
  S = t(305342),
  u = t(293810),
  I = t(689938),
  N = t(940813);
let A = e => {
    let [s, t] = i.useState(!1), [n, a] = i.useState(null);
    return {
      cancelSubscription: async s => {
        try {
          return t(!0), await o.EO(s, e), !0
        } catch (e) {
          a(e)
        } finally {
          t(!1)
        }
      },
      error: n,
      submitting: s
    }
  },
  C = e => {
    var s;
    let {
      transitionState: t,
      groupListing: i,
      guildId: a,
      listing: o,
      subscription: C,
      onClose: O
    } = e, m = (0, d.Dt)(), h = (0, T.YB)(a), g = (null == h ? void 0 : null === (s = h.cover_image_asset) || void 0 === s ? void 0 : s.application_id) != null ? (0, _._W)(h.cover_image_asset.application_id, h.cover_image_asset, 440) : void 0, {
      analyticsLocations: R
    } = (0, E.ZP)(c.Z.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL), {
      cancelSubscription: M,
      error: x,
      submitting: D
    } = A(R), p = async () => {
      await M(C.id) && O()
    }, L = o.role_benefits.benefits.filter(e => e.ref_type === u.Qs.CHANNEL), P = o.role_benefits.benefits.filter(e => e.ref_type === u.Qs.INTANGIBLE), Z = l()(C.currentPeriodEnd).format("MMMM Do, YYYY"), f = I.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_DESCRIPTION.format({
      numChannels: L.length,
      numAdditionalBenefits: P.length,
      subscriptionEndDate: Z
    });
    return (0, n.jsxs)(r.ModalRoot, {
      transitionState: t,
      className: N.__invalid_modal,
      "aria-labelledby": m,
      children: [(0, n.jsxs)("div", {
        children: [(0, n.jsx)("img", {
          src: g,
          alt: "",
          className: N.headerImage
        }), (0, n.jsx)(r.ModalCloseButton, {
          withCircleBackground: !0,
          className: N.closeButton,
          onClick: O
        })]
      }), null != x ? (0, n.jsx)(r.FormErrorBlock, {
        children: x.message
      }) : null, (0, n.jsxs)(r.ModalContent, {
        className: N.content,
        children: [(0, n.jsx)(r.Heading, {
          id: m,
          variant: "text-md/medium",
          className: N.title,
          children: I.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_TITLE
        }), (0, n.jsx)(r.Text, {
          className: N.description,
          variant: "text-sm/normal",
          children: f
        }), (0, n.jsx)(S.c, {
          listingId: o.id,
          guildId: i.guild_id,
          className: N.benefits
        })]
      }), (0, n.jsxs)(r.ModalFooter, {
        className: N.footer,
        children: [(0, n.jsx)(r.Button, {
          color: r.Button.Colors.RED,
          onClick: p,
          submitting: D,
          children: I.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_CANCEL_CTA
        }), (0, n.jsx)(r.Button, {
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.WHITE,
          className: N.goBackButton,
          onClick: O,
          children: I.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_NEVERMIND_CTA
        })]
      })]
    })
  },
  O = e => {
    (0, r.openModal)(s => (0, n.jsx)(C, {
      ...s,
      ...e
    }))
  }
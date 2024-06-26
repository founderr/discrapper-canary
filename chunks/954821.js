t.d(s, {
  h: function() {
    return m
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(913527),
  r = t.n(i),
  o = t(481060),
  l = t(355467),
  c = t(100527),
  d = t(906732),
  _ = t(153124),
  E = t(73346),
  u = t(584825),
  T = t(305342),
  S = t(293810),
  I = t(689938),
  N = t(940813);
let C = e => {
    let [s, t] = a.useState(!1), [n, i] = a.useState(null);
    return {
      cancelSubscription: async s => {
        try {
          return t(!0), await l.EO(s, e), !0
        } catch (e) {
          i(e)
        } finally {
          t(!1)
        }
      },
      error: n,
      submitting: s
    }
  },
  A = e => {
    var s;
    let {
      transitionState: t,
      groupListing: a,
      guildId: i,
      listing: l,
      subscription: A,
      onClose: m
    } = e, O = (0, _.Dt)(), g = (0, u.YB)(i), h = (null == g ? void 0 : null === (s = g.cover_image_asset) || void 0 === s ? void 0 : s.application_id) != null ? (0, E._W)(g.cover_image_asset.application_id, g.cover_image_asset, 440) : void 0, {
      analyticsLocations: R
    } = (0, d.ZP)(c.Z.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL), {
      cancelSubscription: p,
      error: x,
      submitting: M
    } = C(R), D = async () => {
      await p(A.id) && m()
    }, f = l.role_benefits.benefits.filter(e => e.ref_type === S.Qs.CHANNEL), L = l.role_benefits.benefits.filter(e => e.ref_type === S.Qs.INTANGIBLE), P = r()(A.currentPeriodEnd).format("MMMM Do, YYYY"), Z = I.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_DESCRIPTION.format({
      numChannels: f.length,
      numAdditionalBenefits: L.length,
      subscriptionEndDate: P
    });
    return (0, n.jsxs)(o.ModalRoot, {
      transitionState: t,
      className: N.__invalid_modal,
      "aria-labelledby": O,
      children: [(0, n.jsxs)("div", {
        children: [(0, n.jsx)("img", {
          src: h,
          alt: "",
          className: N.headerImage
        }), (0, n.jsx)(o.ModalCloseButton, {
          withCircleBackground: !0,
          className: N.closeButton,
          onClick: m
        })]
      }), null != x ? (0, n.jsx)(o.FormErrorBlock, {
        children: x.message
      }) : null, (0, n.jsxs)(o.ModalContent, {
        className: N.content,
        children: [(0, n.jsx)(o.Heading, {
          id: O,
          variant: "text-md/medium",
          className: N.title,
          children: I.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_TITLE
        }), (0, n.jsx)(o.Text, {
          className: N.description,
          variant: "text-sm/normal",
          children: Z
        }), (0, n.jsx)(T.c, {
          listingId: l.id,
          guildId: a.guild_id,
          className: N.benefits
        })]
      }), (0, n.jsxs)(o.ModalFooter, {
        className: N.footer,
        children: [(0, n.jsx)(o.Button, {
          color: o.Button.Colors.RED,
          onClick: D,
          submitting: M,
          children: I.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_CANCEL_CTA
        }), (0, n.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.WHITE,
          className: N.goBackButton,
          onClick: m,
          children: I.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_NEVERMIND_CTA
        })]
      })]
    })
  },
  m = e => {
    (0, o.openModal)(s => (0, n.jsx)(A, {
      ...s,
      ...e
    }))
  }
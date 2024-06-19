l.r(n), l.d(n, {
  default: function() {
    return O
  }
});
var r = l(735250),
  s = l(470079),
  o = l(120356),
  t = l.n(o),
  i = l(442837),
  a = l(481060),
  c = l(570140),
  u = l(355467),
  d = l(821849),
  E = l(15640),
  m = l(598),
  _ = l(409813),
  N = l(104494),
  p = l(639119),
  I = l(165583),
  S = l(197115),
  R = l(185139),
  f = l(263954),
  T = l(706454),
  C = l(853872),
  P = l(930153),
  h = l(74538),
  M = l(937615),
  x = l(981631),
  j = l(474936),
  v = l(689938),
  L = l(672574);
let A = e => {
    let {
      locale: n
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f.Z, {
        icon: a.StickerIcon,
        iconClassName: L.iconColorPurple,
        description: v.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
      }), (0, r.jsx)(f.Z, {
        icon: a.BoostTier2SimpleIcon,
        iconClassName: L.iconColorPink,
        description: v.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
          numGuildSubscriptions: j.cb,
          discountPercent: (0, P.T3)(n, j.Rr / 100)
        })
      }), (0, r.jsx)(f.Z, {
        icon: a.ReactionIcon,
        iconClassName: L.iconColorYellow,
        description: v.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
      })]
    })
  },
  g = e => {
    let {
      trialOffer: n,
      discountOffer: s,
      isLoading: o,
      price: c,
      onClose: u
    } = e, d = (0, i.e7)([T.default], () => T.default.locale), E = null != n || null != s;
    return (0, r.jsxs)("div", {
      className: L.wrapper,
      children: [(0, r.jsx)(a.ModalCloseButton, {
        onClick: u,
        className: L.closeButton
      }), E && (0, r.jsx)(I.dz, {
        className: L.premiumTrialBadge
      }), (0, r.jsx)("img", {
        className: t()(L.heroImage, {
          [L.heroImageWithTrialOffer]: E
        }),
        src: l(178632),
        alt: ""
      }), o ? (0, r.jsx)(a.Spinner, {}) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          className: L.heading,
          children: null == c ? (0, r.jsx)(a.Spinner, {
            type: a.Spinner.Type.PULSING_ELLIPSIS
          }) : v.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
            monthlyPrice: (0, M.T4)(c.amount, c.currency)
          })
        }), (0, r.jsx)("div", {
          className: L.perks,
          children: (0, r.jsx)(A, {
            locale: d
          })
        })]
      })]
    })
  },
  y = e => {
    let {
      trialOffer: n,
      discountOffer: l,
      onClose: s
    } = e, o = {
      section: x.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
    };
    return (0, r.jsxs)(a.ModalFooter, {
      className: L.footer,
      children: [(0, r.jsx)(a.Button, {
        onClick: s,
        size: a.Button.Sizes.SMALL,
        color: a.Button.Colors.PRIMARY,
        look: a.Button.Looks.LINK,
        children: v.Z.Messages.CLOSE
      }), (0, r.jsx)(S.Z, {
        buttonText: null != n || null != l ? v.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
        premiumModalAnalyticsLocation: o,
        subscriptionTier: j.Si.TIER_2,
        size: a.Button.Sizes.SMALL,
        color: a.Button.Colors.GREEN,
        onClick: () => {
          s()
        }
      })]
    })
  };

function O(e) {
  let {
    onClose: n,
    ...l
  } = e, o = (0, E.V)(), t = (0, i.e7)([C.Z], () => C.Z.hasFetchedPaymentSources), I = o && t, S = (0, p.N)(), f = (0, N.Ng)();
  s.useEffect(() => {
    c.Z.wait(() => {
      (0, u.tZ)(), (0, d.Y2)(null, null, x.JjL.DISCOVERY)
    })
  }, []);
  let T = I ? h.ZP.getDefaultPrice(j.Xh.PREMIUM_MONTH_TIER_2) : null;
  return (0, r.jsx)(m.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, r.jsx)(a.ModalRoot, {
      ...l,
      "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
      children: (0, r.jsx)(R.Z, {
        hideBreadcrumbs: !0,
        body: (0, r.jsx)(g, {
          trialOffer: S,
          discountOffer: f,
          isLoading: !I,
          price: T,
          onClose: n
        }),
        footer: (0, r.jsx)(y, {
          trialOffer: S,
          discountOffer: f,
          onClose: n
        }),
        steps: [_.h8.PREMIUM_UPSELL],
        currentStep: _.h8.PREMIUM_UPSELL
      })
    })
  })
}
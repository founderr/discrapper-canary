"use strict";
r.r(l), r.d(l, {
  default: function() {
    return A
  }
});
var n = r("735250"),
  t = r("470079"),
  s = r("481060"),
  a = r("100527"),
  o = r("906732"),
  i = r("598"),
  d = r("409813"),
  c = r("185139"),
  u = r("263954"),
  p = r("267642"),
  m = r("678558"),
  E = r("981631"),
  f = r("689938"),
  S = r("824348"),
  N = r("611273");
let _ = "premium-guild-subscription-upsell-modal-header";

function x(e) {
  let {
    title: l,
    subtitle: r,
    image: t
  } = e;
  return (0, n.jsxs)("div", {
    className: S.header,
    children: [(0, n.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      id: _,
      color: "header-primary",
      className: N.marginBottom8,
      children: l
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      className: S.subtitleText,
      children: r
    }), t]
  })
}
let T = e => {
    let {
      onClose: l,
      perks: r,
      perkIntro: t = f.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER,
      headerProps: a
    } = e;
    return (0, n.jsxs)("div", {
      className: S.wrapper,
      children: [(0, n.jsx)(s.ModalCloseButton, {
        className: S.closeButton,
        onClick: () => {
          l()
        }
      }), (0, n.jsx)(P, {
        headerProps: a,
        perkIntro: t
      }), (0, n.jsx)("div", {
        className: S.perks,
        children: r.map((e, l) => {
          let {
            icon: r,
            iconClassName: t,
            description: s,
            color: a
          } = e;
          return (0, n.jsx)(u.default, {
            icon: r,
            iconClassName: t,
            description: s,
            color: a
          }, l)
        })
      })]
    })
  },
  P = e => {
    let {
      headerProps: l,
      perkIntro: a
    } = e;
    return (0, n.jsxs)(t.Fragment, {
      children: [null != l ? (0, n.jsx)(x, {
        ...l
      }) : (0, n.jsx)("img", {
        className: S.heroImage,
        src: r("438471"),
        alt: f.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER_IMG_ALT_TEXT
      }), (0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        className: S.heading,
        children: a
      })]
    })
  },
  C = e => {
    let {
      guild: l,
      targetBoostedGuildTier: r,
      onClose: t,
      analyticsSourceLocation: a
    } = e, o = {
      section: E.AnalyticsSections.PREMIUM_GUILD_UPSELL_MODAL,
      object: E.AnalyticsObjects.BUTTON_CTA,
      objectType: null != r ? (0, p.boostedGuildTierToAnalyticsObjectType)(r) : null
    };
    return (0, n.jsxs)(s.ModalFooter, {
      className: S.footer,
      children: [(0, n.jsx)(s.Button, {
        size: s.Button.Sizes.SMALL,
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        onClick: () => {
          t()
        },
        children: f.default.Messages.CLOSE
      }), (0, n.jsx)(m.default, {
        analyticsLocation: o,
        analyticsSourceLocation: a,
        guild: l,
        targetBoostedGuildTier: r,
        onClose: () => {
          t()
        }
      })]
    })
  };

function A(e) {
  let {
    analyticsSourceLocation: l,
    guild: r,
    targetBoostedGuildTier: t,
    perks: u,
    perkIntro: p,
    headerProps: m,
    onClose: E,
    ...f
  } = e, {
    analyticsLocations: S
  } = (0, o.default)(a.default.ACTIVITY_DIRECTORY);
  return (0, n.jsx)(o.AnalyticsLocationProvider, {
    value: S,
    children: (0, n.jsx)(i.PaymentContextProvider, {
      activeSubscription: null,
      stepConfigs: [],
      skuIDs: [],
      children: (0, n.jsx)(s.ModalRoot, {
        ...f,
        "aria-labelledby": _,
        children: (0, n.jsx)(c.default, {
          hideBreadcrumbs: !0,
          body: (0, n.jsx)(T, {
            onClose: E,
            perks: u,
            perkIntro: p,
            headerProps: m
          }),
          footer: (0, n.jsx)(C, {
            guild: r,
            targetBoostedGuildTier: t,
            onClose: E,
            analyticsSourceLocation: l
          }),
          steps: [d.Step.PREMIUM_GUILD_UPSELL],
          currentStep: d.Step.PREMIUM_GUILD_UPSELL
        })
      })
    })
  })
}
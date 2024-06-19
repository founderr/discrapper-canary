l.r(n), l.d(n, {
  default: function() {
    return j
  }
});
var r = l(735250),
  s = l(470079),
  t = l(481060),
  o = l(100527),
  a = l(906732),
  i = l(598),
  c = l(409813),
  d = l(185139),
  u = l(263954),
  m = l(267642),
  E = l(678558),
  N = l(981631),
  p = l(689938),
  h = l(9004),
  x = l(331651);
let _ = "premium-guild-subscription-upsell-modal-header";

function I(e) {
  let {
    title: n,
    subtitle: l,
    image: s
  } = e;
  return (0, r.jsxs)("div", {
    className: h.header,
    children: [(0, r.jsx)(t.Heading, {
      variant: "heading-xl/semibold",
      id: _,
      color: "header-primary",
      className: x.marginBottom8,
      children: n
    }), (0, r.jsx)(t.Text, {
      variant: "text-md/normal",
      className: h.subtitleText,
      children: l
    }), s]
  })
}
let C = e => {
    let {
      onClose: n,
      perks: l,
      perkIntro: s = p.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER,
      headerProps: o
    } = e;
    return (0, r.jsxs)("div", {
      className: h.wrapper,
      children: [(0, r.jsx)(t.ModalCloseButton, {
        className: h.closeButton,
        onClick: () => {
          n()
        }
      }), (0, r.jsx)(S, {
        headerProps: o,
        perkIntro: s
      }), (0, r.jsx)("div", {
        className: h.perks,
        children: l.map((e, n) => {
          let {
            icon: l,
            iconClassName: s,
            description: t,
            color: o
          } = e;
          return (0, r.jsx)(u.Z, {
            icon: l,
            iconClassName: s,
            description: t,
            color: o
          }, n)
        })
      })]
    })
  },
  S = e => {
    let {
      headerProps: n,
      perkIntro: o
    } = e;
    return (0, r.jsxs)(s.Fragment, {
      children: [null != n ? (0, r.jsx)(I, {
        ...n
      }) : (0, r.jsx)("img", {
        className: h.heroImage,
        src: l(438471),
        alt: p.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER_IMG_ALT_TEXT
      }), (0, r.jsx)(t.Text, {
        variant: "text-md/normal",
        className: h.heading,
        children: o
      })]
    })
  },
  f = e => {
    let {
      guild: n,
      targetBoostedGuildTier: l,
      onClose: s,
      analyticsSourceLocation: o
    } = e, a = {
      section: N.jXE.PREMIUM_GUILD_UPSELL_MODAL,
      object: N.qAy.BUTTON_CTA,
      objectType: null != l ? (0, m.ge)(l) : null
    };
    return (0, r.jsxs)(t.ModalFooter, {
      className: h.footer,
      children: [(0, r.jsx)(t.Button, {
        size: t.Button.Sizes.SMALL,
        color: t.Button.Colors.PRIMARY,
        look: t.Button.Looks.LINK,
        onClick: () => {
          s()
        },
        children: p.Z.Messages.CLOSE
      }), (0, r.jsx)(E.Z, {
        analyticsLocation: a,
        analyticsSourceLocation: o,
        guild: n,
        targetBoostedGuildTier: l,
        onClose: () => {
          s()
        }
      })]
    })
  };

function j(e) {
  let {
    analyticsSourceLocation: n,
    guild: l,
    targetBoostedGuildTier: s,
    perks: u,
    perkIntro: m,
    headerProps: E,
    onClose: N,
    ...p
  } = e, {
    analyticsLocations: h
  } = (0, a.ZP)(o.Z.ACTIVITY_DIRECTORY);
  return (0, r.jsx)(a.Gt, {
    value: h,
    children: (0, r.jsx)(i.PaymentContextProvider, {
      activeSubscription: null,
      stepConfigs: [],
      skuIDs: [],
      children: (0, r.jsx)(t.ModalRoot, {
        ...p,
        "aria-labelledby": _,
        children: (0, r.jsx)(d.Z, {
          hideBreadcrumbs: !0,
          body: (0, r.jsx)(C, {
            onClose: N,
            perks: u,
            perkIntro: m,
            headerProps: E
          }),
          footer: (0, r.jsx)(f, {
            guild: l,
            targetBoostedGuildTier: s,
            onClose: N,
            analyticsSourceLocation: n
          }),
          steps: [c.h8.PREMIUM_GUILD_UPSELL],
          currentStep: c.h8.PREMIUM_GUILD_UPSELL
        })
      })
    })
  })
}
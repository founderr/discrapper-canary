"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
}), s("47120");
var a, i, l = s("735250"),
  n = s("470079"),
  C = s("481060"),
  _ = s("355467"),
  I = s("100527"),
  N = s("906732"),
  o = s("740492"),
  A = s("153124"),
  d = s("626135"),
  r = s("171246"),
  c = s("225715"),
  S = s("635840"),
  E = s("981631"),
  O = s("689938"),
  u = s("850335");
let T = e => {
  let [t, s] = n.useState(!1), [a, i] = n.useState(null);
  return {
    cancelSubscription: async t => {
      try {
        return s(!0), await _.cancelSubscription(t, e), !0
      } catch (e) {
        i(e)
      } finally {
        s(!1)
      }
    },
    error: a,
    submitting: t
  }
};

function L(e) {
  let {
    transitionState: t,
    application: s,
    listing: a,
    subscription: i,
    guild: _,
    onClose: L
  } = e, P = (0, A.useUID)(), {
    analyticsLocations: R
  } = (0, N.default)(I.default.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL), {
    cancelSubscription: p,
    error: U,
    submitting: f
  } = T(R), [B, m] = n.useState(0), h = async () => {
    await p(i.id) && (o.default.disableApplicationSubscriptionCancellationSurvey ? L() : m(1))
  };
  n.useEffect(() => {
    d.default.track(E.AnalyticEvents.CANCELLATION_FLOW_STARTED, {
      location_stack: R
    })
  }, [R]);
  let x = (0, r.isApplicationUserSubscription)(a.sku_flags);
  return (0, l.jsx)(C.ModalRoot, {
    transitionState: t,
    className: u.modal,
    "aria-labelledby": P,
    children: (0, l.jsxs)(C.Slides, {
      activeSlide: B,
      width: 440,
      children: [(0, l.jsx)(C.Slide, {
        id: 0,
        children: (0, l.jsxs)("div", {
          className: u.slideContainer,
          children: [null != U ? (0, l.jsx)(C.FormErrorBlock, {
            children: U.message
          }) : null, (0, l.jsxs)(C.ModalContent, {
            className: u.content,
            children: [(0, l.jsx)(C.Spacer, {
              size: 16
            }), (0, l.jsxs)(c.ApplicationBenefitsModalContent, {
              children: [(0, l.jsx)(c.ApplicationBenefitsModalIcon, {
                application: s
              }), (0, l.jsx)(c.ApplicationBenefitsModalHeading, {
                id: P,
                children: O.default.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_TITLE_V2.format({
                  tier: a.name
                })
              }), (0, l.jsx)(c.ApplicationBenefitsModalDivider, {}), (0, l.jsx)(c.ApplicationBenefitsModalDescription, {
                title: O.default.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_HEADER,
                description: x ? O.default.Messages.APPLICATION_CANCEL_USER_SUBSCRIPTION_MODAL_DESCRIPTION.format({
                  timestamp: i.currentPeriodEnd.getTime()
                }) : O.default.Messages.APPLICATION_CANCEL_GUILD_SUBSCRIPTION_MODAL_DESCRIPTION.format({
                  timestamp: i.currentPeriodEnd.getTime(),
                  guildName: null == _ ? void 0 : _.name
                })
              }), (0, l.jsx)(c.ApplicationBenefitsModalBenefits, {
                applicationId: a.application_id,
                storeListingBenefits: a.store_listing_benefits,
                skuBenefits: a.sku_benefits.benefits
              })]
            })]
          }), (0, l.jsxs)(C.ModalFooter, {
            className: u.footer,
            children: [(0, l.jsx)(C.Button, {
              color: C.Button.Colors.RED,
              onClick: h,
              submitting: f,
              children: O.default.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_CANCEL_CTA
            }), (0, l.jsx)(C.Button, {
              look: C.Button.Looks.LINK,
              color: C.Button.Colors.PRIMARY,
              className: u.goBackButton,
              onClick: L,
              children: O.default.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_NEVERMIND_CTA
            })]
          })]
        })
      }), (0, l.jsx)(C.Slide, {
        id: 1,
        children: (0, l.jsx)("div", {
          className: u.slideContainer,
          children: (0, l.jsx)(S.default, {
            application: s,
            subscriptionId: i.id,
            onClose: L
          })
        })
      })]
    })
  })
}(i = a || (a = {}))[i.CANCEL = 0] = "CANCEL", i[i.SURVEY = 1] = "SURVEY"
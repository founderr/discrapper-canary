t.r(s), t.d(s, {
  default: function() {
    return P
  }
}), t(47120);
var a, C, _ = t(735250),
  n = t(470079),
  i = t(481060),
  I = t(355467),
  l = t(100527),
  N = t(906732),
  A = t(740492),
  o = t(153124),
  r = t(626135),
  O = t(171246),
  S = t(225715),
  E = t(635840),
  T = t(981631),
  c = t(689938),
  d = t(250965);
let L = e => {
  let [s, t] = n.useState(!1), [a, C] = n.useState(null);
  return {
    cancelSubscription: async s => {
      try {
        return t(!0), await I.EO(s, e), !0
      } catch (e) {
        C(e)
      } finally {
        t(!1)
      }
    },
    error: a,
    submitting: s
  }
};

function P(e) {
  let {
    transitionState: s,
    application: t,
    listing: a,
    subscription: C,
    guild: I,
    onClose: P
  } = e, u = (0, o.Dt)(), {
    analyticsLocations: R
  } = (0, N.ZP)(l.Z.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL), {
    cancelSubscription: U,
    error: m,
    submitting: x
  } = L(R), [h, p] = n.useState(0), B = async () => {
    await U(C.id) && (A.ZP.disableApplicationSubscriptionCancellationSurvey ? P() : p(1))
  };
  n.useEffect(() => {
    r.default.track(T.rMx.CANCELLATION_FLOW_STARTED, {
      location_stack: R
    })
  }, [R]);
  let M = (0, O.KW)(a.sku_flags);
  return (0, _.jsx)(i.ModalRoot, {
    transitionState: s,
    className: d.modal,
    "aria-labelledby": u,
    children: (0, _.jsxs)(i.Slides, {
      activeSlide: h,
      width: 440,
      children: [(0, _.jsx)(i.Slide, {
        id: 0,
        children: (0, _.jsxs)("div", {
          className: d.slideContainer,
          children: [null != m ? (0, _.jsx)(i.FormErrorBlock, {
            children: m.message
          }) : null, (0, _.jsxs)(i.ModalContent, {
            className: d.content,
            children: [(0, _.jsx)(i.Spacer, {
              size: 16
            }), (0, _.jsxs)(S.q$, {
              children: [(0, _.jsx)(S.CW, {
                application: t
              }), (0, _.jsx)(S.r0, {
                id: u,
                children: c.Z.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_TITLE_V2.format({
                  tier: a.name
                })
              }), (0, _.jsx)(S.s$, {}), (0, _.jsx)(S.K9, {
                title: c.Z.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_HEADER,
                description: M ? c.Z.Messages.APPLICATION_CANCEL_USER_SUBSCRIPTION_MODAL_DESCRIPTION.format({
                  timestamp: C.currentPeriodEnd.getTime()
                }) : c.Z.Messages.APPLICATION_CANCEL_GUILD_SUBSCRIPTION_MODAL_DESCRIPTION.format({
                  timestamp: C.currentPeriodEnd.getTime(),
                  guildName: null == I ? void 0 : I.name
                })
              }), (0, _.jsx)(S.G9, {
                applicationId: a.application_id,
                storeListingBenefits: a.store_listing_benefits,
                skuBenefits: a.sku_benefits.benefits
              })]
            })]
          }), (0, _.jsxs)(i.ModalFooter, {
            className: d.footer,
            children: [(0, _.jsx)(i.Button, {
              color: i.Button.Colors.RED,
              onClick: B,
              submitting: x,
              children: c.Z.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_CANCEL_CTA
            }), (0, _.jsx)(i.Button, {
              look: i.Button.Looks.LINK,
              color: i.Button.Colors.PRIMARY,
              className: d.goBackButton,
              onClick: P,
              children: c.Z.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_NEVERMIND_CTA
            })]
          })]
        })
      }), (0, _.jsx)(i.Slide, {
        id: 1,
        children: (0, _.jsx)("div", {
          className: d.slideContainer,
          children: (0, _.jsx)(E.Z, {
            application: t,
            subscriptionId: C.id,
            onClose: P
          })
        })
      })]
    })
  })
}(C = a || (a = {}))[C.CANCEL = 0] = "CANCEL", C[C.SURVEY = 1] = "SURVEY"
t.d(s, {
  L1: function() {
    return I
  },
  o1: function() {
    return u
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(481060),
  r = t(570140),
  o = t(782568),
  c = t(153124),
  E = t(960359),
  d = t(524347),
  _ = t(853197),
  T = t(689938),
  S = t(445807);

function u(e) {
  let {
    onClose: s,
    code: t,
    copyInputTitle: i,
    bodyText: a
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(l.ModalHeader, {
      separator: !1,
      className: S.headerContainer,
      children: [(0, n.jsx)("div", {
        className: S.dropArt
      }), (0, n.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        children: T.Z.Messages.OUTBOUND_PROMOTION_REDEMPTION_MODAL_TITLE
      })]
    }), (0, n.jsxs)(l.ModalContent, {
      className: S.modalContent,
      children: [(0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        className: S.codeBodyText,
        children: a
      }), (0, n.jsx)(l.FormDivider, {
        className: S.formDivider
      }), (0, n.jsx)(l.FormSection, {
        title: i,
        className: S.formSection,
        children: (0, n.jsx)(l.Button, {
          onClick: () => (0, o.Z)(t),
          color: l.Button.Colors.BRAND,
          look: l.Button.Looks.FILLED,
          children: T.Z.Messages.GIFT_EMBED_BUTTON_CLAIM
        })
      })]
    }), (0, n.jsx)(l.ModalFooter, {
      className: S.modalFooter,
      children: (0, n.jsx)(l.Button, {
        className: S.closeButton,
        onClick: s,
        look: l.Button.Looks.LINK,
        color: S.closeButton,
        children: T.Z.Messages.CLOSE
      })
    })]
  })
}

function I(e) {
  let {
    onClose: s,
    errorCode: t
  } = e, i = {
    26e4: T.Z.Messages.DROPS_USER_NOT_ENROLLED_ERROR,
    260001: T.Z.Messages.DROPS_QUEST_NOT_COMPLETED_ERROR,
    260002: T.Z.Messages.DROPS_NO_CODE_AVAILABLE_ERROR,
    260003: T.Z.Messages.DROPS_CODE_ALREADY_CLAIMED_ERROR
  }, a = T.Z.Messages.GENERIC_ERROR_BODY;
  return null != i[t] && (a = i[t]), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(l.ModalHeader, {
      separator: !1,
      className: S.errorHeader,
      children: [(0, n.jsx)("div", {
        className: S.errorArt
      }), (0, n.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        children: T.Z.Messages.GENERIC_ERROR_TITLE
      })]
    }), (0, n.jsx)(l.ModalContent, {
      className: S.errorBody,
      children: (0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        className: S.bodyText,
        children: a
      })
    }), (0, n.jsx)(l.ModalFooter, {
      children: (0, n.jsx)(l.Button, {
        color: l.Button.Colors.BRAND,
        onClick: s,
        children: T.Z.Messages.CLOSE
      })
    })]
  })
}
s.ZP = function(e) {
  let {
    onClose: s,
    code: o,
    drop: I,
    platform: N,
    transitionState: A
  } = e, C = (0, c.Dt)(), [O, m] = i.useState();
  i.useEffect(() => {
    null == o && r.Z.wait(async () => {
      await (0, E.dN)(I.dropsQuestId)
    })
  }, [I.dropsQuestId, o]);
  let h = (0, a.e7)([d.Z], () => d.Z.platformAvailability);
  return (0, n.jsx)(l.ModalRoot, {
    transitionState: A,
    "aria-labelledby": C,
    children: (0, n.jsx)(n.Fragment, {
      children: (() => {
        if (null != o) return (0, n.jsx)(u, {
          bodyText: I.messages.claimTip(),
          onClose: s,
          copyInputTitle: T.Z.Messages.DROPS_REDEMPTION_CODE_PLATFORM_TITLE.format({
            platform: N
          }),
          code: o
        });
        if (null === h) return (0, n.jsx)("div", {
          className: S.spinnerContainer,
          children: (0, n.jsx)(l.Spinner, {})
        });
        {
          let e = h.length > 0,
            i = 1 === h.length;
          return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsxs)(l.ModalHeader, {
              separator: !1,
              className: S.headerContainer,
              children: [(0, n.jsx)("div", {
                className: S.dropArt
              }), (0, n.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                children: T.Z.Messages.OUTBOUND_PROMOTION_REDEMPTION_MODAL_TITLE
              })]
            }), (0, n.jsxs)(l.ModalContent, {
              children: [(0, n.jsx)(l.Text, {
                variant: "text-md/normal",
                className: S.dropBodyText,
                children: i ? T.Z.Messages.DROPS_MODAL_CHOOSE_SINGLE_PLATFORM.format({
                  platform: (0, _.Un)(h[0])
                }) : T.Z.Messages.DROPS_MODAL_CHOOSE_PLATFORM.format({
                  title: I.title
                })
              }), (0, n.jsx)(l.FormDivider, {
                className: S.formDivider
              }), (0, n.jsxs)(l.FormSection, {
                className: S.dropFormSection,
                children: [(0, n.jsx)(l.SingleSelect, {
                  onChange: m,
                  options: h.map(e => ({
                    value: e,
                    label: (0, _.Un)(e)
                  })),
                  value: i ? h[0] : O,
                  isDisabled: !e,
                  className: e ? "" : S.selectDangerBorder,
                  look: e ? l.SelectLooks.FILLED : l.SelectLooks.CUSTOM
                }), !e && (0, n.jsx)(l.Text, {
                  variant: "text-sm/medium",
                  color: "text-danger",
                  className: S.errorCodesText,
                  children: T.Z.Messages.DROPS_CODES_RAN_OUT
                })]
              })]
            }), (0, n.jsxs)(l.ModalFooter, {
              children: [e && (0, n.jsx)(l.Button, {
                color: l.Button.Colors.BRAND,
                onClick: () => {
                  (0, l.openModalLazy)(async () => {
                    let {
                      default: e
                    } = await Promise.all([t.e("99387"), t.e("5004")]).then(t.bind(t, 233070));
                    return t => (void 0 !== O || i) && (0, n.jsx)(e, {
                      ...t,
                      platform: void 0 === O ? h[0] : O,
                      code: o,
                      dropsQuestId: I.dropsQuestId,
                      closeParentModal: s,
                      singlePlatformClaim: i
                    })
                  })
                },
                disabled: void 0 === O && !i,
                children: T.Z.Messages.UNLOCK_CODE
              }), e ? (0, n.jsx)(l.Button, {
                onClick: s,
                look: l.Button.Looks.LINK,
                color: S.maybeLaterButton,
                children: T.Z.Messages.MAYBE_LATER
              }) : (0, n.jsx)(l.Button, {
                onClick: s,
                look: l.Button.Looks.LINK,
                color: S.closeButton,
                children: T.Z.Messages.CLOSE
              })]
            })]
          })
        }
      })()
    })
  })
}
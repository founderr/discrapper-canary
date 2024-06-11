"use strict";
t.r(s), t.d(s, {
  default: function() {
    return L
  }
});
var a = t("735250"),
  l = t("470079"),
  i = t("704215"),
  n = t("481060"),
  o = t("607070"),
  c = t("605236"),
  d = t("193277"),
  r = t("912527"),
  m = t("397575"),
  u = t("132338"),
  h = t("626135"),
  x = t("132871"),
  f = t("147890"),
  I = t("981631"),
  _ = t("921944"),
  A = t("689938"),
  N = t("813687");

function L(e) {
  let {
    guildId: s,
    transitionState: L,
    onClose: M,
    analyticsType: P = i.DismissibleContent.APP_DIRECTORY_UPSELL_MODAL
  } = e;
  return l.useEffect(() => {
    h.default.track(I.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
      type: i.DismissibleContent[P],
      guild_id: s
    })
  }, [s, P]), (0, a.jsxs)(n.ModalRoot, {
    transitionState: L,
    className: N.__invalid_modal,
    size: n.ModalSize.SMALL,
    children: [(0, a.jsxs)(n.ModalContent, {
      className: N.modalContent,
      children: [(0, a.jsx)(n.LottieAnimation, {
        autoplay: !0,
        shouldAnimate: !o.default.useReducedMotion,
        importData: () => t.e("76241").then(t.t.bind(t, "554690", 19)),
        className: N.animation
      }), (0, a.jsx)(n.Heading, {
        variant: "heading-xl/semibold",
        children: A.default.Messages.APP_DIRECTORY_IPP_HEADER
      }), (0, a.jsx)(n.Text, {
        variant: "text-md/medium",
        className: N.subheader,
        color: "text-muted",
        children: A.default.Messages.APP_DIRECTORY_IPP_SECONDARY_HEADER
      }), (0, a.jsxs)("ul", {
        className: N.listContainer,
        children: [(0, a.jsxs)("li", {
          className: N.listItem,
          children: [(0, a.jsx)(m.default, {
            className: N.wandIcon,
            height: "24",
            width: "24"
          }), (0, a.jsx)(n.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: A.default.Messages.APP_DIRECTORY_IPP_CUSTOMIZATION
          })]
        }), (0, a.jsx)(u.default, {
          className: N.divider
        }), (0, a.jsxs)("li", {
          className: N.listItem,
          children: [(0, a.jsx)(r.default, {
            className: N.robotIcon,
            height: "24",
            width: "24"
          }), (0, a.jsx)(n.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: A.default.Messages.APP_DIRECTORY_IPP_AUTOMATION
          })]
        }), (0, a.jsx)(u.default, {
          className: N.divider
        }), (0, a.jsxs)("li", {
          className: N.listItem,
          children: [(0, a.jsx)(d.default, {
            className: N.smileIcon,
            height: "24",
            width: "24"
          }), (0, a.jsx)(n.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: A.default.Messages.APP_DIRECTORY_IPP_FUN
          })]
        })]
      })]
    }), (0, a.jsxs)(n.ModalFooter, {
      className: N.modalFooter,
      children: [(0, a.jsx)(n.Button, {
        onClick: () => {
          M(), (0, c.markDismissibleContentAsDismissed)(P, {
            forceTrack: !0,
            dismissAction: _.ContentDismissActionType.PRIMARY,
            guildId: s
          }), (0, f.goToAppDirectory)({
            guildId: s,
            entrypoint: {
              name: x.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_UPSELL_MODAL
            }
          })
        },
        children: A.default.Messages.GUILD_EVENT_UPSELL_PRIMARY_CTA
      }), (0, a.jsx)(n.Button, {
        look: n.Button.Looks.LINK,
        onClick: () => {
          M(), (0, c.markDismissibleContentAsDismissed)(P, {
            forceTrack: !0,
            dismissAction: _.ContentDismissActionType.SECONDARY,
            guildId: s
          })
        },
        color: n.Button.Colors.PRIMARY,
        children: A.default.Messages.NOT_NOW
      })]
    })]
  })
}
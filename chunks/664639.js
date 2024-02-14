"use strict";
t.r(a), t.d(a, {
  default: function() {
    return m
  }
});
var s = t("37983"),
  n = t("884691"),
  l = t("432710"),
  i = t("65597"),
  d = t("77078"),
  r = t("519705"),
  o = t("155084"),
  c = t("282109"),
  E = t("945330"),
  u = t("898260"),
  N = t("34676"),
  R = t("764828"),
  T = t("217736"),
  _ = t("327944"),
  A = t("324252"),
  f = t("49111"),
  S = t("782340"),
  x = t("881837");

function m(e) {
  let {
    transitionState: a,
    onClose: t,
    handleBlock: m,
    channelId: h,
    warningId: M,
    senderId: g
  } = e, v = () => {
    t()
  }, C = (0, A.getStrangerDangerSafetyTips)();
  n.useEffect(() => {
    (0, T.trackViewedEvent)(f.AnalyticEvents.SAFETY_WARNING_MODAL_VIEWED, {
      channelId: h,
      warningId: M,
      senderId: g,
      warningType: R.SafetyWarningTypes.STRANGER_DANGER
    }), o.default.increment({
      name: l.MetricEvents.SAFETY_WARNING_MODAL_VIEW
    })
  }, [h, M, g]);
  let y = (0, i.default)([c.default], () => c.default.isChannelMuted(null, h));
  return (0, s.jsx)(d.ModalRoot, {
    transitionState: a,
    children: (0, s.jsxs)(d.Scroller, {
      style: {
        overflow: "hidden auto"
      },
      children: [(0, s.jsxs)(d.ModalHeader, {
        className: x.modalHeader,
        children: [(0, s.jsxs)("div", {
          className: x.modalHeaderText,
          children: [(0, s.jsx)(d.Text, {
            variant: "eyebrow",
            color: "status-positive-text",
            children: S.default.Messages.STRANGER_DANGER_TIPS_HEADER
          }), (0, s.jsx)(d.Heading, {
            variant: "heading-xl/bold",
            color: "status-positive-text",
            children: S.default.Messages.STRANGER_DANGER_TIPS_DESCRIPTION
          })]
        }), (0, s.jsx)(d.Button, {
          "aria-label": S.default.Messages.CLOSE,
          look: d.Button.Looks.BLANK,
          size: d.Button.Sizes.NONE,
          onClick: t,
          innerClassName: x.closeButtonInner,
          className: x.closeButton,
          children: (0, s.jsx)(E.default, {
            width: 18,
            height: 18,
            className: x.closeIcon
          })
        })]
      }), (0, s.jsxs)(d.ModalContent, {
        className: x.modalContent,
        children: [(0, s.jsx)("div", {
          className: x.tipsSection,
          children: C.map((e, a) => (0, s.jsxs)("div", {
            className: x.tipRow,
            children: [(0, s.jsx)(d.Heading, {
              variant: "heading-md/semibold",
              color: "text-brand",
              className: x.tipNumber,
              children: a + 1
            }), (0, s.jsx)(d.Text, {
              variant: "text-sm/medium",
              color: "header-secondary",
              children: e
            })]
          }, a))
        }), (0, s.jsxs)("div", {
          children: [(0, s.jsx)(d.Text, {
            className: x.moreHeading,
            variant: "eyebrow",
            color: "header-secondary",
            children: S.default.Messages.STRANGER_DANGER_MORE_HEADER
          }), (0, s.jsxs)("div", {
            className: x.tipsSection,
            children: [(0, s.jsxs)("div", {
              className: x.safetyAction,
              children: [(0, s.jsxs)("div", {
                className: x.safetyActionText,
                children: [(0, s.jsx)(d.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: S.default.Messages.STRANGER_DANGER_MORE_MUTE
                }), (0, s.jsx)(d.Text, {
                  variant: "text-xs/medium",
                  color: "header-secondary",
                  children: S.default.Messages.STRANGER_DANGER_MORE_MUTE_DESCRIPTION
                })]
              }), (0, s.jsx)(d.Button, {
                size: d.Button.Sizes.SMALL,
                color: d.Button.Colors.PRIMARY,
                "aria-label": S.default.Messages.STRANGER_DANGER_MORE_MUTE,
                onClick: y ? () => {
                  r.default.updateChannelOverrideSettings(null, h, {
                    muted: !1
                  }, N.NotificationLabels.Unmuted), (0, d.showToast)((0, d.createToast)(S.default.Messages.STRANGER_DANGER_UNMUTE_CONFIRM, d.ToastType.SUCCESS)), (0, T.trackCtaEvent)({
                    channelId: h,
                    warningId: M,
                    senderId: g,
                    warningType: R.SafetyWarningTypes.STRANGER_DANGER,
                    cta: T.CtaEventTypes.USER_MODAL_UNMUTE
                  })
                } : () => {
                  r.default.updateChannelOverrideSettings(null, h, {
                    muted: !0
                  }, N.NotificationLabels.Muted), (0, d.showToast)((0, d.createToast)(S.default.Messages.STRANGER_DANGER_MUTE_CONFIRM, d.ToastType.SUCCESS)), (0, T.trackCtaEvent)({
                    channelId: h,
                    warningId: M,
                    senderId: g,
                    warningType: R.SafetyWarningTypes.STRANGER_DANGER,
                    cta: T.CtaEventTypes.USER_MODAL_MUTE
                  })
                },
                children: y ? S.default.Messages.STRANGER_DANGER_MORE_UNMUTE : S.default.Messages.STRANGER_DANGER_MORE_MUTE
              })]
            }), (0, s.jsx)(u.default, {}), (0, s.jsxs)("div", {
              className: x.safetyAction,
              children: [(0, s.jsxs)("div", {
                className: x.safetyActionText,
                children: [(0, s.jsx)(d.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: S.default.Messages.STRANGER_DANGER_MORE_BLOCK
                }), (0, s.jsx)(d.Text, {
                  variant: "text-xs/medium",
                  color: "header-secondary",
                  children: S.default.Messages.STRANGER_DANGER_MORE_BLOCK_DESCRIPTION
                })]
              }), (0, s.jsx)(d.Button, {
                size: d.Button.Sizes.SMALL,
                color: d.Button.Colors.RED,
                "aria-label": S.default.Messages.STRANGER_DANGER_BANNER_BLOCK,
                onClick: () => {
                  v(), m()
                },
                children: S.default.Messages.STRANGER_DANGER_BANNER_BLOCK
              })]
            })]
          })]
        }), (0, s.jsx)(_.default, {
          channelId: h,
          warningId: M,
          senderId: g
        })]
      })]
    })
  })
}
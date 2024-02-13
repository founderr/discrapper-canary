"use strict";
n.r(t), n.d(t, {
  StrangerDangerWarningBanner: function() {
    return g
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("432710"),
  i = n("77078"),
  r = n("736964"),
  o = n("155084"),
  u = n("945330"),
  d = n("277734"),
  c = n("764828"),
  f = n("217736"),
  h = n("324252"),
  C = n("49111"),
  p = n("782340"),
  m = n("921548"),
  E = n("145680");

function g(e) {
  let {
    channelId: t,
    warningId: g,
    senderId: S
  } = e, _ = s.useCallback(() => {
    (0, d.dismissChannelSafetyWarnings)(t, [g])
  }, [t, g]), A = s.useCallback(() => {
    _(), (0, f.trackCtaEvent)({
      channelId: t,
      warningId: g,
      senderId: S,
      warningType: c.SafetyWarningTypes.STRANGER_DANGER,
      cta: f.CtaEventTypes.DISMISS
    })
  }, [_, t, g, S]), T = s.useCallback(e => () => {
    r.default.addRelationship({
      userId: S,
      context: {
        location: h.LOCATION_CONTEXT_WEB
      },
      type: C.RelationshipTypes.BLOCKED
    }), _(), (0, i.showToast)((0, i.createToast)(p.default.Messages.STRANGER_DANGER_BLOCK_CONFIRM, i.ToastType.SUCCESS)), (0, f.trackCtaEvent)({
      channelId: t,
      warningId: g,
      senderId: S,
      warningType: c.SafetyWarningTypes.STRANGER_DANGER,
      cta: e
    })
  }, [_, t, g, S]);
  s.useEffect(() => {
    (0, f.trackViewedEvent)(C.AnalyticEvents.SAFETY_WARNING_VIEWED, {
      channelId: t,
      warningId: g,
      senderId: S,
      warningType: c.SafetyWarningTypes.STRANGER_DANGER
    }), o.default.increment({
      name: l.MetricEvents.SAFETY_WARNING_VIEW
    })
  }, [t, g, S]);
  let M = () => {
      (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("664639").then(n.bind(n, "664639"));
        return n => {
          let {
            transitionState: s,
            onClose: l
          } = n;
          return (0, a.jsx)(e, {
            transitionState: s,
            onClose: l,
            channelId: t,
            warningId: g,
            senderId: S,
            handleBlock: () => {
              N(f.CtaEventTypes.USER_MODAL_BLOCK_CONFIRM, f.CtaEventTypes.USER_MODAL_BLOCK_CANCEL, M)
            }
          })
        }
      })
    },
    N = (e, s, l) => {
      (0, i.openModalLazy)(async () => {
        let {
          default: i
        } = await n.el("968710").then(n.bind(n, "968710"));
        return n => (0, a.jsx)(i, {
          ...n,
          userId: S,
          confirmBlock: T(e),
          onCancel: () => {
            null == l || l(), (0, f.trackCtaEvent)({
              channelId: t,
              warningId: g,
              senderId: S,
              warningType: c.SafetyWarningTypes.STRANGER_DANGER,
              cta: s
            })
          }
        })
      })
    };
  return (0, a.jsxs)("div", {
    className: m.strangerDangerBanner,
    children: [(0, a.jsxs)("div", {
      className: m.shieldAndHeading,
      children: [(0, a.jsx)("img", {
        className: m.safetyShieldIcon,
        src: E,
        alt: ""
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          color: "text-primary",
          children: p.default.Messages.STRANGER_DANGER_BANNER_HEADER
        }), (0, a.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "text-primary",
          children: p.default.Messages.STRANGER_DANGER_BANNER_DESCRIPTION
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: m.buttons,
      children: [(0, a.jsx)(i.Button, {
        size: i.Button.Sizes.SMALL,
        color: i.Button.Colors.BRAND,
        "aria-label": p.default.Messages.STRANGER_DANGER_BANNER_MORE_TIPS,
        onClick: () => {
          M(), (0, f.trackCtaEvent)({
            channelId: t,
            warningId: g,
            senderId: S,
            warningType: c.SafetyWarningTypes.STRANGER_DANGER,
            cta: f.CtaEventTypes.OPEN_MORE_TIPS
          })
        },
        children: p.default.Messages.STRANGER_DANGER_BANNER_MORE_TIPS
      }), (0, a.jsx)(i.Button, {
        size: i.Button.Sizes.SMALL,
        color: i.Button.Colors.RED,
        "aria-label": p.default.Messages.STRANGER_DANGER_BANNER_BLOCK,
        onClick: () => N(f.CtaEventTypes.USER_BANNER_BLOCK_CONFIRM, f.CtaEventTypes.USER_BANNER_BLOCK_CANCEL),
        children: p.default.Messages.STRANGER_DANGER_BANNER_BLOCK
      })]
    }), (0, a.jsx)(i.Clickable, {
      className: m.closeButton,
      onClick: A,
      role: "button",
      "aria-label": p.default.Messages.DISMISS,
      children: (0, a.jsx)(u.default, {
        width: 24,
        height: 24,
        className: m.closeButton
      })
    })]
  })
}
"use strict";
n.r(t), n.d(t, {
  StrangerDangerWarningBanner: function() {
    return E
  }
});
var s = n("37983"),
  a = n("884691"),
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
  g = n("145680");

function E(e) {
  let {
    channelId: t,
    warningId: E,
    senderId: S
  } = e, A = a.useCallback(() => {
    (0, d.dismissChannelSafetyWarnings)(t, [E])
  }, [t, E]), _ = a.useCallback(() => {
    A(), (0, f.trackCtaEvent)({
      channelId: t,
      warningId: E,
      senderId: S,
      warningType: c.SafetyWarningTypes.STRANGER_DANGER,
      cta: f.CtaEventTypes.DISMISS
    })
  }, [A, t, E, S]), T = a.useCallback(e => () => {
    r.default.addRelationship({
      userId: S,
      context: {
        location: h.LOCATION_CONTEXT_WEB
      },
      type: C.RelationshipTypes.BLOCKED
    }), A(), (0, i.showToast)((0, i.createToast)(p.default.Messages.STRANGER_DANGER_BLOCK_CONFIRM, i.ToastType.SUCCESS)), (0, f.trackCtaEvent)({
      channelId: t,
      warningId: E,
      senderId: S,
      warningType: c.SafetyWarningTypes.STRANGER_DANGER,
      cta: e
    })
  }, [A, t, E, S]);
  a.useEffect(() => {
    (0, f.trackViewedEvent)(C.AnalyticEvents.SAFETY_WARNING_VIEWED, {
      channelId: t,
      warningId: E,
      senderId: S,
      warningType: c.SafetyWarningTypes.STRANGER_DANGER
    }), o.default.increment({
      name: l.MetricEvents.SAFETY_WARNING_VIEW
    })
  }, [t, E, S]);
  let M = () => {
      (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("664639").then(n.bind(n, "664639"));
        return n => {
          let {
            transitionState: a,
            onClose: l
          } = n;
          return (0, s.jsx)(e, {
            transitionState: a,
            onClose: l,
            channelId: t,
            warningId: E,
            senderId: S,
            handleBlock: () => {
              I(f.CtaEventTypes.USER_MODAL_BLOCK_CONFIRM, f.CtaEventTypes.USER_MODAL_BLOCK_CANCEL, M)
            }
          })
        }
      })
    },
    I = (e, a, l) => {
      (0, i.openModalLazy)(async () => {
        let {
          default: i
        } = await n.el("968710").then(n.bind(n, "968710"));
        return n => (0, s.jsx)(i, {
          ...n,
          userId: S,
          confirmBlock: T(e),
          onCancel: () => {
            null == l || l(), (0, f.trackCtaEvent)({
              channelId: t,
              warningId: E,
              senderId: S,
              warningType: c.SafetyWarningTypes.STRANGER_DANGER,
              cta: a
            })
          }
        })
      })
    };
  return (0, s.jsxs)("div", {
    className: m.strangerDangerBanner,
    children: [(0, s.jsxs)("div", {
      className: m.shieldAndHeading,
      children: [(0, s.jsx)("img", {
        className: m.safetyShieldIcon,
        src: g,
        alt: ""
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          color: "text-primary",
          children: p.default.Messages.STRANGER_DANGER_BANNER_HEADER
        }), (0, s.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "text-primary",
          children: p.default.Messages.STRANGER_DANGER_BANNER_DESCRIPTION
        })]
      })]
    }), (0, s.jsxs)("div", {
      className: m.buttons,
      children: [(0, s.jsx)(i.Button, {
        size: i.Button.Sizes.SMALL,
        color: i.Button.Colors.BRAND,
        "aria-label": p.default.Messages.STRANGER_DANGER_BANNER_MORE_TIPS,
        onClick: () => {
          M(), (0, f.trackCtaEvent)({
            channelId: t,
            warningId: E,
            senderId: S,
            warningType: c.SafetyWarningTypes.STRANGER_DANGER,
            cta: f.CtaEventTypes.OPEN_MORE_TIPS
          })
        },
        children: p.default.Messages.STRANGER_DANGER_BANNER_MORE_TIPS
      }), (0, s.jsx)(i.Button, {
        size: i.Button.Sizes.SMALL,
        color: i.Button.Colors.RED,
        "aria-label": p.default.Messages.STRANGER_DANGER_BANNER_BLOCK,
        onClick: () => I(f.CtaEventTypes.USER_BANNER_BLOCK_CONFIRM, f.CtaEventTypes.USER_BANNER_BLOCK_CANCEL),
        children: p.default.Messages.STRANGER_DANGER_BANNER_BLOCK
      })]
    }), (0, s.jsx)(i.Clickable, {
      className: m.closeButton,
      onClick: _,
      role: "button",
      "aria-label": p.default.Messages.DISMISS,
      children: (0, s.jsx)(u.default, {
        width: 24,
        height: 24,
        className: m.closeButton
      })
    })]
  })
}
a.r(s), a.d(s, {
  default: function() {
    return m
  }
});
var t = a(735250),
  n = a(470079),
  o = a(286379),
  i = a(399606),
  l = a(481060),
  r = a(92114),
  c = a(797614),
  d = a(9156),
  E = a(132338),
  N = a(621600),
  R = a(359119),
  _ = a(473092),
  T = a(222914),
  A = a(134612),
  u = a(981631),
  x = a(689938),
  M = a(90171);

function m(e) {
  let {
    transitionState: s,
    onClose: a,
    handleBlock: m,
    channelId: S,
    warningId: h,
    senderId: G
  } = e, C = () => {
    a()
  }, j = (0, A.C2)();
  n.useEffect(() => {
    (0, _.MC)(u.rMx.SAFETY_WARNING_MODAL_VIEWED, {
      channelId: S,
      warningId: h,
      senderId: G,
      warningType: R.pj.STRANGER_DANGER
    }), c.Z.increment({
      name: o.V.SAFETY_WARNING_MODAL_VIEW
    })
  }, [S, h, G]);
  let D = (0, i.e7)([d.ZP], () => d.ZP.isChannelMuted(null, S));
  return (0, t.jsx)(l.ModalRoot, {
    transitionState: s,
    children: (0, t.jsxs)(l.Scroller, {
      style: {
        overflow: "hidden auto"
      },
      children: [(0, t.jsxs)(l.ModalHeader, {
        className: M.modalHeader,
        children: [(0, t.jsxs)("div", {
          className: M.modalHeaderText,
          children: [(0, t.jsx)(l.Text, {
            variant: "eyebrow",
            color: "status-positive-text",
            children: x.Z.Messages.STRANGER_DANGER_TIPS_HEADER
          }), (0, t.jsx)(l.Heading, {
            variant: "heading-xl/bold",
            color: "status-positive-text",
            children: x.Z.Messages.STRANGER_DANGER_TIPS_DESCRIPTION
          })]
        }), (0, t.jsx)(l.Button, {
          "aria-label": x.Z.Messages.CLOSE,
          look: l.Button.Looks.BLANK,
          size: l.Button.Sizes.NONE,
          onClick: a,
          innerClassName: M.closeButtonInner,
          className: M.closeButton,
          children: (0, t.jsx)(l.CloseSmallIcon, {
            size: "sm",
            color: "currentColor",
            className: M.closeIcon
          })
        })]
      }), (0, t.jsxs)(l.ModalContent, {
        className: M.modalContent,
        children: [(0, t.jsx)("div", {
          className: M.tipsSection,
          children: j.map((e, s) => (0, t.jsxs)("div", {
            className: M.tipRow,
            children: [(0, t.jsx)(l.Heading, {
              variant: "heading-md/semibold",
              color: "text-brand",
              className: M.tipNumber,
              children: s + 1
            }), (0, t.jsx)(l.Text, {
              variant: "text-sm/medium",
              color: "header-secondary",
              children: e
            })]
          }, s))
        }), (0, t.jsxs)("div", {
          children: [(0, t.jsx)(l.Text, {
            className: M.moreHeading,
            variant: "eyebrow",
            color: "header-secondary",
            children: x.Z.Messages.STRANGER_DANGER_MORE_HEADER
          }), (0, t.jsxs)("div", {
            className: M.tipsSection,
            children: [(0, t.jsxs)("div", {
              className: M.safetyAction,
              children: [(0, t.jsxs)("div", {
                className: M.safetyActionText,
                children: [(0, t.jsx)(l.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: x.Z.Messages.STRANGER_DANGER_MORE_MUTE
                }), (0, t.jsx)(l.Text, {
                  variant: "text-xs/medium",
                  color: "header-secondary",
                  children: x.Z.Messages.STRANGER_DANGER_MORE_MUTE_DESCRIPTION
                })]
              }), (0, t.jsx)(l.Button, {
                size: l.Button.Sizes.SMALL,
                color: l.Button.Colors.PRIMARY,
                "aria-label": x.Z.Messages.STRANGER_DANGER_MORE_MUTE,
                onClick: D ? () => {
                  r.Z.updateChannelOverrideSettings(null, S, {
                    muted: !1
                  }, N.ZB.Unmuted), (0, l.showToast)((0, l.createToast)(x.Z.Messages.STRANGER_DANGER_UNMUTE_CONFIRM, l.ToastType.SUCCESS)), (0, _.qc)({
                    channelId: S,
                    warningId: h,
                    senderId: G,
                    warningType: R.pj.STRANGER_DANGER,
                    cta: _.NM.USER_MODAL_UNMUTE
                  })
                } : () => {
                  r.Z.updateChannelOverrideSettings(null, S, {
                    muted: !0
                  }, N.ZB.Muted), (0, l.showToast)((0, l.createToast)(x.Z.Messages.STRANGER_DANGER_MUTE_CONFIRM, l.ToastType.SUCCESS)), (0, _.qc)({
                    channelId: S,
                    warningId: h,
                    senderId: G,
                    warningType: R.pj.STRANGER_DANGER,
                    cta: _.NM.USER_MODAL_MUTE
                  })
                },
                children: D ? x.Z.Messages.STRANGER_DANGER_MORE_UNMUTE : x.Z.Messages.STRANGER_DANGER_MORE_MUTE
              })]
            }), (0, t.jsx)(E.Z, {}), (0, t.jsxs)("div", {
              className: M.safetyAction,
              children: [(0, t.jsxs)("div", {
                className: M.safetyActionText,
                children: [(0, t.jsx)(l.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: x.Z.Messages.STRANGER_DANGER_MORE_BLOCK
                }), (0, t.jsx)(l.Text, {
                  variant: "text-xs/medium",
                  color: "header-secondary",
                  children: x.Z.Messages.STRANGER_DANGER_MORE_BLOCK_DESCRIPTION
                })]
              }), (0, t.jsx)(l.Button, {
                size: l.Button.Sizes.SMALL,
                color: l.Button.Colors.RED,
                "aria-label": x.Z.Messages.STRANGER_DANGER_BANNER_BLOCK,
                onClick: () => {
                  C(), m()
                },
                children: x.Z.Messages.STRANGER_DANGER_BANNER_BLOCK
              })]
            })]
          })]
        }), (0, t.jsx)(T.Z, {
          channelId: S,
          warningId: h,
          senderId: G
        })]
      })]
    })
  })
}
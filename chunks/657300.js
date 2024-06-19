t.r(s), t.d(s, {
  default: function() {
    return A
  }
});
var o = t(735250),
  a = t(470079),
  i = t(704215),
  n = t(481060),
  l = t(607070),
  r = t(605236),
  c = t(132338),
  d = t(626135),
  m = t(132871),
  _ = t(147890),
  x = t(981631),
  I = t(921944),
  u = t(689938),
  P = t(268859);

function A(e) {
  let {
    guildId: s,
    transitionState: A,
    onClose: N,
    analyticsType: R = i.z.APP_DIRECTORY_UPSELL_MODAL
  } = e;
  return a.useEffect(() => {
    d.default.track(x.rMx.DISMISSIBLE_CONTENT_SHOWN, {
      type: i.z[R],
      guild_id: s
    })
  }, [s, R]), (0, o.jsxs)(n.ModalRoot, {
    transitionState: A,
    className: P.__invalid_modal,
    size: n.ModalSize.SMALL,
    children: [(0, o.jsxs)(n.ModalContent, {
      className: P.modalContent,
      children: [(0, o.jsx)(n.LottieAnimation, {
        autoplay: !0,
        shouldAnimate: !l.Z.useReducedMotion,
        importData: () => t.e("76241").then(t.t.bind(t, 554690, 19)),
        className: P.animation
      }), (0, o.jsx)(n.Heading, {
        variant: "heading-xl/semibold",
        children: u.Z.Messages.APP_DIRECTORY_IPP_HEADER
      }), (0, o.jsx)(n.Text, {
        variant: "text-md/medium",
        className: P.subheader,
        color: "text-muted",
        children: u.Z.Messages.APP_DIRECTORY_IPP_SECONDARY_HEADER
      }), (0, o.jsxs)("ul", {
        className: P.listContainer,
        children: [(0, o.jsxs)("li", {
          className: P.listItem,
          children: [(0, o.jsx)(n.MagicWandIcon, {
            color: "currentColor",
            className: P.wandIcon
          }), (0, o.jsx)(n.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: u.Z.Messages.APP_DIRECTORY_IPP_CUSTOMIZATION
          })]
        }), (0, o.jsx)(c.Z, {
          className: P.divider
        }), (0, o.jsxs)("li", {
          className: P.listItem,
          children: [(0, o.jsx)(n.RobotIcon, {
            color: "currentColor",
            className: P.robotIcon
          }), (0, o.jsx)(n.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: u.Z.Messages.APP_DIRECTORY_IPP_AUTOMATION
          })]
        }), (0, o.jsx)(c.Z, {
          className: P.divider
        }), (0, o.jsxs)("li", {
          className: P.listItem,
          children: [(0, o.jsx)(n.ReactionIcon, {
            color: "currentColor",
            className: P.smileIcon
          }), (0, o.jsx)(n.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: u.Z.Messages.APP_DIRECTORY_IPP_FUN
          })]
        })]
      })]
    }), (0, o.jsxs)(n.ModalFooter, {
      className: P.modalFooter,
      children: [(0, o.jsx)(n.Button, {
        onClick: () => {
          N(), (0, r.EW)(R, {
            forceTrack: !0,
            dismissAction: I.L.PRIMARY,
            guildId: s
          }), (0, _.goToAppDirectory)({
            guildId: s,
            entrypoint: {
              name: m.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_UPSELL_MODAL
            }
          })
        },
        children: u.Z.Messages.GUILD_EVENT_UPSELL_PRIMARY_CTA
      }), (0, o.jsx)(n.Button, {
        look: n.Button.Looks.LINK,
        onClick: () => {
          N(), (0, r.EW)(R, {
            forceTrack: !0,
            dismissAction: I.L.SECONDARY,
            guildId: s
          })
        },
        color: n.Button.Colors.PRIMARY,
        children: u.Z.Messages.NOT_NOW
      })]
    })]
  })
}
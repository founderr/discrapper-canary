n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(729594),
  a = n(243814),
  r = n(481060),
  o = n(367907),
  c = n(906732),
  u = n(240991),
  d = n(69580),
  h = n(484459),
  m = n(171368),
  p = n(768581),
  E = n(63063),
  g = n(591759),
  f = n(556084),
  C = n(981631),
  _ = n(689938),
  I = n(85809),
  x = n(367424);
let T = new Set(["Spacebar", " ", "Enter"]);

function N(e) {
  let {
    channelId: t,
    transitionState: n,
    onClose: N
  } = e, {
    analyticsLocations: Z
  } = (0, c.ZP)(), {
    fetched: S,
    applicationsShelf: v,
    installedIntegrations: A
  } = (0, f.j)({
    channelId: t
  });
  i.useEffect(() => {
    (0, o.yw)(C.rMx.GDM_STARTER_APPS_VIEWED)
  }, []);
  let M = e => {
      var t;
      (0, h.Z)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "", null == e ? void 0 : e.getAvatarURL(void 0, 80), {
        dispatchWait: !0
      })
    },
    R = (e, t) => {
      T.has(e.key) && M(t)
    },
    j = i.useCallback(e => {
      let {
        application: t,
        location: n
      } = e;
      if (null == n) return !1;
      let {
        host: l,
        path: i
      } = s.parse(n, !0);
      return (!!g.Z.isDiscordHostname(l) || window.location.host === l) && i === C.Z5c.OAUTH2_AUTHORIZED && (null != t && N(), !0)
    }, [N]);
  return (0, l.jsxs)(r.ModalRoot, {
    transitionState: n,
    size: r.ModalSize.DYNAMIC,
    className: I.modal,
    children: [(0, l.jsx)(r.ModalContent, {
      className: I.modalContent,
      children: (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("img", {
          src: x,
          alt: "",
          className: I.image
        }), (0, l.jsxs)("div", {
          className: I.headingContainer,
          children: [(0, l.jsx)(r.Heading, {
            variant: "heading-xl/bold",
            className: I.modalHeader,
            children: _.Z.Messages.PRIVATE_CHANNEL_AVAILABLE_APPS
          }), (0, l.jsx)(r.Text, {
            variant: "text-md/medium",
            className: I.modalHeader,
            children: _.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_MORE_APPS_INFO_LINKED.format({
              helpCenterLink: E.Z.getArticleURL(C.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
            })
          })]
        }), (0, l.jsx)("div", {
          className: I.applicationRowContainer,
          children: S ? v.map(e => {
            if (null != A.find(t => t.application.id === e.id)) return null;
            let n = null != e.description ? (0, u.YP)(e.description) : null,
              i = p.ZP.getApplicationIconURL({
                id: e.id,
                icon: e.icon,
                size: 40
              }),
              s = (0, l.jsxs)(l.Fragment, {
                children: [null != i && (0, l.jsx)("img", {
                  className: I.applicationIcon,
                  alt: "",
                  "aria-hidden": !0,
                  src: i,
                  width: 40,
                  height: 40
                }), (0, l.jsxs)("div", {
                  className: I.applicationRowContent,
                  children: [(0, l.jsxs)("div", {
                    className: I.applicationText,
                    children: [(0, l.jsx)(r.Heading, {
                      variant: "heading-md/medium",
                      children: e.name
                    }), null != e.description && (0, l.jsx)(r.Text, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      lineClamp: 1,
                      children: n
                    })]
                  }), (0, l.jsx)(r.Button, {
                    type: "button",
                    innerClassName: I.applicationButtonHack,
                    onClick: n => {
                      n.stopPropagation(), (0, d.openOAuth2Modal)({
                        clientId: e.id,
                        scopes: [a.x.APPLICATIONS_COMMANDS],
                        channelId: t,
                        disableGuildSelect: !0,
                        callback: j
                      })
                    },
                    size: r.Button.Sizes.SMALL,
                    color: r.Button.Colors.PRIMARY,
                    children: _.Z.Messages.ADD
                  })]
                })]
              }),
              {
                bot: o
              } = e;
            return null != o ? (0, l.jsx)(r.ClickableContainer, {
              onMouseDown: () => M(o),
              onKeyDown: e => R(e, o),
              className: I.applicationRow,
              onClick: () => {
                (0, m.openUserProfileModal)({
                  channelId: t,
                  userId: o.id,
                  sourceAnalyticsLocations: Z,
                  analyticsLocation: {
                    section: C.jXE.ADD_PRIVATE_CHANNEL_INTEGRATION_MODAL
                  }
                })
              },
              "aria-label": _.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADD_MODAL_ROW_INFO.format({
                appName: e.name
              }),
              children: s
            }, e.id) : (0, l.jsx)("div", {
              className: I.applicationRow,
              children: s
            }, e.id)
          }) : (0, l.jsx)(r.Spinner, {
            className: I.spinner,
            type: r.Spinner.Type.SPINNING_CIRCLE
          })
        })]
      })
    }), (0, l.jsxs)(r.ModalFooter, {
      className: I.modalFooter,
      children: [(0, l.jsx)(r.Button, {
        onClick: N,
        children: _.Z.Messages.DONE
      }), (0, l.jsx)(r.Button, {
        look: r.Button.Looks.LINK,
        onClick: N,
        color: r.Button.Colors.PRIMARY,
        children: _.Z.Messages.CANCEL
      })]
    })]
  })
}
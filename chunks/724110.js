"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("746379"),
  i = n.n(s),
  r = n("77078"),
  o = n("716241"),
  u = n("368639"),
  d = n("33942"),
  c = n("506885"),
  f = n("401642"),
  h = n("315102"),
  m = n("701909"),
  p = n("253981"),
  E = n("252063"),
  g = n("49111"),
  S = n("782340"),
  C = n("473240"),
  _ = n("271861");
let I = new Set(["Spacebar", " ", "Enter"]);

function T(e) {
  let {
    channelId: t,
    transitionState: n,
    onClose: s
  } = e, {
    fetched: T,
    applicationsShelf: v,
    installedIntegrations: x
  } = (0, E.usePrivateChannelIntegrationState)({
    channelId: t
  });
  a.useEffect(() => {
    (0, o.trackWithMetadata)(g.AnalyticEvents.GDM_STARTER_APPS_VIEWED)
  }, []);
  let N = e => {
      var t;
      (0, c.default)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "", null == e ? void 0 : e.getAvatarURL(void 0, 80), {
        dispatchWait: !0
      })
    },
    A = (e, t) => {
      I.has(e.key) && N(t)
    },
    M = a.useCallback(e => {
      let {
        application: t,
        location: n
      } = e;
      if (null == n) return !1;
      let {
        host: l,
        path: a
      } = i.parse(n, !0), r = p.default.isDiscordHostname(l) || window.location.host === l;
      return !!r && a === g.Routes.OAUTH2_AUTHORIZED && (null != t && s(), !0)
    }, [s]);
  return (0, l.jsxs)(r.ModalRoot, {
    transitionState: n,
    size: r.ModalSize.DYNAMIC,
    className: C.modal,
    children: [(0, l.jsx)(r.ModalContent, {
      className: C.modalContent,
      children: (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("img", {
          src: _,
          alt: "",
          className: C.image
        }), (0, l.jsxs)("div", {
          className: C.headingContainer,
          children: [(0, l.jsx)(r.Heading, {
            variant: "heading-xl/bold",
            className: C.modalHeader,
            children: S.default.Messages.PRIVATE_CHANNEL_AVAILABLE_APPS
          }), (0, l.jsx)(r.Text, {
            variant: "text-md/medium",
            className: C.modalHeader,
            children: S.default.Messages.PRIVATE_CHANNEL_INTEGRATION_MORE_APPS_INFO_LINKED.format({
              helpCenterLink: m.default.getArticleURL(g.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
            })
          })]
        }), (0, l.jsx)("div", {
          className: C.applicationRowContainer,
          children: T ? v.map(e => {
            if (null != x.find(t => t.application.id === e.id)) return null;
            let n = null != e.description ? (0, u.parseBioReact)(e.description) : null,
              a = h.default.getApplicationIconURL({
                id: e.id,
                icon: e.icon,
                size: 40
              }),
              s = (0, l.jsxs)(l.Fragment, {
                children: [null != a && (0, l.jsx)("img", {
                  className: C.applicationIcon,
                  alt: "",
                  "aria-hidden": !0,
                  src: a,
                  width: 40,
                  height: 40
                }), (0, l.jsxs)("div", {
                  className: C.applicationRowContent,
                  children: [(0, l.jsxs)("div", {
                    className: C.applicationText,
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
                    innerClassName: C.applicationButtonHack,
                    onClick: n => {
                      n.stopPropagation(), (0, d.openOAuth2Modal)({
                        clientId: e.id,
                        scopes: [g.OAuth2Scopes.APPLICATIONS_COMMANDS],
                        channelId: t,
                        disableGuildSelect: !0,
                        callback: M
                      })
                    },
                    size: r.Button.Sizes.SMALL,
                    color: r.Button.Colors.PRIMARY,
                    children: S.default.Messages.ADD
                  })]
                })]
              }),
              {
                bot: i
              } = e;
            return null != i ? (0, l.jsx)(r.ClickableContainer, {
              onMouseDown: () => N(i),
              onKeyDown: e => A(e, i),
              className: C.applicationRow,
              onClick: () => {
                (0, f.openUserProfileModal)({
                  userId: i.id,
                  channelId: t,
                  analyticsLocation: {
                    section: g.AnalyticsSections.ADD_PRIVATE_CHANNEL_INTEGRATION_MODAL
                  }
                })
              },
              "aria-label": S.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADD_MODAL_ROW_INFO.format({
                appName: e.name
              }),
              children: s
            }, e.id) : (0, l.jsx)("div", {
              className: C.applicationRow,
              children: s
            }, e.id)
          }) : (0, l.jsx)(r.Spinner, {
            className: C.spinner,
            type: r.Spinner.Type.SPINNING_CIRCLE
          })
        })]
      })
    }), (0, l.jsxs)(r.ModalFooter, {
      className: C.modalFooter,
      children: [(0, l.jsx)(r.Button, {
        onClick: s,
        children: S.default.Messages.DONE
      }), (0, l.jsx)(r.Button, {
        look: r.Button.Looks.LINK,
        onClick: s,
        color: r.Button.Colors.PRIMARY,
        children: S.default.Messages.CANCEL
      })]
    })]
  })
}
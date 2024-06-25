n.r(a), n.d(a, {
  default: function() {
    return M
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(729594),
  t = n(243814),
  o = n(481060),
  c = n(367907),
  r = n(906732),
  d = n(240991),
  p = n(69580),
  N = n(484459),
  u = n(171368),
  m = n(768581),
  A = n(63063),
  h = n(591759),
  I = n(556084),
  x = n(981631),
  C = n(689938),
  _ = n(85809),
  E = n(367424);
let R = new Set(["Spacebar", " ", "Enter"]);

function M(e) {
  let {
    channelId: a,
    transitionState: n,
    onClose: M
  } = e, {
    analyticsLocations: j
  } = (0, r.ZP)(), {
    fetched: L,
    applicationsShelf: g,
    installedIntegrations: T
  } = (0, I.j)({
    channelId: a
  });
  s.useEffect(() => {
    (0, c.yw)(x.rMx.GDM_STARTER_APPS_VIEWED)
  }, []);
  let P = e => {
      var a;
      (0, N.Z)(null !== (a = null == e ? void 0 : e.id) && void 0 !== a ? a : "", null == e ? void 0 : e.getAvatarURL(void 0, 80), {
        dispatchWait: !0
      })
    },
    D = (e, a) => {
      R.has(e.key) && P(a)
    },
    v = s.useCallback(e => {
      let {
        application: a,
        location: n
      } = e;
      if (null == n) return !1;
      let {
        host: i,
        path: s
      } = l.parse(n, !0);
      return (!!h.Z.isDiscordHostname(i) || window.location.host === i) && s === x.Z5c.OAUTH2_AUTHORIZED && (null != a && M(), !0)
    }, [M]);
  return (0, i.jsxs)(o.ModalRoot, {
    transitionState: n,
    size: o.ModalSize.DYNAMIC,
    className: _.modal,
    children: [(0, i.jsx)(o.ModalContent, {
      className: _.modalContent,
      children: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("img", {
          src: E,
          alt: "",
          className: _.image
        }), (0, i.jsxs)("div", {
          className: _.headingContainer,
          children: [(0, i.jsx)(o.Heading, {
            variant: "heading-xl/bold",
            className: _.modalHeader,
            children: C.Z.Messages.PRIVATE_CHANNEL_AVAILABLE_APPS
          }), (0, i.jsx)(o.Text, {
            variant: "text-md/medium",
            className: _.modalHeader,
            children: C.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_MORE_APPS_INFO_LINKED.format({
              helpCenterLink: A.Z.getArticleURL(x.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
            })
          })]
        }), (0, i.jsx)("div", {
          className: _.applicationRowContainer,
          children: L ? g.map(e => {
            if (null != T.find(a => a.application.id === e.id)) return null;
            let n = null != e.description ? (0, d.YP)(e.description) : null,
              s = m.ZP.getApplicationIconURL({
                id: e.id,
                icon: e.icon,
                size: 40
              }),
              l = (0, i.jsxs)(i.Fragment, {
                children: [null != s && (0, i.jsx)("img", {
                  className: _.applicationIcon,
                  alt: "",
                  "aria-hidden": !0,
                  src: s,
                  width: 40,
                  height: 40
                }), (0, i.jsxs)("div", {
                  className: _.applicationRowContent,
                  children: [(0, i.jsxs)("div", {
                    className: _.applicationText,
                    children: [(0, i.jsx)(o.Heading, {
                      variant: "heading-md/medium",
                      children: e.name
                    }), null != e.description && (0, i.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      lineClamp: 1,
                      children: n
                    })]
                  }), (0, i.jsx)(o.Button, {
                    type: "button",
                    innerClassName: _.applicationButtonHack,
                    onClick: n => {
                      n.stopPropagation(), (0, p.openOAuth2Modal)({
                        clientId: e.id,
                        scopes: [t.x.APPLICATIONS_COMMANDS],
                        channelId: a,
                        disableGuildSelect: !0,
                        callback: v
                      })
                    },
                    size: o.Button.Sizes.SMALL,
                    color: o.Button.Colors.PRIMARY,
                    children: C.Z.Messages.ADD
                  })]
                })]
              }),
              {
                bot: c
              } = e;
            return null != c ? (0, i.jsx)(o.ClickableContainer, {
              onMouseDown: () => P(c),
              onKeyDown: e => D(e, c),
              className: _.applicationRow,
              onClick: () => {
                (0, u.openUserProfileModal)({
                  channelId: a,
                  userId: c.id,
                  sourceAnalyticsLocations: j,
                  analyticsLocation: {
                    section: x.jXE.ADD_PRIVATE_CHANNEL_INTEGRATION_MODAL
                  }
                })
              },
              "aria-label": C.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADD_MODAL_ROW_INFO.format({
                appName: e.name
              }),
              children: l
            }, e.id) : (0, i.jsx)("div", {
              className: _.applicationRow,
              children: l
            }, e.id)
          }) : (0, i.jsx)(o.Spinner, {
            className: _.spinner,
            type: o.Spinner.Type.SPINNING_CIRCLE
          })
        })]
      })
    }), (0, i.jsxs)(o.ModalFooter, {
      className: _.modalFooter,
      children: [(0, i.jsx)(o.Button, {
        onClick: M,
        children: C.Z.Messages.DONE
      }), (0, i.jsx)(o.Button, {
        look: o.Button.Looks.LINK,
        onClick: M,
        color: o.Button.Colors.PRIMARY,
        children: C.Z.Messages.CANCEL
      })]
    })]
  })
}
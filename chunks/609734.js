"use strict";
l.r(t), l.d(t, {
  default: function() {
    return I
  }
});
var n = l("37983");
l("884691");
var a = l("414456"),
  s = l.n(a),
  i = l("77078"),
  r = l("272030"),
  o = l("85027"),
  u = l("33942"),
  d = l("252063"),
  c = l("42203"),
  f = l("18494"),
  m = l("191814"),
  p = l("758710"),
  h = l("351825"),
  E = l("306160"),
  T = l("253981"),
  S = l("613676"),
  _ = l("49111"),
  g = l("782340"),
  A = l("834680");

function I(e) {
  var t;
  let {
    application: l,
    className: a
  } = e, I = c.default.getChannel(f.default.getChannelId()), {
    appsInGDMEnabled: v,
    availableApplications: N
  } = (0, d.usePrivateChannelIntegrationState)({
    channelId: null !== (t = null == I ? void 0 : I.id) && void 0 !== t ? t : ""
  });
  if (null == l || !(0, S.canInstallApplication)(l.id, l.customInstallUrl, l.installParams)) return null;
  let C = v && null != N.find(e => e.id === (null == l ? void 0 : l.id));
  return (0, n.jsx)(i.Button, {
    color: i.Button.Colors.PRIMARY,
    look: i.Button.Looks.FILLED,
    size: i.Button.Sizes.SMALL,
    onContextMenu: E.SUPPORTS_COPY ? e => {
      var t, a;
      let s = (0, o.getApplicationInstallURL)({
        id: l.id,
        custom_install_url: null !== (t = l.customInstallUrl) && void 0 !== t ? t : void 0,
        install_params: null !== (a = l.installParams) && void 0 !== a ? a : void 0
      });
      (0, r.openContextMenu)(e, e => (0, n.jsx)(i.Menu, {
        navId: "component-button",
        onClose: r.closeContextMenu,
        "aria-label": g.default.Messages.APPLICATION_ADD_TO_SERVER_ACTIONS,
        onSelect: void 0,
        ...e,
        children: (0, n.jsx)(i.MenuGroup, {
          children: (0, n.jsx)(i.MenuItem, {
            id: "copy",
            label: g.default.Messages.APPLICATION_ADD_TO_SERVER_ACTIONS_COPY,
            action: () => (0, E.copy)(s)
          })
        })
      }))
    } : void 0,
    onClick: () => {
      C ? (0, u.openOAuth2Modal)({
        clientId: l.id,
        scopes: [_.OAuth2Scopes.APPLICATIONS_COMMANDS],
        channelId: I.id,
        disableGuildSelect: !0
      }) : (0, S.installApplication)({
        applicationId: l.id,
        customInstallUrl: l.customInstallUrl,
        installParams: l.installParams
      })
    },
    className: s(A.applicationInstallButton, a),
    children: (0, n.jsxs)("div", {
      className: A.applicationInstallButtonContent,
      children: [(0, n.jsx)(h.default, {
        width: 16,
        height: 16
      }), (0, n.jsx)(m.default, {
        size: 4,
        horizontal: !0
      }), (0, n.jsx)("span", {
        className: A.applicationInstallButtonText,
        children: C ? g.default.Messages.ADD : g.default.Messages.APPLICATION_ADD_BUTTON
      }), null == l.customInstallUrl || T.default.isDiscordUrl(l.customInstallUrl) ? null : (0, n.jsx)(p.default, {
        className: A.launchIcon,
        width: 16,
        height: 16
      })]
    })
  })
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var i = n("735250");
n("470079");
var r = n("243814"),
  s = n("481060"),
  a = n("239091"),
  o = n("311819"),
  l = n("69580"),
  u = n("556084"),
  d = n("592125"),
  _ = n("944486"),
  c = n("441957"),
  E = n("151785"),
  I = n("572004"),
  T = n("591759"),
  f = n("135431"),
  S = n("981631"),
  h = n("689938"),
  A = n("731208");

function m(e) {
  var t;
  let {
    application: n,
    className: m
  } = e, N = d.default.getChannel(_.default.getChannelId()), {
    appsInGDMEnabled: p,
    availableApplications: O
  } = (0, u.usePrivateChannelIntegrationState)({
    channelId: null !== (t = null == N ? void 0 : N.id) && void 0 !== t ? t : S.EMPTY_STRING_SNOWFLAKE_ID
  });
  if (!(0, f.canInstallApplication)({
      customInstallUrl: n.customInstallUrl,
      installParams: n.installParams,
      integrationTypesConfig: n.integrationTypesConfig
    })) return null;
  let C = p && null != O.find(e => e.id === (null == n ? void 0 : n.id)),
    R = null != n.customInstallUrl && !T.default.isDiscordUrl(n.customInstallUrl);
  return (0, i.jsx)(s.Button, {
    color: s.Button.Colors.PRIMARY,
    look: s.Button.Looks.FILLED,
    size: s.Button.Sizes.SMALL,
    onContextMenu: I.SUPPORTS_COPY ? e => {
      (0, a.openContextMenu)(e, e => (0, i.jsx)(s.Menu, {
        navId: "component-button",
        onClose: a.closeContextMenu,
        "aria-label": h.default.Messages.APPLICATION_ADD_BUTTON_ACTIONS,
        onSelect: void 0,
        ...e,
        children: (0, i.jsx)(s.MenuGroup, {
          children: (0, i.jsx)(s.MenuItem, {
            id: "copy",
            label: h.default.Messages.APPLICATION_ADD_BUTTON_ACTIONS_COPY,
            action: () => (0, I.copy)((0, o.getApplicationInstallURL)(n))
          })
        })
      }))
    } : void 0,
    onClick: () => {
      C ? (0, l.openOAuth2Modal)({
        clientId: n.id,
        scopes: [r.OAuth2Scopes.APPLICATIONS_COMMANDS],
        channelId: N.id,
        disableGuildSelect: !0
      }) : (0, f.installApplication)({
        applicationId: n.id,
        customInstallUrl: n.customInstallUrl,
        installParams: n.installParams,
        integrationTypesConfig: n.integrationTypesConfig
      })
    },
    className: m,
    children: (0, i.jsxs)("div", {
      className: A.applicationInstallButtonContent,
      children: [!R && (0, i.jsx)(E.default, {
        width: 16,
        height: 16
      }), (0, i.jsx)(s.Spacer, {
        size: 4,
        horizontal: !0
      }), (0, i.jsx)("span", {
        className: A.applicationInstallButtonText,
        children: C ? h.default.Messages.ADD : h.default.Messages.APPLICATION_ADD_BUTTON
      }), R && (0, i.jsx)(c.default, {
        className: A.launchIcon,
        width: 16,
        height: 16
      })]
    })
  })
}
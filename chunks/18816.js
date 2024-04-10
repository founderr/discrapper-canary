"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
});
var a = s("735250");
s("470079");
var l = s("481060"),
  i = s("239091"),
  n = s("311819"),
  o = s("69580"),
  r = s("556084"),
  u = s("944486"),
  d = s("441957"),
  c = s("151785"),
  f = s("572004"),
  S = s("591759"),
  E = s("135431"),
  m = s("993409"),
  I = s("981631"),
  T = s("689938");

function p(e) {
  var t;
  let {
    application: s
  } = e, p = null !== (t = u.default.getChannelId()) && void 0 !== t ? t : I.EMPTY_STRING_SNOWFLAKE_ID, {
    appsInGDMEnabled: N,
    availableApplications: x
  } = (0, r.usePrivateChannelIntegrationState)({
    channelId: p
  }), A = N && null != x.find(e => e.id === (null == s ? void 0 : s.id)), v = null != s.customInstallUrl || !S.default.isDiscordUrl(s.customInstallUrl);
  return (0, a.jsx)(m.default, {
    icon: c.default,
    text: (() => {
      let e = A ? T.default.Messages.ADD : T.default.Messages.APPLICATION_ADD_BUTTON;
      return v ? (0, a.jsxs)(a.Fragment, {
        children: [e, (0, a.jsx)(d.default, {
          width: 16,
          height: 16
        })]
      }) : e
    })(),
    onContextMenu: f.SUPPORTS_COPY ? e => {
      (0, i.openContextMenu)(e, e => (0, a.jsx)(l.Menu, {
        navId: "component-button",
        onClose: i.closeContextMenu,
        "aria-label": T.default.Messages.APPLICATION_ADD_BUTTON_ACTIONS,
        onSelect: void 0,
        ...e,
        children: (0, a.jsx)(l.MenuGroup, {
          children: (0, a.jsx)(l.MenuItem, {
            id: "copy",
            label: T.default.Messages.APPLICATION_ADD_BUTTON_ACTIONS_COPY,
            action: () => (0, f.copy)((0, n.getApplicationInstallURL)(s))
          })
        })
      }))
    } : void 0,
    onClick: () => {
      if (A) {
        (0, o.openOAuth2Modal)({
          channelId: p,
          clientId: s.id,
          scopes: [I.OAuth2Scopes.APPLICATIONS_COMMANDS],
          disableGuildSelect: !0
        });
        return
      }(0, E.installApplication)({
        applicationId: s.id,
        customInstallUrl: s.customInstallUrl,
        installParams: s.installParams,
        integrationTypesConfig: s.integrationTypesConfig
      })
    }
  })
}
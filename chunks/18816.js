"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var l = s("735250");
s("470079");
var a = s("481060"),
  i = s("239091"),
  o = s("311819"),
  n = s("69580"),
  r = s("556084"),
  u = s("944486"),
  d = s("441957"),
  c = s("151785"),
  f = s("572004"),
  S = s("591759"),
  E = s("135431"),
  I = s("993409"),
  m = s("981631"),
  T = s("689938");

function _(e) {
  var t;
  let {
    application: s
  } = e, _ = null !== (t = u.default.getChannelId()) && void 0 !== t ? t : m.EMPTY_STRING_SNOWFLAKE_ID, {
    appsInGDMEnabled: A,
    availableApplications: p
  } = (0, r.usePrivateChannelIntegrationState)({
    channelId: _
  }), v = A && null != p.find(e => e.id === (null == s ? void 0 : s.id)), N = null != s.customInstallUrl || !S.default.isDiscordUrl(s.customInstallUrl);
  return (0, l.jsx)(I.default, {
    icon: c.default,
    text: (() => {
      let e = v ? T.default.Messages.ADD : T.default.Messages.APPLICATION_ADD_BUTTON;
      return N ? (0, l.jsxs)(l.Fragment, {
        children: [e, (0, l.jsx)(d.default, {
          width: 16,
          height: 16
        })]
      }) : e
    })(),
    onContextMenu: f.SUPPORTS_COPY ? e => {
      (0, i.openContextMenu)(e, e => (0, l.jsx)(a.Menu, {
        navId: "component-button",
        onClose: i.closeContextMenu,
        "aria-label": T.default.Messages.APPLICATION_ADD_BUTTON_ACTIONS,
        onSelect: void 0,
        ...e,
        children: (0, l.jsx)(a.MenuGroup, {
          children: (0, l.jsx)(a.MenuItem, {
            id: "copy",
            label: T.default.Messages.APPLICATION_ADD_BUTTON_ACTIONS_COPY,
            action: () => (0, f.copy)((0, o.getApplicationInstallURL)(s))
          })
        })
      }))
    } : void 0,
    onClick: () => {
      if (v) {
        (0, n.openOAuth2Modal)({
          channelId: _,
          clientId: s.id,
          scopes: [m.OAuth2Scopes.APPLICATIONS_COMMANDS],
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
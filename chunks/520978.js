"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var i = n("735250");
n("470079");
var r = n("120356"),
  a = n.n(r),
  s = n("243814"),
  o = n("481060"),
  l = n("239091"),
  u = n("311819"),
  d = n("69580"),
  _ = n("556084"),
  c = n("592125"),
  E = n("944486"),
  I = n("682864"),
  T = n("441957"),
  f = n("151785"),
  S = n("572004"),
  h = n("591759"),
  A = n("135431"),
  m = n("981631"),
  N = n("689938"),
  p = n("731208");

function O(e) {
  var t;
  let {
    application: n,
    className: r
  } = e, O = c.default.getChannel(E.default.getChannelId()), {
    appsInGDMEnabled: C,
    availableApplications: R
  } = (0, _.usePrivateChannelIntegrationState)({
    channelId: null !== (t = null == O ? void 0 : O.id) && void 0 !== t ? t : m.EMPTY_STRING_SNOWFLAKE_ID
  });
  if (null == n || !(0, A.canInstallApplication)({
      customInstallUrl: n.customInstallUrl,
      installParams: n.installParams,
      integrationTypesConfig: n.integrationTypesConfig
    })) return null;
  let g = C && null != R.find(e => e.id === (null == n ? void 0 : n.id));
  return (0, i.jsx)(o.Button, {
    color: o.Button.Colors.PRIMARY,
    look: o.Button.Looks.FILLED,
    size: o.Button.Sizes.SMALL,
    onContextMenu: S.SUPPORTS_COPY ? e => {
      (0, l.openContextMenu)(e, e => (0, i.jsx)(o.Menu, {
        navId: "component-button",
        onClose: l.closeContextMenu,
        "aria-label": N.default.Messages.APPLICATION_ADD_BUTTON_ACTIONS,
        onSelect: void 0,
        ...e,
        children: (0, i.jsx)(o.MenuGroup, {
          children: (0, i.jsx)(o.MenuItem, {
            id: "copy",
            label: N.default.Messages.APPLICATION_ADD_BUTTON_ACTIONS_COPY,
            action: () => (0, S.copy)((0, u.getApplicationInstallURL)(n))
          })
        })
      }))
    } : void 0,
    onClick: () => {
      g ? (0, d.openOAuth2Modal)({
        clientId: n.id,
        scopes: [s.OAuth2Scopes.APPLICATIONS_COMMANDS],
        channelId: O.id,
        disableGuildSelect: !0
      }) : (0, A.installApplication)({
        applicationId: n.id,
        customInstallUrl: n.customInstallUrl,
        installParams: n.installParams,
        integrationTypesConfig: n.integrationTypesConfig
      })
    },
    className: a()(p.__invalid_applicationInstallButton, r),
    children: (0, i.jsxs)("div", {
      className: p.applicationInstallButtonContent,
      children: [(0, i.jsx)(f.default, {
        width: 16,
        height: 16
      }), (0, i.jsx)(I.default, {
        size: 4,
        horizontal: !0
      }), (0, i.jsx)("span", {
        className: p.applicationInstallButtonText,
        children: g ? N.default.Messages.ADD : N.default.Messages.APPLICATION_ADD_BUTTON
      }), null == n.customInstallUrl || h.default.isDiscordUrl(n.customInstallUrl) ? null : (0, i.jsx)(T.default, {
        className: p.launchIcon,
        width: 16,
        height: 16
      })]
    })
  })
}
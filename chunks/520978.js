"use strict";
n.d(t, {
  Z: function() {
    return f
  }
});
var i = n(735250);
n(470079);
var r = n(243814),
  s = n(481060),
  o = n(239091),
  a = n(311819),
  l = n(69580),
  u = n(556084),
  _ = n(592125),
  c = n(944486),
  d = n(572004),
  E = n(591759),
  I = n(135431),
  T = n(981631),
  h = n(689938),
  S = n(731208);

function f(e) {
  var t;
  let {
    application: n,
    className: f
  } = e, N = _.Z.getChannel(c.Z.getChannelId()), {
    appsInGDMEnabled: A,
    availableApplications: m
  } = (0, u.j)({
    channelId: null !== (t = null == N ? void 0 : N.id) && void 0 !== t ? t : T.lds
  });
  if (!(0, I.E)({
      customInstallUrl: n.customInstallUrl,
      installParams: n.installParams,
      integrationTypesConfig: n.integrationTypesConfig
    })) return null;
  let O = A && null != m.find(e => e.id === (null == n ? void 0 : n.id)),
    R = null != n.customInstallUrl && !E.Z.isDiscordUrl(n.customInstallUrl);
  return (0, i.jsx)(s.Button, {
    color: s.Button.Colors.PRIMARY,
    look: s.Button.Looks.FILLED,
    size: s.Button.Sizes.SMALL,
    onContextMenu: d.wS ? e => {
      (0, o.vq)(e, e => (0, i.jsx)(s.Menu, {
        navId: "component-button",
        onClose: o.Zy,
        "aria-label": h.Z.Messages.APPLICATION_ADD_BUTTON_ACTIONS,
        onSelect: void 0,
        ...e,
        children: (0, i.jsx)(s.MenuGroup, {
          children: (0, i.jsx)(s.MenuItem, {
            id: "copy",
            label: h.Z.Messages.APPLICATION_ADD_BUTTON_ACTIONS_COPY,
            action: () => (0, d.JG)((0, a.J)(n))
          })
        })
      }))
    } : void 0,
    onClick: () => {
      O ? (0, l.openOAuth2Modal)({
        clientId: n.id,
        scopes: [r.x.APPLICATIONS_COMMANDS],
        channelId: N.id,
        disableGuildSelect: !0
      }) : (0, I.L)({
        applicationId: n.id,
        customInstallUrl: n.customInstallUrl,
        installParams: n.installParams,
        integrationTypesConfig: n.integrationTypesConfig
      })
    },
    className: f,
    children: (0, i.jsxs)("div", {
      className: S.applicationInstallButtonContent,
      children: [!R && (0, i.jsx)(s.CirclePlusIcon, {
        size: "xs",
        color: "currentColor"
      }), (0, i.jsx)(s.Spacer, {
        size: 4,
        horizontal: !0
      }), (0, i.jsx)("span", {
        className: S.applicationInstallButtonText,
        children: O ? h.Z.Messages.ADD : h.Z.Messages.APPLICATION_ADD_BUTTON
      }), R && (0, i.jsx)(s.WindowLaunchIcon, {
        size: "xs",
        color: "currentColor",
        className: S.launchIcon
      })]
    })
  })
}
"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(239091),
  o = n(311819),
  a = n(572004),
  l = n(591759),
  u = n(135431),
  _ = n(689938),
  c = n(336592);

function d(e) {
  let {
    application: t,
    className: n
  } = e;
  if (!(0, u.E)({
      customInstallUrl: t.customInstallUrl,
      installParams: t.installParams,
      integrationTypesConfig: t.integrationTypesConfig
    })) return null;
  let d = null != t.customInstallUrl && !l.Z.isDiscordUrl(t.customInstallUrl);
  return (0, i.jsx)(r.Button, {
    color: r.Button.Colors.PRIMARY,
    look: r.Button.Looks.FILLED,
    size: r.Button.Sizes.SMALL,
    onContextMenu: a.wS ? e => {
      (0, s.vq)(e, e => (0, i.jsx)(r.Menu, {
        navId: "component-button",
        onClose: s.Zy,
        "aria-label": _.Z.Messages.APPLICATION_ADD_BUTTON_ACTIONS,
        onSelect: void 0,
        ...e,
        children: (0, i.jsx)(r.MenuGroup, {
          children: (0, i.jsx)(r.MenuItem, {
            id: "copy",
            label: _.Z.Messages.APPLICATION_ADD_BUTTON_ACTIONS_COPY,
            action: () => (0, a.JG)((0, o.J)(t))
          })
        })
      }))
    } : void 0,
    onClick: () => {
      (0, u.L)({
        applicationId: t.id,
        customInstallUrl: t.customInstallUrl,
        installParams: t.installParams,
        integrationTypesConfig: t.integrationTypesConfig
      })
    },
    className: n,
    children: (0, i.jsxs)("div", {
      className: c.applicationInstallButtonContent,
      children: [!d && (0, i.jsx)(r.CirclePlusIcon, {
        size: "xs",
        color: "currentColor"
      }), (0, i.jsx)(r.Spacer, {
        size: 4,
        horizontal: !0
      }), (0, i.jsx)("span", {
        className: c.applicationInstallButtonText,
        children: _.Z.Messages.APPLICATION_ADD_BUTTON
      }), d && (0, i.jsx)(r.WindowLaunchIcon, {
        size: "xs",
        color: "currentColor",
        className: c.launchIcon
      })]
    })
  })
}
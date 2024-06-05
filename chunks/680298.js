"use strict";
l.r(t), l.d(t, {
  default: function() {
    return m
  }
});
var n = l("735250"),
  a = l("470079"),
  s = l("481060"),
  i = l("239091"),
  r = l("911969"),
  o = l("377617"),
  d = l("27237"),
  u = l("507893"),
  c = l("399860"),
  f = l("689938"),
  I = l("514719");

function m(e) {
  let {
    applicationIcon: t,
    applicationName: m,
    canNavigate: T,
    command: E,
    guildId: N
  } = e, _ = a.useMemo(() => {
    var e;
    return 0 !== Object.keys(null !== (e = E.permissions) && void 0 !== e ? e : {}).length
  }, [E.permissions]), S = a.useCallback(() => {
    null != E && T() && (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([l.e("99387"), l.e("78786")]).then(l.bind(l, "50474"));
      return l => (0, n.jsx)(e, {
        applicationIcon: t,
        applicationId: E.applicationId,
        applicationName: m,
        command: E,
        guildId: N,
        ...l
      })
    })
  }, [t, m, T, E, N]), h = a.useCallback(e => {
    (0, i.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await l.e("5396").then(l.bind(l, "731646"));
      return t => (0, n.jsx)(e, {
        ...t,
        id: E.id,
        label: f.default.Messages.COPY_ID_COMMAND
      })
    })
  }, [E]), g = E.type === r.ApplicationCommandType.CHAT ? o.default : d.default, p = (0, c.commandName)(E.type, E.displayName);
  return (0, n.jsxs)(s.Clickable, {
    onClick: S,
    className: I.item,
    onContextMenu: h,
    children: [(0, n.jsxs)("div", {
      className: I.identifier,
      children: [(0, n.jsx)(g, {
        className: I.icon,
        width: 24,
        height: 24
      }), (0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        children: p
      })]
    }), (0, n.jsx)("div", {
      className: I.statusContainer,
      children: _ ? (0, n.jsxs)("div", {
        className: I.statusLine,
        children: [(0, n.jsx)(s.Text, {
          variant: "text-md/normal",
          children: f.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_STATUS_HAS_OVERRIDES
        }), (0, n.jsx)(u.default, {
          height: 18,
          width: 18,
          className: I.statusIcon
        })]
      }) : null
    })]
  })
}
t.d(n, {
  Z: function() {
    return u
  }
});
var i = t(735250),
  s = t(470079),
  l = t(481060),
  a = t(239091),
  r = t(911969),
  o = t(399860),
  c = t(689938),
  d = t(1924);

function u(e) {
  let {
    applicationIcon: n,
    applicationName: u,
    canNavigate: I,
    command: N,
    guildId: E
  } = e, T = s.useMemo(() => {
    var e;
    return 0 !== Object.keys(null !== (e = N.permissions) && void 0 !== e ? e : {}).length
  }, [N.permissions]), m = s.useCallback(() => {
    null != N && I() && (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("78786")]).then(t.bind(t, 50474));
      return t => (0, i.jsx)(e, {
        applicationIcon: n,
        applicationId: N.applicationId,
        applicationName: u,
        command: N,
        guildId: E,
        ...t
      })
    })
  }, [n, u, I, N, E]), _ = s.useCallback(e => {
    (0, a.jW)(e, async () => {
      let {
        default: e
      } = await t.e("5396").then(t.bind(t, 731646));
      return n => (0, i.jsx)(e, {
        ...n,
        id: N.id,
        label: c.Z.Messages.COPY_ID_COMMAND
      })
    })
  }, [N]), h = N.type === r.yU.CHAT ? l.SlashBoxIcon : l.PaperIcon, O = (0, o.gw)(N.type, N.displayName);
  return (0, i.jsxs)(l.Clickable, {
    onClick: m,
    className: d.item,
    onContextMenu: _,
    children: [(0, i.jsxs)("div", {
      className: d.identifier,
      children: [(0, i.jsx)(h, {
        className: d.icon,
        size: "md",
        color: "currentColor"
      }), (0, i.jsx)(l.Text, {
        variant: "text-md/normal",
        children: O
      })]
    }), (0, i.jsx)("div", {
      className: d.statusContainer,
      children: T ? (0, i.jsxs)("div", {
        className: d.statusLine,
        children: [(0, i.jsx)(l.Text, {
          variant: "text-md/normal",
          children: c.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_STATUS_HAS_OVERRIDES
        }), (0, i.jsx)(l.CircleInformationIcon, {
          size: "sm",
          color: "currentColor",
          className: d.statusIcon
        })]
      }) : null
    })]
  })
}
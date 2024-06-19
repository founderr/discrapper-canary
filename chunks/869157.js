t.d(n, {
  Z: function() {
    return j
  }
}), t(724458), t(47120);
var i = t(735250),
  s = t(470079),
  l = t(512722),
  a = t.n(l),
  r = t(392711),
  o = t.n(r),
  c = t(442837),
  d = t(481060),
  u = t(749210),
  I = t(367907),
  N = t(895924),
  E = t(581364),
  T = t(929507),
  m = t(997787),
  _ = t(970731),
  h = t(314897),
  O = t(430824),
  g = t(594174),
  A = t(626135),
  C = t(5192),
  S = t(709054),
  x = t(360606),
  p = t(905753),
  R = t(399860),
  Z = t(335049),
  f = t(617012),
  M = t(981631),
  L = t(689938),
  v = t(349777);

function j(e) {
  let {
    commandId: n,
    editPermissions: t,
    guildId: l,
    noneSelectedText: r,
    overwrites: I,
    hasAccessToMutatePermissions: T
  } = e, _ = (0, c.e7)([O.Z], () => O.Z.getGuild(l));
  a()(null != _, "");
  let h = (0, c.e7)([O.Z], () => O.Z.getRoles(l)),
    [A, Z] = s.useState(new Set),
    f = s.useMemo(() => {
      var e;
      let n = (0, E.bD)(l);
      let t = (e = h, o()(e).sortBy(e => e.position).reduce((e, n, t) => (e[n.id] = t, e), {}));
      return Object.values(I).filter(e => e.canRead).sort((e, i) => {
        let s = e.type - i.type;
        if (0 !== s) return s;
        switch (e.type) {
          case N.Kw.USER:
            return function(e, n, t) {
              let i = Number(e.canWrite) - Number(n.canWrite);
              if (0 !== i) return i;
              let s = g.default.getUser(e.id),
                l = g.default.getUser(n.id);
              if (null != s && null != l) {
                let e = C.ZP.getName(t, void 0, s),
                  n = C.ZP.getName(t, void 0, l);
                return null == e ? void 0 : e.localeCompare(n)
              }
              return S.default.compare(e.id, n.id)
            }(e, i, l);
          case N.Kw.ROLE:
            return function(e, n, t, i) {
              if (e.id === t) return -1;
              if (n.id === t) return 1;
              let s = i[e.id];
              return s > i[n.id] ? -1 : 1
            }(e, i, l, t);
          case N.Kw.CHANNEL:
            return function(e, n, t) {
              if (e.id === t) return -1;
              if (n.id === t) return 1;
              let i = Number(e.canWrite) - Number(n.canWrite);
              return 0 !== i ? i : S.default.compare(e.id, n.id)
            }(e, i, n)
        }
      })
    }, [l, I, h]),
    M = s.useCallback((e, n) => {
      t({}, [(0, R.rE)(e, n)])
    }, [t]),
    L = s.useCallback((e, n, i) => {
      let s = (0, R.rE)(e, n);
      null != I[s] && t({
        [s]: {
          id: e,
          permission: i,
          type: n
        }
      }, [])
    }, [t, I]);
  s.useEffect(() => {
    let e = Object.values(I).filter(e => e.type === N.Kw.USER && !e.canRead && !A.has(e.id)).map(e => e.id);
    if (0 !== e.length) u.Z.requestMembersById(l, e, !1), Z(n => new Set([...n, ...e]))
  }, [l, I, A, Z]);
  let j = (0, c.e7)([p.Z], () => p.Z.getApplicationId()),
    D = (0, c.e7)([x.Z], () => null == j ? void 0 : x.Z.integrations.find(e => {
      var n;
      return (null === (n = e.application) || void 0 === n ? void 0 : n.id) === j
    })),
    P = (0, c.e7)([m.Z], () => void 0 !== D && m.Z.canShowToggleTooltip(D.id));
  return (0, i.jsx)(s.Fragment, {
    children: f.length > 0 ? f.map(e => (0, i.jsx)(b, {
      guild: _,
      commandId: n,
      onChange: n => L(e.id, e.type, n),
      onRemove: () => M(e.id, e.type),
      overwrite: e,
      integration: D,
      canShowMigrationTooltip: P,
      hasAccessToMutatePermissions: T
    }, e.id)) : (0, i.jsx)("div", {
      className: v.noItemsSelected,
      children: (0, i.jsx)(d.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: r
      })
    })
  })
}

function b(e) {
  var n, t, l;
  let a, {
      guild: r,
      commandId: o,
      onChange: c,
      onRemove: u,
      overwrite: m,
      integration: O,
      canShowMigrationTooltip: g,
      hasAccessToMutatePermissions: C
    } = e,
    S = m.id === r.id || m.id === (0, E.bD)(r.id),
    x = null == O ? void 0 : null === (t = O.application) || void 0 === t ? void 0 : null === (n = t.bot) || void 0 === n ? void 0 : n.username,
    p = !m.canWrite || !C,
    R = h.default.getId();
  C ? !m.canWrite && (m.type === N.Kw.USER ? a = m.id === R ? L.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_USER_SELF : L.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_USER_OTHER : m.type === N.Kw.ROLE && (a = L.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_ROLE)) : a = null != o ? L.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_COMMAND : L.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_APPLICATION;
  let j = g && null != O && m.id === r.id && void 0 !== x && !m.permission;
  s.useEffect(() => {
    if (j) {
      var e;
      A.default.track(M.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
        ...(0, I.hH)(r.id),
        application_id: null == O ? void 0 : null === (e = O.application) || void 0 === e ? void 0 : e.id,
        location: "toggle"
      })
    }
  }, [r.id, null == O ? void 0 : null === (l = O.application) || void 0 === l ? void 0 : l.id, j]);
  let b = (0, i.jsx)(d.Tooltip, {
      tooltipClassName: v.tooltip,
      text: a,
      shouldShow: p,
      position: "left",
      hideOnClick: !1,
      children: e => (0, i.jsx)("div", {
        ...e,
        children: (0, i.jsx)(f.Z, {
          isDisabled: p,
          currentValue: m.permission,
          onChange: j ? e => {
            T.Z.dismissToggleTooltip(r.id, O), c(e)
          } : c
        })
      })
    }),
    P = (0, i.jsx)(d.Popout, {
      renderPopout: () => (0, i.jsx)(d.Clickable, {
        onClick: e => {
          e.stopPropagation(), T.Z.dismissToggleTooltip(r.id, O)
        },
        children: (0, i.jsx)(_.ZP, {
          className: v.tooltip,
          content: L.Z.Messages.COMMANDS_SCOPE_MIGRATION_TOGGLE_TOOLTIP.format({
            botName: x,
            link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/"
          }),
          onClick: () => {}
        })
      }),
      position: "bottom",
      align: "center",
      animation: d.Popout.Animation.TRANSLATE,
      onRequestClose: () => T.Z.dismissToggleTooltip(r.id, O),
      shouldShow: j,
      closeOnScroll: !0,
      children: () => b
    });
  return (0, i.jsxs)("div", {
    className: v.entryItem,
    children: [(0, i.jsx)("div", {
      className: v.entryName,
      children: (0, i.jsx)(Z.Z, {
        guild: r,
        id: m.id,
        type: m.type,
        isLocked: p,
        lockTooltipText: a
      })
    }), (0, i.jsxs)("div", {
      className: v.entryActions,
      children: [(0, i.jsx)(D, {
        commandId: o,
        isSentinel: S,
        isDisabled: !C,
        onRemove: u
      }), P]
    })]
  }, m.id)
}

function D(e) {
  let {
    commandId: n,
    isSentinel: t,
    isDisabled: s,
    onRemove: l
  } = e;
  return s ? null : null != n || !t ? (0, i.jsx)("div", {
    className: v.removeActions,
    children: (0, i.jsx)(d.Clickable, {
      className: v.removeContainer,
      "aria-label": L.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSION_ENTRY_REMOVE_ARIA_LABEL,
      onClick: l,
      children: (0, i.jsx)(d.TrashIcon, {
        size: "md",
        color: "currentColor",
        className: v.removeIcon
      })
    })
  }) : null
}
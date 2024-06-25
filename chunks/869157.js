t.d(n, {
  Z: function() {
    return j
  }
}), t(724458), t(47120);
var i = t(735250),
  l = t(470079),
  s = t(512722),
  a = t.n(s),
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
  g = t(430824),
  O = t(594174),
  A = t(626135),
  x = t(5192),
  C = t(709054),
  S = t(360606),
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
    guildId: s,
    noneSelectedText: r,
    overwrites: I,
    hasAccessToMutatePermissions: T
  } = e, _ = (0, c.e7)([g.Z], () => g.Z.getGuild(s));
  a()(null != _, "");
  let h = (0, c.e7)([g.Z], () => g.Z.getRoles(s)),
    [A, Z] = l.useState(new Set),
    f = l.useMemo(() => {
      var e;
      let n = (0, E.bD)(s);
      let t = (e = h, o()(e).sortBy(e => e.position).reduce((e, n, t) => (e[n.id] = t, e), {}));
      return Object.values(I).filter(e => e.canRead).sort((e, i) => {
        let l = e.type - i.type;
        if (0 !== l) return l;
        switch (e.type) {
          case N.Kw.USER:
            return function(e, n, t) {
              let i = Number(e.canWrite) - Number(n.canWrite);
              if (0 !== i) return i;
              let l = O.default.getUser(e.id),
                s = O.default.getUser(n.id);
              if (null != l && null != s) {
                let e = x.ZP.getName(t, void 0, l),
                  n = x.ZP.getName(t, void 0, s);
                return null == e ? void 0 : e.localeCompare(n)
              }
              return C.default.compare(e.id, n.id)
            }(e, i, s);
          case N.Kw.ROLE:
            return function(e, n, t, i) {
              if (e.id === t) return -1;
              if (n.id === t) return 1;
              let l = i[e.id];
              return l > i[n.id] ? -1 : 1
            }(e, i, s, t);
          case N.Kw.CHANNEL:
            return function(e, n, t) {
              if (e.id === t) return -1;
              if (n.id === t) return 1;
              let i = Number(e.canWrite) - Number(n.canWrite);
              return 0 !== i ? i : C.default.compare(e.id, n.id)
            }(e, i, n)
        }
      })
    }, [s, I, h]),
    M = l.useCallback((e, n) => {
      t({}, [(0, R.rE)(e, n)])
    }, [t]),
    L = l.useCallback((e, n, i) => {
      let l = (0, R.rE)(e, n);
      null != I[l] && t({
        [l]: {
          id: e,
          permission: i,
          type: n
        }
      }, [])
    }, [t, I]);
  l.useEffect(() => {
    let e = Object.values(I).filter(e => e.type === N.Kw.USER && !e.canRead && !A.has(e.id)).map(e => e.id);
    if (0 !== e.length) u.Z.requestMembersById(s, e, !1), Z(n => new Set([...n, ...e]))
  }, [s, I, A, Z]);
  let j = (0, c.e7)([p.Z], () => p.Z.getApplicationId()),
    P = (0, c.e7)([S.Z], () => null == j ? void 0 : S.Z.integrations.find(e => {
      var n;
      return (null === (n = e.application) || void 0 === n ? void 0 : n.id) === j
    })),
    D = (0, c.e7)([m.Z], () => void 0 !== P && m.Z.canShowToggleTooltip(P.id));
  return (0, i.jsx)(l.Fragment, {
    children: f.length > 0 ? f.map(e => (0, i.jsx)(b, {
      guild: _,
      commandId: n,
      onChange: n => L(e.id, e.type, n),
      onRemove: () => M(e.id, e.type),
      overwrite: e,
      integration: P,
      canShowMigrationTooltip: D,
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
  var n, t, s;
  let a, {
      guild: r,
      commandId: o,
      onChange: c,
      onRemove: u,
      overwrite: m,
      integration: g,
      canShowMigrationTooltip: O,
      hasAccessToMutatePermissions: x
    } = e,
    C = m.id === r.id || m.id === (0, E.bD)(r.id),
    S = null == g ? void 0 : null === (t = g.application) || void 0 === t ? void 0 : null === (n = t.bot) || void 0 === n ? void 0 : n.username,
    p = !m.canWrite || !x,
    R = h.default.getId();
  x ? !m.canWrite && (m.type === N.Kw.USER ? a = m.id === R ? L.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_USER_SELF : L.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_USER_OTHER : m.type === N.Kw.ROLE && (a = L.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_ROLE)) : a = null != o ? L.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_COMMAND : L.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_APPLICATION;
  let j = O && null != g && m.id === r.id && void 0 !== S && !m.permission;
  l.useEffect(() => {
    if (j) {
      var e;
      A.default.track(M.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
        ...(0, I.hH)(r.id),
        application_id: null == g ? void 0 : null === (e = g.application) || void 0 === e ? void 0 : e.id,
        location: "toggle"
      })
    }
  }, [r.id, null == g ? void 0 : null === (s = g.application) || void 0 === s ? void 0 : s.id, j]);
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
            T.Z.dismissToggleTooltip(r.id, g), c(e)
          } : c
        })
      })
    }),
    D = (0, i.jsx)(d.Popout, {
      renderPopout: () => (0, i.jsx)(d.Clickable, {
        onClick: e => {
          e.stopPropagation(), T.Z.dismissToggleTooltip(r.id, g)
        },
        children: (0, i.jsx)(_.ZP, {
          className: v.tooltip,
          content: L.Z.Messages.COMMANDS_SCOPE_MIGRATION_TOGGLE_TOOLTIP.format({
            botName: S,
            link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/"
          }),
          onClick: () => {}
        })
      }),
      position: "bottom",
      align: "center",
      animation: d.Popout.Animation.TRANSLATE,
      onRequestClose: () => T.Z.dismissToggleTooltip(r.id, g),
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
      children: [(0, i.jsx)(P, {
        commandId: o,
        isSentinel: C,
        isDisabled: !x,
        onRemove: u
      }), D]
    })]
  }, m.id)
}

function P(e) {
  let {
    commandId: n,
    isSentinel: t,
    isDisabled: l,
    onRemove: s
  } = e;
  return l ? null : null != n || !t ? (0, i.jsx)("div", {
    className: v.removeActions,
    children: (0, i.jsx)(d.Clickable, {
      className: v.removeContainer,
      "aria-label": L.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSION_ENTRY_REMOVE_ARIA_LABEL,
      onClick: s,
      children: (0, i.jsx)(d.TrashIcon, {
        size: "md",
        color: "currentColor",
        className: v.removeIcon
      })
    })
  }) : null
}
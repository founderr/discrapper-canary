"use strict";
l.r(t), l.d(t, {
  default: function() {
    return b
  }
}), l("724458"), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("512722"),
  i = l.n(s),
  r = l("392711"),
  o = l.n(r),
  d = l("442837"),
  u = l("481060"),
  c = l("749210"),
  f = l("367907"),
  I = l("895924"),
  m = l("581364"),
  T = l("929507"),
  E = l("997787"),
  N = l("970731"),
  _ = l("314897"),
  S = l("430824"),
  h = l("594174"),
  g = l("740727"),
  p = l("626135"),
  O = l("5192"),
  A = l("709054"),
  C = l("360606"),
  x = l("905753"),
  R = l("399860"),
  M = l("335049"),
  L = l("617012"),
  v = l("981631"),
  j = l("689938"),
  P = l("150038");

function b(e) {
  let {
    commandId: t,
    editPermissions: l,
    guildId: s,
    noneSelectedText: r,
    overwrites: f,
    hasAccessToMutatePermissions: T
  } = e, N = (0, d.useStateFromStores)([S.default], () => S.default.getGuild(s));
  i()(null != N, "");
  let _ = (0, d.useStateFromStores)([S.default], () => S.default.getRoles(s)),
    [g, p] = a.useState(new Set),
    M = a.useMemo(() => {
      var e;
      let t = (0, m.allChannelsSentinel)(s);
      let l = (e = _, o()(e).sortBy(e => e.position).reduce((e, t, l) => (e[t.id] = l, e), {}));
      return Object.values(f).filter(e => e.canRead).sort((e, n) => {
        let a = e.type - n.type;
        if (0 !== a) return a;
        switch (e.type) {
          case I.ApplicationCommandPermissionType.USER:
            return function(e, t, l) {
              let n = Number(e.canWrite) - Number(t.canWrite);
              if (0 !== n) return n;
              let a = h.default.getUser(e.id),
                s = h.default.getUser(t.id);
              if (null != a && null != s) {
                let e = O.default.getName(l, void 0, a),
                  t = O.default.getName(l, void 0, s);
                return null == e ? void 0 : e.localeCompare(t)
              }
              return A.default.compare(e.id, t.id)
            }(e, n, s);
          case I.ApplicationCommandPermissionType.ROLE:
            return function(e, t, l, n) {
              if (e.id === l) return -1;
              if (t.id === l) return 1;
              let a = n[e.id];
              return a > n[t.id] ? -1 : 1
            }(e, n, s, l);
          case I.ApplicationCommandPermissionType.CHANNEL:
            return function(e, t, l) {
              if (e.id === l) return -1;
              if (t.id === l) return 1;
              let n = Number(e.canWrite) - Number(t.canWrite);
              return 0 !== n ? n : A.default.compare(e.id, t.id)
            }(e, n, t)
        }
      })
    }, [s, f, _]),
    L = a.useCallback((e, t) => {
      l({}, [(0, R.toPermissionKey)(e, t)])
    }, [l]),
    v = a.useCallback((e, t, n) => {
      let a = (0, R.toPermissionKey)(e, t);
      null != f[a] && l({
        [a]: {
          id: e,
          permission: n,
          type: t
        }
      }, [])
    }, [l, f]);
  a.useEffect(() => {
    let e = Object.values(f).filter(e => e.type === I.ApplicationCommandPermissionType.USER && !e.canRead && !g.has(e.id)).map(e => e.id);
    0 !== e.length && (c.default.requestMembersById(s, e, !1), p(t => new Set([...t, ...e])))
  }, [s, f, g, p]);
  let j = (0, d.useStateFromStores)([x.default], () => x.default.getApplicationId()),
    b = (0, d.useStateFromStores)([C.default], () => null == j ? void 0 : C.default.integrations.find(e => {
      var t;
      return (null === (t = e.application) || void 0 === t ? void 0 : t.id) === j
    })),
    y = (0, d.useStateFromStores)([E.default], () => void 0 !== b && E.default.canShowToggleTooltip(b.id));
  return (0, n.jsx)(a.Fragment, {
    children: M.length > 0 ? M.map(e => (0, n.jsx)(D, {
      guild: N,
      commandId: t,
      onChange: t => v(e.id, e.type, t),
      onRemove: () => L(e.id, e.type),
      overwrite: e,
      integration: b,
      canShowMigrationTooltip: y,
      hasAccessToMutatePermissions: T
    }, e.id)) : (0, n.jsx)("div", {
      className: P.noItemsSelected,
      children: (0, n.jsx)(u.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: r
      })
    })
  })
}

function D(e) {
  var t, l, s;
  let i, {
      guild: r,
      commandId: o,
      onChange: d,
      onRemove: c,
      overwrite: E,
      integration: S,
      canShowMigrationTooltip: h,
      hasAccessToMutatePermissions: g
    } = e,
    O = E.id === r.id || E.id === (0, m.allChannelsSentinel)(r.id),
    A = null == S ? void 0 : null === (l = S.application) || void 0 === l ? void 0 : null === (t = l.bot) || void 0 === t ? void 0 : t.username,
    C = !E.canWrite || !g,
    x = _.default.getId();
  g ? !E.canWrite && (E.type === I.ApplicationCommandPermissionType.USER ? i = E.id === x ? j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_USER_SELF : j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_USER_OTHER : E.type === I.ApplicationCommandPermissionType.ROLE && (i = j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_ROLE)) : i = null != o ? j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_COMMAND : j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_APPLICATION;
  let R = h && null != S && E.id === r.id && void 0 !== A && !E.permission;
  a.useEffect(() => {
    if (R) {
      var e;
      p.default.track(v.AnalyticEvents.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
        ...(0, f.collectGuildAnalyticsMetadata)(r.id),
        application_id: null == S ? void 0 : null === (e = S.application) || void 0 === e ? void 0 : e.id,
        location: "toggle"
      })
    }
  }, [r.id, null == S ? void 0 : null === (s = S.application) || void 0 === s ? void 0 : s.id, R]);
  let b = (0, n.jsx)(u.Tooltip, {
      tooltipClassName: P.tooltip,
      text: i,
      shouldShow: C,
      position: "left",
      hideOnClick: !1,
      children: e => (0, n.jsx)("div", {
        ...e,
        children: (0, n.jsx)(L.default, {
          isDisabled: C,
          currentValue: E.permission,
          onChange: R ? e => {
            T.default.dismissToggleTooltip(r.id, S), d(e)
          } : d
        })
      })
    }),
    D = (0, n.jsx)(u.Popout, {
      renderPopout: () => (0, n.jsx)(u.Clickable, {
        onClick: e => {
          e.stopPropagation(), T.default.dismissToggleTooltip(r.id, S)
        },
        children: (0, n.jsx)(N.default, {
          className: P.tooltip,
          content: j.default.Messages.COMMANDS_SCOPE_MIGRATION_TOGGLE_TOOLTIP.format({
            botName: A,
            link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/"
          }),
          onClick: () => {}
        })
      }),
      position: "bottom",
      align: "center",
      animation: u.Popout.Animation.TRANSLATE,
      onRequestClose: () => T.default.dismissToggleTooltip(r.id, S),
      shouldShow: R,
      closeOnScroll: !0,
      children: () => b
    });
  return (0, n.jsxs)("div", {
    className: P.entryItem,
    children: [(0, n.jsx)("div", {
      className: P.entryName,
      children: (0, n.jsx)(M.default, {
        guild: r,
        id: E.id,
        type: E.type,
        isLocked: C,
        lockTooltipText: i
      })
    }), (0, n.jsxs)("div", {
      className: P.entryActions,
      children: [(0, n.jsx)(y, {
        commandId: o,
        isSentinel: O,
        isDisabled: !g,
        onRemove: c
      }), D]
    })]
  }, E.id)
}

function y(e) {
  let {
    commandId: t,
    isSentinel: l,
    isDisabled: a,
    onRemove: s
  } = e;
  return a ? null : null != t || !l ? (0, n.jsx)("div", {
    className: P.removeActions,
    children: (0, n.jsx)(u.Clickable, {
      className: P.removeContainer,
      "aria-label": j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSION_ENTRY_REMOVE_ARIA_LABEL,
      onClick: s,
      children: (0, n.jsx)(g.default, {
        width: 24,
        height: 24,
        className: P.removeIcon
      })
    })
  }) : null
}
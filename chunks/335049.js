"use strict";
l.r(t), l.d(t, {
  default: function() {
    return v
  }
});
var n = l("735250"),
  a = l("470079"),
  s = l("120356"),
  i = l.n(s),
  r = l("512722"),
  o = l.n(r),
  d = l("866442"),
  u = l("442837"),
  c = l("481060"),
  f = l("239091"),
  I = l("895924"),
  m = l("581364"),
  T = l("471445"),
  E = l("518738"),
  N = l("592125"),
  _ = l("271383"),
  S = l("430824"),
  h = l("246946"),
  g = l("594174"),
  p = l("93879"),
  O = l("630641"),
  A = l("241820"),
  C = l("176278"),
  x = l("51144"),
  R = l("981631"),
  M = l("689938"),
  L = l("958117");

function v(e) {
  let {
    guild: t,
    id: s,
    type: i,
    isLocked: r,
    lockTooltipText: d
  } = e, u = !r || null != d;
  o()(u, "No lockTooltipText provided while isLocked=true");
  let c = a.useCallback(e => {
    (0, f.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await l.e("5396").then(l.bind(l, "731646"));
      return t => (0, n.jsx)(e, {
        ...t,
        id: s,
        label: M.default.Messages.COPY_ID_COMMAND
      })
    })
  }, [s]);
  switch (i) {
    case I.ApplicationCommandPermissionType.CHANNEL:
      return (0, n.jsx)(j, {
        guild: t,
        id: s,
        isLocked: r,
        lockTooltipText: d,
        openEntryContextMenu: c
      });
    case I.ApplicationCommandPermissionType.ROLE:
      return (0, n.jsx)(P, {
        guild: t,
        id: s,
        isLocked: r,
        lockTooltipText: d,
        openEntryContextMenu: c
      });
    case I.ApplicationCommandPermissionType.USER:
      return (0, n.jsx)(b, {
        guild: t,
        id: s,
        isLocked: r,
        lockTooltipText: d,
        openEntryContextMenu: c
      })
  }
}

function j(e) {
  let {
    guild: t,
    id: l,
    isLocked: s,
    lockTooltipText: r,
    openEntryContextMenu: o
  } = e, d = (0, m.allChannelsSentinel)(t.id), {
    icon: f,
    name: I,
    categoryName: E
  } = (0, u.useStateFromStoresObject)([N.default], () => {
    if (d === l) return {
      name: M.default.Messages.INTEGRATIONS_APPLICATION_ALL_CHANNELS,
      icon: p.default
    };
    let e = N.default.getChannel(l),
      n = (null == e ? void 0 : e.parent_id) != null ? N.default.getChannel(e.parent_id) : null;
    return {
      icon: null != e ? (0, T.getChannelIconComponent)(e, t) : null,
      name: null == e ? void 0 : e.name,
      categoryName: null == n ? void 0 : n.name
    }
  }, [d, t, l]), _ = a.useCallback(e => {
    l !== d && o(e)
  }, [d, l, o]);
  return null == f || null == I ? null : (0, n.jsxs)("div", {
    onContextMenu: _,
    className: L.identifier,
    children: [(0, n.jsx)(f, {
      width: 20,
      height: 20,
      className: i()(L.channelIcon, L.image)
    }), (0, n.jsx)(c.Text, {
      className: L.roleName,
      color: "header-primary",
      variant: "text-md/normal",
      children: I
    }), null != E ? (0, n.jsxs)(c.Text, {
      className: L.tag,
      variant: "text-sm/normal",
      children: ["(", E, ")"]
    }) : null, s ? (0, n.jsx)(D, {
      tooltipText: r
    }) : null]
  })
}

function P(e) {
  var t;
  let {
    guild: s,
    id: r,
    isLocked: o,
    lockTooltipText: I
  } = e, m = (0, u.useStateFromStores)([S.default], () => S.default.getRole(s.id, r)), T = (0, E.useRoleIcon)({
    guildId: s.id,
    roleId: r,
    size: 24
  }), N = a.useCallback(e => {
    null != s && null != m && (0, f.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await l.e("14486").then(l.bind(l, "786746"));
      return t => (0, n.jsx)(e, {
        ...t,
        guild: s,
        role: m
      })
    })
  }, [s, m]);
  return (null == m ? void 0 : m.name) == null ? null : (0, n.jsxs)("div", {
    onContextMenu: N,
    className: L.identifier,
    children: [null != T ? (0, n.jsx)(C.default, {
      className: i()(L.__invalid_icon, L.image),
      ...T
    }) : (0, n.jsx)(A.default, {
      className: i()(L.shield, L.image),
      color: null !== (t = m.colorString) && void 0 !== t ? t : (0, d.int2hex)(R.DEFAULT_ROLE_COLOR)
    }), (0, n.jsx)(c.Text, {
      className: L.roleName,
      color: "header-primary",
      variant: "text-md/normal",
      children: m.name
    }), o ? (0, n.jsx)(D, {
      tooltipText: I
    }) : null]
  })
}

function b(e) {
  let {
    guild: t,
    id: l,
    isLocked: a,
    lockTooltipText: s,
    openEntryContextMenu: i
  } = e, r = (0, u.useStateFromStores)([g.default], () => g.default.getUser(l)), o = (0, u.useStateFromStores)([_.default], () => {
    var e;
    return null === (e = _.default.getMember(t.id, l)) || void 0 === e ? void 0 : e.nick
  }, [t.id, l]), d = (0, u.useStateFromStores)([h.default], () => h.default.hidePersonalInformation);
  return null == r ? null : (0, n.jsxs)("div", {
    onContextMenu: i,
    className: L.identifier,
    children: [(0, n.jsx)(c.Avatar, {
      className: L.image,
      src: r.getAvatarURL(t.id, 24),
      "aria-label": r.username,
      size: c.AvatarSizes.SIZE_24
    }), (0, n.jsx)(c.Text, {
      className: L.roleName,
      color: "header-primary",
      variant: "text-md/normal",
      children: null != o ? o : r.username
    }), d ? null : (0, n.jsx)(c.Text, {
      className: L.tag,
      variant: "text-sm/normal",
      children: x.default.getUserTag(r)
    }), a ? (0, n.jsx)(D, {
      tooltipText: s
    }) : null]
  })
}

function D(e) {
  let {
    tooltipText: t
  } = e;
  return (0, n.jsx)(c.Tooltip, {
    text: t,
    children: e => (0, n.jsx)("div", {
      className: L.lockIcon,
      ...e,
      children: (0, n.jsx)(O.default, {
        width: 16,
        height: 16
      })
    })
  })
}
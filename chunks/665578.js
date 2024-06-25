t.d(n, {
  Z: function() {
    return f
  }
}), t(47120);
var i = t(735250),
  l = t(470079),
  s = t(392711),
  a = t.n(s),
  r = t(149765),
  o = t(442837),
  c = t(481060),
  d = t(895924),
  u = t(581364),
  I = t(605436),
  N = t(271383),
  E = t(430824),
  T = t(496675),
  m = t(474333),
  _ = t(821864),
  h = t(905753),
  g = t(937427),
  O = t(643886),
  A = t(869157),
  x = t(454092),
  C = t(289465),
  S = t(981631),
  p = t(689079),
  R = t(689938),
  Z = t(501781);

function f(e) {
  let {
    applicationId: n,
    commandId: s,
    guildId: g,
    inModal: O,
    editedTargetPermissions: f,
    originalApplicationPermissions: v,
    originalCommandPermissions: j,
    selectedPermissionCount: b
  } = e, P = (0, o.e7)([h.Z], () => null == s ? null : h.Z.getCommand(s), [s]), D = (null == P ? void 0 : P.defaultMemberPermissions) != null, B = (0, o.e7)([E.Z, N.ZP, T.Z], () => {
    let e = E.Z.getGuild(g),
      n = N.ZP.getSelfMember(g);
    return null != e && null != n && (0, u.Ft)({
      PermissionStore: T.Z,
      guild: e,
      selfMember: n,
      applicationLevelPermissions: v,
      commandLevelPermissions: j,
      defaultMemberPermissions: null == P ? void 0 : P.defaultMemberPermissions
    })
  }, [g, P, v, j]), G = null != s ? s : n, [y, k] = l.useMemo(() => {
    let e = {},
      n = {};
    for (let [t, i] of Object.entries(f)) i.type === d.Kw.CHANNEL ? e[t] = i : n[t] = i;
    return [e, n]
  }, [f]), U = l.useCallback(e => {
    let n = E.Z.getGuild(g),
      t = N.ZP.getSelfMember(g);
    return null != n && null != t && (null != s ? (0, u.Ft)({
      PermissionStore: T.Z,
      guild: n,
      selfMember: t,
      applicationLevelPermissions: v,
      commandLevelPermissions: e,
      defaultMemberPermissions: null == P ? void 0 : P.defaultMemberPermissions
    }) : (0, u.Ft)({
      PermissionStore: T.Z,
      guild: n,
      selfMember: t,
      applicationLevelPermissions: e
    }))
  }, [g, P, s, v]), H = l.useCallback((e, n) => {
    let t;
    let i = null;
    if (0 !== n.length) {
      let e = f[n[0]];
      if (e.type === d.Kw.USER) t = x.s.REMOVE_SELF;
      else {
        let n = e.id;
        if (t = x.s.REMOVE_ROLE, (0, I.pM)(g, n)) i = "@everyone";
        else {
          let e = E.Z.getRole(g, n);
          i = null != e ? e.name : "role"
        }
      }
    } else {
      let n = Object.values(e)[0].id;
      if (t = x.s.DENY_ROLE, (0, I.pM)(g, n)) i = "@everyone";
      else {
        let e = E.Z.getRole(g, n);
        i = null != e ? e.name : "role"
      }
    }(0, x._)(t, i)
  }, [g, f]), W = l.useCallback((e, t) => {
    let i = {};
    for (let [e, n] of Object.entries(f)) i[e] = {
      id: n.id,
      permission: n.permission,
      type: n.type
    };
    if (i = Object.assign(i, e), t.length > 0 && (i = a().omit(i, t)), !U(i)) {
      H(e, t);
      return
    }
    _.W4(n, G, i)
  }, [n, f, G, U, H]), w = l.useCallback(() => {
    let e = Object.keys(y);
    return (0, c.openModalLazy)(async () => {
      let {
        default: n
      } = await Promise.all([t.e("99387"), t.e("64908")]).then(t.bind(t, 557944));
      return t => (0, i.jsx)(n, {
        editPermissions: W,
        guildId: g,
        headerText: R.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_ADD_BUTTON,
        hasMemberSearch: !1,
        overwrittenKeys: e,
        search: M,
        searchPlaceholderText: R.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_SEARCH_PLACEHOLDER,
        selectedPermissionCount: b,
        ...t
      })
    })
  }, [W, y, g, b]), F = l.useCallback(() => {
    let e = Object.keys(k);
    return (0, c.openModalLazy)(async () => {
      let {
        default: n
      } = await Promise.all([t.e("99387"), t.e("64908")]).then(t.bind(t, 557944));
      return t => (0, i.jsx)(n, {
        editPermissions: W,
        guildId: g,
        hasMemberSearch: !0,
        headerText: R.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD_BUTTON,
        overwrittenKeys: e,
        search: L,
        searchPlaceholderText: R.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_SEARCH_PLACEHOLDER,
        selectedPermissionCount: b,
        ...t
      })
    })
  }, [W, g, k, b]), V = l.useCallback(() => (0, c.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([t.e("99387"), t.e("21897")]).then(t.bind(t, 303313)), n = P.defaultMemberPermissions;
    return r.fS(n, u.BO) && (n = S.Plq.ADMINISTRATOR), t => (0, i.jsx)(e, {
      ...t,
      defaultMemberPermissions: n
    })
  }), [P]), K = b - p._n, Y = K >= 0, z = [{
    buttonClick: F,
    buttonText: R.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD_BUTTON,
    noneSelectedText: R.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_ROLE_MEMBER_NO_ENTRIES,
    overwrites: k,
    title: null == s ? R.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD : R.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_ROLE_MEMBER_HEADER
  }, {
    buttonClick: w,
    buttonText: R.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_ADD_BUTTON,
    noneSelectedText: R.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_CHANNEL_NO_ENTRIES,
    overwrites: y,
    title: null == s ? R.Z.Messages.CHANNELS : R.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_CHANNEL_HEADER
  }];
  return (0, i.jsxs)(l.Fragment, {
    children: [K > 0 ? (0, i.jsx)(m.Z, {
      messageType: m.Q.WARNING,
      children: R.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_NOTICE_TEXT.format({
        removeCount: K
      })
    }) : null, D ? (0, i.jsxs)("div", {
      className: Z.requiredPermissionsBanner,
      children: [(0, i.jsx)(c.CircleInformationIcon, {
        size: "sm",
        color: "currentColor",
        className: Z.icon
      }), (0, i.jsx)("span", {
        className: Z.message,
        children: R.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_DEFAULT_MEMBER_PERMISSIONS_SECTION_DESCRIPTION.format()
      }), (0, i.jsx)(c.Button, {
        color: c.Button.Colors.PRIMARY,
        onClick: V,
        size: c.Button.Sizes.SMALL,
        className: Z.addButton,
        children: R.Z.Messages.VIEW
      })]
    }) : null, z.map((e, n) => {
      let t = n => (0, i.jsx)(c.Button, {
          ...n,
          color: c.Button.Colors.PRIMARY,
          disabled: Y || !B,
          onClick: e.buttonClick,
          size: c.Button.Sizes.TINY,
          className: Z.addButton,
          children: e.buttonText
        }),
        l = null;
      return B ? Y && (l = R.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_MAX) : l = null != s ? R.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_COMMAND : R.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_APPLICATION, (0, i.jsx)(C.Z, {
        bar: (0, i.jsx)(c.Tooltip, {
          tooltipClassName: Z.tooltip,
          text: l,
          shouldShow: null != l,
          children: e => t(e)
        }),
        inModal: O,
        title: e.title,
        children: (0, i.jsx)("div", {
          className: O ? void 0 : Z.listContainer,
          children: (0, i.jsx)(A.Z, {
            guildId: g,
            commandId: s,
            noneSelectedText: e.noneSelectedText,
            overwrites: e.overwrites,
            editPermissions: W,
            hasAccessToMutatePermissions: B
          })
        })
      }, n)
    })]
  })
}

function M(e) {
  let n = (0, g.w)(e);
  return {
    ...n,
    results: n.results.map(e => ({
      ...e,
      type: d.Kw.CHANNEL
    }))
  }
}

function L(e) {
  let n = (0, O.U)(e);
  return {
    ...n,
    results: n.results.roles.map(e => ({
      ...e,
      type: d.Kw.ROLE
    })).concat(n.results.members.map(e => ({
      ...e,
      type: d.Kw.USER
    })))
  }
}
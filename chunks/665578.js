t.d(n, {
  Z: function() {
    return f
  }
}), t(47120);
var i = t(735250),
  s = t(470079),
  l = t(392711),
  a = t.n(l),
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
  O = t(937427),
  g = t(643886),
  A = t(869157),
  C = t(454092),
  S = t(289465),
  x = t(981631),
  p = t(689079),
  R = t(689938),
  Z = t(501781);

function f(e) {
  let {
    applicationId: n,
    commandId: l,
    guildId: O,
    inModal: g,
    editedTargetPermissions: f,
    originalApplicationPermissions: v,
    originalCommandPermissions: j,
    selectedPermissionCount: b
  } = e, D = (0, o.e7)([h.Z], () => null == l ? null : h.Z.getCommand(l), [l]), P = (null == D ? void 0 : D.defaultMemberPermissions) != null, B = (0, o.e7)([E.Z, N.ZP, T.Z], () => {
    let e = E.Z.getGuild(O),
      n = N.ZP.getSelfMember(O);
    return null != e && null != n && (0, u.Ft)({
      PermissionStore: T.Z,
      guild: e,
      selfMember: n,
      applicationLevelPermissions: v,
      commandLevelPermissions: j,
      defaultMemberPermissions: null == D ? void 0 : D.defaultMemberPermissions
    })
  }, [O, D, v, j]), G = null != l ? l : n, [y, k] = s.useMemo(() => {
    let e = {},
      n = {};
    for (let [t, i] of Object.entries(f)) i.type === d.Kw.CHANNEL ? e[t] = i : n[t] = i;
    return [e, n]
  }, [f]), U = s.useCallback(e => {
    let n = E.Z.getGuild(O),
      t = N.ZP.getSelfMember(O);
    return null != n && null != t && (null != l ? (0, u.Ft)({
      PermissionStore: T.Z,
      guild: n,
      selfMember: t,
      applicationLevelPermissions: v,
      commandLevelPermissions: e,
      defaultMemberPermissions: null == D ? void 0 : D.defaultMemberPermissions
    }) : (0, u.Ft)({
      PermissionStore: T.Z,
      guild: n,
      selfMember: t,
      applicationLevelPermissions: e
    }))
  }, [O, D, l, v]), H = s.useCallback((e, n) => {
    let t;
    let i = null;
    if (0 !== n.length) {
      let e = f[n[0]];
      if (e.type === d.Kw.USER) t = C.s.REMOVE_SELF;
      else {
        let n = e.id;
        if (t = C.s.REMOVE_ROLE, (0, I.pM)(O, n)) i = "@everyone";
        else {
          let e = E.Z.getRole(O, n);
          i = null != e ? e.name : "role"
        }
      }
    } else {
      let n = Object.values(e)[0].id;
      if (t = C.s.DENY_ROLE, (0, I.pM)(O, n)) i = "@everyone";
      else {
        let e = E.Z.getRole(O, n);
        i = null != e ? e.name : "role"
      }
    }(0, C._)(t, i)
  }, [O, f]), W = s.useCallback((e, t) => {
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
  }, [n, f, G, U, H]), w = s.useCallback(() => {
    let e = Object.keys(y);
    return (0, c.openModalLazy)(async () => {
      let {
        default: n
      } = await Promise.all([t.e("99387"), t.e("64908")]).then(t.bind(t, 557944));
      return t => (0, i.jsx)(n, {
        editPermissions: W,
        guildId: O,
        headerText: R.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_ADD_BUTTON,
        hasMemberSearch: !1,
        overwrittenKeys: e,
        search: M,
        searchPlaceholderText: R.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_SEARCH_PLACEHOLDER,
        selectedPermissionCount: b,
        ...t
      })
    })
  }, [W, y, O, b]), F = s.useCallback(() => {
    let e = Object.keys(k);
    return (0, c.openModalLazy)(async () => {
      let {
        default: n
      } = await Promise.all([t.e("99387"), t.e("64908")]).then(t.bind(t, 557944));
      return t => (0, i.jsx)(n, {
        editPermissions: W,
        guildId: O,
        hasMemberSearch: !0,
        headerText: R.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD_BUTTON,
        overwrittenKeys: e,
        search: L,
        searchPlaceholderText: R.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_SEARCH_PLACEHOLDER,
        selectedPermissionCount: b,
        ...t
      })
    })
  }, [W, O, k, b]), V = s.useCallback(() => (0, c.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([t.e("99387"), t.e("21897")]).then(t.bind(t, 303313)), n = D.defaultMemberPermissions;
    return r.fS(n, u.BO) && (n = x.Plq.ADMINISTRATOR), t => (0, i.jsx)(e, {
      ...t,
      defaultMemberPermissions: n
    })
  }), [D]), K = b - p._n, Y = K >= 0, z = [{
    buttonClick: F,
    buttonText: R.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD_BUTTON,
    noneSelectedText: R.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_ROLE_MEMBER_NO_ENTRIES,
    overwrites: k,
    title: null == l ? R.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD : R.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_ROLE_MEMBER_HEADER
  }, {
    buttonClick: w,
    buttonText: R.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_ADD_BUTTON,
    noneSelectedText: R.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_CHANNEL_NO_ENTRIES,
    overwrites: y,
    title: null == l ? R.Z.Messages.CHANNELS : R.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_CHANNEL_HEADER
  }];
  return (0, i.jsxs)(s.Fragment, {
    children: [K > 0 ? (0, i.jsx)(m.Z, {
      messageType: m.Q.WARNING,
      children: R.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_NOTICE_TEXT.format({
        removeCount: K
      })
    }) : null, P ? (0, i.jsxs)("div", {
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
        s = null;
      return B ? Y && (s = R.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_MAX) : s = null != l ? R.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_COMMAND : R.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_APPLICATION, (0, i.jsx)(S.Z, {
        bar: (0, i.jsx)(c.Tooltip, {
          tooltipClassName: Z.tooltip,
          text: s,
          shouldShow: null != s,
          children: e => t(e)
        }),
        inModal: g,
        title: e.title,
        children: (0, i.jsx)("div", {
          className: g ? void 0 : Z.listContainer,
          children: (0, i.jsx)(A.Z, {
            guildId: O,
            commandId: l,
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
  let n = (0, O.w)(e);
  return {
    ...n,
    results: n.results.map(e => ({
      ...e,
      type: d.Kw.CHANNEL
    }))
  }
}

function L(e) {
  let n = (0, g.U)(e);
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
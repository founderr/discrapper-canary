t.d(n, {
  Z: function() {
    return Z
  }
});
var i = t(735250),
  l = t(470079),
  s = t(120356),
  a = t.n(s),
  r = t(512722),
  o = t.n(r),
  c = t(866442),
  d = t(442837),
  u = t(481060),
  I = t(239091),
  N = t(895924),
  E = t(581364),
  T = t(471445),
  m = t(518738),
  _ = t(592125),
  h = t(271383),
  g = t(430824),
  O = t(246946),
  A = t(594174),
  x = t(176278),
  C = t(51144),
  S = t(981631),
  p = t(689938),
  R = t(341619);

function Z(e) {
  let {
    guild: n,
    id: s,
    type: a,
    isLocked: r,
    lockTooltipText: c
  } = e, d = !r || null != c;
  o()(d, "No lockTooltipText provided while isLocked=true");
  let u = l.useCallback(e => {
    (0, I.jW)(e, async () => {
      let {
        default: e
      } = await t.e("5396").then(t.bind(t, 731646));
      return n => (0, i.jsx)(e, {
        ...n,
        id: s,
        label: p.Z.Messages.COPY_ID_COMMAND
      })
    })
  }, [s]);
  switch (a) {
    case N.Kw.CHANNEL:
      return (0, i.jsx)(f, {
        guild: n,
        id: s,
        isLocked: r,
        lockTooltipText: c,
        openEntryContextMenu: u
      });
    case N.Kw.ROLE:
      return (0, i.jsx)(M, {
        guild: n,
        id: s,
        isLocked: r,
        lockTooltipText: c,
        openEntryContextMenu: u
      });
    case N.Kw.USER:
      return (0, i.jsx)(L, {
        guild: n,
        id: s,
        isLocked: r,
        lockTooltipText: c,
        openEntryContextMenu: u
      })
  }
}

function f(e) {
  let {
    guild: n,
    id: t,
    isLocked: s,
    lockTooltipText: r,
    openEntryContextMenu: o
  } = e, c = (0, E.bD)(n.id), {
    icon: I,
    name: N,
    categoryName: m
  } = (0, d.cj)([_.Z], () => {
    if (c === t) return {
      name: p.Z.Messages.INTEGRATIONS_APPLICATION_ALL_CHANNELS,
      icon: u.TextIcon
    };
    let e = _.Z.getChannel(t),
      i = (null == e ? void 0 : e.parent_id) != null ? _.Z.getChannel(e.parent_id) : null;
    return {
      icon: null != e ? (0, T.KS)(e, n) : null,
      name: null == e ? void 0 : e.name,
      categoryName: null == i ? void 0 : i.name
    }
  }, [c, n, t]), h = l.useCallback(e => {
    t !== c && o(e)
  }, [c, t, o]);
  return null == I || null == N ? null : (0, i.jsxs)("div", {
    onContextMenu: h,
    className: R.identifier,
    children: [(0, i.jsx)(I, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: a()(R.channelIcon, R.image)
    }), (0, i.jsx)(u.Text, {
      className: R.roleName,
      color: "header-primary",
      variant: "text-md/normal",
      children: N
    }), null != m ? (0, i.jsxs)(u.Text, {
      className: R.tag,
      variant: "text-sm/normal",
      children: ["(", m, ")"]
    }) : null, s ? (0, i.jsx)(v, {
      tooltipText: r
    }) : null]
  })
}

function M(e) {
  var n;
  let {
    guild: s,
    id: r,
    isLocked: o,
    lockTooltipText: N
  } = e, E = (0, d.e7)([g.Z], () => g.Z.getRole(s.id, r)), T = (0, m.p9)({
    guildId: s.id,
    roleId: r,
    size: 24
  }), _ = l.useCallback(e => {
    if (null != s && null != E)(0, I.jW)(e, async () => {
      let {
        default: e
      } = await t.e("14486").then(t.bind(t, 786746));
      return n => (0, i.jsx)(e, {
        ...n,
        guild: s,
        role: E
      })
    })
  }, [s, E]);
  return (null == E ? void 0 : E.name) == null ? null : (0, i.jsxs)("div", {
    onContextMenu: _,
    className: R.identifier,
    children: [null != T ? (0, i.jsx)(x.Z, {
      className: a()(R.__invalid_icon, R.image),
      ...T
    }) : (0, i.jsx)(u.ShieldUserIcon, {
      size: "custom",
      width: 23,
      height: 23,
      className: a()(R.shield, R.image),
      color: null !== (n = E.colorString) && void 0 !== n ? n : (0, c.Rf)(S.p6O)
    }), (0, i.jsx)(u.Text, {
      className: R.roleName,
      color: "header-primary",
      variant: "text-md/normal",
      children: E.name
    }), o ? (0, i.jsx)(v, {
      tooltipText: N
    }) : null]
  })
}

function L(e) {
  let {
    guild: n,
    id: t,
    isLocked: l,
    lockTooltipText: s,
    openEntryContextMenu: a
  } = e, r = (0, d.e7)([A.default], () => A.default.getUser(t)), o = (0, d.e7)([h.ZP], () => {
    var e;
    return null === (e = h.ZP.getMember(n.id, t)) || void 0 === e ? void 0 : e.nick
  }, [n.id, t]), c = (0, d.e7)([O.Z], () => O.Z.hidePersonalInformation);
  return null == r ? null : (0, i.jsxs)("div", {
    onContextMenu: a,
    className: R.identifier,
    children: [(0, i.jsx)(u.Avatar, {
      className: R.image,
      src: r.getAvatarURL(n.id, 24),
      "aria-label": r.username,
      size: u.AvatarSizes.SIZE_24
    }), (0, i.jsx)(u.Text, {
      className: R.roleName,
      color: "header-primary",
      variant: "text-md/normal",
      children: null != o ? o : r.username
    }), c ? null : (0, i.jsx)(u.Text, {
      className: R.tag,
      variant: "text-sm/normal",
      children: C.ZP.getUserTag(r)
    }), l ? (0, i.jsx)(v, {
      tooltipText: s
    }) : null]
  })
}

function v(e) {
  let {
    tooltipText: n
  } = e;
  return (0, i.jsx)(u.Tooltip, {
    text: n,
    children: e => (0, i.jsx)("div", {
      className: R.lockIcon,
      ...e,
      children: (0, i.jsx)(u.LockIcon, {
        size: "xs",
        color: "currentColor"
      })
    })
  })
}
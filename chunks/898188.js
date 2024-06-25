n.d(t, {
  Z: function() {
    return S
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(748780),
  o = n(399606),
  c = n(481060),
  u = n(607070),
  d = n(933557),
  h = n(471445),
  m = n(592125),
  E = n(271383),
  p = n(526120),
  g = n(734893),
  f = n(655359),
  C = n(931261),
  _ = n(305762),
  I = n(689938),
  x = n(121568);

function T(e) {
  let {
    action: t
  } = e, n = (0, o.e7)([m.Z], () => m.Z.getChannel(t.channelId)), i = (0, d.ZP)(n, !0);
  return null == n ? (0, l.jsx)(c.Text, {
    variant: "text-xxs/normal",
    color: "header-secondary",
    children: I.Z.Messages.IN_CHANNEL.format({
      channelName: I.Z.Messages.UNKNOWN_CHANNEL_PLACEHOLDER
    })
  }) : (0, l.jsx)(c.Text, {
    variant: "text-xxs/normal",
    color: "header-secondary",
    children: I.Z.Messages.IN_CHANNEL.format({
      channelName: i
    })
  })
}

function N(e) {
  var t;
  let {
    channelId: n,
    emojiId: i,
    emojiName: s
  } = e, a = (0, o.e7)([m.Z], () => m.Z.getChannel(n));
  if (null == a) return null;
  let r = null !== (t = (0, h.KS)(a)) && void 0 !== t ? t : c.TextIcon;
  return (0, l.jsx)(_.Z, {
    emojiId: i,
    emojiName: s,
    size: _.R.MEDIUM,
    defaultComponent: (0, l.jsx)(r, {
      className: x.channelIcon
    })
  })
}

function Z(e) {
  var t, n, s, d;
  let {
    guildId: h,
    channel: m,
    className: E
  } = e, {
    channelAction: C,
    completed: _
  } = (0, f.P3)(h, m), Z = (0, f.K_)(h, null == C ? void 0 : C.channelId), S = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), v = (null == C ? void 0 : C.actionType) === g.oi.VIEW, A = (0, c.useToken)(c.tokens.colors.WHITE), [M, R] = i.useState(!1), [j] = i.useState(new r.Z.Value(0)), [L] = i.useState(new r.Z.Value(0));
  i.useEffect(() => {
    _ ? r.Z.timing(j, {
      toValue: 0,
      duration: S ? 1 : 350,
      easing: r.Z.Easing.quad,
      delay: v ? 0 : 500
    }).start(() => R(!0)) : r.Z.timing(j, {
      toValue: 1,
      duration: S ? 1 : 350,
      easing: r.Z.Easing.quad,
      delay: 400
    }).start()
  }, [_, j, v, S]), i.useEffect(() => {
    _ && M && r.Z.timing(L, {
      toValue: 1,
      duration: S ? 0 : 350,
      easing: r.Z.Easing.quad,
      delay: 400
    }).start()
  }, [_, L, M, S]);
  let O = i.useCallback(() => {
    null != Z && (0, p.gp)(h, Z.channelId)
  }, [h, Z]);
  return null == C || v && !M ? null : (0, l.jsx)("div", {
    className: a()(x.container, E),
    children: M && null != Z ? (0, l.jsx)(r.Z.div, {
      style: {
        marginBottom: L.interpolate({
          inputRange: [0, 1],
          outputRange: [-60, 0]
        })
      },
      children: (0, l.jsxs)(c.Clickable, {
        className: a()(x.banner, x.clickable),
        onClick: O,
        children: [(0, l.jsx)(N, {
          channelId: Z.channelId,
          emojiId: null === (t = Z.emoji) || void 0 === t ? void 0 : t.id,
          emojiName: null == Z ? void 0 : null === (n = Z.emoji) || void 0 === n ? void 0 : n.name
        }), (0, l.jsxs)("div", {
          className: x.text,
          children: [(0, l.jsx)(c.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: I.Z.Messages.MEMBER_ACTIONS_NEXT_STEP.format({
              step: Z.title
            })
          }), (0, l.jsx)(T, {
            action: Z
          })]
        }), (0, l.jsx)("div", {
          className: x.iconCircle,
          children: (0, l.jsx)(c.ArrowSmallRightIcon, {
            size: "xs",
            color: A.hex(),
            className: x.nextIcon
          })
        })]
      })
    }) : (0, l.jsxs)(r.Z.div, {
      className: x.banner,
      style: {
        marginBottom: j.interpolate({
          inputRange: [0, 1],
          outputRange: [-60, 0]
        })
      },
      children: [(0, l.jsx)(N, {
        channelId: C.channelId,
        emojiId: null === (s = C.emoji) || void 0 === s ? void 0 : s.id,
        emojiName: null == C ? void 0 : null === (d = C.emoji) || void 0 === d ? void 0 : d.name
      }), (0, l.jsxs)("div", {
        className: x.text,
        children: [(0, l.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: C.title
        }), (0, l.jsx)(c.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          children: I.Z.Messages.MEMBER_ACTION_CHAT
        })]
      }), _ ? (0, l.jsx)(c.CircleCheckIcon, {
        size: "custom",
        color: "currentColor",
        className: x.completed,
        secondaryColor: A.hex(),
        width: 20,
        height: 20
      }) : null]
    })
  })
}

function S(e) {
  let {
    guildId: t,
    channel: n,
    className: i
  } = e, s = (0, C.g)(t), a = (0, o.e7)([E.ZP], () => {
    var e;
    return (null === (e = E.ZP.getSelfMember(t)) || void 0 === e ? void 0 : e.isPending) === !0
  });
  return (0, f.PE)(t) || a || !s ? null : (0, l.jsx)(Z, {
    guildId: t,
    channel: n,
    className: i
  })
}
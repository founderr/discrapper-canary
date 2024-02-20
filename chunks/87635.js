"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("458960"),
  o = n("65597"),
  u = n("77078"),
  d = n("206230"),
  c = n("679653"),
  f = n("419830"),
  h = n("42203"),
  C = n("26989"),
  p = n("538137"),
  E = n("593195"),
  m = n("578706"),
  g = n("347895"),
  S = n("129092"),
  _ = n("726274"),
  T = n("290886"),
  A = n("205454"),
  M = n("782340"),
  N = n("490259");

function I(e) {
  let {
    action: t
  } = e, n = (0, o.default)([h.default], () => h.default.getChannel(t.channelId)), s = (0, c.default)(n, !0);
  return null == n ? (0, a.jsx)(u.Text, {
    variant: "text-xxs/normal",
    color: "header-secondary",
    children: M.default.Messages.IN_CHANNEL.format({
      channelName: M.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER
    })
  }) : (0, a.jsx)(u.Text, {
    variant: "text-xxs/normal",
    color: "header-secondary",
    children: M.default.Messages.IN_CHANNEL.format({
      channelName: s
    })
  })
}

function v(e) {
  var t;
  let {
    channelId: n,
    emojiId: s,
    emojiName: l
  } = e, i = (0, o.default)([h.default], () => h.default.getChannel(n));
  if (null == i) return null;
  let r = null !== (t = (0, f.getChannelIconComponent)(i)) && void 0 !== t ? t : E.default;
  return (0, a.jsx)(A.default, {
    emojiId: s,
    emojiName: l,
    size: A.CTAEmojiSize.MEDIUM,
    defaultComponent: (0, a.jsx)(r, {
      className: N.channelIcon
    })
  })
}

function L(e) {
  var t, n, l, c;
  let {
    guildId: f,
    channel: h,
    className: C
  } = e, {
    channelAction: E,
    completed: T
  } = (0, _.useMemberActionsForChannel)(f, h), A = (0, _.useNextMemberAction)(f, null == E ? void 0 : E.channelId), L = (0, o.default)([d.default], () => d.default.useReducedMotion), R = (null == E ? void 0 : E.actionType) === S.NewMemberActionTypes.VIEW, x = (0, u.useToken)(u.tokens.colors.WHITE), [y, O] = s.useState(!1), [D] = s.useState(new r.default.Value(0)), [P] = s.useState(new r.default.Value(0));
  s.useEffect(() => {
    T ? r.default.timing(D, {
      toValue: 0,
      duration: L ? 1 : 350,
      easing: r.default.Easing.quad,
      delay: R ? 0 : 500
    }).start(() => O(!0)) : r.default.timing(D, {
      toValue: 1,
      duration: L ? 1 : 350,
      easing: r.default.Easing.quad,
      delay: 400
    }).start()
  }, [T, D, R, L]), s.useEffect(() => {
    T && y && r.default.timing(P, {
      toValue: 1,
      duration: L ? 0 : 350,
      easing: r.default.Easing.quad,
      delay: 400
    }).start()
  }, [T, P, y, L]);
  let j = s.useCallback(() => {
    null != A && (0, g.selectNewMemberActionChannel)(f, A.channelId)
  }, [f, A]);
  return null == E || R && !y ? null : (0, a.jsx)("div", {
    className: i(N.container, C),
    children: y && null != A ? (0, a.jsx)(r.default.div, {
      style: {
        marginBottom: P.interpolate({
          inputRange: [0, 1],
          outputRange: [-60, 0]
        })
      },
      children: (0, a.jsxs)(u.Clickable, {
        className: i(N.banner, N.clickable),
        onClick: j,
        children: [(0, a.jsx)(v, {
          channelId: A.channelId,
          emojiId: null === (t = A.emoji) || void 0 === t ? void 0 : t.id,
          emojiName: null == A ? void 0 : null === (n = A.emoji) || void 0 === n ? void 0 : n.name
        }), (0, a.jsxs)("div", {
          className: N.text,
          children: [(0, a.jsx)(u.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: M.default.Messages.MEMBER_ACTIONS_NEXT_STEP.format({
              step: A.title
            })
          }), (0, a.jsx)(I, {
            action: A
          })]
        }), (0, a.jsx)("div", {
          className: N.iconCircle,
          children: (0, a.jsx)(p.default, {
            width: 16,
            height: 16,
            color: x.hex(),
            className: N.nextIcon
          })
        })]
      })
    }) : (0, a.jsxs)(r.default.div, {
      className: N.banner,
      style: {
        marginBottom: D.interpolate({
          inputRange: [0, 1],
          outputRange: [-60, 0]
        })
      },
      children: [(0, a.jsx)(v, {
        channelId: E.channelId,
        emojiId: null === (l = E.emoji) || void 0 === l ? void 0 : l.id,
        emojiName: null == E ? void 0 : null === (c = E.emoji) || void 0 === c ? void 0 : c.name
      }), (0, a.jsxs)("div", {
        className: N.text,
        children: [(0, a.jsx)(u.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: E.title
        }), (0, a.jsx)(u.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          children: M.default.Messages.MEMBER_ACTION_CHAT
        })]
      }), T ? (0, a.jsx)(m.default, {
        className: N.completed,
        backgroundColor: x.hex(),
        width: 20,
        height: 20
      }) : null]
    })
  })
}

function R(e) {
  let {
    guildId: t,
    channel: n,
    className: s
  } = e, l = (0, T.useCanSeeOnboardingHome)(t), i = (0, o.default)([C.default], () => {
    var e;
    return (null === (e = C.default.getSelfMember(t)) || void 0 === e ? void 0 : e.isPending) === !0
  }), r = (0, _.useAllActionsCompleted)(t);
  return r || i || !l ? null : (0, a.jsx)(L, {
    guildId: t,
    channel: n,
    className: s
  })
}
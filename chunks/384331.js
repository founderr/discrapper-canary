i.r(t), i.d(t, {
  FailedChannelRow: function() {
    return b
  },
  FailedGroupDMRow: function() {
    return p
  },
  FailedUserRow: function() {
    return N
  },
  ForwardFailedAlertModal: function() {
    return x
  }
});
var a = i(735250),
  n = i(470079),
  l = i(442837),
  s = i(481060),
  r = i(700582),
  d = i(933557),
  u = i(266076),
  c = i(592125),
  o = i(430824),
  A = i(158776),
  I = i(699516),
  S = i(594174),
  E = i(104175),
  _ = i(51144),
  g = i(912332),
  L = i(689938),
  f = i(666106);

function h(e) {
  let {
    icon: t,
    label: i
  } = e;
  return (0, a.jsxs)("div", {
    className: f.failedRow,
    children: [t, (0, a.jsx)(s.Text, {
      className: f.label,
      variant: "text-md/medium",
      lineClamp: 1,
      children: i
    })]
  })
}

function p(e) {
  let {
    channel: t
  } = e, i = (0, d.ZP)(t);
  return (0, a.jsx)(h, {
    icon: (0, a.jsx)(u.Z, {
      "aria-hidden": !0,
      size: s.AvatarSizes.SIZE_32,
      channel: t,
      experimentLocation: "forward-failed-retry-modal"
    }),
    label: i
  })
}

function N(e) {
  let {
    user: t
  } = e, i = _.ZP.useName(t), n = (0, l.e7)([I.Z], () => I.Z.getNickname(t.id)), d = (0, l.e7)([A.Z], () => A.Z.getStatus(t.id));
  return (0, a.jsx)(h, {
    icon: (0, a.jsx)(r.Z, {
      "aria-hidden": !0,
      size: s.AvatarSizes.SIZE_32,
      user: t,
      status: d
    }),
    label: null != n ? n : i
  })
}

function b(e) {
  let {
    channel: t
  } = e, i = (0, l.e7)([o.Z], () => o.Z.getGuild(null == t ? void 0 : t.guild_id)), n = (0, d.ZP)(t);
  return (0, a.jsx)(h, {
    icon: (0, a.jsx)(E.Z, {
      size: E.E.SMALL_32,
      guild: i,
      channel: t
    }),
    label: n
  })
}

function T(e) {
  let {
    destination: t
  } = e, {
    channel: i,
    user: n
  } = (0, l.cj)([c.Z, S.default], () => ({
    channel: "channel" === t.type ? c.Z.getChannel(t.id) : null,
    user: "user" === t.type ? S.default.getUser(t.id) : null
  }));
  if (null == i ? void 0 : i.isGroupDM()) return (0, a.jsx)(p, {
    channel: i
  });
  if (null != n) return (0, a.jsx)(N, {
    user: n
  });
  if (null != i) return (0, a.jsx)(b, {
    channel: i
  });
  return null
}

function x(e) {
  let {
    messageId: t,
    channelId: i,
    failedDestinations: l,
    forwardOptions: r,
    ...d
  } = e, u = n.useCallback(() => {
    (0, g.l8)({
      messageId: t,
      channelId: i,
      source: "retry-modal",
      initialSelectedDestinations: l,
      forwardOptions: r
    })
  }, [i, l, t, r]);
  return (0, a.jsxs)(s.ConfirmModal, {
    header: L.Z.Messages.MESSAGE_FORWARD_FAILED,
    confirmText: L.Z.Messages.RETRY,
    cancelText: L.Z.Messages.CANCEL,
    confirmButtonColor: s.Button.Colors.BRAND,
    onConfirm: u,
    ...d,
    children: [(0, a.jsx)(s.Text, {
      variant: "text-md/medium",
      children: L.Z.Messages.MESSAGE_FORWARD_FAILED_BODY.format({
        count: l.length
      })
    }), (0, a.jsx)("div", {
      className: f.failedDestinations,
      children: l.map((e, t) => (0, a.jsx)(T, {
        destination: e
      }, t))
    })]
  })
}
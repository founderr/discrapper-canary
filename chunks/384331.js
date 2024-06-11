"use strict";
a.r(t), a.d(t, {
  FailedChannelRow: function() {
    return N
  },
  FailedGroupDMRow: function() {
    return p
  },
  FailedUserRow: function() {
    return D
  },
  ForwardFailedAlertModal: function() {
    return F
  }
});
var i = a("735250"),
  s = a("470079"),
  n = a("442837"),
  l = a("481060"),
  r = a("700582"),
  d = a("933557"),
  u = a("266076"),
  o = a("592125"),
  c = a("430824"),
  I = a("158776"),
  A = a("699516"),
  _ = a("594174"),
  E = a("104175"),
  f = a("51144"),
  S = a("912332"),
  L = a("689938"),
  h = a("969170");

function g(e) {
  let {
    icon: t,
    label: a
  } = e;
  return (0, i.jsxs)("div", {
    className: h.failedRow,
    children: [t, (0, i.jsx)(l.Text, {
      className: h.label,
      variant: "text-md/medium",
      lineClamp: 1,
      children: a
    })]
  })
}

function p(e) {
  let {
    channel: t
  } = e, a = (0, d.default)(t);
  return (0, i.jsx)(g, {
    icon: (0, i.jsx)(u.default, {
      "aria-hidden": !0,
      size: l.AvatarSizes.SIZE_32,
      channel: t,
      experimentLocation: "forward-failed-retry-modal"
    }),
    label: a
  })
}

function D(e) {
  let {
    user: t
  } = e, a = f.default.useName(t), s = (0, n.useStateFromStores)([A.default], () => A.default.getNickname(t.id)), d = (0, n.useStateFromStores)([I.default], () => I.default.getStatus(t.id));
  return (0, i.jsx)(g, {
    icon: (0, i.jsx)(r.default, {
      "aria-hidden": !0,
      size: l.AvatarSizes.SIZE_32,
      user: t,
      status: d
    }),
    label: null != s ? s : a
  })
}

function N(e) {
  let {
    channel: t
  } = e, a = (0, n.useStateFromStores)([c.default], () => c.default.getGuild(null == t ? void 0 : t.guild_id)), s = (0, d.default)(t);
  return (0, i.jsx)(g, {
    icon: (0, i.jsx)(E.default, {
      size: E.GuildIconWithChannelTypeSizes.SMALL_32,
      guild: a,
      channel: t
    }),
    label: s
  })
}

function T(e) {
  let {
    destination: t
  } = e, {
    channel: a,
    user: s
  } = (0, n.useStateFromStoresObject)([o.default, _.default], () => ({
    channel: "channel" === t.type ? o.default.getChannel(t.id) : null,
    user: "user" === t.type ? _.default.getUser(t.id) : null
  }));
  if (null == a ? void 0 : a.isGroupDM()) return (0, i.jsx)(p, {
    channel: a
  });
  if (null != s) return (0, i.jsx)(D, {
    user: s
  });
  if (null != a) return (0, i.jsx)(N, {
    channel: a
  });
  return null
}

function F(e) {
  let {
    messageId: t,
    channelId: a,
    failedDestinations: n,
    forwardOptions: r,
    ...d
  } = e, u = s.useCallback(() => {
    (0, S.openForwardModal)({
      messageId: t,
      channelId: a,
      source: "retry-modal",
      initialSelectedDestinations: n,
      forwardOptions: r
    })
  }, [a, n, t, r]);
  return (0, i.jsxs)(l.ConfirmModal, {
    header: L.default.Messages.MESSAGE_FORWARD_FAILED,
    confirmText: L.default.Messages.RETRY,
    cancelText: L.default.Messages.CANCEL,
    confirmButtonColor: l.Button.Colors.BRAND,
    onConfirm: u,
    ...d,
    children: [(0, i.jsx)(l.Text, {
      variant: "text-md/medium",
      children: L.default.Messages.MESSAGE_FORWARD_FAILED_BODY.format({
        count: n.length
      })
    }), (0, i.jsx)("div", {
      className: h.failedDestinations,
      children: n.map((e, t) => (0, i.jsx)(T, {
        destination: e
      }, t))
    })]
  })
}
"use strict";
l.r(t), l.d(t, {
  DestinationList: function() {
    return k
  }
});
var s = l("735250"),
  a = l("470079"),
  n = l("120356"),
  i = l.n(n),
  u = l("913527"),
  r = l.n(u),
  o = l("442837"),
  d = l("907450"),
  c = l("352903"),
  f = l("481060"),
  A = l("700582"),
  _ = l("212819"),
  E = l("933557"),
  p = l("266076"),
  I = l("448486"),
  S = l("987509"),
  h = l("592125"),
  m = l("430824"),
  T = l("158776"),
  g = l("306680"),
  y = l("699516"),
  C = l("594174"),
  N = l("104175"),
  L = l("55935"),
  R = l("823379"),
  b = l("51144"),
  D = l("784384"),
  M = l("490897"),
  O = l("715270");

function v(e) {
  let {
    destination: t,
    icon: l,
    label: n,
    subLabel: u,
    selected: r,
    disabled: o,
    onPressDestination: d,
    "aria-setsize": c,
    "aria-posinset": A
  } = e, _ = a.useCallback(() => {
    null == d || d(t)
  }, [d, t]);
  return (0, s.jsxs)(f.Clickable, {
    className: i()(O.destinationRow, {
      [O.disabled]: o
    }),
    onClick: o ? void 0 : _,
    role: "option",
    "aria-selected": r,
    "aria-setsize": c,
    "aria-posinset": A,
    children: [(0, s.jsxs)("div", {
      className: O.identity,
      children: [(0, s.jsx)("div", {
        className: O.iconWrapper,
        children: l
      }), (0, s.jsxs)("div", {
        className: O.labels,
        children: [(0, s.jsx)(f.Text, {
          tag: "strong",
          className: O.label,
          variant: "text-md/semibold",
          lineClamp: 1,
          children: n
        }), (0, s.jsx)(f.Text, {
          className: O.subLabel,
          variant: "text-xs/normal",
          children: u
        })]
      })]
    }), !o && (0, s.jsx)(f.Checkbox, {
      type: f.Checkbox.Types.INVERTED,
      displayOnly: !0,
      size: 24,
      value: r,
      className: O.checkbox
    })]
  })
}

function x(e) {
  let {
    user: t,
    subLabel: l,
    ...a
  } = e, n = b.default.useName(t), i = b.default.useUserTag(t, {
    decoration: "auto"
  }), u = (0, o.useStateFromStores)([y.default], () => y.default.getNickname(t.id)), r = (0, o.useStateFromStores)([T.default], () => T.default.getStatus(t.id));
  return (0, s.jsx)(v, {
    ...a,
    icon: (0, s.jsx)(A.default, {
      "aria-hidden": !0,
      size: f.AvatarSizes.SIZE_32,
      user: t,
      status: r
    }),
    label: null != u ? u : n,
    subLabel: null != l ? l : i
  })
}

function F(e) {
  let {
    channel: t,
    subLabel: l,
    ...a
  } = e, n = (0, E.default)(t), i = (0, I.useRecipientsLabel)(t);
  return (0, s.jsx)(v, {
    ...a,
    icon: (0, s.jsx)(p.default, {
      "aria-hidden": !0,
      size: f.AvatarSizes.SIZE_32,
      channel: t,
      experimentLocation: "forward-modal"
    }),
    label: n,
    subLabel: null != l ? l : i
  })
}

function P(e) {
  let {
    channel: t,
    subLabel: l,
    ...a
  } = e, n = (0, o.useStateFromStores)([m.default], () => m.default.getGuild(null == t ? void 0 : t.guild_id)), i = (0, E.default)(t), u = (0, o.useStateFromStores)([h.default, C.default, y.default], () => {
    let e = h.default.getChannel(t.parent_id);
    return null == e ? null : (0, E.computeChannelName)(e, C.default, y.default, !1)
  }), A = (0, o.useStateFromStores)([g.default], () => g.default.lastMessageTimestamp(t.id, M.ReadStateTypes.CHANNEL)), _ = null == n ? void 0 : n.name;
  if (t.isThread() || t.isForumPost()) {
    let e = t.isForumPost() ? d.ForumIcon : c.TextIcon;
    _ = (0, s.jsxs)("div", {
      className: O.threadSubLabel,
      children: [(0, s.jsx)(e, {
        color: f.tokens.colors.TEXT_SECONDARY,
        className: O.subLabelIcon
      }), (0, s.jsx)(f.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        lineClamp: 1,
        children: u
      }), null != A ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(f.Text, {
          className: O.subLabelSeparator,
          variant: "text-xs/medium",
          color: "text-secondary",
          children: "•"
        }), (0, s.jsx)(f.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          children: (0, L.calendarFormatCompact)(r()(A))
        })]
      }) : null]
    })
  }
  return (0, s.jsx)(v, {
    ...a,
    icon: (0, s.jsx)(N.default, {
      size: N.GuildIconWithChannelTypeSizes.SMALL_32,
      guild: n,
      channel: t
    }),
    label: i,
    subLabel: null != l ? l : _
  })
}

function k(e) {
  let {
    rowData: t,
    message: l,
    originChannel: n,
    selectedDestinations: i,
    handleToggleDestination: u,
    disableSelection: r,
    ...o
  } = e, d = a.useMemo(() => [t.length], [t.length]), c = a.useCallback(() => 48, []), A = a.useMemo(() => {
    var e;
    return null !== (e = null == i ? void 0 : i.map(S.destinationKey)) && void 0 !== e ? e : []
  }, [i]), E = a.useCallback(e => {
    let {
      section: a,
      row: i
    } = e;
    if (a > 0) return;
    let {
      type: o,
      record: d
    } = t[i];
    if (o === _.AutocompleterResultTypes.HEADER) return;
    let c = o === _.AutocompleterResultTypes.USER ? {
        type: "user",
        id: d.id
      } : {
        type: "channel",
        id: d.id
      },
      f = (0, S.destinationKey)(c),
      E = (0, D.getDestinationIsUnavailable)(l, n, d),
      p = A.includes(f),
      I = {
        key: f,
        destination: c,
        subLabel: null != E ? E.label : void 0,
        disabled: r && !p || null != E,
        selected: p,
        onPressDestination: u,
        "aria-posinset": i + 1,
        "aria-setsize": t.length
      };
    if (o === _.AutocompleterResultTypes.USER) return (0, s.jsx)(x, {
      user: d,
      ...I
    });
    if (o === _.AutocompleterResultTypes.GROUP_DM) return (0, s.jsx)(F, {
      channel: d,
      ...I
    });
    if (o === _.AutocompleterResultTypes.TEXT_CHANNEL || o === _.AutocompleterResultTypes.VOICE_CHANNEL) return (0, s.jsx)(P, {
      channel: d,
      ...I
    });
    (0, R.assertNever)(o)
  }, [r, u, l, n, t, A]);
  return (0, s.jsx)(f.ModalListContent, {
    ...o,
    sections: d,
    sectionHeight: 0,
    renderRow: E,
    rowHeight: c
  })
}
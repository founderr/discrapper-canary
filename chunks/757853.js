"use strict";
l.r(t), l.d(t, {
  DestinationList: function() {
    return U
  }
});
var s = l("735250"),
  a = l("470079"),
  n = l("120356"),
  i = l.n(n),
  u = l("913527"),
  r = l.n(u),
  o = l("91192"),
  d = l("442837"),
  c = l("907450"),
  f = l("352903"),
  A = l("481060"),
  _ = l("700582"),
  E = l("724757"),
  p = l("212819"),
  I = l("933557"),
  S = l("266076"),
  h = l("448486"),
  m = l("987509"),
  T = l("592125"),
  g = l("430824"),
  y = l("158776"),
  C = l("306680"),
  N = l("699516"),
  L = l("594174"),
  R = l("104175"),
  b = l("55935"),
  D = l("823379"),
  M = l("51144"),
  O = l("784384"),
  v = l("490897"),
  x = l("715270");

function F(e) {
  let {
    destination: t,
    icon: l,
    label: n,
    subLabel: u,
    selected: r,
    disabled: d,
    onPressDestination: c,
    "aria-setsize": f,
    "aria-posinset": _
  } = e, E = a.useCallback(() => {
    null == c || c(t)
  }, [c, t]), p = (0, o.useListItem)(t.id);
  return (0, s.jsxs)(A.Clickable, {
    className: i()(x.destinationRow, {
      [x.disabled]: d
    }),
    onClick: d ? void 0 : E,
    "aria-selected": r,
    "aria-setsize": f,
    "aria-posinset": _,
    ...p,
    children: [(0, s.jsxs)("div", {
      className: x.identity,
      children: [(0, s.jsx)("div", {
        className: x.iconWrapper,
        children: l
      }), (0, s.jsxs)("div", {
        className: x.labels,
        children: [(0, s.jsx)(A.Text, {
          tag: "strong",
          className: x.label,
          variant: "text-md/semibold",
          lineClamp: 1,
          children: n
        }), (0, s.jsx)(A.Text, {
          className: x.subLabel,
          variant: "text-xs/normal",
          children: u
        })]
      })]
    }), !d && (0, s.jsx)(A.Checkbox, {
      type: A.Checkbox.Types.INVERTED,
      displayOnly: !0,
      size: 24,
      value: r,
      className: x.checkbox
    })]
  })
}

function P(e) {
  let {
    user: t,
    subLabel: l,
    ...a
  } = e, n = M.default.useName(t), i = M.default.useUserTag(t, {
    decoration: "auto"
  }), u = (0, d.useStateFromStores)([N.default], () => N.default.getNickname(t.id)), r = (0, d.useStateFromStores)([y.default], () => y.default.getStatus(t.id));
  return (0, s.jsx)(F, {
    ...a,
    icon: (0, s.jsx)(_.default, {
      "aria-hidden": !0,
      size: A.AvatarSizes.SIZE_32,
      user: t,
      status: r
    }),
    label: null != u ? u : n,
    subLabel: null != l ? l : i
  })
}

function k(e) {
  let {
    channel: t,
    subLabel: l,
    ...a
  } = e, n = (0, I.default)(t), i = (0, h.useRecipientsLabel)(t);
  return (0, s.jsx)(F, {
    ...a,
    icon: (0, s.jsx)(S.default, {
      "aria-hidden": !0,
      size: A.AvatarSizes.SIZE_32,
      channel: t,
      experimentLocation: "forward-modal"
    }),
    label: n,
    subLabel: null != l ? l : i
  })
}

function G(e) {
  let {
    channel: t,
    subLabel: l,
    ...a
  } = e, n = (0, d.useStateFromStores)([g.default], () => g.default.getGuild(null == t ? void 0 : t.guild_id)), i = (0, I.default)(t), u = (0, d.useStateFromStores)([T.default, L.default, N.default], () => {
    let e = T.default.getChannel(t.parent_id);
    return null == e ? null : (0, I.computeChannelName)(e, L.default, N.default, !1)
  }), o = (0, d.useStateFromStores)([C.default], () => C.default.lastMessageTimestamp(t.id, v.ReadStateTypes.CHANNEL)), _ = null == n ? void 0 : n.name;
  if (t.isThread() || t.isForumPost()) {
    let e = t.isForumPost() ? c.ForumIcon : f.TextIcon;
    _ = (0, s.jsxs)("div", {
      className: x.threadSubLabel,
      children: [(0, s.jsx)(e, {
        color: A.tokens.colors.TEXT_SECONDARY,
        className: x.subLabelIcon
      }), (0, s.jsx)(A.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        lineClamp: 1,
        children: u
      }), null != o ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(A.Text, {
          className: x.subLabelSeparator,
          variant: "text-xs/medium",
          color: "text-secondary",
          children: "•"
        }), (0, s.jsx)(A.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          children: (0, b.calendarFormatCompact)(r()(o))
        })]
      }) : null]
    })
  }
  return (0, s.jsx)(F, {
    ...a,
    icon: (0, s.jsx)(R.default, {
      size: R.GuildIconWithChannelTypeSizes.SMALL_32,
      guild: n,
      channel: t
    }),
    label: i,
    subLabel: null != l ? l : _
  })
}

function U(e) {
  let {
    rowData: t,
    message: l,
    originChannel: n,
    selectedDestinations: i,
    handleToggleDestination: u,
    disableSelection: r,
    ...d
  } = e, c = a.useMemo(() => [t.length], [t.length]), f = a.useCallback(() => 48, []), _ = a.useMemo(() => {
    var e;
    return null !== (e = null == i ? void 0 : i.map(m.destinationKey)) && void 0 !== e ? e : []
  }, [i]), I = a.useCallback(e => {
    let {
      section: a,
      row: i
    } = e;
    if (a > 0) return;
    let {
      type: o,
      record: d
    } = t[i];
    if (o === p.AutocompleterResultTypes.HEADER) return;
    let c = o === p.AutocompleterResultTypes.USER ? {
        type: "user",
        id: d.id
      } : {
        type: "channel",
        id: d.id
      },
      f = (0, m.destinationKey)(c),
      A = (0, O.getDestinationIsUnavailable)(l, n, d),
      E = _.includes(f),
      I = {
        key: f,
        destination: c,
        subLabel: null != A ? A.label : void 0,
        disabled: r && !E || null != A,
        selected: E,
        onPressDestination: u,
        "aria-posinset": i + 1,
        "aria-setsize": t.length
      };
    if (o === p.AutocompleterResultTypes.USER) return (0, s.jsx)(P, {
      user: d,
      ...I
    });
    if (o === p.AutocompleterResultTypes.GROUP_DM) return (0, s.jsx)(k, {
      channel: d,
      ...I
    });
    if (o === p.AutocompleterResultTypes.TEXT_CHANNEL || o === p.AutocompleterResultTypes.VOICE_CHANNEL) return (0, s.jsx)(G, {
      channel: d,
      ...I
    });
    (0, D.assertNever)(o)
  }, [r, u, l, n, t, _]), S = a.useRef(null), h = (0, E.default)("forward-modal", S);
  return (0, s.jsx)(o.ListNavigatorProvider, {
    navigator: h,
    children: (0, s.jsx)(o.ListNavigatorContainer, {
      children: e => {
        let {
          ref: t,
          ...l
        } = e;
        return (0, s.jsx)(A.ModalListContent, {
          scrollerRef: e => {
            var l;
            S.current = e, t.current = null !== (l = null == e ? void 0 : e.getScrollerNode()) && void 0 !== l ? l : null
          },
          ...l,
          ...d,
          sections: c,
          sectionHeight: 0,
          renderRow: I,
          rowHeight: f
        })
      }
    })
  })
}
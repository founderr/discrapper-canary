n.d(t, {
  F: function() {
    return F
  }
});
var l = n(735250),
  a = n(470079),
  s = n(120356),
  i = n.n(s),
  r = n(913527),
  u = n.n(r),
  o = n(91192),
  c = n(442837),
  d = n(481060),
  E = n(700582),
  _ = n(724757),
  h = n(212819),
  S = n(933557),
  f = n(266076),
  g = n(448486),
  A = n(987509),
  I = n(592125),
  p = n(430824),
  C = n(158776),
  m = n(306680),
  N = n(699516),
  T = n(594174),
  L = n(104175),
  b = n(55935),
  Z = n(823379),
  y = n(51144),
  x = n(784384),
  v = n(490897),
  R = n(971892);

function M(e) {
  let {
    destination: t,
    icon: n,
    label: s,
    subLabel: r,
    selected: u,
    disabled: c,
    onPressDestination: E,
    "aria-setsize": _,
    "aria-posinset": h
  } = e, S = a.useCallback(() => {
    null == E || E(t)
  }, [E, t]), f = (0, o.JA)(t.id);
  return (0, l.jsxs)(d.Clickable, {
    className: i()(R.destinationRow, {
      [R.disabled]: c
    }),
    onClick: c ? void 0 : S,
    "aria-selected": u,
    "aria-setsize": _,
    "aria-posinset": h,
    ...f,
    children: [(0, l.jsxs)("div", {
      className: R.identity,
      children: [(0, l.jsx)("div", {
        className: R.iconWrapper,
        children: n
      }), (0, l.jsxs)("div", {
        className: R.labels,
        children: [(0, l.jsx)(d.Text, {
          tag: "strong",
          className: R.label,
          variant: "text-md/semibold",
          lineClamp: 1,
          children: s
        }), (0, l.jsx)(d.Text, {
          className: R.subLabel,
          variant: "text-xs/normal",
          children: r
        })]
      })]
    }), !c && (0, l.jsx)(d.Checkbox, {
      type: d.Checkbox.Types.INVERTED,
      displayOnly: !0,
      size: 24,
      value: u,
      className: R.checkbox
    })]
  })
}

function P(e) {
  let {
    user: t,
    subLabel: n,
    ...a
  } = e, s = y.ZP.useName(t), i = y.ZP.useUserTag(t, {
    decoration: "never"
  }), r = (0, c.e7)([N.Z], () => N.Z.getNickname(t.id)), u = (0, c.e7)([C.Z], () => C.Z.getStatus(t.id));
  return (0, l.jsx)(M, {
    ...a,
    icon: (0, l.jsx)(E.Z, {
      "aria-hidden": !0,
      size: d.AvatarSizes.SIZE_32,
      user: t,
      status: u
    }),
    label: null != r ? r : s,
    subLabel: null != n ? n : i
  })
}

function O(e) {
  let {
    channel: t,
    subLabel: n,
    ...a
  } = e, s = (0, S.ZP)(t), i = (0, g._)(t);
  return (0, l.jsx)(M, {
    ...a,
    icon: (0, l.jsx)(f.Z, {
      "aria-hidden": !0,
      size: d.AvatarSizes.SIZE_32,
      channel: t,
      experimentLocation: "forward-modal"
    }),
    label: s,
    subLabel: null != n ? n : i
  })
}

function D(e) {
  let {
    channel: t,
    subLabel: n,
    ...a
  } = e, s = (0, c.e7)([p.Z], () => p.Z.getGuild(null == t ? void 0 : t.guild_id)), i = (0, S.ZP)(t), r = (0, c.e7)([I.Z, T.default, N.Z], () => {
    let e = I.Z.getChannel(t.parent_id);
    return null == e ? null : (0, S.F6)(e, T.default, N.Z, !1)
  }), o = (0, c.e7)([m.ZP], () => m.ZP.lastMessageTimestamp(t.id, v.W.CHANNEL)), E = null == s ? void 0 : s.name;
  if (t.isThread() || t.isForumPost()) {
    let e = t.isForumPost() ? d.ForumIcon : d.TextIcon;
    E = (0, l.jsxs)("div", {
      className: R.threadSubLabel,
      children: [(0, l.jsx)(e, {
        color: d.tokens.colors.TEXT_SECONDARY,
        className: R.subLabelIcon
      }), (0, l.jsx)(d.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        lineClamp: 1,
        children: r
      }), null != o ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(d.Text, {
          className: R.subLabelSeparator,
          variant: "text-xs/medium",
          color: "text-secondary",
          children: "•"
        }), (0, l.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          children: (0, b.Xf)(u()(o))
        })]
      }) : null]
    })
  }
  return (0, l.jsx)(M, {
    ...a,
    icon: (0, l.jsx)(L.Z, {
      size: L.E.SMALL_32,
      guild: s,
      channel: t
    }),
    label: i,
    subLabel: null != n ? n : E
  })
}

function F(e) {
  let {
    rowData: t,
    message: n,
    originChannel: s,
    selectedDestinations: i,
    handleToggleDestination: r,
    disableSelection: u,
    ...c
  } = e, E = a.useMemo(() => [t.length], [t.length]), S = a.useCallback(() => 48, []), f = a.useMemo(() => {
    var e;
    return null !== (e = null == i ? void 0 : i.map(A.hC)) && void 0 !== e ? e : []
  }, [i]), g = a.useCallback(e => {
    let {
      section: a,
      row: i
    } = e;
    if (a > 0) return;
    let {
      type: o,
      record: c
    } = t[i];
    if (o === h.h8.HEADER) return;
    let d = o === h.h8.USER ? {
        type: "user",
        id: c.id
      } : {
        type: "channel",
        id: c.id
      },
      E = (0, A.hC)(d),
      _ = (0, x.H)(n, s, c),
      S = f.includes(E),
      g = {
        key: E,
        destination: d,
        subLabel: null != _ ? _.label : void 0,
        disabled: u && !S || null != _,
        selected: S,
        onPressDestination: r,
        "aria-posinset": i + 1,
        "aria-setsize": t.length
      };
    if (o === h.h8.USER) return (0, l.jsx)(P, {
      user: c,
      ...g
    });
    if (o === h.h8.GROUP_DM) return (0, l.jsx)(O, {
      channel: c,
      ...g
    });
    if (o === h.h8.TEXT_CHANNEL || o === h.h8.VOICE_CHANNEL) return (0, l.jsx)(D, {
      channel: c,
      ...g
    });
    else(0, Z.vE)(o)
  }, [u, r, n, s, t, f]), I = a.useRef(null), p = (0, _.Z)("forward-modal", I);
  return (0, l.jsx)(o.bG, {
    navigator: p,
    children: (0, l.jsx)(o.SJ, {
      children: e => {
        let {
          ref: t,
          ...n
        } = e;
        return (0, l.jsx)(d.ModalListContent, {
          scrollerRef: e => {
            var n;
            I.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null
          },
          ...n,
          ...c,
          sections: E,
          sectionHeight: 0,
          renderRow: g,
          rowHeight: S
        })
      }
    })
  })
}
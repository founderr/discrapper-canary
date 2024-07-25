n.d(t, {
  F: function() {
return F;
  }
});
var l = n(735250),
  a = n(470079),
  i = n(120356),
  s = n.n(i),
  r = n(913527),
  c = n.n(r),
  u = n(91192),
  o = n(442837),
  d = n(481060),
  _ = n(700582),
  f = n(724757),
  h = n(212819),
  E = n(933557),
  g = n(266076),
  S = n(810123),
  I = n(448486),
  A = n(987509),
  p = n(592125),
  m = n(430824),
  C = n(158776),
  L = n(306680),
  b = n(699516),
  N = n(594174),
  T = n(55935),
  Z = n(823379),
  y = n(51144),
  x = n(784384),
  v = n(490897),
  R = n(803519);

function M(e) {
  let {
destination: t,
icon: n,
label: i,
subLabel: r,
selected: c,
disabled: o,
onPressDestination: _,
'aria-setsize': f,
'aria-posinset': h
  } = e, E = a.useCallback(() => {
null == _ || _(t);
  }, [
_,
t
  ]), g = (0, u.JA)(t.id);
  return (0, l.jsxs)(d.Clickable, {
className: s()(R.destinationRow, {
  [R.disabled]: o
}),
onClick: o ? void 0 : E,
'aria-selected': c,
'aria-setsize': f,
'aria-posinset': h,
...g,
children: [
  (0, l.jsxs)('div', {
    className: R.identity,
    children: [
      (0, l.jsx)('div', {
        className: R.iconWrapper,
        children: n
      }),
      (0, l.jsxs)('div', {
        className: R.labels,
        children: [
          (0, l.jsx)(d.Text, {
            tag: 'strong',
            className: R.label,
            variant: 'text-md/semibold',
            lineClamp: 1,
            children: i
          }),
          (0, l.jsx)(d.Text, {
            className: R.subLabel,
            variant: 'text-xs/normal',
            color: 'text-muted',
            children: r
          })
        ]
      })
    ]
  }),
  !o && (0, l.jsx)(d.Checkbox, {
    type: d.Checkbox.Types.INVERTED,
    displayOnly: !0,
    size: 24,
    value: c,
    className: R.checkbox
  })
]
  });
}

function D(e) {
  let {
user: t,
subLabel: n,
...a
  } = e, i = y.ZP.useName(t), s = y.ZP.useUserTag(t, {
decoration: 'never'
  }), r = (0, o.e7)([b.Z], () => b.Z.getNickname(t.id)), c = (0, o.e7)([C.Z], () => C.Z.getStatus(t.id));
  return (0, l.jsx)(M, {
...a,
icon: (0, l.jsx)(_.Z, {
  'aria-hidden': !0,
  size: d.AvatarSizes.SIZE_32,
  user: t,
  status: c
}),
label: null != r ? r : i,
subLabel: null != n ? n : s
  });
}

function P(e) {
  let {
channel: t,
subLabel: n,
...a
  } = e, i = (0, E.ZP)(t), s = (0, I._)(t);
  return (0, l.jsx)(M, {
...a,
icon: (0, l.jsx)(g.Z, {
  'aria-hidden': !0,
  size: d.AvatarSizes.SIZE_32,
  channel: t,
  experimentLocation: 'forward-modal'
}),
label: i,
subLabel: null != n ? n : s
  });
}

function O(e) {
  let {
channel: t,
subLabel: n,
...a
  } = e, i = (0, o.e7)([m.Z], () => m.Z.getGuild(null == t ? void 0 : t.guild_id)), s = (0, E.ZP)(t), r = (0, o.e7)([
p.Z,
N.default,
b.Z
  ], () => {
let e = p.Z.getChannel(t.parent_id);
return null == e ? null : (0, E.F6)(e, N.default, b.Z, !1);
  }), u = (0, o.e7)([L.ZP], () => L.ZP.lastMessageTimestamp(t.id, v.W.CHANNEL)), _ = null == i ? void 0 : i.name;
  if (t.isThread() || t.isForumPost()) {
let e = t.isForumPost() ? d.ForumIcon : d.TextIcon;
_ = (0, l.jsxs)('div', {
  className: R.threadSubLabel,
  children: [
    (0, l.jsx)(e, {
      color: d.tokens.colors.TEXT_SECONDARY,
      className: R.subLabelIcon
    }),
    (0, l.jsx)(d.Text, {
      variant: 'text-xs/medium',
      color: 'text-secondary',
      lineClamp: 1,
      children: r
    }),
    null != u ? (0, l.jsxs)(l.Fragment, {
      children: [
        (0, l.jsx)(d.Text, {
          className: R.subLabelSeparator,
          variant: 'text-xs/medium',
          color: 'text-secondary',
          children: '\u2022'
        }),
        (0, l.jsx)(d.Text, {
          variant: 'text-xs/medium',
          color: 'text-secondary',
          children: (0, T.Xf)(c()(u))
        })
      ]
    }) : null
  ]
});
  }
  return (0, l.jsx)(M, {
...a,
icon: (0, l.jsx)(S.Z, {
  size: S.E.SMALL_32,
  guild: i,
  channel: t
}),
label: s,
subLabel: null != n ? n : _
  });
}

function F(e) {
  let {
rowData: t,
message: n,
originChannel: i,
selectedDestinations: s,
handleToggleDestination: r,
disableSelection: c,
...o
  } = e, _ = a.useMemo(() => [t.length], [t.length]), E = a.useCallback(() => 48, []), g = a.useMemo(() => {
var e;
return null !== (e = null == s ? void 0 : s.map(A.hC)) && void 0 !== e ? e : [];
  }, [s]), S = a.useCallback(e => {
let {
  section: a,
  row: s
} = e;
if (a > 0)
  return;
let {
  type: u,
  record: o
} = t[s];
if (u === h.h8.HEADER)
  return;
let d = u === h.h8.USER ? {
    type: 'user',
    id: o.id
  } : {
    type: 'channel',
    id: o.id
  },
  _ = (0, A.hC)(d),
  f = (0, x.H)(n, i, o),
  E = g.includes(_),
  S = {
    key: _,
    destination: d,
    subLabel: null != f ? f.label : void 0,
    disabled: c && !E || null != f,
    selected: E,
    onPressDestination: r,
    'aria-posinset': s + 1,
    'aria-setsize': t.length
  };
if (u === h.h8.USER)
  return (0, l.jsx)(D, {
    user: o,
    ...S
  });
if (u === h.h8.GROUP_DM)
  return (0, l.jsx)(P, {
    channel: o,
    ...S
  });
if (u === h.h8.TEXT_CHANNEL || u === h.h8.VOICE_CHANNEL)
  return (0, l.jsx)(O, {
    channel: o,
    ...S
  });
else
  (0, Z.vE)(u);
  }, [
c,
r,
n,
i,
t,
g
  ]), I = a.useRef(null), p = (0, f.Z)('forward-modal', I);
  return (0, l.jsx)(u.bG, {
navigator: p,
children: (0, l.jsx)(u.SJ, {
  children: e => {
    let {
      ref: t,
      ...n
    } = e;
    return (0, l.jsx)(d.ModalListContent, {
      scrollerRef: e => {
        var n;
        I.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null;
      },
      ...n,
      ...o,
      sections: _,
      sectionHeight: 0,
      renderRow: S,
      rowHeight: E
    });
  }
})
  });
}
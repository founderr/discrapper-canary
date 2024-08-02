n.d(t, {
  F: function() {
return H;
  },
  G: function() {
return l;
  }
}), n(47120);
var l, a, i = n(735250),
  s = n(470079),
  r = n(120356),
  o = n.n(r),
  u = n(913527),
  c = n.n(u),
  d = n(91192),
  _ = n(442837),
  h = n(481060),
  f = n(700582),
  E = n(724757),
  g = n(212819),
  S = n(933557),
  A = n(266076),
  I = n(810123),
  p = n(448486),
  m = n(987509),
  C = n(592125),
  N = n(430824),
  L = n(158776),
  b = n(306680),
  T = n(699516),
  Z = n(594174),
  y = n(626135),
  x = n(55935),
  R = n(823379),
  v = n(51144),
  M = n(784384),
  D = n(981631),
  P = n(490897),
  O = n(689938),
  G = n(803519);

function F(e) {
  let {
message: t,
destination: n,
rowMode: l,
icon: a,
label: r,
subLabel: u,
selected: c,
disabled: _,
onPressDestination: f,
'aria-setsize': E,
'aria-posinset': g
  } = e, S = (0, d.JA)(n.id), [A, I] = s.useState(!1), p = s.useRef(!1), m = s.useCallback(() => {
if ('send' === l) {
  I(!0), p.current = !0;
  return;
}
null == f || f(n);
  }, [
l,
f,
n
  ]), C = s.useCallback(() => {
y.default.track(D.rMx.FORWARD_ONE_TAP_VIEW, {
  channel_id: t.channel_id,
  message_id: t.id
}), p.current = !1, null == f || f(n, {
  transitionToDestination: !0,
  closeAfterSend: !0
});
  }, [
t.channel_id,
t.id,
f,
n
  ]), N = s.useCallback(() => {
I(!1), p.current = !1, y.default.track(D.rMx.FORWARD_ONE_TAP_UNDO, {
  channel_id: t.channel_id,
  message_id: t.id
});
  }, [t]);
  return s.useEffect(() => () => {
p.current && (null == f || f(n, {
  transitionToDestination: !1,
  closeAfterSend: !1
}));
  }, [
n,
f
  ]), (0, i.jsxs)(h.Clickable, {
className: o()(G.destinationRow, {
  [G.disabled]: _
}),
onClick: _ || A ? void 0 : m,
'aria-selected': c,
'aria-setsize': E,
'aria-posinset': g,
...S,
children: [
  (0, i.jsxs)('div', {
    className: G.identity,
    children: [
      (0, i.jsx)('div', {
        className: G.iconWrapper,
        children: a
      }),
      (0, i.jsxs)('div', {
        className: G.labels,
        children: [
          (0, i.jsx)(h.Text, {
            tag: 'strong',
            className: G.label,
            variant: 'text-md/semibold',
            lineClamp: 1,
            children: r
          }),
          (0, i.jsx)(h.Text, {
            className: G.subLabel,
            variant: 'text-xs/normal',
            color: 'text-muted',
            children: u
          })
        ]
      })
    ]
  }),
  'toggle' === l && !_ && (0, i.jsx)(h.Checkbox, {
    type: h.Checkbox.Types.INVERTED,
    displayOnly: !0,
    size: 24,
    value: c,
    className: G.checkbox
  }),
  'send' === l && !_ && (0, i.jsxs)('div', {
    className: G.actions,
    children: [
      A ? (0, i.jsx)(h.Button, {
        size: h.Button.Sizes.SMALL,
        color: h.Button.Colors.PRIMARY,
        look: h.Button.Looks.LINK,
        onClick: C,
        children: O.Z.Messages.VIEW
      }) : (0, i.jsx)('div', {
        className: o()((0, h.getButtonStyle)({
          size: h.Button.Sizes.SMALL,
          color: h.Button.Colors.BRAND
        }), G.fauxButton),
        children: O.Z.Messages.SEND
      }),
      A && (0, i.jsx)(h.Button, {
        size: h.Button.Sizes.SMALL,
        color: h.Button.Colors.BRAND,
        look: h.Button.Looks.OUTLINED,
        onClick: N,
        children: O.Z.Messages.UNDO
      })
    ]
  })
]
  });
}

function k(e) {
  let {
user: t,
subLabel: n,
...l
  } = e, a = v.ZP.useName(t), s = v.ZP.useUserTag(t, {
decoration: 'never'
  }), r = (0, _.e7)([T.Z], () => T.Z.getNickname(t.id)), o = (0, _.e7)([L.Z], () => L.Z.getStatus(t.id));
  return (0, i.jsx)(F, {
...l,
icon: (0, i.jsx)(f.Z, {
  'aria-hidden': !0,
  size: h.AvatarSizes.SIZE_32,
  user: t,
  status: o
}),
label: null != r ? r : a,
subLabel: null != n ? n : s
  });
}

function U(e) {
  let {
channel: t,
subLabel: n,
...l
  } = e, a = (0, S.ZP)(t), s = (0, p._)(t);
  return (0, i.jsx)(F, {
...l,
icon: (0, i.jsx)(A.Z, {
  'aria-hidden': !0,
  size: h.AvatarSizes.SIZE_32,
  channel: t,
  experimentLocation: 'forward-modal'
}),
label: a,
subLabel: null != n ? n : s
  });
}

function j(e) {
  let {
channel: t,
subLabel: n,
...l
  } = e, a = (0, _.e7)([N.Z], () => N.Z.getGuild(null == t ? void 0 : t.guild_id)), s = (0, S.ZP)(t), r = (0, _.e7)([
C.Z,
Z.default,
T.Z
  ], () => {
let e = C.Z.getChannel(t.parent_id);
return null == e ? null : (0, S.F6)(e, Z.default, T.Z, !1);
  }), o = (0, _.e7)([b.ZP], () => b.ZP.lastMessageTimestamp(t.id, P.W.CHANNEL)), u = null == a ? void 0 : a.name;
  if (t.isThread() || t.isForumPost()) {
let e = t.isForumPost() ? h.ForumIcon : h.TextIcon;
u = (0, i.jsxs)('div', {
  className: G.threadSubLabel,
  children: [
    (0, i.jsx)(e, {
      color: h.tokens.colors.TEXT_SECONDARY,
      className: G.subLabelIcon
    }),
    (0, i.jsx)(h.Text, {
      variant: 'text-xs/medium',
      color: 'text-secondary',
      lineClamp: 1,
      children: r
    }),
    null != o ? (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(h.Text, {
          className: G.subLabelSeparator,
          variant: 'text-xs/medium',
          color: 'text-secondary',
          children: '\u2022'
        }),
        (0, i.jsx)(h.Text, {
          variant: 'text-xs/medium',
          color: 'text-secondary',
          children: (0, x.Xf)(c()(o))
        })
      ]
    }) : null
  ]
});
  }
  return (0, i.jsx)(F, {
...l,
icon: (0, i.jsx)(I.Z, {
  size: I.E.SMALL_32,
  guild: a,
  channel: t
}),
label: s,
subLabel: null != n ? n : u
  });
}

function H(e) {
  let {
rowData: t,
rowMode: n,
message: l,
originChannel: a,
selectedDestinations: r,
handleToggleDestination: o,
disableSelection: u,
...c
  } = e, _ = s.useMemo(() => [t.length], [t.length]), f = s.useCallback(() => 48, []), S = s.useMemo(() => {
var e;
return null !== (e = null == r ? void 0 : r.map(m.hC)) && void 0 !== e ? e : [];
  }, [r]), A = s.useCallback(e => {
let {
  section: s,
  row: r
} = e;
if (s > 0)
  return;
let {
  type: c,
  record: d
} = t[r];
if (c === g.h8.HEADER)
  return;
let _ = c === g.h8.USER ? {
    type: 'user',
    id: d.id
  } : {
    type: 'channel',
    id: d.id
  },
  h = (0, m.hC)(_),
  f = (0, M.H)(l, a, d),
  E = S.includes(h),
  A = {
    key: h,
    message: l,
    destination: _,
    rowMode: n,
    subLabel: null != f ? f.label : void 0,
    disabled: u && !E || null != f,
    selected: E,
    onPressDestination: o,
    'aria-posinset': r + 1,
    'aria-setsize': t.length
  };
if (c === g.h8.USER)
  return (0, i.jsx)(k, {
    user: d,
    ...A
  });
if (c === g.h8.GROUP_DM)
  return (0, i.jsx)(U, {
    channel: d,
    ...A
  });
if (c === g.h8.TEXT_CHANNEL || c === g.h8.VOICE_CHANNEL)
  return (0, i.jsx)(j, {
    channel: d,
    ...A
  });
else
  (0, R.vE)(c);
  }, [
u,
o,
l,
a,
t,
n,
S
  ]), I = s.useRef(null), p = (0, E.Z)('forward-modal', I);
  return (0, i.jsx)(d.bG, {
navigator: p,
children: (0, i.jsx)(d.SJ, {
  children: e => {
    let {
      ref: t,
      ...n
    } = e;
    return (0, i.jsx)(h.ModalListContent, {
      scrollerRef: e => {
        var n;
        I.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null;
      },
      ...n,
      ...c,
      sections: _,
      sectionHeight: 0,
      renderRow: A,
      rowHeight: f
    });
  }
})
  });
}
(a = l || (l = {})).TOGGLE = 'toggle', a.SEND = 'send';
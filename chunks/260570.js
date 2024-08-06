n.d(t, {
  Z: function() {
return M;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(338545),
  l = n(442837),
  u = n(846519),
  c = n(481060),
  d = n(788307),
  _ = n(607070),
  E = n(100527),
  f = n(906732),
  h = n(676035),
  p = n(633302),
  m = n(314897),
  I = n(158776),
  T = n(785717),
  g = n(277085),
  S = n(825801),
  A = n(215105),
  N = n(429974),
  v = n(228168),
  O = n(981631),
  R = n(689938),
  C = n(346050);
let y = 'text-sm/medium',
  D = 36,
  L = 144;

function b(e) {
  let {
statusActivity: t,
user: a,
guildId: h,
channelId: m,
profileType: I,
hasEntered: O = !0,
animate: b = !0,
editEnabled: M,
isReplySource: P,
onReply: U,
showReplyPopout: w = !1,
onClose: x
  } = e, {
analyticsLocations: G
  } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS), {
trackUserProfileAction: k
  } = (0, T.KZ)(), B = (0, l.e7)([_.Z], () => _.Z.useReducedMotion), [F] = i.useState(() => new u.V7()), [V, H] = i.useState(!0), Z = i.useRef(null), Y = i.useRef(null), j = i.useRef(null), W = i.useRef(null), {
emoji: K,
state: z
  } = null != t ? t : {}, q = null != z && '' !== z ? z : null, Q = null != q && q.length > 0, X = null != K, $ = X && !Q, J = X ? 1.25 : 0, ee = 18 + J, et = L + J, en = D + J, er = X || Q, ei = M && !er, ea = M && er, [es, eo] = i.useState($), [el, eu] = i.useState(!$), [ec, ed] = i.useState(!1);
  i.useLayoutEffect(() => {
if (null == Z.current || $)
  return;
let e = Z.current.getBoundingClientRect().height;
if (eo($ || e <= ee), O) {
  var t, n, r, i;
  let e = null !== (r = null === (t = Z.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : et,
    a = null !== (i = null === (n = j.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : en;
  eu(!$ && e > a), Y.current = e, W.current = a;
}
  }, [
O,
$,
ee,
et,
en
  ]);
  let [e_, eE] = (0, c.useSpring)(() => ({
maxHeight: ''.concat(en, 'px'),
config: {
  clamp: !0,
  duration: 150
}
  }));
  if (i.useEffect(() => () => F.stop(), [F]), !er && !ei)
return null;
  let ef = e => {
  var t, n;
  if (!!el) {
    if (e) {
      let e = Math.min(null !== (t = Y.current) && void 0 !== t ? t : et, et);
      eE({
        maxHeight: ''.concat(e, 'px'),
        delay: B ? 0 : 300,
        config: {
          clamp: !0,
          duration: B ? 0 : 150
        }
      });
    } else {
      let e = Math.min(null !== (n = W.current) && void 0 !== n ? n : en, en);
      eE({
        maxHeight: ''.concat(e, 'px'),
        delay: 0
      });
    }
    if (B) {
      H(!e);
      return;
    }
    F.start(e ? 300 : 150, () => {
      H(!e);
    });
  }
},
eh = () => X ? (0, r.jsx)(d.I, {
  className: Q ? C.statusEmojiInline : C.statusEmojiOnly,
  emoji: K,
  animate: b,
  hideTooltip: !1,
  tooltipDelay: v.vB
}) : null,
ep = () => Q ? (0, r.jsx)(c.Text, {
  variant: y,
  className: C.statusText,
  children: q
}) : null,
em = () => {
  let e = s()(C.content, {
    [C.clamp]: V,
    [C.unclamp]: !V,
    [C.singleLineAlign]: es
  });
  return (0, r.jsxs)(o.animated.div, {
    style: e_,
    className: e,
    children: [
      eh(),
      ep()
    ]
  });
},
eI = () => (0, r.jsxs)('div', {
  className: s()(C.content, C.clamp, C.placeholderWidth, {
    [C.panel]: I === v.y0.PANEL
  }),
  ref: j,
  children: [
    eh(),
    ep()
  ]
}),
eT = () => (0, r.jsxs)('div', {
  className: s()(C.content, C.unclamp, C.placeholderWidth, C.incorporeal, {
    [C.panel]: I === v.y0.PANEL
  }),
  ref: Z,
  children: [
    eh(),
    ep()
  ]
}),
eg = () => (0, r.jsxs)('div', {
  className: C.content,
  children: [
    (0, r.jsx)(c.CirclePlusIcon, {
      className: C.addStatusIcon,
      colorClass: C.addStatusIconColor
    }),
    (0, r.jsx)(c.Text, {
      variant: y,
      className: C.addStatusPrompt,
      children: R.Z.Messages.USER_SETTINGS_ADD_STATUS
    })
  ]
}),
eS = () => {
  var e;
  return ei ? R.Z.Messages.CUSTOM_STATUS_ADD_CUSTOM_STATUS_A11Y_LABEL : R.Z.Messages.CUSTOM_STATUS_CUSTOM_STATUS_A11Y_LABEL.format({
    emoji: null !== (e = null == K ? void 0 : K.name) && void 0 !== e ? e : '',
    status: z
  });
},
eA = () => {
  k({
    action: 'PRESS_ADD_CUSTOM_STATUS'
  }), null == x || x(), (0, c.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e('51714').then(n.bind(n, 211065));
    return t => (0, r.jsx)(e, {
      ...t,
      sourceAnalyticsLocations: G
    });
  });
},
eN = {
  [C.biteSize]: I === v.y0.BITE_SIZE,
  [C.fullSize]: I === v.y0.FULL_SIZE,
  [C.panel]: I === v.y0.PANEL
},
ev = s()(C.background, {
  [C.editable]: ea
}),
eO = {
  [C.hoisted]: P
},
eR = s()({
  [C.statusBubbleShape]: !Q && X || !es,
  [C.statusBubbleSingleLineWithTextShape]: es && Q || ei
}),
eC = s()(C.statusBubbleOuter, eN, eR, {
  [C.statusBubbleOuterAddStatusCursor]: ei
}),
ey = s()(C.statusBubble, eR, {
  [C.statusBubbleEmojiOnlyPadding]: $,
  [C.statusBubbleWithTextPadding]: Q || ei,
  [C.statusBubbleWithTextMinWidth]: Q,
  [C.statusBubbleCopyStatusCursor]: er
}),
eD = () => {
  if (X) {
    let e = null != K.id ? '`' + ':'.concat(K.name, ':') + '`' : p.ZP.translateSurrogatesToInlineEmoji(K.name);
    return $ ? ''.concat(e) : ''.concat(e, ' ').concat(z);
  }
  if (!$)
    return ''.concat(z);
},
eL = () => (0, r.jsxs)(c.ClickableContainer, {
  className: s()(C.visibleContainer, eN, ev, eO),
  'aria-label': eS(),
  focusProps: {
    ringClassName: eR
  },
  onClick: ei ? eA : void 0,
  onFocus: () => {
    ed(!0), ef(!0);
  },
  onBlur: e => {
    !e.currentTarget.contains(e.relatedTarget) && (ed(!1), ef(!1));
  },
  onMouseOver: () => {
    k({
      action: 'HOVER_CUSTOM_STATUS'
    }), ed(!0), ef(!0);
  },
  onMouseLeave: () => {
    ed(!1), ef(!1);
  },
  children: [
    (0, r.jsx)('div', {
      className: eC,
      children: (0, r.jsxs)('span', {
        className: ey,
        children: [
          er && em(),
          ei && eg()
        ]
      })
    }),
    er && (0, r.jsx)(S.Z, {
      user: a,
      sourceDetails: eD(),
      sourceType: v.N9.STATUS,
      isVisible: ec,
      isExpandable: el,
      onReply: U
    }),
    ea && (0, r.jsx)(g.Z, {
      isVisible: ec,
      isExpandable: el,
      onClose: x
    })
  ]
});
  return (0, r.jsxs)('div', {
children: [
  (0, r.jsx)('div', {
    className: s()(C.invisibleContainer, eN),
    children: (0, r.jsx)('div', {
      className: eC,
      children: (0, r.jsxs)('span', {
        className: ey,
        children: [
          ei && eg(),
          er && eI(),
          er && eT()
        ]
      })
    })
  }),
  (0, r.jsx)(c.Popout, {
    renderPopout: e => {
      let {
        setPopoutRef: t
      } = e;
      return (0, r.jsx)(A.Z, {
        user: a,
        guildId: h,
        channelId: m,
        profileType: I,
        sourceDetails: eD(),
        sourceType: v.N9.STATUS,
        setPopoutRef: t,
        modalKey: N.d,
        onReply: U
      });
    },
    animationPosition: 'top',
    position: 'bottom',
    align: 'center',
    spacing: 6,
    shouldShow: w,
    children: () => eL()
  })
]
  });
}

function M(e) {
  let {
user: t,
editEnabled: n,
...i
  } = e, a = (0, l.e7)([m.default], () => m.default.getId() === t.id), s = (0, h.a)(), o = (0, l.e7)([I.Z], () => I.Z.findActivity(t.id, e => {
let {
  type: t
} = e;
return t === O.IIU.CUSTOM_STATUS;
  })), {
analyticsLocations: u
  } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS);
  return (0, r.jsx)(f.Gt, {
value: u,
children: (0, r.jsx)(b, {
  user: t,
  editEnabled: n && a,
  statusActivity: n && a ? s : o,
  ...i
})
  });
}
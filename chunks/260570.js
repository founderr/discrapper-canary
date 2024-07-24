n.d(t, {
  Z: function() {
return b;
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
  N = n(228168),
  v = n(981631),
  O = n(689938),
  R = n(346050);
let C = 'text-sm/medium',
  y = 36,
  D = 144;

function L(e) {
  let {
statusActivity: t,
user: a,
profileType: h,
hasEntered: m = !0,
animate: I = !0,
editEnabled: v,
isReplying: L = !1,
onReply: b,
onClose: M
  } = e, {
analyticsLocations: P
  } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS), {
trackUserProfileAction: U
  } = (0, T.KZ)(), w = (0, l.e7)([_.Z], () => _.Z.useReducedMotion), [x] = i.useState(() => new u.V7()), [G, k] = i.useState(!0), B = i.useRef(null), F = i.useRef(null), V = i.useRef(null), H = i.useRef(null), {
emoji: Z,
state: Y
  } = null != t ? t : {}, j = null != Y && '' !== Y ? Y : null, W = null != j && j.length > 0, K = null != Z, z = K && !W, q = K ? 1.25 : 0, Q = 18 + q, X = D + q, $ = y + q, J = K || W, ee = v && !J, et = v && J, [en, er] = i.useState(z), [ei, ea] = i.useState(!z), [es, eo] = i.useState(!1);
  i.useLayoutEffect(() => {
if (null == B.current || z)
  return;
let e = B.current.getBoundingClientRect().height;
if (er(z || e <= Q), m) {
  var t, n, r, i;
  let e = null !== (r = null === (t = B.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : X,
    a = null !== (i = null === (n = V.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : $;
  ea(!z && e > a), F.current = e, H.current = a;
}
  }, [
m,
z,
Q,
X,
$
  ]);
  let [el, eu] = (0, o.useSpring)(() => ({
maxHeight: ''.concat($, 'px'),
config: {
  clamp: !0,
  duration: w ? 0 : 150
}
  }));
  if (i.useEffect(() => () => x.stop(), [x]), !J && !ee)
return null;
  let ec = e => {
  var t, n;
  if (!!ei) {
    if (e) {
      let e = Math.min(null !== (t = F.current) && void 0 !== t ? t : X, X);
      eu({
        maxHeight: ''.concat(e, 'px'),
        delay: w ? 0 : 300,
        config: {
          clamp: !0,
          duration: w ? 0 : 150
        }
      });
    } else {
      let e = Math.min(null !== (n = H.current) && void 0 !== n ? n : $, $);
      eu({
        maxHeight: ''.concat(e, 'px'),
        delay: 0
      });
    }
    if (w) {
      k(!e);
      return;
    }
    x.start(e ? 300 : 150, () => {
      k(!e);
    });
  }
},
ed = () => K ? (0, r.jsx)(d.I, {
  className: W ? R.statusEmojiInline : R.statusEmojiOnly,
  emoji: Z,
  animate: I,
  hideTooltip: !1,
  tooltipDelay: N.vB
}) : null,
e_ = () => W ? (0, r.jsx)(c.Text, {
  variant: C,
  className: R.statusText,
  children: j
}) : null,
eE = () => {
  let e = s()(R.content, {
    [R.clamp]: G,
    [R.unclamp]: !G,
    [R.singleLineAlign]: en
  });
  return (0, r.jsxs)(o.animated.div, {
    style: el,
    className: e,
    children: [
      ed(),
      e_()
    ]
  });
},
ef = () => (0, r.jsxs)('div', {
  className: s()(R.content, R.clamp, R.placeholderWidth, {
    [R.panel]: h === N.y0.PANEL
  }),
  ref: V,
  children: [
    ed(),
    e_()
  ]
}),
eh = () => (0, r.jsxs)('div', {
  className: s()(R.content, R.unclamp, R.placeholderWidth, R.incorporeal, {
    [R.panel]: h === N.y0.PANEL
  }),
  ref: B,
  children: [
    ed(),
    e_()
  ]
}),
ep = () => (0, r.jsxs)('div', {
  className: R.content,
  children: [
    (0, r.jsx)(c.CirclePlusIcon, {
      className: R.addStatusIcon,
      colorClass: R.addStatusIconColor
    }),
    (0, r.jsx)(c.Text, {
      variant: C,
      className: R.addStatusPrompt,
      children: O.Z.Messages.USER_SETTINGS_ADD_STATUS
    })
  ]
}),
em = () => {
  var e;
  return ee ? O.Z.Messages.CUSTOM_STATUS_ADD_CUSTOM_STATUS_A11Y_LABEL : O.Z.Messages.CUSTOM_STATUS_CUSTOM_STATUS_A11Y_LABEL.format({
    emoji: null !== (e = null == Z ? void 0 : Z.name) && void 0 !== e ? e : '',
    status: Y
  });
},
eI = () => {
  U({
    action: 'PRESS_ADD_CUSTOM_STATUS'
  }), null == M || M(), (0, c.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e('51714').then(n.bind(n, 211065));
    return t => (0, r.jsx)(e, {
      ...t,
      sourceAnalyticsLocations: P
    });
  });
},
eT = {
  [R.biteSize]: h === N.y0.BITE_SIZE,
  [R.fullSize]: h === N.y0.FULL_SIZE,
  [R.panel]: h === N.y0.PANEL
},
eg = s()(R.background, {
  [R.editable]: et
}),
eS = s()({
  [R.statusBubbleShape]: !W && K || !en,
  [R.statusBubbleSingleLineWithTextShape]: en && W || ee
}),
eA = s()(R.statusBubbleOuter, eT, eS, {
  [R.statusBubbleOuterAddStatusCursor]: ee
}),
eN = s()(R.statusBubble, eS, {
  [R.statusBubbleEmojiOnlyPadding]: z,
  [R.statusBubbleWithTextPadding]: W || ee,
  [R.statusBubbleWithTextMinWidth]: W,
  [R.statusBubbleCopyStatusCursor]: J
}),
ev = () => {
  if (K && (null == Z ? void 0 : Z.id) == null) {
    let e = p.ZP.translateSurrogatesToInlineEmoji(Z.name);
    return z ? ''.concat(e) : ''.concat(e, ' ').concat(Y);
  }
  if (!z)
    return ''.concat(Y);
};
  return (0, r.jsx)(c.Popout, {
renderPopout: e => {
  let {
    setPopoutRef: t
  } = e;
  return (0, r.jsx)(A.Z, {
    user: a,
    onReply: b,
    setPopoutRef: t
  });
},
animation: c.Popout.Animation.TRANSLATE,
animationPosition: 'top',
position: 'bottom',
align: 'center',
shouldShow: L,
children: () => (0, r.jsx)(f.Gt, {
  value: P,
  children: (0, r.jsxs)('div', {
    children: [
      (0, r.jsx)('div', {
        className: s()(R.invisibleContainer, eT),
        children: (0, r.jsx)('div', {
          className: eA,
          children: (0, r.jsxs)('span', {
            className: eN,
            children: [
              ee && ep(),
              J && ef(),
              J && eh()
            ]
          })
        })
      }),
      (0, r.jsxs)(c.ClickableContainer, {
        className: s()(R.visibleContainer, eT, eg),
        'aria-label': em(),
        focusProps: {
          ringClassName: eS
        },
        onClick: ee ? eI : void 0,
        onFocus: () => {
          eo(!0), ec(!0);
        },
        onBlur: e => {
          !e.currentTarget.contains(e.relatedTarget) && (eo(!1), ec(!1));
        },
        onMouseOver: () => {
          U({
            action: 'HOVER_CUSTOM_STATUS'
          }), eo(!0), ec(!0);
        },
        onMouseLeave: () => {
          eo(!1), ec(!1);
        },
        children: [
          (0, r.jsx)('div', {
            className: eA,
            children: (0, r.jsxs)('span', {
              className: eN,
              children: [
                J && eE(),
                ee && ep()
              ]
            })
          }),
          J && (0, r.jsx)(S.Z, {
            user: a,
            sourceDetails: ev(),
            sourceType: N.N9.STATUS,
            isVisible: es,
            isExpandable: ei,
            onReply: b
          }),
          et && (0, r.jsx)(g.Z, {
            isVisible: es,
            isExpandable: ei,
            onClose: M
          })
        ]
      })
    ]
  })
})
  });
}

function b(e) {
  let {
user: t,
editEnabled: n,
...i
  } = e, a = (0, l.e7)([m.default], () => m.default.getId() === t.id), s = (0, h.a)(), o = (0, l.e7)([I.Z], () => I.Z.findActivity(t.id, e => {
let {
  type: t
} = e;
return t === v.IIU.CUSTOM_STATUS;
  }));
  return (0, r.jsx)(L, {
user: t,
editEnabled: n && a,
statusActivity: n && a ? s : o,
...i
  });
}
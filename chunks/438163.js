n.d(t, {
  Z: function() {
return L;
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
  A = n(228168),
  N = n(981631),
  v = n(689938),
  O = n(230891);
let R = 'text-sm/medium',
  C = 36,
  y = 144;

function D(e) {
  var t;
  let {
statusActivity: a,
user: h,
profileType: m,
editEnabled: I,
reactReplyEnabled: N,
hasEntered: D = !0,
animate: L = !0,
onClose: b
  } = e, {
analyticsLocations: M
  } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS), {
trackUserProfileAction: P
  } = (0, T.KZ)(), U = (0, l.e7)([_.Z], () => _.Z.useReducedMotion), [w] = i.useState(() => new u.V7()), [x, G] = i.useState(!0), k = i.useRef(null), B = i.useRef(null), F = i.useRef(null), V = i.useRef(null), {
emoji: H,
state: Z
  } = null != a ? a : {}, Y = null != Z && '' !== Z ? Z : null, j = null != Y && Y.length > 0, W = null != H, K = W && !j, z = W ? 1.25 : 0, q = 18 + z, Q = y + z, X = C + z, $ = W || j, J = I && !$, ee = I && $, et = N && $, [en, er] = i.useState(K), [ei, ea] = i.useState(!K), [es, eo] = i.useState(!1);
  i.useLayoutEffect(() => {
if (null == k.current || K)
  return;
let e = k.current.getBoundingClientRect().height;
if (er(K || e <= q), D) {
  var t, n, r, i;
  let e = null !== (r = null === (t = k.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : Q,
    a = null !== (i = null === (n = F.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : X;
  ea(!K && e > a), B.current = e, V.current = a;
}
  }, [
D,
K,
q,
Q,
X
  ]);
  let [el, eu] = (0, o.useSpring)(() => ({
maxHeight: ''.concat(X, 'px'),
config: {
  clamp: !0,
  duration: U ? 0 : 150
}
  }));
  if (i.useEffect(() => () => w.stop(), [w]), !$ && !J)
return null;
  let ec = e => {
  var t, n;
  if (!!ei) {
    if (e) {
      let e = Math.min(null !== (t = B.current) && void 0 !== t ? t : Q, Q);
      eu({
        maxHeight: ''.concat(e, 'px'),
        delay: U ? 0 : 300,
        config: {
          clamp: !0,
          duration: U ? 0 : 150
        }
      });
    } else {
      let e = Math.min(null !== (n = V.current) && void 0 !== n ? n : X, X);
      eu({
        maxHeight: ''.concat(e, 'px'),
        delay: 0
      });
    }
    if (U) {
      G(!e);
      return;
    }
    w.start(e ? 300 : 150, () => {
      G(!e);
    });
  }
},
ed = () => W ? (0, r.jsx)(d.I, {
  className: j ? O.statusEmojiInline : O.statusEmojiOnly,
  emoji: H,
  animate: L,
  hideTooltip: !1,
  tooltipDelay: A.vB
}) : null,
e_ = () => j ? (0, r.jsx)(c.Text, {
  variant: R,
  className: O.statusText,
  children: Y
}) : null,
eE = () => (0, r.jsxs)('div', {
  className: O.content,
  children: [
    (0, r.jsx)(c.CirclePlusIcon, {
      className: O.addStatusIcon,
      colorClass: O.addStatusIconColor
    }),
    (0, r.jsx)(c.Text, {
      variant: R,
      className: O.addStatusPrompt,
      children: v.Z.Messages.USER_SETTINGS_ADD_STATUS
    })
  ]
}),
ef = {
  [O.biteSize]: m === A.y0.BITE_SIZE,
  [O.fullSize]: m === A.y0.FULL_SIZE,
  [O.panel]: m === A.y0.PANEL
},
eh = s()(O.background, {
  [O.editable]: ee
}),
ep = s()({
  [O.statusBubbleShape]: !j && W || !en,
  [O.statusBubbleSingleLineWithTextShape]: en && j || J
}),
em = s()(O.statusBubbleOuter, ef, ep, {
  [O.statusBubbleOuterAddStatusCursor]: J
}),
eI = s()(O.statusBubble, ep, {
  [O.statusBubbleEmojiOnlyPadding]: K,
  [O.statusBubbleWithTextPadding]: j || J,
  [O.statusBubbleWithTextMinWidth]: j,
  [O.statusBubbleCopyStatusCursor]: $
});
  return (0, r.jsx)(f.Gt, {
value: M,
children: (0, r.jsxs)('div', {
  children: [
    (0, r.jsx)('div', {
      className: s()(O.invisibleContainer, ef),
      children: (0, r.jsx)('div', {
        className: em,
        children: (0, r.jsxs)('span', {
          className: eI,
          children: [
            J && eE(),
            $ && (0, r.jsxs)('div', {
              className: s()(O.content, O.clamp, O.placeholderWidth, {
                [O.panel]: m === A.y0.PANEL
              }),
              ref: F,
              children: [
                ed(),
                e_()
              ]
            }),
            $ && (0, r.jsxs)('div', {
              className: s()(O.content, O.unclamp, O.placeholderWidth, O.incorporeal, {
                [O.panel]: m === A.y0.PANEL
              }),
              ref: k,
              children: [
                ed(),
                e_()
              ]
            })
          ]
        })
      })
    }),
    (0, r.jsxs)(c.ClickableContainer, {
      className: s()(O.visibleContainer, ef, eh),
      'aria-label': J ? v.Z.Messages.CUSTOM_STATUS_ADD_CUSTOM_STATUS_A11Y_LABEL : v.Z.Messages.CUSTOM_STATUS_CUSTOM_STATUS_A11Y_LABEL.format({
        emoji: null !== (t = null == H ? void 0 : H.name) && void 0 !== t ? t : '',
        status: Z
      }),
      focusProps: {
        ringClassName: ep
      },
      onClick: J ? () => {
        P({
          action: 'PRESS_ADD_CUSTOM_STATUS'
        }), null == b || b(), (0, c.openModalLazy)(async () => {
          let {
            default: e
          } = await n.e('51714').then(n.bind(n, 211065));
          return t => (0, r.jsx)(e, {
            ...t,
            sourceAnalyticsLocations: M
          });
        });
      } : void 0,
      onFocus: () => {
        eo(!0), ec(!0);
      },
      onBlur: e => {
        !e.currentTarget.contains(e.relatedTarget) && (eo(!1), ec(!1));
      },
      onMouseOver: () => {
        P({
          action: 'HOVER_CUSTOM_STATUS'
        }), eo(!0), ec(!0);
      },
      onMouseLeave: () => {
        eo(!1), ec(!1);
      },
      children: [
        (0, r.jsx)('div', {
          className: em,
          children: (0, r.jsxs)('span', {
            className: eI,
            children: [
              $ && (() => {
                let e = s()(O.content, {
                  [O.clamp]: x,
                  [O.unclamp]: !x,
                  [O.singleLineAlign]: en
                });
                return (0, r.jsxs)(o.animated.div, {
                  style: el,
                  className: e,
                  children: [
                    ed(),
                    e_()
                  ]
                });
              })(),
              J && eE()
            ]
          })
        }),
        et && (0, r.jsx)(S.Z, {
          user: h,
          sourceDetails: (() => {
            if (W && (null == H ? void 0 : H.id) == null) {
              let e = p.ZP.translateSurrogatesToInlineEmoji(H.name);
              return K ? ''.concat(e) : ''.concat(e, ' ').concat(Z);
            }
            if (!K)
              return ''.concat(Z);
          })(),
          sourceType: A.N9.STATUS,
          isVisible: es,
          isExpandable: ei
        }),
        ee && (0, r.jsx)(g.Z, {
          isVisible: es,
          isExpandable: ei,
          onClose: b
        })
      ]
    })
  ]
})
  });
}

function L(e) {
  let {
user: t,
editEnabled: n,
reactReplyEnabled: i,
...a
  } = e, s = (0, l.e7)([m.default], () => m.default.getId() === t.id), o = (0, h.a)(), u = (0, l.e7)([I.Z], () => I.Z.findActivity(t.id, e => {
let {
  type: t
} = e;
return t === N.IIU.CUSTOM_STATUS;
  }));
  return (0, r.jsx)(D, {
user: t,
reactReplyEnabled: i && !s,
editEnabled: n && s,
statusActivity: n && s ? o : u,
...a
  });
}
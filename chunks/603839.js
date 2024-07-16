n.d(t, {
  Z: function() {
return O;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(392711),
  o = n(338545),
  c = n(442837),
  d = n(481060),
  u = n(607070),
  _ = n(207796),
  E = n(889711),
  h = n(931240),
  I = n(970606),
  m = n(963202),
  g = n(650461),
  p = n(432632),
  T = n(35313),
  S = n(284019),
  f = n(672775),
  C = n(601463),
  N = n(192565),
  A = n(641037),
  v = n(689938),
  Z = n(433369);
let L = {
  mass: 1,
  tension: 600,
  friction: 60,
  clamp: !0
};

function O(e) {
  let {
guildId: t,
onClose: n
  } = e, s = (0, c.e7)([u.Z], () => u.Z.useReducedMotion), O = (0, g.Wg)(), {
progress: R,
errors: x,
submitting: b
  } = (0, c.cj)([g.ZP], () => {
var e, n, i, a;
return {
  progress: null !== (a = null === (e = g.ZP.getStateForGuild(t)) || void 0 === e ? void 0 : e.progress) && void 0 !== a ? a : O,
  errors: null === (n = g.ZP.getStateForGuild(t)) || void 0 === n ? void 0 : n.errors,
  submitting: null === (i = g.ZP.getStateForGuild(t)) || void 0 === i ? void 0 : i.submitting
};
  }), P = (0, p.N)(t, 'ClanSetupModal'), M = a.useMemo(() => (0, A.G)(x), [x]), [D, y] = a.useState(!1), [j, U] = a.useState(window.innerWidth), [G, k] = a.useState(1), [w, B] = a.useState(!0), H = (0, T.f)(), V = (0, o.useSpring)({
opacity: G,
config: L,
onStart: () => B(!0),
onRest: () => B(1 === G),
immediate: s
  }), F = (0, o.useSpring)({
transform: 'translateX('.concat(1 === G ? 0 : -1 * (j - 380) / 2 + 190, 'px)'),
config: L,
immediate: s
  }), Y = (0, d.useTransition)(0 === G, {
from: {
  opacity: 0
},
enter: {
  opacity: 1,
  delay: 500
},
config: L
  }), W = (0, d.useTransition)(0 === G, {
from: {
  opacity: 0
},
enter: {
  opacity: 1
},
leave: {
  opacity: 0
},
config: L
  }), z = a.useCallback(e => {
if (e === M.length)
  k(0), (0, I.Lp)(t, 'signature');
else if (0 === G)
  k(1);
else {
  var n;
  h._9(t, {
    currentStep: e,
    furthestStep: Math.max(null !== (n = R.furthestStep) && void 0 !== n ? n : 0, e)
  });
}
  }, [
G,
t,
R.furthestStep,
M.length
  ]);
  a.useEffect(() => {
(0, I.Lp)(t, (0, I.Qh)(R.currentStep));
  }, [
t,
R.currentStep
  ]), a.useEffect(() => {
let e = (0, E.pP)((0, l.debounce)(() => U(window.innerWidth), 250));
return (0, E.YP)(e, document.body), () => (0, E.UC)(e, document.body);
  }, [
G,
w
  ]), a.useEffect(() => {
null != P && (0, h._9)(t, {
  requiredGameId: P
});
  }, [
P,
t
  ]);
  let K = a.useMemo(() => null != x && Object.values(x).some(e => null != e), [x]),
q = a.useMemo(() => null != x && Object.values(x).length > 0 ? (0, A.G)(x).find(e => e.hasError) : null, [x]),
Q = a.useCallback(() => {
  k(1), h._9(t, {
    currentStep: null == q ? void 0 : q.index
  });
}, [
  null == q ? void 0 : q.index,
  t
]),
{
  guilds: X
} = (0, m.C3)({
  location: 'ClanDiscoveryAdminContainer',
  includeConverted: !1
}),
{
  enableApplication: J
} = (0, m.Fg)('ClanDiscoveryAdminContainer'),
$ = a.useCallback(() => {
  0 === X.filter(e => e.id !== t).length && J ? (0, _.fH)(_.v0.GET_STARTED) : (0, _.fH)(_.v0.ADMIN_UPSELL);
}, [
  X,
  t,
  J
]),
ee = a.useCallback(() => {
  (0, A.V)({
    guildId: t,
    onSuccess: () => {
      $(), n();
    },
    progress: R
  });
}, [
  t,
  R,
  $,
  n
]),
et = a.useRef(null),
en = null != q ? (0, i.jsxs)('div', {
  className: Z.tooltipContents,
  children: [
    (0, i.jsx)(d.WarningIcon, {
      size: 'xs',
      color: 'currentColor',
      className: Z.errorIcon
    }),
    (0, i.jsxs)('div', {
      children: [
        (0, i.jsx)(d.Text, {
          variant: 'text-sm/medium',
          color: 'header-primary',
          children: v.Z.Messages.CLAN_SUBMIT_ERROR_TITLE
        }),
        (0, i.jsx)(d.Text, {
          variant: 'text-xs/normal',
          color: 'text-muted',
          children: v.Z.Messages.CLAN_SUBMIT_ERROR_TEXT.format({
            backHook: (e, t) => (0, i.jsx)(d.Anchor, {
              className: Z.errorLink,
              onClick: Q,
              children: e
            }, t)
          })
        })
      ]
    })
  ]
}) : null;
  return (0, i.jsx)(o.animated.div, {
ref: et,
style: H,
className: Z.modal,
children: (0, i.jsxs)(d.FocusRingScope, {
  containerRef: et,
  children: [
    (0, i.jsx)(d.Button, {
      className: Z.close,
      look: d.Button.Looks.OUTLINED,
      size: d.Button.Sizes.MEDIUM,
      color: d.Button.Colors.PRIMARY,
      onClick: n,
      children: v.Z.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }),
    (0, i.jsxs)('div', {
      className: Z.content,
      children: [
        (0, i.jsxs)('div', {
          className: Z.panel,
          children: [
            (0, i.jsx)(o.animated.div, {
              style: V,
              className: r()(Z.stepsContainer, {
                [Z.hidden]: !w
              }),
              children: (0, i.jsx)(N.Z, {
                guildId: t
              })
            }),
            (0, i.jsx)('div', {
              className: r()(Z.navigationContainer, {
                [Z.elevatedNavigationContainer]: !w
              }),
              children: (0, i.jsx)(f.Z, {
                steps: M,
                progress: R,
                updateCurrentStep: z,
                animationStyle: V,
                animationClassName: r()({
                  [Z.hidden]: !w
                })
              })
            })
          ]
        }),
        (0, i.jsx)(o.animated.div, {
          style: V,
          className: r()(Z.divider, {
            [Z.hidden]: !w,
            [Z.dividerResponsive]: w
          })
        }),
        (0, i.jsx)(o.animated.div, {
          style: F,
          className: r()(Z.sidebar, {
            [Z.sidebarResponsive]: w
          }),
          children: (0, i.jsx)(C.Z, {
            guildId: t,
            signed: D,
            setSigned: w ? void 0 : y,
            sidebarWidth: 380,
            windowWidth: j,
            transition: Y,
            brandPrimaryColor: R.brandPrimaryColor
          })
        })
      ]
    }),
    W((e, t) => t && (0, i.jsx)(o.animated.div, {
      style: e,
      className: Z.submit,
      children: (0, i.jsx)(d.Tooltip, {
        color: d.Tooltip.Colors.GREY,
        tooltipClassName: Z.tooltip,
        text: en,
        'aria-label': null != q ? v.Z.Messages.CLAN_SUBMIT_ERROR_TITLE : void 0,
        shouldShow: null != q,
        forceOpen: null != q,
        children: e => (0, i.jsx)(S.Z, {
          ...e,
          themeColor: R.brandPrimaryColor,
          disabled: !D || K,
          submitting: b,
          look: d.Button.Looks.FILLED,
          size: d.Button.Sizes.MEDIUM,
          color: d.Button.Colors.BRAND,
          onClick: ee,
          children: v.Z.Messages.FINISH
        })
      })
    }))
  ]
})
  });
}
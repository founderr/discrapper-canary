n.d(t, {
  Z: function() {
return L;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(392711),
  o = n(338545),
  c = n(442837),
  d = n(481060),
  u = n(207796),
  _ = n(889711),
  E = n(931240),
  h = n(970606),
  I = n(963202),
  m = n(650461),
  g = n(432632),
  p = n(35313),
  T = n(284019),
  f = n(672775),
  S = n(601463),
  C = n(192565),
  N = n(641037),
  A = n(689938),
  v = n(433369);
let Z = {
  mass: 1,
  tension: 600,
  friction: 60,
  clamp: !0
};

function L(e) {
  let {
guildId: t,
onClose: n
  } = e, a = (0, m.Wg)(), {
progress: L,
errors: O,
submitting: R
  } = (0, c.cj)([m.ZP], () => {
var e, n, i, s;
return {
  progress: null !== (s = null === (e = m.ZP.getStateForGuild(t)) || void 0 === e ? void 0 : e.progress) && void 0 !== s ? s : a,
  errors: null === (n = m.ZP.getStateForGuild(t)) || void 0 === n ? void 0 : n.errors,
  submitting: null === (i = m.ZP.getStateForGuild(t)) || void 0 === i ? void 0 : i.submitting
};
  }), x = (0, g.N)(t, 'ClanSetupModal'), b = s.useMemo(() => (0, N.G)(O), [O]), [P, M] = s.useState(!1), [D, y] = s.useState(window.innerWidth), [j, U] = s.useState(1), [G, w] = s.useState(!0), k = (0, p.f)(), B = (0, d.useSpring)({
opacity: j,
config: Z,
onStart: () => w(!0),
onRest: () => w(1 === j)
  }), H = (0, d.useSpring)({
transform: 'translateX('.concat(1 === j ? 0 : -1 * (D - 380) / 2 + 190, 'px)'),
config: Z
  }, 'respect-motion-settings'), V = (0, d.useTransition)(0 === j, {
from: {
  opacity: 0
},
enter: {
  opacity: 1,
  delay: 500
},
config: Z
  }), F = (0, d.useTransition)(0 === j, {
from: {
  opacity: 0
},
enter: {
  opacity: 1
},
leave: {
  opacity: 0
},
config: Z
  }), Y = s.useCallback(e => {
if (e === b.length)
  U(0), (0, h.Lp)(t, 'signature');
else if (0 === j)
  U(1);
else {
  var n;
  E._9(t, {
    currentStep: e,
    furthestStep: Math.max(null !== (n = L.furthestStep) && void 0 !== n ? n : 0, e)
  });
}
  }, [
j,
t,
L.furthestStep,
b.length
  ]);
  s.useEffect(() => {
(0, h.Lp)(t, (0, h.Qh)(L.currentStep));
  }, [
t,
L.currentStep
  ]), s.useEffect(() => {
let e = (0, _.pP)((0, l.debounce)(() => y(window.innerWidth), 250));
return (0, _.YP)(e, document.body), () => (0, _.UC)(e, document.body);
  }, [
j,
G
  ]), s.useEffect(() => {
null != x && (0, E._9)(t, {
  requiredGameId: x
});
  }, [
x,
t
  ]);
  let W = s.useMemo(() => null != O && Object.values(O).some(e => null != e), [O]),
z = s.useMemo(() => null != O && Object.values(O).length > 0 ? (0, N.G)(O).find(e => e.hasError) : null, [O]),
K = s.useCallback(() => {
  U(1), E._9(t, {
    currentStep: null == z ? void 0 : z.index
  });
}, [
  null == z ? void 0 : z.index,
  t
]),
{
  guilds: q
} = (0, I.C3)({
  location: 'ClanDiscoveryAdminContainer',
  includeConverted: !1
}),
{
  enableApplication: Q
} = (0, I.Fg)('ClanDiscoveryAdminContainer'),
X = s.useCallback(() => {
  0 === q.filter(e => e.id !== t).length && Q ? (0, u.fH)(u.v0.GET_STARTED) : (0, u.fH)(u.v0.ADMIN_UPSELL);
}, [
  q,
  t,
  Q
]),
J = s.useCallback(() => {
  (0, N.V)({
    guildId: t,
    onSuccess: () => {
      X(), n();
    },
    progress: L
  });
}, [
  t,
  L,
  X,
  n
]),
$ = s.useRef(null),
ee = null != z ? (0, i.jsxs)('div', {
  className: v.tooltipContents,
  children: [
    (0, i.jsx)(d.WarningIcon, {
      size: 'xs',
      color: 'currentColor',
      className: v.errorIcon
    }),
    (0, i.jsxs)('div', {
      children: [
        (0, i.jsx)(d.Text, {
          variant: 'text-sm/medium',
          color: 'header-primary',
          children: A.Z.Messages.CLAN_SUBMIT_ERROR_TITLE
        }),
        (0, i.jsx)(d.Text, {
          variant: 'text-xs/normal',
          color: 'text-muted',
          children: A.Z.Messages.CLAN_SUBMIT_ERROR_TEXT.format({
            backHook: (e, t) => (0, i.jsx)(d.Anchor, {
              className: v.errorLink,
              onClick: K,
              children: e
            }, t)
          })
        })
      ]
    })
  ]
}) : null;
  return (0, i.jsx)(o.animated.div, {
ref: $,
style: k,
className: v.modal,
children: (0, i.jsxs)(d.FocusRingScope, {
  containerRef: $,
  children: [
    (0, i.jsx)(d.Button, {
      className: v.close,
      look: d.Button.Looks.OUTLINED,
      size: d.Button.Sizes.MEDIUM,
      color: d.Button.Colors.PRIMARY,
      onClick: n,
      children: A.Z.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }),
    (0, i.jsxs)('div', {
      className: v.content,
      children: [
        (0, i.jsxs)('div', {
          className: v.panel,
          children: [
            (0, i.jsx)(o.animated.div, {
              style: B,
              className: r()(v.stepsContainer, {
                [v.hidden]: !G
              }),
              children: (0, i.jsx)(C.Z, {
                guildId: t
              })
            }),
            (0, i.jsx)('div', {
              className: r()(v.navigationContainer, {
                [v.elevatedNavigationContainer]: !G
              }),
              children: (0, i.jsx)(f.Z, {
                steps: b,
                progress: L,
                updateCurrentStep: Y,
                animationStyle: B,
                animationClassName: r()({
                  [v.hidden]: !G
                })
              })
            })
          ]
        }),
        (0, i.jsx)(o.animated.div, {
          style: B,
          className: r()(v.divider, {
            [v.hidden]: !G,
            [v.dividerResponsive]: G
          })
        }),
        (0, i.jsx)(o.animated.div, {
          style: H,
          className: r()(v.sidebar, {
            [v.sidebarResponsive]: G
          }),
          children: (0, i.jsx)(S.Z, {
            guildId: t,
            signed: P,
            setSigned: G ? void 0 : M,
            sidebarWidth: 380,
            windowWidth: D,
            transition: V,
            brandPrimaryColor: L.brandPrimaryColor
          })
        })
      ]
    }),
    F((e, t) => t && (0, i.jsx)(o.animated.div, {
      style: e,
      className: v.submit,
      children: (0, i.jsx)(d.Tooltip, {
        color: d.Tooltip.Colors.GREY,
        tooltipClassName: v.tooltip,
        text: ee,
        'aria-label': null != z ? A.Z.Messages.CLAN_SUBMIT_ERROR_TITLE : void 0,
        shouldShow: null != z,
        forceOpen: null != z,
        children: e => (0, i.jsx)(T.Z, {
          ...e,
          themeColor: L.brandPrimaryColor,
          disabled: !P || W,
          submitting: R,
          look: d.Button.Looks.FILLED,
          size: d.Button.Sizes.MEDIUM,
          color: d.Button.Colors.BRAND,
          onClick: J,
          children: A.Z.Messages.FINISH
        })
      })
    }))
  ]
})
  });
}
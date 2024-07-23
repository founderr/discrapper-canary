n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(149765),
  o = n(442837),
  c = n(704215),
  d = n(481060),
  u = n(367907),
  h = n(499254),
  p = n(424602),
  m = n(541099),
  _ = n(827498),
  f = n(663924),
  E = n(998698),
  C = n(605236),
  g = n(747127),
  I = n(665906),
  x = n(271383),
  T = n(496675),
  N = n(594174),
  v = n(291407),
  S = n(583027),
  Z = n(981631),
  A = n(314734),
  M = n(921944),
  b = n(689938),
  R = n(979030);
let j = a.forwardRef(function(e, t) {
  let {
type: n
  } = e, [s, r] = a.useState(!1), p = (0, o.e7)([m.Z], () => m.Z.shouldShowPopup()), f = a.useCallback(() => {
(0, u.yw)(Z.rMx.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED), p ? h.y(_.ti.DISMISSED) : ((0, C.EW)(c.z.DESKTOP_APP_LAUNCHER_ONBOARDING, {
  dismissAction: M.L.TAKE_ACTION
}), h._(_._b.TEXT, n));
  }, [
p,
n
  ]), E = () => {
r(!0);
  }, I = () => {
r(!1);
  }, x = a.useRef(), T = (0, g.Z)(t, x);
  return a.useEffect(() => S.HJ.subscribe(e => {
let {
  channelTextAreaHeight: t
} = e;
return t;
  }, e => {
let t = x.current;
null != t && (t.style.transform = null != e ? 'translateY(calc(100% - min('.concat(e, 'px, var(--custom-channel-textarea-text-area-max-height)))') : '');
  }), []), (0, i.jsx)('div', {
className: l()(R.buttonContainer, A.t4),
ref: T,
children: (0, i.jsx)(d.Button, {
  look: d.Button.Looks.BLANK,
  size: d.Button.Sizes.NONE,
  tabIndex: 0,
  className: R.button,
  onClick: f,
  onMouseEnter: E,
  onMouseOver: E,
  onMouseLeave: I,
  onFocus: E,
  onBlur: I,
  'aria-label': b.Z.Messages.APP_LAUNCHER_ENTRYPOINT_BUTTON_ARIA_LABEL,
  focusProps: {
    offset: {
      top: 4,
      bottom: 4,
      left: -4,
      right: -4
    }
  },
  innerClassName: R.buttonContents,
  children: (0, i.jsx)(d.AppsIcon, {
    className: l()(s || p ? R.iconActive : R.iconInactive)
  })
})
  });
});
t.Z = a.memo(a.forwardRef(function(e) {
  let {
channel: t,
type: n
  } = e, s = a.useRef(null), l = function(e, t) {
let n = e.getGuildId(),
  i = (0, o.e7)([
    x.ZP,
    N.default
  ], () => {
    var e, t;
    let i = N.default.getCurrentUser();
    return null !== (t = null != n && null != i ? null === (e = x.ZP.getMember(n, i.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t;
  }),
  {
    messagesDisabled: a
  } = (0, o.cj)([T.Z], () => {
    var n, a;
    let s = e.isPrivate(),
      l = T.Z.computePermissions(e),
      o = r.e$(l, Z.Plq.CREATE_PUBLIC_THREADS) || r.e$(l, Z.Plq.CREATE_PRIVATE_THREADS),
      c = (!(null === (n = t.permissions) || void 0 === n ? void 0 : n.requireCreateTherads) || o) && (!(null === (a = t.permissions) || void 0 === a ? void 0 : a.requireSendMessages) || r.e$(l, Z.Plq.SEND_MESSAGES)),
      d = (0, I.xl)(e);
    return {
      messagesDisabled: i || !s && !c || d
    };
  }, [
    e,
    t.permissions.requireCreateTherads,
    t.permissions.requireSendMessages,
    i
  ]);
return a;
  }(t, n), {
activeCommand: c
  } = (0, o.cj)([E.Z], () => {
var e;
return {
  activeCommand: (null === (e = n.commands) || void 0 === e ? void 0 : e.enabled) ? E.Z.getActiveCommand(t.id) : null
};
  }), d = p.T.useExperiment({
location: 'chat_input'
  }, {
autoTrackExposure: !0
  }).enabled, u = (0, o.e7)([m.Z], () => {
let e = m.Z.activeViewType();
return null != e && e === n && m.Z.shouldShowPopup();
  }, [n]);
  return d && null == c && !l ? (0, i.jsxs)('div', {
className: R.channelAppLauncher,
children: [
  (0, i.jsx)(v.Z, {
    channel: t,
    animationContainerClassName: R.entrypointAnimation,
    glowClassName: R.animationGlow,
    trinketsClassName: R.animationTrinkets,
    children: (0, i.jsx)(j, {
      type: n,
      ref: s
    })
  }),
  u ? (0, i.jsx)(f.Z, {
    positionTargetRef: s,
    channel: t
  }) : null
]
  }) : null;
}));
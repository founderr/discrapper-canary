t.r(n), t.d(n, {
  default: function() {
return F;
  }
}), t(47120);
var l, s, a = t(735250),
  r = t(470079),
  i = t(512722),
  o = t.n(i),
  c = t(338545),
  u = t(442837),
  d = t(481060),
  m = t(668781),
  E = t(287734),
  _ = t(872810),
  S = t(410575),
  g = t(812206),
  C = t(600164),
  h = t(313201),
  N = t(594190),
  Z = t(998594),
  I = t(751571),
  x = t(361291),
  f = t(592125),
  R = t(430824),
  A = t(131951),
  T = t(944486),
  v = t(594174),
  L = t(449224),
  p = t(626135),
  M = t(358085),
  O = t(998502),
  j = t(451467),
  P = t(537413),
  D = t(960861),
  G = t(989941),
  U = t(399299),
  b = t(351152),
  w = t(567126),
  k = t(143135),
  B = t(37113),
  V = t(981631),
  y = t(761274),
  W = t(689938),
  H = t(1871);
(s = l || (l = {}))[s.GUILD = 0] = 'GUILD', s[s.NATIVE_PICKER_SOURCE = 1] = 'NATIVE_PICKER_SOURCE', s[s.SOURCE = 2] = 'SOURCE', s[s.CONFIRM = 3] = 'CONFIRM';

function F(e) {
  var n, l, s, i, F, z, K;
  let {
selectGuild: Y = !1,
selectSource: J = !0,
guildId: Q,
analyticsLocation: X,
onClose: q,
transitionState: $
  } = e, {
preset: ee,
resolution: en,
fps: et,
soundshareEnabled: el
  } = (0, u.cj)([x.Z], () => x.Z.getState()), es = (0, u.e7)([
T.Z,
f.Z
  ], () => f.Z.getChannel(T.Z.getVoiceChannelId())), ea = (0, u.e7)([
N.ZP,
L.Z
  ], () => (0, M.isWindows)() ? (0, G.Z)(N.ZP, L.Z) : null), er = (0, u.e7)([v.default], () => {
let e = v.default.getCurrentUser();
return o()(null != e, 'GoLiveModal: user cannot be undefined'), e;
  }), ei = null !== (n = null == es ? void 0 : es.getGuildId()) && void 0 !== n ? n : Q, eo = (0, u.e7)([R.Z], () => {
var e;
return null != ei ? null === (e = R.Z.getGuild(ei)) || void 0 === e ? void 0 : e.premiumTier : null;
  }), [ec, eu] = null !== (l = (0, P.Z)(ee, er, eo)) && void 0 !== l ? l : [
B.LY.RESOLUTION_720,
B.ws.FPS_30
  ], ed = (0, u.e7)([D.ZP], () => D.ZP.supported()), {
lastPickerAction: em,
lastPickerError: eE
  } = (0, u.e7)([D.ZP], () => D.ZP.getPickerState()), e_ = Z.Z.useExperiment({
location: 'GoLiveModal'
  }, {
disable: !ed,
autoTrackExposure: !0
  }).enableSystemPicker;
  (0, D.UB)(), ee !== B.tI.PRESET_CUSTOM && (en = ec, et = eu), !(0, j.Z)(ee, en, et, er, eo) && (en = ec, et = eu);
  let eS = (0, h.Dt)();
  let [eg, eC] = r.useState((F = Y, z = J, K = e_, F ? 0 : K ? 1 : z ? 2 : 3)), [eh, eN] = r.useState(null), [eZ, eI] = r.useState(!1), [ex, ef] = r.useState(null), [eR, eA] = r.useState(null), [eT, ev] = r.useState(null), [eL, ep] = r.useState(ee), [eM, eO] = r.useState(en), [ej, eP] = r.useState(et), [eD, eG] = r.useState(el), [eU, eb] = r.useState(null != Q ? Q : null), ew = null !== (s = null == es ? void 0 : es.id) && void 0 !== s ? s : ex;
  r.useEffect(() => {
let e = (0, M.isWindows)() ? (0, G.Z)(N.ZP, L.Z) : null,
  n = (null == e ? void 0 : e.id) != null ? g.Z.getApplication(e.id) : null;
p.default.track(V.rMx.OPEN_MODAL, {
  type: 'Go Live Modal',
  application_id: null == n ? void 0 : n.id,
  application_name: null == e ? void 0 : e.name,
  game_id: null == n ? void 0 : n.id,
  location_section: X
});
  }, [X]);

  function ek() {
! function() {
  var e, n;
  o()(null != ea || null != eR, 'got nothing to stream');
  let t = null !== (e = null == es ? void 0 : es.id) && void 0 !== e ? e : ex;
  o()(null != t, 'Received null target channel ID');
  let l = f.Z.getChannel(t),
    s = null !== (n = null == l ? void 0 : l.getGuildId()) && void 0 !== n ? n : Q;
  null == es && E.default.selectVoiceChannel(t);
  let a = eL,
    r = eM,
    i = ej;
  !(0, j.Z)(a, r, i, er, eo) && (a = B.tI.PRESET_VIDEO, r = B.LY.RESOLUTION_720, i = B.ws.FPS_30), (0, _.Rc)({
    preset: a,
    resolution: r,
    frameRate: i,
    soundshareEnabled: eD
  });
  let c = (0, k.Z)(ea, eR, N.ZP.getRunningGames()),
    u = !(0, M.isWindows)() || null == c || (null == eR ? void 0 : eR.id.startsWith('camera:')) || null == c ? null : c.pid;
  (0, _.WH)(s, t, {
    pid: u,
    sourceId: null == u && null != eR ? eR.id : null,
    sourceName: null == u && null != eR ? eR.name : null,
    audioSourceId: eT,
    sound: eD
  }), (async () => {
    !await I.Z.hasPermission(y.Eu.SCREEN_RECORDING, {
      showAuthorizationError: !1
    }) && m.Z.show({
      title: W.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
      body: W.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
    });
  })();
}(), q();
  }
  let eB = r.useCallback((e, n, t) => {
let l = (0, P.Z)(e, er, eo),
  [s, a] = null != l ? l : [
    n,
    t
  ];
if (e !== eL && (n = s, t = a), !(0, j.Z)(e, n, t, er, eo)) {
  let [e, l] = (0, P.Z)(B.tI.PRESET_VIDEO, er, eo);
  n = e, t = l;
}
t !== ej && eP(t), n !== eM && eO(n), s !== n || a !== t ? ep(B.tI.PRESET_CUSTOM) : e !== eL && ep(e);
  }, [
er,
eo,
ej,
eM,
eL
  ]);
  async function eV(e) {
if (e.preventDefault(), 2 === eg)
  return eC(3);
let n = (0, k.Z)(ea, eR, N.ZP.getRunningGames()),
  l = O.ZP.supportsFeature(V.eRX.ELEVATED_HOOK) && (null == n ? void 0 : n.elevated);
if ((0, M.isMac)() && null != eR) {
  let e = await A.Z.getMediaEngine().getDesktopSources(),
    n = eR.id;
  if (n.startsWith('screen') && e.length > 0 && !e.some(e => e.includes(n))) {
    var s, r;
    s = n, r = e, p.default.track(V.rMx.SCREENSHARE_FAILED, {
      source_id: s,
      screens: r.length
    }), (0, d.openModal)(e => (0, a.jsx)(d.ConfirmModal, {
      header: W.Z.Messages.SCREENSHARE_RELAUNCH,
      confirmText: W.Z.Messages.OKAY,
      cancelText: W.Z.Messages.CANCEL,
      onConfirm: () => O.ZP.relaunch(),
      ...e,
      children: (0, a.jsx)(d.Text, {
        variant: 'text-md/normal',
        children: W.Z.Messages.SCREENSHARE_RELAUNCH_BODY
      })
    }));
    return;
  }
}
l ? ! function() {
  var e;
  let n = null !== (e = null == ea ? void 0 : ea.pid) && void 0 !== e ? e : null;
  (0, d.openModalLazy)(async () => {
    let {
      default: e
    } = await t.e('74300').then(t.bind(t, 566852));
    return t => (0, a.jsx)(e, {
      ...t,
      handleStream: ek,
      pid: n
    });
  });
}() : ek();
  }
  let [ey, eW] = r.useState(void 0), eH = r.useCallback(e => {
D.ZP.releasePickerStream(), D.ZP.presentPicker(null != e ? e : ey);
  }, [ey]), eF = r.useCallback(e => {
if (eA(e), null != e) {
  if (e_ && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0) {
    let n = e.id.split(':')[1];
    eW(n), eH(n), eC(2);
  } else
    eC(3);
  eI(!0);
}
  }, [
e_,
eH
  ]), ez = r.useCallback(e => {
eb(e);
var n = 3;
eC(n = e_ ? 1 : J ? 2 : 3);
  }, [
J,
e_
  ]);
  2 === eg && e_ && (em === D.Uc.Update ? eC(3) : em === D.Uc.Cancel && eC(1));
  let eK = !(2 === eg && e_ && em === D.Uc.Error),
eY = function(e) {
  switch (e) {
    case 2:
    case 1:
      return W.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
    case 3:
      return null;
    default:
      return W.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC;
  }
}(eg),
eJ = (0, a.jsx)(d.ModalHeader, {
  className: H.modalHeader,
  separator: !1,
  children: (0, a.jsxs)(C.Z, {
    direction: C.Z.Direction.VERTICAL,
    align: C.Z.Align.CENTER,
    className: H.header,
    children: [
      (0, a.jsx)(d.Heading, {
        variant: 'heading-xl/semibold',
        id: eS,
        className: H.headerText,
        children: W.Z.Messages.GO_LIVE_MODAL_TITLE
      }),
      eK && null != eY ? (0, a.jsx)(d.Text, {
        className: H.headerDescription,
        variant: 'text-md/normal',
        color: 'text-normal',
        children: eY
      }) : null
    ]
  })
}),
eQ = (0, a.jsxs)(d.Slides, {
  springConfig: {
    ...c.config.stiff,
    clamp: !0
  },
  activeSlide: eg,
  width: 480,
  onSlideReady: eN,
  children: [
    (0, a.jsx)(d.Slide, {
      id: 0,
      children: (0, a.jsx)('div', {
        className: H.modalSize,
        children: (0, a.jsx)(b.Z, {
          onSelectGuild: ez
        })
      })
    }),
    (0, a.jsx)(d.Slide, {
      id: 1,
      children: (0, a.jsx)('div', {
        className: H.modalSize,
        children: (0, a.jsx)(w.H, {
          onSourceSelect: eF
        })
      })
    }),
    (0, a.jsx)(d.Slide, {
      id: 2,
      children: (0, a.jsx)('div', {
        className: H.modalSize,
        children: e_ ? em === D.Uc.Error ? (0, a.jsx)(d.Text, {
          className: H.errorMessage,
          variant: 'text-md/normal',
          color: 'text-danger',
          children: null != eE && eE.length > 0 ? eE : W.Z.Messages.ERROR_ANOTHER_TRY
        }) : (0, a.jsx)(d.Spinner, {
          className: H.sourceSpinner
        }) : (0, a.jsx)(w.o, {
          selectedSource: eR,
          onChangeSelectedSource: eF
        })
      })
    }),
    (0, a.jsx)(d.Slide, {
      id: 3,
      children: (0, a.jsx)('div', {
        className: H.modalSize,
        children: (0, a.jsx)(U.Z, {
          selectedChannelId: null !== (i = null == es ? void 0 : es.id) && void 0 !== i ? i : ex,
          selectedPreset: eL,
          selectedResolution: eM,
          selectedSource: eR,
          selectedFPS: ej,
          sound: eD,
          sourceChanged: eZ,
          selectSource: J,
          onChangeSelectedFPS: e => eB(eL, eM, e),
          onChangeSelectedResolution: e => eB(eL, e, ej),
          onChangeSelectedPreset: e => eB(e, eM, ej),
          onChangeSelectedChannelId: ef,
          onChangeSelectedSource: eF,
          onChangeSource: () => eC(2),
          onChangeAudioDevice: e => ev(e),
          onChangeGuild: () => eC(0),
          onChangeSound: e => eG(e),
          onClose: q,
          selectedGuildId: eU,
          targetGuildPremiumTier: eo,
          selectGuild: Y,
          isAnimationDone: 3 === eh && $ === d.ModalTransitionState.ENTERED
        })
      })
    })
  ]
}),
eX = function(e, n, t, l, s) {
  switch (e) {
    case 1:
      return n ? 0 : null;
    case 2:
      if (s)
        return 1;
      return n ? 0 : null;
    case 3:
      if (s)
        return 1;
      if (l)
        return 2;
      if (!t && n)
        return 0;
      return null;
    default:
      return null;
  }
}(eg, Y, J, eZ, e_),
eq = 3 !== eg || null == eR && null == ea || null == ew,
e$ = r.useCallback(() => {
  null != eX && (D.ZP.releasePickerStream(), eC(eX));
}, [
  eC,
  eX
]),
e0 = (0, a.jsxs)(d.ModalFooter, {
  justify: null == eX ? C.Z.Justify.START : C.Z.Justify.BETWEEN,
  children: [
    (0, a.jsx)(d.Button, {
      type: 'submit',
      size: d.Button.Sizes.SMALL,
      disabled: eq,
      autoFocus: !0,
      children: W.Z.Messages.GO_LIVE_MODAL_CTA
    }),
    e_ && 2 === eg ? (0, a.jsx)(d.Button, {
      size: d.Button.Sizes.SMALL,
      color: d.ButtonColors.PRIMARY,
      onClick: () => eH(),
      children: W.Z.Messages.RETRY
    }) : null,
    null == eX ? (0, a.jsx)(d.Button, {
      className: H.cancelButton,
      look: d.Button.Looks.LINK,
      size: d.Button.Sizes.SMALL,
      color: d.ButtonColors.PRIMARY,
      onClick: q,
      children: W.Z.Messages.CANCEL
    }) : (0, a.jsx)(d.Button, {
      size: d.Button.Sizes.SMALL,
      color: d.ButtonColors.PRIMARY,
      onClick: e$,
      children: W.Z.Messages.BACK
    })
  ]
});
  return (0, a.jsx)(S.Z, {
page: V.ZY5.GO_LIVE_MODAL,
children: (0, a.jsxs)(d.ModalRoot, {
  'aria-labelledby': eS,
  transitionState: $,
  size: d.ModalSize.DYNAMIC,
  className: H.modalSize,
  children: [
    (0, a.jsx)(d.ModalCloseButton, {
      onClick: q,
      className: H.modalCloseButton
    }),
    (0, a.jsx)('div', {
      className: H.art
    }),
    (0, a.jsxs)('form', {
      onSubmit: eV,
      children: [
        eJ,
        eQ,
        e0
      ]
    })
  ]
})
  });
}
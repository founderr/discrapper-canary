"use strict";
l.r(t), l.d(t, {
  default: function() {
    return Q
  }
}), l("47120");
var a, n, s = l("735250"),
  i = l("470079"),
  r = l("512722"),
  u = l.n(r),
  o = l("718017"),
  d = l("848246"),
  c = l("442837"),
  f = l("481060"),
  m = l("668781"),
  S = l("287734"),
  E = l("872810"),
  _ = l("410575"),
  N = l("812206"),
  g = l("594190"),
  C = l("751571"),
  h = l("120522"),
  A = l("386542"),
  x = l("933843"),
  I = l("485731"),
  p = l("361291"),
  T = l("592125"),
  R = l("430824"),
  v = l("131951"),
  L = l("944486"),
  M = l("594174"),
  O = l("449224"),
  j = l("285952"),
  D = l("153124"),
  P = l("626135"),
  b = l("358085"),
  G = l("998502"),
  U = l("451467"),
  k = l("537413"),
  F = l("989941"),
  y = l("399299"),
  V = l("351152"),
  w = l("567126"),
  B = l("143135"),
  H = l("37113"),
  W = l("981631"),
  K = l("761274"),
  z = l("689938"),
  Y = l("223318");
(n = a || (a = {}))[n.GUILD = 0] = "GUILD", n[n.SOURCE = 1] = "SOURCE", n[n.CONFIRM = 2] = "CONFIRM";

function Q(e) {
  var t, a, n, r, Q;
  let {
    selectGuild: Z = !1,
    selectSource: J = !0,
    guildId: q,
    analyticsLocation: X,
    onClose: $,
    transitionState: ee
  } = e, {
    preset: et,
    resolution: el,
    fps: ea,
    soundshareEnabled: en
  } = (0, c.useStateFromStoresObject)([p.default], () => p.default.getState()), es = (0, c.useStateFromStores)([L.default, T.default], () => T.default.getChannel(L.default.getVoiceChannelId())), ei = (0, c.useStateFromStores)([g.default, O.default], () => (0, b.isWindows)() ? (0, F.default)(g.default, O.default) : null), er = (0, c.useStateFromStores)([M.default], () => {
    let e = M.default.getCurrentUser();
    return u()(null != e, "GoLiveModal: user cannot be undefined"), e
  }), eu = null !== (t = null == es ? void 0 : es.getGuildId()) && void 0 !== t ? t : q, eo = (0, c.useStateFromStores)([R.default], () => {
    var e;
    return null != eu ? null === (e = R.default.getGuild(eu)) || void 0 === e ? void 0 : e.premiumTier : null
  }), [ed, ec] = null !== (a = (0, k.default)(et, er, eo)) && void 0 !== a ? a : [H.ApplicationStreamResolutions.RESOLUTION_720, H.ApplicationStreamFPS.FPS_30], {
    available: ef
  } = (0, A.usePerksDemo)(d.EntitlementFeatureNames.STREAM_HIGH_QUALITY);
  et !== H.ApplicationStreamPresets.PRESET_CUSTOM && (el = ed, ea = ec), ef && (el = H.ApplicationStreamResolutions.RESOLUTION_1080, ea = H.ApplicationStreamFPS.FPS_60), !(0, U.default)(et, el, ea, er, eo) && (el = ed, ea = ec);
  let em = (0, D.useUID)();
  let [eS, eE] = i.useState((r = Z, Q = J, r ? 0 : Q ? 1 : 2)), [e_, eN] = i.useState(null), [eg, eC] = i.useState(!1), [eh, eA] = i.useState(null), [ex, eI] = i.useState(null), [ep, eT] = i.useState(null), [eR, ev] = i.useState(et), [eL, eM] = i.useState(el), [eO, ej] = i.useState(ea), [eD, eP] = i.useState(en), [eb, eG] = i.useState(null != q ? q : null), eU = null !== (n = null == es ? void 0 : es.id) && void 0 !== n ? n : eh;
  async function ek() {
    var e, t;
    u()(null != ei || null != ex, "got nothing to stream");
    let l = null !== (e = null == es ? void 0 : es.id) && void 0 !== e ? e : eh;
    u()(null != l, "Received null target channel ID");
    let a = T.default.getChannel(l),
      n = null !== (t = null == a ? void 0 : a.getGuildId()) && void 0 !== t ? t : q;
    null == es && S.default.selectVoiceChannel(l);
    let s = !0;
    (0, x.shouldActivatePerkDemo)(d.EntitlementFeatureNames.STREAM_HIGH_QUALITY) && (s = await (0, h.activatePerkDemo)(d.EntitlementFeatureNames.STREAM_HIGH_QUALITY), (0, I.hqStreamingSetEnabled)(!(0, x.ineligibleQualitySetting)(eL, eO)));
    let i = eR,
      r = eL,
      o = eO;
    (!(0, U.default)(i, r, o, er, eo) || !s) && (i = H.ApplicationStreamPresets.PRESET_VIDEO, r = H.ApplicationStreamResolutions.RESOLUTION_720, o = H.ApplicationStreamFPS.FPS_30), (0, E.updateStreamSettings)({
      preset: i,
      resolution: r,
      frameRate: o,
      soundshareEnabled: eD
    });
    let c = (0, B.default)(ei, ex, g.default.getRunningGames()),
      f = !(0, b.isWindows)() || null == c || (null == ex ? void 0 : ex.id.startsWith("camera:")) || null == c ? null : c.pid;
    (0, E.startStream)(n, l, {
      pid: f,
      sourceId: null == f && null != ex ? ex.id : null,
      sourceName: null == f && null != ex ? ex.name : null,
      audioSourceId: ep,
      sound: eD
    }), (async () => {
      !await C.default.hasPermission(K.NativePermissionTypes.SCREEN_RECORDING, {
        showAuthorizationError: !1
      }) && m.default.show({
        title: z.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
        body: z.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
      })
    })()
  }

  function eF() {
    ek(), $()
  }
  i.useEffect(() => {
    let e = (0, b.isWindows)() ? (0, F.default)(g.default, O.default) : null,
      t = (null == e ? void 0 : e.id) != null ? N.default.getApplication(e.id) : null;
    P.default.track(W.AnalyticEvents.OPEN_MODAL, {
      type: "Go Live Modal",
      application_id: null == t ? void 0 : t.id,
      application_name: null == e ? void 0 : e.name,
      game_id: null == t ? void 0 : t.id,
      location_section: X
    })
  }, [X]);
  let ey = i.useCallback((e, t, l) => {
    let a = (0, k.default)(e, er, eo),
      [n, s] = null != a ? a : [t, l];
    if (e !== eR && (t = n, l = s), !(0, U.default)(e, t, l, er, eo)) {
      let [e, a] = (0, k.default)(H.ApplicationStreamPresets.PRESET_VIDEO, er, eo);
      t = e, l = a
    }
    l !== eO && ej(l), t !== eL && eM(t), n !== t || s !== l ? ev(H.ApplicationStreamPresets.PRESET_CUSTOM) : e !== eR && ev(e)
  }, [er, eo, eO, eL, eR]);
  async function eV(e) {
    if (e.preventDefault(), 1 === eS) return eE(2);
    let t = (0, B.default)(ei, ex, g.default.getRunningGames()),
      a = G.default.supportsFeature(W.NativeFeatures.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated);
    if ((0, b.isMac)() && null != ex) {
      let e = await v.default.getMediaEngine().getDesktopSources(),
        t = ex.id;
      if (t.startsWith("screen") && e.length > 0 && !e.some(e => e.includes(t))) {
        var n, i;
        n = t, i = e, P.default.track(W.AnalyticEvents.SCREENSHARE_FAILED, {
          source_id: n,
          screens: i.length
        }), (0, f.openModal)(e => (0, s.jsx)(f.ConfirmModal, {
          header: z.default.Messages.SCREENSHARE_RELAUNCH,
          confirmText: z.default.Messages.OKAY,
          cancelText: z.default.Messages.CANCEL,
          onConfirm: () => G.default.relaunch(),
          ...e,
          children: (0, s.jsx)(f.Text, {
            variant: "text-md/normal",
            children: z.default.Messages.SCREENSHARE_RELAUNCH_BODY
          })
        }));
        return
      }
    }
    a ? ! function() {
      var e;
      let t = null !== (e = null == ei ? void 0 : ei.pid) && void 0 !== e ? e : null;
      (0, f.openModalLazy)(async () => {
        let {
          default: e
        } = await l.e("74300").then(l.bind(l, "566852"));
        return l => (0, s.jsx)(e, {
          ...l,
          handleStream: eF,
          pid: t
        })
      })
    }() : eF()
  }
  let ew = i.useCallback(e => {
      eI(e), null != e && (eE(2), eC(!0))
    }, []),
    eB = i.useCallback(e => {
      eG(e), eE(J ? 1 : 2)
    }, [J]),
    eH = function(e) {
      switch (e) {
        case 1:
          return z.default.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
        case 2:
          return null;
        default:
          return z.default.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
      }
    }(eS),
    eW = (0, s.jsx)(f.ModalHeader, {
      className: Y.modalHeader,
      separator: !1,
      children: (0, s.jsxs)(j.default, {
        direction: j.default.Direction.VERTICAL,
        align: j.default.Align.CENTER,
        className: Y.header,
        children: [(0, s.jsx)(f.Heading, {
          variant: "heading-xl/semibold",
          id: em,
          className: Y.headerText,
          children: z.default.Messages.GO_LIVE_MODAL_TITLE
        }), null != eH ? (0, s.jsx)(f.Text, {
          className: Y.headerDescription,
          variant: "text-md/normal",
          color: "text-normal",
          children: eH
        }) : null]
      })
    }),
    eK = (0, s.jsxs)(f.Slides, {
      springConfig: {
        ...o.config.stiff,
        clamp: !0
      },
      activeSlide: eS,
      width: 480,
      onSlideReady: eN,
      children: [(0, s.jsx)(f.Slide, {
        id: 0,
        children: (0, s.jsx)("div", {
          className: Y.modalSize,
          children: (0, s.jsx)(V.default, {
            onSelectGuild: eB
          })
        })
      }), (0, s.jsx)(f.Slide, {
        id: 1,
        children: (0, s.jsx)("div", {
          className: Y.modalSize,
          children: (0, s.jsx)(w.default, {
            selectedSource: ex,
            onChangeSelectedSource: ew
          })
        })
      }), (0, s.jsx)(f.Slide, {
        id: 2,
        children: (0, s.jsx)("div", {
          className: Y.modalSize,
          children: (0, s.jsx)(y.default, {
            selectedChannelId: eh,
            selectedPreset: eR,
            selectedResolution: eL,
            selectedSource: ex,
            selectedFPS: eO,
            sound: eD,
            sourceChanged: eg,
            selectSource: J,
            onChangeSelectedFPS: e => ey(eR, eL, e),
            onChangeSelectedResolution: e => ey(eR, e, eO),
            onChangeSelectedPreset: e => ey(e, eL, eO),
            onChangeSelectedChannelId: eA,
            onChangeSelectedSource: ew,
            onChangeSource: () => eE(1),
            onChangeAudioDevice: e => eT(e),
            onChangeGuild: () => eE(0),
            onChangeSound: e => eP(e),
            onClose: $,
            selectedGuildId: eb,
            targetGuildPremiumTier: eo,
            selectGuild: Z,
            isAnimationDone: 2 === e_ && ee === f.ModalTransitionState.ENTERED
          })
        })
      })]
    }),
    ez = function(e, t, l, a) {
      switch (e) {
        case 1:
          return t ? 0 : null;
        case 2:
          if (a) return 1;
          if (!l && t) return 0;
          return null;
        default:
          return null
      }
    }(eS, Z, J, eg),
    eY = 2 !== eS || null == ex && null == ei || null == eU,
    eQ = (0, s.jsxs)(f.ModalFooter, {
      justify: null == ez ? j.default.Justify.START : j.default.Justify.BETWEEN,
      children: [(0, s.jsx)(f.Button, {
        type: "submit",
        size: f.Button.Sizes.SMALL,
        disabled: eY,
        autoFocus: !0,
        children: z.default.Messages.GO_LIVE_MODAL_CTA
      }), null == ez ? (0, s.jsx)(f.Button, {
        className: Y.cancelButton,
        look: f.Button.Looks.LINK,
        size: f.Button.Sizes.SMALL,
        color: f.ButtonColors.PRIMARY,
        onClick: $,
        children: z.default.Messages.CANCEL
      }) : (0, s.jsx)(f.Button, {
        size: f.Button.Sizes.SMALL,
        color: f.ButtonColors.PRIMARY,
        onClick: () => eE(ez),
        children: z.default.Messages.BACK
      })]
    });
  return (0, s.jsx)(_.default, {
    page: W.AnalyticsPages.GO_LIVE_MODAL,
    children: (0, s.jsxs)(f.ModalRoot, {
      "aria-labelledby": em,
      transitionState: ee,
      size: f.ModalSize.DYNAMIC,
      className: Y.modalSize,
      children: [(0, s.jsx)(f.ModalCloseButton, {
        onClick: $,
        className: Y.modalCloseButton
      }), (0, s.jsx)("div", {
        className: Y.art
      }), (0, s.jsxs)("form", {
        onSubmit: eV,
        children: [eW, eK, eQ]
      })]
    })
  })
}
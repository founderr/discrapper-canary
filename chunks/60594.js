"use strict";
l.r(t), l.d(t, {
  default: function() {
    return Y
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
  g = l("812206"),
  C = l("594190"),
  N = l("751571"),
  h = l("120522"),
  A = l("933843"),
  x = l("485731"),
  I = l("361291"),
  p = l("592125"),
  T = l("430824"),
  R = l("131951"),
  v = l("944486"),
  L = l("594174"),
  M = l("449224"),
  j = l("285952"),
  O = l("153124"),
  D = l("626135"),
  P = l("358085"),
  b = l("998502"),
  G = l("451467"),
  U = l("537413"),
  k = l("989941"),
  F = l("399299"),
  y = l("351152"),
  V = l("567126"),
  w = l("143135"),
  B = l("37113"),
  H = l("981631"),
  W = l("761274"),
  K = l("689938"),
  z = l("223318");
(n = a || (a = {}))[n.GUILD = 0] = "GUILD", n[n.SOURCE = 1] = "SOURCE", n[n.CONFIRM = 2] = "CONFIRM";

function Y(e) {
  var t, a, n, r, Y;
  let {
    selectGuild: Q = !1,
    selectSource: q = !0,
    guildId: Z,
    analyticsLocation: J,
    onClose: X,
    transitionState: $
  } = e, {
    preset: ee,
    resolution: et,
    fps: el,
    soundshareEnabled: ea
  } = (0, c.useStateFromStoresObject)([I.default], () => I.default.getState()), en = (0, c.useStateFromStores)([v.default, p.default], () => p.default.getChannel(v.default.getVoiceChannelId())), es = (0, c.useStateFromStores)([C.default, M.default], () => (0, P.isWindows)() ? (0, k.default)(C.default, M.default) : null), ei = (0, c.useStateFromStores)([L.default], () => {
    let e = L.default.getCurrentUser();
    return u()(null != e, "GoLiveModal: user cannot be undefined"), e
  }), er = null !== (t = null == en ? void 0 : en.getGuildId()) && void 0 !== t ? t : Z, eu = (0, c.useStateFromStores)([T.default], () => {
    var e;
    return null != er ? null === (e = T.default.getGuild(er)) || void 0 === e ? void 0 : e.premiumTier : null
  }), [eo, ed] = null !== (a = (0, U.default)(ee, ei, eu)) && void 0 !== a ? a : [B.ApplicationStreamResolutions.RESOLUTION_720, B.ApplicationStreamFPS.FPS_30];
  ee !== B.ApplicationStreamPresets.PRESET_CUSTOM && (et = eo, el = ed), !(0, G.default)(ee, et, el, ei, eu) && (et = eo, el = ed);
  let ec = (0, O.useUID)();
  let [ef, em] = i.useState((r = Q, Y = q, r ? 0 : Y ? 1 : 2)), [eS, eE] = i.useState(null), [e_, eg] = i.useState(!1), [eC, eN] = i.useState(null), [eh, eA] = i.useState(null), [ex, eI] = i.useState(null), [ep, eT] = i.useState(ee), [eR, ev] = i.useState(et), [eL, eM] = i.useState(el), [ej, eO] = i.useState(ea), [eD, eP] = i.useState(null != Z ? Z : null), eb = null !== (n = null == en ? void 0 : en.id) && void 0 !== n ? n : eC;
  async function eG() {
    var e, t;
    u()(null != es || null != eh, "got nothing to stream");
    let l = null !== (e = null == en ? void 0 : en.id) && void 0 !== e ? e : eC;
    u()(null != l, "Received null target channel ID");
    let a = p.default.getChannel(l),
      n = null !== (t = null == a ? void 0 : a.getGuildId()) && void 0 !== t ? t : Z;
    null == en && S.default.selectVoiceChannel(l);
    let s = !0;
    (0, A.shouldActivatePerkDemo)(d.EntitlementFeatureNames.STREAM_HIGH_QUALITY) && (s = await (0, h.activatePerkDemo)(d.EntitlementFeatureNames.STREAM_HIGH_QUALITY), (0, x.hqStreamingSetEnabled)(!(0, A.ineligibleQualitySetting)(eR, eL)));
    let i = ep,
      r = eR,
      o = eL;
    (!(0, G.default)(i, r, o, ei, eu) || !s) && (i = B.ApplicationStreamPresets.PRESET_VIDEO, r = B.ApplicationStreamResolutions.RESOLUTION_720, o = B.ApplicationStreamFPS.FPS_30), (0, E.updateStreamSettings)({
      preset: i,
      resolution: r,
      frameRate: o,
      soundshareEnabled: ej
    });
    let c = (0, w.default)(es, eh, C.default.getRunningGames()),
      f = !(0, P.isWindows)() || null == c || (null == eh ? void 0 : eh.id.startsWith("camera:")) || null == c ? null : c.pid;
    (0, E.startStream)(n, l, {
      pid: f,
      sourceId: null == f && null != eh ? eh.id : null,
      sourceName: null == f && null != eh ? eh.name : null,
      audioSourceId: ex,
      sound: ej
    }), (async () => {
      !await N.default.hasPermission(W.NativePermissionTypes.SCREEN_RECORDING, {
        showAuthorizationError: !1
      }) && m.default.show({
        title: K.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
        body: K.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
      })
    })()
  }

  function eU() {
    eG(), X()
  }
  i.useEffect(() => {
    let e = (0, P.isWindows)() ? (0, k.default)(C.default, M.default) : null,
      t = (null == e ? void 0 : e.id) != null ? g.default.getApplication(e.id) : null;
    D.default.track(H.AnalyticEvents.OPEN_MODAL, {
      type: "Go Live Modal",
      application_id: null == t ? void 0 : t.id,
      application_name: null == e ? void 0 : e.name,
      game_id: null == t ? void 0 : t.id,
      location_section: J
    })
  }, [J]);
  let ek = i.useCallback((e, t, l) => {
    let a = (0, U.default)(e, ei, eu),
      [n, s] = null != a ? a : [t, l];
    if (e !== ep && (t = n, l = s), !(0, G.default)(e, t, l, ei, eu)) {
      let [e, a] = (0, U.default)(B.ApplicationStreamPresets.PRESET_VIDEO, ei, eu);
      t = e, l = a
    }
    l !== eL && eM(l), t !== eR && ev(t), n !== t || s !== l ? eT(B.ApplicationStreamPresets.PRESET_CUSTOM) : e !== ep && eT(e)
  }, [ei, eu, eL, eR, ep]);
  async function eF(e) {
    if (e.preventDefault(), 1 === ef) return em(2);
    let t = (0, w.default)(es, eh, C.default.getRunningGames()),
      a = b.default.supportsFeature(H.NativeFeatures.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated);
    if ((0, P.isMac)() && null != eh) {
      let e = await R.default.getMediaEngine().getDesktopSources(),
        t = eh.id;
      if (t.startsWith("screen") && e.length > 0 && !e.some(e => e.includes(t))) {
        var n, i;
        n = t, i = e, D.default.track(H.AnalyticEvents.SCREENSHARE_FAILED, {
          source_id: n,
          screens: i.length
        }), (0, f.openModal)(e => (0, s.jsx)(f.ConfirmModal, {
          header: K.default.Messages.SCREENSHARE_RELAUNCH,
          confirmText: K.default.Messages.OKAY,
          cancelText: K.default.Messages.CANCEL,
          onConfirm: () => b.default.relaunch(),
          ...e,
          children: (0, s.jsx)(f.Text, {
            variant: "text-md/normal",
            children: K.default.Messages.SCREENSHARE_RELAUNCH_BODY
          })
        }));
        return
      }
    }
    a ? ! function() {
      var e;
      let t = null !== (e = null == es ? void 0 : es.pid) && void 0 !== e ? e : null;
      (0, f.openModalLazy)(async () => {
        let {
          default: e
        } = await l.e("74300").then(l.bind(l, "566852"));
        return l => (0, s.jsx)(e, {
          ...l,
          handleStream: eU,
          pid: t
        })
      })
    }() : eU()
  }
  let ey = i.useCallback(e => {
      eA(e), null != e && (em(2), eg(!0))
    }, []),
    eV = i.useCallback(e => {
      eP(e), em(q ? 1 : 2)
    }, [q]),
    ew = function(e) {
      switch (e) {
        case 1:
          return K.default.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
        case 2:
          return null;
        default:
          return K.default.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
      }
    }(ef),
    eB = (0, s.jsx)(f.ModalHeader, {
      className: z.modalHeader,
      separator: !1,
      children: (0, s.jsxs)(j.default, {
        direction: j.default.Direction.VERTICAL,
        align: j.default.Align.CENTER,
        className: z.header,
        children: [(0, s.jsx)(f.Heading, {
          variant: "heading-xl/semibold",
          id: ec,
          className: z.headerText,
          children: K.default.Messages.GO_LIVE_MODAL_TITLE
        }), null != ew ? (0, s.jsx)(f.Text, {
          className: z.headerDescription,
          variant: "text-md/normal",
          color: "text-normal",
          children: ew
        }) : null]
      })
    }),
    eH = (0, s.jsxs)(f.Slides, {
      springConfig: {
        ...o.config.stiff,
        clamp: !0
      },
      activeSlide: ef,
      width: 480,
      onSlideReady: eE,
      children: [(0, s.jsx)(f.Slide, {
        id: 0,
        children: (0, s.jsx)("div", {
          className: z.modalSize,
          children: (0, s.jsx)(y.default, {
            onSelectGuild: eV
          })
        })
      }), (0, s.jsx)(f.Slide, {
        id: 1,
        children: (0, s.jsx)("div", {
          className: z.modalSize,
          children: (0, s.jsx)(V.default, {
            selectedSource: eh,
            onChangeSelectedSource: ey
          })
        })
      }), (0, s.jsx)(f.Slide, {
        id: 2,
        children: (0, s.jsx)("div", {
          className: z.modalSize,
          children: (0, s.jsx)(F.default, {
            selectedChannelId: eC,
            selectedPreset: ep,
            selectedResolution: eR,
            selectedSource: eh,
            selectedFPS: eL,
            sound: ej,
            sourceChanged: e_,
            selectSource: q,
            onChangeSelectedFPS: e => ek(ep, eR, e),
            onChangeSelectedResolution: e => ek(ep, e, eL),
            onChangeSelectedPreset: e => ek(e, eR, eL),
            onChangeSelectedChannelId: eN,
            onChangeSelectedSource: ey,
            onChangeSource: () => em(1),
            onChangeAudioDevice: e => eI(e),
            onChangeGuild: () => em(0),
            onChangeSound: e => eO(e),
            onClose: X,
            selectedGuildId: eD,
            targetGuildPremiumTier: eu,
            selectGuild: Q,
            isAnimationDone: 2 === eS && $ === f.ModalTransitionState.ENTERED
          })
        })
      })]
    }),
    eW = function(e, t, l, a) {
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
    }(ef, Q, q, e_),
    eK = 2 !== ef || null == eh && null == es || null == eb,
    ez = (0, s.jsxs)(f.ModalFooter, {
      justify: null == eW ? j.default.Justify.START : j.default.Justify.BETWEEN,
      children: [(0, s.jsx)(f.Button, {
        type: "submit",
        size: f.Button.Sizes.SMALL,
        disabled: eK,
        autoFocus: !0,
        children: K.default.Messages.GO_LIVE_MODAL_CTA
      }), null == eW ? (0, s.jsx)(f.Button, {
        className: z.cancelButton,
        look: f.Button.Looks.LINK,
        size: f.Button.Sizes.SMALL,
        color: f.ButtonColors.PRIMARY,
        onClick: X,
        children: K.default.Messages.CANCEL
      }) : (0, s.jsx)(f.Button, {
        size: f.Button.Sizes.SMALL,
        color: f.ButtonColors.PRIMARY,
        onClick: () => em(eW),
        children: K.default.Messages.BACK
      })]
    });
  return (0, s.jsx)(_.default, {
    page: H.AnalyticsPages.GO_LIVE_MODAL,
    children: (0, s.jsxs)(f.ModalRoot, {
      "aria-labelledby": ec,
      transitionState: $,
      size: f.ModalSize.DYNAMIC,
      className: z.modalSize,
      children: [(0, s.jsx)(f.ModalCloseButton, {
        onClick: X,
        className: z.modalCloseButton
      }), (0, s.jsx)("div", {
        className: z.art
      }), (0, s.jsxs)("form", {
        onSubmit: eF,
        children: [eB, eH, ez]
      })]
    })
  })
}
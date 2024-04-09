"use strict";
l.r(t), l.d(t, {
  default: function() {
    return Y
  }
}), l("47120");
var a, s, n = l("735250"),
  i = l("470079"),
  r = l("512722"),
  u = l.n(r),
  o = l("718017"),
  d = l("454908"),
  c = l("442837"),
  f = l("481060"),
  m = l("668781"),
  S = l("287734"),
  E = l("872810"),
  _ = l("410575"),
  C = l("812206"),
  g = l("594190"),
  N = l("751571"),
  h = l("120522"),
  x = l("386542"),
  I = l("933843"),
  A = l("361291"),
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
  G = l("998502"),
  b = l("451467"),
  U = l("537413"),
  k = l("989941"),
  F = l("399299"),
  y = l("351152"),
  w = l("567126"),
  B = l("143135"),
  V = l("37113"),
  H = l("981631"),
  W = l("761274"),
  z = l("689938"),
  K = l("223318");
(s = a || (a = {}))[s.GUILD = 0] = "GUILD", s[s.SOURCE = 1] = "SOURCE", s[s.CONFIRM = 2] = "CONFIRM";

function Y(e) {
  var t, a, s, r, Y;
  let {
    selectGuild: Q = !1,
    selectSource: Z = !0,
    guildId: J,
    analyticsLocation: X,
    onClose: q,
    transitionState: $
  } = e, {
    preset: ee,
    resolution: et,
    fps: el,
    soundshareEnabled: ea
  } = (0, c.useStateFromStoresObject)([A.default], () => A.default.getState()), es = (0, c.useStateFromStores)([v.default, p.default], () => p.default.getChannel(v.default.getVoiceChannelId())), en = (0, c.useStateFromStores)([g.default, M.default], () => (0, P.isWindows)() ? (0, k.default)(g.default, M.default) : null), ei = (0, c.useStateFromStores)([L.default], () => {
    let e = L.default.getCurrentUser();
    return u()(null != e, "GoLiveModal: user cannot be undefined"), e
  }), er = null !== (t = null == es ? void 0 : es.getGuildId()) && void 0 !== t ? t : J, eu = (0, c.useStateFromStores)([T.default], () => {
    var e;
    return null != er ? null === (e = T.default.getGuild(er)) || void 0 === e ? void 0 : e.premiumTier : null
  }), [eo, ed] = null !== (a = (0, U.default)(ee, ei, eu)) && void 0 !== a ? a : [V.ApplicationStreamResolutions.RESOLUTION_720, V.ApplicationStreamFPS.FPS_30], {
    available: ec
  } = (0, x.usePerksDemo)(d.NitroPerks.STREAM_HIGH_QUALITY);
  ee !== V.ApplicationStreamPresets.PRESET_CUSTOM && (et = eo, el = ed), ec && (et = V.ApplicationStreamResolutions.RESOLUTION_1080, el = V.ApplicationStreamFPS.FPS_60), !(0, b.default)(ee, et, el, ei, eu) && (et = eo, el = ed);
  let ef = (0, O.useUID)();
  let [em, eS] = i.useState((r = Q, Y = Z, r ? 0 : Y ? 1 : 2)), [eE, e_] = i.useState(null), [eC, eg] = i.useState(!1), [eN, eh] = i.useState(null), [ex, eI] = i.useState(null), [eA, ep] = i.useState(null), [eT, eR] = i.useState(ee), [ev, eL] = i.useState(et), [eM, ej] = i.useState(el), [eO, eD] = i.useState(ea), [eP, eG] = i.useState(null != J ? J : null), eb = null !== (s = null == es ? void 0 : es.id) && void 0 !== s ? s : eN;
  async function eU() {
    var e, t;
    u()(null != en || null != ex, "got nothing to stream");
    let l = null !== (e = null == es ? void 0 : es.id) && void 0 !== e ? e : eN;
    u()(null != l, "Received null target channel ID");
    let a = p.default.getChannel(l),
      s = null !== (t = null == a ? void 0 : a.getGuildId()) && void 0 !== t ? t : J;
    null == es && S.default.selectVoiceChannel(l);
    let n = !0;
    (0, I.shouldActivatePerkDemo)(d.NitroPerks.STREAM_HIGH_QUALITY) && (n = await (0, h.activatePerkDemo)(d.NitroPerks.STREAM_HIGH_QUALITY));
    let i = eT,
      r = ev,
      o = eM;
    (!(0, b.default)(i, r, o, ei, eu) || !n) && (i = V.ApplicationStreamPresets.PRESET_VIDEO, r = V.ApplicationStreamResolutions.RESOLUTION_720, o = V.ApplicationStreamFPS.FPS_30), (0, E.updateStreamSettings)({
      preset: i,
      resolution: r,
      frameRate: o,
      soundshareEnabled: eO
    });
    let c = (0, B.default)(en, ex, g.default.getRunningGames()),
      f = !(0, P.isWindows)() || null == c || (null == ex ? void 0 : ex.id.startsWith("camera:")) || null == c ? null : c.pid;
    (0, E.startStream)(s, l, {
      pid: f,
      sourceId: null == f && null != ex ? ex.id : null,
      sourceName: null == f && null != ex ? ex.name : null,
      audioSourceId: eA,
      sound: eO
    }), (async () => {
      !await N.default.hasPermission(W.NativePermissionTypes.SCREEN_RECORDING, {
        showAuthorizationError: !1
      }) && m.default.show({
        title: z.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
        body: z.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
      })
    })()
  }

  function ek() {
    eU(), q()
  }
  i.useEffect(() => {
    let e = (0, P.isWindows)() ? (0, k.default)(g.default, M.default) : null,
      t = (null == e ? void 0 : e.id) != null ? C.default.getApplication(e.id) : null;
    D.default.track(H.AnalyticEvents.OPEN_MODAL, {
      type: "Go Live Modal",
      application_id: null == t ? void 0 : t.id,
      application_name: null == e ? void 0 : e.name,
      game_id: null == t ? void 0 : t.id,
      location_section: X
    })
  }, [X]);
  let eF = i.useCallback((e, t, l) => {
    let a = (0, U.default)(e, ei, eu),
      [s, n] = null != a ? a : [t, l];
    if (e !== eT && (t = s, l = n), !(0, b.default)(e, t, l, ei, eu)) {
      let [e, a] = (0, U.default)(V.ApplicationStreamPresets.PRESET_VIDEO, ei, eu);
      t = e, l = a
    }
    l !== eM && ej(l), t !== ev && eL(t), s !== t || n !== l ? eR(V.ApplicationStreamPresets.PRESET_CUSTOM) : e !== eT && eR(e)
  }, [ei, eu, eM, ev, eT]);
  async function ey(e) {
    if (e.preventDefault(), 1 === em) return eS(2);
    let t = (0, B.default)(en, ex, g.default.getRunningGames()),
      a = G.default.supportsFeature(H.NativeFeatures.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated);
    if ((0, P.isMac)() && null != ex) {
      let e = await R.default.getMediaEngine().getDesktopSources(),
        t = ex.id;
      if (t.startsWith("screen") && e.length > 0 && !e.some(e => e.includes(t))) {
        var s, i;
        s = t, i = e, D.default.track(H.AnalyticEvents.SCREENSHARE_FAILED, {
          source_id: s,
          screens: i.length
        }), (0, f.openModal)(e => (0, n.jsx)(f.ConfirmModal, {
          header: z.default.Messages.SCREENSHARE_RELAUNCH,
          confirmText: z.default.Messages.OKAY,
          cancelText: z.default.Messages.CANCEL,
          onConfirm: () => G.default.relaunch(),
          ...e,
          children: (0, n.jsx)(f.Text, {
            variant: "text-md/normal",
            children: z.default.Messages.SCREENSHARE_RELAUNCH_BODY
          })
        }));
        return
      }
    }
    a ? ! function() {
      var e;
      let t = null !== (e = null == en ? void 0 : en.pid) && void 0 !== e ? e : null;
      (0, f.openModalLazy)(async () => {
        let {
          default: e
        } = await l.e("74300").then(l.bind(l, "566852"));
        return l => (0, n.jsx)(e, {
          ...l,
          handleStream: ek,
          pid: t
        })
      })
    }() : ek()
  }
  let ew = i.useCallback(e => {
      eI(e), null != e && (eS(2), eg(!0))
    }, []),
    eB = i.useCallback(e => {
      eG(e), eS(Z ? 1 : 2)
    }, [Z]),
    eV = function(e) {
      switch (e) {
        case 1:
          return z.default.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
        case 2:
          return null;
        default:
          return z.default.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
      }
    }(em),
    eH = (0, n.jsx)(f.ModalHeader, {
      className: K.modalHeader,
      separator: !1,
      children: (0, n.jsxs)(j.default, {
        direction: j.default.Direction.VERTICAL,
        align: j.default.Align.CENTER,
        className: K.header,
        children: [(0, n.jsx)(f.Heading, {
          variant: "heading-xl/semibold",
          id: ef,
          className: K.headerText,
          children: z.default.Messages.GO_LIVE_MODAL_TITLE
        }), null != eV ? (0, n.jsx)(f.Text, {
          className: K.headerDescription,
          variant: "text-md/normal",
          color: "text-normal",
          children: eV
        }) : null]
      })
    }),
    eW = (0, n.jsxs)(f.Slides, {
      springConfig: {
        ...o.config.stiff,
        clamp: !0
      },
      activeSlide: em,
      width: 480,
      onSlideReady: e_,
      children: [(0, n.jsx)(f.Slide, {
        id: 0,
        children: (0, n.jsx)("div", {
          className: K.modalSize,
          children: (0, n.jsx)(y.default, {
            onSelectGuild: eB
          })
        })
      }), (0, n.jsx)(f.Slide, {
        id: 1,
        children: (0, n.jsx)("div", {
          className: K.modalSize,
          children: (0, n.jsx)(w.default, {
            selectedSource: ex,
            onChangeSelectedSource: ew
          })
        })
      }), (0, n.jsx)(f.Slide, {
        id: 2,
        children: (0, n.jsx)("div", {
          className: K.modalSize,
          children: (0, n.jsx)(F.default, {
            selectedChannelId: eN,
            selectedPreset: eT,
            selectedResolution: ev,
            selectedSource: ex,
            selectedFPS: eM,
            sound: eO,
            sourceChanged: eC,
            selectSource: Z,
            onChangeSelectedFPS: e => eF(eT, ev, e),
            onChangeSelectedResolution: e => eF(eT, e, eM),
            onChangeSelectedPreset: e => eF(e, ev, eM),
            onChangeSelectedChannelId: eh,
            onChangeSelectedSource: ew,
            onChangeSource: () => eS(1),
            onChangeAudioDevice: e => ep(e),
            onChangeGuild: () => eS(0),
            onChangeSound: e => eD(e),
            onClose: q,
            selectedGuildId: eP,
            targetGuildPremiumTier: eu,
            selectGuild: Q,
            isAnimationDone: 2 === eE && $ === f.ModalTransitionState.ENTERED
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
    }(em, Q, Z, eC),
    eK = 2 !== em || null == ex && null == en || null == eb,
    eY = (0, n.jsxs)(f.ModalFooter, {
      justify: null == ez ? j.default.Justify.START : j.default.Justify.BETWEEN,
      children: [(0, n.jsx)(f.Button, {
        type: "submit",
        size: f.Button.Sizes.SMALL,
        disabled: eK,
        autoFocus: !0,
        children: z.default.Messages.GO_LIVE_MODAL_CTA
      }), null == ez ? (0, n.jsx)(f.Button, {
        className: K.cancelButton,
        look: f.Button.Looks.LINK,
        size: f.Button.Sizes.SMALL,
        color: f.ButtonColors.PRIMARY,
        onClick: q,
        children: z.default.Messages.CANCEL
      }) : (0, n.jsx)(f.Button, {
        size: f.Button.Sizes.SMALL,
        color: f.ButtonColors.PRIMARY,
        onClick: () => eS(ez),
        children: z.default.Messages.BACK
      })]
    });
  return (0, n.jsx)(_.default, {
    page: H.AnalyticsPages.GO_LIVE_MODAL,
    children: (0, n.jsxs)(f.ModalRoot, {
      "aria-labelledby": ef,
      transitionState: $,
      size: f.ModalSize.DYNAMIC,
      className: K.modalSize,
      children: [(0, n.jsx)(f.ModalCloseButton, {
        onClick: q,
        className: K.modalCloseButton
      }), (0, n.jsx)("div", {
        className: K.art
      }), (0, n.jsxs)("form", {
        onSubmit: ey,
        children: [eH, eW, eY]
      })]
    })
  })
}
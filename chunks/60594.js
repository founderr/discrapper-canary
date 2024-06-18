"use strict";
n.r(t), n.d(t, {
  default: function() {
    return K
  }
}), n(47120);
var l, s, a = n(735250),
  i = n(470079),
  r = n(512722),
  o = n.n(r),
  u = n(920906),
  c = n(848246),
  d = n(442837),
  m = n(481060),
  E = n(668781),
  _ = n(287734),
  S = n(872810),
  h = n(410575),
  g = n(812206),
  C = n(594190),
  I = n(751571),
  N = n(120522),
  Z = n(933843),
  x = n(485731),
  f = n(361291),
  A = n(592125),
  T = n(430824),
  R = n(131951),
  v = n(944486),
  L = n(594174),
  p = n(449224),
  M = n(285952),
  O = n(153124),
  j = n(626135),
  P = n(358085),
  D = n(998502),
  G = n(451467),
  U = n(537413),
  b = n(989941),
  w = n(399299),
  y = n(351152),
  k = n(567126),
  B = n(143135),
  H = n(37113),
  V = n(981631),
  F = n(761274),
  W = n(689938),
  z = n(555066);
(s = l || (l = {}))[s.GUILD = 0] = "GUILD", s[s.SOURCE = 1] = "SOURCE", s[s.CONFIRM = 2] = "CONFIRM";

function K(e) {
  var t, l, s, r, K, Y;
  let {
    selectGuild: q = !1,
    selectSource: Q = !0,
    guildId: J,
    analyticsLocation: X,
    onClose: $,
    transitionState: ee
  } = e, {
    preset: et,
    resolution: en,
    fps: el,
    soundshareEnabled: es
  } = (0, d.cj)([f.Z], () => f.Z.getState()), ea = (0, d.e7)([v.Z, A.Z], () => A.Z.getChannel(v.Z.getVoiceChannelId())), ei = (0, d.e7)([C.ZP, p.Z], () => (0, P.isWindows)() ? (0, b.Z)(C.ZP, p.Z) : null), er = (0, d.e7)([L.default], () => {
    let e = L.default.getCurrentUser();
    return o()(null != e, "GoLiveModal: user cannot be undefined"), e
  }), eo = null !== (t = null == ea ? void 0 : ea.getGuildId()) && void 0 !== t ? t : J, eu = (0, d.e7)([T.Z], () => {
    var e;
    return null != eo ? null === (e = T.Z.getGuild(eo)) || void 0 === e ? void 0 : e.premiumTier : null
  }), [ec, ed] = null !== (l = (0, U.Z)(et, er, eu)) && void 0 !== l ? l : [H.LY.RESOLUTION_720, H.ws.FPS_30];
  et !== H.tI.PRESET_CUSTOM && (en = ec, el = ed), !(0, G.Z)(et, en, el, er, eu) && (en = ec, el = ed);
  let em = (0, O.Dt)();
  let [eE, e_] = i.useState((K = q, Y = Q, K ? 0 : Y ? 1 : 2)), [eS, eh] = i.useState(null), [eg, eC] = i.useState(!1), [eI, eN] = i.useState(null), [eZ, ex] = i.useState(null), [ef, eA] = i.useState(null), [eT, eR] = i.useState(et), [ev, eL] = i.useState(en), [ep, eM] = i.useState(el), [eO, ej] = i.useState(es), [eP, eD] = i.useState(null != J ? J : null), eG = null !== (s = null == ea ? void 0 : ea.id) && void 0 !== s ? s : eI;
  async function eU() {
    var e, t, n;
    o()(null != ei || null != eZ, "got nothing to stream");
    let l = null !== (e = null == ea ? void 0 : ea.id) && void 0 !== e ? e : eI;
    o()(null != l, "Received null target channel ID");
    let s = A.Z.getChannel(l),
      a = null !== (t = null == s ? void 0 : s.getGuildId()) && void 0 !== t ? t : J;
    null == ea && _.default.selectVoiceChannel(l);
    let i = !0;
    (0, Z.vw)(c.q.STREAM_HIGH_QUALITY) && (i = await (0, N.S)(c.q.STREAM_HIGH_QUALITY), (0, x.J1)(!(0, Z.mc)(ev, ep)), j.default.track(V.rMx.PERK_DEMO_OFFER_ACCEPTED, {
      guild_id: a,
      channel_id: null !== (n = null == ea ? void 0 : ea.id) && void 0 !== n ? n : eI,
      perk_type: c.q.STREAM_HIGH_QUALITY,
      resolution: ev,
      max_fps: ep
    }));
    let r = eT,
      u = ev,
      d = ep;
    (!(0, G.Z)(r, u, d, er, eu) || !i) && (r = H.tI.PRESET_VIDEO, u = H.LY.RESOLUTION_720, d = H.ws.FPS_30), (0, S.Rc)({
      preset: r,
      resolution: u,
      frameRate: d,
      soundshareEnabled: eO
    });
    let m = (0, B.Z)(ei, eZ, C.ZP.getRunningGames()),
      h = !(0, P.isWindows)() || null == m || (null == eZ ? void 0 : eZ.id.startsWith("camera:")) || null == m ? null : m.pid;
    (0, S.WH)(a, l, {
      pid: h,
      sourceId: null == h && null != eZ ? eZ.id : null,
      sourceName: null == h && null != eZ ? eZ.name : null,
      audioSourceId: ef,
      sound: eO
    }), (async () => {
      !await I.Z.hasPermission(F.Eu.SCREEN_RECORDING, {
        showAuthorizationError: !1
      }) && E.Z.show({
        title: W.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
        body: W.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
      })
    })()
  }

  function eb() {
    eU(), $()
  }
  i.useEffect(() => {
    let e = (0, P.isWindows)() ? (0, b.Z)(C.ZP, p.Z) : null,
      t = (null == e ? void 0 : e.id) != null ? g.Z.getApplication(e.id) : null;
    j.default.track(V.rMx.OPEN_MODAL, {
      type: "Go Live Modal",
      application_id: null == t ? void 0 : t.id,
      application_name: null == e ? void 0 : e.name,
      game_id: null == t ? void 0 : t.id,
      location_section: X
    })
  }, [X]);
  let ew = i.useCallback((e, t, n) => {
    let l = (0, U.Z)(e, er, eu),
      [s, a] = null != l ? l : [t, n];
    if (e !== eT && (t = s, n = a), !(0, G.Z)(e, t, n, er, eu)) {
      let [e, l] = (0, U.Z)(H.tI.PRESET_VIDEO, er, eu);
      t = e, n = l
    }
    n !== ep && eM(n), t !== ev && eL(t), s !== t || a !== n ? eR(H.tI.PRESET_CUSTOM) : e !== eT && eR(e)
  }, [er, eu, ep, ev, eT]);
  async function ey(e) {
    if (e.preventDefault(), 1 === eE) return e_(2);
    let t = (0, B.Z)(ei, eZ, C.ZP.getRunningGames()),
      l = D.ZP.supportsFeature(V.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated);
    if ((0, P.isMac)() && null != eZ) {
      let e = await R.Z.getMediaEngine().getDesktopSources(),
        t = eZ.id;
      if (t.startsWith("screen") && e.length > 0 && !e.some(e => e.includes(t))) {
        var s, i;
        s = t, i = e, j.default.track(V.rMx.SCREENSHARE_FAILED, {
          source_id: s,
          screens: i.length
        }), (0, m.openModal)(e => (0, a.jsx)(m.ConfirmModal, {
          header: W.Z.Messages.SCREENSHARE_RELAUNCH,
          confirmText: W.Z.Messages.OKAY,
          cancelText: W.Z.Messages.CANCEL,
          onConfirm: () => D.ZP.relaunch(),
          ...e,
          children: (0, a.jsx)(m.Text, {
            variant: "text-md/normal",
            children: W.Z.Messages.SCREENSHARE_RELAUNCH_BODY
          })
        }));
        return
      }
    }
    l ? ! function() {
      var e;
      let t = null !== (e = null == ei ? void 0 : ei.pid) && void 0 !== e ? e : null;
      (0, m.openModalLazy)(async () => {
        let {
          default: e
        } = await n.e("74300").then(n.bind(n, 566852));
        return n => (0, a.jsx)(e, {
          ...n,
          handleStream: eb,
          pid: t
        })
      })
    }() : eb()
  }
  let ek = i.useCallback(e => {
      ex(e), null != e && (e_(2), eC(!0))
    }, []),
    eB = i.useCallback(e => {
      eD(e), e_(Q ? 1 : 2)
    }, [Q]),
    eH = function(e) {
      switch (e) {
        case 1:
          return W.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
        case 2:
          return null;
        default:
          return W.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
      }
    }(eE),
    eV = (0, a.jsx)(m.ModalHeader, {
      className: z.modalHeader,
      separator: !1,
      children: (0, a.jsxs)(M.Z, {
        direction: M.Z.Direction.VERTICAL,
        align: M.Z.Align.CENTER,
        className: z.header,
        children: [(0, a.jsx)(m.Heading, {
          variant: "heading-xl/semibold",
          id: em,
          className: z.headerText,
          children: W.Z.Messages.GO_LIVE_MODAL_TITLE
        }), null != eH ? (0, a.jsx)(m.Text, {
          className: z.headerDescription,
          variant: "text-md/normal",
          color: "text-normal",
          children: eH
        }) : null]
      })
    }),
    eF = (0, a.jsxs)(m.Slides, {
      springConfig: {
        ...u.config.stiff,
        clamp: !0
      },
      activeSlide: eE,
      width: 480,
      onSlideReady: eh,
      children: [(0, a.jsx)(m.Slide, {
        id: 0,
        children: (0, a.jsx)("div", {
          className: z.modalSize,
          children: (0, a.jsx)(y.Z, {
            onSelectGuild: eB
          })
        })
      }), (0, a.jsx)(m.Slide, {
        id: 1,
        children: (0, a.jsx)("div", {
          className: z.modalSize,
          children: (0, a.jsx)(k.Z, {
            selectedSource: eZ,
            onChangeSelectedSource: ek
          })
        })
      }), (0, a.jsx)(m.Slide, {
        id: 2,
        children: (0, a.jsx)("div", {
          className: z.modalSize,
          children: (0, a.jsx)(w.Z, {
            selectedChannelId: null !== (r = null == ea ? void 0 : ea.id) && void 0 !== r ? r : eI,
            selectedPreset: eT,
            selectedResolution: ev,
            selectedSource: eZ,
            selectedFPS: ep,
            sound: eO,
            sourceChanged: eg,
            selectSource: Q,
            onChangeSelectedFPS: e => ew(eT, ev, e),
            onChangeSelectedResolution: e => ew(eT, e, ep),
            onChangeSelectedPreset: e => ew(e, ev, ep),
            onChangeSelectedChannelId: eN,
            onChangeSelectedSource: ek,
            onChangeSource: () => e_(1),
            onChangeAudioDevice: e => eA(e),
            onChangeGuild: () => e_(0),
            onChangeSound: e => ej(e),
            onClose: $,
            selectedGuildId: eP,
            targetGuildPremiumTier: eu,
            selectGuild: q,
            isAnimationDone: 2 === eS && ee === m.ModalTransitionState.ENTERED
          })
        })
      })]
    }),
    eW = function(e, t, n, l) {
      switch (e) {
        case 1:
          return t ? 0 : null;
        case 2:
          if (l) return 1;
          if (!n && t) return 0;
          return null;
        default:
          return null
      }
    }(eE, q, Q, eg),
    ez = 2 !== eE || null == eZ && null == ei || null == eG,
    eK = (0, a.jsxs)(m.ModalFooter, {
      justify: null == eW ? M.Z.Justify.START : M.Z.Justify.BETWEEN,
      children: [(0, a.jsx)(m.Button, {
        type: "submit",
        size: m.Button.Sizes.SMALL,
        disabled: ez,
        autoFocus: !0,
        children: W.Z.Messages.GO_LIVE_MODAL_CTA
      }), null == eW ? (0, a.jsx)(m.Button, {
        className: z.cancelButton,
        look: m.Button.Looks.LINK,
        size: m.Button.Sizes.SMALL,
        color: m.ButtonColors.PRIMARY,
        onClick: $,
        children: W.Z.Messages.CANCEL
      }) : (0, a.jsx)(m.Button, {
        size: m.Button.Sizes.SMALL,
        color: m.ButtonColors.PRIMARY,
        onClick: () => e_(eW),
        children: W.Z.Messages.BACK
      })]
    });
  return (0, a.jsx)(h.Z, {
    page: V.ZY5.GO_LIVE_MODAL,
    children: (0, a.jsxs)(m.ModalRoot, {
      "aria-labelledby": em,
      transitionState: ee,
      size: m.ModalSize.DYNAMIC,
      className: z.modalSize,
      children: [(0, a.jsx)(m.ModalCloseButton, {
        onClick: $,
        className: z.modalCloseButton
      }), (0, a.jsx)("div", {
        className: z.art
      }), (0, a.jsxs)("form", {
        onSubmit: ey,
        children: [eV, eF, eK]
      })]
    })
  })
}
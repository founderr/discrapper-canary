t.r(n), t.d(n, {
  default: function() {
    return K
  }
}), t(47120);
var l, s, a = t(735250),
  i = t(470079),
  r = t(512722),
  o = t.n(r),
  u = t(920906),
  c = t(848246),
  d = t(442837),
  m = t(481060),
  E = t(668781),
  _ = t(287734),
  S = t(872810),
  h = t(410575),
  g = t(812206),
  C = t(594190),
  Z = t(751571),
  N = t(120522),
  I = t(933843),
  x = t(485731),
  f = t(361291),
  A = t(592125),
  T = t(430824),
  R = t(131951),
  v = t(944486),
  L = t(594174),
  p = t(449224),
  M = t(285952),
  O = t(153124),
  j = t(626135),
  P = t(358085),
  D = t(998502),
  G = t(451467),
  U = t(537413),
  b = t(989941),
  w = t(399299),
  B = t(351152),
  y = t(567126),
  k = t(143135),
  V = t(37113),
  H = t(981631),
  W = t(761274),
  F = t(689938),
  z = t(278768);
(s = l || (l = {}))[s.GUILD = 0] = "GUILD", s[s.SOURCE = 1] = "SOURCE", s[s.CONFIRM = 2] = "CONFIRM";

function K(e) {
  var n, l, s, r, K, Y;
  let {
    selectGuild: Q = !1,
    selectSource: q = !0,
    guildId: J,
    analyticsLocation: X,
    onClose: $,
    transitionState: ee
  } = e, {
    preset: en,
    resolution: et,
    fps: el,
    soundshareEnabled: es
  } = (0, d.cj)([f.Z], () => f.Z.getState()), ea = (0, d.e7)([v.Z, A.Z], () => A.Z.getChannel(v.Z.getVoiceChannelId())), ei = (0, d.e7)([C.ZP, p.Z], () => (0, P.isWindows)() ? (0, b.Z)(C.ZP, p.Z) : null), er = (0, d.e7)([L.default], () => {
    let e = L.default.getCurrentUser();
    return o()(null != e, "GoLiveModal: user cannot be undefined"), e
  }), eo = null !== (n = null == ea ? void 0 : ea.getGuildId()) && void 0 !== n ? n : J, eu = (0, d.e7)([T.Z], () => {
    var e;
    return null != eo ? null === (e = T.Z.getGuild(eo)) || void 0 === e ? void 0 : e.premiumTier : null
  }), [ec, ed] = null !== (l = (0, U.Z)(en, er, eu)) && void 0 !== l ? l : [V.LY.RESOLUTION_720, V.ws.FPS_30];
  en !== V.tI.PRESET_CUSTOM && (et = ec, el = ed), !(0, G.Z)(en, et, el, er, eu) && (et = ec, el = ed);
  let em = (0, O.Dt)();
  let [eE, e_] = i.useState((K = Q, Y = q, K ? 0 : Y ? 1 : 2)), [eS, eh] = i.useState(null), [eg, eC] = i.useState(!1), [eZ, eN] = i.useState(null), [eI, ex] = i.useState(null), [ef, eA] = i.useState(null), [eT, eR] = i.useState(en), [ev, eL] = i.useState(et), [ep, eM] = i.useState(el), [eO, ej] = i.useState(es), [eP, eD] = i.useState(null != J ? J : null), eG = null !== (s = null == ea ? void 0 : ea.id) && void 0 !== s ? s : eZ;
  async function eU() {
    var e, n, t;
    o()(null != ei || null != eI, "got nothing to stream");
    let l = null !== (e = null == ea ? void 0 : ea.id) && void 0 !== e ? e : eZ;
    o()(null != l, "Received null target channel ID");
    let s = A.Z.getChannel(l),
      a = null !== (n = null == s ? void 0 : s.getGuildId()) && void 0 !== n ? n : J;
    null == ea && _.default.selectVoiceChannel(l);
    let i = !0;
    (0, I.vw)(c.q.STREAM_HIGH_QUALITY) && (i = await (0, N.S)(c.q.STREAM_HIGH_QUALITY), (0, x.J1)(!(0, I.mc)(ev, ep)), j.default.track(H.rMx.PERK_DEMO_OFFER_ACCEPTED, {
      guild_id: a,
      channel_id: null !== (t = null == ea ? void 0 : ea.id) && void 0 !== t ? t : eZ,
      perk_type: c.q.STREAM_HIGH_QUALITY,
      resolution: ev,
      max_fps: ep
    }));
    let r = eT,
      u = ev,
      d = ep;
    (!(0, G.Z)(r, u, d, er, eu) || !i) && (r = V.tI.PRESET_VIDEO, u = V.LY.RESOLUTION_720, d = V.ws.FPS_30), (0, S.Rc)({
      preset: r,
      resolution: u,
      frameRate: d,
      soundshareEnabled: eO
    });
    let m = (0, k.Z)(ei, eI, C.ZP.getRunningGames()),
      h = !(0, P.isWindows)() || null == m || (null == eI ? void 0 : eI.id.startsWith("camera:")) || null == m ? null : m.pid;
    (0, S.WH)(a, l, {
      pid: h,
      sourceId: null == h && null != eI ? eI.id : null,
      sourceName: null == h && null != eI ? eI.name : null,
      audioSourceId: ef,
      sound: eO
    }), (async () => {
      !await Z.Z.hasPermission(W.Eu.SCREEN_RECORDING, {
        showAuthorizationError: !1
      }) && E.Z.show({
        title: F.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
        body: F.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
      })
    })()
  }

  function eb() {
    eU(), $()
  }
  i.useEffect(() => {
    let e = (0, P.isWindows)() ? (0, b.Z)(C.ZP, p.Z) : null,
      n = (null == e ? void 0 : e.id) != null ? g.Z.getApplication(e.id) : null;
    j.default.track(H.rMx.OPEN_MODAL, {
      type: "Go Live Modal",
      application_id: null == n ? void 0 : n.id,
      application_name: null == e ? void 0 : e.name,
      game_id: null == n ? void 0 : n.id,
      location_section: X
    })
  }, [X]);
  let ew = i.useCallback((e, n, t) => {
    let l = (0, U.Z)(e, er, eu),
      [s, a] = null != l ? l : [n, t];
    if (e !== eT && (n = s, t = a), !(0, G.Z)(e, n, t, er, eu)) {
      let [e, l] = (0, U.Z)(V.tI.PRESET_VIDEO, er, eu);
      n = e, t = l
    }
    t !== ep && eM(t), n !== ev && eL(n), s !== n || a !== t ? eR(V.tI.PRESET_CUSTOM) : e !== eT && eR(e)
  }, [er, eu, ep, ev, eT]);
  async function eB(e) {
    if (e.preventDefault(), 1 === eE) return e_(2);
    let n = (0, k.Z)(ei, eI, C.ZP.getRunningGames()),
      l = D.ZP.supportsFeature(H.eRX.ELEVATED_HOOK) && (null == n ? void 0 : n.elevated);
    if ((0, P.isMac)() && null != eI) {
      let e = await R.Z.getMediaEngine().getDesktopSources(),
        n = eI.id;
      if (n.startsWith("screen") && e.length > 0 && !e.some(e => e.includes(n))) {
        var s, i;
        s = n, i = e, j.default.track(H.rMx.SCREENSHARE_FAILED, {
          source_id: s,
          screens: i.length
        }), (0, m.openModal)(e => (0, a.jsx)(m.ConfirmModal, {
          header: F.Z.Messages.SCREENSHARE_RELAUNCH,
          confirmText: F.Z.Messages.OKAY,
          cancelText: F.Z.Messages.CANCEL,
          onConfirm: () => D.ZP.relaunch(),
          ...e,
          children: (0, a.jsx)(m.Text, {
            variant: "text-md/normal",
            children: F.Z.Messages.SCREENSHARE_RELAUNCH_BODY
          })
        }));
        return
      }
    }
    l ? ! function() {
      var e;
      let n = null !== (e = null == ei ? void 0 : ei.pid) && void 0 !== e ? e : null;
      (0, m.openModalLazy)(async () => {
        let {
          default: e
        } = await t.e("74300").then(t.bind(t, 566852));
        return t => (0, a.jsx)(e, {
          ...t,
          handleStream: eb,
          pid: n
        })
      })
    }() : eb()
  }
  let ey = i.useCallback(e => {
      ex(e), null != e && (e_(2), eC(!0))
    }, []),
    ek = i.useCallback(e => {
      eD(e), e_(q ? 1 : 2)
    }, [q]),
    eV = function(e) {
      switch (e) {
        case 1:
          return F.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
        case 2:
          return null;
        default:
          return F.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
      }
    }(eE),
    eH = (0, a.jsx)(m.ModalHeader, {
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
          children: F.Z.Messages.GO_LIVE_MODAL_TITLE
        }), null != eV ? (0, a.jsx)(m.Text, {
          className: z.headerDescription,
          variant: "text-md/normal",
          color: "text-normal",
          children: eV
        }) : null]
      })
    }),
    eW = (0, a.jsxs)(m.Slides, {
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
          children: (0, a.jsx)(B.Z, {
            onSelectGuild: ek
          })
        })
      }), (0, a.jsx)(m.Slide, {
        id: 1,
        children: (0, a.jsx)("div", {
          className: z.modalSize,
          children: (0, a.jsx)(y.Z, {
            selectedSource: eI,
            onChangeSelectedSource: ey
          })
        })
      }), (0, a.jsx)(m.Slide, {
        id: 2,
        children: (0, a.jsx)("div", {
          className: z.modalSize,
          children: (0, a.jsx)(w.Z, {
            selectedChannelId: null !== (r = null == ea ? void 0 : ea.id) && void 0 !== r ? r : eZ,
            selectedPreset: eT,
            selectedResolution: ev,
            selectedSource: eI,
            selectedFPS: ep,
            sound: eO,
            sourceChanged: eg,
            selectSource: q,
            onChangeSelectedFPS: e => ew(eT, ev, e),
            onChangeSelectedResolution: e => ew(eT, e, ep),
            onChangeSelectedPreset: e => ew(e, ev, ep),
            onChangeSelectedChannelId: eN,
            onChangeSelectedSource: ey,
            onChangeSource: () => e_(1),
            onChangeAudioDevice: e => eA(e),
            onChangeGuild: () => e_(0),
            onChangeSound: e => ej(e),
            onClose: $,
            selectedGuildId: eP,
            targetGuildPremiumTier: eu,
            selectGuild: Q,
            isAnimationDone: 2 === eS && ee === m.ModalTransitionState.ENTERED
          })
        })
      })]
    }),
    eF = function(e, n, t, l) {
      switch (e) {
        case 1:
          return n ? 0 : null;
        case 2:
          if (l) return 1;
          if (!t && n) return 0;
          return null;
        default:
          return null
      }
    }(eE, Q, q, eg),
    ez = 2 !== eE || null == eI && null == ei || null == eG,
    eK = (0, a.jsxs)(m.ModalFooter, {
      justify: null == eF ? M.Z.Justify.START : M.Z.Justify.BETWEEN,
      children: [(0, a.jsx)(m.Button, {
        type: "submit",
        size: m.Button.Sizes.SMALL,
        disabled: ez,
        autoFocus: !0,
        children: F.Z.Messages.GO_LIVE_MODAL_CTA
      }), null == eF ? (0, a.jsx)(m.Button, {
        className: z.cancelButton,
        look: m.Button.Looks.LINK,
        size: m.Button.Sizes.SMALL,
        color: m.ButtonColors.PRIMARY,
        onClick: $,
        children: F.Z.Messages.CANCEL
      }) : (0, a.jsx)(m.Button, {
        size: m.Button.Sizes.SMALL,
        color: m.ButtonColors.PRIMARY,
        onClick: () => e_(eF),
        children: F.Z.Messages.BACK
      })]
    });
  return (0, a.jsx)(h.Z, {
    page: H.ZY5.GO_LIVE_MODAL,
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
        onSubmit: eB,
        children: [eH, eW, eK]
      })]
    })
  })
}
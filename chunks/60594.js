t.r(n), t.d(n, {
  default: function() {
    return H
  }
}), t(47120);
var l, s, a = t(735250),
  i = t(470079),
  r = t(512722),
  o = t.n(r),
  u = t(920906),
  c = t(442837),
  d = t(481060),
  m = t(668781),
  E = t(287734),
  _ = t(872810),
  S = t(410575),
  h = t(812206),
  g = t(594190),
  C = t(751571),
  Z = t(361291),
  N = t(592125),
  I = t(430824),
  x = t(131951),
  f = t(944486),
  A = t(594174),
  T = t(449224),
  R = t(285952),
  v = t(153124),
  L = t(626135),
  M = t(358085),
  p = t(998502),
  O = t(451467),
  j = t(537413),
  P = t(989941),
  D = t(399299),
  G = t(351152),
  U = t(567126),
  b = t(143135),
  w = t(37113),
  B = t(981631),
  y = t(761274),
  k = t(689938),
  V = t(278768);
(s = l || (l = {}))[s.GUILD = 0] = "GUILD", s[s.SOURCE = 1] = "SOURCE", s[s.CONFIRM = 2] = "CONFIRM";

function H(e) {
  var n, l, s, r, H, W;
  let {
    selectGuild: F = !1,
    selectSource: z = !0,
    guildId: K,
    analyticsLocation: Y,
    onClose: Q,
    transitionState: q
  } = e, {
    preset: J,
    resolution: X,
    fps: $,
    soundshareEnabled: ee
  } = (0, c.cj)([Z.Z], () => Z.Z.getState()), en = (0, c.e7)([f.Z, N.Z], () => N.Z.getChannel(f.Z.getVoiceChannelId())), et = (0, c.e7)([g.ZP, T.Z], () => (0, M.isWindows)() ? (0, P.Z)(g.ZP, T.Z) : null), el = (0, c.e7)([A.default], () => {
    let e = A.default.getCurrentUser();
    return o()(null != e, "GoLiveModal: user cannot be undefined"), e
  }), es = null !== (n = null == en ? void 0 : en.getGuildId()) && void 0 !== n ? n : K, ea = (0, c.e7)([I.Z], () => {
    var e;
    return null != es ? null === (e = I.Z.getGuild(es)) || void 0 === e ? void 0 : e.premiumTier : null
  }), [ei, er] = null !== (l = (0, j.Z)(J, el, ea)) && void 0 !== l ? l : [w.LY.RESOLUTION_720, w.ws.FPS_30];
  J !== w.tI.PRESET_CUSTOM && (X = ei, $ = er), !(0, O.Z)(J, X, $, el, ea) && (X = ei, $ = er);
  let eo = (0, v.Dt)();
  let [eu, ec] = i.useState((H = F, W = z, H ? 0 : W ? 1 : 2)), [ed, em] = i.useState(null), [eE, e_] = i.useState(!1), [eS, eh] = i.useState(null), [eg, eC] = i.useState(null), [eZ, eN] = i.useState(null), [eI, ex] = i.useState(J), [ef, eA] = i.useState(X), [eT, eR] = i.useState($), [ev, eL] = i.useState(ee), [eM, ep] = i.useState(null != K ? K : null), eO = null !== (s = null == en ? void 0 : en.id) && void 0 !== s ? s : eS;
  i.useEffect(() => {
    let e = (0, M.isWindows)() ? (0, P.Z)(g.ZP, T.Z) : null,
      n = (null == e ? void 0 : e.id) != null ? h.Z.getApplication(e.id) : null;
    L.default.track(B.rMx.OPEN_MODAL, {
      type: "Go Live Modal",
      application_id: null == n ? void 0 : n.id,
      application_name: null == e ? void 0 : e.name,
      game_id: null == n ? void 0 : n.id,
      location_section: Y
    })
  }, [Y]);

  function ej() {
    ! function() {
      var e, n;
      o()(null != et || null != eg, "got nothing to stream");
      let t = null !== (e = null == en ? void 0 : en.id) && void 0 !== e ? e : eS;
      o()(null != t, "Received null target channel ID");
      let l = N.Z.getChannel(t),
        s = null !== (n = null == l ? void 0 : l.getGuildId()) && void 0 !== n ? n : K;
      null == en && E.default.selectVoiceChannel(t);
      let a = eI,
        i = ef,
        r = eT;
      !(0, O.Z)(a, i, r, el, ea) && (a = w.tI.PRESET_VIDEO, i = w.LY.RESOLUTION_720, r = w.ws.FPS_30), (0, _.Rc)({
        preset: a,
        resolution: i,
        frameRate: r,
        soundshareEnabled: ev
      });
      let u = (0, b.Z)(et, eg, g.ZP.getRunningGames()),
        c = !(0, M.isWindows)() || null == u || (null == eg ? void 0 : eg.id.startsWith("camera:")) || null == u ? null : u.pid;
      (0, _.WH)(s, t, {
        pid: c,
        sourceId: null == c && null != eg ? eg.id : null,
        sourceName: null == c && null != eg ? eg.name : null,
        audioSourceId: eZ,
        sound: ev
      }), (async () => {
        !await C.Z.hasPermission(y.Eu.SCREEN_RECORDING, {
          showAuthorizationError: !1
        }) && m.Z.show({
          title: k.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
          body: k.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
        })
      })()
    }(), Q()
  }
  let eP = i.useCallback((e, n, t) => {
    let l = (0, j.Z)(e, el, ea),
      [s, a] = null != l ? l : [n, t];
    if (e !== eI && (n = s, t = a), !(0, O.Z)(e, n, t, el, ea)) {
      let [e, l] = (0, j.Z)(w.tI.PRESET_VIDEO, el, ea);
      n = e, t = l
    }
    t !== eT && eR(t), n !== ef && eA(n), s !== n || a !== t ? ex(w.tI.PRESET_CUSTOM) : e !== eI && ex(e)
  }, [el, ea, eT, ef, eI]);
  async function eD(e) {
    if (e.preventDefault(), 1 === eu) return ec(2);
    let n = (0, b.Z)(et, eg, g.ZP.getRunningGames()),
      l = p.ZP.supportsFeature(B.eRX.ELEVATED_HOOK) && (null == n ? void 0 : n.elevated);
    if ((0, M.isMac)() && null != eg) {
      let e = await x.Z.getMediaEngine().getDesktopSources(),
        n = eg.id;
      if (n.startsWith("screen") && e.length > 0 && !e.some(e => e.includes(n))) {
        var s, i;
        s = n, i = e, L.default.track(B.rMx.SCREENSHARE_FAILED, {
          source_id: s,
          screens: i.length
        }), (0, d.openModal)(e => (0, a.jsx)(d.ConfirmModal, {
          header: k.Z.Messages.SCREENSHARE_RELAUNCH,
          confirmText: k.Z.Messages.OKAY,
          cancelText: k.Z.Messages.CANCEL,
          onConfirm: () => p.ZP.relaunch(),
          ...e,
          children: (0, a.jsx)(d.Text, {
            variant: "text-md/normal",
            children: k.Z.Messages.SCREENSHARE_RELAUNCH_BODY
          })
        }));
        return
      }
    }
    l ? ! function() {
      var e;
      let n = null !== (e = null == et ? void 0 : et.pid) && void 0 !== e ? e : null;
      (0, d.openModalLazy)(async () => {
        let {
          default: e
        } = await t.e("74300").then(t.bind(t, 566852));
        return t => (0, a.jsx)(e, {
          ...t,
          handleStream: ej,
          pid: n
        })
      })
    }() : ej()
  }
  let eG = i.useCallback(e => {
      eC(e), null != e && (ec(2), e_(!0))
    }, []),
    eU = i.useCallback(e => {
      ep(e), ec(z ? 1 : 2)
    }, [z]),
    eb = function(e) {
      switch (e) {
        case 1:
          return k.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
        case 2:
          return null;
        default:
          return k.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
      }
    }(eu),
    ew = (0, a.jsx)(d.ModalHeader, {
      className: V.modalHeader,
      separator: !1,
      children: (0, a.jsxs)(R.Z, {
        direction: R.Z.Direction.VERTICAL,
        align: R.Z.Align.CENTER,
        className: V.header,
        children: [(0, a.jsx)(d.Heading, {
          variant: "heading-xl/semibold",
          id: eo,
          className: V.headerText,
          children: k.Z.Messages.GO_LIVE_MODAL_TITLE
        }), null != eb ? (0, a.jsx)(d.Text, {
          className: V.headerDescription,
          variant: "text-md/normal",
          color: "text-normal",
          children: eb
        }) : null]
      })
    }),
    eB = (0, a.jsxs)(d.Slides, {
      springConfig: {
        ...u.config.stiff,
        clamp: !0
      },
      activeSlide: eu,
      width: 480,
      onSlideReady: em,
      children: [(0, a.jsx)(d.Slide, {
        id: 0,
        children: (0, a.jsx)("div", {
          className: V.modalSize,
          children: (0, a.jsx)(G.Z, {
            onSelectGuild: eU
          })
        })
      }), (0, a.jsx)(d.Slide, {
        id: 1,
        children: (0, a.jsx)("div", {
          className: V.modalSize,
          children: (0, a.jsx)(U.Z, {
            selectedSource: eg,
            onChangeSelectedSource: eG
          })
        })
      }), (0, a.jsx)(d.Slide, {
        id: 2,
        children: (0, a.jsx)("div", {
          className: V.modalSize,
          children: (0, a.jsx)(D.Z, {
            selectedChannelId: null !== (r = null == en ? void 0 : en.id) && void 0 !== r ? r : eS,
            selectedPreset: eI,
            selectedResolution: ef,
            selectedSource: eg,
            selectedFPS: eT,
            sound: ev,
            sourceChanged: eE,
            selectSource: z,
            onChangeSelectedFPS: e => eP(eI, ef, e),
            onChangeSelectedResolution: e => eP(eI, e, eT),
            onChangeSelectedPreset: e => eP(e, ef, eT),
            onChangeSelectedChannelId: eh,
            onChangeSelectedSource: eG,
            onChangeSource: () => ec(1),
            onChangeAudioDevice: e => eN(e),
            onChangeGuild: () => ec(0),
            onChangeSound: e => eL(e),
            onClose: Q,
            selectedGuildId: eM,
            targetGuildPremiumTier: ea,
            selectGuild: F,
            isAnimationDone: 2 === ed && q === d.ModalTransitionState.ENTERED
          })
        })
      })]
    }),
    ey = function(e, n, t, l) {
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
    }(eu, F, z, eE),
    ek = 2 !== eu || null == eg && null == et || null == eO,
    eV = (0, a.jsxs)(d.ModalFooter, {
      justify: null == ey ? R.Z.Justify.START : R.Z.Justify.BETWEEN,
      children: [(0, a.jsx)(d.Button, {
        type: "submit",
        size: d.Button.Sizes.SMALL,
        disabled: ek,
        autoFocus: !0,
        children: k.Z.Messages.GO_LIVE_MODAL_CTA
      }), null == ey ? (0, a.jsx)(d.Button, {
        className: V.cancelButton,
        look: d.Button.Looks.LINK,
        size: d.Button.Sizes.SMALL,
        color: d.ButtonColors.PRIMARY,
        onClick: Q,
        children: k.Z.Messages.CANCEL
      }) : (0, a.jsx)(d.Button, {
        size: d.Button.Sizes.SMALL,
        color: d.ButtonColors.PRIMARY,
        onClick: () => ec(ey),
        children: k.Z.Messages.BACK
      })]
    });
  return (0, a.jsx)(S.Z, {
    page: B.ZY5.GO_LIVE_MODAL,
    children: (0, a.jsxs)(d.ModalRoot, {
      "aria-labelledby": eo,
      transitionState: q,
      size: d.ModalSize.DYNAMIC,
      className: V.modalSize,
      children: [(0, a.jsx)(d.ModalCloseButton, {
        onClick: Q,
        className: V.modalCloseButton
      }), (0, a.jsx)("div", {
        className: V.art
      }), (0, a.jsxs)("form", {
        onSubmit: eD,
        children: [ew, eB, eV]
      })]
    })
  })
}
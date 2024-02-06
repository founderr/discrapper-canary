"use strict";
l.r(t), l.d(t, {
  default: function() {
    return B
  }
}), l("222007");
var a, n, s = l("37983"),
  r = l("884691"),
  i = l("627445"),
  u = l.n(i),
  o = l("907002"),
  d = l("446674"),
  c = l("77078"),
  f = l("404118"),
  m = l("987317"),
  S = l("990766"),
  E = l("901582"),
  C = l("299285"),
  h = l("928609"),
  g = l("268491"),
  _ = l("42203"),
  N = l("305961"),
  p = l("42887"),
  I = l("568307"),
  x = l("18494"),
  v = l("697218"),
  A = l("703370"),
  R = l("145131"),
  T = l("476765"),
  L = l("599110"),
  O = l("773336"),
  j = l("50885"),
  M = l("773356"),
  D = l("7738"),
  P = l("375202"),
  b = l("636909"),
  G = l("934054"),
  U = l("23922"),
  w = l("16750"),
  y = l("686298"),
  F = l("49111"),
  k = l("180524"),
  V = l("782340"),
  H = l("770420");
(n = a || (a = {}))[n.GUILD = 0] = "GUILD", n[n.SOURCE = 1] = "SOURCE", n[n.CONFIRM = 2] = "CONFIRM";

function B(e) {
  var t, a, n, i, B;
  let {
    selectGuild: W = !1,
    selectSource: z = !0,
    guildId: K,
    analyticsLocation: Y,
    onClose: Z,
    transitionState: J
  } = e, {
    preset: Q,
    resolution: X,
    fps: q
  } = (0, d.useStateFromStoresObject)([g.default], () => g.default.getState()), $ = (0, d.useStateFromStores)([x.default, _.default], () => _.default.getChannel(x.default.getVoiceChannelId())), ee = (0, d.useStateFromStores)([I.default, A.default], () => (0, O.isWindows)() ? (0, P.default)(I.default, A.default) : null), et = (0, d.useStateFromStores)([v.default], () => {
    let e = v.default.getCurrentUser();
    return u(null != e, "GoLiveModal: user cannot be undefined"), e
  }), el = null !== (t = null == $ ? void 0 : $.getGuildId()) && void 0 !== t ? t : K, ea = (0, d.useStateFromStores)([N.default], () => {
    var e;
    return null != el ? null === (e = N.default.getGuild(el)) || void 0 === e ? void 0 : e.premiumTier : null
  }), [en, es] = null !== (a = (0, D.default)(Q, et, ea)) && void 0 !== a ? a : [y.ApplicationStreamResolutions.RESOLUTION_720, y.ApplicationStreamFPS.FPS_30];
  Q !== y.ApplicationStreamPresets.PRESET_CUSTOM && (X = en, q = es);
  let er = (0, T.useUID)();
  let [ei, eu] = r.useState((i = W, B = z, i ? 0 : B ? 1 : 2)), [eo, ed] = r.useState(null), [ec, ef] = r.useState(!1), [em, eS] = r.useState(null), [eE, eC] = r.useState(null), [eh, eg] = r.useState(null), [e_, eN] = r.useState(Q), [ep, eI] = r.useState(X), [ex, ev] = r.useState(q), [eA, eR] = r.useState(!0), [eT, eL] = r.useState(null != K ? K : null), eO = null !== (n = null == $ ? void 0 : $.id) && void 0 !== n ? n : em;
  r.useEffect(() => {
    let e = (0, O.isWindows)() ? (0, P.default)(I.default, A.default) : null,
      t = (null == e ? void 0 : e.id) != null ? C.default.getApplication(e.id) : null;
    L.default.track(F.AnalyticEvents.OPEN_MODAL, {
      type: "Go Live Modal",
      application_id: null == t ? void 0 : t.id,
      application_name: null == e ? void 0 : e.name,
      game_id: null == t ? void 0 : t.id,
      location_section: Y
    })
  }, [Y]);

  function ej() {
    ! function() {
      var e, t;
      u(null != ee || null != eE, "got nothing to stream");
      let l = null !== (e = null == $ ? void 0 : $.id) && void 0 !== e ? e : em;
      u(null != l, "Received null target channel ID");
      let a = _.default.getChannel(l),
        n = null !== (t = null == a ? void 0 : a.getGuildId()) && void 0 !== t ? t : K;
      null == $ && m.default.selectVoiceChannel(l);
      let s = e_,
        r = ep,
        i = ex;
      !(0, M.default)(s, r, i, et, ea) && (s = y.ApplicationStreamPresets.PRESET_VIDEO, r = y.ApplicationStreamResolutions.RESOLUTION_720, i = y.ApplicationStreamFPS.FPS_30), (0, S.updateStreamSettings)({
        preset: s,
        resolution: r,
        frameRate: i
      });
      let o = (0, w.default)(ee, eE, I.default.getRunningGames()),
        d = !(0, O.isWindows)() || null == o || (null == eE ? void 0 : eE.id.startsWith("camera:")),
        c = d || null == o ? null : o.pid;
      (0, S.startStream)(n, l, {
        pid: c,
        sourceId: null == c && null != eE ? eE.id : null,
        sourceName: null == c && null != eE ? eE.name : null,
        audioSourceId: eh,
        sound: eA
      }), (async () => {
        let e = await h.default.hasPermission(k.NativePermissionTypes.SCREEN_RECORDING, {
          showAuthorizationError: !1
        });
        !e && f.default.show({
          title: V.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
          body: V.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
        })
      })()
    }(), Z()
  }
  let eM = r.useCallback((e, t, l) => {
    let a = (0, D.default)(e, et, ea),
      [n, s] = null != a ? a : [t, l];
    if (e !== e_ && (t = n, l = s), !(0, M.default)(e, t, l, et, ea)) {
      let [e, a] = (0, D.default)(y.ApplicationStreamPresets.PRESET_VIDEO, et, ea);
      t = e, l = a
    }
    l !== ex && ev(l), t !== ep && eI(t), n !== t || s !== l ? eN(y.ApplicationStreamPresets.PRESET_CUSTOM) : e !== e_ && eN(e)
  }, [et, ea, ex, ep, e_]);
  async function eD(e) {
    if (e.preventDefault(), 1 === ei) return eu(2);
    let t = (0, w.default)(ee, eE, I.default.getRunningGames()),
      a = j.default.supportsFeature(F.NativeFeatures.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated);
    if ((0, O.isMac)() && null != eE) {
      let e = await p.default.getMediaEngine().getDesktopSources(),
        t = eE.id;
      if (t.startsWith("screen") && e.length > 0 && !e.some(e => e.includes(t))) {
        var n, r;
        n = t, r = e, L.default.track(F.AnalyticEvents.SCREENSHARE_FAILED, {
          source_id: n,
          screens: r.length
        }), (0, c.openModal)(e => (0, s.jsx)(c.ConfirmModal, {
          header: V.default.Messages.SCREENSHARE_RELAUNCH,
          confirmText: V.default.Messages.OKAY,
          cancelText: V.default.Messages.CANCEL,
          onConfirm: () => j.default.relaunch(),
          ...e,
          children: (0, s.jsx)(c.Text, {
            variant: "text-md/normal",
            children: V.default.Messages.SCREENSHARE_RELAUNCH_BODY
          })
        }));
        return
      }
    }
    a ? ! function() {
      var e;
      let t = null !== (e = null == ee ? void 0 : ee.pid) && void 0 !== e ? e : null;
      (0, c.openModalLazy)(async () => {
        let {
          default: e
        } = await l.el("426319").then(l.bind(l, "426319"));
        return l => (0, s.jsx)(e, {
          ...l,
          handleStream: ej,
          pid: t
        })
      })
    }() : ej()
  }
  let eP = r.useCallback(e => {
      eC(e), null != e && (eu(2), ef(!0))
    }, []),
    eb = r.useCallback(e => {
      eL(e), eu(z ? 1 : 2)
    }, [z]),
    eG = function(e) {
      switch (e) {
        case 1:
          return V.default.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
        case 2:
          return null;
        default:
          return V.default.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
      }
    }(ei),
    eU = (0, s.jsx)(c.ModalHeader, {
      className: H.modalHeader,
      separator: !1,
      children: (0, s.jsxs)(R.default, {
        direction: R.default.Direction.VERTICAL,
        align: R.default.Align.CENTER,
        className: H.header,
        children: [(0, s.jsx)(c.Heading, {
          variant: "heading-xl/semibold",
          id: er,
          className: H.headerText,
          children: V.default.Messages.GO_LIVE_MODAL_TITLE
        }), null != eG ? (0, s.jsx)(c.Text, {
          className: H.headerDescription,
          variant: "text-md/normal",
          color: "text-normal",
          children: eG
        }) : null]
      })
    }),
    ew = (0, s.jsxs)(c.Slides, {
      springConfig: {
        ...o.config.stiff,
        clamp: !0
      },
      activeSlide: ei,
      width: 480,
      onSlideReady: ed,
      children: [(0, s.jsx)(c.Slide, {
        id: 0,
        children: (0, s.jsx)("div", {
          className: H.modalSize,
          children: (0, s.jsx)(G.default, {
            onSelectGuild: eb
          })
        })
      }), (0, s.jsx)(c.Slide, {
        id: 1,
        children: (0, s.jsx)("div", {
          className: H.modalSize,
          children: (0, s.jsx)(U.default, {
            selectedSource: eE,
            onChangeSelectedSource: eP
          })
        })
      }), (0, s.jsx)(c.Slide, {
        id: 2,
        children: (0, s.jsx)("div", {
          className: H.modalSize,
          children: (0, s.jsx)(b.default, {
            selectedChannelId: em,
            selectedPreset: e_,
            selectedResolution: ep,
            selectedSource: eE,
            selectedFPS: ex,
            sound: eA,
            sourceChanged: ec,
            selectSource: z,
            onChangeSelectedFPS: e => eM(e_, ep, e),
            onChangeSelectedResolution: e => eM(e_, e, ex),
            onChangeSelectedPreset: e => eM(e, ep, ex),
            onChangeSelectedChannelId: eS,
            onChangeSelectedSource: eP,
            onChangeSource: () => eu(1),
            onChangeAudioDevice: e => eg(e),
            onChangeGuild: () => eu(0),
            onChangeSound: e => eR(e),
            onClose: Z,
            selectedGuildId: eT,
            targetGuildPremiumTier: ea,
            selectGuild: W,
            isAnimationDone: 2 === eo && J === c.ModalTransitionState.ENTERED
          })
        })
      })]
    }),
    ey = function(e, t, l, a) {
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
    }(ei, W, z, ec),
    eF = 2 !== ei || null == eE && null == ee || null == eO,
    ek = (0, s.jsxs)(c.ModalFooter, {
      justify: null == ey ? R.default.Justify.START : R.default.Justify.BETWEEN,
      children: [(0, s.jsx)(c.Button, {
        type: "submit",
        size: c.Button.Sizes.SMALL,
        disabled: eF,
        autoFocus: !0,
        children: V.default.Messages.GO_LIVE_MODAL_CTA
      }), null == ey ? (0, s.jsx)(c.Button, {
        className: H.cancelButton,
        look: c.Button.Looks.LINK,
        size: c.Button.Sizes.SMALL,
        color: c.ButtonColors.PRIMARY,
        onClick: Z,
        children: V.default.Messages.CANCEL
      }) : (0, s.jsx)(c.Button, {
        size: c.Button.Sizes.SMALL,
        color: c.ButtonColors.PRIMARY,
        onClick: () => eu(ey),
        children: V.default.Messages.BACK
      })]
    });
  return (0, s.jsx)(E.default, {
    page: F.AnalyticsPages.GO_LIVE_MODAL,
    children: (0, s.jsxs)(c.ModalRoot, {
      "aria-labelledby": er,
      transitionState: J,
      size: c.ModalSize.DYNAMIC,
      className: H.modalSize,
      children: [(0, s.jsx)(c.ModalCloseButton, {
        onClick: Z,
        className: H.modalCloseButton
      }), (0, s.jsx)("div", {
        className: H.art
      }), (0, s.jsxs)("form", {
        onSubmit: eD,
        children: [eU, ew, ek]
      })]
    })
  })
}
"use strict";
l.r(t), l.d(t, {
  default: function() {
    return B
  }
}), l("222007");
var n, a, s = l("37983"),
  r = l("884691"),
  i = l("627445"),
  u = l.n(i),
  o = l("907002"),
  d = l("446674"),
  c = l("77078"),
  f = l("404118"),
  m = l("987317"),
  S = l("990766"),
  C = l("901582"),
  E = l("299285"),
  h = l("928609"),
  N = l("268491"),
  g = l("42203"),
  _ = l("305961"),
  p = l("42887"),
  I = l("568307"),
  x = l("18494"),
  v = l("697218"),
  A = l("703370"),
  R = l("145131"),
  T = l("476765"),
  L = l("599110"),
  M = l("773336"),
  j = l("50885"),
  O = l("773356"),
  D = l("7738"),
  P = l("375202"),
  b = l("636909"),
  G = l("934054"),
  y = l("23922"),
  U = l("16750"),
  w = l("686298"),
  V = l("49111"),
  H = l("180524"),
  F = l("782340"),
  k = l("770420");
(a = n || (n = {}))[a.GUILD = 0] = "GUILD", a[a.SOURCE = 1] = "SOURCE", a[a.CONFIRM = 2] = "CONFIRM";

function B(e) {
  var t, n, a, i, B;
  let {
    selectGuild: W = !1,
    selectSource: z = !0,
    guildId: Z,
    analyticsLocation: K,
    onClose: Y,
    transitionState: J
  } = e, {
    preset: X,
    resolution: Q,
    fps: q
  } = (0, d.useStateFromStoresObject)([N.default], () => N.default.getState()), $ = (0, d.useStateFromStores)([x.default, g.default], () => g.default.getChannel(x.default.getVoiceChannelId())), ee = (0, d.useStateFromStores)([I.default, A.default], () => (0, M.isWindows)() ? (0, P.default)(I.default, A.default) : null), et = (0, d.useStateFromStores)([v.default], () => {
    let e = v.default.getCurrentUser();
    return u(null != e, "GoLiveModal: user cannot be undefined"), e
  }), el = null !== (t = null == $ ? void 0 : $.getGuildId()) && void 0 !== t ? t : Z, en = (0, d.useStateFromStores)([_.default], () => {
    var e;
    return null != el ? null === (e = _.default.getGuild(el)) || void 0 === e ? void 0 : e.premiumTier : null
  }), [ea, es] = null !== (n = (0, D.default)(X, et, en)) && void 0 !== n ? n : [w.ApplicationStreamResolutions.RESOLUTION_720, w.ApplicationStreamFPS.FPS_30];
  X !== w.ApplicationStreamPresets.PRESET_CUSTOM && (Q = ea, q = es);
  let er = (0, T.useUID)();
  let [ei, eu] = r.useState((i = W, B = z, i ? 0 : B ? 1 : 2)), [eo, ed] = r.useState(null), [ec, ef] = r.useState(!1), [em, eS] = r.useState(null), [eC, eE] = r.useState(null), [eh, eN] = r.useState(null), [eg, e_] = r.useState(X), [ep, eI] = r.useState(Q), [ex, ev] = r.useState(q), [eA, eR] = r.useState(!0), [eT, eL] = r.useState(null != Z ? Z : null), eM = null !== (a = null == $ ? void 0 : $.id) && void 0 !== a ? a : em;
  r.useEffect(() => {
    let e = (0, M.isWindows)() ? (0, P.default)(I.default, A.default) : null,
      t = (null == e ? void 0 : e.id) != null ? E.default.getApplication(e.id) : null;
    L.default.track(V.AnalyticEvents.OPEN_MODAL, {
      type: "Go Live Modal",
      application_id: null == t ? void 0 : t.id,
      application_name: null == e ? void 0 : e.name,
      game_id: null == t ? void 0 : t.id,
      location_section: K
    })
  }, [K]);

  function ej() {
    ! function() {
      var e, t;
      u(null != ee || null != eC, "got nothing to stream");
      let l = null !== (e = null == $ ? void 0 : $.id) && void 0 !== e ? e : em;
      u(null != l, "Received null target channel ID");
      let n = g.default.getChannel(l),
        a = null !== (t = null == n ? void 0 : n.getGuildId()) && void 0 !== t ? t : Z;
      null == $ && m.default.selectVoiceChannel(l);
      let s = eg,
        r = ep,
        i = ex;
      !(0, O.default)(s, r, i, et, en) && (s = w.ApplicationStreamPresets.PRESET_VIDEO, r = w.ApplicationStreamResolutions.RESOLUTION_720, i = w.ApplicationStreamFPS.FPS_30), (0, S.updateStreamSettings)({
        preset: s,
        resolution: r,
        frameRate: i
      });
      let o = (0, U.default)(ee, eC, I.default.getRunningGames()),
        d = !(0, M.isWindows)() || null == o || (null == eC ? void 0 : eC.id.startsWith("camera:")),
        c = d || null == o ? null : o.pid;
      (0, S.startStream)(a, l, {
        pid: c,
        sourceId: null == c && null != eC ? eC.id : null,
        sourceName: null == c && null != eC ? eC.name : null,
        audioSourceId: eh,
        sound: eA
      }), (async () => {
        let e = await h.default.hasPermission(H.NativePermissionTypes.SCREEN_RECORDING, {
          showAuthorizationError: !1
        });
        !e && f.default.show({
          title: F.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
          body: F.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
        })
      })()
    }(), Y()
  }
  let eO = r.useCallback((e, t, l) => {
    let n = (0, D.default)(e, et, en),
      [a, s] = null != n ? n : [t, l];
    if (e !== eg && (t = a, l = s), !(0, O.default)(e, t, l, et, en)) {
      let [e, n] = (0, D.default)(w.ApplicationStreamPresets.PRESET_VIDEO, et, en);
      t = e, l = n
    }
    l !== ex && ev(l), t !== ep && eI(t), a !== t || s !== l ? e_(w.ApplicationStreamPresets.PRESET_CUSTOM) : e !== eg && e_(e)
  }, [et, en, ex, ep, eg]);
  async function eD(e) {
    if (e.preventDefault(), 1 === ei) return eu(2);
    let t = (0, U.default)(ee, eC, I.default.getRunningGames()),
      n = j.default.supportsFeature(V.NativeFeatures.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated);
    if ((0, M.isMac)() && null != eC) {
      let e = await p.default.getMediaEngine().getDesktopSources(),
        t = eC.id;
      if (t.startsWith("screen") && e.length > 0 && !e.some(e => e.includes(t))) {
        var a, r;
        a = t, r = e, L.default.track(V.AnalyticEvents.SCREENSHARE_FAILED, {
          source_id: a,
          screens: r.length
        }), (0, c.openModal)(e => (0, s.jsx)(c.ConfirmModal, {
          header: F.default.Messages.SCREENSHARE_RELAUNCH,
          confirmText: F.default.Messages.OKAY,
          cancelText: F.default.Messages.CANCEL,
          onConfirm: () => j.default.relaunch(),
          ...e,
          children: (0, s.jsx)(c.Text, {
            variant: "text-md/normal",
            children: F.default.Messages.SCREENSHARE_RELAUNCH_BODY
          })
        }));
        return
      }
    }
    n ? ! function() {
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
      eE(e), null != e && (eu(2), ef(!0))
    }, []),
    eb = r.useCallback(e => {
      eL(e), eu(z ? 1 : 2)
    }, [z]),
    eG = function(e) {
      switch (e) {
        case 1:
          return F.default.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
        case 2:
          return null;
        default:
          return F.default.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
      }
    }(ei),
    ey = (0, s.jsx)(c.ModalHeader, {
      className: k.modalHeader,
      separator: !1,
      children: (0, s.jsxs)(R.default, {
        direction: R.default.Direction.VERTICAL,
        align: R.default.Align.CENTER,
        className: k.header,
        children: [(0, s.jsx)(c.Heading, {
          variant: "heading-xl/semibold",
          id: er,
          className: k.headerText,
          children: F.default.Messages.GO_LIVE_MODAL_TITLE
        }), null != eG ? (0, s.jsx)(c.Text, {
          className: k.headerDescription,
          variant: "text-md/normal",
          color: "text-normal",
          children: eG
        }) : null]
      })
    }),
    eU = (0, s.jsxs)(c.Slides, {
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
          className: k.modalSize,
          children: (0, s.jsx)(G.default, {
            onSelectGuild: eb
          })
        })
      }), (0, s.jsx)(c.Slide, {
        id: 1,
        children: (0, s.jsx)("div", {
          className: k.modalSize,
          children: (0, s.jsx)(y.default, {
            selectedSource: eC,
            onChangeSelectedSource: eP
          })
        })
      }), (0, s.jsx)(c.Slide, {
        id: 2,
        children: (0, s.jsx)("div", {
          className: k.modalSize,
          children: (0, s.jsx)(b.default, {
            selectedChannelId: em,
            selectedPreset: eg,
            selectedResolution: ep,
            selectedSource: eC,
            selectedFPS: ex,
            sound: eA,
            sourceChanged: ec,
            selectSource: z,
            onChangeSelectedFPS: e => eO(eg, ep, e),
            onChangeSelectedResolution: e => eO(eg, e, ex),
            onChangeSelectedPreset: e => eO(e, ep, ex),
            onChangeSelectedChannelId: eS,
            onChangeSelectedSource: eP,
            onChangeSource: () => eu(1),
            onChangeAudioDevice: e => eN(e),
            onChangeGuild: () => eu(0),
            onChangeSound: e => eR(e),
            onClose: Y,
            selectedGuildId: eT,
            targetGuildPremiumTier: en,
            selectGuild: W,
            isAnimationDone: 2 === eo && J === c.ModalTransitionState.ENTERED
          })
        })
      })]
    }),
    ew = function(e, t, l, n) {
      switch (e) {
        case 1:
          return t ? 0 : null;
        case 2:
          if (n) return 1;
          if (!l && t) return 0;
          return null;
        default:
          return null
      }
    }(ei, W, z, ec),
    eV = 2 !== ei || null == eC && null == ee || null == eM,
    eH = (0, s.jsxs)(c.ModalFooter, {
      justify: null == ew ? R.default.Justify.START : R.default.Justify.BETWEEN,
      children: [(0, s.jsx)(c.Button, {
        type: "submit",
        size: c.Button.Sizes.SMALL,
        disabled: eV,
        autoFocus: !0,
        children: F.default.Messages.GO_LIVE_MODAL_CTA
      }), null == ew ? (0, s.jsx)(c.Button, {
        className: k.cancelButton,
        look: c.Button.Looks.LINK,
        size: c.Button.Sizes.SMALL,
        color: c.ButtonColors.PRIMARY,
        onClick: Y,
        children: F.default.Messages.CANCEL
      }) : (0, s.jsx)(c.Button, {
        size: c.Button.Sizes.SMALL,
        color: c.ButtonColors.PRIMARY,
        onClick: () => eu(ew),
        children: F.default.Messages.BACK
      })]
    });
  return (0, s.jsx)(C.default, {
    page: V.AnalyticsPages.GO_LIVE_MODAL,
    children: (0, s.jsxs)(c.ModalRoot, {
      "aria-labelledby": er,
      transitionState: J,
      size: c.ModalSize.DYNAMIC,
      className: k.modalSize,
      children: [(0, s.jsx)(c.ModalCloseButton, {
        onClick: Y,
        className: k.modalCloseButton
      }), (0, s.jsx)("div", {
        className: k.art
      }), (0, s.jsxs)("form", {
        onSubmit: eD,
        children: [ey, eU, eH]
      })]
    })
  })
}
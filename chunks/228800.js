"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
}), n("222007"), n("70102");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("31745"),
  u = n("77078"),
  d = n("371642"),
  c = n("84339"),
  f = n("244201"),
  h = n("427953"),
  C = n("871388"),
  p = n("389153"),
  E = n("56947"),
  m = n("386045"),
  g = n("734217"),
  S = n("139321"),
  _ = n("562228"),
  T = n("140596"),
  A = n("300322"),
  M = n("845579"),
  N = n("982108"),
  I = n("778588"),
  v = n("957255"),
  L = n("101125"),
  R = n("351825"),
  x = n("738602"),
  y = n("430025"),
  O = n("659500"),
  D = n("773336"),
  P = n("412861"),
  j = n("79254"),
  b = n("64096"),
  H = n("49111"),
  F = n("80028"),
  U = n("782340"),
  k = n("465597"),
  w = s.memo(function(e) {
    var t, l, w;
    let G, {
        className: B,
        channel: V,
        draftType: W,
        editorTextContent: Z,
        setValue: z,
        canOnlyUseTextCommands: K
      } = e,
      Y = (0, f.useAppContext)(),
      X = s.useRef(null),
      q = (0, r.useStateFromStores)([L.default], () => L.default.getActivities()),
      J = (0, r.useStateFromStores)([m.default], () => m.default.getSettings().clipsEnabled),
      Q = (0, r.useStateFromStores)([m.default], () => m.default.getLastClipsSession()),
      $ = (0, r.useStateFromStoresArray)([m.default], () => m.default.getNewClipIds()),
      ee = (0, r.useStateFromStores)([N.default], () => null == N.default.getCurrentSidebarChannelId(V.id)),
      {
        showClipsHeaderEntrypoint: et
      } = E.ClipsExperiment.useExperiment({
        location: "ChannelAttachButton"
      }, {
        autoTrackExposure: !1
      }),
      en = (0, r.useStateFromStores)([S.HotspotStore], () => S.HotspotStore.hasHotspot(S.HotspotLocations.CLIPS_CHANNEL_ATTACH_REMINDER)),
      ea = (0, u.useModalsStore)(e => (0, u.hasModalOpenSelector)(e, F.CLIPS_GALLERY_MODAL_KEY)),
      es = (0, r.useStateFromStores)([I.default], () => I.default.hasLayers()),
      el = (0, r.useStateFromStores)([m.default], () => m.default.hasClips()),
      [ei, er] = s.useState(null),
      eo = (0, E.useEnableClips)() && (J || el),
      eu = V.isPrivate(),
      ed = (0, r.useStateFromStores)([v.default], () => eu || v.default.can(H.Permissions.ATTACH_FILES, V) && v.default.can(H.Permissions.SEND_MESSAGES, V)),
      ec = (0, c.default)(Q);
    (null == ec ? void 0 : ec.newClipIds.length) !== (null == Q ? void 0 : Q.newClipIds.length) && (null !== (t = null == Q ? void 0 : Q.newClipIds.length) && void 0 !== t ? t : 0) > 0 && null == ei && en && ee && !ea && !et && !es && er("recentClips");
    let ef = (e, t, n) => {
      null != t && "ETOOLARGE" === t.code ? (0, P.showUploadFileSizeExceededError)(V, []) : (0, P.promptToUpload)(e, V, W, {
        requireConfirm: !0,
        showLargeMessageDialog: n
      }), O.ComponentDispatch.dispatchToLastSubscribed(H.ComponentActions.TEXTAREA_FOCUS)
    };

    function eh() {
      (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("167573").then(n.bind(n, "167573"));
        return t => (0, a.jsx)(e, {
          ...t,
          channelId: V.id
        })
      }, {
        modalKey: F.CLIPS_GALLERY_MODAL_KEY
      }), er(null)
    }
    s.useEffect(() => {
      let e = () => {
        var e;
        return null === (e = X.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
      };
      return O.ComponentDispatch.subscribe(H.ComponentActions.UPLOAD_FILE, e), () => {
        O.ComponentDispatch.unsubscribe(H.ComponentActions.UPLOAD_FILE, e)
      }
    });
    let eC = (0, A.useCanStartPublicThread)(V),
      ep = (0, A.useCanStartPrivateThread)(V),
      eE = !M.UseLegacyChatInput.useSetting() && !(0, D.isAndroidWeb)() && null != window.ResizeObserver,
      em = (0, r.useStateFromStores)([v.default, T.default], () => (0, p.canUseApplicationCommands)(v.default, T.default, K, V)),
      eg = (0, _.useCanPostPollsInChannel)(null != V ? V : void 0),
      eS = (0, u.useRedesignIconContext)().enabled,
      e_ = (0, h.useActivitiesInTextButtonVisibility)(V.id, "ChannelAttachButton"),
      eT = null !== (l = null == $ ? void 0 : $.length) && void 0 !== l ? l : 0,
      eA = (0, b.default)({
        canAttachFiles: ed,
        canStartThreads: eC || ep,
        useSlate: eE,
        hasClips: eo,
        canUseApplicationCommands: em,
        channel: V,
        activities: q,
        newClipsCount: eT,
        canPostPolls: eg,
        canLaunchActivities: null !== (w = null == e_ ? void 0 : e_.showInOmniButtonMenu) && void 0 !== w && w,
        appContext: Y
      });
    if (0 === eA.length) return null;
    let eM = q.some(e => (0, C.default)(e, H.ActivityFlags.SYNC)),
      eN = q.some(e => (0, C.default)(e, H.ActivityFlags.JOIN) && !(0, C.default)(e, H.ActivityFlags.EMBEDDED)) || eM;
    G = eS ? (0, a.jsx)(o.CirclePlusIcon, {
      className: k.attachButtonIcon,
      colorClass: k.attachButtonPlus
    }) : eN ? (0, a.jsx)(y.default, {
      className: k.attachButtonIcon,
      foreground: k.attachButtonPlay,
      background: k.attachButtonPlus,
      width: 24,
      height: 24
    }) : eT > 0 ? (0, a.jsx)(x.default, {
      className: k.attachButtonIcon,
      foreground: k.attachButtonClip,
      background: k.attachButtonPlus,
      width: 24,
      height: 24
    }) : (0, a.jsx)(R.default, {
      className: k.attachButtonIcon,
      foreground: k.attachButtonPlus,
      width: 24,
      height: 24
    });
    let eI = (0, a.jsx)(u.Popout, {
      shouldShow: null != ei,
      animation: u.Popout.Animation.NONE,
      align: "recentClips" === ei ? "center" : "left",
      position: "top",
      positionKey: null != ei ? ei : "null",
      onRequestOpen: () => er("attachMenu"),
      onRequestClose: () => {
        !(0, u.hasAnyModalOpen)() && er(null)
      },
      renderPopout: e => {
        switch (ei) {
          case "recentClips":
            return (0, a.jsx)(g.default, {
              ...e,
              onOpenClips: eh,
              lastClipsSession: Q
            });
          case "attachMenu":
            return (0, a.jsx)(j.default, {
              ...e,
              onClose: () => er(null),
              options: eA,
              channel: V,
              onFileUpload: () => {
                var e;
                return null === (e = X.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
              },
              draftType: W,
              editorTextContent: Z,
              setValue: z,
              openClips: eh
            });
          default:
            throw Error("Invalid popout type provided")
        }
      },
      children: e => (0, a.jsx)(u.Button, {
        look: u.Button.Looks.BLANK,
        size: u.Button.Sizes.NONE,
        className: i(k.attachButton, B),
        innerClassName: k.attachButtonInner,
        "aria-label": U.default.Messages.CHAT_ATTACH_UPLOAD_OR_INVITE,
        onDoubleClick: ed ? () => {
          var e;
          return null === (e = X.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
        } : void 0,
        ...e,
        children: G
      })
    });
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: k.uploadInput,
        children: (0, a.jsx)(d.default, {
          ref: X,
          onChange: e => {
            ef(e.currentTarget.files, e.currentTarget.err), e.currentTarget.value = ""
          },
          multiple: V.rateLimitPerUser <= 0,
          tabIndex: -1,
          "aria-hidden": !0
        })
      }), (0, a.jsx)("div", {
        className: k.attachWrapper,
        children: eI
      })]
    })
  })
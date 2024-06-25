n(47120), n(411104);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(442837),
  o = n(704215),
  c = n(481060),
  u = n(53281),
  d = n(110924),
  h = n(40851),
  m = n(867176),
  E = n(620662),
  p = n(924557),
  g = n(435064),
  f = n(712114),
  C = n(605236),
  _ = n(536442),
  I = n(79390),
  x = n(665906),
  T = n(695346),
  N = n(433355),
  Z = n(819640),
  S = n(375954),
  v = n(496675),
  A = n(885110),
  M = n(627553),
  R = n(38761),
  j = n(585483),
  L = n(358085),
  O = n(127654),
  P = n(316595),
  y = n(193910),
  b = n(951211),
  D = n(981631),
  U = n(356659),
  k = n(921944),
  w = n(689938),
  H = n(81023);
t.Z = i.memo(function(e) {
  var t, s;
  let G, {
      className: B,
      channel: V,
      draftType: F,
      editorTextContent: z,
      setValue: W,
      canOnlyUseTextCommands: Y
    } = e,
    K = (0, h.bp)(),
    q = i.useRef(null),
    X = (0, r.e7)([A.Z], () => A.Z.getActivities()),
    Q = (0, r.e7)([g.Z], () => g.Z.getSettings().clipsEnabled),
    J = (0, r.e7)([g.Z], () => g.Z.getLastClipsSession()),
    $ = (0, r.Wu)([g.Z], () => g.Z.getNewClipIds()),
    ee = (0, r.e7)([N.ZP], () => null == N.ZP.getCurrentSidebarChannelId(V.id)),
    {
      showClipsHeaderEntrypoint: et
    } = p.NV.useExperiment({
      location: "ChannelAttachButton"
    }, {
      autoTrackExposure: !1
    }),
    en = (0, r.e7)([_.qc], () => _.qc.hasHotspot(_.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
    el = (0, c.useModalsStore)(e => (0, c.hasModalOpenSelector)(e, U.Qr)),
    ei = (0, r.e7)([Z.Z], () => Z.Z.hasLayers()),
    es = (0, r.e7)([g.Z], () => g.Z.hasClips()),
    [ea, er] = i.useState(null),
    eo = (0, p.Go)() && (Q || es),
    ec = V.isPrivate(),
    eu = (0, r.e7)([v.Z], () => ec || v.Z.can(D.Plq.ATTACH_FILES, V) && v.Z.can(D.Plq.SEND_MESSAGES, V)),
    ed = (0, d.Z)(J);
  (null == ed ? void 0 : ed.newClipIds.length) !== (null == J ? void 0 : J.newClipIds.length) && (null !== (t = null == J ? void 0 : J.newClipIds.length) && void 0 !== t ? t : 0) > 0 && null == ea && en && ee && !el && !et && !ei && er("recentClips");
  let eh = (e, t, n) => {
      null != t && "ETOOLARGE" === t.code ? (0, O.G)(V, []) : (0, O.d)(e, V, F, {
        requireConfirm: !0,
        showLargeMessageDialog: n
      }), j.S.dispatchToLastSubscribed(D.CkL.TEXTAREA_FOCUS)
    },
    em = (0, r.e7)([S.Z], () => S.Z.hasCurrentUserSentMessageSinceAppStart());

  function eE() {
    (0, c.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("2668")]).then(n.bind(n, 542055));
      return t => (0, l.jsx)(e, {
        ...t,
        channelId: V.id
      })
    }, {
      modalKey: U.Qr
    }), er(null)
  }
  i.useEffect(() => {
    let e = () => {
      var e;
      return null === (e = q.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
    };
    return j.S.subscribe(D.CkL.UPLOAD_FILE, e), () => {
      j.S.unsubscribe(D.CkL.UPLOAD_FILE, e)
    }
  });
  let ep = (0, x.NE)(V),
    eg = (0, x.Xu)(V),
    ef = !T.dN.useSetting() && !(0, L.isAndroidWeb)() && null != window.ResizeObserver,
    eC = (0, I.UI)(null != V ? V : void 0),
    e_ = (0, c.useRedesignIconContext)().enabled,
    eI = (0, m.qB)(V.id, "ChannelAttachButton"),
    ex = null !== (s = null == $ ? void 0 : $.length) && void 0 !== s ? s : 0,
    eT = (0, b.Z)({
      canAttachFiles: eu,
      canStartThreads: ep || eg,
      useSlate: ef,
      hasClips: eo,
      canUseApplicationCommands: !Y,
      channel: V,
      activities: X,
      newClipsCount: ex,
      canPostPolls: eC,
      canLaunchActivities: eI,
      appContext: K
    });
  if (0 === eT.length) return null;
  let eN = X.some(e => (0, E.Z)(e, D.xjy.SYNC)),
    eZ = X.some(e => (0, E.Z)(e, D.xjy.JOIN) && !(0, E.Z)(e, D.xjy.EMBEDDED)) || eN;
  G = e_ ? (0, l.jsx)(c.CirclePlusIcon, {
    className: H.__invalid_attachButtonIcon,
    colorClass: H.attachButtonPlus
  }) : eZ ? (0, l.jsx)(R.Z, {
    className: H.__invalid_attachButtonIcon,
    foreground: H.attachButtonPlay,
    background: H.attachButtonPlus,
    width: 24,
    height: 24
  }) : ex > 0 ? (0, l.jsx)(M.Z, {
    className: H.__invalid_attachButtonIcon,
    foreground: H.attachButtonClip,
    background: H.attachButtonPlus,
    width: 24,
    height: 24
  }) : (0, l.jsx)(c.CirclePlusIcon, {
    size: "md",
    color: "currentColor",
    className: H.__invalid_attachButtonIcon,
    colorClass: H.attachButtonPlus
  });
  let eS = (0, l.jsx)(c.Popout, {
    shouldShow: null != ea,
    animation: c.Popout.Animation.NONE,
    align: "recentClips" === ea ? "center" : "left",
    position: "top",
    positionKey: null != ea ? ea : "null",
    onRequestOpen: () => {
      em && (0, C.EW)(o.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
        dismissAction: k.L.TAKE_ACTION
      }), er("attachMenu")
    },
    onRequestClose: () => {
      !(0, c.hasAnyModalOpen)() && (em && (0, C.EW)(o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
        dismissAction: k.L.TAKE_ACTION
      }), er(null))
    },
    renderPopout: e => {
      switch (ea) {
        case "recentClips":
          return (0, l.jsx)(f.Z, {
            ...e,
            onOpenClips: eE,
            lastClipsSession: J
          });
        case "attachMenu":
          return (0, l.jsx)(y.Z, {
            ...e,
            onClose: () => er(null),
            options: eT,
            channel: V,
            onFileUpload: () => {
              var e;
              return null === (e = q.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
            },
            draftType: F,
            editorTextContent: z,
            setValue: W,
            openClips: eE
          });
        default:
          throw Error("Invalid popout type provided")
      }
    },
    children: e => (0, l.jsx)(c.Button, {
      look: c.Button.Looks.BLANK,
      size: c.Button.Sizes.NONE,
      className: a()(H.attachButton, B),
      innerClassName: H.attachButtonInner,
      "aria-label": w.Z.Messages.CHAT_ATTACH_UPLOAD_OR_INVITE,
      onDoubleClick: eu ? () => {
        var e;
        return null === (e = q.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
      } : void 0,
      ...e,
      children: G
    })
  });
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: H.uploadInput,
      children: (0, l.jsx)(u.Z, {
        ref: q,
        onChange: e => {
          eh(e.currentTarget.files, e.currentTarget.err), e.currentTarget.value = ""
        },
        multiple: V.rateLimitPerUser <= 0,
        tabIndex: -1,
        "aria-hidden": !0
      })
    }), (0, l.jsx)("div", {
      className: H.attachWrapper,
      children: (0, l.jsx)(P.Z, {
        channel: V,
        isOmniMenuOpen: "attachMenu" === ea,
        openOmniMenu: () => er("attachMenu"),
        children: eS
      })
    })]
  })
})
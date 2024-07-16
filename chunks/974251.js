n(47120), n(411104);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(442837),
  o = n(704215),
  c = n(481060),
  d = n(53281),
  u = n(110924),
  h = n(40851),
  p = n(595519),
  m = n(620662),
  _ = n(424602),
  f = n(924557),
  E = n(435064),
  C = n(712114),
  g = n(605236),
  I = n(536442),
  x = n(79390),
  T = n(665906),
  N = n(695346),
  v = n(433355),
  S = n(819640),
  Z = n(375954),
  A = n(496675),
  M = n(885110),
  b = n(627553),
  R = n(38761),
  j = n(585483),
  L = n(358085),
  P = n(127654),
  O = n(316595),
  y = n(193910),
  D = n(951211),
  k = n(981631),
  U = n(356659),
  w = n(921944),
  B = n(689938),
  H = n(72704);
t.Z = a.memo(function(e) {
  var t, l;
  let G, {
  className: V,
  channel: F,
  draftType: W,
  editorTextContent: z,
  setValue: Y,
  canOnlyUseTextCommands: K
} = e,
q = (0, h.bp)(),
X = a.useRef(null),
Q = (0, r.e7)([M.Z], () => M.Z.getActivities()),
J = (0, r.e7)([E.Z], () => E.Z.getSettings().clipsEnabled),
$ = (0, r.e7)([E.Z], () => E.Z.getLastClipsSession()),
ee = (0, r.Wu)([E.Z], () => E.Z.getNewClipIds()),
et = (0, r.e7)([v.ZP], () => null == v.ZP.getCurrentSidebarChannelId(F.id)),
{
  showClipsHeaderEntrypoint: en
} = f.NV.useExperiment({
  location: 'ChannelAttachButton'
}, {
  autoTrackExposure: !1
}),
{
  enabled: ei
} = _.T.useExperiment({
  location: 'ChannelAttachButton'
}, {
  autoTrackExposure: !1
}),
ea = (0, r.e7)([I.qc], () => I.qc.hasHotspot(I.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
el = (0, c.useModalsStore)(e => (0, c.hasModalOpenSelector)(e, U.Qr)),
es = (0, r.e7)([S.Z], () => S.Z.hasLayers()),
er = (0, r.e7)([E.Z], () => E.Z.hasClips()),
[eo, ec] = a.useState(null),
ed = (0, f.Go)() && (J || er),
eu = F.isPrivate(),
eh = (0, r.e7)([A.Z], () => eu || A.Z.can(k.Plq.ATTACH_FILES, F) && A.Z.can(k.Plq.SEND_MESSAGES, F)),
ep = (0, u.Z)($);
  (null == ep ? void 0 : ep.newClipIds.length) !== (null == $ ? void 0 : $.newClipIds.length) && (null !== (t = null == $ ? void 0 : $.newClipIds.length) && void 0 !== t ? t : 0) > 0 && null == eo && ea && et && !el && !en && !es && ec('recentClips');
  let em = (e, t, n) => {
  null != t && 'ETOOLARGE' === t.code ? (0, P.G)(F, []) : (0, P.d)(e, F, W, {
    requireConfirm: !0,
    showLargeMessageDialog: n
  }), j.S.dispatchToLastSubscribed(k.CkL.TEXTAREA_FOCUS);
},
e_ = (0, r.e7)([Z.Z], () => Z.Z.hasCurrentUserSentMessageSinceAppStart());

  function ef() {
(0, c.openModalLazy)(async () => {
  let {
    default: e
  } = await Promise.all([
    n.e('2668'),
    n.e('93932')
  ]).then(n.bind(n, 542055));
  return t => (0, i.jsx)(e, {
    ...t,
    channelId: F.id
  });
}, {
  modalKey: U.Qr
}), ec(null);
  }
  a.useEffect(() => {
let e = () => {
  var e;
  return null === (e = X.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
};
return j.S.subscribe(k.CkL.UPLOAD_FILE, e), () => {
  j.S.unsubscribe(k.CkL.UPLOAD_FILE, e);
};
  });
  let eE = (0, T.NE)(F),
eC = (0, T.Xu)(F),
eg = !N.dN.useSetting() && !(0, L.isAndroidWeb)() && null != window.ResizeObserver,
eI = (0, x.UI)(null != F ? F : void 0),
ex = (0, c.useRedesignIconContext)().enabled,
eT = (0, p.qB)(F.id, 'ChannelAttachButton'),
eN = null !== (l = null == ee ? void 0 : ee.length) && void 0 !== l ? l : 0,
ev = (0, D.Z)({
  canAttachFiles: eh,
  canStartThreads: eE || eC,
  useSlate: eg,
  hasClips: ed,
  canUseApplicationCommands: !K && !ei,
  channel: F,
  activities: Q,
  newClipsCount: eN,
  canPostPolls: eI,
  canLaunchActivities: eT,
  appContext: q
});
  if (0 === ev.length)
return null;
  let eS = Q.some(e => (0, m.Z)(e, k.xjy.SYNC)),
eZ = Q.some(e => (0, m.Z)(e, k.xjy.JOIN) && !(0, m.Z)(e, k.xjy.EMBEDDED)) || eS;
  G = ex ? (0, i.jsx)(c.CirclePlusIcon, {
className: H.__invalid_attachButtonIcon,
colorClass: H.attachButtonPlus
  }) : eZ ? (0, i.jsx)(R.Z, {
className: H.__invalid_attachButtonIcon,
foreground: H.attachButtonPlay,
background: H.attachButtonPlus,
width: 24,
height: 24
  }) : eN > 0 ? (0, i.jsx)(b.Z, {
className: H.__invalid_attachButtonIcon,
foreground: H.attachButtonClip,
background: H.attachButtonPlus,
width: 24,
height: 24
  }) : (0, i.jsx)(c.CirclePlusIcon, {
size: 'md',
color: 'currentColor',
className: H.__invalid_attachButtonIcon,
colorClass: H.attachButtonPlus
  });
  let eA = (0, i.jsx)(c.Popout, {
shouldShow: null != eo,
animation: c.Popout.Animation.NONE,
align: 'recentClips' === eo ? 'center' : 'left',
position: 'top',
positionKey: null != eo ? eo : 'null',
onRequestOpen: () => {
  e_ && (0, g.EW)(o.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
    dismissAction: w.L.TAKE_ACTION
  }), ec('attachMenu');
},
onRequestClose: () => {
  !(0, c.hasAnyModalOpen)() && (e_ && (0, g.EW)(o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
    dismissAction: w.L.TAKE_ACTION
  }), ec(null));
},
renderPopout: e => {
  switch (eo) {
    case 'recentClips':
      return (0, i.jsx)(C.Z, {
        ...e,
        onOpenClips: ef,
        lastClipsSession: $
      });
    case 'attachMenu':
      return (0, i.jsx)(y.Z, {
        ...e,
        onClose: () => ec(null),
        options: ev,
        channel: F,
        onFileUpload: () => {
          var e;
          return null === (e = X.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
        },
        draftType: W,
        editorTextContent: z,
        setValue: Y,
        openClips: ef
      });
    default:
      throw Error('Invalid popout type provided');
  }
},
children: e => (0, i.jsx)(c.Button, {
  look: c.Button.Looks.BLANK,
  size: c.Button.Sizes.NONE,
  className: s()(H.attachButton, V),
  innerClassName: H.attachButtonInner,
  'aria-label': B.Z.Messages.CHAT_ATTACH_UPLOAD_OR_INVITE,
  onDoubleClick: eh ? () => {
    var e;
    return null === (e = X.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
  } : void 0,
  ...e,
  children: G
})
  });
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)('div', {
    className: H.uploadInput,
    children: (0, i.jsx)(d.Z, {
      ref: X,
      onChange: e => {
        em(e.currentTarget.files, e.currentTarget.err), e.currentTarget.value = '';
      },
      multiple: F.rateLimitPerUser <= 0,
      tabIndex: -1,
      'aria-hidden': !0
    })
  }),
  (0, i.jsx)('div', {
    className: H.attachWrapper,
    children: (0, i.jsx)(O.Z, {
      channel: F,
      isOmniMenuOpen: 'attachMenu' === eo,
      openOmniMenu: () => ec('attachMenu'),
      children: eA
    })
  })
]
  });
});
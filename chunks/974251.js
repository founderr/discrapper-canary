n(47120), n(411104);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(442837),
    o = n(704215),
    c = n(481060),
    u = n(53281),
    d = n(110924),
    h = n(40851),
    m = n(595519),
    p = n(620662),
    f = n(424602),
    g = n(924557),
    C = n(435064),
    x = n(712114),
    v = n(605236),
    _ = n(536442),
    I = n(79390),
    E = n(665906),
    b = n(706454),
    S = n(695346),
    Z = n(433355),
    T = n(819640),
    N = n(375954),
    j = n(496675),
    A = n(885110),
    y = n(627553),
    P = n(38761),
    M = n(585483),
    R = n(358085),
    L = n(127654),
    k = n(316595),
    O = n(193910),
    w = n(951211),
    D = n(981631),
    U = n(356659),
    B = n(921944),
    H = n(388032),
    F = n(687689);
t.Z = l.memo(function (e) {
    var t, r;
    let G,
        { className: V, channel: z, draftType: W, editorTextContent: Y, setValue: K, canOnlyUseTextCommands: q } = e,
        X = (0, h.bp)(),
        J = l.useRef(null),
        Q = (0, a.e7)([A.Z], () => A.Z.getActivities()),
        $ = (0, a.e7)([C.Z], () => C.Z.getSettings().clipsEnabled),
        ee = (0, a.e7)([C.Z], () => C.Z.getLastClipsSession()),
        et = (0, a.Wu)([C.Z], () => C.Z.getNewClipIds()),
        en = (0, a.e7)([Z.ZP], () => null == Z.ZP.getCurrentSidebarChannelId(z.id)),
        { showClipsHeaderEntrypoint: ei } = g.NV.useExperiment({ location: 'ChannelAttachButton' }, { autoTrackExposure: !1 }),
        { enabled: el } = f.T.useExperiment({ location: 'ChannelAttachButton' }, { autoTrackExposure: !1 }),
        er = (0, a.e7)([_.qc], () => _.qc.hasHotspot(_.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        es = (0, c.useModalsStore)((e) => (0, c.hasModalOpenSelector)(e, U.Qr)),
        ea = (0, a.e7)([T.Z], () => T.Z.hasLayers()),
        eo = (0, a.e7)([C.Z], () => C.Z.hasClips()),
        [ec, eu] = l.useState(null),
        ed = (0, g.Go)() && ($ || eo),
        eh = z.isPrivate(),
        em = (0, a.e7)([j.Z], () => eh || (j.Z.can(D.Plq.ATTACH_FILES, z) && j.Z.can(D.Plq.SEND_MESSAGES, z))),
        ep = (0, a.e7)([b.default], () => b.default.locale),
        ef = ['en-US', 'en-GB'].includes(ep) ? H.intl.string(H.t.d56gCQ) : H.intl.string(H.t.PdRCRk),
        eg = (0, d.Z)(ee);
    (null == eg ? void 0 : eg.newClipIds.length) !== (null == ee ? void 0 : ee.newClipIds.length) && (null !== (t = null == ee ? void 0 : ee.newClipIds.length) && void 0 !== t ? t : 0) > 0 && null == ec && er && en && !es && !ei && !ea && eu('recentClips');
    let eC = (e, t, n) => {
            null != t && 'ETOOLARGE' === t.code
                ? (0, L.G)(z, [])
                : (0, L.d)(e, z, W, {
                      requireConfirm: !0,
                      showLargeMessageDialog: n
                  }),
                M.S.dispatchToLastSubscribed(D.CkL.TEXTAREA_FOCUS);
        },
        ex = (0, a.e7)([N.Z], () => N.Z.hasCurrentUserSentMessageSinceAppStart());
    function ev() {
        (0, c.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e('2668'), n.e('98530')]).then(n.bind(n, 542055));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        channelId: z.id
                    });
            },
            { modalKey: U.Qr }
        ),
            eu(null);
    }
    l.useEffect(() => {
        let e = () => {
            var e;
            return null === (e = J.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
        };
        return (
            M.S.subscribe(D.CkL.UPLOAD_FILE, e),
            () => {
                M.S.unsubscribe(D.CkL.UPLOAD_FILE, e);
            }
        );
    });
    let e_ = (0, E.NE)(z),
        eI = (0, E.Xu)(z),
        eE = !S.dN.useSetting() && !(0, R.isAndroidWeb)() && null != window.ResizeObserver,
        eb = (0, I.UI)(null != z ? z : void 0),
        eS = (0, c.useRedesignIconContext)().enabled,
        eZ = (0, m.qB)(z.id, 'ChannelAttachButton'),
        eT = null !== (r = null == et ? void 0 : et.length) && void 0 !== r ? r : 0,
        eN = (0, w.Z)({
            canAttachFiles: em,
            canStartThreads: e_ || eI,
            useSlate: eE,
            hasClips: ed,
            canUseApplicationCommands: !q && !el,
            channel: z,
            activities: Q,
            newClipsCount: eT,
            canPostPolls: eb,
            canLaunchActivities: eZ,
            appContext: X
        });
    if (0 === eN.length) return null;
    let ej = Q.some((e) => (0, p.Z)(e, D.xjy.SYNC)),
        eA = Q.some((e) => (0, p.Z)(e, D.xjy.JOIN) && !(0, p.Z)(e, D.xjy.EMBEDDED)) || ej;
    G = eS
        ? (0, i.jsx)(c.CirclePlusIcon, {
              className: F.__invalid_attachButtonIcon,
              colorClass: F.attachButtonPlus
          })
        : eA
          ? (0, i.jsx)(P.Z, {
                className: F.__invalid_attachButtonIcon,
                foreground: F.attachButtonPlay,
                background: F.attachButtonPlus,
                width: 24,
                height: 24
            })
          : eT > 0
            ? (0, i.jsx)(y.Z, {
                  className: F.__invalid_attachButtonIcon,
                  foreground: F.attachButtonClip,
                  background: F.attachButtonPlus,
                  width: 24,
                  height: 24
              })
            : (0, i.jsx)(c.CirclePlusIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: F.__invalid_attachButtonIcon,
                  colorClass: F.attachButtonPlus
              });
    let ey = (0, i.jsx)(c.Popout, {
        shouldShow: null != ec,
        animation: c.Popout.Animation.NONE,
        align: 'recentClips' === ec ? 'center' : 'left',
        position: 'top',
        positionKey: null != ec ? ec : 'null',
        onRequestOpen: () => {
            ex && (0, v.EW)(o.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: B.L.TAKE_ACTION }), eu('attachMenu');
        },
        onRequestClose: () => {
            !(0, c.hasAnyModalOpen)() && (ex && (0, v.EW)(o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: B.L.TAKE_ACTION }), eu(null));
        },
        renderPopout: (e) => {
            switch (ec) {
                case 'recentClips':
                    return (0, i.jsx)(x.Z, {
                        ...e,
                        onOpenClips: ev,
                        lastClipsSession: ee
                    });
                case 'attachMenu':
                    return (0, i.jsx)(O.Z, {
                        ...e,
                        onClose: () => eu(null),
                        options: eN,
                        channel: z,
                        onFileUpload: () => {
                            var e;
                            return null === (e = J.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
                        },
                        draftType: W,
                        editorTextContent: Y,
                        setValue: K,
                        openClips: ev
                    });
                default:
                    throw Error('Invalid popout type provided');
            }
        },
        children: (e) =>
            (0, i.jsx)(c.Button, {
                look: c.Button.Looks.BLANK,
                size: c.Button.Sizes.NONE,
                className: s()(F.attachButton, V),
                innerClassName: F.attachButtonInner,
                'aria-label': ef,
                onDoubleClick: em
                    ? () => {
                          var e;
                          return null === (e = J.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
                      }
                    : void 0,
                ...e,
                children: G
            })
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: F.uploadInput,
                children: (0, i.jsx)(u.Z, {
                    ref: J,
                    onChange: (e) => {
                        eC(e.currentTarget.files, e.currentTarget.err), (e.currentTarget.value = '');
                    },
                    multiple: z.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    'aria-hidden': !0
                })
            }),
            (0, i.jsx)('div', {
                className: F.attachWrapper,
                children: (0, i.jsx)(k.Z, {
                    channel: z,
                    isOmniMenuOpen: 'attachMenu' === ec,
                    openOmniMenu: () => eu('attachMenu'),
                    enabled: eZ,
                    animationContainerClassName: F.buttonAnimation,
                    glowClassName: F.buttonAnimationGlow,
                    trinketsClassName: F.buttonAnimationTrinkets,
                    children: ey
                })
            })
        ]
    });
});

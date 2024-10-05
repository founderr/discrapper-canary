n(47120), n(411104);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(442837),
    o = n(704215),
    c = n(481060),
    u = n(53281),
    d = n(110924),
    h = n(40851),
    p = n(595519),
    m = n(620662),
    _ = n(424602),
    f = n(924557),
    E = n(435064),
    g = n(712114),
    C = n(605236),
    I = n(536442),
    T = n(79390),
    x = n(665906),
    S = n(706454),
    v = n(695346),
    N = n(433355),
    A = n(819640),
    Z = n(375954),
    M = n(496675),
    b = n(885110),
    R = n(627553),
    L = n(38761),
    j = n(585483),
    P = n(358085),
    O = n(127654),
    y = n(316595),
    D = n(193910),
    U = n(951211),
    k = n(981631),
    w = n(356659),
    B = n(921944),
    H = n(689938),
    G = n(687689);
t.Z = s.memo(function (e) {
    var t, a;
    let V,
        { className: F, channel: W, draftType: z, editorTextContent: Y, setValue: K, canOnlyUseTextCommands: q } = e,
        X = (0, h.bp)(),
        J = s.useRef(null),
        Q = (0, r.e7)([b.Z], () => b.Z.getActivities()),
        $ = (0, r.e7)([E.Z], () => E.Z.getSettings().clipsEnabled),
        ee = (0, r.e7)([E.Z], () => E.Z.getLastClipsSession()),
        et = (0, r.Wu)([E.Z], () => E.Z.getNewClipIds()),
        en = (0, r.e7)([N.ZP], () => null == N.ZP.getCurrentSidebarChannelId(W.id)),
        { showClipsHeaderEntrypoint: ei } = f.NV.useExperiment({ location: 'ChannelAttachButton' }, { autoTrackExposure: !1 }),
        { enabled: es } = _.T.useExperiment({ location: 'ChannelAttachButton' }, { autoTrackExposure: !1 }),
        ea = (0, r.e7)([I.qc], () => I.qc.hasHotspot(I.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        el = (0, c.useModalsStore)((e) => (0, c.hasModalOpenSelector)(e, w.Qr)),
        er = (0, r.e7)([A.Z], () => A.Z.hasLayers()),
        eo = (0, r.e7)([E.Z], () => E.Z.hasClips()),
        [ec, eu] = s.useState(null),
        ed = (0, f.Go)() && ($ || eo),
        eh = W.isPrivate(),
        ep = (0, r.e7)([M.Z], () => eh || (M.Z.can(k.Plq.ATTACH_FILES, W) && M.Z.can(k.Plq.SEND_MESSAGES, W))),
        em = (0, r.e7)([S.default], () => S.default.locale),
        e_ = ['en-US', 'en-GB'].includes(em) ? H.Z.Messages.CHAT_ATTACH_PLUS_BUTTON_A11Y_LABEL : H.Z.Messages.MORE_OPTIONS,
        ef = (0, d.Z)(ee);
    (null == ef ? void 0 : ef.newClipIds.length) !== (null == ee ? void 0 : ee.newClipIds.length) && (null !== (t = null == ee ? void 0 : ee.newClipIds.length) && void 0 !== t ? t : 0) > 0 && null == ec && ea && en && !el && !ei && !er && eu('recentClips');
    let eE = (e, t, n) => {
            null != t && 'ETOOLARGE' === t.code
                ? (0, O.G)(W, [])
                : (0, O.d)(e, W, z, {
                      requireConfirm: !0,
                      showLargeMessageDialog: n
                  }),
                j.S.dispatchToLastSubscribed(k.CkL.TEXTAREA_FOCUS);
        },
        eg = (0, r.e7)([Z.Z], () => Z.Z.hasCurrentUserSentMessageSinceAppStart());
    function eC() {
        (0, c.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e('2668'), n.e('98530')]).then(n.bind(n, 542055));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        channelId: W.id
                    });
            },
            { modalKey: w.Qr }
        ),
            eu(null);
    }
    s.useEffect(() => {
        let e = () => {
            var e;
            return null === (e = J.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
        };
        return (
            j.S.subscribe(k.CkL.UPLOAD_FILE, e),
            () => {
                j.S.unsubscribe(k.CkL.UPLOAD_FILE, e);
            }
        );
    });
    let eI = (0, x.NE)(W),
        eT = (0, x.Xu)(W),
        ex = !v.dN.useSetting() && !(0, P.isAndroidWeb)() && null != window.ResizeObserver,
        eS = (0, T.UI)(null != W ? W : void 0),
        ev = (0, c.useRedesignIconContext)().enabled,
        eN = (0, p.qB)(W.id, 'ChannelAttachButton'),
        eA = null !== (a = null == et ? void 0 : et.length) && void 0 !== a ? a : 0,
        eZ = (0, U.Z)({
            canAttachFiles: ep,
            canStartThreads: eI || eT,
            useSlate: ex,
            hasClips: ed,
            canUseApplicationCommands: !q && !es,
            channel: W,
            activities: Q,
            newClipsCount: eA,
            canPostPolls: eS,
            canLaunchActivities: eN,
            appContext: X
        });
    if (0 === eZ.length) return null;
    let eM = Q.some((e) => (0, m.Z)(e, k.xjy.SYNC)),
        eb = Q.some((e) => (0, m.Z)(e, k.xjy.JOIN) && !(0, m.Z)(e, k.xjy.EMBEDDED)) || eM;
    V = ev
        ? (0, i.jsx)(c.CirclePlusIcon, {
              className: G.__invalid_attachButtonIcon,
              colorClass: G.attachButtonPlus
          })
        : eb
          ? (0, i.jsx)(L.Z, {
                className: G.__invalid_attachButtonIcon,
                foreground: G.attachButtonPlay,
                background: G.attachButtonPlus,
                width: 24,
                height: 24
            })
          : eA > 0
            ? (0, i.jsx)(R.Z, {
                  className: G.__invalid_attachButtonIcon,
                  foreground: G.attachButtonClip,
                  background: G.attachButtonPlus,
                  width: 24,
                  height: 24
              })
            : (0, i.jsx)(c.CirclePlusIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: G.__invalid_attachButtonIcon,
                  colorClass: G.attachButtonPlus
              });
    let eR = (0, i.jsx)(c.Popout, {
        shouldShow: null != ec,
        animation: c.Popout.Animation.NONE,
        align: 'recentClips' === ec ? 'center' : 'left',
        position: 'top',
        positionKey: null != ec ? ec : 'null',
        onRequestOpen: () => {
            eg && (0, C.EW)(o.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: B.L.TAKE_ACTION }), eu('attachMenu');
        },
        onRequestClose: () => {
            !(0, c.hasAnyModalOpen)() && (eg && (0, C.EW)(o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: B.L.TAKE_ACTION }), eu(null));
        },
        renderPopout: (e) => {
            switch (ec) {
                case 'recentClips':
                    return (0, i.jsx)(g.Z, {
                        ...e,
                        onOpenClips: eC,
                        lastClipsSession: ee
                    });
                case 'attachMenu':
                    return (0, i.jsx)(D.Z, {
                        ...e,
                        onClose: () => eu(null),
                        options: eZ,
                        channel: W,
                        onFileUpload: () => {
                            var e;
                            return null === (e = J.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
                        },
                        draftType: z,
                        editorTextContent: Y,
                        setValue: K,
                        openClips: eC
                    });
                default:
                    throw Error('Invalid popout type provided');
            }
        },
        children: (e) =>
            (0, i.jsx)(c.Button, {
                look: c.Button.Looks.BLANK,
                size: c.Button.Sizes.NONE,
                className: l()(G.attachButton, F),
                innerClassName: G.attachButtonInner,
                'aria-label': e_,
                onDoubleClick: ep
                    ? () => {
                          var e;
                          return null === (e = J.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
                      }
                    : void 0,
                ...e,
                children: V
            })
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: G.uploadInput,
                children: (0, i.jsx)(u.Z, {
                    ref: J,
                    onChange: (e) => {
                        eE(e.currentTarget.files, e.currentTarget.err), (e.currentTarget.value = '');
                    },
                    multiple: W.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    'aria-hidden': !0
                })
            }),
            (0, i.jsx)('div', {
                className: G.attachWrapper,
                children: (0, i.jsx)(y.Z, {
                    channel: W,
                    isOmniMenuOpen: 'attachMenu' === ec,
                    openOmniMenu: () => eu('attachMenu'),
                    enabled: eN,
                    animationContainerClassName: G.buttonAnimation,
                    glowClassName: G.buttonAnimationGlow,
                    trinketsClassName: G.buttonAnimationTrinkets,
                    children: eR
                })
            })
        ]
    });
});

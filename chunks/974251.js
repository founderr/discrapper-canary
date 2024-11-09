n(47120), n(411104);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(704215),
    c = n(481060),
    d = n(53281),
    u = n(110924),
    h = n(40851),
    p = n(595519),
    m = n(620662),
    f = n(424602),
    g = n(924557),
    C = n(435064),
    x = n(712114),
    v = n(605236),
    _ = n(536442),
    I = n(79390),
    E = n(665906),
    b = n(706454),
    N = n(695346),
    Z = n(433355),
    S = n(819640),
    T = n(375954),
    j = n(496675),
    A = n(885110),
    y = n(627553),
    P = n(38761),
    M = n(585483),
    R = n(358085),
    L = n(127654),
    k = n(316595),
    O = n(193910),
    D = n(951211),
    w = n(981631),
    B = n(356659),
    U = n(921944),
    H = n(388032),
    G = n(687689);
t.Z = l.memo(function (e) {
    var t, a;
    let F,
        { className: V, channel: z, draftType: W, editorTextContent: K, setValue: Y, canOnlyUseTextCommands: q } = e,
        X = (0, h.bp)(),
        J = l.useRef(null),
        Q = (0, s.e7)([A.Z], () => A.Z.getActivities()),
        $ = (0, s.e7)([C.Z], () => C.Z.getSettings().clipsEnabled),
        ee = (0, s.e7)([C.Z], () => C.Z.getLastClipsSession()),
        et = (0, s.Wu)([C.Z], () => C.Z.getNewClipIds()),
        en = (0, s.e7)([Z.ZP], () => null == Z.ZP.getCurrentSidebarChannelId(z.id)),
        { showClipsHeaderEntrypoint: ei } = g.NV.useExperiment({ location: 'ChannelAttachButton' }, { autoTrackExposure: !1 }),
        { enabled: el } = f.T.useExperiment({ location: 'ChannelAttachButton' }, { autoTrackExposure: !1 }),
        ea = (0, s.e7)([_.qc], () => _.qc.hasHotspot(_.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        er = (0, c.useModalsStore)((e) => (0, c.hasModalOpenSelector)(e, B.Qr)),
        es = (0, s.e7)([S.Z], () => S.Z.hasLayers()),
        eo = (0, s.e7)([C.Z], () => C.Z.hasClips()),
        [ec, ed] = l.useState(null),
        eu = (0, g.Go)() && ($ || eo),
        eh = z.isPrivate(),
        ep = (0, s.e7)([j.Z], () => eh || (j.Z.can(w.Plq.ATTACH_FILES, z) && j.Z.can(w.Plq.SEND_MESSAGES, z))),
        em = (0, s.e7)([b.default], () => b.default.locale),
        ef = ['en-US', 'en-GB'].includes(em) ? H.intl.string(H.t.d56gCQ) : H.intl.string(H.t.PdRCRk),
        eg = (0, u.Z)(ee);
    (null == eg ? void 0 : eg.newClipIds.length) !== (null == ee ? void 0 : ee.newClipIds.length) && (null !== (t = null == ee ? void 0 : ee.newClipIds.length) && void 0 !== t ? t : 0) > 0 && null == ec && ea && en && !er && !ei && !es && ed('recentClips');
    let eC = (e, t, n) => {
            null != t && 'ETOOLARGE' === t.code
                ? (0, L.G)(z, [])
                : (0, L.d)(e, z, W, {
                      requireConfirm: !0,
                      showLargeMessageDialog: n
                  }),
                M.S.dispatchToLastSubscribed(w.CkL.TEXTAREA_FOCUS);
        },
        ex = (0, s.e7)([T.Z], () => T.Z.hasCurrentUserSentMessageSinceAppStart());
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
            { modalKey: B.Qr }
        ),
            ed(null);
    }
    l.useEffect(() => {
        let e = () => {
            var e;
            return null === (e = J.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
        };
        return (
            M.S.subscribe(w.CkL.UPLOAD_FILE, e),
            () => {
                M.S.unsubscribe(w.CkL.UPLOAD_FILE, e);
            }
        );
    });
    let e_ = (0, E.NE)(z),
        eI = (0, E.Xu)(z),
        eE = !N.dN.useSetting() && !(0, R.isAndroidWeb)() && null != window.ResizeObserver,
        eb = (0, I.UI)(null != z ? z : void 0),
        eN = (0, c.useRedesignIconContext)().enabled,
        eZ = (0, p.qB)(z.id, 'ChannelAttachButton'),
        eS = null !== (a = null == et ? void 0 : et.length) && void 0 !== a ? a : 0,
        eT = (0, D.Z)({
            canAttachFiles: ep,
            canStartThreads: e_ || eI,
            useSlate: eE,
            hasClips: eu,
            canUseApplicationCommands: !q && !el,
            channel: z,
            activities: Q,
            newClipsCount: eS,
            canPostPolls: eb,
            canLaunchActivities: eZ,
            appContext: X
        });
    if (0 === eT.length) return null;
    let ej = Q.some((e) => (0, m.Z)(e, w.xjy.SYNC)),
        eA = Q.some((e) => (0, m.Z)(e, w.xjy.JOIN) && !(0, m.Z)(e, w.xjy.EMBEDDED)) || ej;
    F = eN
        ? (0, i.jsx)(c.CirclePlusIcon, {
              className: G.__invalid_attachButtonIcon,
              colorClass: G.attachButtonPlus
          })
        : eA
          ? (0, i.jsx)(P.Z, {
                className: G.__invalid_attachButtonIcon,
                foreground: G.attachButtonPlay,
                background: G.attachButtonPlus,
                width: 24,
                height: 24
            })
          : eS > 0
            ? (0, i.jsx)(y.Z, {
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
    let ey = (0, i.jsx)(c.Popout, {
        shouldShow: null != ec,
        animation: c.Popout.Animation.NONE,
        align: 'recentClips' === ec ? 'center' : 'left',
        position: 'top',
        positionKey: null != ec ? ec : 'null',
        onRequestOpen: () => {
            ex && (0, v.EW)(o.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: U.L.TAKE_ACTION }), ed('attachMenu');
        },
        onRequestClose: () => {
            !(0, c.hasAnyModalOpen)() && (ex && (0, v.EW)(o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: U.L.TAKE_ACTION }), ed(null));
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
                        onClose: () => ed(null),
                        options: eT,
                        channel: z,
                        onFileUpload: () => {
                            var e;
                            return null === (e = J.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
                        },
                        draftType: W,
                        editorTextContent: K,
                        setValue: Y,
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
                className: r()(G.attachButton, V),
                innerClassName: G.attachButtonInner,
                'aria-label': ef,
                onDoubleClick: ep
                    ? () => {
                          var e;
                          return null === (e = J.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
                      }
                    : void 0,
                ...e,
                children: F
            })
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: G.uploadInput,
                children: (0, i.jsx)(d.Z, {
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
                className: G.attachWrapper,
                children: (0, i.jsx)(k.Z, {
                    channel: z,
                    isOmniMenuOpen: 'attachMenu' === ec,
                    openOmniMenu: () => ed('attachMenu'),
                    enabled: eZ,
                    animationContainerClassName: G.buttonAnimation,
                    glowClassName: G.buttonAnimationGlow,
                    trinketsClassName: G.buttonAnimationTrinkets,
                    children: ey
                })
            })
        ]
    });
});

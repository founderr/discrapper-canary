var r = n(411104);
var i = n(47120);
var a = n(772848),
    o = n(570140),
    s = n(318885),
    l = n(355863),
    u = n(449224),
    c = n(451478),
    d = n(434529),
    _ = n(145597),
    E = n(765250),
    f = n(981631);
let h = {
    track(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!__OVERLAY__) throw Error('OverlayActionCreators.track: Must be called within Overlay context');
        (0, s.Q)(e, t, n);
    },
    overlayReady(e) {
        o.Z.dispatch({
            type: 'OVERLAY_READY',
            pid: e
        });
    },
    overlayMounted(e) {
        o.Z.dispatch({
            type: 'OVERLAY_MOUNTED',
            nudge: e
        });
    },
    setFocusedPID(e) {
        o.Z.dispatch({
            type: 'OVERLAY_FOCUSED',
            pid: e
        });
    },
    setInputLocked(e, t) {
        o.Z.dispatch({
            type: 'OVERLAY_SET_INPUT_LOCKED',
            locked: e,
            pid: t
        });
    },
    setUILocked(e, t) {
        o.Z.dispatch({
            type: 'OVERLAY_SET_UI_LOCKED',
            locked: e,
            pid: t
        });
    },
    setLocked(e, t) {
        o.Z.dispatch({
            type: 'OVERLAY_SET_INPUT_LOCKED',
            locked: e,
            pid: t
        }),
            o.Z.dispatch({
                type: 'OVERLAY_SET_UI_LOCKED',
                locked: e,
                pid: t
            });
    },
    setInstanceLocked(e) {
        if (!__OVERLAY__) throw Error('OverlayActionCreators.setInstanceLocked: Must be called within Overlay context');
        h.setLocked(e, (0, _.QF)());
    },
    setEnabled(e, t) {
        o.Z.dispatch({
            type: 'OVERLAY_SET_ENABLED',
            enabled: e,
            legacyEnabled: t
        });
    },
    selectCall(e) {
        o.Z.dispatch({
            type: 'OVERLAY_SELECT_CALL',
            callId: e
        });
    },
    setDisplayNameMode(e) {
        o.Z.dispatch({
            type: 'OVERLAY_SET_DISPLAY_NAME_MODE',
            mode: e
        });
    },
    setDisplayUserMode(e) {
        o.Z.dispatch({
            type: 'OVERLAY_SET_DISPLAY_USER_MODE',
            mode: e
        });
    },
    setAvatarSizeMode(e) {
        o.Z.dispatch({
            type: 'OVERLAY_SET_AVATAR_SIZE_MODE',
            mode: e
        });
    },
    setNotificationPositionMode(e) {
        o.Z.dispatch({
            type: 'OVERLAY_SET_NOTIFICATION_POSITION_MODE',
            mode: e
        });
    },
    setTextChatNotificationMode(e) {
        o.Z.dispatch({
            type: 'OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE',
            mode: e
        });
    },
    setShowKeybindIndicators(e) {
        o.Z.dispatch({
            type: 'OVERLAY_SET_SHOW_KEYBIND_INDICATORS',
            shouldShow: e
        });
    },
    callPrivateChannel(e, t) {
        o.Z.dispatch({
            type: 'OVERLAY_CALL_PRIVATE_CHANNEL',
            channelId: e,
            ring: t
        });
    },
    setTextWidgetOpacity(e) {
        o.Z.dispatch({
            type: 'OVERLAY_SET_TEXT_WIDGET_OPACITY',
            opacity: e
        });
    },
    disableExternalLinkAlert() {
        o.Z.dispatch({ type: 'OVERLAY_DISABLE_EXTERNAL_LINK_ALERT' });
    },
    startSession() {
        if (!__OVERLAY__) throw Error('Attempting to start an overlay session outside of the overlay context');
        o.Z.dispatch({ type: 'OVERLAY_START_SESSION' });
    },
    activateRegion(e) {
        o.Z.dispatch({
            type: 'OVERLAY_ACTIVATE_REGION',
            region: e
        });
    },
    deactivateAllRegions() {
        o.Z.dispatch({ type: 'OVERLAY_DEACTIVATE_ALL_REGIONS' });
    },
    setPreviewInGameMode(e) {
        o.Z.dispatch({
            type: 'OVERLAY_SET_PREVIEW_IN_GAME_MODE',
            isPreviewingInGame: e
        });
    },
    updateNotificationStatus(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f._1z.DISMISSED;
        o.Z.dispatch({
            type: 'OVERLAY_UPDATE_NOTIFICATION_STATUS',
            notificationId: e,
            status: t
        });
    },
    notificationEvent(e, t) {
        var n, r;
        let i = u.Z.getGame();
        o.Z.dispatch({
            type: 'OVERLAY_NOTIFICATION_EVENT',
            notificationType: e,
            action: t,
            gameName: null !== (n = null == i ? void 0 : i.name) && void 0 !== n ? n : null,
            gameId: null !== (r = null == i ? void 0 : i.id) && void 0 !== r ? r : null
        });
    },
    setPinChat(e) {
        let t = _.qU,
            n = l.Z.getWidgetsForLayout(t),
            r = l.Z.getWidgetConfig(f.Odu.GUILDS),
            i = l.Z.getWidgetConfig(f.Odu.TEXT),
            o = l.Z.getWidgetConfig(f.Odu.GUILDS_TEXT);
        if (0 === n.length || null == r || null == i || null == o) return;
        let s = c.Z.windowSize(),
            u = {
                width: 0,
                height: 0
            },
            h = {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            },
            p = {
                width: 312,
                height: 0
            },
            m = {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            },
            I = {
                width: 0,
                height: 0
            };
        if (
            (n.forEach((e) => {
                let { type: t, id: n, anchor: r, size: i } = e;
                switch (t) {
                    case f.Odu.TEXT:
                        (u = (0, d.w_)(i, s)), (0, E.E9)(n);
                        break;
                    case f.Odu.GUILDS:
                        (h = (0, d.vS)(r, i, s)), (p = (0, d.w_)(i, s)), (0, E.E9)(n);
                        break;
                    case f.Odu.GUILDS_TEXT:
                        (m = (0, d.vS)(r, i, s)), (I = (0, d.w_)(i, s)), (0, E.E9)(n);
                }
            }),
            e)
        ) {
            let e = 'auto' === I.width ? o.minSize.width : I.width;
            e -= r.minSize.width;
            let [n, i] = (0, d.o4)(
                    m,
                    {
                        ...I,
                        width: r.minSize.width
                    },
                    s
                ),
                [u, c] = (0, d.uq)(
                    m,
                    {
                        ...I,
                        width: e
                    },
                    s,
                    {
                        x: 10,
                        y: 10
                    }
                ),
                _ = l.Z.getWidgetDefaultSettings(f.Odu.TEXT);
            if (null == _) throw Error('OverlayActionCreators.setPinChat: No config for TEXT exists');
            (0, E.A4)({
                ..._,
                type: f.Odu.TEXT,
                id: (0, a.Z)(),
                size: c,
                anchor: u,
                layoutId: t
            });
            let h = l.Z.getWidgetDefaultSettings(f.Odu.GUILDS);
            if (null == h) throw Error('OverlayActionCreators.setPinChat: No config for GUILDS exists');
            (0, E.A4)({
                ...h,
                type: f.Odu.GUILDS,
                id: (0, a.Z)(),
                size: i,
                anchor: n,
                layoutId: t
            });
        } else {
            let e = 'auto' === u.width ? i.minSize.width : u.width;
            e += r.minSize.width;
            let [n, o] = (0, d.o4)(
                    h,
                    {
                        height: p.height,
                        width: e
                    },
                    s
                ),
                c = l.Z.getWidgetDefaultSettings(f.Odu.GUILDS_TEXT);
            if (null == c) throw Error('OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists');
            (0, E.A4)({
                ...c,
                type: f.Odu.GUILDS_TEXT,
                id: (0, a.Z)(),
                layoutId: t,
                anchor: n,
                size: o
            });
        }
    },
    resetDefaultLayout(e) {
        if (null != l.Z.getLayout(e)) (0, E.sz)(e), (0, E.jx)(l.Z.getDefaultLayout(e));
    },
    setClickZones(e) {
        o.Z.dispatch({
            type: 'OVERLAY_SET_CLICK_ZONES',
            zones: e
        });
    },
    relayClickZoneClicked(e, t, n) {
        o.Z.dispatch({
            type: 'OVERLAY_RELAY_CLICK_ZONE_CLICKED',
            zoneName: e,
            normalizedMouseX: t,
            normalizedMouseY: n
        });
    },
    setAssociatedGame(e, t, n) {
        o.Z.dispatch({
            type: 'OVERLAY_SET_ASSOCIATED_GAME',
            previousAssociatedGamePID: e,
            associatedGamePID: t,
            associatedGame: n
        });
    },
    notifyReadyToShow(e) {
        o.Z.dispatch({
            type: 'OVERLAY_NOTIFY_READY_TO_SHOW',
            pid: e
        });
    },
    successfullyShown(e) {
        o.Z.dispatch({
            type: 'OVERLAY_SUCCESSFULLY_SHOWN',
            pid: e
        });
    }
};
t.Z = h;

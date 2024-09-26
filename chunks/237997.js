var r,
    i = n(47120);
var a = n(411104);
var o = n(442837),
    s = n(433517),
    l = n(570140),
    u = n(284737),
    c = n(490029),
    d = n(48481),
    _ = n(131704),
    E = n(314897),
    f = n(592125),
    h = n(984933),
    p = n(355863),
    m = n(914010),
    I = n(358085),
    T = n(998502),
    g = n(145597),
    S = n(451478),
    A = n(981631),
    v = n(987650);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let O = Object.freeze({
        selectedGuildId: null,
        selectedChannelId: null,
        displayUserMode: A.OYC.ALWAYS,
        displayNameMode: A.wC$.ALWAYS,
        avatarSizeMode: A.ipw.LARGE,
        notificationPositionMode: A._vf.TOP_LEFT,
        textChatNotifications: A.Ypu.ENABLED,
        disableExternalLinkAlert: !1,
        disablePinTutorial: !1,
        showKeybindIndicators: !0,
        textWidgetOpacity: v.wF.LOWER
    }),
    R = null,
    C = {},
    y = null,
    L = new Set(),
    b = !1,
    D = null,
    M = !1,
    P = !1,
    U = new Set(),
    w = !1;
function x(e) {
    let t = C[e];
    return null == t && (t = C[e] = { ...O }), t;
}
let G = { ...O },
    k = new Set(['AUDIO_SET_INPUT_DEVICE', 'AUDIO_SET_INPUT_VOLUME', 'AUDIO_SET_LOCAL_VIDEO_DISABLED', 'AUDIO_SET_LOCAL_VOLUME', 'AUDIO_SET_MODE', 'AUDIO_SET_NOISE_CANCELLATION', 'AUDIO_SET_NOISE_SUPPRESSION', 'AUDIO_SET_OUTPUT_DEVICE', 'AUDIO_SET_OUTPUT_VOLUME', 'AUDIO_TOGGLE_LOCAL_MUTE', 'AUDIO_TOGGLE_SELF_DEAF', 'AUDIO_TOGGLE_SELF_MUTE', 'BILLING_SUBSCRIPTION_UPDATE_SUCCESS', 'CATEGORY_COLLAPSE', 'CATEGORY_EXPAND', 'CHANNEL_ACK', 'CHANNEL_PRELOAD', 'GIFT_CODE_REDEEM', 'GIFT_CODE_REDEEM_FAILURE', 'GIFT_CODE_REDEEM_SUCCESS', 'HOTSPOT_HIDE', 'INVITE_MODAL_CLOSE', 'LAYOUT_CREATE', 'LAYOUT_CREATE_WIDGETS', 'LAYOUT_DELETE_ALL_WIDGETS', 'LAYOUT_DELETE_WIDGET', 'LAYOUT_SET_PINNED', 'LAYOUT_SET_TOP_WIDGET', 'LAYOUT_UPDATE_WIDGET', 'LOAD_MESSAGES', 'LOAD_MESSAGES_FAILURE', 'LOAD_MESSAGES_SUCCESS', 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE', 'OVERLAY_ACTIVATE_REGION', 'OVERLAY_DEACTIVATE_ALL_REGIONS', 'OVERLAY_MESSAGE_EVENT_ACTION', 'OVERLAY_SET_AVATAR_SIZE_MODE', 'OVERLAY_SET_CLICK_ZONES', 'OVERLAY_SET_DISPLAY_NAME_MODE', 'OVERLAY_SET_DISPLAY_USER_MODE', 'OVERLAY_SET_INPUT_LOCKED', 'OVERLAY_SET_NOTIFICATION_POSITION_MODE', 'OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE', 'OVERLAY_SET_SHOW_KEYBIND_INDICATORS', 'OVERLAY_SET_TEXT_WIDGET_OPACITY', 'OVERLAY_SET_UI_LOCKED', 'OVERLAY_NOTIFY_READY_TO_SHOW', 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN', 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', 'PREMIUM_PAYMENT_ERROR_CLEAR', 'PREMIUM_PAYMENT_MODAL_CLOSE', 'PREMIUM_PAYMENT_MODAL_OPEN', 'PREMIUM_PAYMENT_SUBSCRIBE_FAIL', 'PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS', 'PREMIUM_PAYMENT_UPDATE_FAIL', 'PREMIUM_PAYMENT_UPDATE_SUCCESS', 'PREMIUM_REQUIRED_MODAL_CLOSE', 'PREMIUM_REQUIRED_MODAL_OPEN', 'PURCHASE_CONFIRMATION_MODAL_CLOSE', 'PURCHASE_CONFIRMATION_MODAL_OPEN', 'SKU_PURCHASE_CLEAR_ERROR', 'SKU_PURCHASE_FAIL', 'SKU_PURCHASE_MODAL_CLOSE', 'SKU_PURCHASE_MODAL_OPEN', 'SKU_PURCHASE_PREVIEW_FETCH_SUCCESS', 'SKU_PURCHASE_SHOW_CONFIRMATION_STEP', 'SKU_PURCHASE_START', 'SKU_PURCHASE_SUCCESS', 'STREAM_CLOSE', 'STREAM_START', 'VOICE_CHANNEL_SELECT', 'USER_SETTINGS_PROTO_ENQUEUE_UPDATE', 'USER_SETTINGS_PROTO_LOAD_IF_NECESSARY']),
    B = new Set([...k.values(), 'ACTIVITY_INVITE_MODAL_CLOSE', 'CALL_DELETE', 'CHANNEL_COLLAPSE', 'CHANNEL_SELECT', 'GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY', 'OVERLAY_CALL_PRIVATE_CHANNEL', 'OVERLAY_JOIN_GAME', 'OVERLAY_NOTIFICATION_EVENT', 'OVERLAY_SELECT_CALL', 'OVERLAY_SET_NOT_IDLE', 'OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST', 'OVERLAY_WIDGET_CHANGED', 'SOUNDBOARD_SET_OVERLAY_ENABLED', 'STREAM_STOP']);
function F(e) {
    return (null == e.version && 1 === g.Tq) || e.version === g.Tq || (l.Z.dispatch({ type: 'OVERLAY_INCOMPATIBLE_APP' }), (0, c.zP)(), !1);
}
function Z(e) {
    if (('OVERLAY_INITIALIZE' === e.type && F(e) && (P = !0), P)) {
        var t, n, r, i, a;
        switch (e.type) {
            case 'CHANNEL_CREATE':
            case 'THREAD_CREATE':
            case 'THREAD_UPDATE':
            case 'CHANNEL_DELETE':
            case 'THREAD_DELETE':
                let o = (0, _.kt)(e.channel);
                if (!_.AW.has(o.type)) break;
                l.Z.dispatch({
                    type: e.type,
                    channel: o
                });
                break;
            case 'CHANNEL_UPDATES':
                l.Z.dispatch({
                    type: e.type,
                    channels: e.channels.map((e) => (0, _.kt)(e))
                });
                break;
            case 'CONNECTION_OPEN_SUPPLEMENTAL':
                (e.lazyPrivateChannels = (null !== (t = e.lazyPrivateChannels) && void 0 !== t ? t : []).map((e) => (0, _.kt)(e))), l.Z.dispatch(e);
                break;
            case 'THREAD_LIST_SYNC':
                l.Z.dispatch({
                    ...e,
                    threads: e.threads.map((e) => (0, _.kt)(e))
                });
                break;
            case 'GUILD_CREATE':
                let s = (e) => (0, _.kt)(e),
                    u = e.guild;
                (u.channels = null !== (i = null === (n = u.channels) || void 0 === n ? void 0 : n.map(s)) && void 0 !== i ? i : null),
                    (u.threads = null === (r = u.threads) || void 0 === r ? void 0 : r.map(s)),
                    null != u.channelUpdates && (u.channelUpdates.writes = null === (a = u.channelUpdates.writes) || void 0 === a ? void 0 : a.map(s)),
                    l.Z.dispatch({
                        type: 'GUILD_CREATE',
                        guild: u
                    });
                break;
            case 'USER_SETTINGS_PROTO_UPDATE':
                l.Z.dispatch({
                    ...e,
                    settings: {
                        proto: (0, d.kI)(e.settings.type, e.settings.proto),
                        type: e.settings.type
                    }
                });
                break;
            default:
                l.Z.dispatch(e);
        }
    }
}
function V(e) {
    !e.isSwitchingAccount && (C = {});
}
function H(e) {
    e.userId in C && delete C[e.userId];
}
function Y() {
    L.clear();
}
function j(e) {
    let { focusedPID: t } = e;
    R = t;
}
function W() {
    let e = G.selectedGuildId,
        t = G.selectedChannelId;
    if ((null != e && (!h.ZP.hasChannels(e) || (null != t && !h.ZP.hasSelectableChannel(e, t))) && ((e = null), (t = null)), null != t && null == f.Z.getChannel(t) && ((e = null), (t = null)), null == e && null == t && (e = m.Z.getGuildId()), null != e && null == t)) {
        let n = h.ZP.getDefaultChannel(e);
        null != n && (t = n.id);
    }
    (G.selectedGuildId = e), (G.selectedChannelId = t);
}
function K() {
    if (!__OVERLAY__) return !1;
    let e = R === (0, g.QF)(),
        t = L.has((0, g.QF)()) || U.size > 0;
    e && t ? (0, u.T_)(window, !0) : (0, u.T_)(window, !1);
}
function z() {}
function q(e) {
    let { locked: t, pid: n } = e;
    t ? L.delete(n) : L.add(n), X(), K(), (w = !1);
}
function Q(e) {
    let { region: t } = e;
    if (R !== (0, g.QF)() || U.has(t)) return !1;
    U.add(t);
}
function X() {
    if (R !== (0, g.QF)()) return !1;
    U.clear();
}
function $(e) {
    let { pid: t } = e;
    (R = t), K();
}
function J(e) {
    let { guildId: t, channelId: n } = e;
    (G.selectedGuildId = t), (G.selectedChannelId = n);
}
function ee(e) {
    let { callId: t } = e;
    y = t;
}
function et() {
    y = null;
}
function en() {
    if (__OVERLAY__) {
        let e = S.Z.windowSize();
        !(0, g.Te)(e) && (w = !1);
    }
}
function er(e) {
    w = e.isPreviewingInGame;
}
function ei(e) {
    let { mode: t } = e;
    G.displayNameMode = t;
}
function ea(e) {
    let { mode: t } = e;
    G.displayUserMode = t;
}
function eo(e) {
    let { mode: t } = e;
    G.avatarSizeMode = t;
}
function es(e) {
    let { mode: t } = e;
    G.notificationPositionMode = t;
}
function el(e) {
    let { mode: t } = e;
    G.textChatNotifications = t;
}
function eu(e) {
    let { shouldShow: t } = e;
    G.showKeybindIndicators = t;
}
function ec(e) {
    let { opacity: t } = e,
        n = G.textWidgetOpacity !== t;
    return (G.textWidgetOpacity = t), n;
}
function ed() {
    G.disableExternalLinkAlert = !0;
}
function e_() {
    b = !0;
}
function eE() {
    l.Z.addInterceptor((e) => {
        if (M || !B.has(e.type)) return !1;
        if ('CHANNEL_SELECT' === e.type) {
            let { guildId: t, channelId: n } = e;
            return (
                null != n &&
                ((0, c.lW)({
                    type: A.BmY.DISPATCH,
                    pid: (0, g.QF)(),
                    token: (0, g.Ht)(),
                    payloads: [
                        {
                            type: 'CHANNEL_PRELOAD',
                            guildId: t === A.ME ? null : t,
                            channelId: n,
                            context: A.e3s
                        },
                        {
                            type: 'OVERLAY_SELECT_CHANNEL',
                            guildId: t,
                            channelId: n
                        }
                    ]
                }),
                !1)
            );
        }
        return (
            (0, c.lW)({
                type: A.BmY.DISPATCH,
                pid: (0, g.QF)(),
                token: (0, g.Ht)(),
                payloads: [e]
            }),
            !k.has(e.type)
        );
    });
}
function ef(e) {
    let t = (0, g.QF)();
    if (null == e.pid || e.pid === t)
        switch (e.type) {
            case A.BmY.STORAGE_SYNC:
                o.ZP.PersistedStore.initializeAll(e.states);
                break;
            case A.BmY.DISPATCH:
                null != e.payloads && ((M = !0), e.payloads.forEach((e) => Z(e)), (M = !1));
        }
}
function eh() {
    eE(),
        (0, c.Ty)(ef, (0, g.Ht)()),
        (0, c.$j)(),
        (0, c.lW)({
            type: A.BmY.CONNECT,
            pid: (0, g.QF)(),
            token: (0, g.Ht)()
        });
}
function ep(e) {
    L.delete(e.previousAssociatedGamePID);
}
class em extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        if (
            (this.waitFor(E.default),
            this.syncWith([E.default], () => {
                let e = E.default.getId();
                G = null != e ? x(e) : { ...O };
            }),
            __OVERLAY__ && (I.isPlatformEmbedded && (D = T.ZP.requireModule('discord_overlay2')), L.delete((0, g.QF)())),
            null != e)
        ) {
            C = e;
            let t = E.default.getId();
            null != t && (null == (G = x(t)).textChatNotifications && (G.textChatNotifications = O.textChatNotifications), null == G.textWidgetOpacity && (G.textWidgetOpacity = O.textWidgetOpacity));
        }
    }
    getState() {
        return C;
    }
    isUILocked(e) {
        return !L.has(e);
    }
    isInstanceUILocked() {
        if (!__OVERLAY__) throw Error('OverlayStore: App instance should never call .isInstanceUILocked()');
        return !L.has((0, g.QF)());
    }
    isInstanceFocused() {
        if (!__OVERLAY__) throw Error('OverlayStore: App instance should never call .isInstanceFocused()');
        return R === (0, g.QF)();
    }
    isFocused(e) {
        return R === e;
    }
    isPinned(e) {
        let t = p.Z.getLayout(g.qU);
        return (
            null != t &&
            null !=
                t.widgets.find((t) => {
                    let n = p.Z.getWidget(t);
                    return (null != n && n.type === e && !!n.pinned) || !1;
                })
        );
    }
    getSelectedGuildId() {
        return G.selectedGuildId;
    }
    getSelectedChannelId() {
        return G.selectedChannelId;
    }
    getSelectedCallId() {
        return y;
    }
    getDisplayUserMode() {
        return G.displayUserMode;
    }
    getDisplayNameMode() {
        return G.displayNameMode;
    }
    getAvatarSizeMode() {
        return G.avatarSizeMode;
    }
    getNotificationPositionMode() {
        return G.notificationPositionMode;
    }
    getTextChatNotificationMode() {
        return G.notificationPositionMode === A._vf.DISABLED ? A.Ypu.DISABLED : G.textChatNotifications;
    }
    get showKeybindIndicators() {
        return null == G.showKeybindIndicators || G.showKeybindIndicators;
    }
    getDisableExternalLinkAlert() {
        return G.disableExternalLinkAlert;
    }
    getFocusedPID() {
        return R;
    }
    get initialized() {
        return P;
    }
    get incompatibleApp() {
        return b;
    }
    getActiveRegions() {
        return U;
    }
    getTextWidgetOpacity() {
        return G.textWidgetOpacity;
    }
    isPreviewingInGame() {
        return w;
    }
}
N(em, 'displayName', 'OverlayStore'),
    N(em, 'persistKey', 'OverlayStoreV2'),
    N(em, 'migrations', [
        () => {
            let { pinnedWidgets: e, positions: t, sizes: n, v: r, ...i } = { ...s.K.get('OverlayStore') };
            return {
                ...O,
                ...(5 === r ? i : null)
            };
        },
        (e) => {
            let t = E.default.getId();
            return null == e || null == t ? {} : { [t]: { ...e } };
        }
    ]),
    (t.Z = new em(l.Z, {
        LOGOUT: V,
        MULTI_ACCOUNT_REMOVE_ACCOUNT: H,
        CONNECTION_CLOSED: Y,
        OVERLAY_START_SESSION: eh,
        OVERLAY_INITIALIZE: j,
        OVERLAY_READY: W,
        OVERLAY_FOCUSED: $,
        OVERLAY_SELECT_CHANNEL: J,
        OVERLAY_SELECT_CALL: ee,
        CALL_DELETE: et,
        LAYOUT_CREATE: z,
        OVERLAY_SET_DISPLAY_NAME_MODE: ei,
        OVERLAY_SET_DISPLAY_USER_MODE: ea,
        OVERLAY_SET_AVATAR_SIZE_MODE: eo,
        OVERLAY_SET_NOTIFICATION_POSITION_MODE: es,
        OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE: el,
        OVERLAY_SET_SHOW_KEYBIND_INDICATORS: eu,
        OVERLAY_SET_TEXT_WIDGET_OPACITY: ec,
        OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: ed,
        OVERLAY_INCOMPATIBLE_APP: e_,
        OVERLAY_SET_UI_LOCKED: q,
        OVERLAY_ACTIVATE_REGION: Q,
        OVERLAY_DEACTIVATE_ALL_REGIONS: X,
        OVERLAY_SET_PREVIEW_IN_GAME_MODE: er,
        WINDOW_RESIZED: en,
        OVERLAY_SET_ASSOCIATED_GAME: ep
    }));

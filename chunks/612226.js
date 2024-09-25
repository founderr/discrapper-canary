t.d(n, {
    Q2: function () {
        return i;
    },
    Rv: function () {
        return x;
    },
    U6: function () {
        return Y;
    },
    UD: function () {
        return w;
    },
    oT: function () {
        return X;
    }
}),
    t(411104),
    t(653041);
var i,
    o,
    l = t(346610),
    E = t(2818),
    r = t(186070),
    a = t(185514),
    u = t(395878),
    d = t(321697),
    s = t(775774),
    _ = t(570408),
    c = t(438846),
    A = t(360038),
    C = t(175724),
    S = t(705371),
    I = t(138976),
    T = t(296805),
    L = t(561716),
    N = t(239748),
    O = t(337482),
    D = t(679080),
    g = t(777019),
    R = t(523147),
    f = t(400332),
    h = t(510761),
    p = t(189509),
    P = t(673553),
    G = t(280492),
    M = t(746887),
    b = t(861007),
    Z = t(89028),
    U = t(300644),
    H = t(721383),
    m = t(207234),
    B = t(997292),
    k = t(743810),
    K = t(620212),
    v = t(188051),
    V = t(547420),
    y = t(981631),
    F = t(689938);
function w(e) {
    switch (e) {
        case 'NAVIGATION':
            return F.Z.Messages.USER_SETTINGS_KEYBINDS_NAVIGATION_SECTION_TITLE;
        case 'VOICE_AND_VIDEO':
            return F.Z.Messages.USER_SETTINGS_KEYBINDS_VOICE_AND_VIDEO_SECTION_TITLE;
        case 'CHAT':
            return F.Z.Messages.USER_SETTINGS_KEYBINDS_CHAT_SECTION_TITLE;
        case 'MISCELLANEOUS':
            return F.Z.Messages.USER_SETTINGS_KEYBINDS_MISCELLANEOUS_SECTION_TITLE;
        case 'MESSAGE':
            return F.Z.Messages.USER_SETTINGS_KEYBINDS_MESSAGE_SECTION_TITLE;
        case 'DND':
            return F.Z.Messages.USER_SETTINGS_KEYBINDS_DND_SECTION_TITLE;
    }
}
function Y(e) {
    switch (e) {
        case 'MESSAGE':
            return F.Z.Messages.USER_SETTINGS_KEYBINDS_MESSAGE_DESCRIPTION;
        case 'DND':
            return F.Z.Messages.USER_SETTINGS_KEYBINDS_DND_DESCRIPTION;
        default:
            return null;
    }
}
function W() {
    for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
    return n.map((e) => {
        let n = X[e];
        if (null == n) throw Error('getBindsFor(...): No bind for '.concat(n));
        return n.binds[0];
    });
}
((o = i || (i = {})).NAVIGATION = 'NAVIGATION'), (o.CHAT = 'CHAT'), (o.VOICE_AND_VIDEO = 'VOICE_AND_VIDEO'), (o.MISCELLANEOUS = 'MISCELLANEOUS'), (o.MESSAGE = 'MESSAGE'), (o.DND = 'DND');
let X = {
    [y.EkH.SERVER_NEXT]: h.nq,
    [y.EkH.SERVER_PREV]: h.X3,
    [y.EkH.CHANNEL_NEXT]: a.tQ,
    [y.EkH.CHANNEL_PREV]: a.x5,
    [y.EkH.NAVIGATE_BACK]: a.Nx,
    [y.EkH.NAVIGATE_FORWARD]: a.On,
    [y.EkH.UNREAD_NEXT]: k.pd,
    [y.EkH.UNREAD_PREV]: k.wk,
    [y.EkH.MENTION_CHANNEL_NEXT]: k.Nv,
    [y.EkH.MENTION_CHANNEL_PREV]: k.uX,
    [y.EkH.TOGGLE_PREVIOUS_GUILD]: a.$c,
    [y.EkH.JUMP_TO_GUILD]: A.u,
    [y.EkH.SUBMIT]: p.z,
    [y.EkH.TEXTAREA_FOCUS]: P.U,
    [y.EkH.MARK_CHANNEL_READ]: C.f,
    [y.EkH.MARK_SERVER_READ]: S.l,
    [y.EkH.TOGGLE_CHANNEL_PINS]: b.u,
    [y.EkH.TOGGLE_FOR_LATER]: Z.f,
    [y.EkH.TOGGLE_INBOX]: m.a,
    [y.EkH.MARK_TOP_INBOX_CHANNEL_READ]: m.M,
    [y.EkH.TOGGLE_USERS]: B.r,
    [y.EkH.TOGGLE_HELP]: U.O,
    [y.EkH.VIBE_WITH_WUMPUS]: v.w,
    [y.EkH.TOGGLE_MUTE]: G.iN,
    [y.EkH.TOGGLE_DEAFEN]: G.oV,
    [y.EkH.TOGGLE_CATEGORY_COLLAPSED]: M.u,
    [y.EkH.SEARCH_SOUNDBOARD]: R.Z,
    [y.EkH.SCROLL_UP]: O.B2,
    [y.EkH.SCROLL_DOWN]: O.gN,
    [y.EkH.QUICKSWITCHER_SHOW]: L.$,
    [y.EkH.CREATE_DM_GROUP]: u.K,
    [y.EkH.SEARCH_EMOJIS]: D.S,
    [y.EkH.SEARCH_GIFS]: g.O,
    [y.EkH.SEARCH_STICKERS]: f.U,
    [y.EkH.TOGGLE_HOTKEYS]: H._,
    [y.EkH.JUMP_TO_FIRST_UNREAD]: I.O,
    [y.EkH.CREATE_GUILD]: d.r,
    [y.EkH.UPLOAD_FILE]: K.U,
    [y.EkH.RETURN_TO_AUDIO_CHANNEL]: N.F,
    [y.EkH.CALL_ACCEPT]: r.IL,
    [y.EkH.CALL_START]: r.FI,
    [y.EkH.FOCUS_SEARCH]: _.I,
    [y.EkH.JUMP_TO_CURRENT_CALL]: c.K,
    [y.EkH.ZOOM_IN]: V.UF,
    [y.EkH.ZOOM_OUT]: V.RC,
    [y.EkH.ZOOM_RESET]: V.MY,
    [y.EkH.OPEN_APP_DIRECTORY]: T.T,
    [y.EkH.BROWSER_DEVTOOLS]: s.p
};
function x() {
    let e = [
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
            binds: W(y.EkH.SERVER_PREV, y.EkH.SERVER_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
            binds: W(y.EkH.CHANNEL_PREV, y.EkH.CHANNEL_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
            binds: W(y.EkH.NAVIGATE_BACK, y.EkH.NAVIGATE_FORWARD),
            group: 'NAVIGATION'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
            binds: W(y.EkH.UNREAD_PREV, y.EkH.UNREAD_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
            binds: W(y.EkH.MENTION_CHANNEL_PREV, y.EkH.MENTION_CHANNEL_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_TO_CALL,
            binds: W(y.EkH.JUMP_TO_CURRENT_CALL),
            group: 'NAVIGATION'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
            binds: W(y.EkH.TOGGLE_PREVIOUS_GUILD),
            group: 'NAVIGATION'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
            binds: W(y.EkH.QUICKSWITCHER_SHOW),
            group: 'NAVIGATION'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_GUILD,
            binds: W(y.EkH.CREATE_GUILD),
            group: 'NAVIGATION',
            groupEnd: !0
        },
        {
            description: F.Z.Messages.DND_OPERATION_LABEL_START,
            binds: ['mod+d'],
            group: 'DND'
        },
        {
            description: F.Z.Messages.DND_OPERATION_LABEL_MOVE,
            binds: ['up', 'down'],
            group: 'DND'
        },
        {
            description: F.Z.Messages.DND_OPERATION_LABEL_DROP,
            binds: ['spacebar', 'enter'],
            group: 'DND'
        },
        {
            description: F.Z.Messages.DND_OPERATION_LABEL_CANCEL,
            binds: ['esc'],
            group: 'DND',
            groupEnd: !0
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_SERVER_READ,
            binds: W(y.EkH.MARK_SERVER_READ),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
            binds: W(y.EkH.MARK_CHANNEL_READ),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_DM_GROUP,
            binds: W(y.EkH.CREATE_DM_GROUP),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PINS,
            binds: W(y.EkH.TOGGLE_CHANNEL_PINS),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_INBOX,
            binds: W(y.EkH.TOGGLE_INBOX),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_TOP_INBOX_CHANNEL_READ,
            binds: W(y.EkH.MARK_TOP_INBOX_CHANNEL_READ),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_USERS,
            binds: W(y.EkH.TOGGLE_USERS),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
            binds: W(y.EkH.SEARCH_EMOJIS),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_GIFS,
            binds: W(y.EkH.SEARCH_GIFS),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_STICKERS,
            binds: W(y.EkH.SEARCH_STICKERS),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
            binds: W(y.EkH.SCROLL_UP, y.EkH.SCROLL_DOWN),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
            binds: W(y.EkH.JUMP_TO_FIRST_UNREAD),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
            binds: W(y.EkH.TEXTAREA_FOCUS),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UPLOAD_FILE,
            binds: W(y.EkH.UPLOAD_FILE),
            group: 'CHAT',
            groupEnd: !0
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
            binds: W(y.EkH.TOGGLE_MUTE),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
            binds: W(y.EkH.TOGGLE_DEAFEN),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
            binds: W(y.EkH.CALL_ACCEPT),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
            binds: W(y.EkH.MARK_CHANNEL_READ),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
            binds: W(y.EkH.CALL_START),
            group: 'VOICE_AND_VIDEO',
            groupEnd: !0
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_SOUNDBOARD,
            binds: W(y.EkH.SEARCH_SOUNDBOARD),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_HELP,
            binds: W(y.EkH.TOGGLE_HELP),
            group: 'MISCELLANEOUS'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH,
            binds: W(y.EkH.FOCUS_SEARCH),
            group: 'MISCELLANEOUS'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_EASTER_EGG,
            binds: ['h+h+right+n+k'],
            group: 'MISCELLANEOUS',
            groupEnd: !0
        },
        {
            description: F.Z.Messages.EDIT_MESSAGE,
            binds: ['e'],
            group: 'MESSAGE'
        },
        {
            description: F.Z.Messages.DELETE_MESSAGE,
            binds: ['backspace'],
            group: 'MESSAGE'
        },
        {
            description: F.Z.Messages.PIN_MESSAGE,
            binds: ['p'],
            group: 'MESSAGE'
        },
        {
            description: F.Z.Messages.ADD_REACTION,
            binds: ['plus'],
            group: 'MESSAGE'
        },
        {
            description: F.Z.Messages.MESSAGE_ACTION_REPLY,
            binds: ['r'],
            group: 'MESSAGE'
        },
        {
            description: F.Z.Messages.COPY_TEXT,
            binds: ['mod+c'],
            group: 'MESSAGE'
        },
        {
            description: F.Z.Messages.MARK_UNREAD,
            binds: ['alt+enter'],
            group: 'MESSAGE'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
            binds: ['escape'],
            group: 'MESSAGE',
            groupEnd: !0
        },
        {
            description: F.Z.Messages.USER_SETTINGS_KEYBIND_VIBE_WITH_WUMPUS_DESCRIPTION,
            binds: W(y.EkH.VIBE_WITH_WUMPUS),
            group: 'MISCELLANEOUS'
        }
    ];
    (0, l.WT)({ location: 'keybinds' }, { autoTrackExposure: !1 }).canForwardMessages &&
        e.push({
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_FORWARD_MESSAGE,
            binds: ['f'],
            group: 'MESSAGE'
        });
    let { enabled: n, inInbox: t } = E.Z.getCurrentConfig({ location: 'keybinds' }, { autoTrackExposure: !1 });
    return (
        n &&
            !t &&
            e.push({
                description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_FOR_LATER,
                binds: W(y.EkH.TOGGLE_FOR_LATER),
                group: 'CHAT'
            }),
        e
    );
}
n.ZP = 12633 == t.j ? X : null;

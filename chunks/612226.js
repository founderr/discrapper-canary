i.d(t, {
    Q2: function () {
        return o;
    },
    Rv: function () {
        return x;
    },
    U6: function () {
        return w;
    },
    UD: function () {
        return X;
    },
    oT: function () {
        return Y;
    }
}),
    i(411104),
    i(653041);
var o,
    r,
    E = i(346610),
    e = i(2818),
    s = i(186070),
    d = i(185514),
    c = i(395878),
    u = i(321697),
    l = i(775774),
    A = i(570408),
    _ = i(438846),
    a = i(360038),
    p = i(175724),
    O = i(705371),
    N = i(138976),
    C = i(296805),
    H = i(561716),
    g = i(239748),
    S = i(337482),
    T = i(679080),
    b = i(777019),
    I = i(523147),
    L = i(400332),
    G = i(510761),
    R = i(189509),
    k = i(673553),
    f = i(280492),
    D = i(746887),
    M = i(861007),
    U = i(89028),
    m = i(300644),
    P = i(721383),
    V = i(207234),
    h = i(997292),
    B = i(743810),
    K = i(620212),
    y = i(188051),
    Z = i(547420),
    F = i(981631),
    v = i(388032);
function X(n) {
    switch (n) {
        case 'NAVIGATION':
            return v.intl.string(v.t['yGE+jo']);
        case 'VOICE_AND_VIDEO':
            return v.intl.string(v.t.bI8F5u);
        case 'CHAT':
            return v.intl.string(v.t.hDhbb2);
        case 'MISCELLANEOUS':
            return v.intl.string(v.t.cBdwqq);
        case 'MESSAGE':
            return v.intl.string(v.t['5fpmX1']);
        case 'DND':
            return v.intl.string(v.t['69j6+/']);
    }
}
function w(n) {
    switch (n) {
        case 'MESSAGE':
            return v.intl.string(v.t.iepGDg);
        case 'DND':
            return v.intl.string(v.t.LBsB0d);
        default:
            return null;
    }
}
function W() {
    for (var n = arguments.length, t = Array(n), i = 0; i < n; i++) t[i] = arguments[i];
    return t.map((n) => {
        let t = Y[n];
        if (null == t) throw Error('getBindsFor(...): No bind for '.concat(t));
        return t.binds[0];
    });
}
((r = o || (o = {})).NAVIGATION = 'NAVIGATION'), (r.CHAT = 'CHAT'), (r.VOICE_AND_VIDEO = 'VOICE_AND_VIDEO'), (r.MISCELLANEOUS = 'MISCELLANEOUS'), (r.MESSAGE = 'MESSAGE'), (r.DND = 'DND');
let Y = {
    [F.EkH.SERVER_NEXT]: G.nq,
    [F.EkH.SERVER_PREV]: G.X3,
    [F.EkH.CHANNEL_NEXT]: d.tQ,
    [F.EkH.CHANNEL_PREV]: d.x5,
    [F.EkH.NAVIGATE_BACK]: d.Nx,
    [F.EkH.NAVIGATE_FORWARD]: d.On,
    [F.EkH.UNREAD_NEXT]: B.pd,
    [F.EkH.UNREAD_PREV]: B.wk,
    [F.EkH.MENTION_CHANNEL_NEXT]: B.Nv,
    [F.EkH.MENTION_CHANNEL_PREV]: B.uX,
    [F.EkH.TOGGLE_PREVIOUS_GUILD]: d.$c,
    [F.EkH.JUMP_TO_GUILD]: a.u,
    [F.EkH.SUBMIT]: R.z,
    [F.EkH.TEXTAREA_FOCUS]: k.U,
    [F.EkH.MARK_CHANNEL_READ]: p.f,
    [F.EkH.MARK_SERVER_READ]: O.l,
    [F.EkH.TOGGLE_CHANNEL_PINS]: M.u,
    [F.EkH.TOGGLE_FOR_LATER]: U.f,
    [F.EkH.TOGGLE_INBOX]: V.a,
    [F.EkH.MARK_TOP_INBOX_CHANNEL_READ]: V.M,
    [F.EkH.TOGGLE_USERS]: h.r,
    [F.EkH.TOGGLE_HELP]: m.O,
    [F.EkH.VIBE_WITH_WUMPUS]: y.w,
    [F.EkH.TOGGLE_MUTE]: f.iN,
    [F.EkH.TOGGLE_DEAFEN]: f.oV,
    [F.EkH.TOGGLE_CATEGORY_COLLAPSED]: D.u,
    [F.EkH.SEARCH_SOUNDBOARD]: I.Z,
    [F.EkH.SCROLL_UP]: S.B2,
    [F.EkH.SCROLL_DOWN]: S.gN,
    [F.EkH.QUICKSWITCHER_SHOW]: H.$,
    [F.EkH.CREATE_DM_GROUP]: c.K,
    [F.EkH.SEARCH_EMOJIS]: T.S,
    [F.EkH.SEARCH_GIFS]: b.O,
    [F.EkH.SEARCH_STICKERS]: L.U,
    [F.EkH.TOGGLE_HOTKEYS]: P._,
    [F.EkH.JUMP_TO_FIRST_UNREAD]: N.O,
    [F.EkH.CREATE_GUILD]: u.r,
    [F.EkH.UPLOAD_FILE]: K.U,
    [F.EkH.RETURN_TO_AUDIO_CHANNEL]: g.F,
    [F.EkH.CALL_ACCEPT]: s.IL,
    [F.EkH.CALL_START]: s.FI,
    [F.EkH.FOCUS_SEARCH]: A.I,
    [F.EkH.JUMP_TO_CURRENT_CALL]: _.K,
    [F.EkH.ZOOM_IN]: Z.UF,
    [F.EkH.ZOOM_OUT]: Z.RC,
    [F.EkH.ZOOM_RESET]: Z.MY,
    [F.EkH.OPEN_APP_DIRECTORY]: C.T,
    [F.EkH.BROWSER_DEVTOOLS]: l.p
};
function x() {
    let n = [
        {
            description: v.intl.string(v.t.bx4Uy8),
            binds: W(F.EkH.SERVER_PREV, F.EkH.SERVER_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: v.intl.string(v.t['+Wem6u']),
            binds: W(F.EkH.CHANNEL_PREV, F.EkH.CHANNEL_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: v.intl.string(v.t['+2fcd3']),
            binds: W(F.EkH.NAVIGATE_BACK, F.EkH.NAVIGATE_FORWARD),
            group: 'NAVIGATION'
        },
        {
            description: v.intl.string(v.t.eVmj1N),
            binds: W(F.EkH.UNREAD_PREV, F.EkH.UNREAD_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: v.intl.string(v.t.EcqS7e),
            binds: W(F.EkH.MENTION_CHANNEL_PREV, F.EkH.MENTION_CHANNEL_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: v.intl.string(v.t['4I3pwc']),
            binds: W(F.EkH.JUMP_TO_CURRENT_CALL),
            group: 'NAVIGATION'
        },
        {
            description: v.intl.string(v.t['Bqss7+']),
            binds: W(F.EkH.TOGGLE_PREVIOUS_GUILD),
            group: 'NAVIGATION'
        },
        {
            description: v.intl.string(v.t.yYsRlJ),
            binds: W(F.EkH.QUICKSWITCHER_SHOW),
            group: 'NAVIGATION'
        },
        {
            description: v.intl.string(v.t.O7ouXF),
            binds: W(F.EkH.CREATE_GUILD),
            group: 'NAVIGATION',
            groupEnd: !0
        },
        {
            description: v.intl.string(v.t.Lns0FR),
            binds: ['mod+d'],
            group: 'DND'
        },
        {
            description: v.intl.string(v.t.dmMqa2),
            binds: ['up', 'down'],
            group: 'DND'
        },
        {
            description: v.intl.string(v.t['cs/HVF']),
            binds: ['spacebar', 'enter'],
            group: 'DND'
        },
        {
            description: v.intl.string(v.t['1ioMJS']),
            binds: ['esc'],
            group: 'DND',
            groupEnd: !0
        },
        {
            description: v.intl.string(v.t.UaXAPz),
            binds: W(F.EkH.MARK_SERVER_READ),
            group: 'CHAT'
        },
        {
            description: v.intl.string(v.t['5X9vFh']),
            binds: W(F.EkH.MARK_CHANNEL_READ),
            group: 'CHAT'
        },
        {
            description: v.intl.string(v.t.wxQFsr),
            binds: W(F.EkH.CREATE_DM_GROUP),
            group: 'CHAT'
        },
        {
            description: v.intl.string(v.t['C+XV7e']),
            binds: W(F.EkH.TOGGLE_CHANNEL_PINS),
            group: 'CHAT'
        },
        {
            description: v.intl.string(v.t['Q+YV/f']),
            binds: W(F.EkH.TOGGLE_INBOX),
            group: 'CHAT'
        },
        {
            description: v.intl.string(v.t['YEjV+f']),
            binds: W(F.EkH.MARK_TOP_INBOX_CHANNEL_READ),
            group: 'CHAT'
        },
        {
            description: v.intl.string(v.t.AcBI9f),
            binds: W(F.EkH.TOGGLE_USERS),
            group: 'CHAT'
        },
        {
            description: v.intl.string(v.t.JoxNnp),
            binds: W(F.EkH.SEARCH_EMOJIS),
            group: 'CHAT'
        },
        {
            description: v.intl.string(v.t['3PHxo6']),
            binds: W(F.EkH.SEARCH_GIFS),
            group: 'CHAT'
        },
        {
            description: v.intl.string(v.t.YFl7eX),
            binds: W(F.EkH.SEARCH_STICKERS),
            group: 'CHAT'
        },
        {
            description: v.intl.string(v.t.L3RYYG),
            binds: W(F.EkH.SCROLL_UP, F.EkH.SCROLL_DOWN),
            group: 'CHAT'
        },
        {
            description: v.intl.string(v.t['3HAurK']),
            binds: W(F.EkH.JUMP_TO_FIRST_UNREAD),
            group: 'CHAT'
        },
        {
            description: v.intl.string(v.t.rrYBEh),
            binds: W(F.EkH.TEXTAREA_FOCUS),
            group: 'CHAT'
        },
        {
            description: v.intl.string(v.t.sUJlPD),
            binds: W(F.EkH.UPLOAD_FILE),
            group: 'CHAT',
            groupEnd: !0
        },
        {
            description: v.intl.string(v.t.tL6eVV),
            binds: W(F.EkH.TOGGLE_MUTE),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: v.intl.string(v.t['QXe/7e']),
            binds: W(F.EkH.TOGGLE_DEAFEN),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: v.intl.string(v.t.d6UIio),
            binds: W(F.EkH.CALL_ACCEPT),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: v.intl.string(v.t.IcEW09),
            binds: W(F.EkH.MARK_CHANNEL_READ),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: v.intl.string(v.t.WN2dsb),
            binds: W(F.EkH.CALL_START),
            group: 'VOICE_AND_VIDEO',
            groupEnd: !0
        },
        {
            description: v.intl.string(v.t.rUK0kp),
            binds: W(F.EkH.SEARCH_SOUNDBOARD),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: v.intl.string(v.t.vkGkSk),
            binds: W(F.EkH.TOGGLE_HELP),
            group: 'MISCELLANEOUS'
        },
        {
            description: v.intl.string(v.t['FJvZ8/']),
            binds: W(F.EkH.FOCUS_SEARCH),
            group: 'MISCELLANEOUS'
        },
        {
            description: v.intl.string(v.t.HnNtEB),
            binds: ['h+h+right+n+k'],
            group: 'MISCELLANEOUS',
            groupEnd: !0
        },
        {
            description: v.intl.string(v.t.fsBWmZ),
            binds: ['e'],
            group: 'MESSAGE'
        },
        {
            description: v.intl.string(v.t.xwMqDw),
            binds: ['backspace'],
            group: 'MESSAGE'
        },
        {
            description: v.intl.string(v.t['CvQ18/']),
            binds: ['p'],
            group: 'MESSAGE'
        },
        {
            description: v.intl.string(v.t.lfIHs7),
            binds: ['plus'],
            group: 'MESSAGE'
        },
        {
            description: v.intl.string(v.t['5IEsGx']),
            binds: ['r'],
            group: 'MESSAGE'
        },
        {
            description: v.intl.string(v.t.JrGD7O),
            binds: ['mod+c'],
            group: 'MESSAGE'
        },
        {
            description: v.intl.string(v.t.RpE9k5),
            binds: ['alt+enter'],
            group: 'MESSAGE'
        },
        {
            description: v.intl.string(v.t.rrYBEh),
            binds: ['escape'],
            group: 'MESSAGE',
            groupEnd: !0
        },
        {
            description: v.intl.string(v.t.z9c6mp),
            binds: W(F.EkH.VIBE_WITH_WUMPUS),
            group: 'MISCELLANEOUS'
        }
    ];
    (0, E.WT)({ location: 'keybinds' }, { autoTrackExposure: !1 }).canForwardMessages &&
        n.push({
            description: v.intl.string(v.t.zSyDdH),
            binds: ['f'],
            group: 'MESSAGE'
        });
    let { enabled: t, inInbox: i } = e.Z.getCurrentConfig({ location: 'keybinds' }, { autoTrackExposure: !1 });
    return (
        t &&
            !i &&
            n.push({
                description: v.intl.string(v.t.IWNSoK),
                binds: W(F.EkH.TOGGLE_FOR_LATER),
                group: 'CHAT'
            }),
        n
    );
}
t.ZP = 12633 == i.j ? Y : null;

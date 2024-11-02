e.d(t, {
    Q2: function () {
        return i;
    },
    Rv: function () {
        return X;
    },
    U6: function () {
        return x;
    },
    UD: function () {
        return w;
    },
    oT: function () {
        return Y;
    }
}),
    e(411104),
    e(653041);
var i,
    l,
    o = e(346610),
    r = e(2818),
    u = e(186070),
    a = e(185514),
    d = e(395878),
    E = e(321697),
    s = e(775774),
    c = e(570408),
    _ = e(438846),
    C = e(360038),
    A = e(175724),
    S = e(705371),
    I = e(138976),
    T = e(296805),
    L = e(561716),
    h = e(239748),
    g = e(337482),
    f = e(679080),
    p = e(777019),
    O = e(523147),
    N = e(400332),
    b = e(510761),
    R = e(189509),
    G = e(673553),
    Z = e(280492),
    P = e(746887),
    D = e(861007),
    H = e(89028),
    U = e(300644),
    M = e(721383),
    m = e(207234),
    k = e(997292),
    v = e(743810),
    y = e(620212),
    V = e(188051),
    K = e(547420),
    B = e(981631),
    F = e(388032);
function w(n) {
    switch (n) {
        case 'NAVIGATION':
            return F.intl.string(F.t['yGE+jo']);
        case 'VOICE_AND_VIDEO':
            return F.intl.string(F.t.bI8F5u);
        case 'CHAT':
            return F.intl.string(F.t.hDhbb2);
        case 'MISCELLANEOUS':
            return F.intl.string(F.t.cBdwqq);
        case 'MESSAGE':
            return F.intl.string(F.t['5fpmX1']);
        case 'DND':
            return F.intl.string(F.t['69j6+/']);
    }
}
function x(n) {
    switch (n) {
        case 'MESSAGE':
            return F.intl.string(F.t.iepGDg);
        case 'DND':
            return F.intl.string(F.t.LBsB0d);
        default:
            return null;
    }
}
function W() {
    for (var n = arguments.length, t = Array(n), e = 0; e < n; e++) t[e] = arguments[e];
    return t.map((n) => {
        let t = Y[n];
        if (null == t) throw Error('getBindsFor(...): No bind for '.concat(t));
        return t.binds[0];
    });
}
((l = i || (i = {})).NAVIGATION = 'NAVIGATION'), (l.CHAT = 'CHAT'), (l.VOICE_AND_VIDEO = 'VOICE_AND_VIDEO'), (l.MISCELLANEOUS = 'MISCELLANEOUS'), (l.MESSAGE = 'MESSAGE'), (l.DND = 'DND');
let Y = {
    [B.EkH.SERVER_NEXT]: b.nq,
    [B.EkH.SERVER_PREV]: b.X3,
    [B.EkH.CHANNEL_NEXT]: a.tQ,
    [B.EkH.CHANNEL_PREV]: a.x5,
    [B.EkH.NAVIGATE_BACK]: a.Nx,
    [B.EkH.NAVIGATE_FORWARD]: a.On,
    [B.EkH.UNREAD_NEXT]: v.pd,
    [B.EkH.UNREAD_PREV]: v.wk,
    [B.EkH.MENTION_CHANNEL_NEXT]: v.Nv,
    [B.EkH.MENTION_CHANNEL_PREV]: v.uX,
    [B.EkH.TOGGLE_PREVIOUS_GUILD]: a.$c,
    [B.EkH.JUMP_TO_GUILD]: C.u,
    [B.EkH.SUBMIT]: R.z,
    [B.EkH.TEXTAREA_FOCUS]: G.U,
    [B.EkH.MARK_CHANNEL_READ]: A.f,
    [B.EkH.MARK_SERVER_READ]: S.l,
    [B.EkH.TOGGLE_CHANNEL_PINS]: D.u,
    [B.EkH.TOGGLE_FOR_LATER]: H.f,
    [B.EkH.TOGGLE_INBOX]: m.a,
    [B.EkH.MARK_TOP_INBOX_CHANNEL_READ]: m.M,
    [B.EkH.TOGGLE_USERS]: k.r,
    [B.EkH.TOGGLE_HELP]: U.O,
    [B.EkH.VIBE_WITH_WUMPUS]: V.w,
    [B.EkH.TOGGLE_MUTE]: Z.iN,
    [B.EkH.TOGGLE_DEAFEN]: Z.oV,
    [B.EkH.TOGGLE_CATEGORY_COLLAPSED]: P.u,
    [B.EkH.SEARCH_SOUNDBOARD]: O.Z,
    [B.EkH.SCROLL_UP]: g.B2,
    [B.EkH.SCROLL_DOWN]: g.gN,
    [B.EkH.QUICKSWITCHER_SHOW]: L.$,
    [B.EkH.CREATE_DM_GROUP]: d.K,
    [B.EkH.SEARCH_EMOJIS]: f.S,
    [B.EkH.SEARCH_GIFS]: p.O,
    [B.EkH.SEARCH_STICKERS]: N.U,
    [B.EkH.TOGGLE_HOTKEYS]: M._,
    [B.EkH.JUMP_TO_FIRST_UNREAD]: I.O,
    [B.EkH.CREATE_GUILD]: E.r,
    [B.EkH.UPLOAD_FILE]: y.U,
    [B.EkH.RETURN_TO_AUDIO_CHANNEL]: h.F,
    [B.EkH.CALL_ACCEPT]: u.IL,
    [B.EkH.CALL_START]: u.FI,
    [B.EkH.FOCUS_SEARCH]: c.I,
    [B.EkH.JUMP_TO_CURRENT_CALL]: _.K,
    [B.EkH.ZOOM_IN]: K.UF,
    [B.EkH.ZOOM_OUT]: K.RC,
    [B.EkH.ZOOM_RESET]: K.MY,
    [B.EkH.OPEN_APP_DIRECTORY]: T.T,
    [B.EkH.BROWSER_DEVTOOLS]: s.p
};
function X() {
    let n = [
        {
            description: F.intl.string(F.t.bx4Uy8),
            binds: W(B.EkH.SERVER_PREV, B.EkH.SERVER_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: F.intl.string(F.t['+Wem6u']),
            binds: W(B.EkH.CHANNEL_PREV, B.EkH.CHANNEL_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: F.intl.string(F.t['+2fcd3']),
            binds: W(B.EkH.NAVIGATE_BACK, B.EkH.NAVIGATE_FORWARD),
            group: 'NAVIGATION'
        },
        {
            description: F.intl.string(F.t.eVmj1N),
            binds: W(B.EkH.UNREAD_PREV, B.EkH.UNREAD_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: F.intl.string(F.t.EcqS7e),
            binds: W(B.EkH.MENTION_CHANNEL_PREV, B.EkH.MENTION_CHANNEL_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: F.intl.string(F.t['4I3pwc']),
            binds: W(B.EkH.JUMP_TO_CURRENT_CALL),
            group: 'NAVIGATION'
        },
        {
            description: F.intl.string(F.t['Bqss7+']),
            binds: W(B.EkH.TOGGLE_PREVIOUS_GUILD),
            group: 'NAVIGATION'
        },
        {
            description: F.intl.string(F.t.yYsRlJ),
            binds: W(B.EkH.QUICKSWITCHER_SHOW),
            group: 'NAVIGATION'
        },
        {
            description: F.intl.string(F.t.O7ouXF),
            binds: W(B.EkH.CREATE_GUILD),
            group: 'NAVIGATION',
            groupEnd: !0
        },
        {
            description: F.intl.string(F.t.Lns0FR),
            binds: ['mod+d'],
            group: 'DND'
        },
        {
            description: F.intl.string(F.t.dmMqa2),
            binds: ['up', 'down'],
            group: 'DND'
        },
        {
            description: F.intl.string(F.t['cs/HVF']),
            binds: ['spacebar', 'enter'],
            group: 'DND'
        },
        {
            description: F.intl.string(F.t['1ioMJS']),
            binds: ['esc'],
            group: 'DND',
            groupEnd: !0
        },
        {
            description: F.intl.string(F.t.UaXAPz),
            binds: W(B.EkH.MARK_SERVER_READ),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t['5X9vFh']),
            binds: W(B.EkH.MARK_CHANNEL_READ),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t.wxQFsr),
            binds: W(B.EkH.CREATE_DM_GROUP),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t['C+XV7e']),
            binds: W(B.EkH.TOGGLE_CHANNEL_PINS),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t['Q+YV/f']),
            binds: W(B.EkH.TOGGLE_INBOX),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t['YEjV+f']),
            binds: W(B.EkH.MARK_TOP_INBOX_CHANNEL_READ),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t.AcBI9f),
            binds: W(B.EkH.TOGGLE_USERS),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t.JoxNnp),
            binds: W(B.EkH.SEARCH_EMOJIS),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t['3PHxo6']),
            binds: W(B.EkH.SEARCH_GIFS),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t.YFl7eX),
            binds: W(B.EkH.SEARCH_STICKERS),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t.L3RYYG),
            binds: W(B.EkH.SCROLL_UP, B.EkH.SCROLL_DOWN),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t['3HAurK']),
            binds: W(B.EkH.JUMP_TO_FIRST_UNREAD),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t.rrYBEh),
            binds: W(B.EkH.TEXTAREA_FOCUS),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t.sUJlPD),
            binds: W(B.EkH.UPLOAD_FILE),
            group: 'CHAT',
            groupEnd: !0
        },
        {
            description: F.intl.string(F.t.tL6eVV),
            binds: W(B.EkH.TOGGLE_MUTE),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: F.intl.string(F.t['QXe/7e']),
            binds: W(B.EkH.TOGGLE_DEAFEN),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: F.intl.string(F.t.d6UIio),
            binds: W(B.EkH.CALL_ACCEPT),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: F.intl.string(F.t.IcEW09),
            binds: W(B.EkH.MARK_CHANNEL_READ),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: F.intl.string(F.t.WN2dsb),
            binds: W(B.EkH.CALL_START),
            group: 'VOICE_AND_VIDEO',
            groupEnd: !0
        },
        {
            description: F.intl.string(F.t.rUK0kp),
            binds: W(B.EkH.SEARCH_SOUNDBOARD),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: F.intl.string(F.t.vkGkSk),
            binds: W(B.EkH.TOGGLE_HELP),
            group: 'MISCELLANEOUS'
        },
        {
            description: F.intl.string(F.t['FJvZ8/']),
            binds: W(B.EkH.FOCUS_SEARCH),
            group: 'MISCELLANEOUS'
        },
        {
            description: F.intl.string(F.t.HnNtEB),
            binds: ['h+h+right+n+k'],
            group: 'MISCELLANEOUS',
            groupEnd: !0
        },
        {
            description: F.intl.string(F.t.fsBWmZ),
            binds: ['e'],
            group: 'MESSAGE'
        },
        {
            description: F.intl.string(F.t.xwMqDw),
            binds: ['backspace'],
            group: 'MESSAGE'
        },
        {
            description: F.intl.string(F.t['CvQ18/']),
            binds: ['p'],
            group: 'MESSAGE'
        },
        {
            description: F.intl.string(F.t.lfIHs7),
            binds: ['plus'],
            group: 'MESSAGE'
        },
        {
            description: F.intl.string(F.t['5IEsGx']),
            binds: ['r'],
            group: 'MESSAGE'
        },
        {
            description: F.intl.string(F.t.JrGD7O),
            binds: ['mod+c'],
            group: 'MESSAGE'
        },
        {
            description: F.intl.string(F.t.RpE9k5),
            binds: ['alt+enter'],
            group: 'MESSAGE'
        },
        {
            description: F.intl.string(F.t.rrYBEh),
            binds: ['escape'],
            group: 'MESSAGE',
            groupEnd: !0
        },
        {
            description: F.intl.string(F.t.z9c6mp),
            binds: W(B.EkH.VIBE_WITH_WUMPUS),
            group: 'MISCELLANEOUS'
        }
    ];
    (0, o.WT)({ location: 'keybinds' }, { autoTrackExposure: !1 }).canForwardMessages &&
        n.push({
            description: F.intl.string(F.t.zSyDdH),
            binds: ['f'],
            group: 'MESSAGE'
        });
    let { enabled: t, inInbox: e } = r.Z.getCurrentConfig({ location: 'keybinds' }, { autoTrackExposure: !1 });
    return (
        t &&
            !e &&
            n.push({
                description: F.intl.string(F.t.IWNSoK),
                binds: W(B.EkH.TOGGLE_FOR_LATER),
                group: 'CHAT'
            }),
        n
    );
}
t.ZP = 12633 == e.j ? Y : null;

n.d(t, {
    Sr: function () {
        return x;
    },
    Xq: function () {
        return v;
    },
    Zg: function () {
        return T;
    }
}),
    n(411104);
var i = n(186070),
    l = n(185514),
    r = n(360038),
    a = n(175724),
    s = n(705371),
    o = n(138976),
    c = n(167042),
    u = n(239748),
    d = n(337482),
    h = n(679080),
    p = n(510761),
    f = n(189509),
    m = n(673553),
    _ = n(280492),
    g = n(746887),
    C = n(721383),
    I = n(743810),
    E = n(981631),
    N = n(689938);
function S() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = x[e];
        if (null == t) throw Error('getBindsFor(...): No bind for '.concat(t));
        return t.binds[0];
    });
}
let x = {
        [E.EkH.SERVER_NEXT]: p.nq,
        [E.EkH.SERVER_PREV]: p.X3,
        [E.EkH.CHANNEL_NEXT]: l.tQ,
        [E.EkH.CHANNEL_PREV]: l.x5,
        [E.EkH.NAVIGATE_BACK]: l.Nx,
        [E.EkH.NAVIGATE_FORWARD]: l.On,
        [E.EkH.UNREAD_NEXT]: I.pd,
        [E.EkH.UNREAD_PREV]: I.wk,
        [E.EkH.MENTION_CHANNEL_NEXT]: I.Nv,
        [E.EkH.MENTION_CHANNEL_PREV]: I.uX,
        [E.EkH.TOGGLE_PREVIOUS_GUILD]: l.$c,
        [E.EkH.JUMP_TO_GUILD]: r.u,
        [E.EkH.SUBMIT]: f.z,
        [E.EkH.TEXTAREA_FOCUS]: m.U,
        [E.EkH.MARK_CHANNEL_READ]: a.f,
        [E.EkH.MARK_SERVER_READ]: s.l,
        [E.EkH.TOGGLE_MUTE]: _.iN,
        [E.EkH.TOGGLE_DEAFEN]: _.oV,
        [E.EkH.TOGGLE_CATEGORY_COLLAPSED]: g.u,
        [E.EkH.SCROLL_UP]: d.B2,
        [E.EkH.SCROLL_DOWN]: d.gN,
        [E.EkH.SEARCH_EMOJIS]: h.S,
        [E.EkH.TOGGLE_HOTKEYS]: C._,
        [E.EkH.JUMP_TO_FIRST_UNREAD]: o.O,
        [E.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
        [E.EkH.CALL_ACCEPT]: i.IL,
        [E.EkH.CALL_START]: i.FI,
        [E.EkH.QUICKSWITCHER_SHOW]: c.$
    },
    v = { [E.EkH.QUICKSWITCHER_SHOW]: c.$ };
function T() {
    return [
        {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
            binds: S(E.EkH.SERVER_PREV, E.EkH.SERVER_NEXT)
        },
        {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
            binds: S(E.EkH.CHANNEL_PREV, E.EkH.CHANNEL_NEXT)
        },
        {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
            binds: S(E.EkH.NAVIGATE_BACK, E.EkH.NAVIGATE_FORWARD)
        },
        {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
            binds: S(E.EkH.UNREAD_PREV, E.EkH.UNREAD_NEXT)
        },
        {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
            binds: S(E.EkH.MENTION_CHANNEL_PREV, E.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0
        },
        {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
            binds: S(E.EkH.TOGGLE_PREVIOUS_GUILD)
        },
        {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_SERVER_READ,
            binds: S(E.EkH.MARK_SERVER_READ)
        },
        {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
            binds: S(E.EkH.MARK_CHANNEL_READ)
        },
        {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
            binds: S(E.EkH.SEARCH_EMOJIS),
            groupEnd: !0
        },
        {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
            binds: S(E.EkH.TOGGLE_MUTE)
        },
        {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
            binds: S(E.EkH.TOGGLE_DEAFEN)
        },
        {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
            binds: S(E.EkH.CALL_ACCEPT)
        },
        {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
            binds: S(E.EkH.MARK_CHANNEL_READ)
        },
        {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
            binds: S(E.EkH.CALL_START),
            groupEnd: !0
        },
        {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
            binds: S(E.EkH.SCROLL_UP, E.EkH.SCROLL_DOWN)
        },
        {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
            binds: S(E.EkH.JUMP_TO_FIRST_UNREAD)
        },
        {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
            binds: S(E.EkH.TEXTAREA_FOCUS)
        },
        {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
            binds: S(E.EkH.QUICKSWITCHER_SHOW)
        }
    ];
}

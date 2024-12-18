n.d(t, {
    Sr: function () {
        return I;
    },
    Xq: function () {
        return T;
    },
    Zg: function () {
        return S;
    }
}),
    n(411104);
var s = n(186070),
    i = n(185514),
    r = n(360038),
    o = n(175724),
    l = n(705371),
    a = n(138976),
    c = n(167042),
    u = n(239748),
    d = n(337482),
    h = n(679080),
    E = n(510761),
    p = n(189509),
    _ = n(673553),
    m = n(280492),
    C = n(746887),
    g = n(721383),
    f = n(743810),
    N = n(981631),
    b = n(388032);
function R() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = I[e];
        if (null == t) throw Error('getBindsFor(...): No bind for '.concat(t));
        return t.binds[0];
    });
}
let I = {
        [N.EkH.SERVER_NEXT]: E.nq,
        [N.EkH.SERVER_PREV]: E.X3,
        [N.EkH.CHANNEL_NEXT]: i.tQ,
        [N.EkH.CHANNEL_PREV]: i.x5,
        [N.EkH.NAVIGATE_BACK]: i.Nx,
        [N.EkH.NAVIGATE_FORWARD]: i.On,
        [N.EkH.UNREAD_NEXT]: f.pd,
        [N.EkH.UNREAD_PREV]: f.wk,
        [N.EkH.MENTION_CHANNEL_NEXT]: f.Nv,
        [N.EkH.MENTION_CHANNEL_PREV]: f.uX,
        [N.EkH.TOGGLE_PREVIOUS_GUILD]: i.$c,
        [N.EkH.JUMP_TO_GUILD]: r.u,
        [N.EkH.SUBMIT]: p.z,
        [N.EkH.TEXTAREA_FOCUS]: _.U,
        [N.EkH.MARK_CHANNEL_READ]: o.f,
        [N.EkH.MARK_SERVER_READ]: l.l,
        [N.EkH.TOGGLE_MUTE]: m.iN,
        [N.EkH.TOGGLE_DEAFEN]: m.oV,
        [N.EkH.TOGGLE_CATEGORY_COLLAPSED]: C.u,
        [N.EkH.SCROLL_UP]: d.B2,
        [N.EkH.SCROLL_DOWN]: d.gN,
        [N.EkH.SEARCH_EMOJIS]: h.S,
        [N.EkH.TOGGLE_HOTKEYS]: g._,
        [N.EkH.JUMP_TO_FIRST_UNREAD]: a.O,
        [N.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
        [N.EkH.CALL_ACCEPT]: s.IL,
        [N.EkH.CALL_START]: s.FI,
        [N.EkH.QUICKSWITCHER_SHOW]: c.$
    },
    T = { [N.EkH.QUICKSWITCHER_SHOW]: c.$ };
function S() {
    return [
        {
            description: b.intl.string(b.t.bx4Uy8),
            binds: R(N.EkH.SERVER_PREV, N.EkH.SERVER_NEXT)
        },
        {
            description: b.intl.string(b.t['+Wem6u']),
            binds: R(N.EkH.CHANNEL_PREV, N.EkH.CHANNEL_NEXT)
        },
        {
            description: b.intl.string(b.t['+2fcd3']),
            binds: R(N.EkH.NAVIGATE_BACK, N.EkH.NAVIGATE_FORWARD)
        },
        {
            description: b.intl.string(b.t.eVmj1N),
            binds: R(N.EkH.UNREAD_PREV, N.EkH.UNREAD_NEXT)
        },
        {
            description: b.intl.string(b.t.EcqS7e),
            binds: R(N.EkH.MENTION_CHANNEL_PREV, N.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0
        },
        {
            description: b.intl.string(b.t['Bqss7+']),
            binds: R(N.EkH.TOGGLE_PREVIOUS_GUILD)
        },
        {
            description: b.intl.string(b.t.UaXAPz),
            binds: R(N.EkH.MARK_SERVER_READ)
        },
        {
            description: b.intl.string(b.t['5X9vFh']),
            binds: R(N.EkH.MARK_CHANNEL_READ)
        },
        {
            description: b.intl.string(b.t.JoxNnp),
            binds: R(N.EkH.SEARCH_EMOJIS),
            groupEnd: !0
        },
        {
            description: b.intl.string(b.t.tL6eVV),
            binds: R(N.EkH.TOGGLE_MUTE)
        },
        {
            description: b.intl.string(b.t['QXe/7e']),
            binds: R(N.EkH.TOGGLE_DEAFEN)
        },
        {
            description: b.intl.string(b.t.d6UIio),
            binds: R(N.EkH.CALL_ACCEPT)
        },
        {
            description: b.intl.string(b.t.IcEW09),
            binds: R(N.EkH.MARK_CHANNEL_READ)
        },
        {
            description: b.intl.string(b.t.WN2dsb),
            binds: R(N.EkH.CALL_START),
            groupEnd: !0
        },
        {
            description: b.intl.string(b.t.L3RYYG),
            binds: R(N.EkH.SCROLL_UP, N.EkH.SCROLL_DOWN)
        },
        {
            description: b.intl.string(b.t['3HAurK']),
            binds: R(N.EkH.JUMP_TO_FIRST_UNREAD)
        },
        {
            description: b.intl.string(b.t.rrYBEh),
            binds: R(N.EkH.TEXTAREA_FOCUS)
        },
        {
            description: b.intl.string(b.t.yYsRlJ),
            binds: R(N.EkH.QUICKSWITCHER_SHOW)
        }
    ];
}

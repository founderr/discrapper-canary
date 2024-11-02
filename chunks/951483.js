n.d(t, {
    Sr: function () {
        return N;
    },
    Xq: function () {
        return E;
    },
    Zg: function () {
        return S;
    }
}),
    n(411104);
var i = n(186070),
    l = n(185514),
    r = n(360038),
    a = n(175724),
    o = n(705371),
    s = n(138976),
    c = n(167042),
    u = n(239748),
    d = n(337482),
    h = n(679080),
    p = n(510761),
    f = n(189509),
    m = n(673553),
    g = n(280492),
    C = n(746887),
    _ = n(721383),
    x = n(743810),
    v = n(981631),
    I = n(388032);
function b() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = N[e];
        if (null == t) throw Error('getBindsFor(...): No bind for '.concat(t));
        return t.binds[0];
    });
}
let N = {
        [v.EkH.SERVER_NEXT]: p.nq,
        [v.EkH.SERVER_PREV]: p.X3,
        [v.EkH.CHANNEL_NEXT]: l.tQ,
        [v.EkH.CHANNEL_PREV]: l.x5,
        [v.EkH.NAVIGATE_BACK]: l.Nx,
        [v.EkH.NAVIGATE_FORWARD]: l.On,
        [v.EkH.UNREAD_NEXT]: x.pd,
        [v.EkH.UNREAD_PREV]: x.wk,
        [v.EkH.MENTION_CHANNEL_NEXT]: x.Nv,
        [v.EkH.MENTION_CHANNEL_PREV]: x.uX,
        [v.EkH.TOGGLE_PREVIOUS_GUILD]: l.$c,
        [v.EkH.JUMP_TO_GUILD]: r.u,
        [v.EkH.SUBMIT]: f.z,
        [v.EkH.TEXTAREA_FOCUS]: m.U,
        [v.EkH.MARK_CHANNEL_READ]: a.f,
        [v.EkH.MARK_SERVER_READ]: o.l,
        [v.EkH.TOGGLE_MUTE]: g.iN,
        [v.EkH.TOGGLE_DEAFEN]: g.oV,
        [v.EkH.TOGGLE_CATEGORY_COLLAPSED]: C.u,
        [v.EkH.SCROLL_UP]: d.B2,
        [v.EkH.SCROLL_DOWN]: d.gN,
        [v.EkH.SEARCH_EMOJIS]: h.S,
        [v.EkH.TOGGLE_HOTKEYS]: _._,
        [v.EkH.JUMP_TO_FIRST_UNREAD]: s.O,
        [v.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
        [v.EkH.CALL_ACCEPT]: i.IL,
        [v.EkH.CALL_START]: i.FI,
        [v.EkH.QUICKSWITCHER_SHOW]: c.$
    },
    E = { [v.EkH.QUICKSWITCHER_SHOW]: c.$ };
function S() {
    return [
        {
            description: I.intl.string(I.t.bx4Uy8),
            binds: b(v.EkH.SERVER_PREV, v.EkH.SERVER_NEXT)
        },
        {
            description: I.intl.string(I.t['+Wem6u']),
            binds: b(v.EkH.CHANNEL_PREV, v.EkH.CHANNEL_NEXT)
        },
        {
            description: I.intl.string(I.t['+2fcd3']),
            binds: b(v.EkH.NAVIGATE_BACK, v.EkH.NAVIGATE_FORWARD)
        },
        {
            description: I.intl.string(I.t.eVmj1N),
            binds: b(v.EkH.UNREAD_PREV, v.EkH.UNREAD_NEXT)
        },
        {
            description: I.intl.string(I.t.EcqS7e),
            binds: b(v.EkH.MENTION_CHANNEL_PREV, v.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0
        },
        {
            description: I.intl.string(I.t['Bqss7+']),
            binds: b(v.EkH.TOGGLE_PREVIOUS_GUILD)
        },
        {
            description: I.intl.string(I.t.UaXAPz),
            binds: b(v.EkH.MARK_SERVER_READ)
        },
        {
            description: I.intl.string(I.t['5X9vFh']),
            binds: b(v.EkH.MARK_CHANNEL_READ)
        },
        {
            description: I.intl.string(I.t.JoxNnp),
            binds: b(v.EkH.SEARCH_EMOJIS),
            groupEnd: !0
        },
        {
            description: I.intl.string(I.t.tL6eVV),
            binds: b(v.EkH.TOGGLE_MUTE)
        },
        {
            description: I.intl.string(I.t['QXe/7e']),
            binds: b(v.EkH.TOGGLE_DEAFEN)
        },
        {
            description: I.intl.string(I.t.d6UIio),
            binds: b(v.EkH.CALL_ACCEPT)
        },
        {
            description: I.intl.string(I.t.IcEW09),
            binds: b(v.EkH.MARK_CHANNEL_READ)
        },
        {
            description: I.intl.string(I.t.WN2dsb),
            binds: b(v.EkH.CALL_START),
            groupEnd: !0
        },
        {
            description: I.intl.string(I.t.L3RYYG),
            binds: b(v.EkH.SCROLL_UP, v.EkH.SCROLL_DOWN)
        },
        {
            description: I.intl.string(I.t['3HAurK']),
            binds: b(v.EkH.JUMP_TO_FIRST_UNREAD)
        },
        {
            description: I.intl.string(I.t.rrYBEh),
            binds: b(v.EkH.TEXTAREA_FOCUS)
        },
        {
            description: I.intl.string(I.t.yYsRlJ),
            binds: b(v.EkH.QUICKSWITCHER_SHOW)
        }
    ];
}

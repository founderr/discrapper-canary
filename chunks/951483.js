n.d(t, {
    Sr: function () {
        return E;
    },
    Xq: function () {
        return S;
    },
    Zg: function () {
        return Z;
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
    m = n(189509),
    f = n(673553),
    g = n(280492),
    C = n(746887),
    _ = n(717747),
    v = n(743810),
    x = n(981631),
    I = n(388032);
function b() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = E[e];
        if (null == t) throw Error('getBindsFor(...): No bind for '.concat(t));
        return t.binds[0];
    });
}
let E = {
        [x.EkH.SERVER_NEXT]: p.nq,
        [x.EkH.SERVER_PREV]: p.X3,
        [x.EkH.CHANNEL_NEXT]: l.tQ,
        [x.EkH.CHANNEL_PREV]: l.x5,
        [x.EkH.NAVIGATE_BACK]: l.Nx,
        [x.EkH.NAVIGATE_FORWARD]: l.On,
        [x.EkH.UNREAD_NEXT]: v.pd,
        [x.EkH.UNREAD_PREV]: v.wk,
        [x.EkH.MENTION_CHANNEL_NEXT]: v.Nv,
        [x.EkH.MENTION_CHANNEL_PREV]: v.uX,
        [x.EkH.TOGGLE_PREVIOUS_GUILD]: l.$c,
        [x.EkH.JUMP_TO_GUILD]: r.u,
        [x.EkH.SUBMIT]: m.z,
        [x.EkH.TEXTAREA_FOCUS]: f.U,
        [x.EkH.MARK_CHANNEL_READ]: a.f,
        [x.EkH.MARK_SERVER_READ]: o.l,
        [x.EkH.TOGGLE_MUTE]: g.iN,
        [x.EkH.TOGGLE_DEAFEN]: g.oV,
        [x.EkH.TOGGLE_CATEGORY_COLLAPSED]: C.u,
        [x.EkH.SCROLL_UP]: d.B2,
        [x.EkH.SCROLL_DOWN]: d.gN,
        [x.EkH.SEARCH_EMOJIS]: h.S,
        [x.EkH.TOGGLE_HOTKEYS]: _._,
        [x.EkH.JUMP_TO_FIRST_UNREAD]: s.O,
        [x.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
        [x.EkH.CALL_ACCEPT]: i.IL,
        [x.EkH.CALL_START]: i.FI,
        [x.EkH.QUICKSWITCHER_SHOW]: c.$
    },
    S = { [x.EkH.QUICKSWITCHER_SHOW]: c.$ };
function Z() {
    return [
        {
            description: I.intl.string(I.t.bx4Uy8),
            binds: b(x.EkH.SERVER_PREV, x.EkH.SERVER_NEXT)
        },
        {
            description: I.intl.string(I.t['+Wem6u']),
            binds: b(x.EkH.CHANNEL_PREV, x.EkH.CHANNEL_NEXT)
        },
        {
            description: I.intl.string(I.t['+2fcd3']),
            binds: b(x.EkH.NAVIGATE_BACK, x.EkH.NAVIGATE_FORWARD)
        },
        {
            description: I.intl.string(I.t.eVmj1N),
            binds: b(x.EkH.UNREAD_PREV, x.EkH.UNREAD_NEXT)
        },
        {
            description: I.intl.string(I.t.EcqS7e),
            binds: b(x.EkH.MENTION_CHANNEL_PREV, x.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0
        },
        {
            description: I.intl.string(I.t['Bqss7+']),
            binds: b(x.EkH.TOGGLE_PREVIOUS_GUILD)
        },
        {
            description: I.intl.string(I.t.UaXAPz),
            binds: b(x.EkH.MARK_SERVER_READ)
        },
        {
            description: I.intl.string(I.t['5X9vFh']),
            binds: b(x.EkH.MARK_CHANNEL_READ)
        },
        {
            description: I.intl.string(I.t.JoxNnp),
            binds: b(x.EkH.SEARCH_EMOJIS),
            groupEnd: !0
        },
        {
            description: I.intl.string(I.t.tL6eVV),
            binds: b(x.EkH.TOGGLE_MUTE)
        },
        {
            description: I.intl.string(I.t['QXe/7e']),
            binds: b(x.EkH.TOGGLE_DEAFEN)
        },
        {
            description: I.intl.string(I.t.d6UIio),
            binds: b(x.EkH.CALL_ACCEPT)
        },
        {
            description: I.intl.string(I.t.IcEW09),
            binds: b(x.EkH.MARK_CHANNEL_READ)
        },
        {
            description: I.intl.string(I.t.WN2dsb),
            binds: b(x.EkH.CALL_START),
            groupEnd: !0
        },
        {
            description: I.intl.string(I.t.L3RYYG),
            binds: b(x.EkH.SCROLL_UP, x.EkH.SCROLL_DOWN)
        },
        {
            description: I.intl.string(I.t['3HAurK']),
            binds: b(x.EkH.JUMP_TO_FIRST_UNREAD)
        },
        {
            description: I.intl.string(I.t.rrYBEh),
            binds: b(x.EkH.TEXTAREA_FOCUS)
        },
        {
            description: I.intl.string(I.t.yYsRlJ),
            binds: b(x.EkH.QUICKSWITCHER_SHOW)
        }
    ];
}

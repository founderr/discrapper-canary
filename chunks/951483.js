e.d(n, {
    Sr: function () {
        return x;
    },
    Xq: function () {
        return A;
    },
    Zg: function () {
        return m;
    }
}),
    e(411104);
var i = e(186070),
    s = e(185514),
    r = e(360038),
    o = e(175724),
    l = e(705371),
    a = e(138976),
    c = e(167042),
    u = e(239748),
    E = e(337482),
    d = e(679080),
    N = e(510761),
    C = e(189509),
    T = e(673553),
    g = e(280492),
    h = e(746887),
    I = e(721383),
    _ = e(743810),
    R = e(981631),
    p = e(388032);
function O() {
    for (var t = arguments.length, n = Array(t), e = 0; e < t; e++) n[e] = arguments[e];
    return n.map((t) => {
        let n = x[t];
        if (null == n) throw Error('getBindsFor(...): No bind for '.concat(n));
        return n.binds[0];
    });
}
let x = {
        [R.EkH.SERVER_NEXT]: N.nq,
        [R.EkH.SERVER_PREV]: N.X3,
        [R.EkH.CHANNEL_NEXT]: s.tQ,
        [R.EkH.CHANNEL_PREV]: s.x5,
        [R.EkH.NAVIGATE_BACK]: s.Nx,
        [R.EkH.NAVIGATE_FORWARD]: s.On,
        [R.EkH.UNREAD_NEXT]: _.pd,
        [R.EkH.UNREAD_PREV]: _.wk,
        [R.EkH.MENTION_CHANNEL_NEXT]: _.Nv,
        [R.EkH.MENTION_CHANNEL_PREV]: _.uX,
        [R.EkH.TOGGLE_PREVIOUS_GUILD]: s.$c,
        [R.EkH.JUMP_TO_GUILD]: r.u,
        [R.EkH.SUBMIT]: C.z,
        [R.EkH.TEXTAREA_FOCUS]: T.U,
        [R.EkH.MARK_CHANNEL_READ]: o.f,
        [R.EkH.MARK_SERVER_READ]: l.l,
        [R.EkH.TOGGLE_MUTE]: g.iN,
        [R.EkH.TOGGLE_DEAFEN]: g.oV,
        [R.EkH.TOGGLE_CATEGORY_COLLAPSED]: h.u,
        [R.EkH.SCROLL_UP]: E.B2,
        [R.EkH.SCROLL_DOWN]: E.gN,
        [R.EkH.SEARCH_EMOJIS]: d.S,
        [R.EkH.TOGGLE_HOTKEYS]: I._,
        [R.EkH.JUMP_TO_FIRST_UNREAD]: a.O,
        [R.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
        [R.EkH.CALL_ACCEPT]: i.IL,
        [R.EkH.CALL_START]: i.FI,
        [R.EkH.QUICKSWITCHER_SHOW]: c.$
    },
    A = { [R.EkH.QUICKSWITCHER_SHOW]: c.$ };
function m() {
    return [
        {
            description: p.intl.string(p.t.bx4Uy8),
            binds: O(R.EkH.SERVER_PREV, R.EkH.SERVER_NEXT)
        },
        {
            description: p.intl.string(p.t['+Wem6u']),
            binds: O(R.EkH.CHANNEL_PREV, R.EkH.CHANNEL_NEXT)
        },
        {
            description: p.intl.string(p.t['+2fcd3']),
            binds: O(R.EkH.NAVIGATE_BACK, R.EkH.NAVIGATE_FORWARD)
        },
        {
            description: p.intl.string(p.t.eVmj1N),
            binds: O(R.EkH.UNREAD_PREV, R.EkH.UNREAD_NEXT)
        },
        {
            description: p.intl.string(p.t.EcqS7e),
            binds: O(R.EkH.MENTION_CHANNEL_PREV, R.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0
        },
        {
            description: p.intl.string(p.t['Bqss7+']),
            binds: O(R.EkH.TOGGLE_PREVIOUS_GUILD)
        },
        {
            description: p.intl.string(p.t.UaXAPz),
            binds: O(R.EkH.MARK_SERVER_READ)
        },
        {
            description: p.intl.string(p.t['5X9vFh']),
            binds: O(R.EkH.MARK_CHANNEL_READ)
        },
        {
            description: p.intl.string(p.t.JoxNnp),
            binds: O(R.EkH.SEARCH_EMOJIS),
            groupEnd: !0
        },
        {
            description: p.intl.string(p.t.tL6eVV),
            binds: O(R.EkH.TOGGLE_MUTE)
        },
        {
            description: p.intl.string(p.t['QXe/7e']),
            binds: O(R.EkH.TOGGLE_DEAFEN)
        },
        {
            description: p.intl.string(p.t.d6UIio),
            binds: O(R.EkH.CALL_ACCEPT)
        },
        {
            description: p.intl.string(p.t.IcEW09),
            binds: O(R.EkH.MARK_CHANNEL_READ)
        },
        {
            description: p.intl.string(p.t.WN2dsb),
            binds: O(R.EkH.CALL_START),
            groupEnd: !0
        },
        {
            description: p.intl.string(p.t.L3RYYG),
            binds: O(R.EkH.SCROLL_UP, R.EkH.SCROLL_DOWN)
        },
        {
            description: p.intl.string(p.t['3HAurK']),
            binds: O(R.EkH.JUMP_TO_FIRST_UNREAD)
        },
        {
            description: p.intl.string(p.t.rrYBEh),
            binds: O(R.EkH.TEXTAREA_FOCUS)
        },
        {
            description: p.intl.string(p.t.yYsRlJ),
            binds: O(R.EkH.QUICKSWITCHER_SHOW)
        }
    ];
}

n.d(e, {
    AG: function () {
        return Y;
    },
    MY: function () {
        return o;
    },
    Mu: function () {
        return u;
    },
    Of: function () {
        return U;
    },
    QH: function () {
        return a;
    },
    TX: function () {
        return V;
    },
    Wz: function () {
        return P;
    },
    YC: function () {
        return _;
    },
    _6: function () {
        return s;
    },
    _w: function () {
        return m;
    },
    dG: function () {
        return E;
    },
    f2: function () {
        return G;
    },
    i0: function () {
        return h;
    },
    iB: function () {
        return O;
    },
    ip: function () {
        return F;
    },
    ix: function () {
        return w;
    },
    ne: function () {
        return l;
    },
    tx: function () {
        return b;
    },
    vH: function () {
        return H;
    },
    zE: function () {
        return v;
    }
}),
    n(47120);
var i,
    r,
    l,
    o,
    E,
    a,
    u,
    s,
    _,
    d,
    c,
    T,
    S,
    I,
    C,
    N,
    A,
    f,
    L,
    R,
    g,
    D,
    M = n(860911),
    p = n(70956),
    y = n(388032);
let U = 30 * p.Z.Millis.SECOND,
    Y = 8,
    h = 3,
    v = 26,
    F = 64,
    m = (t, e) => 'https://discord.com/feature/family-center/my-family/'.concat(t, '/').concat(e),
    O = 4,
    G = 5 * p.Z.Millis.MINUTE,
    H = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    w = (0, M.Ft)(
        Object.freeze({
            FAMILY_CENTER_SETTINGS: '/family-center/settings',
            FAMILY_CENTER_MY_FAMILY: '/family-center/my-family'
        }),
        [':', '?', '@']
    );
((T = i || (i = {}))[(T.DM_MESSAGE_SEND = 1)] = 'DM_MESSAGE_SEND'), (T[(T.GDM_MESSAGE_SEND = 2)] = 'GDM_MESSAGE_SEND'), (T[(T.MESSAGE_REACT = 3)] = 'MESSAGE_REACT'), (T[(T.ADD_FRIEND = 4)] = 'ADD_FRIEND'), (T[(T.SEND_CALL = 5)] = 'SEND_CALL'), (T[(T.CALL_JOIN = 6)] = 'CALL_JOIN'), (T[(T.GUILD_JOIN = 7)] = 'GUILD_JOIN'), (T[(T.GUILD_MESSAGE_SEND = 8)] = 'GUILD_MESSAGE_SEND'), (T[(T.GUILD_VC_JOIN = 9)] = 'GUILD_VC_JOIN'), ((S = r || (r = {}))[(S.PARENT = 1)] = 'PARENT'), (S[(S.CHILD = 2)] = 'CHILD'), ((I = l || (l = {}))[(I.PENDING = 1)] = 'PENDING'), (I[(I.ACTIVE = 2)] = 'ACTIVE'), (I[(I.INACTIVE = 3)] = 'INACTIVE'), (I[(I.DECLINED = 4)] = 'DECLINED'), (I[(I.EXPIRED = 5)] = 'EXPIRED'), ((C = o || (o = {}))[(C.USER_ADD = 1)] = 'USER_ADD'), (C[(C.GUILD_ADD = 2)] = 'GUILD_ADD'), (C[(C.USER_INTERACTION = 3)] = 'USER_INTERACTION'), (C[(C.GUILD_INTERACTION = 4)] = 'GUILD_INTERACTION'), (C[(C.USER_CALLED = 5)] = 'USER_CALLED'), ((N = E || (E = {})).ACTIVITY = 'ACTIVITY'), (N.REQUESTS = 'REQUESTS'), (N.SETTINGS = 'SETTINGS'), ((A = a || (a = {}))[(A.ACTIVITY = 0)] = 'ACTIVITY'), (A[(A.REQUESTS = 1)] = 'REQUESTS'), (A[(A.SETTINGS = 2)] = 'SETTINGS'), ((f = u || (u = {})).SIDENAV = 'SIDENAV'), (f.SETTINGS = 'SETTINGS'), ((L = s || (s = {}))[(L.SIDENAV = 0)] = 'SIDENAV'), (L[(L.SETTINGS = 1)] = 'SETTINGS'), ((R = _ || (_ = {}))[(R.TabChange = 0)] = 'TabChange'), (R[(R.ShowQRCodeModal = 1)] = 'ShowQRCodeModal'), (R[(R.RevealQRCode = 2)] = 'RevealQRCode'), (R[(R.ScanQRCodeButton = 3)] = 'ScanQRCodeButton'), (R[(R.ScanQRCode = 4)] = 'ScanQRCode'), (R[(R.LoadMore = 5)] = 'LoadMore'), (R[(R.SelectTeen = 6)] = 'SelectTeen'), (R[(R.HideQRCode = 7)] = 'HideQRCode');
let b = new Map([
    [
        3,
        {
            tooltipHeader: () => y.intl.string(y.t.kvTgWF),
            tooltipDescription: (t) => (t ? y.intl.string(y.t.cY19ub) : y.intl.string(y.t['K5r+sL'])),
            sectionHeader: (t) => y.intl.formatToPlainString(y.t['4T3zWV'], { count: t }),
            sectionDescription: (t) => (t ? y.intl.string(y.t.cY19ub) : y.intl.string(y.t['K5r+sL'])),
            timestampFormatter: () => ({
                today: y.intl.string(y.t.fLBUx8),
                yesterday: y.intl.string(y.t.cHHgxM),
                days: y.t.qvKjp6
            })
        }
    ],
    [
        5,
        {
            tooltipHeader: () => y.intl.string(y.t.D7Sng4),
            tooltipDescription: (t) => (t ? y.intl.string(y.t['w7j/Li']) : y.intl.string(y.t.SCIaWF)),
            sectionHeader: (t) => y.intl.formatToPlainString(y.t['0GE4Nj'], { count: t }),
            sectionDescription: (t) => (t ? y.intl.string(y.t['w7j/Li']) : y.intl.string(y.t.SCIaWF)),
            timestampFormatter: () => ({
                today: y.intl.string(y.t.IHd5cX),
                yesterday: y.intl.string(y.t.wOsfxs),
                days: y.t.oCk8c3
            })
        }
    ],
    [
        1,
        {
            tooltipHeader: () => y.intl.string(y.t.kIcKAg),
            tooltipDescription: (t) => (t ? y.intl.string(y.t.HvsFJS) : y.intl.string(y.t['1/QpPz'])),
            sectionHeader: (t) => y.intl.formatToPlainString(y.t['TEvo+P'], { count: t }),
            sectionDescription: (t) => (t ? y.intl.string(y.t.HvsFJS) : y.intl.string(y.t['1/QpPz'])),
            timestampFormatter: () => ({
                today: y.intl.string(y.t.JUHIYW),
                yesterday: y.intl.string(y.t.GiswUV),
                days: y.t.fwQgEx
            })
        }
    ],
    [
        2,
        {
            tooltipHeader: () => y.intl.string(y.t['NulX9/']),
            tooltipDescription: (t) => (t ? y.intl.string(y.t.Lmz9Vl) : y.intl.string(y.t.MTFxYW)),
            sectionHeader: (t) => y.intl.formatToPlainString(y.t['7feG7e'], { count: t }),
            sectionDescription: (t) => (t ? y.intl.string(y.t.Lmz9Vl) : y.intl.string(y.t.MTFxYW))
        }
    ],
    [
        4,
        {
            tooltipHeader: () => y.intl.string(y.t.CcrbCw),
            tooltipDescription: k,
            sectionHeader: (t) => y.intl.formatToPlainString(y.t.rcPInZ, { count: t }),
            sectionDescription: k
        }
    ]
]);
function k(t, e) {
    return t ? (e ? y.intl.string(y.t.c0NgBQ) : y.intl.string(y.t.dcvNX1)) : e ? y.intl.string(y.t.DLVyFx) : y.intl.string(y.t['823ugY']);
}
((g = d || (d = {}))[(g.CHECK = 0)] = 'CHECK'), (g[(g.X = 1)] = 'X'), ((D = c || (c = {}))[(D.GENERIC_ERROR = 0)] = 'GENERIC_ERROR'), (D[(D.INELIGIBLE_FOR_FAMILY_CENTER = 1)] = 'INELIGIBLE_FOR_FAMILY_CENTER'), (D[(D.PENDING_REQUEST_EXISTS = 2)] = 'PENDING_REQUEST_EXISTS'), (D[(D.MAX_CONNECTIONS_REACHED = 3)] = 'MAX_CONNECTIONS_REACHED');
let V = () => ({
        seconds: y.intl.string(y.t.CJdoeX),
        minutes: y.t.InzMn5,
        hours: y.t.ErkYCA,
        yesterday: y.intl.string(y.t.GvfssL),
        days: y.t.pWig19,
        date: y.t.MP3kho
    }),
    P = () => ({
        seconds: y.intl.string(y.t.BqsamZ),
        minutes: y.t.kX3wJi,
        hours: y.t.J18GbG,
        yesterday: y.intl.string(y.t.Ln9zMj),
        days: y.t.WRtyS0,
        date: y.t.Y3ZYtL
    });

n.d(t, {
    U: function () {
        return s;
    },
    k: function () {
        return es;
    }
}), n(47120);
var s, r, o = n(735250);
n(470079);
var i = n(120356), c = n.n(i), a = n(442837), l = n(246946), u = n(91802), d = n(222727), p = n(981631), f = n(782082), g = n(500052), x = n(375832), b = n(992171), v = n(937064), _ = n(434336), S = n(128955), h = n(803353), I = n(479388), E = n(179581), A = n(13174), T = n(580248), C = n(966294), L = n(302143), m = n(146121), U = n(705500), B = n(402127), M = n(153652), N = n(485487), j = n(200985), O = n(270930), P = n(46514), R = n(750876), w = n(993855), D = n(701497), Z = n(937717), F = n(165194), G = n(208802), y = n(145905), k = n(335302), H = n(956172), Y = n(695579), V = n(541764), W = n(191706), X = n(67528), z = n(332150), K = n(581902), J = n(167219), Q = n(704381), $ = n(591417), q = n(929883), ee = n(261137), et = n(958700);
(r = s || (s = {}))[r.PrivateMessages = 0] = 'PrivateMessages', r[r.SettingsMenu = 1] = 'SettingsMenu';
let en = new Map([
    [
        'PE',
        W
    ],
    [
        'PH',
        X
    ],
    [
        'CL',
        S
    ],
    [
        'CO',
        h
    ],
    [
        'AR',
        g
    ],
    [
        'JP',
        R
    ],
    [
        'VN',
        et
    ],
    [
        'TH',
        ee
    ],
    [
        'ID',
        N
    ],
    [
        'MY',
        H
    ],
    [
        'MX',
        k
    ],
    [
        'KR',
        w
    ],
    [
        'BG',
        v
    ],
    [
        'CZ',
        E
    ],
    [
        'HU',
        M
    ],
    [
        'RO',
        J
    ],
    [
        'SE',
        Q
    ],
    [
        'CY',
        I
    ],
    [
        'EE',
        T
    ],
    [
        'IS',
        O
    ],
    [
        'IE',
        j
    ],
    [
        'LV',
        G
    ],
    [
        'LI',
        D
    ],
    [
        'LT',
        Z
    ],
    [
        'LU',
        F
    ],
    [
        'MT',
        y
    ],
    [
        'SK',
        q
    ],
    [
        'SI',
        $
    ],
    [
        'GR',
        U
    ],
    [
        'FI',
        L
    ],
    [
        'PT',
        K
    ],
    [
        'NO',
        V
    ],
    [
        'BE',
        b
    ],
    [
        'AT',
        x
    ],
    [
        'CH',
        _
    ],
    [
        'FR',
        m
    ],
    [
        'DE',
        A
    ],
    [
        'ES',
        C
    ],
    [
        'IT',
        P
    ],
    [
        'NL',
        Y
    ],
    [
        'PL',
        z
    ],
    [
        'HR',
        B
    ]
]);
function es(e) {
    let {
            entryPoint: t,
            className: n
        } = e, r = (0, a.e7)([l.Z], () => l.Z.hidePersonalInformation), i = (0, u.n)(), g = null == i ? void 0 : i.countryCode;
    if ((0, d.U)(p.jXE.SETTINGS_PREMIUM, g), null == g || !en.has(g) || r)
        return null;
    let x = en.get(g), b = 'badgeIcon' + s[t];
    return (0, o.jsx)('img', {
        className: c()(n, f[b]),
        'aria-hidden': !0,
        alt: 'Wumpus holding a country-specific flag',
        src: x
    });
}

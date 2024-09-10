a.d(t, {
    GX: function () {
        return w;
    },
    M7: function () {
        return T;
    },
    UY: function () {
        return b;
    },
    k2: function () {
        return n;
    },
    v: function () {
        return g;
    }
}),
    a(627341),
    a(470079);
var n,
    o,
    i = a(278074),
    r = a(691324),
    s = a(180650),
    c = a(44315),
    f = a(410154),
    l = a(689938),
    d = a(22344),
    E = a(107209),
    _ = a(876122),
    u = a(270905),
    p = a(428251);
((o = n || (n = {}))[(o.NONE = 0)] = 'NONE'), (o[(o.TOOLTIP = 1)] = 'TOOLTIP'), (o[(o.COACHTIP = 2)] = 'COACHTIP'), (o[(o.COACHTIP_HEADLINE_ONLY = 3)] = 'COACHTIP_HEADLINE_ONLY'), (o[(o.BADGE = 4)] = 'BADGE');
let T = (e) =>
        (0, i.EQ)(e)
            .with(s.T.TIDE, () => ({
                label: () => l.Z.Messages.COLLECTIBLES_SHY_FOR_A_LIMITED_TIME,
                iconSrc: p,
                style: {
                    background: 'linear-gradient(180deg, #103A8B -7.5%, #3390FD 128.75%)',
                    boxShadow: '0px 0px 15.4px 0px rgba(23, 160, 236, 0.5)',
                    color: (0, c.Lq)(r.I.WHITE_100)
                }
            }))
            .otherwise(() => null),
    I = {
        imageSrc: _,
        style: {
            position: 'absolute',
            width: '600px',
            zIndex: 10
        }
    },
    C = {
        imageSrc: E,
        style: {
            position: 'absolute',
            width: '400px',
            right: '-200px',
            zIndex: 10
        }
    },
    S = {
        imageSrc: d,
        style: {
            position: 'absolute',
            width: '600px'
        }
    },
    h = {
        imageSrc: u,
        style: {
            position: 'absolute',
            width: '850px'
        }
    },
    b = (e) =>
        (0, i.EQ)(e)
            .with('1252405010608951358', () => I)
            .with('1252405017688936508', () => I)
            .with('1267521289330102344', () => h)
            .with('1267521289355268154', () => h)
            .with('1266160780928352268', () => h)
            .with('1266160780978556969', () => h)
            .with('1266161342801383434', () => h)
            .with('1220513995308400680', () => h)
            .with('1220513984273186816', () => h)
            .with('1220513989729976411', () => h)
            .with('1220514048068812901', () => h)
            .with('1266493591207940133', () => h)
            .with('1266493591275044903', () => h)
            .with('1220432740638523543', () => h)
            .with('1220513977683935373', () => S)
            .with('1220432647453409384', () => S)
            .with('1220432697718083614', () => S)
            .otherwise(() => null),
    g = (e) =>
        (0, i.EQ)(e)
            .with('1262491137386614805', () => C)
            .otherwise(() => null),
    w = {
        [f.C5.TIDE]: {
            artSrc: a(94899),
            backgroundSrc: a(987583),
            title: () => l.Z.Messages.COLLECTIBLES_TIDE_SETTINGS_BANNER_TITLE,
            description: () => l.Z.Messages.COLLECTIBLES_TIDE_SETTINGS_BANNER_DESCRIPTION
        },
        [f.C5.ROBERT]: {
            artSrc: a(638431),
            backgroundSrc: a(619359),
            title: () => l.Z.Messages.COLLECTIBLES_ROBERT_SETTINGS_BANNER_TITLE,
            description: () => l.Z.Messages.COLLECTIBLES_ROBERT_SETTINGS_BANNER_DESCRIPTION
        }
    };

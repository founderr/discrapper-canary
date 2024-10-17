n.d(t, {
    GX: function () {
        return m;
    },
    M7: function () {
        return T;
    },
    UY: function () {
        return h;
    },
    k2: function () {
        return a;
    },
    v: function () {
        return b;
    }
}),
    n(627341),
    n(470079);
var a,
    r,
    s = n(278074),
    o = n(691324),
    i = n(180650),
    l = n(44315),
    c = n(410154),
    d = n(689938),
    u = n(452823),
    f = n(744709),
    g = n(39934),
    p = n(681532),
    E = n(12981);
((r = a || (a = {}))[(r.NONE = 0)] = 'NONE'), (r[(r.TOOLTIP = 1)] = 'TOOLTIP'), (r[(r.COACHTIP = 2)] = 'COACHTIP'), (r[(r.COACHTIP_HEADLINE_ONLY = 3)] = 'COACHTIP_HEADLINE_ONLY'), (r[(r.BADGE = 4)] = 'BADGE');
let T = (e) =>
        (0, s.EQ)(e)
            .with(i.T.TIDE, () => ({
                label: () => d.Z.Messages.COLLECTIBLES_SHY_FOR_A_LIMITED_TIME,
                iconSrc: E.Z,
                style: {
                    background: 'linear-gradient(180deg, #103A8B -7.5%, #3390FD 128.75%)',
                    boxShadow: '0px 0px 15.4px 0px rgba(23, 160, 236, 0.5)',
                    color: (0, l.Lq)(o.I.WHITE_100)
                }
            }))
            .otherwise(() => null),
    C = {
        TIDE: {
            imageSrc: p.Z,
            style: {
                position: 'absolute',
                width: '600px',
                zIndex: 10
            }
        },
        ROBERT: {
            imageSrc: u.Z,
            style: {
                position: 'absolute',
                width: '400px',
                right: '-200px',
                zIndex: 10
            }
        },
        SHY: {
            imageSrc: f.Z,
            style: {
                position: 'absolute',
                width: '600px'
            }
        },
        STORM: {
            imageSrc: g.Z,
            style: {
                position: 'absolute',
                width: '850px'
            }
        }
    },
    h = (e) =>
        (0, s.EQ)(e)
            .with('1252405010608951358', () => C.TIDE)
            .with('1252405017688936508', () => C.TIDE)
            .with('1267521289330102344', () => C.STORM)
            .with('1267521289355268154', () => C.STORM)
            .with('1266160780928352268', () => C.STORM)
            .with('1266160780978556969', () => C.STORM)
            .with('1266161342801383434', () => C.STORM)
            .with('1220513995308400680', () => C.STORM)
            .with('1220513984273186816', () => C.STORM)
            .with('1220513989729976411', () => C.STORM)
            .with('1220514048068812901', () => C.STORM)
            .with('1266493591207940133', () => C.STORM)
            .with('1266493591275044903', () => C.STORM)
            .with('1220432740638523543', () => C.STORM)
            .with('1220513977683935373', () => C.SHY)
            .with('1220432647453409384', () => C.SHY)
            .with('1220432697718083614', () => C.SHY)
            .otherwise(() => null),
    b = (e) =>
        (0, s.EQ)(e)
            .with('1262491137386614805', () => C.ROBERT)
            .otherwise(() => null),
    m = {
        [c.C5.TIDE]: {
            artSrc: n(94899),
            backgroundSrc: n(987583),
            title: () => d.Z.Messages.COLLECTIBLES_TIDE_SETTINGS_BANNER_TITLE,
            description: () => d.Z.Messages.COLLECTIBLES_TIDE_SETTINGS_BANNER_DESCRIPTION
        },
        [c.C5.ROBERT]: {
            artSrc: n(638431),
            backgroundSrc: n(619359),
            title: () => d.Z.Messages.COLLECTIBLES_ROBERT_SETTINGS_BANNER_TITLE,
            description: () => d.Z.Messages.COLLECTIBLES_ROBERT_SETTINGS_BANNER_DESCRIPTION
        },
        [c.C5.EQUINOX_FALL]: {
            artSrc: n(148718),
            backgroundSrc: n(866074)
        }
    };

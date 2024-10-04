n.d(t, {
    GX: function () {
        return C;
    },
    M7: function () {
        return R;
    },
    UY: function () {
        return N;
    },
    k2: function () {
        return s;
    },
    v: function () {
        return m;
    }
}),
    n(627341),
    n(470079);
var s,
    a,
    r = n(278074),
    i = n(691324),
    l = n(180650),
    o = n(44315),
    c = n(410154),
    d = n(689938),
    _ = n(452823),
    E = n(744709),
    u = n(39934),
    T = n(681532),
    I = n(12981);
((a = s || (s = {}))[(a.NONE = 0)] = 'NONE'), (a[(a.TOOLTIP = 1)] = 'TOOLTIP'), (a[(a.COACHTIP = 2)] = 'COACHTIP'), (a[(a.COACHTIP_HEADLINE_ONLY = 3)] = 'COACHTIP_HEADLINE_ONLY'), (a[(a.BADGE = 4)] = 'BADGE');
let R = (e) =>
        (0, r.EQ)(e)
            .with(l.T.TIDE, () => ({
                label: () => d.Z.Messages.COLLECTIBLES_SHY_FOR_A_LIMITED_TIME,
                iconSrc: I.Z,
                style: {
                    background: 'linear-gradient(180deg, #103A8B -7.5%, #3390FD 128.75%)',
                    boxShadow: '0px 0px 15.4px 0px rgba(23, 160, 236, 0.5)',
                    color: (0, o.Lq)(i.I.WHITE_100)
                }
            }))
            .otherwise(() => null),
    g = {
        TIDE: {
            imageSrc: T.Z,
            style: {
                position: 'absolute',
                width: '600px',
                zIndex: 10
            }
        },
        ROBERT: {
            imageSrc: _.Z,
            style: {
                position: 'absolute',
                width: '400px',
                right: '-200px',
                zIndex: 10
            }
        },
        SHY: {
            imageSrc: E.Z,
            style: {
                position: 'absolute',
                width: '600px'
            }
        },
        STORM: {
            imageSrc: u.Z,
            style: {
                position: 'absolute',
                width: '850px'
            }
        }
    },
    N = (e) =>
        (0, r.EQ)(e)
            .with('1252405010608951358', () => g.TIDE)
            .with('1252405017688936508', () => g.TIDE)
            .with('1267521289330102344', () => g.STORM)
            .with('1267521289355268154', () => g.STORM)
            .with('1266160780928352268', () => g.STORM)
            .with('1266160780978556969', () => g.STORM)
            .with('1266161342801383434', () => g.STORM)
            .with('1220513995308400680', () => g.STORM)
            .with('1220513984273186816', () => g.STORM)
            .with('1220513989729976411', () => g.STORM)
            .with('1220514048068812901', () => g.STORM)
            .with('1266493591207940133', () => g.STORM)
            .with('1266493591275044903', () => g.STORM)
            .with('1220432740638523543', () => g.STORM)
            .with('1220513977683935373', () => g.SHY)
            .with('1220432647453409384', () => g.SHY)
            .with('1220432697718083614', () => g.SHY)
            .otherwise(() => null),
    m = (e) =>
        (0, r.EQ)(e)
            .with('1262491137386614805', () => g.ROBERT)
            .otherwise(() => null),
    C = {
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

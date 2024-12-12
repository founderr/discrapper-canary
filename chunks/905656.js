var i = r(733860);
var a = r(200651),
    s = r(192379),
    o = r(780384),
    l = r(481060),
    u = r(197344),
    c = r(526167),
    d = r(70097),
    f = r(981631),
    _ = r(73117),
    h = r(988868),
    p = r(554355),
    m = r(991989),
    g = r(787462),
    E = r(635507),
    v = r(470794),
    I = r(886777);
function T(e) {
    let { movDark: n = _, movLight: r = g, mp4Dark: i = h, mp4Light: s = E, pngDark: o = p, pngLight: l = v, webmDark: u = m, webmLight: d = I } = e,
        T = (0, c.vu)(),
        b = [
            (0, a.jsx)(
                'source',
                {
                    src: i,
                    type: 'video/mp4'
                },
                'mp4'
            ),
            (0, a.jsx)(
                'img',
                {
                    alt: '',
                    src: o
                },
                'png'
            )
        ],
        y = [
            (0, a.jsx)(
                'source',
                {
                    src: s,
                    type: 'video/mp4'
                },
                'mp4'
            ),
            (0, a.jsx)(
                'img',
                {
                    alt: '',
                    src: l
                },
                'png'
            )
        ];
    return (
        (T > 52 || -1 === T) &&
            (b.unshift(
                (0, a.jsx)(
                    'source',
                    {
                        src: u,
                        type: 'video/webm'
                    },
                    'webm'
                )
            ),
            y.unshift(
                (0, a.jsx)(
                    'source',
                    {
                        src: d,
                        type: 'video/webm'
                    },
                    'webm'
                )
            )),
        (0, c.rO)() &&
            (b.unshift(
                (0, a.jsx)(
                    'source',
                    {
                        src: n,
                        type: 'video/mp4'
                    },
                    'hevc'
                )
            ),
            y.unshift(
                (0, a.jsx)(
                    'source',
                    {
                        src: r,
                        type: 'video/mp4'
                    },
                    'hevc'
                )
            )),
        {
            [f.BRd.DARK]: b,
            [f.BRd.LIGHT]: y
        }
    );
}
let b = u.Z.getAppSpinnerSources(),
    y = null != b ? T(b) : null,
    S = T({}),
    A = (e) => {
        var n;
        let { loop: r = !0, autoPlay: i = !0, setRef: u, className: c, onReady: _ } = e,
            { theme: h } = (0, l.useThemeContext)(),
            { reducedMotion: p } = s.useContext(l.AccessibilityPreferencesContext),
            m = S;
        null != y && (m = y);
        let g = null !== (n = m[(0, o.wj)(h) ? f.BRd.DARK : f.BRd.LIGHT]) && void 0 !== n ? n : m[f.BRd.DARK];
        return (0, a.jsx)(
            d.Z,
            {
                ref: u,
                onLoadedData: _,
                className: c,
                loop: !p.enabled && r,
                autoPlay: !p.enabled && i,
                playsInline: !0,
                'data-testid': 'app-spinner',
                children: g
            },
            h
        );
    };
n.Z = A;

t(733860);
var a = t(735250),
    i = t(470079),
    r = t(780384),
    s = t(481060),
    o = t(197344),
    l = t(526167),
    c = t(73117),
    d = t(787462),
    u = t(70097),
    p = t(981631),
    m = t(988868),
    x = t(554355),
    b = t(991989),
    _ = t(635507),
    h = t(470794),
    f = t(886777);
function g(e) {
    let { movDark: n = c, movLight: t = d, mp4Dark: i = m, mp4Light: r = _, pngDark: s = x, pngLight: o = h, webmDark: u = b, webmLight: g = f } = e,
        v = (0, l.vu)(),
        j = [
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
                    src: s
                },
                'png'
            )
        ],
        N = [
            (0, a.jsx)(
                'source',
                {
                    src: r,
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
        ];
    return (
        (v > 52 || -1 === v) &&
            (j.unshift(
                (0, a.jsx)(
                    'source',
                    {
                        src: u,
                        type: 'video/webm'
                    },
                    'webm'
                )
            ),
            N.unshift(
                (0, a.jsx)(
                    'source',
                    {
                        src: g,
                        type: 'video/webm'
                    },
                    'webm'
                )
            )),
        (0, l.rO)() &&
            (j.unshift(
                (0, a.jsx)(
                    'source',
                    {
                        src: n,
                        type: 'video/mp4'
                    },
                    'hevc'
                )
            ),
            N.unshift(
                (0, a.jsx)(
                    'source',
                    {
                        src: t,
                        type: 'video/mp4'
                    },
                    'hevc'
                )
            )),
        {
            [p.BRd.DARK]: j,
            [p.BRd.LIGHT]: N
        }
    );
}
let v = o.Z.getAppSpinnerSources(),
    j = null != v ? g(v) : null,
    N = g({});
n.Z = (e) => {
    var n;
    let { loop: t = !0, autoPlay: o = !0, setRef: l, className: c, onReady: d } = e,
        { theme: m } = (0, s.useThemeContext)(),
        { reducedMotion: x } = i.useContext(s.AccessibilityPreferencesContext),
        b = N;
    null != j && (b = j);
    let _ = null !== (n = b[(0, r.wj)(m) ? p.BRd.DARK : p.BRd.LIGHT]) && void 0 !== n ? n : b[p.BRd.DARK];
    return (0, a.jsx)(
        u.Z,
        {
            ref: l,
            onLoadedData: d,
            className: c,
            loop: !x.enabled && t,
            autoPlay: !x.enabled && o,
            playsInline: !0,
            'data-testid': 'app-spinner',
            children: _
        },
        m
    );
};

t(733860);
var a = t(735250),
    i = t(470079),
    r = t(780384),
    s = t(481060),
    o = t(197344),
    l = t(526167),
    c = t(70097),
    d = t(981631),
    u = t(73117),
    p = t(988868),
    m = t(554355),
    x = t(991989),
    b = t(787462),
    _ = t(635507),
    h = t(470794),
    f = t(886777);
function g(e) {
    let { movDark: n = u, movLight: t = b, mp4Dark: i = p, mp4Light: r = _, pngDark: s = m, pngLight: o = h, webmDark: c = x, webmLight: g = f } = e,
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
                        src: c,
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
            [d.BRd.DARK]: j,
            [d.BRd.LIGHT]: N
        }
    );
}
let v = o.Z.getAppSpinnerSources(),
    j = null != v ? g(v) : null,
    N = g({});
n.Z = (e) => {
    var n;
    let { loop: t = !0, autoPlay: o = !0, setRef: l, className: u, onReady: p } = e,
        { theme: m } = (0, s.useThemeContext)(),
        { reducedMotion: x } = i.useContext(s.AccessibilityPreferencesContext),
        b = N;
    null != j && (b = j);
    let _ = null !== (n = b[(0, r.wj)(m) ? d.BRd.DARK : d.BRd.LIGHT]) && void 0 !== n ? n : b[d.BRd.DARK];
    return (0, a.jsx)(
        c.Z,
        {
            ref: l,
            onLoadedData: p,
            className: u,
            loop: !x.enabled && t,
            autoPlay: !x.enabled && o,
            playsInline: !0,
            'data-testid': 'app-spinner',
            children: _
        },
        m
    );
};

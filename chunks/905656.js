t(733860);
var a = t(200651),
    i = t(192379),
    r = t(780384),
    l = t(481060),
    o = t(197344),
    s = t(526167),
    c = t(70097),
    d = t(981631),
    u = t(73117),
    p = t(988868),
    m = t(554355),
    x = t(991989),
    b = t(787462),
    h = t(635507),
    f = t(470794),
    v = t(886777);
function _(e) {
    let { movDark: n = u, movLight: t = b, mp4Dark: i = p, mp4Light: r = h, pngDark: l = m, pngLight: o = f, webmDark: c = x, webmLight: _ = v } = e,
        g = (0, s.vu)(),
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
                    src: l
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
        (g > 52 || -1 === g) &&
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
                        src: _,
                        type: 'video/webm'
                    },
                    'webm'
                )
            )),
        (0, s.rO)() &&
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
let g = o.Z.getAppSpinnerSources(),
    j = null != g ? _(g) : null,
    N = _({});
n.Z = (e) => {
    var n;
    let { loop: t = !0, autoPlay: o = !0, setRef: s, className: u, onReady: p } = e,
        { theme: m } = (0, l.useThemeContext)(),
        { reducedMotion: x } = i.useContext(l.AccessibilityPreferencesContext),
        b = N;
    null != j && (b = j);
    let h = null !== (n = b[(0, r.wj)(m) ? d.BRd.DARK : d.BRd.LIGHT]) && void 0 !== n ? n : b[d.BRd.DARK];
    return (0, a.jsx)(
        c.Z,
        {
            ref: s,
            onLoadedData: p,
            className: u,
            loop: !x.enabled && t,
            autoPlay: !x.enabled && o,
            playsInline: !0,
            'data-testid': 'app-spinner',
            children: h
        },
        m
    );
};

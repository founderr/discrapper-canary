n(733860);
var r = n(200651),
    i = n(192379),
    a = n(780384),
    s = n(481060),
    o = n(197344),
    l = n(526167),
    u = n(70097),
    c = n(981631),
    d = n(73117),
    f = n(988868),
    _ = n(554355),
    h = n(991989),
    p = n(787462),
    m = n(635507),
    g = n(470794),
    E = n(886777);
function v(e) {
    let { movDark: t = d, movLight: n = p, mp4Dark: i = f, mp4Light: a = m, pngDark: s = _, pngLight: o = g, webmDark: u = h, webmLight: v = E } = e,
        I = (0, l.vu)(),
        S = [
            (0, r.jsx)(
                'source',
                {
                    src: i,
                    type: 'video/mp4'
                },
                'mp4'
            ),
            (0, r.jsx)(
                'img',
                {
                    alt: '',
                    src: s
                },
                'png'
            )
        ],
        T = [
            (0, r.jsx)(
                'source',
                {
                    src: a,
                    type: 'video/mp4'
                },
                'mp4'
            ),
            (0, r.jsx)(
                'img',
                {
                    alt: '',
                    src: o
                },
                'png'
            )
        ];
    return (
        (I > 52 || -1 === I) &&
            (S.unshift(
                (0, r.jsx)(
                    'source',
                    {
                        src: u,
                        type: 'video/webm'
                    },
                    'webm'
                )
            ),
            T.unshift(
                (0, r.jsx)(
                    'source',
                    {
                        src: v,
                        type: 'video/webm'
                    },
                    'webm'
                )
            )),
        (0, l.rO)() &&
            (S.unshift(
                (0, r.jsx)(
                    'source',
                    {
                        src: t,
                        type: 'video/mp4'
                    },
                    'hevc'
                )
            ),
            T.unshift(
                (0, r.jsx)(
                    'source',
                    {
                        src: n,
                        type: 'video/mp4'
                    },
                    'hevc'
                )
            )),
        {
            [c.BRd.DARK]: S,
            [c.BRd.LIGHT]: T
        }
    );
}
let I = o.Z.getAppSpinnerSources(),
    S = null != I ? v(I) : null,
    T = v({});
t.Z = (e) => {
    var t;
    let { loop: n = !0, autoPlay: o = !0, setRef: l, className: d, onReady: f } = e,
        { theme: _ } = (0, s.useThemeContext)(),
        { reducedMotion: h } = i.useContext(s.AccessibilityPreferencesContext),
        p = T;
    null != S && (p = S);
    let m = null !== (t = p[(0, a.wj)(_) ? c.BRd.DARK : c.BRd.LIGHT]) && void 0 !== t ? t : p[c.BRd.DARK];
    return (0, r.jsx)(
        u.Z,
        {
            ref: l,
            onLoadedData: f,
            className: d,
            loop: !h.enabled && n,
            autoPlay: !h.enabled && o,
            playsInline: !0,
            'data-testid': 'app-spinner',
            children: m
        },
        _
    );
};

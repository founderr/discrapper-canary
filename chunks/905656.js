n(733860);
var t = n(735250),
    a = n(470079),
    l = n(780384),
    r = n(481060),
    i = n(197344),
    u = n(526167),
    o = n(70097),
    c = n(981631),
    m = n(73117),
    d = n(988868),
    I = n(554355),
    N = n(991989),
    _ = n(787462),
    E = n(635507),
    x = n(470794),
    p = n(886777);
function T(e) {
    let { movDark: s = m, movLight: n = _, mp4Dark: a = d, mp4Light: l = E, pngDark: r = I, pngLight: i = x, webmDark: o = N, webmLight: T = p } = e,
        g = (0, u.vu)(),
        j = [
            (0, t.jsx)(
                'source',
                {
                    src: a,
                    type: 'video/mp4'
                },
                'mp4'
            ),
            (0, t.jsx)(
                'img',
                {
                    alt: '',
                    src: r
                },
                'png'
            )
        ],
        h = [
            (0, t.jsx)(
                'source',
                {
                    src: l,
                    type: 'video/mp4'
                },
                'mp4'
            ),
            (0, t.jsx)(
                'img',
                {
                    alt: '',
                    src: i
                },
                'png'
            )
        ];
    return (
        (g > 52 || -1 === g) &&
            (j.unshift(
                (0, t.jsx)(
                    'source',
                    {
                        src: o,
                        type: 'video/webm'
                    },
                    'webm'
                )
            ),
            h.unshift(
                (0, t.jsx)(
                    'source',
                    {
                        src: T,
                        type: 'video/webm'
                    },
                    'webm'
                )
            )),
        (0, u.rO)() &&
            (j.unshift(
                (0, t.jsx)(
                    'source',
                    {
                        src: s,
                        type: 'video/mp4'
                    },
                    'hevc'
                )
            ),
            h.unshift(
                (0, t.jsx)(
                    'source',
                    {
                        src: n,
                        type: 'video/mp4'
                    },
                    'hevc'
                )
            )),
        {
            [c.BRd.DARK]: j,
            [c.BRd.LIGHT]: h
        }
    );
}
let g = i.Z.getAppSpinnerSources(),
    j = null != g ? T(g) : null,
    h = T({});
s.Z = (e) => {
    var s;
    let { loop: n = !0, autoPlay: i = !0, setRef: u, className: m, onReady: d } = e,
        { theme: I } = (0, r.useThemeContext)(),
        { reducedMotion: N } = a.useContext(r.AccessibilityPreferencesContext),
        _ = h;
    null != j && (_ = j);
    let E = null !== (s = _[(0, l.wj)(I) ? c.BRd.DARK : c.BRd.LIGHT]) && void 0 !== s ? s : _[c.BRd.DARK];
    return (0, t.jsx)(
        o.Z,
        {
            ref: u,
            onLoadedData: d,
            className: m,
            loop: !N.enabled && n,
            autoPlay: !N.enabled && i,
            playsInline: !0,
            'data-testid': 'app-spinner',
            children: E
        },
        I
    );
};

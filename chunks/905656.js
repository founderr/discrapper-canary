n(733860);
var t = n(735250),
    a = n(470079),
    l = n(780384),
    r = n(481060),
    i = n(197344),
    u = n(526167),
    o = n(73117),
    c = n(787462),
    m = n(70097),
    d = n(981631),
    I = n(988868),
    N = n(554355),
    _ = n(991989),
    E = n(635507),
    x = n(470794),
    p = n(886777);
function T(e) {
    let { movDark: s = o, movLight: n = c, mp4Dark: a = I, mp4Light: l = E, pngDark: r = N, pngLight: i = x, webmDark: m = _, webmLight: T = p } = e,
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
                        src: m,
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
            [d.BRd.DARK]: j,
            [d.BRd.LIGHT]: h
        }
    );
}
let g = i.Z.getAppSpinnerSources(),
    j = null != g ? T(g) : null,
    h = T({});
s.Z = (e) => {
    var s;
    let { loop: n = !0, autoPlay: i = !0, setRef: u, className: o, onReady: c } = e,
        { theme: I } = (0, r.useThemeContext)(),
        { reducedMotion: N } = a.useContext(r.AccessibilityPreferencesContext),
        _ = h;
    null != j && (_ = j);
    let E = null !== (s = _[(0, l.wj)(I) ? d.BRd.DARK : d.BRd.LIGHT]) && void 0 !== s ? s : _[d.BRd.DARK];
    return (0, t.jsx)(
        m.Z,
        {
            ref: u,
            onLoadedData: c,
            className: o,
            loop: !N.enabled && n,
            autoPlay: !N.enabled && i,
            playsInline: !0,
            'data-testid': 'app-spinner',
            children: E
        },
        I
    );
};

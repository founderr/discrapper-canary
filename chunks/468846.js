t.d(l, {
    ZP: function () {
        return h;
    },
    pn: function () {
        return i;
    }
});
var n,
    i,
    r = t(200651),
    a = t(192379),
    s = t(729594),
    o = t(829033);
function d(e) {
    let { autoMute: l, ...t } = e,
        n = a.useRef(null),
        i = a.useCallback(
            (e) => {
                if (!!e.data['x-tiktok-player'] && 'https://www.tiktok.com' === e.origin) {
                    if ('onPlayerReady' === e.data.type) {
                        var t, i, r, a;
                        l &&
                            (null === (a = n.current) ||
                                void 0 === a ||
                                null === (r = a.contentWindow) ||
                                void 0 === r ||
                                r.postMessage(
                                    {
                                        type: 'mute',
                                        'x-tiktok-player': !0
                                    },
                                    e.origin
                                )),
                            null === (i = n.current) ||
                                void 0 === i ||
                                null === (t = i.contentWindow) ||
                                void 0 === t ||
                                t.postMessage(
                                    {
                                        type: 'play',
                                        'x-tiktok-player': !0
                                    },
                                    e.origin
                                );
                    }
                }
            },
            [l]
        );
    return (
        a.useEffect(() => (window.addEventListener('message', i), () => window.removeEventListener('message', i)), [i]),
        (0, r.jsx)(m, {
            ref: n,
            ...t
        })
    );
}
function u(e) {
    let { src: l, autoMute: t, ...n } = e,
        i = s.parse(null != l ? l : '', !0);
    (i.query = {
        ...i.query,
        autoplay: '1',
        auto_play: '1'
    }),
        t && (i.query.mute = '1'),
        (i.search = null);
    let a = s.format(i);
    return (0, r.jsx)(m, {
        src: a,
        ...n
    });
}
let m = a.forwardRef(function (e, l) {
    return (0, r.jsx)('iframe', {
        ref: l,
        className: o.embedIframe,
        allow: 'autoplay',
        frameBorder: 0,
        scrolling: 'no',
        sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts',
        ...e
    });
});
function h(e) {
    switch (e.provider) {
        case 'YouTube':
            return (0, r.jsx)(u, { ...e });
        case 'TikTok':
            return (0, r.jsx)(d, { ...e });
        default:
            return (0, r.jsx)(m, { ...e });
    }
}
((n = i || (i = {})).YOUTUBE = 'YouTube'), (n.TIKTOK = 'TikTok');

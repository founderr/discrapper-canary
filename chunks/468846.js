l.d(t, {
    ZP: function () {
        return c;
    },
    pn: function () {
        return i;
    }
});
var n,
    i,
    r = l(200651),
    a = l(192379),
    s = l(729594),
    o = l(340702);
function d(e, t) {
    let l = s.parse(null != e ? e : '', !0);
    return (
        (l.query = {
            ...l.query,
            ...t
        }),
        (l.search = null),
        s.format(l)
    );
}
function u(e) {
    let { src: t, autoMute: l, ...n } = e,
        i = a.useRef(null),
        s = a.useCallback(
            (e) => {
                if (!!e.data['x-tiktok-player'] && 'https://www.tiktok.com' === e.origin) {
                    if ('onPlayerReady' === e.data.type) {
                        var t, n, r, a;
                        l &&
                            (null === (a = i.current) ||
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
                            null === (n = i.current) ||
                                void 0 === n ||
                                null === (t = n.contentWindow) ||
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
    a.useEffect(() => (window.addEventListener('message', s), () => window.removeEventListener('message', s)), [s]);
    let o = d(t, { utm_source: 'discord.gg' });
    return (0, r.jsx)(h, {
        src: o,
        ref: i,
        ...n
    });
}
function m(e) {
    let { src: t, autoMute: l, ...n } = e,
        i = d(t, {
            autoplay: '1',
            auto_play: '1',
            mute: l ? '1' : void 0
        });
    return (0, r.jsx)(h, {
        src: i,
        ...n
    });
}
let h = a.forwardRef(function (e, t) {
    return (0, r.jsx)('iframe', {
        ref: t,
        className: o.embedIframe,
        allow: 'autoplay',
        frameBorder: 0,
        scrolling: 'no',
        sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts',
        ...e
    });
});
function c(e) {
    switch (e.provider) {
        case 'YouTube':
            return (0, r.jsx)(m, { ...e });
        case 'TikTok':
            return (0, r.jsx)(u, { ...e });
        default:
            return (0, r.jsx)(h, { ...e });
    }
}
((n = i || (i = {})).YOUTUBE = 'YouTube'), (n.TIKTOK = 'TikTok');

t.d(l, {
    ZP: function () {
        return c;
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
    o = t(269625);
function d(e, l) {
    let t = s.parse(null != e ? e : '', !0);
    return (
        (t.query = {
            ...t.query,
            ...l
        }),
        (t.search = null),
        s.format(t)
    );
}
function u(e) {
    let { src: l, autoMute: t, ...n } = e,
        i = a.useRef(null),
        s = a.useCallback(
            (e) => {
                if (!!e.data['x-tiktok-player'] && 'https://www.tiktok.com' === e.origin) {
                    if ('onPlayerReady' === e.data.type) {
                        var l, n, r, a;
                        t &&
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
                                null === (l = n.contentWindow) ||
                                void 0 === l ||
                                l.postMessage(
                                    {
                                        type: 'play',
                                        'x-tiktok-player': !0
                                    },
                                    e.origin
                                );
                    }
                }
            },
            [t]
        );
    a.useEffect(() => (window.addEventListener('message', s), () => window.removeEventListener('message', s)), [s]);
    let o = d(l, { utm_source: 'discord.gg' });
    return (0, r.jsx)(h, {
        src: o,
        ref: i,
        ...n
    });
}
function m(e) {
    let { src: l, autoMute: t, ...n } = e,
        i = d(l, {
            autoplay: '1',
            auto_play: '1',
            mute: t ? '1' : void 0
        });
    return (0, r.jsx)(h, {
        src: i,
        ...n
    });
}
let h = a.forwardRef(function (e, l) {
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

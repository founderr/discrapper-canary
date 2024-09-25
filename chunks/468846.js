n.d(t, {
    ZP: function () {
        return _;
    },
    pn: function () {
        return r;
    }
});
var r,
    i = n(735250),
    a = n(470079),
    o = n(729594),
    s = n(269625);
let l = 'https://www.tiktok.com';
function u(e) {
    let { autoMute: t, ...n } = e,
        r = a.useRef(null),
        o = a.useCallback(
            (e) => {
                if (!!e.data['x-tiktok-player'] && e.origin === l) {
                    if ('onPlayerReady' === e.data.type) {
                        var n, i, a, o;
                        t &&
                            (null === (o = r.current) ||
                                void 0 === o ||
                                null === (a = o.contentWindow) ||
                                void 0 === a ||
                                a.postMessage(
                                    {
                                        type: 'mute',
                                        'x-tiktok-player': !0
                                    },
                                    e.origin
                                )),
                            null === (i = r.current) ||
                                void 0 === i ||
                                null === (n = i.contentWindow) ||
                                void 0 === n ||
                                n.postMessage(
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
    return (
        a.useEffect(() => (window.addEventListener('message', o), () => window.removeEventListener('message', o)), [o]),
        (0, i.jsx)(d, {
            ref: r,
            ...n
        })
    );
}
function c(e) {
    let { src: t, autoMute: n, ...r } = e,
        a = o.parse(null != t ? t : '', !0);
    (a.query = {
        ...a.query,
        autoplay: '1',
        auto_play: '1'
    }),
        n && (a.query.mute = '1'),
        (a.search = null);
    let s = o.format(a);
    return (0, i.jsx)(d, {
        src: s,
        ...r
    });
}
let d = a.forwardRef(function (e, t) {
    return (0, i.jsx)('iframe', {
        ref: t,
        className: s.embedIframe,
        allow: 'autoplay',
        frameBorder: 0,
        scrolling: 'no',
        sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts',
        ...e
    });
});
function _(e) {
    switch (e.provider) {
        case 'YouTube':
            return (0, i.jsx)(c, { ...e });
        case 'TikTok':
            return (0, i.jsx)(u, { ...e });
        default:
            return (0, i.jsx)(d, { ...e });
    }
}
!(function (e) {
    (e.YOUTUBE = 'YouTube'), (e.TIKTOK = 'TikTok');
})(r || (r = {}));

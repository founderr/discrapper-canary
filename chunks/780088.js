n.d(t, {
    Cx: function () {
        return N;
    },
    j0: function () {
        return A;
    },
    j9: function () {
        return v;
    },
    nP: function () {
        return T;
    }
});
var r = n(47120);
var i = n(735250);
n(470079);
var a = n(374470),
    o = n(481060),
    s = n(794295),
    l = n(163268),
    u = n(768494),
    c = n(751586),
    d = n(254109),
    _ = n(406432),
    E = n(52824),
    f = n(626135),
    h = n(591759),
    p = n(981631),
    m = n(855199);
function I(e, t, r, s) {
    e.preventDefault(),
        (0, a.k)(e.currentTarget) && e.currentTarget.blur(),
        null != s &&
            (f.default.track(
                p.rMx.OPEN_MODAL,
                {
                    type: p.jXE.MEDIA_VIEWER,
                    ...s
                },
                { throttlePercent: 0.01 }
            ),
            (0, d.fS)(s.guild_id, s.channel_id, s.channel_type, t.length)),
        (0, o.openModalLazy)(
            async () => {
                let { default: e } = await n.e('99857').then(n.bind(n, 895023));
                return (n) => {
                    let { ...a } = n;
                    return (0, i.jsx)(e, {
                        ...a,
                        onIndexChange: null != s ? d.f0 : void 0,
                        className: m.zoomedCarouselModalRoot,
                        items: t,
                        modalCarouselClassName: m.modalCarouselWrapper,
                        startingIndex: r
                    });
                };
            },
            { onCloseCallback: null != s ? d.VO : void 0 }
        );
}
function T(e, t) {
    let { width: n, height: r } = e,
        a = (0, E.q)(e);
    return {
        component: (0, i.jsx)(c.y, {
            width: n,
            height: r,
            original: e.url,
            renderLinkComponent: (e) => (0, i.jsx)(s.Z, { ...e }),
            renderForwardComponent: t,
            src: a
        }),
        width: n,
        height: r,
        src: a
    };
}
function g(e, t) {
    var n, r;
    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (!(0, _.tw)(e.contentType)) return null;
    let u = null !== (n = e.width) && void 0 !== n ? n : 0,
        d = null !== (r = e.height) && void 0 !== r ? r : 0,
        f = (0, E.q)({
            proxyURL: e.proxyUrl,
            url: e.url
        });
    return {
        component: (0, i.jsx)(c.y, {
            width: u,
            height: d,
            original: e.url,
            renderLinkComponent: (e) => (0, i.jsx)(s.Z, { ...e }),
            renderForwardComponent: t,
            src: f,
            shouldHideMediaOptions: a,
            obscure: (0, l.KP)(
                {
                    type: l.lJ.GenericMedia,
                    media: e
                },
                o
            )
        }),
        width: u,
        height: d,
        src: f
    };
}
function S(e, t) {
    var n, r;
    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (!(0, _.X2)(e.contentType)) return null;
    let u = null !== (n = e.width) && void 0 !== n ? n : 0,
        d = null !== (r = e.height) && void 0 !== r ? r : 0,
        f = (0, E.q)({
            proxyURL: e.proxyUrl,
            url: e.url
        }),
        p = h.Z.toURLSafe(e.proxyUrl);
    return null == p
        ? null
        : (p.searchParams.append('format', 'webp'),
          {
              component: (0, i.jsx)(c.K, {
                  width: u,
                  height: d,
                  poster: p.toString(),
                  naturalWidth: u,
                  naturalHeight: d,
                  renderLinkComponent: (e) => (0, i.jsx)(s.Z, { ...e }),
                  renderForwardComponent: t,
                  src: f,
                  shouldHideMediaOptions: a,
                  obscure: (0, l.KP)(
                      {
                          type: l.lJ.GenericMedia,
                          media: e
                      },
                      o
                  )
              }),
              width: u,
              height: d,
              src: f
          });
}
function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = g(e, t, n, r);
    if (null != i) return i;
    let a = S(e, t, n, r);
    return null != a ? a : null;
}
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return A((0, u.VY)(e), t, n, r);
}
function N(e, t) {
    let n = {};
    for (let [r, i] of e.entries()) n[i.src] = (n) => I(n, e, r, t);
    return n;
}

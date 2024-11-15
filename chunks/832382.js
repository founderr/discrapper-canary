n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(70097),
    a = n(720924);
function o(e) {
    let { children: t, channel: n } = e,
        o = (0, l.useRef)(null),
        s = (0, l.useRef)(!0),
        c = n.hdStreamingUntil;
    return ((0, l.useEffect)(() => {
        if (s.current) {
            s.current = !1;
            return;
        }
        if (null != c && new Date(c) < new Date() && null != o.current) {
            let e = o.current;
            e.play();
            let t = setTimeout(() => {
                e.pause();
            }, 23000);
            return () => {
                clearTimeout(t);
            };
        }
    }, [c]),
    n.isHDStreamSplashed)
        ? (0, i.jsxs)('div', {
              className: a.container,
              onMouseEnter: () => {
                  null != o.current && o.current.play();
              },
              onMouseLeave: () => {
                  null != o.current && o.current.pause();
              },
              children: [
                  (0, i.jsx)('div', {
                      className: a.videoContainer,
                      children: (0, i.jsx)(r.Z, {
                          ref: o,
                          className: a.video,
                          muted: !0,
                          loop: !0,
                          preload: 'auto',
                          children: (0, i.jsx)('source', {
                              src: 'https://cdn.discordapp.com/assets/content/d9e11f6867e4d7ce641f72ee40be0d96b085239067f94564f79ca3920a50397f.mp4',
                              type: 'video/mp4'
                          })
                      })
                  }),
                  (0, i.jsx)('div', {
                      className: a.content,
                      children: t
                  })
              ]
          })
        : (0, i.jsx)(i.Fragment, { children: t });
}

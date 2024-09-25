var r = n(735250);
n(470079);
var i = n(366040),
    a = n(293335),
    o = n(831748);
let s = (e) => {
    let { profileEffectConfig: t, onReady: n } = e,
        { pendingRef: s, setPending: l } = (0, a.Z)(t.effects, n);
    return (0, i.nY)('Profile Effect - Web')
        ? (0, r.jsx)('div', {
              className: o.profileEffects,
              children: (0, r.jsx)('div', {
                  className: o.inner,
                  children: t.effects.map((e) =>
                      (0, r.jsx)(
                          'video',
                          {
                              muted: !0,
                              autoPlay: !0,
                              src: e.src,
                              'aria-hidden': !0,
                              style: {
                                  opacity: 0,
                                  position: 'absolute'
                              },
                              onLoadedData: () => {
                                  l(s.current - 1), (s.current = s.current - 1);
                              }
                          },
                          e.src
                      )
                  )
              })
          })
        : (0, r.jsx)('div', {
              className: o.profileEffects,
              children: (0, r.jsx)('div', {
                  className: o.inner,
                  children: t.effects.map((e) =>
                      (0, r.jsx)(
                          'img',
                          {
                              src: e.src,
                              alt: 'Preload Profile Effect Asset',
                              'aria-hidden': !0,
                              style: {
                                  opacity: 0,
                                  position: 'absolute'
                              },
                              onLoad: () => {
                                  l(s.current - 1), (s.current = s.current - 1);
                              }
                          },
                          e.src
                      )
                  )
              })
          });
};
t.Z = s;

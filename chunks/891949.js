a.d(n, {
    Z: function () {
        return _;
    }
}),
    a(47120);
var t = a(735250),
    r = a(470079),
    s = a(481060),
    i = a(341176),
    o = a(810568),
    l = a(701865),
    c = a(689938),
    d = a(51527),
    u = a(133512);
function _(e) {
    let { detectedGame: n, trackAction: _ } = e,
        E = r.useRef(null),
        m = r.useMemo(() => {
            let e = n.artwork.map((e) => ({
                url: e,
                type: 'IMAGE'
            }));
            return [
                ...n.screenshots.map((e) => ({
                    url: e,
                    type: 'IMAGE'
                })),
                ...e
            ];
        }, [n.artwork, n.screenshots]),
        I = m.length > 2;
    function A(e) {
        if (null == E.current) return;
        let n = E.current.getScrollerState().scrollLeft;
        E.current.scrollTo({
            to: n + 280 * e,
            animate: !0
        });
    }
    return 0 === m.length
        ? null
        : (0, t.jsxs)('div', {
              children: [
                  (0, t.jsx)(s.Heading, {
                      className: d.sectionHeader,
                      variant: 'text-md/semibold',
                      color: 'header-primary',
                      children: c.Z.Messages.GAME_PROFILE_SCREENSHOTS
                  }),
                  (0, t.jsxs)('div', {
                      className: I ? u.gameProfileMediaSmall : u.gameProfileMediaLarge,
                      children: [
                          (0, t.jsx)(s.AdvancedScrollerNone, {
                              ref: E,
                              className: u.imageScroller,
                              orientation: 'horizontal',
                              children: m.map((e, n) =>
                                  (0, t.jsx)(
                                      s.Clickable,
                                      {
                                          className: u.imageClickable,
                                          focusProps: {
                                              offset: 4,
                                              ringClassName: u.gameArtworkFocusRing
                                          },
                                          onClick: () => {
                                              _(o.as.ClickImage),
                                                  (0, s.openModalLazy)(
                                                      async () => {
                                                          let { default: e } = await Promise.resolve().then(a.bind(a, 950120));
                                                          return (a) =>
                                                              (0, t.jsx)(e, {
                                                                  className: u.mediaModal,
                                                                  ...a,
                                                                  items: m,
                                                                  fit: i.D.SCALE_DOWN,
                                                                  startingIndex: n,
                                                                  shouldHideMediaOptions: !0,
                                                                  shouldAnimateCarousel: !0
                                                              });
                                                      },
                                                      { modalKey: l.U }
                                                  );
                                          },
                                          children: (0, t.jsx)('img', {
                                              src: e.url,
                                              className: u.gameArtwork,
                                              alt: c.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({ game: name })
                                          })
                                      },
                                      n
                                  )
                              )
                          }),
                          I &&
                              (0, t.jsxs)('div', {
                                  className: u.mediaOverlay,
                                  children: [
                                      (0, t.jsx)('div', { className: u.gradientLeft }),
                                      (0, t.jsx)(s.Clickable, {
                                          className: u.arrowClickable,
                                          onClick: () => A(-1),
                                          children: (0, t.jsx)(s.ArrowSmallLeftIcon, {
                                              className: u.arrow,
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, t.jsx)('div', { className: u.gradientRight }),
                                      (0, t.jsx)(s.Clickable, {
                                          className: u.arrowClickable,
                                          onClick: () => A(1),
                                          children: (0, t.jsx)(s.ArrowSmallRightIcon, {
                                              className: u.arrow,
                                              color: 'currentColor'
                                          })
                                      })
                                  ]
                              })
                      ]
                  })
              ]
          });
}

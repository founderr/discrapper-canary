n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120);
var a = n(735250),
    r = n(470079),
    s = n(481060),
    i = n(341176),
    o = n(810568),
    l = n(701865),
    c = n(689938),
    d = n(51527),
    u = n(133512);
function _(e) {
    let { detectedGame: t, trackAction: _ } = e,
        E = r.useRef(null),
        m = r.useMemo(() => {
            let e = t.artwork.map((e) => ({
                url: e,
                type: 'IMAGE'
            }));
            return [
                ...t.screenshots.map((e) => ({
                    url: e,
                    type: 'IMAGE'
                })),
                ...e
            ];
        }, [t.artwork, t.screenshots]),
        I = m.length > 2;
    function A(e) {
        if (null == E.current) return;
        let t = E.current.getScrollerState().scrollLeft;
        E.current.scrollTo({
            to: t + 280 * e,
            animate: !0
        });
    }
    return 0 === m.length
        ? null
        : (0, a.jsxs)('div', {
              children: [
                  (0, a.jsx)(s.Heading, {
                      className: d.sectionHeader,
                      variant: 'text-md/semibold',
                      color: 'header-primary',
                      children: c.Z.Messages.GAME_PROFILE_SCREENSHOTS
                  }),
                  (0, a.jsxs)('div', {
                      className: I ? u.gameProfileMediaSmall : u.gameProfileMediaLarge,
                      children: [
                          (0, a.jsx)(s.AdvancedScrollerNone, {
                              ref: E,
                              className: u.imageScroller,
                              orientation: 'horizontal',
                              children: m.map((e, t) =>
                                  (0, a.jsx)(
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
                                                          let { default: e } = await Promise.resolve().then(n.bind(n, 950120));
                                                          return (n) =>
                                                              (0, a.jsx)(e, {
                                                                  className: u.mediaModal,
                                                                  ...n,
                                                                  items: m,
                                                                  fit: i.D.SCALE_DOWN,
                                                                  startingIndex: t,
                                                                  shouldHideMediaOptions: !0,
                                                                  shouldAnimateCarousel: !0
                                                              });
                                                      },
                                                      { modalKey: l.U }
                                                  );
                                          },
                                          children: (0, a.jsx)('img', {
                                              src: e.url,
                                              className: u.gameArtwork,
                                              alt: c.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({ game: name })
                                          })
                                      },
                                      t
                                  )
                              )
                          }),
                          I &&
                              (0, a.jsxs)('div', {
                                  className: u.mediaOverlay,
                                  children: [
                                      (0, a.jsx)('div', { className: u.gradientLeft }),
                                      (0, a.jsx)(s.Clickable, {
                                          className: u.arrowClickable,
                                          onClick: () => A(-1),
                                          children: (0, a.jsx)(s.ArrowSmallLeftIcon, {
                                              className: u.arrow,
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, a.jsx)('div', { className: u.gradientRight }),
                                      (0, a.jsx)(s.Clickable, {
                                          className: u.arrowClickable,
                                          onClick: () => A(1),
                                          children: (0, a.jsx)(s.ArrowSmallRightIcon, {
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

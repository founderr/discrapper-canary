t.d(n, {
    Z: function () {
        return _;
    }
}),
    t(47120);
var a = t(735250),
    r = t(470079),
    s = t(481060),
    i = t(341176),
    o = t(810568),
    l = t(701865),
    c = t(689938),
    d = t(51527),
    u = t(133512);
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
                              children: m.map((e, n) =>
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
                                                          let { default: e } = await Promise.all([t.e('87267'), t.e('79693')]).then(t.bind(t, 950120));
                                                          return (t) =>
                                                              (0, a.jsx)(e, {
                                                                  className: u.mediaModal,
                                                                  ...t,
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
                                          children: (0, a.jsx)('img', {
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

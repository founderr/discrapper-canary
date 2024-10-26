n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120);
var a = n(200651),
    r = n(192379),
    s = n(481060),
    i = n(341176),
    o = n(312097),
    l = n(810568),
    c = n(689938),
    d = n(51527),
    u = n(133512);
function _(e) {
    let { detectedGame: t, trackAction: n } = e,
        _ = r.useRef(null),
        E = r.useMemo(() => {
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
        m = E.length > 2;
    function I(e) {
        if (null == _.current) return;
        let t = _.current.getScrollerState().scrollLeft;
        _.current.scrollTo({
            to: t + 280 * e,
            animate: !0
        });
    }
    return 0 === E.length
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
                      className: m ? u.gameProfileMediaSmall : u.gameProfileMediaLarge,
                      children: [
                          (0, a.jsx)(s.AdvancedScrollerNone, {
                              ref: _,
                              className: u.imageScroller,
                              orientation: 'horizontal',
                              children: E.map((e, t) =>
                                  (0, a.jsx)(
                                      s.Clickable,
                                      {
                                          className: u.imageClickable,
                                          focusProps: {
                                              offset: 4,
                                              ringClassName: u.gameArtworkFocusRing
                                          },
                                          onClick: () => {
                                              n(l.as.ClickImage),
                                                  (0, o.K)({
                                                      className: u.mediaModal,
                                                      items: E,
                                                      fit: i.D.SCALE_DOWN,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      shouldAnimateCarousel: !0,
                                                      location: 'GameProfileMedia'
                                                  });
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
                          m &&
                              (0, a.jsxs)('div', {
                                  className: u.mediaOverlay,
                                  children: [
                                      (0, a.jsx)('div', { className: u.gradientLeft }),
                                      (0, a.jsx)(s.Clickable, {
                                          className: u.arrowClickable,
                                          onClick: () => I(-1),
                                          children: (0, a.jsx)(s.ArrowSmallLeftIcon, {
                                              className: u.arrow,
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, a.jsx)('div', { className: u.gradientRight }),
                                      (0, a.jsx)(s.Clickable, {
                                          className: u.arrowClickable,
                                          onClick: () => I(1),
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

a.d(n, {
    Z: function () {
        return d;
    }
}),
    a(47120);
var t = a(735250),
    r = a(470079),
    s = a(481060),
    i = a(810568),
    o = a(689938),
    l = a(51527),
    c = a(133512);
function d(e) {
    let { detectedGame: n, trackAction: d } = e,
        u = r.useRef(null),
        _ = r.useMemo(() => {
            let e = n.artwork.map((e) => ({ src: e }));
            return [...n.screenshots.map((e) => ({ src: e })), ...e];
        }, [n.artwork, n.screenshots]),
        E = _.length > 2;
    function m(e) {
        if (null == u.current) return;
        let n = u.current.getScrollerState().scrollLeft;
        u.current.scrollTo({
            to: n + 280 * e,
            animate: !0
        });
    }
    return 0 === _.length
        ? null
        : (0, t.jsxs)('div', {
              children: [
                  (0, t.jsx)(s.Heading, {
                      className: l.sectionHeader,
                      variant: 'text-md/semibold',
                      color: 'header-primary',
                      children: o.Z.Messages.GAME_PROFILE_SCREENSHOTS
                  }),
                  (0, t.jsxs)('div', {
                      className: E ? c.gameProfileMediaSmall : c.gameProfileMediaLarge,
                      children: [
                          (0, t.jsx)(s.AdvancedScrollerNone, {
                              ref: u,
                              className: c.imageScroller,
                              orientation: 'horizontal',
                              children: _.map((e, n) =>
                                  (0, t.jsx)(
                                      s.Clickable,
                                      {
                                          className: c.imageClickable,
                                          focusProps: {
                                              offset: 4,
                                              ringClassName: c.gameArtworkFocusRing
                                          },
                                          onClick: () => {
                                              d(i.as.ClickImage),
                                                  (0, s.openModalLazy)(async () => {
                                                      let { default: e } = await a.e('99857').then(a.bind(a, 895023));
                                                      return (a) => {
                                                          let { ...r } = a;
                                                          return (0, t.jsx)(e, {
                                                              className: c.mediaModal,
                                                              ...r,
                                                              items: _,
                                                              startingIndex: n
                                                          });
                                                      };
                                                  });
                                          },
                                          children: (0, t.jsx)('img', {
                                              src: e.src,
                                              className: c.gameArtwork,
                                              alt: o.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({ game: name })
                                          })
                                      },
                                      e.src
                                  )
                              )
                          }),
                          E &&
                              (0, t.jsxs)('div', {
                                  className: c.mediaOverlay,
                                  children: [
                                      (0, t.jsx)('div', { className: c.gradientLeft }),
                                      (0, t.jsx)(s.Clickable, {
                                          className: c.arrowClickable,
                                          onClick: () => m(-1),
                                          children: (0, t.jsx)(s.ArrowSmallLeftIcon, {
                                              className: c.arrow,
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, t.jsx)('div', { className: c.gradientRight }),
                                      (0, t.jsx)(s.Clickable, {
                                          className: c.arrowClickable,
                                          onClick: () => m(1),
                                          children: (0, t.jsx)(s.ArrowSmallRightIcon, {
                                              className: c.arrow,
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

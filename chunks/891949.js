n.d(a, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var t = n(735250),
    i = n(470079),
    o = n(481060),
    r = n(810568),
    l = n(689938),
    s = n(51527),
    c = n(133512);
function d(e) {
    let { detectedGame: a, trackAction: d } = e,
        u = i.useRef(null),
        m = i.useMemo(() => {
            let e = a.artwork.map((e) => ({ src: e }));
            return [...a.screenshots.map((e) => ({ src: e })), ...e];
        }, [a.artwork, a.screenshots]),
        p = m.length > 2;
    function g(e) {
        if (null == u.current) return;
        let a = u.current.getScrollerState().scrollLeft;
        u.current.scrollTo({
            to: a + 280 * e,
            animate: !0
        });
    }
    return 0 === m.length
        ? null
        : (0, t.jsxs)('div', {
              children: [
                  (0, t.jsx)(o.Heading, {
                      className: s.sectionHeader,
                      variant: 'text-md/semibold',
                      color: 'header-primary',
                      children: l.Z.Messages.GAME_PROFILE_SCREENSHOTS
                  }),
                  (0, t.jsxs)('div', {
                      className: p ? c.gameProfileMediaSmall : c.gameProfileMediaLarge,
                      children: [
                          (0, t.jsx)(o.AdvancedScrollerNone, {
                              ref: u,
                              className: c.imageScroller,
                              orientation: 'horizontal',
                              children: m.map((e, a) =>
                                  (0, t.jsx)(
                                      o.Clickable,
                                      {
                                          className: c.imageClickable,
                                          focusProps: {
                                              offset: 4,
                                              ringClassName: c.gameArtworkFocusRing
                                          },
                                          onClick: () => {
                                              d(r.as.ClickImage),
                                                  (0, o.openModalLazy)(async () => {
                                                      let { default: e } = await n.e('99857').then(n.bind(n, 895023));
                                                      return (n) => {
                                                          let { ...i } = n;
                                                          return (0, t.jsx)(e, {
                                                              className: c.mediaModal,
                                                              ...i,
                                                              items: m,
                                                              startingIndex: a
                                                          });
                                                      };
                                                  });
                                          },
                                          children: (0, t.jsx)('img', {
                                              src: e.src,
                                              className: c.gameArtwork,
                                              alt: l.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({ game: name })
                                          })
                                      },
                                      e.src
                                  )
                              )
                          }),
                          p &&
                              (0, t.jsxs)('div', {
                                  className: c.mediaOverlay,
                                  children: [
                                      (0, t.jsx)('div', { className: c.gradientLeft }),
                                      (0, t.jsx)(o.Clickable, {
                                          className: c.arrowClickable,
                                          onClick: () => g(-1),
                                          children: (0, t.jsx)(o.ArrowSmallLeftIcon, {
                                              className: c.arrow,
                                              color: 'currentColor'
                                          })
                                      }),
                                      (0, t.jsx)('div', { className: c.gradientRight }),
                                      (0, t.jsx)(o.Clickable, {
                                          className: c.arrowClickable,
                                          onClick: () => g(1),
                                          children: (0, t.jsx)(o.ArrowSmallRightIcon, {
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

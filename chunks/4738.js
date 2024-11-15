n.d(t, {
    D: function () {
        return h;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(693789),
    l = n(1561),
    u = n(463208),
    c = n(481060),
    d = n(889963),
    f = n(388032),
    _ = n(653739);
function p(e) {
    let { page: t, totalPageCount: n, disabled: a, onPageChange: o } = e,
        [d, f] = i.useState(!1),
        [p, h] = i.useState(null),
        m = null != p && p >= 1 && p <= n;
    return a
        ? (0, r.jsx)(
              c.Heading,
              {
                  className: _.gap,
                  'aria-hidden': !0,
                  variant: 'heading-sm/semibold',
                  children: '\u2026'
              },
              t.key
          )
        : d
          ? (0, r.jsx)(
                u.o,
                {
                    autoFocus: !0,
                    className: _.jumpToPageInlineInput,
                    size: u.o.Sizes.MINI,
                    value: null == p ? '' : ''.concat(p),
                    onChange: (e) => {
                        let t = parseInt(e);
                        if ('' === e || isNaN(t)) {
                            h(null);
                            return;
                        }
                        h(t);
                    },
                    onBlur: () => {
                        f(!1), h(null);
                    },
                    onKeyPress: (e) => {
                        'Enter' === e.key && null != p && m && (o(p), f(!1), h(null));
                    },
                    disabled: a
                },
                t.key
            )
          : (0, r.jsx)(
                l.P,
                {
                    onClick: () => f(!0),
                    children: (0, r.jsx)(c.Heading, {
                        className: s()(_.roundButton, _.gap),
                        'aria-hidden': !0,
                        variant: 'heading-sm/semibold',
                        children: '\u2026'
                    })
                },
                t.key
            );
}
function h(e) {
    let { currentPage: t, totalCount: n, pageSize: i, maxVisiblePages: a, disablePaginationGap: u, onPageChange: h, hideMaxPage: m = !1, className: g } = e,
        E = Math.ceil(n / i);
    return (0, r.jsx)(d.W, {
        totalPageCount: E,
        selectedPage: t,
        maxVisiblePages: a,
        hideMaxPage: m,
        onPageChange: function (e) {
            null != h && h(e);
        },
        children: function (e) {
            let { pages: t, hasMultiplePages: n } = e;
            return n
                ? (0, r.jsx)('div', {
                      className: s()(_.pageControlContainer, g),
                      children: (0, r.jsx)('nav', {
                          className: _.pageControl,
                          children: t.map((e) => {
                              var t, n;
                              switch (e.type) {
                                  case d.s.BACK:
                                      return (function (e) {
                                          let { key: t, disabled: n, navigateToPage: i } = e;
                                          return (0, r.jsxs)(
                                              o.zx,
                                              {
                                                  className: _.endButton,
                                                  innerClassName: _.endButtonInner,
                                                  look: o.zx.Looks.BLANK,
                                                  color: o.zx.Colors.TRANSPARENT,
                                                  onClick: i,
                                                  disabled: n,
                                                  rel: 'prev',
                                                  children: [
                                                      (0, r.jsx)(c.ChevronSmallLeftIcon, {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: _.iconCaret,
                                                          'aria-hidden': !0
                                                      }),
                                                      (0, r.jsx)('span', { children: f.intl.string(f.t['13/7kZ']) })
                                                  ]
                                              },
                                              t
                                          );
                                      })(e);
                                  case d.s.PAGE:
                                      return (
                                          (t = e),
                                          (0, r.jsx)(
                                              l.P,
                                              {
                                                  className: s()(_.roundButton, { [_.activeButton]: t.selected }),
                                                  onClick: t.selected ? void 0 : t.navigateToPage,
                                                  'aria-label': f.intl.formatToPlainString(f.t.IGMs8f, { pageNumber: t.targetPage }),
                                                  'aria-current': t.selected ? 'page' : void 0,
                                                  children: (0, r.jsx)('span', { children: t.targetPage })
                                              },
                                              t.key
                                          )
                                      );
                                  case d.s.GAP:
                                      return (
                                          (n = e),
                                          (0, r.jsx)(
                                              p,
                                              {
                                                  page: n,
                                                  totalPageCount: E,
                                                  disabled: !!u,
                                                  onPageChange: h
                                              },
                                              n.key
                                          )
                                      );
                                  case d.s.NEXT:
                                      return (function (e) {
                                          let { key: t, disabled: n, navigateToPage: i } = e;
                                          return (0, r.jsxs)(
                                              o.zx,
                                              {
                                                  className: _.endButton,
                                                  innerClassName: _.endButtonInner,
                                                  look: o.zx.Looks.BLANK,
                                                  color: o.zx.Colors.TRANSPARENT,
                                                  onClick: i,
                                                  disabled: n,
                                                  rel: 'next',
                                                  children: [
                                                      (0, r.jsx)('span', { children: f.intl.string(f.t.PDTjLC) }),
                                                      (0, r.jsx)(c.ChevronSmallRightIcon, {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: _.iconCaret,
                                                          'aria-hidden': !0
                                                      })
                                                  ]
                                              },
                                              t
                                          );
                                      })(e);
                                  default:
                                      return null;
                              }
                          })
                      })
                  })
                : null;
        }
    });
}

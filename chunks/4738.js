n.d(t, {
    D: function () {
        return m;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(693789),
    u = n(1561),
    c = n(260034),
    d = n(463208),
    _ = n(481060),
    E = n(889963),
    f = n(689938),
    h = n(887603);
function p(e) {
    let { page: t, totalPageCount: n, disabled: r, onPageChange: o } = e,
        [l, _] = a.useState(!1),
        [E, f] = a.useState(null),
        p = null != E && E >= 1 && E <= n,
        m = (e) => {
            let t = parseInt(e);
            if ('' === e || isNaN(t)) {
                f(null);
                return;
            }
            f(t);
        },
        I = (e) => {
            'Enter' === e.key && null != E && p && (o(E), _(!1), f(null));
        };
    return r
        ? (0, i.jsx)(
              c.X,
              {
                  className: h.gap,
                  'aria-hidden': !0,
                  variant: 'heading-sm/semibold',
                  children: '\u2026'
              },
              t.key
          )
        : l
          ? (0, i.jsx)(
                d.o,
                {
                    autoFocus: !0,
                    className: h.jumpToPageInlineInput,
                    size: d.o.Sizes.MINI,
                    value: null == E ? '' : ''.concat(E),
                    onChange: m,
                    onBlur: () => {
                        _(!1), f(null);
                    },
                    onKeyPress: I,
                    disabled: r
                },
                t.key
            )
          : (0, i.jsx)(
                u.P,
                {
                    onClick: () => _(!0),
                    children: (0, i.jsx)(c.X, {
                        className: s()(h.roundButton, h.gap),
                        'aria-hidden': !0,
                        variant: 'heading-sm/semibold',
                        children: '\u2026'
                    })
                },
                t.key
            );
}
function m(e) {
    let { currentPage: t, totalCount: n, pageSize: r, maxVisiblePages: a, disablePaginationGap: o, onPageChange: c, hideMaxPage: d = !1, className: m } = e,
        I = Math.ceil(n / r);
    function T(e) {
        null != c && c(e);
    }
    function g(e) {
        let { key: t, disabled: n, navigateToPage: r } = e;
        return (0, i.jsxs)(
            l.zx,
            {
                className: h.endButton,
                innerClassName: h.endButtonInner,
                look: l.zx.Looks.BLANK,
                color: l.zx.Colors.TRANSPARENT,
                onClick: r,
                disabled: n,
                rel: 'prev',
                children: [
                    (0, i.jsx)(_.ChevronSmallLeftIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: h.iconCaret,
                        'aria-hidden': !0
                    }),
                    (0, i.jsx)('span', { children: f.Z.Messages.BACK })
                ]
            },
            t
        );
    }
    function S(e) {
        let { key: t, disabled: n, navigateToPage: r } = e;
        return (0, i.jsxs)(
            l.zx,
            {
                className: h.endButton,
                innerClassName: h.endButtonInner,
                look: l.zx.Looks.BLANK,
                color: l.zx.Colors.TRANSPARENT,
                onClick: r,
                disabled: n,
                rel: 'next',
                children: [
                    (0, i.jsx)('span', { children: f.Z.Messages.NEXT }),
                    (0, i.jsx)(_.ChevronSmallRightIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: h.iconCaret,
                        'aria-hidden': !0
                    })
                ]
            },
            t
        );
    }
    function A(e) {
        return (0, i.jsx)(
            u.P,
            {
                className: s()(h.roundButton, { [h.activeButton]: e.selected }),
                onClick: e.selected ? void 0 : e.navigateToPage,
                'aria-label': f.Z.Messages.PAGINATION_PAGE_LABEL.format({ pageNumber: e.targetPage }),
                'aria-current': e.selected ? 'page' : void 0,
                children: (0, i.jsx)('span', { children: e.targetPage })
            },
            e.key
        );
    }
    function v(e) {
        return (0, i.jsx)(
            p,
            {
                page: e,
                totalPageCount: I,
                disabled: !!o,
                onPageChange: c
            },
            e.key
        );
    }
    function N(e) {
        let { pages: t, hasMultiplePages: n } = e;
        return n
            ? (0, i.jsx)('div', {
                  className: s()(h.pageControlContainer, m),
                  children: (0, i.jsx)('nav', {
                      className: h.pageControl,
                      children: t.map((e) => {
                          switch (e.type) {
                              case E.s.BACK:
                                  return g(e);
                              case E.s.PAGE:
                                  return A(e);
                              case E.s.GAP:
                                  return v(e);
                              case E.s.NEXT:
                                  return S(e);
                              default:
                                  return null;
                          }
                      })
                  })
              })
            : null;
    }
    return (0, i.jsx)(E.W, {
        totalPageCount: I,
        selectedPage: t,
        maxVisiblePages: a,
        hideMaxPage: d,
        onPageChange: T,
        children: N
    });
}

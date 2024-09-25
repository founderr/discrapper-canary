n.d(t, {
    D: function () {
        return p;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(693789),
    u = n(1561),
    c = n(463208),
    d = n(481060),
    _ = n(889963),
    E = n(689938),
    f = n(887603);
function h(e) {
    let { page: t, totalPageCount: n, disabled: r, onPageChange: o } = e,
        [l, _] = a.useState(!1),
        [E, h] = a.useState(null),
        p = null != E && E >= 1 && E <= n,
        m = (e) => {
            let t = parseInt(e);
            if ('' === e || isNaN(t)) {
                h(null);
                return;
            }
            h(t);
        },
        I = (e) => {
            'Enter' === e.key && null != E && p && (o(E), _(!1), h(null));
        };
    return r
        ? (0, i.jsx)(
              d.Heading,
              {
                  className: f.gap,
                  'aria-hidden': !0,
                  variant: 'heading-sm/semibold',
                  children: '\u2026'
              },
              t.key
          )
        : l
          ? (0, i.jsx)(
                c.o,
                {
                    autoFocus: !0,
                    className: f.jumpToPageInlineInput,
                    size: c.o.Sizes.MINI,
                    value: null == E ? '' : ''.concat(E),
                    onChange: m,
                    onBlur: () => {
                        _(!1), h(null);
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
                    children: (0, i.jsx)(d.Heading, {
                        className: s()(f.roundButton, f.gap),
                        'aria-hidden': !0,
                        variant: 'heading-sm/semibold',
                        children: '\u2026'
                    })
                },
                t.key
            );
}
function p(e) {
    let { currentPage: t, totalCount: n, pageSize: r, maxVisiblePages: a, disablePaginationGap: o, onPageChange: c, hideMaxPage: p = !1, className: m } = e,
        I = Math.ceil(n / r);
    function T(e) {
        null != c && c(e);
    }
    function g(e) {
        let { key: t, disabled: n, navigateToPage: r } = e;
        return (0, i.jsxs)(
            l.zx,
            {
                className: f.endButton,
                innerClassName: f.endButtonInner,
                look: l.zx.Looks.BLANK,
                color: l.zx.Colors.TRANSPARENT,
                onClick: r,
                disabled: n,
                rel: 'prev',
                children: [
                    (0, i.jsx)(d.ChevronSmallLeftIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: f.iconCaret,
                        'aria-hidden': !0
                    }),
                    (0, i.jsx)('span', { children: E.Z.Messages.BACK })
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
                className: f.endButton,
                innerClassName: f.endButtonInner,
                look: l.zx.Looks.BLANK,
                color: l.zx.Colors.TRANSPARENT,
                onClick: r,
                disabled: n,
                rel: 'next',
                children: [
                    (0, i.jsx)('span', { children: E.Z.Messages.NEXT }),
                    (0, i.jsx)(d.ChevronSmallRightIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: f.iconCaret,
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
                className: s()(f.roundButton, { [f.activeButton]: e.selected }),
                onClick: e.selected ? void 0 : e.navigateToPage,
                'aria-label': E.Z.Messages.PAGINATION_PAGE_LABEL.format({ pageNumber: e.targetPage }),
                'aria-current': e.selected ? 'page' : void 0,
                children: (0, i.jsx)('span', { children: e.targetPage })
            },
            e.key
        );
    }
    function v(e) {
        return (0, i.jsx)(
            h,
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
                  className: s()(f.pageControlContainer, m),
                  children: (0, i.jsx)('nav', {
                      className: f.pageControl,
                      children: t.map((e) => {
                          switch (e.type) {
                              case _.s.BACK:
                                  return g(e);
                              case _.s.PAGE:
                                  return A(e);
                              case _.s.GAP:
                                  return v(e);
                              case _.s.NEXT:
                                  return S(e);
                              default:
                                  return null;
                          }
                      })
                  })
              })
            : null;
    }
    return (0, i.jsx)(_.W, {
        totalPageCount: I,
        selectedPage: t,
        maxVisiblePages: a,
        hideMaxPage: p,
        onPageChange: T,
        children: N
    });
}

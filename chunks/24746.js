n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(302454),
    s = n.n(o),
    c = n(481060),
    d = n(939893),
    u = n(241209),
    h = n(388032),
    m = n(285136);
let p = s().parserFor(d.Z),
    g = s().reactFor(s().ruleOutput(d.Z, 'react'));
function f(e) {
    let { description: t, supportsMarkdown: n } = e,
        [l, o] = r.useState(!1),
        s = r.useRef(null);
    r.useEffect(() => {
        if (null == s.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, i;
            let r = null !== (n = null === (e = s.current) || void 0 === e ? void 0 : e.scrollHeight) && void 0 !== n ? n : 0;
            o(r - (null !== (i = null === (t = s.current) || void 0 === t ? void 0 : t.clientHeight) && void 0 !== i ? i : 0) > 1);
        });
        return e.observe(s.current), () => e.disconnect();
    }, []);
    let [d, h] = r.useState(!1),
        f = r.useCallback(() => {
            h((e) => !e);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                ref: s,
                className: a()({
                    [m.descriptionClamp]: !d,
                    [m.descriptionClampSafari]: !d && 'Safari' === platform.name
                }),
                children: n
                    ? (0, i.jsx)(u.Z, {
                          className: m.detailedDescription,
                          parser: p,
                          output: g,
                          state: { allowLinks: !0 },
                          children: t
                      })
                    : (0, i.jsx)(c.Text, {
                          variant: 'text-md/normal',
                          color: 'text-normal',
                          children: t
                      })
            }),
            l || d
                ? (0, i.jsx)(_, {
                      isShowingMore: d,
                      onToggle: f
                  })
                : null
        ]
    });
}
function _(e) {
    let { onToggle: t, isShowingMore: n } = e,
        l = r.useMemo(
            () =>
                (0, i.jsxs)('div', {
                    className: m.showMoreContent,
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: 'text-md/semibold',
                            color: 'interactive-normal',
                            children: n ? h.intl.string(h.t['vtfc4+']) : h.intl.string(h.t.ZDRyur)
                        }),
                        n
                            ? (0, i.jsx)(c.ChevronSmallUpIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: m.showMoreButtonIcon
                              })
                            : (0, i.jsx)(c.ChevronSmallDownIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: m.showMoreButtonIcon
                              })
                    ]
                }),
            [n]
        );
    return (0, i.jsxs)(c.Clickable, {
        className: m.showMoreButton,
        onClick: t,
        children: [(0, i.jsx)('div', { className: m.divider }), l, (0, i.jsx)('div', { className: m.divider })]
    });
}
t.Z = function (e) {
    var t, n;
    let { application: l } = e,
        a = null === (t = l.directory_entry) || void 0 === t ? void 0 : t.detailed_description,
        o = null === (n = l.directory_entry) || void 0 === n ? void 0 : n.short_description,
        s = r.useMemo(
            () =>
                null != a && a.length > 0
                    ? (0, i.jsx)(f, {
                          description: a,
                          supportsMarkdown: !0
                      })
                    : null != o && o.length > 0
                      ? (0, i.jsx)(f, {
                            description: o,
                            supportsMarkdown: !1
                        })
                      : null,
            [a, o]
        );
    return null == s
        ? null
        : (0, i.jsxs)('div', {
              className: m.overviewContainer,
              children: [
                  (0, i.jsx)(c.Heading, {
                      variant: 'heading-lg/semibold',
                      color: 'header-primary',
                      children: h.intl.string(h.t.txraKS)
                  }),
                  s
              ]
          });
};

n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(302454),
    o = n.n(l),
    c = n(481060),
    d = n(939893),
    u = n(241209),
    _ = n(689938),
    E = n(408899);
let h = o().parserFor(d.Z),
    m = o().reactFor(o().ruleOutput(d.Z, 'react'));
function I(e) {
    let { description: t, supportsMarkdown: n } = e,
        [s, l] = a.useState(!1),
        o = a.useRef(null);
    a.useEffect(() => {
        if (null == o.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, i;
            let a = null !== (n = null === (e = o.current) || void 0 === e ? void 0 : e.scrollHeight) && void 0 !== n ? n : 0;
            l(a - (null !== (i = null === (t = o.current) || void 0 === t ? void 0 : t.clientHeight) && void 0 !== i ? i : 0) > 1);
        });
        return e.observe(o.current), () => e.disconnect();
    }, []);
    let [d, _] = a.useState(!1),
        I = a.useCallback(() => {
            _((e) => !e);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                ref: o,
                className: r()({
                    [E.descriptionClamp]: !d,
                    [E.descriptionClampSafari]: !d && 'Safari' === platform.name
                }),
                children: n
                    ? (0, i.jsx)(u.Z, {
                          className: E.detailedDescription,
                          parser: h,
                          output: m,
                          state: { allowLinks: !0 },
                          children: t
                      })
                    : (0, i.jsx)(c.Text, {
                          variant: 'text-md/normal',
                          color: 'text-normal',
                          children: t
                      })
            }),
            s || d
                ? (0, i.jsx)(p, {
                      isShowingMore: d,
                      onToggle: I
                  })
                : null
        ]
    });
}
function p(e) {
    let { onToggle: t, isShowingMore: n } = e,
        s = a.useMemo(
            () =>
                (0, i.jsxs)('div', {
                    className: E.showMoreContent,
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: 'text-md/semibold',
                            color: 'interactive-normal',
                            children: n ? _.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS : _.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
                        }),
                        n
                            ? (0, i.jsx)(c.ChevronSmallUpIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: E.showMoreButtonIcon
                              })
                            : (0, i.jsx)(c.ChevronSmallDownIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: E.showMoreButtonIcon
                              })
                    ]
                }),
            [n]
        );
    return (0, i.jsxs)(c.Clickable, {
        className: E.showMoreButton,
        onClick: t,
        children: [(0, i.jsx)('div', { className: E.divider }), s, (0, i.jsx)('div', { className: E.divider })]
    });
}
t.Z = function (e) {
    var t, n;
    let { application: s } = e,
        r = null === (t = s.directory_entry) || void 0 === t ? void 0 : t.detailed_description,
        l = null === (n = s.directory_entry) || void 0 === n ? void 0 : n.short_description,
        o = a.useMemo(
            () =>
                null != r && r.length > 0
                    ? (0, i.jsx)(I, {
                          description: r,
                          supportsMarkdown: !0
                      })
                    : null != l && l.length > 0
                      ? (0, i.jsx)(I, {
                            description: l,
                            supportsMarkdown: !1
                        })
                      : null,
            [r, l]
        );
    return null == o
        ? null
        : (0, i.jsxs)('div', {
              className: E.overviewContainer,
              children: [
                  (0, i.jsx)(c.Heading, {
                      variant: 'heading-lg/semibold',
                      color: 'header-primary',
                      children: _.Z.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
                  }),
                  o
              ]
          });
};

n(47120);
var a = n(200651),
    i = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(100621),
    o = n(481060),
    c = n(787014),
    d = n(454585),
    u = n(456269),
    m = n(470623),
    h = n(981631),
    g = n(388032),
    x = n(820634),
    f = n(554034);
t.Z = i.memo(function (e) {
    let { channel: t, onChange: r } = e,
        p = (0, m.AF)(),
        { guidelinesOpen: C } = (0, m.xH)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }),
        v = (0, u.r_)(t),
        [b, j] = i.useState(!1),
        _ = i.useCallback(
            (e) => {
                if (null == e) return;
                let t = e.clientHeight >= 220;
                t !== b && j(t);
            },
            [b]
        );
    i.useLayoutEffect(() => {
        setTimeout(r, 350);
    }, [C, r]);
    let [I, T] = i.useState(!C),
        N = (0, o.useSpring)({
            opacity: C ? 1 : 0,
            maxHeight: C ? 500 : 0,
            config: { duration: 300 },
            onRest: () => T(!C)
        });
    return null != t.topic && t.topic.length > 0
        ? (0, a.jsx)(s.animated.div, {
              style: N,
              className: I ? x.hiddenVisually : void 0,
              children: (0, a.jsxs)('div', {
                  className: x.container,
                  children: [
                      (0, a.jsxs)('div', {
                          className: x.headerContainer,
                          children: [
                              (0, a.jsxs)(o.Heading, {
                                  variant: 'heading-lg/semibold',
                                  className: x.guidelinesHeader,
                                  children: [
                                      (0, a.jsx)(o.BookCheckIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 20,
                                          height: 20
                                      }),
                                      g.intl.string(g.t['4d4T4u']),
                                      v &&
                                          (0, a.jsx)(o.Clickable, {
                                              onClick: () => {
                                                  c.ZP.open(t.id, void 0, h.ZfP.TOPIC);
                                              },
                                              tag: 'span',
                                              className: x.clickable,
                                              children: (0, a.jsx)(o.PencilIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor'
                                              })
                                          })
                                  ]
                              }),
                              (0, a.jsx)(o.Clickable, {
                                  'aria-label': g.intl.string(g.t.cpT0Cg),
                                  className: x.clickable,
                                  onClick: () => {
                                      p.getState().setGuidelinesOpen(!1);
                                  },
                                  children: (0, a.jsx)(o.XSmallIcon, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  })
                              })
                          ]
                      }),
                      (0, a.jsxs)('div', {
                          className: x.descriptionContainer,
                          children: [
                              (0, a.jsx)(o.Text, {
                                  selectable: !0,
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  style: { maxHeight: 220 },
                                  className: l()(x.guidelines, f.markup),
                                  children: (0, a.jsx)('div', {
                                      ref: _,
                                      children: d.Z.parseForumPostGuidelines(t.topic, !0, {
                                          channelId: t.id,
                                          allowHeading: !0,
                                          allowList: !0
                                      })
                                  })
                              }),
                              b &&
                                  (0, a.jsxs)('div', {
                                      className: x.showMore,
                                      children: [
                                          (0, a.jsx)('div', { className: x.gradient }),
                                          (0, a.jsx)('div', {
                                              className: x.linkContainer,
                                              children: (0, a.jsx)(o.Clickable, {
                                                  className: x.showMoreLink,
                                                  onClick: () => {
                                                      (0, o.openModalLazy)(async () => {
                                                          let { default: e } = await n.e('78712').then(n.bind(n, 223164));
                                                          return (n) =>
                                                              (0, a.jsx)(e, {
                                                                  ...n,
                                                                  channel: t
                                                              });
                                                      });
                                                  },
                                                  children: (0, a.jsxs)(o.Text, {
                                                      variant: 'text-sm/semibold',
                                                      color: 'text-brand',
                                                      className: x.showMoreText,
                                                      children: [
                                                          g.intl.string(g.t.Vu7odH),
                                                          (0, a.jsx)(o.MaximizeIcon, {
                                                              size: 'xs',
                                                              color: 'currentColor',
                                                              className: x.showMoreIcon
                                                          })
                                                      ]
                                                  })
                                              })
                                          })
                                      ]
                                  })
                          ]
                      })
                  ]
              })
          })
        : null;
});

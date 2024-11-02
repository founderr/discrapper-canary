t.d(n, {
    Z: function () {
        return b;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(392711),
    a = t.n(r),
    o = t(481060),
    s = t(139387),
    d = t(835473),
    c = t(471445),
    u = t(925329),
    m = t(163400),
    h = t(327934),
    p = t(981631),
    g = t(388032),
    f = t(778429);
function x(e) {
    let { applicationId: n, channels: t } = e,
        l = (0, d.q)(n);
    return 0 === t.length || null == l
        ? null
        : (0, i.jsxs)('div', {
              className: f.applicationGroup,
              children: [
                  (0, i.jsxs)('div', {
                      className: f.header,
                      children: [
                          (0, i.jsx)(u.Z, {
                              game: l,
                              size: u.Z.Sizes.XSMALL
                          }),
                          (0, i.jsx)(o.Heading, {
                              variant: 'heading-md/semibold',
                              children: null == l ? void 0 : l.name
                          })
                      ]
                  }),
                  t.map((e) => {
                      var n;
                      return (0, i.jsx)(
                          h.I,
                          {
                              channel: e,
                              application: l,
                              name: e.name,
                              icon: null !== (n = (0, c.KS)(e)) && void 0 !== n ? n : void 0,
                              iconWrapperClassName: f.iconwrapper,
                              hasNextSection: !0,
                              trailing: (0, i.jsx)(o.PencilIcon, { size: 'xs' })
                          },
                          e.id
                      );
                  })
              ]
          });
}
function b(e) {
    let { guild: n } = e,
        t = (0, m.F)(n.id),
        r = a().groupBy(t, (e) => {
            var n;
            return null === (n = e.linkedLobby) || void 0 === n ? void 0 : n.application_id;
        }),
        d = Object.keys(r);
    return (
        l.useEffect(() => {
            0 === t.length && s.Z.setSection(p.b4C.OVERVIEW);
        }, [t]),
        (0, i.jsxs)(o.FormSection, {
            children: [
                (0, i.jsx)(o.FormText, {
                    type: o.FormTextTypes.DESCRIPTION,
                    children: g.intl.format(g.t['9gsSLi'], { helpdeskArticle: '#' })
                }),
                (0, i.jsx)(o.FormDivider, { className: f.headerDivider }),
                d.map((e) =>
                    (0, i.jsx)(
                        x,
                        {
                            applicationId: e,
                            channels: r[e]
                        },
                        e
                    )
                )
            ]
        })
    );
}

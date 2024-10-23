t.d(n, {
    Z: function () {
        return h;
    }
});
var i = t(200651),
    a = t(192379),
    l = t(392711),
    s = t.n(l),
    o = t(481060),
    r = t(139387),
    d = t(835473),
    c = t(471445),
    u = t(925329),
    I = t(163400),
    m = t(327934),
    _ = t(981631),
    N = t(689938),
    E = t(778429);
function T(e) {
    let { applicationId: n, channels: t } = e,
        a = (0, d.q)(n);
    return 0 === t.length || null == a
        ? null
        : (0, i.jsxs)('div', {
              className: E.applicationGroup,
              children: [
                  (0, i.jsxs)('div', {
                      className: E.header,
                      children: [
                          (0, i.jsx)(u.Z, {
                              game: a,
                              size: u.Z.Sizes.XSMALL
                          }),
                          (0, i.jsx)(o.Heading, {
                              variant: 'heading-md/semibold',
                              children: null == a ? void 0 : a.name
                          })
                      ]
                  }),
                  t.map((e) => {
                      var n;
                      return (0, i.jsx)(
                          m.I,
                          {
                              channel: e,
                              application: a,
                              name: e.name,
                              icon: null !== (n = (0, c.KS)(e)) && void 0 !== n ? n : void 0,
                              iconWrapperClassName: E.iconwrapper,
                              hasNextSection: !0,
                              trailing: (0, i.jsx)(o.PencilIcon, { size: 'xs' })
                          },
                          e.id
                      );
                  })
              ]
          });
}
function h(e) {
    let { guild: n } = e,
        t = (0, I.F)(n.id),
        l = s().groupBy(t, (e) => {
            var n;
            return null === (n = e.linkedLobby) || void 0 === n ? void 0 : n.application_id;
        }),
        d = Object.keys(l);
    return (
        a.useEffect(() => {
            0 === t.length && r.Z.setSection(_.b4C.OVERVIEW);
        }, [t]),
        (0, i.jsxs)(o.FormSection, {
            children: [
                (0, i.jsx)(o.FormText, {
                    type: o.FormTextTypes.DESCRIPTION,
                    children: N.Z.Messages.INTEGRATIONS_LINKED_LOBBY_CHANNELS_SYNCING_INFO.format({ helpdeskArticle: '#' })
                }),
                (0, i.jsx)(o.FormDivider, { className: E.headerDivider }),
                d.map((e) =>
                    (0, i.jsx)(
                        T,
                        {
                            applicationId: e,
                            channels: l[e]
                        },
                        e
                    )
                )
            ]
        })
    );
}

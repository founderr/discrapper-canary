n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120),
    n(653041),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(780384),
    s = n(481060),
    c = n(794295),
    d = n(410030),
    u = n(726542),
    p = n(626135),
    m = n(463571),
    _ = n(887706),
    h = n(214912),
    f = n(290247),
    g = n(981631),
    v = n(388032),
    x = n(319333);
let I = (0, v.getAvailableLocales)();
function C(e) {
    var t, n, a;
    let { onClick: r, url: l, children: c } = e,
        p = (0, d.ZP)(),
        m = u.Z.getByUrl(l),
        _ = (0, o.wj)(p) ? (null == m ? void 0 : null === (t = m.icon) || void 0 === t ? void 0 : t.darkSVG) : null == m ? void 0 : null === (n = m.icon) || void 0 === n ? void 0 : n.lightSVG;
    return (0, i.jsx)(N, {
        icon: void 0 === _ ? s.LinkIcon : void 0,
        imageSrc: _,
        onClick: r,
        url: l,
        type: null !== (a = null == m ? void 0 : m.name) && void 0 !== a ? a : 'website',
        children: c
    });
}
function N(e) {
    let { icon: t, imageSrc: n, iconColor: a, url: r, type: o, children: d, onClick: u } = e,
        p = (0, _.Z)(),
        m = null;
    null != t
        ? (m = (0, i.jsx)(t, {
              className: x.listIcon,
              color: null != a ? a : 'currentColor',
              width: 20,
              height: 20,
              size: 'custom'
          }))
        : null != n &&
          (m = (0, i.jsx)('img', {
              className: x.listImage,
              src: n,
              alt: ''
          }));
    let h = (0, i.jsxs)(i.Fragment, {
        children: [
            m,
            (0, i.jsx)(s.Text, {
                className: x.listText,
                variant: 'text-md/normal',
                selectable: !0,
                children: d
            })
        ]
    });
    return (0, i.jsx)(c.Z, {
        href: r,
        className: l()(x.listItem, x.linkItem),
        onClick: () => (u(r, o), !1),
        trusted: !p,
        useDefaultUnderlineStyles: !1,
        children: h
    });
}
function b(e) {
    var t, n, r;
    let { application: o, guildId: c, className: d, onViewCategory: u, onClickGuildWidget: _ } = e,
        [b, S] = a.useState(null),
        j = [],
        T = null !== (n = null == o ? void 0 : null === (t = o.directory_entry) || void 0 === t ? void 0 : t.external_urls) && void 0 !== n ? n : [];
    a.useEffect(() => {
        var e;
        if ((null === (e = o.directory_entry) || void 0 === e ? void 0 : e.supported_locales) !== void 0) {
            let e = new Set(o.directory_entry.supported_locales);
            S(I.filter((t) => e.has(t.value)).map((e) => v.intl.string(e.localizedName)));
        }
    }, [o.directory_entry]);
    let y = (e, t) => {
        p.default.track(g.rMx.APP_DIRECTORY_APPLICATION_EXTERNAL_LINK_CLICKED, {
            application_id: o.id,
            guild_id: c,
            type: t,
            url: e
        });
    };
    return (
        null != o.categories &&
            o.categories.length > 0 &&
            j.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Heading, {
                            className: x.sectionHeader,
                            variant: 'eyebrow',
                            children: v.intl.string(v.t.s7ialZ)
                        }),
                        (0, i.jsx)('div', {
                            className: x.categories,
                            children: (null !== (r = o.categories) && void 0 !== r ? r : []).map((e) => {
                                let t = new URLSearchParams();
                                return (
                                    t.set('category_id', e.id.toString()),
                                    (0, i.jsx)(
                                        m.Z,
                                        {
                                            href: ''.concat(g.Z5c.APPLICATION_DIRECTORY_SEARCH, '?').concat(t),
                                            children: (0, i.jsx)(s.Clickable, {
                                                className: x.category,
                                                onClick: () => u(e),
                                                children: (0, i.jsx)(s.Text, {
                                                    variant: 'text-sm/normal',
                                                    color: 'header-primary',
                                                    children: e.name
                                                })
                                            })
                                        },
                                        e.id
                                    )
                                );
                            })
                        })
                    ]
                })
            ),
        null != b &&
            b.length > 0 &&
            j.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Heading, {
                            className: x.sectionHeader,
                            variant: 'eyebrow',
                            children: v.intl.string(v.t.Fbjlu7)
                        }),
                        (0, i.jsx)(f.Z, { supportedLanguages: b })
                    ]
                })
            ),
        (null != o.terms_of_service_url || null != o.privacy_policy_url || T.length > 0) &&
            j.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Heading, {
                            className: x.sectionHeader,
                            variant: 'eyebrow',
                            children: v.intl.string(v.t.l6DP2t)
                        }),
                        T.map((e, t) =>
                            (0, i.jsx)(
                                C,
                                {
                                    url: e.url,
                                    onClick: y,
                                    children: e.name
                                },
                                t
                            )
                        ),
                        null != o.terms_of_service_url
                            ? (0, i.jsx)(N, {
                                  icon: s.LinkIcon,
                                  onClick: y,
                                  url: o.terms_of_service_url,
                                  type: 'tos',
                                  children: v.intl.string(v.t.s7STcX)
                              })
                            : null,
                        null != o.privacy_policy_url
                            ? (0, i.jsx)(N, {
                                  icon: s.LockIcon,
                                  onClick: y,
                                  url: o.privacy_policy_url,
                                  type: 'policy',
                                  children: v.intl.string(v.t.kH3JR0)
                              })
                            : null
                    ]
                })
            ),
        null != o.guild &&
            o.guild.features.includes(g.oNc.DISCOVERABLE) &&
            j.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Heading, {
                            className: x.sectionHeader,
                            variant: 'eyebrow',
                            children: v.intl.string(v.t.KJEO29)
                        }),
                        (0, i.jsx)(h.Z, {
                            guild: o.guild,
                            onClick: _
                        })
                    ]
                })
            ),
        (0, i.jsx)('div', {
            className: l()(x.sidebar, d),
            children:
                j.length > 0
                    ? (0, i.jsx)(i.Fragment, {
                          children: j.map((e, t) =>
                              (0, i.jsx)(
                                  'div',
                                  {
                                      className: x.section,
                                      children: e
                                  },
                                  t
                              )
                          )
                      })
                    : null
        })
    );
}

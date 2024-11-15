n.d(t, {
    Z: function () {
        return N;
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
    I = n(748800);
let x = (0, v.getAvailableLocales)();
function C(e) {
    var t, n, a;
    let { onClick: r, url: l, children: c } = e,
        p = (0, d.ZP)(),
        m = u.Z.getByUrl(l),
        _ = (0, o.wj)(p) ? (null == m ? void 0 : null === (t = m.icon) || void 0 === t ? void 0 : t.darkSVG) : null == m ? void 0 : null === (n = m.icon) || void 0 === n ? void 0 : n.lightSVG;
    return (0, i.jsx)(S, {
        icon: void 0 === _ ? s.LinkIcon : void 0,
        imageSrc: _,
        onClick: r,
        url: l,
        type: null !== (a = null == m ? void 0 : m.name) && void 0 !== a ? a : 'website',
        children: c
    });
}
function S(e) {
    let { icon: t, imageSrc: n, iconColor: a, url: r, type: o, children: d, onClick: u } = e,
        p = (0, _.Z)(),
        m = null;
    null != t
        ? (m = (0, i.jsx)(t, {
              className: I.listIcon,
              color: null != a ? a : 'currentColor',
              width: 20,
              height: 20,
              size: 'custom'
          }))
        : null != n &&
          (m = (0, i.jsx)('img', {
              className: I.listImage,
              src: n,
              alt: ''
          }));
    let h = (0, i.jsxs)(i.Fragment, {
        children: [
            m,
            (0, i.jsx)(s.Text, {
                className: I.listText,
                variant: 'text-md/normal',
                selectable: !0,
                children: d
            })
        ]
    });
    return (0, i.jsx)(c.Z, {
        href: r,
        className: l()(I.listItem, I.linkItem),
        onClick: () => (u(r, o), !1),
        trusted: !p,
        useDefaultUnderlineStyles: !1,
        children: h
    });
}
function N(e) {
    var t, n, r;
    let { application: o, guildId: c, className: d, onViewCategory: u, onClickGuildWidget: _ } = e,
        [N, b] = a.useState(null),
        T = [],
        j = null !== (n = null == o ? void 0 : null === (t = o.directory_entry) || void 0 === t ? void 0 : t.external_urls) && void 0 !== n ? n : [];
    a.useEffect(() => {
        var e;
        if ((null === (e = o.directory_entry) || void 0 === e ? void 0 : e.supported_locales) !== void 0) {
            let e = new Set(o.directory_entry.supported_locales);
            b(x.filter((t) => e.has(t.value)).map((e) => v.intl.string(e.localizedName)));
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
            T.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Heading, {
                            className: I.sectionHeader,
                            variant: 'eyebrow',
                            children: v.intl.string(v.t.s7ialZ)
                        }),
                        (0, i.jsx)('div', {
                            className: I.categories,
                            children: (null !== (r = o.categories) && void 0 !== r ? r : []).map((e) => {
                                let t = new URLSearchParams();
                                return (
                                    t.set('category_id', e.id.toString()),
                                    (0, i.jsx)(
                                        m.Z,
                                        {
                                            href: ''.concat(g.Z5c.APPLICATION_DIRECTORY_SEARCH, '?').concat(t),
                                            children: (0, i.jsx)(s.Clickable, {
                                                className: I.category,
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
        null != N &&
            N.length > 0 &&
            T.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Heading, {
                            className: I.sectionHeader,
                            variant: 'eyebrow',
                            children: v.intl.string(v.t.Fbjlu7)
                        }),
                        (0, i.jsx)(f.Z, { supportedLanguages: N })
                    ]
                })
            ),
        (null != o.terms_of_service_url || null != o.privacy_policy_url || j.length > 0) &&
            T.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Heading, {
                            className: I.sectionHeader,
                            variant: 'eyebrow',
                            children: v.intl.string(v.t.l6DP2t)
                        }),
                        j.map((e, t) =>
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
                            ? (0, i.jsx)(S, {
                                  icon: s.LinkIcon,
                                  onClick: y,
                                  url: o.terms_of_service_url,
                                  type: 'tos',
                                  children: v.intl.string(v.t.s7STcX)
                              })
                            : null,
                        null != o.privacy_policy_url
                            ? (0, i.jsx)(S, {
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
            T.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Heading, {
                            className: I.sectionHeader,
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
            className: l()(I.sidebar, d),
            children:
                T.length > 0
                    ? (0, i.jsx)(i.Fragment, {
                          children: T.map((e, t) =>
                              (0, i.jsx)(
                                  'div',
                                  {
                                      className: I.section,
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

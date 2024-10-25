t.d(n, {
    Z: function () {
        return P;
    }
}),
    t(47120),
    t(653041),
    t(610138),
    t(216116),
    t(78328),
    t(815648);
var i = t(200651),
    a = t(192379),
    r = t(120356),
    o = t.n(r),
    s = t(780384),
    l = t(481060),
    c = t(794295),
    d = t(410030),
    u = t(726542),
    _ = t(626135),
    p = t(463571),
    m = t(887706),
    I = t(214912),
    f = t(290247),
    h = t(981631),
    g = t(689938),
    C = t(319333);
let b = g.Z.getAvailableLocales();
function x(e) {
    var n, t, a;
    let { onClick: r, url: o, children: c } = e,
        _ = (0, d.ZP)(),
        p = u.Z.getByUrl(o),
        m = (0, s.wj)(_) ? (null == p ? void 0 : null === (n = p.icon) || void 0 === n ? void 0 : n.darkSVG) : null == p ? void 0 : null === (t = p.icon) || void 0 === t ? void 0 : t.lightSVG;
    return (0, i.jsx)(v, {
        icon: void 0 === m ? l.LinkIcon : void 0,
        imageSrc: m,
        onClick: r,
        url: o,
        type: null !== (a = null == p ? void 0 : p.name) && void 0 !== a ? a : 'website',
        children: c
    });
}
function v(e) {
    let { icon: n, imageSrc: t, iconColor: a, url: r, type: s, children: d, onClick: u } = e,
        _ = (0, m.Z)(),
        p = null;
    null != n
        ? (p = (0, i.jsx)(n, {
              className: C.listIcon,
              color: null != a ? a : 'currentColor',
              width: 20,
              height: 20,
              size: 'custom'
          }))
        : null != t &&
          (p = (0, i.jsx)('img', {
              className: C.listImage,
              src: t,
              alt: ''
          }));
    let I = (0, i.jsxs)(i.Fragment, {
        children: [
            p,
            (0, i.jsx)(l.Text, {
                className: C.listText,
                variant: 'text-md/normal',
                selectable: !0,
                children: d
            })
        ]
    });
    return (0, i.jsx)(c.Z, {
        href: r,
        className: o()(C.listItem, C.linkItem),
        onClick: () => (u(r, s), !1),
        trusted: !_,
        useDefaultUnderlineStyles: !1,
        children: I
    });
}
function P(e) {
    var n, t, r;
    let { application: s, guildId: c, className: d, onViewCategory: u, onClickGuildWidget: m } = e,
        [P, E] = a.useState(null),
        S = [],
        T = null !== (t = null == s ? void 0 : null === (n = s.directory_entry) || void 0 === n ? void 0 : n.external_urls) && void 0 !== t ? t : [];
    a.useEffect(() => {
        var e;
        if ((null === (e = s.directory_entry) || void 0 === e ? void 0 : e.supported_locales) !== void 0) {
            let e = new Set(s.directory_entry.supported_locales);
            E(b.filter((n) => e.has(n.value)).map((e) => e.localizedName));
        }
    }, [s.directory_entry]);
    let N = (e, n) => {
        _.default.track(h.rMx.APP_DIRECTORY_APPLICATION_EXTERNAL_LINK_CLICKED, {
            application_id: s.id,
            guild_id: c,
            type: n,
            url: e
        });
    };
    return (
        null != s.categories &&
            s.categories.length > 0 &&
            S.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(l.Heading, {
                            className: C.sectionHeader,
                            variant: 'eyebrow',
                            children: g.Z.Messages.APP_DIRECTORY_PROFILE_CATEGORIES_HEADING
                        }),
                        (0, i.jsx)('div', {
                            className: C.categories,
                            children: (null !== (r = s.categories) && void 0 !== r ? r : []).map((e) => {
                                let n = new URLSearchParams();
                                return (
                                    n.set('category_id', e.id.toString()),
                                    (0, i.jsx)(
                                        p.Z,
                                        {
                                            href: ''.concat(h.Z5c.APPLICATION_DIRECTORY_SEARCH, '?').concat(n),
                                            children: (0, i.jsx)(l.Clickable, {
                                                className: C.category,
                                                onClick: () => u(e),
                                                children: (0, i.jsx)(l.Text, {
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
        null != P &&
            P.length > 0 &&
            S.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(l.Heading, {
                            className: C.sectionHeader,
                            variant: 'eyebrow',
                            children: g.Z.Messages.APP_DIRECTORY_PROFILE_LANGUAGES_HEADING
                        }),
                        (0, i.jsx)(f.Z, { supportedLanguages: P })
                    ]
                })
            ),
        (null != s.terms_of_service_url || null != s.privacy_policy_url || T.length > 0) &&
            S.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(l.Heading, {
                            className: C.sectionHeader,
                            variant: 'eyebrow',
                            children: g.Z.Messages.APP_DIRECTORY_PROFILE_LINKS_HEADING
                        }),
                        T.map((e, n) =>
                            (0, i.jsx)(
                                x,
                                {
                                    url: e.url,
                                    onClick: N,
                                    children: e.name
                                },
                                n
                            )
                        ),
                        null != s.terms_of_service_url
                            ? (0, i.jsx)(v, {
                                  icon: l.LinkIcon,
                                  onClick: N,
                                  url: s.terms_of_service_url,
                                  type: 'tos',
                                  children: g.Z.Messages.APP_DIRECTORY_PROFILE_TERMS_LINK
                              })
                            : null,
                        null != s.privacy_policy_url
                            ? (0, i.jsx)(v, {
                                  icon: l.LockIcon,
                                  onClick: N,
                                  url: s.privacy_policy_url,
                                  type: 'policy',
                                  children: g.Z.Messages.APP_DIRECTORY_PROFILE_PRIVACY_LINK
                              })
                            : null
                    ]
                })
            ),
        null != s.guild &&
            s.guild.features.includes(h.oNc.DISCOVERABLE) &&
            S.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(l.Heading, {
                            className: C.sectionHeader,
                            variant: 'eyebrow',
                            children: g.Z.Messages.APP_DIRECTORY_PROFILE_SERVER_HEADING
                        }),
                        (0, i.jsx)(I.Z, {
                            guild: s.guild,
                            onClick: m
                        })
                    ]
                })
            ),
        (0, i.jsx)('div', {
            className: o()(C.sidebar, d),
            children:
                S.length > 0
                    ? (0, i.jsx)(i.Fragment, {
                          children: S.map((e, n) =>
                              (0, i.jsx)(
                                  'div',
                                  {
                                      className: C.section,
                                      children: e
                                  },
                                  n
                              )
                          )
                      })
                    : null
        })
    );
}

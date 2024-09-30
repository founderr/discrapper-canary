a.d(n, {
    Z: function () {
        return P;
    }
}),
    a(47120),
    a(653041),
    a(610138),
    a(216116),
    a(78328),
    a(815648);
var i = a(735250),
    t = a(470079),
    r = a(120356),
    l = a.n(r),
    s = a(780384),
    o = a(481060),
    c = a(794295),
    d = a(410030),
    u = a(726542),
    _ = a(626135),
    m = a(463571),
    p = a(887706),
    g = a(214912),
    I = a(290247),
    h = a(981631),
    v = a(689938),
    x = a(319333);
let f = v.Z.getAvailableLocales();
function C(e) {
    var n, a, t;
    let { onClick: r, url: l, children: c } = e,
        _ = (0, d.ZP)(),
        m = u.Z.getByUrl(l),
        p = (0, s.wj)(_) ? (null == m ? void 0 : null === (n = m.icon) || void 0 === n ? void 0 : n.darkSVG) : null == m ? void 0 : null === (a = m.icon) || void 0 === a ? void 0 : a.lightSVG;
    return (0, i.jsx)(E, {
        icon: void 0 === p ? o.LinkIcon : void 0,
        imageSrc: p,
        onClick: r,
        url: l,
        type: null !== (t = null == m ? void 0 : m.name) && void 0 !== t ? t : 'website',
        children: c
    });
}
function E(e) {
    let { icon: n, imageSrc: a, iconColor: t, url: r, type: s, children: d, onClick: u } = e,
        _ = (0, p.Z)(),
        m = null;
    null != n
        ? (m = (0, i.jsx)(n, {
              className: x.listIcon,
              color: null != t ? t : 'currentColor',
              width: 20,
              height: 20,
              size: 'custom'
          }))
        : null != a &&
          (m = (0, i.jsx)('img', {
              className: x.listImage,
              src: a,
              alt: ''
          }));
    let g = (0, i.jsxs)(i.Fragment, {
        children: [
            m,
            (0, i.jsx)(o.Text, {
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
        onClick: () => (u(r, s), !1),
        trusted: !_,
        useDefaultUnderlineStyles: !1,
        children: g
    });
}
function P(e) {
    var n, a, r;
    let { application: s, guildId: c, className: d, onViewCategory: u, onClickGuildWidget: p } = e,
        [P, R] = t.useState(null),
        b = [],
        A = null !== (a = null == s ? void 0 : null === (n = s.directory_entry) || void 0 === n ? void 0 : n.external_urls) && void 0 !== a ? a : [];
    t.useEffect(() => {
        var e;
        if ((null === (e = s.directory_entry) || void 0 === e ? void 0 : e.supported_locales) !== void 0) {
            let e = new Set(s.directory_entry.supported_locales);
            R(f.filter((n) => e.has(n.value)).map((e) => e.localizedName));
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
            b.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.Heading, {
                            className: x.sectionHeader,
                            variant: 'eyebrow',
                            children: v.Z.Messages.APP_DIRECTORY_PROFILE_CATEGORIES_HEADING
                        }),
                        (0, i.jsx)('div', {
                            className: x.categories,
                            children: (null !== (r = s.categories) && void 0 !== r ? r : []).map((e) => {
                                let n = new URLSearchParams();
                                return (
                                    n.set('category_id', e.id.toString()),
                                    (0, i.jsx)(
                                        m.Z,
                                        {
                                            href: ''.concat(h.Z5c.APPLICATION_DIRECTORY_SEARCH, '?').concat(n),
                                            children: (0, i.jsx)(o.Clickable, {
                                                className: x.category,
                                                onClick: () => u(e),
                                                children: (0, i.jsx)(o.Text, {
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
            b.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.Heading, {
                            className: x.sectionHeader,
                            variant: 'eyebrow',
                            children: v.Z.Messages.APP_DIRECTORY_PROFILE_LANGUAGES_HEADING
                        }),
                        (0, i.jsx)(I.Z, { supportedLanguages: P })
                    ]
                })
            ),
        (null != s.terms_of_service_url || null != s.privacy_policy_url || A.length > 0) &&
            b.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.Heading, {
                            className: x.sectionHeader,
                            variant: 'eyebrow',
                            children: v.Z.Messages.APP_DIRECTORY_PROFILE_LINKS_HEADING
                        }),
                        A.map((e, n) =>
                            (0, i.jsx)(
                                C,
                                {
                                    url: e.url,
                                    onClick: N,
                                    children: e.name
                                },
                                n
                            )
                        ),
                        null != s.terms_of_service_url
                            ? (0, i.jsx)(E, {
                                  icon: o.LinkIcon,
                                  onClick: N,
                                  url: s.terms_of_service_url,
                                  type: 'tos',
                                  children: v.Z.Messages.APP_DIRECTORY_PROFILE_TERMS_LINK
                              })
                            : null,
                        null != s.privacy_policy_url
                            ? (0, i.jsx)(E, {
                                  icon: o.LockIcon,
                                  onClick: N,
                                  url: s.privacy_policy_url,
                                  type: 'policy',
                                  children: v.Z.Messages.APP_DIRECTORY_PROFILE_PRIVACY_LINK
                              })
                            : null
                    ]
                })
            ),
        null != s.guild &&
            s.guild.features.includes(h.oNc.DISCOVERABLE) &&
            b.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.Heading, {
                            className: x.sectionHeader,
                            variant: 'eyebrow',
                            children: v.Z.Messages.APP_DIRECTORY_PROFILE_SERVER_HEADING
                        }),
                        (0, i.jsx)(g.Z, {
                            guild: s.guild,
                            onClick: p
                        })
                    ]
                })
            ),
        (0, i.jsx)('div', {
            className: l()(x.sidebar, d),
            children:
                b.length > 0
                    ? (0, i.jsx)(i.Fragment, {
                          children: b.map((e, n) =>
                              (0, i.jsx)(
                                  'div',
                                  {
                                      className: x.section,
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

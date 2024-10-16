t.d(n, {
    Z: function () {
        return x;
    }
}),
    t(47120),
    t(653041),
    t(610138),
    t(216116),
    t(78328),
    t(815648);
var i = t(735250),
    a = t(470079),
    r = t(120356),
    o = t.n(r),
    l = t(780384),
    s = t(481060),
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
let v = g.Z.getAvailableLocales();
function b(e) {
    var n, t, a;
    let { onClick: r, url: o, children: c } = e,
        _ = (0, d.ZP)(),
        p = u.Z.getByUrl(o),
        m = (0, l.wj)(_) ? (null == p ? void 0 : null === (n = p.icon) || void 0 === n ? void 0 : n.darkSVG) : null == p ? void 0 : null === (t = p.icon) || void 0 === t ? void 0 : t.lightSVG;
    return (0, i.jsx)(E, {
        icon: void 0 === m ? s.LinkIcon : void 0,
        imageSrc: m,
        onClick: r,
        url: o,
        type: null !== (a = null == p ? void 0 : p.name) && void 0 !== a ? a : 'website',
        children: c
    });
}
function E(e) {
    let { icon: n, imageSrc: t, iconColor: a, url: r, type: l, children: d, onClick: u } = e,
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
            (0, i.jsx)(s.Text, {
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
        onClick: () => (u(r, l), !1),
        trusted: !_,
        useDefaultUnderlineStyles: !1,
        children: I
    });
}
function x(e) {
    var n, t, r;
    let { application: l, guildId: c, className: d, onViewCategory: u, onClickGuildWidget: m } = e,
        [x, T] = a.useState(null),
        P = [],
        S = null !== (t = null == l ? void 0 : null === (n = l.directory_entry) || void 0 === n ? void 0 : n.external_urls) && void 0 !== t ? t : [];
    a.useEffect(() => {
        var e;
        if ((null === (e = l.directory_entry) || void 0 === e ? void 0 : e.supported_locales) !== void 0) {
            let e = new Set(l.directory_entry.supported_locales);
            T(v.filter((n) => e.has(n.value)).map((e) => e.localizedName));
        }
    }, [l.directory_entry]);
    let A = (e, n) => {
        _.default.track(h.rMx.APP_DIRECTORY_APPLICATION_EXTERNAL_LINK_CLICKED, {
            application_id: l.id,
            guild_id: c,
            type: n,
            url: e
        });
    };
    return (
        null != l.categories &&
            l.categories.length > 0 &&
            P.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Heading, {
                            className: C.sectionHeader,
                            variant: 'eyebrow',
                            children: g.Z.Messages.APP_DIRECTORY_PROFILE_CATEGORIES_HEADING
                        }),
                        (0, i.jsx)('div', {
                            className: C.categories,
                            children: (null !== (r = l.categories) && void 0 !== r ? r : []).map((e) => {
                                let n = new URLSearchParams();
                                return (
                                    n.set('category_id', e.id.toString()),
                                    (0, i.jsx)(
                                        p.Z,
                                        {
                                            href: ''.concat(h.Z5c.APPLICATION_DIRECTORY_SEARCH, '?').concat(n),
                                            children: (0, i.jsx)(s.Clickable, {
                                                className: C.category,
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
        null != x &&
            x.length > 0 &&
            P.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Heading, {
                            className: C.sectionHeader,
                            variant: 'eyebrow',
                            children: g.Z.Messages.APP_DIRECTORY_PROFILE_LANGUAGES_HEADING
                        }),
                        (0, i.jsx)(f.Z, { supportedLanguages: x })
                    ]
                })
            ),
        (null != l.terms_of_service_url || null != l.privacy_policy_url || S.length > 0) &&
            P.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Heading, {
                            className: C.sectionHeader,
                            variant: 'eyebrow',
                            children: g.Z.Messages.APP_DIRECTORY_PROFILE_LINKS_HEADING
                        }),
                        S.map((e, n) =>
                            (0, i.jsx)(
                                b,
                                {
                                    url: e.url,
                                    onClick: A,
                                    children: e.name
                                },
                                n
                            )
                        ),
                        null != l.terms_of_service_url
                            ? (0, i.jsx)(E, {
                                  icon: s.LinkIcon,
                                  onClick: A,
                                  url: l.terms_of_service_url,
                                  type: 'tos',
                                  children: g.Z.Messages.APP_DIRECTORY_PROFILE_TERMS_LINK
                              })
                            : null,
                        null != l.privacy_policy_url
                            ? (0, i.jsx)(E, {
                                  icon: s.LockIcon,
                                  onClick: A,
                                  url: l.privacy_policy_url,
                                  type: 'policy',
                                  children: g.Z.Messages.APP_DIRECTORY_PROFILE_PRIVACY_LINK
                              })
                            : null
                    ]
                })
            ),
        null != l.guild &&
            l.guild.features.includes(h.oNc.DISCOVERABLE) &&
            P.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Heading, {
                            className: C.sectionHeader,
                            variant: 'eyebrow',
                            children: g.Z.Messages.APP_DIRECTORY_PROFILE_SERVER_HEADING
                        }),
                        (0, i.jsx)(I.Z, {
                            guild: l.guild,
                            onClick: m
                        })
                    ]
                })
            ),
        (0, i.jsx)('div', {
            className: o()(C.sidebar, d),
            children:
                P.length > 0
                    ? (0, i.jsx)(i.Fragment, {
                          children: P.map((e, n) =>
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

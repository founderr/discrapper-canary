n.d(a, {
    Z: function () {
        return P;
    }
}),
    n(47120),
    n(653041),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var i = n(735250),
    t = n(470079),
    r = n(120356),
    l = n.n(r),
    s = n(780384),
    o = n(481060),
    c = n(794295),
    d = n(410030),
    u = n(726542),
    _ = n(626135),
    p = n(463571),
    m = n(887706),
    g = n(214912),
    I = n(290247),
    h = n(981631),
    x = n(689938),
    f = n(319333);
let C = x.Z.getAvailableLocales();
function v(e) {
    var a, n, t;
    let { onClick: r, url: l, children: c } = e,
        _ = (0, d.ZP)(),
        p = u.Z.getByUrl(l),
        m = (0, s.wj)(_) ? (null == p ? void 0 : null === (a = p.icon) || void 0 === a ? void 0 : a.darkSVG) : null == p ? void 0 : null === (n = p.icon) || void 0 === n ? void 0 : n.lightSVG;
    return (0, i.jsx)(E, {
        icon: void 0 === m ? o.LinkIcon : void 0,
        imageSrc: m,
        onClick: r,
        url: l,
        type: null !== (t = null == p ? void 0 : p.name) && void 0 !== t ? t : 'website',
        children: c
    });
}
function E(e) {
    let { icon: a, imageSrc: n, iconColor: t, url: r, type: s, children: d, onClick: u } = e,
        _ = (0, m.Z)(),
        p = null;
    null != a
        ? (p = (0, i.jsx)(a, {
              className: f.listIcon,
              color: null != t ? t : 'currentColor',
              width: 20,
              height: 20,
              size: 'custom'
          }))
        : null != n &&
          (p = (0, i.jsx)('img', {
              className: f.listImage,
              src: n,
              alt: ''
          }));
    let g = (0, i.jsxs)(i.Fragment, {
        children: [
            p,
            (0, i.jsx)(o.Text, {
                className: f.listText,
                variant: 'text-md/normal',
                selectable: !0,
                children: d
            })
        ]
    });
    return (0, i.jsx)(c.Z, {
        href: r,
        className: l()(f.listItem, f.linkItem),
        onClick: () => (u(r, s), !1),
        trusted: !_,
        useDefaultUnderlineStyles: !1,
        children: g
    });
}
function P(e) {
    var a, n, r;
    let { application: s, guildId: c, className: d, onViewCategory: u, onClickGuildWidget: m } = e,
        [P, R] = t.useState(null),
        A = [],
        b = null !== (n = null == s ? void 0 : null === (a = s.directory_entry) || void 0 === a ? void 0 : a.external_urls) && void 0 !== n ? n : [];
    t.useEffect(() => {
        var e;
        if ((null === (e = s.directory_entry) || void 0 === e ? void 0 : e.supported_locales) !== void 0) {
            let e = new Set(s.directory_entry.supported_locales);
            R(C.filter((a) => e.has(a.value)).map((e) => e.localizedName));
        }
    }, [s.directory_entry]);
    let N = (e, a) => {
        _.default.track(h.rMx.APP_DIRECTORY_APPLICATION_EXTERNAL_LINK_CLICKED, {
            application_id: s.id,
            guild_id: c,
            type: a,
            url: e
        });
    };
    return (
        null != s.categories &&
            s.categories.length > 0 &&
            A.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.Heading, {
                            className: f.sectionHeader,
                            variant: 'eyebrow',
                            children: x.Z.Messages.APP_DIRECTORY_PROFILE_CATEGORIES_HEADING
                        }),
                        (0, i.jsx)('div', {
                            className: f.categories,
                            children: (null !== (r = s.categories) && void 0 !== r ? r : []).map((e) => {
                                let a = new URLSearchParams();
                                return (
                                    a.set('category_id', e.id.toString()),
                                    (0, i.jsx)(
                                        p.Z,
                                        {
                                            href: ''.concat(h.Z5c.APPLICATION_DIRECTORY_SEARCH, '?').concat(a),
                                            children: (0, i.jsx)(o.Clickable, {
                                                className: f.category,
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
            A.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.Heading, {
                            className: f.sectionHeader,
                            variant: 'eyebrow',
                            children: x.Z.Messages.APP_DIRECTORY_PROFILE_LANGUAGES_HEADING
                        }),
                        (0, i.jsx)(I.Z, { supportedLanguages: P })
                    ]
                })
            ),
        (null != s.terms_of_service_url || null != s.privacy_policy_url || b.length > 0) &&
            A.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.Heading, {
                            className: f.sectionHeader,
                            variant: 'eyebrow',
                            children: x.Z.Messages.APP_DIRECTORY_PROFILE_LINKS_HEADING
                        }),
                        b.map((e, a) =>
                            (0, i.jsx)(
                                v,
                                {
                                    url: e.url,
                                    onClick: N,
                                    children: e.name
                                },
                                a
                            )
                        ),
                        null != s.terms_of_service_url
                            ? (0, i.jsx)(E, {
                                  icon: o.LinkIcon,
                                  onClick: N,
                                  url: s.terms_of_service_url,
                                  type: 'tos',
                                  children: x.Z.Messages.APP_DIRECTORY_PROFILE_TERMS_LINK
                              })
                            : null,
                        null != s.privacy_policy_url
                            ? (0, i.jsx)(E, {
                                  icon: o.LockIcon,
                                  onClick: N,
                                  url: s.privacy_policy_url,
                                  type: 'policy',
                                  children: x.Z.Messages.APP_DIRECTORY_PROFILE_PRIVACY_LINK
                              })
                            : null
                    ]
                })
            ),
        null != s.guild &&
            s.guild.features.includes(h.oNc.DISCOVERABLE) &&
            A.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.Heading, {
                            className: f.sectionHeader,
                            variant: 'eyebrow',
                            children: x.Z.Messages.APP_DIRECTORY_PROFILE_SERVER_HEADING
                        }),
                        (0, i.jsx)(g.Z, {
                            guild: s.guild,
                            onClick: m
                        })
                    ]
                })
            ),
        (0, i.jsx)('div', {
            className: l()(f.sidebar, d),
            children:
                A.length > 0
                    ? (0, i.jsx)(i.Fragment, {
                          children: A.map((e, a) =>
                              (0, i.jsx)(
                                  'div',
                                  {
                                      className: f.section,
                                      children: e
                                  },
                                  a
                              )
                          )
                      })
                    : null
        })
    );
}

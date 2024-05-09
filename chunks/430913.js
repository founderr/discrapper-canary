"use strict";
l.r(t), l.d(t, {
  default: function() {
    return N
  }
}), l("47120"), l("653041"), l("610138"), l("216116"), l("78328"), l("815648");
var i = l("735250"),
  a = l("470079"),
  n = l("120356"),
  s = l.n(n),
  r = l("780384"),
  o = l("481060"),
  c = l("794295"),
  d = l("410030"),
  u = l("726542"),
  p = l("757698"),
  _ = l("630641"),
  m = l("626135"),
  f = l("463571"),
  h = l("887706"),
  I = l("214912"),
  g = l("290247"),
  v = l("981631"),
  A = l("689938"),
  E = l("789539");
let C = A.default.getAvailableLocales();

function R(e) {
  var t, l, a;
  let {
    onClick: n,
    url: s,
    children: o
  } = e, c = (0, d.default)(), _ = u.default.getByUrl(s), m = (0, r.isThemeDark)(c) ? null == _ ? void 0 : null === (t = _.icon) || void 0 === t ? void 0 : t.darkSVG : null == _ ? void 0 : null === (l = _.icon) || void 0 === l ? void 0 : l.lightSVG;
  return (0, i.jsx)(x, {
    icon: void 0 === m ? p.default : void 0,
    imageSrc: m,
    onClick: n,
    url: s,
    type: null !== (a = null == _ ? void 0 : _.name) && void 0 !== a ? a : "website",
    children: o
  })
}

function x(e) {
  let {
    icon: t,
    imageSrc: l,
    iconColor: a,
    url: n,
    type: r,
    children: d,
    onClick: u
  } = e, p = (0, h.default)(), _ = null;
  null != t ? _ = (0, i.jsx)(t, {
    className: E.listIcon,
    color: a,
    width: 20,
    height: 20
  }) : null != l && (_ = (0, i.jsx)("img", {
    className: E.listImage,
    src: l,
    alt: ""
  }));
  let m = (0, i.jsxs)(i.Fragment, {
    children: [_, (0, i.jsx)(o.Text, {
      className: E.listText,
      variant: "text-md/normal",
      selectable: !0,
      children: d
    })]
  });
  return (0, i.jsx)(c.default, {
    href: n,
    className: s()(E.listItem, E.linkItem),
    onClick: () => (u(n, r), !1),
    trusted: !p,
    useDefaultUnderlineStyles: !1,
    children: m
  })
}

function N(e) {
  var t, l, n;
  let {
    application: r,
    guildId: c,
    className: d,
    onViewCategory: u,
    onClickGuildWidget: h
  } = e, [N, T] = a.useState(null), P = [], j = null !== (l = null == r ? void 0 : null === (t = r.directory_entry) || void 0 === t ? void 0 : t.external_urls) && void 0 !== l ? l : [];
  a.useEffect(() => {
    var e;
    if ((null === (e = r.directory_entry) || void 0 === e ? void 0 : e.supported_locales) !== void 0) {
      let e = new Set(r.directory_entry.supported_locales);
      T(C.filter(t => e.has(t.value)).map(e => e.localizedName))
    }
  }, [r.directory_entry]);
  let S = (e, t) => {
    m.default.track(v.AnalyticEvents.APP_DIRECTORY_APPLICATION_EXTERNAL_LINK_CLICKED, {
      application_id: r.id,
      guild_id: c,
      type: t,
      url: e
    })
  };
  return null != r.categories && r.categories.length > 0 && P.push((0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(o.Heading, {
      className: E.sectionHeader,
      variant: "eyebrow",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_CATEGORIES_HEADING
    }), (0, i.jsx)("div", {
      className: E.categories,
      children: (null !== (n = r.categories) && void 0 !== n ? n : []).map(e => {
        let t = new URLSearchParams;
        return t.set("category_id", e.id.toString()), (0, i.jsx)(f.default, {
          href: "".concat(v.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(t),
          children: (0, i.jsx)(o.Clickable, {
            className: E.category,
            onClick: () => u(e),
            children: (0, i.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "header-primary",
              children: e.name
            })
          })
        }, e.id)
      })
    })]
  })), null != N && N.length > 0 && P.push((0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(o.Heading, {
      className: E.sectionHeader,
      variant: "eyebrow",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_LANGUAGES_HEADING
    }), (0, i.jsx)(g.default, {
      supportedLanguages: N
    })]
  })), (null != r.terms_of_service_url || null != r.privacy_policy_url || j.length > 0) && P.push((0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(o.Heading, {
      className: E.sectionHeader,
      variant: "eyebrow",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_LINKS_HEADING
    }), j.map((e, t) => (0, i.jsx)(R, {
      url: e.url,
      onClick: S,
      children: e.name
    }, t)), null != r.terms_of_service_url ? (0, i.jsx)(x, {
      icon: p.default,
      onClick: S,
      url: r.terms_of_service_url,
      type: "tos",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_TERMS_LINK
    }) : null, null != r.privacy_policy_url ? (0, i.jsx)(x, {
      icon: _.default,
      onClick: S,
      url: r.privacy_policy_url,
      type: "policy",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_PRIVACY_LINK
    }) : null]
  })), null != r.guild && r.guild.features.includes(v.GuildFeatures.DISCOVERABLE) && P.push((0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(o.Heading, {
      className: E.sectionHeader,
      variant: "eyebrow",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_SERVER_HEADING
    }), (0, i.jsx)(I.default, {
      guild: r.guild,
      onClick: h
    })]
  })), (0, i.jsx)("div", {
    className: s()(E.sidebar, d),
    children: P.length > 0 ? (0, i.jsx)(i.Fragment, {
      children: P.map((e, t) => (0, i.jsx)("div", {
        className: E.section,
        children: e
      }, t))
    }) : null
  })
}
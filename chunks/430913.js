"use strict";
i.r(t), i.d(t, {
  default: function() {
    return x
  }
}), i("47120"), i("653041"), i("610138"), i("216116"), i("78328"), i("815648");
var l = i("735250"),
  a = i("470079"),
  n = i("120356"),
  s = i.n(n),
  r = i("780384"),
  o = i("481060"),
  c = i("794295"),
  d = i("410030"),
  u = i("726542"),
  p = i("757698"),
  m = i("630641"),
  f = i("626135"),
  _ = i("463571"),
  h = i("887706"),
  I = i("214912"),
  g = i("290247"),
  v = i("981631"),
  A = i("689938"),
  E = i("789539");
let R = A.default.getAvailableLocales();

function C(e) {
  var t, i, a;
  let {
    onClick: n,
    url: s,
    children: o
  } = e, c = (0, d.default)(), m = u.default.getByUrl(s), f = (0, r.isThemeDark)(c) ? null == m ? void 0 : null === (t = m.icon) || void 0 === t ? void 0 : t.darkSVG : null == m ? void 0 : null === (i = m.icon) || void 0 === i ? void 0 : i.lightSVG;
  return (0, l.jsx)(N, {
    icon: void 0 === f ? p.default : void 0,
    imageSrc: f,
    onClick: n,
    url: s,
    type: null !== (a = null == m ? void 0 : m.name) && void 0 !== a ? a : "website",
    children: o
  })
}

function N(e) {
  let {
    icon: t,
    imageSrc: i,
    iconColor: a,
    url: n,
    type: r,
    children: d,
    onClick: u
  } = e, p = (0, h.default)(), m = null;
  null != t ? m = (0, l.jsx)(t, {
    className: E.listIcon,
    color: a,
    width: 20,
    height: 20
  }) : null != i && (m = (0, l.jsx)("img", {
    className: E.listImage,
    src: i,
    alt: ""
  }));
  let f = (0, l.jsxs)(l.Fragment, {
    children: [m, (0, l.jsx)(o.Text, {
      className: E.listText,
      variant: "text-md/normal",
      selectable: !0,
      children: d
    })]
  });
  return (0, l.jsx)(c.default, {
    href: n,
    className: s()(E.listItem, E.linkItem),
    onClick: () => (u(n, r), !1),
    trusted: !p,
    useDefaultUnderlineStyles: !1,
    children: f
  })
}

function x(e) {
  var t, i, n;
  let {
    application: r,
    guildId: c,
    className: d,
    onViewCategory: u,
    onClickGuildWidget: h
  } = e, [x, T] = a.useState(null), P = [], S = null !== (i = null == r ? void 0 : null === (t = r.directory_entry) || void 0 === t ? void 0 : t.external_urls) && void 0 !== i ? i : [];
  a.useEffect(() => {
    var e;
    if ((null === (e = r.directory_entry) || void 0 === e ? void 0 : e.supported_locales) !== void 0) {
      let e = new Set(r.directory_entry.supported_locales);
      T(R.filter(t => e.has(t.value)).map(e => e.localizedName))
    }
  }, [r.directory_entry]);
  let j = (e, t) => {
    f.default.track(v.AnalyticEvents.APP_DIRECTORY_APPLICATION_EXTERNAL_LINK_CLICKED, {
      application_id: r.id,
      guild_id: c,
      type: t,
      url: e
    })
  };
  return null != r.categories && r.categories.length > 0 && P.push((0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.Heading, {
      className: E.sectionHeader,
      variant: "eyebrow",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_CATEGORIES_HEADING
    }), (0, l.jsx)("div", {
      className: E.categories,
      children: (null !== (n = r.categories) && void 0 !== n ? n : []).map(e => {
        let t = new URLSearchParams;
        return t.set("category_id", e.id.toString()), (0, l.jsx)(_.default, {
          href: "".concat(v.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(t),
          children: (0, l.jsx)(o.Clickable, {
            className: E.category,
            onClick: () => u(e),
            children: (0, l.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "header-primary",
              children: e.name
            })
          })
        }, e.id)
      })
    })]
  })), null != x && x.length > 0 && P.push((0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.Heading, {
      className: E.sectionHeader,
      variant: "eyebrow",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_LANGUAGES_HEADING
    }), (0, l.jsx)(g.default, {
      supportedLanguages: x
    })]
  })), (null != r.terms_of_service_url || null != r.privacy_policy_url || S.length > 0) && P.push((0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.Heading, {
      className: E.sectionHeader,
      variant: "eyebrow",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_LINKS_HEADING
    }), S.map((e, t) => (0, l.jsx)(C, {
      url: e.url,
      onClick: j,
      children: e.name
    }, t)), null != r.terms_of_service_url ? (0, l.jsx)(N, {
      icon: p.default,
      onClick: j,
      url: r.terms_of_service_url,
      type: "tos",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_TERMS_LINK
    }) : null, null != r.privacy_policy_url ? (0, l.jsx)(N, {
      icon: m.default,
      onClick: j,
      url: r.privacy_policy_url,
      type: "policy",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_PRIVACY_LINK
    }) : null]
  })), null != r.guild && r.guild.features.includes(v.GuildFeatures.DISCOVERABLE) && P.push((0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.Heading, {
      className: E.sectionHeader,
      variant: "eyebrow",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_SERVER_HEADING
    }), (0, l.jsx)(I.default, {
      guild: r.guild,
      onClick: h
    })]
  })), (0, l.jsx)("div", {
    className: s()(E.sidebar, d),
    children: P.length > 0 ? (0, l.jsx)(l.Fragment, {
      children: P.map((e, t) => (0, l.jsx)("div", {
        className: E.section,
        children: e
      }, t))
    }) : null
  })
}
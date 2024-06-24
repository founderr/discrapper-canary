i.d(n, {
  Z: function() {
    return C
  }
}), i(47120), i(653041), i(610138), i(216116), i(78328), i(815648);
var t = i(735250),
  l = i(470079),
  a = i(120356),
  s = i.n(a),
  r = i(780384),
  o = i(481060),
  c = i(794295),
  d = i(410030),
  u = i(726542),
  p = i(626135),
  _ = i(463571),
  m = i(887706),
  I = i(214912),
  h = i(290247),
  g = i(981631),
  E = i(689938),
  A = i(134758);
let v = E.Z.getAvailableLocales();

function R(e) {
  var n, i, l;
  let {
    onClick: a,
    url: s,
    children: c
  } = e, p = (0, d.ZP)(), _ = u.Z.getByUrl(s), m = (0, r.wj)(p) ? null == _ ? void 0 : null === (n = _.icon) || void 0 === n ? void 0 : n.darkSVG : null == _ ? void 0 : null === (i = _.icon) || void 0 === i ? void 0 : i.lightSVG;
  return (0, t.jsx)(P, {
    icon: void 0 === m ? o.LinkIcon : void 0,
    imageSrc: m,
    onClick: a,
    url: s,
    type: null !== (l = null == _ ? void 0 : _.name) && void 0 !== l ? l : "website",
    children: c
  })
}

function P(e) {
  let {
    icon: n,
    imageSrc: i,
    iconColor: l,
    url: a,
    type: r,
    children: d,
    onClick: u
  } = e, p = (0, m.Z)(), _ = null;
  null != n ? _ = (0, t.jsx)(n, {
    className: A.listIcon,
    color: null != l ? l : "currentColor",
    width: 20,
    height: 20,
    size: "custom"
  }) : null != i && (_ = (0, t.jsx)("img", {
    className: A.listImage,
    src: i,
    alt: ""
  }));
  let I = (0, t.jsxs)(t.Fragment, {
    children: [_, (0, t.jsx)(o.Text, {
      className: A.listText,
      variant: "text-md/normal",
      selectable: !0,
      children: d
    })]
  });
  return (0, t.jsx)(c.Z, {
    href: a,
    className: s()(A.listItem, A.linkItem),
    onClick: () => (u(a, r), !1),
    trusted: !p,
    useDefaultUnderlineStyles: !1,
    children: I
  })
}

function C(e) {
  var n, i, a;
  let {
    application: r,
    guildId: c,
    className: d,
    onViewCategory: u,
    onClickGuildWidget: m
  } = e, [C, T] = l.useState(null), N = [], x = null !== (i = null == r ? void 0 : null === (n = r.directory_entry) || void 0 === n ? void 0 : n.external_urls) && void 0 !== i ? i : [];
  l.useEffect(() => {
    var e;
    if ((null === (e = r.directory_entry) || void 0 === e ? void 0 : e.supported_locales) !== void 0) {
      let e = new Set(r.directory_entry.supported_locales);
      T(v.filter(n => e.has(n.value)).map(e => e.localizedName))
    }
  }, [r.directory_entry]);
  let f = (e, n) => {
    p.default.track(g.rMx.APP_DIRECTORY_APPLICATION_EXTERNAL_LINK_CLICKED, {
      application_id: r.id,
      guild_id: c,
      type: n,
      url: e
    })
  };
  return null != r.categories && r.categories.length > 0 && N.push((0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(o.Heading, {
      className: A.sectionHeader,
      variant: "eyebrow",
      children: E.Z.Messages.APP_DIRECTORY_PROFILE_CATEGORIES_HEADING
    }), (0, t.jsx)("div", {
      className: A.categories,
      children: (null !== (a = r.categories) && void 0 !== a ? a : []).map(e => {
        let n = new URLSearchParams;
        return n.set("category_id", e.id.toString()), (0, t.jsx)(_.Z, {
          href: "".concat(g.Z5c.APPLICATION_DIRECTORY_SEARCH, "?").concat(n),
          children: (0, t.jsx)(o.Clickable, {
            className: A.category,
            onClick: () => u(e),
            children: (0, t.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "header-primary",
              children: e.name
            })
          })
        }, e.id)
      })
    })]
  })), null != C && C.length > 0 && N.push((0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(o.Heading, {
      className: A.sectionHeader,
      variant: "eyebrow",
      children: E.Z.Messages.APP_DIRECTORY_PROFILE_LANGUAGES_HEADING
    }), (0, t.jsx)(h.Z, {
      supportedLanguages: C
    })]
  })), (null != r.terms_of_service_url || null != r.privacy_policy_url || x.length > 0) && N.push((0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(o.Heading, {
      className: A.sectionHeader,
      variant: "eyebrow",
      children: E.Z.Messages.APP_DIRECTORY_PROFILE_LINKS_HEADING
    }), x.map((e, n) => (0, t.jsx)(R, {
      url: e.url,
      onClick: f,
      children: e.name
    }, n)), null != r.terms_of_service_url ? (0, t.jsx)(P, {
      icon: o.LinkIcon,
      onClick: f,
      url: r.terms_of_service_url,
      type: "tos",
      children: E.Z.Messages.APP_DIRECTORY_PROFILE_TERMS_LINK
    }) : null, null != r.privacy_policy_url ? (0, t.jsx)(P, {
      icon: o.LockIcon,
      onClick: f,
      url: r.privacy_policy_url,
      type: "policy",
      children: E.Z.Messages.APP_DIRECTORY_PROFILE_PRIVACY_LINK
    }) : null]
  })), null != r.guild && r.guild.features.includes(g.oNc.DISCOVERABLE) && N.push((0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(o.Heading, {
      className: A.sectionHeader,
      variant: "eyebrow",
      children: E.Z.Messages.APP_DIRECTORY_PROFILE_SERVER_HEADING
    }), (0, t.jsx)(I.Z, {
      guild: r.guild,
      onClick: m
    })]
  })), (0, t.jsx)("div", {
    className: s()(A.sidebar, d),
    children: N.length > 0 ? (0, t.jsx)(t.Fragment, {
      children: N.map((e, n) => (0, t.jsx)("div", {
        className: A.section,
        children: e
      }, n))
    }) : null
  })
}
n.d(a, {
  Z: function() {
    return v
  }
}), n(47120);
var t = n(735250);
n(470079);
var i = n(209173),
  l = n(782568),
  s = n(626135),
  r = n(924489),
  c = n(132871),
  o = n(147890),
  d = n(491576),
  u = n(112884),
  g = n(639002),
  m = n(781627),
  _ = n(981631),
  C = n(689938),
  h = n(439818);
let p = new Map([
    ["890343617762304070", {
      imageSrc: n(336662)
    }]
  ]),
  x = new Map,
  R = new Map([
    [_.ABu.SPOTIFY, {
      imageSrc: n(655130)
    }]
  ]);

function I(e) {
  var a, n;
  let {
    result: i
  } = e, l = i.data, s = (0, d.Z)({
    application: l
  }), c = p.get(i.data.id);
  if (null == c) return null;
  let u = s.length > 0 ? (0, t.jsx)(r.Z, {
      application: i.data,
      textVariant: "text-sm/semibold",
      mutualGuilds: s,
      mutualGuildShownMax: 3,
      guildIconSize: r.x.SMALL,
      compact: !0
    }) : null,
    g = null !== (n = null === (a = l.directory_entry) || void 0 === a ? void 0 : a.guild_count) && void 0 !== n ? n : 0,
    _ = g > 0 ? C.Z.Messages.APP_DIRECTORY_SHORT_GUILD_COUNT.format({
      guildCount: g
    }) : void 0;
  return (0, t.jsx)(m.Z, {
    imageSrc: c.imageSrc,
    header: i.data.name,
    description: i.data.description,
    secondaryInfo: _,
    ctaLabel: C.Z.Messages.APPLICATION_ADD_BUTTON,
    mutualGuildCount: u,
    onCtaClick: () => (0, o.goToApplication)({
      applicationId: l.id
    })
  })
}

function T(e) {
  let {
    result: a
  } = e, n = x.get(a.data.id);
  return null == n ? null : (0, t.jsx)(m.Z, {
    imageSrc: n.imageSrc,
    header: a.data.name,
    description: a.data.description,
    secondaryInfo: C.Z.Messages.APP_DIRECTORY_ACTIVITY_LABEL
  })
}

function E(e) {
  let a, n, i, {
      result: r,
      guildId: o
    } = e,
    d = R.get(r.data.name);
  return null == d ? null : (r.data.name === _.ABu.SPOTIFY && (a = C.Z.Messages.APP_DIRECTORY_SPOTIFY_TITLE, n = C.Z.Messages.APP_DIRECTORY_SPOTIFY_DESCRIPTION.format(), i = () => {
    s.default.track(_.rMx.APP_DIRECTORY_CTA_CLICKED, {
      current_page: c.ApplicationDirectoryViews.SEARCH,
      cta: "spotify",
      guild_id: o
    }), (0, l.Z)("https://support.discord.com/hc/en-us/articles/360000167212-Discord-Spotify-Connection")
  }), null == a || null == n || null == i) ? null : (0, t.jsx)(m.Z, {
    imageSrc: d.imageSrc,
    header: a,
    description: n,
    ctaLabel: C.Z.Messages.LEARN_MORE,
    onCtaClick: i,
    secondaryInfo: C.Z.Messages.APP_DIRECTORY_CONNECTION_LABEL
  })
}

function v(e) {
  let {
    results: a,
    guildId: n
  } = e;
  return (0, t.jsxs)("div", {
    className: h.container,
    children: [(0, t.jsx)(u.Z, {}), (0, t.jsx)("div", {
      className: h.list,
      children: a.map((e, a) => {
        let l = "".concat(a).concat(e.type);
        if (e.type === i.s.APPLICATION) return (0, t.jsx)(I, {
          result: e
        }, l);
        if (e.type === i.s.ACTIVITY_APPLICATION) return (0, t.jsx)(T, {
          result: e
        }, l);
        if (e.type === i.s.CONNECTION) return (0, t.jsx)(E, {
          guildId: n,
          result: e
        }, l)
      })
    }), (0, t.jsx)(g.Z, {
      guildId: n
    })]
  })
}
a.d(n, {
  Z: function() {
    return E
  }
}), a(47120);
var t = a(735250);
a(470079);
var i = a(209173),
  l = a(782568),
  s = a(626135),
  r = a(924489),
  c = a(132871),
  o = a(147890),
  d = a(491576),
  u = a(112884),
  g = a(639002),
  m = a(781627),
  _ = a(981631),
  C = a(689938),
  h = a(439818);
let p = new Map([
    ["890343617762304070", {
      imageSrc: a(336662)
    }]
  ]),
  x = new Map,
  I = new Map([
    [_.ABu.SPOTIFY, {
      imageSrc: a(655130)
    }]
  ]);

function R(e) {
  var n, a;
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
    g = null !== (a = null === (n = l.directory_entry) || void 0 === n ? void 0 : n.guild_count) && void 0 !== a ? a : 0,
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
    result: n
  } = e, a = x.get(n.data.id);
  return null == a ? null : (0, t.jsx)(m.Z, {
    imageSrc: a.imageSrc,
    header: n.data.name,
    description: n.data.description,
    secondaryInfo: C.Z.Messages.APP_DIRECTORY_ACTIVITY_LABEL
  })
}

function A(e) {
  let n, a, i, {
      result: r,
      guildId: o
    } = e,
    d = I.get(r.data.name);
  return null == d ? null : (r.data.name === _.ABu.SPOTIFY && (n = C.Z.Messages.APP_DIRECTORY_SPOTIFY_TITLE, a = C.Z.Messages.APP_DIRECTORY_SPOTIFY_DESCRIPTION.format(), i = () => {
    s.default.track(_.rMx.APP_DIRECTORY_CTA_CLICKED, {
      current_page: c.ApplicationDirectoryViews.SEARCH,
      cta: "spotify",
      guild_id: o
    }), (0, l.Z)("https://support.discord.com/hc/en-us/articles/360000167212-Discord-Spotify-Connection")
  }), null == n || null == a || null == i) ? null : (0, t.jsx)(m.Z, {
    imageSrc: d.imageSrc,
    header: n,
    description: a,
    ctaLabel: C.Z.Messages.LEARN_MORE,
    onCtaClick: i,
    secondaryInfo: C.Z.Messages.APP_DIRECTORY_CONNECTION_LABEL
  })
}

function E(e) {
  let {
    results: n,
    guildId: a
  } = e;
  return (0, t.jsxs)("div", {
    className: h.container,
    children: [(0, t.jsx)(u.Z, {}), (0, t.jsx)("div", {
      className: h.list,
      children: n.map((e, n) => {
        let l = "".concat(n).concat(e.type);
        if (e.type === i.s.APPLICATION) return (0, t.jsx)(R, {
          result: e
        }, l);
        if (e.type === i.s.ACTIVITY_APPLICATION) return (0, t.jsx)(T, {
          result: e
        }, l);
        if (e.type === i.s.CONNECTION) return (0, t.jsx)(A, {
          guildId: a,
          result: e
        }, l)
      })
    }), (0, t.jsx)(g.Z, {
      guildId: a
    })]
  })
}
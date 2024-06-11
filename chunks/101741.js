"use strict";
a.r(t), a.d(t, {
  default: function() {
    return x
  }
}), a("47120");
var l = a("735250");
a("470079");
var i = a("209173"),
  n = a("782568"),
  s = a("626135"),
  r = a("924489"),
  c = a("132871"),
  u = a("147890"),
  d = a("491576"),
  o = a("112884"),
  g = a("639002"),
  m = a("781627"),
  _ = a("981631"),
  p = a("689938"),
  C = a("96809");
let h = new Map([
    ["890343617762304070", {
      imageSrc: a("336662")
    }]
  ]),
  f = new Map,
  A = new Map([
    [_.PlatformTypes.SPOTIFY, {
      imageSrc: a("655130")
    }]
  ]);

function I(e) {
  var t, a;
  let {
    result: i
  } = e, n = i.data, s = (0, d.default)({
    application: n
  }), c = h.get(i.data.id);
  if (null == c) return null;
  let o = s.length > 0 ? (0, l.jsx)(r.default, {
      application: i.data,
      textVariant: "text-sm/semibold",
      mutualGuilds: s,
      mutualGuildShownMax: 3,
      guildIconSize: r.GuildIconSize.SMALL,
      compact: !0
    }) : null,
    g = null !== (a = null === (t = n.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== a ? a : 0,
    _ = g > 0 ? p.default.Messages.APP_DIRECTORY_SHORT_GUILD_COUNT.format({
      guildCount: g
    }) : void 0;
  return (0, l.jsx)(m.default, {
    imageSrc: c.imageSrc,
    header: i.data.name,
    description: i.data.description,
    secondaryInfo: _,
    ctaLabel: p.default.Messages.APPLICATION_ADD_BUTTON,
    mutualGuildCount: o,
    onCtaClick: () => (0, u.goToApplication)({
      applicationId: n.id
    })
  })
}

function R(e) {
  let {
    result: t
  } = e, a = f.get(t.data.id);
  return null == a ? null : (0, l.jsx)(m.default, {
    imageSrc: a.imageSrc,
    header: t.data.name,
    description: t.data.description,
    secondaryInfo: p.default.Messages.APP_DIRECTORY_ACTIVITY_LABEL
  })
}

function T(e) {
  let t, a, i, {
      result: r,
      guildId: u
    } = e,
    d = A.get(r.data.name);
  return null == d ? null : (r.data.name === _.PlatformTypes.SPOTIFY && (t = p.default.Messages.APP_DIRECTORY_SPOTIFY_TITLE, a = p.default.Messages.APP_DIRECTORY_SPOTIFY_DESCRIPTION.format(), i = () => {
    s.default.track(_.AnalyticEvents.APP_DIRECTORY_CTA_CLICKED, {
      current_page: c.ApplicationDirectoryViews.SEARCH,
      cta: "spotify",
      guild_id: u
    }), (0, n.default)("https://support.discord.com/hc/en-us/articles/360000167212-Discord-Spotify-Connection")
  }), null == t || null == a || null == i) ? null : (0, l.jsx)(m.default, {
    imageSrc: d.imageSrc,
    header: t,
    description: a,
    ctaLabel: p.default.Messages.LEARN_MORE,
    onCtaClick: i,
    secondaryInfo: p.default.Messages.APP_DIRECTORY_CONNECTION_LABEL
  })
}

function x(e) {
  let {
    results: t,
    guildId: a
  } = e;
  return (0, l.jsxs)("div", {
    className: C.container,
    children: [(0, l.jsx)(o.default, {}), (0, l.jsx)("div", {
      className: C.list,
      children: t.map((e, t) => {
        let n = "".concat(t).concat(e.type);
        if (e.type === i.ApplicationDirectorySearchResultType.APPLICATION) return (0, l.jsx)(I, {
          result: e
        }, n);
        if (e.type === i.ApplicationDirectorySearchResultType.ACTIVITY_APPLICATION) return (0, l.jsx)(R, {
          result: e
        }, n);
        if (e.type === i.ApplicationDirectorySearchResultType.CONNECTION) return (0, l.jsx)(T, {
          guildId: a,
          result: e
        }, n)
      })
    }), (0, l.jsx)(g.default, {
      guildId: a
    })]
  })
}
n.d(t, {
  Z: function() {
    return T
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(442837),
  o = n(481060),
  u = n(503438),
  c = n(594174),
  d = n(672938),
  h = n(936195),
  p = n(727218),
  g = n(602623),
  m = n(81063),
  C = n(768581),
  E = n(823379),
  f = n(51144),
  _ = n(328979);
let I = g.u.SIZE_24;

function N(e) {
  var t, n;
  let {
    activity: s,
    user: r,
    embeddedApp: a,
    onOpenSpotifyAlbum: c
  } = e, d = null == s ? void 0 : s.assets, h = null == s ? void 0 : s.application_id;
  if (null == s || null == d || null == d.large_image && null == d.small_image) return null != a ? function(e) {
    let t = C.ZP.getApplicationIconURL({
        id: e.application.id,
        icon: e.application.icon
      }),
      n = e.application.name;
    return (0, l.jsx)(o.Tooltip, {
      text: n,
      position: "top",
      children: () => (0, l.jsx)("img", {
        alt: n,
        src: t,
        className: _.applicationLargeImage
      })
    })
  }(a) : null;
  let p = null !== (t = d.large_image) && void 0 !== t ? t : d.small_image,
    g = (0, u.Z)(s),
    E = g ? _.spotifyLargeImage : _.applicationLargeImage,
    f = null != p ? (0, l.jsx)("img", {
      alt: null !== (n = d.large_text) && void 0 !== n ? n : "",
      src: (0, m.getAssetImage)(h, p, [128, 128]),
      className: E
    }) : null;
  return g && null != c ? (f = (0, l.jsx)(o.Clickable, {
    className: _.clickable,
    onClick: () => {
      c(s, r.id)
    },
    children: f
  }), (0, l.jsx)(o.Tooltip, {
    text: null != d.large_text ? d.large_text : null,
    position: "top",
    children: e => {
      let {
        onClick: t,
        ...n
      } = e;
      return null != f ? i.cloneElement(f, n) : null
    }
  })) : f
}

function Z(e) {
  let {
    activity: t,
    embeddedApp: n,
    onOpenSpotifyTrack: i
  } = e, s = null == t ? void 0 : t.details, r = null == t ? void 0 : t.name, a = r;
  if (null != n) a = n.application.name;
  else {
    if (!(null != t && (0, u.Z)(t)) || null == t.sync_id || null == s || null == i) return null;
    r = s, a = (0, l.jsx)(o.Clickable, {
      className: _.headerLink,
      onClick: () => {
        i(t)
      },
      children: s
    })
  }
  return (0, l.jsx)(p.Z, {
    title: r,
    className: _.header,
    children: a
  })
}

function S(e) {
  let {
    activity: t,
    user: n,
    onOpenSpotifyArtist: i
  } = e, s = null == t ? void 0 : t.details, a = null == t ? void 0 : t.state, o = s;
  return (null != t && (0, u.Z)(t) && null != a && (o = [(0, l.jsx)(h.Z, {
    artists: a,
    linkClassName: _.bodyLink,
    canOpen: null != t.sync_id,
    onOpenSpotifyArtist: e => {
      null == i || i(t, n.id, e)
    }
  }, a)]), null == o || "" === o) ? null : (0, l.jsx)("div", {
    className: r()(_.ellipsisRow, _.colorHeaderSecondary, _.bodyTextSize),
    children: o
  })
}

function x(e) {
  let {
    activity: t
  } = e, n = null == t ? void 0 : t.state;
  return null == n || "" === n || (0, u.Z)(t) ? null : (0, l.jsx)("div", {
    className: r()(_.ellipsisRow, _.colorHeaderSecondary, _.bodyTextSize, _.__invalid_activity),
    children: n
  })
}

function L(e) {
  let {
    activity: t
  } = e;
  if (null == t || !(0, u.Z)(t)) return null;
  let {
    timestamps: n
  } = t;
  if ((null == n ? void 0 : n.start) == null || (null == n ? void 0 : n.end) == null) return null;
  let {
    start: i,
    end: s
  } = n;
  return (0, l.jsx)(d.Z, {
    start: i,
    end: s,
    className: _.timeBar,
    themed: !0,
    singleLine: !0
  })
}

function T(e) {
  let {
    activity: t,
    embeddedApp: n,
    user: s,
    channel: r,
    sortedVoiceStates: d,
    onOpenSpotifyTrack: h,
    onOpenSpotifyArtist: p,
    onOpenSpotifyAlbum: m
  } = e, C = [];
  null != n ? C = Array.from(n.embeddedActivity.userIds) : (0, u.Z)(t) && null != d && (C = d.map(e => e.user.id));
  let T = (0, a.Wu)([c.default], () => C.map(e => c.default.getUser(e)).filter(E.lm)),
    v = null != n || (0, u.Z)(t),
    A = i.useMemo(() => {
      let e = new Map;
      return v && null != d && d.forEach(t => {
        let n = t.member;
        null != n && e.set(t.user.id, n)
      }), e
    }, [d, v]);
  return v ? (0, l.jsxs)("div", {
    className: _.flexColumn,
    children: [(0, l.jsxs)("div", {
      className: _.flexRow,
      children: [(0, l.jsx)(N, {
        activity: t,
        user: s,
        embeddedApp: n,
        onOpenSpotifyAlbum: m
      }), (0, l.jsxs)("div", {
        className: _.detailsAndAvatarsContainer,
        children: [(0, l.jsx)(Z, {
          activity: t,
          embeddedApp: n,
          onOpenSpotifyTrack: h
        }), (0, l.jsx)(S, {
          activity: t,
          user: s,
          onOpenSpotifyArtist: p
        }), (0, l.jsx)(x, {
          activity: t
        }), C.length > 0 && (0, l.jsx)(g.Z, {
          className: _.usersSummary,
          guildId: r.guild_id,
          users: T,
          size: I,
          max: 7,
          renderUser: e => {
            var t;
            if (null == e) return null;
            let n = A.get(e.id),
              i = null !== (t = null == n ? void 0 : n.nick) && void 0 !== t ? t : f.ZP.getName(e);
            return (0, l.jsx)(o.TooltipContainer, {
              text: i,
              position: "bottom",
              children: (0, l.jsx)("img", {
                src: e.getAvatarURL(r.guild_id, I),
                alt: i,
                className: _.avatar
              }, e.id)
            }, e.id)
          }
        })]
      })]
    }), (0, l.jsx)(L, {
      activity: t
    })]
  }) : null
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("503438"),
  d = n("594174"),
  c = n("672938"),
  f = n("936195"),
  h = n("727218"),
  m = n("602623"),
  p = n("81063"),
  C = n("768581"),
  g = n("823379"),
  E = n("51144"),
  _ = n("686429");
let S = m.Sizes.SIZE_24;

function I(e) {
  var t, n;
  let {
    activity: s,
    user: i,
    embeddedApp: r,
    onOpenSpotifyAlbum: d
  } = e, c = null == s ? void 0 : s.assets, f = null == s ? void 0 : s.application_id;
  if (null == s || null == c || null == c.large_image && null == c.small_image) return null != r ? function(e) {
    let t = C.default.getApplicationIconURL({
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
  }(r) : null;
  let h = null !== (t = c.large_image) && void 0 !== t ? t : c.small_image,
    m = (0, u.default)(s),
    g = m ? _.spotifyLargeImage : _.applicationLargeImage,
    E = null != h ? (0, l.jsx)("img", {
      alt: null !== (n = c.large_text) && void 0 !== n ? n : "",
      src: (0, p.getAssetImage)(f, h, [128, 128]),
      className: g
    }) : null;
  return m && null != d ? (E = (0, l.jsx)(o.Clickable, {
    className: _.clickable,
    onClick: () => {
      d(s, i.id)
    },
    children: E
  }), (0, l.jsx)(o.Tooltip, {
    text: null != c.large_text ? c.large_text : null,
    position: "top",
    children: e => {
      let {
        onClick: t,
        ...n
      } = e;
      return null != E ? a.cloneElement(E, n) : null
    }
  })) : E
}

function N(e) {
  let {
    activity: t,
    embeddedApp: n,
    onOpenSpotifyTrack: a
  } = e, s = null == t ? void 0 : t.details, i = null == t ? void 0 : t.name, r = i;
  if (null != n) r = n.application.name;
  else {
    if (!(null != t && (0, u.default)(t)) || null == t.sync_id || null == s || null == a) return null;
    i = s, r = (0, l.jsx)(o.Clickable, {
      className: _.headerLink,
      onClick: () => {
        a(t)
      },
      children: s
    })
  }
  return (0, l.jsx)(h.default, {
    title: i,
    className: _.header,
    children: r
  })
}

function T(e) {
  let {
    activity: t,
    user: n,
    onOpenSpotifyArtist: a
  } = e, s = null == t ? void 0 : t.details, r = null == t ? void 0 : t.state, o = s;
  return (null != t && (0, u.default)(t) && null != r && (o = [(0, l.jsx)(f.default, {
    artists: r,
    linkClassName: _.bodyLink,
    canOpen: null != t.sync_id,
    onOpenSpotifyArtist: e => {
      null == a || a(t, n.id, e)
    }
  }, r)]), null == o || "" === o) ? null : (0, l.jsx)("div", {
    className: i()(_.ellipsisRow, _.colorHeaderSecondary, _.bodyTextSize),
    children: o
  })
}

function A(e) {
  let {
    activity: t
  } = e, n = null == t ? void 0 : t.state;
  return null == n || "" === n || (0, u.default)(t) ? null : (0, l.jsx)("div", {
    className: i()(_.ellipsisRow, _.colorHeaderSecondary, _.bodyTextSize, _.__invalid_activity),
    children: n
  })
}

function L(e) {
  let {
    activity: t
  } = e;
  if (null == t || !(0, u.default)(t)) return null;
  let {
    timestamps: n
  } = t;
  if ((null == n ? void 0 : n.start) == null || (null == n ? void 0 : n.end) == null) return null;
  let {
    start: a,
    end: s
  } = n;
  return (0, l.jsx)(c.default, {
    start: a,
    end: s,
    className: _.timeBar,
    themed: !0,
    singleLine: !0
  })
}

function v(e) {
  let {
    activity: t,
    embeddedApp: n,
    user: s,
    channel: i,
    sortedVoiceStates: c,
    onOpenSpotifyTrack: f,
    onOpenSpotifyArtist: h,
    onOpenSpotifyAlbum: p
  } = e, C = [];
  null != n ? C = Array.from(n.embeddedActivity.userIds) : (0, u.default)(t) && null != c && (C = c.map(e => e.user.id));
  let v = (0, r.useStateFromStoresArray)([d.default], () => C.map(e => d.default.getUser(e)).filter(g.isNotNullish)),
    x = null != n || (0, u.default)(t),
    R = a.useMemo(() => {
      let e = new Map;
      return x && null != c && c.forEach(t => {
        let n = t.member;
        null != n && e.set(t.user.id, n)
      }), e
    }, [c, x]);
  return x ? (0, l.jsxs)("div", {
    className: _.flexColumn,
    children: [(0, l.jsxs)("div", {
      className: _.flexRow,
      children: [(0, l.jsx)(I, {
        activity: t,
        user: s,
        embeddedApp: n,
        onOpenSpotifyAlbum: p
      }), (0, l.jsxs)("div", {
        className: _.detailsAndAvatarsContainer,
        children: [(0, l.jsx)(N, {
          activity: t,
          embeddedApp: n,
          onOpenSpotifyTrack: f
        }), (0, l.jsx)(T, {
          activity: t,
          user: s,
          onOpenSpotifyArtist: h
        }), (0, l.jsx)(A, {
          activity: t
        }), C.length > 0 && (0, l.jsx)(m.default, {
          className: _.usersSummary,
          guildId: i.guild_id,
          users: v,
          size: S,
          max: 7,
          renderUser: e => {
            var t;
            if (null == e) return null;
            let n = R.get(e.id),
              a = null !== (t = null == n ? void 0 : n.nick) && void 0 !== t ? t : E.default.getName(e);
            return (0, l.jsx)(o.TooltipContainer, {
              text: a,
              position: "bottom",
              children: (0, l.jsx)("img", {
                src: e.getAvatarURL(i.guild_id, S),
                alt: a,
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
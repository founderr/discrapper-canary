"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("47120");
var i = n("735250");
n("470079");
var r = n("120356"),
  a = n.n(r),
  s = n("831209"),
  o = n("442837"),
  l = n("481060"),
  u = n("812206"),
  d = n("924301"),
  _ = n("543882"),
  c = n("592125"),
  E = n("271383"),
  I = n("594174"),
  T = n("366695"),
  f = n("305878"),
  S = n("737688"),
  h = n("158010"),
  A = n("944581"),
  m = n("645284"),
  N = n("632184"),
  p = n("26290"),
  O = n("51144"),
  C = n("623552"),
  R = n("126134"),
  g = n("765305"),
  L = n("689938"),
  v = n("181096");

function D(e, t) {
  let n = function(e, t) {
      return e.map(e => {
        var n;
        let i = I.default.getUser(e);
        if (null == i) return null;
        let r = E.default.getNick(t, i.id);
        return null !== (n = null != r ? r : O.default.getGlobalName(i)) && void 0 !== n ? n : O.default.getUserTag(i)
      }).filter(e => null != e)
    }(e, t),
    i = n.length;
  if (i > 0) {
    if (1 === i) return n[0];
    if (2 === i) return L.default.Messages.USER_SUMMARY_TWO.format({
      first: n[0],
      second: n[1]
    });
    else if (3 === i) return L.default.Messages.USER_SUMMARY_THREE.format({
      first: n[0],
      second: n[1],
      third: n[2]
    });
    else return L.default.Messages.USER_SUMMARY_THREE_AND_OTHERS.format({
      first: n[0],
      second: n[1],
      third: n[2],
      count: i - 3
    })
  }
}

function M(e) {
  let {
    cardData: t,
    guildId: n
  } = e, r = (0, o.useStateFromStores)([_.default], () => t.category === R.CardCategory.HANGOUT && t.streamUserIds.length > 0 ? _.default.getPreviewURL(n, t.channelId, t.streamUserIds[0]) : null), E = function(e, t, n) {
    let {
      category: r
    } = e;
    switch (r) {
      case R.CardCategory.GAMING:
        let {
          game: a
        } = e;
        if (null == a.application_id) return (0, i.jsx)(S.default, {});
        return (0, i.jsx)(T.default, {
          game: u.default.getApplication(a.application_id),
          size: "xl",
          className: v.gameIcon
        });
      case R.CardCategory.EVENT:
        return (0, i.jsx)(f.default, {});
      case R.CardCategory.EMBEDDED_ACTIVITY:
        let {
          embeddedActivity: o
        } = e;
        if (null == o.applicationId) return (0, i.jsx)(A.default, {});
        return (0, i.jsx)(T.default, {
          game: u.default.getApplication(o.applicationId),
          size: "xl",
          className: v.gameIcon
        });
      case R.CardCategory.HANGOUT: {
        let {
          streamUserIds: r,
          userIds: a
        } = e;
        if (r.length > 0) {
          let e = e => (0, i.jsx)(p.TextBadge, {
            text: L.default.Messages.LIVE,
            color: s.default.STATUS_DANGER,
            className: e
          });
          if (null == n) return e();
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("img", {
              src: n,
              alt: "",
              height: 64,
              width: 64,
              className: v.streamPreview
            }), e(v.liveBadge)]
          })
        }
        let o = a.map(e => I.default.getUser(e)).filter(e => null != e);
        return (0, i.jsx)(C.default, {
          guildId: t,
          users: o
        })
      }
    }
  }(t, n, r), O = function(e, t) {
    let {
      category: n
    } = e;
    switch (n) {
      case R.CardCategory.HANGOUT: {
        let {
          streamUserIds: n,
          userIds: i
        } = e;
        if (n.length > 0) return D(n, t);
        return D(i, t)
      }
      case R.CardCategory.EVENT:
        return e.event.name;
      case R.CardCategory.EMBEDDED_ACTIVITY:
        return D([...e.embeddedActivity.userIds], t);
      default:
        return "gamers"
    }
  }(t, n), M = function(e) {
    var t, n, i, r, a, s;
    let {
      category: o
    } = e;
    switch (o) {
      case R.CardCategory.GAMING:
        let {
          game: l, channelId: d
        } = e;
        return L.default.Messages.GAMING_IN_CHANNEL.format({
          channelName: null === (t = c.default.getChannel(d)) || void 0 === t ? void 0 : t.name,
          gameName: l.name
        });
      case R.CardCategory.EVENT:
        let {
          event: _
        } = e;
        if (_.entity_type === g.GuildScheduledEventEntityTypes.EXTERNAL) return _.entity_metadata.location;
        return null === (n = c.default.getChannel(_.channel_id)) || void 0 === n ? void 0 : n.name;
      case R.CardCategory.EMBEDDED_ACTIVITY:
        let {
          embeddedActivity: E
        } = e;
        return L.default.Messages.GAMING_IN_CHANNEL.format({
          channelName: null === (i = c.default.getChannel(E.channelId)) || void 0 === i ? void 0 : i.name,
          gameName: null === (r = u.default.getApplication(E.applicationId)) || void 0 === r ? void 0 : r.name
        });
      case R.CardCategory.HANGOUT: {
        let {
          streamUserIds: t,
          channelId: n
        } = e;
        if (t.length > 0) return L.default.Messages.STREAMING_IN_CHANNEL.format({
          channelName: null === (s = c.default.getChannel(n)) || void 0 === s ? void 0 : s.name
        });
        return null === (a = c.default.getChannel(n)) || void 0 === a ? void 0 : a.name
      }
    }
  }(t), {
    icon: y,
    count: P
  } = function(e) {
    let {
      category: t
    } = e;
    switch (t) {
      case R.CardCategory.EVENT:
        return {
          icon: f.default, count: d.default.getUserCount(e.event.id, null)
        };
      case R.CardCategory.HANGOUT:
        let {
          streamUserIds: n, userIds: i
        } = e;
        if (n.length > 0) return {
          icon: h.default,
          count: i.length
        };
        return {
          icon: null, count: 0
        };
      default:
        return {
          icon: null, count: 0
        }
    }
  }(t), U = function(e) {
    let {
      category: t
    } = e;
    switch (t) {
      case R.CardCategory.GAMING:
        return S.default;
      case R.CardCategory.EVENT:
        return f.default;
      case R.CardCategory.EMBEDDED_ACTIVITY:
        return A.default;
      case R.CardCategory.HANGOUT: {
        let {
          streamUserIds: t
        } = e;
        if (t.length > 0) return m.default;
        return N.default
      }
    }
  }(t), b = t.category === R.CardCategory.HANGOUT && 0 === t.streamUserIds.length;
  return (0, i.jsxs)("div", {
    className: v.container,
    children: [(0, i.jsx)("div", {
      className: a()(v.image, {
        [v.streamContainer]: null != r,
        [v.groupAvatar]: b
      }),
      children: E
    }), (0, i.jsxs)("div", {
      className: v.content,
      children: [(0, i.jsx)(l.Heading, {
        color: "header-primary",
        variant: "heading-sm/semibold",
        className: b ? v.multiLineTitle : v.singleLineTitle,
        children: O
      }), (0, i.jsx)(l.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        children: M
      }), null != y && P > 0 && (0, i.jsxs)("div", {
        className: v.pill,
        children: [(0, i.jsx)(y, {
          className: v.pillIcon
        }), (0, i.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: P
        })]
      })]
    }), (0, i.jsx)("div", {
      className: v.actions,
      children: (0, i.jsx)(U, {
        className: v.categoryIcon
      })
    })]
  })
}
n.d(t, {
  Z: function() {
    return A
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(392711),
  a = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(100527),
  u = n(906732),
  d = n(150039),
  h = n(171368),
  m = n(271383),
  p = n(430824),
  E = n(594174),
  g = n(514342),
  f = n(502568),
  C = n(602623),
  _ = n(251625),
  I = n(823379),
  x = n(981631),
  T = n(228168),
  N = n(689938),
  Z = n(743630);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class v {
  updateData(e) {
    let {
      userId: t,
      user: n,
      channelId: l,
      analyticsLocations: i
    } = e;
    this.userId = t, this.user = n, this.channelId = l, this.analyticsLocations = i
  }
  getNicknameGuildPairs() {
    return this.generateNicknameGuildPairs(this.user)
  }
  renderNicknamePairs() {
    return this.getNicknameGuildPairs().map((e, t) => {
      let [n, s] = e, a = (0, l.jsx)(o.Clickable, {
        tag: "span",
        onClick: this.handleClick,
        children: n
      });
      return s.length > 0 && (a = (0, l.jsx)(o.TooltipContainer, {
        className: Z.tooltip,
        text: s.join(", "),
        position: "bottom",
        children: a
      })), (0, l.jsxs)(i.Fragment, {
        children: [0 !== t ? ", " : null, a]
      }, t)
    })
  }
  constructor({
    userId: e,
    user: t,
    channelId: n,
    analyticsLocations: i
  }) {
    S(this, "userId", void 0), S(this, "user", void 0), S(this, "channelId", void 0), S(this, "analyticsLocations", void 0), S(this, "generateNicknameGuildPairs", (0, _.oH)(e => {
      var t;
      return a()(m.ZP.getNicknameGuildsMapping(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : this.userId)).toPairs().map(e => {
        let [t, n] = e;
        return [t, n.map(e => {
          var t;
          return null === (t = p.Z.getGuild(e)) || void 0 === t ? void 0 : t.name
        }).filter(I.lm)]
      }).value()
    })), S(this, "renderMoreAvatars", () => (0, l.jsx)(o.TooltipContainer, {
      text: N.Z.Messages.AKA_MORE_AVATARS_OVERFLOW,
      position: "bottom",
      children: (0, l.jsx)(o.Clickable, {
        className: Z.moreAvatars,
        onClick: this.handleClick,
        children: (0, l.jsx)(o.CirclePlusIcon, {
          size: "xs",
          color: "currentColor",
          className: Z.plusIcon
        })
      })
    }, "more-avatars")), S(this, "handleClick", () => {
      (0, h.openUserProfileModal)({
        userId: this.userId,
        channelId: this.channelId,
        sourceAnalyticsLocations: this.analyticsLocations,
        section: T.oh.MUTUAL_GUILDS,
        analyticsLocation: {
          section: x.jXE.CHANNEL_HEADER
        }
      })
    }), this.userId = e, this.user = t, this.channelId = n, this.analyticsLocations = i
  }
}

function A(e) {
  let {
    channel: t
  } = e, n = t.getRecipientId(), s = (0, d.gc)(n), a = Array(s.length).fill(null), {
    analyticsLocations: h
  } = (0, u.ZP)(c.Z.AKA), m = function(e) {
    let {
      userId: t,
      channelId: n,
      analyticsLocations: l
    } = e, s = (0, r.e7)([E.default], () => E.default.getUser(t), [t]), [a] = i.useState(() => new v({
      user: s,
      userId: t,
      channelId: n,
      analyticsLocations: l
    }));
    return a.updateData({
      userId: t,
      user: s,
      channelId: n,
      analyticsLocations: l
    }), a
  }({
    userId: n,
    analyticsLocations: h,
    channelId: t.id
  });
  return 0 === m.getNicknameGuildPairs().length && 0 === s.length ? (0, l.jsx)("div", {
    className: Z.spacer
  }) : (0, l.jsxs)(u.Gt, {
    value: h,
    children: [(0, l.jsx)(f.iz, {}), (0, l.jsx)(o.TextBadge, {
      text: N.Z.Messages.AKA,
      disableColor: !0,
      className: Z.akaBadge
    }), s.length > 0 ? (0, l.jsx)(C.Z, {
      size: 16,
      users: a,
      showUserPopout: !1,
      renderUser: (e, t, n) => {
        var i;
        let a = m.user,
          r = s[n];
        return null == r || null == a ? null : (0, l.jsx)(o.TooltipContainer, {
          text: null === (i = p.Z.getGuild(r)) || void 0 === i ? void 0 : i.name,
          position: "bottom",
          children: (0, l.jsx)("img", {
            alt: "",
            className: Z.avatar,
            onClick: m.handleClick,
            src: a.getAvatarURL(r, 16),
            "aria-hidden": !0
          })
        }, r[1])
      },
      renderMoreUsers: m.renderMoreAvatars,
      guildId: void 0,
      max: 3,
      className: Z.avatars
    }) : null, m.getNicknameGuildPairs().length > 0 ? (0, l.jsx)(g.Z, {
      position: "bottom",
      className: Z.nicknames,
      children: m.renderNicknamePairs()
    }) : null]
  })
}
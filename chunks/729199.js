"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
}), s("222007");
var a = s("37983"),
  i = s("884691"),
  r = s("414456"),
  n = s.n(r),
  l = s("730290"),
  o = s("446674"),
  u = s("77078"),
  d = s("851387"),
  c = s("55620"),
  _ = s("984376"),
  E = s("267567"),
  I = s("393414"),
  T = s("239380"),
  f = s("813006"),
  S = s("305961"),
  R = s("895530"),
  m = s("145131"),
  A = s("476263"),
  p = s("36694"),
  N = s("75576"),
  g = s("49111"),
  C = s("782340"),
  P = s("742675");
class O extends i.PureComponent {
  renderMemberInfo() {
    let {
      approximateMemberCount: e,
      approximatePresenceCount: t
    } = this.props.guild;
    return null == e || null == t ? null : (0, a.jsxs)(m.default, {
      className: P.memberInfo,
      align: m.default.Align.CENTER,
      children: [(0, a.jsx)("div", {
        className: P.dotOnline
      }), (0, a.jsx)("span", {
        className: P.memberText,
        children: C.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
          membersOnline: t
        })
      }), (0, a.jsx)("div", {
        className: P.dotOffline
      }), (0, a.jsx)("span", {
        className: P.memberText,
        children: C.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
          count: e
        })
      })]
    })
  }
  render() {
    let {
      guild: e,
      inChannel: t,
      isInGuild: s,
      isLurking: i,
      isAuthenticated: r,
      className: l,
      pageSize: o
    } = this.props;
    if (t && s) return null;
    let d = new f.default(e),
      c = C.default.Messages.LURKER_MODE_VIEW_GUILD,
      _ = this.handleJoinOrView,
      E = u.Button.Looks.FILLED,
      I = u.Button.Colors.PRIMARY;
    return r ? s ? (E = u.Button.Looks.OUTLINED, I = P.buttonColorInGuild, c = (0, a.jsxs)(m.default, {
      align: m.default.Align.CENTER,
      children: [(0, a.jsx)("div", {
        children: C.default.Messages.JOINED_GUILD
      }), (0, a.jsx)(p.default, {
        className: P.joinedCheckmark
      })]
    })) : i && t && (c = C.default.Messages.JOIN_GUILD) : (c = C.default.Messages._LOGIN, _ = this.handleLogin), (0, a.jsxs)("div", {
      className: n(l, o === N.PageSizes.SMALL ? P.inviteSmall : P.inviteLarge),
      children: [(0, a.jsx)(R.default, {
        children: C.default.Messages.APPLICATION_STORE_SECTION_TITLE_VERIFIED_GUILD
      }), (0, a.jsxs)("div", {
        className: P.content,
        children: [(0, a.jsxs)("div", {
          className: P.info,
          children: [(0, a.jsx)(A.default, {
            guild: d,
            active: !0,
            size: A.default.Sizes.LARGE,
            className: P.guildIcon
          }), (0, a.jsxs)("div", {
            className: P.infoText,
            children: [(0, a.jsx)("div", {
              className: P.name,
              children: e.name
            }), this.renderMemberInfo()]
          })]
        }), (0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          className: P.actionButton,
          fullWidth: !0,
          color: I,
          look: E,
          onClick: _,
          children: c
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), this.handleJoinOrView = async () => {
      let {
        guild: e,
        skuId: t,
        isInGuild: s,
        isLurking: a
      } = this.props, i = () => (0, T.transitionToGuild)(e.id);
      if (a)(0, c.joinPublishedStoreListingSkuGuild)(t).then(i);
      else if (s) i();
      else try {
        await d.default.joinGuild(e.id, {
          lurker: !0,
          source: g.JoinGuildSources.APPLICATION_STORE
        }), i()
      } catch {}
    }, this.handleLogin = () => {
      let e = {
        redirect_to: g.Routes.APPLICATION_STORE_LISTING_SKU(this.props.skuId)
      };
      (0, I.transitionTo)(g.Routes.LOGIN, {
        search: (0, l.stringify)(e)
      })
    }
  }
}
var M = (0, _.default)(o.default.connectStores([S.default, E.default], e => {
  let {
    guild: t
  } = e, s = E.default.isLurking(t.id);
  return {
    isInGuild: null != S.default.getGuild(t.id) && !s,
    isLurking: s
  }
})(O))
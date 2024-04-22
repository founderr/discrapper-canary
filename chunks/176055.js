"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("120356"),
  l = s.n(r),
  n = s("593473"),
  o = s("442837"),
  u = s("481060"),
  d = s("749210"),
  c = s("558381"),
  _ = s("666743"),
  E = s("41776"),
  C = s("703656"),
  f = s("769654"),
  T = s("601964"),
  I = s("430824"),
  R = s("378720"),
  S = s("285952"),
  p = s("346656"),
  m = s("263704"),
  A = s("843445"),
  N = s("981631"),
  g = s("689938"),
  O = s("526549");

function P(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class M extends i.PureComponent {
  renderMemberInfo() {
    let {
      approximateMemberCount: e,
      approximatePresenceCount: t
    } = this.props.guild;
    return null == e || null == t ? null : (0, a.jsxs)(S.default, {
      className: O.memberInfo,
      align: S.default.Align.CENTER,
      children: [(0, a.jsx)("div", {
        className: O.dotOnline
      }), (0, a.jsx)("span", {
        className: O.memberText,
        children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
          membersOnline: t
        })
      }), (0, a.jsx)("div", {
        className: O.dotOffline
      }), (0, a.jsx)("span", {
        className: O.memberText,
        children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
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
      className: n,
      pageSize: o
    } = this.props;
    if (t && s) return null;
    let d = new T.default(e),
      c = g.default.Messages.LURKER_MODE_VIEW_GUILD,
      _ = this.handleJoinOrView,
      E = u.Button.Looks.FILLED,
      C = u.Button.Colors.PRIMARY;
    return r ? s ? (E = u.Button.Looks.OUTLINED, C = O.buttonColorInGuild, c = (0, a.jsxs)(S.default, {
      align: S.default.Align.CENTER,
      children: [(0, a.jsx)("div", {
        children: g.default.Messages.JOINED_GUILD
      }), (0, a.jsx)(m.default, {
        className: O.joinedCheckmark
      })]
    })) : i && t && (c = g.default.Messages.JOIN_GUILD) : (c = g.default.Messages._LOGIN, _ = this.handleLogin), (0, a.jsxs)("div", {
      className: l()(n, o === A.PageSizes.SMALL ? O.inviteSmall : O.inviteLarge),
      children: [(0, a.jsx)(R.default, {
        children: g.default.Messages.APPLICATION_STORE_SECTION_TITLE_VERIFIED_GUILD
      }), (0, a.jsxs)("div", {
        className: O.content,
        children: [(0, a.jsxs)("div", {
          className: O.info,
          children: [(0, a.jsx)(p.default, {
            guild: d,
            active: !0,
            size: p.default.Sizes.LARGE,
            className: O.guildIcon
          }), (0, a.jsxs)("div", {
            className: O.infoText,
            children: [(0, a.jsx)("div", {
              className: O.name,
              children: e.name
            }), this.renderMemberInfo()]
          })]
        }), (0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          className: O.actionButton,
          fullWidth: !0,
          color: C,
          look: E,
          onClick: _,
          children: c
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), P(this, "handleJoinOrView", async () => {
      let {
        guild: e,
        skuId: t,
        isInGuild: s,
        isLurking: a
      } = this.props, i = () => (0, f.transitionToGuild)(e.id);
      if (a)(0, c.joinPublishedStoreListingSkuGuild)(t).then(i);
      else if (s) i();
      else try {
        await d.default.joinGuild(e.id, {
          lurker: !0,
          source: N.JoinGuildSources.APPLICATION_STORE
        }), i()
      } catch {}
    }), P(this, "handleLogin", () => {
      let e = {
        redirect_to: N.Routes.APPLICATION_STORE_LISTING_SKU(this.props.skuId)
      };
      (0, C.transitionTo)(N.Routes.LOGIN, {
        search: (0, n.stringify)(e)
      })
    })
  }
}
t.default = (0, _.default)(o.default.connectStores([I.default, E.default], e => {
  let {
    guild: t
  } = e, s = E.default.isLurking(t.id);
  return {
    isInGuild: null != I.default.getGuild(t.id) && !s,
    isLurking: s
  }
})(M))
"use strict";
s.r(t), s("47120");
var n = s("735250"),
  a = s("470079"),
  r = s("120356"),
  l = s.n(r),
  i = s("593473"),
  u = s("442837"),
  o = s("481060"),
  d = s("749210"),
  c = s("558381"),
  I = s("666743"),
  T = s("41776"),
  E = s("703656"),
  f = s("769654"),
  _ = s("601964"),
  S = s("430824"),
  A = s("378720"),
  R = s("285952"),
  O = s("346656"),
  h = s("263704"),
  N = s("843445"),
  p = s("981631"),
  g = s("689938"),
  P = s("141551");

function L(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class C extends a.PureComponent {
  renderMemberInfo() {
    let {
      approximateMemberCount: e,
      approximatePresenceCount: t
    } = this.props.guild;
    return null == e || null == t ? null : (0, n.jsxs)(R.default, {
      className: P.memberInfo,
      align: R.default.Align.CENTER,
      children: [(0, n.jsx)("div", {
        className: P.dotOnline
      }), (0, n.jsx)("span", {
        className: P.memberText,
        children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
          membersOnline: t
        })
      }), (0, n.jsx)("div", {
        className: P.dotOffline
      }), (0, n.jsx)("span", {
        className: P.memberText,
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
      isLurking: a,
      isAuthenticated: r,
      className: i,
      pageSize: u
    } = this.props;
    if (t && s) return null;
    let d = new _.default(e),
      c = g.default.Messages.LURKER_MODE_VIEW_GUILD,
      I = this.handleJoinOrView,
      T = o.Button.Looks.FILLED,
      E = o.Button.Colors.PRIMARY;
    return r ? s ? (T = o.Button.Looks.OUTLINED, E = P.buttonColorInGuild, c = (0, n.jsxs)(R.default, {
      align: R.default.Align.CENTER,
      children: [(0, n.jsx)("div", {
        children: g.default.Messages.JOINED_GUILD
      }), (0, n.jsx)(h.default, {
        className: P.joinedCheckmark
      })]
    })) : a && t && (c = g.default.Messages.JOIN_GUILD) : (c = g.default.Messages._LOGIN, I = this.handleLogin), (0, n.jsxs)("div", {
      className: l()(i, u === N.PageSizes.SMALL ? P.inviteSmall : P.inviteLarge),
      children: [(0, n.jsx)(A.default, {
        children: g.default.Messages.APPLICATION_STORE_SECTION_TITLE_VERIFIED_GUILD
      }), (0, n.jsxs)("div", {
        className: P.content,
        children: [(0, n.jsxs)("div", {
          className: P.info,
          children: [(0, n.jsx)(O.default, {
            guild: d,
            active: !0,
            size: O.default.Sizes.LARGE,
            className: P.guildIcon
          }), (0, n.jsxs)("div", {
            className: P.infoText,
            children: [(0, n.jsx)("div", {
              className: P.name,
              children: e.name
            }), this.renderMemberInfo()]
          })]
        }), (0, n.jsx)(o.Button, {
          size: o.Button.Sizes.SMALL,
          className: P.actionButton,
          fullWidth: !0,
          color: E,
          look: T,
          onClick: I,
          children: c
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), L(this, "handleJoinOrView", async () => {
      let {
        guild: e,
        skuId: t,
        isInGuild: s,
        isLurking: n
      } = this.props, a = () => (0, f.transitionToGuild)(e.id);
      if (n)(0, c.joinPublishedStoreListingSkuGuild)(t).then(a);
      else if (s) a();
      else try {
        await d.default.joinGuild(e.id, {
          lurker: !0,
          source: p.JoinGuildSources.APPLICATION_STORE
        }), a()
      } catch {}
    }), L(this, "handleLogin", () => {
      let e = {
        redirect_to: p.Routes.APPLICATION_STORE_LISTING_SKU(this.props.skuId)
      };
      (0, E.transitionTo)(p.Routes.LOGIN, {
        search: (0, i.stringify)(e)
      })
    })
  }
}
t.default = (0, I.default)(u.default.connectStores([S.default, T.default], e => {
  let {
    guild: t
  } = e, s = T.default.isLurking(t.id);
  return {
    isInGuild: null != S.default.getGuild(t.id) && !s,
    isLurking: s
  }
})(C))
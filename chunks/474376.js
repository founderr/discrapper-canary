"use strict";
n.r(t), n.d(t, {
  useMultiAccountMenuItems: function() {
    return T
  }
}), n("653041");
var a = n("735250");
n("470079");
var s = n("442837"),
  l = n("481060"),
  i = n("44315"),
  r = n("598077"),
  o = n("246946"),
  u = n("594174"),
  d = n("441674"),
  c = n("759231"),
  f = n("626135"),
  E = n("51144"),
  h = n("480387"),
  _ = n("726745"),
  C = n("251423"),
  S = n("383832"),
  m = n("981631"),
  p = n("689938"),
  I = n("484714");

function T() {
  let e = (0, s.useStateFromStores)([u.default], () => u.default.getCurrentUser()),
    t = (0, s.useStateFromStores)([o.default], () => o.default.hidePersonalInformation),
    {
      multiAccountUsers: n
    } = (0, C.useMultiAccountUsers)(),
    T = t => {
      t !== (null == e ? void 0 : e.id) && (f.default.track(m.AnalyticEvents.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
        location: {
          section: m.AnalyticsSections.PROFILE_POPOUT
        }
      }), h.switchAccount(t))
    },
    g = n.map(n => {
      let s = new r.default(n),
        o = s.id === (null == e ? void 0 : e.id),
        u = n.tokenStatus === _.MultiAccountTokenStatus.INVALID,
        f = t ? null : "#".concat(s.discriminator);
      return (0, a.jsx)(l.MenuItem, {
        id: s.id,
        focusedClassName: I.focused,
        label: e => {
          let {
            isFocused: r
          } = e;
          return (0, a.jsxs)("div", {
            className: I.userMenuItem,
            children: [(0, a.jsx)(l.Avatar, {
              src: s.getAvatarURL(void 0, 40),
              size: l.AvatarSizes.SIZE_24,
              "aria-label": n.username
            }), (0, a.jsxs)("div", {
              className: I.userMenuUsername,
              children: [(0, a.jsx)(l.Text, {
                className: I.userMenuText,
                variant: "text-sm/normal",
                children: E.default.getUserTag(s, {
                  mode: "username",
                  identifiable: t ? "never" : "always"
                })
              }), !s.isPomelo() && (0, a.jsx)(l.Text, {
                className: I.userMenuDiscriminator,
                variant: "text-sm/normal",
                children: f
              })]
            }), o && (0, a.jsx)(d.default, {
              color: (0, i.getColor)(r ? m.Color.WHITE_500 : m.Color.BRAND_500),
              backgroundColor: (0, i.getColor)(r ? m.Color.BRAND_500 : m.Color.WHITE_500),
              width: 18,
              height: 18,
              className: I.activeIcon
            }), u && (0, a.jsx)(c.default, {
              color: (0, i.getColor)(m.Color.RED_400),
              backgroundColor: (0, i.getColor)(m.Color.WHITE_500),
              width: 15,
              height: 15,
              className: I.activeIcon
            })]
          })
        },
        action: () => {
          u ? (0, S.default)() : T(s.id)
        }
      }, s.id)
    });
  return g.push((0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.MenuSeparator, {}), (0, a.jsx)(l.MenuItem, {
      id: "manage-accounts",
      label: p.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
      action: S.default
    })]
  })), g
}
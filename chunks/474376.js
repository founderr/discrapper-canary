"use strict";
a.r(t), a.d(t, {
  useMultiAccountMenuItems: function() {
    return g
  }
}), a("653041");
var n = a("735250");
a("470079");
var s = a("442837"),
  l = a("481060"),
  i = a("44315"),
  r = a("598077"),
  o = a("246946"),
  u = a("594174"),
  d = a("441674"),
  c = a("759231"),
  f = a("626135"),
  E = a("51144"),
  h = a("480387"),
  _ = a("726745"),
  C = a("251423"),
  m = a("383832"),
  S = a("981631"),
  p = a("689938"),
  I = a("484714");

function g() {
  let e = (0, s.useStateFromStores)([u.default], () => u.default.getCurrentUser()),
    t = (0, s.useStateFromStores)([o.default], () => o.default.hidePersonalInformation),
    {
      multiAccountUsers: a
    } = (0, C.useMultiAccountUsers)(),
    g = t => {
      t !== (null == e ? void 0 : e.id) && (f.default.track(S.AnalyticEvents.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
        location: {
          section: S.AnalyticsSections.PROFILE_POPOUT
        }
      }), h.switchAccount(t))
    },
    T = a.map(a => {
      let s = new r.default(a),
        o = s.id === (null == e ? void 0 : e.id),
        u = a.tokenStatus === _.MultiAccountTokenStatus.INVALID,
        f = t ? null : "#".concat(s.discriminator);
      return (0, n.jsx)(l.MenuItem, {
        id: s.id,
        focusedClassName: I.focused,
        label: e => {
          let {
            isFocused: r
          } = e;
          return (0, n.jsxs)("div", {
            className: I.userMenuItem,
            children: [(0, n.jsx)(l.Avatar, {
              src: s.getAvatarURL(void 0, 40),
              size: l.AvatarSizes.SIZE_24,
              "aria-label": a.username
            }), (0, n.jsxs)("div", {
              className: I.userMenuUsername,
              children: [(0, n.jsx)(l.Text, {
                className: I.userMenuText,
                variant: "text-sm/normal",
                children: E.default.getUserTag(s, {
                  mode: "username",
                  identifiable: t ? "never" : "always"
                })
              }), !s.isPomelo() && (0, n.jsx)(l.Text, {
                className: I.userMenuDiscriminator,
                variant: "text-sm/normal",
                children: f
              })]
            }), o && (0, n.jsx)(d.default, {
              color: (0, i.getColor)(r ? S.Color.WHITE_500 : S.Color.BRAND_500),
              backgroundColor: (0, i.getColor)(r ? S.Color.BRAND_500 : S.Color.WHITE_500),
              width: 18,
              height: 18,
              className: I.activeIcon
            }), u && (0, n.jsx)(c.default, {
              color: (0, i.getColor)(S.Color.RED_400),
              backgroundColor: (0, i.getColor)(S.Color.WHITE_500),
              width: 15,
              height: 15,
              className: I.activeIcon
            })]
          })
        },
        action: () => {
          u ? (0, m.default)() : g(s.id)
        }
      }, s.id)
    });
  return T.push((0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(l.MenuSeparator, {}), (0, n.jsx)(l.MenuItem, {
      id: "manage-accounts",
      label: p.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
      action: m.default
    })]
  })), T
}
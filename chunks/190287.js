"use strict";
t(47120), t(653041);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(442837),
  o = t(481060),
  c = t(596454),
  d = t(296386),
  u = t(907040),
  E = t(401227),
  _ = t(999382),
  I = t(185923),
  T = t(689938),
  N = t(84815);
let m = e => {
  var s;
  let {
    reason: t = "",
    emoji_name: l,
    onSetReason: d,
    onSelectEmoji: T,
    onClearPressed: m,
    reasonMinLength: S,
    reasonMaxLength: h,
    placeholder: g,
    position: C
  } = e, [x, R] = i.useState(!1), L = (0, r.e7)([_.Z], () => _.Z.isGuildMetadataLoaded());
  return (0, n.jsxs)("div", {
    className: a()(N.reasonContainer),
    children: [(0, n.jsx)(o.Popout, {
      onRequestClose: () => {
        R(!1)
      },
      shouldShow: x,
      position: "right",
      align: "top",
      animation: o.Popout.Animation.NONE,
      renderPopout: e => {
        let {
          closePopout: s
        } = e;
        return (0, n.jsx)(u.Z, {
          pickerIntention: I.Hz.COMMUNITY_CONTENT,
          closePopout: s,
          onSelectEmoji: (e, t) => {
            null != e && T(e), t && s()
          }
        })
      },
      children: () => (0, n.jsx)("div", {
        className: N.background,
        children: (0, n.jsx)(E.Z, {
          active: !1,
          onClick: () => {
            R(!0)
          },
          tabIndex: 0,
          renderButtonContents: null != l ? () => (0, n.jsx)(c.Z, {
            emojiName: l,
            animated: !1
          }) : null
        })
      })
    }), (0, n.jsxs)("div", {
      className: N.inputContainer,
      children: [(0, n.jsx)(o.TextInput, {
        inputClassName: N.reason,
        placeholder: g,
        value: t,
        minLength: S,
        maxLength: h,
        onChange: e => {
          d(e)
        },
        defaultDirty: (null == t ? void 0 : t.length) > 0
      }, "text-input-".concat(C, "-").concat(L)), (null !== (s = null == t ? void 0 : t.length) && void 0 !== s ? s : 0) > 0 || null != l ? (0, n.jsx)(o.Button, {
        className: N.clearStatusButton,
        onClick: m,
        look: o.Button.Looks.BLANK,
        size: o.Button.Sizes.NONE,
        tabIndex: -1,
        "aria-hidden": !0,
        children: (0, n.jsx)(o.CircleXIcon, {
          size: "md",
          color: "currentColor",
          className: N.clearStatusIcon
        })
      }) : null]
    })]
  })
};
s.Z = e => {
  let {
    reasonMinLength: s,
    reasonMaxLength: t,
    guildId: i,
    reasons: l
  } = e, a = [T.Z.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_PLACEHOLDER_ONE, T.Z.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_PLACEHOLDER_TWO, T.Z.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_PLACEHOLDER_THREE, T.Z.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_PLACEHOLDER_FOUR], r = [];
  for (let e = 0; e < 4; e++) r.push((0, n.jsx)(m, {
    position: e,
    placeholder: a[e],
    ...l[e],
    onSetReason: s => {
      let t = [...l],
        n = Object.assign({}, l[e], {
          reason: s
        });
      t[e] = n, (0, d.P$)(i, t)
    },
    onSelectEmoji: s => {
      let t = [...l],
        n = Object.assign({}, l[e], {
          emoji_name: s.optionallyDiverseSequence
        });
      t[e] = n, (0, d.P$)(i, t)
    },
    onClearPressed: () => {
      let s = [...l],
        t = {
          reason: "",
          emoji_name: null
        };
      s[e] = t, (0, d.P$)(i, s)
    },
    reasonMinLength: s,
    reasonMaxLength: t
  }, "reasonListItem-" + e));
  return (0, n.jsx)("div", {
    children: r
  })
}
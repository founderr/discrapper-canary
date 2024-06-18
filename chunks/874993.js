"use strict";
t.d(s, {
  Z: function() {
    return L
  }
}), t(47120), t(536091);
var n = t(735250),
  i = t(470079),
  l = t(442837),
  a = t(692547),
  r = t(481060),
  o = t(999382),
  c = t(279542),
  d = t(823379),
  u = t(63063),
  E = t(426563),
  _ = t(727072),
  I = t(85960),
  T = t(577330),
  N = t(65912),
  m = t(51248),
  S = t(546513),
  h = t(572456),
  g = t(273504),
  C = t(981631),
  x = t(689938),
  R = t(812364);

function L(e) {
  var s, t;
  let {
    guildId: L,
    setPreventNavigation: O = () => {}
  } = e, {
    editingRule: A,
    setEditingRule: p
  } = (0, N.V)(), {
    guild: M,
    subsection: f
  } = (0, l.cj)([o.Z], () => o.Z.getProps()), D = null !== (t = null !== (s = null == M ? void 0 : M.id) && void 0 !== s ? s : L) && void 0 !== t ? t : C.lds, v = null != A, [j] = (0, _.RD)(D), {
    rulesByTriggerType: Z
  } = (0, _.pH)(D), U = {
    [I.vh.MEMBERS]: x.Z.Messages.GUILD_SETTINGS_AUTOMOD_MEMBER_CATEGORY_TITLE,
    [I.vh.CONTENT]: x.Z.Messages.GUILD_SETTINGS_AUTOMOD_CONTENT_CATEGORY_TITLE
  }, G = i.useMemo(() => Object.values(null != Z ? Z : {}).flat().filter(d.lm), [Z]);
  i.useEffect(() => {
    v && p(null)
  }, [D]);
  let P = i.useCallback((e, s) => {
      if (null != e) {
        var t, n;
        return null !== (n = null === (t = G.find(s => {
          let {
            id: t
          } = s;
          return t === e
        })) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : null
      }
      return null != s ? I.I6[s].getDefaultRuleName() : null
    }, [G]),
    b = i.useMemo(() => {
      var e, s;
      return P(null !== (e = null == A ? void 0 : A.id) && void 0 !== e ? e : null, null !== (s = null == A ? void 0 : A.triggerType) && void 0 !== s ? s : null)
    }, [P, A]);
  i.useEffect(() => {
    O(v, (0, h.af)(b))
  }, [O, v, b]);
  let B = (0, I.Z6)(D),
    y = e => (0, n.jsx)(n.Fragment, {
      children: e.map(e => {
        var s;
        return (0, n.jsx)(S.Z, {
          guildId: D,
          triggerType: e,
          rules: null !== (s = Z[e]) && void 0 !== s ? s : [],
          initWithEdit: f === C.KsC.AUTOMOD_MENTION_SPAM && e === g.fX.MENTION_SPAM
        }, e)
      })
    });
  return (0, n.jsxs)(r.FormSection, {
    title: x.Z.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
    tag: "h1",
    children: [(0, n.jsxs)("div", {
      className: R.descriptionContainer,
      children: [(0, n.jsxs)(r.FormSection, {
        tag: "h3",
        className: R.description,
        titleClassName: R.descriptionHeader,
        children: [(0, n.jsx)(r.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          children: x.Z.Messages.GUILD_SETTINGS_AUTOMOD_MESSAGE_FILTER_DESCRIPTION
        }), (0, n.jsx)(r.Text, {
          variant: "text-sm/medium",
          className: R.helpUrl,
          children: x.Z.Messages.GUILD_AUTOMOD_LEARN_MORE_LINK.format({
            helpUrl: u.Z.getArticleURL(C.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE)
          })
        })]
      }), (0, n.jsxs)("div", {
        className: R.descriptionAvatarContainer,
        children: [(0, n.jsx)(r.Avatar, {
          src: (0, E.j)(),
          size: r.AvatarSizes.SIZE_80,
          "aria-label": x.Z.Messages.GUILD_AUTOMOD_USERNAME
        }), (0, n.jsx)(r.TextBadge, {
          text: (0, n.jsxs)("div", {
            className: R.automodBadgeText,
            children: [(0, n.jsx)(r.CheckmarkBoldIcon, {
              size: "xxs",
              color: "currentColor",
              className: R.checkmarkIcon
            }), (0, n.jsx)(r.Text, {
              variant: "text-xs/bold",
              className: R.automodText,
              children: x.Z.Messages.GUILD_AUTOMOD_USERNAME
            })]
          }),
          color: a.Z.unsafe_rawColors.BRAND_500.css,
          className: R.textBadge
        })]
      })]
    }), j ? (0, n.jsx)(T.Z, {}) : Object.entries(B).map(e => {
      let [s, t] = e;
      if (0 === t.length) return (0, n.jsx)(i.Fragment, {}, s);
      let l = null != U[s] ? (0, n.jsx)(r.FormSection, {
        tag: "h3",
        className: R.categoryHeader,
        children: (0, n.jsx)(r.Text, {
          variant: "text-lg/normal",
          color: "header-primary",
          children: U[s]
        })
      }) : null;
      return (0, n.jsxs)("div", {
        className: R.categoryContainer,
        children: [l, y(t)]
      }, s)
    }), null != M && (0, n.jsx)(c.k0, {
      guild: M,
      withDivider: !1,
      className: R.explicitContentFilterSection
    }), (0, n.jsx)(m.Z, {
      guildId: D,
      existingRules: G
    }), v && (0, n.jsx)("div", {
      className: R.endSpacer
    })]
  })
}
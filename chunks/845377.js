"use strict";
t(47120), t(724458);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(498607),
  o = t.n(r),
  c = t(913527),
  d = t.n(c),
  u = t(442837),
  E = t(692547),
  _ = t(481060),
  I = t(946314),
  T = t(984933),
  N = t(63063),
  m = t(709054),
  S = t(434404),
  h = t(981631),
  g = t(689938),
  C = t(752778);
let x = e => {
  let {
    name: s,
    failingName: t,
    description: i,
    checked: l,
    pending: a,
    pendingDescription: r,
    failingDescription: o
  } = e, c = s, d = null, u = null;
  return a ? (d = (0, n.jsx)(_.CircleExclamationPointIcon, {
    size: "custom",
    color: E.Z.unsafe_rawColors.YELLOW_300.css,
    width: 20,
    height: 20
  }), u = null != r ? r : i) : l ? (d = (0, n.jsx)(_.Checkbox, {
    readOnly: !0,
    shape: _.Checkbox.Shapes.ROUND,
    size: 20,
    type: _.Checkbox.Types.INVERTED,
    value: !0
  }), u = i) : (d = (0, n.jsx)(_.CircleXIcon, {
    size: "custom",
    color: E.Z.unsafe_rawColors.RED_400.css,
    width: 20,
    height: 20
  }), c = null != t ? t : s, u = null != o ? o : i), (0, n.jsxs)("div", {
    className: C.checklistItem,
    children: [(0, n.jsx)("div", {
      className: C.checklistIcon,
      children: d
    }), (0, n.jsxs)("div", {
      className: C.checklistText,
      children: [(0, n.jsx)(_.Heading, {
        variant: "heading-md/semibold",
        children: c
      }), (0, n.jsx)(_.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: u
      })]
    })]
  })
};

function R(e, s) {
  return o()(null == e ? void 0 : e.map(e => {
    let [s, t] = e;
    return null == s ? void 0 : s.id
  }), null == s ? void 0 : s.map(e => {
    let [s, t] = e;
    return null == s ? void 0 : s.id
  }))
}
s.Z = e => {
  let {
    guild: s,
    guildId: l,
    className: r,
    noHeader: o = !1,
    failedItemsOnly: c = !1
  } = e, [E, L] = (0, u.Wu)([I.ZP], () => [I.ZP.getDiscoveryChecklist(l), I.ZP.isLoading()], [l]), {
    nsfwProperties: O
  } = null != E ? E : {}, A = null == s ? void 0 : s.hasFeature(h.oNc.PARTNERED), p = null == O ? void 0 : O.channels_banned_keywords, M = (0, u.e7)([T.ZP], () => {
    var e, t, n;
    if (null == p) return [];
    let i = null !== (t = (null !== (e = T.ZP.getChannels(s.id)) && void 0 !== e ? e : {})[T.sH]) && void 0 !== t ? t : [],
      l = null !== (n = null == i ? void 0 : i.map(e => e.channel).reduce((e, s) => ({
        ...e,
        [s.id]: s
      }), {})) && void 0 !== n ? n : {};
    return null == p ? [] : Object.entries(p).map(e => {
      let [s, t] = e;
      return [l[s], t]
    })
  }, [s.id, p], R);
  if (L || null == E) return (0, n.jsxs)("div", {
    className: a()(C.container, C.loaderContainer, r),
    children: [(0, n.jsx)(_.Heading, {
      className: C.loadingText,
      variant: "heading-md/semibold",
      color: "header-secondary",
      children: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_LOADING
    }), (0, n.jsx)(_.Spinner, {
      className: C.__invalid_spinner
    })]
  });
  let f = A ? g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SIZE_DESCRIPTION_FAILING_PARTNERS : g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SIZE_DESCRIPTION_FAIL,
    D = [{
      name: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SAFE,
      failingName: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SAFE_FAILING,
      description: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SAFE_DESCRIPTION,
      failingDescription: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SAFE_DESCRIPTION_FAILING_GUIDELINES.format({
        termsURL: h.EYA.TERMS,
        guidelinesURL: N.Z.getArticleURL(h.BhN.PUBLIC_GUILD_GUILDLINES)
      }),
      checked: null == E ? void 0 : E.safeEnvironment
    }, {
      name: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SIZE.format({
        minMembers: E.minimumGuildSize
      }),
      failingName: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SIZE_FAIL.format({
        minMembers: E.minimumGuildSize.toLocaleString()
      }),
      description: null,
      failingDescription: f.format({
        minMembers: E.minimumGuildSize.toLocaleString()
      }),
      checked: null == E ? void 0 : E.size
    }, {
      name: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_AGE,
      failingName: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_AGE_FAILING,
      description: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_AGE_DESCRIPTION.format({
        minimumGuildAge: Math.ceil(E.minimumGuildAge / 7)
      }),
      failingDescription: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_AGE_DESCRIPTION_FAILING.format({
        minimumGuildAge: Math.ceil(E.minimumGuildAge / 7),
        passDate: d()(m.default.extractTimestamp(l)).add(E.minimumGuildAge, "days").format("LL")
      }),
      checked: null == E ? void 0 : E.age
    }, {
      name: (null == E ? void 0 : E.healthScorePending) ? g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_PENDING : g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY,
      failingName: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_FAILING,
      description: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_DESCRIPTION,
      failingDescription: (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(_.Text, {
          color: "text-muted",
          className: C.healthFailingDescription,
          variant: "text-sm/normal",
          children: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_DESCRIPTION_FAILING
        }), (null == E ? void 0 : E.engagementHealthy) ? null : (0, n.jsx)(_.Text, {
          color: "text-danger",
          variant: "text-sm/normal",
          children: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_ENGAGEMENT_FAILING
        }), (null == E ? void 0 : E.retentionHealthy) ? null : (0, n.jsx)(_.Text, {
          color: "text-danger",
          variant: "text-sm/normal",
          children: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_RETENTION_FAILING
        }), (() => {
          if (null == E || null == E.healthScore) return !1;
          let {
            retentionHealthy: e,
            engagementHealthy: s,
            healthScore: t
          } = E, {
            avg_nonnew_participators: n,
            avg_nonnew_communicators: i,
            perc_ret_w1_intentful: l
          } = t;
          return !e && null != l || !s && null != n && null != i
        })() && (0, n.jsx)(_.Button, {
          className: C.detailsButton,
          look: _.Button.Looks.LINK,
          size: _.Button.Sizes.NONE,
          color: _.Button.Colors.LINK,
          onClick: () => (0, _.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([t.e("99387"), t.e("23401")]).then(t.bind(t, 666599));
            return s => (0, n.jsx)(e, {
              ...s,
              guildChecklist: E
            })
          }),
          children: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTH_VIEW_DETAILS
        })]
      }),
      pendingDescription: (null == E ? void 0 : E.size) ? g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_DESCRIPTION_PENDING.format({
        checkBackHook: (e, s) => (0, n.jsx)("strong", {
          className: C.healthPending,
          children: e
        }, s)
      }) : g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_DESCRIPTION_PENDING_SIZE.format({
        minMembers: 200
      }),
      checked: null == E ? void 0 : E.healthy,
      pending: null == E ? void 0 : E.healthScorePending
    }, {
      name: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_NSFW,
      failingName: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_NSFW_FAILING,
      description: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_NSFW_DESCRIPTION,
      failingDescription: (0, n.jsxs)(n.Fragment, {
        children: [(null == O ? void 0 : O.channels) != null ? (0, n.jsx)(_.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_CHANGE_CHANNEL_NAMES_2.format({
            channelHook: (e, s) => (0, n.jsx)("span", {
              className: C.doesNot,
              children: e
            }, s)
          })
        }) : null, M.length > 0 ? (0, n.jsx)("div", {
          className: C.indent,
          children: M.map(e => {
            let [s, t] = e;
            return null != s ? (0, n.jsxs)(_.Text, {
              color: "text-muted",
              variant: "text-sm/normal",
              children: ["#", s.name, ": ", t.join(", ")]
            }, s.id) : null
          })
        }) : null, (null == O ? void 0 : O.name) != null ? (0, n.jsx)(_.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_CHANGE_NAME.format({
            nameHook: (e, s) => (0, n.jsx)("span", {
              className: C.doesNot,
              children: e
            }, s)
          })
        }) : null, (null == O ? void 0 : O.description) != null ? (0, n.jsx)(_.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_CHANGE_DESCRIPTION.format({
            descriptionHook: (e, s) => (0, n.jsx)("span", {
              className: C.doesNot,
              children: e
            }, s)
          })
        }) : null]
      }),
      checked: null == O || 0 === Object.keys(O).length
    }, {
      name: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_2FA,
      failingName: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_2FA_FAILING,
      description: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_2FA_DESCRIPTION,
      failingDescription: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_2FA_DESCRIPTION_FAILING.format({
        onClick: () => S.Z.setSection(h.pNK.SAFETY, h.KsC.SAFETY_PERMISSIONS)
      }),
      checked: null == E ? void 0 : E.protected
    }];
  return (0, n.jsxs)("div", {
    className: a()(C.container, r),
    children: [(() => {
      let e = g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_DOES_NOT_PASS,
        s = (null == E ? void 0 : E.sufficient) ? t(909425) : t(177266);
      return o ? null : (0, n.jsxs)("div", {
        className: C.header,
        children: [(0, n.jsx)("img", {
          alt: "",
          src: s,
          className: C.headerIcon,
          width: 40
        }), (0, n.jsx)(_.Heading, {
          variant: "heading-md/semibold",
          children: (null == E ? void 0 : E.sufficient) ? g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_GOOD_STANDING : e.format({
            doesNotHook: (e, s) => (0, n.jsx)("strong", {
              className: C.doesNot,
              children: e
            }, s)
          })
        })]
      })
    })(), D.filter(e => !c || null == e.checked || !e.checked).map((e, s) => (0, n.jsxs)(i.Fragment, {
      children: [(0, n.jsx)(x, {
        ...e
      }), s < D.length - 1 ? (0, n.jsx)("hr", {
        className: C.separator
      }) : null]
    }, e.name))]
  })
}
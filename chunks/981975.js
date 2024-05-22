"use strict";
s.r(t), s.d(t, {
  default: function() {
    return j
  }
}), s("47120"), s("653041"), s("536091");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("392711"),
  o = s.n(r),
  d = s("442837"),
  u = s("481060"),
  c = s("570140"),
  E = s("275759"),
  _ = s("153124"),
  I = s("151785"),
  T = s("759231"),
  S = s("63063"),
  f = s("243730"),
  m = s("764260"),
  N = s("946724"),
  g = s("95242"),
  h = s("530198"),
  C = s("420966"),
  R = s("203377"),
  x = s("981631"),
  L = s("856651"),
  O = s("689938"),
  p = s("273879"),
  A = s("585512");
let M = (0, _.uid)();

function D(e, t) {
  return t !== E.ConnectionConfigurationRuleOperator.AND ? Object.values(o().groupBy(e, e => "".concat(e.connectionType, ":").concat(e.applicationId))) : 0 === e.length ? [] : [
    [...e]
  ]
}

function v(e) {
  let {
    handleAddVerificationClicked: t,
    locked: s
  } = e;
  return (0, a.jsxs)("div", {
    className: p.headerNoConfigContainer,
    children: [(0, a.jsx)(u.Heading, {
      className: p.headerHeading,
      variant: "eyebrow",
      children: O.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER
    }), (0, a.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: O.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_DESCRIPTION_LEARN_MORE.format({
        helpdeskArticleUrl: S.default.getArticleURL(x.HelpdeskArticles.CONNECTION_DETAILS_ADMIN)
      })
    }), (0, a.jsx)(u.Button, {
      disabled: s,
      className: p.addVerificationButton,
      size: u.Button.Sizes.MEDIUM,
      look: u.Button.Looks.FILLED,
      color: u.Button.Colors.BRAND,
      onClick: t,
      children: O.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_ADD_CONNECTION
    })]
  })
}

function j(e) {
  let {
    guild: t,
    role: s,
    locked: n,
    setSelectedSection: r,
    integrations: o
  } = e, {
    headerHeight: _,
    headerRef: j
  } = (0, g.default)(0), {
    scrolledToTop: G,
    handleScroll: U
  } = (0, C.useScrolledToTop)(), P = (0, d.useStateFromStores)([f.default], () => {
    var e;
    return null === (e = f.default.getRoleMemberCount(t.id)) || void 0 === e ? void 0 : e[s.id]
  }, [s.id, t.id]), b = (0, d.useStateFromStoresArray)([N.default], () => {
    var e;
    return null !== (e = N.default.getEditedRoleConnectionConfigurationsMap().get(s.id)) && void 0 !== e ? e : []
  }), y = b.length > 1 ? E.ConnectionConfigurationRuleOperator.OR : E.ConnectionConfigurationRuleOperator.AND, B = l.useMemo(() => y === E.ConnectionConfigurationRuleOperator.OR ? b.flat() : null != b && b.length > 0 ? b[0] : [], [y, b]), F = l.useMemo(() => new Set(B.map(e => e.connectionType)), [B]);

  function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
      a = [...B];
    a.push({
      connectionType: e,
      connectionMetadataField: void 0,
      applicationId: t,
      operator: void 0,
      value: void 0
    }), (0, m.updateRoleConnectionConfigurations)(s.id, D(a, y))
  }

  function k() {
    c.default.dispatch({
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete: e => H(e),
      excludedPlatformTypes: F,
      integrations: o,
      onCompleteApplication: e => H(L.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE, e)
    })
  }
  let w = null;
  if (0 === B.length) w = (0, a.jsx)(v, {
    handleAddVerificationClicked: k,
    locked: n
  });
  else if (B.length > 0) {
    var V, Y;
    let e = null;
    B.length < 10 && (e = (0, a.jsx)(u.Button, {
      className: i()(p.addVerificationButton, p.addVerificationButtonAppend),
      size: u.Button.Sizes.LARGE,
      look: u.Button.Looks.BLANK,
      color: u.Button.Colors.LINK,
      onClick: k,
      disabled: n,
      children: (0, a.jsxs)("div", {
        className: p.addVerificationButtonAppendTextContainer,
        children: [(0, a.jsx)(I.default, {}), O.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_ADD_CONNECTION]
      })
    })), w = (0, a.jsxs)(a.Fragment, {
      children: [(V = () => (0, m.updateRoleConnectionConfigurations)(s.id, []), Y = n, (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)("div", {
          className: p.headerTitleContainer,
          children: [(0, a.jsx)("div", {
            className: p.headerTitleTextContainer,
            children: (0, a.jsx)(u.Heading, {
              variant: "eyebrow",
              children: O.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER
            })
          }), (0, a.jsx)(u.Button, {
            className: p.headerTitleButton,
            size: u.Button.Sizes.TINY,
            look: u.Button.Looks.LINK,
            color: u.Button.Colors.LINK,
            onClick: V,
            disabled: Y,
            children: O.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_CLEAR_ALL
          })]
        }), (0, a.jsx)(u.Text, {
          variant: "text-sm/normal",
          children: O.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_DESCRIPTION_LEARN_MORE.format({
            helpdeskArticleUrl: S.default.getArticleURL(x.HelpdeskArticles.CONNECTION_DETAILS_ADMIN)
          })
        })]
      })), function(e, t, s, l, n) {
        let i = D(l, E.ConnectionConfigurationRuleOperator.OR);
        return (0, a.jsx)(u.FormItem, {
          className: p.operatorContainer,
          title: O.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_REQUIREMENTS,
          children: (0, a.jsx)(u.RadioGroup, {
            options: [{
              name: O.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_OR_DESCRIPTION,
              value: E.ConnectionConfigurationRuleOperator.OR
            }, {
              name: O.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AND_DESCRIPTION,
              value: E.ConnectionConfigurationRuleOperator.AND
            }],
            onChange: e => n(l, e.value),
            value: s,
            disabled: e || i.length < 2,
            "aria-labelledby": M
          })
        })
      }(n, s.id, y, B, (e, t) => (0, m.updateRoleConnectionConfigurations)(s.id, D(e, t))), function(e, t, s, l, n) {
        function i(s, a) {
          let l = [];
          for (let t of e) l.push({
            ...t
          });
          if (null == s) {
            let t = e[a];
            null !== t && null == t.connectionMetadataField && null == t.operator && null == t.value ? l = l.filter(e => null == t.applicationId ? e.connectionType !== t.connectionType : e.connectionType !== t.connectionType && e.applicationId !== t.applicationId) : l.splice(a, 1)
          } else - 1 === a ? l.push(s) : a >= 0 && (l[a] = s);
          t(l)
        }
        let r = new Map;
        for (let t of (e.forEach((e, t) => {
            let s = "".concat(e.connectionType, ":").concat(e.applicationId);
            if (r.has(s)) {
              let a = r.get(s);
              null == a || a.push({
                index: t,
                configuration: e
              })
            } else r.set(s, [{
              index: t,
              configuration: e
            }])
          }), r.values())) {
          if (t.some(e => {
              let {
                configuration: t
              } = e;
              return null == t.connectionMetadataField && null == t.operator && null == t.value
            })) continue;
          let s = {
              ...t[0].configuration,
              connectionMetadataField: void 0,
              operator: void 0,
              value: void 0
            },
            a = e.push(s);
          t.push({
            index: a - 1,
            configuration: s
          })
        }
        return (0, a.jsx)("div", {
          className: p.configurationsContainer,
          children: Array.from(r.values()).map(e => (0, a.jsx)(h.default, {
            configurationItems: e,
            onConfigurationChange: i,
            locked: s,
            integrations: n
          }, e[0].configuration.connectionType + ":" + e[0].index))
        })
      }(B, e => (0, m.updateRoleConnectionConfigurations)(s.id, D(e, y)), n, s.id, o), e]
    })
  }
  return (0, a.jsx)(u.AdvancedScrollerAuto, {
    className: p.scroller,
    style: {
      scrollPaddingTop: _
    },
    onScroll: U,
    children: (0, a.jsxs)("div", {
      className: A.contentWidth,
      children: [(0, a.jsx)("div", {
        className: i()(A.header, A.stickyHeader, {
          [A.stickyHeaderElevated]: !G
        }),
        ref: j,
        children: (0, a.jsx)(C.default, {
          guild: t,
          role: s,
          selectedSection: R.GuildSettingsRoleEditSections.VERIFICATIONS,
          setSelectedSection: r
        })
      }), (null != P ? P : 0) > 0 ? (0, a.jsxs)("div", {
        className: p.warningContainer,
        children: [(0, a.jsx)(T.default, {
          className: p.warningIcon
        }), (0, a.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          children: O.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MEMBERS_WARNING
        })]
      }) : null, w]
    })
  })
}
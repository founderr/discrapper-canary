"use strict";
n.r(t), n.d(t, {
  PlayStyleSelector: function() {
    return L
  },
  PrimetimeSelector: function() {
    return O
  },
  TraitSelector: function() {
    return v
  }
}), n("47120"), n("653041");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("153832"),
  o = n("143927"),
  u = n("481060"),
  d = n("924801"),
  c = n("359380"),
  f = n("571245"),
  E = n("824959"),
  h = n("898543"),
  _ = n("441674"),
  C = n("465670"),
  m = n("950463"),
  S = n("90062"),
  I = n("964309"),
  T = n("729285"),
  p = n("480222"),
  g = n("207796"),
  A = n("308083"),
  N = n("689938"),
  R = n("896328");

function v() {
  let e = (0, g.useClanDiscoveryUIStore)(e => e.selectedTraits, o.default),
    t = (0, g.useClanDiscoveryUIStore)(e => e.setSelectedTraits, o.default),
    n = s.useMemo(() => N.default.getAvailableLocales().map(e => ({
      value: e.value,
      label: e.name
    })), []),
    [l, i] = s.useMemo(() => [Array.from(e).filter(e => A.LANGUAGES_SET.has(e)), Array.from(e).filter(e => !A.LANGUAGES_SET.has(e))], [e]),
    r = s.useCallback(e => {
      let {
        interests: n
      } = e;
      null != n && t(n)
    }, [t]),
    d = s.useCallback(e => {
      r({
        interests: new Set([...i, ...e])
      })
    }, [r, i]);
  return (0, a.jsxs)(p.default, {
    children: [(0, a.jsxs)("div", {
      className: R.traitHeader,
      children: [(0, a.jsx)(u.Heading, {
        variant: "heading-xxl/normal",
        color: "header-primary",
        children: N.default.Messages.CLAN_DISCOVERY_TRAIT_TITLE
      }), (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: N.default.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE
      })]
    }), (0, a.jsxs)("div", {
      className: R.traits,
      children: [(0, a.jsx)("div", {
        className: R.traitCategory,
        children: (0, a.jsx)(c.TraitSelectionCategory, {
          title: N.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
          icon: h.default,
          traits: A.VALORANT_TRAITS,
          interests: e,
          handleUpdate: r
        })
      }), (0, a.jsx)("div", {
        className: R.traitCategory,
        children: (0, a.jsx)(c.TraitSelectionCategory, {
          title: N.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
          icon: S.default,
          traits: A.AGE_TRAITS,
          interests: e,
          handleUpdate: r
        })
      }), (0, a.jsx)("div", {
        className: R.traitCategory,
        children: (0, a.jsx)(c.TraitSelectionCategory, {
          title: N.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
          icon: I.default,
          traits: A.IDENTITY_TRAITS,
          interests: e,
          handleUpdate: r
        })
      }), (0, a.jsxs)("div", {
        className: R.traitCategory,
        children: [(0, a.jsxs)("div", {
          className: R.languagesTitle,
          children: [(0, a.jsx)(E.default, {
            className: R.languagesIcon
          }), (0, a.jsx)(u.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: N.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
          })]
        }), (0, a.jsx)("div", {
          className: R.languagesSelect,
          children: (0, a.jsx)(u.SearchableSelect, {
            options: n,
            value: l,
            onChange: d,
            placeholder: N.default.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
            multi: !0
          })
        })]
      }), (0, a.jsx)("div", {
        className: R.traitCategory,
        children: (0, a.jsx)(c.TraitSelectionCategory, {
          title: N.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LOCALE,
          icon: m.default,
          traits: A.LOCALE_TRAITS,
          interests: e,
          handleUpdate: r
        })
      })]
    })]
  })
}

function O() {
  let e = s.useMemo(() => (0, d.getDayOptions)(), []),
    t = (0, g.useClanDiscoveryUIStore)(e => e.selectedPrimetimes, o.default),
    n = (0, g.useClanDiscoveryUIStore)(e => e.setSelectedPrimetime, o.default),
    l = s.useCallback((e, a) => {
      let s = [...t];
      s[e].day = a, n(s)
    }, [t, n]),
    c = s.useCallback((e, a) => {
      let s = [...t];
      s[e].time = a, n(s)
    }, [t, n]),
    E = s.useCallback(e => {
      let a = [...t];
      a.splice(e, 1), n(a)
    }, [t, n]),
    h = s.useCallback(() => {
      if (t.length >= 3) return;
      let e = [...t];
      e.push({
        id: (0, r.v4)(),
        day: void 0,
        time: "morning"
      }), n(e)
    }, [t, n]);
  return (0, a.jsxs)(p.default, {
    children: [(0, a.jsxs)("div", {
      className: R.playtimeHeader,
      children: [(0, a.jsx)(u.Heading, {
        variant: "heading-xxl/medium",
        children: N.default.Messages.CLAN_SETUP_PRIMETIME_TITLE
      }), (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: N.default.Messages.CLAN_SETUP_PRIMETIME_SUBTITLE
      })]
    }), (0, a.jsxs)("div", {
      className: R.playtimes,
      children: [t.map((t, n) => (0, a.jsxs)("div", {
        className: R.timeSelectorRow,
        children: [(0, a.jsx)(u.SearchableSelect, {
          value: t.day,
          options: e,
          placeholder: N.default.Messages.CLAN_PRIMETIME_PLACEHOLDER,
          onChange: e => l(n, e)
        }), (0, a.jsx)(f.default, {
          value: t.time,
          onChange: e => c(n, e)
        }), (0, a.jsx)(u.Clickable, {
          onClick: () => E(n),
          className: R.clickable,
          children: (0, a.jsx)(C.default, {
            className: R.removeIcon
          })
        })]
      }, t.id)), t.length < 3 && (0, a.jsxs)(u.Clickable, {
        onClick: h,
        className: i()(R.timeSelectorRow, R.clickable),
        children: [(0, a.jsx)(T.default, {
          className: R.plusIcon
        }), (0, a.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: N.default.Messages.CLAN_SETUP_PRIMETIME_ADD
        })]
      })]
    })]
  })
}

function L() {
  let e = (0, u.useToken)(u.tokens.colors.WHITE),
    t = (0, g.useClanDiscoveryUIStore)(e => e.selectedPlaystyle.id, o.default),
    n = (0, g.useClanDiscoveryUIStore)(e => e.setSelectedPlaystyle, o.default),
    l = s.useMemo(() => Object.values((0, A.getPlaystyleOptions)()), []);
  return (0, a.jsxs)(p.default, {
    children: [(0, a.jsxs)("div", {
      className: R.playstyleHeader,
      children: [(0, a.jsx)(u.Heading, {
        variant: "heading-xxl/normal",
        color: "header-primary",
        children: N.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE
      }), (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: N.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE
      })]
    }), (0, a.jsx)("div", {
      className: R.playstyles,
      children: l.map(s => (0, a.jsxs)(u.Clickable, {
        className: i()(R.playstyleOption, {
          [R.selectedPlaystyle]: s.type === t
        }),
        onClick: () => n({
          id: s.type,
          name: s.title
        }),
        children: [(0, a.jsx)(u.Heading, {
          variant: "heading-xxl/medium",
          children: s.emoji
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsx)(u.Heading, {
            variant: "heading-md/medium",
            children: s.title
          }), (0, a.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: s.subtitle
          })]
        }), s.type === t && (0, a.jsx)(_.default, {
          backgroundColor: e.hex(),
          className: R.checkmark
        })]
      }, s.type))
    })]
  })
}
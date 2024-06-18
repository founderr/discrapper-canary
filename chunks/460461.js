"use strict";
t.d(s, {
  J: function() {
    return v
  }
}), t(47120), t(315314), t(610138), t(216116), t(78328), t(815648), t(627494), t(757143);
var n = t(735250),
  i = t(470079),
  l = t(442837),
  a = t(692547),
  r = t(481060),
  o = t(225433),
  c = t(484614),
  d = t(852860),
  u = t(296386),
  E = t(150192),
  _ = t(688465),
  I = t(134432),
  T = t(813197),
  N = t(208567),
  m = t(496675),
  S = t(315507),
  h = t(987134),
  g = t(768581),
  C = t(63063),
  x = t(434404),
  R = t(999382),
  L = t(450474),
  O = t(190287),
  A = t(981631),
  p = t(731455),
  M = t(689938),
  f = t(845978);
let D = "https:" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/servers/",
  v = () => {
    let {
      guild: e,
      guildMetadata: s,
      submitting: t
    } = (0, l.cj)([R.Z], () => ({
      submitting: R.Z.isSubmitting(),
      guild: R.Z.getGuild(),
      guildMetadata: R.Z.getMetadata()
    }));
    return (0, n.jsx)(d.Z, {
      submitting: t,
      onReset: () => {
        if (null != e) x.Z.init(e.id)
      },
      onSave: () => {
        if (null != e) x.Z.saveGuild(e.id, {
          discoverySplash: e.discoverySplash,
          description: e.description
        }), u.Vv({
          guildId: e.id,
          primaryCategoryId: s.primaryCategoryId,
          keywords: s.keywords,
          emojiDiscoverabilityEnabled: s.emojiDiscoverabilityEnabled,
          partnerActionedTimestamp: s.partnerActionedTimestamp,
          partnerApplicationTimestamp: s.partnerApplicationTimestamp,
          isPublished: s.isPublished,
          reasonsToJoin: s.reasonsToJoin,
          socialLinks: s.socialLinks.filter(e => e),
          about: s.about
        })
      }
    })
  },
  j = () => {
    var e;
    let s = i.useRef(null),
      t = (0, l.e7)([R.Z], () => R.Z.getGuild()),
      [d, v] = i.useState(!1);
    i.useEffect(() => {
      !d && null != t && (u.le(), u.aC(t.id), u.i3(t.id), v(!0))
    }, [t, d]);
    let {
      canManageGuild: j
    } = (0, l.cj)([m.Z], () => ({
      canManageGuild: m.Z.can(A.Plq.MANAGE_GUILD, t)
    })), Z = (0, l.e7)([R.Z], () => R.Z.isGuildMetadataLoaded()), U = (0, l.e7)([R.Z], () => null != t ? R.Z.getMetadata() : null), G = (0, l.e7)([R.Z], () => null != t && (null == U ? void 0 : U.isPublished) ? R.Z.getSlug() : null), [P, b] = i.useState([!0]), [B, y] = i.useState(!0), [F, k] = i.useState([!1]), [H, w] = i.useState([""]), V = e => {
      let s = Object.entries(p.zo).filter(e => !H.includes(e[1].presentation)).map(e => ({
        label: e[1].presentation,
        value: e[0]
      }));
      return null == e || "" === e ? s : s.concat({
        label: e,
        value: e
      })
    }, Y = e => {
      try {
        var s, t, n, i;
        let l = new URL(e).hostname.split(".");
        if (3 === l.length && "bandcamp" === l[1].toLowerCase()) return p.zo.bandcamp.presentation;
        let a = null !== (t = null === (s = l.shift()) || void 0 === s ? void 0 : s.toLowerCase()) && void 0 !== t ? t : "";
        if ("www" === a && (a = null !== (i = null === (n = l.shift()) || void 0 === n ? void 0 : n.toLowerCase()) && void 0 !== i ? i : ""), a in p.zo) return p.zo[a].presentation;
        return null
      } catch {
        return null
      }
    };
    i.useEffect(() => {
      if (null !== U) {
        let e = [],
          s = [];
        U.socialLinks.forEach((t, n) => {
          if ("" !== t) {
            let i = Y(t);
            null !== i ? (s[n] = i, e[n] = !0) : e[n] = !1
          } else e[n] = !0
        }), w(s), b(e), y(e.every(e => !0 === e))
      }
    }, [U]);
    let W = (0, l.e7)([R.Z], () => null != t ? R.Z.getErrors() : null),
      z = (0, l.e7)([E.Z], () => E.Z.getPrimaryCategories(), [], E.j);
    if (null == t || null == U) return null;
    let K = e => {
        x.Z.updateGuild({
          discoverySplash: e
        })
      },
      q = e => {
        var s;
        (null == t ? void 0 : t.id) != null && u.TA(null == t ? void 0 : t.id, null !== (s = null == e ? void 0 : e.value) && void 0 !== s ? s : p.o3)
      },
      X = e => {
        var s;
        x.Z.updateGuild({
          description: null !== (s = null == e ? void 0 : e.replaceAll("\n", "")) && void 0 !== s ? s : ""
        })
      },
      Q = e => {
        u.mA(t.id, e)
      },
      J = e => {
        u.W1(t.id, e), e ? u.Vv({
          guildId: t.id,
          primaryCategoryId: U.primaryCategoryId,
          keywords: U.keywords,
          emojiDiscoverabilityEnabled: U.emojiDiscoverabilityEnabled,
          partnerActionedTimestamp: U.partnerActionedTimestamp,
          partnerApplicationTimestamp: U.partnerApplicationTimestamp,
          isPublished: !0,
          reasonsToJoin: U.reasonsToJoin,
          socialLinks: U.socialLinks,
          about: U.about
        }) : u.Vv({
          guildId: t.id,
          primaryCategoryId: U.primaryCategoryId,
          keywords: U.keywords,
          emojiDiscoverabilityEnabled: U.emojiDiscoverabilityEnabled,
          partnerActionedTimestamp: U.partnerActionedTimestamp,
          partnerApplicationTimestamp: U.partnerApplicationTimestamp,
          isPublished: !1,
          reasonsToJoin: U.reasonsToJoin,
          socialLinks: U.socialLinks,
          about: U.about
        }), x.Z.saveGuild(t.id, {
          discoverySplash: t.discoverySplash,
          description: t.description
        })
      },
      $ = () => {
        if (U.socialLinks.length < 9) {
          let e = [...U.socialLinks];
          u.t$(t.id, e.concat("")), w(H.concat(""))
        }
      },
      ee = (e, s) => {
        let n = [...U.socialLinks],
          i = [...H],
          l = [...P];
        i[s] = e, n[s] = p.zo[e].baseUrl, l[s] = !0, b(l), w(i), y(l.every(e => !0 === e)), u.t$(t.id, n)
      },
      es = (e, s) => {
        let n = [...U.socialLinks],
          i = n[s],
          l = e;
        0 === i.length && l.length > 1 && !1 === RegExp("^https?:").test(l) && (l = "https://" + l), n[s] = l, u.t$(t.id, n)
      },
      et = e => {
        let s = [...F];
        s.splice(e, 1), k(s);
        let n = [...P];
        n.splice(e, 1), b(n);
        let i = [...H];
        i.splice(e, 1), w(i);
        let l = [...U.socialLinks];
        l.splice(e, 1), u.t$(t.id, l)
      },
      en = e => {
        let {
          reason: s = "",
          emoji_name: t = ""
        } = e;
        return null !== s && s.length >= 10 && s.length <= 128 && null !== t
      },
      ei = e => {
        let {
          reason: s = "",
          emoji_name: t = ""
        } = e;
        return (null === s || "" === s) && null === t
      },
      el = [{
        title: M.Z.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_REQUIREMENTS,
        items: [{
          description: M.Z.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_UPLOAD_COVER_IMAGE,
          completed: null !== t.discoverySplash && "" !== t.discoverySplash
        }, {
          description: M.Z.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_SHORT_DESCRIPTION,
          completed: null !== t.description && "" !== t.description
        }, {
          description: M.Z.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_ABOUT,
          completed: null !== U.about && U.about.length >= 300 && U.about.length <= 2400
        }, {
          description: M.Z.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_REASONS,
          completed: null !== U.reasonsToJoin && U.reasonsToJoin.every(e => ei(e) || en(e)) && U.reasonsToJoin.filter(en).length >= 2
        }]
      }],
      ea = z.map(e => ({
        label: e.name,
        value: e.categoryId
      })),
      er = (e, s) => {
        let t = [...F];
        t[e] = s, k(t)
      };
    return (0, n.jsx)("div", {
      className: f.settingsColumn,
      children: (0, n.jsx)("div", {
        className: f.settingsContainer,
        children: (0, n.jsx)(r.ScrollerAuto, {
          className: f.settingsScroller,
          children: (0, n.jsx)("main", {
            ref: s,
            className: f.settingsContent,
            children: (0, n.jsx)(r.FocusRingScope, {
              containerRef: s,
              children: (0, n.jsxs)("div", {
                className: f.container,
                children: [(0, n.jsxs)(r.FormSection, {
                  className: f.mainContent,
                  title: (0, n.jsxs)("div", {
                    children: [M.Z.Messages.DISCOVERY_LANDING_PAGE, " ", (0, n.jsx)(_.Z, {
                      className: f.betaTag
                    })]
                  }),
                  tag: r.FormTitleTags.H1,
                  children: [(0, n.jsxs)(r.FormText, {
                    className: f.tabMainDescription,
                    type: r.FormTextTypes.DESCRIPTION,
                    children: [M.Z.Messages.DISCOVERY_LANDING_PAGE_DESCRIPTION.format({
                      discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT
                    }), " ", M.Z.Messages.DISCOVERY_LANDING_PAGE_LEARN_MORE.format({
                      learnMoreURL: C.Z.getArticleURL(A.BhN.SERVER_WEB_PAGES)
                    })]
                  }), (() => {
                    if (!U.isPublished || null == G) return;
                    let e = D + G;
                    return (0, n.jsx)(n.Fragment, {
                      children: (0, n.jsxs)(r.FormSection, {
                        className: f.noDividerFormSection,
                        children: [(0, n.jsx)(r.FormTitle, {
                          className: f.formTitle,
                          children: M.Z.Messages.DISCOVERY_LANDING_PAGE_PUBLISHED_URL_TITLE
                        }), (0, n.jsx)(c.Z, {
                          value: e
                        }), (0, n.jsx)(r.Button, {
                          className: f.viewPageButton,
                          size: r.Button.Sizes.SMALL,
                          color: r.Button.Colors.BRAND,
                          onClick: () => window.open(e),
                          children: M.Z.Messages.DISCOVERY_LANDING_PAGE_PUBLISHED_URL_VIEW_PAGE_BUTTON
                        })]
                      })
                    })
                  })(), (0, n.jsx)(r.FormDivider, {
                    className: f.divider
                  }), (() => {
                    if (null != t) return (0, n.jsxs)(n.Fragment, {
                      children: [(0, n.jsxs)(r.FormSection, {
                        children: [(0, n.jsx)(r.FormTitle, {
                          className: f.formTitle,
                          children: M.Z.Messages.DISCOVERY_LANDING_PAGE_CATEGORY_TITLE
                        }), (0, n.jsx)(r.FormText, {
                          type: r.FormTextTypes.DESCRIPTION,
                          className: f.description,
                          children: M.Z.Messages.DISCOVERY_LANDING_PAGE_CATEGORY_DESCRIPTION
                        })]
                      }), (0, n.jsx)(h.Z, {
                        value: U.primaryCategoryId === p.o3 ? null : null == U ? void 0 : U.primaryCategoryId,
                        placeholder: M.Z.Messages.SELECT,
                        options: ea,
                        onChange: q,
                        disabled: !j,
                        searchable: !0,
                        clearable: !0
                      }), (0, n.jsxs)(r.FormSection, {
                        className: f.noDividerFormSection,
                        children: [(0, n.jsx)(r.FormTitle, {
                          className: f.formTitle,
                          children: M.Z.Messages.GUILD_SETTINGS_DISCOVERY_SUBCATEGORY_TITLE
                        }), (0, n.jsx)(L.Z, {
                          guild: t,
                          guildMetadata: U,
                          disabled: !j
                        })]
                      }), (null == W ? void 0 : W.category) != null ? (0, n.jsx)(r.Text, {
                        color: "text-danger",
                        className: f.error,
                        variant: "text-sm/normal",
                        children: W.category
                      }) : null]
                    })
                  })(), (0, n.jsx)(r.FormDivider, {
                    className: f.divider
                  }), (() => {
                    if (null != t) return (0, n.jsxs)(n.Fragment, {
                      children: [(0, n.jsxs)(r.FormSection, {
                        className: f.twoColumnFormSection,
                        children: [(0, n.jsxs)("div", {
                          children: [(0, n.jsx)(r.FormTitle, {
                            className: f.formTitle,
                            children: M.Z.Messages.FORM_LABEL_DISCOVERY_COVER_IMAGE
                          }), (0, n.jsx)(r.FormText, {
                            type: r.FormTextTypes.DESCRIPTION,
                            className: f.formDescription,
                            children: M.Z.Messages.DISCOVERY_LANDING_PAGE_COVER_IMAGE_DESCRIPTION
                          }), (0, n.jsxs)(r.Button, {
                            size: r.Button.Sizes.SMALL,
                            color: r.Button.Colors.PRIMARY,
                            children: [M.Z.Messages.UPLOAD_BACKGROUND, (0, n.jsx)(T.ZP, {
                              disabled: !j,
                              onChange: K
                            })]
                          })]
                        }), (0, n.jsx)(N.Z, {
                          image: t.discoverySplash,
                          makeURL: e => g.ZP.getGuildDiscoverySplashURL({
                            id: t.id,
                            splash: e,
                            size: 512 * (0, I.x_)()
                          }),
                          disabled: !j,
                          onChange: K,
                          hint: M.Z.Messages.CHANGE_SPLASH,
                          imageClassName: f.imageUploaderInnerSquare,
                          hideSize: !0
                        })]
                      }), (null == W ? void 0 : W.discovery_splash) != null ? (0, n.jsx)(r.Text, {
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: W.discovery_splash
                      }) : null]
                    })
                  })(), (0, n.jsx)(r.FormDivider, {
                    className: f.divider
                  }), (0, n.jsxs)(r.FormSection, {
                    children: [(0, n.jsx)(r.FormTitle, {
                      className: f.formTitle,
                      children: M.Z.Messages.FORM_LABEL_SERVER_DESCRIPTION
                    }), (0, n.jsx)(r.FormText, {
                      className: f.description,
                      type: r.FormTextTypes.DESCRIPTION,
                      children: M.Z.Messages.DISCOVERY_LANDING_PAGE_SERVER_DESCRIPTION
                    }), (0, n.jsx)(r.TextArea, {
                      value: null !== t.description ? t.description : "",
                      placeholder: M.Z.Messages.DISCOVERY_LANDING_PAGE_SERVER_DESCRIPTION_HINT,
                      onChange: X,
                      maxLength: 120,
                      disabled: !j
                    })]
                  }), (0, n.jsx)(r.FormDivider, {
                    className: f.divider
                  }), (() => {
                    if (null == U) return null;
                    let e = 0 === U.reasonsToJoin.length ? [, , , , ].fill({
                      reason: "",
                      emoji_name: null
                    }) : U.reasonsToJoin;
                    return (0, n.jsxs)(r.FormSection, {
                      children: [(0, n.jsx)(r.FormTitle, {
                        className: f.formTitle,
                        children: M.Z.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_TITLE
                      }), (0, n.jsx)(r.FormText, {
                        type: r.FormTextTypes.DESCRIPTION,
                        className: f.description,
                        children: M.Z.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_DESCRIPTION
                      }), (0, n.jsx)("div", {
                        className: f.reasonToJoin,
                        children: (0, n.jsx)(O.Z, {
                          reasonMinLength: 10,
                          reasonMaxLength: 128,
                          guildId: t.id,
                          reasons: e
                        })
                      }), (null == W ? void 0 : W.reasons_to_join) != null ? (0, n.jsx)(r.Text, {
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: W.reasons_to_join
                      }) : null]
                    })
                  })(), (0, n.jsx)(r.FormDivider, {
                    className: f.divider
                  }), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(r.FormSection, {
                      children: [(0, n.jsx)(r.FormTitle, {
                        className: f.formTitle,
                        children: M.Z.Messages.DISCOVERY_LANDING_PAGE_ABOUT_TITLE
                      }), (0, n.jsx)(r.FormText, {
                        className: f.description,
                        type: r.FormTextTypes.DESCRIPTION,
                        children: M.Z.Messages.DISCOVERY_LANDING_PAGE_ABOUT_DESCRIPTION
                      }), (0, n.jsx)(r.TextArea, {
                        showCharacterCount: !0,
                        className: f.textArea,
                        value: U.about,
                        placeholder: M.Z.Messages.DISCOVERY_LANDING_PAGE_ABOUT_HINT,
                        onChange: Q,
                        minLength: 300,
                        maxLength: 2400,
                        disabled: !j,
                        defaultDirty: (null === (e = U.about) || void 0 === e ? void 0 : e.length) > 0
                      }, "text-area-".concat(Z))]
                    }), (null == W ? void 0 : W.about) != null ? (0, n.jsx)(r.Text, {
                      color: "text-danger",
                      variant: "text-sm/normal",
                      children: W.about
                    }) : null]
                  }), (0, n.jsx)(r.FormDivider, {
                    className: f.divider
                  }), (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)(r.FormSection, {
                      children: [(0, n.jsx)(r.FormTitle, {
                        className: f.formTitle,
                        children: M.Z.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_TITLE
                      }), (0, n.jsx)(r.FormText, {
                        className: f.description,
                        type: r.FormTextTypes.DESCRIPTION,
                        children: M.Z.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_DESCRIPTION
                      }), U.socialLinks.map((e, s) => (0, n.jsxs)("div", {
                        className: f.socialLinksContainer,
                        onMouseOver: () => er(s, !0),
                        onFocus: () => er(s, !0),
                        onMouseOut: () => er(s, !1),
                        onBlur: () => er(s, !1),
                        children: [(0, n.jsx)(r.SingleSelect, {
                          className: U.isPublished ? f.socialLinksDropdownMax : f.socialLinksDropdownMin,
                          options: V(H[s]),
                          placeholder: M.Z.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_DROPDOWN_PLACEHOLDER,
                          value: H[s],
                          onChange: e => ee(e, s),
                          isDisabled: !j
                        }, "dropdown-" + s), (0, n.jsx)(r.TextInput, {
                          value: e,
                          className: U.isPublished ? f.socialLinksMax : f.socialLinksMin,
                          onChange: e => es(e, s),
                          placeholder: M.Z.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_HINT,
                          maxLength: 150,
                          disabled: !j
                        }, "link-" + s), P[s] ? (0, n.jsx)(r.CircleCheckIcon, {
                          size: "custom",
                          className: U.isPublished ? f.validationButtonMax : f.validationButtonMin,
                          color: a.Z.unsafe_rawColors.GREEN_230.css,
                          width: 20,
                          height: 20
                        }, "validation-passed-" + s) : (0, n.jsx)(r.CircleXIcon, {
                          size: "custom",
                          className: U.isPublished ? f.validationButtonMax : f.validationButtonMin,
                          color: a.Z.unsafe_rawColors.RED_400.css,
                          width: 20,
                          height: 20
                        }, "validation-failed-" + s), j && (0, n.jsx)(o.Z, {
                          className: F[s] ? U.isPublished ? f.deleteButtonMax : f.deleteButtonMin : U.isPublished ? f.deleteButtonHiddenMax : f.deleteButtonHiddenMin,
                          onClick: () => et(s)
                        }, "delete-button-" + s)]
                      }, "social-container-" + s)), (null == W ? void 0 : W.social_links) != null ? (0, n.jsx)(r.Text, {
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: W.social_links
                      }) : null, (0, n.jsx)(r.Button, {
                        size: r.Button.Sizes.SMALL,
                        color: r.Button.Colors.PRIMARY,
                        onClick: $,
                        disabled: !j || U.socialLinks.length >= 9,
                        children: M.Z.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_BUTTON_ADD_ANOTHER
                      })]
                    })
                  }), U.isPublished && (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(r.FormDivider, {
                      className: f.divider
                    }), (0, n.jsxs)(r.FormSection, {
                      children: [(0, n.jsx)(r.FormTitle, {
                        className: f.formTitle,
                        children: M.Z.Messages.DISCOVERY_LANDING_PAGE_DISABLE_TITLE
                      }), (0, n.jsx)(r.FormText, {
                        className: f.description,
                        type: r.FormTextTypes.DESCRIPTION,
                        children: M.Z.Messages.DISCOVERY_LANDING_PAGE_DISABLE_DESCRIPTION
                      }), (0, n.jsx)(r.Button, {
                        size: r.Button.Sizes.SMALL,
                        color: r.Button.Colors.RED,
                        onClick: () => J(!1),
                        disabled: !j,
                        children: M.Z.Messages.DISCOVERY_LANDING_PAGE_DISABLE_BUTTON
                      })]
                    })]
                  }), (null == W ? void 0 : W.is_published) != null ? (0, n.jsx)(r.Text, {
                    color: "text-danger",
                    variant: "text-sm/normal",
                    children: W.is_published
                  }) : null]
                }), !U.isPublished && (0, n.jsx)("div", {
                  className: f.checklist,
                  children: (0, n.jsx)(S.Z, {
                    title: M.Z.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_TITLE,
                    children: el,
                    buttonLabel: M.Z.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_PUBLISH,
                    buttonCallback: () => J(!0),
                    disabled: !j || !B
                  })
                })]
              })
            })
          })
        })
      })
    })
  };
s.Z = () => null == (0, l.e7)([R.Z], () => R.Z.getGuild()) ? null : (0, n.jsx)(j, {})
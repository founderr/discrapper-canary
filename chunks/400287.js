t.d(s, {
  Z: function() {
    return N
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  a = t.n(i),
  l = t(481060),
  r = t(100527),
  o = t(906732),
  c = t(454585),
  E = t(921801),
  d = t(626135),
  _ = t(695346),
  T = t(726985),
  S = t(981631),
  u = t(689938),
  I = t(331651);

function N() {
  let e = _.up.useSetting(),
    s = _.fq.useSetting(),
    t = _.R$.useSetting(),
    i = _.cC.useSetting(),
    N = _.vF.useSetting(),
    A = _.H1.useSetting(),
    C = _.ev.useSetting(),
    O = _.x4.useSetting(),
    m = _.RS.useSetting(),
    h = _.NA.useSetting(),
    g = _.nc.useSetting(),
    {
      analyticsLocations: R
    } = (0, o.ZP)(r.Z.TEXT_AND_IMAGES);
  return (0, n.jsxs)(l.FormSection, {
    tag: l.FormTitleTags.H1,
    title: u.Z.Messages.CHAT,
    children: [(0, n.jsxs)(E.F, {
      setting: T.s6.CHAT_INLINE_MEDIA,
      children: [(0, n.jsx)(l.FormTitle, {
        className: I.marginBottom8,
        children: u.Z.Messages.INLINE_MEDIA_LABEL
      }), (0, n.jsx)(E.F, {
        setting: T.s6.CHAT_INLINE_MEDIA_LINKS,
        children: (0, n.jsx)(l.FormSwitch, {
          className: a()(I.marginTop8, I.marginBottom20),
          value: m,
          onChange: _.RS.updateSetting,
          children: u.Z.Messages.INLINE_EMBED_MEDIA
        })
      }), (0, n.jsx)(E.F, {
        setting: T.s6.CHAT_INLINE_MEDIA_UPLOADS,
        children: (0, n.jsx)(l.FormSwitch, {
          className: a()(I.marginTop8, I.marginBottom20),
          value: O,
          note: u.Z.Messages.INLINE_ATTACHMENT_MEDIA_HELP.format({
            maxSize: 10
          }),
          onChange: _.x4.updateSetting,
          children: u.Z.Messages.INLINE_ATTACHMENT_MEDIA
        })
      }), (0, n.jsx)(E.F, {
        setting: T.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
        children: (0, n.jsx)(l.FormSwitch, {
          className: a()(I.marginTop8, I.marginBottom40),
          value: A,
          note: u.Z.Messages.IMAGE_DESCRIPTION_HELP,
          onChange: _.H1.updateSetting,
          children: u.Z.Messages.USER_SETTINGS_WITH_IMAGE_DESCRIPTIONS
        })
      })]
    }), (0, n.jsxs)(E.F, {
      setting: T.s6.CHAT_EMBEDS,
      children: [(0, n.jsx)(l.FormTitle, {
        className: I.marginBottom8,
        children: u.Z.Messages.RENDER_EMBEDS_LABEL
      }), (0, n.jsx)(E.F, {
        setting: T.s6.CHAT_EMBEDS_LINK_PREVIEWS,
        children: (0, n.jsx)(l.FormSwitch, {
          className: a()(I.marginTop8, I.marginBottom40),
          value: h,
          onChange: _.NA.updateSetting,
          children: u.Z.Messages.RENDER_EMBEDS
        })
      })]
    }), (0, n.jsxs)(E.F, {
      setting: T.s6.CHAT_EMOJI,
      children: [(0, n.jsx)(l.FormTitle, {
        className: I.marginBottom8,
        children: u.Z.Messages.EMOJI
      }), (0, n.jsx)(E.F, {
        setting: T.s6.CHAT_EMOJI_REACTIONS,
        children: (0, n.jsx)(l.FormSwitch, {
          className: a()(I.marginTop8, I.marginBottom20),
          value: g,
          onChange: _.nc.updateSetting,
          children: u.Z.Messages.RENDER_REACTIONS
        })
      }), (0, n.jsx)(E.F, {
        setting: T.s6.CHAT_EMOJI_EMOTICONS,
        children: (0, n.jsx)(l.FormSwitch, {
          className: I.marginBottom40,
          value: C,
          note: c.Z.parse(u.Z.Messages.CONVERT_EMOTICONS_HELP),
          onChange: _.ev.updateSetting,
          children: u.Z.Messages.CONVERT_EMOTICONS
        })
      })]
    }), (0, n.jsx)(E.F, {
      setting: T.s6.CHAT_STICKERS,
      children: (0, n.jsxs)(l.FormSection, {
        className: I.marginBottom8,
        children: [(0, n.jsx)(l.FormTitle, {
          className: I.marginBottom8,
          children: u.Z.Messages.STICKERS_AUTO_PLAY_HEADING
        }), (0, n.jsx)(E.F, {
          setting: T.s6.CHAT_STICKERS_SUGGESTIONS,
          children: (0, n.jsx)(l.FormSwitch, {
            className: a()(I.marginTop8, I.marginBottom20),
            value: e,
            note: u.Z.Messages.AUTO_SUGGEST_STICKERS_DESCRIPTION,
            onChange: s => {
              d.default.track(S.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                enabled: !e,
                location: {
                  section: S.jXE.SETTINGS_TEXT_AND_IMAGES
                },
                location_stack: R
              }), _.up.updateSetting(!e)
            },
            children: u.Z.Messages.AUTO_SUGGEST_STICKERS
          })
        }), (0, n.jsx)(E.F, {
          setting: T.s6.CHAT_STICKERS_AUTOCOMPLETE,
          children: (0, n.jsx)(l.FormSwitch, {
            className: I.marginBottom40,
            value: s,
            note: u.Z.Messages.INCLUDE_STICKER_RESULTS_IN_AUTOCOMPLETE,
            onChange: e => {
              d.default.track(S.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: {
                  section: S.jXE.SETTINGS_TEXT_AND_IMAGES
                },
                location_stack: R
              }), _.fq.updateSetting(e)
            },
            children: u.Z.Messages.STICKERS_IN_AUTOCOMPLETE
          })
        })]
      })
    }), (0, n.jsx)(E.F, {
      setting: T.s6.CHAT_TEXT_BOX,
      children: (0, n.jsxs)(l.FormSection, {
        className: I.marginBottom8,
        children: [(0, n.jsx)(l.FormTitle, {
          className: I.marginBottom8,
          children: u.Z.Messages.FORM_LABEL_USE_RICH_CHAT_BOX
        }), (0, n.jsx)(E.F, {
          setting: T.s6.CHAT_TEXT_BOX_PREVIEW,
          children: (0, n.jsx)(l.FormSwitch, {
            className: a()(I.marginTop8, I.marginBottom40),
            value: t,
            onChange: e => {
              d.default.track(S.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: {
                  section: S.jXE.SETTINGS_TEXT_AND_IMAGES
                }
              }), _.R$.updateSetting(e)
            },
            children: u.Z.Messages.PREVIEW_MARKDOWN_DESCRIPTION
          })
        })]
      })
    }), (0, n.jsx)(E.F, {
      setting: T.s6.CHAT_THREADS,
      children: (0, n.jsxs)(l.FormSection, {
        className: I.marginBottom40,
        children: [(0, n.jsx)(l.FormTitle, {
          className: I.marginBottom8,
          children: u.Z.Messages.THREADS
        }), (0, n.jsx)(E.F, {
          setting: T.s6.CHAT_THREADS_SPLIT_VIEW,
          children: (0, n.jsx)(l.FormSwitch, {
            className: I.marginTop8,
            value: N,
            onChange: _.vF.updateSetting,
            children: u.Z.Messages.USE_THREADS_SIDEBAR_DESCRIPTION
          })
        })]
      })
    }), (0, n.jsx)(E.F, {
      setting: T.s6.CHAT_SPOILERS,
      children: (0, n.jsxs)(l.FormItem, {
        title: u.Z.Messages.SHOW_SPOILER_CONTENT,
        children: [(0, n.jsx)(l.FormText, {
          type: l.FormText.Types.DESCRIPTION,
          className: I.marginBottom8,
          children: u.Z.Messages.SHOW_SPOILER_CONTENT_HELP
        }), (0, n.jsx)(l.RadioGroup, {
          options: [{
            name: u.Z.Messages.SHOW_SPOILER_ON_CLICK,
            value: S.A2N.ON_CLICK
          }, {
            name: u.Z.Messages.SHOW_SPOILER_ON_SERVERS_I_MOD,
            value: S.A2N.IF_MODERATOR
          }, {
            name: u.Z.Messages.SHOW_SPOILER_ALWAYS,
            value: S.A2N.ALWAYS
          }],
          onChange: e => _.cC.updateSetting(e.value),
          value: i
        })]
      })
    })]
  })
}
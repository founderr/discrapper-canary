"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
});
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  i = s("481060"),
  r = s("100527"),
  o = s("906732"),
  d = s("454585"),
  u = s("921801"),
  c = s("626135"),
  S = s("695346"),
  E = s("726985"),
  T = s("981631"),
  _ = s("689938"),
  I = s("611273");

function N() {
  let e = S.ExpressionSuggestionsEnabled.useSetting(),
    t = S.IncludeStickersInAutocomplete.useSetting(),
    s = S.UseRichChatInput.useSetting(),
    n = S.RenderSpoilers.useSetting(),
    N = S.UseThreadSidebar.useSetting(),
    g = S.ViewImageDescriptions.useSetting(),
    f = S.ConvertEmoticons.useSetting(),
    m = S.InlineAttachmentMedia.useSetting(),
    C = S.InlineEmbedMedia.useSetting(),
    A = S.RenderEmbeds.useSetting(),
    O = S.RenderReactions.useSetting(),
    {
      analyticsLocations: h
    } = (0, o.default)(r.default.TEXT_AND_IMAGES);
  return (0, a.jsxs)(i.FormSection, {
    tag: i.FormTitleTags.H1,
    title: _.default.Messages.CHAT,
    children: [(0, a.jsxs)(u.Subsetting, {
      setting: E.WebSetting.CHAT_INLINE_MEDIA,
      children: [(0, a.jsx)(i.FormTitle, {
        className: I.marginBottom8,
        children: _.default.Messages.INLINE_MEDIA_LABEL
      }), (0, a.jsx)(u.Subsetting, {
        setting: E.WebSetting.CHAT_INLINE_MEDIA_LINKS,
        children: (0, a.jsx)(i.FormSwitch, {
          className: l()(I.marginTop8, I.marginBottom20),
          value: C,
          onChange: S.InlineEmbedMedia.updateSetting,
          children: _.default.Messages.INLINE_EMBED_MEDIA
        })
      }), (0, a.jsx)(u.Subsetting, {
        setting: E.WebSetting.CHAT_INLINE_MEDIA_UPLOADS,
        children: (0, a.jsx)(i.FormSwitch, {
          className: l()(I.marginTop8, I.marginBottom20),
          value: m,
          note: _.default.Messages.INLINE_ATTACHMENT_MEDIA_HELP.format({
            maxSize: 10
          }),
          onChange: S.InlineAttachmentMedia.updateSetting,
          children: _.default.Messages.INLINE_ATTACHMENT_MEDIA
        })
      }), (0, a.jsx)(u.Subsetting, {
        setting: E.WebSetting.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
        children: (0, a.jsx)(i.FormSwitch, {
          className: l()(I.marginTop8, I.marginBottom40),
          value: g,
          note: _.default.Messages.IMAGE_DESCRIPTION_HELP,
          onChange: S.ViewImageDescriptions.updateSetting,
          children: _.default.Messages.USER_SETTINGS_WITH_IMAGE_DESCRIPTIONS
        })
      })]
    }), (0, a.jsxs)(u.Subsetting, {
      setting: E.WebSetting.CHAT_EMBEDS,
      children: [(0, a.jsx)(i.FormTitle, {
        className: I.marginBottom8,
        children: _.default.Messages.RENDER_EMBEDS_LABEL
      }), (0, a.jsx)(u.Subsetting, {
        setting: E.WebSetting.CHAT_EMBEDS_LINK_PREVIEWS,
        children: (0, a.jsx)(i.FormSwitch, {
          className: l()(I.marginTop8, I.marginBottom40),
          value: A,
          onChange: S.RenderEmbeds.updateSetting,
          children: _.default.Messages.RENDER_EMBEDS
        })
      })]
    }), (0, a.jsxs)(u.Subsetting, {
      setting: E.WebSetting.CHAT_EMOJI,
      children: [(0, a.jsx)(i.FormTitle, {
        className: I.marginBottom8,
        children: _.default.Messages.EMOJI
      }), (0, a.jsx)(u.Subsetting, {
        setting: E.WebSetting.CHAT_EMOJI_REACTIONS,
        children: (0, a.jsx)(i.FormSwitch, {
          className: l()(I.marginTop8, I.marginBottom20),
          value: O,
          onChange: S.RenderReactions.updateSetting,
          children: _.default.Messages.RENDER_REACTIONS
        })
      }), (0, a.jsx)(u.Subsetting, {
        setting: E.WebSetting.CHAT_EMOJI_EMOTICONS,
        children: (0, a.jsx)(i.FormSwitch, {
          className: I.marginBottom40,
          value: f,
          note: d.default.parse(_.default.Messages.CONVERT_EMOTICONS_HELP),
          onChange: S.ConvertEmoticons.updateSetting,
          children: _.default.Messages.CONVERT_EMOTICONS
        })
      })]
    }), (0, a.jsx)(u.Subsetting, {
      setting: E.WebSetting.CHAT_STICKERS,
      children: (0, a.jsxs)(i.FormSection, {
        className: I.marginBottom8,
        children: [(0, a.jsx)(i.FormTitle, {
          className: I.marginBottom8,
          children: _.default.Messages.STICKERS_AUTO_PLAY_HEADING
        }), (0, a.jsx)(u.Subsetting, {
          setting: E.WebSetting.CHAT_STICKERS_SUGGESTIONS,
          children: (0, a.jsx)(i.FormSwitch, {
            className: l()(I.marginTop8, I.marginBottom20),
            value: e,
            note: _.default.Messages.AUTO_SUGGEST_STICKERS_DESCRIPTION,
            onChange: t => {
              c.default.track(T.AnalyticEvents.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                enabled: !e,
                location: {
                  section: T.AnalyticsSections.SETTINGS_TEXT_AND_IMAGES
                },
                location_stack: h
              }), S.ExpressionSuggestionsEnabled.updateSetting(!e)
            },
            children: _.default.Messages.AUTO_SUGGEST_STICKERS
          })
        }), (0, a.jsx)(u.Subsetting, {
          setting: E.WebSetting.CHAT_STICKERS_AUTOCOMPLETE,
          children: (0, a.jsx)(i.FormSwitch, {
            className: I.marginBottom40,
            value: t,
            note: _.default.Messages.INCLUDE_STICKER_RESULTS_IN_AUTOCOMPLETE,
            onChange: e => {
              c.default.track(T.AnalyticEvents.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: {
                  section: T.AnalyticsSections.SETTINGS_TEXT_AND_IMAGES
                },
                location_stack: h
              }), S.IncludeStickersInAutocomplete.updateSetting(e)
            },
            children: _.default.Messages.STICKERS_IN_AUTOCOMPLETE
          })
        })]
      })
    }), (0, a.jsx)(u.Subsetting, {
      setting: E.WebSetting.CHAT_TEXT_BOX,
      children: (0, a.jsxs)(i.FormSection, {
        className: I.marginBottom8,
        children: [(0, a.jsx)(i.FormTitle, {
          className: I.marginBottom8,
          children: _.default.Messages.FORM_LABEL_USE_RICH_CHAT_BOX
        }), (0, a.jsx)(u.Subsetting, {
          setting: E.WebSetting.CHAT_TEXT_BOX_PREVIEW,
          children: (0, a.jsx)(i.FormSwitch, {
            className: l()(I.marginTop8, I.marginBottom40),
            value: s,
            onChange: e => {
              c.default.track(T.AnalyticEvents.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: {
                  section: T.AnalyticsSections.SETTINGS_TEXT_AND_IMAGES
                }
              }), S.UseRichChatInput.updateSetting(e)
            },
            children: _.default.Messages.PREVIEW_MARKDOWN_DESCRIPTION
          })
        })]
      })
    }), (0, a.jsx)(u.Subsetting, {
      setting: E.WebSetting.CHAT_THREADS,
      children: (0, a.jsxs)(i.FormSection, {
        className: I.marginBottom40,
        children: [(0, a.jsx)(i.FormTitle, {
          className: I.marginBottom8,
          children: _.default.Messages.THREADS
        }), (0, a.jsx)(u.Subsetting, {
          setting: E.WebSetting.CHAT_THREADS_SPLIT_VIEW,
          children: (0, a.jsx)(i.FormSwitch, {
            className: I.marginTop8,
            value: N,
            onChange: S.UseThreadSidebar.updateSetting,
            children: _.default.Messages.USE_THREADS_SIDEBAR_DESCRIPTION
          })
        })]
      })
    }), (0, a.jsx)(u.Subsetting, {
      setting: E.WebSetting.CHAT_SPOILERS,
      children: (0, a.jsxs)(i.FormItem, {
        title: _.default.Messages.SHOW_SPOILER_CONTENT,
        children: [(0, a.jsx)(i.FormText, {
          type: i.FormText.Types.DESCRIPTION,
          className: I.marginBottom8,
          children: _.default.Messages.SHOW_SPOILER_CONTENT_HELP
        }), (0, a.jsx)(i.RadioGroup, {
          options: [{
            name: _.default.Messages.SHOW_SPOILER_ON_CLICK,
            value: T.SpoilerRenderSetting.ON_CLICK
          }, {
            name: _.default.Messages.SHOW_SPOILER_ON_SERVERS_I_MOD,
            value: T.SpoilerRenderSetting.IF_MODERATOR
          }, {
            name: _.default.Messages.SHOW_SPOILER_ALWAYS,
            value: T.SpoilerRenderSetting.ALWAYS
          }],
          onChange: e => S.RenderSpoilers.updateSetting(e.value),
          value: n
        })]
      })
    })]
  })
}